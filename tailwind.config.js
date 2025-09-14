/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       blackColor: '#000000',
       whiteColor: '#FAFAFA'
        }
    },
  },
  plugins: [],
}