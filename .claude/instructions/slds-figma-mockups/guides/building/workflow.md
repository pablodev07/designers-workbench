# Build Workflow (Steps 0–6)

The end-to-end procedure for building an SLDS 2 page mockup. Load the reference
guides as you go: [page-blueprints](../reference/page-blueprints.md),
[component-library](../reference/component-library.md),
[text-styles](../reference/text-styles.md), [color-tokens](../reference/color-tokens.md),
and [sizing-rules](sizing-rules.md).

## MANDATORY: Load figma-use before any use_figma call

```
/figma-use
```

This carries the Plugin API rules. Skipping it causes hard-to-debug failures.

---

## Step 0 — Pick the blueprint and clarify scope

Before touching Figma, identify the object and look up its blueprint in
[page-blueprints](../reference/page-blueprints.md).

| Object | Default layout | Sidebar | Path? | Console? |
|---|---|---|---|---|
| **Account** | 2-col | Slack → Restrictions → Stakeholders → Activity | No | Yes |
| **Opportunity** | 2-col | AI Sales Coach → Activities/Slack | Yes | Yes |
| **Quote** | 1-col full-width + Docked Utility Bar | None | Yes | Yes |
| **Case** | **2-col** (default); 3-col when user requests dense left detail rail | Timer → Einstein AI → Attachments → Related | No | Yes |
| **Asset** | 2-col + KPI strip above tabs | Activity only | No | Yes |
| **Other/unknown** | 2-col (main 2/3, sidebar 1/3) | Related lists + Activity | Confirm | Confirm |

**Ask the user:** which object, which tab is active, what content in the
sidebar, any specific field values. Use AskUserQuestion for discrete choices.
The blueprint gives you the suggested defaults — present them as a proposal
and get a yes/no, not an open-ended design question.

**Page Header** is configured per page type in Step 3 (object icon, showDetailRow,
showBottomRow). See the table there — don't skip it.

**Do not start building until scope is confirmed.**

---

## Step 1 — Plan what local components you need

Every Card body and every Expandable Section body requires a **local content
component** to swap in. This is not optional — it is always required.

**Before choosing any component, determine its context:**
- Where does this content live? (inside the main card / inside a sidebar card / standalone in the content area)
- Is this a top-level section or a sub-section inside another section?
- What's visible simultaneously alongside it?

