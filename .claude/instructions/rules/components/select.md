# Select

## Select

###A select component provides a structured way for users to select from a menu. It enhances user experience by reducing input errors and improving efficiency when predefined options are appropriate.

* Allows users to choose one or more options from a dropdown menu.
* Used in forms, settings, and data filtering across applications.
* Improves efficiency by presenting predefined options instead of requiring manual text entry.
* Consistent design standards, ensuring accessibility and usability.

##* Provide clear, concise labels to help users understand their choices.
* Ensure the default selection is meaningful to prevent unnecessary user actions.

##* When users must enter custom values; use a text input.
* When the list is too long and needs search functionality.

###| ****Single-Select****  Default menu for choosing an option |  *Single selection component closed and open* |
| --- | :---: |
| |   |
| ****Multi-Select****  When the multiple attribute is used, most browsers display a scrollable list instead of a single dropdown. |  *Multi-selection component with an exposed list and scrollbar* |
| |   |

##########The variants here show the available label positions the select component uses relative to the dropdown menu. The positioning of the label in relation to the dropdown menu for the select component is shown in the variants here.

| ****Standard**** The default, which displays the label above the dropdown menu.  |  *A select component with its label default on top, left aligned* |
| --- | :---: |
| |   |
| ****Hidden**** Hides the label but makes it available to assistive technology. If you provide a value for `field-level-help`, the tooltip icon is still displayed.  |  *A select component with its label hidden and tooltip icon displayed* |
| |   |
| ****Inline****  Aligns the label and dropdown menu horizontally. |  *A select component with its label horizontally aligned to the left* |

##Can adjust width but should align with form elements.

##* Keep labels for list items concise.
* The preferred placeholder text for dropdowns and picklists is "Select..."

#####1. **Default**: Ready for selection.
2. **Active:** The dropdown menu expands, exposing selectable options.
3. **Disabled:** Grayed out, indicating the select component is currently unavailable.
4. **Focus-Closed:** Dark border around the triggering select component.
5. **Focus-Open:** Dark border around the triggering select component and highlighting the first option in the open menu.

##* Mouse click expands the dropdown to show available options.
* Keyboard navigation (arrow keys) is supported.

###When you **Shift + Click** to select multiple items, it selects a range of items between your first and second clicks. This behavior is common in file managers, lists, tables, and multi-select interfaces across various applications. This can be contiguous or non-contiguous. 

>🛑 **Warning:** The keyboard method for selecting multiple non-adjacent items, explained below, currently works only in Firefox.
>
>On macOS, the **Ctrl + Up** and **Ctrl + Down** shortcuts are used for **Mission Control** and **Application Windows** by default. To use them for selection, you'll need to disable these OS shortcuts first.

| **Contiguous Selection**  **Mouse:**   Mouse users can select or deselect multiple options by holding Ctrl (Windows/Linux) or Command (macOS) while clicking. You can also use Shift to select a range of options.. **Keyboard**: Focus on the `<select>` element (e.g., by pressing .**Tab**.). Use the .**Up**. or .**Down**. arrow keys to navigate to the first item in the desired selection range. Hold **Shift** and press the **Up** or **Down** arrow keys to expand or shrink the selection range |  *Multi-selection menu with contiguous options selected* |
| :--- | :---: |
| |   |
| **Non-Contiguous Selection**  **Mouse: ** Ctrl + Click (Windows) or Cmd + Click (Mac)  **Keyboard:** Focus on the `<select>` element (e.g., by pressing .**Tab**.). Hold .**Ctrl**. and use the .**Up**. or .**Down**. arrow keys to move focus between options without selecting them. The focused option is highlighted with a dotted outline, similar to a keyboard-focused link. Press **Space** to select or deselect the focused option. |  *Multi-selection menu with non-contiguous options selected* |
| |   |

##When using a multi-select variant, most browsers show a scrolling list box instead of a single-line dropdown. Alternatively, use the dueling picklist to move options between two lists and reorder the list options.

Select components can set a maximum height; scrolling helps users see all options without the menu getting too long. If there are more options than can fit in the visible space, a scrollbar appears so users can scroll with a mouse, trackpad, keyboard, or touch. If someone navigates with the keyboard, the menu automatically scrolls to keep the highlighted option in view.

To keep things easy to use, choose a height that shows enough options without feeling overwhelming.

###| ****Required****  Required fields are indicated by the red asterisk (*). |  *A required select component* |
| :--- | :---: |
| |   |
| ****Error****  A select component will change to an error state when a required option hasn’t been made. |  *A required select component in an error state* |
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
| Selector | `.slds-select` |
| Summary | Initializes select |
| Support | dev-ready |
| Restrict | select |
| Variant | true |
| | |

#####* Users can click on the Select component to open the dropdown.
* Clicking an option selects it and closes the dropdown.
* Clicking outside the dropdown closes it without making a selection.
* If the Select has a clear button, clicking it resets the selection.

##* **Tab** moves focus to the Select component.
* **Enter** or **Space** opens the dropdown when focused.
* **Up** or **Down** navigate through options when the dropdown is open.
* **Esc** closes the dropdown without selecting an option.
* **Enter** selects the highlighted option and closes the dropdown.
* **Home** moves focus to the first option.
* **End** moves focus to the last option.
* Typing characters filters options based on the typed input.

##* Screen readers announce the Select label, current selection, and the total number of options.
* Voice recognition software can activate the dropdown and select an option using commands like "Select [option name]."
* Alternative input devices (such as sip-and-puff or switch devices) can navigate through options using the keyboard interactions outlined above.

###* Ensure sufficient color contrast between text, background, and borders.
* Provide a visible focus state for keyboard navigation.
* Avoid relying solely on color to convey state changes (e.g., disabled, error).
* Label the Select component clearly to provide context.
* Minimize the number of options where possible to prevent cognitive overload.

###* Use the `aria-labelledby` or `aria-label` attributes to associate the Select with a descriptive label.
* `aria-expanded` should be true when the dropdown is open and false when closed.
* `aria-activedescendant` should reference the currently focused option.
* Implement `role="listbox"` for the dropdown and `role="option"` for each item.
* Support `aria-selected` for indicating the currently chosen option.
* Maintain expected keyboard behavior for navigation and selection.
* Ensure the Select component works with high contrast mode and zoomed interfaces.

###* Avoid placeholder text as the sole method of instruction — use a visible label.
* Keep option labels concise and descriptive.
* Use sentence case for consistency and readability.
* All form elements marked as required with an * must have an accompanying legend.
**Example:** * denotes a required field

###* Supports right-to-left (RTL) languages automatically.
* Ensure localized option labels are properly translated.
* Option sorting and filtering should accommodate different language conventions.
* No additional internationalization considerations noted beyond standard practices.

---
*Generated from SLDS Rules Generator*
