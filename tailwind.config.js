/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Sky: "#27A8E0",
        Blue: "#292561",
        LightSky: "#E7F6FC",
        MidNightBlack: "#181818",
        EveningBlack: "#1a1a1a",
        DarkGray: "#646464",
        SlateGray: "#404040",
        LightGray: "#959595",
        SilverGray: "#B3B3B3",
        Green: "#316E03",
      },
      fontFamily: {
        cairoRegular: ['cairo-regular', 'sans-serif'],
      }
    },
  }
}