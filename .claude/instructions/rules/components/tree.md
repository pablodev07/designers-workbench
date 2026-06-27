# Tree

## Tree

###The Tree component is ideal for presenting hierarchical data, such as file directories or organizational structures. It simplifies navigation and makes complex data sets more accessible.

* Used to display structured data where items can contain multiple levels of hierarchy.
* Commonly found in features like folder navigation or managing data relationships.
* Provides interactive controls for expanding and collapsing nested items to improve navigation and reduce visual clutter.

##* Use the Tree component to display hierarchical data.
* Label each node meaningfully to ensure context for users.
* Keep the structure shallow if possible; deeply nested hierarchies can overwhelm users.

##* Avoid using the Tree component for flat lists without hierarchy.
* Do not use it for datasets that are too large to navigate meaningfully.
* Avoid overloading each node with too much content or functionality.

#########* Node labels should be concise to avoid truncation.
* Limit the depth of the hierarchy to ensure readability.

#####1. **Default**: Nodes are displayed in their standard state.
2. **Hover**: Node changes background color to indicate interactivity.
3. **Active**: The currently selected node is highlighted to show the user's location.
4. **Disabled**: Node is visible but not interactive.
5. **Focus**: Node label is underlined as a visual cue for keyboard navigation. Selection follows focus.

##* Nodes are selected by either clicking on the label or pressing enter/space while focused.
* Parent nodes can be expanded or collapsed by either clicking on the chevron icon or left/right while focused.
* Selection follows focus.

##Use spinners or stencils during lazy loading.

##You may pre-select a node to guide users, such as highlighting the current folder in a directory.

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
| Selector | `.slds-tree__group-header` |
| Summary | Initializes a slds tree group header |
| Restrict | `.slds-tree_container` h4 |
| | |

| | |
|-------|-------|
| Selector | [role="treeitem"] |
| Summary | Styles the focus and selected state for any tree item that has `role="treeitem"` |
| Restrict | `.slds-tree` li |
| | |

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
| Restrict | `.slds-tree` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-tree` |
| Summary | Initializes a slds tree |
| Restrict | `.slds-tree_container` ul, table |
| | |

| | |
|-------|-------|
| Selector | `.slds-tree_container` |
| Summary | A tree is visualization of a structure hierarchy. A branch can be expanded or collapsed. |
| Support | dev-ready |
| Restrict | div |
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

###* `role="tree"` is placed on the `ul`
* `role="tree"` element also has `aria-labelledby` applied which points to the trees heading element
* `role="treeitem"` is placed on the tree `li` elements
* `aria-level` is applied to `treeitem` elements to indicate their nesting depth
* `aria-expanded` is applied to `treeitem` elements that have child tree nodes. It is set to `true` or `false`
* `aria-label` is applied to `treeitem` elements that have child tree nodes. Be sure to add any metatext to the label, if applicable
* `aria-selected="true"` is applied to `treeitem` elements that are selected
* `aria-disabled="true"` is applied to `treeitem` elements that are disabled. They do not receive a `tabindex`.
* `tabindex="0"` is applied to the `treeitem` that is in focus
* `role="group"` is applied to child tree node containers, `ul`

###* Only a single action per tree item
* Only 1 focused item per Tree
* Actionable elements in a tree item are mouse only and should not be focusable, they should be presentational and should be hidden from screen readers and keyboard users
* Focus is placed on the entire `li[role="treeitem"]`. If that item has child items, focus must include those as well.

##* Clicking the chevrons expand/collapse the parent nodes.
* Clicking the labels selects the node. If linked, navigates to a new page or section.

##* Clicking on a tree item creates a selection
* `Up` and `Down` arrow keys move `:focus` **and** `aria-selected`. Previous selections are cleared
* `Right` arrow key to expand collapsed node.
* `Left` arrow key to collapse expanded node.
* `Left` arrow key on an end child node, collapses the group and moves `:focus` and `aria-selected` to the parent `treeitem`
* `Enter` performs the default action on an end tree item (if there is one).
* `Ctrl` + `Up` and `Ctrl` + `Down` moves focus. Current selection is maintained
* `Ctrl` + `Space` will add or remove the currently focused tree item to the selection

##Screen readers should announce the node level and whether it is expanded or collapsed.

##When filtering a tree you should couple the tree with a search input. The search input will control the contents of the tree and as such should the attribute `aria-controls` added to it. The value of the `aria-controls` attribute should be the ID of the tree it controls. The search input should also be of type `search`.

Upon typing in the input the tree should start filtering immediately, expanding all nodes that have matching tree items to display, and highlighting the search term in each of the matching items. The highlight is provided by wrapping the term in `<mark />` elements.

######* Node labels should be meaningful and unique.

###Use `aria-label` or `aria-labelledby` for tree containers.

###Text direction and alignment adapt to right-to-left (RTL) languages.

---
*Generated from SLDS Rules Generator*
