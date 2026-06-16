"use client";

import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { useI18n } from "@/components/I18nProvider";

type Content = {
  eyebrow: string;
  titlePre: string;
  titleEm: string;
  desc: string;
  missionTitle: string;
  missionBody: string;
  buildTitle: string;
  buildBody: string;
  stats: [string, string][];
  values: { icon: string; title: string; desc: string }[];
  ctaTitle: string;
  ctaDesc: string;
  ctaBtn: string;
};

const C: Record<string, Content> = {
  en: {
    eyebrow: "About",
    titlePre: "A business in a box, ",
    titleEm: "for every shop.",
    desc: "Raad POS helps shop owners leave the paper notebook behind — with a smart register that tracks sales, stock, credit, and staff from one place.",
    missionTitle: "Our mission",
    missionBody:
      "Most small shops still run on paper — notebooks for sales, scraps for debts, and guesswork for stock. Raad replaces all of that with a fast, modern point of sale that any shop owner can use from day one, no training required.",
    buildTitle: "What we build",
    buildBody:
      "Raad is a complete ecosystem: deep inventory with a 7-tier unit system, strict staff roles, customer credit (dayn), expenses tied to your cash drawer, live reports, a supplier network, and plug-and-play hardware. It runs on the phone in your pocket and on a full web dashboard for the main counter.",
    stats: [
      ["600+", "Active shops"],
      ["6", "Business types supported"],
      ["7-tier", "Unit measurement system"],
    ],
    values: [
      { icon: "bx-rocket", title: "Fast by default", desc: "Checkout is built for busy counters — every tap, scan, and total is tuned for speed." },
      { icon: "bx-lock-alt", title: "Secure & yours", desc: "Your data is encrypted, backed up to the cloud, and always belongs to you." },
      { icon: "bx-box", title: "The whole widget", desc: "Software and pre-tested hardware together, so there's no setup friction for merchants." },
      { icon: "bx-globe", title: "Built for the market", desc: "Deep localization, including native Somali phrasing across the whole app." },
    ],
    ctaTitle: "Run your shop the smart way",
    ctaDesc: "Start free, or try Raad Pro free for 14 days — no card required.",
    ctaBtn: "See pricing",
  },
  so: {
    eyebrow: "Ku saabsan",
    titlePre: "Ganacsi sanduuq ku jira, ",
    titleEm: "dukaan kasta.",
    desc: "Raad POS wuxuu ka caawiyaa milkiilayaasha dukaamada inay ka tagaan buugga warqadda — kasht-rejister caqli leh oo ka raaca iibka, alaabta, deynta, iyo shaqaalaha hal meel.",
    missionTitle: "Hadafkayaga",
    missionBody:
      "Dukaamada yaryar intooda badan wali waxay ku shaqeeyaan warqad — buugaag iibka, jeexjeex deymaha, iyo malayn alaabta. Raad wuxuu kuwaas oo dhan ku beddelaa point-of-sale dhakhso ah oo casri ah oo milkiile kasta isticmaali karo maalinta koowaad, tababar la'aan.",
    buildTitle: "Waxa aan dhisno",
    buildBody:
      "Raad waa nidaam dhammaystiran: bakhaar qoto dheer oo leh nidaam cabbir 7-heer, doorar shaqaale oo adag, deyn macmiil (dayn), kharashyo ku xidhan sanduuqaaga lacagta, warbixino toos ah, shabakad alaab-qeybiye, iyo qalab si fudud isugu xidha. Wuxuu ku shaqeeyaa taleefanka jeebkaaga ku jira iyo dashboard web oo buuxa oo miiska weyn.",
    stats: [
      ["600+", "Dukaamo firfircoon"],
      ["6", "Noocyo ganacsi oo la taageero"],
      ["7-heer", "Nidaamka cabbirka"],
    ],
    values: [
      { icon: "bx-rocket", title: "Dhakhso ahaan", desc: "Lacag-bixinta waxaa loo dhisay miisaska mashquulka ah — taabasho, sawir, iyo wadar kasta waxaa loo hagaajiyay xawaare." },
      { icon: "bx-lock-alt", title: "Sugan & adigaa leh", desc: "Xogtaada waa la siriyaa, lagu kaydiyaa daruurta, oo had iyo jeer adigaa iska leh." },
      { icon: "bx-box", title: "Qalabka oo dhan", desc: "Software iyo qalab hore loo tijaabiyay oo wadajira, si aan dejin culus loogu hayn ganacsatada." },
      { icon: "bx-globe", title: "Loo dhisay suuqa", desc: "Maxalliyeyn qoto dheer, oo ay ku jirto Af-Soomaali asal ah oo abka oo dhan ah." },
    ],
    ctaTitle: "Si caqli leh u maamul dukaankaaga",
    ctaDesc: "Bilow bilaash, ama tijaabi Raad Pro bilaash 14 maalmood — kaar looma baahna.",
    ctaBtn: "Eeg qiimaha",
  },
};

export default function AboutBody() {
  const { locale } = useI18n();
  const c = C[locale] ?? C.en;

  return (
    <>
      <PageHeader
        eyebrow={c.eyebrow}
        title={
          <>
            {c.titlePre}
            <em>{c.titleEm}</em>
          </>
        }
        desc={c.desc}
      />

      <section className="px-[48px] pb-[40px] max-md:px-[20px]">
        <div className="mx-auto flex max-w-[760px] flex-col gap-[40px]">
          <div>
            <h2 className="mb-[14px] font-display text-[clamp(20px,2.6vw,26px)] font-medium tracking-[-0.02em]">
              <span className="text-accent">{c.missionTitle}</span>
            </h2>
            <p className="text-[15.5px] leading-[1.7] text-ink-dim text-pretty">{c.missionBody}</p>
          </div>
          <div>
            <h2 className="mb-[14px] font-display text-[clamp(20px,2.6vw,26px)] font-medium tracking-[-0.02em]">
              <span className="text-accent">{c.buildTitle}</span>
            </h2>
            <p className="text-[15.5px] leading-[1.7] text-ink-dim text-pretty">{c.buildBody}</p>
          </div>
        </div>
      </section>

      {/* stats */}
      <section className="px-[48px] pb-[40px] max-md:px-[20px]">
        <div className="mx-auto grid max-w-[760px] grid-cols-3 overflow-hidden rounded-lg border border-line bg-surface max-md:grid-cols-1">
          {c.stats.map(([n, l], i) => (
            <div
              key={l}
              className={`p-[28px] text-center max-md:border-b max-md:last:border-b-0 ${
                i < c.stats.length - 1 ? "border-r border-line-soft max-md:border-r-0" : ""
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
          {c.values.map((v) => (
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
            <h3 className="font-display text-[21px] font-semibold tracking-[-0.01em]">{c.ctaTitle}</h3>
            <p className="mt-[4px] text-[14px] text-ink-dim">{c.ctaDesc}</p>
          </div>
          <Link href="/pricing" className="btn btn-primary relative max-md:w-full max-md:justify-center">
            <i className="bx bx-rocket text-[17px]" /> {c.ctaBtn}
          </Link>
        </div>
      </section>
    </>
  );
}
