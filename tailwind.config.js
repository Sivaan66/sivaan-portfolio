/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Base surfaces — near-black with a slight teal cast, not pure black
        surface: {
          DEFAULT: "#0a0e0e",
          panel: "#0f1515",
          raised: "#141b1b",
          border: "#1f2b2a",
        },
        // Signal accent — primary interactive/highlight color
        signal: {
          DEFAULT: "#34d8a8",
          dim: "#1f8f70",
          glow: "#5ce8c1",
        },
        // Secondary accent — used sparingly, like a second data series
        amber: {
          DEFAULT: "#f2b134",
          dim: "#b8862a",
        },
        ink: {
          DEFAULT: "#e9f1ef",
          muted: "#a9bfb9",
          faint: "#6b807a",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-texture":
          "linear-gradient(rgba(52,216,168,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(52,216,168,0.035) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        "pulse-dot": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(52,216,168,0.5)" },
          "50%": { boxShadow: "0 0 0 6px rgba(52,216,168,0)" },
        },
        "fade-up": {
          from: { opacity: 0, transform: "translateY(16px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
