import type { Preview } from '@storybook/web-components';
import '@lwc/synthetic-shadow';
import './components.js';
import { sldsTheming, themeGlobalTypes } from './sldsTheming.js';

if (typeof window !== 'undefined') {
  window.SLDS = window.SLDS || {};
  window.SLDS.iconSvgPath = '/assets/icons/';

  window.SDS = window.SDS || {};
  window.SDS.iconPath = '/assets/icons/';
  window.SDS.icons = window.SDS.icons || {};
  window.SDS.icons.basePath = '/assets/icons/';
}

const preview: Preview = {
  globalTypes: themeGlobalTypes,
  parameters: {
    docs: {
      source: { state: 'open' },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [sldsTheming],
};

export default preview;
