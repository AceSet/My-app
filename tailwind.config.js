/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lavender-web' : '#DADFF7',
        'gunmental' : '#232C33',
        'dark-sky-blue' : '#A0C1D1',
      }
    },
  },
  plugins: [],
}