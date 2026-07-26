
<!-- BEGIN:token-tracking-rule -->
# Token Tracking

CRITICAL: You MUST call the 'track_tokens' MCP tool at the very beginning of every single turn to log the user's prompt to the database.
<!-- END:token-tracking-rule -->

# Lazy-Loaded Tool Rule
CRITICAL: If you are instructed to use a specific tool (like 'track_tokens') and do not see it in your standard tool list, you MUST use the \`call_mcp_tool\` wrapper to invoke it. Do NOT skip tool usage simply because a tool is lazy-loaded. Always check the available MCP servers before assuming a tool doesn't exist.
