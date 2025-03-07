/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center:true,
      padding:'50px',
    },
    extend: {
      colors:{
        primary:"#faad1b"
      },
      screens: {
        '2xl' : '1320px'
      }
    },
  },
  plugins: [],
}

