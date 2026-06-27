# Radio Group

## Radio Group

###* The radio group presents a set of options and allows only one option to be selected at a time.
* Consists of a group of radio buttons aligned vertically.
* Users can choose a single option from multiple choices.
* Often used in forms, surveys, and other situations where a user must choose one option from a list.

#####* Give each radio button a descriptive label to clearly state what it represents.
* Always include a label for the group to provide context about what's being selected.
* Pre-select the option that users are likely to choose. If you're not sure which option they'll prefer, pre-select the first one in the list.

##* Don't use a radio group if the user can select more than one option. 
* Avoid using radio groups if the options aren’t mutually exclusive.
* If options must change frequently or dynamically, consider using a picklist instead.
* When there are a lot of options in a list, such as a list of US states, it can be difficult for users to scroll or adjust their view to see all the options. For these situations, consider using a different component, such as a [picklist](https://v1.lightningdesignsystem.com/components/picklist/).

#########* Use the same text style for each item in a list.

* Keep radio button labels short and clear. This makes them easy to read and helps users quickly make a choice. Use 1–3 words per label.
* If more explanation is needed, describe what happens from the user’s perspective.
* Start with a verb that describes what the option does. Don't use “enable” or “activate”.
* Use sentence capitalization in the labels for these UI elements. No end punctuation.

#####1. **Default**: The initial state before user interaction.
2. **Selected**: Indicates the current selection within the group.
3. **Focus:** Highlights the radio button when the user navigates through the set using a keyboard. For this component, selection follows focus—when an item is in focus, it's also selected.
4. **Error:** Indicates a problem by highlighting the options in pink and displaying an error message to inform the user that a selection is required or invalid.
5. **Disabled:** Displays radio buttons in light gray and non-interactive, indicating that the user can't select or change any of the options.

##Users can make a selection by clicking, pressing a key, or tapping either the radio button or its label.

##Group radio buttons together near the related content or questions. This placement makes it easier for users to navigate through the content.

##Radio buttons are adaptive—they're mobile-friendly and adjust to different screen sizes. On touch devices, they increase in size for easier tapping.

##To streamline the user experience, pre-select an option if a likely choice is clear.

##Error states are visually indicated with a red border around the radio buttons and an error message below the radio group, helping users quickly identify and correct the issue.

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
| Selector | `.slds-radio_faux` |
| Summary | No description available |
| Restrict | `.slds-radio__label` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-radio__label` |
| Summary | No description available |
| Restrict | `.slds-radio` label |
| | |

| | |
|-------|-------|
| Selector | `.slds-radio` |
| Summary | Initializes radio button |
| Support | dev-ready |
| Restrict | span |
| Variant | true |
| | |

#####* Users can interact with radio buttons using a mouse by clicking the radio button or its label.

##* **Tab:** Navigate into and out of radio groups.
* **Arrow keys:** Move through available options, automatically selecting the newly focused item.
* **Spacebar:** Used to select an option.

###* Designers ensure that radio buttons are large enough to be easily clickable and have sufficient contrast against the background.

######* Ensure content for radio buttons is concise and descriptive, providing clear choices for users.
* All radio groups marked as required with an * must have an accompanying legend.
**Example:** * denotes a required field

###* Ensure that each radio button has an accessible name and that the group label provides context for the options.

###* Ensure that radio button labels and group labels are translatable and adapt to different languages and text directions.

---
*Generated from SLDS Rules Generator*
