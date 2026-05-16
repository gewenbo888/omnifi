"use client";

import { useLang, pick } from "./LangContext";
import { COPY } from "@/content/copy";
import { EQUIVALENCES } from "@/content/elements";

export function Equivalence() {
  const { lang } = useLang();
  const e = COPY.equivalence;

  return (
    <section id="equiv" className="relative py-32 px-6 sm:px-10 border-t border-bone/8">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-14">
          <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-bone/35 mb-3">§ III</div>
          <h2 className="font-display text-bone text-3xl sm:text-5xl leading-[1.02] max-w-[22ch]">
            {pick(e.title, lang)}
          </h2>
          <p className="mt-4 text-bone/55 text-sm max-w-[58ch]">{pick(e.sub, lang)}</p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">
          {/* Left: equivalence diagram */}
          <div className="relative aspect-square max-w-[600px] mx-auto w-full">
            <svg viewBox="-100 -100 200 200" className="absolute inset-0 w-full h-full">
              <defs>
                <radialGradient id="core" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#f4ecdc" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#f4ecdc" stopOpacity="0" />
                </radialGradient>
              </defs>
              {[28, 56, 84].map(r => (
                <circle key={r} cx="0" cy="0" r={r} className="diagram-line" />
              ))}
              <circle cx="0" cy="0" r="18" fill="url(#core)" />
              <text x="0" y="-2" textAnchor="middle" fontFamily="Georgia, serif" fontStyle="italic" fontSize="18" fill="#06060a">Ω</text>
              <text x="0" y="14" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="5" fill="#06060a" letterSpacing="1">OMNIFI</text>

              {EQUIVALENCES.map((eq, i) => {
                const a = (i / EQUIVALENCES.length) * Math.PI * 2 - Math.PI / 2;
                const r = 78;
                const x = Math.cos(a) * r;
                const y = Math.sin(a) * r;
                const lx = Math.cos(a) * 19;
                const ly = Math.sin(a) * 19;
                return (
                  <g key={i}>
                    <line x1={lx} y1={ly} x2={x * 0.86} y2={y * 0.86} stroke={eq.color} strokeOpacity="0.55" strokeWidth="0.4" />
                    <circle cx={x} cy={y} r="9" fill="#06060a" stroke={eq.color} strokeWidth="0.8" />
                    <text x={x} y={y + 1.5} textAnchor="middle" fontSize="8" fill={eq.color} fontFamily="Georgia, serif">
                      {eq.glyph}
                    </text>
                    <text
                      x={x * 1.18}
                      y={y * 1.18 + 2}
                      textAnchor="middle"
                      fontSize="3.6"
                      fontFamily="JetBrains Mono, monospace"
                      letterSpacing="0.5"
                      fill="#f4ecdc"
                      opacity="0.78"
                    >
                      {pick(eq.dim, lang).toUpperCase()}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Right: equivalence table */}
          <div>
            <div className="border border-bone/12">
              <div className="grid grid-cols-[1fr_1.4fr_auto] font-mono text-[10px] tracking-[0.2em] uppercase text-bone/40 px-4 py-2.5 border-b border-bone/10">
                <span>{lang === "zh" ? "维度" : "Dimension"}</span>
                <span>{lang === "zh" ? "记账单位" : "Unit of Account"}</span>
                <span>{lang === "zh" ? "符号" : "Glyph"}</span>
              </div>
              {EQUIVALENCES.map((eq, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[1fr_1.4fr_auto] items-center px-4 py-4 border-b border-bone/[0.06] last:border-b-0 hover:bg-bone/[0.02]"
                >
                  <span className="font-display text-bone text-lg">{pick(eq.dim, lang)}</span>
                  <span className="font-mono text-sm text-bone/70">{pick(eq.unit, lang)}</span>
                  <span className="font-display text-xl" style={{ color: eq.color }}>{eq.glyph}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 text-bone/45 text-xs leading-relaxed max-w-[44ch]">
              {lang === "zh"
                ? "每一个维度都坍缩到一个数字。一旦数字存在，市场就会出现。"
                : "Each dimension collapses into a single number. Once a number exists, a market follows."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
