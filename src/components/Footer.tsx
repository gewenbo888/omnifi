"use client";

import { useLang, pick } from "./LangContext";
import { COPY } from "@/content/copy";

export function Footer() {
  const { lang } = useLang();
  const f = COPY.footer;
  return (
    <footer className="relative border-t border-bone/10 px-6 sm:px-10 py-16">
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-[1.3fr_1fr_1fr] gap-10">
        <div>
          <div className="flex items-center gap-2.5">
            <svg width="22" height="22" viewBox="0 0 64 64">
              <circle cx="32" cy="32" r="22" fill="none" stroke="#f4ecdc" strokeWidth="1.2" />
              <text x="32" y="42" fontFamily="Georgia,serif" fontSize="32" fontStyle="italic" textAnchor="middle" fill="#f4ecdc">Ω</text>
            </svg>
            <span className="font-display text-bone text-lg">OmniFi</span>
          </div>
          <p className="mt-4 text-bone/45 text-sm max-w-[42ch] leading-relaxed">{pick(f.line1, lang)}</p>
        </div>
        <div>
          <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-bone/35 mb-3">
            {lang === "zh" ? "目录" : "Index"}
          </div>
          <ul className="space-y-2 text-bone/65 text-sm">
            <li><a href="#thesis" className="hover:text-bone">{lang === "zh" ? "论点" : "Thesis"}</a></li>
            <li><a href="#table" className="hover:text-bone">{lang === "zh" ? "元素表" : "Periodic table"}</a></li>
            <li><a href="#equiv" className="hover:text-bone">{lang === "zh" ? "记账单位" : "Units of account"}</a></li>
            <li><a href="#history" className="hover:text-bone">{lang === "zh" ? "历史" : "History"}</a></li>
            <li><a href="#laws" className="hover:text-bone">{lang === "zh" ? "五律" : "Laws"}</a></li>
            <li><a href="#build" className="hover:text-bone">{lang === "zh" ? "建造" : "Build"}</a></li>
          </ul>
        </div>
        <div>
          <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-bone/35 mb-3">
            {lang === "zh" ? "外部" : "Elsewhere"}
          </div>
          <ul className="space-y-2 text-bone/65 text-sm">
            <li><a href="https://psyverse.fun" target="_blank" rel="noreferrer" className="hover:text-bone">Psyverse →</a></li>
            <li><a href="https://psyverse.fun/atlas.html" target="_blank" rel="noreferrer" className="hover:text-bone">Atlas →</a></li>
            <li><a href="https://github.com/gewenbo888" target="_blank" rel="noreferrer" className="hover:text-bone">GitHub →</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto mt-12 pt-6 border-t border-bone/8 flex flex-col sm:flex-row justify-between gap-4 text-bone/35 text-xs">
        <div>{pick(f.line2, lang)}</div>
        <div className="font-mono">© 2026 Psyverse · OmniFi v1.0</div>
      </div>
    </footer>
  );
}
