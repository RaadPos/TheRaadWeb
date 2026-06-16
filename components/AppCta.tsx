"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useI18n } from "@/components/I18nProvider";
import { PLAY_STORE_URL, WEB_POS_URL } from "@/lib/appLinks";

type Ctx = { open: () => void };
const AppCtaContext = createContext<Ctx>({ open: () => {} });
export const useAppCtaSheet = () => useContext(AppCtaContext);

export function AppCtaProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <AppCtaContext.Provider value={{ open }}>
      {children}
      <AppCtaSheet open={isOpen} onClose={close} />
    </AppCtaContext.Provider>
  );
}

function AppCtaSheet({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { ts } = useI18n();
  const [mounted, setMounted] = useState(false);
  const [enter, setEnter] = useState(false);

  // Mount + slide-in / slide-out animation, and lock body scroll while open.
  useEffect(() => {
    if (open) {
      setMounted(true);
      const id = requestAnimationFrame(() => setEnter(true));
      document.body.style.overflow = "hidden";
      return () => cancelAnimationFrame(id);
    }
    setEnter(false);
    document.body.style.overflow = "";
    const t = window.setTimeout(() => setMounted(false), 300);
    return () => window.clearTimeout(t);
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[300] flex items-end justify-center">
      {/* backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/55 backdrop-blur-[2px] transition-opacity duration-300 ${
          enter ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* sheet */}
      <div
        role="dialog"
        aria-modal="true"
        className={`relative w-full max-w-[480px] rounded-t-[24px] border-t border-line bg-surface p-[20px] pb-[calc(22px+env(safe-area-inset-bottom))] shadow-[0_-20px_60px_oklch(0_0_0_/_0.5)] transition-transform duration-300 ease ${
          enter ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mx-auto mb-[18px] h-[5px] w-[44px] rounded-full bg-tint/[0.18]" />

        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-[16px] top-[18px] grid h-[34px] w-[34px] place-items-center rounded-full border border-line text-ink-dim transition-colors hover:border-accent hover:text-ink"
        >
          <i className="bx bx-x text-[20px]" />
        </button>

        <h3 className="mb-[4px] font-display text-[21px] font-semibold tracking-[-0.01em]">
          {ts("Start with Raad")}
        </h3>
        <p className="mb-[20px] text-[14px] text-ink-dim">
          {ts("Choose how you'd like to begin.")}
        </p>

        <div className="flex flex-col gap-[12px]">
          {/* Download the app */}
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-[14px] rounded-[16px] bg-accent p-[16px_18px] text-white transition-[filter] duration-200 hover:brightness-110"
          >
            <span className="grid h-[46px] w-[46px] flex-shrink-0 place-items-center rounded-[13px] bg-white/15 text-[26px] leading-none">
              <i className="bx bxl-play-store" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[16px] font-semibold">
                {ts("Download our app")}
              </span>
              <span className="block text-[12.5px] text-white/80">
                {ts("Free on the Play Store")}
              </span>
            </span>
            <i className="bx bx-right-arrow-alt text-[22px] transition-transform group-hover:translate-x-[3px]" />
          </a>

          {/* Get started on the web */}
          <a
            href={WEB_POS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-[14px] rounded-[16px] border border-line bg-bg-2 p-[16px_18px] text-ink transition-[border-color] duration-200 hover:border-[color-mix(in_srgb,var(--accent)_50%,transparent)]"
          >
            <span className="grid h-[46px] w-[46px] flex-shrink-0 place-items-center rounded-[13px] bg-accent-soft text-[26px] leading-none text-accent">
              <i className="bx bx-globe" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[16px] font-semibold">
                {ts("Get started on the web")}
              </span>
              <span className="block text-[12.5px] text-ink-muted">
                {ts("Open Raad in your browser")}
              </span>
            </span>
            <i className="bx bx-right-arrow-alt text-[22px] text-accent transition-transform group-hover:translate-x-[3px]" />
          </a>
        </div>
      </div>
    </div>
  );
}
