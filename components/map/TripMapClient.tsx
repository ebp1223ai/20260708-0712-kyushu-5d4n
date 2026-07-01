'use client';

import dynamic from 'next/dynamic';
import type { DayInfo, Location, RouteSegment } from '@/components/trip/types';
import type { DaySelectionMode, EdgeVisibility } from '@/lib/tripPlan';

const TripMap = dynamic(() => import('@/components/map/TripMap'), {
  ssr: false,
  loading: () => (
    <div className="flex h-[420px] items-center justify-center rounded-3xl bg-slate-50 text-sm font-bold text-slate-500 md:h-[600px]">
      地圖載入中...
    </div>
  ),
});

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

export function TripMapClient(props: Props) {
  return <TripMap {...props} />;
}
