import dynamic from 'next/dynamic';
import locations from '@/data/locations.json';
import routes from '@/data/routes.json';
import days from '@/data/days.json';
import { Hero } from '@/components/layout/Hero';
import { SummaryCards } from '@/components/trip/SummaryCards';
import { TripDashboard } from '@/components/trip/TripDashboard';
import { DailyPlan } from '@/components/trip/DailyPlan';
import { RouteTimeline } from '@/components/trip/RouteTimeline';

const TripMap = dynamic(() => import('@/components/map/TripMap'), {
  ssr: false,
  loading: () => (
    <div className="flex h-[420px] items-center justify-center rounded-3xl bg-white/80 text-slate-500">
      地圖載入中...
    </div>
  ),
});

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-trip-sky via-white to-slate-50">
      <Hero />
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <SummaryCards />
        <TripDashboard locations={locations} routes={routes} days={days} />
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <section className="rounded-3xl bg-white p-3 shadow-xl shadow-slate-200/70">
            <TripMap locations={locations} routes={routes} />
          </section>
          <section className="rounded-3xl bg-white p-5 shadow-xl shadow-slate-200/70">
            <h2 className="text-xl font-black text-slate-900">每日行程</h2>
            <p className="mt-1 text-sm text-slate-500">點選景點可開啟 Google Maps。</p>
            <DailyPlan locations={locations} days={days} />
          </section>
        </div>
        <section className="mt-6 rounded-3xl bg-white p-5 shadow-xl shadow-slate-200/70">
          <h2 className="text-xl font-black text-slate-900">完整移動順序與交通時間</h2>
          <RouteTimeline locations={locations} routes={routes} />
        </section>
      </section>
    </main>
  );
}
