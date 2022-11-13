/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      sans: ["Work Sans"],
      Slabo: ["Slabo 27px"],
    },
    extend: {
      colors: {
        primary: "cornflowerblue"
      }
    },
  },
  plugins: [],
}