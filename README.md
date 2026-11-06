# Finance Campus

A browser-based finance education app for U.S. college students.

## Features

- Eight career guides, side-by-side comparison of up to three paths, practical exercises and a transparent interest-matching tool.
- Ten lessons with quizzes and persistent completion tracking.
- TradingView market charts and news, stock lookup and fundamentals. Data may be delayed or unavailable; no quotes are fabricated.
- A curated company research set with sector filters, watchlists and a research notebook. These are study examples, not buy recommendations.
- Compound-growth and budget calculators, account comparisons and an account-opening learning checklist.
- Sources from Investor.gov, IRS, CFPB, BLS, FINRA and the Federal Reserve.

## Run locally

From this directory:

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory dist
```

Then visit http://127.0.0.1:8000. The app is static; there are no installation or build steps. It does not read `.env` or require API keys. The previous key-safety rules remain in the repository-root AGENTS.md.

## Data and privacy

Progress, career bookmarks, watchlists and notes use this browser’s local storage. They do not sync across devices; clearing site storage removes them. Calculator amounts are not saved. No brokerage transactions or account applications occur here.

Market data and news load directly through TradingView widgets. Availability, reporting periods and delays are provider-dependent. Widgets and Google Fonts make external requests. Source links remain available if an embed cannot load. Lesson content is a dated educational snapshot, not an automatically updated tax or regulatory service.

## Verification

`node --test test.mjs` verifies calculator edge cases, ticker validation, career matching and lesson integrity. Browser QA should cover navigation, quizzes, saved progress, career comparison, notes, mobile layout and provider embeds.

Private Sites hosting is configured in `.openai/hosting.json`.
