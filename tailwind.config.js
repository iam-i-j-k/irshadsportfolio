/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inriasans: ['"Inria Sans"', 'sans-serif'],
        inriaserif: ['"Inria Serif"', 'serif'],
        redressed: ['"Redressed"', 'cursive'],
        opensans: ['"Open Sans"', 'sans-serif'],
        inter: ["Inter", "sans-serif"],
        poppins: ['"Poppins"', 'sans-serif'], // Lowercase key
      },
    },
  },
  plugins: [],
}
