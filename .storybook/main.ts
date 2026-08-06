import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  stories: [
    '../docs/**/*.mdx',
    '../src/modules/c/**/*.stories.@(js|jsx)',
    '../src/modules/c/**/*.mdx',
  ],
  staticDirs: [
    '../public',
    {
      from: '../node_modules/@salesforce-ux/design-system/assets/icons',
      to: '/assets/icons',
    },
    {
      from: '../node_modules/@salesforce-ux/design-system/assets/styles',
      to: '/slds',
    },
    {
      from: '../node_modules/@salesforce/wes-for-ec/dist',
      to: '/wes-for-ec',
    },
    {
      from: '../node_modules/@salesforce-ux/design-system-2/dist/css/bundled',
      to: '/ds2',
    },
  ],
  addons: ['@storybook/addon-themes', '@storybook/addon-docs'],
  previewHead: (head) => `
<script src="./synthetic-shadow-browser.js"></script>
<link rel="stylesheet" href="./css/btd-docs.css" />
${head}`,
  async viteFinal(config) {
    if (process.env.STORYBOOK_BASE) {
      config.base = process.env.STORYBOOK_BASE;
    }

    // vite-plugin-lwc's lwc:alias appends ?import to all non-index .html files during
    // build, and lwc:vite-plugin compiles all .html as LWC templates.
    // Both break Storybook's iframe.html. Patch the alias regex and the transform.
    const plugins = (config.plugins as any[])?.flat() ?? [];
    for (const p of plugins) {
      if (!p) continue;
      if (p.name === 'lwc:alias') {
        p.config = () => ({
          resolve: {
            alias: [{
              find: /^(?!.*index)(?!.*iframe)(.*)\.html$/,
              replacement: '$1.html?import',
            }],
          },
        });
      }
      if (p.name === 'lwc:patch-plugins') {
        // Replace the blanket vite:css disable with a conditional restore that
        // preserves CSS processing for Storybook files but skips LWC modules.
        // Must preserve the { filter, handler } structure for Vite 7's plugin container.
        p.configResolved = (resolvedConfig: any) => {
          for (const target of ['vite:css', 'vite:css-post']) {
            const plugin = resolvedConfig.plugins.find((pl: any) => pl.name === target);
            if (!plugin?.transform) continue;
            const origFilter = plugin.transform.filter;
            const origHandler = plugin.transform.handler || plugin.transform;
            if (typeof origHandler !== 'function') continue;
            const wrappedHandler = function (this: any, code: string, id: string, ...args: any[]) {
              if (
                id.includes('lightning-base-components') ||
                id.includes('src/modules/') ||
                id.includes('@lwc/') ||
                id.includes('?import') ||
                id.includes('?scoped')
              ) return;
              return origHandler.call(this, code, id, ...args);
            };
            plugin.transform = origFilter
              ? { filter: origFilter, handler: wrappedHandler }
              : wrappedHandler;
          }
        };
      }
      if (p.name === 'lwc:vite-plugin') {
        const origTransform = p.transform;
        const origLoad = p.load;
        p.transform = function (code: string, id: string, options: any) {
          if (id.includes('iframe.html')) return;
          return origTransform?.call(this, code, id, options);
        };
        p.load = function (id: string, options: any) {
          if (id.includes('iframe.html')) return;
          return origLoad?.call(this, id, options);
        };
      }
    }

    config.optimizeDeps = config.optimizeDeps || {};
    config.optimizeDeps.exclude = [
      ...(config.optimizeDeps.exclude || []),
      '@lwc/synthetic-shadow',
      'lwc',
    ];
    return config;
  },
};

export default config;
