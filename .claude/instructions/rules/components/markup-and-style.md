# Markup and Style

## Markup and Style

The Salesforce Lightning Design System (SLDS) component library is actively developed to enable Salesforce developers to create a uniform look and feel across all Salesforce-related applications while adhering to CSS best practices and conventions.

In order to accomplish this goal, we’ve chosen to use very specific naming techniques. These allow us to keep our code base flat, with low specificity, and keeps us from fighting specificity wars that start with frustration and end with `!important`. Though we base our naming on the BEM method, we have a few additions of our own outlined below.

###[BEM](https://en.bem.info/) is a well-known method of naming components — block, element, modifier. If you’re comfortable with BEM, move down to the “Where we diverge from BEM” section. For those unfamiliar or who need a quick refresh, let’s briefly look at how BEM works. As an example, we’ll build a house component.

| | **Block** A block represents the main component name. If you were building a house component, the class name would be `.house`. All of the properties you want included for all houses would be included in the base `.house` class.  **Element** An element represents a part of a component and is separated by two underscores. The door of the house would be represented by the class `.house__door`. A window would be `.house__window`.  Be careful to look for smaller component possibilities within a larger component. Especially if it’s a pattern that might be repeated in an unrelated component. Avoid using a class like `.house__stair__step`. Instead, either use `.house__stair-step` (a single dash does not indicate anything in BEM and can simply be used for compound naming). Or if the stair portion of the component might be used inside another component, make the `.stair` a smaller component within the larger component and use `.stair__step` as an element of it. |
| :--- | :--- |
| |   |

##A modifier is a component or element variation and is separated by a single underscore. The variation can apply to the overall component or it can be applied to an element within the component.

Since the properties that should apply to every house are placed on the main `.house` class, all houses receive the `.house` class as the base. If there is a variation of a house — perhaps it is gray — the `.house_gray` class would be added to the component in addition to the `.house` class.

If the house has a pink door, a variation can be placed on the door element itself — `.house__door_pink`.

###In some cases, for reasons of brevity and comprehension, we’ve added to, or deviated from, typical BEM naming conventions. These changes are outlined below.

##Though BEM syntax is traditionally based off an initial block, in some cases (in our utilities) we have opted to remove that requirement. For example, margin and padding are indicated with the formula `.slds-m-top_medium` (margin, top, medium). So while there is no base `.slds-m` or `.slds-m-top` class as a base class, we feel it’s an easily understandable way to indicate that there is a size variation in these utility classes.

Our spacing utilities similarly use the syntax `.slds-size_1-of-2` without a base `.slds-size` class. Text sizing uses class names like `.slds-text-body_small` and `.slds-text-heading_large` without a base `.slds-text-body` or `.slds-text-heading` class.

##Though generic `.slds-container-*` classes exist, sometimes a component has an optional container — but it is specific to that component alone. Those containers should also be indicated by a class using a single underscore. For example, when a `.pill` has an optional container applied, that class is written as `.slds-pill_container`.

##In order to make this framework easy to use with other frameworks, we’ve added the `.slds-` namespace. Rather than using `.button`, our framework uses `.slds-button`. This allows you to integrate the Lightning Design System (SLDS) with your own bespoke CSS or to integrate it with an application that uses the modified Salesforce Bootstrap framework previously used as you wean your application away from it.

##In some cases, within the Salesforce ecosystem, SLDS CSS is not yet available. In those cases, for example, when building within Visualforce, Lightning Applications (my.app), or deploying components via Lightning Out, you should scope components built with SLDS. In this case, we have [provided a tool for you to create your custom-scoped CSS](https://www.lightningdesignsystem.com/2e1ef8501/p/014cb2).

The components built with your custom-scoped SLDS will need your custom scoped class at the highest level of the DOM where the components are included. In some cases this will be a wrapper at the component level, in other cases you may wrap several components. Do not place your custom class on the body element of the application if you are including non-SLDS components within that area as well. This would cause the non-SLDS components to be scoped and could override expected styles with unwanted effects.

###When a component has a variety of states, we add a class to indicate the state the component, or certain portions of the component, are in. Some examples are: `.slds-is-selected`, `.slds-is-active`, `.slds-is-expanded`, `.slds-is-nested`, `.slds-is-open`, `.slds-has-focus`, `.slds-has-error`, etc.

Please address any questions about our code style or contributing to our project to our [GitHub issues](https://github.com/salesforce-ux/design-system/issues).

---
*Generated from SLDS Rules Generator*
