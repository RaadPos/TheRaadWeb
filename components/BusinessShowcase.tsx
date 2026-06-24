"use client";

import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/components/I18nProvider";

// Non-translatable per-business assets (icon, image, chip icons). The text
// (name, description, chip labels) comes from the translation dictionary,
// keyed by index under "business.types".
const META = [
  { icon: "bx-store", img: "/assets/gro.webp", chipIcons: ["bx-barcode-reader", "bx-package", "bx-bell"] },
  { icon: "bx-shopping-bag", img: "/assets/clo.webp", chipIcons: ["bx-grid-alt", "bx-line-chart", "bx-wallet"] },
  { icon: "bx-droplet", img: "/assets/cosm.webp", chipIcons: ["bx-calendar-x", "bx-gift", "bxl-whatsapp"] },
  { icon: "bx bx-devices", img: "/assets/ele.webp", chipIcons: ["bx-chip", "bx-receipt", "bx-shield-quarter"] },
  { icon: "bx-library", img: "/assets/bok.avif", chipIcons: ["bx-search", "bx-trending-up", "bx-list-check"] },
  // { icon: "bx-dish", img: "/assets/coff.webp", chipIcons: ["bx-bolt-circle", "bx-time-five", "bx-receipt"] },
  { icon: "bx-building-house", img: "/assets/biz-building.svg", chipIcons: ["bx-cube", "bx-receipt", "bx-shield-quarter"] },
  { icon: "bx-cog", img: "/assets/biz-spareparts.svg", chipIcons: ["bx-barcode-reader", "bx-list-check", "bx-bell"] },
];


type TypeText = { name: string; desc: string; chips: string[] };

export default function BusinessShowcase() {
  const { t, raw } = useI18n();
  const text = (raw("business.types") as TypeText[]) ?? [];

  const types = META.map((m, i) => ({
    icon: m.icon,
    img: m.img,
    name: text[i]?.name ?? "",
    desc: text[i]?.desc ?? "",
    chips: m.chipIcons.map((icon, ci) => [icon, text[i]?.chips?.[ci] ?? ""] as [string, string]),
  }));

  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const [shown, setShown] = useState(0);
  const touchedAt = useRef(0);
  const listRef = useRef<HTMLDivElement>(null);

  const select = (idx: number) => {
    if (idx === current) return;
    setCurrent(idx);
    setFading(true);
    window.setTimeout(() => {
      setShown(idx);
      setFading(false);
    }, 260);
  };

  // Auto-rotate, backing off while the user is exploring.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      if (Date.now() - touchedAt.current < 12000) return;
      const el = listRef.current;
      if (el) {
        const r = el.getBoundingClientRect();
        const inView =
          r.top < window.innerHeight * 0.9 && r.bottom > window.innerHeight * 0.1;
        if (!inView) return;
      }
      setCurrent((c) => {
        const next = (c + 1) % META.length;
        setFading(true);
        window.setTimeout(() => {
          setShown(next);
          setFading(false);
        }, 260);
        return next;
      });
    }, 4500);
    return () => window.clearInterval(id);
  }, []);

  const cur = types[shown];

  return (
    <section id="business" className="px-[48px] py-[130px] max-md:px-[20px] max-md:py-[90px]">
      <div className="sec-head">
        <div className="eyebrow reveal">{t("business.eyebrow")}</div>
        <h2 className="sec-title reveal">
          {t("business.titlePre")}
          <em>{t("business.titleEm")}</em>
          {t("business.titlePost")}
        </h2>
        <p className="sec-desc reveal">{t("business.desc")}</p>
      </div>

      <div className="reveal mx-auto grid max-w-[1180px] grid-cols-[380px_1fr] items-stretch gap-[22px] max-[1100px]:grid-cols-1">
        {/* tab list */}
        <div
          ref={listRef}
          role="tablist"
          aria-label={t("business.eyebrow")}
          className="flex flex-col gap-[8px] max-[1100px]:flex-row max-[1100px]:flex-wrap"
        >
          {types.map((type, idx) => {
            const active = idx === current;
            return (
              <button
                key={idx}
                role="tab"
                aria-selected={active}
                onClick={() => {
                  touchedAt.current = Date.now();
                  select(idx);
                }}
                className={`group flex items-center gap-[16px] rounded border text-left font-body text-[15.5px] font-medium transition-all duration-[250ms] ease
                  px-[20px] py-[17px] max-[1100px]:flex-1 max-[1100px]:basis-[200px] max-md:basis-full
                  ${
                    active
                      ? "border-[color-mix(in_srgb,var(--accent)_55%,transparent)] bg-surface text-ink"
                      : "border-transparent bg-transparent text-ink-dim hover:border-line-soft hover:bg-tint/[0.03] hover:text-ink"
                  }`}
              >
                <span
                  className={`grid h-[40px] w-[40px] flex-shrink-0 place-items-center rounded-[12px] border text-[19px] leading-none transition-all duration-[250ms] ease ${
                    active
                      ? "border-[color-mix(in_srgb,var(--accent)_45%,transparent)] bg-accent-soft text-accent"
                      : "border-line bg-surface text-ink-muted"
                  }`}
                >
                  <i className={`bx ${type.icon}`} />
                </span>
                <span>{type.name}</span>
                <i
                  className={`bx bx-right-arrow-alt ml-auto text-[18px] text-accent transition-all duration-[250ms] ease ${
                    active ? "translate-x-0 opacity-100" : "-translate-x-[6px] opacity-0"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* preview panel */}
        <div className="relative flex min-h-[460px] flex-col overflow-hidden rounded-lg border border-line bg-surface max-[1100px]:min-h-0">
          <div className="bus-img relative min-h-[220px] flex-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cur.img}
              alt={cur.name}
              className={`absolute inset-0 h-full w-full select-none object-cover object-center transition-opacity duration-300 ease ${
                fading ? "opacity-0" : "opacity-100"
              }`}
              draggable={false}
            />
            <div className="absolute right-[20px] top-[18px] z-[1] rounded-full border border-white/[0.18] bg-black/40 px-[12px] py-[6px] font-mono text-[11px] tracking-[0.08em] text-white/85 backdrop-blur-[8px]">
              {String(current + 1).padStart(2, "0")} / {String(META.length).padStart(2, "0")}
            </div>
          </div>
          <div className="border-t border-line-soft bg-surface p-[30px_32px_32px]">
            <h3
              className={`mb-[8px] font-display text-[26px] font-semibold tracking-[-0.02em] transition-all duration-[250ms] ease ${
                fading ? "translate-y-[8px] opacity-0" : "translate-y-0 opacity-100"
              }`}
            >
              {cur.name}
            </h3>
            <p
              className={`mb-[20px] max-w-[520px] text-[15px] text-ink-dim text-pretty transition-all duration-[250ms] ease ${
                fading ? "translate-y-[8px] opacity-0" : "translate-y-0 opacity-100"
              }`}
            >
              {cur.desc}
            </p>
            <div
              className={`flex flex-wrap gap-[8px] transition-all duration-[250ms] ease ${
                fading ? "translate-y-[8px] opacity-0" : "translate-y-0 opacity-100"
              }`}
            >
              {cur.chips.map(([icon, label]) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-[7px] rounded-full border border-line bg-tint/[0.04] px-[15px] py-[8px] text-[13px] font-medium text-ink-dim"
                >
                  <i className={`bx ${icon} text-[15px] text-accent`} /> {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
