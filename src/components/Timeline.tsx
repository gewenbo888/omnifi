"use client";

import { useLang, pick } from "./LangContext";
import { COPY } from "@/content/copy";

export function Timeline() {
  const { lang } = useLang();
  const t = COPY.history;

  return (
    <section id="history" className="relative py-32 px-6 sm:px-10 border-t border-bone/8 bg-gradient-to-b from-[#08080d] to-ink overflow-hidden">
      <div className="absolute inset-0 starfield opacity-25" />
      <div className="relative max-w-[1280px] mx-auto">
        <div className="mb-14">
          <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-bone/35 mb-3">§ IV</div>
          <h2 className="font-display text-bone text-3xl sm:text-5xl leading-[1.02] max-w-[22ch]">
            {pick(t.title, lang)}
          </h2>
          <p className="mt-4 text-bone/55 text-sm max-w-[56ch]">{pick(t.sub, lang)}</p>
        </div>

        {/* Horizontal scrollable timeline */}
        <div className="relative">
          <div className="relative pb-12 overflow-x-auto -mx-6 sm:-mx-10 px-6 sm:px-10">
            <div className="relative min-w-max">
              {/* Spine */}
              <div className="absolute left-0 right-0 top-[88px] h-px bg-bone/15" />
              <div className="flex gap-10 sm:gap-14">
                {t.items.map((it, i) => {
                  const y = parseInt(it.year);
                  const isFuture = y >= 2026;
                  return (
                    <div key={i} className="w-[230px] flex-shrink-0 relative">
                      <div className={`font-mono text-[10px] tracking-[0.18em] uppercase ${isFuture ? "text-bone/40" : "text-bone/55"} mb-2`}>
                        {it.year}{isFuture ? " · ◇" : ""}
                      </div>
                      <div className="h-[64px] flex items-end">
                        <div
                          className={`w-3 h-3 rounded-full ${isFuture ? "bg-transparent border-2 border-bone/40" : "bg-bone/85"}`}
                        />
                      </div>
                      <div className="mt-6 text-bone/85 text-sm leading-snug">{pick({ en: it.en, zh: it.zh }, lang)}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-bone/30 text-right">
            {lang === "zh" ? "← 滚动查看 →" : "← scroll horizontally →"}
          </div>
        </div>
      </div>
    </section>
  );
}
