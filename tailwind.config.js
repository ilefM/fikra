/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          400: "#26262C",
          300: "#323d51",
          200: "#323d51",
          100: "#6C757D",
        },
        light: {
          400: "#ADB5BD",
          300: "#CED4DA",
          200: "#DEE2E6",
          100: "#E9ECEF",
        },
      },
    },
  },
  plugins: [],
};
