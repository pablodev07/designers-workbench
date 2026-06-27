# Tiles

## Tiles

###Tiles provide a compact and structured way to display key data and related actions. They are commonly used for records, dashboards, and data summaries. Users can interact with tiles to view additional details or take actions.

* Tiles are UI components used to present related content in a structured format.
* Tiles help users quickly scan and interact with key information, offering a visual and accessible way to present grouped data.

##* Use tiles to visually organize related data and provide a clear hierarchy.
* Ensure tile content remains concise and scannable to avoid cognitive overload.
* Utilize appropriate icons and actions within the tile to enhance usability.

##* Avoid using tiles for displaying large amounts of text or complex data tables.
* Do not use tiles when a simple list or table format provides better readability.
* Do not overload tiles with too many actions or excessive visual elements.
* Avoid using tiles for critical data entry workflows where modals or forms may be more effective.

###| **Base**  A simple tile with a title and body content.  |   |
| --- | :---: |
| |   |
| **Article**  Used to display key details about a knowledge article, including its title, summary, and metadata, providing users with a quick overview and easy access to relevant content.   |   |
| |   |
| **Task**  Displays a summary of an individual task, including key details such as status, due date, and priority, enabling users to quickly review and take action on their assigned work.   |   |
| |   |
| **Board**  Used to represent a collection of related records or tasks, providing a high-level summary and quick access to grouped information within a dashboard or workspace. |   |

#########Tiles are responsive and should adjust fluidly across different screen sizes.

####* Keep text short and to the point.
* Use action labels that clearly describe the interaction.

#####The **Tile component** contains nested interactive elements, such as **Text Links, Button Icons, and Actions**, each with independent states. These nested components follow their respective interaction patterns

For example, a **text Link** behaves like a standard hyperlink with hover and focus states, while a **Menu Button Icon** follows button interaction states. Each nested component functions independently while maintaining a cohesive user experience within the Tile.

###The **Text Link** (typically used for the Tile title) provides navigational access to related records or additional information. It follows standard link states:

* **Default**: Displays as a standard hyperlink in the primary text color.
* **Hover**: Changes color to indicate interactivity when the user hovers over the link.
* **Active**: Changes color briefly when clicked, providing feedback that the action is in progress.
* **Focus**: Displays a focus outline to indicate keyboard navigation focus.
* **Visited**: Changes color if the link has been previously visited (depending on system/browser styling).
* **Disabled**: Appears in a muted color and is non-interactive if linking is unavailable.

###The **Button Icon** (typically used for accessing additional actions in a tile) follows standard button states:

* **Default**: Displays as a clickable icon button with a neutral or lightly styled appearance.
* **Hover**: Changes background color or adds a subtle highlight to indicate interactivity.
* **Active**: Slightly changes color and applies a pressed effect when clicked.
* **Focus**: Displays a focus outline when navigated to via the keyboard.
* **Disabled**: Appears faded and is non-interactive when actions are unavailable.Lorem ipsum...

##Skeleton loading states help maintain UI consistency while data is fetched. ipsum...

##Tiles within a container may scroll if content exceeds the max-height of the tile height. .

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
| Selector | `.slds-tile_board__icon` |
| Summary | Tile board icon |
| Restrict | `.slds-tile_board` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-tile_board` |
| Summary | Initializes tile board |
| Support | dev-ready |
| Restrict | article |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-tile__meta` |
| Summary | No description available |
| Restrict | `.slds-tile` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-tile__detail` |
| Summary | No description available |
| Restrict | `.slds-tile` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-card__tile` |
| Summary | Use class if card consumes any form of a tile |
| Restrict | `.slds-tile` |
| | |

| | |
|-------|-------|
| Selector | `.slds-tile` |
| Summary | Initializes tile |
| Support | dev-ready |
| Restrict | article |
| Variant | true |
| | |

#####* Users can click on a tile or interactive elements within it.

##* **Tab** navigates between interactive elements.
* **Enter** selects or activates a tile action.
* Arrow keys navigate between tiles (if implemented).

##* Screen readers announce tile content and available actions.

###* Ensure sufficient contrast between tile background and text.
* Maintain consistent focus states.

###* Support keyboard interactions for all actionable elements.

###* Ensure text is concise and meaningful for assistive technologies.

---
*Generated from SLDS Rules Generator*
