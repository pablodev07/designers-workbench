# Tree Grid

## Tree Grid

###A Tree Grid is used to display complex hierarchical data where users need to navigate and interact with nested structures.

* Displays hierarchical data in a structured, collapsible format.
* Used in scenarios where data needs to be viewed in parent-child relationships.
* Use when interactivity beyond selection for each item is desired.Bullet Points of overview

##* Include clear labels for columns and rows to enhance readability.
* Optimize performance when dealing with large datasets by limiting expanded rows by default.

##* Do not use if the hierarchical relationship is not essential to the user’s workflow; use a Data Table.
* If no actions beyond the selection of items are necessary; use a Tree instead.
* When more than 20 nested levels are required, a custom component must be built.

#######Tree grids are responsive by default, automatically adjusting to fit different screen sizes.

##The first data column in the tree grid supports the following data types.

| **Type** | **Description** | **Supported Type Attributes** |
| --- | --- | --- |
| button | Displays a button using `lightning-button` | disabled, iconName, iconPosition, label, name, title, variant |
| button-icon | Displays a button icon using `lightning-button-icon` | alternativeText, class, disabled, iconClass, iconName, name, title, variant |
| currency | Displays a currency using `lightning-formatted-number` | currencyCode, currencyDisplayAs, minimumIntegerDigits, minimumFractionDigits, maximumFractionDigits, minimumSignificantDigits, maximumSignificantDigits |
| date | Displays a date and time based on the locale using `lightning-formatted-date-time` | day, era, hour, hour12, minute, month, second, timeZone, timeZoneName, weekday, year |
| number | Displays a number using `lightning-formatted-number` | minimumIntegerDigits, minimumFractionDigits, maximumFractionDigits, minimumSignificantDigits, maximumSignificantDigits |
| percent | Displays a percentage using `lightning-formatted-number` | Same as number type |
| text | Displays text using `lightning-formatted-text` | N/A |
| url | Displays a URL using `lightning-formatted-url` | label, target, tooltip |

All other columns support the following data types.

| **Type** | **Description** | **Supported Type Attributes** |
| --- | --- | --- |
| action | Displays a dropdown menu using `lightning-button-menu` with actions as menu items | rowActions (required), menuAlignment (defaults to right) |
| boolean | Displays the icon utility:check if the value is true, and a blank value otherwise. | N/A |
| button | Displays a button using `lightning-button` | disabled, iconName, iconPosition, label, name, title, variant |
| button-icon | Displays a button icon using `lightning-button-icon` | alternativeText, class, disabled, iconClass, iconName, name, title, variant |
| currency | Displays a currency using `lightning-formatted-number` | currencyCode, currencyDisplayAs, minimumIntegerDigits, minimumFractionDigits, maximumFractionDigits, minimumSignificantDigits, maximumSignificantDigits |
| date | Displays a date and time based on the locale using `lightning-formatted-date-time` | day, era, hour, hour12, minute, month, second, timeZone, timeZoneName, weekday, year |
| date-local | Displays a simple date that is formatted based on the locale. The value passed is assumed to be in the browser local time zone and there is no time zone transformation. | day, month, year |
| email | Displays an email address using `lightning-formatted-email` | N/A |
| location | Displays a latitude and longitude of a location using `lightning-formatted-location` | latitude, longitude |
| number | Displays a number using `lightning-formatted-number` | minimumIntegerDigits, minimumFractionDigits, maximumFractionDigits, minimumSignificantDigits, maximumSignificantDigits |
| percent | Displays a percentage using `lightning-formatted-number` | Same as number type |
| phone | Displays a phone number using `lightning-formatted-phone` | N/A |
| text | Displays text using `lightning-formatted-text` | linkify |
| url | Displays a URL using `lightning-formatted-url` | label, target, tooltip  |

###Typically placed within record pages or dashboards where hierarchical data is required.

###Interactive states in tree grids are inherently complex because they must account for user feedback at multiple levels (rows, columns, and individual cells) while maintaining clarity and usability. Each level of interaction introduces overlapping states, such as hover, focus, active, and selected.

##| ****Expand/Collapse Nodes**** Parent nodes can be expanded to expose the nested child nodes, and collapsed to hide them.  |
| --- |
| |
| **Row Selection** Users can select one or more rows via checkboxes for bulk actions like delete or export. Selecting parent nodes does not select the associated child nodes.  |
| |
| ****Row Actions**** Actions like "Edit," "Delete," or "View Details" are available for individual rows through dropdown menus.  |
| |
| ****Text Wrapping and Clipping**** Content in cells, including headers, can either wrap to show all text or clip to fit within the column width. When columns are set to Clip Text, the content will be truncated (...), exposing only what the cell’s width allows. If a column is set to Wrap Text, then each cell in that column will expand its height to reveal all the content. This will also expand the entire row as well. |
| |
| ****Infinite Scrolling**** Rows load dynamically in batches as users scroll, reducing initial page load time. A Spinner is shown when data is being fetched. |
| |
| ****Error**** Highlights rows or cells with validation issues, using red borders or icons. |
| |

