# Rich Text Editor

## Rich Text Editor

###Use the rich text editor to enable users to create text input and format it with advanced styling options. It’s ideal for creating clear and engaging content, such as knowledge articles, emails, or detailed descriptions in records.

* The rich text editor provides users with a customizable toolbar to apply formatting to text in Salesforce products.
* Often used in components like email composers, knowledge article editors, and custom forms.
* Enhances efficiency by enabling users to format text input directly in the user interface.

#####* Use the rich text editor for tasks that require formatted text.
* Keep the toolbar simple. Include only the features that are necessary for the user’s tasks.

##* Avoid using the rich text editor for simple text inputs where formatting isn’t required.
* Don’t include it in workflows where plain text or structured fields are more appropriate.

###| **Base**  A content editor with formatting options such as bold, italic, underline, and lists. Can also include options for inserting images, tables, and hyperlinks, suitable for use cases like knowledge articles or marketing emails. |   |
| --- | :---: |

#########* Supports fluid width and responsive behavior.
* Minimum recommended width is 300px to make the editor easy to use.
* Make sure the editor fits correctly in containers.

####* Limit character count if the editor is used in constrained spaces.
* Use line spacing and font sizes that improve readability.

#####1. **Default:** The initial state before user interaction. Include placeholder content to guide users if needed.
2. **Focus**: Highlights the input field when it receives focus.
3. **Error:** Shows an error message when input data fails validation criteria. It’s recommended to add an error icon to your error message.
4. **Disabled:** Color changes to light gray to show it’s not usable and the field doesn't receive focus.

##* **Click**: Activates the toolbar or applies formatting.
* **Keyboard shortcuts**: Supports standard shortcuts, such as Ctrl+B for bold and so on.

##* Place the editor close to the context of use, such as below a title or subject field.
* Avoid separating the editor from related components.

##The toolbar adjusts its layout for smaller screens.

##Placeholder text, such as "Start typing..." appears in the content area by default.

##Input validation isn't built-in—your component must provide logic. Use best practices such as validating required fields on form submission, and showing inline error messages for unsupported content.

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
| Selector | `.slds-rich-text-area__content` |
| Summary | No description available |
| Restrict | `.slds-rich-text-editor` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-has-error` |
| Summary | No description available |
| Restrict | `.slds-rich-text-editor` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-has-focus` |
| Summary | No description available |
| Restrict | `.slds-rich-text-editor` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-rich-text-editor__select_xx-small` |
| Summary | No description available |
| Restrict | `.slds-rich-text-editor__select` .slds-combobox__form-element |
| | |

| | |
|-------|-------|
| Selector | `.slds-rich-text-editor__select_x-small` |
| Summary | No description available |
| Restrict | `.slds-rich-text-editor__select` .slds-combobox__form-element |
| | |

| | |
|-------|-------|
| Selector | `.slds-rich-text-editor__select` |
| Summary | No description available |
| Restrict | `.slds-rich-text-editor__toolbar` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-rich-text-editor__toolbar-bottom` |
| Summary | No description available |
| Restrict | `.slds-rich-text-editor__toolbar` |
| | |

| | |
|-------|-------|
| Selector | `.slds-rich-text-editor__col_grow` |
| Summary | Container for Rich Text Editor Toolbar |
| Restrict | `.slds-rich-text-editor__toolbar` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-rich-text-editor__col` |
| Summary | Container for Rich Text Editor Toolbar |
| Restrict | `.slds-rich-text-editor__toolbar` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-rich-text-editor__toolbar` |
| Summary | No description available |
| Restrict | `.slds-rich-text-editor` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-rich-text-editor__toolbar_detached` |
| Summary | No description available |
| Restrict | `.slds-rich-text-editor_toolbar-only` .slds-rich-text-editor__toolbar |
| | |

| | |
|-------|-------|
| Selector | `.slds-rich-text-editor_toolbar-only` |
| Summary | No description available |
| Restrict | `.slds-rich-text-editor` |
| | |

| | |
|-------|-------|
| Selector | `.slds-rich-text-editor` |
| Summary | No description available |
| Support | dev-ready |
| Restrict | div |
| Variant | true |
| | |

#####* **Interaction Details**: Users can interact with the Rich Text Editor toolbar, text area, and additional options using point-and-click actions.
* **Cursor Changes**: Cursor changes dynamically based on the context (e.g., text cursor when editing text, pointer cursor over toolbar buttons).
* **Considerations**: All interactive elements in the toolbar and text area should have a visible focus state to aid users transitioning between mouse and keyboard use.

##**Keyboard Commands Table**:

| **Action** | **Keyboard Command** |
| :--- | :--- |
| Navigate toolbar | Tab / Shift + Tab |
| Activate a button | Enter / Spacebar |
| Move between toolbar items | Left / Right Arrow Keys |
| Open dropdown menus | Enter |
| Select dropdown option | Down Arrow / Up Arrow + Enter |
| Bold/Italicize/Underline | Ctrl + B/I/U (Windows) or Cmd + B/I/U (Mac) |
| Add link | Ctrl + K (Windows) or Cmd + K (Mac) |
| Undo/Redo | Ctrl + Z/Y (Windows) or Cmd + Z/Y (Mac) |

**Initial Focus**:

* Initial focus defaults to the first item in the toolbar (font selector).

##* **Screen Readers**: The Rich Text Editor provides ARIA labels for toolbar buttons, dropdowns, and text areas. Developers should ensure all labels are descriptive and avoid using ambiguous terms like "Button 1."
* **Magnifiers**: Ensure high-contrast mode is compatible with all UI elements, including text highlights and selected toolbar icons.
* **Speech Recognition Software**: Labeling and focus management are critical to enable effective voice commands for toolbar functions.
* **Alternative Input Devices**: For users relying on sip-and-puff or other devices, ensure logical tab order and shortcuts.

###* Ensure toolbar icons and text area elements are distinguishable and have sufficient color contrast (WCAG AA or better).
* Include visual indicators for focus, hover, and selected states to guide users relying on visual aids.
* Collaborate with developers to maintain logical reading and navigation order.
* Avoid overcrowding the toolbar to minimize cognitive load.

######* Avoid using color alone to convey meaning. Use alternative text for embedded images or videos.
* Include meaningful link descriptions instead of "Click Here."

###* Toolbar buttons, dropdowns, and text area include ARIA attributes for accessibility.
* Example: Each button must include an aria-label (e.g., "Bold", "Italic", "Insert Link").

###* The Rich Text Editor supports localization and must align with Salesforce's language and region settings.
* Ensure language directionality (e.g., right-to-left for Arabic or Hebrew) is maintained..

---
*Generated from SLDS Rules Generator*
