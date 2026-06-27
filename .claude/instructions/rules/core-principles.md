# SLDS Core Principles

# ⚠️ MANUALLY MAINTAINED FILE

**This file is manually maintained and will NOT be overwritten by the generation scripts.**

- ✅ **Edit this file directly** to update core principles
- ✅ **Changes will persist** across generation runs
- ✅ **No automatic overwriting** from source files

---

You are an expert in Salesforce Lightning Design System (SLDS) and using SLDS to design enterprise software. All generated designs will follow the guidance and best practices from https://www.lightningdesignsystem.com

# UX Principles
* The design should be easy to learn, understand, and navigate without explicit instruction.
* Respect progressive disclosure: don't overwhelm users.
* Use space, layouts, and data-density strategically to drive clarity.
* Use consistent interactions across flows, apps, and pages.
* Always test with assistive technologies, Salesforce customers, and internal users.

# Visual Design
* Use SLDS utility classes and styling hook values for visual consistency.
* Follow SLDS spacing scale for margins and padding.
* Apply styling hooks (`--slds-c-color-background`) instead of hardcoded values.
* Maintain brand-appropriate themes using semantic styling hooks.
* Establish information hierarchy using SLDS typography heading levels and card components.
* All text and interactive elements must meet WCAG 2.1 color contrast standards between the element and the background behind the element.
* All content must be in card containers.
* The SLDS grid system is a responsive base-8 grid meaning that all spacing values are a multiple or fraction of the number 8.
* Micro content layouts within a card must use the SLDS grid. 
* Macro parent layouts that contain multiple cards on a page must also use the SLDS grid.
* Spacing within a card layout, and between cards in a page layout, must be consistent to ensure visual separation and grid alignment.
* Cards stacked on top of each other must align vertically within a grid.
* Cards adjacent to each other in multiple columns must be aligned horizontally within a grid.
* Layouts must including spacing between the edges of a viewport and the content so that the content cards never touch the edges of the viewport.
* Horizontally adjacent cards should always attempt to be the same height as one another using the SLDS grid so there are no odd sized gaps between card content.
* Text, icons, and other content elements must use apppropriate spacing within cards so that the elements have spacing between the edge of the card and the content. 
* If no specific spacing within the card is specified, use the `slds-p-around_small` utility class.
* Always use SLDS utility classes for spacing, alignment, text, and sizing (e.g., `slds-m-around_medium`, `slds-text-align_center`, `slds-p-horizontal_small`). Avoid custom classes for these purposes unless absolutely necessary.
* Only use SLDS icons for any iconography requirements.
* Always use `<lightning-icon>` for SLDS icons.
* Standard Object icons should be used adjacent to record titles.
* Utility icons should be used for most other icon needs.
* Never use Action icons in a web app, only use them in native mobile apps

# Component Usage
* Use Lightning Web Component from the component reference whenever possible https://developer.salesforce.com/docs/component-library/overview/components
* Use Lightning Web Component references (e.g., `<lightning-card>`, `<lightning-datatable>`, `<lightning-button>`) instead of raw SLDS markup whenever possible. Only use SLDS markup if a Lightning Base Component does not exist for the use case.
* If a Lightning Web Component needs customization, use styling hooks and slots.
* Only oveerride SLDS CSS with styling hooks, nothing else.
* Follow structural markup patterns for each component (e.g., `slds-modal`, `slds-button`, `slds-form-element`).
* Apply utility classes rather than custom CSS to reduce override complexity.
* Use only documented SLDS variants for buttons, forms, inputs, etc.
* Always run the SLDS Linter tool and address issues it reports.
* Compose larger components by using a combination of smaller Lightning Base Components.
* Break down large UIs into smaller, reusable LWC components. Each component should have its own folder using kebab-case, and the main class should use PascalCase.
* All components that display data must handle empty, loading, and error states gracefully, using SLDS illustrations or messages where appropriate.

# Interaction Patterns
* Use modal dialogs (`slds-modal`) for focused, interruptive tasks.
* Use toast notifications (`slds-notify_toast`) for transient system feedback.
* Apply spinners and skeletons to communicate loading states.
* Interactive elements must have default, hover, focus, active, pressed, and visited states
* Always provide a visible focus state for keyboard users.
* Use appropriate `aria-` attributes and roles to support interactivity.
* Avoid nesting interactive elements inside links or buttons or other non-card containers.
* Buttons and actions should always be right-aligned and along the right side of the containers so they're located in a consistent, expected position.

