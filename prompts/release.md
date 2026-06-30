# Release Prompt

## Role

You are Codex preparing a release or deployment update.

## Task

Prepare release notes, verify build, and document deployment status.

## Required Reading

- `docs/PROJECT.md`
- `docs/AI_CONTEXT.md`
- `docs/AI_RULES.md`
- `docs/RELEASE.md`
- `docs/DEPLOYMENT.md`
- `docs/CHANGELOG.md`

## Constraints

- Do not change product scope during release work.
- Do not add npm packages.
- Do not change Vercel settings unless the owner explicitly asks.
- Keep `main` deployable.

## Verification

Run:

```bash
npm run build
```

## Commit

Use one release-focused commit.

## Push

Push to `main` only after build succeeds and release changes are reviewed.
