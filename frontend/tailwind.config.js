/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'ladybird1' : "url(@/assets/backgroundImages/computer/ladybird.png)",
        'ladybird2' : "url(@/assets/backgroundImages/computer/ladybird2.png)",
        'prayingMantis' : "url(@/assets/backgroundImages/computer/praying_mantis.png)",
        'dragonFly' : "url(@/assets/backgroundImages/mobile/dragon-fly.jpg)"
      }
    },
  },
  plugins: [],
}

