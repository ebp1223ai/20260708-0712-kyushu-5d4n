'use client';

import { useMemo, useState } from 'react';
import type { Location, RouteSegment } from './types';
import { googleMapsPlaceUrl } from '@/lib/maps';

type Props = {
  locations: Location[];
  routes: RouteSegment[];
};

export function DaySelector({ locations }: Props) {
  const [selectedDay, setSelectedDay] = useState<number | 'all'>('all');

  const days = useMemo(() => {
    return Array.from(new Set(locations.map((location) => location.day))).sort();
  }, [locations]);

  const filtered = selectedDay === 'all'
    ? locations
    : locations.filter((location) => location.day === selectedDay);

  return (
    <section className="mt-8 rounded-3xl bg-white p-5 shadow-xl shadow-slate-200/70">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold">每日行程</h2>
          <p className="text-sm text-slate-500">切換日期查看點位；點擊可開 Google Maps。</p>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1">
          <button
            type="button"
            onClick={() => setSelectedDay('all')}
            className={`rounded-full px-4 py-2 text-sm font-bold ${selectedDay === 'all' ? 'bg-kyushu-navy text-white' : 'bg-slate-100 text-slate-700'}`}
          >
            全部
          </button>
          {days.map((day) => (
            <button
              key={day}
              type="button"
              onClick={() => setSelectedDay(day)}
              className={`rounded-full px-4 py-2 text-sm font-bold ${selectedDay === day ? 'bg-kyushu-navy text-white' : 'bg-slate-100 text-slate-700'}`}
            >
              Day {day}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((location) => (
          <a
            key={location.id}
            href={googleMapsPlaceUrl(location)}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-slate-100 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-lg"
          >
            <div className="flex gap-3">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl font-black text-white"
                style={{ backgroundColor: location.color }}
              >
                {location.id}
              </div>
              <div>
                <p className="font-bold text-slate-900 group-hover:text-blue-700">{location.name}</p>
                <p className="mt-1 text-sm text-slate-500">{location.date} · {location.address}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
