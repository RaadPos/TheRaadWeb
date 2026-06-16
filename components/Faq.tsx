"use client";

import { useState } from "react";
import { useI18n } from "@/components/I18nProvider";

type QA = { q: string; a: string };

export default function Faq() {
  const { t, raw } = useI18n();
  const faqs = (raw("faq.items") as QA[]) ?? [];
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="border-t border-line-soft bg-bg-2 px-[48px] py-[130px] max-md:px-[20px] max-md:py-[90px]">
      <div className="sec-head">
        <div className="eyebrow reveal">{t("faq.eyebrow")}</div>
        <h2 className="sec-title reveal">
          {t("faq.titlePre")}
          <em>{t("faq.titleEm")}</em>
        </h2>
      </div>

      <div className="mx-auto max-w-[820px]">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className={`faq-item border-b border-line-soft ${isOpen ? "open" : ""}`}
            >
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="group flex w-full items-center justify-between gap-[24px] py-[26px] pl-[6px] pr-[6px] text-left transition-colors duration-200 ease hover:text-accent"
              >
                <h3 className="font-display text-[19px] font-medium leading-[1.3] tracking-[-0.01em]">
                  {item.q}
                </h3>
                <span
                  className={`relative h-[30px] w-[30px] flex-shrink-0 rounded-full border transition-all duration-300 ease
                    before:absolute before:left-1/2 before:top-1/2 before:h-[1.5px] before:w-[11px] before:-translate-x-1/2 before:-translate-y-1/2 before:bg-current before:content-['']
                    after:absolute after:left-1/2 after:top-1/2 after:h-[11px] after:w-[1.5px] after:-translate-x-1/2 after:-translate-y-1/2 after:bg-current after:transition-transform after:duration-300 after:ease after:content-['']
                    ${
                      isOpen
                        ? "border-accent bg-accent text-accent-on after:rotate-90"
                        : "border-line"
                    }`}
                />
              </button>
              <div className="faq-a">
                <div
                  className={`overflow-hidden text-[15.5px] leading-[1.65] text-ink-dim max-w-[700px] ${
                    isOpen ? "pb-[28px] pl-[6px] pr-[6px]" : ""
                  }`}
                >
                  {item.a}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
