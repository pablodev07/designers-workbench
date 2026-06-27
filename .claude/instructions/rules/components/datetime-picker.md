# Datetime Picker

## Datetime Picker

###* The datetime picker is a form element that lets you select a date and time in one place.
* Used to schedule events or set time-based records.
* Helps users input date and time accurately, saving time and reducing errors.
* Type a date and time directly or select from the calendar and time dropdown options.

#####* Use the datetime picker when both date and time are required, such as for scheduled appointments or event planning.
* To simplify input, default to the current date and time as the starting point.
* Show the required format with clear instructions or placeholder text in the input field.

##* Don't use a datetime picker if only the date or only the time is needed. Instead, use either the date picker or time picker components.
* Don't use the datetime picker for static content that doesn't require user input.

##########* Customizable for different date and time formats.

####The input format can be set to one of these styles.

* **Medium (default):** Set `date-style="medium"` to display the date in a medium-length style, such as Jan 7, 2025 in the en-US locale. 
* **Short:** Set `date-style="short”` to display a short style such as 1/7/2025.
* **Long:** Set `date-style="long"` to display a long style such as January 7, 2025.

###* **Field label:** Use title capitalization without end punctuation. If the UI design lacks a visible label, a hidden text label or offscreen field label is required for accessibility.
* **Field caption:** Use a phrase or a full sentence without end punctuation.
* **Use a field caption in these situations:**
    * If a label alone doesn't clearly define a field or a fieldset, you can include a field caption with a field label or with the field itself.
    * To convey information that’s critical to the use of a field.
* **Don’t use a field caption in these situations:**
    * If the field label is clear enough to define the field.
    * To convey noncritical information without sending users to a help page. In that case, use an infobubble instead.

Also, see the form element component.

###* Placeholder text is optional, and can be included to give context or help the user know what to enter into the field.
* Use sentence capitalization. Unless the text ends with a question mark, end it with an ellipsis.
* Use a friendly tone but be concise, and keep in mind that localization of labels sometimes makes them longer.
* In type-ahead and autofill fields, results show up as you type. Use standard placeholder text such as “Search this field…”
* All fields require a field label, even if they have placeholder text. If the UI design lacks a visible label, include an offscreen label for accessibility.

Base

#####1. **Default:** Standard display with no user input.
2. **Disabled:** Disabled pickers are colored light gray to appear unavailable and can't be selected.
3. **Active:** Border changes to show focus, accessible by keyboard. Input field and dropdown are open for selection.

##| ****Hover**** The mouse pointer changes to a text cursor (I-beam) when hovering over the input field.  |  *Example of a datetime picker component with the hover state shown.*  |
| :--- | :---: |
| ****Expanded**** Shows calendar or time dropdown.  |   *Example of a datetime picker component with calendar dropdown.* |
| ****Selected**** Shows selected date or time.   |  *Example of a datetime picker that has been filled.* |

##Displays a loading indicator when fetching dates or times if connected to live data.

##The time dropdown is scrollable to navigate through times.

##The datetime picker is responsive, so it adapts to the available screen size. It takes up minimal space in mobile views. The input field and dropdown sizes also adapt to fit the overall layout.

##Defaults to the current date unless otherwise specified.

##Includes error messages for invalid dates or times and a tooltip for correct formatting.

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
| Selector | `.slds-datetime-picker` |
| Summary | Initializes a datetime picker |
| Support | dev-ready |
| Restrict | div |
| Variant | true |
| | |

#####* **Hover States**: When a user hovers over the input field or dropdown, the cursor changes to cursor: text to indicate interactivity.
* **Click Actions**: Users can click on the input field to open the calendar and time dropdowns, allowing them to select a date and time easily. Clicking the calendar icon opens the calendar widget, which follows the[ ](https://www.lightningdesignsystem.com/2e1ef8501/p/531362)[Datepicker](https://www.lightningdesignsystem.com/2e1ef8501/p/531362) Accessibility guidance.

##| **Action** | **Key Command** | **Description** |
| :--- | :--- | :--- |
| Open Date Picker | Tab + Enter | While focused on the input field, press Tab to navigate to the calendar icon, and Enter/Space to open the calendar. |
| Navigate Dates | Arrow Keys | Arrow keys (left, right, up, down) |
| Select Date | Enter, Spacebar | Press Enter or Spacebar to select the highlighted date. |
| Open Time Dropdown | Tab + Down Arrow | Focus on the time dropdown and press the up/down arrows to open it. |
| Select Time | Enter | Press Enter to select the highlighted time. |
| Close Picker | Esc | Press Esc to close the calendar or time dropdowns without making a selection. |

###* Ensure that all inputs and dropdowns have descriptive labels that convey their purpose to users, including screen reader users.

######Accessibility requirements for the content include:

* **Descriptive Labels**: Use clear and concise labels for the input fields and buttons within the datetime picker.
* **Error Messages**: Provide informative error messages for invalid date/time entries, ensuring they are announced by screen readers.
* **Enter a valid date.** A Date Format Visible variation displays a message about the expected date format. When the date field receives focus, a message appears under the field to show the expected date format. When focus is removed from the date field, the message is hidden and available as assistive text.
* All datetime fields marked as required with an * must have an accompanying legend.
**Example:** * denotes a required field

---
*Generated from SLDS Rules Generator*
