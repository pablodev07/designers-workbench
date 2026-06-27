# Button Icons

## Button Icons

###Button icons are simple and compact, saving space in the Salesforce user interface. They're often used for actions that are easy to understand from the icon alone, like closing a window or editing an item. No need for text labels!

* Button icons are icon-only buttons that convey specific actions.
* They’re commonly used throughout Salesforce for compact layouts or toolbars.
* They provide quick access to close, delete, or edit functions while saving space.
* Button icons are optimized for user accessibility and screen reader compatibility.

#####* Use button icons for simple, frequent actions like "Close" or "Clear."
* Make sure the icon meaning is universally recognizable (for example, the trash icon for delete).
* Include alternative text for screen readers to improve accessibility.
* Use button tooltips to give extra context when necessary.

##* Don’t use button icons for complex actions that need a text label to clarify their intent.
* Don’t rely solely on button icons if the icon meaning isn’t universally clear.
* Avoid using button icons in crowded interfaces where they can appear cluttered or hard to tap.

###There are three types of button icons. Each type has style variants that you can use to suit user needs.

* **Button icon**: for a specific action. Can use these style variants described next: bare, container, brand, border, border-filled, bare-inverse, and border-inverse.
* **Button icon stateful:** maintains a selection or active state until changed by the user providing clear feedback about its current condition. Can use these style variants: border, border-filled, and border-inverse.
* **Button menu:** displays a dropdown menu of actions or functions when you click it. The button menu has these style variants: bare, container, brand, border, border-filled, bare-inverse, and border-inverse. Button menu has additional

##Bare button icons don’t have a defined container, and the size of each button is based on the icon size alone.

