"use client";

import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SetupSteps from "@/components/SetupSteps";
import Callout from "@/components/Callout";
import SupportCta from "@/components/SupportCta";
import { useI18n } from "@/components/I18nProvider";
import { getDocLocalized, headingId, type Doc, type DocBlock } from "@/lib/docs";

function Block({ block }: { block: DocBlock }) {
  switch (block.type) {
    case "p":
      return <p className="text-[15.5px] leading-[1.7] text-ink-dim text-pretty">{block.text}</p>;
    case "list":
      return (
        <ul className="flex flex-col gap-[10px]">
          {block.items.map((it, i) => (
            <li key={i} className="flex items-start gap-[11px] text-[15px] text-ink-dim">
              <i className="bx bx-check mt-[3px] flex-shrink-0 text-[16px] text-accent" />
              <span className="text-pretty">{it}</span>
            </li>
          ))}
        </ul>
      );
    case "steps":
      return <SetupSteps steps={block.items} />;
    case "note":
      return (
        <Callout variant={block.variant ?? "info"} title={block.title}>
          {block.text}
        </Callout>
      );
  }
}

export default function DocArticleBody({ slug }: { slug: string }) {
  const { locale, ts } = useI18n();
  const doc = getDocLocalized(slug, locale);
  if (!doc) return null;

  const related = (doc.related ?? [])
    .map((s) => getDocLocalized(s, locale))
    .filter((d): d is Doc => Boolean(d));

  return (
    <>
      <PageHeader eyebrow={ts(doc.category)} title={doc.title} desc={doc.description} />

      <section className="px-[48px] pb-[40px] max-md:px-[20px]">
        <div className="mx-auto max-w-[760px]">
          {/* breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-[28px] flex flex-wrap items-center gap-[8px] text-[13px] text-ink-muted">
            <Link href="/docs" className="transition-colors hover:text-accent">
              {ts("Docs")}
            </Link>
            <i className="bx bx-chevron-right text-[15px]" />
            <span>{ts(doc.category)}</span>
            <i className="bx bx-chevron-right text-[15px]" />
            <span className="text-ink-dim">{doc.title}</span>
            <span className="ml-auto font-mono text-[11px] uppercase tracking-[0.07em]">
              {doc.readMinutes} {ts("min read")}
            </span>
          </nav>

          {/* on this page */}
          {doc.sections.length > 1 && (
            <div className="mb-[36px] rounded-lg border border-line-soft bg-surface p-[18px_20px]">
              <span className="mb-[10px] block font-mono text-[10.5px] uppercase tracking-[0.08em] text-ink-muted">
                {ts("On this page")}
              </span>
              <ul className="flex flex-col gap-[8px]">
                {doc.sections.map((s) => (
                  <li key={s.heading}>
                    <a
                      href={`#${headingId(s.heading)}`}
                      className="inline-flex items-center gap-[8px] text-[14px] text-ink-dim transition-colors hover:text-accent"
                    >
                      <i className="bx bx-right-arrow-alt text-[15px] text-accent" />
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* article body */}
          <article className="flex flex-col gap-[44px]">
            {doc.sections.map((section) => (
              <section key={section.heading} id={headingId(section.heading)} className="scroll-mt-[120px]">
                <h2 className="mb-[16px] font-display text-[clamp(22px,3vw,28px)] font-medium tracking-[-0.02em]">
                  {section.heading}
                </h2>
                <div className="flex flex-col gap-[16px]">
                  {section.blocks.map((b, i) => (
                    <Block key={i} block={b} />
                  ))}
                </div>
              </section>
            ))}
          </article>

          {/* related */}
          {related.length > 0 && (
            <div className="mt-[48px] border-t border-line-soft pt-[28px]">
              <span className="mb-[16px] block font-mono text-[11px] uppercase tracking-[0.08em] text-ink-muted">
                {ts("Related articles")}
              </span>
              <div className="grid grid-cols-3 gap-[12px] max-md:grid-cols-1">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/docs/${r.slug}`}
                    className="group flex items-center gap-[12px] rounded-[14px] border border-line bg-surface p-[16px] transition-[border-color] duration-200 hover:border-[color-mix(in_srgb,var(--accent)_50%,transparent)]"
                  >
                    <i className={`bx ${r.icon} text-[20px] text-accent`} />
                    <span className="text-[14px] font-medium text-pretty">{r.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-[40px]">
            <Link
              href="/docs"
              className="inline-flex items-center gap-[7px] text-[14px] text-ink-dim transition-colors hover:text-accent"
            >
              <i className="bx bx-left-arrow-alt text-[18px]" /> {ts("All documentation")}
            </Link>
          </div>
        </div>
      </section>

      <SupportCta />
    </>
  );
}
