"use client";

import { useState } from "react";
import { useLang, pick } from "./LangContext";
import { COPY } from "@/content/copy";

export function FAQ() {
  const { lang } = useLang();
  const f = COPY.faq;
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-32 px-6 sm:px-10 border-t border-bone/8">
      <div className="max-w-[1080px] mx-auto">
        <div className="mb-14">
          <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-bone/35 mb-3">§ VII</div>
          <h2 className="font-display text-bone text-3xl sm:text-5xl leading-[1.02]">
            {pick(f.title, lang)}
          </h2>
        </div>
        <div>
          {f.items.map((q, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-t border-bone/10 last:border-b">
                <button
                  className="w-full py-7 grid grid-cols-[auto_1fr_auto] items-baseline gap-6 text-left hover:bg-bone/[0.02] transition-colors px-2"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="font-mono text-[11px] text-bone/40 tracking-wider">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-bone text-xl sm:text-2xl leading-snug">
                    {pick(q.q, lang)}
                  </span>
                  <span className="font-mono text-bone/40 text-sm">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <div className="px-2 pb-10 pl-[3.2rem] pr-4 text-bone/75 text-base leading-[1.7] max-w-[62ch] reveal">
                    {pick(q.a, lang)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
