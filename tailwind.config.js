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
        poppinsBold: ['"Poppins-Bold"', '"sans-serif"'],
      },
      colors: {
        firstColor: "#2F2E33",
        secondColor: "#D5D6D2",
        thirdColor: "#FFFFFF",
        fourColor: "rgb(20 184 166)",
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
          fontFamily: "Poppins-Bold",
          fontWeight: "700",
          src: "url(/src/fonts/Poppins-Bold.ttf)",
        },
      });
    }),
    MyClass,
  ],
};
