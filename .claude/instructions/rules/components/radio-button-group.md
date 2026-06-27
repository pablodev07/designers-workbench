# Radio Button Group

## Radio Button Group

###The radio button group lets users select one option from a list of predefined options. This component is ideal for situations where you want users to make a single, clear choice.

* A radio button group is a set of related options where users can only select one option at a time.
* Help users make decisions easily by presenting clear, grouped choices in a radio button group.
* Rounded buttons, each with a label, are arranged in horizontal groups.

#####* Use clear, concise labels for each option.
* Group related options logically.
* Keep the number of options within 3–7 to remain manageable. 
* Provide a default selection if possible.

##* Don't use a radio button group when multiple selections are allowed—use a checkbox button group or checkboxes instead.
* Don't use it for binary choices—use a toggle checkbox or checkbox.

###| **Default**  Displays text labels within buttons. Use when there's ample horizontal space, so that buttons align with the surrounding content.  |  *Default radio button group with six options.* |
| --- | :---: |
| |   |
| **Icons**  Use icons when text isn't needed or takes up too much space.  |  *Icon radio button group with six options.* |
| |   |

#########Adjusts automatically to fit any screen size.

##* Use concise labels up to 20 characters.
* Avoid abbreviations unless they're universally understood.

#####1. **Default**
2. **Hover**
3. **Active (while pressing)**
4. **Focus (selection follows focus)**
5. **Disabled**
6. **Selected**
7. **Selected + Hover**
8. **Selected + Active**
9. **Selected + Disabled**
10.

##* When users click a button, the button instantly updates to show it's selected.
* Only one button can be selected at a time.

##Create a smooth user experience by pre-selecting the most likely option.

| **Validation**  Display error messages below the group when a required selection isn't made. Include help text for additional context. |  *Example of error message.* |
| :--- | :---: |

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
| Selector | `.slds-radio_button__label` |
| Summary | No description available |
| Restrict | `.slds-radio_button` label |
| | |

| | |
|-------|-------|
| Selector | `.slds-radio_faux` |
| Summary | No description available |
| Restrict | `.slds-radio_button` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-radio_button` |
| Summary | No description available |
| Restrict | `.slds-radio_button-group` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-radio_button-group` |
| Summary | Initializes radio button |
| Support | dev-ready |
| Restrict | div |
| Variant | true |
| | |

#####Users interact with the Radio Button Group using mouse clicks. Each button is clickable, and selecting one automatically deselects the previously selected button within the group.

* **Hover State:** Buttons visually indicate hover with a subtle background change.
* **Click State:** Buttons reflect the active state when clicked.
* **Disabled State:** Buttons appear greyed out and are non-interactive.

##| **Key** | **Action** |
| :--- | :--- |
| **Tab** | Moves focus to the Radio Button Group or next focusable element. |
| **Arrow Keys** | Navigates between radio buttons in the group (up/down or left/right). |
| **Space/Enter** | Selects the currently focused radio button. |

* **Initial Focus:** Focus defaults to the first selected option or the first button in the group if no option is selected.
* **Focus Ring:** A visible focus ring indicates which button is currently active for navigation.

##For users relying on assistive devices, the Radio Button Group supports:

* **Screen Readers:** Each button has an accessible name derived from its label, and the group is announced as a single control with a role of `radiogroup`.
* **Magnifiers:** Labels and buttons are designed for readability and scaling.
* **Alternative Input Devices:** Supports navigation via speech recognition or other input methods by focusing and selecting buttons.

###* Use concise, descriptive text for button labels.
* Arrange buttons in a meaningful order for intuitive navigation.
* Ensure initial focus aligns with user expectations and workflows.
* Provide clear, contextual error messages when validation fails.
* Maintain sufficient contrast between buttons and background to meet WCAG 2.1 AA standards.

#####* Provide unique, meaningful labels for each radio button.
* Include optional help text to clarify the purpose of the group when necessary.
* Ensure error messages are explicit and actionable.
* All radio button groups marked as required with an * must have an accompanying legend.
**Example:** * denotes a required field

###Radio Button Group components include accessible labels by default through:

* `aria-labelledby`: Links the group to its associated label.
* `aria-describedby`: Provides additional context or error messaging when required.

If no customization is required, these labels ensure out-of-the-box component-level accessibility.

---
*Generated from SLDS Rules Generator*
