"use client";

import { useI18n } from "@/components/I18nProvider";

const HOW_SCREENSHOT = "/assets/report.jpeg";

type StepData = { h: string; p: string };

export default function HowItWorks() {
  const { t, raw } = useI18n();
  const steps = (raw("how.steps") as StepData[]) ?? [];
  const leftSteps = steps.slice(0, 4);
  const rightSteps = steps.slice(4, 8);

  return (
    <section
      id="how"
      className="border-y border-line-soft bg-bg-2 px-[48px] py-[130px] max-md:px-[20px] max-md:py-[90px]"
    >
      <div className="sec-head">
        <div className="eyebrow reveal">{t("how.eyebrow")}</div>
        <h2 className="sec-title reveal">
          {t("how.titlePre")}
          <em>{t("how.titleEm")}</em>
        </h2>
        <p className="sec-desc reveal">{t("how.desc")}</p>
      </div>

      <div className="mx-auto grid max-w-content grid-cols-[1fr_380px_1fr] items-center gap-[40px] max-[1100px]:grid-cols-1 max-[1100px]:gap-[24px]">
        <div className="reveal-stagger flex flex-col gap-[14px]">
          {leftSteps.map((s, i) => (
            <Step key={i} n={String(i + 1).padStart(2, "0")} h={s.h} p={s.p} align="right" />
          ))}
        </div>

        <div className="flex justify-center max-[1100px]:order-[-1] max-[1100px]:mb-[20px]">
          <div
            id="howPhone"
            className="how-phone phone-shell relative w-[300px] rounded-[40px] p-[10px] shadow-[0_30px_70px_oklch(0_0_0_/_0.5),0_0_0_1px_oklch(1_0_0_/_0.07)]"
          >
            <div className="relative aspect-[9/19.5] overflow-hidden rounded-[31px] border border-tint/[0.06] bg-[oklch(0.13_0.01_260)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={HOW_SCREENSHOT}
                alt={t("how.phoneTitle")}
                className="absolute inset-0 h-full w-full select-none object-cover object-top"
                draggable={false}
              />
              <div className="pointer-events-none absolute inset-0 rounded-[31px] bg-[linear-gradient(180deg,oklch(1_0_0_/_0.06),transparent_22%)]" />
            </div>
          </div>
        </div>

        <div className="reveal-stagger flex flex-col gap-[14px]">
          {rightSteps.map((s, i) => (
            <Step key={i} n={String(i + 5).padStart(2, "0")} h={s.h} p={s.p} align="left" />
          ))}
        </div>
      </div>
    </section>
  );
}

function Step({
  n,
  h,
  p,
  align,
}: {
  n: string;
  h: string;
  p: string;
  align: "left" | "right";
}) {
  const isRight = align === "right";
  return (
    <div
      className={`group flex items-start gap-[18px] rounded border border-transparent p-[20px_22px] transition-[border-color,background] duration-300 ease hover:border-line hover:bg-tint/[0.025] ${
        isRight
          ? "flex-row-reverse text-right max-[1100px]:flex-row max-[1100px]:text-left"
          : ""
      }`}
    >
      <div className="grid h-[42px] w-[42px] flex-shrink-0 place-items-center rounded-full border border-line font-mono text-[12.5px] text-ink-dim transition-all duration-300 ease group-hover:scale-[1.06] group-hover:border-accent group-hover:bg-accent group-hover:text-accent-on">
        {n}
      </div>
      <div>
        <h4 className="mb-[5px] font-display text-[18.5px] font-semibold tracking-[-0.01em]">
          {h}
        </h4>
        <p className="text-[14px] text-ink-dim">{p}</p>
      </div>
    </div>
  );
}
