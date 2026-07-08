![DEX Storybook Next](/public/images/storybooknextreadme.png)

A unified **Lightning Web Components workbench** that combines a runnable app shell with a Storybook 10 component catalog. Components are authored once and tested in both contexts — as isolated stories with visual controls and as mounted elements in a full LWC application.

Built with **LWC 9**, **Vite**, **Storybook 10**, and **lightning-base-components**. Supports three design system themes: **SLDS2 - Cosmos**, **SLDS1 - Lightning Blue**, and **WES for Experience Cloud**.

## Quick Start

```bash
nvm use        # Node 20 (see .nvmrc)
npm install
npm run storybook   # Component catalog on http://localhost:6006
npm run dev         # App shell on http://localhost:3000
```

## Two Apps, One Source

| | App Shell | Storybook Catalog |
|---|---|---|
| **Command** | `npm run dev` | `npm run storybook` |
| **Port** | 3000 | 6006 |
| **Purpose** | Full SPA with routing, app launcher, theme switcher | Isolated component development, docs, controls |
| **Default theme** | SLDS2 - Cosmos | 3-theme switcher toolbar |

Both share the same Vite config, `src/modules/`, and `node_modules`. They are independent processes and never conflict.

## Project Structure

```
dex-storybook-next/
├── .storybook/                # Storybook configuration
│   ├── main.ts                # Framework, addons, staticDirs, viteFinal
│   ├── preview.ts             # Decorators, globalTypes, component registry
│   ├── components.js          # Component registry (createElement factory)
│   └── sldsTheming.ts         # Theme switcher decorator + toolbar config
│
├── src/
│   ├── index.js               # App shell entry (synthetic shadow + bootstrap)
│   ├── bootstrap.js           # Mounts shell-app, loads SLDS, preloads icons
│   ├── router.js              # Client-side routing (History API)
│   ├── routes.config.js       # Route definitions
│   ├── apps.config.js         # App modes (Standard tabs, Console)
│   │
│   ├── modules/
│   │   ├── c/                 # Custom components (portable to Salesforce org)
│   │   ├── shell/             # App chrome (header, nav, theme switcher)
│   │   ├── page/              # Route-level page views
│   │   ├── ui/                # Reusable UI building blocks
│   │   └── data/              # Data access modules
│   │
│   └── build/                 # Build-time shims and generated assets
│       ├── slds-loader.js     # Runtime SLDS1/SLDS2 toggle
│       ├── shim/gate.js       # @salesforce/gate/* shim
│       ├── generated/         # Pre-built icon SVG sprites
│       └── lightning-icon/shims/  # Icon template shims
│
├── public/                    # Static assets served at /
│   ├── css/                   # Theme CSS (font tokens, WES bundle, overrides)
│   └── fonts/                 # Salesforce Sans, ITC Avant Garde
│
├── scripts/
│   ├── build-css.js           # Extracts font tokens + builds WES offline bundle
│   └── prebuild-icons.mjs    # Generates icon SVG sprite JS modules
│
├── vite.config.js             # Shared Vite config (LWC plugin, shims, resolvers)
└── lwc.config.json            # LWC module resolution
```

### Component Namespaces

| Folder | Tag prefix | Use for |
|--------|------------|---------|
| `c/` | `c-*` | Custom components portable to a Salesforce org |
| `shell/` | `shell-*` | App shell chrome (not in Storybook) |
| `page/` | `page-*` | Route-level views (one per URL) |
| `ui/` | `ui-*` | Reusable building blocks |
| `data/` | — | Plain JS modules (fixtures, services) |

## NPM Scripts

