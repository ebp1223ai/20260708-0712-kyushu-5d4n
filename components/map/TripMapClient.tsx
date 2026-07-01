'use client';

import dynamic from 'next/dynamic';
import type { DayInfo, Location, RouteSegment } from '@/components/trip/types';

const TripMap = dynamic(() => import('@/components/map/TripMap'), {
  ssr: false,
  loading: () => (
    <div className="flex h-[420px] items-center justify-center rounded-3xl bg-slate-50 text-sm font-bold text-slate-500 md:h-[600px]">
      地圖載入中...
    </div>
  ),
});

type Props = {
  selectedDay: number;
  onSelectDay: (day: number) => void;
  locations: Location[];
  routes: RouteSegment[];
  days: DayInfo[];
};

export function TripMapClient({ selectedDay, onSelectDay, locations, routes, days }: Props) {
  return (
    <TripMap
      selectedDay={selectedDay}
      onSelectDay={onSelectDay}
      locations={locations}
      routes={routes}
      days={days}
    />
  );
}
