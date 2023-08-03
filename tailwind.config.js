/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bree: ['"BreeSerif-Regular"', '"sans-serif"'],
      },
      colors: {
<<<<<<< HEAD
        hoverColor: "#F7AB0A",
      },
=======
        hoverColor: '#F7AB0A'
      },
      transitionProperty: {
        'height': 'height'
      },
      variants: {
        height: ['responsive', 'hover', 'focus']
    }
>>>>>>> f96aac5692b6ac1df4a861eafffd014170edb060
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
  ],
};
