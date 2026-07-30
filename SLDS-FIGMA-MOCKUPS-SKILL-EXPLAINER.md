# SLDS Figma Mockups Skill — Complete Technical Explainer

## Purpose of This Document

This document provides a comprehensive technical explanation of the `slds-figma-mockups-skill` project for anyone who does not have access to the repository. It covers the project's purpose, architecture, every file's role, the full build workflow, reference data, eval system, and maintenance procedures.

---

## What It Is

**slds-figma-mockups-skill** is a Claude Code plugin skill (version 0.14 beta) that teaches Claude how to build Salesforce Lightning record page mockups inside Figma. It is not a standalone app — it is a set of instructions, reference data, and evaluation tasks that augment Claude's behavior when invoked.

**Author:** Pascal Mercier (pmercier@salesforce.com)

**License:** Internal Salesforce use only.

---

## What It Does (User-Facing)

When a user asks Claude to "mock up an Account page" or "design an Opportunity record page in Figma," this skill activates and directs Claude to:

1. Look up the correct **page blueprint** (layout, sidebar order, chrome config) for the requested object (Account, Opportunity, Quote, Case, Asset).
2. Import **real SLDS 2 Figma library components by key** — never hand-draw or hardcode shapes.
3. Bind **semantic color tokens** via Figma variables — never hardcode hex values.
4. Apply **text styles** from the library — never hardcode font sizes.
5. Follow **SLDS 2 composition rules** (swap slots, auto-layout sizing, card wrapping).
6. Take a screenshot and verify the result.

The output is a production-quality Figma mockup that uses the same library instances a human designer would use, making it ready for design review, handoff, or iteration.

---

## How It Is Triggered

The skill **auto-triggers** when Claude detects a request to mock up, design, or lay out any Salesforce/Lightning UI. It can also be invoked explicitly with:

```
/slds-figma-mockups
```

