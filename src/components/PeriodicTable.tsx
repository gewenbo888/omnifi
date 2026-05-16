"use client";

import { useState } from "react";
import { useLang, pick } from "./LangContext";
import { ELEMENTS } from "@/content/elements";
import { ElementDetail } from "./ElementDetail";

export function PeriodicTable() {
  const { lang } = useLang();
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="table" className="relative py-32 px-6 sm:px-10 border-t border-bone/8 bg-gradient-to-b from-ink to-[#08080d]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-bone/35 mb-3">§ II</div>
            <h2 className="font-display text-bone text-3xl sm:text-5xl leading-[1.02] max-w-[18ch]">
              {lang === "zh" ? "金融化的元素周期表" : "The Periodic Table of Financialization"}
            </h2>
          </div>
          <p className="text-bone/55 text-sm max-w-[42ch]">
            {lang === "zh"
              ? "九个元素。点击任意一格深入阅读。每个元素是一个维度、一个记账单位、一个市场。"
              : "Nine elements. Click any cell to read deeply. Each element is a dimension, a unit of account, and a market."}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-px border border-bone/10 bg-bone/10">
          {ELEMENTS.map(e => (
            <button
              key={e.key}
              id={`el-${e.key}`}
              onClick={() => setOpen(e.key)}
              className="group relative bg-ink p-7 sm:p-8 text-left cell hover:bg-bone/[0.03] min-h-[260px] flex flex-col justify-between"
              style={{ color: e.color }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-mono text-[10px] tracking-[0.22em] text-bone/35">{e.number}</div>
                  <div
                    className="font-display text-4xl sm:text-5xl mt-1 leading-none"
                    style={{ color: e.color }}
                  >
                    {e.symbol}
                  </div>
                </div>
                <div className="text-[40px] leading-none opacity-90" style={{ color: e.color }}>{e.glyph}</div>
              </div>
              <div className="mt-8">
                <div className="font-display text-bone text-xl sm:text-2xl tracking-tight">
                  {pick(e.name, lang)}
                </div>
                <div className="mt-1.5 text-bone/45 text-sm">
                  {pick(e.dimension, lang)} · <span className="font-mono text-[11px]">{pick(e.unit, lang)}</span>
                </div>
                <div className="mt-4 text-bone/70 text-sm leading-relaxed line-clamp-2">
                  {pick(e.tagline, lang)}
                </div>
              </div>
              <div className="absolute bottom-3 right-4 font-mono text-[10px] tracking-[0.18em] uppercase text-bone/30 group-hover:text-bone/70 transition-colors">
                {lang === "zh" ? "展开 →" : "Open →"}
              </div>
            </button>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] tracking-[0.18em] uppercase text-bone/35">
          <span>
            {lang === "zh"
              ? "底层 ← 物理 · 信息 · 文化 → 顶层"
              : "Bottom ← physics · information · culture → Top"}
          </span>
          <span>{lang === "zh" ? "颜色 = 主导色谱" : "Color = dominant accent"}</span>
        </div>
      </div>

      {open && (
        <ElementDetail
          elementKey={open}
          onClose={() => setOpen(null)}
        />
      )}
    </section>
  );
}
