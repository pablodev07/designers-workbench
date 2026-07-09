---
argument-hint: "[--component=c-name] [--category=accessibility|performance|design-system] [--severity=critical|warning|info] [--design-system=slds2|wes|slack] [--output=json]"
description: "Run health checks on LWC components for accessibility, SLDS compliance, and best practices"
---

# UI Health Check

Performs comprehensive health checks on Lightning Web Components (LWC) to ensure quality, accessibility, performance, and adherence to design system best practices (SLDS/SLDS2, WES, and Slack Design System).

## Argument Handling

Parse $ARGUMENTS for these flags:
- `--component=<name>`: Scope analysis to `src/modules/c/<camelCaseName>/` only
- `--category=<cat>`: Run only that category (accessibility, performance, design-system, lwc-best-practices, testing, storybook, security)
- `--severity=<level>`: Show only issues at that severity or above
- `--design-system=<ds>`: Force analysis against a specific design system standard
- `--output=json`: Output structured JSON instead of formatted report

If $ARGUMENTS is empty, run all checks on ALL components in `src/modules/c/`.

## What this skill does

This skill automates a thorough examination of Lightning Web Components by running targeted checks across multiple dimensions. **It is design system-aware** and validates components against the appropriate design system standards:

- **SLDS/SLDS2** - Salesforce Lightning Design System (in-org experience, internal apps)
- **WES** - Web Experience System (customer-facing salesforce.com properties like help.salesforce.com)
- **Slack Design System** - Slack's Block Kit and component patterns

