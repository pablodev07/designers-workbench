# Slider

## Slider

###* Used for adjusting numerical values within a defined range.
* Commonly found in settings, filters, and configuration panels.
* Provides a visual and interactive way to select a value instead of typing.
* Supports customization options such as step intervals and min/max values.

#####* Using the slider component when selecting a value within a range is easier than typing.
* Provide clear min and max labels for better usability.
* Use step intervals when precision input is required.
* Ensure the slider is large enough to be easily interacted with on touch devices.
* Use a tooltip or inline value display to show the selected value.

##* When users need to input an exact number (use an input field instead).
* When the range is too large, making fine-tuned selection difficult.
* If the value change requires real-time feedback that may slow performance.

###|  **Horizontal (default)**  A slider that allows users to select a value by moving a handle left or right along a horizontal track.   |   |
| --- | :---: |
| |   |
|  **Vertical**  A slider that allows users to select a value by moving a handle up or down along a vertical track.   |   |
| |   |

#######The slider comes in many sizes: x-small, small, medium, and large. The default slider size takes up the width of the view port.

####* Labels should clearly indicate the purpose.
* Supporting text messages should be concise and informative.

########* **Default**: Interactive and draggable.
* **Hover**: Highlights the handle.
* **Active**: Handle is being moved.
* **Disabled**: Greyed out and non-interactive.

**Bar**

* **Default:** Displays the selectable range with a standard color and style.
* **Hover:** Changes color slightly or shows a shadow when hovered.
* **Active:** Updates dynamically as the user moves the slider.
* **Disabled:** Appears grayed out and non-interactive.
* **Read-Only:** Visible but cannot be adjusted.
* **Error:** Highlights in red or shows an error message if the value is invalid.

##* **Click & Drag**: Moves handle to adjust the value.
* **Keyboard Navigation**: Arrow keys to fine-tune selection.

##* **Horizontal**: A slider that allows users to select a value by moving a handle left or right along a horizontal track.
* **Vertical:**  A slider that allows users to select a value by moving a handle left or right along a vertical track.

##Width adapts based on container size.

##* Enforce min/max constraints.
* Provide error messaging for invalid selections.

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
| Selector | `.slds-slider_vertical` |
| Summary | Modifier that makes the slider vertical |
| Restrict | `.slds-slider` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-slider__value` |
| Summary | Element that contains value of input range |
| Restrict | `.slds-slider` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-slider__range` |
| Summary | Range track for slider |
| Restrict | `.slds-slider` input |
| | |

| | |
|-------|-------|
| Selector | `.slds-slider` |
| Summary | Initializes slider component |
| Support | dev-ready |
| Restrict | div |
| Variant | true |
| | |

#####* Users can drag the handle to adjust the value.

##* **Tab** moves focus to the handle.
* While focused, **Left**, **Right**, **Up**, and **Down** keys increment/decrement the slider.

##* Screen readers should announce current value and range.

###* Ensure sufficient contrast between track and handle.
* Provide clear focus indicators for keyboard users.

###* Implement `aria-valuenow`, `aria-valuemin`, and `aria-valuemax` attributes.
* Ensure the component is navigable via keyboard.
* Use `aria-labelledby` for clear descriptions.

###* Use concise labels and instructions.

###* Ensure proper formatting for different number formats and RTL languages.

---
*Generated from SLDS Rules Generator*
