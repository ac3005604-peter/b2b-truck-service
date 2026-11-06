import Image from "next/image";
import QRCode from "qrcode";

const message = "你好，我有看到你們的 3.5 噸尾門車網站，想詢問企業 B2B 物流長期配合/臨時調車報價。";
const account = process.env.NEXT_PUBLIC_LINE_OFFICIAL_ACCOUNT_ID?.trim().replace(/^@/, "");
const lineUrl = account ? `https://line.me/R/oaMessage/${encodeURIComponent(`@${account}`)}/?${encodeURIComponent(message)}` : "#inquiry";
const services = [
  { n: "01", title: "工廠長期配合", text: "固定出貨、廠區往返、企業據點配送。依出貨頻率與收送條件，討論適合的承攬安排。", tag: "REGULAR DELIVERY", icon: "▥" },
  { n: "02", title: "企業臨時調車", text: "臨時增加的訂單、需要調整的配送。提供收送地址與希望時段，協助確認車趟可行性。", tag: "ON-DEMAND TRANSPORT", icon: "↗" },
  { n: "03", title: "工業棧板運送", text: "從工廠到倉庫，配合升降尾門與側邊裝卸，依貨物尺寸、重量及現場條件評估運送。", tag: "PALLET TRANSPORT", icon: "▤" },
];
const faqs = [
  ["詢價需要提供哪些資料？", "請提供貨物照片、品項、件數或棧板數、尺寸與重量、收送地址、希望日期與時段，以及兩端是否有堆高機、卸貨碼頭或進場限制。資料越完整，越方便確認報價。"],
  ["沒有卸貨碼頭，也可以安排嗎？", "車輛配備油壓升降尾門，可協助棧板裝卸。仍需先確認貨物重量、尺寸、地面狀況及現場作業空間；是否適用須經個別評估。"],
  ["可以開立三聯式發票嗎？", "可以。詢價時請一併告知公司抬頭、統一編號及發票需求，方便確認企業報帳資料。"],
  ["3.5 噸代表可以裝載 3.5 噸貨物嗎？", "不是。3.5 噸（新制 5 噸）為車型稱呼，並非貨物可載重量。實際承載須依車籍核定、車體配備與貨物條件確認，請先提供重量及尺寸評估。"],
];
function Truck() {
  return <svg viewBox="0 0 720 430" role="img" aria-label="帆布側開與升降尾門貨車示意，實際配備依調度確認" className="truck-art">
    <defs><linearGradient id="canvas" x2="0" y2="1"><stop stopColor="#527487"/><stop offset="1" stopColor="#233f50"/></linearGradient><linearGradient id="cab" x2="1" y2="1"><stop stopColor="#fff"/><stop offset="1" stopColor="#9cafb9"/></linearGradient><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fff" strokeOpacity=".05"/></pattern></defs>
    <rect width="720" height="430" fill="url(#grid)"/><ellipse cx="370" cy="348" rx="285" ry="24" fill="#020b12" opacity=".4"/>
    <path d="M85 134 405 91 526 148 214 194Z" fill="#75909c"/><path d="M85 134 214 194 214 309 85 249Z" fill="#243e4c"/><path d="M214 194 526 148 526 270 214 314Z" fill="url(#canvas)"/>
    {[250,300,350,400,450,500].map(x=><path key={x} d={`M${x} ${190-(x-214)*.147} v116`} stroke="#9cb0b7" strokeOpacity=".45" strokeWidth="2"/>)}
    <path d="m214 300 312-45v20l-312 45Z" fill="#b7c5ca"/><path d="m95 254 119 57 319-45 76 32-342 53-172-79Z" fill="#637682"/>
    <path d="m526 191 57-9 55 52 10 67-109 16-13-28Z" fill="url(#cab)"/><path d="m581 194 43 41-80 11-3-46Z" fill="#122d3d"/><path d="m591 201 31 32-29 4Z" fill="#6f9cab"/><path d="m546 254 85-12 3 40-88 13Z" fill="#e2e9e9"/><path d="m552 261 15-2" stroke="#344e5d" strokeWidth="4"/><path d="m619 282 24-4 2 11-24 4Z" fill="#f7ae43"/>
    <path d="m82 269 130 60-67 20-105-51Z" fill="#92a6b1"/><path d="m47 299 98 46" stroke="#f4a83b" strokeWidth="5"/>
    {[ [254,328],[577,313] ].map(([x,y])=><g key={x}><ellipse cx={x} cy={y} rx="29" ry="35" fill="#081722"/><ellipse cx={x+3} cy={y-1} rx="17" ry="23" fill="#8da2ae"/><ellipse cx={x+4} cy={y-1} rx="8" ry="13" fill="#354d5b"/></g>)}
    <path d="M121 164 121 96H53M409 149V60h128M84 310 57 367h112" fill="none" stroke="#edaa4b" strokeWidth="1.5" strokeDasharray="4 4"/>
    <g fill="#dbe7ed" fontSize="13" fontFamily="sans-serif"><text x="28" y="82">油壓升降尾門</text><text x="425" y="48">帆布車體・側邊裝卸</text><text x="37" y="393">工業木棧板作業</text></g>
  </svg>;
}
export default async function Home() {
  const qr = account ? await QRCode.toDataURL(lineUrl, { width: 220, margin: 2, color: { dark: "#102d40", light: "#ffffff" } }) : null;
  return <>
    <a href="#main" className="skip-link">跳至主要內容</a>
    <div className="topbar"><div className="container">北台灣企業貨運專業承攬<span>工廠・倉庫・企業據點配送</span></div></div>
    <header className="header"><div className="container header-inner"><a href="#home" aria-label="倚恩貨運首頁" className="brand"><Image src="/logo.png" alt="倚恩貨運" width={176} height={56} priority/><span>B2B TRANSPORT SERVICE</span></a><nav aria-label="主要導覽"><a href="#services">運輸服務</a><a href="#vehicle">車輛配備</a><a href="#area">服務區域</a><a href="#faq">常見問題</a></nav><a className="button button-line nav-cta" href={lineUrl}>LINE 詢價 <span>↗</span></a></div></header>
    <main id="main">
      <section className="hero" id="home"><div className="container hero-grid"><div className="hero-copy"><p className="eyebrow"><span/> NORTH TAIWAN · B2B LOGISTICS</p><h1>企業的每一趟出貨，<br/>我們<span>認真承接。</span></h1><p className="hero-description">北台灣企業貨運，專注工廠與倉庫配送。<br/>3.5 噸升降尾門貨車承攬，讓棧板裝卸、<br className="desktop-break"/>長期配合與臨時調車，都有合適的安排。</p><div className="hero-actions"><a className="button button-line" href={lineUrl}>LINE 洽詢運送報價 <span>↗</span></a><a className="text-link" href="#vehicle">了解車輛配備 <span>↓</span></a></div><p className="hero-note">✓ 企業專業承攬　 ✓ 可開三聯式發票</p></div><div className="hero-visual"><div className="visual-top"><span>YOUR BUSINESS. OUR NEXT STOP.</span><span className="status-dot">常溫貨運</span></div><Truck/><div className="visual-bottom"><div><strong>3.5<span>噸</span></strong><p>新制 5 噸車型</p></div><div className="visual-spec">升降尾門 × 帆布側開<br/><span>為工業棧板配送而準備</span></div></div><p className="illustration-note">車輛示意圖，非實車照片；實際載重與配備依車籍及調度確認。</p></div></div></section>
      <div className="proof-strip"><div className="container proof-grid">{[["01","升降尾門","配合棧板上下貨"],["02","帆布側開","銜接堆高機裝卸"],["03","北台灣配送","雙北・桃園・新竹"],["04","三聯式發票","滿足企業報帳需求"]].map(([n,t,d])=><div key={n}><span>{n}</span><div><strong>{t}</strong><p>{d}</p></div></div>)}</div></div>
      <section id="services" className="section container"><div className="section-heading"><div><p className="eyebrow">01 / TRANSPORT SOLUTIONS</p><h2>配合你的出貨節奏，<br/>安排適合的運輸服務。</h2></div><p>從固定往返到臨時需求，<br/>先了解貨物與現場，再確認承攬方式。</p></div><div className="service-grid">{services.map(s=><article className="service-card" key={s.n}><div className="service-top"><span className="service-icon" aria-hidden="true">{s.icon}</span><span>{s.n}</span></div><p className="micro-label">{s.tag}</p><h3>{s.title}</h3><p>{s.text}</p><a href="#inquiry">洽詢服務 <span>↗</span></a></article>)}</div></section>
      <section id="vehicle" className="vehicle-section"><div className="container vehicle-grid"><div><p className="eyebrow">02 / BUILT FOR THE JOB</p><h2>裝得上，卸得下。<br/>讓現場作業更順暢。</h2><p className="section-intro">工業物流的關鍵，在裝卸現場。<br/>以適合的車體配備，銜接你的出貨動線。</p><a href="#inquiry" className="text-link">傳送貨物照片，確認裝卸需求 <span>↗</span></a></div><div className="equipment-list">{[["01","油壓升降尾門","配合工業木棧板裝卸，依貨物重量與作業環境，確認尾門使用條件。"],["02","可側開帆布車體","方便堆高機從側邊上下貨，讓工廠、倉庫既有的作業方式順暢銜接。"],["03","常溫企業配送","服務一般常溫貨物；請事先提供品項、尺寸、重量與特殊運送限制。"]].map(([n,t,d])=><article key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><span aria-hidden="true">↗</span></article>)}<p className="equipment-note">車型噸數不等同可載貨重，實際承載依車籍核定與貨物條件確認。</p></div></div></section>
      <section className="section container area-grid" id="area"><div><p className="eyebrow">03 / OUR SERVICE AREA</p><h2>串起北台灣，<br/>工廠到倉庫的每一站。</h2><p className="section-intro">以雙北、桃園、新竹為主要服務範圍，<br/>配合企業據點與主要工業區配送需求。</p><p className="area-note">跨區路線、進場規範與可安排時段，歡迎先行洽詢。</p></div><div className="route-panel"><div className="route-heading"><span>NORTH TAIWAN NETWORK</span><span>北台灣運輸服務</span></div>{[["01","雙北地區","五股・土城・企業與倉儲據點"],["02","桃園地區","龜山・中壢・主要工業區"],["03","新竹地區","新竹科學園區與周邊企業"]].map(([n,t,d])=><div className="route-stop" key={n}><span className="route-node"/><span className="route-num">{n}</span><div><h3>{t}</h3><p>{d}</p></div><span className="route-arrow" aria-hidden="true">↗</span></div>)}</div></section>
      <section className="process-section"><div className="container"><div className="section-heading"><div><p className="eyebrow">04 / HOW IT WORKS</p><h2>把需求說清楚，<br/>讓詢價更有效率。</h2></div><a href={lineUrl} className="text-link">開始 LINE 詢價 <span>↗</span></a></div><div className="process-grid">{[["01","拍下貨物","提供貨物照片、尺寸、重量與棧板數量。"],["02","告知收送條件","提供收送地址、日期、時段及現場裝卸設備。"],["03","確認報價與車趟","確認運費、承攬條件與可安排時段後，再安排運送。"]].map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>
      <section id="faq" className="section container faq-grid"><div><p className="eyebrow">05 / GOOD TO KNOW</p><h2>詢價之前，<br/>你可能想知道。</h2></div><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<span aria-hidden="true">＋</span></summary><p>{a}</p></details>)}</div></section>
      <section id="inquiry" className="inquiry-section"><div className="container inquiry-grid"><div><p className="eyebrow">LET’S KEEP YOUR BUSINESS MOVING</p><h2>下一趟出貨，<br/>從聊聊需求開始。</h2><p>拍下貨物照片，傳送收送地址與希望時段。<br/>長期配合或臨時調車，都歡迎洽詢。</p>{account ? <a className="button button-line" href={lineUrl}>加入 LINE，洽詢企業貨運 <span>↗</span></a> : <div className="setup-notice"><strong>LINE 詢價即將開放</strong><span>目前尚未設定官方帳號，暫時無法送出詢價。</span></div>}<p className="invoice-note">可開立三聯式發票・請於詢價時提供公司抬頭與統編</p></div><aside className="qr-panel">{qr ? <><Image src={qr} alt="掃描加入倚恩貨運 LINE 官方帳號並開啟詢價" width={180} height={180} unoptimized/><strong>掃一下，直接聊需求</strong><p>開啟手機 LINE 掃碼<br/>傳送貨物照片，方便評估報價</p></> : <><span className="contact-symbol" aria-hidden="true">↗</span><strong>詢價前，準備這些資料</strong><ul><li>貨物照片、尺寸與重量</li><li>收送地址與希望時段</li><li>現場設備與發票需求</li></ul></>}</aside></div></section>
    </main><footer><div className="container footer-inner"><div><strong>倚恩貨運</strong><p>北台灣企業物流・專業承攬</p><p>修德運輸有限公司｜統編 36019593</p></div><p>雙北・桃園・新竹<br/>3.5 噸升降尾門貨車｜常溫帆布車</p><a href="#home">回到頂端 ↑</a></div></footer><div className="mobile-cta"><a className="button button-line" href={lineUrl}>LINE 洽詢企業貨運 <span>↗</span></a></div>
  </>;
}
