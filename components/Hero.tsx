"use client";

import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";
import SmartCta from "@/components/SmartCta";

// ────────────────────────────────────────────────────────────────
// Drop a real screenshot of the Raad app here and it fills the phone
// perfectly. Keep a tall, portrait phone screenshot (~9:19.5).
// ────────────────────────────────────────────────────────────────
const APP_SCREENSHOT = "/assets/homescreen.jpeg";

export default function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center overflow-clip px-6 pt-[150px] text-center">
      {/* animated background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="bg-grid absolute inset-[-2px]" />
        <div className="bg-aurora absolute inset-0 opacity-[var(--glow)] blur-[72px]">
          <span className="aurora-a1 absolute left-[-14vw] top-[-16vh] h-[46vh] w-[62vw] rounded-full motion-safe:animate-drift1" />
          <span className="aurora-a2 absolute right-[-16vw] top-[-8vh] h-[44vh] w-[54vw] rounded-full motion-safe:animate-drift2" />
          <span className="aurora-a3 absolute left-[26vw] top-[34vh] h-[34vh] w-[48vw] rounded-full motion-safe:animate-drift3" />
        </div>
        <div id="stars" className="absolute inset-0" />
        <div className="bg-beam absolute left-1/2 top-0 h-[38vh] w-px opacity-0 motion-safe:animate-beam" />
        <div className="bg-beam absolute left-1/2 top-0 h-[38vh] w-px opacity-0 [animation-delay:4.5s] motion-safe:animate-beam" />
      </div>

      {/* content */}
      <div className="relative z-[1] flex max-w-[920px] flex-col items-center">
        <h1 className="reveal in mb-[26px] font-display text-[clamp(46px,7.4vw,96px)] font-medium leading-[1.0] tracking-[-0.04em] text-balance">
          {t("hero.titleLine1")}
          <br />
          {t("hero.titlePre")}
          <span className="accent-text pr-[0.06em] font-normal italic">
            {t("hero.titleAccent")}
          </span>
        </h1>
        <p className="reveal in mb-[38px] max-w-[620px] text-[clamp(16px,1.6vw,19px)] text-ink-dim text-pretty">
          {t("hero.leadPre")}
          <em className="italic text-ink">{t("hero.leadEm")}</em>
          {t("hero.leadPost")}
        </p>
        <div className="reveal in mb-[54px] flex flex-wrap justify-center gap-[14px]">
          <SmartCta size="lg" />
          <Link href="/demo" className="btn btn-secondary">
            {t("hero.ctaDemo")}
            <span className="arrow">→</span>
          </Link>
        </div>
        <div className="reveal in mb-[64px] flex flex-wrap items-stretch justify-center">
          <Stat num="7" label={t("hero.statBiz")} />
          <Stat num="7" suffix="-tier" label={t("hero.statUnits")} />
          <Stat num="5" suffix=" min" label={t("hero.statSetup")} last />
        </div>
      </div>

      {/* phone stage */}
      <div className="relative z-[1] flex w-[min(980px,100%)] justify-center">
        <div className="glow-radial pointer-events-none absolute bottom-[-12%] left-1/2 h-[560px] w-[760px] -translate-x-1/2 opacity-[var(--glow)] blur-[38px]" />
        <div id="phoneWrap" className="relative transition-transform duration-[350ms] ease">
          <FloatCard
            className="left-[-185px] top-[9%]"
            icon="bx-trending-up"
            label={t("hero.cardToday")}
            value="+ $1,284"
          />
          <FloatCard
            className="bottom-[24%] right-[-180px] [animation-delay:2.4s]"
            icon="bx-check-circle"
            label={t("hero.cardDaynPaid")}
            value="Hassan Ali"
          />
          <div className="phone-shell relative w-[min(360px,82vw)] rounded-[46px] p-[11px] shadow-[0_-1px_0_oklch(1_0_0_/_0.22),0_40px_90px_oklch(0_0_0_/_0.55),0_0_0_1px_rgb(var(--tint)/0.07)]">
            <div className="relative aspect-[9/19.5] overflow-hidden rounded-[36px] border border-tint/[0.06] bg-[oklch(0.13_0.01_260)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={APP_SCREENSHOT}
                alt="Raad POS app, today's dashboard"
                className="absolute inset-0 h-full w-full select-none object-cover object-top"
                draggable={false}
              />
              {/* subtle screen highlight for a glassy, realistic feel */}
              <div className="pointer-events-none absolute inset-0 rounded-[36px] bg-[linear-gradient(180deg,oklch(1_0_0_/_0.06),transparent_22%)]" />
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[180px] bg-[linear-gradient(180deg,transparent,var(--bg)_86%)]" />
    </section>
  );
}

function Stat({
  num,
  suffix,
  label,
  last,
}: {
  num: string;
  suffix?: string;
  label: string;
  last?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-[4px] px-[38px] ${
        last ? "" : "border-r border-line"
      }`}
    >
      <span
        className="stat-num font-display text-[30px] font-semibold tracking-[-0.02em]"
        data-count={num}
        {...(suffix ? { "data-suffix": suffix } : {})}
      >
        0
      </span>
      <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-muted">
        {label}
      </span>
    </div>
  );
}

function FloatCard({
  className,
  icon,
  label,
  value,
}: {
  className: string;
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <div
      className={`absolute z-[2] rounded-[16px] border border-line bg-[color-mix(in_srgb,var(--surface)_90%,transparent)] px-[17px] py-[13px] shadow-[0_18px_44px_oklch(0_0_0_/_0.3)] backdrop-blur-[14px] motion-safe:animate-floaty max-md:hidden ${className}`}
    >
      <div className="flex items-center gap-[12px] text-left">
        <div className="grid h-[36px] w-[36px] place-items-center rounded-[11px] bg-accent-soft text-[17px] text-accent">
          <i className={`bx ${icon}`} />
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.09em] text-ink-muted">
            {label}
          </div>
          <div className="font-display text-[16px] font-semibold tracking-[-0.01em]">
            {value}
          </div>
        </div>
      </div>
    </div>
  );
}
