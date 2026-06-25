import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import HardwareIndexBody from "@/components/HardwareIndexBody";

export const metadata: Metadata = {
  title: "Hardware, Raad POS",
  description:
    "Connect a thermal printer or barcode scanner to Raad, or run on just your phone.",
  alternates: { canonical: "/hardware" },
};

export default function HardwarePage() {
  return (
    <PageShell>
      <HardwareIndexBody />
    </PageShell>
  );
}
