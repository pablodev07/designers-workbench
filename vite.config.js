import { defineConfig } from 'vite';
import path from 'path';
import { existsSync } from 'fs';
import lwc from 'vite-plugin-lwc';
import {
  resolveIconTemplatesPlugin,
  iconTemplateExcludeDirs,
  iconTemplateAliases,
} from './vite-plugins/icon-templates.js';

const LBC_UNDER_NODE_MODULES = /node_modules[/\\]lightning-base-components[/\\]/;
const LWC_COMPILER_DIAGNOSTIC = /@lwc\/rollup-plugin: LWC\d{4}:/;
const LWC_SOURCEMAP_NOISE = /Failed to load source map for.*@lwc\//;

function isLbcNoise(msg) {
  const str = String(msg);
  return LBC_UNDER_NODE_MODULES.test(str) || LWC_COMPILER_DIAGNOSTIC.test(str) || LWC_SOURCEMAP_NOISE.test(str);
}

function suppressLbcWarningsPlugin() {
  return {
    name: 'suppress-lbc-lwc-logger-noise',
    configResolved(config) {
      const { logger } = config;
      const origWarn = logger.warn.bind(logger);
      logger.warn = (msg, options) => {
        if (isLbcNoise(msg)) return;
        origWarn(msg, options);
      };
      const origWarnOnce = logger.warnOnce.bind(logger);
      logger.warnOnce = (msg, options) => {
        if (isLbcNoise(msg)) return;
        origWarnOnce(msg, options);
      };
    },
  };
}

