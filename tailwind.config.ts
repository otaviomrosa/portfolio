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
      typography: {
        DEFAULT: {
          css: {
            color: "#b8b8b8",
            a: { color: "#cccccc", "&:hover": { color: "#f4f4f4" } },
            h1: { color: "#f4f4f4" },
            h2: { color: "#f4f4f4" },
            h3: { color: "#e8e8e8" },
            h4: { color: "#d8d8d8" },
            strong: { color: "#f4f4f4" },
            code: { color: "#cccccc", backgroundColor: "rgba(255,255,255,0.08)", borderRadius: "4px", padding: "2px 5px" },
            blockquote: { borderLeftColor: "rgba(255,255,255,0.20)", color: "#888888" },
            hr: { borderColor: "rgba(255,255,255,0.08)" },
            "pre code": { backgroundColor: "transparent", padding: "0" },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
