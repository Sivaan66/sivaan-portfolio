/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Dashboard surfaces — deep navy/black inspired by modern analytics UIs
        surface: {
          DEFAULT: "#090b10",
          panel: "#10131a",
          raised: "#171b24",
          border: "#252b38",
        },
        // Primary dashboard signal — blue used for active states and data emphasis
        signal: {
          DEFAULT: "#3b82f6",
          dim: "#2563eb",
          glow: "#60a5fa",
        },
        // Secondary accent — reserved for warnings/highlights
        amber: {
          DEFAULT: "#f2b134",
          dim: "#b8862a",
        },
        ink: {
          DEFAULT: "#f3f5f8",
          muted: "#a7afbd",
          faint: "#687181",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-texture":
          "linear-gradient(rgba(59,130,246,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.035) 1px, transparent 1px)",
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
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(59,130,246,0.5)" },
          "50%": { boxShadow: "0 0 0 6px rgba(59,130,246,0)" },
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
