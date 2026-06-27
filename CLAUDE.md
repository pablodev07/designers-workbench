# DEX Storybook Next

## Component Creation — Mandatory Procedure

When asked to create ANY new component (regardless of type), you MUST read and follow `.claude/instructions/component-creation.md` before writing any code. This is non-negotiable — do not infer patterns from existing components, do not skip this step.

## Component Documentation — Always Required

Every component MUST have an `.mdx` docs file alongside its other files. This applies to:
- **New components**: Create the `.mdx` file as part of the creation procedure.
- **Existing components modified**: When you edit a component's `.js` file (adding `@api` properties, public methods, or changing behavior), update the corresponding `.mdx` file. If no `.mdx` file exists yet, create one.

## Project Purpose

This project is a **unified LWC component workbench** combining:
1. **A runnable app shell** (Vite dev server on port 3000) — for prototyping full-page layouts with routing
2. **A Storybook 10 catalog** (port 6006) — for isolated component development, documentation, and visual testing

Components built here are intended to be **portable to a Salesforce org**.

## Architecture

### Two Entry Points

| Entry | Command | Port | Purpose |
|-------|---------|------|---------|
| App shell | `npm run dev` | 3000 | Full SPA with routing, app launcher, DS2 theming |
| Storybook | `npm run storybook` | 6006 | Component catalog with 3-theme switcher, MDX docs, controls |

Both use the **same Vite config** and `vite-plugin-lwc` — no separate Rollup pre-build step.

### Design System Requirements

Every component must render correctly under **three design systems** (switchable in Storybook):
- **DS2 Cosmos** — Salesforce Design System 2 (default)
- **SLDS Plus** — Classic SLDS (Salesforce Lightning Design System)
- **WES (Web Experience Standard)** — Design subset for Experience Cloud sites

### Component Structure

Components go in `src/modules/c/<componentName>/` with files:
- `<componentName>.js` — LWC class
- `<componentName>.html` — Template
- `<componentName>.css` — Scoped styles
- `<componentName>.stories.js` — Storybook stories
- `<componentName>.mdx` — Documentation

Other module namespaces:
- `shell/` — App chrome (header, nav, theme switcher)
- `page/` — Route-level page views
- `ui/` — Reusable non-component UI pieces
- `data/` — Data access modules

### Styling Rules

1. **Use built-in variants first** (e.g. `variant="success"`)
2. **Use SLDS utility classes** for spacing, alignment, typography
3. **Use SLDS styling hooks** (`--slds-c-*` at `:host`) for visual customization beyond variants
4. **Never use `!important`**, hard-coded colors, or direct SLDS class overrides
5. **Always prefer Lightning Base Components** over raw HTML

## Running

```bash
# Install dependencies
npm install

# Run the app shell (port 3000)
npm run dev

# Run Storybook (port 6006)
npm run storybook

# Build for production
npm run build
npm run build-storybook
```

## Key Dependencies

- **LWC 9** with `vite-plugin-lwc` (native Vite integration, HMR)
- **Storybook 10** (`@storybook/web-components-vite`)
- **@salesforce-ux/design-system** ^2.29 (SLDS)
- **@salesforce-ux/design-system-2** ^2.0 (DS2 Cosmos)
- **@salesforce/wes-for-ec** ^1.0.17 (WES for Experience Cloud)
- **lightning-base-components** ^1.28.17-alpha
- **@lwc/synthetic-shadow** ^9.0.2

## Prerequisites

- Node.js 20+ (use `.nvmrc`: `nvm use`)
- npm
