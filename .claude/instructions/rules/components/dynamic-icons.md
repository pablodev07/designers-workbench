# Dynamic Icons

## Dynamic Icons

###Dynamic icons provide animated visual cues that indicate specific actions, states, or insights. This immediate visual feedback helps users understand the function and status of elements in the interface. Dynamic icons help users quickly understand content status or navigate functions without excessive UI text.

#####* Use dynamic icons to supplement text or other UI elements, provide visual feedback, or emphasize a state such as success, error, or loading.
* Use dynamic icons sparingly to avoid overwhelming the user interface and maintain clarity.
* Update icons like loading spinners and success indicators in real time to reflect current status.
* To create a more intuitive experience for users, pair icons with interactive elements like buttons, links, or toggles.

##* Don’t use dynamic icons as a replacement for actionable components like buttons or links that need direct user interaction.
* Use the correct icon type that aligns with their purpose:
    * **Utility icons:** For actions or functionality (such as edit and refresh).
    * **Dynamic icons:** For real-time status changes (such as loading spinners, success indicators).
    * **Standard icons:** For Salesforce-specific objects (such as Accounts, Opportunities).

###| **Ellie Icon**  Represents Einstein features. Used to signal AI-powered insights and recommendations across various Salesforce products. **Use case:** Used in lead management or case resolution, helping users make data-driven decisions.  |   |
| --- | :---: |
| |   |
| **EQ Icon**  Displays a pulsing animation while loading data to indicate an ongoing process. **Use case:** Used in the customer support panel, offering emotional context and sentiment analysis to help support agents tailor their responses.  |   |
| |   |
| **Strength Icon**  Used for password strength indicators in contexts such as user account setup or password updates. **Use case:** The Strength icon is used in Salesforce’s user account settings or login pages to visually represent password strength, guiding users to create secure passwords. |   |
| |   |
| **Score Icon**  Displays key scores to inform users of account status or engagement level.  **Use case:** The Score icon is shown on account pages, helping sales teams quickly assess lead quality or engagement levels to prioritize follow-up actions.  |   |
| |   |
| **Trend Icon**  Visualizes directional trends in data to highlight changes over time. **Use case:** The Trend icon is used in analytics sections to show sales, performance, or usage trends, helping users spot upward or downward movements at a glance. |   |
| |   |
| **Typing Icon**  Indicates when a user is actively composing a message. **Use Case:** The Typing icon appears in live chat windows, showing support agents or users that the other party is typing. |   |
| |   |
| **Waffle Icon**  Used to access the Salesforce App Launcher. **Use Case:** The Waffle icon is located in the header and opens the App Launcher, allowing users to quickly switch between Salesforce applications like Sales Cloud, Service Cloud, or Experience Cloud. |   |
| |   |

#######Dynamic Icons can exhibit various states, including:

* **Default:** The standard appearance of the icon, such as Ellie showing its smiling face when idle.
* **Hover**: Only the Waffle and Global Action Help Dynamic Icons use a hover state. The hover state is triggered when the mouse cursor hovers over the icon, and provides a visual indicator such as color or size.
* **Active:** Occurs when the icon is clicked or selected, like Help changing its appearance to indicate an action has been triggered.
* **Error or Failure State:** Icons like Strength change their appearance to show errors, for example if a password is too weak and a red icon appears.
* **Pause State:** Icons like Ellie and Strength pause when waiting for user input. Typing pauses when typing activity stops.
* **Static State:** Icons like Ellie stop updating or animating, signaling completion of an action.
* **Typing State:** Indicates typing activity is detected. Pauses when typing activity stops.

##Dynamic icons are interactive depending on context. Some icons act as visual indicators, while others trigger actions. For example:

* **Feedback:** The animated Typing dynamic icon provides an animated visual indicator of an ongoing process.
* **Actionable:** Waffle opens a menu or displays additional resources when clicked. 
* **Static:** Trend icon, Ellie, and Strength serve as informational indicators without triggering further actions.

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
| Selector | `.slds-icon-waffle` |
| Summary | Element container circles for the waffle icon |
| Restrict | `.slds-icon-waffle_container` > span |
| | |

