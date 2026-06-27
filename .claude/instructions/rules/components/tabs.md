# Tabs

## Tabs

###* Tabs organize related content into sections within a single page. This makes it easy for users to find what they need, without having to go to a different page. Users simply switch between the tabs.
* Tabs help you manage large amounts of content. They make it easy for users to focus on specific sections of content as needed.
* Available in three sizes—Default, Medium, and Large—to suit different layouts and page hierarchies.
* A tabset component contains multiple tab components.

#####* Organize content into clear, related sections relevant to the user’s tasks.
* Set the most important or frequently used tab as the default active tab.
* Use descriptive, concise tab labels so users know what content to expect in the tab.
* Use icons strategically to clarify your message. They're great for highlighting actions or categorizing information.
* Use an overflow menu for tabsets with too many tabs or long labels that don’t fit the available space.

| |
| --- |

| |
| --- |

| Rule | Image | Caption | Description |
| :--- | :--- | :--- | :--- |
| Do |   |   | Do use an overflow menu instead of truncating tabs. |

##* Avoid too many tabs, as they can complicate navigation.
* Limit nested tabs, which can confuse users.
* Don’t overload tabs with icons, as this creates visual clutter.
* Use buttons, not tabs, for initiating actions.
* In small spaces such as sidebars or card bodies, use scoped tabs.
* Use a progress indicator or path component for process tracking.

| Rule | Image | Caption | Description |
| :--- | :--- | :--- | :--- |
| Don't |   |   | Don’t use more than one icon type. |
| Don't |   |   | Don’t add additional space between tabs. |

###| **Base Tabs**  Horizontal tabs display labels in a single row, with the selected tab’s content shown below. **Use Case** Use three to five tabs for related sections, providing quick access to task-critical content.  |  *Base tabs example.* |
| --- | :---: |

##########Use utility icons or standard object icons to differentiate tabs visually.

**Dynamic Titles** 

Update tab titles dynamically to reflect real-time changes, for example by adding “(New)” or updated counts.

**Active Default Tab**

The first tab is active by default but can be set to another tab using the `active-tab-value` property.

##Base tabs can be set to default, medium, and large sizes using the SLDS utility classes to accommodate different layouts, user needs, and content requirements.  

| **Default**: The standard size supported by the tabset component. Useful for most dashboard and record page layouts. Best for smaller spaces so that tabs don't overflow.   **Medium:** Use for side panels or when you want to emphasize a section within a larger layout. Medium tabs can accommodate longer labels, but keep them brief to avoid tab overflow.**Large**: Perfect for touch devices or when users frequently switch between tabs.  |   |
| :--- | :---: |
| |   |

##* Use title case for labels.
* Labels clearly and concisely describe the content.
* Avoid overly general labels. If the tab content contains tasks, use actionable labels, such as “Review Contract,” “Edit Terms”.
* Tab labels don’t truncate—use an overflow menu if lengthy labels make the tabset too wide for the container.

#####1. **Default**: Tabs are inactive except for the default selected tab.
2. **Hover**: The label changes color and an underline is added to the border under the tab labels.
3. **Selected**: The active tab is highlighted with an underline and label color change.
4. **Focus**: Adds a focus indicator, an underline for the label. Focus follows selection, so the tab is also highlighted for the selected state with an underline and label color change.

##The first tab is active by default when the tabset loads.

##Tabs appear at the top of a content area and control the content below them within the same container.

##Tabs don’t have a built-in loading state. Use a spinner or placeholder content in the tab’s content area to make  custom loading indicators. To improve performance, tab content loads only as it's needed, when the tab is activated. You can only query the content for the active and previously active tabs.

##* Don't truncate tab labels.
* Make sure tabs are visible and usable on all devices. 
* When a tabset contains more tabs than can fit in the viewport, the tabs that don't fit are moved into an overflow menu next to the last tab that fits. 
* The overflow menu replaces the last fully visible tab in the set. 
* The active tab always shows and is never moved into the overflow.

##To help users quickly identify tabs with errors, display an error icon next to the tab label. Include detailed error messages within the tab content area to explain the issue. You can use inline text, tooltips, or a feedback component to display an error message.

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
| Selector | `.slds-tabs-mobile__group` |
| Summary | Wrapper for adjacent mobile tab sets |
| Support | dev-ready |
| Restrict | div |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-tabs-mobile__item` |
| Summary | Styles each list item as a single drill-in tab |
| Restrict | `.slds-tabs-mobile` li |
| | |

| | |
|-------|-------|
| Selector | `.slds-tabs-mobile` |
| Summary | Styles the list of tabs for the mobile tab set |
| Restrict | `.slds-tabs-mobile__container` ul |
| | |

| | |
|-------|-------|
| Selector | `.slds-panel_animated` |
| Summary | Modifier that changes the display of a panel to hide out of view and animate in when opened |
| Restrict | `.slds-tabs-mobile__container` .slds-panel |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-tabs-mobile__container` |
| Summary | Container to hold mobile tabs and their panels |
| Support | dev-ready |
| Restrict | div |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-has-warning` |
| Summary | Warning notification on a subtab |
| Restrict | `.slds-sub-tabs__item` |
| | |

| | |
|-------|-------|
| Selector | `.slds-has-error` |
| Summary | Error notification on a subtab |
| Restrict | `.slds-sub-tabs__item` |
| | |

| | |
|-------|-------|
| Selector | `.slds-has-success` |
| Summary | Success notification on a subtab |
| Restrict | `.slds-sub-tabs__item` |
| | |

| | |
|-------|-------|
| Selector | `.slds-indicator-container` |
| Summary | Used to reserve spacing for tab indicators |
| Restrict | `.slds-context-bar__item` span, `.slds-sub-tabs__item` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-sub-tabs__item` |
| Summary | Subtab item |
| Restrict | `.slds-sub-tabs` li |
| | |

