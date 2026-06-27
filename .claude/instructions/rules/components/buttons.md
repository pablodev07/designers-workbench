# Buttons

## Buttons

###* Used across Salesforce products to perform common actions.
* Buttons provide a familiar, accessible way for users to engage with the interface, increasing efficiency and user satisfaction.
* Different button styles are provided to fit many contexts and user needs—brand, neutral, base, destructive, destructive text, success, and inverse.

#####The HTML elements for buttons and links describe a very specific type of action that is going to be taken when they are used. It is important you know when to use which, as the distinction matters:

* Use a **link** when you’re **navigating to another place**, such as: a "view all" page, "Jane Chen" profile, a page "skip link" etc.
* Use **buttons** when you are **performing an action**, such as: "submit," "merge," "create new," "upload," etc.
* An action is almost **always** on the same page

##* Use button labels that describe actions, such as “Submit,” “Save”.
* Choose button types (such as brand, neutral) to match the action’s importance.
* Use buttons to perform an action, such as: "submit," "merge," "create new," "upload," and so on.
* Buttons perform an action on the same page where they are located.
* Maintain sufficient spacing around buttons to prevent accidental clicks.

##* Don’t use too many buttons on one screen, which can overwhelm users.
* Avoid vague labels like “Click Here” or “More.”
* Use a link instead of a button to navigate to another place, such as a "view all" page, "Jane Chen" profile, and so on.

