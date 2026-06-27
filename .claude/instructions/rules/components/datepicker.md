# Datepicker

## Datepicker

###* The datepicker is designed to help users select dates quickly and accurately from a calendar view.
* Select a single date or a date range.
* Typically used in forms where date input is required.
* Click to select a date, page through the months, and select the year.

#####* Use the datepicker when users must select a specific date.
* Label the datepicker field clearly to indicate its purpose, such as "Start Date" or "Due Date."
* Provide clear error messages if the user selects an invalid or out-of-range date.
* Clearly indicate the expected date format (such as MM/DD/YYYY) in the supporting text.

##* Don't use the datepicker if the task requires a broad date range, such as selecting only a year or month without a specific day.
* Broad date ranges, such as decades or centuries.

###| **Standard Datepicker**  The default datepicker with full calendar view, allowing users to select any date.  **Use Case:** Ideal for picking a single date.   |  *Standard datepicker in the default state.* |
| --- | :---: |
| |   |
| **Date Range Picker**  Allows users to select a range of dates.  **Use Case:** Useful for situations that require the selection of a start and end date, such as scheduling events or tasks.   |  *Date range picker in the default state.* |
| |   |

##########* Set a default start date for specific use cases, such as project deadlines or recurring events.

###* Configure a date range to limit selectable dates.

##The datepicker field resizes based on the width of its container.

####* Keep text labels short and clear. Clearly indicate the purpose of a date field. For example, label the field as "Start Date," "End Date," or "Due Date".
* See Placeholder guidance on the Input page for more information about placeholder text.

#####1. **Default:** If no date is selected, the datepicker displays the current date or an empty field.
2. **Disabled:** Disabled dates appear unavailable and can’t be selected.
3. **Hover:** Hovering over a date highlights it to indicate a selection.
4. **Active:** The calendar opens when you click the date input field. However, it doesn’t open upon receiving focus. Tab to the calendar button icon and open it by pressing Enter or the spacebar.
5. **Selected:** The selected date remains highlighted after you select it.
6. **Focus:** When the field receives focus through keyboard navigation, it's highlighted to make it easier to identify.

##| ****Triggers**** Clicking the input field triggers the calendar to open.  |  *Calendar opened.* |
| --- | :---: |
| |   |

##Validate the selected dates to ensure they meet the constraints (such as date ranges or formats). If they select an invalid date, let users know.

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
| Selector | `.slds-is-selected-multi` |
| Summary | Indicates if the selected days are apart of a date range |
| Restrict | `.slds-datepicker` td |
| | |

| | |
|-------|-------|
| Selector | `.slds-has-multi-row-selection` |
| Summary | Class on row to notify that more than one date will be selected with multiple weeks |
| Restrict | `.slds-datepicker` tr |
| | |

| | |
|-------|-------|
| Selector | `.slds-has-multi-selection` |
| Summary | Class on row to notify that more than one date will be selected within the week |
| Support | dev-ready |
| Restrict | `.slds-datepicker` tr |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-day_adjacent-month` |
| Summary | Indicates days that are in previous/next months |
| Restrict | `.slds-datepicker__month` td |
| | |

| | |
|-------|-------|
| Selector | `.slds-datepicker__month` |
| Summary | Container of the month table |
| Restrict | `.slds-datepicker` table |
| | |

| | |
|-------|-------|
| Selector | `.slds-datepicker__filter_month` |
| Summary | Spaces out month filter |
| Restrict | `.slds-datepicker` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-datepicker__filter` |
| Summary | Aligns filter items horizontally |
| Restrict | `.slds-datepicker` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-is-selected` |
| Summary | Indicates selected days |
| Restrict | `.slds-datepicker` td |
| | |

| | |
|-------|-------|
| Selector | `.slds-is-today` |
| Summary | Indicates today |
| Restrict | `.slds-datepicker` td |
| | |

| | |
|-------|-------|
| Selector | `.slds-day` |
| Summary | Style for calendar days |
| Restrict | `.slds-datepicker` td span |
| | |

| | |
|-------|-------|
| Selector | `.slds-datepicker` |
| Summary | Initiates a datepicker component |
| Support | dev-ready |
| Restrict | div |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-disabled-text` |
| Summary | No description available |
| Restrict | `.slds-datepicker` td |
| | |

#####When using a mouse, the Datepicker component allows users to:

* **Select a date**: Users can click a specific date in the calendar.
* **Navigate through months**: Clicking the month or year name allows users to change the view (month, year, etc.).
* **Open or close the date picker**: The date picker opens when the user clicks the input field and closes when the user clicks outside the picker or selects a date. 

##For users who rely on the keyboard, these key commands can be used to interact with the Datepicker component:

| **Action** | **Key Command** |
| :--- | :--- |
| Open/close the date picker | While focused on the input field, press Tab to navigate to the calendar icon, and Enter/Space to open the calendar. |
| Navigate through dates | Arrow keys (left, right, up, down) |
| Select a date | Enter, Spacebar |
| Navigate through months or years | Tab to year picklist, Enter or Spacebar to open year picklist, and arrow keys (up, down) and enter to select. |
| Close the date picker without selection | Escape |

##For users with assistive devices:

* **Screen readers**: The component announces the current selected date, available dates, and month or year change. Descriptive text such as “Selected date” and “Click to select” must be included in the component's labels for a better screen reader experience.
* **Alternative input devices (Speech recognition)**: Users can navigate and select dates using voice commands (such as “select [date]” or “next month”).
* **Braille displays**: Ensure all textual elements, such as labels and date values, are properly tagged in the HTML to be readable by Braille displays.
* **Keyboard modifications (such as StickyKeys)**: The Datepicker must function properly with StickyKeys and other keyboard modifications to ensure that no essential functionality is lost for users with motor impairments.

###* Accessible labels must be added for all UI elements. For instance, the Datepicker input field must be labeled with "Date," and all other interactive elements must include descriptive labels.
* When deviating from the standard Datepicker styling hooks, ensure proper contrast ratios for readability.

######* **Clear labels** for the input field.
* **Error messaging**: Ensure that error messages provide guidance for correcting the issue.
* **Help text**: Provide assistive text for fields that need clarification, such as explaining the expected date format.
* **Descriptive tooltips** for any icons (such as next and previous buttons) to make sure users with screen readers or low vision can understand their purpose.
* **Enter a valid date.** A Date Format Visible variation displays a message about the expected date format. When the date field receives focus, a message appears under the field to show the expected date format. When focus is removed from the date field, the message is hidden and available as assistive text.
* All datepicker fields marked as required with an * must have an accompanying legend.
**Example:** * denotes a required field

###It’s essential that the input field is labeled appropriately. Developers should ensure that the Datepicker’s input field has an accessible label (e.g., `aria-label="Date Picker"`) and that each button or clickable area is properly described using `aria-label` or `aria-labelledby.`

###* The Datepicker component supports multiple languages and regions and formats dates according to the user's locale. 
* Translations for month names, weekday names, and date formats must be provided based on the user's locale settings.

---
*Generated from SLDS Rules Generator*
