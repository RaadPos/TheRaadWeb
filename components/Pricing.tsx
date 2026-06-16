"use client";

import { ReactNode, useState } from "react";
import { useI18n } from "@/components/I18nProvider";
import SmartCta from "@/components/SmartCta";

const PRO_PRICE = { annual: "$49.99", monthly: "$4.99" };

export default function Pricing() {
  const { t, raw } = useI18n();
  const [annual, setAnnual] = useState(true);

  const starterFeats = (raw("pricing.starterFeats") as string[]) ?? [];
  const proFeats = (raw("pricing.proFeats") as string[]) ?? [];

  const proPrice = annual ? PRO_PRICE.annual : PRO_PRICE.monthly;
  const proPer = annual ? t("pricing.perYear") : t("pricing.perMonth");
  const proNote = annual ? t("pricing.proNoteAnnual") : t("pricing.proNoteMonthly");

  return (
    <section id="pricing" className="bg-bg px-[48px] py-[130px] max-md:px-[20px] max-md:py-[90px]">
      <div className="sec-head">
        <div className="eyebrow reveal">{t("pricing.eyebrow")}</div>
        <h2 className="sec-title reveal">
          {t("pricing.titlePre")}
          <em>{t("pricing.titleEm")}</em>
          {t("pricing.titlePost")}
        </h2>
        <p className="sec-desc reveal">{t("pricing.desc")}</p>
      </div>

      {/* Annual / Monthly toggle */}
      <div className="reveal mx-auto mb-[40px] flex w-fit items-center gap-[4px] rounded-full border border-line bg-surface p-[5px]">
        <button
          onClick={() => setAnnual(true)}
          className={`flex items-center gap-[7px] rounded-full px-[18px] py-[9px] text-[13.5px] font-medium transition-all duration-200 ${
            annual ? "bg-accent text-accent-on" : "text-ink-dim hover:text-ink"
          }`}
        >
          {t("pricing.annual")}
          <span
            className={`rounded-full border px-[7px] py-[2px] font-mono text-[9.5px] font-semibold uppercase tracking-[0.06em] ${
              annual
                ? "border-accent-on/30 text-accent-on"
                : "border-[color-mix(in_srgb,var(--accent)_45%,transparent)] text-accent"
            }`}
          >
            {t("pricing.save")}
          </span>
        </button>
        <button
          onClick={() => setAnnual(false)}
          className={`rounded-full px-[18px] py-[9px] text-[13.5px] font-medium transition-all duration-200 ${
            !annual ? "bg-accent text-accent-on" : "text-ink-dim hover:text-ink"
          }`}
        >
          {t("pricing.monthly")}
        </button>
      </div>

      <div className="reveal-stagger mx-auto grid max-w-[920px] grid-cols-2 items-stretch gap-[22px] max-md:grid-cols-1">
        {/* Starter */}
        <Card tier={t("pricing.starterTier")} badge={t("pricing.starterBadge")}>
          <div className="relative mb-[8px] flex items-baseline gap-[8px]">
            <span className="font-display text-[56px] font-semibold leading-none tracking-[-0.03em]">
              $0
            </span>
            <span className="text-[14px] text-ink-muted">{t("pricing.perMonth")}</span>
          </div>
          <p className="relative mb-[30px] text-[14px] text-ink-dim">{t("pricing.starterSub")}</p>
          <FeatList feats={starterFeats} />
          <div className="relative mt-auto">
            <SmartCta variant="outline" size="lg" className="w-full" />
          </div>
        </Card>

        {/* Raad Pro */}
        <Card tier={t("pricing.proTier")} pro popular={t("pricing.proPopular")}>
          <div className="relative mb-[4px] flex items-baseline gap-[8px]">
            <span className="font-display text-[56px] font-semibold leading-none tracking-[-0.03em]">
              {proPrice}
            </span>
            <span className="text-[14px] text-ink-muted">{proPer}</span>
          </div>
          <p className="relative mb-[18px] font-mono text-[11.5px] text-ink-muted">{proNote}</p>
          <p className="relative mb-[30px] text-[14px] text-ink-dim">{t("pricing.proSub")}</p>
          <FeatList feats={proFeats} />
          <div className="relative mt-auto">
            <SmartCta variant="solid" size="lg" className="w-full" />
          </div>
        </Card>
      </div>

      <p className="reveal mt-[26px] text-center text-[13px] text-ink-muted">{t("pricing.note")}</p>
    </section>
  );
}

function Card({
  tier,
  badge,
  pro,
  popular,
  children,
}: {
  tier: string;
  badge?: string;
  pro?: boolean;
  popular?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`group relative flex flex-col rounded-lg border bg-surface p-[40px_36px_36px] transition-[transform,border-color] duration-[350ms] ease hover:-translate-y-[6px] ${
        pro
          ? "overflow-hidden border-[color-mix(in_srgb,var(--accent)_60%,transparent)]"
          : "border-line"
      }`}
    >
      {pro && (
        <div className="glow-radial-pro pointer-events-none absolute left-1/2 top-[-45%] h-[340px] w-[520px] -translate-x-1/2 blur-[26px]" />
      )}
      {popular && (
        <div className="absolute right-[22px] top-[22px] rounded-full bg-accent px-[13px] py-[6px] font-mono text-[10px] font-semibold uppercase tracking-[0.09em] text-accent-on">
          {popular}
        </div>
      )}
      <div className="relative mb-[18px] flex items-center gap-[10px]">
        <span
          className={`font-mono text-[11.5px] uppercase tracking-[0.1em] ${
            pro ? "text-accent" : "text-ink-muted"
          }`}
        >
          {tier}
        </span>
        {badge && (
          <span className="rounded-[7px] bg-tint/[0.08] px-[8px] py-[3px] font-mono text-[9.5px] font-semibold uppercase tracking-[0.1em] text-ink-muted">
            {badge}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

function FeatList({ feats }: { feats: string[] }) {
  return (
    <ul className="relative mb-[36px] flex flex-col gap-[13px] border-t border-line-soft pt-[26px]">
      {feats.map((f, i) => (
        <li key={i} className="flex items-start gap-[11px] text-[14.5px] text-ink-dim">
          <i className="bx bx-check mt-[2px] flex-shrink-0 text-[16px] text-accent" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
  );
}
