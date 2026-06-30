import type { Location } from './types';

type Props = {
  locations: Location[];
};

export function SummaryCards({ locations }: Props) {
  const indexes = locations.map((location) => location.id);
  const firstIndex = Math.min(...indexes);
  const lastIndex = Math.max(...indexes);
  const items = [
    ['景點與交通點', String(locations.length), `Index ${firstIndex} 到 ${lastIndex}`],
    ['旅遊天數', '5', '7/8 到 7/12'],
    ['預估移動時間', '13h40m', '含飛機、公車與步行'],
    ['交通方式', '飛機 / 巴士 / 步行', '串接 Google Maps 導航'],
  ];

  return (
    <div className="-mt-10 grid gap-4 md:grid-cols-4">
      {items.map(([label, value, note]) => (
        <div className="glass-card" key={label}>
          <p className="text-sm text-slate-500">{label}</p>
          <p className="mt-1 text-3xl font-black text-trip-navy">{value}</p>
          <p className="mt-1 text-sm text-slate-500">{note}</p>
        </div>
      ))}
    </div>
  );
}
