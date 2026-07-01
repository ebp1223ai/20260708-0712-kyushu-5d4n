import type { DayInfo, Location, RouteSegment } from './types';
import { compactDuration, dayColor, daySummarySteps, routeIcon } from '@/lib/tripPlan';
import { formatDuration, routeMinutesByDay } from '@/lib/routeStats';

type Props = {
  locations: Location[];
  routes: RouteSegment[];
  days: DayInfo[];
};

export function TripDashboard({ locations, routes, days }: Props) {
  const dailyRouteMinutes = routeMinutesByDay(locations, routes);

  return (
    <section className="mt-6 rounded-3xl bg-white p-5 shadow-xl shadow-slate-200/70">
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl font-black text-slate-900">旅程總覽</h2>
          <p className="text-sm text-slate-500">每日重點、景點順序與移動時間一眼掌握。</p>
        </div>
        <p className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-600">
          {locations.length} 個地點 · {routes.length} 段路線
        </p>
      </div>

      <div className="grid gap-3 md:grid-cols-5">
        {days.map((day) => {
          const count = locations.filter((location) => location.day === day.day).length;
          const color = dayColor(day.day);
          const routeTime = formatDuration(dailyRouteMinutes[day.day] ?? 0);
          const steps = daySummarySteps(locations, routes, day);

          return (
            <article key={day.day} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
                <p className="font-black">Day {day.day}</p>
              </div>
              <p className="text-sm font-bold text-slate-700">{day.date} · {day.title}</p>
              <div className="mt-3 space-y-2 text-sm leading-5 text-slate-600">
                {steps.map(({ location, routeToNext }, index) => (
                  <div key={`${day.day}-${location.id}-${index}`}>
                    <p className="font-bold text-slate-900">{location.name}</p>
                    {routeToNext ? (
                      <p className="mt-1 font-black" style={{ color }}>
                        {routeIcon(routeToNext.mode)} {compactDuration(routeToNext.duration)}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-2 text-xs font-bold">
                <span className="rounded-full bg-white px-3 py-1 text-slate-600">{count} 個點</span>
                <span className="rounded-full bg-white px-3 py-1 text-blue-700">{routeTime}</span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
