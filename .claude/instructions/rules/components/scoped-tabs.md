# Scoped Tabs

## Scoped Tabs

###Scoped tabs are a variant of the [tabs](https://www.lightningdesignsystem.com/2e1ef8501/p/1152cf) component and have a more targeted purpose. Instead of structuring the main content of a page, they segment content within a page's main body or subsection. Like the main tabs, scoped tabs help users focus on their current task because only one tab's contents are visible at any given time.

* Scoped tabs are a secondary tabset that complements the main tabs on a page.
* Scoped tabs help you group related content into sections. Users can easily switch between sections without leaving the page.
* Each scoped tab is a nested section with related content.
* Scoped tabs are often used within specific sections of a page. You can use them inside cards and modals. Scoped tabs are also helpful for organizing sections within a dashboard.
* A scoped tabs component is a collection of tab components.

#####* Ideal for cases where tabs directly relate to the content of a container, keeping the context clear and contained.
* Organize content into clear, related sections relevant to the user’s tasks.
* Set the most important or frequently used tab as the default active tab.
* Use descriptive, concise tab labels so users know what content to expect in the tab.
* Use an overflow menu for tabsets with too many tabs or long labels that don’t fit the available space.
* Suitable when the tabbed content is secondary to the main workflow or page.
* Use scoped tabs for small areas, like sidebars or cards.

##* Avoid scoped tabs if the content under each tab is unrelated.
* Don't use for page-level navigation, where the tabs organize the overall structure of a page.
* When content doesn’t belong to a clearly defined container.
* Don’t use scoped tabs when all content should be visible at the same time.
* Avoid too many tabs, as they can complicate navigation. Consider using vertical tabs if there are more than five tabs in a set.
* Don’t overload tabs with icons, as this creates visual clutter.
* Use buttons, not tabs, for initiating actions.
* Use a progress indicator or path component for process tracking.

###| **Base** Scoped tabs for grouping related content.  **Use Case** Use three to five tabs for related sections, providing quick access to task-critical content.  |  *Default scoped tabs example.* |
| --- | :---: |

###########* Use title case for labels.
* Labels clearly and concisely describe the content.
* Avoid overly general labels. If the tab content contains tasks, use actionable labels, such as “Review Contract,” “Edit Terms”.
* Tab labels don’t truncate—use an overflow menu if lengthy labels make the tabset become too wide.

#####1. **Selected:** The active tab is highlighted with a text label color change and the bottom border is remove.
2. **Default:** Scoped tabs are inactive except for the default selected tab.
3. **Hover:** The tab changes color.
4. **Focus:** Focus follows selection. The active/focused tab is highlighted with a text label color change and the bottom border is removed. An underline is also shown on the label as a focus indicator.

####* Scoped tabs are used within a container like a card, modal, or panel. This makes it clear that the tabs are part of a specific content grouping and not part of global or high-level navigation.

* Place scoped tabs close to the content or actions they directly relate to. This ensures users understand their relationship to the content being displayed.
* Scoped tabs can appear nested below a tabs component, but use caution when placing scoped tabs directly next to navigation elements to prevent confusion.

##Scoped tabs don’t have a built-in loading state. Use a spinner or stencil in the tab’s content area to make custom loading indicators. To improve performance, tab content loads only as it's needed, when the tab is activated. You can only query the content for the active and previously active tabs.

##Tab containers automatically adjust to fit the content by default unless explicitly constrained. SLDS utility classes can be used to set a max-height and enable scrolling.

##* Don’t truncate tab labels. 
* Make sure tabs are visible and usable on all devices. 
* When a tabset contains more tabs than can fit in the viewport, the tabs that don't fit are moved into an overflow menu next to the last tab that fits. 
* The overflow menu replaces the last fully visible tab in the set. 
* The active tab always shows and is never moved into the overflow.

##The first tab is active by default when the tabset loads.

##To help users quickly identify tabs with errors, display an error icon next to the tab label. To explain the issue, include detailed error messages within the tab content area. You can display error messages using inline text, tooltips, or feedback components.

######Use CSS Custom Properties as hooks to customize this SLDS component with your own style. For more information, [read the technical documentation](https://www.lightningdesignsystem.com/2e1ef8501/p/319e5f).

###| **Category** | **Description** |
| --- | --- |
| **Selector** | The CSS class being referred to. |
| **Summary** | A description of what the class does. |
| **Support** | Whether the class name is dev-ready (meaning it's fully vetted and tested and safe to use) or prototype (which means it's not fully vetted yet). |
| **Restrict** | The selector that the class name is allowed to be used on. |
| **Variant** | The base level pattern for a component. A variant can be extended to create another variant of that component, for example, a stateful button is a derivative of the base button. |
| **Modifier** | A single class that can be added to an HTML element of a component to modify its output. Typically these will be colors, sizing and positioning. |

| | |
|-------|-------|
| Selector | `.slds-tabs_large` |
| Summary | Large sized tabs |
| Restrict | `.slds-tabs_scoped` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-tabs_medium` |
| Summary | Medium sized tabs |
| Restrict | `.slds-tabs_scoped` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-tabs_scoped__content` |
| Summary | Styles each tab content wrapper |
| Restrict | `.slds-tabs_scoped` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-is-active` |
| Summary | Active state for a tab item |
| Restrict | `.slds-tabs_scoped__item` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-tabs_scoped__overflow-button` |
| Summary | List item containing the overflow button menu |
| Restrict | `.slds-tabs_scoped__item` |
| | |

| | |
|-------|-------|
| Selector | `.slds-tabs_scoped__link` |
| Summary | Styles each actionable element inside each tab item |
| Restrict | `.slds-tabs_scoped__item` a, `.slds-tabs_scoped__item` button |
| | |

| | |
|-------|-------|
| Selector | `.slds-tabs_scoped__item` |
| Summary | Styles each list item as a single tab |
| Restrict | `.slds-tabs_scoped` ul li |
| | |

| | |
|-------|-------|
| Selector | `.slds-tabs_scoped__nav` |
| Summary | Creates the container for the default tabs |
| Restrict | `.slds-tabs_scoped` ul |
| | |

| | |
|-------|-------|
| Selector | `.slds-tabs_scoped` |
| Summary | Initializes scoped tabs |
| Support | dev-ready |
| Restrict | div |
| Variant | true |
| | |

#####Users can interact with Scoped Tabs using mouse clicks to switch between tabs, close tabs (if closable), and access the overflow dropdown for hidden tabs. Ensure clickable areas are large enough for easy interaction.

##Scoped Tabs support the following keyboard interactions:

* **Tab:** Navigate into and out of tab panels.
* **Shift+Tab**: Moves focus back to the selected tab when focus is on first element in a tab panel.
* **Arrow keys:** Move between tabs.
* **Enter/Space:** Activate the overflow menu.

##**Screen Readers:** Tabs are announced using roles like `tablist`, `tab`, and `tabpanel` .

**Magnifiers and High Contrast:** Clear focus indicators and labels ensure usability.

**Alternative Input Devices:** Voice commands should allow users to select tabs by their label, while sip-and-puff devices can navigate tabs through keyboard emulation.

###* Use clear and concise labels for tabs.
* Avoid using color as the only visual indicator.
* Ensure sufficient contrast between text and background.
* Validate that tab focus states are visually distinct.

######* Use short and descriptive labels for clarity.
* Avoid jargon or abbreviations that might confuse users.

---
*Generated from SLDS Rules Generator*
