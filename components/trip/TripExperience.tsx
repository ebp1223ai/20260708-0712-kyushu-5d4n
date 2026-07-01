'use client';

import { useState } from 'react';
import { DailyPlan } from '@/components/trip/DailyPlan';
import { TripMapClient } from '@/components/map/TripMapClient';
import type { DayInfo, Location, RouteSegment } from './types';

type Props = {
  locations: Location[];
  routes: RouteSegment[];
  days: DayInfo[];
};

export function TripExperience({ locations, routes, days }: Props) {
  const [selectedDay, setSelectedDay] = useState(1);

  return (
    <>
      <section className="mt-6 rounded-3xl bg-white p-3 shadow-xl shadow-slate-200/70">
        <TripMapClient
          selectedDay={selectedDay}
          onSelectDay={setSelectedDay}
          locations={locations}
          routes={routes}
          days={days}
        />
      </section>
      <DailyPlan
        selectedDay={selectedDay}
        onSelectDay={setSelectedDay}
        locations={locations}
        routes={routes}
        days={days}
      />
    </>
  );
}