**Scope boundaries:**
- **IN scope:** Composing Salesforce/Lightning record pages, list views, console screens from real SLDS 2 library instances.
- **OUT of scope:** Implementing a Figma design as code (that's `figma-design-to-code`); building the SLDS library itself; generic non-Salesforce UI.

---

## Repository Structure (Complete)

```
slds-figma-mockups-skill/
├── README.md                           # Project overview, install instructions, maintenance
├── .claude-plugin/
│   ├── marketplace.json                # Plugin marketplace manifest (pmercier-plugins)
│   └── plugin.json                     # Plugin registration manifest
├── skills/
│   └── slds-figma-mockups/
│       ├── SKILL.md                    # Router (entry point when skill activates)
│       └── guides/
│           ├── building/
│           │   ├── workflow.md          # Steps 0–6 build procedure (the main workflow)
│           │   └── sizing-rules.md     # Auto-layout, _Placeholder swap, column templates
│           └── reference/
│               ├── component-library.md # 219 component import keys + recovery procedure
│               ├── color-tokens.md     # SLDS 2 semantic color variable keys + design principles
│               ├── text-styles.md      # 23 text style keys with role mappings
│               └── page-blueprints.md  # Per-object page layouts (Account/Opp/Quote/Case/Asset)
├── evals/
│   ├── objectives.md                   # 4 skill objectives with success/failure criteria
│   └── tasks/                          # 5 evaluation tasks
│       ├── trigger-account-page-positive/
│       ├── trigger-generic-ui-negative/
│       ├── routing-blueprint/
│       ├── effectiveness-account-blueprint/
│       └── boundary-defer-to-figma-use/
└── benchmarks/
    └── tasks/                          # 8 benchmark tasks + 5 symlinks to evals/
        ├── routing-color-token/
        ├── routing-component-key/
        ├── routing-sizing-issue/
        ├── routing-workflow/
        ├── trigger-case-page-positive/
        ├── trigger-code-implementation-negative/
        ├── trigger-figma-api-negative/
        └── trigger-opportunity-page-positive/
```

---

## File-by-File Breakdown

### `SKILL.md` — The Router

This is the entry point file. When the skill activates, Claude reads this file first. It functions as a **router** — it does not contain the actual build instructions but tells Claude which guide to load based on what it's about to do:

| Intent | Guide to read |
|--------|---------------|
| Start a build (Steps 0-6) | `guides/building/workflow.md` |
| Fix sizing, swap a body, choose container | `guides/building/sizing-rules.md` |
| Look up a component key | `guides/reference/component-library.md` |
| Pick layout for a specific object | `guides/reference/page-blueprints.md` |
| Apply a text style | `guides/reference/text-styles.md` |
| Bind a color token | `guides/reference/color-tokens.md` |

It also lists four **non-negotiable rules** (enforced in every build):
1. Real instances only — import by key, never hand-draw.
2. Tokens, never literals — colors via `boundFill()`, text via `applyTextStyle()`.
3. Swapped body sizing — FILL horizontal + HUG vertical. Never vertical FILL. Never `resize()`.
4. Everything lives in a Card — nothing floats bare.

**Mandatory prerequisite:** The skill requires `/figma-use` to be loaded first (Plugin API mechanics).

---

### `guides/building/workflow.md` — The Build Procedure

The complete 7-step procedure for constructing a page mockup:

#### Step 0 — Pick Blueprint & Clarify Scope
- Identify the object type (Account, Opp, Case, etc.)
- Look up its blueprint in `page-blueprints.md`
- Ask the user: which tab is active, what sidebar content, any specific fields
- Do not start building until scope is confirmed

#### Step 1 — Plan Local Components
- Every Card body and Expandable Section body needs a **local content component**
- List them before touching Figma:
  - Related lists → Data Table instance swapped into card body
  - Expandable Sections → local component with Input View Mode instances
  - Main column body → local component with Tabs + tab panel content
- Build all local components **before** the page frame

#### Step 2 — Set Up the Destination
- Create or reuse a Figma page
- Use `figma.setCurrentPageAsync()` to target it

#### Step 3 — Build Chrome Skeleton
The page chrome (Sales Console) is built as a vertical auto-layout frame at 1920x1080:
- Global Header (64px) — key: `4bdede49ada4ec3c4fc1c9ba934aa5e81c2dbbda`
- Console Navigation (40px) — key: `677c791902becf51ababea1df9717bc9d57c2203`
- Console Subtab Bar (40px) — key: `6822ebf1f10f4753fe3f2406b73653d804bc8c58`
- Page Header (~117px) — key: `327072d23b63a70049fd69de2c09e00d8c84c5db`
- Path (if object uses it) — key: `85d06fd0b829aade91ebf725b6ce449bd51e8c01`
- Content Area — fills remainder

Page Header configuration varies by page type (showDetailRow for records, showBottomRow for list views).

#### Step 4 — Build Local Content Components (Off-Canvas)
All local components are built at x=2200+ (off-canvas) before assembly:
- **4a: Field sections** — Input Read Only View Mode instances stacked vertically
- **4b: Related lists** — Data Table wrapped in a local component
- **4c: Main column body** — Tabs + tab panel content

Critical rules:
- Components use `primaryAxisSizingMode = 'AUTO'` and `counterAxisSizingMode = 'AUTO'`
- Never call `resize()` (it resets to FIXED)
- Width driven by parent after swap

#### Step 5 — Assemble Content Area
- Main column = one Card, no header/footer, body swapped with main content component
- Sidebar = stacked cards (each related list / section in its own Card)
- After swap: re-assert FILL on body's direct children (Figma coerces to FIXED when body hugs)
- Column ratios: main `layoutGrow:2 minW:640`, sidebar `layoutGrow:1 minW:320`

#### Step 6 — Screenshot & Verify
- Take a 0.5x screenshot
- Check: everything in Cards, correct spacing, text styles bound, layout correct
- Fix issues before reporting done

---

### `guides/building/sizing-rules.md` — Composition & Layout Rules

Contains the detailed mechanics of auto-layout sizing:

**Local Component Sizing (core rule):**
- Both axes `AUTO` so it grows freely
- After appending to parent: horizontal `FILL`, vertical `HUG`
- Never `resize()`, never vertical `FILL`

**The `_Placeholder` Swap Pattern:**
- Card body exposed as INSTANCE_SWAP property: `"Swap placeholder#70805:10"`
- Expandable Section body: `"Swap body content#23113:0"`
- Set via `setProperties()` — never `detachInstance()`

**FILL-Coercion Gotcha:**
- Off-canvas bodies with AUTO width cause Figma to coerce FILL children back to FIXED
- After swap into the wide card, re-assert FILL on direct children

**Cards:**
- No border, no shadow (visible from neutral-95 background contrast)
- Corner radius = 20px (`radius-border-4`)
- Elevation only for overlays (shadow-2/3/4)

**Column Templates:**
- 2-column (default): main `layoutGrow:2 minW:640` + sidebar `layoutGrow:1 minW:320`
- 3-column (dense console): left 280px fixed, center FILL minW:560, right 396px fixed
- 1-column: single FILL, everything stacked

**Component Selection Cheatsheet (27 entries):**
Maps UI needs to specific SLDS 2 components (e.g., "Region tabset → Tabs wrapped in Card", "Related list → Card + Data Table", "AI insight → AI Card").

**Hard Rules Table (21 non-negotiable rules):**
Covers Page Header config, column ratios, sizing modes, structure rules, component usage, token binding, and error handling.

---

### `guides/reference/component-library.md` — 219 Component Keys

The core reference file. Contains Figma `importComponentByKeyAsync` keys for every SLDS 2 library component, organized by category:

| Category | Count | Examples |
|----------|-------|----------|
| Chrome (page shell) | 10 | Global Header, Console Nav, Page Header, Path, Docked Utility Bar |
| Layout & containers | 8 | Card, Nested Card, Expandable Section, Accordion, Summary Detail |
| Forms & inputs | 38 | Input (5 variants), Textarea (3), Combobox (4), Checkbox, Radio, Select, Slider, etc. |
| Buttons | 16 | Brand, Neutral, Base, Destructive, Success, Inverse, Stateful, Icon variants |
| Navigation | 5 | Tabs, Scoped Tabs, Vertical Nav, Breadcrumb |
| Data display | 34 | Data Table, Tree, Badge (6 variants), Avatar (4), Pill (8), Carousel, Empty State (7) |
| Feedback & overlays | 30 | Modal, Toast (4), Alert (4), Notification, Tooltip, Prompt (8), Popover (9) |
| Progress & loading | 13 | Progress Bar, Progress Indicator, Progress Ring (5), Spinner (3) |
| Activity & feed | 12 | Activity Timeline, Activity items (6 types), Feed components (4) |
| Text & drop zones | 2 | Text Link, Drop Zone |

Each entry has:
- Component name with variant specification
- Readiness indicator (`⚡` = production, `📝` = draft)
- Type (`COMP` = directly instantiable, `SET` = component set requiring variant resolution)
- 40-character hex key for `importComponentByKeyAsync`

**Key Recovery Procedure:**
When keys fail (library republished), the file documents three resolver scripts:
1. Component resolver — get node ID, read `.key` property
2. Text style resolver — enumerate local text styles
3. Color variable resolver — enumerate Color Mode collection variables

If resolvers fail → stop and contact Pascal Mercier.

**Component Usage Rules (appendix):**
Detailed usage rules for Buttons, Tabs, Scoped Tabs, Cards, Accordion, Input View Mode, Data Table, Badge, Pills, Modal, Toast, Alert, and AI/Agentforce components.

---

### `guides/reference/color-tokens.md` — SLDS 2 Color System

Contains 30+ semantic color variable keys for Figma's variable system:

| Role | Token | Key (40-char hex) |
|------|-------|----|
| Page background | color/surface/2 | `345a6f12...` |
| Card/panel background | color/container/1 | `da08e6a9...` |
| Primary text | color/on-surface/2 | `c5f3266a...` |
| Link/accent | color/accent/1 | `5536c28e...` |
| Error | color/error/1 | `959cefae...` |
| etc. | ... | ... |

**Color binding helper function:**
```js
async function boundFill(key) {
  if (!varCache[key]) varCache[key] = await figma.variables.importVariableByKeyAsync(key);
  return figma.variables.setBoundVariableForPaint(
    { type:'SOLID', color:{r:0,g:0,b:0} }, 'color', varCache[key]);
}
```

Also documents:
- **Border radius scale** (4px / 8px / 12px / 20px / circle)
- **Shadow/elevation rules** (no shadow on cards; shadow-2/3/4 for overlays only)
- **Spacing scale** (4px base, 8 values from 4px to 64px)
- **Font weight hooks** (Light 274, Regular 400, Semibold 590, Bold 700)
- **Design principles** (85-5-10 color rule, progressive disclosure, accessibility)

---

### `guides/reference/text-styles.md` — SLDS 2 Typography

23 importable text styles with their Figma style keys:

| Role | Style name | Size |
|------|-----------|------|
| Record title (H1) | Titles/font-scale-4/Semibold | 24px |
| Section heading | Body/font-scale-1/Semibold | 14px |
| Body / field value | Body/font-scale-base/Regular | 13px |
| Field label | Body/font-scale-neg-1/Regular | 12px |
| KPI number | Titles/font-scale-5/Regular | 28px |
| Display (large) | Display/font-scale-8/Light | (largest) |

**Text style helper function:**
```js
async function applyTextStyle(textNode, styleKey) {
  if (!styleCache[styleKey]) styleCache[styleKey] = await figma.importStyleByKeyAsync(styleKey);
  await textNode.setTextStyleIdAsync(styleCache[styleKey].id);
}
```

Key rules:
- Font family is always **SF Pro** (must be loaded before any `characters` write)
- Color is NOT part of a text style — bind it separately via color tokens
- `on-surface/3` is for headings/titles only; body text uses `on-surface/1` or `on-surface/2`

---

### `guides/reference/page-blueprints.md` — Per-Object Page Layouts

Detailed layout specifications for 5 Salesforce objects + a generic fallback:

#### Account (2-column, no Path, Console)
- Page Header: Standard Account icon, actions (Open in Org62, Add Contact, etc.)
- Compact highlights: Account Owner, Primary Account Name, Record Type, etc.
- Main tabs: Account Overview, Planning, Research, Opportunities, Contracts, Assets, People, Details
- Sidebar (stacked cards): Slack link, Account Restrictions, Key Stakeholders, Activities

#### Opportunity (2-column 65/35, Path, Console)
- Path: Discovery → Solution → Proposal → Negotiate → Order Processing → Closed
- Main tabs: Details, Teams, Solutions, Transact, Related, History
- Sidebar: AI Sales Coach card (Brand CTA), Activities/Slack Tabs in a Card

#### Quote (1-column full-width, Path, Docked Utility Bar)
- No sidebar — uses Docked Utility Bar instead
- Issue banners (inline, not Toast)
- Tabs: Related, Header, Products, Pricing, Billing, Terms, Slack
- Products tab: dense Data Table with per-column inline search

#### Case — 2-column (main 60%, sidebar 40%)
- Sidebar: Timer card, Einstein AI card, Attachments, Related/Articles Tabs in Card
- Details tab: long scrollable Expandable Sections

#### Case — 3-column (left 280px fixed, center FILL, right 396px fixed)
- Left: compact Expandable Sections (field details)
- Center: Case Updates + Slack tabs (Activity Feed)
- Right: same sidebar cards as 2-column

#### Asset (2-column + KPI strip)
- KPI Metrics Row above tabs (3 equal-width cards)
- Main tabs: Related, Details, Usage Rates
- Sidebar: Activity timeline only

#### Reusable Sidebar Card Patterns
Documents 6 common sidebar card types: AI/Einstein, Timer, AI Sales Coach, Key Stakeholders, KPI metric, Related list.

---

## The Eval System

### Objectives (4)

1. **Blueprint Application** — correct layout, chrome, sidebar order, Page Header config
2. **Token Binding** — real components for fields, bound colors/text (no hardcoded values)
3. **Tabs & Sizing** — correct tab hierarchy, FILL+HUG sizing, no detaching
4. **Related Lists** — Data Table instances in card bodies, no custom row layouts

### Eval Tasks (5)

| Task | Type | Purpose |
|------|------|---------|
| trigger-account-page-positive | Trigger | Should activate skill on "build an Account page" |
| trigger-generic-ui-negative | Trigger | Should NOT activate on generic non-Salesforce UI request |
| routing-blueprint | Routing | Should read page-blueprints.md when building a page |
| effectiveness-account-blueprint | Effectiveness | Full Account page build matches blueprint spec |
| boundary-defer-to-figma-use | Boundary | Should defer to /figma-use for Plugin API mechanics |

### Benchmark Tasks (8 + 5 symlinks)

Broader coverage: trigger tests for Opportunity, Case, code-implementation (negative), Figma API (negative); routing tests for workflow, sizing, color tokens, component keys.

Each task has:
- `instruction.md` — the user prompt
- `task.toml` — task configuration
- `tests/` — grader configuration (JSON schema or shell script)

Run with: `expert-curator:sfswebench evals run evals/` and `benchmarks/`

---

## Plugin Manifest

### `.claude-plugin/plugin.json`
Registers the skill with Claude Code's plugin system. Declares:
- Skill name and trigger description
- Path to SKILL.md
- Auto-trigger conditions

### `.claude-plugin/marketplace.json`
Marketplace metadata for the `pmercier-plugins` marketplace:
- Package name, version, author
- Install/update commands

---

## Installation & Usage

```bash
# Add marketplace
claude plugin marketplace add salesforce-ux-emu/slds-figma-mockups-skill

# Install
claude plugin install slds-figma-mockups@pmercier-plugins

# Update
claude plugin update slds-figma-mockups@pmercier-plugins

# Uninstall
claude plugin uninstall slds-figma-mockups@pmercier-plugins
```

Or via `/plugin` menu in Claude Code.

Requires restart after install. The skill auto-triggers on Salesforce page mockup requests, or invoke explicitly with `/slds-figma-mockups`.

---

## Mandatory Prerequisite: /figma-use

Before any `use_figma` call, the skill loads `/figma-use` (a separate Figma Plugin API skill). This provides:
- Font loading procedures (`figma.loadFontAsync`)
- `layoutSizing` enum handling
- Page-context reset rules
- General Plugin API mechanics

Without it, builds fail with hard-to-debug font loading or sizing coercion errors.

---

## Key Technical Concepts

### The Swap Pattern
SLDS 2 Card and Expandable Section components expose their body as an **INSTANCE_SWAP property** — a slot designed to accept any component. You set it with `setProperties()`:

```js
card.setProperties({ "Swap placeholder#70805:10": localComponent.id });
```

The `#id` suffix is file-specific. Discover property names via `instance.componentProperties`.

**Never `detachInstance()`** — detaching severs the library link, meaning design system updates won't reach the mockup.

### Local Content Components
Every swappable body needs a local `ComponentNode` (not a frame). Built off-canvas (x=2200+) before the page frame, then referenced by ID in `setProperties()`.

Sizing: both axes AUTO, then FILL+HUG after swap.

### The FILL-Coercion Gotcha
When a local body has `counterAxisSizingMode: 'AUTO'`, Figma silently coerces its children from FILL to FIXED (FILL has nothing to stretch into). After swapping the body into the wide card, you must re-assert FILL on direct children.

### Font Loading
SF Pro must be loaded (Regular, Semibold, Bold, Light) before any `characters` write. The skill loads specific weights as needed per step.

### Library File Key
All 219 components, all text styles, and all color variables are resolved from a single SLDS 2 Figma library file: **`RiY2reCmbX0Jyq7QAFL8SE`** (read-only).

---

## Maintenance

**Component keys go stale** when Salesforce republishes the SLDS 2 library. The `component-library.md` file documents recovery procedures (read-only resolvers). If recovery fails, contact Pascal Mercier (Slack: https://salesforce.enterprise.slack.com/team/WB27UHB9R).

**Versioning:** Beta versions increment as 0.13 → 0.14 (not → 1.0).

**Testing:** Run evals to validate correctness after any guide update.

---

## Relationship to Other Tools

| Tool | Relationship |
|------|-------------|
| `/figma-use` | Mandatory prerequisite (Plugin API mechanics) |
| `figma-design-to-code` | Reverse direction (Figma → code); this skill is code → Figma |
| `dex-storybook-next` | Complementary code workbench; this skill's mockups can be implemented there |
| SLDS 2 Figma library | Source of truth for all 219 component keys, tokens, and styles |

---

## Summary

The slds-figma-mockups-skill is a precision instrument: it encodes the exact knowledge needed to produce pixel-accurate Salesforce page mockups in Figma using the real SLDS 2 design system library. Its power comes from:

1. **219 verified component keys** — no guessing, no hand-drawing
2. **30+ semantic color tokens** — no hardcoded hex
3. **23 text styles** — no hardcoded font sizes
4. **5 object-specific page blueprints** — correct layout by default
5. **A rigorous 7-step workflow** — consistent results every time
6. **13 eval/benchmark tasks** — measurable quality gate

Without it, Claude would guess at layouts, hand-draw components, hardcode colors, and produce mockups that don't match real Salesforce pages.
