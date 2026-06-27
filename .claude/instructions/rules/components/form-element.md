# Form Element

## Form Element

###Form elements should be used whenever user input is required within a Salesforce interface. This ensures that data entry is clear, easy to use, and visually consistent. Implement form elements according to best practices to optimize user experience and adhere to accessibility guidelines.

* A form element wraps around an input field or other form control to provide structure and supporting elements like labels, help text, and validation.
* Used to organize form fields for better user interaction and a consistent design language.
* Ensures consistency and accessibility across various interfaces by standardizing the way forms are laid out.
* There are many types of input elements that can be used in the form element, including inputs, text areas, checkboxes, and radio buttons. 

##* Group related fields to help users understand the context.
* Display validation/feedback messages and tooltips that are straightforward and supportive.
* Ensure form elements adapt to various screen sizes for a seamless experience on any device.

##* Avoid using too many fields in a single form without grouping, which can overwhelm users.
* Don’t overcomplicate with custom interactions that diverge from familiar usage.

###Form element provides a standardized structure to ensure accessibility, responsiveness, and alignment within forms. Form elements include a field label, input component (see below), helptext, required signifier, and supporting text/validation feedback.The form element can accept the following input components. Visit the individual component pages for in-depth details of their specific states and visuals.

* Button
* Checkbox 
* Checkbox Button
* Checkbox Toggle
* Combobox
* Datepicker
* Datetime Picker
* File Selector
* Input (Types: email, password, telephone, url, number, text, search)
* Textarea
* Timepicker
* Radio Group

##########Labels are placed above the input fields.

* **Benefits**: Improves vertical scanning, making it easier for users to move from field to field.
* **Best Used For**: Mobile screens or forms where space is limited.
* **Considerations**: Increases vertical space usage, so it might not be ideal for compact interfaces.

To vertically stack `<label>` and `<input>` pairs, place `slds-form-element_stacked` on the div with the class of `slds-form-element` for optimal spacing.

##Stacked

###Labels are placed to the left of the input fields.

* **Benefits**: Reduces the vertical space used and aligns with standard reading patterns (left to right).
* **Best Used For**: Forms on wider screens or desktop applications where space allows side-by-side elements.
* **Considerations**: May cause issues on smaller screens if not properly adapted.

To horizontally align a `<label>` and `<input>`, use the `slds-form-element_horizontal` class on the div with the class of `slds-form-element`. The `slds-form-element__label` takes up 33% of the width, and the `slds-form-element__control` uses the remaining 66%.

Horizontal

###When using `slds-form-element_horizontal`, you might find that the 33/66% distribution of the label to control might be too much in a single column form when displayed in a larger region. Another scenario where single column support would be useful is when a form element spans 100% while the other form elements in your form are 50/50 split. To reduce the distribution and/or align with 50/50 split form elements, adding the class `slds-form-element_1-col` to `slds-form-element` will re-distribute the layout.

##Horizontal

###Form fields are grouped under a fieldset (group) label.

* **Benefits**: Helps users understand related inputs by visually organizing sections.
* **Best Used For**: Long forms that require input in multiple categories (e.g., personal information, payment details).
* **Considerations**: Keep groups logically consistent to avoid user confusion.

The compound form should be implemented as a `<fieldset>`, where the fieldset label is implemented as a `<legend>` element.

The `<fieldset>` requires the class `slds-form-element_compound`. This class handles the layout and wrapping of the form elements that are grouped together.

The `<legend>` element requires the class `slds-form-element__legend`. Legend elements can only accept a limited amount of CSS properties so this class is there to help manage its layout.

Single Column Support With 50 Split

###Each row of a compound field should be wrapped in a `<div>` with the class `slds-form-element__row`. Each field inside of a compound row can be explicitly sized by using a sizing class. `slds-size_1-of-2`.

Compound Row

###Though an address form is utilizing the `slds-form-element_compound` class, we need to also add the `slds-form-element_address` class to the component. We modify some of the behavior of an address form with this class.

Compound Address

###Use the `lightning-record-form` component to quickly create forms to add, view, or update a record.

Using this component to create record forms is easier than building forms manually with `lightning-record-edit-form` or `lightning-record-view-form`. The lightning-record-form component provides these helpful features:

* Switches between view and edit modes automatically when the user begins editing a field in a view form
* Provides Cancel and Save buttons automatically in edit forms
* Uses the object's default record layout with support for multiple columns
* Loads all fields in the object's compact or full layout, or only the fields you specify

