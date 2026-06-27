# Data Entry

## Data Entry

###**The simplest method of freeform data entry, for single and multiple lines of text.**

| To limit the amount of text, use a single­line input. To restrict the type of input, you can specify the format, such as number or email address.  Multiline text areas allow the user to enter long­form plain text. You can’t specify a format to restrict the type of content.  Label the input area above or to the left of the field. In most contexts, a stacked label (label on top) is better for readability and clarity. Use horizontal labels only if you need to save vertical real estate and have fewer than 10 fields. | [image]*An example of 2 stacked basic text inputs.*   |
| :--- | :---: |
| |   |
| To group related fields together, such as individual parts of an address, use compound inputs. | [image]*An example of a compound inputs.*  |
| |   |

##| The default text size creates a visual hierarchy between the label text and the input text. To conserve vertical space or when you have a long list of fields in a width-constrained sidebar, a smaller input size is also available.  The input width depends on the label placement. The input width is 100% of the container. | [image]*An example showing a full-width input*   |
| :--- | :---: |
| |   |

##| To assist the users, you can add help text. If the explanation is lengthy, use an “info” icon and tooltip. For brief explanations (shorter than a sentence), you can place the text underneath the field. You can also use placeholder text to provide an example of the type of input required. For example, in a Name field, show a name in the correct format. | [image]*An example showing an input help indicator*  |
| :--- | :---: |
| |   |

###**Complex text inputs provide users with additional assistance in specific types of data entry.**

##| Instead of forcing the user to manually type a date, a datepicker provides a visual way for the user to browse and select a single date or range of dates. | [image]*An example of a datepicker*  |
| :--- | :--- |
| |   |

##| A lookup allows the user to search a database for records to fill a field. The lookup can either limit the user to a single record or allow for multiple records to populate a single field. | |
| --- | --- |
| |   |

###**Selection inputs allow a user to choose between a limited number of options for a given field.**

##| Use a single checkbox for Boolean fields in which the user can choose only between true and false or on and off. | [image]*An example of checkboxes* |
| :--- | :---: |
| |   |

##| A radio list allows the user to select one option from a short list (fewer than 10 options). You must have enough space to present all options together to make comparison easy. Typically, radio lists are presented as a standalone field, such as a poll within a feed, and not used in a larger form. | [image]*An example of a radio list* |
| :--- | :---: |
| |   |

##| A toggle is similar to a checkbox in that it presents users with a binary choice for an item. However, a toggle is self-contained — think of it as a short form with only one field. When user turns a toggle on or off, the change for that item is saved immediately. Toggles are useful for reducing ambiguity. Since toggles save immediately, what users see on the page is always a clean state (never an unsaved/dirty state). | [image]*An example of a checkbox toggle*   |
| :--- | :---: |
| |   |
| ****Usage****  Use a toggle if the field you’re building: Exists on a page with no other form components that can appear in unsaved states. Can be saved independently of other fields on the page. Semantically fits the on/off model. | [image]*An correct example of checkbox toggles used alone* |
| |   |
| [image]*An incorrect example of checkbox toggles used with submit buttons*  | [image]*An incorrect example of checkbox toggles used with other input types such as text inputs* |

##A toggle is always accompanied by two external labels:

* **Field label**, which describes the item that the user is modifying, e.g. Post sharing, Desktop notifications, etc.
* **State label**, which describes the current state of the field. This label is binary and works in conjunction with the on/off state, but it’s more contextual to the field. E.g. Disabled/Enabled, Not Allowed/Allowed, etc.

###| Picklists, commonly known as dropdown menus, allow the user to select one option or multiple options from a list. Picklists are used instead of radio lists and checkbox lists inside of a larger form. They provide more flexibility in the number of options the user can choose from. |  [image]*An example of a picklist*  |
| :--- | :---: |
| |   |

###| The [Dueling Picklist](https://www.lightningdesignsystem.com/2e1ef8501/p/763763-dueling-picklist) lets you move items between two lists, making it easy to select and organize options. Use this control when the user needs to select more than one option and define the order of the selected items.  |  [image]*An example of dueling picklists*  |
| :--- | :---: |
| |   |

###| Inline editing allows the user to edit some part of a record without making a major switch between viewing and editing. This is a highly efficient method of updating a record. A user can make their changes without losing context and they can immediately return to what they were doing before.  A field that can be edited inline will have a pencil icon next to it. The user can either double click on the field value or click on the pencil icon to activate inline edit. |  [image]*An example of inline edit*  |
| :--- | :---: |
| |   |

---
*Generated from SLDS Rules Generator*
