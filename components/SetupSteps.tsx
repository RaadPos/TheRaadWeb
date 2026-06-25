// Vertical numbered steps with a connecting line, used by the hardware
// integration guides.
export default function SetupSteps({
  steps,
}: {
  steps: { title: string; desc: string }[];
}) {
  return (
    <div className="mx-auto flex max-w-[720px] flex-col">
      {steps.map((s, i) => (
        <div key={i} className="reveal relative flex gap-[20px] pb-[28px] last:pb-0">
          {i < steps.length - 1 && (
            <span className="absolute bottom-0 left-[21px] top-[46px] w-px bg-line" />
          )}
          <div className="z-[1] grid h-[44px] w-[44px] flex-shrink-0 place-items-center rounded-full border border-[color-mix(in_srgb,var(--accent)_40%,transparent)] bg-accent-soft font-mono text-[14px] font-medium text-accent">
            {i + 1}
          </div>
          <div className="pt-[7px]">
            <h4 className="mb-[5px] font-display text-[18px] font-semibold tracking-[-0.01em]">
              {s.title}
            </h4>
            <p className="text-[14.5px] text-ink-dim text-pretty">{s.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
