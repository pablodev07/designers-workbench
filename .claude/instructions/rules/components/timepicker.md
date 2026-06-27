# Timepicker

## Timepicker

###The Timepicker enables users to input or select a time in a user-friendly manner. It reduces potential errors from manual text entry by offering preformatted time values in a dropdown. Users can also type a time directly if necessary. The Timepicker is flexible and customizable, making it suitable for various applications requiring time entry.

* The Timepicker simplifies time input by providing a dropdown menu with preformatted time values.
* It ensures consistency and reduces user errors compared to manual time entry.
* Often used in forms, scheduling tools, and workflows requiring precise time input.
* The component supports both 12-hour (with AM/PM) and 24-hour formats, adapting to regional settings.

#####* Place the Timepicker in a logical position within forms or workflows, aligned with other inputs.
* Default to a 12-hour or 24-hour format based on the user's locale or application settings.
* Provide clear validation messages if the input format is incorrect.

##* Avoid using the Timepicker for date or datetime selection. Use a Datepicker or Datetime Picker instead.
* Do not use the Timepicker if approximate time input is sufficient (e.g., “morning” or “afternoon”).

#########* Placeholder text: Use descriptive text like “Select a time.”
* Validation: Use concise error messages, e.g., “Enter a valid time.”

#####1. **Default**
2. **Active**
3. **Selected**
4. **Closed+Filled**

##* **Triggers**: Clicking or pressing enter/space on a keyboard activates the dropdown.
* **Input**: If enabled, users can type a time or select from the dropdown.

##* Validation occurs after focus moves away. 
* Displays error states with help text for invalid formats (e.g., “Invalid time format. Use HH:MM AM/PM”).

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
| Selector | `.slds-timepicker` |
| Summary | Initializes a timepicker |
| Support | dev-ready |
| Restrict | div |
| Variant | true |
| | |

#####* Users can click the input field to open the dropdown.
* Dropdown options are selectable with a single click.
* Clicking outside the dropdown closes the menu.

##* **Tab** moves focus to the Timepicker.
* **Enter** opens or closes the dropdown.
* **Up** and **Down** navigate through time options in the dropdown.
* **Escape** closes the dropdown.
* Typing in the field allows direct input of time.

##* **Screen Readers**: The component is fully labeled with accessible names and ARIA attributes to announce its purpose and current value.
* **Magnifiers**: Labels and dropdown options are clear and scalable, ensuring compatibility with zoom levels.
* **Assistive Devices**: Compatibility with alternative input devices, such as speech recognition, to allow selecting dropdown options or entering time values.

###* Ensure clear focus states are visually evident for the input field and dropdown options.
* Allow sufficient spacing around the Timepicker for easy target selection.
* Avoid overly complex dropdown designs to minimize cognitive load.

###* Add ARIA attributes (`aria-label`, `aria-expanded`, `aria-haspopup`) to announce the state and functionality of the Timepicker.
* Use semantic HTML for the input and dropdown (e.g., `<input>` and `<ul><li>`).
* Ensure keyboard focus is properly managed between the input field and dropdown.
* Provide validation feedback via assistive technology using ARIA live regions.
* Test the component with screen readers, keyboard-only navigation, and other assistive devices.

###* Include meaningful labels for the input field (e.g., “Select a time”).
* Use placeholder text to provide guidance (e.g., “HH:MM AM/PM”).
* Provide concise and descriptive error messages when validation fails (e.g., “Please enter a valid time format”).

###* The Timepicker supports both 12-hour and 24-hour formats, ensuring compatibility with global time standards.
* Localization of AM/PM indicators and time formats should be handled based on user locale settings.

---
*Generated from SLDS Rules Generator*
