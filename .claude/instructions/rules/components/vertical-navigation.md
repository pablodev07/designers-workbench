# Vertical Navigation

## Vertical Navigation

###The vertical navigation component is designed to help users filter and access content within a page efficiently. It's particularly useful in scenarios where users need to switch between different views or datasets without leaving the current page.

* Organizes related links vertically to aid in-app navigation.
* Ideal for filtering content within a page without reloading.
* Comprises sections and items, with support for collapsible groups.

##* Employ vertical navigation when users need to filter or switch between subsets of data on the same page.
* Group related items under clear section headers to enhance discoverability.
* Clearly highlights the selected item to inform users of their current context.
* Utilize collapsible sections to handle extensive lists, reducing visual clutter.

##* If deep nesting is required, consider using a Tree to represent the hierarchy.
* For main application navigation, opt for the Global Navigation component.

############* The Vertical Navigation component is designed to be responsive, adjusting to various screen sizes. It's recommended to maintain a minimum width of 225 pixels to ensure readability.
* The compact attribute may be added to reduce vertical spacing.

#####* Place the Vertical Navigation component on the left side of the page or section it controls, aligning with common user expectations for in-page navigation.

##* Use concise and descriptive labels for navigation items.
* Incorporate icons where appropriate to aid recognition.
* Provide tooltips for additional context if necessary.

#####For reference, a comprehensive list of possible states of a component: 

1. **Default:** Item is displayed in its standard state.
2. **Hover:** Item changes background color to indicate interactivity.
3. **Active:** The currently selected item is highlighted to show the user's location.
4. **Disabled**: Item is visible but not interactive.
5. **Focus**: Item label is underlined as a visual cue for keyboard navigation.

##For reference, a comprehensive list of possible interactions of a component: 

* Click: Navigate to the linked page or section.
* Expand/Collapse: Toggle sections to show or hide contained navigation items.

##If content is dynamically loading within the navigation, provide a visual indicator, such as a spinner, to inform users that it is loading.

##Ensure that the vertical navigation component is scrollable if the number of items exceeds the available vertical space, allowing users to access all navigation options.

##Highlight the default or currently active navigation item to indicate the user's current location within the application.

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
| Selector | `.slds-nav-vertical__item` [type="radio"] |
| Summary | Version of vertical nav that uses radio buttons |
| Support | dev-ready |
| Restrict | `.slds-nav-vertical` |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-nav-vertical_radio-faux` |
| Summary | Used for styling the radio button |
| Restrict | `.slds-nav-vertical__action` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-nav-vertical__action-text` |
| Summary | No description available |
| Restrict | `.slds-nav-vertical__action_overflow` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-nav-vertical__action_overflow` |
| Summary | No description available |
| Restrict | `.slds-nav-vertical__action` |
| | |

| | |
|-------|-------|
| Selector | `.slds-nav-vertical__action` |
| Summary | Actionable element inside of vertical navigation list item |
| Restrict | `.slds-nav-vertical` a, `.slds-nav-vertical` button, `.slds-nav-vertical` label |
| | |

| | |
|-------|-------|
| Selector | `.slds-is-active` |
| Summary | Active state of a list item within a vertical navigation |
| Restrict | `.slds-nav-vertical__item` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-nav-vertical__item` |
| Summary | List of the vertical navigation |
| Restrict | `.slds-nav-vertical` li, `.slds-nav-vertical` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-nav-vertical__title` |
| Summary | Section title of the vertical navigation |
| Restrict | `.slds-nav-vertical` h2, `.slds-nav-vertical` legend |
| | |

| | |
|-------|-------|
| Selector | `.slds-nav-vertical_shade` |
| Summary | Modifier to adjust list item when vertical navigation is sitting on top of a shaded background |
| Restrict | `.slds-nav-vertical` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-nav-vertical_compact` |
| Summary | Modifer to reduce spacing between navigation items |
| Restrict | `.slds-nav-vertical` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-nav-vertical` |
| Summary | No description available |
| Support | dev-ready |
| Restrict | nav, fieldset |
| Variant | true |
| | |

We understand the importance of operations that enhance the experience for all users and others who rely on various navigation methods. Lightning also integrates numerous other accessibility considerations, some outlined below.

#####* Click on navigation items to move to different sections or pages.
* For overflow sections, users can click the chevron icon or label to expand or collapse the list of items.

##* The `Tab` key moves focus through the navigation items.
* `Shift+Tab` moves focus to the previous item.
* To expand or collapse an overflow section, press the `Enter` or `Space` key when the section header is focused.

##* Ensure that navigation items are announced clearly by screen readers.

######* Use clear and concise language for navigation item labels.
* If icons are used without accompanying text, provide alternative text to describe their function.

###Ensure that each navigation item has an appropriate `aria-label` or descriptive text to convey its purpose.

###Ensure that text labels can be translated, and consider the impact of text expansion in different languages on the layout.

# Patterns

---
*Generated from SLDS Rules Generator*
