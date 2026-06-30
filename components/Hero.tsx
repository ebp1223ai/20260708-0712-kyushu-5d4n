export function Hero() {
  return (
    <header className="relative overflow-hidden bg-kyushu-navy text-white">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-[-8rem] top-[-8rem] h-72 w-72 rounded-full bg-sky-400 blur-3xl" />
        <div className="absolute bottom-[-6rem] right-[-6rem] h-72 w-72 rounded-full bg-kyushu-gold blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <p className="mb-3 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-sky-100">
          2026/07/08–07/12
        </p>
        <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
          九州五天四夜
          <span className="block text-sky-200">互動旅遊地圖</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
          整合 18 個點位、每日行程、移動軌跡、交通工具與預估時間。
          手機可直接開啟，也可部署成 PWA 加入主畫面。
        </p>
      </div>
    </header>
  );
}
