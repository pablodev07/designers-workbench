# Displaying Data

## Displaying Data

###**Record lists organize information to help users locate and/or browse specific records.**

You can display records as a table, tile list, or interactive card. Differentiate types of items either by separating them into different lists or by clearly labeling them within the list. For example, put different file types into separate lists, or if they live in the same list, label each file file type (PDF, JPG, and so on).

Make sure to provide a visible affordance, such as an icon or a button, for all points of interaction on a list or record.

Title each list of records. Include field labels where possible. User name, date, and number fields are especially ambiguous when shown without a label.

It’s recommended to provide a message when a list is empty. For example, “No items to display. Try editing filters for this list view or switching list views.

###| A table is the most basic format for displaying a list. Each record is represented by a single row of data that begins with the record’s primary field and shows additional fields in subsequent columns. The data is labeled using column headers that can be interactive.  This display type is appropriate for large numbers of records because you can easily scan it and navigate the list using sorting, filtering, or scrolling.  If you are allowing the user to modify the column widths, allow horizontal scrolling but don’t responsively resize columns.  On narrow screens where only a few columns will fit, tables should elegantly and responsively collapse into tile lists. |   | |
| :--- | --- | :---: |

###| A tree grid is useful for displaying large amounts of hierarchical data, where records are grouped into parent-child relationships. This format is similar to a table, with the exception that the first column also represents the relationship between records. It also offers similar benefits including sorting and filtering.  A chevron button at the end of the row shows and hides nested children. It also indicates whether a record has children. Children are indented below their parent to communicate their position in the hierarchy.  Records and their children must share the same data structure to be displayed in columns. For example, files and folders share a similar set of metadata. When parent and child records have different fields, a tree grid should not be used. Consider using a related list or master detail instead.  On narrow screens where only a few columns will fit, tree grids should elegantly and responsively collapse into a tree list. |   | |
| --- | --- | :---: |

###| A tile begins with a primary field and can include a supporting icon or image and additional fields. Data is presented as label­value pairs. The user interacts with elements within the tile, such as buttons and links, not the tile as a whole.  Use tiles when you are horizontally constrained for space. Tiles are appropriate for short lists—fewer than 10 items. Tile layouts do not stretch well, so to use available horizontal space, add a column of tiles.  On wider screens where more than 2 columns of tiles will appear, tile lists should elegantly and responsively expand into tables. |   | |
| --- | --- | :---: |

###| To make tiles more interactive, you can add a card wrapper around individual tiles and allow users to drag and drop them. Use cards when the order and placement of individual items in a list is important. |   | |
| --- | --- | :---: |
| |   |   |

###**Feeds offer a way for users to communicate and stay informed of activities related to records.**

Include a search feature so that users can search feeds.

It’s recommended to provide a message when a feed is empty. For example, an activity feed might say, “No next steps. To get things moving, add a task or set up a meeting.”

###| A discussion feed is a conversation between users. Individual messages in the discussion allow inline replies and comments, but don’t allow replies to those replies—no layered threading. In addition to the message, each item in the feed displays the user who posted it, date it was posted, row level actions to bookmark or delete (owner only), a button to like the post, and the number of likes. A post can include mentioning other users and file attachments.  The discussion feed can include multiple message types that add interactive features. For example, you could include a poll. |   | |
| --- | --- | :---: |

###| An activity feed tracks what a user has done and what a user is about to do on a record. Each feed item includes the activity type, subject, and additional fields specific to that activity type. Activity types can include email messages, tasks, calendar events, calls logs, and other updates to the record or related records. The activity feed can show past and future events. |   | |
| --- | --- | :---: |

---
*Generated from SLDS Rules Generator*
