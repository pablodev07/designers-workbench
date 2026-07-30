# Page Blueprints

Real Salesforce patterns, not generic guesses. When the user doesn't specify
layout details, use the matching blueprint as the default. **Ignore the "OrgSF"
logo in page headers** — it's a placeholder for the Salesforce cloud logo.

## Quick decision matrix

| Object | Path? | Console? | Columns | Sidebar anchors |
|---|---|---|---|---|
| Account | No | Yes | 2-col (2/3+1/3) | Slack link → Restrictions → Stakeholders → Activity |
| Opportunity | Yes | Yes | 2-col (65/35) | AI Sales Coach → Activities/Slack Tabs |
| Quote | Yes | Yes | 1-col full-width | None — Docked Utility Bar instead |
| Case | No | Yes | 2-col OR 3-col | Timer → Einstein AI → Attachments → Related/Articles |
| Asset | No | Yes | 2-col + KPI strip | Activity timeline only |
| Other/unknown | Confirm | Confirm | 2-col (main 2/3, sidebar 1/3) | Related lists + Activity |

## Account

**Layout:** 2-column (main ~2/3, sidebar ~1/3) · **Path:** None · **Console:** Yes

- **Page Header icon:** Standard Account. **Actions:** Open in Org62 · Add Contact ·
  Solution Selling · New Opportunity · Edit · Printable View · ▼
- **Compact highlights:** Account Owner | Org62 Primary Account Name | Account
  Record Type | Delivery Address | Industry | LDP Status
- **Main tabs:** Account Overview · Planning · Research · Opportunities · Contracts ·
  Assets · People · Details
  - *Account Overview* (default): sub-tabs Account Plan Overview | Salesforce
    Investments | Seller POV. Dashboard content: KPI strip (ACV | AOV | Services
    Bookings | Services Open Pipe | Upcoming Renewals), Customer Footprint (bar
    chart), Whitespace analysis (matrix), Customer Status + Success Score,
    Accordion: Upcoming Deals · Account Analysis · Implementations
  - *Details*: Expandable Sections, 2-column field grid (Input View Mode)
- **Sidebar (stacked cards, no tabs):**
  1. Open Primary Account Channel — Slack link card
  2. Account Restrictions — warning card + "View Details"
  3. Key Stakeholders (N) — avatar list: avatar + Name (link) + Title + Contact Role + ▼
  4. Activities — filter controls + Activity Timeline (fills to bottom)

## Opportunity

**Layout:** 2-column (main ~65%, sidebar ~35%) · **Path:** Yes · **Console:** Yes

- **Page Header icon:** Standard Opportunity. **Actions:** Create Quote · Add
  Products · Solution Selling · Add Contact Role · Open Org62 · ▼
- **Highlights row 1:** Opportunity Type | Account Name | Opportunity Owner |
  Close Date | Amount | Opportunity Score | Forecast Category. **Row 2:** Auto-Renewal
- **Path:** Discovery → Solution → Proposal → Negotiate → Order Processing →
  Closed + "Mark as Complete" Brand button at right
- Optional Info Alert (full-width) above the Path
- **Main tabs:** Details · Teams · Solutions · Transact · Related · History
  - *Details* (default): Expandable Sections — (1) Next Steps: Next Step +
    Manager Notes (single-col); (2) Opportunity Information: 2-col grid; (3) Deal
    Review: 2-col grid; (4) System Information: 2-col. Below: Contact Roles (N)
    related-list card (Data Table + Add/Edit buttons + View All footer)
- **Sidebar:**
  1. Practice Your Pitch — AI Sales Coach card: title + description + illustration
     + "Start" (Brand). Stays at top.
  2. Activities / Slack — **Tabs** inside a Card (sidebar tabset wrapped in a Card,
     same as the main section): Activities (compose: Log Call, New Task, New Event,
     Email, More + Upcoming & Overdue + Past Activity → Timeline) · Slack (channel + Feed)

## Quote

**Layout:** 1-column full-width (no sidebar) · **Path:** Yes · **Console:** Yes ·
**Docked Utility Bar:** Yes

- **Page Header icon:** Standard Quote. **Actions:** Browse Catalogs · Pricing
  Guidance · Manage Terms · Preview and Submit for Approvals · ▼
- **Highlights:** Transaction Type | Syncing (toggle) | Quote Number | Total Quote
  Amount | Service Start Date | Term (Months) | Opportunity Name. Deal Score widget
  below with "Run Pricing Guidance"
- **Path:** Draft → In Review → Approved → Offer → Accepted → Booked (wider pill,
  no coaching panel)
- **Issue banners** (inline expandable, not Toast): Quote Issues (N Errors/Warnings/
  Notices), Product Issues (N Errors)
