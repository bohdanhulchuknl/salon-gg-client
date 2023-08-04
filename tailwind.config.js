/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");


const MyClass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bree: ['"BreeSerif-Regular"', '"sans-serif"'],
      },
      colors: {
        hoverColor: "#F7AB0A",
      },
      transitionProperty: {
        height: "height",
      },
      variants: {
        height: ["responsive", "hover", "focus"],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "BreeSerif-Regular",
          fontWheight: "700",
          src: "url(/src/fonts/BreeSerif-Regular.ttf)",
        },
      });
    }),
    MyClass
  ],
};
