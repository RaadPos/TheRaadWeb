import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import DocsIndexBody from "@/components/DocsIndexBody";

export const metadata: Metadata = {
  title: "Documentation, Raad POS Help & Guides",
  description:
    "Learn everything Raad POS does, products and barcodes, inventory, checkout, credit (dayn), staff roles, expenses, reports, suppliers, and the desktop Web POS.",
  alternates: { canonical: "/docs" },
  keywords: [
    "raad pos documentation",
    "point of sale help",
    "pos guides",
    "raad app docs",
  ],
};

export default function DocsPage() {
  return (
    <PageShell>
      <DocsIndexBody />
    </PageShell>
  );
}
