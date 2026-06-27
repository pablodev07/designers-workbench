# Data Table

## Data Table

###Data tables are ideal for organizing data into a structured format, enabling users to view, manage, and interact with data quickly.

* Data tables display information and allow users to view, scan, and interact with that information.
* Key features include:
    * Infinite row scrolling
    * Inline editing for specific data types
    * Header and row-level actions
    * Resizable columns
    * Row selection and sorting
    * Text wrapping and clipping
    * Row numbering and content alignment for better data management.

#####* Organize data clearly, using column sorting and filtering.
* Use inline editing only for fields that require frequent updates.
* For larger tables, use infinite scrolling to enhance loading performance.
* Ensure data tables span edge-to-edge within a list view, with a top border to delineate the header.
* For tables displayed within a popover, use a border around the table for a clear definition.

##* Don’t use data tables for unstructured content, such as rich text or multimedia that doesn’t fit neatly into rows and columns.
* Avoid tables with too many fields or complex inline edits. Tables with too much data are hard to read and can overwhelm users.
* When one record or a few items are shown, use a list or card layout.
* Don’t use data tables for complex interactions.
* Tables are difficult to navigate and read on small screens or mobile devices. Use stacked cards or lists instead.
* For trends or hierarchies, use charts, tree views, or diagrams instead of tables.

###Data tables are available in several variations, each serving a specific purpose in displaying data.

##A base data table presents structured data in rows and columns. It serves as a starting point for more complex tables, and offers a clean, simple layout to display information. It doesn't include additional functionality like inline actions or batch operations.

###1. **Structured Layout**: Displays data using rows and columns.
2. **Basic Styling**: Includes standard visual styles for table headers, rows, and borders to make the table readable and consistent with other tables.
3. **Static Content**: Displays data without real-time updates or dynamic interactions.
4. **Accessibility**: Supports basic accessibility features, such as semantic HTML for screen readers and keyboard navigation.

##An actionable data table displays structured data and allows users to perform actions in the table to enhance user productivity. Use this type of table in workflows that involve managing, reviewing, or modifying data records.

###1. **Inline Editing**: Users can edit record content directly in the table using row-level buttons.
2. **Batch Actions**: Supports selecting multiple rows and applying actions like mass edits or bulk updates.
3. **Sortable Columns**: Column headers can include sorting controls to organize data by attributes such as name, date, or priority.
4. **Filter and Search**: Tools for filtering visible rows, enabling users to focus on relevant data.
5. **Dynamic Content**: Real-time updates or status indicators, such as icons, reflect changes in the data.
6. **Accessibility**: Compatible with screen readers, keyboard navigation, and other accessibility best practices.

##An inline edit data table allows users to edit cells. This feature speeds up workflows by making it easier to update data. Instead of navigating to different forms or pages to make changes, you can update in a single view and get things done faster.

###1. **Editable Cells**: Click an editable cell to activate edit mode and update the content directly within the table.
2. **Real-Time Validation**: Built-in validation verifies that input meets required formats or constraints, such as date formats or character limits.
3. **Highlighting Edits**: Visual cues such as color or icons show which cells have been modified.
4. **Batch Editing Support**: Make multiple edits across rows before committing changes in bulk.
5. **Accessibility**: Supports screen readers, focus indicators, and other accessibility requirements. See Inline Edit under Accessibility for more information.

###The data table features structured rows and columns.

######Salesforce data tables are responsive by default, automatically adjusting to fit different screen sizes. Data tables aren't supported for mobile devices.

###Interactive states in data tables are inherently complex because they must account for user feedback at multiple levels (rows, columns, and individual cells) while being clear and usable. Each level of interaction introduces overlapping states, such as hover, focus, active, and selected.

Explore the examples here to experience the data table’s interactive states.

#####Users can select one row or multiple rows via checkboxes or radio buttons for bulk actions like delete or export.

With Row Selection

###Actions like Edit, Delete, or View Details are available for individual rows through dropdown menus or icons.

With Row Actions

###Displays error feedback when data fails to load. Use clear, concise affordances explaining the issue and next steps.

Edited Cell With Row Level Error

###Allows users to edit certain data types directly within the table without leaving the context of the table.

With Inline Edit

