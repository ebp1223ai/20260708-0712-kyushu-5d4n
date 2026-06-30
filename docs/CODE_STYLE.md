# Code Style

## Folders

Preferred folders:

- `components/`
- `hooks/`
- `lib/`
- `types/`
- `data/`
- `docs/`
- `prompts/`

Create new folders only when there is a clear responsibility boundary.

## Components

- One component should have one clear responsibility.
- Prefer components under 250 lines.
- Avoid God Components.
- Do not put all logic in `app/page.tsx`.
- Keep map-specific logic separated from presentation components.

## TypeScript

- Avoid `any`.
- Prefer explicit types or interfaces for shared data.
- Keep data contracts aligned with `docs/DATA_SCHEMA.md`.
- Use narrow types when practical.

## JSON

- Do not casually rewrite data files.
- Read from `data/*.json` as the main itinerary source.
- Do not delete existing fields.
- New fields must be backward compatible.

## Tailwind

- Prefer Tailwind utility classes.
- Avoid inline styles except for data-driven values, such as marker colors.
- Keep spacing and layout patterns consistent.
- Preserve mobile-first responsive classes.

## Naming

- Components: `PascalCase`
- Functions: `camelCase`
- Constants: `UPPER_SNAKE_CASE`
- Files: follow the existing project pattern.

## Import Order

Use this order when practical:

1. React and Next.js imports.
2. Third-party imports.
3. Internal absolute imports.
4. Relative imports.

## Git

- One feature or fix per commit.
- Commit messages should be clear and action-oriented.
- Run `npm run build` before committing when code or build-sensitive docs change.

## AI

AI assistants must read:

- `docs/PROJECT.md`
- `docs/AI_RULES.md`
- `docs/AI_CONTEXT.md`
- `.ai/context.md`
