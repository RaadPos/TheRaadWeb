export type LinkCard = {
  icon: string;
  title: string;
  desc: string;
  href?: string;
  meta?: string;
};

// Simple branded card grid used by the docs / hardware / support pages.
export default function LinkCardGrid({ items }: { items: LinkCard[] }) {
  return (
    <section className="px-[48px] pb-[130px] max-md:px-[20px] max-md:pb-[90px]">
      <div className="reveal-stagger mx-auto grid max-w-content grid-cols-3 gap-[16px] max-[1100px]:grid-cols-2 max-md:grid-cols-1">
        {items.map((c) => (
          <a
            key={c.title}
            href={c.href ?? "#"}
            className="group relative flex flex-col overflow-hidden rounded-lg border border-line bg-surface p-[28px] transition-[transform,border-color] duration-[350ms] ease hover:-translate-y-[4px] hover:border-[color-mix(in_srgb,var(--accent)_50%,transparent)]"
          >
            <div className="mb-[18px] grid h-[46px] w-[46px] place-items-center rounded-[13px] bg-accent-soft text-[22px] leading-none text-accent">
              <i className={`bx ${c.icon}`} />
            </div>
            <div className="mb-[6px] flex items-center gap-[10px]">
              <h3 className="font-display text-[18px] font-semibold tracking-[-0.01em]">
                {c.title}
              </h3>
              {c.meta && (
                <span className="rounded-full border border-line bg-tint/[0.04] px-[8px] py-[2px] font-mono text-[9.5px] uppercase tracking-[0.08em] text-ink-muted">
                  {c.meta}
                </span>
              )}
            </div>
            <p className="text-[14px] text-ink-dim text-pretty">{c.desc}</p>
            <span className="mt-[16px] inline-flex items-center gap-[6px] font-mono text-[11px] uppercase tracking-[0.08em] text-accent">
              Open
              <i className="bx bx-right-arrow-alt text-[16px] transition-transform duration-200 group-hover:translate-x-[3px]" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
