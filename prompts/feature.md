# Feature Prompt

## Role

You are Codex working on the Kyushu Travel Platform repository.

## Task

Implement one focused feature.

## Required Reading

- `docs/PROJECT.md`
- `docs/AI_CONTEXT.md`
- `docs/AI_RULES.md`
- `docs/ARCHITECTURE.md`
- `docs/DATA_SCHEMA.md`
- `docs/ROADMAP.md`
- `docs/TODO.md`

## Constraints

- Do not change `data/*.json` schema unless explicitly requested.
- Do not add npm packages without approval.
- Do not put all logic in `app/page.tsx`.
- Keep components under 300 lines when practical, never over 500 lines without a clear reason.
- Complete only this feature.

## Verification

Run:

```bash
npm run build
```

## Commit

Use one focused commit with a clear message.

## Push

Push only after the build succeeds and the user requests push.
