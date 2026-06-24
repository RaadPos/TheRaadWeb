"use client";

import { useState } from "react";
import { useI18n } from "@/components/I18nProvider";

// Shown if a step image is missing, so the phone is never blank.
const FALLBACK_IMG = "/assets/homescreen.jpeg";

// One screenshot per step (index-aligned with how.steps). Drop the real
// screenshot for each step here — e.g. step 1 = Play Store, step 2 = sign-up.
const HOW_IMAGES = [
  "/assets/01-install.jpg", // Install Raad (Play Store)
  "/assets/reg.jpeg", // Create your account
  "/assets/addd.jpeg", // Add your products
  "/assets/succ.jpeg", // Make a sale
  "/assets/inve.jpeg", // Track your inventory
  "/assets/credit.jpeg", // Sell on credit (dayn)
  "/assets/rep.jpeg", // Get business reports
  "/assets/sta.jpeg", // Add & manage staff
];

type StepData = { h: string; p: string };

export default function HowItWorks() {
  const { t, raw } = useI18n();
  const steps = (raw("how.steps") as StepData[]) ?? [];

  const [active, setActive] = useState(0);
  const [shown, setShown] = useState(0); // index whose image is rendered
  const [fading, setFading] = useState(false);

  const select = (idx: number) => {
    if (idx === active) return;
    setActive(idx);
    setFading(true);
    window.setTimeout(() => {
      setShown(idx);
      setFading(false);
    }, 240);
  };

  const leftSteps = steps.slice(0, 4);
  const rightSteps = steps.slice(4, 8);
  const img = HOW_IMAGES[shown] ?? FALLBACK_IMG;

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
            <Step
              key={i}
              index={i}
              n={String(i + 1).padStart(2, "0")}
              h={s.h}
              p={s.p}
              align="right"
              active={active === i}
              onSelect={select}
            />
          ))}
        </div>

        <div className="flex justify-center max-[1100px]:order-[-1] max-[1100px]:mb-[20px]">
          <div
            id="howPhone"
            className="how-phone phone-shell relative w-[300px] rounded-[40px] p-[10px] shadow-[0_30px_70px_oklch(0_0_0_/_0.5),0_0_0_1px_rgb(var(--tint)/0.07)]"
          >
            <div className="relative aspect-[9/19.5] overflow-hidden rounded-[31px] border border-tint/[0.06] bg-[oklch(0.13_0.01_260)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img}
                alt={t("how.phoneTitle")}
                onError={(e) => {
                  const el = e.currentTarget;
                  if (!el.src.endsWith(FALLBACK_IMG)) el.src = FALLBACK_IMG;
                }}
                className={`absolute inset-0 h-full w-full select-none object-cover object-top transition-opacity duration-300 ease ${
                  fading ? "opacity-0" : "opacity-100"
                }`}
                draggable={false}
              />
              <div className="pointer-events-none absolute inset-0 rounded-[31px] bg-[linear-gradient(180deg,oklch(1_0_0_/_0.06),transparent_22%)]" />
            </div>
          </div>
        </div>

        <div className="reveal-stagger flex flex-col gap-[14px]">
          {rightSteps.map((s, i) => (
            <Step
              key={i}
              index={i + 4}
              n={String(i + 5).padStart(2, "0")}
              h={s.h}
              p={s.p}
              align="left"
              active={active === i + 4}
              onSelect={select}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Step({
  index,
  n,
  h,
  p,
  align,
  active,
  onSelect,
}: {
  index: number;
  n: string;
  h: string;
  p: string;
  align: "left" | "right";
  active: boolean;
  onSelect: (idx: number) => void;
}) {
  const isRight = align === "right";
  return (
    <button
      type="button"
      onClick={() => onSelect(index)}
      aria-pressed={active}
      className={`group flex w-full items-start gap-[18px] rounded border p-[20px_22px] text-left transition-[border-color,background] duration-300 ease ${
        active
          ? "border-[color-mix(in_srgb,var(--accent)_45%,transparent)] bg-tint/[0.04]"
          : "border-transparent hover:border-line hover:bg-tint/[0.025]"
      } ${
        isRight
          ? "flex-row-reverse text-right max-[1100px]:flex-row max-[1100px]:text-left"
          : ""
      }`}
    >
      <div
        className={`grid h-[42px] w-[42px] flex-shrink-0 place-items-center rounded-full border font-mono text-[12.5px] transition-all duration-300 ease ${
          active
            ? "scale-[1.06] border-accent bg-accent text-accent-on"
            : "border-line text-ink-dim group-hover:scale-[1.06] group-hover:border-accent group-hover:bg-accent group-hover:text-accent-on"
        }`}
      >
        {n}
      </div>
      <div>
        <h4 className="mb-[5px] font-display text-[18.5px] font-semibold tracking-[-0.01em]">
          {h}
        </h4>
        <p className="text-[14px] text-ink-dim">{p}</p>
      </div>
    </button>
  );
}
