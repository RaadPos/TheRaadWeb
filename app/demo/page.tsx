import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import DemoBody from "@/components/DemoBody";

export const metadata: Metadata = {
  title: "Demo, Raad POS",
  description:
    "Watch a quick walkthrough of Raad POS, from your first sale to inventory, credit (dayn), and reports.",
  alternates: { canonical: "/demo" },
};

export default function DemoPage() {
  return (
    <PageShell>
      <DemoBody />
    </PageShell>
  );
}
