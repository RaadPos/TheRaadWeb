"use client";

import PageHeader from "@/components/PageHeader";
import SmartCta from "@/components/SmartCta";
import { useI18n } from "@/components/I18nProvider";

// ────────────────────────────────────────────────────────────────
// Put your YouTube link here — any of these formats works:
//   https://youtu.be/VIDEO_ID
//   https://www.youtube.com/watch?v=VIDEO_ID
//   https://www.youtube.com/embed/VIDEO_ID
//   https://www.youtube.com/shorts/VIDEO_ID
// ────────────────────────────────────────────────────────────────
const YOUTUBE_URL = "https://youtu.be/-kn6FHVpj7Q?si=eU0lAdQStTejuoJ8";

function youtubeId(url: string): string | null {
  const m = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/|v\/))([\w-]{6,})/
  );
  return m ? m[1] : null;
}

export default function DemoBody() {
  const { ts } = useI18n();
  const id = youtubeId(YOUTUBE_URL);
  const embed = id
    ? `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`
    : null;

  return (
    <>
      <PageHeader
        eyebrow={ts("Demo")}
        title={
          <>
            {ts("See Raad in ")}
            <em>{ts("action.")}</em>
          </>
        }
        desc={ts("Watch a short walkthrough — from first sale to reports, credit, and more.")}
      />

      <section className="px-[48px] pb-[80px] max-md:px-[20px]">
        <div className="reveal mx-auto max-w-[960px] overflow-hidden rounded-lg border border-line bg-surface shadow-[0_20px_60px_oklch(0_0_0_/_0.25)]">
          <div className="relative aspect-video bg-bg-2">
            {embed ? (
              <iframe
                className="absolute inset-0 h-full w-full"
                src={embed}
                title="Raad POS demo"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              // Shown until a real YouTube URL is added.
              <div className="absolute inset-0 grid place-items-center text-center">
                <div className="flex flex-col items-center gap-[14px]">
                  <span className="grid h-[72px] w-[72px] place-items-center rounded-full bg-accent-soft text-[34px] leading-none text-accent">
                    <i className="bx bx-play" />
                  </span>
                  <p className="font-display text-[18px] font-semibold">
                    {ts("Demo video coming soon.")}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mx-auto mt-[40px] flex max-w-[960px] flex-col items-center gap-[16px] text-center">
          <p className="text-[15px] text-ink-dim">
            {ts("Like what you see? Start in minutes.")}
          </p>
          <SmartCta size="lg" />
        </div>
      </section>
    </>
  );
}
