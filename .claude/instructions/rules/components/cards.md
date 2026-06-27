# Cards

## Cards 

###* A card is used to group similar types of information, such as recent records, upcoming tasks, or alerts.
* Cards visually separate content into distinct sections, making it easier to read and interact with.
* They can include a header, body, and footer, often displaying dynamic content and actions.
* The body can hold any content or components.

#####* Focus each card on a single task, idea, or piece of information.
* Use typography, spacing, and visuals to create a clear hierarchy within the card.
* For complex content, separate it into sections using nested cards, tabs, accordions, or expandable areas.
* Use concise, clear titles that convey the purpose of the card.
* Place buttons or links in the footer for contextual actions or access to more details.

##* Avoid making the entire card or non-interactive areas clickable.
* Don't overload the card body with too many actions or links.

###A card is composed of a header, body, and footer and can be used with various combinations of those parts.

| **Base Card**  Includes a header, body, and a footer for action buttons or links. The header and footer are optional when using a card. **Use Case:** When the card's content needs a title and actions.  |  *A visual mockup of a card with a header and footer. No content needed.* |
| --- | :---: |

###Cards use a white container with rounded corners, without shadows or outlines. They appear on a background that uses `neutral 95` or darker.

| | **Header:** The top section of a card component. It can contain a title, icon, or buttons for quick context. |
| :--- | :--- |
| | **Title:** Summarizes content, helping users quickly identify the card's purpose. |
| | **Icon:** Provides visual cues and supports quick recognition. |
| | **Button/Button Menu**: Provides quick access to primary actions related to the card’s content. |
| | **Body:** The main content area that displays detailed information, such as text, images, or components.  |
| | **Footer:** The bottom section includes secondary actions, links, or supplementary information. |

#####* Can include dynamic content like badges or status updates (for example, "In Progress").
* Icons and buttons are customizable based on the context.
* The header can be hidden if unnecessary.

###* Adjust padding based on content (for example, remove padding for data tables).
* Displays collapsed by default if no content is available.

###* Supports multiple button types, navigational links (for example, "View All"), or supplementary text or progress indicators
* The footer can be hidden if not needed.

##| **No Header**  Displays only the body and footer.  **Use case:** When the context of the content is already clear without a title, this allows the user to focus on content and actions.  |   *A visual mockup of a card without a header. No content needed.* |
| --- | :---: |
| |   |
| **No Footer**  Displays the header and body only.  **Use Case:** For informational content without required actions (for example, announcements).   |  *A visual mockup of a card without a footer. No content needed.* |
| |   |
| **No Header or Footer**  Displays only the body.  **Use Case:** When the content is self-explanatory and doesn’t require any context or actions.  |  *A visual mockup of a card without a header or footer. No content needed.* |

##Cards can either have a **fluid width** that adjusts with the container or a **fixed width** based on specific design needs.

#######Use title capitalization and keep it short and informative.

###Limit content to a few key points to avoid overwhelming users.

###| **Collapsible**  The body and footer collapse if no data is available.   |   |
| --- | :---: |

| **Expandable Content**  Cards are static, but an expand or collapse pattern can be added within the body for longer content. This pattern is useful when presenting long blocks of information, allowing users to reveal more content without overloading the page visually.  |   |
| --- | --- |

| **Loading**  When fetching content or performing an asynchronous action, a card shows a loading spinner to indicate that data is being retrieved or processed. |   |
| --- | --- |

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
| Selector | `.slds-card-wrapper` |
| Summary | Removes the card look from nested cards and pulls them to the boundary of the card wrapper, making the nested cards look like they are inside of one card |
| Support | dev-ready |
| Restrict | div |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-card__footer-action` |
| Summary | Actionable element within card footer |
| Restrict | `.slds-card__footer` a |
| | |

| | |
|-------|-------|
| Selector | `.slds-card__footer` |
| Summary | Initializes card footer |
| Restrict | `.slds-card` footer |
| | |

| | |
|-------|-------|
| Selector | `.slds-card__body_inner` |
| Summary | Apply the same spacing found on the card header to the card body |
| Restrict | `.slds-card__body` |
| | |

| | |
|-------|-------|
| Selector | `.slds-card__body` |
| Summary | Initializes card body |
| Restrict | `.slds-card` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-einstein-header__actions` |
| Summary | Einstein themed card header actions |
| Restrict | `.slds-einstein-header` |
| | |

| | |
|-------|-------|
| Selector | `.slds-einstein-header__figure` |
| Summary | Einstein themed card header figure |
| Restrict | .slds-einstein-header, div, header |
| | |

| | |
|-------|-------|
| Selector | `.slds-einstein-header` |
| Summary | Einstein themed card header |
| Support | dev-ready |
| Restrict | `.slds-card__header` |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-card__header-link` |
| Summary | Actionable element within the card header title |
| Restrict | `.slds-card__header` h2 a |
| | |

| | |
|-------|-------|
| Selector | `.slds-card__header-title` |
| Summary | Title element within card header |
| Restrict | `.slds-card__header` h2 |
| | |

| | |
|-------|-------|
| Selector | `.slds-card__header` |
| Summary | Initializes card header |
| Restrict | `.slds-card` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-card_boundary` |
| Summary | Used to bring back the border on a card when needed |
| Restrict | `.slds-card` |
| | |

| | |
|-------|-------|
| Selector | `.slds-card` |
| Summary | Initializes card |
| Support | dev-ready |
| Restrict | article, div, section |
| Variant | true |
| | |

#####When a Card first gains focus, it should ideally be on the header or first interactive element within the Card. This allows users to quickly understand the context of the Card and navigate its contents.

##**Screen Readers**

For screen reader users, announce the Card’s structure as a region with labels indicating its purpose. Buttons, links, and other interactive elements within the Card must include clear labels to communicate their function.

A Card should use an underlying `<article>` element to maintain usability for some screen reader users.

**Magnifiers**

Users of screen magnifiers rely on clearly distinguishable sections. Headers, body content, and footers should have ample spacing and use readable font sizes to avoid overlap or visual clutter.

**Alternative Input Devices**

Devices like speech recognition software, sip-and-puff, and braille displays should be supported by ensuring all interactive elements are accessible by standard HTML tags and accessible labels.

###* The Card heading level follows the DOM structure of the page.
* If the Card header icon is redundant with the Card header text, the assistive text is not needed.

---
*Generated from SLDS Rules Generator*