// Windows path.sep bug in @lwc/rollup-plugin@9.3.4: the LWC compiler injects a
// twin `./<name>.html` template import into every default-exporting module, and
// an internal shim is supposed to resolve that import to an empty template when
// the file doesn't exist (isImplicitHTMLImport, rollup-plugin index.js:29). But
// its gate compares path.dirname(importer) === path.dirname(importee); on Windows
// importee comes back with backslashes (via path.resolve) while Vite ids use
// forward slashes, so the gate never matches, the shim never engages, and Vite
// dies with "Failed to load url .../<name>.html". On macOS both sides use '/' so
// it works silently. This restores that behavior portably: any same-name .html
// twin that isn't on disk resolves to EMPTY_IMPLICIT_HTML_CONTENT ('export
// default void 0', rollup-plugin index.js:20). Real component templates exist on
// disk, so they fall through to the LWC compiler untouched.
function lwcImplicitHtmlShimPlugin() {
  const EMPTY_HTML_ID = '\0lwc-empty-html';
  const SCRIPT_EXT = ['.js', '.mjs', '.jsx', '.ts', '.mts', '.tsx'];
  return {
    name: 'lwc-implicit-html-shim',
    enforce: 'pre',
    resolveId(source, importer) {
      if (!importer) return null;
      const importee = source.replace(/[?#].*$/, '');
      if (path.extname(importee) !== '.html') return null;
      const importerFile = importer.replace(/[?#].*$/, '');
      const importerExt = path.extname(importerFile);
      if (!SCRIPT_EXT.includes(importerExt)) return null;
      // mirror isImplicitHTMLImport: only the same-name twin template
      if (path.basename(importerFile, importerExt) !== path.basename(importee, '.html')) return null;
      const resolved = path.resolve(path.dirname(importerFile), importee);
      if (existsSync(resolved)) return null; // real template → let LWC compile it
      return EMPTY_HTML_ID;
    },
    load(id) {
      if (id === EMPTY_HTML_ID) return 'export default void 0';
    },
  };
}

// Second half of the same Windows path.sep bug: @lwc/rollup-plugin derives a
// component's namespace/name — and therefore its custom-element tag (sel) — from
// `specifier?.split('/') ?? path.dirname(filename).split(path.sep).slice(-2)`
// (rollup-plugin index.js:215). When a module reaches the compiler WITHOUT a
// ?specifier= query (app entry, router, dynamic imports — anything not imported
// by bare LWC specifier), it falls back to splitting the filename by path.sep.
// Vite ids use forward slashes, so split('\\') on Windows returns the whole path
// as one chunk → namespace=<path>, name="" → sel="<path>-", which
// customElements.define() rejects and the whole app dies. Storybook dodged it
// because stories import components by bare specifier. Fix in userland (no
// node_modules patch): wrap the LWC transform and inject the ?specifier= the
// compiler expects for our own src/modules/<ns>/<name>/<name>.js components, so
// it always takes the correct, separator-agnostic branch.
function lwcSpecifierFixPlugin() {
  const COMPONENT_RE = /[\\/]src[\\/]modules[\\/]([^\\/?#]+)[\\/]([^\\/?#]+)[\\/]\2\.(?:js|ts)(?:$|[?#])/;
  return {
    name: 'lwc-specifier-fix',
    configResolved(resolved) {
      const p = resolved.plugins.find((pl) => pl.name === 'lwc:vite-plugin');
      if (!p?.transform) return;
      const origHandler = p.transform.handler || p.transform;
      if (typeof origHandler !== 'function') return;
      const wrapped = function (code, id, options) {
        if (!/[?&]specifier=/.test(id)) {
          const m = id.match(COMPONENT_RE);
          if (m) {
            id = `${id}${id.includes('?') ? '&' : '?'}specifier=${m[1]}/${m[2]}`;
          }
        }
        return origHandler.call(this, code, id, options);
      };
      p.transform = p.transform.filter
        ? { filter: p.transform.filter, handler: wrapped }
        : wrapped;
    },
  };
}

const gateShimPath = path.resolve('./src/build/shim/gate.js');

function salesforceShimsPlugin() {
  return {
    name: 'salesforce-shims',
    enforce: 'pre',
    resolveId(source) {
      if (source.startsWith('@salesforce/gate/')) {
        return gateShimPath;
      }
    },
  };
}

function restoreCssForNonLwcPlugin() {
  const saved = {};
  return [
    {
      name: 'save-css-transforms',
      enforce: 'pre',
      configResolved: {
        order: 'pre',
        handler(resolvedConfig) {
          for (const target of ['vite:css', 'vite:css-post']) {
            const plugin = resolvedConfig.plugins.find(p => p.name === target);
            if (!plugin?.transform) continue;
            saved[target] = {
              filter: plugin.transform.filter,
              handler: plugin.transform.handler || plugin.transform,
            };
          }
        },
      },
    },
    {
      name: 'restore-css-for-non-lwc',
      enforce: 'post',
      configResolved(resolvedConfig) {
        for (const target of ['vite:css', 'vite:css-post']) {
          const plugin = resolvedConfig.plugins.find(p => p.name === target);
          const orig = saved[target];
          if (!plugin || !orig?.handler) continue;
          const wrappedHandler = function (code, id, ...args) {
            if (
              id.includes('lightning-base-components') ||
              id.includes('src/modules/') ||
              id.includes('@lwc/') ||
              id.includes('?import') ||
              id.includes('?scoped')
            ) return;
            return orig.handler.call(this, code, id, ...args);
          };
          plugin.transform = orig.filter
            ? { filter: orig.filter, handler: wrappedHandler }
            : wrappedHandler;
        }
      },
    },
  ];
}

export default defineConfig({
  base: './',
  plugins: [
    lwcImplicitHtmlShimPlugin(),
    lwcSpecifierFixPlugin(),
    salesforceShimsPlugin(),
    suppressLbcWarningsPlugin(),
    restoreCssForNonLwcPlugin(),
    resolveIconTemplatesPlugin(),
    lwc({
      modules: [
        { dir: path.resolve('./src/modules') },
        { npm: 'lightning-base-components' },
      ],
      disableSyntheticShadowSupport: false,
      enableDynamicComponents: true,
      exclude: [
        path.resolve('./index.html'),
        /loading\.css/,
        path.resolve('./src/build/generated'),
        /(salesforce-lightning-design-system\.min\.css|slds2\.cosmos\.css)(\?.*)?$/,
        /\/styles\/global\.css(\?.*)?$/,
        /node_modules\/storybook\//,
        /node_modules\/@storybook\//,
        /node_modules\/lit/,
        /node_modules\/\.cache\//,
        // Third-party deps must never go through the LWC compiler; only
        // lightning-base-components is a real LWC module source under node_modules.
        /node_modules[/\\](?!lightning-base-components[/\\])/,
        /\.storybook\//,
        /\.mdx$/,
        /\.stories\.js$/,
        ...iconTemplateExcludeDirs,
      ],
    }),
  ],
  build: {
    rollupOptions: {
      onwarn(warning, defaultHandler) {
        const locFile = warning.loc?.file ?? '';
        const id = warning.id ?? '';
        const message = warning.message ?? '';
        if (
          isLbcNoise(locFile) ||
          isLbcNoise(id) ||
          isLbcNoise(message) ||
          (warning.plugin === 'rollup-plugin-lwc-compiler' && /^LWC\d{4}:/.test(message))
        ) return;
        defaultHandler(warning);
      },
    },
  },
  appType: 'spa',
  server: {
    port: 3000,
    open: false,
  },
  optimizeDeps: {
    exclude: [
      'lightning/modal',
      'lightning/toast',
      'lightning/toastContainer',
      'lightning/showToastEvent',
      'lightning/primitiveOverlay',
      'lightning/overlayUtils',
      'lightning/modalBase',
      'lightning/utilsPrivate',
    ],
  },
  resolve: {
    alias: {
      '@salesforce-ux/design-system': path.resolve('./node_modules/@salesforce-ux/design-system'),
      '@salesforce-ux/design-system-2': path.resolve('./node_modules/@salesforce-ux/design-system-2'),
      ...iconTemplateAliases,
    },
  },
});
