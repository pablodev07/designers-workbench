export default {
  title: 'Components/Button',
  component: 'c-button',
  argTypes: {
    label: { control: 'text', description: 'Button label text' },
    variant: {
      control: 'select',
      options: ['base', 'neutral', 'brand', 'brand-outline', 'destructive', 'destructive-text', 'success', 'inverse'],
      description: 'Visual style variant',
    },
    disabled: { control: 'boolean', description: 'Whether the button is disabled' },
    iconName: { control: 'text', description: 'Lightning icon name (e.g. utility:download)' },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Icon position relative to label',
    },
  },
};

export const Default = {
  args: { label: 'Button', variant: 'brand', disabled: false },
  render: (args) => {
    const element = window.__lwcCreateElement('c-button');
    element.label = args.label;
    element.variant = args.variant;
    element.disabled = args.disabled;
    if (args.iconName) element.iconName = args.iconName;
    if (args.iconPosition) element.iconPosition = args.iconPosition;
    return element;
  },
};

export const Success = {
  args: { label: 'Approve', variant: 'success', disabled: false },
  render: (args) => {
    const element = window.__lwcCreateElement('c-button');
    element.label = args.label;
    element.variant = args.variant;
    element.disabled = args.disabled;
    return element;
  },
};

export const Destructive = {
  args: { label: 'Delete', variant: 'destructive', disabled: false },
  render: (args) => {
    const element = window.__lwcCreateElement('c-button');
    element.label = args.label;
    element.variant = args.variant;
    element.disabled = args.disabled;
    return element;
  },
};

export const Disabled = {
  args: { label: 'Unavailable', variant: 'brand', disabled: true },
  render: (args) => {
    const element = window.__lwcCreateElement('c-button');
    element.label = args.label;
    element.variant = args.variant;
    element.disabled = args.disabled;
    return element;
  },
};
