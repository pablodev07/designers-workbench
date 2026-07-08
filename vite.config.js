import { defineConfig } from 'vite';
import path from 'path';
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

export default defineConfig({
  base: './',
  plugins: [
    salesforceShimsPlugin(),
    suppressLbcWarningsPlugin(),
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
