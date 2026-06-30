# 20260708-0712 Kyushu 5D4N

2026/07/08-07/12 Kyushu 5D4N interactive travel website.

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

## AI Workflow

Before starting any AI-assisted work:

1. Read `docs/PROJECT.md`.
2. Read `docs/AI_CONTEXT.md`.
3. Select the matching prompt template from `prompts/`.
4. Keep the task limited to one issue or one feature.
5. Do not change `data/*.json` schema without explicit approval.
6. Do not add npm packages without explicit approval.
7. Run `npm run build` before commit or push.

Codex is responsible for coding, build, test, commit, and push when requested. Owner-only areas such as GitHub ownership, Vercel ownership, domains, billing, API keys, and secrets remain under the project owner.

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
- [Security](docs/SECURITY.md)
- [Deployment](docs/DEPLOYMENT.md)
- [Development](docs/DEVELOPMENT.md)
- [Troubleshooting](docs/TROUBLESHOOTING.md)
- [AI Context](docs/AI_CONTEXT.md)

## Prompt Templates

- [Feature](prompts/feature.md)
- [Bugfix](prompts/bugfix.md)
- [Refactor](prompts/refactor.md)
- [Documentation](prompts/documentation.md)
- [Release](prompts/release.md)
- [UI Polish](prompts/ui-polish.md)

## Deployment

Vercel deploys the `main` branch automatically.

Keep `main` deployable at all times.
