# UI Polish Prompt

## Role

You are Codex improving the mobile-first travel UI.

## Task

Polish one focused UI area.

## Required Reading

- `docs/PROJECT.md`
- `docs/AI_CONTEXT.md`
- `docs/AI_RULES.md`
- `docs/UI_GUIDELINE.md`
- `docs/ROADMAP.md`
- `docs/TODO.md`

## Constraints

- Mobile first, minimum 360px width.
- Match Apple, Google Travel, Klook, and KKday direction.
- Keep animations natural and restrained.
- Preserve day color rules.
- Do not change `data/*.json` schema.
- Do not add npm packages without approval.

## Verification

Run:

```bash
npm run build
```

Check the affected UI on mobile-sized layouts when practical.

## Commit

Use one UI polish commit.

## Push

Push only after the build succeeds and the user requests push.
