# Textarea

## Textarea

###When users need space for detailed input, like comments or descriptions, use textarea fields. Textarea fields are built for multi-line text input and are perfect for detailed entries or notes. They allow for flexibility in content length, and they can include a character limit if needed.

* The textarea component enables users to enter longer responses or comments.
* Resizable field with a label and optional character counter.
* Can be customized with validation and character limits.

#####* Use for free-form feedback, messages, or informational input.
* Use descriptive, concise field labels so users know what content is expected.
* Add supportive text to guide users when the textarea has a character count limit.
* Use where there's space for users to expand the field to make it easier to see and use.

##* Don’t use for single-line text inputs—use a text input component instead.
* Avoid using textarea for precise structured input such as a phone number.
* Don’t use if the field size must remain fixed without the option to resize.

###| **Base**  The default textarea, ideal for most long text inputs.  |  *Base textarea component type* |
| --- | :---: |

#########* Textareas are responsive—the width adjusts automatically to fit various screens.
* Users can adjust the height by dragging the corner grabber up and down.

#######Labels tell users what information is needed in each field.

##* Use clear, descriptive names that make sense on their own. For example, use “Email Address” instead of just “Email.”
* Aim for concise labels—one or two words if possible.
* Use title case. Capitalize the main words, for example, “First Name,” “Phone Number.”
* Give every field a label to help screen readers identify fields correctly. If hiding labels visually, use aria-label to make the labels accessible.

###Placeholder text provides a hint or example to guide the user on what type of input is expected.

##* Use text that shows users the expected input, for example, "Write a brief comment..." for a comment field.
* Placeholder text can't replace the label. When the user starts typing, the placeholder text disappears, which can cause confusion.
* Use placeholder text to guide, not instruct. Complex instructions belong in support text or tooltips.
* Make sure placeholder text has sufficient color contrast for readability, at least 4.5:1 for WCAG compliance.

###Error messages, in the form of supporting text, alert users to an issue with their input and guide them on how to correct it.

##* Error messages clearly explain what’s wrong and how to fix it.
* Use a neutral, helpful tone—avoid blaming language.
* When possible, show error messages as soon as the user enters invalid data rather than waiting until form submission.
* Use `aria-live="assertive"` so screen readers can read error messages aloud as soon as they appear.
* Associate support text and error messages with the textarea field using `aria-describedby` so screen reader users know which field the error relates to.

#####1. **Default:** The initial state before user interaction. Include placeholder content to guide users if needed, but not to replace the field label.
2. **Active/Focus:** When the input is activated, the focus indicator appears and placeholder text disappears.
3. **Disabled:** Color changes to light gray to show it’s not usable and the field doesn't receive focus.
4. **Required:** Displays a red asterisk before the label to indicate the input is required to proceed.
5. **Error:** Shows an error message when input data fails validation criteria. It’s recommended to add an error icon to your error message.

***Hover vs. Focus:*** *When you hover your mouse over an interactive element, it triggers a hover state. This is a visual clue that you're hovering over the element. Similarly, when you use a keyboard or voice to select an element, it triggers a focused state. This is a visual clue that the element is selected.*

##**Click**: Focuses the input field and activates typing mode.

**Tab**: Navigates to the input field.

**Resizing:** Allows users to resize the input box.

##When the component's height is fixed, a scrollbar appears. Users can scroll to view any text that's been hidden.

##No pre-selected content is typically used in the textarea component, except for placeholder text, which guides user input.

##Validation in textarea is in two categories:

1. **Required field:** Users must provide input to the field before submitting a form.
2. **Character limits:** Users must enter content that meets a minimum or maximum number of characters, or is between minimum and maximum character limits.

###* Error messages tell users exactly what’s wrong and how to fix it.

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
| Selector | `.slds-textarea` |
| Summary | Initialize textarea |
| Support | dev-ready |
| Restrict | textarea |
| Variant | true |
| | |

#####* Users can click the textarea to activate it and start typing. 
* If enabled, users can click and drag the resize handle to adjust the size of the textarea. 
* The mouse pointer changes to a text cursor (I-beam) when hovering over the textarea.

##* **Tab:** Moves the focus to the textarea.
* **Shift + Tab:** Moves the focus to the previous focusable element.
* **Enter:** Submits a form if used within a form context.
* **Arrow Keys:** Navigate through text within the textarea.

##* **Screen Readers:** The textarea announces its label, character limits (if applicable), and error state. Ensure ARIA attributes are correctly set for labels and validation messages.
* **Speech Recognition Software:** Users can activate the textarea using voice commands and dictate text.
* **Braille Displays:** textarea are represented on refreshable braille displays with labels and content.

###* Ensure that each textarea has a clear and descriptive label that helps users understand the type of information required.
* Don’t rely solely on placeholder text for guidance, as it disappears when users start typing.
* Always pair textareas with a label.
* If character limits are included, ensure the counter updates dynamically as users type.

######* Provide clear, concise, and actionable error messages that guide the user to resolve input issues.
* Include supporting text that remains visible at all times, not just when the user is interacting with the input field.
* Use simple language and avoid complex terms to make content more accessible.
* All form elements marked as required with an * must have an accompanying legend.
**Example:** * denotes a required field

###ARIA Attributes:

* `aria-labelledby`: Associates the label with the Textarea.
* `aria-describedby`: Links to help text or error messages.
* `aria-invalid`: Indicates whether the input is invalid.

###* Textarea supports Unicode, allowing users to enter content in any supported language.
* Right-to-left (RTL) languages should be tested to ensure proper alignment and mirroring.
* Error messages and placeholder text must be localized.

---
*Generated from SLDS Rules Generator*
