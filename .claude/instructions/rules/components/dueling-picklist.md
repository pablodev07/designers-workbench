# Dueling Picklist

## Dueling Picklist

###* Select multiple items from one list and move them to another, building a list of selected items in the right-hand list.
* Commonly used in situations such as configuring user permissions, selecting products, or filtering lists.
* Add or remove items from the selection by using the arrow button icons.

#####* Use for a large set of options that can be organized into two categories, such as “Available Languages” and “Selected Languages.”
* Clearly label each list to avoid confusion.
* Provide helpful tooltips or instructions for how to use the component if necessary.
* Keep the lists fairly short to avoid overwhelming users. Aim for fewer than 20 items in each list.

##* Don't use Dueling Picklist for binary selections (yes/no) where a simple toggle is appropriate.
* Don't use it for situations with fewer than five options, as it can complicate the interface unnecessarily. Use a combobox if possible.
* Don't use it in areas of the UI where space is limited, as it requires enough room to display both lists and the arrow buttons effectively.

###| **Standard Dueling Picklist**  This is the default style, featuring two lists with simple arrow buttons for item movement.  **Use case** A manager is setting up a project team by selecting from a list of available employees.  |  *Dueling Picklist showing list of available and assigned employees.*  |
| --- | :---: |

###The Dueling Picklist consists of two main sections: the left list of available items, and the right list of selected items. Arrow buttons display between the lists and next to the list of selected items.

######* **Default:**
    * **Default Width:** 240px
    * **Maximum Width**: 400 pixels
    * **Minimum Width**: 200 pixels

##* Labels use title case.
* **Options and values**: 
    * Use title case.
    * To make it easy for users to find what they need, present the available items in the order you expect them to be used. This works best for shorter lists.
    * Don’t use double hyphens around “None” or other options.

**Truncation:** If item names are too long to show in the lists, text is truncated with an ellipsis. To make the list accessible to all users, display the full item name in a tooltip or other indicator that users can view or hear.

###The component automatically checks if users follow the rules you set, such as selecting a minimum or maximum number of options.

* Maximum Options (rangeOverflow) 
    * **Error Text: "Select at most [max] options."**
* Minimum Options (rangeUnderflow)
    * **Error Text: "At least [min] options must be selected."**
* Required Selection (valueMissing)
    * **Error Text: "An option must be selected."**

You can change the default error messages to match the context of your application. For instance: Instead of "At least [min] options must be selected," you might show: "Choose at least three items to proceed."

Use these attributes to define your own messages:

* `message-when-range-overflow`: Customize the message for selecting too many options.
* `message-when-range-underflow`: Customize the message for selecting too few options.
* `message-when-value-missing`: Customize the message for no selection.

#####1. **Default:** List items are displayed in their standard state.
2. **Hover:** List items change background color to indicate interactivity.
3. **Active:** The currently selected list item is highlighted.
4. **Disabled:** Disabled list items are visible but not interactive.
5. **Component Disabled:** Both listboxes are grayed-out and non-interactive.

#####Click on an item in either list to select it, then use the arrow buttons to move it.

###To move multiple items at once, press the Shift or Ctrl/Cmd key while clicking on the list items you want to move. Click on the arrow buttons to move them.

##During loading, the component can display a spinner or a loading message to indicate processing.

##When a listbox is set to a fixed height, scrolling is enabled to view additional options.

##This component supports pre-selected items. Pre-define required selections to give users an initial selection. Set a limit on the number of choices users can make with the `max` attribute. Make sure users select a minimum number of options with the `min` attribute.

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
| Selector | `.slds-is-disabled` |
| Summary | Disabled state of a picklist option |
| Restrict | `.slds-dueling-list__options` |
| | |

| | |
|-------|-------|
| Selector | `.slds-is-grabbed` |
| Summary | grabbed state of a listbox option |
| Restrict | `.slds-dueling-list__options` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-is-selected` |
| Summary | Selected/dragging state of a listbox option |
| Restrict | `.slds-dueling-list__options` div |
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
| Selector | `.slds-dueling-list__options` |
| Summary | Bounding visual container for listbox of options |
| Restrict | `.slds-dueling-list` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-dueling-list__column_responsive` |
| Summary | Changes the layout of the dueling picklist to be responsive |
| Restrict | `.slds-dueling-list__column` |
| | |

| | |
|-------|-------|
| Selector | `.slds-dueling-list__column` |
| Summary | Handles the layout of the dueling picklist |
| Restrict | `.slds-dueling-list` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-dueling-list` |
| Summary | Initializes a dueling picklist |
| Support | dev-ready |
| Restrict | div |
| Variant | true |
| | |

#####* **Cursor Change**: When a user hovers over the Dueling Picklist component, the cursor should change to a pointer, indicating that the element is interactive.
* **Selection**: Users can select items by clicking on them. Once selected, users can use the arrow buttons to move items between lists.

##**Keyboard Commands**: The following table summarizes the keyboard interactions for the Dueling Picklist component:

| **Action** | **Key Command** | **Description** |
| :--- | :--- | :--- |
| Move focus to next option | Down Arrow | Moves focus to the next available option in the list. |
| Move focus to previous option | Up Arrow | Moves focus to the previous available option in the list. |
| Move focus to the first option | Home | Focuses on the first item in the list. |
| Move focus to the last option | End | Focuses on the last item in the list. |
| Move focus based on first letter typed | First letter of an option  | Moves focus to the first option starting with the typed letter. |
| Select the focused option | Space or Enter | Selects the focused item or removes selection if it's already selected. |
| Select multiple options consecutively | Shift + Down/Up Arrow | Selects multiple items by holding Shift while navigating up or down the list. |
| Move focus without selecting | Ctrl (or Command on macOS) + Up/Down Arrow | Moves focus up or down without selecting/deselecting items. |
| Select/Deselect all options | Ctrl (or Command) + A | Selects or deselects all options in the list. |
| Select all options up to first or last | Ctrl (or Command) + Shift + Home/End | Selects all items from the focused item to the first or last item. |

##* **Screen Readers:** The component should be properly labeled to inform users about its purpose and available actions.
* **Speech Recognition Software:** Users can interact with the component through voice commands, enabling actions like “select item,” “move to right,” or “add.”
* **Braille Displays:** Users should receive accurate information about item selection and available actions on their display.

###Designers should ensure that the Dueling Picklist component adheres to accessibility best practices, such as:

* **Alternative Text**: Provide descriptive text for icons or buttons to enhance understanding.

###### When presenting information in the Dueling Picklist, ensure that all content:

* Is concise and clear to avoid confusion.
* Utilizes appropriate headings and lists for structure.
* Avoids jargon to maintain comprehension.

###* ARIA Roles: Use appropriate ARIA (Accessible Rich Internet Applications) roles and attributes to convey the component's purpose and state to assistive technologies.
    * `aria-multiselectable="true"` should be set on each listbox
    * `aria-selected` should be placed on each `role="option"`, and set to false by default
    * `aria-labelledby` is used to identify the list to the user and should point to the list label
    * `aria-describedby` is used to provide operation instructions for the Drag and Drop interaction
    * `tabindex` should be set to `0` when an item is selected and `-1` otherwise

---
*Generated from SLDS Rules Generator*