###| **Brand**  Brand buttons are used for primary actions that drive the main purpose of the page or form. Brand buttons effectively guide users toward their primary goals by creating visual clarity and focus, making tasks more efficient and intentional.  ****When to Use Brand Buttons**** When a page or form has a clear primary action that users are expected to take, such as “Save,” “Submit,” or “Continue,” a brand button highlights that path. To guide users through multi-step processes by highlighting key steps in a multi-step process. . For completing tasks with high impact, such as “Approve” on an approval request.  ****When Not to Use Brand Buttons**** Avoid using brand buttons for secondary or supporting actions like “Cancel,” “Reset,” or “Back.” Instead, use neutral buttons to reduce visual clutter and avoid competing actions. If a page has more than one possible primary action, using multiple brand buttons can confuse users about the priority. Consider which action is most important or break out other actions as links, neutral, or base buttons. Avoid using brand buttons for actions like “Delete” or “Remove,” as the high-contrast color can give unintended encouragement to proceed. Use a destructive or destructive text button to signal caution.  |    |
| :--- | :---: |
| |   |
| **Neutral**  Neutral buttons are used for secondary actions that are important but not the main focus of a page. They're designed to be visually less prominent than brand buttons, helping users differentiate between primary and supporting actions.   ****When to Use Neutral Buttons**** Use for actions like "Cancel," "Back," or "Close," alongside primary actions like "Submit.". Perfect for tasks like "View Details" or "More Information," indicating their secondary nature. Balance multiple actions, such as pairing "Save" (brand) with "Cancel" (neutral) in a modal. Use in lists or cards for less critical tasks like "View" or "Edit," keeping the interface visually clear.  ****When Not to Use Neutral Buttons**** Avoid for key actions like "Submit" or "Save," which need brand buttons for emphasis. Don't use for actions like "Delete" or "Remove." Use destructive buttons to signal caution. Avoid for critical steps like "Next" or "Continue," which require more visual importance.  |   |
| |   |
| **Base**  Base buttons are minimal, without borders or background styling. They're best for utility or tertiary actions that don’t need visual emphasis, keeping the interface clean and unobtrusive.  ****When to Use Base Buttons**** Ideal for supplementary tasks like "Learn More" or "Details" that support the main workflow. Use when the action should blend into content, like "Forgot Password?" in a form.  ****When Not to Use Base Buttons**** Avoid for critical tasks like "Submit" or "Save," which need more visual prominence. Don't use for risky actions like "Delete." Use destructive buttons to convey caution. Avoid when users need a clear indication of interactivity, as base buttons can look like plain text.**.**  |   |
| |   |
| **Brand Outline**  Brand outline buttons are less visually dominant than brand buttons but still emphasize important actions. They feature a Salesforce primary color outline for a softer, balanced look, making them ideal for secondary or alternative actions.  ****When to Use Brand Outline Buttons**** Use for important secondary actions, like "Preview" or "More Info," placed next to a main brand button, such as "Submit.". Ideal for primary actions that don’t require a strong emphasis, like "Skip" or "Start Tutorial.". Ideal for offering options without overshadowing the main action, such as  "Save for Later" alongside "Checkout". ****When Not to Use Brand Outline Buttons**** Use a standard brand button for the most critical action, like "Submit.". Don't use for risky actions like "Delete." Use destructive buttons to convey caution. Limit usage to avoid clutter. Focus on highlighting the most critical actions.**.** |   |
| |   |
| **Destructive**  Destructive buttons are used for actions that carry serious consequences, such as deleting or permanently altering data. These buttons are styled using the error alert palette to signal the importance and potential risk of the action. Destructive buttons are intended to prompt users to think twice before clicking, helping to prevent unintended changes or data loss.   ****When to Use Destructive Buttons**** For permanent actions like "Delete Account" or "Clear Data" that can't be undone. In dialogs or forms where deletion is the main focus, such as for "Are you sure you want to delete this record?" confirmation prompt. For tasks that affect workflows or data integrity, such as "Remove Contact" from a case. For critical bulk actions like "Delete All," to make sure users understand the effect. ****When Not to Use Destructive Buttons**** Use neutral or base buttons for actions that have no lasting effects, like "Cancel" or "Close". Use a single primary destructive button and destructive text buttons for secondary options to avoid overwhelming users. Avoid using destructive buttons for actions like "Clear Filters" or "Reset Settings" that don't involve data loss. |   |
| |   |
| **Destructive Text**  Destructive text buttons are used for secondary actions with potential negative effects, signaling caution without overshadowing primary actions. ****When to Use Destructive Text Buttons**** For less critical tasks like removing an attachment or clearing a form field. Use where the action isn’t the main focus, like "Delete Optional Note.". Balance with primary actions, such as pairing "Save" (brand) with "Cancel" (destructive text). ****When Not to Use Destructive Text Buttons**** Avoid using destructive text buttons as the only button on the page to prevent confusion or reduced visibility. Use a solid destructive button for critical actions like permanently deleting a record. |   |
| |   |
| **Success**  Success buttons are used in Salesforce products to indicate actions that confirm positive outcomes, such as submitting or completing a task successfully. These buttons guide users toward actions that lead to completion, achievement, or confirmation of a successful status. Success buttons reinforce a sense of accomplishment and help Salesforce users recognize that they’ve achieved key milestones in their workflows.  ****When to Use Success Buttons**** For actions like "Complete" or "Approve" that signify task completion or a positive result. Use for milestones, like "Finish Setup" in onboarding, to reinforce accomplishment. For actions like "Convert Lead" or "Close Case" that represent success for the user and organization.  ****When Not to Use Success Buttons**** Avoid using success buttons for transitional steps like "Next" in a process; use brand buttons instead. Never use for tasks like "Delete" or "Remove"; use destructive buttons instead. Avoid using for inconsequential actions like "Cancel" or "Back"; use neutral buttons to prevent confusion. |   |
| |   |
| **Stateful and Dual Stateful Buttons**  Stateful buttons represent a single switch of an ongoing state. When clicked, the label and icon change to reflect the current state, helping users easily understand the status of an action. Common examples include switching a feature on or off, marking an item as "Favorite," or indicating an active subscription. While stateful buttons retain the same neutral style in both states, dual stateful buttons change their appearance between neutral and brand styles.  ****Selected with Hover state**** Stateful buttons can display different content (label and icon) on hover and focus, such as “Unfollow” on a “Follow”/”Following” button.  ****When to Use Stateful and Dual Stateful Buttons**** Use stateful buttons to show whether a feature is currently enabled or disabled.  ****Best Practices for Stateful Buttons**** Make sure that the button’s label reflects the current state, like showing "Following" or "Follow" instead of only icons. Provide ARIA attributes to describe each state, so screen readers can announce the current state to low-vision users. |   |
| |   |
| **Inverse**  Inverse buttons are designed for use on dark or colored backgrounds, where standard buttons lack sufficient contrast. They feature white text with a white border to make the button readable and visually clear. These buttons maintain accessibility and usability in contexts where the default button styles don't stand out effectively.  ****When to Use Inverse Buttons**** Use inverse buttons when designing for sections on dark backgrounds.  ****When Not to Use Inverse Buttons**** Avoid using inverse buttons on light backgrounds, as they don't stand out and can cause visual confusion. Don't use inverse buttons alongside standard buttons unless there’s a clear visual or functional distinction between the two. Mixing styles can confuse users about the hierarchy of actions. |   |

