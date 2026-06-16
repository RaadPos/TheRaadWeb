"use client";

import { useI18n } from "@/components/I18nProvider";

const DEFAULT_CLS =
  "hidden items-center gap-[7px] rounded-full border border-line px-[13px] py-[8px] text-[13px] font-medium text-ink-dim transition-all duration-200 hover:border-accent hover:text-ink md:flex";

// Toggles between English and Somali. The choice is persisted to localStorage
// by the provider, so the browser remembers it across visits.
export default function LangSwitch({ className }: { className?: string }) {
  const { locale, setLocale, t } = useI18n();
  const next = locale === "en" ? "so" : "en";

  return (
    <button
      onClick={() => setLocale(next)}
      aria-label={t("lang.switchTo")}
      title={t("lang.switchTo")}
      className={className ?? DEFAULT_CLS}
    >
      {locale === "so" ? (
        // Somali flag — blue field with white star
        <span className="relative h-[11px] w-[15px] flex-shrink-0 overflow-hidden rounded-[2px] bg-[#4189dd] after:absolute after:inset-0 after:grid after:place-items-center after:text-[7px] after:text-white after:content-['★']" />
      ) : (
        // English — neutral globe icon


        
        <i className="bx bx-globe text-[15px]" />
      )}
      <span>{locale === "en" ? t("lang.en") : t("lang.so")}</span>
      <i className="bx bx-chevron-down text-[14px]" />
    </button>
  );
}