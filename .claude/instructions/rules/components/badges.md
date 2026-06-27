# Badges

## Badges

###* Displays contextual information, like user roles, statuses, or categories.
* Compact, small colored background with text or an icon or both.
* Lightweight and unobtrusive, often used in dashboards or next to data fields for quick, concise communication.
* Provides at-a-glance information that doesn’t need extra interaction.

#####* Display a small yet important piece of information (for example user roles, status indicators) in list views or in dashboards. Example: "Administrator" next to a user's name in a dashboard.
* Make sure badges have clear, easily understandable text and proper colors for accessibility.
* Use badges in a consistent way across your product to help users become familiar with their meaning.

##* Don’t use badges for large amounts of text, such as long descriptions, or critical information that users must engage with directly.
* Don’t use multiple badges in one place, which can clutter the UI and overwhelm users.

| Rule | Image | Caption | Description |
| :--- | :--- | :--- | :--- |
| Do |   |   | Use badges to highlight statuses and categorization. |
| Do |   |   | Use a badge with descriptive text. |
| Do |   |   | Use the informational badge on inverse content. |
| Don't |   |   | Don't use badges for actions. Badges are non-interactive. |
| Don't |   |   | Don’t show both right and left icons at the same time. |

###| **Default Badge**  Shows normal or non-urgent information. This is the most commonly used badge for general statuses that don't require immediate attention. |   |
| --- | :---: |
| |   |
| **Light Badge**  Shows less prominent or subtle statuses. It's used when the information is helpful but not critical, allowing it to blend more into the UI while still being visible. |   |
| |   |
| **Info Badge** Used in dark-themed UI sections to make badges high-contrast and readable. The inverse badge is typically applied when the default badge would not be clearly visible. |   |
| |   |
| **Success Badge**  Communicates positive statuses like "Completed" or "Approved." Green is universally associated with success and can be used to highlight successful actions or achievements. |   |
| |   |
| **Warning Badge**  Highlights cautionary or advisory information such as “Pending” or “At Risk”. It draws attention to elements that need review but are not yet critical or destructive. |   |
| |   |
| **Error Badge**  Used for urgent or critical statuses such as "Failed" or "Error." The red badge immediately draws the user’s attention and indicates that some action or review is needed to resolve an issue. |   |

###########* Badge labels must be short and concise.
* Use title capitalization. No punctuation.
* Use 1-3 words to avoid truncation.

#####Badges are static and non-interactive. They don't receive focus and can't be used as a trigger.

##Badges aren't typically used for form validation or error messaging but can display statuses like "Incomplete" or "Pending" as a supplementary label.

######Use CSS Custom Properties as hooks to customize this SLDS component with your own style. For more information, read the technical documentation.

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
| Selector | `.slds-badge__icon_right` |
| Summary | Adds an icon to the right of the badge text |
| Restrict | `.slds-badge__icon` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-badge__icon_left` |
| Summary | Adds an icon to the left of the badge text |
| Restrict | `.slds-badge__icon` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-badge__icon_inverse` |
| Summary | Change badge icon fill color to inverse |
| Restrict | `.slds-badge__icon` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-badge__icon` |
| Summary | Adds an icon to badge |
| Restrict | `.slds-badge` span |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-badge_lightest` |
| Summary | Change badge color to white with normal text |
| Restrict | `.slds-badge` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-badge_inverse` |
| Summary | Change badge color to a dark with light text |
| Restrict | `.slds-badge` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-badge` |
| Summary | Create badge component |
| Support | dev-ready |
| Restrict | span |
| Variant | true |
| | |

###Badges are static and non-interactive (they do not receive focus). However, screen readers should identify badges by their content.

###* Designers should ensure that badges are readable and clear, and do not use color alone to convey information
* When deviating from the standard badge styling hooks, ensure proper contrast ratios.

######Badge labels should support localization, ensuring the text adapts based on the user’s language settings.

---
*Generated from SLDS Rules Generator*
