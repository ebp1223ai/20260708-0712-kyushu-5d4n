# AI Context

## Project Name

20260708-0712 Kyushu 5D4N

## Repository

https://github.com/ebp1223ai/20260708-0712-kyushu-5d4n

## Production

https://20260708-0712-kyushu-5d4n.vercel.app

## Framework

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- React Leaflet
- OpenStreetMap
- Vercel
- GitHub

## Architecture

- `app/`: App Router page and layout.
- `components/`: presentation, trip, and map components.
- `data/`: main JSON itinerary data.
- `lib/`: utility and service helpers.
- `docs/`: human-readable documentation.
- `.ai/`: compact AI context and workflow.
- `prompts/`: Codex task prompts.

## Main JSON Files

- `data/locations.json`
- `data/routes.json`
- `data/days.json`

## Current Version

v1.0 production.

## Current Milestone

v1.1 UI Polish.

## Current Tasks

- Soften or remove the Taoyuan to Oita flight route line.
- Convert Timeline to Accordion.
- Add map FlyTo and Marker Highlight from Timeline clicks.
- Improve mobile layout.
- Improve Google Maps link clarity.

## Do Not Change

- Do not change `data/*.json` schema without explicit approval.
- Do not add npm packages without explicit approval.
- Do not downgrade Next.js.
- Do not change Vercel deployment settings without owner approval.

## Build

```bash
npm run build
```
