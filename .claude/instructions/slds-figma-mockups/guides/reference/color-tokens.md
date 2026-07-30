# Colors (SLDS 2 color library)

**Bind colors from the library's variables — never hardcode hex.** SLDS 2 colors
are Figma variables (there are no paint styles). Use the semantic tokens below;
`setBoundVariableForPaint` returns a NEW paint — capture and assign, never mutate.

```js
// Color binding helper — always use this, never hardcode hex:
const varCache = {};
async function boundFill(key) {
  if (!varCache[key]) varCache[key] = await figma.variables.importVariableByKeyAsync(key);
  return figma.variables.setBoundVariableForPaint(
    { type:'SOLID', color:{r:0,g:0,b:0} }, 'color', varCache[key]);
}
```

## Role → token (semantic, recommended)

| Layout role | Token | Key |
|---|---|---|
| Page / app background | color/surface/2 | `345a6f122ed978735d1ba52b2d853a0166830e81` |
| Card / panel / section bg | color/container/1 | `da08e6a976ed57caff18125fec99c2bebe55d424` |
| Sunken / striped row | color/container/2 | `eeb6ac9733df09f02d43b9c0e14d3b4492a6d034` |
| Primary text | color/on-surface/2 | `c5f3266aeab770686977cfb75e314a480a9c3cfc` |
| Secondary / label text | color/on-surface/1 | `0fb7d58fcd7f9d326c9ef6bc8c77241a3842e0de` |
| **Title / heading text (only)** | color/on-surface/3 | `aabcc172f8b0a5fbfc670c3c36029b005298dcd0` |
| Link / accent / brand fill | color/accent/1 | `5536c28ee5701555603d0d0f20b8b017b3a0d938` |
| On-accent text (on brand) | color/accent/on-accent-1 | `ff2a6c585d0c3f88771eda645246dbd0421fc444` |
| Divider / hairline border | color/border/1 | `8ec92e64422f4d0b69ca401cd8570cc504fc8442` |
| Stronger border | color/border/2 | `e36d796f70adf5bf61b22f270ecdcb2e9116de6e` |
| Error text/icon | color/error/1 | `959cefae47d17ac102415aa121251f5734008ab3` |
| Error surface | color/error/container-1 | `326382b174ea6150edf39ba9ffb053c01725e1d0` |
| Warning | color/warning/1 | `cbb58a608781b91dc0c455db6b9ef87bad9ec19e` |
| Warning surface | color/warning/container-1 | `6b90f2714f72b688a353e57455753fa0519807e9` |
| Success | color/success/1 | `dcd17c1897c0f146ff850bb04be620d6c41c15c6` |
| Success surface | color/success/container-1 | `c33b83ef6fbf95cbb754f56f9daeec25b062087c` |
| Info | color/info/1 | `178762c70f7a302bb648e21c95653146ceabd4bc` |
| Info surface | color/info/container-1 | `9f7cdddfa091c015d95adb40daf4f859b5d516ce` |
| Disabled | color/disabled/1 | `d0b4cf48baed63f7abc69d3d3336e158840ca87f` |
| Surface 1 (white) | color/surface/1 | `f79c6c15e1fa636be97de7a782603fa7c7798aff` |
| Container 3 (Neutral 90) | color/container/3 | `d55657b250caf977442f8e95b79ed5c9cc141a66` |

`const SURFACE_2 = "345a6f122ed978735d1ba52b2d853a0166830e81"; // color/surface/2 — page bg`

**`on-surface/3` is for headings/titles only** — body text uses `on-surface/1` or `on-surface/2`.
Text color is not part of a text style; always set the node's `fills` with a bound
`on-surface/*` or `accent/*` token.

---

# Styling Hooks (radius, shadows, spacing, weight)

Verified from the SLDS 2 Style Guide (`hk63gOLXETez3jgaR0xxpd`). Only use hooks
listed here; if you need one that isn't listed, ask the user.

## Border radius — set `node.cornerRadius` to the px value

| Token | px | Apply to |
|---|---|---|
| `--slds-g-radius-border-1` | 4 | Badges, checkboxes |
| `--slds-g-radius-border-2` | 8 | Text inputs, comboboxes, textareas, tooltips |
| `--slds-g-radius-border-3` | 12 | Menus, popovers |
| `--slds-g-radius-border-4` | 20 | **Cards**, modals, docked composers |
| `--slds-g-radius-border-circle` | 100% | Buttons, button icons, avatars, radios, pills |

Don't mix sharp and rounded corners within the same component.

## Shadows / elevation

**No shadow on base-level components** (cards on surface, section rows). Elevation
is for overlays only:

| Hook | Components |
|---|---|
| `--slds-g-shadow-2` | Menu, docked footer, docked utility bar, color picker, notifications |
| `--slds-g-shadow-3` | Panel, docked composer, tooltip, toasts |
| `--slds-g-shadow-4` | Modal, popover, App Launcher |

## Spacing scale (4px base)

Use literal px from this scale in auto-layout; never arbitrary values (5, 10, 15).

| Token | px | Use |
|---|---|---|
| spacing-1 | 4 | Label→input gap, icon margins |
| spacing-2 | 8 | Compact row gaps, inline spacing |
| spacing-3 | 12 | Stacked form fields, pill gaps |
| spacing-4 | 16 | Card padding, section gaps, list row padding |
| spacing-5 | 24 | Column gutters (default), card-to-card gap |
| spacing-6 | 32 | Two-column gutter, section separators |
| spacing-7 | 40 | Page section gaps |
| spacing-8 | 48 | Large section separators |
| spacing-10 | 64 | Zone heights (header) |

Density-aware `--slds-g-spacing-var-*` (Comfy → Compact): var-1 4→2, var-2 8→2,
var-3 12→4, var-4 16→8, var-5 24→12, var-6 32→16. Use fixed tokens for the
layout skeleton; density-aware for component internals.

## Font weight

| Hook | Weight | Usage |
|---|---|---|
| `--slds-g-font-weight-3` | Light (274) | Display scale-7/8 only |
| `--slds-g-font-weight-4` | Regular (400) | Body, titles, standard content |
| `--slds-g-font-weight-6` | Semibold (590) | Buttons, small titles, emphasis |
| `--slds-g-font-weight-7` | Bold (700) | Emphasis in body text only — never headings |

---

# Design Principles

- **85-5-10 color:** 85% foundation (neutral surfaces), 5% accent (primary actions,
  selected states), 10% max expressive (data viz, branding). **Color is never the
  sole indicator** — always pair with label, icon, or pattern.
- **Progressive disclosure:** show essentials first, reveal complexity on demand.
- **Space strategically:** all spacing from the 4px token scale; content never
  touches the viewport edge (always padding between boundary and any card/frame).
- **Hierarchy:** never skip heading levels; group related content in cards.
- **Interactive states:** every interactive element defines Default / Hover /
  Focus / Active / Disabled. Library components handle their own.
- **Empty / loading / error:** every data-bearing component designs all three
  (spinner or skeleton for loading; guide toward action when empty; actionable
  error that never blames the user).
- **Accessibility:** text ≥4.5:1 contrast, UI objects ≥3:1; keyboard equivalent
  for every mouse action; logical tab order; body links distinguished by color
  *and* underline; persistent labels on all inputs (placeholder alone fails);
  action icons are native-mobile only.
- **Responsive:** mobile-first, fluid sizing, 44×44pt touch targets, readable at 200% zoom.
