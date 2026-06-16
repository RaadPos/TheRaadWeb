import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import LegalContent, { LegalSection } from "@/components/LegalContent";

export const metadata: Metadata = {
  title: "Privacy Policy — Raad POS",
  description:
    "How Raad POS collects, uses, stores, and protects your business and personal data.",
  alternates: { canonical: "/privacy" },
};

const sections: LegalSection[] = [
  {
    heading: "Introduction",
    body: [
      "This Privacy Policy explains how Raad (“Raad”, “we”, “us”) collects, uses, and protects information when you use the Raad POS mobile app, the web dashboard at pos.raadapp.com, and related services (together, the “Service”).",
      "By using the Service, you agree to the collection and use of information in line with this policy.",
    ],
  },
  {
    heading: "Information we collect",
    body: ["We collect the information needed to provide and improve the Service:"],
    list: [
      "Account information: your name, email address, phone number, and business details.",
      "Business data: products, prices, inventory, sales, customers, credit (dayn) records, expenses, and staff you add.",
      "Device & usage data: device model, operating system, app version, and basic usage analytics to keep the Service reliable.",
      "Support communications: messages you send us through WhatsApp, email, or the contact form.",
    ],
  },
  {
    heading: "How we use your information",
    body: ["We use the information we collect to:"],
    list: [
      "Provide, operate, and maintain the Service, including syncing your data across devices.",
      "Process subscriptions, free trials, and payments for Raad Pro.",
      "Send important notices, such as account, security, or billing updates.",
      "Improve features, troubleshoot issues, and provide customer support.",
    ],
  },
  {
    heading: "Data storage and security",
    body: [
      "Your business data is encrypted in transit and at rest, and is automatically backed up to the cloud so it can be restored on a new device.",
      "We apply administrative, technical, and physical safeguards to protect your information. No method of transmission or storage is completely secure, but we work to protect your data using industry-standard practices.",
    ],
  },
  {
    heading: "Sharing and disclosure",
    body: [
      "We do not sell your personal information. We only share data in limited circumstances:",
    ],
    list: [
      "Service providers who help us run the Service (for example, cloud hosting and payment processing), bound by confidentiality obligations.",
      "Legal reasons, where required to comply with applicable law or a valid legal request.",
      "Business transfers, such as a merger or acquisition, with notice to you where required.",
    ],
  },
  {
    heading: "Your rights and choices",
    body: [
      "You can access and update most of your information directly in the app. You may request a copy of your data, correction of inaccurate data, or deletion of your account by contacting us. Some information may be retained where required for legal or operational reasons.",
    ],
  },
  {
    heading: "Data retention",
    body: [
      "We keep your information for as long as your account is active or as needed to provide the Service. If you close your account, we delete or anonymize your data within a reasonable period, except where retention is required by law.",
    ],
  },
  {
    heading: "Children's privacy",
    body: [
      "The Service is intended for business use and is not directed to children under the age required by your local law. We do not knowingly collect personal information from children.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "We may update this Privacy Policy from time to time. We will post the updated version here and update the “Last updated” date above. Significant changes may be communicated through the app.",
    ],
  },
  {
    heading: "Contact us",
    body: [
      "If you have any questions about this Privacy Policy or your data, contact us at privacy@raadapp.com or through the support page.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Legal"
        title={
          <>
            Privacy <em>Policy.</em>
          </>
        }
        desc="Your data is yours. Here's exactly what we collect, why, and how we keep it safe."
      />
      <LegalContent updated="June 14, 2026" sections={sections} />
    </PageShell>
  );
}
