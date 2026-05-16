"use client";

import { useLang, pick } from "./LangContext";
import { COPY } from "@/content/copy";
import { ELEMENTS } from "@/content/elements";

export function Hero() {
  const { lang } = useLang();
  const h = COPY.hero;

  return (
    <section className="relative min-h-[100svh] pt-28 pb-16 overflow-hidden">
      <div className="starfield opacity-40" />
      <div className="grain" />

      {/* Background orbital diagram */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg viewBox="-300 -300 600 600" className="w-[120vh] h-[120vh] max-w-none opacity-[0.13] animate-slow-spin">
          {[80, 130, 180, 230, 270].map((r, i) => (
            <circle key={i} cx="0" cy="0" r={r} className="diagram-line" strokeDasharray={i % 2 ? "1 3" : "0"} />
          ))}
          {ELEMENTS.map((e, i) => {
            const angle = (i / ELEMENTS.length) * Math.PI * 2 - Math.PI / 2;
            const r = 220;
            const x = Math.cos(angle) * r;
            const y = Math.sin(angle) * r;
            return <circle key={e.key} cx={x} cy={y} r="5" fill={e.color} opacity={0.85} />;
          })}
        </svg>
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 pt-12">
        <div className="font-mono text-[11px] tracking-[0.32em] uppercase text-bone/40 mb-10 flex items-center gap-3">
          <span className="inline-block w-8 h-px bg-bone/30" />
          {pick(h.eyebrow, lang)}
        </div>

        <h1 className="font-display font-light text-bone leading-[0.95] tracking-tight text-[clamp(2.4rem,6.8vw,7.6rem)] max-w-[14ch]">
          {pick(h.title, lang)}
        </h1>

        <div className="mt-10 max-w-[58ch] text-bone/65 text-[clamp(1rem,1.3vw,1.25rem)] leading-relaxed">
          {pick(h.subtitle, lang)}
        </div>

        <div className="mt-16 flex flex-wrap items-end gap-x-12 gap-y-6">
          <a href="#thesis" className="font-mono text-[11px] tracking-[0.28em] uppercase text-bone/85 hover:text-bone border-b border-bone/30 hover:border-bone pb-1 transition-colors">
            {pick(h.cta, lang)}
          </a>
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-bone/35 flex gap-6">
            <span>9 ELEMENTS</span>
            <span>9 UNITS</span>
            <span>1 MAP</span>
          </div>
        </div>

        {/* Bottom: the nine glyphs */}
        <div className="mt-24 grid grid-cols-3 md:grid-cols-9 gap-px border border-bone/10 max-w-3xl">
          {ELEMENTS.map(e => (
            <a
              key={e.key}
              href={`#el-${e.key}`}
              className="aspect-square flex flex-col items-center justify-center text-center cell bg-ink hover:bg-bone/[0.04]"
              style={{ color: e.color }}
            >
              <div className="text-2xl leading-none mb-1.5" style={{ color: e.color }}>{e.glyph}</div>
              <div className="font-mono text-[9px] tracking-[0.12em] uppercase text-bone/55">{e.symbol}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
