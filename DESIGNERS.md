# Designer Guide

This workbench lets you explore, validate, and contribute to Salesforce Lightning components — without writing code. Components built here are real, running implementations styled with the same SLDS tokens your Figma library uses.

For the project overview, see [README.md](README.md).

---

## What This Gives You

- **A living component catalog** — browse every component in Storybook, toggle between three themes, adjust props with visual controls
- **Visual QA across themes** — see how a component renders under SLDS2 Cosmos, SLDS1 Lightning Blue, and WES in one click
- **Figma roundtrip** — push coded components to Figma as real SLDS 2 library instances (not screenshots or flat rectangles)
- **Token fidelity** — spacing, color, typography, and elevation all come from SLDS design tokens, matching what's in Figma
- **Page composition blueprints** — pre-defined layouts for Account, Opportunity, Quote, Case, and Asset pages

---

## Exploring Components

### Live on GitHub Pages (no setup needed)

The latest published build is available online — no terminal, no installs, nothing to run:

| What | URL |
|------|-----|
| **Storybook** (component catalog) | [studious-fiesta-v63ooy5.pages.github.io/storybook/](https://studious-fiesta-v63ooy5.pages.github.io/storybook/) |
| **Shell App** (full Salesforce-like app) | [studious-fiesta-v63ooy5.pages.github.io/](https://studious-fiesta-v63ooy5.pages.github.io/) |

These are private to the Salesforce org — only authenticated employees can view them.

Use these links to browse components, switch themes, and review visual output without any local setup. If you need to iterate on a component with Claude (create, modify, test), you'll still need the local setup below.

### Storybook (local catalog)

Open your browser to **http://localhost:6006** (after a developer runs `npm run storybook`).

**What you'll find:**
- Every component listed in the sidebar under "Components"
- A **Docs** tab with usage examples, a property table, and live previews
- A **Controls** panel to adjust props in real time — change a label, switch a variant, toggle a boolean — and see the result instantly
- A **theme switcher** in the toolbar (top bar) to flip between SLDS2, SLDS1, and WES

No terminal commands needed once it's running. Just browse.

### Shell App (local full experience)

Open **http://localhost:3000** (after `npm run dev`).

This is a Salesforce-like application with navigation, tabs, and routing. Components appear in context — inside page layouts, alongside other elements, with proper spacing and chrome. Navigate to the **"My Components"** tab to see all custom components in a gallery view.

Use this when you want to evaluate a component in context rather than isolation.

---

## Three Themes, One Component

Every component adapts to three design systems. Switching themes doesn't reload — it hot-swaps the underlying token values.

| Theme | Visual character | When to use |
|-------|-----------------|-------------|
| **SLDS2 - Cosmos** | Rounded corners, softer shadows, updated color palette | New Salesforce UIs (default) |
| **SLDS1 - Lightning Blue** | Square corners, higher contrast, classic Lightning look | Existing orgs, backward compatibility |
| **WES** | Experience Cloud styling, custom brand-friendly | External-facing sites, portals, communities |

In Storybook, use the toolbar dropdown to switch. In the Shell App, use the theme switcher in the header.

**Design implication:** Components must look correct under all three. If you notice something breaking under a specific theme, flag it — that's a real bug.

---

## Design Tokens in Use

The components in this workbench are styled with the same token values from the SLDS 2 Figma library. Here's the shared language:

### Spacing

Based on a **4px grid**. All margins, padding, and gaps use these values:

| Token | Value | Common use |
|-------|-------|------------|
| spacing-1 | 4px | Tight inner padding |
| spacing-2 | 8px | Input internal spacing |
| spacing-3 | 12px | Small gaps between elements |
| spacing-4 | 16px | Standard card padding, section gaps |
| spacing-6 | 24px | Between content groups |
| spacing-8 | 32px | Page-level section spacing |
| spacing-10 | 40px | Large separation |
| spacing-12 | 48px | Major layout divisions |

### Border Radius

| Context | Radius |
|---------|--------|
| Badges, small pills | 4px |
| Inputs, buttons | 8px |
| Dropdown menus, popovers | 12px |
| Cards, containers | 20px |
| Circular buttons (icon-only) | Full circle |

### Elevation (Shadows)

| Level | Use | Shadow |
|-------|-----|--------|
| None | Cards at rest | No shadow |
| shadow-2 | Dropdown menus, popovers | Subtle |
| shadow-3 | Floating panels, toasts | Medium |
| shadow-4 | Modals | Prominent |

### Typography Scale

| Style | Size | Use |
|-------|------|-----|
| Title | 24px | Page titles |
| Heading | 14px | Card headers, section titles |
| Body | 13px | Standard content text |
| Label | 12px | Form labels, metadata |
| Micro | 10px | Timestamps, badges |

### Color Balance (design principle)

- **85% neutral** — surfaces, containers, text
- **5% accent** — interactive elements, links, focused states
- **10% expressive** — status indicators, brand moments

---

## Figma Connection

Components can be pushed from this workbench to Figma as **real SLDS 2 library instances** — not approximations or screenshots. They use the same component keys, token bindings, and swap patterns as manually placed library components.

### What travels to Figma

- The correct SLDS 2 component (Card, Data Table, Button, etc.)
- Configured properties (title text, visibility toggles, body content)
- Proper auto-layout and sizing (FILL/HUG patterns)
- Library token bindings for color and typography

### What stays in code

- Interactive behavior (event handlers, data binding)
- Dynamic state (loading, error, empty)
- Custom logic (sorting, filtering, row selection)

### How it works

The `/slds-figma-mockups` skill uses the Figma MCP plugin to execute Plugin API scripts. It knows the import keys for 219 SLDS 2 components and can compose them into page-level layouts following documented blueprints.

**Requirements:**
- Figma MCP authentication configured in Claude Code
- **Full Seat recommended** for the best experience — View Seat provides only 6 MCP read calls per month, which limits iterative workflows

---

## Page Blueprints

When building full page views (not just individual components), the workbench follows documented layouts per Salesforce object:

| Object | Layout | Key elements |
|--------|--------|--------------|
| **Account** | 2-column | Sidebar: Slack, Restrictions, Stakeholders, Activity |
| **Opportunity** | 2-column + Path | Sidebar: AI Sales Coach, Activities/Slack |
| **Quote** | 1-column full-width | Docked Utility Bar, no sidebar |
| **Case** | 2-column (or 3-column dense) | Sidebar: Timer, Einstein AI, Attachments, Related |
| **Asset** | 2-column + KPI strip | Sidebar: Activity only |

These blueprints ensure page compositions match real Salesforce record views — correct tab order, sidebar card sequence, and chrome configuration.

---

## Your Workflow (Step by Step)

This is the full journey from zero to seeing your component in the browser. Each step explains what's happening and why — nothing here is dangerous or irreversible.

### First-time setup (once)

These steps prepare your machine. You only do them once.

| Step | What you do | What it does | Why it's needed |
|------|-------------|--------------|-----------------|
| 1 | Install **Node.js 20** via nvm | Installs a JavaScript runtime on your machine | The project's code runs on Node.js — think of it as the engine that powers everything locally |
| 2 | Open the project folder in your terminal | Navigates to the project | Claude Code needs to be inside the project to know what tools and instructions are available |
| 3 | Type `nvm use` | Activates the correct Node version | The project requires a specific version (20) — this command switches to it. You'll see a confirmation message |
| 4 | Type `npm install` | Downloads all dependencies | Installs the design system files, component libraries, and tools into a local `node_modules/` folder. Takes 1-2 minutes the first time. Nothing is installed globally — it stays inside this project folder |

**What are these things?**

- **Node.js** — a program that runs JavaScript outside of a browser. It powers the local preview servers.
- **nvm** (Node Version Manager) — lets you switch between Node versions. Different projects need different versions.
- **npm** (Node Package Manager) — downloads and manages packages (libraries, tools, frameworks). `npm install` reads a list of required packages and fetches them.
- **`node_modules/`** — the folder where downloaded packages live. It's large but disposable — you can delete it and re-run `npm install` to regenerate it.

### Creating a component

Once setup is done, this is the repeating cycle:

| Step | What you do | What happens | What you'll see |
|------|-------------|--------------|-----------------|
| 1 | **Describe the component** to Claude | "Create a card with a title and two action buttons" | Claude reads the project's creation instructions and starts building |
| 2 | **Wait while Claude works** | Claude creates 5 files (logic, template, styles, stories, docs), registers the component, and adds it to the gallery | You'll see file creation messages in the terminal — this is normal |
| 3 | **Run the preview** when Claude tells you | Type the command Claude gives you (`npm run storybook` or `npm run dev`) | A local server starts and Claude gives you a browser URL to open |
| 4 | **Open the browser link** | Navigate to the URL (usually http://localhost:6006) | You'll see the Storybook interface with your new component listed in the sidebar |
| 5 | **Explore and give feedback** | Switch themes, adjust controls, check edge cases | Tell Claude what to change — "make the padding larger", "add an error state", "this looks off under WES" |
| 6 | **Iterate** | Claude applies your feedback and the preview updates | Refresh the browser to see changes (or it auto-refreshes) |

### What the commands actually do

| Command | Plain English | Safe? | Reversible? |
|---------|--------------|-------|-------------|
| `npm run storybook` | Starts the component catalog in your browser (port 6006) | Yes — local only, nothing goes online | Yes — close the terminal or press Ctrl+C to stop |
| `npm run dev` | Starts the full app preview in your browser (port 3000) | Yes — local only | Yes — same as above |
| `npm install` | Downloads project dependencies | Yes — only writes to the project folder | Yes — delete `node_modules/` to undo |
| `nvm use` | Switches to the right Node version | Yes — only affects your terminal session | Yes — open a new terminal to reset |

**Nothing you run here deploys anything, sends anything to a server, or modifies files outside this project folder.** These are all local preview tools.

### Optional: push to Figma

After reviewing the component in the browser, you can optionally push it to Figma:

| Step | What you do | What happens |
|------|-------------|--------------|
| 1 | Type `/slds-figma-mockups` | Claude loads the Figma skill |
| 2 | Describe what you want in Figma | "Push this card component to Figma" or "Build an Account page layout" |
| 3 | Claude builds it | Real SLDS 2 library instances appear in your Figma file |

This requires Figma MCP authentication and a **Full Seat** for the best experience (View Seat allows only 6 calls/month).

---

## Tips for Describing Components

You don't need to write code. Describe what you need in natural language:

- "Create a card component with a title and action buttons"
- "Build a data table with sortable columns"
- "Make a form with name, email, and phone fields"

**Better requests get better results:**
- Mention the **variant** or **state** you care about (default, error, loading, empty)
- Reference the **SLDS component name** if you know it (card, datatable, modal)
- Specify if it should appear **inside a specific context** (sidebar card, tab panel, modal body)
- Mention **theme concerns** if relevant ("make sure it works under WES too")

---

## Composing Components Together

In Figma, you nest instances inside frames to build up a page. It works the same way here — **components you've already created can be used inside other components or pages.**

This is one of the most powerful things about this workbench, and it's something that comes naturally in design tools but less obviously in code. So here's the concept: once a component exists, it's reusable everywhere.

### Examples

| You created... | You can now say... |
|----------------|--------------------|
| `c-my-button` | "Create a card that uses my-button in its footer" |
| `c-data-table` | "Build a page with a header and my data table below it" |
| `c-my-button` + `c-data-table` | "Create a page that has a 'New Record' button above the data table" |
| `c-status-badge` | "Add my status badge to each row of the data table" |

### How to think about it

Think of it like Figma's component instances:

| Figma concept | Code equivalent |
|---------------|-----------------|
| Dragging a component instance into a frame | Using `<c-my-button>` inside another component's template |
| A page with multiple component instances | A page component that references several `c-*` components |
| Swapping a nested instance | Asking Claude to "replace the button with my-button" |
| Detaching an instance to customize | Not needed — you can customize props directly without breaking the link |

### What to keep in mind

- **Name your components clearly** — if you created "my button" and "my card," you can say "put my button inside my card" and Claude knows exactly what you mean
- **Components stay in sync** — if you later change `c-my-button` (say, add an icon), every place that uses it updates automatically. Same as overriding a master component in Figma
- **You can nest as deep as you want** — a page can contain a card, which contains a table, which contains badges. Describe the hierarchy to Claude and it builds it
- **You don't need to remember technical names** — "that button I made earlier" is usually enough for Claude to figure out which component you mean

---

## Providing Feedback

When reviewing components in Storybook:

- **Switch themes** — does it hold up under all three?
- **Adjust controls** — do edge cases (long text, empty state, many items) break the layout?
- **Check spacing** — does it follow the 4px grid? Are margins consistent with adjacent components?
- **Check typography** — are the right text styles applied? (Title for titles, Body for content, Label for metadata)
- **Check elevation** — cards at rest should have no shadow; only overlays get elevation

Flag issues in plain language. The developer (or Claude) will map your feedback to the correct token or property fix.

---

## Things You Should Never Do

This section exists to protect you and the project. These aren't suggestions — they're hard boundaries. If you're unsure about something, ask a developer or Claude before doing it.

### Never edit code files directly

Even if a file "looks simple" — don't open `.js`, `.html`, `.css`, or `.json` files and make changes yourself. One wrong character can break the entire project. Always ask Claude to make changes for you. That's what it's here for.

**Why:** Code files have invisible dependencies. Changing a name in one file can silently break five other files that reference it.

### Never delete files or folders

Don't delete anything inside the project — not even files that look old, temporary, or unfamiliar. The `node_modules/` folder is especially tempting (it's huge) but it's required for the project to run.

**If something seems wrong:** Ask Claude — "Is it safe to delete this?" It will tell you.

**Only exception:** Claude may tell you to run `npm run clean` to reset the project. That's safe — it only removes generated files that can be rebuilt.

### Never run commands you found online

If you're troubleshooting and find a Stack Overflow answer or blog post suggesting a terminal command — don't run it. Commands like `rm -rf`, `git reset --hard`, `sudo`, or `chmod` can permanently destroy work or break your system.

**Instead:** Paste the command into Claude and ask "Is this safe to run?" — it will tell you.

### Never modify `.claude/` or `.storybook/` folders

These contain the project's rules and configuration. Editing them changes how Claude builds components and how Storybook renders them. A small change here can produce broken output for everyone.

**If you think something is wrong with how Claude behaves:** Tell a developer — they'll update the instructions properly.

### Never run `git push` without asking

`git push` sends your local changes to the shared repository where everyone else sees them. If you accidentally push broken code or incomplete work, it affects the whole team.

**Safe things you CAN do:**
- `git status` — shows what changed (read-only, never harmful)
- `git diff` — shows the actual changes (also read-only)

**Ask Claude first:** "Is it safe to push these changes?" — it will review what would be sent.

### Never share the `node_modules/` folder

If someone asks you to send them the project, zip only the project folder WITHOUT `node_modules/`. It contains thousands of files, is specific to your machine, and can be regenerated by running `npm install`.

### Never trust a command that asks for your password

Nothing in this project requires `sudo` or admin permissions. If a terminal command prompts for your system password, stop and ask a developer. This is a sign something is wrong.

---

## When Something Goes Wrong

Things will occasionally break. Here's what to do:

| Symptom | What it means | What to do |
|---------|---------------|------------|
| Terminal shows red error text | Something failed in the build | Copy the error and paste it to Claude — "I got this error, what do I do?" |
| Browser shows a blank page | The preview server crashed or hasn't started yet | Close the terminal, reopen it, run the command again |
| Storybook shows "No story found" | The component wasn't registered properly | Ask Claude to check the registration |
| `command not found: nvm` | nvm isn't installed on your machine | Ask a developer to help with one-time setup |
| `npm install` hangs for 5+ minutes | Network issues or corrupted cache | Press Ctrl+C to stop, then try again. If it persists, ask for help |
| Everything looks wrong after pulling changes | Someone else's changes may conflict | Ask Claude — "Can you check if everything is working?" |

**General rule:** If you don't know what went wrong, describe what you see to Claude. You will not break anything by asking questions.

---

## What's Different from Static Mockups

| Static mockup | This workbench |
|---------------|----------------|
| Fixed viewport, one state | Interactive, resize and test edge cases |
| Theme changes require redlines | One-click theme switching |
| Spacing is "eyeballed" or measured | Token-exact, enforced by code |
| Variants require duplicate artboards | Props toggle variants in real time |
| Handoff = spec doc + interpretation | Handoff = the running component itself |
| Updates require manual propagation | Change the source, everything updates |

---

## Related Resources

- [README.md](README.md) — Project overview
- [DEVELOPERS.md](DEVELOPERS.md) — Technical architecture and setup
