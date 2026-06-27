# Progress Indicator

## Progress Indicator

###* Guides users through multi-step processes by providing a clear representation of progress.
* Commonly used in wizards, onboarding flows, and step-by-step workflows.
* Indicates completed, current, and pending steps, supporting clear navigation and task tracking.

#####* Use for processes with three or more steps.
* Label steps with actionable language (for example "Verify Account" rather than "Step 3").
* Keep your process simple and easy to follow. If there are more than six steps, group them logically.

##* For single-step actions or processes.
* When the steps don't follow a sequential order.
* In dynamic workflows with changing steps.

###The progress indicator visually represents the steps in a process. It consists of a horizontal or vertical track with evenly spaced steps, each represented by a circle or icon. Steps can be complete, active, or incomplete, using different styles to indicate progress.

#######* Responsive: Adjusts to fit available horizontal or vertical space.
* Minimum Width: 320px for mobile layouts.

##* Keep step labels concise, no more than 30 characters.

#####The Progress Indicator has the following states:

1. **Default:** Neutral appearance with a grey dot.
2. **Hover:** Displays the step label in a tooltip.
3. **Active:** Indicates the currently selected step.
4. **Focus:** The step is selected when it receives focus.

##| ****Completed Step**** Shows that the step was finished. |   |
| --- | :---: |
| |   |
| ****Current Step**** Highlights the active step. |   |
| |   |
| ****Uncompleted Step**** Represents a step that hasn't started. |   |

##Display an error state if users fail to complete required fields before progressing.

| ****Error**** Shows that an error has occurred in the step. |   |
| --- | --- |

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
| Selector | `.slds-progress_success` |
| Summary | Creates a green bar for the vertical variant |
| Restrict | `.slds-progress_vertical` |
| | |

| | |
|-------|-------|
| Selector | `.slds-progress_vertical` |
| Summary | No description available |
| Support | dev-ready |
| Restrict | `.slds-progress` |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-progress__marker_icon-success` |
| Summary | No description available |
| Restrict | `.slds-progress__marker_icon` |
| | |

| | |
|-------|-------|
| Selector | `.slds-progress__marker_icon` |
| Summary | No description available |
| Restrict | `.slds-progress__marker` |
| | |

| | |
|-------|-------|
| Selector | `.slds-progress__marker` |
| Summary | No description available |
| Restrict | `.slds-progress` ol li button, `.slds-progress` ol li div, `.slds-progress` ol li span |
| | |

| | |
|-------|-------|
| Selector | `.slds-progress__item_content` |
| Summary | Support content in line with progress marker |
| Restrict | `.slds-progress__item` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-has-error` |
| Summary | No description available |
| Restrict | `.slds-progress__item` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-is-active` |
| Summary | No description available |
| Restrict | `.slds-progress__item` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-is-completed` |
| Summary | No description available |
| Restrict | `.slds-progress__item` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-progress__item` |
| Summary | No description available |
| Restrict | `.slds-progress` ol li |
| | |

| | |
|-------|-------|
| Selector | `.slds-progress__list-bordered` |
| Summary | Add borders between progress items |
| Restrict | `.slds-progress__list` |
| | |

| | |
|-------|-------|
| Selector | `.slds-progress__list` |
| Summary | No description available |
| Restrict | `.slds-progress` ol |
| | |

| | |
|-------|-------|
| Selector | `.slds-progress_shade` |
| Summary | No description available |
| Restrict | `.slds-progress` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-progress` |
| Summary | No description available |
| Support | dev-ready |
| Restrict | div |
| Variant | true |
| | |

---
*Generated from SLDS Rules Generator*
