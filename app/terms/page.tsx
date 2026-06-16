import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import LegalContent, { LegalSection } from "@/components/LegalContent";

export const metadata: Metadata = {
  title: "Terms of Service — Raad POS",
  description:
    "The terms that govern your use of the Raad POS app, web dashboard, subscriptions, and free trial.",
  alternates: { canonical: "/terms" },
};

const sections: LegalSection[] = [
  {
    heading: "Acceptance of terms",
    body: [
      "These Terms of Service (“Terms”) govern your access to and use of the Raad POS app, the web dashboard at pos.raadapp.com, and related services (the “Service”). By creating an account or using the Service, you agree to these Terms.",
    ],
  },
  {
    heading: "Description of the Service",
    body: [
      "Raad is a point-of-sale and business-management platform that lets you process sales, manage inventory and customers, track credit (dayn) and expenses, manage staff, and view reports. Some features are available only on the Raad Pro tier.",
    ],
  },
  {
    heading: "Accounts and registration",
    body: [
      "You are responsible for the accuracy of the information you provide and for keeping your login credentials secure. You are responsible for all activity that happens under your account, including actions by staff you invite.",
    ],
  },
  {
    heading: "Subscriptions, free trial, and billing",
    body: [
      "Raad offers a free Starter plan and a paid Raad Pro plan, billed monthly or annually. New users may start a 14-day free trial of Pro features; no payment is required to begin the trial.",
      // "Paid subscriptions renew automatically until cancelled. You can cancel at any time, and cancellation takes effect at the end of the current billing period. Prices are shown in the app and may change with notice.",
    ],
  },
  {
    heading: "Acceptable use",
    body: ["You agree not to:"],
    list: [
      "Use the Service for any unlawful or fraudulent purpose.",
      "Interfere with or disrupt the integrity or performance of the Service.",
      "Attempt to gain unauthorized access to the Service or other users' data.",
      "Reverse engineer or resell the Service except as permitted by law.",
    ],
  },
  {
    heading: "Your content and data",
    body: [
      "You retain ownership of the business data you put into the Service. You grant us the limited rights needed to host, process, back up, and display that data so we can provide the Service to you. You are responsible for the lawfulness of the data you collect and store, including customer information.",
    ],
  },
  {
    heading: "Hardware",
    body: [
      "Raad works with compatible third-party hardware such as thermal printers and barcode scanners. We are not responsible for third-party hardware, and any setup steps we provide (for example, driver installation) are offered as guidance only.",
    ],
  },
  {
    heading: "Intellectual property",
    body: [
      "The Service, including its software, design, and branding, is owned by Raad and protected by intellectual-property laws. These Terms do not grant you any right to our trademarks or branding.",
    ],
  },
  {
    heading: "Disclaimers and limitation of liability",
    body: [
      "The Service is provided “as is” without warranties of any kind. To the maximum extent permitted by law, Raad is not liable for indirect, incidental, or consequential damages, or for loss of profits, data, or goodwill arising from your use of the Service.",
    ],
  },
  {
    heading: "Termination",
    body: [
      "You may stop using the Service and close your account at any time. We may suspend or terminate access if you breach these Terms or use the Service in a way that risks harm to others or to the Service.",
    ],
  },
  {
    heading: "Changes to these Terms",
    body: [
      "We may update these Terms from time to time. We will post the updated version here and update the “Last updated” date. Continued use of the Service after changes take effect means you accept the updated Terms.",
    ],
  },
  {
    heading: "Contact us",
    body: [
      "Questions about these Terms? Contact us at info@raadapp.com or through the support page.",
    ],
  },
];

export default function TermsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Legal"
        title={
          <>
            Terms of <em>Service.</em>
          </>
        }
        desc="The agreement between you and Raad for using the app, web dashboard, and subscriptions."
      />
      <LegalContent updated="June 14, 2026" sections={sections} />
    </PageShell>
  );
}