However, `lightning-record-form` is less customizable. To customize the form layout or provide custom rendering of record data, use `lightning-record-edit-form` (add or update a record) and `lightning-record-view-form` (view a record).

Record Form View Mode Stacked

########Displays the form in a static, non-editable, state.

View Mode

###Applies a button icon to switch the input out of view mode so it is editable

Inline Edit

###Field label is marked with a red asterisk. Makes the input field required before submitting

Required

###Provides feedback when an error occurs while submitting a form by highlighting the input and providing supporting text below the component.

Error

###Displays a help icon next to the field label, which triggers a tooltip on hover.

With Help Text Icon

##* Shows when input is incorrect. You’ll see:
    * A red border around the field.
    * An error message under the field, like “Enter a valid email.”

* Error messages should tell users exactly what’s wrong and how to fix it.
* Consider adding an error or warning icon to your validation messages so everyone, even those with color blindness, can better understand the feedback.

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
| Selector | `.slds-is-edited` |
| Summary | Indicates if a form element has been edited, but unsaved |
| Restrict | `.slds-form` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-form__item` |
| Summary | Each item inside of a record form row |
| Restrict | `.slds-form__row` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-form__row` |
| Summary | Each row inside of a record form |
| Restrict | `.slds-form` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-form` |
| Summary | Creates layout for a form |
| Support | dev-ready |
| Restrict | div, form |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-slider-label__range` |
| Summary | Contains the range for the slider |
| Restrict | `.slds-slider-label` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-slider-label__label` |
| Summary | Contains the label for the slider and adds a hook for adding `.slds-assistive-text` class to visually hide the label, but not the range |
| Restrict | `.slds-slider-label` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-slider-label` |
| Summary | Contains the label and range for the slider label - not required |
| Restrict | `.slds-form-element` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-input-has-fixed-addon` |
| Summary | Use on input container to let it know there is fixed text to the left or right of the input |
| Restrict | `.slds-form-element` .slds-form-element__control |
| | |

| | |
|-------|-------|
| Selector | `.slds-input__icon-group_right` |
| Summary | Positions the close icon and spinner on the right side of the input while searching |
| Restrict | `.slds-input__icon-group` |
| | |

| | |
|-------|-------|
| Selector | `.slds-input__icon-group` |
| Summary | Positions two items (icons and/or spinners) on one side or the other of the input |
| Restrict | `.slds-input-has-icon` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-input-has-icon_group-right` |
| Summary | No description available |
| Restrict | `.slds-input-has-icon` |
| | |

| | |
|-------|-------|
| Selector | `.slds-input-has-icon_left-right` |
| Summary | Positions `.slds-input__icon_left` to the left of the text input and `.slds-input__icon_right` to the right of the text input |
| Restrict | `.slds-input-has-icon` |
| | |

| | |
|-------|-------|
| Selector | `.slds-input-has-icon_right` |
| Summary | Positions `.slds-input__icon` to the right of the text input |
| Restrict | `.slds-input-has-icon` |
| | |

| | |
|-------|-------|
| Selector | `.slds-input-has-icon_left` |
| Summary | Positions `.slds-input__icon` to the left of the text input |
| Restrict | `.slds-input-has-icon` |
| | |

| | |
|-------|-------|
| Selector | `.slds-input__icon_right` |
| Summary | Hook for `.slds-input-has-icon_left-right` |
| Restrict | `.slds-input__icon` |
| | |

| | |
|-------|-------|
| Selector | `.slds-input__icon_left` |
| Summary | Hook for `.slds-input-has-icon--left-right` |
| Restrict | `.slds-input__icon` |
| | |

| | |
|-------|-------|
| Selector | `.slds-input__icon` |
| Summary | Hook for `.slds-input-has-icon` |
| Restrict | `.slds-input-has-icon` svg, `.slds-input-has-icon` button, `.slds-input-has-icon` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-input-has-icon` |
| Summary | Modifier if text input has svg icon adjacent to input |
| Restrict | `.slds-form-element` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-form-element_stacked` |
| Summary | Vertical form elements with label stacked on top of control |
| Support | dev-ready |
| Restrict | `.slds-form-element` |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-form-element__undo` |
| Summary | Container for the undo button icon found inside of `slds-form-element` |
| Restrict | `.slds-form-element` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-form-element_horizontal` |
| Summary | Horizontal form elements with label left-aligned to the control |
| Support | dev-ready |
| Restrict | `.slds-form-element` |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-form-element_address` |
| Summary | Creates a form that consists of multiple form groups specific to an address form |
| Support | dev-ready |
| Restrict | .slds-form-element_compound, `.slds-form_compound` |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-form-element_compound` |
| Summary | Creates a form that consists of multiple form groups |
| Support | dev-ready |
| Restrict | `.slds-form-element` |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-has-error` |
| Summary | Error styles for form element |
| Restrict | `.slds-form-element` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-required` |
| Summary | Required asterisk |
| Restrict | `.slds-form-element` abbr, abbr |
| | |

