"use client";

import { useI18n } from "@/components/I18nProvider";

const icons = ["bx-lock", "bx-shield-quarter", "bx-printer", "bx-star"];

type FB = { h: string; p: string };

export default function FeatureBand() {
  const { raw } = useI18n();
  const data = (raw("featureBand") as FB[]) ?? [];
  const features = icons.map((icon, i) => ({ icon, h: data[i]?.h ?? "", p: data[i]?.p ?? "" }));

  return (
    <div className="px-[48px] pb-[130px] pt-[130px] max-md:px-[20px]">
      <div className="reveal-stagger mx-auto grid max-w-content grid-cols-4 overflow-hidden rounded-lg border border-line bg-surface max-[1100px]:grid-cols-2 max-md:grid-cols-1">
        {features.map((f, i) => (
          <div
            key={i}
            className={`border-line-soft p-[36px_30px] transition-[background] duration-300 ease hover:bg-tint/[0.025]
              border-r last:border-r-0
              max-[1100px]:border-b max-[1100px]:[&:nth-child(2n)]:border-r-0
              max-md:border-r-0 ${i === features.length - 1 ? "max-md:border-b-0" : "max-md:border-b"}`}
          >
            <div className="mb-[22px] grid h-[42px] w-[42px] place-items-center rounded-[12px] bg-accent-soft text-[19px] text-accent">
              <i className={`bx ${f.icon}`} />
            </div>
            <h5 className="mb-[8px] font-display text-[17.5px] font-semibold tracking-[-0.01em]">
              {f.h}
            </h5>
            <p className="text-[13.5px] text-ink-dim">{f.p}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
