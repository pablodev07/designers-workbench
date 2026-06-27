#!/bin/bash
# PostToolUse hook: reminds to update MDX docs when a component .js file is edited.

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // .tool_response.filePath // ""')

if echo "$FILE_PATH" | grep -qE 'src/modules/c/[^/]+/[^/]+\.js$' && \
   ! echo "$FILE_PATH" | grep -qE '\.(stories|test)\.js$'; then

  DIR=$(dirname "$FILE_PATH")
  COMPONENT=$(basename "$FILE_PATH" .js)
  MDX_PATH="$DIR/$COMPONENT.mdx"

  jq -n --arg mdx "$MDX_PATH" '{
    "hookSpecificOutput": {
      "hookEventName": "PostToolUse",
      "additionalContext": ("Component JS file was modified. Check if the corresponding docs file (" + $mdx + ") needs to be updated to reflect new or changed @api properties or public methods. If the .mdx file does not exist, create it following the template in .claude/instructions/component-creation.md.")
    }
  }'
fi
