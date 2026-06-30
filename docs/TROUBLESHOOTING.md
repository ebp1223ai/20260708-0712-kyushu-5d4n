# Troubleshooting

## Next.js 15 App Router and `dynamic(..., { ssr: false })`

Problem:

- Server Components cannot directly use `dynamic(..., { ssr: false })`.

Fix:

- Move the dynamic import behind a Client Component boundary, such as `TripMapClient.tsx`.

## React Leaflet Server Component Error

Problem:

- Leaflet expects browser APIs such as `window` and DOM.

Fix:

- Keep Leaflet and React Leaflet inside Client Components only.
- Do not import Leaflet directly in Server Components.

## `npm install` Shows Moderate Vulnerabilities

Guidance:

- Do not blindly run `npm audit fix --force`.
- `--force` can introduce breaking dependency changes.
- Review vulnerabilities and package impact before changing dependencies.

## Vercel Cannot Access GitHub Repository

Problem:

- Vercel GitHub App may not have repository access.

Fix:

- Install or update the Vercel GitHub App permissions for this repository.

## Mobile Cannot Access Localhost

Problem:

- `localhost` on a phone points to the phone itself, not the development computer.

Fix:

- Use the Vercel Production URL for mobile checks.
- For local network testing, expose the dev server on the local network only when needed.
