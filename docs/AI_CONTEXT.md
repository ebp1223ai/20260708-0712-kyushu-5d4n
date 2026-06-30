# AI Context

## Project Name

20260708-0712 Kyushu 5D4N

## Repository URL

https://github.com/ebp1223ai/20260708-0712-kyushu-5d4n

## Production URL

https://20260708-0712-kyushu-5d4n.vercel.app

## Tech Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- React Leaflet
- OpenStreetMap
- GitHub
- Vercel

## Current Status

- Production is deployed successfully.
- Local `npm run dev` works.
- Desktop and mobile can open the production site.
- Documentation system exists under `docs/`.
- Main travel data lives in `data/*.json`.

## Current Version

v1.0 production.

## Current Milestone

v1.1 UI Polish.

## Important Data Files

- `data/locations.json`
- `data/routes.json`
- `data/days.json`

## Current Architecture

- `app/`: Next.js App Router page and layout.
- `components/`: UI, trip, and map components.
- `components/map/TripMapClient.tsx`: Client Component boundary for React Leaflet dynamic import.
- `data/`: primary itinerary data.
- `lib/maps.ts`: Google Maps URL helpers.
- `docs/`: documentation and workflow rules.
- `prompts/`: reusable AI task templates.

## Current Known Issues

- Flight route line from Taoyuan to Oita may visually dominate the map.
- Timeline is not yet an Accordion.
- Timeline clicks do not yet trigger map FlyTo and Marker Highlight.
- Mobile map and itinerary layout can be polished further.
- Google Maps link clarity can be improved.

## Next Recommended Tasks

1. Remove or soften the Taoyuan to Oita flight route line.
2. Convert Timeline to Accordion.
3. Click Timeline item to trigger map FlyTo and Marker Highlight.
4. Optimize mobile map and itinerary layout.
5. Improve Google Maps link and navigation clarity.

## Do Not Change

- Do not casually change `data/*.json` schema.
- Do not add npm packages without approval.
- Do not downgrade Next.js.
- Do not change Vercel deployment settings without owner approval.

## Build Command

```bash
npm run build
```

## Deployment Rule

Push to `main` triggers Vercel Production deployment.