| | |
|-------|-------|
| Selector | `.slds-form-element__static` |
| Summary | Initializes read-only form element |
| Restrict | `.slds-form-element` span, `.slds-form-element` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-form-element__addon` |
| Summary | Fixed text that sits to the left or right of an input |
| Restrict | `.slds-form-element` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-form-element__legend` |
| Summary | The form element label when applied to a legend element |
| Restrict | `.slds-form-element` legend, `.slds-form-element` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-form-element_readonly` |
| Summary | When a form element is in view mode, we modify some styling |
| Restrict | `.slds-form-element` |
| | |

| | |
|-------|-------|
| Selector | `.slds-form-element_edit` |
| Summary | Modifier on `slds-form-element` that it needs to reserve space for the inline-edit trigger button |
| Restrict | `.slds-form-element` |
| | |

| | |
|-------|-------|
| Selector | `.slds-form-element__help` |
| Summary | Creates inline help styles, sits below `.form-element__control` |
| Restrict | `.slds-form-element` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-form-element__icon` |
| Summary | When an icon sits within a form element wrapper and adjacent to another element inside that wrapper such as a `.form-element__label` |
| Restrict | `.slds-form-element` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-dropdown_length-with-icon-10` |
| Summary | Forces overflow scrolling after 10 list items with an icon |
| Restrict | .slds-dropdown, .slds-dropdown__list, `.slds-listbox` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-dropdown_length-with-icon-7` |
| Summary | Forces overflow scrolling after 7 list items with an icon |
| Restrict | .slds-dropdown, .slds-dropdown__list, `.slds-listbox` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-dropdown_length-with-icon-5` |
| Summary | Forces overflow scrolling after 5 list items with an icon |
| Restrict | .slds-dropdown, .slds-dropdown__list, `.slds-listbox` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-dropdown_length-10` |
| Summary | Forces overflow scrolling after 10 list items |
| Restrict | .slds-dropdown, .slds-dropdown__list, `.slds-listbox` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-dropdown_length-7` |
| Summary | Forces overflow scrolling after 7 list items |
| Restrict | .slds-dropdown, .slds-dropdown__list, `.slds-listbox` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-dropdown_length-5` |
| Summary | Forces overflow scrolling after 5 list items |
| Restrict | .slds-dropdown, .slds-dropdown__list, `.slds-listbox` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-listbox_vertical` |
| Summary | No description available |
| Restrict | `.slds-listbox` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-listbox__icon-selected` |
| Summary | No description available |
| Restrict | `.slds-listbox__item` svg |
| | |

| | |
|-------|-------|
| Selector | `.slds-listbox__option-meta` |
| Summary | No description available |
| Restrict | `.slds-listbox__option` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-listbox__option-text_entity` |
| Summary | No description available |
| Restrict | `.slds-listbox__option` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-is-selected` |
| Summary | No description available |
| Restrict | `.slds-listbox__option` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-listbox__option_has-meta` |
| Summary | No description available |
| Restrict | `.slds-listbox__option` |
| | |

| | |
|-------|-------|
| Selector | `.slds-listbox__option_plain` |
| Summary | No description available |
| Restrict | `.slds-listbox__option` |
| | |

| | |
|-------|-------|
| Selector | `.slds-listbox__option_entity` |
| Summary | No description available |
| Restrict | `.slds-listbox__option` |
| | |

| | |
|-------|-------|
| Selector | `.slds-has-focus` |
| Summary | No description available |
| Restrict | `.slds-listbox__option` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-listbox__option-icon` |
| Summary | Container for listbox option icon |
| Restrict | `.slds-listbox__option` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-listbox__option-header` |
| Summary | Header for choosable option within listbox |
| Restrict | `.slds-listbox__option` h3 |
| | |

| | |
|-------|-------|
| Selector | `.slds-listbox__option` |
| Summary | No description available |
| Restrict | `.slds-listbox__item` > div |
| | |

| | |
|-------|-------|
| Selector | `.slds-listbox__item` |
| Summary | No description available |
| Restrict | `.slds-listbox` > li |
| | |

| | |
|-------|-------|
| Selector | `.slds-listbox_horizontal` |
| Summary | No description available |
| Restrict | `.slds-listbox` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-listbox_inline` |
| Summary | No description available |
| Restrict | `.slds-listbox` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-listbox` |
| Summary | No description available |
| Support | dev-ready |
| Restrict | `.slds-dropdown` ul, `.slds-dueling-list__options` ul, `.slds-pill_container` ul, `.slds-listbox_selection-group` ul, `.slds-combobox_container` ul, `.slds-form-element__control` ul, `.slds-popover__body` ul |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-form-element__control` |
| Summary | Wrapper to any form display element |
| Restrict | `.slds-form-element` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-form-element` |
| Summary | Creates layout for a form element |
| Support | dev-ready |
| Restrict | div, fieldset, li |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-form_stacked` |
| Summary | Vertical form elements with label stacked on top of control |
| Restrict | `.slds-form` |
| | |

