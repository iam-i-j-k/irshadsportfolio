/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        redressed: ['"Redressed"', 'cursive'],
        opensans: ['"Open Sans"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'], // Lowercase key
      },
    },
  },
  plugins: [],
}
