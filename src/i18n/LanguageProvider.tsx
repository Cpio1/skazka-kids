"use client";

import { createContext, useCallback, useContext, useEffect, useSyncExternalStore } from "react";
import type { Locale } from "@/data/site";
import { LANG_STORAGE_KEY } from "./config";
import { kk } from "./kk";
import { ru, type Dictionary } from "./ru";

const CHANGE_EVENT = "skazka-lang-change";

const dictionaries: Record<Locale, Dictionary> = { ru, kk };

function readStoredLocale(): Locale {
  try {
    return window.localStorage.getItem(LANG_STORAGE_KEY) === "kk" ? "kk" : "ru";
  } catch {
    return "ru";
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

type LanguageContextValue = {
  locale: Locale;
  t: Dictionary;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // На сервере всегда "ru"; на клиенте — сохранённый выбор пользователя.
  const locale = useSyncExternalStore(subscribe, readStoredLocale, () => "ru" as Locale);

  const setLocale = useCallback((next: Locale) => {
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, next);
    } catch {
      /* приватный режим — язык просто не запомнится */
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);

  const t = dictionaries[locale];

  useEffect(() => {
    const root = document.documentElement;
    root.lang = locale;
    const applyMeta = () => {
      document.title = t.meta.title;
      document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description);
    };
    applyMeta();
    // Next.js может повторно применить серверные метаданные после гидратации
    const timer = window.setTimeout(applyMeta, 300);
    // Снимаем скрытие, которое ставит начальный скрипт, пока применяется казахская версия
    root.classList.remove("lang-pending");
    return () => window.clearTimeout(timer);
  }, [locale, t]);

  return <LanguageContext.Provider value={{ locale, t, setLocale }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
