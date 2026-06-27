# Carousel

## Carousel

###Carousels are best for displaying content that cycles through different views, helping users explore a collection of related items or updates in a visually engaging way.

* The carousel is a sliding component for showing featured content within a limited space.
* Navigate through content using the image indicator controls.
* A carousel works well for dynamic, visually rich content and is commonly used in Salesforce apps for showing featured content, tips, or other rotating content.

##* Use images or concise messages to capture users’ attention quickly.
* A carousel can accept a maximum number of 5 panels where only 1 panel is visible at a time.
* If images contain text, be sure to include what they say in the header, description, or alt-text.

##* Don’t use carousels if users want to see all items at once or if items require in-depth reading.
* Don’t place critical content in a carousel where it can be missed.
* Use a simple list or grid view if the content doesn’t change or cycle.

###| **Base Carousel**  A carousel displays images that users can swipe or click through, often used for promotions or visual content. **Use case:** When displaying simple informational content. |  *Example of a base carousel.* |
| --- | :---: |

#########* By default, carousels are designed to stretch to 100% of their container's width.
* The height of the carousel is determined by the aspect ratio of the image. Use consistent image dimensions to avoid visual inconsistencies.

* Carousels are responsive, automatically adjusting to fit the screen size.

####* Make sure content is concise and uncomplicated for scannability. 
* Text is short and focused. We recommend a limit of 10–20 words per item.
* Maintain consistent styling across items in the carousel for visual continuity.

#####1. **Default:** Shows the first item within the carousel.
2. **Hover**: Image indicators are highlighted on hover.
3. **Focus:** Content and image indicators are keyboard-navigable, highlighting the focused element.
4. **Selected:** The selected image indicator is highlighted with a different color to make it stand out.

##**Image**: Selecting an image that has an associated link opens the link according to its target.

**Image Indicator:** Image indicators allow users to navigate between images.

##* Place the carousel in a prominent but non-intrusive location, where users can easily interact without it disrupting the main task.
* Ensure adequate spacing between the carousel and other page elements for a clean, uncluttered look.

##The carousel component doesn't have a built-in loading state. To display a loading state, you can customize it by adding a spinner, stencil, or placeholder content within the content area.

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
| Selector | `.slds-is-active` |
| Summary | Active state notifying the tab that its current panel is active |
| Restrict | `.slds-carousel__indicator-action` |
| | |

| | |
|-------|-------|
| Selector | `.slds-carousel__indicator-action` |
| Summary | Actionable element inside of each tab-list indicator |
| Restrict | `.slds-carousel__indicator` a |
| | |

| | |
|-------|-------|
| Selector | `.slds-carousel__indicator` |
| Summary | Carousel's tab-list inidicator items |
| Restrict | `.slds-carousel__indicators` li |
| | |

| | |
|-------|-------|
| Selector | `.slds-carousel__indicators` |
| Summary | List element that contains the carousel's tab-list inidicators |
| Restrict | `.slds-carousel` ul |
| | |

| | |
|-------|-------|
| Selector | `.slds-carousel__autoplay` |
| Summary | Element that contains the auto-play button icon to toggle on/off |
| Restrict | `.slds-carousel__stage` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-carousel__content-title` |
| Summary | Heading element that contains the title of the carousel's tab-panel |
| Restrict | `.slds-carousel__content` h2 |
| | |

| | |
|-------|-------|
| Selector | `.slds-carousel__content` |
| Summary | Element that contains the content inside the carousel's tab-panel |
| Restrict | `.slds-carousel__panel-action` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-carousel__image` |
| Summary | Element that contains the image inside the carousel's tab-panel |
| Restrict | `.slds-carousel__panel-action` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-carousel__panel-action` |
| Summary | Actionable element that contains the carousel's tab-panel content |
| Restrict | `.slds-carousel__stage` a |
| | |

| | |
|-------|-------|
| Selector | `.slds-carousel__panels` |
| Summary | Tabpanel region that contains all carousel panels |
| Restrict | `.slds-carousel__stage` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-carousel__stage` |
| Summary | Main stage for carousel's tab-panels and tab-list inidicators |
| Restrict | `.slds-carousel` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-carousel` |
| Summary | Initiates a carousel component |
| Support | dev-ready |
| Restrict | div |
| Variant | true |
| | |

#####**Navigation: **

* Users can click Image Indicators to move through carousel items.

**Auto-play Button:**

* Users can click Auto-play Button to play or pause the carousel.

**Cursor Changes: **

* The cursor changes to a pointer when hovering over clickable elements to indicate interactivity.

##**Tab Navigation:**

* Tab key moves through the three main elements of the carousel: autoplay button first, then current slide, then image indicator list.
* Shift+Tab keys, when focused on any element within the carousel, move focus entirely from the carousel.

**Enter Key:**

* Enter key toggles Auto-play Button on/off.
* Enter key, when focused on a selected carousel image, opens the associated link.

**Arrow Keys: **

* Arrow keys, when focused on an image indicator, cycle selection to the next or previous indicator.

**Focus States: **

* Visible focus states highlight interactive elements as users navigate with the keyboard, ensuring that users can track their position within the component.

##**Screen Readers: **

* Aria labels and `aria-live` regions provide announcements of carousel actions, such as “Slide 2 of 5,” enhancing screen reader compatibility.
* Auto-play Button should announce play/pause status of the carousel.

###* Avoid text in images, but if text does exist, ensure that it retains appropriate color contrast rules.

#####* **Alt Text for Images:** Add descriptive alt text for each image displayed in the carousel, ensuring users with visual impairments can understand the content.
* **Short, Relevant Content:** Keep content concise to improve readability and ensure that messages are accessible within the short viewing time between slides.
* **Consistent Descriptions:** Use consistent labels and descriptions for each slide to help users understand and navigate carousel items more easily.

###**Image Indicators:** Each image indicator must be labeled to announce the corresponding slide, such as `aria-label="Slide 1 of 5"`.

**Carousel Role:** Set the component role as a region with a descriptive aria-label, such as “Product Showcase Carousel,” to help users quickly identify its purpose.

###**Localizable Text:** Ensure that all carousel text, such as button labels and announcements, is localizable to support multiple languages.

**RTL Support:** The Carousel component is compatible with right-to-left (RTL) layouts, ensuring that elements like navigation arrows are correctly oriented based on the reading direction.

---
*Generated from SLDS Rules Generator*
