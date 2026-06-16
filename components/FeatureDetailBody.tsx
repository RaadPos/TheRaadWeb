"use client";

import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Callout from "@/components/Callout";
import SupportCta from "@/components/SupportCta";
import { useI18n } from "@/components/I18nProvider";
import { getFeatureLocalized } from "@/lib/features";

export default function FeatureDetailBody({ slug }: { slug: string }) {
  const { locale, ts } = useI18n();
  const feature = getFeatureLocalized(slug, locale);
  if (!feature) return null;

  return (
    <>
      <PageHeader eyebrow={ts("Feature")} title={feature.title} desc={feature.lead} />

      <section className="px-[48px] pb-[40px] max-md:px-[20px]">
        <div className="reveal-stagger mx-auto grid max-w-[1080px] grid-cols-3 gap-[16px] max-[900px]:grid-cols-2 max-md:grid-cols-1">
          {feature.points.map((p) => (
            <div key={p.title} className="rounded-lg border border-line bg-surface p-[26px]">
              <div className="mb-[16px] grid h-[46px] w-[46px] place-items-center rounded-[13px] bg-accent-soft text-[22px] leading-none text-accent">
                <i className={`bx ${p.icon}`} />
              </div>
              <h3 className="mb-[6px] font-display text-[17px] font-semibold tracking-[-0.01em]">
                {p.title}
              </h3>
              <p className="text-[14px] text-ink-dim text-pretty">{p.desc}</p>
            </div>
          ))}
        </div>

        {(feature.note || feature.related) && (
          <div className="mx-auto mt-[24px] flex max-w-[1080px] flex-col gap-[14px]">
            {feature.note && (
              <Callout variant="info" title={ts("Good to know")}>
                {feature.note}
              </Callout>
            )}
            {feature.related && (
              <Callout variant="tip" icon="bx-link-external" title={ts("Related")}>
                <Link
                  href={feature.related.href}
                  className="inline-flex items-center gap-[6px] font-medium text-accent hover:underline"
                >
                  {feature.related.label}
                  <i className="bx bx-right-arrow-alt text-[16px]" />
                </Link>
              </Callout>
            )}
          </div>
        )}

        <div className="mx-auto mt-[34px] max-w-[1080px]">
          <Link
            href="/features"
            className="inline-flex items-center gap-[7px] text-[14px] text-ink-dim transition-colors hover:text-accent"
          >
            <i className="bx bx-left-arrow-alt text-[18px]" /> {ts("All features")}
          </Link>
        </div>
      </section>

      <div className="pt-[40px]" />
      <SupportCta />
    </>
  );
}
