// ────────────────────────────────────────────────────────────────
// Brand logo with automatic light/dark swap.
//   • LOGO_SRC       → shown in DARK mode  (use a light/white logo)
//   • LOGO_SRC_LIGHT → shown in LIGHT mode (use a dark logo)
// The <picture> element switches based on the system color scheme, so
// no JS is needed. Drop your own files in and keep the same paths, or
// point these at your artwork (PNG/SVG). Height-based slot: the image
// renders at a fixed height with auto width.
// ────────────────────────────────────────────────────────────────
const LOGO_SRC = "/assets/logo.png";
const LOGO_SRC_LIGHT = "/assets/dark.png";

type LogoProps = {
  href?: string;
  height?: number;
  showWordmark?: boolean;
  className?: string;
};

export default function Logo({
  href,
  height = 30,
  showWordmark = false,
  className = "",
}: LogoProps) {
  const inner = (
    <>
      <span
        className="logo-slot inline-flex max-w-[170px] flex-shrink-0 items-center overflow-hidden"
        style={{ height }}
      >
        <picture className="flex h-full items-center">
          <source srcSet={LOGO_SRC_LIGHT} media="(prefers-color-scheme: light)" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={LOGO_SRC}
            alt="Raad logo"
            className="h-full w-auto select-none object-contain object-left"
            draggable={false}
          />
        </picture>
      </span>
      {showWordmark && <span>Raad</span>}
    </>
  );

  const cls = `inline-flex items-center gap-[9px] font-display text-[17px] font-semibold tracking-[-0.01em] ${className}`;

  return href ? (
    <a href={href} className={cls} aria-label="Raad — home">
      {inner}
    </a>
  ) : (
    <span className={cls}>{inner}</span>
  );
}
