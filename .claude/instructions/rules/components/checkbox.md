# Checkbox

## Checkbox

###* Enables you to select and deselect individual items within a group of options or turn settings on and off.
* Commonly used in forms, settings, and filter options.
* Displays as a small box, with a checkmark appearing when selected.

#####* To select multiple options, use checkboxes instead of radio buttons or switches.
* If you have a long list of options, consider using a multi-select dropdown or group your options to make them easier to scan.
* Always provide clear, concise labels for each checkbox to help users understand each option.
* Align checkboxes vertically with proper spacing to avoid confusion.

##* Don’t use checkboxes if only one of several options can be selected—use radio buttons instead.
* Unlike checkbox toggles, checkboxes don't retain their selection until saved or applied through a confirmation action like submitting a form.
* Avoid overwhelming users with too many checkboxes. Instead, group related options or use categories where possible.

#######Checkboxes are adaptive and have a mobile variant with increased size for touch devices.

####* Use short, actionable text for checkbox labels. This makes them easier to scan and understand. Use a label of 1 to 3 words if it makes the choice clear.
* If more explanation is needed, describe what happens from the user’s perspective (for example "Show notifications" instead of “Enable notifications”).
* Use a similar style for each item in a list.
* Start with a verb that describes what the option does instead of using “enable” or “activate”.
* Use sentence capitalization in the labels for these UI elements. No end punctuation.
* In some cases, a checkbox is used to validate a user's understanding of or acceptance of specific terms and conditions. In these cases, the checkbox label is a short sentence or even a paragraph.

#####1. **Unselected**: The checkbox’s default state
2. **Selected:** A user's current selection within a range of options
3. **Intermediate:** Indicates a partial selection, such as when a parent checkbox controls multiple child checkboxes and some of them are selected.

4. **Error:** Indicates an error, usually a required selection is missed.
5. **Read Only:** Shows the state of selection but can't be interacted with.
6. **Disabled:** Disabled items don't receive focus.
7. **Focus:** Displays a focus outline for keyboard users.

####Error is the only type of validation available for checkboxes. Errors typically appear when the user attempts to save or submit the form. Here are some common situations where a checkbox displays an error state.

1. **Required Selection**: If a checkbox selection is mandatory and the user tries to continue without selecting it, an error message appears to remind them to complete this required step.
2. **Invalid Combination**: If certain checkboxes can't be selected together (for example, selecting incompatible options), an error message can help to guide the user toward valid choices.

Error states are visually indicated with a red border around the checkbox and an error message below it, helping users quickly identify and correct the issue.

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
| Selector | `.slds-checkbox_standalone` |
| Summary | Checkbox with top-level label and value != label |
| Support | dev-ready |
| Restrict | `.slds-checkbox` |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-checkbox__label` |
| Summary | Container for faux checkbox, text, and `slds-form-element__label` |
| Restrict | `.slds-checkbox` label |
| | |

| | |
|-------|-------|
| Selector | `.slds-checkbox_faux` |
| Summary | Creates a custom styled checkbox |
| Restrict | `.slds-checkbox` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-checkbox` |
| Summary | Initializes checkbox |
| Support | dev-ready |
| Restrict | span, label, div |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-checkbox_stacked` |
| Summary | stacks label over checkbox |
| Restrict | `.slds-checkbox` |
| Modifier | true |
| | |

#####Click toggles the selected state.

##Selection can be toggled using the spacebar when focused.

##Works with assistive devices like screen readers and sip-and-puff devices, which announce the checkbox label and state.

###* Designers should ensure checkbox labels are clear, short, and easy to understand, with adequate space around each checkbox for easy navigation.
* When deviating from the standard checkbox styling hooks, ensure proper contrast ratios for readability.

######* Each checkbox requires a clear label. Avoid using only icons without explanatory text.
* All checkboxes marked as required with an * must have an accompanying legend.
**Example:** * denotes a required field

###Support multi-language labels and left-to-right or right-to-left alignment based on locale settings.

---
*Generated from SLDS Rules Generator*
