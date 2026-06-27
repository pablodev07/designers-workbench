import type { Decorator, GlobalTypes } from '@storybook/web-components';
import { html } from 'lit';

const themeFiles: Record<string, string[]> = {
  sldsplus: ['/css/slds-font-tokens.css', '/slds/salesforce-lightning-design-system.min.css', '/css/lwc-base-fixes.css'],
  ds2: ['/css/ds2-cosmos.css', '/css/lwc-base-fixes.css'],
  wes: ['/css/slds-font-tokens.css', '/css/wes-for-ec-offline.css', '/css/wes-overrides.css', '/css/lwc-base-fixes.css'],
};

const themeWrapperClasses: Record<string, string> = {
  wes: 'wes-page wes-style wes-theme wes-npm',
};

export const sldsTheming: Decorator = (Story, context) => {
  const selectedTheme = (context.globals?.theme as string) || 'ds2';

  setTimeout(() => {
    const prefix = 'dynamic-theme-css';
    const paths = themeFiles[selectedTheme] || [];

    const existing = document.querySelectorAll(`link[id^="${prefix}"]`);
    existing.forEach((el) => el.remove());

    paths.forEach((href, i) => {
      const link = document.createElement('link');
      link.id = `${prefix}-${i}`;
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    });
  }, 0);

  const wrapperClass = themeWrapperClasses[selectedTheme];
  if (wrapperClass) {
    return html`<div class="${wrapperClass}">${Story()}</div>`;
  }
  return Story();
};

export const themeGlobalTypes: GlobalTypes = {
  theme: {
    description: 'Global design system theme',
    defaultValue: 'ds2',
    toolbar: {
      title: 'Theme',
      icon: 'paintbrush',
      dynamicTitle: true,
      items: [
        { value: 'ds2', title: 'DS2 Cosmos' },
        { value: 'sldsplus', title: 'SLDS Plus' },
        { value: 'wes', title: 'WES for EC' },
      ],
    },
  },
};
