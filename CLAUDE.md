# DEX Storybook Next

## User Profile — Ask Once, Remember Always

**On first interaction in this project**, if there is no stored user profile memory (check memory for a `user` type entry with profile info), you MUST ask:

> Before we begin — are you a **developer** or a **designer / non-technical user**?
>
> This helps me adjust how I communicate and assist you in the DEX Storybook project only. It won't change what I'm capable of — just how I present information and guide you through steps. This preference is saved as a project-level memory and only applies here.

After the user answers, save it as a `user` memory and apply the corresponding mode:

### Developer mode (default)
- Concise output, no hand-holding
- Commands without explanation unless asked
- Technical terminology as-is

### Designer mode
- Longer, more explanatory responses
- Use emojis to aid visual scanning and tone (✅ for success, ⚠️ for caution, 🎨 for design notes, 🚀 for progress, etc.)
- Every command explained before running (what it does, why, safe/reversible)
- ASCII step callouts for multi-step processes:
  ```
  ┌─────────────────────────────────────┐
  │  🎨 STEP TITLE                      │
  │                                     │
  │  What's happening and what to do    │
  │  ✅ Safety note                     │
  └─────────────────────────────────────┘
  ```
- Proactive reassurance ("this is safe ✅", "nothing leaves your machine 🔒", "press Ctrl+C to stop ⏹️")
- Reference [DESIGNERS.md](DESIGNERS.md) when relevant
- Mid-process checkpoints ("✅ Done with step 2 — here's what just happened, here's what's next")
- Never assume knowledge of terminal, git, npm, or file system concepts
- **Preempt alarming output** — after running `npm install` or `npm audit`, if warnings, deprecations, or vulnerability counts appear, immediately explain them in plain language BEFORE the user reacts. Use this framing:

  > ⚠️ **You might see some warnings above — here's what they mean:**
  >
  > - **"deprecation" warnings** — some sub-packages use older versions of other packages. This is normal and doesn't affect your work. Think of it like an app saying "update available" — it still works fine.
  > - **"vulnerabilities found"** — these are in developer tools only (not in anything that goes online or gets shared). They're the equivalent of a "check engine" light for an oil change — routine, not urgent.
  >
  > ✅ None of this affects your components, your designs, or anything visible in the browser.
  > ✅ You don't need to do anything about these messages.

- **Never run `npm audit` proactively** in designer mode — it produces technical output that causes unnecessary alarm. Only run it if the user explicitly asks for a security check, and always wrap the output with the explanation above.
- **Never suggest running `npm audit fix`** in designer mode — dependency fixes can introduce breaking changes and should be handled by a developer.

---

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
| App shell | `npm run dev` | 3000 | Full SPA with routing, app launcher, SLDS2 - Cosmos theming |
| Storybook | `npm run storybook` | 6006 | Component catalog with 3-theme switcher, MDX docs, controls |

Both use the **same Vite config** and `vite-plugin-lwc` — no separate Rollup pre-build step.

### Design System Requirements

Every component must render correctly under **three design systems** (switchable in Storybook):
- **SLDS2 - Cosmos** — Salesforce Design System 2 (default)
- **SLDS1 - Lightning Blue** — Classic SLDS (Salesforce Lightning Design System)
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
6. **Verify SLDS class names exist** before using them — grep `public/css/` to confirm any `slds-` class you write actually exists in the project's design system CSS files. Do not assume class names from naming conventions alone.

### SLDS 2 Design Token Reference

Concrete spacing, radius, shadow, color, and typography values are documented in `.claude/instructions/slds-figma-mockups/guides/reference/`. Consult these when making styling decisions — do not guess values.

### Figma Mockups Skill (Integrated)

This project includes the **slds-figma-mockups** skill at `.claude/instructions/slds-figma-mockups/`. Invoke it with `/slds-figma-mockups` to build Salesforce page mockups in Figma using real SLDS 2 component instances, tokens, and page blueprints.

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
- **@salesforce-ux/design-system-2** ^2.0 (SLDS2 - Cosmos)
- **@salesforce/wes-for-ec** ^1.0.17 (WES for Experience Cloud)
- **lightning-base-components** ^1.28.17-alpha
- **@lwc/synthetic-shadow** ^9.0.2

## Prerequisites

- Node.js 20+ (use `.nvmrc`: `nvm use`)
- npm
