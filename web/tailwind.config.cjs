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
          15: '#4594DD',
          30: '#4594DD',
          40: '#',
          65: '#',
          85: '#',
          100: '#',
          
        },
        DarkBlue: {
          400: '#094A7B',
          500: '#032742'
        },
      },
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}
