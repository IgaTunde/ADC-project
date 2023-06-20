/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        worksans: "'Work Sans', sans-serif",
        poppins: "'Poppins', sans-serif",
        montserrat: "'Montserrat', sans-serif"
      },
    },
  },
  plugins: [],
}

