# Map

## Map

###The map component helps users visualize geographical data, enhancing workflows that involve spatial decision-making. It supports dynamic location markers, layers, and integration with Salesforce records.

* Displays maps with customizable markers to represent specific locations.
* Integrates seamlessly with Salesforce records such as Accounts and Service Cases.
* Supports dynamic updates for location data and responsive behavior for various screen sizes.

#####* Use meaningful and recognizable marker icons for quick identification.
* Optimize performance by limiting the number of markers loaded at once.
* Always show a message to let users know when something is loading or if there's an error.

##* Avoid using the map component if location data is unavailable or irrelevant.

###| **Base**  Base Map with a single marker.  |   |
| --- | :---: |
| |   |
| **Side List**  Map displaying multiple locations in a side panel. |   |
| |   |
| **Bottom List**  Map displaying multiple locations in a bottom panel.   |   |

###The map component visually represents geographic locations using an interactive map interface. It typically includes a map container with zoom controls, a dropped pin to mark a location, and an optional floating info card displaying details like an address or coordinates. Users can pan, zoom, and select locations, ensuring seamless integration with Salesforce records and geolocation features. The design maintains SLDS styling, ensuring consistency with other Lightning components.

######* **Minimum Size:** 200x200 pixels for usability.
* **Fluid Layout:** Adjusts dynamically within any container.
* **Responsiveness:** Remains usable on screens as small as 320px wide.
    * On touchscreen devices, maps have larger header text and other minor adjustments. The changes occur automatically in Salesforce native mobile applications for users on the Salesforce Platform. For users on touchscreen devices who aren't on the Salesforce Platform, these changes occur automatically after the secondary touch stylesheet is loaded.

##* **Marker Labels:** Use short, descriptive labels for easy identification.
* **Text Constraints:** Limit info window text to 50–100 characters for readability.

#####The map component has these interactions available.

* **Drag:** Moves the map canvas for navigation.
* **Zoom:** Allows in-depth or broad views using controls or gestures.
* **Select:** Shows location of items selected from the list. When you select a location title in the list, its map marker is activated.

##By default, the list of locations is hidden when you pass in a single marker and displayed when you pass in multiple markers.

###Use CSS Custom Properties as hooks to customize this SLDS component with your own style. For more information, [read the technical documentation](https://www.lightningdesignsystem.com/2e1ef8501/p/319e5f).

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
| Selector | `.slds-map` |
| Summary | 3rd party map element found inside of the map container |
| Restrict | `.slds-map_container` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-map_container` |
| Summary | Map container |
| Support | dev-ready |
| Restrict | div |
| Variant | true |
| | |

#####* Users can click on markers to view additional information.
* Standard mouse interactions like hover and drag are supported.
* Scroll wheel zoom functionality is enabled by default but should have an option to disable for better accessibility.

##* Tab navigation allows users to cycle through focusable elements (e.g., markers, controls).
* Arrow keys pan the map view when focused on the map canvas.
* Enter/Space activates markers or buttons, such as opening an info window.
* Escape closes any open popups or modal-like elements within the map.

| **Action** | **Key Command** |
| :--- | :--- |
| Navigate markers | Tab (forward), Shift+Tab (back) |
| Activate marker | Enter or Space |
| Pan map | Arrow keys |
| Zoom in/out | "+" or "-" keys |
| Close popups | Escape |

##* **Screen Readers:** The map provides semantic labels for markers and other controls, allowing assistive technologies to interpret the content. Use ARIA landmarks and roles to enhance screen reader compatibility.
* **Magnifiers:** Ensure zoom controls are distinguishable and not reliant on color alone.
* **Alternative Input Devices:** Verify compatibility with sip-and-puff devices, speech recognition software, and other assistive tools.

###* Ensure contrast ratios meet WCAG 2.1 standards (minimum 4.5:1 for text and interface elements).
* Use distinct and meaningful icons for markers to avoid reliance on color alone.
* Provide fallback visualizations or messaging for users unable to interact with the map (e.g., textual lists of locations).
* Limit the complexity of map overlays and prioritize readability.

######* Include concise and descriptive text for marker labels and popups.
* Provide alternative content for map-based information, such as lists or tables.

###Markers and map controls include built-in support for accessibility labels. Developers must:

* Add meaningful aria-label or aria-labelledby attributes to markers.
* Use descriptive names for map layers and controls.

###The Map component supports internationalization through localized map tiles and text labels. Developers should ensure:

* Marker labels and info windows display content in the user’s preferred language.
* Right-to-left (RTL) languages are accounted for in the layout and interactions.

---
*Generated from SLDS Rules Generator*