| **Base** Displays an icon without a container or border. |   |
| --- | :---: |
| |   |
| **Bare Inverse** Displays an icon in white color without a container or border, useful for dark backgrounds. |   |
| |   |
| **Feedback** **Error** button icons are typically used in conjunction with an [error popover](https://v1.lightningdesignsystem.com/components/popovers/#Error).  **Warning** button icons are typically used in conjunction with a [warning popover](https://v1.lightningdesignsystem.com/components/popovers/#Warning). |   |

##Container button icons have a defined container that makes up its actual size. Use the variant attribute with one of these values to apply styling.

| **Base**  Displays an icon in a transparent container without a border. |   |
| --- | :---: |
| |   |
| **Border**  The default variant displays an icon in a transparent container with a border. |   |
| |   |
| **Border Inverse**  Displays an icon in a transparent container with a border, used on dark backgrounds. |   |
| |   |
| **Border Filled**  Displays an icon in a filled container with a border. |   |
| |   |
| **Brand**  Brand is a blue button, used to draw attention to the primary action on a page. Use this style sparingly to highlight the most crucial action. |   |

##Like a switch, a stateful button maintains a selection or active state until changed by the user, providing clear feedback about its current condition. It's especially useful for persistent actions such as liking a post or selecting an item as a favorite.

| **Border** Displays an icon in a transparent container with a dark border. |    |
| --- | :---: |
| |   |
| **Border Inverse** Displays an icon in a transparent container with a light border, useful for dark backgrounds. |   |
| |   |
| **Border Filled** Displays an icon in a filled container with a border. |   |

##A button menu displays a dropdown menu of actions or functions when you click it. The menu closes when you click away from it and also closes and puts the focus back on the button when you select a menu item. Button menus are available as a dropdown menu only which uses the default dropdown symbol, or an icon with a dropdown. Both can be styled using bare and container styles and sizes.

| **Dropdown Menu** The dropdown symbol is the only icon available. |   |
| --- | :---: |
| |   |
| **Icon with Dropdown** Pairs a small dropdown symbol with an informational icon to improve the users understanding. |   |

#####Button Icons are primarily divided into three groups: **Base**, **Container, and Menu**.

#########The bare variant can be displayed in four sizes: x-small, small, medium (default), and large.

###Contained variants can be displayed in four sizes: xx-small, x-small, small, and medium (default).

###Dropdown menu variants can be displayed in all sizes of bare and container variants: xx-small, x-small, small, medium, and large.

Icon with Dropdown Menu variants can be displayed in all sizes of bare and container variants: xx-small, x-small, small, medium, and large. 

###* On touch devices like phones, buttons are enlarged for easier finger tapping.
* No code changes are needed in the Salesforce Platform context, as this change occurs automatically in Salesforce native mobile applications.

>ℹ️ For users who aren't on the Salesforce Platform, these modifications appear automatically when the secondary touch style sheet is loaded, and touch is the primary method of interaction on the device.

####Don’t use any text when using button icons, except for tooltips that offer context (for example, “Delete record”). Review tooltips for additional content guidance.

#####Button icons follow the same behavior as standard buttons.

1. **Default:** Standard appearance without interaction.
2. **Hover:** Background color changes to show interactivity.
3. **Active:** Icon color changes to show selection.
4. **Focus**: Border or shadow to indicate keyboard focus.
5. **Disabled**: Grayed-out and non-interactive

****Hover vs. Focus:*** *When a user hovers their cursor over an interactive element, a hover state is triggered to indicate this action. Similarly, a focused state is activated when a user highlights an element using an input method like a keyboard or voice.*

##* Hover: Displays a tooltip with additional context.
* Click: Executes the assigned action (for example, delete).
* Pressed: For on or off actions, like favoriting.

##* Align button icons consistently within toolbars or lists.
* Place icons close to the item or area they impact (for example, delete the icon next to the item it removes).

##Button icons are adaptive and have a mobile variant with increased size for touch devices.

##Error and warning button icons are typically used in conjunction with an error and warning popover.

When using feedback button icons in Salesforce, it’s essential to consider error and warning conditions to ensure a smooth user experience. Here are specific guidelines on handling errors and warning states.

* Provide immediate feedback by displaying an error icon and color change on the feedback button to indicate the failure.
* Show an error popover or scoped notification near the icon, such as *“Unable to submit feedback. Check your network connection or try again later.”*
* Allow users to retry their action or automatically queue the feedback for submission when the network is restored.
* Ensure that screen readers announce error messages and have appropriate ARIA labels. 
    * Add `aria-live="assertive"` for high-priority announcements.
    * Add `aria-disabled="true"` on temporarily disabled feedback icons.
    * Ensure all error and warning messages are reachable by screen readers.

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
| Selector | `.slds-button_icon-container` |
| Summary | Creates a button icon inside of a transparent container |
| Support | dev-ready |
| Restrict | button |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-button_icon-inverse` |
| Summary | Creates a button icon inside of a transparent container with a border on an inversed background |
| Support | dev-ready |
| Restrict | button |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-button_icon-brand` |
| Summary | Creates a brand button icon |
| Support | dev-ready |
| Restrict | button |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-button_icon-border` |
| Summary | Creates a button icon inside of a transparent container with a border |
| Support | dev-ready |
| Restrict | button |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-button_icon-border-inverse` |
| Summary | Creates a button icon inside of a transparent container with a border on an inversed background |
| Support | dev-ready |
| Restrict | button |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-button_icon-border-filled` |
| Summary | Creates a button icon inside of a filled container with a border |
| Support | dev-ready |
| Restrict | button |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-is-selected` |
| Summary | Stateful Button Icon |
| Support | dev-ready |
| Restrict | `.slds-button_icon` |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-button__icon_inverse-hint` |
| Summary | A parent class must be put on anything that contains a `.slds-button__icon_inverse-hint` so that the child reacts when the parent is hovered. This is for a dark background. |
| Restrict | `.slds-button_icon` .slds-button__icon |
| | |

| | |
|-------|-------|
| Selector | `.slds-button__icon_hint` |
| Summary | A parent class must be put on anything that contains a `.slds-button__icon_hint` so that the child reacts when the parent is hovered. |
| Restrict | `.slds-button_icon` .slds-button__icon |
| | |

| | |
|-------|-------|
| Selector | `.slds-button_icon-container-more` |
| Summary | Creates a button menu icon container that has no borders |
| Restrict | `.slds-button_icon` |
| | |

| | |
|-------|-------|
| Selector | `.slds-button_icon-more` |
| Summary | Creates a button menu icon container that has borders and a filled background |
| Restrict | `.slds-button_icon` |
| | |

| | |
|-------|-------|
| Selector | `.slds-button_icon-xx-small` |
| Summary | Changes a button icon container to be 16x16px |
| Restrict | `.slds-button_icon` |
| | |

| | |
|-------|-------|
| Selector | `.slds-button_icon-x-small` |
| Summary | Changes a button icon container to be 20x20px |
| Restrict | `.slds-button_icon` |
| | |

| | |
|-------|-------|
| Selector | `.slds-button_icon-small` |
| Summary | Changes a button icon container to be 24x24px |
| Restrict | `.slds-button_icon` |
| | |

| | |
|-------|-------|
| Selector | `.slds-button_icon-large` |
| Summary | Changes a button icon container to be 48x48px |
| Restrict | `.slds-button_icon` |
| | |

| | |
|-------|-------|
| Selector | `.slds-button_icon-current-color` |
| Summary | Apply the current color to the icon contained within |
| Restrict | `.slds-button_icon` |
| | |

| | |
|-------|-------|
| Selector | `.slds-button_icon-warning` |
| Summary | Warning state - Typically used in conjunction with an warning tooltip |
| Restrict | `.slds-button_icon` |
| | |

| | |
|-------|-------|
| Selector | `.slds-button_icon-error` |
| Summary | Error state - Typically used in conjunction with an error toolip |
| Restrict | `.slds-button_icon` |
| | |

| | |
|-------|-------|
| Selector | `.slds-button_icon-inverse` |
| Summary | Bare button icon with no border or background, to be used on an inversed background |
| Restrict | `.slds-button_icon` |
| | |

| | |
|-------|-------|
| Selector | `.slds-button_icon-border-filled` |
| Summary | Neutral themed button icon - Button icon has a border with a filled background |
| Restrict | `.slds-button_icon` |
| | |

| | |
|-------|-------|
| Selector | `.slds-button_icon-brand` |
| Summary | Branded button icon - Button icon has a filled background with the brand color |
| Restrict | `.slds-button_icon` |
| | |

| | |
|-------|-------|
| Selector | `.slds-button_icon-border-inverse` |
| Summary | Button icon with border and transparent background, to be used on an inversed background |
| Restrict | `.slds-button_icon` |
| | |

| | |
|-------|-------|
| Selector | `.slds-button_icon-border` |
| Summary | Transparent themed button icon - Button icon has a border with a transparent background |
| Restrict | `.slds-button_icon` |
| | |

| | |
|-------|-------|
| Selector | `.slds-button_icon-container` |
| Summary | Default width + height for button icon with containers |
| Restrict | `.slds-button_icon` |
| | |

| | |
|-------|-------|
| Selector | `.slds-button_icon` |
| Summary | Creates a button that looks like a plain icon |
| Support | dev-ready |
| Restrict | button |
| Variant | true |
| | |

#####* **Hover State**: Button Icons display a hover effect to visually indicate interactivity.
* **Click Activation**: Users can activate Button Icons with a click, triggering the designated action.

##* **Tab Navigation**: Button Icons should be fully navigable using the Tab key, moving sequentially through focusable elements.
* **Activation**: The Enter or Space keys should trigger the Button Icon’s action when focused.
* **Focus State**: A clear, visible outline around the Button Icon should indicate focus, ensuring it’s easy for keyboard users to identify.

##* **Screen Readers**: Button Icons should have an accessible label (aria-label) that provides clear context for the action (e.g., “Delete record”).
* **Alternative Input Devices**: Button Icons should be operable via various assistive devices, such as speech recognition (e.g., “Click Delete Button”), sip-and-puff devices, and keyboard modifications. Proper labeling ensures compatibility with these devices.
* **Magnification Tools**: For low-vision users, Button Icons should have scalable, high-contrast icons that are clear when magnified.

###* Choose universally recognizable icons for actions (e.g., trash for delete) to ensure users easily understand each Button Icon’s purpose.
* Ensure Button Icons meet color contrast guidelines, especially when using inverse icons on dark backgrounds.
* When possible, provide tooltips that describe the action of the Button Icon. This enhances usability for users who may not immediately recognize an icon’s purpose.

######* Include aria-label descriptions like “Edit record,” “Delete item,” or “Close modal” provide clear context.
* Use standard terms for common actions to ensure consistency and reduce cognitive load.
* Choose simple, commonly understood icons that are intuitive for diverse users.

###Button Icons should be accessible to users in various languages and locales. Ensure that all tooltips, labels, and alternative text are translatable, and icons used should be culturally appropriate for all audiences.

---
*Generated from SLDS Rules Generator*
