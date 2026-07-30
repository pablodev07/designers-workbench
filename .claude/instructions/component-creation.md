---
description: Rules for creating LWC components in this project
---

# Component Creation Rules

## Step Zero — Determine Scope (Component vs. Page)

**Before doing anything else**, determine whether the request is for:

- **A single component** (button, card, input, modal, etc.) → proceed to the rules below.
- **A full page or page-level composition** (e.g. "build an Account page", "create an Opportunity record view", "mock up a Case detail page") → you MUST read `.claude/instructions/slds-figma-mockups/guides/reference/page-blueprints.md` first and follow the blueprint for that object. This is non-negotiable.

### Page-Level Creation (Mandatory When Building Pages)

When the request involves a full Salesforce page (any object: Account, Opportunity, Quote, Case, Asset, or other):

1. **Read the blueprint** — Open `.claude/instructions/slds-figma-mockups/guides/reference/page-blueprints.md` and find the matching object.
2. **Follow the layout** — Use the documented column structure, tab order, sidebar card order, and chrome configuration. Do not invent layouts.
3. **Use the component selection cheatsheet** — Consult `.claude/instructions/slds-figma-mockups/guides/building/sizing-rules.md` § "Component selection cheatsheet" for which SLDS component maps to each UI need.
4. **Apply correct token values** — Spacing, radius, and color decisions must come from the reference guides (see "Design Token Reference" section below).
5. **Ask the user** — If the object is not in the blueprints, or if the user's request diverges from the default blueprint, ask before building. Present the blueprint defaults as a proposal.

**Objects with blueprints:** Account (2-col), Opportunity (2-col + Path), Quote (1-col + Docked Utility Bar), Case (2-col or 3-col), Asset (2-col + KPI strip). For unknown objects, default to 2-column (main 2/3, sidebar 1/3) and confirm with the user.

---

## Component-Level Rules

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
| Layout (grid/rows) | `<lightning-layout>` + `<lightning-layout-item>` |

## Layout and Spacing

When composing multiple components on a page (e.g. a button above a data table, or cards stacked vertically), **always use `<lightning-layout>` and `<lightning-layout-item>`** to control spacing and alignment. Never rely on bare stacking — components placed without a layout container will have no spacing between them.

```html
<lightning-layout multiple-rows="true">
    <lightning-layout-item size="12" class="slds-m-bottom_medium">
        <lightning-button label="New Record" variant="brand"></lightning-button>
    </lightning-layout-item>
    <lightning-layout-item size="12">
        <lightning-datatable columns={columns} data={data} key-field="id"></lightning-datatable>
    </lightning-layout-item>
</lightning-layout>
```

Key attributes:
- `multiple-rows="true"` — allows items to wrap to new rows
- `size` — column span out of 12 (e.g. `"6"` for half-width, `"12"` for full-width)
- `medium-device-size` / `large-device-size` — responsive breakpoints
- `padding="horizontal-small"` — adds gutters between side-by-side items
- Use SLDS margin utilities (`slds-m-bottom_medium`, `slds-m-top_small`) on items for vertical spacing

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

### Design Token Reference (SLDS 2)

When choosing spacing, radius, shadow, color, or typography values, consult the SLDS 2 design token guides at `.claude/instructions/slds-figma-mockups/guides/reference/`:

| Decision | Reference file | Key values |
|----------|---------------|------------|
| Spacing (margins, padding, gaps) | `color-tokens.md` § Spacing scale | 4 / 8 / 12 / 16 / 24 / 32 / 40 / 48 / 64 px (4px base) |
| Border radius | `color-tokens.md` § Border radius | 4px badges, 8px inputs, 12px menus, 20px cards, circle buttons |
| Shadows / elevation | `color-tokens.md` § Shadows | None on cards; shadow-2 menus; shadow-3 panels/toasts; shadow-4 modals |
| Semantic colors | `color-tokens.md` § Role → token | surface/2 = page bg, container/1 = card bg, on-surface/2 = text |
| Typography scale | `text-styles.md` | 24px title, 14px heading, 13px body, 12px label, 10px micro |
| Font weights | `color-tokens.md` § Font weight | Light 274, Regular 400, Semibold 590, Bold 700 |
| Color balance | `color-tokens.md` § Design Principles | 85% neutral, 5% accent, 10% expressive |
| Page composition | `page-blueprints.md` | Per-object layouts (Account, Opp, Quote, Case, Asset) |
| Component selection | `sizing-rules.md` § Cheatsheet | Which SLDS component to use for each UI need |

These files are the source of truth for concrete values. Do not guess spacing, radius, or color values — look them up.

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

### 4. Add to the "My Components" gallery page

Every new component MUST be added to the shared gallery page at `src/modules/page/myComponents/myComponents.html`. This page is already wired into the shell app nav as "My Components" — do NOT create a separate page per component.

Add a new `<lightning-layout-item>` block **above** the `<!-- New components are added above this line -->` comment:

```html
<lightning-layout-item size="12" class="slds-m-bottom_large">
    <lightning-card title="My Button">
        <div class="slds-p-around_medium">
            <c-my-button label="Default" variant="brand"></c-my-button>
        </div>
    </lightning-card>
</lightning-layout-item>
```

Showcase representative props/variants so the user sees the component in a meaningful state. If the component has multiple variants, show them side by side.

### 5. Tell the user

After completing all steps above, tell the user:

> **Your component `c-my-button` is ready in two places:**
>
> - **Shell app** — run `npm run dev` and navigate to the "My Components" tab in the navbar (port 3000)
> - **Storybook** — run `npm run storybook` to see it in the component catalog with docs and controls (port 6006)
>
> **Take it to Figma (optional):**
>
> You can also push this component to a Figma mockup using `/slds-figma-mockups`. This will build a high-fidelity SLDS 2 representation in Figma using real library instances and design tokens — useful for design reviews, handoffs, or composing it into a full page layout.
>
> **Requirement:** The Figma MCP plugin must be connected and authenticated. If you haven't set it up, Claude will prompt you to authenticate when you invoke the command. You can also verify Figma connectivity beforehand by running `/figma-use`.

### Naming Summary

| Field | Format | Example |
|-------|--------|---------|
| Story `title` | Human-readable | `Components/My Button` |
| Story `component` | Tag name (kebab-case) | `c-my-button` |
| `__lwcCreateElement` arg | Tag name (kebab-case) | `c-my-button` |
| Registry key | Tag name (kebab-case) | `'c-my-button': MyButton` |
| Folder name | camelCase | `myButton` |
| Class name | PascalCase | `MyButton` |
