# Modals

## Modals

###Modals are best for presenting focused content or gathering input without navigating away. Use them sparingly to avoid overwhelming users or disrupting workflows.

* They temporarily block the underlying interface, ensuring user action on the task.
* Modals are dismissible via buttons and keyboard shortcuts.

#####* Use to capture attention for critical tasks or information.
* Use clear, actionable titles and concise content.

##* Avoid using modals for minor notifications; use a Toast or Alert instead.
* Do not use modals for system alerts that the user must acknowledge; use a Prompt instead.
* Don’t use modals for persistent content; consider embedding content directly on the page.

#########Modal is set to relative width and adjusts based on the width of the available viewport. Each size includes minimum and maximum widths. The initial size should be based on the amount of content expected to be displayed. 

**Small**: 60% of viewport - for brief messages.

**Medium** (Default): 70% of viewport - for most tasks.

**Large**: up to 90% of viewport - for detailed forms.

**Full**: for mobile - 90% on desktop and 100% on mobile.

####* Title - Clear and concise (max. 50 characters).
* Body - Use short paragraphs or bulleted lists for readability.

#####Close Modal via "X" icon, footer buttons, or Escape key.

##Modals are centered within the viewport.

##Body content scrolls when exceeding modal height.

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
| Selector | `.slds-backdrop_open` |
| Summary | No description available |
| Restrict | `.slds-backdrop` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-backdrop` |
| Summary | No description available |
| Restrict | `.slds-modal` ~ div |
| | |

| | |
|-------|-------|
| Selector | `.slds-slide-down-cancel` |
| Summary | No description available |
| Restrict | `.slds-modal` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-slide-up-saving` |
| Summary | No description available |
| Restrict | `.slds-modal` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-slide-up-open` |
| Summary | No description available |
| Restrict | `.slds-modal` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-fade-in-open` |
| Summary | No description available |
| Restrict | `.slds-modal` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-modal_full` |
| Summary | Makes the modal full screen in small viewports |
| Restrict | `.slds-modal` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-modal_large` |
| Summary | Widens the modal to take more horizontal space than large |
| Restrict | `.slds-modal` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-modal_medium` |
| Summary | Widens the modal to take more horizontal space than small |
| Restrict | `.slds-modal` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-modal_small` |
| Summary | Widens the modal to take more horizontal space than default |
| Restrict | `.slds-modal` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-modal__close` |
| Summary | No description available |
| Restrict | `.slds-modal` button |
| | |

| | |
|-------|-------|
| Selector | `.slds-modal__footer_directional` |
| Summary | No description available |
| Restrict | `.slds-modal__footer` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-modal__footer` |
| Summary | No description available |
| Restrict | `.slds-modal` footer |
| | |

| | |
|-------|-------|
| Selector | `.slds-modal__content_footless` |
| Summary | No description available |
| Restrict | `.slds-modal__content` |
| | |

| | |
|-------|-------|
| Selector | `.slds-modal__content_headless` |
| Summary | No description available |
| Restrict | `.slds-modal__content` |
| | |

| | |
|-------|-------|
| Selector | `.slds-modal__content` |
| Summary | No description available |
| Restrict | `.slds-modal` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-modal__title` |
| Summary | No description available |
| Restrict | `.slds-modal__header` h1, `.slds-modal__header` h2, `.slds-modal__header` h3, `.slds-modal__header` h4, `.slds-modal__header` h5 |
| | |

| | |
|-------|-------|
| Selector | `.slds-modal__header` |
| Summary | No description available |
| Restrict | `.slds-modal` header |
| | |

| | |
|-------|-------|
| Selector | `.slds-modal__container` |
| Summary | No description available |
| Restrict | `.slds-modal` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-modal` |
| Summary | No description available |
| Support | dev-ready |
| Restrict | section |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-backdrop_open` |
| Summary | No description available |
| Restrict | `.slds-backdrop` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-backdrop` |
| Summary | No description available |
| Restrict | `.slds-modal` ~ div |
| | |

