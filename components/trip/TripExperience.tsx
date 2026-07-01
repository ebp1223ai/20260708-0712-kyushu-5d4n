'use client';

import { useState } from 'react';
import { DailyPlan } from '@/components/trip/DailyPlan';
import { TripMapClient } from '@/components/map/TripMapClient';
import type { DayInfo, Location, RouteSegment } from './types';
import type { DaySelectionMode, EdgeVisibility } from '@/lib/tripPlan';
import { dayRange } from '@/lib/tripPlan';

type Props = {
  locations: Location[];
  routes: RouteSegment[];
  days: DayInfo[];
};

export function TripExperience({ locations, routes, days }: Props) {
  const [selectedDays, setSelectedDays] = useState([1]);
  const [selectionMode, setSelectionMode] = useState<DaySelectionMode>('single');
  const [rangeAnchor, setRangeAnchor] = useState(1);
  const [rangePending, setRangePending] = useState(false);
  const [edgeVisibility, setEdgeVisibility] = useState<EdgeVisibility>('all');

  const handleSelectDay = (day: number) => {
    if (selectionMode === 'single') {
      setSelectedDays([day]);
      setRangeAnchor(day);
      setRangePending(false);
      return;
    }

    if (rangePending) {
      setRangeAnchor(day);
      setSelectedDays([day]);
      setRangePending(false);
      return;
    }

    setSelectedDays(dayRange(rangeAnchor, day));
  };

  const handleModeChange = (mode: DaySelectionMode) => {
    setSelectionMode(mode);
    const anchor = selectedDays[0] ?? 1;
    setRangeAnchor(anchor);
    setSelectedDays([anchor]);
    setRangePending(mode === 'range');
  };

  return (
    <>
      <section className="mt-6 rounded-3xl bg-white p-3 shadow-xl shadow-slate-200/70">
        <TripMapClient
          selectedDays={selectedDays}
          selectionMode={selectionMode}
          edgeVisibility={edgeVisibility}
          onSelectDay={handleSelectDay}
          onSelectionModeChange={handleModeChange}
          onEdgeVisibilityChange={setEdgeVisibility}
          locations={locations}
          routes={routes}
          days={days}
        />
      </section>
      <DailyPlan
        selectedDays={selectedDays}
        selectionMode={selectionMode}
        edgeVisibility={edgeVisibility}
        onSelectDay={handleSelectDay}
        onSelectionModeChange={handleModeChange}
        onEdgeVisibilityChange={setEdgeVisibility}
        locations={locations}
        routes={routes}
        days={days}
      />
    </>
  );
}
