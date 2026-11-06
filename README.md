# 倚恩貨運企業形象網站

Next.js App Router / React / TypeScript / Tailwind CSS。

## 本地啟動

執行 `npm install`，再執行 `npm run dev`，依終端機顯示的網址預覽。
Windows PowerShell 如限制 npm.ps1，請使用 `npm.cmd run dev`。

## LINE 設定

將 `.env.example` 複製為 `.env.local`，填入真實的 `NEXT_PUBLIC_LINE_OFFICIAL_ACCOUNT_ID`（可含 @）。重新啟動開發伺服器；正式環境設定後需重新建置。

設定後，所有 LINE 入口會連結官方帳號並帶入 URL 編碼的預設詢價文字，桌機詢價區會自動產生 QR Code。未設定時，各入口導向詢價說明區並顯示尚未開放，不會導向不明帳號。

## 驗證

執行 `npm run build` 完成正式建置與 TypeScript 檢查。

## 素材與內容

首頁使用既有 logo 與原創 SVG 車輛示意圖。示意圖不是實車照片；實際載重、配備與承攬條件應由業者確認。網站沒有捏造客戶評價、車隊規模或服務績效數字。

## 同業參考

- https://www.anshunexpress.com.tw/express ：服務能力、車輛配備的資訊層級。
- https://seda0625.com.tw/logistics ：專車、固定配送與車型介紹的清楚分流。

未取得可驗證的同業流量數據，以上為服務相近的參考網站，並非流量排名。
