# Toast

## Toast

###Toasts provide immediate feedback to a user without disrupting their current task. The toast content is meant to be short and contextual, and provide the user with the information they need to know without getting in their way.

* Toasts inform users about the success or failure of actions, warnings, or other transient messages.
* Toasts let users know about important system events without getting in the way of their work.
* Toasts appear automatically or in response to user interaction.
* Toasts vanish after a specific time period or when the user closes them.

#####* Use concise language to communicate the message clearly.
* To reinforce the purpose of the message, choose the right toast type: success, warning, error, or info.
* Show one toast at a time to avoid overwhelming users.

##* For persistent notifications, use other components like scoped notifications, alerts, or inline text.
* For messages that require immediate user action, consider a modal instead.
* Don't use toasts for situations where feedback isn't critical or can be delivered inline.

###| **Success**  Communicates the successful completion of an action. **Use case:** After a user successfully saves, submits, or completes an action. |   |
| --- | :---: |
| |   |
| **Error**  Indicates an error or failure. **Use case:** When an action fails because the user makes a mistake or there's a system failure. |   |
| |   |
| **Warning**  Alerts users to a potential issue or gives a cautionary message. **Use case:** When actions could result in unexpected outcomes. |   |
| |   |
| **Info**  Provides non-critical information to the user. **Use case:** To communicate updates or general information.   |   |

#########Toasts are responsive and adjust to fit content length while adhering to min and max limits.

####* Keep messages concise, ideally under 100 characters.
* Use plain, accessible language.
* Avoid jargon or overly technical terms.

########Close button, Text link

| |
| --- |

| **Clickable Areas** Close button, Text link |   |
| --- | :---: |

##The `mode` attribute sets the component's dismissal. There are two modes that determine duration:

* **Sticky Toast**
    * Remains on the screen until the user closes it.
    * Use this option for important alerts or information that requires immediate action.
    * Includes a close button to dismiss the toast.
* **Dismissible Toast**
    * Automatically disappears in a few seconds.
    * The amount of time it remains open depends on whether the toast contains a link.
        * No link: 4.8 seconds
        * With link: 9.6 seconds
    * Use this option for non-critical or informational messages that don't need a response.
    * Includes a close button, which enables the user to dismiss it before the timer expires.

The dismissal mode can also depend on the variant and whether the toast has a link.

| **Variant** | **Has link?** | **Default Mode** |
| :---: | :---: | :---: |
| `info` | ✅ | `sticky` |
| `info` | ❌ | `sticky` |
| `success` | ✅ | `sticky` |
| `success` | ❌ | `dismissible` |
| `warning` | ✅ | `sticky` |
| `warning` | ❌ | `sticky` |
| `error` | ✅ | `sticky` |
| `error` | ❌ | `sticky` |

##* Scales fluidly for different screen sizes.
* Text is easy to read and see, regardless of screen size.

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
| Selector | `.slds-notify__close` |
| Summary | Alert close button |
| Restrict | `.slds-notify_toast` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-notify_toast` |
| Summary | Initializes toast notification |
| Restrict | `.slds-notify_container` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-notify` |
| Summary | Initializes notification |
| Restrict | `.slds-notify_container` div |
| | |

| | |
|-------|-------|
| Selector | `.slds-notify_container` |
| Summary | Initializes a toast container |
| Support | dev-ready |
| Restrict | div |
| Variant | true |
| | |

#####* Click the close button to dismiss.

##* Use **Tab** to focus on the Toast.
* **Enter** or **Space** dismiss the Toast.

##* Screen readers announce the type and content of the Toast when it appears.

###* Ensure sufficient color contrast for text and icons.
* Use descriptive, meaningful icons for clarity.

###* Implement ARIA roles (alert or status) for screen reader compatibility.
* Toast should contain `role="alert"` on the container to signal to assistive technology that they require the user’s attention.
* When the design uses multiple toasts simultaneously, set the role to `role="status"`. Historically, toasts would use the role of `alert`, but because you can invoke multiple toasts, assertive alerts would override previous toasts in the screen reader's speech queue. The role of `status` is a polite live region, which does not clear the queue, reducing the risk of a missed toast message.
* Use a span with `slds-assistive-text` to let the user know what type of notification it is.
* Set auto-dismiss with a duration sufficient for all users to read the message.

###* Write messages with clear, actionable language.

###* Include ARIA labels describing the Toast's type and purpose (e.g., "Success: Your changes have been saved.").

###* Support translations for message text and accessibility labels.
* Account for text length variations in different languages.

---
*Generated from SLDS Rules Generator*
