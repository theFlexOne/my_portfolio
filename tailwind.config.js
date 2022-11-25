/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#99E4FF",
          100: "#E6F8FF",
          200: "#CCF1FF",
          300: "#99E4FF",
          400: "#7AB6CC",
          500: "#5C8999",
          600: "#3D5B66",
          700: "#2E444D",
          800: "#1F2D33",
          900: "#10171A",
          black: "#080B0D",
        },
        bg: {
          lightest: "#797982",
          light: "#4A4A4F",
          default: "#313136",
          dark: "#1A1A1C",
        },
      },
      fontFamily: {
        primary: '"Inter", sans-serif',
      },
      letterSpacing: {
        xl: "1.5px",
        "2xl": "2px",
        "3xl": "3px",
        "4xl": "4px",
        "5xl": "5px",
      },
    },
  },
  plugins: [],
};
