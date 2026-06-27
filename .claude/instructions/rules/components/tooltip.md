# Tooltip

## Tooltip

###Tooltips display brief, relevant information about an interactive element. They’re ideal for explaining unfamiliar icons, abbreviations, or functionality without occupying space in the primary layout.

* Tooltips are small popup elements that provide supplemental information about a specific UI element.
* They appear near interactive elements such as buttons, icons, or input fields to provide explanations, tips, or clarifications.
* Tooltips enhance usability by offering non-intrusive, on-demand guidance that doesn’t disrupt the workflow.
* Tooltips are triggered by user interactions like hovering over, focusing on, or tapping the associated element.

#####* Tooltip content is concise and contextually relevant.
* Place the tooltip close to the associated element without obscuring it.
* Use tooltips to clarify icons, buttons, or text links for users.

##* Don’t use tooltips for essential instructions—include critical information in visible text.
* Don’t use tooltips for non-interactive, focusable elements.
* Don’t overload the tooltip with lengthy or detailed content.
* Avoid reliance on tooltips for mobile users because hover interactions are limited on mobile devices

###| **Base**  The default tooltip provides brief text guidance and appears on hover or focus. **Use case:** Explain the function of a button or icon.  |   |
| --- | :---: |

#########Keep tooltips concise, with 200 characters or less. This ensures optimal readability. Tooltips are sized to fit their content, and remain compact.

##* Use plain, conversational language.
* Avoid jargon and technical terms unless necessary.
* Keep line length under 30–40 characters.

#####1. **Default:** The tooltip is hidden until triggered
2. **Hover**: Appears when the user hovers over the trigger element.
3. **Focus**: Appears when the user focuses on the trigger element using the keyboard.

##* Triggered by hover or focus.
* Automatically dismissed when the user navigates away from the trigger element.

##|  *Top-Left* |  *Top-Middle* |  *Top-Right* |
| :---: | :---: | :---: |
| |   |   |
|  *Right-Bottom* |  *Right-Middle* |   *Right-Top* |
| |   |   |
|  *Left-Bottom* |  *Left-Middle* |  *Left-Top* |
| |   |   |
|  *Bottom-Left* |  *Bottom-Middle* |  *Bottom-Right* |

##Tooltips must adjust their position and size for mobile and desktop viewports. Consider touch-friendly alternatives for mobile devices.

##Never use tooltips to replace validation messages. Use tooltips to supplement, not substitute, essential feedback.

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
| Selector | `.slds-slide-from-left-to-right` |
| Summary | Slides tooltip from left to right |
| Restrict | `.slds-popover_tooltip` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-slide-from-right-to-left` |
| Summary | Slides tooltip from right to left |
| Restrict | `.slds-popover_tooltip` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-slide-from-top-to-bottom` |
| Summary | Slides tooltip from top to bottom |
| Restrict | `.slds-popover_tooltip` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-slide-from-bottom-to-top` |
| Summary | Slides tooltip from bottom to top |
| Restrict | `.slds-popover_tooltip` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-fall-into-ground` |
| Summary | Toggles off tooltip |
| Restrict | `.slds-popover_tooltip` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-rise-from-ground` |
| Summary | Toggles on tooltip |
| Restrict | `.slds-popover_tooltip` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-popover_tooltip` |
| Summary | Initializes a tooltip |
| Support | dev-ready |
| Restrict | [role="tooltip"] |
| Variant | true |
| | |

#####* Tooltips appear on hover and disappear when the cursor moves away.

##* Tooltips should appear on focus and remain visible until focus is lost.

##* Ensure Tooltips are accessible to screen readers and can be activated by assistive devices.

###* Avoid using color alone to convey meaning.
* Ensure sufficient contrast between the Tooltip and the background.
* Showing the tooltip on hover or on keyboard focus of a focusable element ensures that all users can access it, even if they aren’t using a mouse. Examples of focusable elements include links, buttons, and inputs.

###* Implement ARIA roles (e.g., `aria-describedby`) to associate the Tooltip with its trigger element.
* Give the tooltip an `ID` and use that as the value of the `aria-describedby` attribute of the DOM element it describes. This helps users of assistive technology read the tooltip content.
* When using a link as the focusable element to show a tooltip, add a `<div>` at the bottom of the tooltip bubble that includes a description of where the link will take the user. Add `aria-hidden='true'` to this element, and ensure that the link text itself matches the text within this `<div>`.
* `lightning-helptext` contains a focusable button element. To ensure that users who aren't using a mouse can access the tooltip, `lightning-helptext` shows the tooltip on hover or on keyboard focus. The button renders with an `aria-describedby` attribute set to an `ID` that matches the element containing the tooltip text. The `aria-describedby` attribute enables assistive technology to announce the tooltip content.
* The component renders the tooltip using `role="tooltip"`. When you remove focus from the button or mouse away from it, the tooltip is hidden. To provide important information, display descriptive text in the component itself instead of using `lightning-helptext`.
* Ensure Tooltips are dismissible using the Esc key.

###* Keep content concise, relevant, and understandable.
* The button renders assistive text that contains "Help" by default. To provide your own description, use the `alternative-text` attribute. The text should describe the function of the icon, for example, "Show help text", instead of repeating the content description. Providing the purpose of the icon in the description improves usability and removes repetition of content for users of assistive technology.

###Ensure Tooltips support multiple languages and text expansion for localization.

---
*Generated from SLDS Rules Generator*
