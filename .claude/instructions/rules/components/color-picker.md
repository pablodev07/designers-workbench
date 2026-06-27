# Color Picker

## Color Picker

###* With the color picker, you can select colors for use in different Salesforce components and customizations.
* Commonly used in Salesforce to add brand color selections or personalize interface elements.
* Select from a standard color palette or use the color input field for custom colors.
* The color picker is composed of input, popover, tabs, and button components.

#####* Use the color picker when you want to give users control over visual customization, like adding branding elements.
* Limit custom color options with a predefined color palette to encourage brand consistency and avoid overly complex or inaccessible color choices.
* Make sure that selected colors meet contrast standards for readability and accessibility.

##* Don’t use the color picker for selecting text colors on dynamic content, as it can reduce readability.
* Don’t overwhelm users with a large palette—limit choices to promote a cleaner, more usable interface.
* Avoid embedding the color picker within multi-step workflows or modals where it can feel intrusive.

###| **Base **  A set of predefined colors that align with the Salesforce branding guidelines.  **Use case** When Salesforce brand alignment is critical. |  *Example of a base color picker closed (left) and open (right).*  |
| --- | :---: |
| |   |
| **Custom **  A free-form color selection tool that allows users to mix and select any color using a spectrum, slider, or input field.  **Use case**  Use when users need to define unique or brand-specific colors that aren't available in a predefined palette, such as creating themes, charts, or custom visuals. |  *Example of a custom color picker closed (left) and open (right).* |
| |   |
| **Predefined**  Predefined offers an initial selected color, a curated set of swatches, and an optional custom color input.  **Use case** Use when maintaining visual consistency is important—such as adhering to a design system or brand palette—while still giving users room for customization when needed.   |  *Example of a predefined color picker closed (left) and open (right).* |
| |   |
| **Swatch**  Includes both predefined colors and a custom input option.  **Use case** When the need for consistency and flexibility coexists. |  *Example of a swatch color picker closed (left) and open (right).* |

##########The color picker is fixed-width and has a compact design so it can fit into small spaces within forms or settings panels.

#####Make sure color values (hex or RGB) are formatted accurately and are easy to read.

###Labels tell users what information is needed in each field.

###* Use clear, descriptive names that make sense on their own. For example, use “Email Address” instead of just “Email.”
* Aim for concise labels—one or two words if possible.
* Use Title Case. Capitalize the main words, for example “First Name” and “Phone Number.”
* Make sure every field has a label. This helps screen readers identify fields correctly. If you hide labels visually, use `aria-label` to make sure they’re accessible.

#####* **Default:** The open popover shows available colors with custom input fields.
* **Hover:** The cursor changes to a pointing hand over the color swatch.
* **Active:** Displays the selected color in the preview area.
* **Disabled:** Turns input fields gray if customization is unavailable to the user.

##**Triggers or Clickable Areas:** Clicking on the input activates the color picker. Clicking on a color swatch activates the selected color.

##Position the color picker within settings or customization areas, generally aligning it near relevant objects like themes or dashboard widgets. Avoid placing it in areas unrelated to customization.

##If loading is needed for custom palettes, show a loading spinner to indicate progress.

##For best usability, show a default color within the component, giving users a reference point.

##Provide clear validation messages for incorrect hex or RGB values to help users correct their entries. For example: “Invalid color code. Please enter a hex code like #FFFFFF.”

*Image Placeholder: Validation message displayed when an invalid color is entered.*

* **Description:** Illustration showing the color picker with a validation message for an invalid color code.
* **Caption:** "Example of validation message in the color picker."

**Alt Text:** "Illustration of the color picker with a validation message for incorrect input."

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
| Selector | `.slds-color-picker_swatches-only` |
| Summary | Swatches Only UI |
| Support | dev-ready |
| Restrict | `.slds-color-picker` |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-color-picker_predefined-only` |
| Summary | Swatches Only UI |
| Support | dev-ready |
| Restrict | `.slds-color-picker` |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-color-picker_custom-only` |
| Summary | Swatches Only UI |
| Support | dev-ready |
| Restrict | `.slds-color-picker` |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-color-picker__selector-footer` |
| Summary | Footer for the Color Selector Picker |
| Restrict | `.slds-color-picker__selector` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-color-picker__custom-inputs` |
| Summary | The group of direct input elements |
| Restrict | `.slds-color-picker__custom` > div |
| | |

