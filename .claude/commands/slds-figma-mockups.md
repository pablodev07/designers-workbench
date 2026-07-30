---
description: "Build Salesforce page mockups in Figma using real SLDS 2 component instances, tokens, and page blueprints"
---

# SLDS Figma Mockups

Build Salesforce Lightning page mockups in Figma using real SLDS 2 component instances. Use when asked to mock up, design, or lay out any Salesforce/Lightning UI (Account, Contact, Opportunity, Quote, Case, Asset, or any screen composed from SLDS 2 components).

## Activation

Read the router at `.claude/instructions/slds-figma-mockups/SKILL.md` and follow its routing table to load the appropriate guide(s) for the task at hand.

## Mandatory Prerequisite

Before any `use_figma` call, load the Figma Plugin API rules:

```
/figma-use
```

## Quick Routing

| When you're about to... | Read this guide |
|---|---|
| Start a build (Steps 0-6) | `.claude/instructions/slds-figma-mockups/guides/building/workflow.md` |
| Fix sizing, swap a body, choose container | `.claude/instructions/slds-figma-mockups/guides/building/sizing-rules.md` |
| Look up a component's import key | `.claude/instructions/slds-figma-mockups/guides/reference/component-library.md` |
| Pick the layout for a specific object | `.claude/instructions/slds-figma-mockups/guides/reference/page-blueprints.md` |
| Apply a text style | `.claude/instructions/slds-figma-mockups/guides/reference/text-styles.md` |
| Bind a color, radius, shadow, or spacing token | `.claude/instructions/slds-figma-mockups/guides/reference/color-tokens.md` |
