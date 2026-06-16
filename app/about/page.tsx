import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About — Raad POS",
  description:
    "Raad POS is a Business-in-a-Box for shop owners — moving businesses from paper notebooks to a fast, secure digital register.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: "bx-rocket", title: "Fast by default", desc: "Checkout is built for busy counters — every tap, scan, and total is tuned for speed." },
  { icon: "bx-lock-alt", title: "Secure & yours", desc: "Your data is encrypted, backed up to the cloud, and always belongs to you." },
  { icon: "bx-box", title: "The whole widget", desc: "Software and pre-tested hardware together, so there's no setup friction for merchants." },
  { icon: "bx-globe", title: "Built for the market", desc: "Deep localization, including native Somali phrasing across the whole app." },
];

const stats = [
  ["12,800+", "Active shops"],
  ["6", "Business types supported"],
  ["7-tier", "Unit measurement system"],
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About"
        title={
          <>
            A business in a box, <em>for every shop.</em>
          </>
        }
        desc="Raad POS helps shop owners leave the paper notebook behind — with a smart register that tracks sales, stock, credit, and staff from one place."
      />

      <section className="px-[48px] pb-[40px] max-md:px-[20px]">
        <div className="mx-auto max-w-[760px] flex flex-col gap-[40px]">
          <div>
            <h2 className="mb-[14px] font-display text-[clamp(20px,2.6vw,26px)] font-medium tracking-[-0.02em]">
              <span className="text-accent">Our mission</span>
            </h2>
            <p className="text-[15.5px] leading-[1.7] text-ink-dim text-pretty">
              Most small shops still run on paper — notebooks for sales, scraps for debts,
              and guesswork for stock. Raad replaces all of that with a fast, modern point
              of sale that any shop owner can use from day one, no training required.
            </p>
          </div>
          <div>
            <h2 className="mb-[14px] font-display text-[clamp(20px,2.6vw,26px)] font-medium tracking-[-0.02em]">
              <span className="text-accent">What we build</span>
            </h2>
            <p className="text-[15.5px] leading-[1.7] text-ink-dim text-pretty">
              Raad is a complete ecosystem: deep inventory with a 7-tier unit system, strict
              staff roles, customer credit (dayn), expenses tied to your cash drawer, live
              reports, a supplier network, and plug-and-play hardware. It runs on the phone
              in your pocket and on a full web dashboard for the main counter.
            </p>
          </div>
        </div>
      </section>

      {/* stats */}
      <section className="px-[48px] pb-[40px] max-md:px-[20px]">
        <div className="mx-auto grid max-w-[760px] grid-cols-3 overflow-hidden rounded-lg border border-line bg-surface max-md:grid-cols-1">
          {stats.map(([n, l], i) => (
            <div
              key={l}
              className={`p-[28px] text-center max-md:border-b max-md:last:border-b-0 ${
                i < stats.length - 1 ? "border-r border-line-soft max-md:border-r-0" : ""
              }`}
            >
              <div className="font-display text-[30px] font-semibold tracking-[-0.02em] text-accent">
                {n}
              </div>
              <div className="mt-[4px] font-mono text-[11px] uppercase tracking-[0.08em] text-ink-muted">
                {l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* values */}
      <section className="px-[48px] pb-[60px] max-md:px-[20px]">
        <div className="mx-auto grid max-w-[760px] grid-cols-2 gap-[16px] max-md:grid-cols-1">
          {values.map((v) => (
            <div key={v.title} className="rounded-lg border border-line bg-surface p-[24px]">
              <div className="mb-[14px] grid h-[44px] w-[44px] place-items-center rounded-[12px] bg-accent-soft text-[22px] leading-none text-accent">
                <i className={`bx ${v.icon}`} />
              </div>
              <h3 className="mb-[6px] font-display text-[17px] font-semibold tracking-[-0.01em]">
                {v.title}
              </h3>
              <p className="text-[14px] text-ink-dim text-pretty">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-[48px] pb-[130px] max-md:px-[20px] max-md:pb-[90px]">
        <div className="reveal relative mx-auto flex max-w-[760px] items-center gap-[24px] overflow-hidden rounded-lg border border-line bg-surface p-[36px_40px] max-md:flex-col max-md:p-[28px] max-md:text-center">
          <div className="glow-radial-pro pointer-events-none absolute left-[-10%] top-[-120%] h-[300px] w-[460px] blur-[26px]" />
          <div className="relative flex-1">
            <h3 className="font-display text-[21px] font-semibold tracking-[-0.01em]">
              Run your shop the smart way
            </h3>
            <p className="mt-[4px] text-[14px] text-ink-dim">
              Start free, or try Raad Pro free for 14 days — no card required.
            </p>
          </div>
          <Link href="/pricing" className="btn btn-primary relative max-md:w-full max-md:justify-center">
            <i className="bx bx-rocket text-[17px]" /> See pricing
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
