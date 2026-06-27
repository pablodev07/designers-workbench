# Prompt

## Prompt

###* Prompt is a modal dialog ideal for urgent tasks requiring user focus or decision-making. 
* Ensures users make deliberate choices or provide necessary data before resuming other actions on the page.
* Prompts appear when the system needs to communicate a message to the user; it doesn’t show up as a result of user action.

#####* Use for critical actions such as errors or system alerts, or confirming an action.
* Keep content concise and relevant to the user’s immediate task.
* Provide clear actions, such as "OK" or "Cancel."
* Prompts should appear rarely and generally should not be a part of a typical user flow.

##* Avoid using Prompt for non-critical interactions; consider Scoped Notifications or Toast instead.
* Do not overuse; too many prompts can lead to "prompt fatigue."
* Avoid complex content within a prompt; keep it focused on a single task.

###| **Alert**  Customizable header with a single action button. |   |
| --- | :---: |
| |   |
| **Confirm**  Headerless with two action buttons. |   |
| |   |
| **Prompt**  Customizable header with two action buttons. |   |
| |   |

#######| **Default** Notifies the user of neutral information about the task being completed. |   |
| --- | :---: |
| |   |
| **Shade** Notifies the user of neutral information about the task being completed. |   |
| |   |
| **Info** Communicates neutral information about the system. |   |
| |   |
| **Offline** Notifies the user they are not connected to the internet. |   |
| |   |
| **Inverse** Notifies the user of neutral information about a specific feature. |   |
| |   |
| **Alt-inverse** Notifies the user of neutral information about a specific feature. |   |
| |   |
| **Success** Communicates the successful completion of an action. |   |
| |   |
| **Warning** Warns the user about important system information that deserves caution. |   |
| |   |
| **Error** Alerts the user about an error in the system that needs immediate attention. |   |

##Responsive design with adaptable dimensions. Supports minimum and maximum width constraints to ensure readability on all devices.

##* Title - Clear and concise (max. 50 characters).
* Body - Use short paragraphs or bulleted lists for readability.

#####Close Prompt via footer buttons, or Escape key.

##Prompts are centered in the viewport.

##Primary action (e.g., "Confirm") is highlighted and focusable by default.

##* Inline error messages guide users if required input is missing.
* Example: "Please provide a reason for this action."

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
| Selector | `.slds-modal_prompt` |
| Summary | Initializes Prompt style notification |
| Support | dev-ready |
| Restrict | section[role="alertdialog"] |
| Variant | true |
| | |

#####* Users can interact with buttons or close the prompt by clicking on the confirmation button.
* Clicking outside the modal does not close the prompt to avoid accidental actions.

##* **Tab Key**: Moves focus between interactive elements within the modal in sequential order.
* **Shift + Tab**: Moves focus backward through interactive elements.
* **Enter**: Activates the currently focused button or link.
* **Escape**: Closes the modal.
* **Focus Trap**: When open, focus is trapped within the modal to prevent interaction with elements outside it.

##* **Screen Readers:** Labels and roles are announced for each part (header, body, footer).
* **Braille Displays:** Content is structured for proper navigation and focus.

###* Ensure prompts are visually distinguishable with clear text and high-contrast buttons.
* Maintain focus states on interactive elements.
* Use appropriate icons or visual cues in warning prompts.

###* Define `aria-labelledby` and `aria-describedby` for header and body content.
* Implement focus management: initial focus on the primary button and return focus to the triggering element after closing.

###* Provide clear and concise labels for buttons.
* Avoid ambiguous language; e.g., "Delete Record" instead of "Submit."

---
*Generated from SLDS Rules Generator*
