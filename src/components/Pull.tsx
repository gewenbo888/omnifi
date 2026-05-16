"use client";

import { useLang } from "./LangContext";

export function Pull() {
  const { lang } = useLang();
  return (
    <section className="relative py-32 px-6 sm:px-10 border-t border-bone/8 overflow-hidden">
      <div className="absolute inset-0 starfield opacity-30" />
      <div className="relative max-w-[1080px] mx-auto text-center">
        <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-bone/35 mb-6">
          {lang === "zh" ? "中段定义" : "Mid-section dictum"}
        </div>
        <blockquote className="font-display text-bone text-[clamp(2rem,4.6vw,4.4rem)] leading-[1.05] tracking-tight max-w-[18ch] mx-auto">
          {lang === "zh"
            ? "金融化不是发明。它是承认。"
            : "Financialization is not invention. It is admission."}
        </blockquote>
        <div className="mt-6 text-bone/45 text-sm max-w-[44ch] mx-auto">
          {lang === "zh"
            ? "我们承认一个事物的价格，正是承认它能够被失去。"
            : "To name a thing's price is to admit that it can be lost."}
        </div>
      </div>
    </section>
  );
}
