# Checkbox Button

## Checkbox Button

###* Used for single selections as it switches between checked and unchecked states
* When active, the button shows that it's checked by changing the icon and color.
* Primarily used for adding or removing items in a group.
* The (+) and (✓) icons depict unchecked and checked states.

#####* Ensure the checkbox button has a proper accessible name associated with it for screen readers. It should also provide keyboard focus using the Tab key and be operable using the Spacebar or Enter keys. See the Accessibility section for more details.

##* Avoid using too many checkbox buttons on a single screen. Too many options can overwhelm the user.
* Don’t use checkbox buttons for anything other than a binary option. 
* When you have more than two conditions to choose from, consider using a checkbox, checkbox button group, picklist, or combobox.
* If a checkbox button involves complex choices, consider using a button or dropdown. Checkbox buttons are best suited for switching something on and off.
* Stateful button icons are also used for single actions. Unlike checkbox buttons, the icon doesn't change when selected.

###| **Base Checkbox Button**  A base checkbox button is selected and unselected. **Use case:** Make it obvious what people can do and make it easy for them to take action.  |   *Checkbox button in default and pressed state.* |
| :--- | :---: |
| |   |

##########* The default (+) and (✓) icons are the only ones available for checkbox button.

##The checkbox button is 32x32 pixels in the browser and resizes for mobile and tablet views.

#####1. **Default:** Checkbox is unchecked.
2. **Hover:** When you  hover over the checkbox, the background color changes to show interactivity.
3. **Active:** The checkbox becomes checked when you select it.
4. **Focused:** If you use keyboard navigation to reach the checkbox, it receives focus and you can press Enter or the spacebar to activate it.
5. **Disabled:** The checkbox appears grayed out and isn't interactive.

1. **Selected:** Check box is checked
2. **Selected + hover:** When you hover over the checked checkbox, the background changes to show  interactivity.
3. **Selected + active:** The checkbox becomes unchecked when you select it.
4. **Selected + focus:** If you use keyboard navigation to reach the checkbox, it receives focus and you can press Enter or the spacebar to activate it.
5. **Selected + disabled:** The checkbox appears grayed out and is not interactive.

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
| Selector | `.slds-checkbox-button_is-focused` |
| Summary | Modifier for the focused state |
| Restrict | `.slds-checkbox-button` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-checkbox-button_is-disabled` |
| Summary | Modifier for the disabled state |
| Restrict | `.slds-checkbox-button` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-checkbox-button_is-checked` |
| Summary | Modifier for the checked state |
| Restrict | `.slds-checkbox-button` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-checkbox-button` |
| Summary | Initializes checkbox button |
| Support | dev-ready |
| Restrict | label |
| Variant | true |
| | |

#####When using a mouse to interact with a Checkbox Button, users can:

* Click the checkbox to toggle between the checked and unchecked states.
* Hover over the checkbox to see the visual feedback (e.g., changes in background or border color, indicating interactivity).

For mouse interactions:

* Hover state is important for providing users with a visual indication that the element is clickable.
* When a user clicks a checkbox button, it should toggle its state from checked to unchecked and vice versa.

##For keyboard accessibility, users should be able to interact with the Checkbox Button using the following commands:

| **Action** | **Keyboard Command** | **Result** |
| :--- | :--- | :--- |
| Navigate to the checkbox | Tab (forward), Shift + Tab (backward) | Moves the focus to the next or previous checkbox. |
| Select/Deselect checkbox | Spacebar or Enter | Toggles the checkbox between selected and unselected. |
| Focus | Tab | Focuses on the checkbox, indicated by a visual outline. |

* **Focus state**: When the user navigates to the checkbox button with the Tab key, it must have a clear focus indicator, such as a border or background color change, to show that it is selected and ready to be toggled.
* **Indeterminate state**: If the checkbox is in the indeterminate state, it should still be operable via the Spacebar or Enter key, toggling between the indeterminate, checked, and unchecked states.

##For **assistive devices** and non-traditional input methods (such as **screen readers**, **magnifiers**, **speech recognition software**, **sip-and-puff devices**, and **braille displays**), the **Checkbox Button** should be fully accessible:

* **Screen readers**: The checkbox must have proper **ARIA labels** and roles (role="checkbox") to ensure that screen reader users can identify it as a checkbox and understand its current state (checked, unchecked, or indeterminate). A screen reader should also announce any changes in state when the user interacts with the checkbox.
* **Speech recognition software**: Speech recognition tools should allow users to toggle the checkbox using spoken commands. Developers should ensure that the checkbox can be activated via voice input, such as saying "select" or "deselect," corresponding to a click or toggle action.
* **Braille displays**: A **braille display** will need to map the checkbox element properly and should announce its state correctly, such as "Checkbox: Selected" or "Checkbox: Unselected."
* **Sip-and-puff devices**: For users who rely on sip-and-puff devices, navigating through checkboxes should be possible by controlling the focus and toggling the checkbox state. These devices should trigger the same actions as keyboard commands.

###* **Visual contrast** is high enough to be easily distinguishable for users with visual impairments, including those with color blindness.
* **Clear, descriptive labels** are used so that all users, especially screen reader users, can understand the purpose of each checkbox.
* The **focus state** is prominent and easily visible to users who navigate using a keyboard, making it clear which checkbox is currently selected.
* **State changes** (checked, unchecked, indeterminate) should be visually clear, using color and text (e.g., “Selected” or “Unselected”) where applicable.
* The **size** of the checkbox should be large enough to be clickable for users with motor impairments, with a recommended clickable area of at least 44x44 pixels, as per web accessibility guidelines.

######* **Clear, descriptive labels**: The text associated with each checkbox should clearly describe the choice the user is making. Avoid ambiguous labels like “Option 1” or “Option 2.”
* **Instructional text**: If the checkbox controls a critical function (e.g., “Agree to terms and conditions”), ensure there is **clear instructional text** guiding the user’s understanding of its importance.
* **Error handling**: If a checkbox is required and not selected, the form should present a clear, accessible error message that explains why the user needs to make a selection.

###The **Checkbox Button** should follow general best practices for accessibility labels:

* **ARIA labels**: Ensure that each checkbox has an associated aria-label or is linked to a visible text label via the for attribute in the HTML code. This ensures that screen readers can announce the checkbox’s purpose to users.
* **Descriptive text**: The label should be concise but descriptive enough for users to understand the checkbox's purpose without ambiguity. For example, instead of using labels like "Select", use something more specific like "Subscribe to newsletter."

###Internationalization (i18n) considerations for the **Checkbox Button** should include:

* **Translating text labels**: Ensure that the checkbox labels are fully translatable into different languages. This might involve using localization files to manage different languages, and making sure the text is appropriately formatted for various scripts and character sets.
* **Right-to-left (RTL) languages**: The component should be adaptable for right-to-left languages (e.g., Arabic, Hebrew). Ensure that the layout and interaction flow remain intact when the interface is displayed in RTL mode.

---
*Generated from SLDS Rules Generator*
