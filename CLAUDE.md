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

## Project Maturity — Do Not Misinterpret

This project is a **component workbench and creation tool**, not a component library. Having few components in `src/modules/c/` is the **expected state** — it means users haven't created many yet, not that the project is incomplete or "early stage."

The value of this project is the **infrastructure**: enforced creation procedures, automated registration, theme switching, Storybook integration, Shell App preview, Figma pipeline, health checks, and design token reference. The components are the output of that infrastructure — they come and go as users create and delete them.

**Never describe this project as "early stage", "incomplete", or "in progress" based on component count.** The tooling is mature and fully functional.

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

Components go in `src/modules/c/<componentName>/` with this structure:
```
src/modules/c/<componentName>/
├── <componentName>.js          — LWC class
├── <componentName>.html        — Template
├── <componentName>.css         — Scoped styles
├── <componentName>.js-meta.xml — Salesforce org metadata (API version, targets)
└── __docs__/
    ├── <componentName>.stories.js — Storybook stories
    └── <componentName>.mdx        — Documentation
```

The component root is **org-portable** — a developer can take everything except `__docs__/` and deploy it directly to a Salesforce org. The `__docs__/` subfolder isolates Storybook-specific files so they don't interfere with `sf deploy` or metadata builds.

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

---

## GitHub Pages Hosting — Security Guidelines

Deploying this project's build output (`npm run build-storybook` or `npm run build`) to **GitHub Pages is safe and explicitly allowed** by Salesforce Enterprise Security policy.

### Policy Basis

| Source | What it says |
|--------|-------------|
| [Security Requirements for GitHub](https://confluence.internal.salesforce.com/spaces/SECURITY/pages/20124646/Security+Requirements+for+GitHub) | *"Private pages enforce access control by who has access to the repository. This means any internal visibility repository can share content with the rest of the Salesforce Enterprise."* Private Pages are allowed; public Pages require a separate review. |
| [Security Requirements for Enterprise Administrators and Organization Owners](https://confluence.internal.salesforce.com/spaces/SECURITY/pages/667752507/Security+Requirements+for+Enterprise+Administrators+and+Organization+Owners) | *"Public pages must not be allowed on Github EMU."* and *"Github Pages must not be used for hosting binaries/dependencies."* Static prototypes and Storybook builds are fine. |
| [T&P Docs: Publish a UDP Unmanaged Site](https://docs.internal.salesforce.com/write/dx/publish/publish-unmanaged/) | GitHub Pages is an officially documented internal publishing path. |

### What This Means in Practice

- Pages are **private by default** — only authenticated org members (~28,700 Salesforce employees) can view them.
- **Public pages are blocked** at the org level — you cannot accidentally make a page public.
- **HTTPS is enforced** on all Pages sites.
- There is no per-repo audience restriction on private Pages. All org members can see any private Page.

### Safe to Deploy

- Static prototypes (HTML, CSS, JS)
- Storybook builds (component catalogs)
- Documentation sites
- Design system explorations

### Never Deploy

- **API keys, tokens, or credentials** — not in source code, not in environment variables baked into the build, not in config files
- **Customer data** or org-specific PII
- **References to live Salesforce environments** (org URLs, instance endpoints, session IDs)
- **Binaries or package dependencies** — these must go through Nexus/Artifactory per policy
- **Anything that connects to external services at runtime** (fetch calls to third-party APIs, analytics scripts, tracking pixels)

### Deploying

This project uses the `gh-pages` branch approach (no custom GitHub Actions workflow). The `salesforce-ux-emu` org lacks reliable hosted runners for private repos, so avoid `build_type: "workflow"` — use `build_type: "legacy"` with a static branch.

**Pages configuration** (already set):
- Source: `gh-pages` branch, `/` path
- Build type: `legacy`
- URL: `https://studious-fiesta-v63ooy5.pages.github.io/`

**To redeploy**:

```bash
# Build both targets
npm run build
npm run build-storybook

# Assemble and push to gh-pages
rm -rf _site && mkdir -p _site/storybook
cp -r dist/* _site/
cp -r storybook-static/* _site/storybook/
cd _site
git init && git checkout -b gh-pages
git add -A && git commit -m "deploy: app shell + storybook catalog"
git remote add origin https://github.com/salesforce-ux-emu/dex-storybook-next.git
git push origin gh-pages --force
```

The built-in `pages-build-deployment` workflow triggers automatically and deploys in ~40 seconds.

**Live URLs**:
- App Shell: `https://studious-fiesta-v63ooy5.pages.github.io/`
- Storybook: `https://studious-fiesta-v63ooy5.pages.github.io/storybook/`

**Do NOT** add a custom GitHub Actions workflow for Pages deployment — concurrent workflows competing for the same runner pool cause concurrency deadlocks that stall deployments for 15+ minutes until timeout.

### If You Need Restricted Access

GitHub Pages does not support per-team or per-person access control — it's all-or-nothing across the org. If your content requires narrower visibility, use **Cloud Hosting** (Salesforce internal) which provides file-level authorization and access auditing.
