import type { DayInfo, Location, RouteSegment } from '@/components/trip/types';

export const DAY_COLORS: Record<number, string> = {
  1: '#ef4444',
  2: '#22c55e',
  3: '#3b82f6',
  4: '#eab308',
  5: '#8b5cf6',
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

export function routesForDay(locations: Location[], routes: RouteSegment[], day: number) {
  const sequence = itineraryLocationsForDay(locations, day);
  const byFrom = routeByFrom(routes);

  return sequence
    .slice(0, -1)
    .map((location) => byFrom.get(location.id))
    .filter((route): route is RouteSegment => Boolean(route));
}

export function dayRouteMinutes(locations: Location[], routes: RouteSegment[], day: number) {
  return routesForDay(locations, routes, day).reduce((sum, route) => sum + (route.durationMin ?? 0), 0);
}

export function daySummarySteps(locations: Location[], routes: RouteSegment[], day: DayInfo) {
  const sequence = itineraryLocationsForDay(locations, day.day);
  const byFrom = routeByFrom(routes);

  return sequence.map((location, index) => ({
    location,
    routeToNext: index < sequence.length - 1 ? byFrom.get(location.id) : undefined,
  }));
}
