"use client";

import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { useI18n } from "@/components/I18nProvider";
import { getFeaturesLocalized } from "@/lib/features";

export default function FeaturesIndexBody() {
  const { locale, ts } = useI18n();
  const features = getFeaturesLocalized(locale);

  return (
    <>
      <PageHeader
        eyebrow={ts("Features")}
        title={
          <>
            {ts("Everything your shop ")}
            <em>{ts("runs on.")}</em>
          </>
        }
        desc={ts(
          "A complete Business-in-a-Box, from barcode checkout to credit, staff control, and reports. Tap any feature to see exactly how it works."
        )}
      />

      <section className="px-[48px] pb-[60px] max-md:px-[20px]">
        <div className="reveal-stagger mx-auto grid max-w-content grid-cols-3 gap-[16px] max-[1100px]:grid-cols-2 max-md:grid-cols-1">
          {features.map((f) => (
            <Link
              key={f.slug}
              href={`/features/${f.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-line bg-surface p-[26px] transition-[transform,border-color] duration-[350ms] ease hover:-translate-y-[4px] hover:border-[color-mix(in_srgb,var(--accent)_50%,transparent)]"
            >
              <div className="mb-[18px] flex items-center justify-between">
                <span className="grid h-[48px] w-[48px] place-items-center rounded-[13px] bg-accent-soft text-[24px] leading-none text-accent">
                  <i className={`bx ${f.icon}`} />
                </span>
                <span className="rounded-full border border-line bg-tint/[0.04] px-[10px] py-[4px] font-mono text-[9.5px] uppercase tracking-[0.09em] text-ink-muted">
                  {f.tag}
                </span>
              </div>
              <h3 className="mb-[7px] font-display text-[18px] font-semibold tracking-[-0.01em]">
                {f.title}
              </h3>
              <p className="flex-1 text-[14px] text-ink-dim text-pretty">{f.short}</p>
              <span className="mt-[18px] inline-flex items-center gap-[6px] font-mono text-[11px] uppercase tracking-[0.08em] text-accent">
                {ts("Learn more")}
                <i className="bx bx-right-arrow-alt text-[16px] transition-transform duration-200 group-hover:translate-x-[3px]" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-[48px] pb-[130px] max-md:px-[20px] max-md:pb-[90px]">
        <div className="reveal relative mx-auto flex max-w-content items-center gap-[24px] overflow-hidden rounded-lg border border-line bg-surface p-[36px_40px] max-md:flex-col max-md:p-[28px] max-md:text-center">
          <div className="glow-radial-pro pointer-events-none absolute left-[-10%] top-[-120%] h-[300px] w-[460px] blur-[26px]" />
          <div className="relative flex-1">
            <h3 className="font-display text-[21px] font-semibold tracking-[-0.01em]">
              {ts("See it all in one place")}
            </h3>
            <p className="mt-[4px] text-[14px] text-ink-dim">
              {ts("Start free, or try every Pro feature free for 14 days, no card required.")}
            </p>
          </div>
          <Link href="/pricing" className="btn btn-primary relative max-md:w-full max-md:justify-center">
            <i className="bx bx-rocket text-[17px]" /> {ts("See pricing")}
          </Link>
        </div>
      </section>
    </>
  );
}
