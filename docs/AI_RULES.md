# AI Rules

These rules apply to ChatGPT, Codex, Cursor, Claude Code, GitHub Copilot, and any other AI coding assistant working on this repository.

## Required Reading

Before starting work, read:

1. `docs/PROJECT.md`
2. `docs/AI_CONTEXT.md`
3. The issue or task description
4. The matching prompt template in `prompts/`
5. Relevant files in `app/`, `components/`, `data/`, and `lib/`

## Work Scope

- Complete one Issue or one Feature at a time.
- Use one commit per feature or fix.
- Do not combine unrelated refactors with product changes.
- Do not rewrite the project structure unless the task explicitly requires it.
- Use the prompt templates in `prompts/` as the workflow contract for feature, bugfix, refactor, documentation, release, and UI polish tasks.

## Data Rules

- Do not casually modify the JSON schema.
- Do not delete existing fields in `data/locations.json`, `data/routes.json`, or `data/days.json`.
- New fields must be backward compatible.
- Do not change trip data content unless the task specifically asks for data updates.

## Build Rules

- `npm run build` must pass before submitting or committing changes.
- Do not lower the Next.js version.
- Do not add third-party packages without user approval.
- Codex is responsible for coding, build, test, commit, and push when those actions are requested.

## Component Rules

- Prefer small components under 300 lines.
- Components may be up to 500 lines only when there is a clear reason.
- Do not put all logic in `app/page.tsx`.
- Keep data loading, map logic, and presentation concerns separated.

## Next.js and React Leaflet Rules

- React Leaflet must stay isolated in Client Components.
- Do not import Leaflet directly into Server Components.
- `dynamic(..., { ssr: false })` must be used from a Client Component boundary, not directly from a Server Component.

## Security and Ownership Rules

- GitHub repository ownership, Vercel ownership, domains, API keys, secrets, billing, and production account settings are owner responsibilities.
- Codex must not request, expose, log, or commit tokens.
- Do not place secrets in commits, issues, README files, screenshots, or documentation.
- Future API integrations, such as Google Maps API, Weather API, or OpenAI API, must read secrets through `process.env`.
