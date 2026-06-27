# SLDS Rules for Generative IDEs

This directory contains optimized Salesforce Lightning Design System (SLDS) rules specifically designed for use in generative IDEs like Cursor, GitHub Copilot, Claude, and ChatGPT.

## Quick Start

1. **For most IDEs**: Reference the entire `rules` directory
2. **For specific needs**: Reference individual category files or components
3. **For core principles**: Start with `core-principles.md`

## File Organization

### Core Principles (`core-principles.md`)
Essential SLDS guidelines including:
- UX principles and best practices
- Visual design standards
- Accessibility requirements
- Component usage patterns
- Form design guidelines
- Testing and QA requirements

### Components (`components/`)
Individual component rules for:
- Form controls (input, select, checkbox, etc.)
- Navigation (tabs, breadcrumbs, menus)
- Feedback (toast, tooltip, modals)
- Data display (tables, cards, badges)
- Actions (buttons, button groups)
- Layout (accordion, carousel)

### Patterns (`patterns/`)
Design pattern rules for:
- Data management (entry, display, charts)
- User experience (engagement, feedback)
- Navigation and search
- Layout and design
- Advanced features (AI, messaging)

### Categories (`categories/`)
Pre-organized rule files grouped by functionality for easy reference.

## IDE Integration Examples

### Cursor
```bash
# Add to your project
cp -r rules/ ./your-project/
```

### GitHub Copilot
```bash
# Reference in your project
echo "See rules/ for SLDS guidelines" >> README.md
```

### Claude/Anthropic
Upload the entire `rules` directory or specific files as needed.

### ChatGPT
Reference specific rule files or categories based on your current task.

## Content Optimization

The optimization process:
1. **Preserved** all essential SLDS guidance and best practices
2. **Removed** verbose documentation sections (Usage, Anatomy, Customization details)
3. **Consolidated** similar patterns and guidelines
4. **Organized** content into logical, IDE-friendly categories
5. **Maintained** accessibility requirements and component specifications

## Contributing

To update these rules:
1. Run `npm run generate:rules` to update the source
2. Run `npm run optimize:rules` to regenerate optimized files
3. Review changes and commit

---
*Generated from SLDS Rules Generator*
