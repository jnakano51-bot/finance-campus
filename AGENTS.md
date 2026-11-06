# API key rules

1. Keep the API key in the local `.env` file.
2. Keep `.env` listed on its own line in `.gitignore` before creating it. Never commit or force-add it to Git.
3. Access the key only from server-side code. Never include it in web pages, browser code, or client bundles.
4. The user enters the real key directly into `.env` in their text editor, never in AI chat. Do not read or display `.env` contents or ask the user to paste the key into chat.
