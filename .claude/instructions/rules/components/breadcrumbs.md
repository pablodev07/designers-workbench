# Breadcrumbs

## Breadcrumbs

###* Breadcrumbs help users navigate complex websites. They show the path from the top to the current page, and let you easily backtrack to previous pages.
* Breadcrumbs are ideal for multi-level interfaces, and are most effective on pages that are at least two levels deep. Breadcrumbs link only to important pages in a hierarchy.
* Breadcrumbs give context and help users find pages they want to revisit without relying on the back button.
* Place breadcrumbs consistently at the top of a page, left-aligned, and follow a horizontal layout. 

#####* Use breadcrumbs to show the navigation path through the hierarchy, from the highest-level page to the current page.
* Use short and meaningful labels for each link. Clearly communicate page names or categories with your labels, and help users to understand where they are.
* Use breadcrumbs for pages that are at least two levels deep.
* Link breadcrumbs only to important steps. Not every page or action must be represented.
* Left-align breadcrumbs at the top of the page, ensuring a consistent and predictable layout.

##* Don't use breadcrumbs on a page that lacks a hierarchical relationship with previous pages. For example, help or FAQ pages accessed via search don't require breadcrumbs.

* Don't replace other navigation with breadcrumbs. Breadcrumbs are intended to complement primary navigation such as tabs and sidebars.

###| **Default Breadcrumb**  Shows the full path. Ideal for pages with a simple hierarchy.  **Use Case:** When users need to see their path and quickly return to previous categories.  |  *Base breadcrumb example.* |
| --- | :---: |
| |   |
| **Overflow Breadcrumb**  Shows the last few breadcrumbs in the path before the current page. The higher-level pages are hidden in a dropdown that can be expanded.   **Use Case:** Use to show only the most relevant levels. Hiding levels prevents clutter while offering an easy way to navigate back to the parent topic.  |  *Overflow breadcrumb example.* |
| |   |

###The breadcrumbs component is made up of two primary sections, link, and overflow, which contain the elements described here.

######Each breadcrumb is a text link that represents a page or location within the system. Use only simple location names.

#####1. **Default:** Breadcrumbs links are displayed with chevron separators between the links.
2. **Hover:** When a mouse pointer is hovering over a breadcrumb, the link changes color and displays an underline.

##* The breadcrumb for the current page isn't a clickable link. Each breadcrumb link for a higher-level page in the trail is clickable and navigates to the corresponding parent page.
* Clicking the Overflow Icon Button opens a menu that displays breadcrumbs that aren't shown due to space limitations.

##Breadcrumbs are usually left-aligned at the top of the page, preceding the main title or content header, to keep the breadcrumbs visible and accessible for easy navigation.

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
| Selector | `.slds-breadcrumb__item` |
| Summary | Item of the breadcrumb list |
| Restrict | `.slds-breadcrumb` li |
| | |

| | |
|-------|-------|
| Selector | `.slds-breadcrumb` |
| Summary | Create breadcrumbs component |
| Support | dev-ready |
| Restrict | ol |
| Variant | true |
| | |

#####Breadcrumbs should change color on hover to indicate that they are clickable. The mouse cursor should change to a pointer.

##* **Tab**: Moves focus between breadcrumb links.
* **Enter/Spacebar**: Opens the overflow menu, allowing users to tab through hidden breadcrumbs.
* **Arrow Keys:** Cycle through menu items.
* **Escape:** Closes the overflow menu.

###* When deviating from the standard breadcrumb styling hooks, ensure proper contrast ratios for readability.

#####* Use `aria-current="page"` for the last breadcrumb to indicate the current location in the hierarchy to screen readers.
* Set `aria-label="Breadcrumbs"` on the breadcrumb container to announce it as a breadcrumb trail to assistive technologies.
* Use `role="list"` for the breadcrumb container and `role="listitem"` for each breadcrumb link to define the structure.

##* If an overflow menu is used, it should follow standard ARIA practices for dropdown menus, including announcing when it is expanded, and supporting keyboard navigation within the menu.
* An `aria-label` should be applied describing the purpose of the dropdown “More breadcrumbs”.

#####* Use consistent, clear labels, so that they are easily recognizable in context.

##* Labels should be short, to ensure that localized text will fit. Design with different languages in mind to avoid truncation.
* Account for right-to-left (RTL) languages (e.g., Arabic, Hebrew) by ensuring that breadcrumbs and chevrons dynamically adapt to RTL layouts.

---
*Generated from SLDS Rules Generator*
