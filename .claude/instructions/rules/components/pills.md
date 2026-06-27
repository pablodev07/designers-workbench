# Pills

## Pills

###* Pills display compact labels for items, such as objects or selections, which a user can quickly add, view, or remove.
* Pills can contain various elements beyond plain text, including icons, avatars, and links.
* Pills help users manage multiple selections in a clear, concise way within limited screen space.

##* Use pills to display selected tags, filters, or items in limited space.
* Make sure remove button icons are visible and accessible to enable users to easily remove items.
* Make pills concise—use brief, clear labels that are immediately understandable.
* Use a listbox of pills to show a list of items selected from a multi-select combobox, lookup, or picklist.

##A [pill container](https://developer.salesforce.com/docs/component-library/bundle/lightning-pill-container/example) is used to group and display multiple pills in a row. This allows users to interact with individual pills (for example, to remove them) or manage the entire group within the container.

The pill container can become collapsible to show only a single line of pills initially. If the pills exceed the container's width, an expand button labeled with the number of additional pills (such as "+3 more") appears. Users can click this button to expand the container and view all the pills.

##* Don't use pills for long text labels or complex information.
* Don’t use pills for primary navigation or actions that don’t involve quick additions/removals.
* Avoid overusing pills in a crowded layout—too many pills can create visual clutter.

###| **Base**  Includes a remove button icon after the label text that allows users to remove the pill. Can contain an avatar or icon and the label text can be a link.  |  *Base pill with label and remove action (X).* |
| --- | :---: |
| |   |

#########Pills are larger on devices that use touchscreens to make it easier to tap them with a finger.

####* Make pill labels concise, ideally one or two words.
* Use sentence case for pill labels unless a word in the label is a proper noun, which has an initial capital.

#####1. **Default:** The pill appears with a label and a remove button icon.
2. **Hover**: The pill background slightly changes color on hover to show interactivity.
3. **Focus**: A focus ring appears outside of the pill border when using keyboard navigation.
4. **Error:** Includes an error icon before the label and uses error state coloring.
    1. A pill can show an error to indicate an issue with the selected item. Issues can include invalid input, duplicated selection, missing data, a failure to process the selection, or the user doesn't have permission to modify the pill.

##| **A pill has two clickable elements.** 1. The pill container 2. The remove button icon The entire pill is clickable if linked. The remove button icon has a separate removal trigger.  |  *Pill with clickable elements numbered - 1. Pill container, 2. Remove button.* |
| --- | :---: |

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
| Selector | `.slds-listbox` [role="listbox"] |
| Summary | A listbox of Pills is a way to display a list of selected options when performing user input |
| Support | dev-ready |
| Restrict | `.slds-pill` |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-has-error` |
| Summary | No description available |
| Restrict | `.slds-pill` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-pill__action` |
| Summary | No description available |
| Restrict | `.slds-pill_link` a |
| | |

| | |
|-------|-------|
| Selector | `.slds-pill_link` |
| Summary | No description available |
| Restrict | `.slds-pill` |
| | |

| | |
|-------|-------|
| Selector | `.slds-pill__remove` |
| Summary | No description available |
| Restrict | `.slds-pill` button, `.slds-pill` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-pill__icon_container` |
| Summary | No description available |
| Restrict | `.slds-pill` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-pill__label` |
| Summary | No description available |
| Restrict | `.slds-pill` a, `.slds-pill` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-pill_bare` |
| Summary | No description available |
| Restrict | `.slds-pill` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-pill` |
| Summary | Initializes pill |
| Support | dev-ready |
| Restrict | span |
| Variant | true |
| | |

###* Only one pill can receive focus at a time.
* The remove button icon is a focusable element and click target.

##| **Key** | **Action** | **Description** |
| --- | --- | --- |
| Tab | Navigate | Moves focus to the next interactive element. |
| Shift + Tab | Navigate backward | Moves focus to the previous interactive element. |
| Enter or Space | Select | Activates either the link or the remove button icon—whichever is focused. |
| Delete | Remove (if enabled) | Removes the Pill without needing to click on the close icon. |

* Ensure the pill is included in the tab order and receives focus in a logical sequence, improving navigation for users relying on keyboard interaction.
* If a pill doesn't have a link, the only focusable item is the remove button.
* The first pill in the list should receive focus initially 
* Right arrow key will move focus to the next pill in the list
* Left arrow key will move focus to the previous pill in the list
* Left arrow key when on the first pill should cycle user focus to the last pill
* Right arrow key when on the last pill should cycle user focus to the first pill
* On removing of the pill, the focus should then be placed on the nearest pill:
    * When on the last pill, place user focus on the first pill 
    * When on the first pill, place user focus on the next pill 
    * When on the only pill, place user focus on the listbox or any input element the pill might be associated with

##**Screen Readers**: Pills should have descriptive labels (e.g., `aria-label)` to convey purpose when read aloud by screen readers.

**Alternative Input Devices**: Users with devices like speech recognition or sip-and-puff devices should be able to focus on and activate pills. Labels should be clear and intuitive to aid users who may rely on voice commands.

**Braille Displays**: Pills with appropriate ARIA labels provide readable content to braille displays, ensuring users understand each pill’s purpose.

######* Use sentence case on pill text.
* Keep Pill labels concise and meaningful.
* Avoid duplicative or redundant text in Pill labels and tooltips.
* Provide error messages for invalid inputs (e.g., a duplicate Pill) that are clear and accessible via screen readers.
* Include labels that clearly communicate the pill’s purpose:
    * When using `lightning-avatar`, use the `alternative-text` attribute to describe the avatar, such as a user's initials or name. This description provides the value for the alt attribute in the `img` HTML tag.
    * When using `lightning-icon`, use the `alternative-text` attribute to describe the icon. For example, specify "Account" instead of "Pill icon". This description is used as assistive text on the pill.
    * Pills should have descriptive `aria-label` attributes.
        * Example: For a removable Pill, use `aria-label="Remove tag 'Marketing'"` or a similar structure.
    * Custom Pills may require additional labeling for unique behaviors.

###* Support multilingual text and adapt to right-to-left (RTL) languages seamlessly.
* Dynamically resize for longer labels in languages such as German or Arabic.

---
*Generated from SLDS Rules Generator*
