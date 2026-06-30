# Architecture

## Framework

The project uses Next.js 15 App Router with TypeScript and Tailwind CSS.

The root route is rendered from `app/page.tsx`. It composes data-driven presentation components and passes JSON data into the UI.

## Layers

### Presentation Layer

Components that render cards, summaries, timeline items, hero sections, and layout.

Examples:

- `components/layout/`
- `components/trip/`
- `components/DaySelector.tsx`

### Map Layer

Components that render React Leaflet and OpenStreetMap.

Examples:

- `components/map/TripMap.tsx`
- `components/map/TripMapClient.tsx`

React Leaflet depends on browser APIs, so it must be isolated in Client Components.

### Data Layer

Structured JSON files that drive the current trip:

- `data/locations.json`
- `data/routes.json`
- `data/days.json`

These files are the main source of truth for the v1.0 itinerary.

### Service Layer

Small functions that translate data into external service URLs.

Example:

- `lib/maps.ts`

### Utility Layer

Shared helpers and future reusable logic should live in `lib/` or clearly named utility modules.

## Directory Responsibilities

- `app/`: Next.js App Router routes, layout, global CSS imports, and page composition.
- `components/`: reusable UI and interactive components.
- `data/`: structured trip data. Do not remove existing schema fields.
- `lib/`: helper functions and service URL builders.
- `public/`: static assets and public files.
- `docs/`: project documentation, process rules, roadmap, and release notes.

## React Leaflet Boundary

React Leaflet must not run in a Server Component. Keep this pattern:

1. Server Component imports JSON data and renders page structure.
2. Client wrapper uses `dynamic(..., { ssr: false })`.
3. Leaflet implementation stays behind that Client Component boundary.

This avoids App Router server rendering errors and browser API crashes.
