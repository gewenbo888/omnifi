"use client";

import { useLang, pick } from "./LangContext";
import { COPY } from "@/content/copy";

export function Thesis() {
  const { lang } = useLang();
  const t = COPY.thesis;

  return (
    <section id="thesis" className="relative py-32 px-6 sm:px-10 border-t border-bone/8">
      <div className="max-w-[1280px] mx-auto grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-24">
        <aside className="lg:sticky lg:top-32 self-start">
          <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-bone/35 mb-4">§ I</div>
          <h2 className="font-display text-bone text-3xl sm:text-4xl leading-[1.05]">
            {pick(t.title, lang)}
          </h2>
          <div className="mt-6 font-mono text-[10px] tracking-[0.16em] uppercase text-bone/30">
            {lang === "zh" ? "宣言 · 2026" : "Manifesto · 2026"}
          </div>
        </aside>
        <div className="space-y-7 text-bone/80 text-[clamp(1.05rem,1.15vw,1.22rem)] leading-[1.65] max-w-[62ch]">
          {pick(t.body, lang).map((p, i) => (
            <p
              key={i}
              className={i === 0 ? "first-letter:font-display first-letter:text-bone first-letter:text-7xl first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] first-letter:mt-1" : ""}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
