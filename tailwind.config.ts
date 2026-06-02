import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-space)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        bg: "#0a0a0a",
        surface: "#111111",
        accent: "#d0d0d0",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#b0b0c0",
            a: { color: "#d0d0d0", "&:hover": { color: "#ffffff" } },
            h1: { color: "#f0f0f0" },
            h2: { color: "#f0f0f0" },
            h3: { color: "#e0e0f0" },
            h4: { color: "#d0d0e0" },
            strong: { color: "#f0f0f0" },
            code: { color: "#d0d0d0", backgroundColor: "rgba(255,255,255,0.07)", borderRadius: "4px", padding: "2px 5px" },
            blockquote: { borderLeftColor: "rgba(255,255,255,0.2)", color: "#888888" },
            hr: { borderColor: "rgba(255,255,255,0.07)" },
            "pre code": { backgroundColor: "transparent", padding: "0" },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
