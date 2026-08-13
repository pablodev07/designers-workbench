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

Create the folder `src/modules/c/<camelCaseName>/` with this structure:

```
src/modules/c/<camelCaseName>/
├── <camelCaseName>.js
├── <camelCaseName>.html
├── <camelCaseName>.css
├── <camelCaseName>.js-meta.xml
└── __docs__/
    ├── <camelCaseName>.stories.js
    └── <camelCaseName>.mdx
```

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

**`<camelCaseName>.js-meta.xml`** (Salesforce org deployment metadata)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>62.0</apiVersion>
    <isExposed>true</isExposed>
    <targets>
        <target>lightning__AppPage</target>
        <target>lightning__RecordPage</target>
        <target>lightning__HomePage</target>
        <target>lightningCommunity__Page</target>
    </targets>
</LightningComponentBundle>
```

**`__docs__/<camelCaseName>.stories.js`**

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

**`__docs__/<camelCaseName>.mdx`** (Documentation — ALWAYS created)

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

### 5. Pre-creation announcement (designer mode only)

**Before writing any files**, if the user is in designer mode, announce what's about to happen:

> ┌─────────────────────────────────────────────────────┐
> │  🎨 CREATING YOUR COMPONENT                         │
> │                                                     │
> │  I'm about to create 6 new files for your           │
> │  component. I'll ask permission before writing       │
> │  each one — just accept when prompted.              │
> │                                                     │
> │  ✅ Nothing is deleted or overwritten                │
> │  ✅ You can stop me at any point                     │
> │  ✅ Everything stays on your machine only            │
> └─────────────────────────────────────────────────────┘
>
> **Files I'll create:**
> 1. Logic file (`.js`) — the component's behavior
> 2. Template file (`.html`) — the visual structure
> 3. Styles file (`.css`) — spacing and appearance
> 4. Metadata file (`.js-meta.xml`) — makes it ready for a real Salesforce org
> 5. Stories file (`__docs__/.stories.js`) — the Storybook preview
> 6. Docs file (`__docs__/.mdx`) — the documentation page
>
> Plus I'll register it in the catalog and add it to the gallery page.
>
> Ready? I'll ask permission for each file as I go. 🚀

Then proceed with creation. If the user stops the process at any point, immediately:
1. Tell them what has been completed so far and what remains
2. Ask why they stopped and if they have questions
3. Offer to continue, undo what was done, or adjust the approach

### 6. First-time setup check (designer mode only)

After component creation is complete, check if the project has been set up. If `node_modules/` doesn't exist or the user has never run the project in this session, present the setup steps:

> ┌─────────────────────────────────────────────────────┐
> │  🔧 FIRST-TIME SETUP                                │
> │                                                     │
> │  Before you can preview your component, the          │
> │  project needs a one-time setup. This downloads      │
> │  the design system files and tools it depends on.    │
> │                                                     │
> │  ✅ Only happens once                                │
> │  ✅ Takes 1-2 minutes                                │
> │  ✅ Nothing installs globally — stays in this folder │
> └─────────────────────────────────────────────────────┘
>
> **What we'll run:**
>
> | Command | What it does |
> |---------|--------------|
> | `nvm use` | Switches to the correct Node.js version (v20) — like choosing the right app version |
> | `npm install` | Downloads all design system packages into a local folder — like syncing a Figma library |
>
> I can run these for you right now, or you can type them yourself. Which do you prefer?

If `node_modules/` already exists, skip this step entirely.

### 7. Tell the user

After completing all steps above, tell the user how to see their component. Adapt the language to the user's experience level.

**For designers / non-technical users:**

> ┌─────────────────────────────────────────────────────┐
> │  ✅ YOUR COMPONENT IS READY!                         │
> │                                                     │
> │  Here's how to see it in your browser.               │
> └─────────────────────────────────────────────────────┘
>
> **Option A — Component catalog (recommended for reviewing):**
> ```
> npm run storybook
> ```
> 🔍 This opens a visual catalog at **http://localhost:6006** where you can browse your component, switch themes, and tweak its properties with controls.
>
> **Option B — Full app preview:**
> ```
> npm run dev
> ```
> 🖥️ This opens a Salesforce-like app at **http://localhost:3000**. Navigate to "My Components" to see it in a real page layout.
>
> **How to run these:**
> - You can type the command in a new terminal session yourself, OR
> - Ask me to run it right here in this session — just say "run storybook" or "run the app" and I'll start it for you
>
> Both are local and safe — press **Ctrl+C** to stop at any time. Nothing goes online. 🔒
>
> ---
>
> **🎨 Want to take it to Figma?**
>
> I can push this component to Figma as a real SLDS 2 library instance — not a screenshot, but an actual component from the design system library.
>
> **Before we do that, here's what you need:**
> - ⚠️ **Figma MCP plugin** must be authenticated (I'll guide you if it's not set up)
> - ⚠️ **Full Seat recommended** — a View Seat only allows 6 Figma calls per month, which limits what we can do. A Full Seat has no practical limit.
>
> Want to push it to Figma, adjust the component, or are you happy with it? 🚀

**For developers (concise):**

> **Your component `c-my-button` is ready:**
>
> - **Storybook** — `npm run storybook` → port 6006 (docs + controls)
> - **Shell app** — `npm run dev` → port 3000 ("My Components" tab)
> - **Figma** (optional) — `/slds-figma-mockups` to push as SLDS 2 library instance (requires Figma MCP auth + Full Seat recommended)

### Naming Summary

| Field | Format | Example |
|-------|--------|---------|
| Story `title` | Human-readable | `Components/My Button` |
| Story `component` | Tag name (kebab-case) | `c-my-button` |
| `__lwcCreateElement` arg | Tag name (kebab-case) | `c-my-button` |
| Registry key | Tag name (kebab-case) | `'c-my-button': MyButton` |
| Folder name | camelCase | `myButton` |
| Class name | PascalCase | `MyButton` |
