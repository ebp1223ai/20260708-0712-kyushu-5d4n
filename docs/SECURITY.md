# Security

## Ownership Boundaries

Owner-only responsibilities:

- GitHub repository ownership and settings.
- Vercel project ownership and settings.
- Domain settings.
- API keys.
- Billing.
- Production account access.

ChatGPT responsibilities:

- Planning.
- UI and UX suggestions.
- Documentation support.
- Code review.
- Issue breakdown.

Codex responsibilities:

- Coding.
- Build.
- Test.
- Commit.
- Push when requested.

## Secrets

- Do not commit `.env.local`.
- Do not commit tokens, API keys, or secrets.
- Do not paste tokens into Issues, README, docs, screenshots, or commit messages.
- API keys must be stored in Vercel Environment Variables.
- Future API integrations, such as Google Maps API, Weather API, and OpenAI API, must read keys from `process.env`.

## Account Security

- Enable GitHub 2FA.
- Enable Vercel 2FA.
- Review GitHub Repository Settings under the owner account.
- Review Vercel Project Settings under the owner account.
- Keep billing and secret management under the owner account.

## AI Safety

- Codex must not ask for full account credentials.
- Codex must not request production tokens unless the owner explicitly chooses a secure workflow.
- Prefer environment variable names and setup instructions over sharing secret values.
