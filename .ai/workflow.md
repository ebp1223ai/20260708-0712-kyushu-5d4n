# AI Workflow

1. Read the task.
2. Read `docs/PROJECT.md`.
3. Read `docs/AI_CONTEXT.md`.
4. Read `.ai/context.md`.
5. Read the relevant prompt or template.
6. Inspect relevant source files.
7. Implement only the requested scope.
8. Run verification.
9. Run `npm run build`.
10. Commit with one clear message if requested.
11. Push only if requested.

## Required Verification

For code changes:

```bash
npm run build
```

For documentation-only changes, still run build when the task requests it.

## Safety

- Do not expose secrets.
- Do not modify owner-only GitHub, Vercel, domain, billing, or API key settings.
- Do not add dependencies without approval.
