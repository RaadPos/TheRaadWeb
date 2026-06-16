import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import BarcodeGuideBody from "@/components/BarcodeGuideBody";

export const metadata: Metadata = {
  title: "Barcode scanner setup — Raad POS",
  description:
    "How the barcode scanner integrates with Raad — use your phone camera or a Bluetooth/USB reader.",
  alternates: { canonical: "/hardware/barcode-scanner" },
};

export default function BarcodeScannerGuide() {
  return (
    <PageShell>
      <BarcodeGuideBody />
    </PageShell>
  );
}
