# AI Rules

These rules apply to ChatGPT, Codex, Cursor, Claude Code, GitHub Copilot, and any other AI coding assistant working on this repository.

## Required Reading

Before starting work, read:

1. `docs/PROJECT.md`
2. The issue or task description
3. Relevant files in `app/`, `components/`, `data/`, and `lib/`

## Work Scope

- Complete one Issue or one Feature at a time.
- Use one commit per feature or fix.
- Do not combine unrelated refactors with product changes.
- Do not rewrite the project structure unless the task explicitly requires it.

## Data Rules

- Do not casually modify the JSON schema.
- Do not delete existing fields in `data/locations.json`, `data/routes.json`, or `data/days.json`.
- New fields must be backward compatible.
- Do not change trip data content unless the task specifically asks for data updates.

## Build Rules

- `npm run build` must pass before submitting or committing changes.
- Do not lower the Next.js version.
- Do not add third-party packages without user approval.

## Component Rules

- Prefer small components under 300 lines.
- Components may be up to 500 lines only when there is a clear reason.
- Do not put all logic in `app/page.tsx`.
- Keep data loading, map logic, and presentation concerns separated.

## Next.js and React Leaflet Rules

- React Leaflet must stay isolated in Client Components.
- Do not import Leaflet directly into Server Components.
- `dynamic(..., { ssr: false })` must be used from a Client Component boundary, not directly from a Server Component.
