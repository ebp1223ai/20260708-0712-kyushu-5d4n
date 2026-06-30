# Development

## Local Setup

```bash
git pull
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Build

```bash
npm run build
```

## Git Flow

```bash
git status
git add .
git commit -m "Commit message"
git push
```

## Branch Naming

- `main`: production branch, always deployable.
- `feature/*`: new features.
- `bugfix/*`: bug fixes.
- `docs/*`: documentation.
- `refactor/*`: internal cleanup without behavior changes.

## Development Rules

- One feature or fix per commit.
- Update docs when behavior, architecture, data contracts, or workflow changes.
- Keep implementation and documentation consistent.
- Do not break Vercel Production.
