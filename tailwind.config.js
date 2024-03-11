/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#C5C6D0",
        "gray-50": "#59515E",
        "gray-100": "#322D31",
        "primary-20":"#F57C00",
        "primary-100": "rgba(16,16,16,0.5)",
      },
      fontFamily: {
        courgette: ["Courgette", "cursive"],
        roboto: ["Roboto", "sans-serif"],
        raleway: ["Raleway","sans-serif"]
      },
    },
    screens: {
      '3xs': "200px",
      '2xs': "350px",
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }

  },
  plugins: [],
}
