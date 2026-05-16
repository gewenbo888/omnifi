"use client";

import { useEffect } from "react";
import { useLang, pick } from "./LangContext";
import { ELEMENTS } from "@/content/elements";

export function ElementDetail({ elementKey, onClose }: { elementKey: string; onClose: () => void }) {
  const { lang } = useLang();
  const e = ELEMENTS.find(x => x.key === elementKey);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (ev: KeyboardEvent) => { if (ev.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  if (!e) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-ink/96 backdrop-blur-sm reveal">
      <button
        onClick={onClose}
        aria-label="close"
        className="fixed top-4 right-4 z-50 w-10 h-10 flex items-center justify-center border border-bone/15 hover:bg-bone/5 text-bone/70 hover:text-bone text-xl rounded-full"
      >
        ×
      </button>

      <div className="min-h-screen px-5 sm:px-8 py-12 sm:py-20">
        <div className="max-w-[1180px] mx-auto">
          {/* Header */}
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end pb-10 border-b border-bone/10">
            <div>
              <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-bone/35">
                {e.number} · {pick(e.dimension, lang)}
              </div>
              <h2 className="font-display mt-3 text-bone text-5xl sm:text-7xl leading-[0.92] tracking-tight" style={{ color: e.color }}>
                {pick(e.name, lang)}
              </h2>
              <div className="mt-4 text-bone/60 text-base sm:text-lg max-w-[52ch]">
                {pick(e.tagline, lang)}
              </div>
            </div>
            <div className="text-right">
              <div className="font-display text-[120px] sm:text-[180px] leading-[0.85]" style={{ color: e.color }}>{e.glyph}</div>
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-bone/40 mt-2">
                {lang === "zh" ? "符号" : "Symbol"} · {e.symbol}
              </div>
            </div>
          </div>

          {/* Unit-of-account */}
          <div className="mt-12 grid sm:grid-cols-2 gap-6 sm:gap-10">
            <div>
              <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-bone/35">
                {lang === "zh" ? "记账单位" : "Unit of Account"}
              </div>
              <div className="mt-2 font-display text-bone text-2xl sm:text-3xl">
                {pick(e.unit, lang)}
              </div>
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-bone/35">
                {lang === "zh" ? "维度" : "Dimension"}
              </div>
              <div className="mt-2 font-display text-bone text-2xl sm:text-3xl">
                {pick(e.dimension, lang)}
              </div>
            </div>
          </div>

          {/* Definition */}
          <section className="mt-16">
            <SectionLabel n="A" en="Definition" zh="定义" />
            <p className="mt-4 text-bone/85 text-[clamp(1.05rem,1.15vw,1.22rem)] leading-[1.7] max-w-[64ch]">
              {pick(e.definition, lang)}
            </p>
          </section>

          {/* Mechanics */}
          <section className="mt-16">
            <SectionLabel n="B" en="How it works" zh="运作机制" />
            <p className="mt-4 text-bone/85 text-[clamp(1.05rem,1.15vw,1.22rem)] leading-[1.7] max-w-[64ch]">
              {pick(e.mechanics, lang)}
            </p>
          </section>

          {/* Primitives */}
          <section className="mt-16">
            <SectionLabel n="C" en="Primitives" zh="原语" />
            <div className="mt-5 grid sm:grid-cols-2 gap-px border border-bone/10 bg-bone/10">
              {pick(e.primitives, lang).map((p, i) => (
                <div key={i} className="bg-ink p-4 text-bone/85 text-sm flex items-start gap-3">
                  <span className="font-mono text-[10px] text-bone/35 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  {p}
                </div>
              ))}
            </div>
          </section>

          {/* History */}
          <section className="mt-16">
            <SectionLabel n="D" en="History" zh="历史" />
            <ol className="mt-5 border-l border-bone/15 pl-6 sm:pl-8 space-y-5">
              {e.history.map((h, i) => (
                <li key={i} className="relative">
                  <span
                    className="absolute -left-[34px] sm:-left-[42px] top-2 w-3 h-3 rounded-full border-2 border-ink"
                    style={{ background: e.color }}
                  />
                  <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-bone/45">{h.year}</div>
                  <div className="text-bone/85 mt-0.5">{pick({ en: h.en, zh: h.zh }, lang)}</div>
                </li>
              ))}
            </ol>
          </section>

          {/* State & Future */}
          <section className="mt-16 grid md:grid-cols-2 gap-8">
            <div>
              <SectionLabel n="E" en="State of the union · 2026" zh="2026 现状" />
              <p className="mt-4 text-bone/85 text-base leading-[1.7]">
                {pick(e.state, lang)}
              </p>
            </div>
            <div>
              <SectionLabel n="F" en="Future · 2030+" zh="未来 · 2030+" />
              <p className="mt-4 text-bone/85 text-base leading-[1.7]">
                {pick(e.future, lang)}
              </p>
            </div>
          </section>

          {/* Projects */}
          <section className="mt-16">
            <SectionLabel n="G" en="Projects to watch" zh="值得关注的项目" />
            <div className="mt-5 flex flex-wrap gap-2">
              {e.projects.map(p => (
                <span
                  key={p}
                  className="font-mono text-xs px-3 py-1.5 border rounded-full"
                  style={{ borderColor: `${e.color}55`, color: e.color }}
                >
                  {p}
                </span>
              ))}
            </div>
          </section>

          {/* Thesis */}
          <section className="mt-20 mb-12 p-8 sm:p-12 border" style={{ borderColor: `${e.color}33`, background: `${e.color}07` }}>
            <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-bone/35 mb-3">
              {lang === "zh" ? "押注" : "The bet"}
            </div>
            <div className="font-display text-2xl sm:text-3xl text-bone leading-snug" style={{ color: e.color }}>
              "{pick(e.thesis, lang)}"
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ n, en, zh }: { n: string; en: string; zh: string }) {
  const { lang } = useLang();
  return (
    <div className="flex items-center gap-4">
      <div className="font-display text-bone/30 text-2xl">{n}.</div>
      <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-bone/55">
        {lang === "zh" ? zh : en}
      </div>
      <div className="flex-1 h-px bg-bone/10" />
    </div>
  );
}