###A dedicated column displays row numbers for reference, particularly useful in large datasets. When the table has inline editing, the number column displays. This way, any validation errors can be displayed in a tooltip next to the row number.

With Row Numbers

###Content in columns, including column headers, can either wrap to show all text or clip to fit within the column width. If a column is set to Clip Text, the content in each column cell is truncated (...), exposing only what the cell’s width allows. If a column is set to Wrap Text, then each cell in that column expands its height to reveal all the content. The entire row's height also expands.

With Text Wrapping

###Rows load dynamically in batches as users scroll, reducing initial page load time. A [spinner](https://www.lightningdesignsystem.com/2e1ef8501/p/959d6d) is shown when data is being fetched.

With Infinite Scrolling

###Table data can be sorted in ascending or descending order of one column's data. The type of data in the sort column determines whether the table data is sorted alphabetically, numerically, by date, and so on.

* Hovering over the column header reveals an arrow icon for sortable columns.
* An up/down arrow icon in the column header shows the current sorting state.
* Sorting automatically resets sorting when new filters are applied.

With Sorting

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
| Selector | `.slds-max-medium-table_stacked-horizontal` |
| Summary | Creates stacked rows with horizontal cells |
| Support | prototype |
| Restrict | `.slds-table` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-max-medium-table_stacked` |
| Summary | Creates stacked row with stacked cells |
| Support | prototype |
| Restrict | `.slds-table` |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-no-cell-focus` |
| Summary | No description available |
| Restrict | `.slds-table_edit` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-cell-edit__button` |
| Summary | No description available |
| Restrict | `.slds-cell-edit` button |
| | |

| | |
|-------|-------|
| Selector | `.slds-has-error` |
| Summary | No description available |
| Restrict | `.slds-cell-edit` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-is-edited` |
| Summary | No description available |
| Restrict | `.slds-cell-edit` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-cell-edit` |
| Summary | No description available |
| Restrict | `.slds-table_edit` th, `.slds-table_edit` td |
| | |

| | |
|-------|-------|
| Selector | `.slds-cell-error` |
| Summary | No description available |
| Restrict | `.slds-table_edit` td |
| | |

| | |
|-------|-------|
| Selector | `.slds-table_edit` |
| Summary | Initiates inline-edit mode for data-tables |
| Support | dev-ready |
| Restrict | `.slds-table` |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-table_header-hidden` |
| Summary | Used to remove the top border when a table's header is visually hidden |
| Support | dev-ready |
| Restrict | `.slds-table` |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-th__action_form` |
| Summary | No description available |
| Restrict | `.slds-th__action` |
| | |

| | |
|-------|-------|
| Selector | `.slds-th__action` |
| Summary | No description available |
| Restrict | `.slds-table` th div, `.slds-table` th a |
| | |

| | |
|-------|-------|
| Selector | `.slds-resizable__divider` |
| Summary | No description available |
| Restrict | `.slds-resizable__handle` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-resizable__handle` |
| Summary | No description available |
| Restrict | `.slds-resizable` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-resizable` |
| Summary | No description available |
| Restrict | `.slds-is-resizable` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-is-resizable` |
| Summary | No description available |
| Restrict | `.slds-table_resizable-cols` th |
| | |

| | |
|-------|-------|
| Selector | `.slds-table_resizable-cols` |
| Summary | No description available |
| Restrict | `.slds-table_fixed-layout` |
| | |

