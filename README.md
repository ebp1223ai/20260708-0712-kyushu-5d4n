# 20260708-0712 Kyushu 5D4N

2026/07/08–07/12 九州五天四夜互動旅遊網站。

## v1.0 功能

- 首頁 Hero
- 旅程儀表板
- 18 個點位
- Day 1～Day 5 每日行程
- 互動式 OpenStreetMap 地圖
- 移動軌跡
- 每段交通時間
- Google Maps 景點與導航連結
- 手機 RWD
- PWA manifest，可加入手機主畫面

## 本機開發

```bash
npm install
npm run dev
```

開啟：

```text
http://localhost:3000
```

## 部署到 Vercel

1. 將整個專案上傳到 GitHub Repository。
2. 到 Vercel 新增 Project。
3. 選擇這個 Repository。
4. Framework Preset 選 Next.js。
5. 按 Deploy。

## 資料位置

- `data/locations.json`：景點、飯店、機場位置
- `data/routes.json`：每段移動時間與交通工具
- `data/days.json`：每日行程摘要
