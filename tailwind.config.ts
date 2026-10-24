import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: "#FFE600", dim: "#C9B400" },
        ink: { DEFAULT: "#050505", 900: "#0A0A0A", 800: "#111111", 700: "#1A1A1A", 600: "#262626" },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        rail: { from: { transform: "translateY(0)" }, to: { transform: "translateY(-50%)" } },
        spin: { to: { transform: "rotate(360deg)" } },
        floaty: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
      },
      animation: { rail: "rail 40s linear infinite", "spin-slow": "spin 60s linear infinite", marquee: "marquee 30s linear infinite", floaty: "floaty 6s ease-in-out infinite" },
    },
  },
  plugins: [],
};
export default config;
