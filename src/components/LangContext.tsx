"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Lang = "en" | "zh";
interface Ctx { lang: Lang; setLang: (l: Lang) => void; toggle: () => void; }

const LangCtx = createContext<Ctx>({ lang: "en", setLang: () => {}, toggle: () => {} });

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("omnifi-lang") : null;
    if (saved === "zh" || saved === "en") setLang(saved);
    else {
      const browser = navigator.language.toLowerCase();
      if (browser.startsWith("zh")) setLang("zh");
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("omnifi-lang", lang);
    if (typeof document !== "undefined") document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  }, [lang]);

  const toggle = () => setLang(l => (l === "en" ? "zh" : "en"));

  return <LangCtx.Provider value={{ lang, setLang, toggle }}>{children}</LangCtx.Provider>;
}

export const useLang = () => useContext(LangCtx);

export function L({ en, zh }: { en: React.ReactNode; zh: React.ReactNode }) {
  const { lang } = useLang();
  return <>{lang === "zh" ? zh : en}</>;
}

export function pick<T>(obj: { en: T; zh: T }, lang: Lang): T {
  return lang === "zh" ? obj.zh : obj.en;
}
