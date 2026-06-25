import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import AboutBody from "@/components/AboutBody";

export const metadata: Metadata = {
  title: "About, Raad POS",
  description:
    "Raad POS is a Business-in-a-Box for shop owners, moving businesses from paper notebooks to a fast, secure digital register.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageShell>
      <AboutBody />
    </PageShell>
  );
}
