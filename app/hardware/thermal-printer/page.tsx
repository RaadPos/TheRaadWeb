import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import ThermalGuideBody from "@/components/ThermalGuideBody";

export const metadata: Metadata = {
  title: "Thermal printer setup — Raad POS",
  description:
    "How to connect a Bluetooth thermal printer to Raad and print receipts automatically.",
  alternates: { canonical: "/hardware/thermal-printer" },
};

export default function ThermalPrinterGuide() {
  return (
    <PageShell>
      <ThermalGuideBody />
    </PageShell>
  );
}
