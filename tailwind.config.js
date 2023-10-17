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
        primaryDarker: "#4E0307",
        white: "#FFE9D6",
        gray: "#79797C",
        secondary: "#FFF399",
        terciary: "#FCAB5F",
        black: "#1F1E1F"
    },
    fontFamily: {
        autour: ["Autour One"],
        cabin: ["Cabin", "sans-serif"]
    }
  },
  plugins: [],
};