##Tree Grids adjust to container size changes, ensuring optimal usability on both desktop and mobile devices. Scrolling behavior adapts to the device's touch or mouse input.

##* A spinner is displayed while loading items.
* If you have a large number of nested items that would delay the loading of your data, consider loading the nested items asynchronously. The nested items are displayed only when you expand the particular row.

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
| Selector | `.slds-tree__item-meta` |
| Summary | The meta text or secondary text of a tree item |
| Restrict | `.slds-tree__item` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-tree__item-label` |
| Summary | The label text of a tree item or tree branch |
| Restrict | `.slds-tree__item` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-is-hovered` |
| Summary | Hover state for a tree item |
| Restrict | `.slds-tree__item` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-tree__item` |
| Summary | Initializes a slds tree item |
| Restrict | `.slds-table_tree` th |
| | |

| | |
|-------|-------|
| Selector | `.slds-table_tree` |
| Summary | No description available |
| Support | dev-ready |
| Restrict | table |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-is-focused` |
| Summary | Focus state for a tree item |
| Restrict | `.slds-tree__item` |
| | |

| | |
|-------|-------|
| Selector | `.slds-is-selected` |
| Summary | Selected state for a tree item |
| Restrict | `.slds-tree__item` |
| | |

| | |
|-------|-------|
| Selector | `.slds-is-disabled` |
| Summary | When a branch doesn't have children, apply `slds-is-disabled` to the button icon |
| Restrict | `.slds-tree__item` button |
| Modifier | true |
| | |

#####* Overall keyboard interaction should follow the same keyboard modal as the [Advanced and Inline Edit Data Table](https://www.lightningdesignsystem.com/2e1ef8501/p/86f13a) with some additions
    * Navigation mode is the default mode. The grid only has a single focusable element at any time and it is either the `tr` or the `td`
    * Actionable mode is enabled when the user presses the `Enter` key, where actionable elements become focusable in the cell
    * Actionable mode is exited when the user presses the `Escape` key, and the user is placed back into Navigation Mode on the last cell they were in
* User focus is initially placed on the first row in the tree grid
* `Down` arrow key moves the user down one row and moves `tabindex="0"` with it
* `Up` arrow key moves the user up one row and moves `tabindex="0"` with it
* `Space` key when focused on a row should select that row by setting `aria-selected="true` on the `tr` element
* `Right` arrow key on a collapsed row, will expand it and update `aria-expanded`
* `Right` arrow key on an expanded or end row will move the user to the first cell in the row and move `tabindex="0"` with it
* `Right` arrow key on a cell will move the user to the next cell in the row and move `tabindex="0"` with it
* `Left` arrow key on a collapsed or end row will move the user to it's parent row and collapse it, if it has one
* `Left` arrow key on an expanded row will collapse it and update `aria-expanded`
* `Left` arrow key on a cell will move the user to the previous cell in the row and moves `tabindex="0"` with it
* `Left` arrow key on the first cell of a row will move the user back to the row and moves `tabindex="0"` with it

#####* `role="treegrid"` should be applied to the `table` element
* `aria-readonly="true"` should be applied to the `table` element
* `aria-level="n"` where `n` represents the nesting level of a particular grid row, should be applied to the `tr` element
* `aria-setsize="n"` where `n` is the number of items for that specific `aria-level` should be applied to the `tr` element
* `aria-posinset="n"` where `n` represents the position in the `aria-level` set the row is placed at, should be applied to the `tr` element
* `aria-expanded="false"` should be placed on rows that are collapsed and have child rows
* `aria-expanded="true"` should be placed on rows that are expanded and have child rows
* `tabindex="0"` should be placed on the first `tr` in the grid on load, to make the row focusable
* Every actionable element in the grid should have `tabindex="-1"` applied to make them not focusable in the grids navigation mode

##* `aria-multiselectable="true"` should be placed on the `table` element
* `aria-selected="false"` should be set by default on all `tr` elements that aren't selected
* `aria-selected="true"` should be set only on the `tr` elements that are selected

##* `aria-selected="true"` should be applied to the `tr` that is selected in the tree grid

---
*Generated from SLDS Rules Generator*
