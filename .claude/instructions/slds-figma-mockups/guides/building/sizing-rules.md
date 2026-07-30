# Composition, Layout & Sizing Rules

## Local component sizing (the core sizing rule)

**Sizing rule for all local components:** both `primaryAxisSizingMode` and
`counterAxisSizingMode` must be `'AUTO'` so the component grows freely in all
directions and fits whatever content is swapped into it. After the instance is
appended to its parent, set `layoutSizingHorizontal = 'FILL'` (span the card
width) and `layoutSizingVertical = 'HUG'` (grow in height with its content).
**Never set the swapped body to `'FILL'` vertically** — a vertical FILL forces
the body to the card's current height and stops the card from growing with its
children, clipping content.

**Critical — never call `resize()` on a local component.** `resize()` resets
both sizing modes to `FIXED` and locks the dimensions, overwriting any `AUTO`
assignment made before or after the call. Omit it entirely:

```js
const comp = figma.createComponent();
comp.layoutMode = 'VERTICAL';
comp.fills = [];
comp.primaryAxisSizingMode = 'AUTO';   // ✅ grows with content
comp.counterAxisSizingMode = 'AUTO';   // ✅ grows with content
// NO resize() call — width/height are controlled by the parent after swap
comp.x = 2200; comp.y = rootY;
```

After swapping into a Card body, set sizing on the swapped instance so it spans
the card width and hugs its content vertically (letting the card grow):
```js
const swapped = card.findOne(n => n.type === 'INSTANCE' && n.name.startsWith('Local/'));
if (swapped) {
  swapped.layoutSizingHorizontal = 'FILL';
  swapped.layoutSizingVertical = 'HUG';   // grow with content — never 'FILL'
}
```

## The `_Placeholder` swap pattern (core rule)

Card and Expandable Section expose their body as an **INSTANCE_SWAP** property —
an intentional swap slot. Set the property; **never `detachInstance()`** (it
severs the library link and stops design-system updates from reaching the mockup).

```js
// Verified property names (the #id suffix is file-specific — confirm via componentProperties):
//   Card:               "Swap placeholder#70805:10"  (INSTANCE_SWAP)
//   Expandable Section: "Swap body content#23113:0"  (INSTANCE_SWAP)
//                     + "Section title#20703:0"      (TEXT)
card.setProperties({ "Swap placeholder#70805:10": contentComponentId });
const swapped = card.findOne(n => n.type==='INSTANCE' && n.name.startsWith('Local/'));
if (swapped) {
  swapped.layoutSizingHorizontal = 'FILL';  // span the card width (else it hugs, leaving a gap)
  swapped.layoutSizingVertical = 'HUG';     // grow with content — never 'FILL' (else it clips)
}
```
Discover property names by reading `instance.componentProperties` once; match by
type (INSTANCE_SWAP for body slots, TEXT for labels, BOOLEAN for show/hide).

### FILL-coercion gotcha (re-assert after swap)

While a local body still HUGS width off-canvas (`counterAxisSizingMode: 'AUTO'`),
Figma silently coerces its FILL children back to FIXED at their content width —
FILL has nothing to stretch into yet. After swapping the body into the wide card,
**re-assert FILL on the body's direct children**, or the tabs/table/content stay
pinned at their old narrow width:
```js
for (const child of swapped.children) {
  try { child.layoutSizingHorizontal = 'FILL'; } catch (e) {}
}
```

## Cards — SLDS 2 specifics

**No border, no shadow.** Cards are visible because they sit on a `neutral-95`
(`color/container/2`) background. Adding strokes or drop shadows is incorrect.
```js
card.fills = [];             // card handles its own fill
// DO NOT: card.strokes / card.effects on base cards
```
Elevation is for overlays only (shadow-2 menus, shadow-3 panels/tooltips/toasts,
shadow-4 modals/popovers). Card corner radius = 20 (`radius-border-4`).

## Auto-layout sizing order

```js
parent.appendChild(child);              // ALWAYS append FIRST
child.layoutSizingHorizontal = 'FILL';  // THEN set FILL/HUG
main.layoutGrow = 2;    main.minWidth = 640;
sidebar.layoutGrow = 1; sidebar.minWidth = 320;  // no maxWidth — grow ratio enforces 2/3–1/3
```
`minWidth`/`maxWidth` must be set AFTER the node is in an auto-layout parent. Use
auto-layout for every structural container; absolute x/y only for overlays.

## Column templates

- **2-column (DEFAULT):** main `layoutGrow:2 minW:640` + sidebar `layoutGrow:1
  minW:320`. Content Area = horizontal auto-layout, 16px padding, 16px gap.
