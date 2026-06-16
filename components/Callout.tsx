import { ReactNode } from "react";

type Variant = "info" | "tip" | "warn";

const styles: Record<Variant, { wrap: string; icon: string; defIcon: string }> = {
  info: {
    wrap: "border-[color-mix(in_srgb,var(--accent)_45%,transparent)] bg-accent-soft",
    icon: "text-accent",
    defIcon: "bx-info-circle",
  },
  tip: {
    wrap: "border-[color-mix(in_srgb,var(--accent)_45%,transparent)] bg-accent-soft",
    icon: "text-accent",
    defIcon: "bx-bulb",
  },
  warn: {
    wrap: "border-[oklch(0.72_0.18_45_/_0.4)] bg-[oklch(0.72_0.18_45_/_0.1)]",
    icon: "text-warn",
    defIcon: "bx-error",
  },
};

export default function Callout({
  variant = "info",
  icon,
  title,
  children,
}: {
  variant?: Variant;
  icon?: string;
  title?: string;
  children: ReactNode;
}) {
  const s = styles[variant];
  return (
    <div className={`reveal flex items-start gap-[14px] rounded-lg border p-[20px_22px] ${s.wrap}`}>
      <i className={`bx ${icon ?? s.defIcon} mt-[1px] flex-shrink-0 text-[22px] leading-none ${s.icon}`} />
      <div className="text-[14px] leading-[1.6] text-ink text-pretty">
        {title && <p className="mb-[3px] font-semibold">{title}</p>}
        {children}
      </div>
    </div>
  );
}
