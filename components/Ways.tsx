"use client";

import { useI18n } from "@/components/I18nProvider";

// Drop your own "before / after" photos here.
const BEFORE_IMG = "/assets/before.png";
const AFTER_IMG = "/assets/after.png";

export default function Ways() {
  const { t } = useI18n();
  return (
    <section id="ways" className="px-[48px] py-[130px] max-md:px-[20px] max-md:py-[90px]">
      <div className="sec-head">
        <div className="eyebrow reveal">{t("ways.eyebrow")}</div>
        <h2 className="sec-title reveal">
          {t("ways.titlePre")}
          <em>{t("ways.titleEm")}</em>
        </h2>
        <p className="sec-desc reveal">{t("ways.desc")}</p>
      </div>

      <div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-[22px] max-md:grid-cols-1">
        <Way
          variant="old"
          tag={t("ways.oldTag")}
          icon="bxs-book-content"
          title={t("ways.oldTitle")}
          desc={t("ways.oldDesc")}
          img={BEFORE_IMG}
          alt={t("ways.oldTitle")}
        />
        <Way
          variant="new"
          tag={t("ways.newTag")}
          icon="bx-bolt"
          title={t("ways.newTitle")}
          desc={t("ways.newDesc")}
          img={AFTER_IMG}
          alt={t("ways.newTitle")}
        />
      </div>
    </section>
  );
}

function Way({
  variant,
  tag,
  icon,
  title,
  desc,
  img,
  alt,
}: {
  variant: "old" | "new";
  tag: string;
  icon: string;
  title: string;
  desc: string;
  img: string;
  alt: string;
}) {
  const isNew = variant === "new";
  return (
    <div
      className={`reveal group relative flex min-h-[420px] items-end overflow-hidden rounded-lg border border-line transition-[transform,border-color] duration-[450ms] ease hover:-translate-y-[6px] ${
        isNew ? "hover:border-accent" : ""
      }`}
    >
      <div className={`absolute inset-0 ${isNew ? "way-img-new" : "way-img-old"}`} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img}
        alt={alt}
        className="absolute inset-0 h-full w-full select-none object-cover object-center transition-transform duration-[600ms] ease group-hover:scale-[1.04]"
        draggable={false}
      />

      {/* Overlay content sits over a photo + dark scrim, so it stays light in
          BOTH themes (fixed white-based colors, not theme tokens). */}
      <div
        className={`absolute left-[20px] top-[20px] z-[2] rounded-full border px-[14px] py-[6px] font-mono text-[10.5px] uppercase tracking-[0.09em] backdrop-blur-[8px] ${
          isNew
            ? "border-[color-mix(in_srgb,var(--accent)_60%,transparent)] bg-accent-soft text-accent-hi"
            : "border-white/[0.18] bg-black/40 text-white"
        }`}
      >
        {tag}
      </div>

      <div className="way-scrim relative z-[1] flex w-full items-center gap-[16px] p-[26px]">
        <div
          className={`grid h-[46px] w-[46px] flex-shrink-0 place-items-center rounded-[14px] border text-[20px] ${
            isNew
              ? "border-[color-mix(in_srgb,var(--accent)_55%,transparent)] bg-accent-soft text-accent"
              : "border-white/[0.2] bg-white/[0.12] text-white"
          }`}
        >
          <i className={`bx ${icon}`} />
        </div>
        <div>
          <h3 className="mb-[3px] font-display text-[23px] font-semibold tracking-[-0.02em] text-white">
            {title}
          </h3>
          <p className="text-[14px] text-white/75">{desc}</p>
        </div>
      </div>
    </div>
  );
}
