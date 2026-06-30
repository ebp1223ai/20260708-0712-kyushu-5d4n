# 20260708-0712 Kyushu 5D4N

2026/07/08-07/12 九州五天四夜互動旅遊網站。

Production: https://20260708-0712-kyushu-5d4n.vercel.app

## Overview

This project is the first travel dataset for a future reusable Travel Platform. The current v1.0 site uses the Kyushu itinerary data to render a mobile-first interactive travel experience with itinerary cards, route timeline, React Leaflet map, OpenStreetMap tiles, and Google Maps links.

Primary data sources:

- `data/locations.json`
- `data/routes.json`
- `data/days.json`

## Development

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

Before committing:

```bash
npm run build
```

## Documentation

- [Project Vision](docs/PROJECT.md)
- [AI Rules](docs/AI_RULES.md)
- [Architecture](docs/ARCHITECTURE.md)
- [UI Guideline](docs/UI_GUIDELINE.md)
- [Data Schema](docs/DATA_SCHEMA.md)
- [Roadmap](docs/ROADMAP.md)
- [TODO](docs/TODO.md)
- [Changelog](docs/CHANGELOG.md)
- [Release](docs/RELEASE.md)
- [Contributing](docs/CONTRIBUTING.md)
- [Issue Template](docs/ISSUE_TEMPLATE.md)

## Deployment

Vercel deploys the `main` branch automatically.

Keep `main` deployable at all times.
