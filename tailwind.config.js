// /** @type {import('tailwindcss').Config} */

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         blackColor: "#000000",
//         whiteColor: "#FAFAFA",
//       },
//       fontFamily: {
//         poppins: ["Poppins", "sans-serif"],
//       },
//       container: {
//         center: true,
//         screens: {
//           xl: "1170px",
//         },
//       },
//     },
//   },
//   plugins: [],
// };
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blackColor: "#000000",
        whiteColor: "#FAFAFA",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      container: {
        center: true,
        screens: {
          xl: "1170px",
        },
      },
    },
  },
  plugins: [],
});
