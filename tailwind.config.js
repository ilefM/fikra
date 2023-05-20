/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "600px",
      md: "768px",
      lg: "1280px",
    },
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
          300: "#F8F9FA",
          200: "#E9ECEF",
          100: "#DEE2E6",
          0: "#F8F9FA",
        },
      },
    },
  },
  plugins: [],
};
