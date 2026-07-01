import type { DayInfo, Location, RouteSegment } from './types';
import { googleMapsPlaceUrl } from '@/lib/maps';
import {
  compactDuration,
  dayColor,
  daySummarySteps,
  routeIcon,
  type DaySelectionMode,
  type EdgeVisibility,
} from '@/lib/tripPlan';

type Props = {
  selectedDays: number[];
  selectionMode: DaySelectionMode;
  edgeVisibility: EdgeVisibility;
  onSelectDay: (day: number) => void;
  onSelectionModeChange: (mode: DaySelectionMode) => void;
  onEdgeVisibilityChange: (visibility: EdgeVisibility) => void;
  locations: Location[];
  routes: RouteSegment[];
  days: DayInfo[];
};

const edgeOptions: { value: EdgeVisibility; label: string }[] = [
  { value: 'all', label: '顯示全部' },
  { value: 'hideStart', label: '隱藏頭段' },
  { value: 'hideEnd', label: '隱藏尾段' },
  { value: 'hideBoth', label: '隱藏頭尾' },
];

export function DailyPlan({
  selectedDays,
  selectionMode,
  edgeVisibility,
  onSelectDay,
  onSelectionModeChange,
  onEdgeVisibilityChange,
  locations,
  routes,
  days,
}: Props) {
  const selectedSet = new Set(selectedDays);

  return (
    <section className="mt-8 rounded-3xl bg-white p-5 shadow-xl shadow-slate-200/70">
      <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-xl font-black text-slate-900">每日行程</h2>
          <p className="mt-1 text-sm text-slate-500">景點與移動資訊已依日期串接，切換日期會同步更新地圖。</p>
        </div>
        <div className="flex flex-wrap gap-2 print:hidden">
          <button
            type="button"
            onClick={() => onSelectionModeChange('single')}
            className={`rounded-full border px-4 py-2 text-sm font-black ${
              selectionMode === 'single' ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 bg-white text-slate-600'
            }`}
          >
            單選
          </button>
          <button
            type="button"
            onClick={() => onSelectionModeChange('range')}
            className={`rounded-full border px-4 py-2 text-sm font-black ${
              selectionMode === 'range' ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-slate-200 bg-white text-slate-600'
            }`}
          >
            連續多選
          </button>
        </div>
      </div>

      <div className="mb-4 flex gap-2 overflow-x-auto pb-1 print:hidden">
        {days.map((day) => {
          const active = selectedSet.has(day.day);
          const color = dayColor(day.day);

          return (
            <button
              key={day.day}
              type="button"
              onClick={() => onSelectDay(day.day)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-black transition ${
                active ? 'text-white shadow-lg' : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
              }`}
              style={active ? { backgroundColor: color, borderColor: color } : undefined}
            >
              Day {day.day}
            </button>
          );
        })}
      </div>

      <div className="mb-5 flex gap-2 overflow-x-auto pb-1 print:hidden">
        {edgeOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onEdgeVisibilityChange(option.value)}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm font-black ${
              edgeVisibility === option.value
                ? 'border-blue-600 bg-blue-600 text-white'
                : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="space-y-5">
        {days.map((day) => {
          const color = dayColor(day.day);
          const steps = daySummarySteps(locations, routes, day, edgeVisibility);
          const active = selectedSet.has(day.day);

          return (
            <section
              key={day.day}
              className={`day-itinerary rounded-2xl border border-slate-100 bg-slate-50 p-4 ${
                active ? 'block' : 'hidden print:block'
              }`}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
                <div>
                  <p className="text-sm font-bold text-slate-500">{day.date}</p>
                  <h3 className="font-black text-slate-900">Day {day.day}</h3>
                </div>
              </div>

              <div className="space-y-1">
                {steps.map(({ location, routeToNext }, index) => (
                  <div className="itinerary-stop" key={`${day.day}-${location.id}-${index}`}>
                    <a
                      href={googleMapsPlaceUrl(location)}
                      target="_blank"
                      rel="noreferrer"
                      className="flex gap-3 rounded-2xl bg-white p-3 transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-sm font-black text-white"
                        style={{ backgroundColor: color }}
                      >
                        {location.id}
                      </span>
                      <span>
                        <span className="block font-bold text-slate-900">{location.name}</span>
                        {day.day > 1 && index === 0 ? (
                          <span className="mt-0.5 inline-flex rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-500">
                            昨天住宿
                          </span>
                        ) : null}
                        <span className="block text-xs leading-5 text-slate-500">{location.address}</span>
                      </span>
                    </a>

                    {routeToNext ? (
                      <div className="route-connector ml-5 flex gap-3 py-2 pl-3">
                        <div className="flex flex-col items-center" style={{ color }}>
                          <span className="h-3 w-px opacity-40" style={{ backgroundColor: color }} />
                          <span className="text-base leading-none">↓</span>
                          <span className="h-3 w-px opacity-40" style={{ backgroundColor: color }} />
                        </div>
                        <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm leading-6 text-slate-700">
                          <p className="font-black text-slate-900">
                            {routeIcon(routeToNext.mode)} {compactDuration(routeToNext.duration)}
                          </p>
                          <p>
                            <span className="font-bold text-slate-900">交通方式：</span>
                            {routeToNext.modeLabel}
                          </p>
                          <p>
                            <span className="font-bold text-slate-900">移動時間：</span>
                            {routeToNext.duration}
                          </p>
                          <a
                            href={routeToNext.googleMapsUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="font-bold text-blue-700 underline underline-offset-4"
                          >
                            Google Maps 導航
                          </a>
                        </div>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
