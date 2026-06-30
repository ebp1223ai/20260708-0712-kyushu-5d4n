export function SummaryCards() {
  const items = [
    ['總點位', '18', 'Index 1 → 18'],
    ['旅遊天數', '5', '7/8～7/12'],
    ['交通估算', '13h40m', '不含停留與塞車'],
    ['主要交通', '✈️ 🚌 🚶', '飛機 / 遊覽車 / 步行'],
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
