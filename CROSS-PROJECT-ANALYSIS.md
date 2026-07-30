# Cross-Project Analysis: DEX Storybook Next vs. SLDS Figma Mockups Skill

## Executive Summary

These two projects are complementary halves of a Salesforce UI prototyping pipeline:

- **slds-figma-mockups-skill** — teaches Claude to build high-fidelity Salesforce page *mockups in Figma* using real SLDS 2 library instances and design tokens.
- **dex-storybook-next** — provides a *running code workbench* where SLDS-compliant LWC components are built, documented, and previewed in both an app shell and Storybook.

Together, they form a **design-to-code round-trip**: Figma mockup (visual spec) <-> live LWC implementation (working prototype). Separately, each only covers one half of that loop.

---

## How They Relate

| Dimension | slds-figma-mockups-skill | dex-storybook-next |
|-----------|--------------------------|---------------------|
| **Medium** | Figma (visual design tool) | Code (LWC + Vite + Storybook) |
| **Output** | Static high-fidelity page mockup | Running interactive components |
| **Design System** | SLDS 2 Figma library (component keys, tokens) | SLDS 1, SLDS 2, and WES CSS packages |
| **Audience** | Designers, PMs, stakeholders (visual review) | Developers, demo engineers (interactive review) |
| **Scope** | Full Salesforce pages (Account, Opp, Case, etc.) | Individual components + composed pages |
| **AI interaction** | Claude builds in Figma via Plugin API | Claude generates LWC code files |
| **Portability** | Lives in Figma file | Code intended to be portable to a Salesforce org |

---

## Where Each Project Is Stronger

### slds-figma-mockups-skill excels at:

1. **Page-level composition blueprints** — knows exactly what an Account, Opportunity, Quote, Case, or Asset page looks like (chrome, sidebar order, tab structure, field layouts).
2. **Design token precision** — 219 component import keys, semantic color variable keys, text style keys. Enforces "never hardcode hex/fontSize."
3. **SLDS 2 composition rules** — `_Placeholder` swap pattern, FILL+HUG sizing, Cards-wrap-everything rule, console chrome structure.
4. **Object-specific knowledge** — per-object sidebar anchors, Path presence, column ratios, Page Header configuration.
5. **Figma Plugin API expertise** — font loading, auto-layout sizing order, detach avoidance, off-canvas staging.

### dex-storybook-next excels at:

1. **Working code** — real LWC that runs in a browser, responds to input, fires events.
2. **Component-level depth** — 67 individual component rule files (buttons, inputs, modals, data tables, etc.) with usage guidance, accessibility requirements, interaction states.
3. **Multi-design-system support** — components verified under SLDS 1, SLDS 2, and WES simultaneously.
4. **Interactive documentation** — Storybook controls, MDX docs, live Canvas previews.
5. **Health checking / linting** — `/ui-health-check` and `/ui-health-fix` commands for accessibility, SLDS compliance, and best practices.
6. **Pattern guidance** — 20 pattern documents covering data entry, loading states, empty states, agentic experiences, messaging UI, charts, etc.
7. **Accessibility depth** — WCAG 2.1 enforcement, screen reader testing expectations, focus management, ARIA attributes.
8. **Testing standards** — Jest test requirements, 85% coverage targets, JSDoc documentation.

---

## The Gap: What Each Lacks Without the Other

### slds-figma-mockups-skill without dex-storybook-next:

| Gap | Impact |
|-----|--------|
| No code output | Mockup cannot be validated as working software |
| No interaction testing | Can't verify event handling, form validation, error states |
| No accessibility verification | Figma mockups don't prove WCAG compliance |
| No component-level rules | Knows "use a Data Table" but not the 40+ rules for building one correctly in code |
| No multi-theme verification | Only targets SLDS 2; can't prove SLDS 1 or WES compatibility |
| No running demo | Stakeholders see a picture, not a clickable prototype |

### dex-storybook-next without slds-figma-mockups-skill:

| Gap | Impact |
|-----|--------|
| No page-level blueprints | Knows individual components but not how Salesforce composes a real Account/Case/Opp page |
| No design handoff format | No Figma deliverable for designer review or handoff |
| No design token keys | Can't link to the exact SLDS 2 Figma library source |
| No object-specific sidebar/tab knowledge | Doesn't know that Account sidebar = Slack -> Restrictions -> Stakeholders -> Activity |
| No designer collaboration path | Developers build in isolation from the design process |

---

## The Bridge: How DEX Storybook Next Completes the Loop

Once a mockup exists in Figma (built via slds-figma-mockups-skill), **dex-storybook-next provides the path back to code:**

