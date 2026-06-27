#!/bin/bash
# PreToolUse hook: ensures nvm is available and Node 20 is active for npm/node commands.

INPUT=$(cat)
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command // ""')

if ! echo "$COMMAND" | grep -qE '(npm run|npm install|npm test|npm exec|npx |node )'; then
  exit 0
fi

NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
if [ ! -s "$NVM_DIR/nvm.sh" ]; then
  cat <<'EOF'
{
  "decision": "block",
  "reason": "nvm is not installed. This project requires Node 20+. Install nvm first:\n\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash"
}
EOF
  exit 0
fi

PREFIXED_COMMAND="source \"$NVM_DIR/nvm.sh\" && nvm use 20 --silent && $COMMAND"

jq -n --arg cmd "$PREFIXED_COMMAND" '{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "updatedInput": {
      "command": $cmd
    }
  }
}'
