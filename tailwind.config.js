/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        bree: ['"BreeSerif-Regular"', '"sans-serif"'],
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "BreeSerif-Regular",
          fontWheight: "700",
          src: "url(/src/fonts/BreeSerif-Regular.ttf)",
        },
      });
    }),
  ],
};
