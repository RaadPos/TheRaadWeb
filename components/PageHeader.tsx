import { ReactNode } from "react";

// Centered page header for routed pages, clears the fixed nav and
// uses the same eyebrow / display-title treatment as the landing sections.
export default function PageHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: ReactNode;
  desc: string;
}) {
  return (
    <section className="relative overflow-clip px-[48px] pb-[40px] pt-[170px] text-center max-md:px-[20px] max-md:pt-[140px]">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="bg-grid absolute inset-[-2px]" />
      </div>
      <div className="relative z-[1] mx-auto max-w-[820px]">
        <div className="eyebrow reveal in">{eyebrow}</div>
        <h1 className="reveal in font-display text-[clamp(40px,6vw,72px)] font-medium leading-[1.02] tracking-[-0.03em] text-balance [&_em]:italic [&_em]:font-normal [&_em]:text-accent">
          {title}
        </h1>
        <p className="reveal in mx-auto mt-[18px] max-w-[560px] text-[17px] text-ink-dim text-pretty">
          {desc}
        </p>
      </div>
    </section>
  );
}
