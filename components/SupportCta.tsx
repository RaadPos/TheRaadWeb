"use client";

import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";

// Reusable "need help?" banner that routes to the support page.
export default function SupportCta() {
  const { ts } = useI18n();
  return (
    <section className="px-[48px] pb-[130px] max-md:px-[20px] max-md:pb-[90px]">
      <div className="reveal relative mx-auto flex max-w-content items-center gap-[24px] overflow-hidden rounded-lg border border-line bg-surface p-[36px_40px] max-md:flex-col max-md:p-[28px] max-md:text-center">
        <div className="glow-radial-pro pointer-events-none absolute left-[-10%] top-[-120%] h-[300px] w-[460px] blur-[26px]" />
        <div className="relative grid h-[54px] w-[54px] flex-shrink-0 place-items-center rounded-[15px] bg-accent-soft text-[26px] leading-none text-accent">
          <i className="bx bx-support" />
          
        </div>
        <div className="relative flex-1">
          <h3 className="font-display text-[21px] font-semibold tracking-[-0.01em]">
            {ts("Need a hand setting up?")}
          </h3>
          <p className="mt-[4px] text-[14px] text-ink-dim">
            {ts("Our team can walk you through connecting any device, just reach out.")}
          </p>
        </div>
        <Link href="/support" className="btn btn-primary relative max-md:w-full max-md:justify-center">
          {ts("Contact support")} <span className="arrow">→</span>
        </Link>
      </div>
    </section>
  );
}
