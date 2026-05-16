"use client";

import { useLang } from "./LangContext";
import { ELEMENTS } from "@/content/elements";

export function Ticker() {
  const { lang } = useLang();
  const items = [...ELEMENTS, ...ELEMENTS]; // duplicate for seamless loop
  return (
    <div className="border-y border-bone/8 py-3 overflow-hidden bg-ink">
      <div className="ticker flex gap-12 whitespace-nowrap">
        {items.map((e, i) => (
          <span key={i} className="font-mono text-[11px] tracking-[0.18em] uppercase text-bone/55 inline-flex items-center gap-3">
            <span style={{ color: e.color }} className="text-lg leading-none">{e.glyph}</span>
            <span>{lang === "zh" ? e.name.zh : e.name.en}</span>
            <span className="text-bone/25">·</span>
            <span className="text-bone/45">{lang === "zh" ? e.unit.zh : e.unit.en}</span>
            <span className="text-bone/20 mx-2">×</span>
          </span>
        ))}
      </div>
    </div>
  );
}
