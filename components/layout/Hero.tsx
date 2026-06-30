export function Hero() {
  return (
    <header className="relative overflow-hidden bg-trip-navy text-white">
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <p className="mb-3 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-sky-100">
          2026/07/08 - 07/12
        </p>
        <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
          九州五天四夜
          <span className="block text-sky-200">行程地圖與交通規劃</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
          以三份 JSON 資料整合景點、住宿與移動路線，快速掌握每天安排、地圖位置與 Google Maps 導航。
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href="#map" className="btn-primary bg-white text-trip-navy">查看地圖</a>
          <a href="#timeline" className="btn-soft bg-white/10 text-white">查看路線</a>
        </div>
      </div>
    </header>
  );
}
