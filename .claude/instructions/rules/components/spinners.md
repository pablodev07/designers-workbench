# Spinners

## Spinners

###Spinners provide feedback when a system action is in progress. They should be used sparingly and in situations where users need confirmation that an action is taking place.

* Spinners provide feedback that content is loading or an operation is in progress.
* Helps manage user expectations by signaling that the system is working.
* Should be used appropriately to avoid unnecessary distractions or confusion.

##* Use spinners only when an operation takes more than a second.
* Place the spinner near the relevant content or component.
* Ensure that spinners are accompanied by meaningful context or messages when necessary.
* Include a background overlay when placed on top of text or other content to ensure visibility.

##* For extremely short operations (under a second), a spinner may not be visible long enough to be helpful.
* When an alternative visual cue, such as a progress bar or a stencil would provide better feedback.

###| **Base (default)**  The default spinner uses the color Neutral 50.  |   |
| --- | :---: |
| |   |
| **Brand**  Setting the variant type to ”Brand” matches the org’s brand color.  |   |
| |   |
| **Inverse**  Use on dark backgrounds.    |   |
| |   |

#########Spinners come in 5 sizes.

#####* Spinners are animated

##* Spinners should be centered in the viewport for full-page loading or the content container for localized operations.

##* Appears immediately when an action starts.
* Disappears when the process completes.
* Used when the loading time is non-determinate.

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
| Selector | `.slds-spinner_large` |
| Summary | No description available |
| Restrict | `.slds-spinner` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-spinner_medium` |
| Summary | No description available |
| Restrict | `.slds-spinner` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-spinner_small` |
| Summary | No description available |
| Restrict | `.slds-spinner` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-spinner_x-small` |
| Summary | No description available |
| Restrict | `.slds-spinner` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-spinner_xx-small` |
| Summary | No description available |
| Restrict | `.slds-spinner` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-spinner_inverse` |
| Summary | No description available |
| Restrict | `.slds-spinner` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-spinner_brand` |
| Summary | No description available |
| Restrict | `.slds-spinner` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-spinner_delayed` |
| Summary | Set a delay of 300ms on spinner |
| Restrict | `.slds-spinner` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-spinner__dot-b` |
| Summary | No description available |
| Restrict | `.slds-spinner` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-spinner__dot-a` |
| Summary | No description available |
| Restrict | `.slds-spinner` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-spinner_inline` |
| Summary | Returns the spinner back into the document flow |
| Restrict | `.slds-spinner` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-spinner` |
| Summary | No description available |
| Support | dev-ready |
| Restrict | div |
| Variant | true |
| | |

#####* Spinners do not require direct interaction via mouse.
* Users should not be required to click or hover over a spinner for it to function.

##* Spinners are not focusable by default.
* When an operation is in progress, ensure that the spinner does not trap focus and that focus remains on actionable elements.
* If the spinner is part of a blocking operation, provide focus management (e.g., shifting focus back to the action that triggered loading).

##* **Screen Readers:** Spinners should include accessible text (e.g., “Loading…”). This can be implemented using `aria-live="assertive"` to announce changes.
* **Magnifiers:** Ensure spinners remain visible on reflow.

###* Ensure spinners maintain a minimum contrast ratio of 3:1 against the background.
* If possible, supplement spinners with textual or alternative progress indicators for clarity.
* Position spinners near the element being updated for contextual clarity.

###* Use ARIA attributes where relevant:
    * Set `aria-live="polite"` or `aria-live="assertive"` so screen readers notify users of the loading state.
    * Apply `role="status"` when applicable.
* When the loading state ends, remove the spinner from the DOM or hide it with `aria-hidden="true"`.
* If a spinner is blocking interaction, make sure focus is managed appropriately, returning to a relevant action once loading is complete.
* Honor the prefers-reduced-motion setting to disable animations when needed.

###* Loading messages should be clear and concise. Use simple terms like “Loading records…” instead of vague phrasing.
* Avoid redundant labels. If the spinner is already associated with a loading message, do not add duplicate screen reader text.
* Ensure translated messages maintain clarity in different languages.

---
*Generated from SLDS Rules Generator*
