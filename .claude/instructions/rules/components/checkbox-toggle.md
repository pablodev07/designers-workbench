# Checkbox Toggle

## Checkbox Toggle

###* Checkbox toggle enables you to switch settings between two binary states, such as enabling or disabling features.
* It’s commonly used for user preferences, feature settings, or workflows.
* It's easy to use. You get instant feedback, so you know right away if a feature is on or off.

#####* Always label the toggle so the user understands the action they’re taking.
* Use toggles for settings that take effect immediately.
* When a toggle is activated, give users immediate feedback to show if the action was successful.
* Make the component accessible for keyboard navigation and screen readers.

##* For actions involving more than two options, use other methods instead of a toggle switch.
* Avoid using toggles for actions that require confirmation or have significant consequences.
* Don’t use toggles to make a selection that is better suited for radio buttons, checkboxes, or picklists. 
* Don’t use toggles for irreversible actions (for example, deleting records).

Here are two examples of a checkbox toggle. One is toggled to the active position, and the other is toggled to inactive.

###| **Base Toggle**  The default toggle used for binary options.  |   *A Checkbox toggle that is enabled with a state label.*  |
| --- | :---: |
| |   |

###The checkbox toggle aligns with the Salesforce Lightning Design System. It's easy to use, and you'll understand what it does right away.

#######State labels are optional and help users understand whether the toggle is active or inactive, as a complement to the handle position. Unlike field labels, state labels aren't a requirement for accessibility standards. The state label is meant to reflect binary pairs like On/Off, Active/Inactive, or Enabled/Disabled. 

##| **Desktop** 48x24px for desktop browsers.  |    |
| --- | --- |
| **Mobile** On mobile devices, checkbox toggles feature larger label text for touch interactions. This change automatically applies in Salesforce native mobile apps without requiring code modifications, as it activates with the secondary touch style sheet.  |    |

####Place toggles where a user expects binary actions, such as in settings menus or at the end of rows in a list.

#####* Use clear, descriptive names that stand on their own. For example, use "Enable Notifications" instead of "Notifications," because the first example clearly describes what the button does when you click it.
* Aim for concise labels—one or two words if possible.
* Use title case. Capitalize the main words, for example “First Name” and “Phone Number”.

#####1. **Default:** The toggle is in an active state or “on”.
2. **Hover:** When you hover over it, the toggle slightly changes its appearance to show that it’s interactive.
3. **Inactive:** Represents the inactive state or “off”.
4. **Disabled + Inactive:** The toggle appears darker gray and inactive when it’s unavailable for interaction.
5. **Disabled + Active:** The toggle appears darker gray and active when it's not available for interaction.
6. **Focus:** When the toggle is focused using keyboard navigation, it's highlighted. Focus is applied to both inactive and active states.

##* **Click:** The toggle switches between the active and inactive states.
* **Touch:** On mobile, the toggle responds to touch gestures.
* **Keyboard**: Users can toggle between active and inactive states using Enter or the spacebar.

##If the action associated with the toggle takes time to complete, a spinner or loading animation is displayed after activating the toggle.

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
| Selector | `.slds-checkbox_on` |
| Summary | Container for text to show when checkbox is toggle on |
| Restrict | `.slds-checkbox_faux_container` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-checkbox_off` |
| Summary | Container for text to show when checkbox is toggle off |
| Restrict | `.slds-checkbox_faux_container` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-checkbox_faux_container` |
| Summary | Container for faux checkbox element |
| Restrict | `.slds-checkbox_toggle` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-checkbox_faux` |
| Summary | Creates a custom styled checkbox |
| Restrict | `.slds-checkbox_toggle` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-checkbox_toggle` |
| Summary | Initializes checkbox toggle |
| Support | dev-ready |
| Restrict | label |
| Variant | true |
| | |

#####* Users can click the toggle to switch states.
* Mouse icon changes on hover to imply interaction.

##* **Tab:** Moves focus to the Checkbox Toggle.
* **Enter/Spacebar:** Toggles the state.

##* Screen readers should announce the toggle's state and allow users to switch states using assistive technology.

##* When deviating from the standard checkbox toggle styling hooks, ensure proper contrast ratios for readability.

##Developers must ensure that the toggle is accessible via ARIA attributes and works with screen readers. Additionally, the keyboard interaction should be smooth and predictable.

* Groups of checkboxes should be marked up using the `fieldset` and `legend` element. This helps someone using assistive technology to understand the question they're answering with the group of checkboxes. The fieldset is placed around the whole group and the legend contains the question.
* Custom checkboxes are created by applying the `.slds-checkbox` class to a `<label>` element. To remain accessible to all user agents, place `<input>` with `type="checkbox"` inside the `<label>` element. The `<input>` is then visually hidden, and the styling is placed on a span with the `.slds-checkbox_faux` class. The styling of the span changes based on whether the checkbox is selected or focused by using a pseudo-element. A second span with `.slds-form-element__label` contains the label text.
* When a single checkbox is required, `<div class="slds-checkbox">` should get `<abbr `class="required"` title="required">*</abbr>` added to the DOM, directly before the `<input `type="checkbox"` />` for visual indication that the checkbox is required.
* When a checkbox group is required, the `<fieldset>` should receive the class .slds-is-required. The `<legend>` should then get `<abbr `class="required"` title="required">*</abbr>` added to the DOM for visual indication that the checkbox group is required.
* As SLDS checkboxes rely on the `:checked` pseudo selector, and the indeterminate state is only accessible via JavaScript, the use of a CSS class on the input will be necessary to implement this in SLDS. Use JavaScript to add the class when the indeterminate property is set to true on the input.
* The following JavaScript demonstrates how to set a checkbox to be indeterminate:`var checkbox = document.getElementById('checkbox-indeterminate-01'); checkbox.indeterminate = true;`

---
*Generated from SLDS Rules Generator*
