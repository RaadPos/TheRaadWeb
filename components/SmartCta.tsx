"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/components/I18nProvider";
import { useAppCtaSheet } from "@/components/AppCta";
import { WEB_POS_URL, isMobileUA } from "@/lib/appLinks";

// Re-exported for convenience.
export { PLAY_STORE_URL, WEB_POS_URL } from "@/lib/appLinks";

/**
 * The single app entry-point button.
 *   • Mobile  → opens the "download app / use web" bottom sheet.
 *   • Desktop → links straight to the Web POS login.
 * SSR renders the desktop variant first (no UA on the server) and updates on
 * mount, so there's no hydration mismatch.
 */
export default function SmartCta({
  variant = "solid",
  size = "lg",
  className = "",
}: {
  variant?: "solid" | "outline";
  size?: "lg" | "sm";
  className?: string;
}) {
  const { ts } = useI18n();
  const { open } = useAppCtaSheet();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileUA(navigator.userAgent || ""));
  }, []);

  const label = isMobile ? ts("Get Raad") : ts("Get started");
  const icon = isMobile ? "bxl-play-store" : "bx-log-in-circle";

  const sizeCls =
    size === "lg"
      ? "gap-[10px] px-[28px] py-[15px] text-[15px]"
      : "gap-[7px] px-[18px] py-[9px] text-[14px]";

  const variantCls =
    variant === "solid"
      ? "bg-accent text-white hover:-translate-y-px hover:brightness-110 hover:shadow-[0_12px_32px_color-mix(in_srgb,var(--accent)_45%,transparent)]"
      : "border border-line bg-tint/[0.04] text-ink hover:-translate-y-px hover:border-accent hover:bg-accent-soft";

  const cls = `group/cta inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold transition-[transform,box-shadow,filter,border-color,background] duration-200 ${sizeCls} ${variantCls} ${className}`;

  const inner = (
    <>
      <i className={`bx ${icon} text-[18px]`} />
      {label}
      <span className="transition-transform duration-200 group-hover/cta:translate-x-[3px]">
        →
      </span>
    </>
  );

  if (isMobile) {
    return (
      <button type="button" onClick={open} className={cls}>
        {inner}
      </button>
    );
  }

  return (
    <a href={WEB_POS_URL} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  );
}