| | |
|-------|-------|
| Selector | `.slds-icon-waffle_container` |
| Summary | Containing actionable element that holds the waffle icon |
| Support | dev-ready |
| Restrict | button |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-icon-typing__dot` |
| Summary | Dots within the typing icon |
| Restrict | `.slds-icon-typing` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-is-paused` |
| Summary | Add when you wish to pause the dots animation |
| Restrict | `.slds-icon-typing` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-is-animated` |
| Summary | Add when you wish to animate the dots |
| Restrict | `.slds-icon-typing` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-icon-typing` |
| Summary | Initializes typing icon |
| Support | dev-ready |
| Restrict | span |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-icon-trend__circle` |
| Summary | Circle element inside of trend icon |
| Restrict | `.slds-icon-trend` circle |
| | |

| | |
|-------|-------|
| Selector | `.slds-icon-trend__arrow` |
| Summary | Arrow element inside of trend icon |
| Restrict | `.slds-icon-trend` path |
| | |

| | |
|-------|-------|
| Selector | `.slds-is-paused` |
| Summary | Add `.slds-is-paused` to the SVG to pause the icon with an animation. |
| Restrict | `.slds-icon-trend` |
| | |

| | |
|-------|-------|
| Selector | `.slds-is-animated` |
| Summary | Add `.slds-is-animated` to the SVG to enhance the icon with an animation. |
| Restrict | `.slds-icon-trend` |
| | |

| | |
|-------|-------|
| Selector | `.slds-icon-trend` |
| Summary | Initializes trend icon |
| Support | dev-ready |
| Restrict | span |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-is-paused` |
| Summary | Add `.slds-is-paused` to the SVG to pause the icon with an animation. |
| Restrict | `.slds-icon-strength` |
| | |

| | |
|-------|-------|
| Selector | `.slds-is-animated` |
| Summary | Add `.slds-is-animated` to the SVG to enhance the icon with an animation. |
| Restrict | `.slds-icon-strength` |
| | |

| | |
|-------|-------|
| Selector | `.slds-icon-strength` |
| Summary | Initializes strength icon |
| Support | dev-ready |
| Restrict | span |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-icon-score__negative` |
| Summary | Negative score icon |
| Restrict | `.slds-icon-score` svg |
| | |

| | |
|-------|-------|
| Selector | `.slds-icon-score__positive` |
| Summary | Positive score icon |
| Restrict | `.slds-icon-score` svg |
| | |

| | |
|-------|-------|
| Selector | `.slds-icon-score` |
| Summary | Initializes score icon |
| Support | dev-ready |
| Restrict | span |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-icon-help_focus` |
| Summary | Modifies focus effect of global help icon |
| Restrict | `.slds-icon-help` circle |
| | |

| | |
|-------|-------|
| Selector | `.slds-icon-help_hover` |
| Summary | Modifies hover effect of global help icon |
| Restrict | `.slds-icon-help` circle |
| | |

| | |
|-------|-------|
| Selector | `.slds-icon-help` |
| Summary | Hover and click animations for help icon |
| Support | prototype |
| Restrict | button, a |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-icon-eq__bar` |
| Summary | Vertical bar for equalizer icon |
| Restrict | `.slds-icon-eq` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-is-animated` |
| Summary | Turn animation on for animated icon |
| Restrict | `.slds-icon-eq` |
| | |

| | |
|-------|-------|
| Selector | `.slds-icon-eq` |
| Summary | No description available |
| Support | dev-ready |
| Restrict | div |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-is-paused` |
| Summary | Add `.slds-is-paused` to the SVG to pause the icon with an animation. |
| Restrict | `.slds-icon-ellie` |
| | |

| | |
|-------|-------|
| Selector | `.slds-is-animated` |
| Summary | Add `.slds-is-animated` to the SVG to enhance the icon with an animation. |
| Restrict | `.slds-icon-ellie` |
| | |

| | |
|-------|-------|
| Selector | `.slds-icon-ellie` |
| Summary | No description available |
| Support | dev-ready |
| Restrict | span |
| Variant | true |
| | |

#####* **Cursor Change**: The cursor must change to indicate interactive elements, such as changing to a pointer when hovering over the icons.

##| **Action** | **Key Combination** | **Description** |
| :--- | :--- | :--- |
| Focus Icon | Tab | Moves focus to the next interactive icon. |
| Activate Icon | Enter / Space | Activates the focused icon to trigger its action. |
| Navigate Icons | Arrow Keys (Left/Right) | Cycles through icons without losing focus. |

#####* **Screen Readers**: Icons should have descriptive labels that convey their purpose. Screen readers will announce the action associated with each icon when focused.
* **Magnifiers**: The component must maintain clarity and usability when zoomed in, ensuring no critical information is lost.
* **Alternative Input Devices**: Users of speech recognition software must be able to activate icons via voice commands, while users of braille displays should receive accurate feedback on the focused icon’s action.

###* **Color Contrast**: Ensure sufficient contrast between icons and backgrounds for users with low vision. Avoid using color alone to convey meaning.
* **Tooltips and Accessible Labels**: Provide descriptive tooltips or aria-labels for screen readers. Avoid ambiguity to ensure icons are understood by all users.
* **Avoid Overuse**: Limit the number of dynamic icons to avoid overwhelming users, particularly those with cognitive disabilities.

######* **Text Alternatives**: Provide meaningful alt text for dynamic icons to describe their state or purpose for screen reader users.
* **Error Messages**: Provide clear, accessible error messages and instructions in a way that assists all users in understanding what is required.

---
*Generated from SLDS Rules Generator*
