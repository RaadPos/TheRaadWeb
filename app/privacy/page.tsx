import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PrivacyBody from "@/components/PrivacyBody";

export const metadata: Metadata = {
  title: "Privacy Policy, Raad POS",
  description:
    "How Raad POS collects, uses, stores, and protects your business and personal data.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <PrivacyBody />
    </PageShell>
  );
}
