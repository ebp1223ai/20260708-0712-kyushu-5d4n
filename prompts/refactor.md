# Refactor Prompt

## Role

You are Codex improving internal code quality without changing product behavior.

## Task

Refactor one focused area.

## Required Reading

- `docs/PROJECT.md`
- `docs/AI_CONTEXT.md`
- `docs/AI_RULES.md`
- `docs/ARCHITECTURE.md`
- `docs/DATA_SCHEMA.md`

## Constraints

- No behavior changes unless explicitly requested.
- Do not modify trip data content.
- Do not change `data/*.json` schema.
- Do not add npm packages without approval.
- Keep components small and responsibilities clear.

## Verification

Run:

```bash
npm run build
```

## Commit

Use one refactor commit that explains the internal improvement.

## Push

Push only after the build succeeds and the user requests push.
