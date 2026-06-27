# SLDS Rules Index

This directory contains optimized SLDS rules for use in generative IDEs. The rules are split into logical categories for better performance and easier reference.

## Quick Reference

### Core Principles
- [Core Principles](./core-principles.md) - UX principles, visual design, accessibility, and best practices

### Component Categories
### Form Controls (17)
- [Input](./components/input.md)
- [Textarea](./components/textarea.md)
- [File Selector](./components/file-selector.md)
- [Checkbox Button](./components/checkbox-button.md)
- [Checkbox Button](./components/checkbox-button.md)
- [Checkbox Toggle](./components/checkbox-toggle.md)
- [Radio Group](./components/radio-group.md)
- [Radio Button Group](./components/radio-button-group.md)
- [Combobox](./components/combobox.md)
- [Datepicker](./components/datepicker.md)
- [Datetime Picker](./components/datetime-picker.md)
- [Timepicker](./components/timepicker.md)
- [Color Picker](./components/color-picker.md)
- [Slider](./components/slider.md)
- [File Selector](./components/file-selector.md)
- [Form Element](./components/form-element.md)
- [Dueling Picklist](./components/dueling-picklist.md)

### Navigation (6)
- [Breadcrumbs](./components/breadcrumbs.md)
- [Scoped Tabs](./components/scoped-tabs.md)
- [Scoped Tabs](./components/scoped-tabs.md)
- [Navigation](./components/navigation.md)
- [Menus](./components/menus.md)
- [Pills](./components/pills.md)

### Feedback (8)
- [Toast](./components/toast.md)
- [Tooltip](./components/tooltip.md)
- [Prompt](./components/prompt.md)
- [Modals](./components/modals.md)
- [Spinners](./components/spinners.md)
- [Progress Bar](./components/progress-bar.md)
- [Progress Indicator](./components/progress-indicator.md)
- [Progress Ring](./components/progress-ring.md)

### Data Display (9)
- [Data Table](./components/data-table.md)
- [Tree Grid](./components/tree-grid.md)
- [Tree Grid](./components/tree-grid.md)
- [Tiles](./components/tiles.md)
- [Cards](./components/cards.md)
- [Badges](./components/badges.md)
- [Avatar](./components/avatar.md)
- [Button Icons](./components/button-icons.md)
- [Dynamic Icons](./components/dynamic-icons.md)

### Actions (3)
- [Buttons](./components/buttons.md)
- [Button Groups](./components/button-groups.md)
- [Button Icons](./components/button-icons.md)

### Layout (4)
- [Accordion](./components/accordion.md)
- [Carousel](./components/carousel.md)
- [Map](./components/map.md)
- [Rich Text Editor](./components/rich-text-editor.md)

### Pattern Categories
### Data Management (5)
- [Data Entry](./patterns/data-entry.md)
- [Displaying Data](./patterns/displaying-data.md)
- [Charts](./patterns/charts.md)
- [Metric Display](./patterns/metric-display.md)
- [Empty State](./patterns/empty-state.md)

### User Experience (4)
- [User Engagement](./patterns/user-engagement.md)
- [In App Feedback](./patterns/in-app-feedback.md)
- [Loading](./patterns/loading.md)
- [Notifications](./patterns/notifications.md)

### Navigation Search (3)
- [Navigation](./patterns/navigation.md)
- [Global Search](./patterns/global-search.md)
- [In Context Search](./patterns/in-context-search.md)

### Layout Design (3)
- [Layout](./patterns/layout.md)
- [Markup And Style](./patterns/markup-and-style.md)
- [Localization](./patterns/localization.md)

### Advanced Features (5)
- [Agentic Experiences](./patterns/agentic-experiences.md)
- [Builder](./patterns/builder.md)
- [Conversation Design](./patterns/conversation-design.md)
- [Messaging Ui](./patterns/messaging-ui.md)
- [Rules Filters And Logic](./patterns/rules-filters-and-logic.md)

## Usage for Generative IDEs

### Option 1: Reference Entire Directory
Most IDEs will automatically index all files when you reference the entire `rules` directory.

### Option 2: Reference Specific Categories
Include only the categories you need:
- `core-principles.md` - Essential SLDS principles
- `categories/form-controls-components.md` - Form input components
- `categories/navigation-components.md` - Navigation components
- `categories/data-management-patterns.md` - Data handling patterns

### Option 3: Reference Individual Files
Include only specific component or pattern files you need.

## File Structure

```
rules/
├── index.md                    # This file - navigation and overview
├── core-principles.md          # Core SLDS principles and guidelines
├── components/                 # Individual component rules
│   ├── buttons.md
│   ├── input.md
│   └── ...
├── patterns/                   # Design pattern rules
│   ├── data-entry.md
│   ├── navigation.md
│   └── ...
└── categories/                 # Categorized rule files
    ├── form-controls-components.md
    ├── navigation-components.md
    ├── data-management-patterns.md
    └── ...
```

## Optimization Summary

- **Original file size**: 665KB (15,665 lines)
- **Optimized structure**: 101 files across 3 directories
- **Content reduction**: ~60% by removing verbose sections
- **IDE compatibility**: Optimized for token limits and context windows
- **Navigation**: Categorized for easy reference

## Metadata

- **Generated**: 2025-07-23T20:27:24.836Z
- **Source**: SLDS Rules Generator
- **Version**: Enhanced optimization
- **Total files**: 101
- **Components**: 67
- **Patterns**: 20

---
*Optimized for generative IDEs. Generated from SLDS Rules Generator*
