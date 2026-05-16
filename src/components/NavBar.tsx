"use client";

import { useLang } from "./LangContext";

const NAV = [
  { href: "#thesis", en: "Thesis", zh: "论点" },
  { href: "#table", en: "Table", zh: "元素表" },
  { href: "#equiv", en: "Units", zh: "单位" },
  { href: "#history", en: "History", zh: "历史" },
  { href: "#laws", en: "Laws", zh: "五律" },
  { href: "#build", en: "Build", zh: "建造" },
];

export function NavBar() {
  const { lang, toggle } = useLang();
  return (
    <nav className="fixed top-0 inset-x-0 z-40 px-5 sm:px-8 py-3 backdrop-blur-md bg-ink/55 border-b border-bone/5">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-6">
        <a href="#" className="flex items-center gap-2.5 group">
          <svg width="22" height="22" viewBox="0 0 64 64" className="-mt-px">
            <circle cx="32" cy="32" r="22" fill="none" stroke="#f4ecdc" strokeWidth="1.2" />
            <text x="32" y="42" fontFamily="Georgia,serif" fontSize="32" fontStyle="italic" textAnchor="middle" fill="#f4ecdc">Ω</text>
          </svg>
          <span className="font-display tracking-tight text-bone text-[15px]">OmniFi</span>
          <span className="text-bone/40 text-[11px] hidden sm:inline">/ 万物金融</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-[12px] tracking-[0.08em] uppercase text-bone/55">
          {NAV.map(n => (
            <a key={n.href} href={n.href} className="hover:text-bone transition-colors">
              {lang === "zh" ? n.zh : n.en}
            </a>
          ))}
        </div>
        <button
          onClick={toggle}
          className="font-mono text-[11px] px-3 py-1.5 border border-bone/15 hover:border-bone/40 hover:bg-bone/5 transition-colors rounded-full text-bone/75"
        >
          {lang === "en" ? "中文 →" : "EN →"}
        </button>
      </div>
    </nav>
  );
}
