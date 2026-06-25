"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import { useI18n } from "@/components/I18nProvider";

const STORE_BADGE = "/assets/google-play.svg";

const cols: { headKey: string; links: { key: string; href: string }[] }[] = [
  {
    headKey: "footer.product",
    links: [
      { key: "footer.features", href: "/features" },
      { key: "footer.pricing", href: "/pricing" },
      { key: "footer.hardware", href: "/hardware" },
    ],
  },
  {
    headKey: "footer.resources",
    links: [
      { key: "footer.documentation", href: "/docs" },
      { key: "footer.support", href: "/support" },
      { key: "footer.contact", href: "/support" },
    ],
  },
  {
    headKey: "footer.company",
    links: [
      { key: "footer.about", href: "/about" },
      { key: "footer.privacy", href: "/privacy" },
      { key: "footer.terms", href: "/terms" },
    ],
  },
];

// Social links, placeholders for now; drop your real URLs into `href`.
// Use full Boxicons class names so icons render correctly.
const socials = [
  { icon: "bx bxl-facebook-circle", label: "Facebook", href: "https://www.facebook.com/profile.php?id=61583891177568" },
  { icon: "bx bxl-instagram", label: "Instagram", href: "https://www.instagram.com/raadpos_app?igsh=d2IzdGVybnBsMDN0" },
  { icon: "bx bxl-twitter", label: "Twitter / X", href: "https://x.com/raadapp" },
  // { icon: "bx bxl-linkedin", label: "LinkedIn", href: "#" },
  { icon: "bx bxl-tiktok", label: "TikTok", href: "https://www.tiktok.com/@raad_pos?_r=1&_t=ZS-97FYeVE2l5o" },
  { icon: "bx bxl-whatsapp", label: "WhatsApp", href: "https://wa.me/252614660917" },
];

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-line-soft bg-bg px-[48px] pb-[40px] pt-[80px] max-md:px-[20px]">
      <div className="mx-auto mb-[60px] grid max-w-content grid-cols-[2fr_1fr_1fr_1fr_1.4fr] gap-[40px] max-[1100px]:grid-cols-2 max-md:grid-cols-1 max-md:gap-[32px]">
        <div>
          <Logo href="/" />
          <p className="mt-[18px] max-w-[300px] text-[14px] text-ink-dim">
            {t("footer.tagline")}
          </p>
        </div>

        {cols.map((c) => (
          <div key={c.headKey}>
            <h5 className="mb-[18px] font-mono text-[11px] uppercase tracking-[0.09em] text-ink-muted">
              {t(c.headKey)}
            </h5>
            <ul className="flex flex-col gap-[11px]">
              {c.links.map((l) => (
                <li key={l.key}>
                  <Link
                    href={l.href}
                    className="text-[14px] text-ink-dim transition-colors duration-200 ease hover:text-accent"
                  >
                    {t(l.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h5 className="mb-[18px] font-mono text-[11px] uppercase tracking-[0.09em] text-ink-muted">
            {t("footer.getStarted")}
          </h5>
          <a
            href="https://play.google.com/store/apps/details?id=com.raadapp.raad"
            aria-label="Get Raad on Google Play"
            className="inline-flex h-[52px] w-fit items-center overflow-hidden transition-transform duration-200 ease hover:-translate-y-[2px]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={STORE_BADGE}
              alt="Get it on Google Play"
              className="h-full w-auto select-none object-contain"
              draggable={false}
            />
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-content items-center justify-between gap-[16px] border-t border-line-soft pt-[28px] text-[13px] text-ink-muted max-md:flex-col max-md:gap-[20px] max-md:text-center">
        <span>{t("footer.rights")}</span>

        <div className="flex items-center gap-[16px] max-md:flex-col max-md:gap-[16px]">
          <div className="flex items-center gap-[14px]">
            <Link href="/privacy" className="transition-colors hover:text-accent">
              {t("footer.privacyShort")}
            </Link>
            <Link href="/terms" className="transition-colors hover:text-accent">
              {t("footer.termsShort")}
            </Link>
          </div>
          <div className="flex gap-[8px]">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="grid h-[36px] w-[36px] place-items-center rounded-full border border-line text-[16px] text-ink-dim transition-all duration-200 ease hover:-translate-y-[2px] hover:border-accent hover:text-accent"
              >
                <i className={`bx ${s.icon}`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
