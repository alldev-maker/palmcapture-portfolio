/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "2rem",
          xl: "3rem",
          "2xl": "5rem",
        },
      },
      colors: {
        "light-brown-500": "#C89354",
        "brown-500": "#B27950",
        "brown-900": "#4B3322",
        "light-brown-600": "#B6864C",
        "pink-600": "#C75066",
        "pink-500": "#DB5870",
        "green-600": "#062329",
        "light-brown-50": "#FAF4EE",
        "pink-50": "#FBEEF1",
        "green-50": "#E6E9EA",
      },
      fontFamily: {
        voyage: ["Voyage", "serif"],
      },
      backgroundColor: {
        "home-portfolio": "rgba(6, 10, 10, 0.8)",
      },
      backgroundImage: {
        "home-port": "url('/home-portfolio-bg.png')",
        portfolio: "url('/bg-portfolio.png')",
        service: "url('/bg-service.png')",
      },
      textShadow: {
        heading: "0px 4px 14.7px rgba(0, 0, 0, 0.3)",
        body: "0px 4px 13.4px rgba(0, 0, 0, 0.8)",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
