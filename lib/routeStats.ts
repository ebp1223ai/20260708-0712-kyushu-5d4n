import type { Location, RouteSegment } from '@/components/trip/types';

export function formatDuration(totalMinutes: number) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours === 0) return `${minutes} 分鐘`;
  if (minutes === 0) return `${hours} 小時`;
  return `${hours} 小時 ${minutes} 分鐘`;
}

export function totalRouteMinutes(routes: RouteSegment[]) {
  return routes.reduce((total, route) => total + (route.durationMin ?? 0), 0);
}

export function routeMinutesByDay(locations: Location[], routes: RouteSegment[]) {
  const locationMap = new Map(locations.map((location) => [location.id, location]));

  return routes.reduce<Record<number, number>>((totals, route) => {
    const to = locationMap.get(route.to);
    if (!to) return totals;

    totals[to.day] = (totals[to.day] ?? 0) + (route.durationMin ?? 0);
    return totals;
  }, {});
}