- **3-column (dense console):** left 280px fixed · center FILL minW:560 · right 396px fixed
- **1-column:** single FILL column, everything stacked (Path → Tabs → panel → Cards)
- **List view:** Page Header → filter/tab bar (40px) → Data Table (FILL, 36px rows)

## Component selection cheatsheet

| Need | Use |
|---|---|
| Primary CTA | Button — Brand (1 max per view) |
| Secondary action | Button — Neutral |
| Destructive confirm | Button — Destructive |
| Toggle/persistent state | Button — Stateful |
| Region tabset (main OR sidebar) | Tabs (3–5; FILL width, 40px) — wrapped in a Card |
| Secondary tabset nested under a primary tab | Scoped Tabs |
| Left-sidebar in-page nav | Vertical Navigation (min 225px) |
| Related list in sidebar | Card (swap body, no border/shadow) |
| Field group organizer | Expandable Section (≥2 → Accordion) |
| Record key/value summary | Summary Detail |
| Activity/chatter feed | Activity Timeline / Feed — Post |
| Stage tracker (Opp/Case) | Path (top of content, above tabs) |
| Status label (non-interactive) | Badge |
| Person/entity chip | Avatar (48 hero / 32 row / 24 timeline) |
| System banner (inline, top) | Alert |
| Action confirmation (overlay) | Toast (1 at a time) |
| Focused/destructive confirm | Modal |
| Contextual help | Popover |
| Icon clarification | Tooltip (hover/focus, max 200 chars) |
| AI insight | AI Card (empty until generated; show sources) |
| AI assistant input | Prompt (always bottom-center) |

## Avatar / icon sizing in context

| Location | Avatar | Icon |
|---|---|---|
| Record hero / page header | 48 (Large) | Object 32–48 |
| Related-list rows | 32 (Medium) | Standard 16–24 |
| Activity timeline items | 24 (Small) | Utility 16 |
| Global header | 32 | Utility 24 |

Icon types: **Utility** (no bg — buttons/nav/tables/forms), **Standard/Custom
Object** (colored — headers/lists/avatars), **Doctype** (files/feeds), **Action**
(mobile action bar only, never web). In buttons/pills/badges use utility icons
only; in avatars use standard/custom object icons only.

---

# Hard rules (non-negotiable, enforced in every build)

| Rule | Why |
|---|---|
| Page Header: `showDetailRow=true` on records, `showBottomRow=true` on List Views (never both) | Correct row visibility |
| Page Header icon = standard object icon for that object; ask if unknown | Matches real Salesforce |
| Column ratio = `layoutGrow 2:1`, no `maxWidth` on sidebar | Correct 2/3–1/3 split |
| Local component height = `primaryAxisSizingMode:'AUTO'`; never `resize()` on height | Hugs content, never clips |
| After swap → `swapped.layoutSizingHorizontal = 'FILL'` + `layoutSizingVertical = 'HUG'` | Span card width, grow with content; never vertical `'FILL'` |
| Main column = 1 Card, no header, no footer; Tabs first, then tab panel | Correct structure |
| TabPanel background = transparent (`fills = []`) | Card surface shows through |
| Do NOT wrap tab panel content in an extra nested card | Content is already in the card |
| Multiple distinct content blocks in a tab panel → each in its own Card/Nested card | Clear grouping |
| Related lists = `⚡ Data Table` instance, never custom rows | Consistency + correct component |
| **Tabs** = region-level tabset (main OR sidebar), always wrapped in a Card | Correct scope; sidebar treated like main section |
| **Scoped Tabs** = secondary tabset nested under a primary tab only | Never as the region-level tabset |
| Use `⚡ Nested card` only when grouping logically distinct sub-sections within a card | Prevents unnecessary nesting |
| Everything in the content area lives inside a Card; nothing floats outside | No orphaned content |
| Build local content components BEFORE the page frame | Can't swap what doesn't exist |
| Fields = `⚡ Input - Read Only View Mode` instances | No raw text label/value pairs |
| Swap via `setProperties({"Swap placeholder…": id})` | Never `detachInstance()` |
| Colors = `boundFill(variableKey)` | Never hardcode hex |
| Text = `applyTextStyle(node, styleKey)` | Never hardcode fontSize |
| All chrome = Console variant (not plain nav) | Matches real Salesforce |
| Blueprint tab set / sidebar order as default | Matches real Salesforce |
| 1 Brand button max per view | SLDS guidelines |
| On a failed key: try the resolvers, then contact Pascal Mercier — never guess | Keys go stale as the library evolves |
