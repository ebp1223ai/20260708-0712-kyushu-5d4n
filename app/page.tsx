import dynamic from 'next/dynamic';
import locations from '@/data/locations.json';
import routes from '@/data/routes.json';
import { DaySelector } from '@/components/DaySelector';
import { RouteTimeline } from '@/components/RouteTimeline';
import { Hero } from '@/components/Hero';

const TripMap = dynamic(() => import('@/components/TripMap'), {
  ssr: false,
  loading: () => (
    <div className="flex h-[420px] items-center justify-center rounded-3xl bg-white/70 text-slate-500">
      地圖載入中...
    </div>
  ),
});

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-kyushu-sky to-white text-slate-900">
      <Hero />

      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="-mt-10 grid gap-4 md:grid-cols-4">
          <div className="glass-card">
            <p className="stat-label">總點位</p>
            <p className="stat-value">18</p>
            <p className="stat-note">Index 1 → 18</p>
          </div>
          <div className="glass-card">
            <p className="stat-label">旅遊天數</p>
            <p className="stat-value">5</p>
            <p className="stat-note">7/8～7/12</p>
          </div>
          <div className="glass-card">
            <p className="stat-label">交通估算</p>
            <p className="stat-value">13h40m</p>
            <p className="stat-note">不含停留與塞車</p>
          </div>
          <div className="glass-card">
            <p className="stat-label">主要交通</p>
            <p className="stat-value">✈️ 🚌 🚶</p>
            <p className="stat-note">飛機 / 遊覽車 / 步行</p>
          </div>
        </div>

        <DaySelector locations={locations} routes={routes} />

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <section className="rounded-3xl bg-white p-3 shadow-xl shadow-slate-200/70">
            <TripMap locations={locations} routes={routes} />
          </section>

          <section className="rounded-3xl bg-white p-5 shadow-xl shadow-slate-200/70">
            <h2 className="mb-4 text-xl font-bold">完整移動順序</h2>
            <RouteTimeline locations={locations} routes={routes} />
          </section>
        </div>
      </section>
    </main>
  );
}
