"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import LangSwitch from "@/components/LangSwitch";
import SmartCta from "@/components/SmartCta";
import { useI18n } from "@/components/I18nProvider";

const links = [
  { key: "features", href: "/features" },
  { key: "pricing", href: "/pricing" },
  { key: "docs", href: "/docs" },
  { key: "hardware", href: "/hardware" },
  { key: "support", href: "/support" },
];

export default function Nav() {
  const pathname = usePathname();
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <div className="fixed inset-x-0 top-[18px] z-[200] flex flex-col items-center px-4 pointer-events-none">
      <nav
        id="nav"
        className="nav pointer-events-auto flex w-auto items-center gap-[14px] rounded-full py-[7px] pl-[18px] pr-[7px]
          border border-line bg-[var(--nav-bg)] backdrop-blur-[22px] backdrop-saturate-150
          shadow-[0_10px_40px_oklch(0_0_0_/_0.4),inset_0_1px_0_rgb(var(--tint)/0.06)]
          transition-[background,box-shadow] duration-300 ease
          [&.scrolled]:bg-[var(--nav-bg-scrolled)]
          [&.scrolled]:shadow-[0_14px_50px_oklch(0_0_0_/_0.55),inset_0_1px_0_rgb(var(--tint)/0.05)]"
      >
        <Logo href="/" />

        <div className="nav-links hidden items-center gap-[2px] lg:flex">
          {links.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              className={`rounded-full px-[14px] py-[8px] text-[14px] font-normal transition-colors duration-200 ${
                isActive(l.href)
                  ? "bg-tint/[0.08] text-ink"
                  : "text-ink-dim hover:bg-tint/[0.06] hover:text-ink"
              }`}
            >
              {t(`nav.${l.key}`)}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-[8px]">
          <LangSwitch />
          <SmartCta size="sm" className="max-md:hidden" />

          {/* Hamburger, shown below the desktop nav breakpoint */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
            className="grid h-[40px] w-[40px] place-items-center rounded-full border border-line text-ink-dim transition-colors hover:border-accent hover:text-ink lg:hidden"
          >
            <i className={`bx ${open ? "bx-x" : "bx-menu"} text-[22px]`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="pointer-events-auto mt-[10px] w-[min(440px,94vw)] rounded-[22px] border border-line bg-[var(--nav-bg-scrolled)] p-[12px] shadow-[0_18px_50px_oklch(0_0_0_/_0.45)] backdrop-blur-[22px] backdrop-saturate-150 lg:hidden">
          <div className="flex flex-col gap-[2px]">
            {links.map((l) => (
              <Link
                key={l.key}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-[14px] px-[16px] py-[13px] text-[15px] font-medium transition-colors ${
                  isActive(l.href)
                    ? "bg-tint/[0.08] text-ink"
                    : "text-ink-dim hover:bg-tint/[0.05] hover:text-ink"
                }`}
              >
                {t(`nav.${l.key}`)}
                <i className="bx bx-right-arrow-alt text-[18px] text-accent" />
              </Link>
            ))}
          </div>

          <div className="mt-[12px] flex items-center gap-[10px] border-t border-line-soft pt-[12px]">
            <LangSwitch className="flex items-center gap-[7px] rounded-full border border-line px-[14px] py-[10px] text-[14px] font-medium text-ink-dim transition-all duration-200 hover:border-accent hover:text-ink" />
            <SmartCta size="sm" className="flex-1" />
          </div>
        </div>
      )}
    </div>
  );
}
