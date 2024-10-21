/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "400px",
      sm: "600px",
      md: "768px",
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
        blue: {
          custom: "#3a506b",
        },
      },
    },
  },
  plugins: [],
};
