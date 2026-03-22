import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      colors: {
        // Accent
        accent:         "rgb(var(--c-accent) / <alpha-value>)",
        "accent-strong":"rgb(var(--c-accent-strong) / <alpha-value>)",
        "accent-mid":   "rgb(var(--c-accent-mid) / <alpha-value>)",
        "accent-dim":   "rgb(var(--c-accent-dim) / <alpha-value>)",
        // Surfaces
        surface:        "rgb(var(--c-surface) / <alpha-value>)",
        "surface-muted":"rgb(var(--c-surface-muted) / <alpha-value>)",
        chip:           "rgb(var(--c-chip) / <alpha-value>)",
        track:          "rgb(var(--c-track) / <alpha-value>)",
        // Borders
        line:           "rgb(var(--c-line) / <alpha-value>)",
        // Text
        fg:             "rgb(var(--c-fg) / <alpha-value>)",
        "fg-mid":       "rgb(var(--c-fg-mid) / <alpha-value>)",
        "fg-dim":       "rgb(var(--c-fg-dim) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};

export default config;
