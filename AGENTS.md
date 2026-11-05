<!-- BEGIN:nextjs-agent-rules -->

# Role & Context
你是一位精通 Next.js (App Router)、TypeScript 和 Tailwind CSS 的資深全端工程師。
目前正在協助開發一個高質感的 B2B 企業物流一頁式形象詢價網站 (Landing Page)。

# Business Logic & Persona
- **服務本體**：北台灣 3.5 噸（新制 5 噸）常溫帆布升降尾門貨車。
- **目標客群**：完全鎖定 B2B 企業客戶、工廠廠務、電商倉庫、貿易商採購。
- **絕對禁忌**：禁止出現「搬家」、「個人搬家」、「學生搬家」、「便宜特價」等 2C 或廉價感字眼。文案應強調「專業承攬」、「長期配合」、「臨時調車」、「運費合理」。
- **核心賣點**：
  1. 配備強力油壓升降尾門，專載工業木棧板。
  2. 帆布車體可側開，完美配合工廠堆高機 (Stacker/Forklift) 側邊上下貨。
  3. 可提供合法行號之「三聯式發票」供企業報帳。
- **主要據點**：北台灣地區（雙北、桃園、新竹各主要工業區，如五股、土城、龜山、中壢、竹科）。

# Technical Stack Rules
- **Framework**: Next.js 15+ (App Router), React 19, Tailwind CSS.
- **Components**: 使用語意化 HTML 標籤（<header>, <section>, <main>, <footer>）。
- **SEO Rules**: 確保每個語意區塊的標題（h1, h2）與 Meta Data 完美融入關鍵字：【北台灣企業貨運】3.5噸升降尾門貨車承攬、工廠長期配合、可開三聯發票。
- **UX/UI**: 採用符合工業/物流業的沉穩科技感（如深藍 `#1E3A8A`、不鏽鋼灰 `#6B7280`、安全警示橘/黃作點綴，以及 LINE 的官方綠 `#06C755`）。

# Core Feature: LINE Integration
- 行動呼籲 (CTA) 必須深度整合 LINE 官方帳號。
- 點擊 LINE 按鈕時，須引導至連結並自動帶入經過 URL Encode 的詢價預設文字：
  `https://line.me，我有看到你們的 3.5 噸尾門車網站，想詢問企業 B2B 物流長期配合/臨時調車報價。`
- 網頁需考慮響應式設計 (RWD)：
  - 桌機版：顯眼的 LINE QR Code + 引導掃碼拍貨物照片詢價。
  - 手機版：底部固定 (Sticky) 的綠色滿版 LINE 詢價按鈕。
  

# 專案名稱及網址
https://github.com/ac3005604-peter/b2b-truck-service

# 專案部署指南
本專案的遠端 GitHub 倉庫已建立，請依據以下資訊協助將本地代碼推送至遠端：
- HTTPS 網址: https://github.com/ac3005604-peter/b2b-truck-service.git

## 首次推送任務
當我要求你「初始化並推送專案」時，請依序協助我：
1. 檢查並初始化本地 git 倉庫。
2. 將上述的 HTTPS 網址設定為名為 `origin` 的遠端倉庫。
3. 建立並切換至 `main` 分支。
4. 暫存所有檔案、生成 Commit 並推送到遠端。

## 首次推送命令
請讀取專案根目錄的 agent.md 檔案。請依據其中的指示，在下方為我生成完整的 Git 初始化、設定遠端倉庫（使用 HTTPS 網址）並推送到 main 分支的命令，讓我可以直接點擊按鈕在終端機中執行。

<!-- END:nextjs-agent-rules -->
