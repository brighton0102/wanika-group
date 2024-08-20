/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-Black": "#18051B",
        "regal-blue": "#425476",
        "cardinal-pink": "#930873",
        "san-juan": "#364a6d",
        "wild-sand": "#F7F7F7",
        "forest-green": "#65a30d",
        "custorm-blue": "#030235",
        "custorm-purple": "#e2e3f9",
        "custorm-green": "#4aab3d",
        "dark-green": "#003020",
        "custorm-gray": "#f5f7f8",
        "custorm-yellow": "#f7d00b",
        "turqualse": "#1f948a",
        "custorm-brown": "#643c05",
        "light-brown": "#7a673c",
        "light-green": "#dee765",
        "custorm-pink": "#ec008c",
        "sky-blue": "#00aeef",
        "custorm-light-green": "#9febaa",
        "dark-blue": "#1f4978",
        "dark-brown": "#412315",
        "light-black": "#181b1b",
        "pine-brown": "#EEE1D5",
        "emarald": "#9febaa",
        "light-blue": "#3dc2ed",
        "coffee-brown": "#a48a63",
        "leafy-green": "#2ad495"
      },
      width: {
        w400: "400px",
        "card-width": "400px",
      },
      height: {
        h450: "450px",
        "screen-50": "50vh",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
