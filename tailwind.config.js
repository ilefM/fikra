/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          custom: "#FF4545",
        },
        dark: {
          400: "#14181D",
          300: "#1A2026",
          200: "#273139",
          0: "#F8F9FA",
        },
        light: {
          200: "#F1F5F9",
        },
      },
    },
  },
  plugins: [],
};
