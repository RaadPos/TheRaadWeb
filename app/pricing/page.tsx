import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Pricing from "@/components/Pricing";

export const metadata: Metadata = {
  title: "Pricing, Raad POS",
  description:
    "Start free and stay free, or go Pro. Try Raad Pro free for 14 days, no card required.",
};

export default function PricingPage() {
  return (
    <PageShell>
      {/* spacer so the section title clears the fixed nav */}
      <div className="pt-[80px]" />
      <Pricing />
    </PageShell>
  );
}
