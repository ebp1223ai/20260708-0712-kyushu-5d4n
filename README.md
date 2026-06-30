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
3. Read `.ai/context.md`.
4. Select the matching prompt template from `prompts/` or `.ai/templates/`.
5. Keep the task limited to one issue or one feature.
6. Do not change `data/*.json` schema without explicit approval.
7. Do not add npm packages without explicit approval.
8. Run `npm run build` before commit or push.

Codex is responsible for coding, build, test, commit, and push when requested. Owner-only areas such as GitHub ownership, Vercel ownership, domains, billing, API keys, and secrets remain under the project owner.

## AI Workspace

- `docs/`: human-readable project, architecture, workflow, safety, and release documentation.
- `.ai/`: compact AI workspace for shared context, workflow, commands, and reusable templates.
- `prompts/`: Codex-oriented task prompt templates.

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
- [Architecture Decisions](docs/DECISIONS.md)
- [Code Style](docs/CODE_STYLE.md)
- [Version History](docs/VERSION.md)

## Prompt Templates

- [Feature](prompts/feature.md)
- [Bugfix](prompts/bugfix.md)
- [Refactor](prompts/refactor.md)
- [Documentation](prompts/documentation.md)
- [Release](prompts/release.md)
- [UI Polish](prompts/ui-polish.md)

## AI Workspace Files

- [.ai README](.ai/README.md)
- [.ai Context](.ai/context.md)
- [.ai Workflow](.ai/workflow.md)
- [.ai Commands](.ai/commands.md)
- [.ai Feature Template](.ai/templates/feature.md)
- [.ai Bugfix Template](.ai/templates/bugfix.md)
- [.ai Review Template](.ai/templates/review.md)
- [.ai Release Template](.ai/templates/release.md)

## Deployment

Vercel deploys the `main` branch automatically.

Keep `main` deployable at all times.
