export type LegalSection = {
  heading: string;
  body?: string[];
  list?: string[];
};

// Renders a numbered legal document (privacy, terms) with consistent styling.
export default function LegalContent({
  updated,
  intro,
  sections,
}: {
  updated: string;
  intro?: string;
  sections: LegalSection[];
}) {
  return (
    <section className="px-[48px] pb-[120px] max-md:px-[20px] max-md:pb-[80px]">
      <div className="mx-auto max-w-[760px]">
        <p className="mb-[24px] font-mono text-[12px] uppercase tracking-[0.08em] text-ink-muted">
          Last updated: {updated}
        </p>
        {intro && (
          <p className="mb-[40px] text-[15.5px] leading-[1.7] text-ink-dim text-pretty">
            {intro}
          </p>
        )}

        <div className="flex flex-col gap-[40px]">
          {sections.map((s, i) => (
            <section key={s.heading} className="scroll-mt-[120px]">
              <h2 className="mb-[14px] font-display text-[clamp(20px,2.6vw,26px)] font-medium tracking-[-0.02em]">
                <span className="text-accent">{i + 1}.</span> {s.heading}
              </h2>
              <div className="flex flex-col gap-[14px]">
                {s.body?.map((p, j) => (
                  <p key={j} className="text-[15px] leading-[1.7] text-ink-dim text-pretty">
                    {p}
                  </p>
                ))}
                {s.list && (
                  <ul className="flex flex-col gap-[10px]">
                    {s.list.map((it, j) => (
                      <li key={j} className="flex items-start gap-[11px] text-[15px] text-ink-dim">
                        <i className="bx bx-check mt-[3px] flex-shrink-0 text-[16px] text-accent" />
                        <span className="text-pretty">{it}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
