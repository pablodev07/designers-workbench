# Progress Ring

## Progress Ring

###* The progress ring visually displays progress in a circular form, showing the percentage of completion.
* The base type shows how far along you are in the process, while the active step type shows where you are right now.
* When the progress ring's direction is set to fill, the color flows clockwise in the ring.
* When the progress ring’s direction is set to drain, the color flows counterclockwise. Instead of progress, the drain direction can show the depletion of a value or a countdown, for example.

The progress ring is ideal for showing progress when there's a clear start and end point. By filling the ring with a color, the progress ring shows a value from 0 (start) to 100 (completed). The progress ring has variants for several use cases.

#####* Use a progress ring for tasks with a defined completion percentage, such as file uploads or process stages.

##* Don’t use it for tasks where progress is indeterminate.
* Don’t use it in place of a custom data visualization component.
* Don’t use it for tasks that need a lot of detail or explanation in text.
* Don’t use it to track processes where progress updates aren’t necessary.

###| **Base (default)**  This progress ring represents overall progress towards completion, measured as a percentage from 0 - 100%.   **Use Case** Processes where users want to see progress as a percentage, such as file uploads or task completion rates. |  *Base progress ring showing 50% completion.* |
| --- | :---: |
| |   |
| **Base Autocomplete**  The `base-autocomplete` variant uses the default green fill color and adds a success icon to denote completion when the value is 100. The success icon is only used with the base autocomplete variant. **Use Case:** Processes where you want to reinforce a sense of accomplishment or show that an operation was successful. For example, after completing an onboarding process, the autocomplete progress ring can provide users with visual confirmation. |  *Completion icon (checkmark).* |
| |   |
| **Active Step**  The brand blue ring highlights the specific step the user is currently completing.  **Use Case:** Processes like onboarding, forms with multiple steps, or approval processes where it’s critical to show the user’s current step. |  *Active step progress ring.* |

#######Progress rings have two sizes: medium (default) and large

#####| | 0% | 25% | 50% | 75% | 100% | Complete |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Base and Autocomplete** (Success icon only used with autocomplete variant) |   |   |   |   |   |   |
| **Warning** *(Base state)* |   |   |   |   |   | N/A |
| **Error ** *(Base state)* |   |   |   |   |   | N/A |

**Empty:** 0% state

**Filled / Drained:** 25%–75% 

* The fill value indicates a color flow in the clockwise direction.
* The drain value indicates a color flow in the counterclockwise direction.

**Complete**: Used with the base-autocomplete variant to show 100% completion

**Warning**: Alerts users to potential issues, risks, or situations that require attention. Users can take preventive or corrective actions before proceeding.

**Error/Expired**: Indicates that a user action, system process, or content load has failed due to invalid input, system issues, or restricted access.

##Progress rings are non-interactive—they provide visual feedback only.

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
| Selector | `.slds-progress-ring_active-step` |
| Summary | Blue progress ring |
| Restrict | `.slds-progress-ring` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-progress-ring_large` |
| Summary | Larger ring size |
| Restrict | `.slds-progress-ring` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-progress-ring_complete` |
| Summary | Complete colors |
| Restrict | `.slds-progress-ring` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-progress-ring_expired` |
| Summary | Expired colors |
| Restrict | `.slds-progress-ring` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-progress-ring_warning` |
| Summary | Warning colors |
| Restrict | `.slds-progress-ring` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-progress-ring__content` |
| Summary | Progress ring content area |
| Restrict | `.slds-progress-ring` > div |
| | |

| | |
|-------|-------|
| Selector | `.slds-progress-ring__progress-head` |
| Summary | No description available |
| Restrict | `.slds-progress-ring__progress` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-progress-ring__path` |
| Summary | No description available |
| Restrict | `.slds-progress-ring__progress` path, `.slds-progress-ring__progress` circle |
| | |

| | |
|-------|-------|
| Selector | `.slds-progress-ring__progress` |
| Summary | Progress indicator |
| Restrict | `.slds-progress-ring` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-progress-ring` |
| Summary | Progress Ring component |
| Support | prototype |
| Restrict | div |
| Variant | true |
| | |

###* **Screen Readers:**
    * Use `role="progressbar"` to inform users of its function.
    * Include `aria-valuenow`, `aria-valuemin`, and `aria-valuemax` to provide a complete context of progress values.
    * Values will always be read as percentages; for example, to communicate 1 day left out of 5 will be read as a value of 20%.
* **Braille Displays:** Ensure descriptive text (provided via ARIA labels) accurately communicates the percentage or status represented by the ring.
* **Alternative Inputs:** Devices like speech recognition software should be able to reference the component via accessible labels (e.g., "Show progress of upload").
* The `warning`, `expired`, and `base-autocomplete` variants provide icons and descriptive text for accessibility.

###* They avoid over-reliance on color alone for progress indication; consider adding numeric or text labels within or adjacent to the ring.

######* Provide concise, descriptive text for ARIA labels or visually hidden elements (e.g., "Upload progress is 75% complete").
* Ensure numeric or status indicators are clear and non-ambiguous.

###The Progress Ring uses the following accessibility labels:

* ARIA Attributes:
    * `role="progressbar"`
    * `aria-valuemin` and `aria-valuemax`: Define the minimum and maximum progress values.
    * `aria-valuenow`: Represents the current progress percentage.
* Ensure labels align with the context (e.g., "File upload progress").

###* Ensure any progress-related text is localizable.

---
*Generated from SLDS Rules Generator*
