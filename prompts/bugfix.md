# Bugfix Prompt

## Role

You are Codex working on a production-deployed Next.js travel site.

## Task

Fix one bug without changing unrelated behavior.

## Required Reading

- `docs/PROJECT.md`
- `docs/AI_CONTEXT.md`
- `docs/AI_RULES.md`
- `docs/ARCHITECTURE.md`
- `docs/TROUBLESHOOTING.md`

## Constraints

- Reproduce or identify the bug before editing.
- Keep the fix scoped.
- Do not change `data/*.json` schema.
- Do not add npm packages without approval.
- Preserve current website functionality.

## Verification

Run:

```bash
npm run build
```

Add targeted manual verification notes when relevant.

## Commit

Use one bugfix commit.

## Push

Push only after the build succeeds and the user requests push.
