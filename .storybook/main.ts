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
  ],
  addons: [
    '@storybook/addon-themes',
    '@storybook/addon-docs',
  ],
};

export default config;