| Command | What It Does |
|---------|--------------|
| `npm run storybook` | Builds CSS + icons, starts Storybook on port 6006 |
| `npm run storybook:dev` | Same with `concurrently` (for watch tasks) |
| `npm run dev` | Builds icons, starts Vite dev server on port 3000 |
| `npm run build` | Production Vite bundle |
| `npm run build-storybook` | Static Storybook build for deployment |
| `npm run build:css` | Extracts font tokens + generates WES offline bundle |
| `npm run prebuild-icons` | Generates icon SVG sprite JS modules |
| `npm run clean` | Removes `dist/`, `.vite/`, `node_modules/`, `storybook-static/` |

## Theme System

The Storybook toolbar provides and the App Shell both provide a 3-theme switcher: SLDS2, SLDS1 and WES for EC.

| Theme | What It Loads |
|-------|---------------|
| **SLDS2 - Cosmos** | `slds2.cosmos.css` from `@salesforce-ux/design-system-2` |
| **SLDS1 - Lightning Blue** | `salesforce-lightning-design-system.min.css` from `@salesforce-ux/design-system` |
| **WES for EC** | SLDS + WES combined bundle + overrides (wrapped in `.wes-page .wes-style .wes-theme`) |

Components must not hard-code colors, fonts, or spacing. All visual values come from SLDS tokens so they adapt to all three themes.

## Creating Components

Component creation is handled by **Claude Code** via `.claude/instructions/component-creation.md`. When you ask Claude to create a component, it automatically:

- Scaffolds all files (`.js`, `.html`, `.css`, `.stories.js`, `.mdx`)
- Registers the component in `.storybook/components.js`
- Applies the correct styling patterns and SLDS conventions
- Generates Storybook stories with controls and documentation

Components live in `src/modules/c/<camelCaseName>/`:

```
src/modules/c/myComponent/
├── myComponent.js          # LWC class
├── myComponent.html        # Template
├── myComponent.css         # Scoped styles
├── myComponent.stories.js  # Storybook stories
└── myComponent.mdx         # Documentation
```

### Styling Rules (enforced by Claude instructions)

These rules are codified in `.claude/instructions/` and applied automatically during component creation:

1. **Always wrap Lightning Base Components** — never recreate `<lightning-button>`, `<lightning-card>`, etc.
2. **Use built-in variants first** — `variant="success"` over custom CSS
3. **SLDS styling hooks at `:host`** — `--slds-c-button-brand-color-background: var(--slds-g-color-palette-green-50)`
4. **SLDS utility classes** for spacing, alignment, typography
5. **No `!important`**, no hard-coded colors, no direct SLDS class overrides

## Routing (App Shell)

The app uses a client-side router (`src/router.js`) with:

- **Route config** in `src/routes.config.js` — `{ path, component, title, navPage?, navLabel? }`
- **Path params** — `:id` syntax (e.g. `/contacts/:id`)
- **App modes** in `src/apps.config.js` — Standard (tab bar) and Console (object switcher)
- **History API** — back/forward without full page reload

## Synthetic Shadow DOM

This project uses **synthetic shadow** to match Salesforce platform behavior. Global SLDS stylesheets cascade into component internals (flat DOM). Without it, native shadow DOM would block all global CSS.

`@lwc/synthetic-shadow` must evaluate before `@lwc/engine-dom`:
- **App shell**: First import in `src/index.js`
- **Storybook**: Classic `<script>` tag in iframe `<head>` (via `previewHead` in `main.ts`)

## Improvements Over design-system-2-starter-kit

