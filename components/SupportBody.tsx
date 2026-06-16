"use client";

import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { useI18n } from "@/components/I18nProvider";

const inputCls =
  "w-full rounded-[12px] border border-line bg-bg-2 px-[15px] py-[13px] text-[14px] text-ink placeholder:text-ink-muted outline-none transition-colors focus:border-[color-mix(in_srgb,var(--accent)_60%,transparent)]";
const labelCls =
  "mb-[7px] block font-mono text-[10.5px] uppercase tracking-[0.08em] text-ink-muted";

const channels = [
  { icon: "bxl-whatsapp", label: "WhatsApp", value: "+252614660917", note: "Fastest reply", href: "https://wa.me/252614660917" },
  { icon: "bx-envelope", label: "Email", value: "info@raadapp.com", note: "Within 1 business day", href: "mailto:info@raadapp.com" },
  { icon: "bx-phone", label: "Call us", value: "+252614660917", note: "Sat–Thu", href: "tel:+252614660917" },
];


const socials = [
  { icon: "bx bxl-facebook-circle", label: "Facebook", href: "https://www.facebook.com/profile.php?id=61583891177568" },
  { icon: "bx bxl-instagram", label: "Instagram", href: "https://www.instagram.com/raadpos_app?igsh=d2IzdGVybnBsMDN0" },
  { icon: "bx bxl-twitter", label: "Twitter / X", href: "https://x.com/raadapp" },
  // { icon: "bx bxl-linkedin", label: "LinkedIn", href: "#" },
  { icon: "bx bxl-tiktok", label: "TikTok", href: "https://www.tiktok.com/@raad_pos?_r=1&_t=ZS-97FYeVE2l5o" },
];

const topics = [
  "General question",
  "Sales & checkout",
  "Hardware setup",
  "Billing & plans",
  "Report a problem",
  "Feature request",
];

export default function SupportBody() {
  const { ts } = useI18n();
  return (
    <>
      <PageHeader
        eyebrow={ts("Support")}
        title={
          <>
            {ts("We're here to ")}
            <em>{ts("help.")}</em>
          </>
        }
        desc={ts(
          "Real people, real answers. Message us directly, or send the form below and we'll get back to you."
        )}
      />

      <section className="px-[48px] pb-[60px] max-md:px-[20px]">
        <div className="reveal mx-auto grid max-w-[1080px] grid-cols-[0.9fr_1.1fr] items-start gap-[22px] max-[900px]:grid-cols-1">
          {/* Direct contact */}
          <div className="flex flex-col gap-[22px]">
            <div className="rounded-lg border border-line bg-surface p-[28px]">
              <h2 className="mb-[4px] font-display text-[20px] font-semibold tracking-[-0.01em]">
                {ts("Reach us directly")}
              </h2>
              <p className="mb-[22px] text-[14px] text-ink-dim">
                {ts("Pick whatever's easiest — we usually reply fast.")}
              </p>

              <div className="flex flex-col gap-[10px]">
                {channels.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="group flex items-center gap-[14px] rounded-[14px] border border-line-soft bg-bg-2 p-[14px_16px] transition-[border-color,background] duration-200 hover:border-[color-mix(in_srgb,var(--accent)_50%,transparent)] hover:bg-tint/[0.03]"
                  >
                    <span className="grid h-[44px] w-[44px] flex-shrink-0 place-items-center rounded-[12px] bg-accent-soft text-[22px] leading-none text-accent">
                      <i className={`bx ${c.icon}`} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-[10px] uppercase tracking-[0.08em] text-ink-muted">
                        {ts(c.label)}
                      </span>
                      <span className="block text-[15px] font-medium text-ink">{c.value}</span>
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.06em] text-ink-muted max-md:hidden">
                      {ts(c.note)}
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-[22px] border-t border-line-soft pt-[20px]">
                <span className={labelCls}>{ts("Follow us")}</span>
                <div className="flex gap-[8px]">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="grid h-[40px] w-[40px] place-items-center rounded-full border border-line text-[18px] text-ink-dim transition-all duration-200 hover:-translate-y-[2px] hover:border-accent hover:text-accent"
                    >
                      <i className={`bx ${s.icon}`} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-[12px]">
              <Link
                href="/docs"
                className="group flex items-center gap-[12px] rounded-[14px] border border-line bg-surface p-[16px] transition-[border-color] duration-200 hover:border-[color-mix(in_srgb,var(--accent)_50%,transparent)]"
              >
                <i className="bx bx-help-circle text-[22px] text-accent" />
                <span className="text-[14px] font-medium">{ts("Help center")}</span>
              </Link>
              <a
                href="#"
                className="group flex items-center gap-[12px] rounded-[14px] border border-line bg-surface p-[16px] transition-[border-color] duration-200 hover:border-[color-mix(in_srgb,var(--accent)_50%,transparent)]"
              >
                <i className="bx bx-group text-[22px] text-accent" />
                <span className="text-[14px] font-medium">{ts("Community")}</span>
              </a>
            </div>
          </div>

          {/* Contact form (UI only) */}
          <div className="relative overflow-hidden rounded-lg border border-line bg-surface p-[32px] max-md:p-[24px]">
            <h2 className="mb-[4px] font-display text-[20px] font-semibold tracking-[-0.01em]">
              {ts("Send us a message")}
            </h2>
            <p className="mb-[24px] text-[14px] text-ink-dim">
              {ts("Fill in your details and we'll get back to you by email.")}
            </p>

            <form className="flex flex-col gap-[18px]">
              <div className="grid grid-cols-2 gap-[16px] max-md:grid-cols-1">
                <div>
                  <label className={labelCls} htmlFor="name">{ts("Full name")}</label>
                  <input id="name" name="name" type="text" placeholder="Amina Yusuf" className={inputCls} />
                </div>
                <div>
                  <label className={labelCls} htmlFor="email">{ts("Email")}</label>
                  <input id="email" name="email" type="email" placeholder="you@example.com" className={inputCls} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-[16px] max-md:grid-cols-1">
                <div>
                  <label className={labelCls} htmlFor="phone">{ts("Phone (optional)")}</label>
                  <input id="phone" name="phone" type="tel" placeholder="+252 …" className={inputCls} />
                </div>
                <div>
                  <label className={labelCls} htmlFor="topic">{ts("Topic")}</label>
                  <select id="topic" name="topic" className={`${inputCls} appearance-none`}>
                    {topics.map((t) => (
                      <option key={t} className="bg-bg-2 text-ink">{ts(t)}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className={labelCls} htmlFor="message">{ts("Message")}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder={ts("Tell us how we can help…")}
                  className={`${inputCls} resize-none`}
                />
              </div>

              <div className="flex items-center justify-between gap-[16px] max-md:flex-col max-md:items-stretch">
                <p className="text-[12px] text-ink-muted max-md:order-2 max-md:text-center">
                  {ts("We'll only use your details to reply to you.")}
                </p>
                <button type="button" className="btn btn-primary max-md:w-full max-md:justify-center">
                  <i className="bx bx-send text-[17px]" /> {ts("Send message")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}