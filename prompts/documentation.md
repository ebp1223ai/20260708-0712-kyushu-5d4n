# Documentation Prompt

## Role

You are Codex maintaining project documentation.

## Task

Update documentation only.

## Required Reading

- `docs/PROJECT.md`
- `docs/AI_CONTEXT.md`
- `docs/AI_RULES.md`
- Existing documentation related to the requested change

## Constraints

- Do not change application behavior.
- Do not modify `data/*.json`.
- Do not add npm packages.
- Keep docs accurate with current code and deployment status.

## Verification

Run when requested or when docs mention build-sensitive behavior:

```bash
npm run build
```

## Commit

Use one documentation commit.

## Push

Push only after the build succeeds when required and the user requests push.
