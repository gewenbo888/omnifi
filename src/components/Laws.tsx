"use client";

import { useLang, pick } from "./LangContext";
import { COPY } from "@/content/copy";

export function Laws() {
  const { lang } = useLang();
  const l = COPY.laws;
  return (
    <section id="laws" className="relative py-32 px-6 sm:px-10 border-t border-bone/8">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-bone/35 mb-3">§ V</div>
            <h2 className="font-display text-bone text-3xl sm:text-5xl leading-[1.02] max-w-[20ch]">
              {pick(l.title, lang)}
            </h2>
          </div>
          <p className="text-bone/50 text-sm max-w-[42ch]">
            {lang === "zh"
              ? "从过去六千年金融化史中萃取的五条法则。"
              : "Five laws distilled from six thousand years of financialization."}
          </p>
        </div>

        <ol className="space-y-px border border-bone/10 bg-bone/10">
          {l.items.map(item => (
            <li key={item.n} className="bg-ink p-6 sm:p-8 grid grid-cols-[auto_1fr] gap-6 sm:gap-10 items-start hover:bg-bone/[0.03] transition-colors">
              <div className="font-display text-bone/40 text-4xl sm:text-5xl leading-none">{item.n}</div>
              <p className="text-bone/85 text-[clamp(1rem,1.2vw,1.22rem)] leading-[1.55] max-w-[64ch]">
                {pick({ en: item.en, zh: item.zh }, lang)}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
