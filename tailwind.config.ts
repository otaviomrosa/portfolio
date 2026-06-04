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
            color: "#bcbcd6",
            a: { color: "#cccce0", "&:hover": { color: "#f4f4fc" } },
            h1: { color: "#f4f4fc" },
            h2: { color: "#f4f4fc" },
            h3: { color: "#e0e0f8" },
            h4: { color: "#d0d0ec" },
            strong: { color: "#f4f4fc" },
            code: { color: "#cccce0", backgroundColor: "rgba(160,150,255,0.10)", borderRadius: "4px", padding: "2px 5px" },
            blockquote: { borderLeftColor: "rgba(170,160,255,0.25)", color: "#9898b8" },
            hr: { borderColor: "rgba(170,160,255,0.10)" },
            "pre code": { backgroundColor: "transparent", padding: "0" },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
