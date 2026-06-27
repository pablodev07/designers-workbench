# File Selector

## File Selector

###* Used to upload files for tasks such as attaching documents to records or sharing media.
* Drag files onto the component or click the Upload Files button to browse your device to find and upload files.
* Provides immediate feedback on the upload status.

##* Place the file selector prominently on the page to make it easy to find.
* To guide users, add clean labels and instructions next to the file selector. 
* Use validation messages to communicate with users about file size limits or unsupported formats.
* Provide users with feedback during the upload process.

##* Don't use the file selector for actions that aren't related to files.
* Don't place the file selector next to unrelated input fields.

###| **Base File Selector**  A basic file upload opens a file browser or allows for drag and drop. **Use case** To upload limited file types in forms, such as a single document for HR onboarding.  |   |
| --- | :---: |
| |   |
| **Image File Selector**  An input field with a file selector that accepts a single PNG, JPG, or ZIP file. **Use case** As a dedicated drop zone for single image files.  |   |

###########The file selector component adapts to fit any container, so your users have a consistent experience, no matter their screen size or layout.

###########The image file selector's width adjusts to fill the available space.

##* **Field Labels**: Use short, descriptive phrases that clearly indicate the purpose, such as “Upload Document” or “Attach File”.
* **Button Text**: Use clear, actionable language like “Select File” or “Browse”. 
* **Instructions**: If needed, provide brief instructions for specific actions.
* **Supporting Text**: Keep error messages direct and helpful. Avoid technical jargon.

########* **Default:** Standard appearance when no files are uploaded.
* **Hover:** Buttons highlight to show interactivity.
* **Drag over:** The drop zone borders change color to signal that the file can be dropped.
* **Drag over with error:** The drop zone shows a visual indicator, such as an error icon, to signal that the file can’t be dropped.
* **Disabled:** The component is unavailable if file uploads aren’t allowed.
* **File uploaded:** Shows a confirmation message that the file has been successfully uploaded.
* **Error:** If the file size or type is invalid, an error message appears below the component.

##* **Triggers:** Clicking the button or dropping a file into the drop area activates the upload.
* **Drag:** Supports moving files into the drop zone.
* **Expanded or collapsed:** Optional behavior, users can switch file previews on and off.
* **Image File Selector:** Optional cropping control.
* **Integrated File Selector****:** Designed to be used in a form or workflow, so users can upload files directly as part of tasks like completing a form or submitting a request. This turns an entire container, such as a modal, composer, or page, into a file drop zone.

##During file upload, a spinner icon or progress bar indicates the status of the upload.

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
| Selector | `.slds-file-selector__text_integrated` |
| Summary | No description available |
| Restrict | `.slds-file-selector_integrated` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-file-selector__body_integrated` |
| Summary | No description available |
| Restrict | `.slds-file-selector_integrated` label |
| | |

| | |
|-------|-------|
| Selector | `.slds-has-drag-over` |
| Summary | No description available |
| Restrict | `.slds-file-selector__dropzone_integrated` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-has-drag` |
| Summary | No description available |
| Restrict | `.slds-file-selector__dropzone_integrated` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-file-selector__dropzone_integrated` |
| Summary | No description available |
| Restrict | `.slds-file-selector_integrated` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-file-selector_integrated` |
| Summary | No description available |
| Support | dev-ready |
| Restrict | `.slds-file-selector` |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-file-selector_images` |
| Summary | No description available |
| Support | dev-ready |
| Restrict | `.slds-file-selector` |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-file-selector__text` |
| Summary | No description available |
| Restrict | `.slds-file-selector` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-file-selector__body` |
| Summary | No description available |
| Restrict | `.slds-file-selector` label |
| | |

| | |
|-------|-------|
| Selector | `.slds-file-selector_files` |
| Summary | No description available |
| Restrict | `.slds-file-selector` |
| | |

| | |
|-------|-------|
| Selector | `.slds-file-selector__button` |
| Summary | No description available |
| Restrict | `.slds-file-selector` button, `.slds-file-selector` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-file-selector__input` |
| Summary | No description available |
| Restrict | `.slds-file-selector` input |
| | |

| | |
|-------|-------|
| Selector | `.slds-has-drag-over` |
| Summary | No description available |
| Restrict | `.slds-file-selector__dropzone` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-file-selector__dropzone` |
| Summary | No description available |
| Restrict | `.slds-file-selector` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-file-selector` |
| Summary | No description available |
| Support | dev-ready |
| Restrict | div |
| Variant | true |
| | |

#####* Users can interact with the File Selector component using a mouse by clicking the Button to open the file dialog. After selecting files, users can click the “Remove” icon to delete a selected file.
* The cursor will change to indicate clickable areas, such as a pointer cursor when hovering over interactive elements.

##The component supports keyboard interactions, allowing users to navigate through the File Selector using standard keyboard commands.

| **Action** | **Key Command** |
| --- | --- |
| Focus on the component | Tab |
| Open file dialog | Enter/Space |
| Navigate through files | Arrow Keys |
| Submit the selection | Enter |

When the component is loaded, the initial focus should be set on the Button, making it easy for keyboard users to begin interaction.

##* Users relying on assistive devices, such as screen readers or speech recognition software, will navigate the component through verbal commands or keyboard shortcuts.
* Screen readers should announce the File Selector’s purpose and current state (e.g., how many files have been selected).
* Magnifiers and braille displays provide tactile feedback and visual enhancements to aid in interaction.

###* All interactive elements are clearly labeled and distinguishable.
* Visual focus indicators are present to show users where they are within the component.
* Sufficient color contrast is maintained to ensure readability for users with visual impairments.
* Alternative text is provided for any icons or images used within the File Selector.

######* Clear and concise instructions regarding file upload processes.
* Error messages must be descriptive and provide guidance on how to resolve issues (such as file size limits).
* Any labels or instructional text must be legible and easy to understand.

###The File Selector component should include appropriate accessibility labels for interactive elements such as [buttons](https://www.lightningdesignsystem.com/2e1ef8501/p/7733f8) and [inputs](https://www.lightningdesignsystem.com/2e1ef8501/p/8268ee).

###Ensure that the File Selector component can accommodate various languages and regional settings, including proper translations of labels and error messages.

---
*Generated from SLDS Rules Generator*
