import Link from 'next/link';
import locations from '@/data/locations.json';
import spotGuides from '@/data/spotGuides.json';
import { SpotGuides } from '@/components/trip/SpotGuides';

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-trip-sky via-white to-slate-50">
      <section className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-6 flex flex-col gap-4 rounded-3xl bg-white p-5 shadow-xl shadow-slate-200/70 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold text-blue-700">Travel Guide</p>
            <h1 className="mt-1 text-3xl font-black text-trip-navy">九州景點攻略</h1>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              21 個景點的必拍、必錄、必吃、必買、必做、親子攻略、攝影攻略與 checklist。
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex rounded-full bg-slate-100 px-5 py-3 text-sm font-black text-slate-700 transition hover:bg-slate-200"
          >
            返回行程地圖
          </Link>
        </div>

        <SpotGuides locations={locations} guides={spotGuides} />
      </section>
    </main>
  );
}