| | |
|-------|-------|
| Selector | `.slds-is-sorted_asc` |
| Summary | No description available |
| Restrict | `.slds-is-sorted` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-is-sorted` |
| Summary | No description available |
| Restrict | `.slds-table_fixed-layout` th |
| | |

| | |
|-------|-------|
| Selector | `.slds-th__action-button` |
| Summary | No description available |
| Restrict | `.slds-has-button-menu` .slds-button_icon |
| | |

| | |
|-------|-------|
| Selector | `.slds-has-button-menu` |
| Summary | No description available |
| Restrict | `.slds-table_fixed-layout` th |
| | |

| | |
|-------|-------|
| Selector | `.slds-is-sortable__icon` |
| Summary | No description available |
| Restrict | `.slds-is-sortable` .slds-icon |
| | |

| | |
|-------|-------|
| Selector | `.slds-is-sortable` |
| Summary | No description available |
| Restrict | `.slds-table_fixed-layout` th |
| | |

| | |
|-------|-------|
| Selector | `.slds-table_fixed-layout` |
| Summary | Set table to use fixed layout for width and truncation purposes |
| Support | dev-ready |
| Restrict | `.slds-table` |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-table_striped` |
| Summary | No description available |
| Restrict | `.slds-table` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-table_col-bordered` |
| Summary | No description available |
| Restrict | `.slds-table` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-table_bordered` |
| Summary | No description available |
| Restrict | `.slds-table` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-table_cell-buffer` |
| Summary | No description available |
| Restrict | `.slds-table` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-cell_action-mode` |
| Summary | No description available |
| Restrict | `.slds-table` th, `.slds-table` td |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-has-focus` |
| Summary | No description available |
| Restrict | `.slds-table` th, `.slds-table` td |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-cell-buffer_right` |
| Summary | No description available |
| Restrict | `.slds-table` th, `.slds-table` td |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-cell-buffer_left` |
| Summary | No description available |
| Restrict | `.slds-table` th, `.slds-table` td |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-cell-wrap` |
| Summary | No description available |
| Restrict | `.slds-table` th, `.slds-table` td |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-is-selected` |
| Summary | No description available |
| Restrict | `.slds-table` tr |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-no-row-hover` |
| Summary | No description available |
| Restrict | `.slds-table` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-table` |
| Summary | Initializes data table |
| Support | dev-ready |
| Restrict | table |
| Variant | true |
| | |

########* Tabbing into the grid focuses the first data cell in the table.
* The second tab key press takes the user focus out of the grid onto the next focusable element on the page.
* Once the user has tabbed out of the grid, tabbing back into the grid will return focus to the last cell the user was focused on.
* Navigation in the grid is accomplished via the arrow keys.
* No actionable items in cell contents are focusable.
* Pressing the Enter key on a chosen grid cell, places the entire Grid into Actionable mode.

###* Once in Actionable mode, all focusable items in the entire grid can be tabbed to.
* Arrow navigation still takes the user cell to cell in any direction, but focuses on the first actionable item in the cell, if there is one.
* Pressing the Escape key exits Actionable mode, placing the user back into Navigation mode, keeping the users cursor on the same cell they were focused in.
* When interacting with a component in a cell, such as a Menu, that also uses the Escape key as an exit action, pressing Escape will take the user back to the triggering element in the current cell. A subsequent press of Escape will return the user to Navigation mode.

For the purposes of these docs, the Default state of Inline Edit is representative of Navigation mode, all other states are assumed to be in Actionable Mode.

##Currently, cells in a data table automatically truncate long strings. Users can either widen the column to view the full string or hover over the cell to see the full text in a tooltip. The Lightning Data Table is responsive by default.

##To create an accessible table, the top row of column headers (`th`) are placed in a thread. Each one receives the `scope="col"` attribute. The first non-actionable (meaning that doesn't contain a checkbox or menu) column in each row should be marked as a `th` with a `scope="row"` attribute.

##Accessibility labels provide essential cues for assistive technology:

* **Column Headers**: Add `aria-label` or `aria-labelledby` for each header.
* **Rows**: Use ARIA labels on interactive rows (e.g., checkboxes, buttons) to clearly indicate the action.
* **No Data**: If the Data Table is empty, ensure a message displays, such as “No data available,” and that this message is accessible to screen readers.

To give additional context, like a caption or description, to a table for screen readers, the attributes `aria-labelledby` or aria-label can be used on the table element.

For `aria-label`, set the description as the attribute value. Alternatively, if another element, or elements, can serve this purpose for the table, then set the value of `aria-labelledby` with the `id` of the element[s].

###The Advanced Data Table and Inline Edit Data Table are based on the semantics, roles and interaction model of the ARIA Grid. In SLDS we overlay the [ARIA Grid](http://w3c.github.io/aria/practices/aria-practices.html#grid) on top of native HTML table semantics.

The role of Grid comes with 2 distinct modes, **Navigation mode** and **Actionable mode**. Both come with very specific keyboard interaction modals. Navigation mode is the default mode of the Grid.

Bold text for edited cell examples provide secondary indicators for text, along with yellow backgrounds, to indicate content is edited but unsaved.

---
*Generated from SLDS Rules Generator*
