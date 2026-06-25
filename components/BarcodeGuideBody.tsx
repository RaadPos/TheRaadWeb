"use client";

import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SetupSteps from "@/components/SetupSteps";
import SupportCta from "@/components/SupportCta";
import { useI18n } from "@/components/I18nProvider";

type Step = { title: string; desc: string };

const CAMERA: Record<string, Step[]> = {
  en: [
    { title: "Open a sale and tap scan", desc: "On the sale screen, tap the scan icon to turn your phone camera into a barcode scanner." },
    { title: "Allow camera access", desc: "The first time, grant Raad permission to use the camera. You only need to do this once." },
    { title: "Point at the barcode", desc: "Line the barcode up inside the frame. Raad reads it and adds the product to the cart instantly." },
  ],
  so: [
    { title: "Fur iib oo taabo sawir", desc: "Shaashadda iibka, taabo astaanta sawirka si aad kamaradka taleefankaaga uga dhigto sawir-akhriste barcode." },
    { title: "Ogolow gelitaanka kamaradka", desc: "Markii ugu horreysay, u ogolow Raad inuu isticmaalo kamaradka. Hal mar ayaad samaynaysaa." },
    { title: "U beeg barcode-ka", desc: "Ku toosi barcode-ka sanduuqa gudihiisa. Raad wuu akhriyaa oo isla markiiba alaabta gaariga ku daraa." },
  ],
};

const EXTERNAL: Record<string, Step[]> = {
  en: [
    { title: "Connect the reader", desc: "Bluetooth reader: pair it from your phone's settings. USB reader: plug it in with an OTG adapter." },
    { title: "Use keyboard (HID) mode", desc: "Most readers work in keyboard mode out of the box, no extra drivers or configuration needed." },
    { title: "Scan into Raad", desc: "With the sale screen open, pull the trigger. The scanned product is added to the cart automatically." },
  ],
  so: [
    { title: "Ku xidh akhriste", desc: "Akhriste Bluetooth: ka xidh dejimaha taleefanka. Akhriste USB: ku xidh adigoo isticmaalaya qalab OTG." },
    { title: "Isticmaal qaab kiiboor (HID)", desc: "Akhristayaasha intooda badan waxay si toos ah ugu shaqeeyaan qaab kiiboor (HID), darawal ama dejin dheeraad ah looma baahna." },
    { title: "Ku sawir Raad gudihiis", desc: "Iyadoo shaashadda iibku furan tahay, jiid, alaabta la sawiray si toos ah ayaa gaariga loogu daraa." },
  ],
};

const INTEGRATE: Record<string, { label: string; body: string }> = {
  en: {
    label: "How it integrates:",
    body: " a scanned barcode looks up the product in your inventory and adds it to the cart. If the code is new, Raad opens Add product with the barcode already filled in, so it's ready next time.",
  },
  so: {
    label: "Sida ay isugu dhafanto:",
    body: " barcode la sawiray wuxuu ka raadiyaa alaabta bakhaarkaaga oo gaariga ku daraa. Haddii koodhku cusub yahay, Raad wuxuu furaa Ku dar alaab oo barcode-ka horeba loo buuxiyay, si uu marka xigta diyaar u noqdo.",
  },
};

export default function BarcodeGuideBody() {
  const { locale, ts } = useI18n();
  const camera = CAMERA[locale] ?? CAMERA.en;
  const external = EXTERNAL[locale] ?? EXTERNAL.en;
  const integrate = INTEGRATE[locale] ?? INTEGRATE.en;

  return (
    <>
      <PageHeader
        eyebrow={ts("Hardware · Barcode reader")}
        title={
          <>
            {ts("How scanning ")}
            <em>{ts("works with Raad.")}</em>
          </>
        }
        desc={ts("Two ways to scan: your phone camera with nothing extra, or a dedicated Bluetooth/USB reader for speed.")}
      />

      <section className="px-[48px] max-md:px-[20px]">
        <div className="reveal mx-auto max-w-[820px] overflow-hidden rounded-lg border border-line bg-surface">
          <div className="relative aspect-[16/9] bg-bg-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/barcode.png" alt={ts("Barcode reader")} className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="px-[48px] pt-[70px] max-md:px-[20px] max-md:pt-[50px]">
        <div className="reveal mx-auto flex max-w-content items-start gap-[16px] rounded-lg border border-[color-mix(in_srgb,var(--accent)_45%,transparent)] bg-accent-soft p-[24px_26px]">
          <i className="bx bx-bulb mt-[2px] text-[24px] leading-none text-accent" />
          <p className="text-[14.5px] text-ink text-pretty">
            <strong className="font-semibold">{integrate.label}</strong>
            {integrate.body}
          </p>
        </div>
      </section>

      <section className="px-[48px] py-[60px] max-md:px-[20px] max-md:py-[44px]">
        <div className="mx-auto grid max-w-[1080px] grid-cols-2 gap-x-[40px] gap-y-[40px] max-[900px]:grid-cols-1">
          <div>
            <div className="mb-[24px]">
              <div className="eyebrow reveal">{ts("Option A · No hardware")}</div>
              <h2 className="reveal font-display text-[24px] font-medium tracking-[-0.02em]">
                {ts("Scan with the phone camera")}
              </h2>
            </div>
            <SetupSteps steps={camera} />
          </div>
          <div>
            <div className="mb-[24px]">
              <div className="eyebrow reveal">{ts("Option B · Faster checkout")}</div>
              <h2 className="reveal font-display text-[24px] font-medium tracking-[-0.02em]">
                {ts("Pair an external reader")}
              </h2>
            </div>
            <SetupSteps steps={external} />
          </div>
        </div>

        <div className="mx-auto mt-[40px] max-w-[1080px]">
          <Link href="/hardware" className="inline-flex items-center gap-[7px] text-[14px] text-ink-dim transition-colors hover:text-accent">
            <i className="bx bx-left-arrow-alt text-[18px]" /> {ts("Back to hardware")}
          </Link>
        </div>
      </section>

      <SupportCta />
    </>
  );
}
