/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
        primary: "#F82530",
        primaryDark: "#8A050C",
        white: "#FFE9D6",
        secondary: "#FFF399",
        terciary: "#FCAB5F",
        terciaryDark: "#8C4503",
        black: "#1F1E1F"
    },
    fontFamily: {
        autour: ["Autour One"],
        cabin: ["Cabin", "sans-serif"]
    }
  },
  plugins: [],
};