#######Buttons have one size, but are adaptive. They have a mobile variant designed specifically for use on mobile devices. See [Responsive section](https://www.lightningdesignsystem.com/2e1ef8501/p/7733f8-buttons/t/725014eeae) for more information.

By default, button widths adapt to the content. To expand the button to take up the entire width available, apply the `.slds-button_stretch` class to the button. If using the `lightning-button` base component, add the `stretch` attribute to your markup instead.

####* Make button labels concise, clear, and action-oriented.
* Use Title Case for the label
* Describe actions

#####1. **Default: **Button ready for interaction.
2. **Hover: **Changes appearance to indicate interactivity.
3. **Active:** When clicked, the button’s appearance changes to show that the action has been initiated. If it triggers a menu, popover, or panel, the button remains in the active state while the triggered component is open.
4. **Focus:** A distinct style when using keyboard navigation. Focus shows the button is ready to receive input from the user.
5. **Disabled:** Indicates an inactive or unavailable action.

##Show a loading spinner for actions requiring processing time.

##Buttons adapt to screen size, ensuring usability on mobile and desktop. Mobile buttons are optimized for smaller screens and thumb-friendly interactions, so users can navigate and complete tasks comfortably on mobile.

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
| Selector | `.slds-is-selected` |
| Summary | When button is pressed and selected |
| Restrict | `.slds-button_stateful` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-is-selected-clicked` |
| Summary | When button is selected and still has focus from click |
| Restrict | `.slds-button_stateful` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-text-not-selected` |
| Summary | Shown text when button is not selected - default state |
| Restrict | `.slds-button_stateful` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-text-selected-focus` |
| Summary | Shown text when button is selected and focused |
| Restrict | `.slds-button_stateful` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-text-selected` |
| Summary | Shown text when button is selected |
| Restrict | `.slds-button_stateful` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-not-selected` |
| Summary | No description available |
| Restrict | `.slds-button_stateful` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-button_stateful` |
| Summary | Initiates a stateful button |
| Support | dev-ready |
| Restrict | button |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-is-pressed` |
| Summary | When button is in pressed state |
| Restrict | `.slds-button_dual-stateful` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-text-pressed` |
| Summary | Shown text when button is pressed |
| Restrict | `.slds-button_dual-stateful` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-text-not-pressed` |
| Summary | Shown text when button is not pressed - default state |
| Restrict | `.slds-button_dual-stateful` span |
| | |

| | |
|-------|-------|
| Selector | `.slds-button_dual-stateful` |
| Summary | Initiates a dual stateful button |
| Support | dev-ready |
| Restrict | button |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-input__button_increment` |
| Summary | Positions increment button within counter input field |
| Restrict | `.slds-button` |
| | |

| | |
|-------|-------|
| Selector | `.slds-input__button_decrement` |
| Summary | Positions decrement button within counter input field |
| Restrict |  `.slds-button` |
| | |

| | |
|-------|-------|
| Selector | `.slds-button_stretch` |
| Summary | Creates a button style for 100% width with centered text that maintains current styling |
| Restrict | `.slds-button` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-button_full-width` |
| Summary | Creates a button style for full width that resets styling |
| Restrict | `.slds-button` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-icon_x-small` |
| Summary | No description available |
| Restrict | .slds-icon, `.slds-button__icon` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-button__icon_right` |
| Summary | Position of icon when sitting to the right side of the text when inside a button |
| Restrict | .slds-button__icon, `.slds-button__icon_stateful` |
| | |

| | |
|-------|-------|
| Selector | `.slds-button__icon_left` |
| Summary | Position of icon when sitting to the left side of the text when inside a button |
| Restrict | .slds-button__icon, `.slds-button__icon_stateful` |
| | |

| | |
|-------|-------|
| Selector | `.slds-button__icon_x-small` |
| Summary | X-Small size button icon svg |
| Restrict | `.slds-button__icon` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-button__icon_small` |
| Summary | Small size button icon svg |
| Restrict | `.slds-button__icon` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-button__icon_large` |
| Summary | Large size button icon svg |
| Restrict | `.slds-button__icon` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-button__icon_x-small` |
| Summary | X-Small size for button icon svg |
| Support | dev-ready |
| Restrict | `.slds-button__icon` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-button__icon_small` |
| Summary | Small size for button icon svg |
| Support | dev-ready |
| Restrict | `.slds-button__icon` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-button__icon_large` |
| Summary | Large size for button icon svg |
| Support | dev-ready |
| Restrict | `.slds-button__icon` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-button__icon` |
| Summary | Sizing for icon that sits inside button__icon |
| Support | dev-ready |
| Restrict | `.slds-button` svg |
| Variant | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-button_success` |
| Summary | Creates a green button style |
| Restrict | `.slds-button` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-button_text-destructive` |
| Summary | Creates a neutral button with red text |
| Restrict | `.slds-button` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-button_destructive` |
| Summary | Creates a red button style |
| Restrict | `.slds-button` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-button_inverse` |
| Summary | Creates the inverse style for dark backgrounds |
| Restrict | `.slds-button` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-button_outline-brand` |
| Summary | Creates the outlined button with the brand color |
| Restrict | `.slds-button` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-button_brand` |
| Summary | Creates the brand blue Salesforce style |
| Restrict | `.slds-button` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-button_neutral` |
| Summary | Creates the gray border with white background default style |
| Restrict | `.slds-button` |
| Modifier | true |
| | |

