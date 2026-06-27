---
description: Rules for creating LWC components in this project
---

# Component Creation Rules

When asked to create ANY UI component (button, card, input, modal, etc.):

1. **ALWAYS use Lightning Base Components first.** Check if a `<lightning-*>` base component exists for the use case before writing any markup.

2. **Style with SLDS hooks only.** Use `--slds-c-*` styling hooks for visual customization. Never write custom CSS classes with hard-coded colors, spacing, or typography.

3. **Never use raw HTML elements** (e.g. `<button>`, `<input>`, `<div class="card">`) when a Lightning Base Component exists.

4. **Consult the rules folder** at `.claude/instructions/rules/` before creating any component.

## Quick Reference: Common Base Components

| Use case | Component |
|----------|-----------|
| Button | `<lightning-button>` |
| Card | `<lightning-card>` |
| Input | `<lightning-input>` |
| Combobox | `<lightning-combobox>` |
| Data table | `<lightning-datatable>` |
| Modal | `<lightning-modal>` |
| Icon | `<lightning-icon>` |
| Badge | `<lightning-badge>` |

## Customizing Base Component Appearance

### Option A: Use a built-in variant (preferred)

```html
<lightning-button label="Approve" variant="success"></lightning-button>
<lightning-button label="Delete" variant="destructive"></lightning-button>
```

Available button variants: `base`, `neutral`, `brand`, `brand-outline`, `destructive`, `destructive-text`, `success`, `inverse`.

### Option B: SLDS styling hooks at `:host`

```css
:host {
    --slds-c-button-brand-color-background: var(--slds-g-color-palette-green-50);
    --slds-c-button-brand-color-background-hover: var(--slds-g-color-palette-green-40);
}
```

### Priority Order for Styling Decisions

1. Check if a **design variation/variant** exists
2. Try **SLDS utility classes** for spacing, alignment, typography
3. Use **SLDS styling hooks** (`--slds-c-*` at `:host`) as last resort

## Component Creation Procedure

### 1. Determine naming

| Concept | Value |
|---------|-------|
| User-facing name | My Button |
| Folder / class name (camelCase) | `myButton` |
| Tag name (kebab-case with `c-` prefix) | `c-my-button` |
| Storybook title (human-readable) | `Components/My Button` |

### 2. Create component files

Create the folder `src/modules/c/<camelCaseName>/` with these files:

**`<camelCaseName>.js`**
```js
import { LightningElement, api } from "lwc";

export default class MyButton extends LightningElement {
  @api label = "My Button";
  @api variant = "brand";
}
```

**`<camelCaseName>.html`**
```html
<template>
  <lightning-button label={label} variant={variant}></lightning-button>
</template>
```

**`<camelCaseName>.css`**
```css
:host {
  display: inline-block;
}
```

**`<camelCaseName>.stories.js`**

**IMPORTANT:** Do NOT include `tags: ['autodocs']` — the MDX file provides the docs page.

```js
export default {
  title: 'Components/My Button',
  component: 'c-my-button',
  argTypes: {
    label: { control: 'text', description: 'Button label' },
    variant: {
      control: 'select',
      options: ['base', 'neutral', 'brand', 'destructive', 'success', 'inverse'],
      description: 'Button variant',
    }
  }
};

export const Default = {
  args: { label: 'My Button', variant: 'brand' },
  render: (args) => {
    const element = window.__lwcCreateElement('c-my-button');
    element.label = args.label;
    element.variant = args.variant;
    return element;
  }
};
```

**`<camelCaseName>.mdx`** (Documentation — ALWAYS created)

**IMPORTANT: Tables in MDX must use HTML `<table>` markup, NOT markdown table syntax.**

```mdx
import { Meta, Canvas, Controls } from '@storybook/addon-docs/blocks';
import * as Stories from './<camelCaseName>.stories';

<Meta of={Stories} />

# My Button

A custom button component that wraps `<lightning-button>`.

## Properties

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>label</code></td>
      <td><code>String</code></td>
      <td><code>"My Button"</code></td>
      <td>Text displayed on the button</td>
    </tr>
  </tbody>
</table>

## Usage

```html
<c-my-button label="Save" variant="brand"></c-my-button>
```

<Canvas of={Stories.Default} />

## Controls

<Controls />
```

### 3. Register in `.storybook/components.js`

Add the import (alphabetical order) and registry entry:

```js
import MyButton from 'c/myButton';

// In the registry object:
'c-my-button': MyButton,
```

### 4. Verify

Run `npm run storybook` and confirm the component appears in the sidebar.

### Naming Summary

| Field | Format | Example |
|-------|--------|---------|
| Story `title` | Human-readable | `Components/My Button` |
| Story `component` | Tag name (kebab-case) | `c-my-button` |
| `__lwcCreateElement` arg | Tag name (kebab-case) | `c-my-button` |
| Registry key | Tag name (kebab-case) | `'c-my-button': MyButton` |
| Folder name | camelCase | `myButton` |
| Class name | PascalCase | `MyButton` |
