# Combobox

## Combobox

###* Commonly used for selecting from a large list of options.
* Displays a dropdown listbox when users interact with the input field. 
* Comboboxes are divided into two types: picklists and lookups. With picklists, the user can only select from a list of options. Lookups, on the other hand, allow users to filter through the options by typing into the input field.

#####* Provide clear, concise labels for list items.
* Use meaningful placeholder text to guide user input.
* Make sure options are relevant and ordered logically.

##* Avoid using a combobox for binary choices—use a toggle or checkbox instead.
* Avoid implementing a combobox where predefined options aren't applicable.

#########* By default, the listbox width matches the input field width.
* Listbox height scrolls to the size of the list unless a max-height value is set.

####* Use title capitalization. In most cases (relatively short lists), order items by likely use. If the default option is a prompt, follow with an ellipsis.
* Limit text in listbox items to avoid truncation.
* Use concise labels to make them easy to scan.

#####Combobox has the following states: 

1. **Default:** Input field displays optional placeholder text.
2. **Default with selected item(s)**: The input field displays the selected option(s).
    * Selected options in the listbox are shown with a checkmark.
3. **Active/Focus:** Focus indicator is shown on the input field, which displays the optional placeholder text or selected option(s). 
    * The listbox opens by default when the combobox is clicked or receives focus.
4. **Disabled**: Input is inactive and visually muted.

##* Listbox dropdown expands on click or focus.
* Items highlight on hover/focus and select on click/enter.

##Shows a spinner when options are dynamically fetched.

##Listbox scrolls independently if items exceed the viewport or max-height is used.

##Adjust listbox placement and width based on screen size.

##Pre-fill input with default values for convenience.

##* Show inline error messages when input doesn’t meet criteria.
* Use supporting text for guidance on the input format.

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
| Selector | `.slds-listbox-toggle` |
| Summary | Toggle button to show all of the pill selections |
| Restrict | `.slds-listbox_selection-group` > span |
| | |

| | |
|-------|-------|
| Selector | `.slds-is-expanded` |
| Summary | Expanded state of a selection group |
| Restrict | `.slds-listbox_selection-group` |
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
| Selector | `.slds-listbox_selection-group` |
| Summary | The container of pill selections found inside of a combobox group |
| Restrict | `.slds-combobox-group` ~ div, `.slds-combobox_container` ~ div |
| | |

| | |
|-------|-------|
| Selector | `.slds-combobox-addon_end` |
| Summary | The last combobox in the combobox group |
| Restrict | `.slds-combobox-group` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-combobox-addon_start` |
| Summary | The first combobox in the combobox group |
| Restrict | `.slds-combobox-group` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-has-selection` |
| Summary | Modifier that notifies the combobox group that a selection has been made |
| Restrict | .slds-combobox-group, `.slds-combobox_container` |
| | |

| | |
|-------|-------|
| Selector | `.slds-combobox_object-switcher` |
| Summary | Modifier that identifies the combobox as the object switcher, applies specific interactions for its context |
| Restrict | `.slds-combobox-group` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-combobox-group` |
| Summary | Container for a combobox group |
| Support | dev-ready |
| Restrict | div |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-listbox-toggle` |
| Summary | Toggle button to show all of the pill selections |
| Restrict | `.slds-listbox_selection-group` > span |
| | |

| | |
|-------|-------|
| Selector | `.slds-is-expanded` |
| Summary | Expanded state of a selection group |
| Restrict | `.slds-listbox_selection-group` |
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
| Selector | `.slds-listbox_selection-group` |
| Summary | The container of pill selections found inside of a combobox group |
| Restrict | `.slds-combobox-group` ~ div, `.slds-combobox_container` ~ div |
| | |

| | |
|-------|-------|
| Selector |  .slds-combobox[aria-haspopup=“dialog”] |
| Summary | No description available |
| Support | dev-ready |
| Restrict | `.slds-combobox_container` .slds-combobox |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-combobox_container__icon` |
| Summary | No description available |
| Restrict | `.slds-combobox_container` svg |
| | |

| | |
|-------|-------|
| Selector | `.slds-has-inline-listbox` |
| Summary | No description available |
| Restrict | `.slds-combobox_container` |
| | |

| | |
|-------|-------|
| Selector | `.slds-has-selection` |
| Summary | Modifier that notifies the combobox group that a selection has been made |
| Restrict | .slds-combobox-group, `.slds-combobox_container` |
| | |

| | |
|-------|-------|
| Selector | `.slds-combobox_container__icon` |
| Summary | No description available |
| Restrict | `.slds-combobox_container` svg |
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
| Selector | `.slds-has-icon_left` |
| Summary | No description available |
| Restrict | `.slds-combobox` |
| | |

| | |
|-------|-------|
| Selector | `.slds-has-focus` |
| Summary | Force focus state of the input |
| Restrict | `.slds-combobox__input` |
| | |

| | |
|-------|-------|
| Selector | `.slds-combobox__input-value` |
| Summary | No description available |
| Restrict | `.slds-combobox__input` |
| | |

| | |
|-------|-------|
| Selector | [aria-autocomplete="list"] |
| Summary | No description available |
| Support | dev-ready |
| Restrict | `.slds-combobox__input` |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-combobox__input` |
| Summary | Input field within a combobox |
| Restrict | `.slds-combobox__form-element` input, `.slds-combobox__form-element` button |
| | |

