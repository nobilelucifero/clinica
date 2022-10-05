const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      animation: {
        reveal: "reveal 1s ease-in-out",
      },
      keyframes: {
        reveal: {
          "0%": {
            mask: "linear-gradient(90deg, #000 25%, #000000e6 50%, #00000000) 150% 0 / 400% no-repeat",
            opacity: `.2`,
          },
          "100%": {
            mask: `linear-gradient(90deg, #000 25%, #000000e6 50%, #00000000) 0 / 400% no-repeat`,
            opacity: `1`,
          },
        },
      },
    },
  },
  plugins: [],
};