```
[Designer/PM request]
       |
       v
slds-figma-mockups-skill  -->  High-fidelity Figma mockup
       |                           (page blueprints, tokens, composition)
       |
       v (design-to-code)
dex-storybook-next        -->  Working LWC components + app shell
       |                           (interactive, accessible, tested, multi-theme)
       |
       v
Salesforce org deployment  -->  Production-ready component
```

Without dex-storybook-next, the mockup remains a static artifact with no validated code path. Without slds-figma-mockups-skill, the code workbench has no authoritative visual spec to build from.

---

## Instructions, Guidelines & Patterns: Side-by-Side Comparison

### What slds-figma-mockups-skill has that dex-storybook-next does NOT:

| Content | File | Purpose |
|---------|------|---------|
| 219 Figma component import keys | `component-library.md` | Exact keys to instantiate SLDS 2 components in Figma |
| SLDS 2 color token variable keys | `color-tokens.md` | 30+ semantic color bindings with Figma variable IDs |
| SLDS 2 text style keys | `text-styles.md` | 23 importable text styles with exact keys |
| Page blueprints (5 objects) | `page-blueprints.md` | Account/Opp/Quote/Case/Asset layout specs |
| Build workflow (Steps 0-6) | `workflow.md` | End-to-end Figma page construction procedure |
| Sizing/composition rules | `sizing-rules.md` | Auto-layout, swap pattern, column templates |
| Figma Plugin API patterns | Throughout | Font loading, `setProperties`, `boundFill`, off-canvas staging |
| Key recovery procedure | `component-library.md` | What to do when Figma keys go stale |
| Eval/benchmark suite | `evals/`, `benchmarks/` | 13 tasks to validate skill correctness |
| Component selection cheatsheet | `sizing-rules.md` | Which SLDS component to pick for each UI need |
| Design principles (color 85-5-10) | `color-tokens.md` | Visual weight distribution rules |

### What dex-storybook-next has that slds-figma-mockups-skill does NOT:

| Content | File(s) | Purpose |
|---------|---------|---------|
| 67 individual component rule files | `rules/components/*.md` | Deep usage rules per component (buttons, inputs, modals, etc.) |
| 20 pattern documents | `rules/patterns/*.md` | Agentic experiences, charts, empty states, messaging, etc. |
| Core principles (comprehensive) | `rules/core-principles.md` | UX, visual design, accessibility, forms, testing |
| Component creation procedure | `component-creation.md` | Step-by-step LWC creation in this project |
| UI health check/fix commands | `commands/ui-health-*.md` | Automated accessibility and SLDS compliance scanning |
| Multi-design-system support | Project architecture | SLDS 1, SLDS 2, WES simultaneously |
| Storybook integration | Built-in | Controls, docs pages, Canvas previews |
| App shell with routing | Built-in | Full SPA prototyping environment |
| Category rollup files | `rules/categories/*.md` | Grouped rule sets for IDE context optimization |
| Testing standards | `core-principles.md` | Jest, 85% coverage, JSDoc, screen reader testing |
| Interaction pattern depth | Component files | Every state (hover, focus, active, disabled, error) |
| Responsive design rules | Multiple files | Breakpoints, fluid sizing, touch targets |

### What BOTH have (overlapping):

| Topic | Mockups Skill Version | Storybook Version |
|-------|----------------------|-------------------|
| "Use real components, not raw HTML" | Import by key, never hand-draw | Use `<lightning-*>`, never raw HTML |
| "Never hardcode colors" | `boundFill(variableKey)` | SLDS styling hooks, utility classes |
| "Cards wrap everything" | Composition rule | Core principle: "All content must be in card containers" |
| Component selection guidance | Cheatsheet (27 entries) | 67 individual component files |
| Spacing rules | SLDS 2 spacing scale (4px base) | SLDS spacing utility classes |
| Accessibility awareness | Mentions contrast, states | Full WCAG 2.1 coverage with testing |
| Icon usage (standard vs utility) | Brief mention | Detailed rules |
| Progressive disclosure | Mentioned in design principles | Full UX principle |

---

## Recommendations

1. **Use together for full-loop prototyping**: Start with slds-figma-mockups for visual sign-off, then implement in dex-storybook-next for working code.

2. **Port page blueprints to dex-storybook-next**: The per-object layout knowledge (Account, Opportunity, etc.) would make dex-storybook-next capable of generating complete page compositions, not just individual components.

3. **Port component rules to slds-figma-mockups-skill**: The 67 component rule files could inform better mockup decisions (e.g., knowing that a data table needs loading/empty/error states could prompt the mockup to show those variants).

4. **Share the component selection cheatsheet**: The mockup skill's cheatsheet maps UI needs to SLDS components; dex-storybook-next would benefit from the same quick-reference.

5. **Create a design-to-code skill**: A bridge skill that reads a Figma mockup (via `get_design_context`) and generates the corresponding LWC code into dex-storybook-next, guided by both projects' rules.
