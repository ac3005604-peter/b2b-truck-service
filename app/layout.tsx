import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "倚恩貨運｜北台灣企業貨運・3.5噸升降尾門貨車承攬",
  description: "倚恩貨運提供雙北、桃園、新竹企業貨運服務。3.5噸（新制5噸）常溫帆布升降尾門貨車，配合工業棧板配送、工廠長期配合與臨時調車，可開三聯發票。透過 LINE 洽詢運送需求。",
  openGraph: { title: "倚恩貨運｜北台灣企業物流", description: "工廠長期配合、臨時調車、工業棧板運送。升降尾門 × 帆布側開，可開三聯發票。", locale: "zh_TW", type: "website" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant-TW"><body>{children}</body></html>;
}
