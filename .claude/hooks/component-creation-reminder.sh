#!/bin/bash
# UserPromptSubmit hook: injects a reminder to read component-creation instructions.

INPUT=$(cat)
PROMPT=$(echo "$INPUT" | jq -r '.prompt // .message // .user_input // ""' | tr '[:upper:]' '[:lower:]')

if echo "$PROMPT" | grep -qE '(create|new|add|build|make|implement|develop|scaffold)' && \
   echo "$PROMPT" | grep -qE '(component|button|card|input|modal|table|datatable|combobox|badge|icon|tooltip|accordion|tab|menu|dropdown|form|header|footer|banner|alert|toast|dialog|picker|slider|checkbox|radio|toggle|panel|list|nav|sidebar|wizard|stepper|carousel|chip|tag|avatar|progress|spinner|skeleton|placeholder|layout|grid|section)'; then
  jq -n '{
    "hookSpecificOutput": {
      "hookEventName": "UserPromptSubmit",
      "additionalContext": "IMPORTANT: Before creating any component, you MUST read .claude/instructions/component-creation.md and follow the procedure exactly. Read it now before doing anything else."
    }
  }'
fi
