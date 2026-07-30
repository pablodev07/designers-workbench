---
name: slds-figma-mockups
description: >-
  Build Salesforce page mockups in Figma using real SLDS 2 component instances.
  Use when asked to mock up, design, or lay out any Salesforce/Lightning UI —
  Account, Contact, Opportunity, Quote, Case, Asset, or any screen composed
  from SLDS 2 components.
---

# Salesforce Figma Mockups (SLDS 2)

**Version: 0.14 (beta)** — a router. Component keys, tokens, blueprints, and the
build procedure live in `guides/`. Load only the guide(s) the task needs.

**Versioning convention:** beta versions increment as 0.13 → 0.14, not → 1.0.

---

## Scope

**Handles:** composing Salesforce/Lightning record pages, list views, and
console screens in Figma from real SLDS 2 library instances — chrome, cards,
tabs, related lists, forms, activity feeds, sidebars.

**NOT for:** implementing a Figma design as code (use `figma-design-to-code`);
building the SLDS design system itself (that library already exists); generic
non-Salesforce UI; editing files you didn't create without asking.

---

## MANDATORY prerequisite

Before any `use_figma` call, load the Figma Plugin API rules:

```
/figma-use
```

Skipping it causes hard-to-debug failures (unloaded fonts, sizing coercion,
page-context resets).

---

## Routing — which guide to read

| When you're about to… | Read this guide |
|---|---|
| Start a build / follow the Step 0–6 procedure | [guides/building/workflow.md](guides/building/workflow.md) |
| Set auto-layout sizing, swap a card body, size columns, choose a container | [guides/building/sizing-rules.md](guides/building/sizing-rules.md) |
| Look up a component's import key (any SLDS 2 component) | [guides/reference/component-library.md](guides/reference/component-library.md) |
| Pick the layout/sidebar/tabs for a specific object | [guides/reference/page-blueprints.md](guides/reference/page-blueprints.md) |
| Apply a text style (never hardcode fontSize) | [guides/reference/text-styles.md](guides/reference/text-styles.md) |
| Bind a color, radius, shadow, or spacing token (never hardcode hex) | [guides/reference/color-tokens.md](guides/reference/color-tokens.md) |
| Recover a component/style/color key that failed to import | [guides/reference/component-library.md](guides/reference/component-library.md#recovering-a-stale-key) |

**Typical build reads, in order:** page-blueprints (pick defaults) → workflow
(the procedure) → component-library + text-styles + color-tokens (as you place
each element) → sizing-rules (whenever layout behaves unexpectedly).

---

## Non-negotiables (full list in [sizing-rules.md](guides/building/sizing-rules.md#hard-rules-non-negotiable-enforced-in-every-build))

These four cause the most rework — internalize them before building:

1. **Real instances only.** Import SLDS 2 components by key; never hand-draw a
   component that exists in the library. Swap card/section bodies via
   `setProperties({"Swap placeholder…": id})` — **never `detachInstance()`**.
2. **Tokens, never literals.** Colors via `boundFill(variableKey)`; text via
   `applyTextStyle(node, styleKey)`. No hardcoded hex or fontSize.
3. **Swapped body sizing:** `layoutSizingHorizontal = 'FILL'` +
   `layoutSizingVertical = 'HUG'`. Never vertical `'FILL'` (clips), never
   `resize()` on a local component (locks it FIXED).
4. **Everything lives in a Card.** Nothing floats bare in the content area.
   Region tabsets (main OR sidebar) are **Tabs** wrapped in a Card; **Scoped
   Tabs** only nest under a primary tab.

---

## When a component/style/color key fails to import

Keys go stale when Salesforce republishes the SLDS 2 library. On any
`importComponentByKeyAsync` / `importStyleByKeyAsync` / `importVariableByKeyAsync`
failure:

1. **Try the read-only resolvers** in
   [component-library.md → Recovering a stale key](guides/reference/component-library.md#recovering-a-stale-key).
2. **If recovery fails, stop** and tell the user to contact the skill's author:

   > **Pascal Mercier** — Slack DM:
   > https://salesforce.enterprise.slack.com/team/WB27UHB9R

Never silently substitute a guessed key or fall back to hardcoded hex/fontSize.

**Library file key (read-only source):** `RiY2reCmbX0Jyq7QAFL8SE`
