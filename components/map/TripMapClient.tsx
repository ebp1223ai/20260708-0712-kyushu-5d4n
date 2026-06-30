'use client';

import dynamic from 'next/dynamic';
import type { Location, RouteSegment } from '@/components/trip/types';

const TripMap = dynamic(() => import('@/components/map/TripMap'), {
  ssr: false,
  loading: () => (
    <div className="flex h-[520px] items-center justify-center rounded-3xl bg-slate-50 text-sm font-bold text-slate-500 md:h-[680px]">
      地圖載入中...
    </div>
  ),
});

type Props = {
  locations: Location[];
  routes: RouteSegment[];
};

export function TripMapClient({ locations, routes }: Props) {
  return <TripMap locations={locations} routes={routes} />;
}