| | |
|-------|-------|
| Selector | `.slds-button_last` |
| Summary | Explicitly style the last button in a button group |
| Restrict | `.slds-button` |
| | |

| | |
|-------|-------|
| Selector | `.slds-button_middle` |
| Summary | Explicitly style buttons in the middle (i.e., not first or last) in a button group |
| Restrict | `.slds-button` |
| | |

| | |
|-------|-------|
| Selector | `.slds-button_first` |
| Summary | Explicitly style the first button in a button group |
| Restrict | `.slds-button` |
| | |

| | |
|-------|-------|
| Selector | `.slds-button` |
| Summary | This neutralizes all the base styles making it look like a text link |
| Support | dev-ready |
| Restrict | button, a, span |
| Variant | true |
| | |

#####* Users should be able to interact with buttons using standard mouse actions. 
* Hover states provide a visual cue that indicates the button is clickable. On hover, the appearance changes and the cursor becomes a pointer (hand icon).

##* **Keyboard Commands**: Buttons must be navigable and operable with the keyboard alone.
    * **Tab**: Moves focus to the next interactive element on the page.
    * **Enter/Space**: Activates the button’s action.
* **Initial Focus**: Ensure the button is included in the tab order and receives focus in a logical sequence, improving navigation for users relying on keyboard interaction.

##* **Screen Readers**: Buttons should have descriptive labels (e.g., `aria-label`) to convey purpose when read aloud by screen readers.
* **Alternative Input Devices**: Users with devices like speech recognition or sip-and-puff devices should be able to focus on and activate buttons. Labels should be clear and intuitive to aid users who may rely on voice commands.
* **Braille Displays**: Buttons with appropriate ARIA labels provide readable content to braille displays, ensuring users understand each button’s purpose.

###Designers must ensure that buttons are visually distinguishable and comply with color contrast standards (e.g., WCAG minimum contrast ratio of 4.5:1 for text). Key responsibilities include:

* **Focus and Hover States**: Define clear visual styles for focus and hover states, allowing users to identify interactive elements visually and with keyboard navigation.
* **Color Contrast**:  Ensure that button text and background colors meet accessibility contrast requirements.
* **Consistent Layouts**:  Place primary actions (e.g., Brand buttons) prominently and secondary actions less prominently to guide users visually.
* **Accessible Labels**: Include labels that clearly communicate the button’s function (e.g., “Submit Form” rather than “Submit”).

########* **Concise Labels**: Button text should be short and descriptive (e.g., “Save” or “Submit”). Avoid vague terms like “Click Here.”
* **Accessible Language**: Button labels should use plain language, with additional context provided through ARIA attributes where necessary.
* **Avoid Abbreviations and Acronyms**: If an abbreviation or acronym is necessary, ensure it is widely recognized or provide a full description elsewhere on the page.

##* Labels should be short, to ensure that localized text will fit. Design with different languages in mind to avoid truncation.
* Account for right-to-left (RTL) languages (e.g., Arabic, Hebrew) by ensuring that content dynamically adapts to RTL layouts.

---
*Generated from SLDS Rules Generator*
