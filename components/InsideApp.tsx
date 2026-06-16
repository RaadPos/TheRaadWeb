"use client";

import { useI18n } from "@/components/I18nProvider";

const ledger = [
  { in: "HA", name: "Hassan Ali", date: "since 02 Jun", amt: "$32.00", part: false },
  { in: "FM", name: "Fartun Mohamed", date: "since 05 Jun", amt: "$18.50", part: true },
  { in: "AY", name: "Abdi Yusuf", date: "since 08 Jun", amt: "$24.00", part: false },
];
const chart = [38, 60, 46, 78, 64, 92, 70];

export default function InsideApp() {
  const { t } = useI18n();
  return (
    <section id="inside" className="px-[48px] py-[130px] max-md:px-[20px] max-md:py-[90px]">
      <div className="sec-head">
        <div className="eyebrow reveal">{t("inside.eyebrow")}</div>
        <h2 className="sec-title reveal">
          {t("inside.titlePre")}
          <em>{t("inside.titleEm")}</em>
        </h2>
        <p className="sec-desc reveal">{t("inside.desc")}</p>
      </div>

      <div className="reveal-stagger mx-auto grid max-w-[1240px] grid-cols-4 gap-[16px] [grid-auto-rows:minmax(190px,auto)] max-[1100px]:grid-cols-2 max-md:grid-cols-1">
        {/* Dayn — big tile */}
        <Bento
          className="col-span-2 row-span-2 max-[1100px]:row-auto max-md:col-auto"
          kicker={t("inside.daynKicker")}
          kickerIcon="bx-wallet"
          title={t("inside.daynTitle")}
          desc={t("inside.daynDesc")}
        >
          <div className="mt-auto pt-[24px]">
            <div className="rounded-[16px] border border-line-soft bg-bg-2 p-[16px]">
              <div className="mb-[6px] flex items-center justify-between">
                <span className="font-display text-[14px] font-semibold">
                  {t("inside.daynOpen")}
                </span>
                <span className="font-mono text-[11px] text-ink-muted">
                  {t("inside.daynSummary")}
                </span>
              </div>
              {ledger.map((r) => (
                <div
                  key={r.in}
                  className="flex items-center gap-[12px] border-b border-line-soft py-[11px] last:border-none last:pb-[2px]"
                >
                  <div className="grid h-[32px] w-[32px] flex-shrink-0 place-items-center rounded-full border border-line bg-surface-2 font-display text-[12px] font-semibold text-ink-dim">
                    {r.in}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[13.5px] font-medium">{r.name}</div>
                    <div className="font-mono text-[10.5px] text-ink-muted">
                      {r.date}
                    </div>
                  </div>
                  <div
                    className={`font-display text-[13.5px] font-semibold ${
                      r.part ? "text-good" : ""
                    }`}
                  >
                    {r.amt}
                    {r.part ? ` ${t("inside.daynLeft")}` : ""}
                  </div>
                  <span className="inline-flex flex-shrink-0 items-center gap-[5px] whitespace-nowrap rounded-full border border-[color-mix(in_srgb,var(--accent)_40%,transparent)] bg-accent-soft px-[12px] py-[6px] text-[11.5px] font-medium text-accent">
                    <i className="bx bxl-whatsapp" /> {t("inside.daynRemind")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Bento>

        {/* Inventory — wide tile */}
        <Bento
          className="col-span-2 max-md:col-auto"
          kicker={t("inside.invKicker")}
          kickerIcon="bx-package"
          title={t("inside.invTitle")}
          desc={t("inside.invDesc")}
        >
          <div className="mt-auto flex flex-col gap-[9px] pt-[20px]">
            <InvRow name="Rice 25kg" width={72} qty={`36 ${t("inside.invLeft")}`} />
            <InvRow name="Cooking oil 5L" width={12} low lowLabel={t("inside.invLow")} />
          </div>
        </Bento>

        {/* Reports */}
        <Bento
          kicker={t("inside.reportsKicker")}
          kickerIcon="bx-bar-chart-alt-2"
          title={t("inside.reportsTitle")}
          desc={t("inside.reportsDesc")}
        >
          <div className="mt-auto flex h-[96px] items-end gap-[6px] rounded-[14px] border border-line-soft bg-bg-2 p-[14px]">
            {chart.map((h, i) => (
              <i
                key={i}
                className="mini-chart-bar flex-1 rounded-[3px] opacity-90"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </Bento>

        {/* Barcode */}
        <Bento
          kicker={t("inside.barcodeKicker")}
          kickerIcon="bx-barcode-reader"
          title={t("inside.barcodeTitle")}
          desc={t("inside.barcodeDesc")}
        >
          <div className="relative mt-auto grid h-[96px] place-items-center overflow-hidden rounded-[14px] border border-line-soft bg-bg-2">
            <div className="scan-code h-[44px] w-[120px] opacity-75" />
            <div className="absolute left-[14%] right-[14%] h-[2px] rounded-full bg-accent shadow-[0_0_14px_var(--accent)] motion-safe:animate-scan motion-reduce:top-[48%]" />
          </div>
        </Bento>
      </div>
    </section>
  );
}

function Bento({
  className = "",
  kicker,
  kickerIcon,
  title,
  desc,
  children,
}: {
  className?: string;
  kicker: string;
  kickerIcon: string;
  title: string;
  desc: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-lg border border-line bg-surface p-[28px] transition-[transform,border-color] duration-[350ms] ease hover:-translate-y-[4px] hover:border-[color-mix(in_srgb,var(--accent)_50%,transparent)] ${className}`}
    >
      <div className="mb-[14px] inline-flex items-center gap-[8px] font-mono text-[10.5px] uppercase tracking-[0.09em] text-accent">
        <i className={`bx ${kickerIcon} text-[15px]`} /> {kicker}
      </div>
      <h4 className="mb-[6px] font-display text-[19px] font-semibold tracking-[-0.01em]">
        {title}
      </h4>
      <p className="max-w-[420px] text-[14px] text-ink-dim text-pretty">{desc}</p>
      {children}
    </div>
  );
}

function InvRow({
  name,
  width,
  qty,
  low,
  lowLabel,
}: {
  name: string;
  width: number;
  qty?: string;
  low?: boolean;
  lowLabel?: string;
}) {
  return (
    <div className="flex items-center gap-[14px] rounded-[12px] border border-line-soft bg-bg-2 px-[14px] py-[10px] text-[13px]">
      <span className="flex-1 font-medium">{name}</span>
      <span className="h-[5px] w-[110px] flex-shrink-0 overflow-hidden rounded-full bg-tint/[0.08]">
        <span
          className={`block h-full rounded-full ${low ? "bg-warn" : "bg-accent"}`}
          style={{ width: `${width}%` }}
        />
      </span>
      {low ? (
        <span className="flex-shrink-0 rounded-full border border-[oklch(0.72_0.18_45_/_0.35)] bg-[oklch(0.72_0.18_45_/_0.12)] px-[9px] py-[4px] font-mono text-[9.5px] uppercase tracking-[0.07em] text-warn">
          {lowLabel}
        </span>
      ) : (
        <span className="w-[64px] text-right font-mono text-[11px] text-ink-muted">
          {qty}
        </span>
      )}
    </div>
  );
}
