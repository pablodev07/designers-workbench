# Accordion

## Accordion

###Accordions help users focus by enabling them to show and hide content.

Accordions enable you to:

* Make complex information easier to understand by grouping similar content together.
* Reduce the length of your content so customers can see it all without scrolling too much.
* Show and hide content by expanding and collapsing sections. Typically, only one section is expanded at a time.
* Create a streamlined page layout that helps users quickly find the information they need.
* Show only the most relevant data to avoid overwhelming your customers.

Use the accordion to efficiently organize large amounts of content. Only one section of the accordion can be opened at a time by default. When you open a new section, the currently open section closes. You can change the settings to enable multiple sections to be open simultaneously. 

Accordions are most useful when you want only one section of content to be visible at a time, which helps keep pages clean and uncluttered. 

##The Salesforce Lightning Design System (SLDS) has three types of components that can show and hide content: Accordion, [Expandable Section](https://v1.lightningdesignsystem.com/components/expandable-section/), and [Summary Detail](https://v1.lightningdesignsystem.com/components/summary-detail/). Each type has an ideal use case based on how much information you want to show and how users interact with the data.

| **Component** | **Best For** | **Structure** | **Interaction** |
| --- | --- | --- | --- |
| **Accordion** | Multiple related sections | Vertical stack, one open at a time | Expands/collapses to keep content manageable |
| **Expandable Section** | Isolated, optional details | Standalone | Independent visibility control |
| **Summary Detail** | Compact summary with optional details | Summary with expandable details | Quick snapshot with more detail on demand |

##* Use accordions if information sections are related, and it’s not necessary for users to view all open sections simultaneously.
* Each section's header clearly describes its content so users can quickly find what they need.
* Keep the number of sections as small as possible, and in a logical order. Too many accordion sections on a page can overwhelm users.
* You can set an accordion section to be open by default. If users often want to see the same information, consider expanding that section by default.

##* Content is equally important and needs to be viewed simultaneously.
* Users need quick access to all sections without extra interactions.
* For a single accordion-like component, refer to Related Components for an alternative option.

###| **Conditional Accordion** Only one section can be expanded at a time  **Use Case:** Use to help the user concentrate on one section at a time.   |  *An accordion with one section open by default.* |
| --- | :---: |
| |   |
| **Multi-Expand Accordion** Allows multiple sections to be expanded at a time. **Use Case:** If users want to reference more than one section at a time.   |  *An accordion with two sections open at a time.* |
| |   |

###The accordion uses a chevron to show expandable sections separated by a visual divider.

#######You can nest accordions inside accordion sections to create multiple levels in the accordion. The chevron icon is used for all sections and levels.

######**Accordion Title**

* Use title capitalization. 
* Make titles concise but descriptive. For example, instead of "Info," use "Customer Information" to make it easier for users to know what to expect in each section.

#####An accordion component starts with the first section open by default, but you can modify it to expand a specific section upon page load.

1. **Default:** The first section is expanded and all the others are collapsed.
2. **Expanded:** A section that is currently open and has content displayed. Clicking on the accordion section header expands the section
3. **Collapsed:** A section is hidden, waiting for the user to expand it. Clicking on the accordion header collapses the section.
4. **Hover:** The section header content is highlighted when the mouse hovers over it to show that it's interactive. Highlighting changes the chevron and title color.
5. **Focus:** A keyboard user has focused on a section header for navigation. Focus underlines the title of the accordion section.
6. **Disabled:** Disable sections that are unavailable for user interaction. Disabling changes the chevron and title color to a lighter shade.

##| ****Loading**** While content inside an accordion is loading, you can show that data is still being fetched with a spinner or loading message.  |  *A* *spinner* *displayed over the content of an accordion to indicate loading.* |
| --- | :---: |
| |   |
| ****Scrolling**** Enable scrolling when content exceeds the height of the container so users can have access to all of the content.   |  *The body of an accordion can display a scrollbar.* |

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
| Selector | `.slds-is-open` |
| Summary | Toggle visibility of accordion section + rotate icon |
| Restrict | `.slds-accordion__section` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-accordion__content` |
| Summary | Each expandable panel inside of an accordion |
| Restrict | `.slds-accordion__section` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-accordion__summary-heading` |
| Summary | Summary title for each expandable panel inside of an accordion |
| Restrict | `.slds-accordion__section` h2 |
| | |

| | |
|-------|-------|
| Selector | `.slds-accordion__summary-content` |
| Summary | Text of summary title for each expandable panel inside of an accordion |
| Restrict | `.slds-accordion__summary-action` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-accordion__summary-action-icon` |
| Summary | Icon inside of actionable button within an accordion section |
| Restrict | `.slds-accordion__summary-action` svg |
| | |

| | |
|-------|-------|
| Selector | `.slds-accordion__summary-action` |
| Summary | Actionable button inside of accordion summary that would toggle the visibility of each section |
| Restrict | `.slds-accordion__summary` button |
| | |

| | |
|-------|-------|
| Selector | `.slds-accordion__summary` |
| Summary | Summary title for each expandable panel inside of an accordion |
| Restrict | `.slds-accordion__section` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-accordion__section` |
| Summary | Each expandable panel inside of an accordion |
| Restrict | `.slds-accordion` section |
| | |

| | |
|-------|-------|
| Selector | `.slds-accordion__list-item` |
| Summary | List item for each accordion section |
| Restrict | `.slds-accordion` li |
| | |

| | |
|-------|-------|
| Selector | `.slds-accordion` |
| Summary | Initializes an accordion list with more than one section that will have its display toggled by invoking an interaction on the summary title |
| Support | dev-ready |
| Restrict | ul |
| Variant | true |
| | |

#####Users can interact with the Accordion by clicking a section header to expand or collapse its content.

* While hovering on an Accordion section header, the pointer cursor appears.
* While hover on text content within an Accordion, the text cursor appears.

##* **Tab**: Moves focus between section headers and nested elements without expanding them.
* **Shift + Tab**: Moves focus to the previously selected element.
* **Enter/Spacebar**: Expands or collapses the focused section header.

##Screen readers should announce the state of the Accordion (e.g., expanded or collapsed) when users navigate to each section. The headers should have proper ARIA roles and labels to ensure that assistive technologies can provide adequate information.

###* When deviating from the standard Accordion styling hooks, ensure proper contrast ratios for readability.
* Avoid hiding critical information inside collapsed sections. If critical information is hidden, signal when it is available.

########* Make sure section headers are clear and non repetitive.

##* Accordion headers should support localization and ensure the text adapts based on the user’s language settings.
* Use locale-specific formatting for dates, times, and numbers.

---
*Generated from SLDS Rules Generator*
