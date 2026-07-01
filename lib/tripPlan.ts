import type { DayInfo, Location, RouteSegment } from '@/components/trip/types';

export type EdgeVisibility = 'all' | 'hideStart' | 'hideEnd' | 'hideBoth';
export type DaySelectionMode = 'single' | 'range';

export const DAY_COLORS: Record<number, string> = {
  1: '#ef4444',
  2: '#16a34a',
  3: '#2563eb',
  4: '#f97316',
  5: '#7e22ce',
};

export function dayColor(day: number) {
  return DAY_COLORS[day] ?? '#10233f';
}

export function routeIcon(mode: string) {
  if (mode === 'flight') return '✈️';
  if (mode === 'driving') return '🚗';
  if (mode === 'walk' || mode === 'walking') return '🚶';
  if (mode === 'bus') return '🚌';
  return '↓';
}

export function compactDuration(duration: string) {
  return duration
    .replace(/\s+/g, '')
    .replace('小時', 'h')
    .replace('分鐘', 'm');
}

export function normalizeSelectedDays(days: number[]) {
  const unique = Array.from(new Set(days)).sort((a, b) => a - b);
  if (unique.length <= 1) return unique;

  const start = unique[0];
  const end = unique[unique.length - 1];
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}

export function dayRange(from: number, to: number) {
  const start = Math.min(from, to);
  const end = Math.max(from, to);
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}

export function locationsForStoredDay(locations: Location[], day: number) {
  return locations
    .filter((location) => location.day === day)
    .sort((a, b) => a.id - b.id);
}

export function itineraryLocationsForDay(locations: Location[], day: number) {
  const current = locationsForStoredDay(locations, day);
  if (day === 1) return current;

  const previous = locationsForStoredDay(locations, day - 1);
  const previousLast = previous.at(-1);

  return previousLast ? [previousLast, ...current] : current;
}

export function routeByFrom(routes: RouteSegment[]) {
  return new Map(routes.map((route) => [route.from, route]));
}

export function isStartRoute(route: RouteSegment) {
  return route.from === 1 && route.to === 2;
}

export function isEndRoute(route: RouteSegment) {
  return route.from === 20 && route.to === 21;
}

export function isRouteVisible(route: RouteSegment, visibility: EdgeVisibility) {
  if ((visibility === 'hideStart' || visibility === 'hideBoth') && isStartRoute(route)) return false;
  if ((visibility === 'hideEnd' || visibility === 'hideBoth') && isEndRoute(route)) return false;
  return true;
}

export function itineraryLocationsForDayView(locations: Location[], routes: RouteSegment[], day: number, visibility: EdgeVisibility) {
  const sequence = itineraryLocationsForDay(locations, day);
  const byFrom = routeByFrom(routes);

  let start = 0;
  let end = sequence.length;
  const firstLocation = sequence[0];
  const previousLocation = sequence.at(-2);
  const firstRoute = firstLocation ? byFrom.get(firstLocation.id) : undefined;
  const previousRoute = previousLocation ? byFrom.get(previousLocation.id) : undefined;

  if (firstRoute && !isRouteVisible(firstRoute, visibility)) start = 1;
  if (previousRoute && !isRouteVisible(previousRoute, visibility)) end -= 1;

  return sequence.slice(start, end);
}

export function routesForDay(locations: Location[], routes: RouteSegment[], day: number, visibility: EdgeVisibility = 'all') {
  const sequence = itineraryLocationsForDayView(locations, routes, day, visibility);
  const byFrom = routeByFrom(routes);

  return sequence
    .slice(0, -1)
    .map((location) => byFrom.get(location.id))
    .filter((route): route is RouteSegment => route !== undefined && isRouteVisible(route, visibility));
}

export function dayRouteMinutes(locations: Location[], routes: RouteSegment[], day: number, visibility: EdgeVisibility = 'all') {
  return routesForDay(locations, routes, day, visibility).reduce((sum, route) => sum + (route.durationMin ?? 0), 0);
}

export function daySummarySteps(locations: Location[], routes: RouteSegment[], day: DayInfo, visibility: EdgeVisibility = 'all') {
  const sequence = itineraryLocationsForDayView(locations, routes, day.day, visibility);
  const byFrom = routeByFrom(routes);

  return sequence.map((location, index) => {
    const routeToNext = index < sequence.length - 1 ? byFrom.get(location.id) : undefined;
    return {
      location,
      routeToNext: routeToNext && isRouteVisible(routeToNext, visibility) ? routeToNext : undefined,
    };
  });
}

export function locationsForSelectedDays(locations: Location[], routes: RouteSegment[], selectedDays: number[], visibility: EdgeVisibility) {
  const byId = new Map(locations.map((location) => [location.id, location]));
  const visibleIds = new Set<number>();

  for (const day of selectedDays) {
    for (const location of itineraryLocationsForDayView(locations, routes, day, visibility)) {
      visibleIds.add(location.id);
    }
    for (const route of routesForDay(locations, routes, day, visibility)) {
      visibleIds.add(route.from);
      visibleIds.add(route.to);
    }
  }

  return Array.from(visibleIds)
    .map((id) => byId.get(id))
    .filter((location): location is Location => Boolean(location));
}
