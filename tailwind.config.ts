import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        zh: ["var(--font-zh)", "serif"],
      },
      colors: {
        ink: "#06060a",
        bone: "#f4ecdc",
        gold: "#d4af37",
        sigil: {
          payfi: "#FFB100",
          infofi: "#22E1E1",
          enerfi: "#FFEF5C",
          chronofi: "#C9C9D6",
          spacetimefi: "#9B7CF6",
          biofi: "#5BE39C",
          cultufi: "#FF7A45",
          visufi: "#FF55B0",
          iconofi: "#F0EAD6",
        },
      },
      animation: {
        "slow-spin": "spin 60s linear infinite",
        "drift": "drift 20s ease-in-out infinite",
        "pulse-soft": "pulseSoft 4s ease-in-out infinite",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(10px, -8px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.9" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
