/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FACC15",
        secondary: "#FDE047",
        dark: "#000000",
        surface: "#050505",
        card: "#0A0A0A",
        muted: "#94A3B8",
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
