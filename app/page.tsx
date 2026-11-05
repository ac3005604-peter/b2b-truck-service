import Image from "next/image";

const inquiryMessage =
  "你好，我有看到你們的 3.5 噸尾門車網站，想詢問企業 B2B 物流長期配合/臨時調車報價。";
const lineOfficialAccountId = process.env.NEXT_PUBLIC_LINE_OFFICIAL_ACCOUNT_ID;
const lineInquiryUrl = lineOfficialAccountId
  ? `https://line.me/R/oaMessage/${encodeURIComponent(`@${lineOfficialAccountId.replace(/^@/, "")}`)}/?${new URLSearchParams({ text: inquiryMessage })}`
  : "https://line.me/";

const navigationLinks = [
  { label: "車體規格", href: "#vehicle-specs" },
  { label: "服務區域", href: "#service-area" },
  { label: "開立發票", href: "#invoice" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f1] text-[#12243a]">
      <header className="relative z-10 border-b border-[#12243a]/10 bg-[#fbfbf8]">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#home" aria-label="倚恩貨運首頁" className="shrink-0">
            <Image
              src="/logo.png"
              alt="倚恩貨運"
              width={176}
              height={56}
              priority
              className="h-12 w-[150px] object-contain object-left sm:w-[176px]"
            />
          </a>

          <nav aria-label="主要導覽" className="hidden items-center gap-8 md:flex">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-[#12243a]/75 transition-colors hover:text-[#a47b35]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={lineInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-sm bg-[#06c755] px-5 text-sm font-bold text-white transition-colors hover:bg-[#05b64d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#06c755]"
            >
              LINE 線上詢價 <span aria-hidden="true">↗</span>
            </a>
          </nav>

          <a
            href={lineInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center gap-1.5 rounded-sm bg-[#06c755] px-3 text-xs font-bold text-white md:hidden"
          >
            LINE 詢價 <span aria-hidden="true">↗</span>
          </a>
        </div>
        <nav
          aria-label="手機版導覽"
          className="flex gap-7 overflow-x-auto border-t border-[#12243a]/[0.07] px-5 py-3 md:hidden sm:px-8"
        >
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 text-xs font-semibold text-[#12243a]/70"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="pb-20 md:pb-0">
        <section
          id="home"
          className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-12 lg:pb-24 lg:pt-24"
        >
          <div className="max-w-2xl">
            <p className="mb-6 flex items-center gap-3 text-xs font-bold tracking-[0.12em] text-[#8e6d32]">
              <span className="h-px w-9 bg-[#b38a43]" />
              倚恩貨運　/　北台灣企業物流
            </p>
            <h1 className="text-[2.55rem] font-semibold leading-[1.2] text-[#10243b] sm:text-5xl lg:text-[3.65rem]">
              棧板貨運與臨時調車，
              <span className="mt-2 block text-[#8e6d32]">交給熟悉現場的團隊。</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#536170] sm:text-lg">
              北台灣企業貨運，提供 3.5 噸升降尾門貨車承攬。從工廠長期配合到臨時調車，讓棧板裝卸與配送安排更有效率。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={lineInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-sm bg-[#06c755] px-7 text-sm font-bold text-white transition-colors hover:bg-[#05b64d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#06c755]"
              >
                LINE 線上詢問承攬需求 <span aria-hidden="true">↗</span>
              </a>
              <a
                href="#vehicle-specs"
                className="inline-flex min-h-14 items-center justify-center gap-3 border border-[#12243a]/25 px-7 text-sm font-bold text-[#12243a] transition-colors hover:border-[#8e6d32] hover:text-[#8e6d32]"
              >
                了解車體與服務 <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-[#536170]">
              <span>✓ 工業木棧板配送</span>
              <span>✓ 工廠長期配合</span>
              <span>✓ 可開立三聯式發票</span>
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden bg-[#10243b] p-7 text-white sm:min-h-[420px] sm:p-10">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.14) 1px, transparent 1px)",
                backgroundSize: "36px 36px",
              }}
            />
            <div className="relative flex h-full min-h-[304px] flex-col justify-between sm:min-h-[340px]">
              <div className="flex items-start justify-between gap-4 border-b border-white/20 pb-5">
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.2em] text-[#d3b16c]">
                    FLEET SERVICE / NORTH TAIWAN
                  </p>
                  <p className="mt-2 text-sm text-white/75">企業配送車型</p>
                </div>
                <span className="border border-[#d3b16c]/60 px-2.5 py-1 text-[10px] font-bold tracking-wider text-[#e2c481]">
                  B2B LOGISTICS
                </span>
              </div>
              <div className="py-8">
                <p className="font-mono text-[5rem] font-medium leading-none tracking-[-0.06em] text-white sm:text-[6.5rem]">
                  3.5<span className="ml-2 text-3xl text-[#d3b16c] sm:text-4xl">T</span>
                </p>
                <p className="mt-3 text-sm font-medium tracking-wide text-white/70">
                  升降尾門帆布貨車承攬
                </p>
                <div className="mt-8 h-px w-full bg-white/20">
                  <div className="h-px w-2/3 bg-[#d3b16c]" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5 border-t border-white/20 pt-5">
                <div>
                  <p className="text-[10px] tracking-wider text-white/50">LOAD & UNLOAD</p>
                  <p className="mt-1.5 text-sm font-semibold">油壓升降尾門</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-wider text-white/50">SIDE ACCESS</p>
                  <p className="mt-1.5 text-sm font-semibold">帆布車體側開</p>
                </div>
              </div>
            </div>
            <span
              aria-hidden="true"
              className="absolute -bottom-12 -right-5 font-mono text-[11rem] font-bold leading-none text-white/[0.035]"
            >
              YN
            </span>
          </div>
        </section>

        <section
          aria-label="服務重點"
          className="border-y border-[#12243a]/10 bg-[#fbfbf8]"
        >
          <div className="mx-auto grid max-w-7xl divide-y divide-[#12243a]/10 px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-12">
            <div id="vehicle-specs" className="py-6 md:px-7 md:first:pl-0">
              <p className="text-[10px] font-bold tracking-[0.16em] text-[#8e6d32]">VEHICLE</p>
              <h2 className="mt-2 text-sm font-bold">升降尾門・帆布側開</h2>
              <p className="mt-1 text-xs leading-5 text-[#536170]">協助棧板裝卸，配合堆高機作業動線。</p>
            </div>
            <div id="service-area" className="py-6 md:px-7">
              <p className="text-[10px] font-bold tracking-[0.16em] text-[#8e6d32]">SERVICE AREA</p>
              <h2 className="mt-2 text-sm font-bold">雙北・桃園・新竹</h2>
              <p className="mt-1 text-xs leading-5 text-[#536170]">服務北台灣主要工業區與企業據點。</p>
            </div>
            <div id="invoice" className="py-6 md:px-7 md:pr-0">
              <p className="text-[10px] font-bold tracking-[0.16em] text-[#8e6d32]">INVOICE</p>
              <h2 className="mt-2 text-sm font-bold">企業報帳所需發票</h2>
              <p className="mt-1 text-xs leading-5 text-[#536170]">修德運輸有限公司・統編 36019593</p>
            </div>
          </div>
        </section>
      </main>
      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-[#12243a]/10 bg-[#fbfbf8] p-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] md:hidden">
        <a
          href={lineInquiryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 w-full items-center justify-center gap-2 rounded-sm bg-[#06c755] px-5 text-sm font-bold text-white"
        >
          LINE 線上詢價 <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  );
}
