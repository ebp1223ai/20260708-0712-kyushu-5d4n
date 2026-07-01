import locations from '@/data/locations.json';
import routes from '@/data/routes.json';
import days from '@/data/days.json';
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
        <footer className="mt-8 pb-4 text-center text-xs font-bold text-slate-400">
          2026 九州五天四夜行程
        </footer>
      </section>
    </main>
  );
}
