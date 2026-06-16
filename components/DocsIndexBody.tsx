"use client";

import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { useI18n } from "@/components/I18nProvider";
import { DOCS, DOC_CATEGORIES, docsByCategoryLocalized } from "@/lib/docs";

export default function DocsIndexBody() {
  const { locale, ts } = useI18n();

  return (
    <>
      <PageHeader
        eyebrow={ts("Documentation")}
        title={
          <>
            {ts("Learn Raad, ")}
            <em>{ts("feature by feature.")}</em>
          </>
        }
        desc={ts(
          "Clear, practical guides for everything Raad does — from your first sale to managing staff, credit, and the desktop Web POS."
        )}
      />

      <section className="px-[48px] pb-[120px] max-md:px-[20px] max-md:pb-[80px]">
        <div className="mx-auto flex max-w-content flex-col gap-[56px]">
          {DOC_CATEGORIES.map((category) => {
            const docs = docsByCategoryLocalized(category, locale);
            if (docs.length === 0) return null;
            return (
              <div key={category}>
                <div className="mb-[20px] flex items-center gap-[14px]">
                  <h2 className="font-display text-[20px] font-semibold tracking-[-0.01em]">
                    {ts(category)}
                  </h2>
                  <span className="h-px flex-1 bg-line-soft" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-muted">
                    {docs.length} {ts(docs.length === 1 ? "article" : "articles")}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-[16px] max-[1100px]:grid-cols-2 max-md:grid-cols-1">
                  {docs.map((d) => (
                    <Link
                      key={d.slug}
                      href={`/docs/${d.slug}`}
                      className="group flex flex-col rounded-lg border border-line bg-surface p-[24px] transition-[transform,border-color] duration-[350ms] ease hover:-translate-y-[4px] hover:border-[color-mix(in_srgb,var(--accent)_50%,transparent)]"
                    >
                      <div className="mb-[16px] flex items-center justify-between">
                        <span className="grid h-[44px] w-[44px] place-items-center rounded-[12px] bg-accent-soft text-[22px] leading-none text-accent">
                          <i className={`bx ${d.icon}`} />
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.07em] text-ink-muted">
                          {d.readMinutes} {ts("min")}
                        </span>
                      </div>
                      <h3 className="mb-[6px] font-display text-[16.5px] font-semibold tracking-[-0.01em]">
                        {d.title}
                      </h3>
                      <p className="flex-1 text-[13.5px] text-ink-dim text-pretty">
                        {d.description}
                      </p>
                      <span className="mt-[16px] inline-flex items-center gap-[6px] font-mono text-[11px] uppercase tracking-[0.08em] text-accent">
                        {ts("Read")}
                        <i className="bx bx-right-arrow-alt text-[16px] transition-transform duration-200 group-hover:translate-x-[3px]" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-[48px] max-w-content text-[13px] text-ink-muted">
          {DOCS.length} {ts("articles")} · {ts("Can't find what you need?")}{" "}
          <Link href="/support" className="text-accent hover:underline">
            {ts("Contact support")}
          </Link>
          .
        </p>
      </section>
    </>
  );
}
