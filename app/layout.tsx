import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '九州五天四夜｜20260708-0712',
  description: '2026/07/08–07/12 九州五天四夜旅遊網站',
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: '#10233f',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