This context determines the right component choice. For example:
- A region-level tabset — main content OR sidebar → **Tabs** component, wrapped in a Card (treat the sidebar the same as the main section)
- A secondary tabset nested *underneath* one of those tabs (a sub-tabset inside a primary tab's panel) → **Scoped Tabs**
- A list of records → **Data Table**, not custom rows, regardless of context
- Multiple distinct content blocks in a tab panel (Opportunities, Contacts, a chart) → each gets its own **Card** (or **Nested card** if inside another card), not stacked bare in the panel

Before touching Figma, make this list:

```
For each Related List Card in the sidebar or main column:
  → Use a Data Table instance (key: 348e85bc3e3ec23b1c30cf9fdd0dfbe90b93c292)
    swapped into the card body. Never build custom row layouts for related lists.

For each Expandable Section (About, Get in Touch, etc.):
  → 1 local component holding the field list
    (fields use ⚡ Input - Read Only View Mode instances, not raw text)

For the main column body (if no pure library component covers it):
  → 1 local component holding Tabs + tab panel content
```

You will build all local components **before** assembling the page frame.
Park them off-canvas (x=2200+) so they don't interfere with the layout.

See [sizing-rules](sizing-rules.md) for the local-component sizing rules
(`AUTO` both axes, never `resize()`, FILL width + HUG height after swap).

---

## Step 2 — Set up the destination

Confirm with the user: new file (`create_new_file`) or add a page to an
existing file? Then:

```js
// Reuse or create the target page:
const NAME = "<confirmed page name>";
let page = figma.root.children.find(p => p.name === NAME);
if (!page) { page = figma.createPage(); page.name = NAME; }
await figma.setCurrentPageAsync(page);
return { pageId: page.id };
```

---

## Step 3 — Build the chrome skeleton

All objects use **Sales Console** chrome (3-bar stack):

```
Global Header        64px   key: 4bdede49ada4ec3c4fc1c9ba934aa5e81c2dbbda
Console Navigation   40px   key: 677c791902becf51ababea1df9717bc9d57c2203  ← Console variant
Console Subtab Bar   40px   key: 6822ebf1f10f4753fe3f2406b73653d804bc8c58  ← shows open records
Page Header         ~117px  key: 327072d23b63a70049fd69de2c09e00d8c84c5db
[Path — if object uses it]  key: 85d06fd0b829aade91ebf725b6ce449bd51e8c01
Content Area         fills remainder
```

Build as a `VERTICAL` auto-layout frame, 1920×1080, neutral-95 background.
Append zones in order, set `layoutSizingHorizontal = 'FILL'` AFTER appending.
The `boundFill` helper and `SURFACE_2` token are in [color-tokens](../reference/color-tokens.md).

### Page Header — required configuration per page type

After importing, always configure these properties via `setProperties`:

```js
// Record page (Account, Opportunity, Case, Asset, etc.):
pageHdr.setProperties({
  "showDetailRow": true,   // compact highlight fields below the title
  "showBottomRow": false,  // search/filter bar — List View only, hide on records
  "showNameMetaText": true, // sub-title (owner, date, etc.)
});

// List View:
pageHdr.setProperties({
  "showDetailRow": false,  // no highlight fields on list views
  "showBottomRow": true,   // search bar + filter controls
  "showNameMetaText": false,
});
```

**Property names use camelCase without a `#id` suffix** — these are boolean
props, not the `#id`-suffixed INSTANCE_SWAP/TEXT properties. Verify with
`Object.keys(pageHdr.componentProperties)` if in doubt.

**Object icon:** always set to the matching standard object icon. Known mappings:

| Object | Icon |
|---|---|
| Account | `Standard Icons / A / account` |
| Opportunity | `Standard Icons / O / opportunity` |
| Quote | `Standard Icons / Q / quote_header` |
| Case | `Standard Icons / C / case` |
| Asset | `Standard Icons / A / asset` |
| Contact | `Standard Icons / C / contact` |
| Lead | `Standard Icons / L / lead` |

For objects not in this table, **ask the user** before building.

---

## Step 4 — Build all local content components (off-canvas)

Build every local component **before** the page structure. This is the
correct order — you cannot swap a component that doesn't exist yet.

### 4a — Field sections (for Expandable Sections)

Each field section wraps `⚡ Input - Read Only View Mode` instances:

```js
// Import the View Mode input component (key: 9d70ff0baa255a27bf77bdbd3ee4cb462951e6f5)
const inputComp = await figma.importComponentByKeyAsync(
  "9d70ff0baa255a27bf77bdbd3ee4cb462951e6f5");

// Build a COMPONENT (not a frame) — it must be a ComponentNode to be swappable
const section = figma.createComponent();
section.name = "Local/<Section Name> Fields";
section.layoutMode = 'VERTICAL';
section.itemSpacing = 0;  // inputs stack flush; they have internal padding
section.fills = [];
// Do NOT call resize() — it resets sizing modes to FIXED and locks the height.
// Set both axes to AUTO so the component hugs its children in all directions.
// Width will be driven to FILL when the instance is appended to its parent.
section.primaryAxisSizingMode = 'AUTO';
section.counterAxisSizingMode = 'AUTO';
// Off-canvas placement: x=2200, y = rootFrame.y + (componentIndex * 300)
section.x = 2200; section.y = rootY + (compIdx * 300);

for (const [label, value] of fields) {
  const inst = inputComp.createInstance();
  section.appendChild(inst);
  inst.layoutSizingHorizontal = 'FILL';
  await figma.loadFontAsync({ family: "SF Pro", style: "Regular" });
  const lNode = inst.findOne(n => n.type==='TEXT' && n.name==='Field Label');
  const vNode = inst.findOne(n => n.type==='TEXT' && n.name==='Input text');
  if (lNode) lNode.characters = label;
  if (vNode) vNode.characters = value;
}
```

### 4b — Related lists (for Card bodies)

**Always use a `⚡ Data Table` instance** — never build custom row layouts.
Import the Base variant and swap it directly into the card's body placeholder:

```js
// Data Table — Base (key: 348e85bc3e3ec23b1c30cf9fdd0dfbe90b93c292)
// Use Row actions + dividers variant when rows need action menus:
//   key: ef382666c0007d6d51e1d3da9c73010ecc05ace0
const dataTable = (await figma.importComponentByKeyAsync(
  "348e85bc3e3ec23b1c30cf9fdd0dfbe90b93c292")).createInstance();
dataTable.name = "Data Table / <Related List Name>";
dataTable.layoutSizingHorizontal = 'FILL';
dataTable.layoutSizingVertical = 'HUG';

// Wrap in a local component so it can be swapped into the card body:
const relatedListComp = figma.createComponent();
relatedListComp.name = "Local/<Related List Name>";
relatedListComp.layoutMode = 'VERTICAL';
relatedListComp.fills = [];
relatedListComp.primaryAxisSizingMode = 'AUTO';
relatedListComp.counterAxisSizingMode = 'AUTO';
relatedListComp.x = 2600; relatedListComp.y = rootY + (compIdx * 300);
relatedListComp.appendChild(dataTable);
dataTable.layoutSizingHorizontal = 'FILL';
```

### 4c — Main column body (Tabs + active tab content)

The main column is **one Card with no header and no footer**. Tabs are the
first item inside the card body, followed directly by the tab panel content.
Do not add another card or nested card around the tab content — it is already
inside the main Card.

```js
const mainBody = figma.createComponent();
mainBody.name = "Local/Main Column Body";
mainBody.layoutMode = 'VERTICAL';
mainBody.itemSpacing = 0; mainBody.fills = [];
mainBody.primaryAxisSizingMode = 'AUTO';
mainBody.counterAxisSizingMode = 'AUTO';
mainBody.x = 3000; mainBody.y = rootY; // park at same y as frame, further right

// 1. Tabs — first item inside the card body
const tabs = (await figma.importComponentByKeyAsync(
  "3c9070d73dcfd9eff9b07a1705f692058307cc99")).createInstance();
mainBody.appendChild(tabs);
tabs.layoutSizingHorizontal = 'FILL';
// NOTE: while the body still HUGS width (counterAxisSizingMode AUTO), Figma
// silently coerces these FILL children back to FIXED at their content width —
// FILL has nothing to stretch into yet. This is corrected in Step 5 by
// re-asserting FILL on the body's direct children AFTER it is swapped into
// the wide card. Do not skip that re-assert.

// 2. Tab panel content — directly after tabs, inside the same card body.
//    No extra nesting. Transparent background — the containing card's white
//    surface shows through naturally. Never set a background color on TabPanel.
const panel = figma.createAutoLayout('HORIZONTAL', {
  name: "TabPanel",
  paddingTop: 16, paddingBottom: 16, paddingLeft: 16, paddingRight: 16,
  primaryAxisSizingMode: 'AUTO', counterAxisSizingMode: 'FIXED',
});
panel.fills = []; // transparent — card surface shows through
mainBody.appendChild(panel);
panel.layoutSizingHorizontal = 'FILL';

const timeline = (await figma.importComponentByKeyAsync(
  "4942107ed48100483ec4b666f85aa89713fb9ad4")).createInstance();
panel.appendChild(timeline);
```

---

## Step 5 — Assemble the content area

### Every column uses a Card as its outermost wrapper

**Main column:**
```js
const mainCard = (await figma.importComponentByKeyAsync(
  "dab25dbbf00a7a31768065aa62fb0566362f3259")).createInstance();
mainCard.name = "Card / Main";
contentArea.appendChild(mainCard);
mainCard.layoutSizingHorizontal = 'FILL';
mainCard.layoutSizingVertical = 'FILL';
mainCard.layoutGrow = 2; mainCard.minWidth = 640;
// Hide header/footer; swap body with mainBody component:
mainCard.setProperties({
  "Show header#19192:4": false,
  "Show footer#19167:1": false,
  "Swap placeholder#70805:10": mainBody.id,
});
const swapped = mainCard.findOne(n => n.type==='INSTANCE' && n.name.startsWith('Local/'));
if (swapped) {
  swapped.layoutSizingHorizontal = 'FILL';  // span the card width
  swapped.layoutSizingVertical = 'HUG';     // grow with content — never 'FILL'
  // Re-assert FILL on the body's direct children (Tabs, TabPanel). They were
  // coerced to FIXED while the body hugged width off-canvas; now that the body
  // is in the wide card, FILL finally has room to stretch. Without this, the
  // tabs/table/content stay pinned at their old ~narrow content width.
  for (const child of swapped.children) {
    try { child.layoutSizingHorizontal = 'FILL'; } catch (e) {}
  }
}
```

**Sidebar — each section/related list is its own Card:**
```js
// For Expandable Sections (Details, Get in Touch):
const expComp = await figma.importComponentByKeyAsync(
  "77a44c8c31b05489ab14e11cf0618783e6720377"); // Expanded=Yes variant
const section = expComp.createInstance();
sidebar.appendChild(section);
section.layoutSizingHorizontal = 'FILL';
section.setProperties({
  "Section title#20703:0": "About",
  "Swap body content#23113:0": aboutFieldsComp.id,
});

// For related list Cards (Contacts, Opps, Cases...):
const cardComp = await figma.importComponentByKeyAsync(
  "dab25dbbf00a7a31768065aa62fb0566362f3259");
const card = cardComp.createInstance();
card.name = "Card / Contacts";
sidebar.appendChild(card);
card.layoutSizingHorizontal = 'FILL';
card.layoutSizingVertical = 'HUG';
// Title override (allowed text override, no detach):
await figma.loadFontAsync({ family: "SF Pro", style: "Regular" });
await figma.loadFontAsync({ family: "SF Pro", style: "Semibold" });
await figma.loadFontAsync({ family: "SF Pro", style: "Bold" });
const t = card.findOne(n => n.type==='TEXT' && n.name==='Title');
if (t) t.characters = "Contacts";
// Swap body:
card.setProperties({ "Swap placeholder#70805:10": contactsListComp.id });
const sw = card.findOne(n => n.type==='INSTANCE' && n.name.startsWith('Local/'));
if (sw) {
  sw.layoutSizingHorizontal = 'FILL';  // span the card width
  sw.layoutSizingVertical = 'HUG';     // grow with content — never 'FILL'
}
```

### Sidebar column sizing
```js
sidebar.layoutGrow = 1;
sidebar.minWidth = 320;
// No maxWidth — the 2:1 grow ratio (main:sidebar) already enforces 2/3–1/3.
// A maxWidth cap fights the ratio and makes the main column look too wide.
sidebar.itemSpacing = 16; // 16px gap between cards
```

---

## Step 6 — Screenshot and verify

```js
const root = await figma.getNodeByIdAsync("<rootId>");
return await root.screenshot({ scale: 0.5 });
```

Check: every content region is inside a Card · no raw text/shapes floating in
the content area · sidebar cards stack with 16px gaps · main column fills
correctly · text styles are bound (not hardcoded font sizes).

Fix issues before reporting done. Fix targeted nodes — don't rebuild.