- **Tabs (full width):** Related · Header · Products · Pricing · Billing · Terms · Slack
  - *Products* (default): "Quote Line Items (#)" + Instant Pricing toggle + Add
    Group · Import · Delete · ▼; dense Data Table (#, checkbox, Product ID, Tenant,
    Source Contract, Current Qty, Qty, End Qty, List Price, Discount, Net Unit
    Sales Price, Total Price) with per-column inline search
- **Docked Utility Bar (bottom):** Sales Support · Phone · To Do List · History ·
  Notes · Omni-Channel

## Case — 2-column

**Layout:** 2-column (main ~60%, sidebar ~40%) · **Path:** None · **Console:** Yes

- **Page Header icon:** Standard Case (pink). **Actions:** Edit · Escalate Case ·
  Transfer Case · Manage Named Assignment · Manage Territory Team · Manage Territory · ▼
- **Highlights:** Account Name | Requestor (avatar+name) | Contact Name |
  Effective Date | Case Owner (avatar+name) | Status
- **Main tabs:** Details · Account Details · Company Details · Case Updates · Slack
  - *Details* (default, long/scrollable): Expandable Sections — Request Summary ·
    Case Outcome (2-col) · Case Details (2-col) · Description Information (single) ·
    Case Escalation · Escalation Management (2-col) · System Information (2-col)
- **Sidebar:**
  1. Time Left to Complete Case — timer card ("N hr NN mins" large, Mark Complete link)
  2. Similar Case Found — Einstein/AI card (✦ sparkle + timestamp + AI text +
     "Check the Case Resolution" CTA + "Review Sources (N)")
  3. Attachments (0) — upload drop zone card
  4. Related / Relevant Articles — **Tabs** inside a Card (sidebar tabset wrapped
     in a Card): Related (Case Team · Related Rev Ops Cases · Case History ·
     Approval History as stacked Cards) · Relevant Articles (knowledge article links)

## Case — 3-column

**Layout:** 3-column (left 280px fixed, center fills, right 396px fixed) ·
**Path:** None · **Console:** Yes. Same Page Header as 2-column.

- **Left (280px, scrollable):** Expandable Sections (compact): Request Summary ·
  Case Outcome · Case Details · Description Information · Case Escalation ·
  Escalation Management · System Information
- **Center (FILL):** Tabs **Case Updates · Slack** only (Details moved to left column)
  - *Case Updates* (default): Activity Feed items (Email, Call log, Case Status
    Updated) — icon + subject + timestamp; expandable items show Location,
    Attendees, When, Description. No compose bar at top.
- **Right (396px):** same sidebar cards as 2-col: Timer · Einstein AI · Attachments ·
  Related/Articles Tabs

## Asset

**Layout:** 2-column (main ~60%, sidebar ~40%) · **Path:** None · **Console:** Yes

- **Page Header icon:** Standard Asset. **Actions:** View Asset Hierarchy ·
  DPP/CP Asset Report · Account Asset Summary · ▼
- **Highlights (compact, only 3):** Account Name | Contact | Quantity
- **KPI Metrics Row** (3 equal-width Cards above the tab bar, full main-column width):
  Current Quantity (View Quantity Changes) · Current MRR (View MRR Changes) ·
  Current Amount (View Amount Changes). Each: heading label + large numeric value + View link footer.
- **Main tabs:** Related · Details · Usage Rates
  - *Related* (default): stacked related-list Cards: Asset Contract Relationships (1) ·
    Asset Actions (3) · Asset State Periods (1) · Cases (0, empty + New) ·
    Notes & Attachments (0, file drop zone)
- **Sidebar:** Activity only — filter controls (Email, Task, Event, Log) + "Only
  show activities with insights" toggle + filters + Upcoming & Overdue + Timeline
  + "Show All Activities"

## Reusable sidebar card patterns

- **AI/Einstein card:** ✦ title + [+] · timestamp ✦ · AI text (2–3 sentences) ·
  Brand CTA · "> Review Sources (N)"
- **Timer card:** ⏱ title · large accent value · Mark Complete link · "As of Today at H:MM"
- **AI Sales Coach card:** title · description + illustration · "+ Start" (Brand)
- **Key Stakeholders card:** 👤 title (N) + ▼ · rows of avatar + Name (link) + Title +
  Contact Role + ▼ · "View All"
- **KPI metric card:** heading label (top) · large numeric value (center) · View link (footer)
- **Related list card:** icon + Title (N) + [New] · Data Table · "View All" footer

## Details field pattern

All Details tabs use a 2-column field grid built from `⚡ Input - Read Only
View Mode` (`Type=Default, Context=View Mode`). Pencil icon = inline edit;
dropdown chevron = picklist; avatar + name = lookup. Section headers use the
Expandable Section component.