| | |
|-------|-------|
| Selector | `.slds-form_horizontal` |
| Summary | Horizontal form elements with label left-aligned to the control |
| Restrict | `.slds-form` |
| | |

| | |
|-------|-------|
| Selector | `.slds-form-element__static_edit` |
| Summary | Inline Edit on static form element |
| Restrict | `.slds-form-element__static` |
| | |

| | |
|-------|-------|
| Selector | `.slds-form-element__legend_has-tooltip` |
| Summary | Aligns the legend properly when there is an info tooltip |
| Restrict | `.slds-form-element__legend` |
| | |

We understand the importance of a keyboard operation that enhances the experience for blind users and others who rely on keyboard navigation. Lightning also integrates numerous other accessibility considerations, some outlined below.

#####Users can interact with the Form Element using standard mouse actions:

* **Hover**: Provides visual feedback such as highlighting the field or showing a tooltip (e.g., helptext or validation messages).
* **Click**: Activates the field, enabling text entry or selection for dropdowns, checkboxes, and radio buttons.

##The Form Element is fully navigable and operable via the keyboard. The following table outlines common keyboard commands:

| **Key** | **Action** |
| --- | --- |
| **Tab** | Move focus to the next interactive element. |
| **Shift + Tab** | Move focus to the previous interactive element. |
| **Enter** or **Space** | Activate buttons or toggle elements (e.g., checkboxes). |
| **Arrow Keys** | Navigate between options in dropdowns, radio buttons, or multi-option elements. |
| **Escape** | Close open dropdowns or dialogs without making a selection. |

#####* Ensure the component has correctly associated labels using the aria-labelledby or aria-label attributes.
* Validation messages should be linked to fields using aria-describedby to inform users about errors or guidance.

###* Ensure the component works with alternative input devices like sip-and-puff systems or speech recognition tools by relying on semantic HTML and ARIA attributes.

#####Form Elements should indicate when data is loading or being processed, often shown with a spinner or similar icon.

##If a form is long, ensure that fields are easy to scroll through without disrupting the experience.

##Form Elements should resize based on screen size, maintaining usability across devices.

##Ensure that validation rules are clear, user-friendly, and don’t hinder the input experience.

###* Use clearly associated labels for every field. The for attribute on labels should match the `id` of the input.
* Use `fieldset` and legend for related fields to provide context for screen readers.
* Ensure sufficient color contrast for all text, borders, and states (e.g., hover, focus, disabled).
* Validation Feedback:
    * Validation errors should be announced to screen readers.
    * Use clear and positive phrasing for error messages.
* Help Text:
    * Use tooltips or supporting text to provide additional guidance without cluttering the UI.
    * Ensure helptext tooltips are accessible via keyboard and screen readers.

######* Use concise and descriptive text for labels, supporting text, helptext, placeholder text, and error messages. Avoid jargon and ambiguous terms.

* Provide examples or formats for complex input types (e.g., "Enter date as MM/DD/YYYY").
* Ensure text content can be translated easily for international users.
* All form elements marked as required with an * must have an accompanying legend.
**Example:** * denotes a required field

###Each Form Element must have an associated label for accessibility. Use the following:

* Labels must have the `for` attribute applied, and its value must match the `id` of the associated form element, like `<input `id="unique-id-of-input"` />`. This association ensures that assistive technology informs users about what information to enter where.
* Use `aria-describedby` for helptext guidance or error messages.

###Ensure support for Right-to-Left (RTL) languages where applicable.

Allow for localization of:

* Date and time formats
* Numeric formats
* Validation messages and helptext

---
*Generated from SLDS Rules Generator*
