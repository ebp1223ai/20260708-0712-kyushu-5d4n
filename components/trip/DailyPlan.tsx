import type { DayInfo, Location, RouteSegment } from './types';
import { googleMapsPlaceUrl } from '@/lib/maps';

type Props = {
  locations: Location[];
  routes: RouteSegment[];
  days: DayInfo[];
};

export function DailyPlan({ locations, routes, days }: Props) {
  const routeMap = new Map(routes.map((route) => [route.from, route]));

  return (
    <div className="mt-4 space-y-5">
      {days.map((day) => {
        const list = locations.filter((location) => location.day === day.day);

        return (
          <section key={day.day} className="rounded-2xl bg-slate-50 p-4">
            <div className="mb-3">
              <p className="text-sm font-bold text-blue-700">Day {day.day} · {day.date}</p>
              <h3 className="font-black text-slate-900">{day.title}</h3>
            </div>
            <div className="space-y-2">
              {list.map((location) => {
                const route = routeMap.get(location.id);
                const hasNextLocation = locations.some((item) => item.id === route?.to);

                return (
                  <div className="itinerary-stop" key={location.id}>
                    <a
                      href={googleMapsPlaceUrl(location)}
                      target="_blank"
                      rel="noreferrer"
                      className="flex gap-3 rounded-2xl bg-white p-3 transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-sm font-black text-white"
                        style={{ backgroundColor: location.color }}
                      >
                        {location.id}
                      </span>
                      <span>
                        <span className="block font-bold text-slate-900">{location.name}</span>
                        <span className="block text-xs leading-5 text-slate-500">{location.address}</span>
                      </span>
                    </a>

                    {hasNextLocation ? (
                      route ? (
                        <div className="route-connector ml-5 flex gap-3 py-2 pl-3">
                          <div className="flex flex-col items-center text-blue-600">
                            <span className="h-3 w-px bg-blue-200" />
                            <span className="text-base leading-none">↓</span>
                            <span className="h-3 w-px bg-blue-200" />
                          </div>
                          <div className="rounded-xl border border-blue-100 bg-blue-50/80 px-3 py-2 text-sm leading-6 text-slate-700">
                            <p>
                              <span className="font-bold text-slate-900">交通方式：</span>
                              {route.modeLabel}
                            </p>
                            <p>
                              <span className="font-bold text-slate-900">移動時間：</span>
                              {route.duration}
                            </p>
                            <a
                              href={route.googleMapsUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="font-bold text-blue-700 underline underline-offset-4"
                            >
                              Google Maps 導航
                            </a>
                          </div>
                        </div>
                      ) : (
                        <div className="route-connector ml-5 flex gap-3 py-2 pl-3">
                          <div className="flex flex-col items-center text-slate-400">
                            <span className="h-3 w-px bg-slate-200" />
                            <span className="text-base leading-none">↓</span>
                            <span className="h-3 w-px bg-slate-200" />
                          </div>
                          <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-500">
                            路線待確認
                          </div>
                        </div>
                      )
                    ) : null}
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
