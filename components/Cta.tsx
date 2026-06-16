"use client";

import { useI18n } from "@/components/I18nProvider";
import SmartCta from "@/components/SmartCta";

export default function Cta() {
  const { t } = useI18n();
  return (
    <div className="px-[48px] pb-[150px] pt-[130px] max-md:px-[20px] max-md:pb-[110px] max-md:pt-[90px]">
      <div className="reveal relative mx-auto max-w-[1100px] overflow-hidden rounded-[32px] border border-line bg-surface p-[96px_48px] text-center max-md:p-[64px_24px]">
        <div className="glow-radial-strong pointer-events-none absolute left-1/2 top-[-60%] h-[520px] w-[780px] -translate-x-1/2 blur-[30px]" />
        <h2 className="relative mb-[18px] font-display text-[clamp(34px,4.6vw,58px)] font-medium leading-[1.05] tracking-[-0.03em]">
          {t("cta.titleLine1")}
          <br />
          {t("cta.titleLine2")}
        </h2>
        <p className="relative mx-auto mb-[38px] max-w-[520px] text-[17px] text-ink-dim">
          {t("cta.desc")}
        </p>
        <div className="relative flex flex-wrap justify-center gap-[14px]">
          <SmartCta size="lg" />
          <a href="#" className="btn btn-secondary">
            {t("cta.talk")} <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
