# Developer Guide

Technical reference for DEX Storybook Next. For an overview of the project, see [README.md](README.md).

---

## Architecture

### Two Entry Points

| Entry | Command | Port | Purpose |
|-------|---------|------|---------|
| App shell | `npm run dev` | 3000 | Full SPA with routing, app launcher, SLDS2 - Cosmos theming |
| Storybook | `npm run storybook` | 6006 | Component catalog with 3-theme switcher, MDX docs, controls |

Both use the same Vite config and `vite-plugin-lwc` — no separate Rollup pre-build step.

### Project Structure

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

---

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

---

## Theme System

The Storybook toolbar and the App Shell both provide a 3-theme switcher.

| Theme | What It Loads |
|-------|---------------|
| **SLDS2 - Cosmos** | `slds2.cosmos.css` from `@salesforce-ux/design-system-2` |
| **SLDS1 - Lightning Blue** | `salesforce-lightning-design-system.min.css` from `@salesforce-ux/design-system` |
| **WES for EC** | SLDS + WES combined bundle + overrides (wrapped in `.wes-page .wes-style .wes-theme`) |

Components must not hard-code colors, fonts, or spacing. All visual values come from SLDS tokens.

---

## Component Creation

Component creation is handled by Claude Code via `.claude/instructions/component-creation.md`. When you ask Claude to create a component, it:

- Scaffolds all files (`.js`, `.html`, `.css`, `.stories.js`, `.mdx`)
- Registers the component in `.storybook/components.js`
- Adds the component to the "My Components" gallery page in the Shell App
- Applies SLDS styling patterns and conventions
- Generates Storybook stories with controls and documentation

### Component File Structure

```
src/modules/c/myComponent/
├── myComponent.js          # LWC class
├── myComponent.html        # Template
├── myComponent.css         # Scoped styles
├── myComponent.stories.js  # Storybook stories
└── myComponent.mdx         # Documentation
```

### Styling Rules (enforced automatically)

1. **Always wrap Lightning Base Components** — never recreate `<lightning-button>`, `<lightning-card>`, etc.
2. **Use built-in variants first** — `variant="success"` over custom CSS
3. **SLDS styling hooks at `:host`** — `--slds-c-button-brand-color-background: var(--slds-g-color-palette-green-50)`
4. **SLDS utility classes** for spacing, alignment, typography
5. **No `!important`**, no hard-coded colors, no direct SLDS class overrides

---

## Routing (App Shell)

The app uses a client-side router (`src/router.js`) with:

- **Route config** in `src/routes.config.js` — `{ path, component, title, navPage?, navLabel? }`
- **Path params** — `:id` syntax (e.g. `/contacts/:id`)
- **App modes** in `src/apps.config.js` — Standard (tab bar) and Console (object switcher)
- **History API** — back/forward without full page reload

---

## Synthetic Shadow DOM

This project uses synthetic shadow to match Salesforce platform behavior. Global SLDS stylesheets cascade into component internals (flat DOM). Without it, native shadow DOM would block all global CSS.

`@lwc/synthetic-shadow` must evaluate before `@lwc/engine-dom`:
- **App shell**: First import in `src/index.js`
- **Storybook**: Classic `<script>` tag in iframe `<head>` (via `previewHead` in `main.ts`)

---

## Improvements Over design-system-2-starter-kit

