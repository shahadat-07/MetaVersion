/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      narrow: ["Pilat Narrow", "Open Sans"],
      extended: ["Pilat Extended", "Open Sans"],
    },
  },
  plugins: [],
};
