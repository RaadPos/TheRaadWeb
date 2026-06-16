import type { Metadata } from "next";
import { Outfit, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/components/I18nProvider";
import { AppCtaProvider } from "@/components/AppCta";


// Outfit — the Raad brand typeface (matches the app). Used for both the
// display headings and body copy for a clean, cohesive feel.
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

// IBM Plex Mono — precise, technical accents (eyebrows, labels, stats).
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://raadapp.com"),
  title: {
    default: "Raad POS – Built for Shop Owners. Made to Scale Your Business.",
    template: "%s",
  },
  description:
    "Raad POS replaces your notebook with a smart register. Track sales, inventory, and customer credit (dayn) — from one phone, with your data encrypted and backed up to the cloud.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${plexMono.variable}`}>
      <head>
        {/* Boxicons icon font (bundled locally under /public/assets) */}
        <link
    rel="stylesheet"
    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
  />
      </head>
      <body className="font-body bg-bg text-ink antialiased">
        <I18nProvider>
          <AppCtaProvider>{children}</AppCtaProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