This project extends the official Salesforce [design-system-2-starter-kit](https://github.com/salesforce-ux/design-system-2-starter-kit) with:

- **AI-enforced SLDS compliance** — Claude Code instructions and hooks enforce styling rules, architecture patterns, and documentation at creation time
- **Claude hooks for build integrity** — Pre-tool hooks ensure Node 20, post-tool hooks flag missing docs, prompt hooks trigger creation procedure
- **UI Health Check & Fix skills** — Comprehensive audits and auto-fixes across accessibility, performance, SLDS compliance, security
- **SLDS Figma Mockups Skill** — 219 component keys, semantic tokens, page blueprints for Figma mockup generation and code-side token reference
- **Storybook 10 integration** — Isolated development with controls, docs, and visual regression testing
- **Three-theme switcher** — SLDS2 Cosmos, SLDS1 Lightning Blue, WES for Experience Cloud
- **MDX documentation** — Every component includes a docs page with live examples and API tables
- **Component registry pattern** — `window.__lwcCreateElement` bridges LWC and Storybook's web-components renderer
- **Native Vite HMR for LWC** — `vite-plugin-lwc` compiles on-demand in both contexts
- **WES theme support** — Full theming with font token extraction and override patches
- **Unified config** — Single `vite.config.js` for both Vite and Storybook

---

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

---

## Deployment (GitHub Pages)

The project is deployed to GitHub Pages via a `gh-pages` branch containing pre-built static output. No custom GitHub Actions workflow is used — the org's limited hosted runners cause concurrency deadlocks with custom workflows.

### Publishing an update

```bash
npm run build
npm run build-storybook

rm -rf _site
mkdir -p _site/storybook
cp -r dist/* _site/
cp -r storybook-static/* _site/storybook/

cd _site
git init && git checkout -b gh-pages
git add -A && git commit -m "Deploy"
git remote add origin git@github.com:salesforce-ux-emu/dex-storybook-next.git
git push origin gh-pages --force
cd ..
```

The built-in `pages-build-deployment` workflow picks up the branch automatically. Do **not** add a custom Actions workflow — it will compete for runners and stall.

---

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

### Production Build Compatibility (`vite-plugin-lwc` + Vite 7)

Dev mode (`npm run dev`, `npm run storybook`) works without issues, but production builds require workarounds for three conflicts between `vite-plugin-lwc` v4.1.0 and Vite 7. These fixes live in `vite.config.js` and `.storybook/main.ts`.

#### Problem 1: `lwc:alias` rewrites all `.html` imports

**Symptom**: `npm run build-storybook` fails with:
```
iframe.html?import (1:0): Expression expected
(Note that you need plugins to import files that are not JavaScript)
```

**Cause**: The `lwc:alias` plugin appends `?import` to every non-index `.html` file during build. Storybook's `iframe.html` entry point gets caught by the regex `/^(?!.*index)(.*)\.html$/`, causing Rollup to parse HTML as JavaScript.

**Fix** (in `.storybook/main.ts` `viteFinal`): Override `lwc:alias`'s `config()` hook with a narrower regex that also excludes `iframe`:
```ts
if (p.name === 'lwc:alias') {
  p.config = () => ({
    resolve: {
      alias: [{ find: /^(?!.*index)(?!.*iframe)(.*)\.html$/, replacement: '$1.html?import' }],
    },
  });
}
```

#### Problem 2: `lwc:patch-plugins` disables Vite's CSS pipeline

**Symptom**: `npm run build` fails with:
```
public/loading.css (1:5): Expected ';', '}' or <eof>
(Note that you need plugins to import files that are not JavaScript)
```
Or for Storybook:
```
iframe.html?html-proxy&inline-css&index=0.css (2:17): Expected ';', '}' or <eof>
```

**Cause**: `vite-plugin-lwc` completely removes `vite:css` and `vite:css-post` transform hooks (sets them to `undefined`) because LWC components handle CSS internally via the compiler. This breaks all non-LWC CSS processing — inline styles in HTML entries, `<link>` tag references, etc.

**Fix** (in `vite.config.js` for app shell, `.storybook/main.ts` for Storybook): Save the original CSS transform before `lwc:patch-plugins` destroys it, then restore it afterwards with a wrapper that skips LWC-owned files. Critical detail: in Vite 7, CSS transforms use a `{ filter, handler }` object structure — restoring as a bare function loses the filter metadata and causes Vite to call the CSS handler on *every* module (including JS), corrupting the output.

```js
// Must preserve { filter, handler } structure:
plugin.transform = origFilter
  ? { filter: origFilter, handler: wrappedHandler }
  : wrappedHandler;
```

The wrapper skips files matching: `lightning-base-components`, `src/modules/`, `@lwc/`, `?import`, `?scoped`.

#### Problem 3: `lwc:vite-plugin` compiles all `.html` as LWC templates

**Symptom**: After fixing Problem 1, Storybook build fails with:
```
[lwc:vite-plugin] iframe.html (6:5): LWC1075: Multiple roots found
```

**Cause**: The LWC vite plugin's `createFilter` exclude list has `"index.html"` hardcoded but not `"iframe.html"`. Storybook's entry gets picked up by the LWC template compiler.

**Fix** (in `.storybook/main.ts` `viteFinal`): Wrap the plugin's `transform` and `load` hooks to skip `iframe.html`:
```ts
if (p.name === 'lwc:vite-plugin') {
  const origTransform = p.transform;
  p.transform = function (code, id, options) {
    if (id.includes('iframe.html')) return;
    return origTransform?.call(this, code, id, options);
  };
  // Same for p.load
}
```

#### When to revisit

If `vite-plugin-lwc` releases a version with native Storybook/Vite 7 compatibility (check their changelog for mentions of `vite:css`, `iframe.html`, or Storybook support), the workarounds in `restoreCssForNonLwcPlugin()` and the `viteFinal` patches can be removed.
