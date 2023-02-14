/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Gray: '#F0F0F2',
        Brown: '#473404',
        Beige: "#B28484",
        Yellow: '#FFC632',
        Orange: '#FF9900',
        LightOrange: '#D4CCB6',
        LightBlue: {
          400: '#4594DD',
          500: '#256ABB',
          
        },
        DarkBlue: {
          400: '#094A7B',
          500: '#032742'
        },
      }
    },
  },
  plugins: [],
}
