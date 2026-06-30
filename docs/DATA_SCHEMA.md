# Data Schema

The current application is driven primarily by three JSON files:

- `data/locations.json`
- `data/routes.json`
- `data/days.json`

Do not delete existing fields. New fields must be backward compatible.

## locations.json

Array of location objects.

| Field | Type | Purpose |
| --- | --- | --- |
| `id` | number | Stable index used by routes, markers, and itinerary order. |
| `name` | string | Display name of the place. |
| `date` | string | Trip date label, such as `7/8`. |
| `day` | number | Day number used for grouping and colors. |
| `type` | string | Location category, such as airport, hotel, attraction, transport, or shopping. |
| `address` | string | Human-readable address or area. |
| `lat` | number | Latitude for map marker and Google Maps links. |
| `lng` | number | Longitude for map marker and Google Maps links. |
| `color` | string | Day or category color used by markers and cards. |

## routes.json

Array of route segment objects.

| Field | Type | Purpose |
| --- | --- | --- |
| `from` | number | Starting location id. Must reference `locations[].id`. |
| `to` | number | Ending location id. Must reference `locations[].id`. |
| `mode` | string | Machine-friendly transport mode. |
| `modeLabel` | string | Display label for transport mode. |
| `duration` | string | Human-readable estimated travel time. |
| `note` | string | Route description shown in timeline and map tooltip. |

## days.json

Array of day summary objects.

| Field | Type | Purpose |
| --- | --- | --- |
| `day` | number | Day number used to match locations. |
| `date` | string | Date label, such as `7/8`. |
| `title` | string | Short day title. |
| `summary` | string | Day overview shown in dashboard. |
| `traffic` | string | Estimated total travel time for the day. |

## Compatibility Rules

- Existing fields must not be removed.
- Existing field types must not be changed.
- New optional fields are allowed only when old components continue to work.
- Data migrations should be documented in `docs/CHANGELOG.md`.

## Future Data Extensions

Potential future datasets:

- `photos.json`
- `restaurants.json`
- `weather.json`
- `budget.json`
