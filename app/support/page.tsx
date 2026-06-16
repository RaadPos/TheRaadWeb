import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import SupportBody from "@/components/SupportBody";

export const metadata: Metadata = {
  title: "Support — Raad POS",
  description:
    "Get help with Raad POS — message us on WhatsApp, email us, or send us a message.",
  alternates: { canonical: "/support" },
};

export default function SupportPage() {
  return (
    <PageShell>
      <SupportBody />
    </PageShell>
  );
}
