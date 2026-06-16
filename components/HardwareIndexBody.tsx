"use client";

import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SupportCta from "@/components/SupportCta";
import { useI18n } from "@/components/I18nProvider";

export default function HardwareIndexBody() {
  const { ts } = useI18n();

  const devices = [
    {
      img: "/assets/reciept.png",
      tag: ts("Receipts"),
      title: ts("Thermal printer"),
      desc: ts("Print clean receipts straight from your phone over Bluetooth — or USB."),
      chips: ["Bluetooth", "58 & 80mm", ts("Auto-print")],
      href: "/hardware/thermal-printer",
    },
    {
      img: "/assets/barcode.png",
      tag: ts("Checkout"),
      title: ts("Barcode reader"),
      desc: ts("Use your phone camera as a scanner, or pair a Bluetooth/USB reader for fast checkout."),
      chips: [ts("Camera scan"), "Bluetooth / USB", ts("Instant lookup")],
      href: "/hardware/barcode-scanner",
    },
  ];

  const also: [string, string][] = [
    ["bx-money", ts("Cash drawers")],
    ["bx-mobile-alt", ts("Android phones & tablets")],
    ["bx-purchase-tag", ts("Label printers")],
    ["bxl-whatsapp", ts("Digital receipts")],
  ];

  return (
    <>
      <PageHeader
        eyebrow={ts("Hardware")}
        title={
          <>
            {ts("Works with what ")}
            <em>{ts("you already have.")}</em>
          </>
        }
        desc={ts(
          "No expensive terminals. Pair everyday devices with Raad — and tap a card to see exactly how to connect it."
        )}
      />

      <section className="px-[48px] pb-[40px] max-md:px-[20px]">
        <div className="reveal-stagger mx-auto grid max-w-[1080px] grid-cols-2 gap-[22px] max-md:grid-cols-1">
          {devices.map((d) => (
            <Link
              key={d.href}
              href={d.href}
              className="group flex flex-col overflow-hidden rounded-lg border border-line bg-surface transition-[transform,border-color] duration-[350ms] ease hover:-translate-y-[5px] hover:border-[color-mix(in_srgb,var(--accent)_55%,transparent)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-line-soft bg-bg-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={d.img}
                  alt={d.title}
                  className="absolute inset-0 h-full w-full select-none object-cover transition-transform duration-[600ms] ease group-hover:scale-[1.05]"
                  draggable={false}
                />
                <span className="absolute left-[18px] top-[18px] rounded-full border border-white/[0.18] bg-black/40 px-[12px] py-[6px] font-mono text-[10.5px] uppercase tracking-[0.09em] text-white/85 backdrop-blur-[8px]">
                  {d.tag}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-[28px]">
                <h3 className="font-display text-[22px] font-semibold tracking-[-0.01em]">
                  {d.title}
                </h3>
                <p className="mt-[6px] text-[14.5px] text-ink-dim text-pretty">{d.desc}</p>
                <div className="mt-[16px] flex flex-wrap gap-[8px]">
                  {d.chips.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-line bg-tint/[0.04] px-[12px] py-[6px] text-[12.5px] font-medium text-ink-dim"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <span className="mt-[22px] inline-flex items-center gap-[7px] font-mono text-[11px] uppercase tracking-[0.08em] text-accent">
                  {ts("View setup guide")}
                  <i className="bx bx-right-arrow-alt text-[16px] transition-transform duration-200 group-hover:translate-x-[3px]" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mx-auto mt-[28px] flex max-w-[1080px] flex-wrap items-center justify-center gap-x-[26px] gap-y-[12px] text-ink-muted">
          <span className="font-mono text-[11px] uppercase tracking-[0.1em]">
            {ts("Also works with")}
          </span>
          {also.map(([icon, label]) => (
            <span key={label} className="inline-flex items-center gap-[8px] text-[13.5px]">
              <i className={`bx ${icon} text-[17px] text-accent`} /> {label}
            </span>
          ))}
        </div>
      </section>

      <div className="pt-[50px]" />
      <SupportCta />
    </>
  );
}