The skill automatically detects the design system by analyzing:
- Package dependencies (@salesforce-ux/design-system, @salesforce-ux/wes-*, @slack/ui-kit, etc.)
- Design token usage patterns
- Component naming conventions and import statements
- Configuration files (sfdx-project.json, .storybook/*, package.json)

## Health Check Dimensions

### 1. **Accessibility (a11y) - WCAG 2.1 AA Compliance**
   - Validates ARIA attributes and semantic HTML structure
   - Checks for keyboard navigation support (Tab, Enter, Escape, Arrow keys)
   - Verifies color contrast ratios meet WCAG standards (4.5:1 minimum)
   - Ensures focus management and screen reader compatibility
   - Tests for proper heading hierarchy (h1-h6) and landmark regions
   - Validates form labels and error message associations
   - Checks for focus indicators and focus trapping in modals

### 2. **LWC Best Practices & Component Structure**
   - Validates Lightning Web Component file structure (.js, .html, .css, .xml)
   - Checks proper use of decorators (@api, @track, @wire)
   - Verifies naming conventions (camelCase for properties, kebab-case for components)
   - Reviews component composition and reusability patterns
   - Validates @api property exposure and documentation
   - Checks for proper lifecycle hook usage (connectedCallback, renderedCallback, etc.)
   - Ensures proper event handling patterns (CustomEvent with bubbles/composed)
   - Validates wire adapters and Apex method integration
   - Checks for proper error boundary implementation

### 3. **Performance Analysis**
   - Identifies unnecessary re-renders and DOM operations
   - Checks for proper use of LWC lifecycle optimization
   - Analyzes bundle size and identifies bloat
   - Reviews computed property usage (getters should be lightweight)
   - Identifies potential memory leaks (event listener cleanup)
   - Checks for N+1 rendering issues in lists
   - Validates proper use of template directives (if:true vs if:false)
   - Reviews wire adapter caching patterns

### 4. **Design System Compliance (SLDS/WES/Slack)**

   **For SLDS/SLDS2 Components (In-Org Experience):**
   - Validates use of design tokens instead of hardcoded values
   - Checks for proper SLDS utility class usage
   - Verifies component variant classes (slds-button_brand, etc.)
   - Validates spacing using SLDS spacing tokens
   - Checks color usage against SLDS color palette
   - Ensures proper use of SLDS icons and icon utilities
   - Validates responsive design patterns per SLDS guidelines
   - Checks for deprecated class names (SLDS1 -> SLDS2 migration)

   **For WES Components (Customer-Facing .com Properties):**
   - Validates use of WES component library (@salesforce-ux/wes-*)
   - Checks proper WES design token usage (--wes-* variables)
   - Verifies WES component patterns (wes-button, wes-card, wes-icon, etc.)
   - Validates WES foundation and styling hooks usage
   - Checks for proper WES badge, divider, and layout components
   - Ensures compatibility with salesforce.com brand guidelines
   - Validates responsive patterns for customer-facing experiences
   - Checks for proper WES theming and customization

   **For Slack Components:**
   - Validates Block Kit structure and composition
   - Checks for proper Slack design token usage (--sds-* variables)
   - Verifies Slack component patterns (message layouts, surfaces)
   - Validates Slack color primitives and semantic colors
   - Checks spacing scale compliance (4px base grid)
   - Ensures proper use of Slack typography tokens

### 5. **JavaScript/LWC Logic Quality**
   - Runs ESLint with @lwc/eslint-plugin-lwc rules
   - Checks for proper error handling (try-catch, .catch())
   - Validates LWC API version compatibility
   - Reviews async/await patterns with wire adapters
   - Checks for secure coding patterns (no eval, proper sanitization)
   - Validates proper use of Lightning Data Service
   - Ensures proper module imports (lwc, lightning/*, @salesforce/*)
   - Checks for console.log statements (should be removed in production)

### 6. **Testing Coverage**
   - Verifies existence of Jest unit tests for each component
   - Checks test coverage percentages (minimum 75% recommended)
   - Validates use of @salesforce/sfdx-lwc-jest
   - Reviews test patterns and best practices
   - Checks for proper mocking of @wire adapters
   - Validates test coverage of error scenarios
   - Ensures accessibility testing with @sa11y/jest

### 7. **Storybook Integration**
   - Validates Storybook stories exist for public components
   - Checks story completeness (all @api properties documented)
   - Verifies interactive controls (args) are properly configured
   - Reviews component documentation and usage examples
   - Tests component isolation and independence
   - Validates proper use of Storybook addons (a11y, viewport, etc.)

### 8. **Security & Lightning Locker**
   - Validates Lightning Locker Service compatibility
   - Checks for secure DOM manipulation patterns
   - Reviews data sanitization (user input, third-party data)
   - Identifies potential XSS vulnerabilities
   - Verifies proper use of @salesforce/* scoped modules
   - Checks for secure API calls and data handling

## How it works

### Phase 1: Discovery & Detection
- Scans project for all Lightning Web Components
- Detects design system(s) in use (SLDS, SLDS2, WES, Slack)
- Identifies context: in-org (SLDS) vs customer-facing (WES) vs Slack
- Maps component dependencies and relationships
- Identifies component public APIs (@api properties)

### Phase 2: Deep Analysis
Runs automated checks using:
- `@lwc/eslint-plugin-lwc` - LWC-specific linting rules
- `@sa11y/jest` - Accessibility testing framework
- `jest` with `@salesforce/sfdx-lwc-jest` - Unit test coverage
- Design system validators:
  - SLDS token checker (in-org components)
  - WES component validator (customer-facing components)
  - Slack Block Kit validator (Slack integrations)
- Custom pattern matchers for Salesforce best practices
- Storybook CSF analysis for documentation completeness

### Phase 3: Detailed Reporting
Generates comprehensive report with:

**1. Context & Overview**
   - Design system(s) detected with versions
   - Overall health score (0-100)
   - Category-specific scores

**2. Issue Details** (for each issue found):
   - **Severity**: CRITICAL | WARNING | INFO
   - **Location**: Exact file path and line number
   - **Current Code**: The problematic code snippet
   - **Issue Explanation**: Why this is a problem (with Salesforce context)
   - **Solution with Code**: Specific fix following Salesforce/design system best practices
   - **References**: Links to official Salesforce/SLDS/Slack documentation
   - **Related Issues**: Other issues that might be fixed together
   - **Auto-fixable**: Whether this can be automatically fixed

**3. Actionable Summary**
   - Priority recommendations
   - Issues grouped by component
   - Auto-fix availability count

## Output Format

Generate a detailed, actionable report:

```
================================================================
UI HEALTH CHECK REPORT
================================================================
Project: <project-name>
Date: <current-date>
Design Systems: <detected design systems with versions>

Overall Health Score: XX/100

Category Scores:
  Accessibility:           XX/100
  Performance:             XX/100
  LWC Best Practices:      XX/100
  Testing Coverage:        XX/100
  Storybook:               XX/100
  Design System:           XX/100
  Security:                XX/100

================================================================
CRITICAL ISSUES (N)
================================================================

[CRITICAL-NNN] <Issue title>
----------------------------------------------------------------
Location: <file:line>

Current Code:
    <problematic code snippet>

Issue:
    <explanation of why this is a problem>

Solution (<design system> Best Practice):
    <specific fix with code>

References:
    <links to official documentation>

Related Issues: <related issue IDs>
Auto-fixable: Yes/No/Partial

================================================================
WARNINGS (N)
================================================================
<same format, abbreviated for warnings>

================================================================
INFO (N)
================================================================
<same format, abbreviated for info>

================================================================
SUMMARY & NEXT STEPS
================================================================

Issues Found:
   Critical: N
   Warning: N
   Info: N

Priority Recommendations:
   1. <highest priority action>
   2. <next priority>
   ...

Auto-Fix Available:
   N out of M issues can be automatically fixed
   
   Run: /ui-health-fix --preview
   Run: /ui-health-fix --auto

================================================================
```

## Integration with Development Workflow

### Pre-Commit
Configure Husky to run health checks on staged components:
```json
{
  "husky": {
    "hooks": {
      "pre-commit": "ui-health-check --severity=critical --fail-on-issues"
    }
  }
}
```

### CI/CD Pipeline
Integrate into GitHub Actions, Jenkins, or Salesforce DX pipelines:
```yaml
- name: UI Health Check
  run: ui-health-check --output=json --fail-on-critical
```

### Pull Request Reviews
Automatically comment on PRs with health check results for changed components.

## Expert Support

For complex issues or questions about health check results:

### Design System Questions
- **If your project has a dedicated designer**: Consult them first for design system decisions
- **If no dedicated designer**: Contact DEX UX team or join `#ux-engineer-community` in Slack

### Technical Support
- **Skill Creator**: Damilare Olowoniyi
- **Slack Channel**: `#ux-engineer-community`

## Related Skills

- **/ui-health-fix** - Companion skill that automatically applies fixes identified by health checks