| | |
|-------|-------|
| Selector | `.slds-swatch` |
| Summary | A swatch |
| Restrict | `.slds-color-picker__swatch` span, `.slds-color-picker__summary-button` span, `.slds-color-picker__hue-and-preview` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-color-picker__hue-slider` |
| Summary | The slide input that controls the hue |
| Restrict | `.slds-color-picker__hue-and-preview` input |
| | |

| | |
|-------|-------|
| Selector | `.slds-color-picker__hue-and-preview` |
| Summary | Container element for the hue slider and preview swatch |
| Restrict | `.slds-color-picker__custom` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-color-picker__range-indicator` |
| Summary | true |
| Restrict | `.slds-color-picker__custom-range` > a |
| | |

| | |
|-------|-------|
| Selector | `.slds-color-picker__custom-range` |
| Summary | Custom picker range element |
| Restrict | `.slds-color-picker__custom` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-color-picker__custom` |
| Summary | Custom picker selection container |
| Restrict | `.slds-color-picker__selector` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-swatch` |
| Summary | A swatch |
| Restrict | `.slds-color-picker__swatch` span, `.slds-color-picker__summary-button` span, `.slds-color-picker__hue-and-preview` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-color-picker__swatch` |
| Summary | Color Picker swatch |
| Restrict | `.slds-color-picker__swatches` li |
| | |

| | |
|-------|-------|
| Selector | `.slds-color-picker__swatches` |
| Summary | Swatch container |
| Restrict | `.slds-color-picker__selector` ul |
| | |

| | |
|-------|-------|
| Selector | `.slds-color-picker__selector` |
| Summary | The selector subcomponent. Extends upon a `.slds-popover` |
| Restrict | `.slds-color-picker` div, `.slds-color-picker` section |
| | |

| | |
|-------|-------|
| Selector | `.slds-color-picker__summary-input` |
| Summary | Input field for summary UI |
| Restrict | `.slds-color-picker__summary` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-color-picker__button` |
| Summary | Button that toggles the Color Picker Selector |
| Restrict | `.slds-color-picker__summary` .slds-button |
| | |

| | |
|-------|-------|
| Selector | `.slds-color-picker__summary-label` |
| Summary | Label for summary input |
| Restrict | `.slds-color-picker__summary` > label |
| | |

| | |
|-------|-------|
| Selector | `.slds-color-picker__summary` |
| Summary | 'Summary' element for color selection. |
| Restrict | `.slds-color-picker` > div |
| | |

| | |
|-------|-------|
| Selector | `.slds-color-picker` |
| Summary | Fully featured color picker, with swatches and a custom color config |
| Support | dev-ready |
| Restrict | div |
| Variant | true |
| | |

#####Users can interact with the Color Picker component using a mouse in the following ways:

* **Click to Select Color**: Users can click on the color swatches to select a color.
* **Hover States**: When the user hovers over a color swatch, a visual indication (like a change in border or shadow) should be provided to signify that it is selectable.
* **Tooltips**: If applicable, tooltips can appear on hover, providing additional information about each color.

##Users relying solely on a keyboard can interact with the Color Picker through the following commands:

| **Action** | **Key Command** | **Description** |
| :--- | :--- | :--- |
| Navigate Colors | Arrow Keys (Left/Right/Up/Down) | Users can navigate through the available color options using arrow keys. |
| Select Color | Enter or Space | Activates the currently focused color swatch when selected. |
| Close Color Picker | Esc | Closes the Color Picker dialog if it is open. |

##For users employing assistive devices:

* **Screen Readers**: The Color Picker should be properly labeled, allowing screen readers to announce the currently selected color and available options clearly.
* **Magnifiers**: Ensure that the component maintains clarity and usability when magnified. Color swatches should remain distinguishable.
* **Alternative Input Devices**: Users with devices like sip-and-puff can navigate and select colors if the component supports standard input events.

###Designers must consider accessibility from the outset by:

* **Color Contrast**: Ensuring sufficient contrast between text and background colors for readability.
* **Visible Focus States**: Providing a clear visual indication of which color swatch is currently focused.
* **Color-Dependent Functionality**: Avoiding color as the only means of conveying information. Use text labels or icons to supplement color information.

######Content must adhere to the following accessibility requirements:

* **Descriptive Labels**: Each color swatch should have a clear and descriptive label to assist users who rely on screen readers.
* **Error Messages**: If a user selects an invalid color or encounters an error, provide clear, concise error messages that describe the issue and how to resolve it.

##* Account for right-to-left (RTL) languages (e.g., Arabic, Hebrew) by ensuring that content dynamically adapts to RTL layouts.

---
*Generated from SLDS Rules Generator*
