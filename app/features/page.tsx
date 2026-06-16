import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import FeaturesIndexBody from "@/components/FeaturesIndexBody";

export const metadata: Metadata = {
  title: "Features — Raad POS",
  description:
    "Every tool your shop actually uses — barcode catalog, credit (dayn), inventory, staff roles, reports, suppliers, expenses, and full desktop support.",
  alternates: { canonical: "/features" },
};

export default function FeaturesPage() {
  return (
    <PageShell>
      <FeaturesIndexBody />
    </PageShell>
  );
}
