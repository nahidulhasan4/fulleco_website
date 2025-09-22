import withMT from "@material-tailwind/react/utils/withMT";
 
export default withMT({
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}"
  ],
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