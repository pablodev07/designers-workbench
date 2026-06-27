# Button Groups

## Button Groups

###* Used to group related actions or options together. Button groups allow users to make selections or trigger actions without navigating away.
* Displays buttons in a row or dropdown format, creating a clear, consistent layout for quick access.
* Buttons within a button group can toggle, link to pages, or perform specific actions based on user selections.
* Available in outline, brand, and inverse button styles. 
* Can contain text buttons, icon buttons, or dropdown buttons.

#####* Use button groups for related actions like filter, sort, or export.
* To avoid clutter, limit the number of buttons. Too many options can overwhelm users.
* Use a descriptive label for each button so that users know what action to expect.
* Keep button group content consistent across pages.

##* Avoid using button groups for standalone actions.
* Avoid long button groups. Too many buttons in a group can be confusing and harder to use.
* Separate unrelated actions into individual buttons or button groups.

###| **Base Button Group**  Displays buttons in a simple row without extra styling. **Use case:** For related actions on a page, which allows the user to take quick actions without navigating away.  |  *Base Button Group Example.* |
| --- | :---: |
| |   |
| **Icon-Only Button Group**  Uses icons instead of text for actions that are easily recognizable, like a settings gear or a trash can icon. **Use case:** A compact toolbar uses an icon-only button group with "Download," "Share," and "Favorite" icon buttons, which allow users to quickly perform actions.  |  *Icon-only Base Button Group Example.* |
| |   |
| **Split Button Group**  Allows users to select a main action while providing additional options in a dropdown format.  **Use case**: In an email client, a split button uses “Send" as the main button, with additional options like "Send Later" or "Schedule" in a dropdown.   |  *Split Button Group Example.* |

#######Button group size is dependent on the button label content.

####Keep labels brief and descriptive (for example "Save" or "Cancel").

Avoid long text; icons can be used for frequently recognized actions.

#####1. **Default:** Buttons are visible and active.
2. **Hover:** Button changes color slightly to indicate interactivity.
3. **Active:** Button color changes to show it’s been clicked.
4. **Disabled:** Button is visible but not clickable, revealing that its action isn't available for certain users or conditions.
5. **Focus:** Button receives a highlighted border for keyboard navigation accessibility.

##* **Click:** Executes the primary action tied to the button.
* **Dropdown Expand:** Split buttons expand to show additional options on click.
* **Loading:** Indicates data is loading for actions that take time to complete, such as "Processing" or a loading spinner.

##* Button groups adapt to various screen sizes, stacking vertically on smaller screens.
* Button groups are responsive and automatically adjust to fit mobile, tablet, and desktop views.

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
| Selector | `.slds-button-group-item` |
| Summary | Each item inside of a button group row that needs spacing applied to it |
| Restrict | `.slds-button-group-row` li, `.slds-button-group-row` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-button-group-row` |
| Summary | Creates button group container that provides spacing between each button |
| Support | dev-ready |
| Restrict | div, ul |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-button_last` |
| Summary | If the last button in the group is required to be wrapped in a div, apply this class to the div |
| Restrict | `.slds-button-group` div, `.slds-button-group-list` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-button-group-list` |
| Summary | Creates button group container for list items |
| Support | dev-ready |
| Restrict | ul |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-button_last` |
| Summary | If the last button in the group is required to be wrapped in a div, apply this class to the div |
| Restrict | `.slds-button-group` div, `.slds-button-group-list` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-button-group` |
| Summary | Creates button group container |
| Support | dev-ready |
| Restrict | div |
| Variant | true |
| | |

#####* **Clicking**: Users can click on any button within the group to perform the associated action. The button will provide visual feedback (like color change) when hovered over or clicked.
* **Hover**: The cursor changes to a pointer when hovering over the buttons, indicating that they are interactive.

##* **Tabbing**: Users can navigate through the buttons using the Tab key. Each button should receive focus in a logical order.
* **Enter/Space**: When a button is focused, users can activate it using the Enter or Space key.
* **Arrow Keys**: If the Button Group includes toggle options, users can navigate between buttons using the left and right arrow keys, activating options as they go.

##* **Screen Readers**: These devices will read out the accessibility labels associated with each button, allowing users to understand their functions.
* **Magnifiers**: Users can zoom in on the buttons without losing accessibility; buttons should maintain their usability even when enlarged.
* **Alternative Input Devices**: Users with speech recognition software can activate buttons through voice commands if the software recognizes them by their accessibility labels.
* **Braille Displays**: For visually impaired users, the buttons should have descriptive labels that translate to Braille for effective navigation.
* **Keyboard Modifications**: Users may customize key mappings for interaction, and the Button Group should still function correctly under these settings.

###* **Color Contrast**: When deviating from the standard Button Group styling hooks, ensure proper contrast ratios for readability.
* **Focus States**: Clearly indicate focus on buttons using styles like outlines or color changes, making navigation easier for keyboard users.
* **Labeling**: Provide clear and concise labels for each button to ensure screen readers can communicate their purpose effectively.
* **Error Prevention**: Design the Button Group to avoid triggering actions accidentally, which can be frustrating for users with motor impairments.

########* **Clarity**: Ensure that button labels are straightforward and descriptive, providing context for what action will be taken.
* **Error Messaging**: If applicable, provide clear error messages that explain how users can correct any issues.

##* Labels should be short to ensure that localized text will fit. Design with different languages in mind to avoid truncation.

---
*Generated from SLDS Rules Generator*
