"use client";

import { useLang, pick } from "./LangContext";
import { COPY } from "@/content/copy";

export function Builder() {
  const { lang } = useLang();
  const b = COPY.builder;
  return (
    <section id="build" className="relative py-32 px-6 sm:px-10 border-t border-bone/8 bg-gradient-to-b from-ink to-[#08080d]">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-14">
          <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-bone/35 mb-3">§ VI</div>
          <h2 className="font-display text-bone text-3xl sm:text-5xl leading-[1.02] max-w-[24ch]">
            {pick(b.title, lang)}
          </h2>
          <p className="mt-4 text-bone/55 text-sm max-w-[52ch]">{pick(b.sub, lang)}</p>
        </div>

        <div className="grid md:grid-cols-5 gap-px border border-bone/10 bg-bone/10">
          {b.steps.map(s => (
            <div key={s.n} className="bg-ink p-6 sm:p-7 flex flex-col gap-5">
              <div className="font-display text-bone/35 text-5xl leading-none">{s.n}</div>
              <p className="text-bone/85 text-sm leading-[1.6]">
                {pick({ en: s.en, zh: s.zh }, lang)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
