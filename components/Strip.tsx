"use client";

import { useI18n } from "@/components/I18nProvider";

const icons = [
  "bx-store",
  "bx-t-shirt",
  "bx-lotion",
  "bx-devices",
  "bx-book-library",
  "bx-cart",
  "bx-building-house",
  "bx-cog",
];

export default function Strip() {
  const { t, raw } = useI18n();
  const labels = (raw("strip.items") as string[]) ?? [];
  const items = icons.map((icon, i) => ({ icon, label: labels[i] ?? "" }));

  return (
    <div className="flex items-center gap-[40px] border-y border-line-soft bg-bg-2 px-[48px] py-[30px] max-md:gap-[20px] max-md:px-[20px] max-md:py-[24px]">
      <span className="flex-shrink-0 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.1em] text-ink-muted">
        {t("strip.label")}
      </span>
      <div className="marquee-mask flex-1 overflow-hidden">
        <div className="flex w-max gap-[48px] motion-safe:animate-marquee">
          {[...items, ...items].map((it, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-[9px] whitespace-nowrap text-[15px] font-medium text-ink-muted"
            >
              <i className={`bx ${it.icon} text-[18px] text-accent`} /> {it.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
