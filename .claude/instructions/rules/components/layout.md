# Layout

## Layout

Before selecting a layout, review these guidelines:

* **Know your use case.** Understand how the information on the page will be used.
* **Prioritize your content.** Organize your content to highlight the most important information.
* **Group related content together.** Make it efficient for users to work with the content.

###Record layouts consist of a page header, a main content area and a sidebar. The content that should appear in each of these areas depends on the primary use case you are solving for.

The page header above the content area extends across the entire viewport. When the user scrolls, the panel is fixed to provide locational context, but it shrinks to preserve vertical real estate.

The main content area uses two-thirds of the viewport. The sidebar uses the other third, with a minimum width of 400px to maintain readability. If the reference layout appears inside of a Master/Detail, the sidebar collapses into a tab in the main content area.

###| A workspace layout facilitates user collaboration on records. It highlights the activity and discussion that is happening around a record by placing this information prominently in the larger content area, while simultaneously displaying the related records in the sidebar. A summary of the record’s details are in a panel above the content area for easy reference. | |
| --- | :---: |
| |   |

###| A reference layout is optimized for when users are primarily jumping to related records. It highlights the related records by displaying this information in the larger content area. Collaborative items are placed in the smaller sidebar. A summary of the record’s details are in a panel above the content area for easy reference. | |
| --- | :---: |
| |   |

###A list layout consists of a simple page header and body that allows users to switch between predefined lists of items. Common controls include sorting, filtering, charting, and actions for the item type. Users can also switch between list layouts using the “Display” menu.

Choose the types of list layout that best supports your use case:

* **Table** — Best for managing large sets of data and comparing values
* **Board** — Use to monitor a workflow or milestones where users can drag cards between stages to indicate progress
* **Master-Detail** — Allows users to see and edit the details of an item on one screen

###| Use a table layout for flexibly viewing and managing large sets of data. The layout uses 100% of the viewport. Items are displayed as rows with their fields organized in columns. The columns are fixed width and use as much horizontal space as necessary. Columns do not resize when the window changes width. Users can choose which columns to show and how wide each column is. If the grid is wider than the viewport, users horizontally scroll to see more data. The table can be of infinite length. Data is loaded as the user scrolls. This lets your users access their data most efficiently. Avoid using manual pagination controls, which reduce efficiency. | |
| --- | :---: |
| |   |

###| Use a board layout for items that are advancing through a linear workflow, such as a sales process, because it allows users to quickly move items between stages. The layout displays items in columns that are based on a picklist field on the object being viewed; a good example is the Stage field on a list of opportunities. Items are displayed as stacked cards in each column and can be moved between columns. Each column can optionally display an aggregate of any numerical data from that column’s items, such as the total monetary value of a column of Opportunities. The minimum column width is 12rem, and the maximum is 25rem to ensure that cards are legible. If the columns don’t fit in the viewport, users scroll horizontally to see more data. If the columns don’t fill the viewport, they are expanded to their maximum width, and the area to the right of the last column remains empty. | |
| --- | :---: |
| |   |

###A master-detail layout is ideal for working through a queue of items because it allows the user to stay on the same screen while viewing and editing multiple items.

| The layout groups together two layout views with a one-to-many relationship. Selecting an item from the master view (which contains a list) causes the details of that item to be populated in the detail view, using a condensed reference or workspace layout.  | |
| --- | :---: |
| |   |
| A master-detail layout is also useful for exploring a deeply nested tree, like a file system, by displaying a tree component on the left and a table component on the right. This allows users to jump between nodes in the tree and to simultaneously view the full contents of each node as a list. | |
| |   |
| Master detail layouts work best on a larger screen (minimum of 1024px). If the screen is smaller, the two layout views should be defined as separate pages. | |

---
*Generated from SLDS Rules Generator*
