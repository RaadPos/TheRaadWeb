import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import TermsBody from "@/components/TermsBody";

export const metadata: Metadata = {
  title: "Terms of Service — Raad POS",
  description:
    "The terms that govern your use of the Raad POS app, web dashboard, subscriptions, and free trial.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <PageShell>
      <TermsBody />
    </PageShell>
  );
}