This project extends and enhances the official Salesforce [design-system-2-starter-kit](https://github.com/salesforce-ux/design-system-2-starter-kit) with:

- **AI-enforced SLDS compliance** — Claude Code instructions and hooks automatically enforce SLDS styling rules, component architecture patterns, and documentation requirements at **creation time**. Components are guaranteed to follow platform conventions without manual review.
- **Claude hooks for build integrity** — Pre-tool hooks ensure Node 20 via nvm before any shell command, post-tool hooks flag missing `.mdx` docs when component files are modified, and prompt hooks trigger the component creation procedure when relevant.
- **UI Health Check & Fix skills** — Integrated from the [`lwc-storybook`](https://github.com/SF-BT-NonProd/lwc-storybook), `healthchecks` branch. `/ui-health-check` runs comprehensive audits (accessibility, performance, SLDS compliance, LWC best practices, testing coverage, Storybook integration, security) and `/ui-health-fix` auto-applies fixes with confidence scoring and rollback support.
- **Storybook 10 integration** — Isolated component development with controls, docs, and visual regression testing alongside the app shell
- **Three-theme switcher** — SLDS2 - Cosmos, SLDS1 - Lightning Blue, and WES for Experience Cloud (starter kit only had SLDS1/SLDS2 toggle)
- **MDX documentation** — Every component includes a `.mdx` docs page with live examples and API tables
- **Component registry pattern** — `window.__lwcCreateElement` bridges LWC and Storybook's web-components renderer
- **Native Vite HMR for LWC** — No separate Rollup pre-build step; `vite-plugin-lwc` compiles components on-demand in both app shell and Storybook
- **WES theme support** — Full WES for Experience Cloud theming with font token extraction, wrapper classes, and override patches for upstream npm deficiencies
- **Unified config** — Single `vite.config.js` consumed by both Vite and Storybook's builder, eliminating config drift

## UI Health Check Skills

This project integrates the health check skills from the [`lwc-storybook\healthchecks`](https://github.com/SF-BT-NonProd/lwc-storybook/tree/healthchecks) branch, located in `public/skills/`:

| Skill | Purpose |
|-------|---------|
| `/ui-health-check` | Comprehensive audit across 8 dimensions: accessibility, LWC best practices, performance, design system compliance, JS quality, testing coverage, Storybook integration, and security |
| `/ui-health-fix` | Auto-applies fixes from health check reports with confidence scoring, preview mode, and rollback support |

```bash
/ui-health-check                              # Full audit
/ui-health-check --component=c-myComponent    # Single component
/ui-health-check --category=accessibility     # Single dimension

/ui-health-fix --preview                      # Preview proposed fixes
/ui-health-fix --auto                         # Apply high-confidence fixes
/ui-health-fix --rollback <report-id>         # Undo applied fixes
```

The skills are design-system-aware and validate against SLDS2, SLDS1, and WES standards depending on context.

## Prerequisites

- **Node.js 20** (see `.nvmrc`) — `nvm use` to activate
- **npm** — no yarn required

## Key Dependencies

| Package | Role |
|---------|------|
| `lwc` ^9.0.2 | LWC runtime |
| `@lwc/synthetic-shadow` ^9.0.2 | Shadow DOM polyfill |
| `vite-plugin-lwc` ^4.1.0 | Vite integration + HMR |
| `lightning-base-components` ^1.28.17-alpha | Salesforce base components |
| `@salesforce-ux/design-system` ^2.29 | SLDS1 - Lightning Blue CSS + icons |
| `@salesforce-ux/design-system-2` ^2.0 | SLDS2 - Cosmos CSS |
| `@salesforce/wes-for-ec` ^1.0.17 | WES for Experience Cloud |
| `storybook` ^10.4.2 | Storybook core |
| `@storybook/web-components-vite` ^10.4.2 | Storybook framework |
| `vite` ^7.3.1 | Build tool and dev server |

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| `structuredClone is not defined` | `nvm use 20` |
| Component not appearing in Storybook | Add to `.storybook/components.js` |
| Native shadow DOM (`shadowrootmode="open"`) | Verify `public/synthetic-shadow-browser.js` exists; check `previewHead` |
| WES fonts not rendering | Confirm `slds-font-tokens.css` and `wes-overrides.css` load |
| Card headers disappearing under WES | `wes-overrides.css` must load after WES bundle |
| `gate.isOpen is not a function` | `salesforceShimsPlugin` in `vite.config.js` handles this |
| Icon template parse errors | `icon-templates.js` plugin redirects to pre-compiled shims |
