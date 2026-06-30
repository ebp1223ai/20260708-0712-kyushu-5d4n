import type { Location, RouteSegment } from './types';
import { googleMapsDirectionsUrl } from '@/lib/maps';

type Props = {
  locations: Location[];
  routes: RouteSegment[];
};

export function RouteTimeline({ locations, routes }: Props) {
  const locationMap = new Map(locations.map((location) => [location.id, location]));

  return (
    <div id="timeline" className="mt-4 grid gap-3 md:grid-cols-2">
      {routes.map((route) => {
        const from = locationMap.get(route.from);
        const to = locationMap.get(route.to);
        if (!from || !to) return null;

        return (
          <article key={`${route.from}-${route.to}`} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <div className="flex items-start gap-3">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xs font-black text-white"
                style={{ backgroundColor: from.color }}
              >
                {route.from} → {route.to}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-black text-slate-900">{route.note}</p>
                <p className="mt-1 text-sm text-slate-500">{route.modeLabel}</p>
                <p className="mt-2 inline-flex rounded-full bg-white px-3 py-1 text-sm font-black text-blue-700">
                  {route.duration}
                </p>
                <a
                  href={googleMapsDirectionsUrl(from, to)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block text-sm font-bold text-blue-600 underline underline-offset-4"
                >
                  開啟 Google Maps 導航
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
