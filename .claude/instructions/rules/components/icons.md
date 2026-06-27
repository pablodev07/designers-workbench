# Icons

## Icons

###* Icons are graphical elements used to visually represent features, data types, or statuses.
* Icons improve navigation, show system status, and complement user actions.
* Icons make interfaces more intuitive and easier to use. They provide visual cues that help users understand the content and improve the user experience.
* Icons are scalable, accessible, and customizable.

#####* Use recognizable and meaningful icons to convey functionality clearly.
* Pair icons with labels for better accessibility and clarity.
* Follow usage guidelines to maintain consistent sizing, spacing, and alignment.
* Use icons sparingly to avoid clutter.

##* Don’t use icons without labels if the meaning isn’t universally understood.
* Don’t rely only on icons to convey critical information—provide text or tooltips as backups.
* Avoid overloading interfaces with excessive or decorative icons that don’t serve a purpose.

###Icons are grouped into four categories based on their purpose.

| **Utility Icons**  Utility icons represent system-wide actions or states, such as edit or search. They are the most commonly used icon type throughout Salesforce products and apps. |  *Examples of Salesforce utility icons.* |
| --- | :---: |
| |   |
| **Object Icons**  Represent common Salesforce objects, such as account or opportunity objects. |  *Examples of Salesforce standard icons.* |
| |   |
| **Doctype Icons**  Represent file types, such as PDF or Word. |  *Examples of Salesforce doctype icons.* |
| |   |
| **Action Icons**  Action icons represent specific actions related to a record or page, such as deleting or approving. |  *Examples of Salesforce action icons.* |

###Icons are simple structures made up of a symbol, a container, and a background. Simple shapes and contrasting colors help to establish a visual hierarchy and increase scalability.

####Icons are responsive and adjust fluidly within parent containers unless their size is specified. Generally, icon base sizes range from **14px**, the smallest, to **48px**, the largest.

###Icons are usually part of other components. They're simple visual elements without many interactive features. Hovering over an icon can display a tooltip with more information. For more advanced interactions, consider using components like buttons or avatars. You can include icons in these components, and they have more features and customization options.

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
| Selector | [class*='slds-icon-standard-'] |
| Summary | Standard icons |
| Support | dev-ready |
| Restrict | .slds-icon_container, svg, abbr |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | [class*='slds-icon-doctype-'] |
| Summary | Container for icons |
| Support | dev-ready |
| Restrict | .slds-icon_container, svg |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | [class*='slds-icon-custom-'] |
| Summary | Custom icons |
| Support | dev-ready |
| Restrict | .slds-icon_container, svg, abbr |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-icon_disabled` |
| Summary | No description available |
| Restrict | `.slds-icon_container` |
| | |

| | |
|-------|-------|
| Selector | `.slds-current-color` |
| Summary | No description available |
| Restrict | `.slds-icon_container` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-icon-text-light` |
| Summary | No description available |
| Restrict | .slds-icon, svg |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-icon-text-error` |
| Summary | Changes the icon fill color to match the error state |
| Restrict | `.slds-icon` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-icon-text-success` |
| Summary | Changes the icon fill color to match the success state |
| Restrict | `.slds-icon` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-icon-text-warning` |
| Summary | Changes the icon fill color to match the warning state |
| Restrict | `.slds-icon` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-is-disabled` |
| Summary | Changes the icon fill color to match the disabled state |
| Restrict | `.slds-icon` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-icon-text-default` |
| Summary | Changes the icon fill color to match the default state |
| Restrict | `.slds-icon` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-icon_large` |
| Summary | No description available |
| Restrict | `.slds-icon` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-icon_small` |
| Summary | No description available |
| Restrict | `.slds-icon` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-icon_x-small` |
| Summary | No description available |
| Restrict | .slds-icon, `.slds-button__icon` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-icon_xx-small` |
| Summary | No description available |
| Restrict | `.slds-icon` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-icon` |
| Summary | No description available |
| Restrict | `.slds-icon_container` svg, svg |
| | |

| | |
|-------|-------|
| Selector | `.slds-icon_container_circle` |
| Summary | Circle container for icons |
| Restrict | `.slds-icon_container` |
| | |

| | |
|-------|-------|
| Selector | [class*='slds-icon-action-'] |
| Summary | Action icons |
| Support | dev-ready |
| Restrict | .slds-icon_container, svg, abbr |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-avatar-grouped__icon` |
| Summary | Modifier for the icon Avatar in an Avatar Group |
| Restrict | `.slds-icon_container` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-icon_container` |
| Summary | Container for icons |
| Support | dev-ready |
| Restrict | span, div |
| Variant | true |
| | |

#####* **Hover Behavior:**Icons should provide visible feedback when hovered, conveying their title or label.

##* **Screen Readers:**Icons must use the alternative-text, associated text labels, or the title attribute to convey their purpose. Screen readers should not announce decorative icons.
* **Magnification Tools:**The SLDS Icon Library uses svg files so icons remain visually distinct and scalable without pixelation or distortion.

###* Ensure that icons are universally recognizable or paired with text for context. Avoid using ambiguous symbols.
* Icons must meet minimum contrast ratios against their background (4.5:1 for normal text size).
* Icons should align with related elements (e.g., placing a "Save" icon next to a text field).
* Avoid decorative icons that do not add value or may confuse users.

###* Use the aria-hidden attribute for decorative icons.
* Icons require a containing element for two reasons:
    * If assistive text is required, the containing element should contain both the icon and a `<span>` with hidden assistive text describing the icon using the `slds-assistive-text` class.
    * If the icon is used without a visible, descriptive label, a `title` attribute is needed on the containing element. The `title` should describe the icon.
* If an icon has a visible label that describes what the icon represents, no title or hidden assistive text is required.
* The containing element must have the `slds-icon_container` class.

* For informational icons, add descriptive aria-label or assistive-text attributes to communicate the icon's function. For example:`<lightning-icon `icon-name="utility:search"` aria-label="Search" alternative-text="Search"></lightning-icon>`
* If an icon is decorative, use:`<lightning-icon `icon-name="utility:search"` aria-hidden="true"></lightning-icon>`

###* Icons must include descriptive labels that explain their purpose. Avoid generic terms like "icon" or "button."
* Keep text labels or tooltips short but meaningful (e.g., “Search” instead of “Search the database”).

---
*Generated from SLDS Rules Generator*
