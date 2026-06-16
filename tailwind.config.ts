import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-2": "var(--bg-2)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        line: "var(--line)",
        "line-soft": "var(--line-soft)",
        ink: {
          DEFAULT: "var(--text)",
          dim: "var(--text-dim)",
          muted: "var(--text-muted)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          hi: "var(--accent-hi)",
          soft: "var(--accent-soft)",
          deep: "var(--accent-deep)",
          on: "var(--on-accent)",
        },
        good: "oklch(0.78 0.16 155)",
        warn: "oklch(0.72 0.18 45)",
        // Theme-aware overlay tint: white in dark mode, black in light mode.
        // Use with an alpha, e.g. bg-tint/[0.04], border-tint/[0.08].
        tint: "rgb(var(--tint) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        DEFAULT: "16px",
        lg: "24px",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(.22,.8,.3,1)",
        ease: "cubic-bezier(.22,.8,.3,1)",
      },
      maxWidth: {
        content: "1240px",
      },
      keyframes: {
        drift1: {
          from: { transform: "translate(0,0) scale(1)" },
          to: { transform: "translate(9vw, 7vh) scale(1.15)" },
        },
        drift2: {
          from: { transform: "translate(0,0) scale(1.1)" },
          to: { transform: "translate(-8vw, 9vh) scale(0.95)" },
        },
        drift3: {
          from: { transform: "translate(0,0)" },
          to: { transform: "translate(-10vw, -6vh) scale(1.2)" },
        },
        twinkle: {
          "0%,100%": { opacity: "0.12" },
          "50%": { opacity: "0.7" },
        },
        beam: {
          "0%, 55%, 100%": { opacity: "0", transform: "translateX(-26vw) rotate(14deg)" },
          "62%": { opacity: "0.7" },
          "78%": { opacity: "0", transform: "translateX(26vw) rotate(14deg)" },
        },
        pulse: {
          "0%": { boxShadow: "0 0 0 0 color-mix(in srgb, var(--accent) 55%, transparent)" },
          "70%": { boxShadow: "0 0 0 9px transparent" },
          "100%": { boxShadow: "0 0 0 0 transparent" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-11px)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        grow: {
          from: { transform: "scaleY(0)" },
        },
        scan: {
          "0%,100%": { top: "22%" },
          "50%": { top: "74%" },
        },
      },
      animation: {
        drift1: "drift1 26s ease-in-out infinite alternate",
        drift2: "drift2 32s ease-in-out infinite alternate",
        drift3: "drift3 38s ease-in-out infinite alternate",
        twinkle: "twinkle 4.4s ease-in-out infinite",
        beam: "beam 9s ease-in-out infinite",
        pulse: "pulse 2s infinite",
        floaty: "floaty 6.5s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        grow: "grow 0.9s cubic-bezier(.22,.8,.3,1) backwards",
        scan: "scan 2.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
