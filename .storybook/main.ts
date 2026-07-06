import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  stories: [
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
  addons: [
    '@storybook/addon-themes',
    '@storybook/addon-docs',
  ],
  previewHead: (head) => `
<script src="/synthetic-shadow-browser.js"></script>
${head}`,
  async viteFinal(config) {
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