| | |
|-------|-------|
| Selector | `.slds-slide-down-cancel` |
| Summary | No description available |
| Restrict | `.slds-modal` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-slide-up-saving` |
| Summary | No description available |
| Restrict | `.slds-modal` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-slide-up-open` |
| Summary | No description available |
| Restrict | `.slds-modal` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-fade-in-open` |
| Summary | No description available |
| Restrict | `.slds-modal` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-modal_full` |
| Summary | Makes the modal full screen in small viewports |
| Restrict | `.slds-modal` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-modal_large` |
| Summary | Widens the modal to take more horizontal space than large |
| Restrict | `.slds-modal` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-modal_medium` |
| Summary | Widens the modal to take more horizontal space than small |
| Restrict | `.slds-modal` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-modal_small` |
| Summary | Widens the modal to take more horizontal space than default |
| Restrict | `.slds-modal` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-modal__close` |
| Summary | No description available |
| Restrict | `.slds-modal` button |
| | |

| | |
|-------|-------|
| Selector | `.slds-modal__footer_directional` |
| Summary | No description available |
| Restrict | `.slds-modal__footer` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-modal__footer` |
| Summary | No description available |
| Restrict | `.slds-modal` footer |
| | |

| | |
|-------|-------|
| Selector | `.slds-modal__content_footless` |
| Summary | No description available |
| Restrict | `.slds-modal__content` |
| | |

| | |
|-------|-------|
| Selector | `.slds-modal__content_headless` |
| Summary | No description available |
| Restrict | `.slds-modal__content` |
| | |

| | |
|-------|-------|
| Selector | `.slds-modal__content` |
| Summary | No description available |
| Restrict | `.slds-modal` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-modal__title` |
| Summary | No description available |
| Restrict | `.slds-modal__header` h1, `.slds-modal__header` h2, `.slds-modal__header` h3, `.slds-modal__header` h4, `.slds-modal__header` h5 |
| | |

| | |
|-------|-------|
| Selector | `.slds-modal__header` |
| Summary | No description available |
| Restrict | `.slds-modal` header |
| | |

| | |
|-------|-------|
| Selector | `.slds-modal__container` |
| Summary | No description available |
| Restrict | `.slds-modal` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-modal` |
| Summary | No description available |
| Support | dev-ready |
| Restrict | section |
| Variant | true |
| | |

#####* Users interact with modal elements via standard mouse clicks.
* The “Close” button (an "X" above the header) and any footer action buttons (e.g., "Save" or "Cancel") are clickable.

##* **Tab** moves focus between interactive elements within the modal in sequential order.
* **Shift + Tab** moves focus backward through interactive elements.
* **Enter** activates the currently focused button or link.
* **Escape** closes the modal.
* When open, focus is trapped within the modal to prevent interaction with elements outside it.

##* **Screen Readers**: Modal announces its role (e.g., `dialog`), title, and content when opened.
* **Magnifiers**: Ensure all modal content is visible without distortion when zooming.
* **Alternative Input Devices**: All modal actions should be operable using speech commands or other input mechanisms.

###* Ensure modals are appropriately sized for both desktop and mobile devices to prevent content truncation.

###* Use ARIA roles and attributes to define the modal’s role and state:
    * `role="dialog"`: Defines the element as a dialog box.
    * `aria-labelledby`: Links the modal title to the dialog for accessibility.
    * `aria-describedby` (optional): Provides additional description of the modal's purpose if needed.
* Ensure buttons have descriptive aria-label attributes if their text content is insufficient for context.
* Implement a focus trap to prevent focus from escaping the modal while it’s open.
* Ensure modal content and controls are keyboard-navigable.
* Include robust handling for `escape` key events to close the modal.
* Dynamically add or remove modals from the DOM to improve screen reader support.
* Test for responsiveness to ensure proper rendering on different devices and screen sizes.

###* Modal titles should clearly describe the purpose of the modal.
* Avoid excessive text; keep content focused and concise.
* Use plain, straightforward language to minimize ambiguity.
* Include descriptive labels for input fields and actionable buttons.

---
*Generated from SLDS Rules Generator*
