import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // 👇 Cambia este color para cambiar el acento de todo el sitio
        accent: {
          DEFAULT: "#dc2626",
          dark: "#f87171",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1120px",
      },
      keyframes: {
        "aurora-a": {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "33%": { transform: "translate3d(4rem, -3rem, 0) scale(1.14)" },
          "66%": { transform: "translate3d(-3rem, 3rem, 0) scale(0.92)" },
        },
        "aurora-b": {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "40%": { transform: "translate3d(-4rem, 4rem, 0) scale(1.18)" },
          "70%": { transform: "translate3d(3rem, -2rem, 0) scale(0.9)" },
        },
        marquee: {
          from: { transform: "translate3d(0, 0, 0)" },
          to: { transform: "translate3d(-50%, 0, 0)" },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.92)", opacity: "0.65" },
          "70%, 100%": { transform: "scale(1.5)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -16px, 0)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "aurora-a": "aurora-a 30s ease-in-out infinite",
        "aurora-b": "aurora-b 38s ease-in-out infinite",
        marquee: "marquee 42s linear infinite",
        "gradient-pan": "gradient-pan 9s ease infinite",
        "pulse-ring": "pulse-ring 3.2s ease-out infinite",
        float: "float 8s ease-in-out infinite",
        "spin-slow": "spin-slow 18s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