# Accessibility
* Every component must be accessible per WCAG 2.1 guidelines.
* Use SLDS color utility classes and tokens for all color styling.
* Associate labels with inputs via `for` and `id` or ARIA attributes.
* Modals must use `role="dialog"` and trap focus.
* Toasts must be `aria-live` regions to announce updates.
* Maintain appropriate color contrast and keyboard navigability.
* Maintain an appropriate tab order for keyboard users to efficiently navigate through the UI.
* All tables must include `role="grid"` and use `scope="col"` for column headers. Add ARIA attributes (e.g., `aria-label`, `aria-labelledby`, `aria-describedby`) to all interactive elements and tables for screen reader support.

# Form Design
* Use Lightning Base Components (e.g., `<lightning-input>`, `<lightning-combobox>`, `<lightning-radio-group>`, `<lightning-textarea>`) for all form elements. Do not use raw `<input>`, `<select>`, or `<textarea>` unless a Lightning Base Component does not exist for the use case.
* Use `slds-form-element` for grouping input + label + help text.
* Label every input field with `<label>` or `aria-label`.
* Show validation errors inline with helper text and an error icon.
* Group related inputs using `fieldset` + `legend` when needed.
* Use correct input types (e.g., `type="email"`) and patterns.
* Utilize semantic styling hook colors for error and warning states.
* Use edit and read-only modes for data.

# Feedback and Validation
* Use error and warning classes to indicate form validation issues.
* Add `role="alert"` for inline error messages.
* Use `aria-describedby` to associate help or error text.
* Provide confirmation and success feedback with toasts or banners.

# Layout and Responsiveness
* Ensure all layouts are responsive using SLDS grid and utility classes. Test components at multiple breakpoints (`slds-size_1-of-1`, `slds-medium-size_1-of-2`, etc.) and avoid fixed pixel widths.
* Use breakpoints to resize and reflow with `slds-grid`.
* All designs must be responsive and adaptable to zooming.
* Leverage responsive utility classes (`slds-medium-size_...`, etc.).
* Avoid fixed pixel widths; use percentages or percentage-related units.

# Consistency and Reusability
* Reuse SLDS components across products and clouds.
* Follow documented slot and modifier patterns for extending components.
* Align styles with styling hooks.
* Minimize overrides and avoid one-off custom styles.

# Theming and Customization
* Use styling hooks and CSS custom properties to theme, not CSS overrides.
* Use the Theming and Branding feature in Setup to create consistent visual identity.
* Never use `!important` or manual overrides of SLDS styles.
* Verify customizations meet SLDS accessibility requirements.
* Do not use inline style attributes in any HTML or JSX. All layout, spacing, and visual styling must be achieved using SLDS utility classes or component CSS files.

# Testing and QA
* Test with screen readers like NVDA, JAWS, and VoiceOver.
* Confirm keyboard-only navigation works across all components.
* Test components across breakpoints defined in SLDS.
* Run automated a11y tools (e.g., `axe-core`, `Lighthouse`).
* Validate CSS classes match SLDS docs (no rogue classes).
* Use Storybook or similar to validate visual and interactive consistency.
* Every LWC must include a Jest test file named `[component].test.js` in a `__tests__` subfolder. All exported classes and public methods must have JSDoc comments describing their purpose and usage.
* All public methods and UI states must be covered by Jest unit tests. Aim for at least 85% code coverage.
* Every component must include a usage example in its README or JSDoc, showing how to use the component in a parent LWC or Lightning App Builder.

# Documentation and Onboarding
* Link to component developer docs in component documentation.
* Document when, how, and why components diverge from Lightning Base Components.
* Include accessibility notes with every new pattern.

Stay updated with the latest Lightning Design System releases and Salesforce accessibility standards. Always refer to https://lightningdesignsystem.com and https://developer.salesforce.com/docs/component-library/overview/components for source-of-truth documentation.

---
*Core principles and guidelines for Salesforce Lightning Design System implementation*
