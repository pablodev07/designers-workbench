# Progress Bar

## Progress Bar

###* The Progress Bar is a visual indicator that shows the ongoing progress of a task, indicating that a user’s request is being processed.
* Displays progress from 0% to 100%, giving users feedback on the status of long-running processes or time remaining on a task.
* Useful to provide users with real-time feedback for linear, predictable operations like file uploads or downloads.

#####* Use the Progress Bar to show task completion especially when a process is time-consuming. 
* If possible, display the percentage of completion so users have a clear understanding of how much is left.
* Avoid cluttering the Progress Bar with too many labels or indicators. Use concise text and clear visuals.

##* Avoid using a Progress Bar for tasks that are completed in less than a few seconds. Instead, use a spinner or loading indicator.
* Don’t use the Progress Bar if your process requires user input or decisions at each step. Use a Progress Indicator instead.

###| **Base**  A horizontal bar that fills from left to right to indicate progress.  **Use case** **I**deal for general progress tracking like file uploads or loading data.  |   |
| --- | :---: |
| |   |
| **Vertical**  A vertical bar that fills from bottom to top to indicate progress.  **Use case** Best for side panels, dashboards, or where vertical space is more readily available than horizontal.  |   |

##########The Bar label can be added to describe the purpose of the progress bar. 

###A progress label can be added to the progress bar to provide the user with additional details about the loading process. Percentages and numbers need to use a variable to align with the loading position of the Bar Value.

##The Progress Bar is responsive and adjusts to the width of its parent container. Additionally, it offers four thickness sizes: extra small, small, medium, and large. Each type of Progress Bar can use these sizes.

###Each size also supports the radius modifier, allowing for rounded variants.

#####* Use clear, descriptive names that make sense on their own. For example, use “Download Progress” instead of just “Progress.”
* Aim for concise labels—one or two words if possible.
* Use Title Case. Capitalize the main words.

###* Progress Label can be a general phrase like, “Download Initializing”  or can provide values of the process being completed “24/68 files”.
* Use short, descriptive labels (e.g., "5.6 of 10MB") or percentages ("50% complete").

#####1. **Default:** When the bar percentage is not filled (0%).
2. **Active:** The ongoing progression of a task, visually represented by the bar gradually filling from 0% to 100%.
3. **Complete:** The finished bar value is at 100% when the process is completed. Alternatively, a success Progress Bar can be used to show the completed process.

#####* The Progress Bar does not have a built-in error state or indeterminate state. Use one of the following to notify users when a process fails to complete:
    * Inline Text
    * Toast
    * Scoped Notification
* Best practices for error messaging:
    * Ensure clarity and conciseness in error messages.
    * Provide guidance on how users can resolve the issue.
    * Position error messages near the relevant component for better visibility.

| ****Success**** A success variant can be added to a progress bar to signify when the process was completed. |   |
| --- | :---: |
| |   |

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
| Selector | `.slds-progress-bar_vertical` |
| Summary | Create a vertical progress bar |
| Support | dev-ready |
| Restrict | `.slds-progress-bar` |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-progress-bar__value_success` |
| Summary | Create a green progress bar |
| Restrict | `.slds-progress-bar__value` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-progress-bar__value` |
| Summary | Fill up blue bar inside of the progress bar |
| Restrict | `.slds-progress-bar` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-progress-bar_circular` |
| Summary | Adds a border radius to the progress bar to give it a circular look |
| Restrict | `.slds-progress-bar` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-progress-bar_large` |
| Summary | Creates a progress bar height at the smaller `.75rem` (12px) size |
| Restrict | `.slds-progress-bar` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-progress-bar_medium` |
| Summary | Creates a progress bar height at the smaller `.5rem` (8px) size |
| Restrict | `.slds-progress-bar` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-progress-bar_small` |
| Summary | Creates a progress bar height at the smaller `.25rem` (4px) size |
| Restrict | `.slds-progress-bar` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-progress-bar_x-small` |
| Summary | Creates a progress bar height at the smaller `.125rem` (2px) size |
| Restrict | `.slds-progress-bar` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-progress-bar` |
| Summary | No description available |
| Support | dev-ready |
| Restrict | div |
| Variant | true |
| | |

#####* Users can visually track progress as the progress bar fills.
* No direct mouse interaction is typically required for progress bars, as they primarily serve a display function.

##* Progress Bars are generally not interactive elements.
* If the Progress Bar includes optional labels or step indicators, developers must ensure users can navigate through these steps using the `tab` key.
* When combined with actionable elements (e.g., buttons for navigating steps), standard keyboard navigation must be implemented (`tab`, `shift+tab`, `enter`, `space`, arrow keys).

##* **Screenreaders:**The Progress Bar must include proper ARIA roles (`role="progressbar"`) and `aria-valuemin`, `aria-valuemax`, and `aria-valuenow` attributes to convey progress information. If labels are included, these must be accessible through `aria-labelledby`.
* **Magnifiers**: Ensure progress text or percentages are clear and readable when magnified.
* **Alternative Input Devices**: Progress Bars do not require direct interaction, but step navigation (if available) should work with speech recognition or other input devices.
* **Braille Displays**: The current progress should be output as text, using attributes like `aria-valuetext`.

###* The Progress Bar is visually distinct, with clear contrast against the background.
* Include a visible or text-based indication of progress, such as percentages or milestones.
* If using labels, make sure they are evenly spaced and legible, and include visual cues for completed and upcoming steps.
* Follow WCAG contrast standards (minimum 4.5:1) for the progress indicator and background.
* Add patterns, shapes, or text to indicate progress for users with color blindness.

###* Use native `<progress>` elements when possible or include ARIA attributes (`role="progressbar"`, `aria-valuemin`, `aria-valuemax`, `aria-valuenow`) for custom implementations.
* Include dynamic updates for screen readers to announce changes in progress.
* Ensure the component adapts to different screen sizes and orientations.
* Implement keyboard accessibility for any actionable elements associated with the Progress Bar (e.g., step controls).
* Use `aria-label` or `aria-labelledby` to describe the purpose of the Progress Bar clearly.

###* Use concise, descriptive text for any labels or milestones.
* Provide text updates (e.g., "50% completed") for users relying on assistive technologies.
* Progress descriptions should be clear and easy to understand.

---
*Generated from SLDS Rules Generator*
