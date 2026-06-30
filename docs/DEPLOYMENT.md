# Deployment

## Production

Production URL:

https://20260708-0712-kyushu-5d4n.vercel.app

## Branch Rule

- GitHub `main` maps to Vercel Production.
- Pushing to `main` triggers Vercel automatic deployment.
- `main` must always remain deployable.

## Pre-deploy Check

Run before pushing:

```bash
npm run build
```

## Vercel Settings

- Framework: Next.js
- Root Directory: `./`
- Build Command: default
- Install Command: default
- Environment Variables: none currently required

## If Deployment Fails

1. Open Vercel Build Logs.
2. Identify TypeScript or build errors.
3. Reproduce locally with `npm run build`.
4. Fix the issue.
5. Commit.
6. Push again.
