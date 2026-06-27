# Avatar

## Avatar

###* Avatars represent people, companies, or entities using an icon, image, or initials within a container. 
* Avatars are common across Salesforce applications, used in user profiles, contact lists, messaging interfaces, and other places where an image or icon is needed. They give users a visual cue to easily identify individuals or groups.

#####* Select the right avatar size to help maintain visual hierarchy and usability in your interface. Use a size that's appropriate to the context, so the avatars don't overwhelm your layout or appear too small. 
* Identify how best to represent an individual, company, or entity as an avatar.

##* Don't use avatars if they don’t add meaningful information, such as in lists with limited space or where textual identification alone is sufficient.
* Too many avatars in data-heavy components such as data tables or reports can distract from important information and make it harder to read.
* Don't use avatars to represent non-personal, non-entity content, as this can confuse users.

###Avatar types vary by use case and application. Typically, they fall into one of two categories: representing a person or entity. Within these categories, fallback variants are available as icons or initials.

| **Profile**  A profile avatar is often used as a default avatar until a user replaces it.  |  *Profile avatar* |
| --- | :---: |
| |   |
| **Group Avatar**  A group avatar is ideal for team or group settings, like collaborative spaces, where multiple people are represented together.  |  *Group avatar* |
| |   |
| **User Image**  The user image avatar is an illustration of an individual that replaces the default profile image provided by Salesforce.   |  *Basic avatar* |
| |   |
| **Fallback User Icon**  When a user image path is invalid, the fallback user icon becomes the default. |  *Fallback user icon* |
| |   |
| **Fallback Entity Icon**  When an image path for an entity is invalid, the fallback entity icon becomes the default. |  *Custom icon avatar for entity* |
| |   |
| **Fallback User Initials**  If an image is unavailable, up to two letters can be used instead. For individuals, when the record name contains two words such as first and last name, use the first capitalized letter of each. |  *Fallback user initials* |
| |   |
| **Fallback Entity Initials**  If an image is unavailable, up to two letters can be used instead. For entities, when the record name is a single word, use the first two letters of that word using one capital and one lowercase letter. |  *Fallback entity initials* |
| |   |
| **Custom Icon**  The user image avatar is an image of an individual that replaces the default profile image provided by Salesforce. |  *Custom icon avatar*  |

###An avatar’s anatomy consists of a container containing an icon, a set of initials, or an image.

######Avatars are available in four sizes.

| **Extra Small**20x20 pixels | **Small**24x24 pixels | **Medium**32x32 pixels | **Large**48x48 pixels |
| :---: | :---: | :---: | :---: |

#####Interactive avatars are wrapped in a button container so they highlight when you hover over them. By default, clicking an avatar opens a popover with more details about the individual or entity. Sometimes, a text link is added to the avatar to help users identify related records, such as an owner, account, or other key elements in Salesforce.

Avatars can also be used as an image link, allowing users to navigate to other product areas. 

##Avatars representing a logged-in user are found in the upper right corner of the global header in Salesforce. Other common areas are contact cards, simple data tables, and messaging-type components where users can communicate. 

Ensure sufficient space around the avatar to avoid crowding and help it stand out, typically with a margin of 4-8 pixels. For extra-small linked avatars (20px by 20px), ensure the clickable area is at least 24px to improve accessibility and usability.

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
| Selector | `.slds-avatar__initials_inverse` |
| Summary | Used for initials that are dark text on light background |
| Restrict | `.slds-avatar__initials` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-avatar-grouped__initials` |
| Summary | Modifier for the initials Avatar in an Avatar Group |
| Restrict | `.slds-avatar__initials` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-avatar__initials` |
| Summary | Used for initials inside an avatar |
| Support | dev-ready |
| Restrict | `.slds-avatar` abbr |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-avatar_circle` |
| Summary | Make avatar a circle |
| Restrict | `.slds-avatar` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-avatar_large` |
| Summary | Size modifier for avatars - Large |
| Restrict | `.slds-avatar` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-avatar_medium` |
| Summary | Size modifier for avatars - Medium |
| Restrict | `.slds-avatar` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-avatar_small` |
| Summary | Size modifier for avatars - Small |
| Restrict | `.slds-avatar` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-avatar_x-small` |
| Summary | Size modifier for avatars - X-Small |
| Restrict | `.slds-avatar` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-avatar_profile-image-large` |
| Summary | Uses the large user avatar image as the avatar icon |
| Restrict | `.slds-avatar` |
| | |

| | |
|-------|-------|
| Selector | `.slds-avatar_profile-image-medium` |
| Summary | Uses the medium user avatar image as the avatar icon |
| Restrict | `.slds-avatar` |
| | |

| | |
|-------|-------|
| Selector | `.slds-avatar_profile-image-small` |
| Summary | Uses the small user avatar image as the avatar icon |
| Restrict | `.slds-avatar` |
| | |

| | |
|-------|-------|
| Selector | `.slds-avatar_group-image-large` |
| Summary | Uses the large group image as the avatar icon |
| Restrict | `.slds-avatar` |
| | |

| | |
|-------|-------|
| Selector | `.slds-avatar_group-image-medium` |
| Summary | Uses the medium group image as the avatar icon |
| Restrict | `.slds-avatar` |
| | |

| | |
|-------|-------|
| Selector | `.slds-avatar_group-image-small` |
| Summary | Uses the small group image as the avatar icon |
| Restrict | `.slds-avatar` |
| | |

| | |
|-------|-------|
| Selector | `.slds-avatar` |
| Summary | Creates an avatar component |
| Support | dev-ready |
| Restrict | div, span, a |
| Variant | true |
| | |

#####Ensure visible focus indicators (e.g., outlines) appear on avatars when focused.

* **Tab**: Moves focus to and between avatars.
* **Enter/Spacebar**: Activates interactive avatars.

##* **Clickable Areas**: Interactive avatars should have a clearly defined and appropriately sized clickable area for ease of use.
* **Hover Feedback**: Provide visual feedback (e.g., changes in color, border, or shadow) when a user hovers over an interactive avatar to indicate interactivity.
* **Tooltips or Pop-ups**: If additional information appears on hover, ensure the same information is accessible via focus or click for keyboard users.
* **Focus vs. Hover**: Differentiate between hover and focus states so users relying on a keyboard can distinguish interactive elements.

###* When deviating from the standard Avatar styling hooks, ensure proper contrast ratios against their background.
* Design avatars that are visually clear and appropriately sized to fit within the layout without overwhelming it.

########* Add clear and descriptive alternative text to each avatar to help screen readers identifying the person or entity depicted. If the avatar is a user’s profile picture, the alt text can include the person’s full name, such as "Alex Brown." For generic icons (e.g., a group icon), describe them with text like "Group icon."
* When an avatar appears alongside a visible name, adding the name to the alt text can lead to redundancy.
* We recommend setting the alt attribute to an empty value (`alt=""`) to hide the graphic from screen readers. Additionally, phrases like "picture of" are generally unnecessary, as screen readers already identify the image type.

##* Provide descriptive labels or text alongside avatars to clarify their purpose or associated entity. Avoid relying on images alone for key information.

---
*Generated from SLDS Rules Generator*
