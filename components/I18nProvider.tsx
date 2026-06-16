"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import en from "@/messages/en.json";
import so from "@/messages/so.json";
import pagesSo from "@/messages/pages.so.json";

export type Locale = "en" | "so";

const PAGES_SO = pagesSo as Record<string, string>;

const DICTS: Record<Locale, unknown> = { en, so };
const STORAGE_KEY = "raad_lang";

type I18nCtx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  /** Translate a dot-path key to a string (falls back to English, then the key). */
  t: (key: string) => string;
  /** Read the raw value at a dot-path (for arrays/objects like lists). */
  raw: (key: string) => unknown;
  /**
   * Translate an English source string directly (English stays in the code).
   * Returns the Somali mapping when locale is "so", otherwise the English text.
   */
  ts: (text: string) => string;
};

const Ctx = createContext<I18nCtx | null>(null);

function lookup(dict: unknown, key: string): unknown {
  return key.split(".").reduce<unknown>((obj, part) => {
    if (obj && typeof obj === "object") {
      return (obj as Record<string, unknown>)[part];
    }
    return undefined;
  }, dict);
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  // Always render English first so SSR and the first client paint match
  // (localStorage isn't available on the server). We switch after mount.
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (saved === "en" || saved === "so") {
        setLocaleState(saved);
        document.documentElement.lang = saved;
      }
    } catch {
      /* ignore */
    }
  }, []);


  
  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = l;
  }, []);

  const raw = useCallback(
    (key: string): unknown => {
      const v = lookup(DICTS[locale], key);
      return v !== undefined ? v : lookup(DICTS.en, key);
    },
    [locale]
  );

  const t = useCallback(
    (key: string): string => {
      const v = raw(key);
      return typeof v === "string" ? v : key;
    },
    [raw]
  );

  const ts = useCallback(
    (text: string): string => (locale === "so" ? PAGES_SO[text] ?? text : text),
    [locale]
  );

  return (
    <Ctx.Provider value={{ locale, setLocale, t, raw, ts }}>{children}</Ctx.Provider>
  );
}

export function useI18n(): I18nCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
