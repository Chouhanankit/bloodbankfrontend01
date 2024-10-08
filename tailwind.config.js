/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'IMG3':"url('../src/assets/bg3.jpg')",
        'IMG1':"url('../src/assets/donateIMG.jpg')",
        'IMG2':"url('../src/assets/IMG2.jpg')"
      }
    },
  },
  plugins: [],
}

