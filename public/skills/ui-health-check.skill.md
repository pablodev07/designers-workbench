# UI Health Check

Performs comprehensive health checks on Lightning Web Components (LWC) to ensure quality, accessibility, performance, and adherence to design system best practices (SLDS/SLDS2, WES, and Slack Design System).

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
   - Checks for deprecated class names (SLDS1 → SLDS2 migration)

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

## Usage

```bash
/ui-health-check
```
Run all health checks on the current project.

```bash
/ui-health-check --component=c-notification-panel
```
Run health checks on a specific component.

```bash
/ui-health-check --category=accessibility
```
Run only accessibility-related checks.

```bash
/ui-health-check --design-system=slds2
```
Force analysis against SLDS2 standards.

```bash
/ui-health-check --design-system=wes
```
Force analysis against WES (Web Experience System) standards.

```bash
/ui-health-check --severity=critical
```
Show only critical issues.

```bash
/ui-health-check --output=json
```
Output results as structured JSON for CI/CD integration.

## Output Format

The skill generates a detailed, actionable report:

```
════════════════════════════════════════════════════════════════
UI HEALTH CHECK REPORT
════════════════════════════════════════════════════════════════
Project: lwc-storybook-starter
Date: 2026-06-25 14:32:10
LWC API Version: 59.0
Design Systems: SLDS2 (v2.18.0) + WES (v0.1.4) + Slack Design System

Overall Health Score: 78/100 ⚠️

Category Scores:
  ✅ Accessibility:           92/100
  ⚠️  Performance:            78/100  
  ✅ LWC Best Practices:      88/100
  ❌ Testing Coverage:        65/100
  ✅ Storybook:               95/100
  ⚠️  Design System:          71/100
  ✅ Security:                94/100

════════════════════════════════════════════════════════════════
CRITICAL ISSUES (2)
════════════════════════════════════════════════════════════════

[CRITICAL-001] Missing ARIA label on icon-only button
────────────────────────────────────────────────────────────────
📍 Location: force-app/main/default/lwc/actionButton/actionButton.html:15

❌ Current Code:
    <button class="slds-button slds-button_icon" onclick={handleClose}>
        <lightning-icon icon-name="utility:close" size="small"></lightning-icon>
    </button>

📋 Issue:
    Icon-only button lacks accessible label. Screen reader users cannot 
    determine the button's purpose. Violates WCAG 2.1 Level A (4.1.2) and 
    Salesforce Accessibility Guidelines.
    
    Impact: Fails WCAG AA compliance, blocks accessibility certification.

✅ Solution (Salesforce + SLDS2 Best Practice):
    <button 
        class="slds-button slds-button_icon" 
        onclick={handleClose}
        title="Close"
        aria-label="Close">
        <lightning-icon 
            icon-name="utility:close" 
            alternative-text="Close"
            size="small">
        </lightning-icon>
        <span class="slds-assistive-text">Close</span>
    </button>

📚 References:
    • SLDS Button Icons: https://lightningdesignsystem.com/components/buttons/#Icon
    • Lightning Icon Accessibility: https://developer.salesforce.com/docs/component-library/bundle/lightning-icon
    • WCAG 4.1.2: https://www.w3.org/WAI/WCAG21/Understanding/name-role-value
    • Salesforce Accessibility: https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/accessibility.htm

🔗 Related Issues: WARN-005 (keyboard navigation), INFO-002 (focus styling)
⚡ Auto-fixable: Yes

════════════════════════════════════════════════════════════════

[CRITICAL-002] Using custom button instead of WES component
────────────────────────────────────────────────────────────────
📍 Location: force-app/main/default/lwc/heroSection/heroSection.html:22

❌ Current Code:
    <button class="custom-cta-button" onclick={handleSignup}>
        Get Started
    </button>
    
    /* heroSection.css */
    .custom-cta-button {
        background: #0176d3;
        color: white;
        padding: 12px 24px;
        border-radius: 4px;
        font-weight: 600;
    }

📋 Issue:
    Custom-built button on customer-facing page (help.salesforce.com context).
    Should use WES button component for brand consistency, accessibility,
    and automatic theming support across all salesforce.com properties.
    
    Impact: Inconsistent brand experience, missing accessibility features,
    doesn't support theming, requires manual maintenance.

✅ Solution (WES Best Practice):
    <!-- Import WES button -->
    import '@salesforce-ux/wes-button';
    
    <!-- In template -->
    <wes-button 
        variant="brand" 
        size="large"
        onclick={handleSignup}>
        Get Started
    </wes-button>

    Alternative: If you need customization, use WES styling hooks:
    
    <wes-button 
        variant="brand" 
        class="hero-cta"
        onclick={handleSignup}>
        Get Started
    </wes-button>
    
    /* heroSection.css */
    .hero-cta {
        --wes-button-padding-block: var(--wes-spacing-large);
        --wes-button-padding-inline: var(--wes-spacing-x-large);
    }

📚 References:
    • WES Button: https://developer.salesforce.com/docs/platform/web-experience-system/guide/wes-button
    • WES Components: https://github.com/salesforce-ux/web-experience-system
    • WES Styling Hooks: https://developer.salesforce.com/docs/platform/web-experience-system/guide/styling-hooks
    • Customer-Facing Best Practices: Consult with DEX UX team

🔗 Related Issues: WARN-006 (WES theming), INFO-003 (component library usage)
⚡ Auto-fixable: Partial (can suggest WES component, manual integration needed)

════════════════════════════════════════════════════════════════

[CRITICAL-003] Hardcoded color instead of SLDS design token
────────────────────────────────────────────────────────────────
📍 Location: force-app/main/default/lwc/slackMessage/slackMessage.css:12-15

❌ Current Code:
    .message-container {
        background-color: #f4f4f4;
        border: 1px solid #ddd;
        color: #333;
    }

📋 Issue:
    Using hardcoded hex colors breaks:
    • Theme switching (light/dark mode)
    • Salesforce theming engine
    • Brand customization
    • Accessibility (contrast in different themes)
    
    SLDS provides semantic design tokens that adapt to all themes.
    
    Impact: Component will not respect user theme preferences or 
    Salesforce Experience Cloud theming.

✅ Solution (SLDS2 Design Token Best Practice):
    .message-container {
        background-color: var(--slds-g-color-neutral-base-95);
        border: 1px solid var(--slds-g-color-border-base-4);
        color: var(--slds-g-color-neutral-base-10);
    }

    /* Alternative using SLDS utility classes (recommended): */
    <!-- In HTML -->
    <div class="message-container slds-box slds-theme_default">

📚 References:
    • SLDS Design Tokens: https://lightningdesignsystem.com/design-tokens/
    • Theme-able Components: https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/components_config_for_app_builder_design_tokens.htm
    • SLDS Utility Classes: https://lightningdesignsystem.com/utilities/themes/

🔗 Related Issues: WARN-007, WARN-009 (other hardcoded values)
⚡ Auto-fixable: Yes (95% confidence - manual review recommended)

════════════════════════════════════════════════════════════════

[CRITICAL-004] Missing error handling in @wire adapter
────────────────────────────────────────────────────────────────
📍 Location: force-app/main/default/lwc/dataDisplay/dataDisplay.js:18-20

❌ Current Code:
    @wire(getRecords, { recordId: '$recordId' })
    wiredRecords({ data }) {
        this.records = data;
    }

📋 Issue:
    Wire adapter does not handle error scenarios. When Apex method fails 
    (network error, permissions, invalid data), component will break silently 
    or show stale data. This is a critical LWC anti-pattern.
    
    Impact: Poor user experience, no feedback on failures, difficult debugging.

✅ Solution (LWC Best Practice):
    import { ShowToastEvent } from 'lightning/platformShowToastEvent';
    
    @wire(getRecords, { recordId: '$recordId' })
    wiredRecords(result) {
        this.wiredResult = result; // Store for refresh capability
        const { data, error } = result;
        
        if (data) {
            this.records = data;
            this.error = undefined;
        } else if (error) {
            this.records = undefined;
            this.error = error;
            this.showErrorToast(error);
        }
    }
    
    showErrorToast(error) {
        const evt = new ShowToastEvent({
            title: 'Error loading data',
            message: error.body?.message || 'An error occurred',
            variant: 'error',
        });
        this.dispatchEvent(evt);
    }

    <!-- In HTML template: -->
    <template if:true={error}>
        <div class="slds-text-color_error">
            Error: {error.body.message}
        </div>
    </template>

📚 References:
    • Wire Service: https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.data_wire_service
    • Error Handling: https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.data_error_handling
    • Toast Events: https://developer.salesforce.com/docs/component-library/bundle/lightning-platform-show-toast-event

🔗 Related Issues: WARN-012 (loading states), INFO-006 (refresh functionality)
⚡ Auto-fixable: Partial (can add error handling structure, manual refinement needed)

════════════════════════════════════════════════════════════════
WARNINGS (8)
════════════════════════════════════════════════════════════════

[WARN-004] Using @track unnecessarily (LWC Reactivity)
────────────────────────────────────────────────────────────────
📍 Location: force-app/main/default/lwc/userCard/userCard.js:12

❌ Current: @track userName;
✅ Solution: Remove @track decorator (reactive by default in modern LWC)

📋 Issue: @track is no longer needed for primitive values. Only use for 
          deep reactivity on objects/arrays.
📚 Reference: https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_track
⚡ Auto-fixable: Yes

────────────────────────────────────────────────────────────────

[WARN-005] Missing keyboard event handler
────────────────────────────────────────────────────────────────
📍 Location: force-app/main/default/lwc/customDropdown/customDropdown.html:8

❌ Current: <div onclick={handleClick}>...</div>
✅ Solution: Add onkeydown handler or use <button> element

📋 Issue: Clickable div without keyboard accessibility
⚡ Auto-fixable: Yes (can convert to button or add handler)

[... additional warnings ...]

════════════════════════════════════════════════════════════════
INFO (3)
════════════════════════════════════════════════════════════════

[INFO-001] Consider using lightning-button instead of custom button
📍 Location: force-app/main/default/lwc/actionBar/actionBar.html:10
✅ Recommendation: Use <lightning-button> for built-in accessibility and SLDS styling
⚡ Auto-fixable: No (design decision)

════════════════════════════════════════════════════════════════
SUMMARY & NEXT STEPS
════════════════════════════════════════════════════════════════

📊 Issues Found:
   • Critical: 3 (must fix before production deployment)
   • Warning: 8 (should fix in current sprint)
   • Info: 3 (optional improvements)

🎯 Priority Recommendations:
   1. ❗ Fix accessibility issues (CRITICAL-001, WARN-005, WARN-008)
      → Required for WCAG AA compliance and accessibility certification
      
   2. ❗ Add error handling to all wire adapters (CRITICAL-003, WARN-012)
      → Prevents silent failures and improves user experience
      
   3. 🎨 Replace hardcoded values with design tokens (CRITICAL-002, WARN-007, WARN-009)
      → Enables theming and maintains design system consistency
      
   4. 🧪 Increase test coverage to 75%+ (affects 4 components)
      → Meets Salesforce deployment requirements
      
   5. 📚 Add Storybook stories for public components (2 components)
      → Improves documentation and component discoverability

🔧 Auto-Fix Available:
   11 out of 14 issues can be automatically fixed
   
   Run: /ui-health-fix --preview
   (Preview changes before applying)
   
   Run: /ui-health-fix --auto
   (Apply all auto-fixable issues immediately)

💡 Next Steps:
   1. Review this report and prioritize critical issues
   2. Run /ui-health-fix --preview to see proposed changes
   3. Apply fixes using /ui-health-fix or manually implement solutions
   4. Re-run /ui-health-check to verify improvements

════════════════════════════════════════════════════════════════
Generated by UI Health Check v1.0.0
Report ID: uhc-20260625-143210
Report saved to: .health-check/reports/uhc-20260625-143210.md
════════════════════════════════════════════════════════════════
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

## Benefits

✅ **Consistency**: Ensures all LWC components meet Salesforce standards
✅ **Early Detection**: Catches issues before code review or deployment  
✅ **Learning Tool**: Teaches Salesforce/LWC best practices through examples
✅ **Time Savings**: Automates manual code review checklist items
✅ **Compliance**: Ensures WCAG accessibility and Salesforce guidelines adherence
✅ **Design System**: Maintains SLDS/Slack design system consistency
✅ **Quality Gate**: Can block deployments on critical issues

## Expert Support

For complex issues or questions about health check results:

### Design System Questions
- **If your project has a dedicated designer**: Consult them first for design system decisions
- **If no dedicated designer**: Contact DEX UX team or join `#ux-engineer-community` in Slack

### Technical Support
- **Skill Creator**: Damilare Olowoniyi
- **Slack Channel**: `#ux-engineer-community`

### When to Seek Expert Help
- Unclear health check recommendations
- Design system interpretation (SLDS vs Slack)
- Complex accessibility requirements beyond auto-fix
- Performance issues requiring architectural changes
- Custom rule configuration needs

## Related Skills

- **/ui-health-fix** - Companion skill that automatically applies fixes identified by health checks
