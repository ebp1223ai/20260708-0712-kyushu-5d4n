import type { Location, SpotGuide } from './types';

type Props = {
  locations: Location[];
  guides: SpotGuide[];
};

const sections: { key: keyof SpotGuide; label: string; icon: string }[] = [
  { key: 'mustPhoto', label: '必拍', icon: '📸' },
  { key: 'mustVideo', label: '必錄', icon: '🎥' },
  { key: 'mustEat', label: '必吃', icon: '🍜' },
  { key: 'mustBuy', label: '必買', icon: '🛍️' },
  { key: 'mustDo', label: '必做', icon: '🎯' },
  { key: 'familyTips', label: '親子', icon: '👨‍👩‍👧‍👦' },
  { key: 'photoTips', label: '攝影攻略', icon: '📷' },
  { key: 'checklist', label: 'Checklist', icon: '✅' },
];

function listValues(value: SpotGuide[keyof SpotGuide]) {
  return Array.isArray(value) ? value : [];
}

export function SpotGuides({ locations, guides }: Props) {
  const locationMap = new Map(locations.map((location) => [location.id, location]));

  return (
    <section className="spot-guides mt-8 rounded-3xl bg-white p-5 shadow-xl shadow-slate-200/70">
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl font-black text-slate-900">景點攻略</h2>
          <p className="text-sm text-slate-500">每個景點的拍照、錄影、親子與 checklist 建議。</p>
        </div>
        <p className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-600">
          {guides.length} 份攻略
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {guides.map((guide) => {
          const location = locationMap.get(guide.locationId);
          if (!location) return null;

          return (
            <details
              key={guide.locationId}
              className="spot-guide-card rounded-2xl border border-slate-100 bg-slate-50 p-4 open:bg-white open:shadow-md open:shadow-slate-200/60"
            >
              <summary className="cursor-pointer list-none">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-sm font-black text-white">
                    {location.id}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-black text-slate-900">{location.name}</span>
                    <span className="mt-1 block text-sm leading-6 text-slate-500">{guide.summary}</span>
                    <span className="mt-3 flex flex-wrap gap-2 text-xs font-bold">
                      <span className="rounded-full bg-white px-3 py-1 text-amber-700">
                        推薦 {guide.recommendationLevel}/5
                      </span>
                      <span className="rounded-full bg-white px-3 py-1 text-blue-700">
                        停留 {guide.suggestedStayMinutes} 分
                      </span>
                      <span className="rounded-full bg-white px-3 py-1 text-emerald-700">
                        拍照 {guide.bestPhotoTime}
                      </span>
                    </span>
                  </span>
                </div>
              </summary>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {sections.map((section) => {
                  const values = listValues(guide[section.key]);
                  if (values.length === 0) return null;

                  return (
                    <div key={section.key} className="rounded-xl bg-slate-50 p-3">
                      <h3 className="text-sm font-black text-slate-900">
                        <span aria-hidden="true">{section.icon}</span> {section.label}
                      </h3>
                      <ul className="mt-2 space-y-1 text-sm leading-6 text-slate-600">
                        {values.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  );
                })}

                {guide.tips.length > 0 ? (
                  <div className="rounded-xl bg-blue-50 p-3 md:col-span-2">
                    <h3 className="text-sm font-black text-slate-900">小提醒</h3>
                    <ul className="mt-2 space-y-1 text-sm leading-6 text-slate-600">
                      {guide.tips.map((tip) => (
                        <li key={tip}>• {tip}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </details>
          );
        })}
      </div>
    </section>
  );
}
