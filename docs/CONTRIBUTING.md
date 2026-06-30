# Contributing

## Development Flow

1. Pull the latest changes.

```bash
git pull
```

2. Install dependencies.

```bash
npm install
```

3. Start local development.

```bash
npm run dev
```

4. Verify production build.

```bash
npm run build
```

5. Commit and push.

```bash
git add .
git commit -m "Your commit message"
git push
```

## Branch Rules

- `main` must always remain deployable.
- Future work should use `feature/*` branches.
- Keep each feature or fix focused.
- Prefer one feature per commit.

## Data Rules

- Do not delete existing fields from `data/*.json`.
- Keep schema changes backward compatible.
- Document data changes in `docs/CHANGELOG.md`.

## Package Rules

- Do not add third-party packages without agreement.
- Do not downgrade Next.js.
