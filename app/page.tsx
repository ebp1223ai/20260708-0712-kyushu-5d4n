import locations from '@/data/locations.json';
import routes from '@/data/routes.json';
import days from '@/data/days.json';
import Link from 'next/link';
import { Hero } from '@/components/layout/Hero';
import { SummaryCards } from '@/components/trip/SummaryCards';
import { TripDashboard } from '@/components/trip/TripDashboard';
import { TripExperience } from '@/components/trip/TripExperience';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-trip-sky via-white to-slate-50">
      <Hero />
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <SummaryCards locations={locations} routes={routes} />
        <TripDashboard locations={locations} routes={routes} days={days} />
        <TripExperience locations={locations} routes={routes} days={days} />
        <section className="mt-8 rounded-3xl bg-white p-5 text-center shadow-xl shadow-slate-200/70">
          <h2 className="text-xl font-black text-slate-900">景點攻略</h2>
          <p className="mt-2 text-sm text-slate-500">查看 21 個景點的必拍、必錄、必吃、親子與 checklist。</p>
          <Link
            href="/guide"
            className="mt-4 inline-flex rounded-full bg-trip-navy px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            查看景點攻略
          </Link>
        </section>
        <footer className="mt-8 pb-4 text-center text-xs font-bold text-slate-400">
          2026 九州五天四夜行程
        </footer>
      </section>
    </main>
  );
}
