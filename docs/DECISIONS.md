# Architecture Decisions

This file records project decisions that should remain visible to humans and AI assistants.

## 2026-06

### Decision: Use Next.js 15 App Router

Reason:

- Modern React and server rendering model.
- Good fit for Vercel.
- Supports a scalable route and layout structure.

Rejected:

- Pages Router.

### Decision: Use React Leaflet

Reason:

- Open source map rendering.
- Works with OpenStreetMap.
- Does not require a map API key for the current v1.0 use case.

Rejected:

- Google Maps.
- Mapbox.

### Decision: Use JSON as the Current Data Source

Reason:

- Easy for AI assistants and humans to inspect.
- Easy to version in Git.
- Keeps v1.0 simple without a database or CMS.

### Decision: Use Vercel Production

Reason:

- Automatic deployment from GitHub.
- Good support for Next.js.
- Simple production workflow.

### Decision: Use GitHub as the Source of Truth

Reason:

- Every change is tracked by commit.
- Supports collaboration and rollback.
- Keeps production tied to reviewed source code.