| | |
|-------|-------|
| Selector | `.slds-combobox__input-entity-icon` |
| Summary | No description available |
| Restrict | `.slds-combobox__form-element` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-combobox__form-element` |
| Summary | No description available |
| Restrict | `.slds-combobox` > div |
| | |

| | |
|-------|-------|
| Selector | `.slds-is-open` |
| Summary | No description available |
| Restrict | `.slds-combobox` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-combobox` |
| Summary | No description available |
| Restrict | `.slds-combobox_container` > div |
| | |

| | |
|-------|-------|
| Selector | `.slds-has-icon-only` |
| Summary | Icon only variant of a combobox |
| Restrict | `.slds-combobox_container` |
| | |

| | |
|-------|-------|
| Selector | `.slds-has-selection` |
| Summary | Apply when a combobox has a selection |
| Restrict | `.slds-combobox_container` |
| | |

| | |
|-------|-------|
| Selector | `.slds-combobox_container` |
| Summary | No description available |
| Support | dev-ready |
| Restrict | div |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | [readonly] |
| Summary | No description available |
| Support | dev-ready |
| Restrict | `.slds-combobox_container` input |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-has-object-switcher` |
| Summary | No description available |
| Support | dev-ready |
| Restrict | `.slds-combobox_container` |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-has-inline-listbox` |
| Summary | No description available |
| Support | dev-ready |
| Restrict | `.slds-combobox_container` |
| Variant | true |
| | |

#####* Users can click the input field to focus and display the listbox.
* Clicking an option selects it and closes the listbox.
* Clicking outside the component dismisses the listbox.

##**Keyboard Commands**

| **Action** | **Key Combination** | **Description** |
| :--- | :--- | :--- |
| Open listbox | Enter or Down Arrow | Expands the listbox menu to show available options. |
| Close listbox | Esc | Closes the listbox without making a selection. |
| Navigate options | Up Arrow/Down Arrow | Moves focus up or down the list of options. |
| Select an option | Enter | Selects the highlighted option and closes the listbox. |
| |   |   |
| Clear selection | Backspace | Removes the current selection from the input field, as well as typed alpha-numeric characters in the input. |

##* **Screen Readers**: Combobox announces its label, state (e.g., `expanded` or `collapsed`), and options count. Highlighted options are read aloud.
* **Magnifiers**: Visual focus indicators and clear spacing support users with magnifiers.
* **Alternative Input Devices**: Speech recognition users can activate the listbox by saying the label or input prompt.

###* **Labeling**: Designers must ensure the component has a visible label for clarity. Avoid relying solely on placeholder text as a label substitute.
* **Focus Management**: Ensure the first available option becomes the active item, through the use of `aria-activedescendant`, when the listbox is opened.
* **Visual Indicators**: Provide clear visual cues for hover, focus, and selected states.
* **Color Contrast**: Adhere to WCAG 2.1 color contrast guidelines for text and interactive elements.
* **Error Feedback**: Ensure error states are visually distinguishable and accompanied by accessible text. These should be associated with the element which has `role=”combobox”`, through the use of `aria-describedby`.

#####* **Input Labels**: Always provide meaningful and descriptive labels for the input field.
* **Helper Text**: Include helper text for guidance, such as acceptable formats or limitations.
* **Error Messages**: Ensure error messages are brief, descriptive, and programmatically associated with the input.

###Combobox requires appropriate labels for clarity and usability.

* **Labeling Recommendations**:
    * Use properly associated label elements to define the component's purpose. You may use `aria-label` or `aria-labelledby` if the element with role=”combobox” does not support a label element with a properly formed id/for relationship.
    * Apply `aria-placeholder` for accessible placeholder text (if necessary).
    * Ensure the listbox is associated with the input field using `aria-controls`.

###* Support for languages with right-to-left (RTL) text direction.
* Display of localized placeholder text and listbox items.
* Keyboard navigation consistency across different language settings.

---
*Generated from SLDS Rules Generator*
