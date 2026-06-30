import type { DayInfo, Location } from './types';
import { googleMapsPlaceUrl } from '@/lib/maps';

type Props = {
  locations: Location[];
  days: DayInfo[];
};

export function DailyPlan({ locations, days }: Props) {
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
            <div className="space-y-3">
              {list.map((location) => (
                <a
                  href={googleMapsPlaceUrl(location)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-3 rounded-2xl bg-white p-3 transition hover:-translate-y-0.5 hover:shadow-md"
                  key={location.id}
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
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