| | |
|-------|-------|
| Selector | `.slds-sub-tabs` |
| Summary | Subtabs |
| Support | dev-ready |
| Restrict | `.slds-tabs_default` |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-tabs_large` |
| Summary | Large sized tabs |
| Restrict | `.slds-tabs_default` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-tabs_medium` |
| Summary | Medium sized tabs |
| Restrict | `.slds-tabs_default` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-tabs_default__header` |
| Summary | Applies bold font weight to header |
| Restrict | `.slds-tabs_default` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-tabs_default__content` |
| Summary | Styles each tab content wrapper |
| Restrict | `.slds-tabs_default` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-tabs__right-icon` |
| Summary | true |
| Restrict | `.slds-tabs_default__item` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-tabs__left-icon` |
| Summary | true |
| Restrict | `.slds-tabs_default__item` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-tabs_default__overflow-button` |
| Summary | List item containing the overflow button menu |
| Restrict | `.slds-tabs_default__item` |
| | |

| | |
|-------|-------|
| Selector | `.slds-tabs_default__link` |
| Summary | Styles each actionable element inside each tab item |
| Restrict | `.slds-tabs_default__item` a, `.slds-tabs_default__item` button |
| | |

| | |
|-------|-------|
| Selector | `.slds-is-unsaved` |
| Summary | Creates styles for a Tab Item when its in an unsaved or dirty state |
| Restrict | `.slds-tabs_default__item` |
| | |

| | |
|-------|-------|
| Selector | `.slds-indicator_unread` |
| Summary | Unread notification icon |
| Restrict | `.slds-has-notification` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-has-notification` |
| Summary | Creates styles for a Tab Item when its tab has new activity in |
| Restrict | .slds-tabs_default__item, `.slds-dropdown__item` |
| | |

| | |
|-------|-------|
| Selector | `.slds-has-focus` |
| Summary | Focus state for a tab item |
| Restrict | `.slds-tabs_default__item` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-is-active` |
| Summary | Active state for a tab item |
| Restrict | `.slds-tabs_default__item` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-tabs__item_overflow` |
| Summary | A tab item that has an overflow menu |
| Restrict | `.slds-tabs_default__item` |
| | |

| | |
|-------|-------|
| Selector | `.slds-tabs_default__item` |
| Summary | Styles each list item as a single tab |
| Restrict | `.slds-tabs_default` ul li |
| | |

| | |
|-------|-------|
| Selector | `.slds-tabs_default__nav` |
| Summary | Creates the container for the default tabs |
| Restrict | `.slds-tabs_default` ul |
| | |

| | |
|-------|-------|
| Selector | `.slds-tabs_default` |
| Summary | Initializes a default tablist |
| Support | dev-ready |
| Restrict | div |
| Variant | true |
| | |

#####* Users can click tabs or the overflow menu to switch content.

##* **Tab:** Navigates into and out of tab panels.
* **Shift+Tab:** Moves focus back to the selected tab when focus is on first element in a tab panel.
* **Arrow keys:** Move between tabs.
* **Enter/Space:** Activate the overflow menu.

##**Screen Readers:** Tabs are announced using roles like `tablist`, `tab`, and `tabpanel` 

**Magnifiers and High Contrast:** Clear focus indicators and labels ensure usability.

**Alternative Input Devices:** Voice commands should allow users to select tabs by their label, while sip-and-puff devices can navigate tabs through keyboard emulation.

###* Use concise, clear labels.
* Place commonly used tabs to the left for logical task flow.

######**ARIA Roles**: 

Tabbed UIs have three parts with specific ARIA role requirements:

* The tab list, which should have `role="tablist"`
* The tabs in that list, which should each be an `<a role="tab">` anchor wrapped in a `<li role="presentation">` list item
* The tab panels, which display each tab’s content and should each have `role="tabpanel"`

If additional context is needed for a tab’s purpose, use `aria-describedby` with a description that screen readers can interpret.

---
*Generated from SLDS Rules Generator*
