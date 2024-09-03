/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'ladybird1' : "url(./assets/insects_background/computer/ladybird.png)",
        'ladybird2' : "url(./assets/insects_background/computer/ladybird2.png)",
        'prayingMantis' : "url(./assets/insects_background/computer/praying_mantis.png)",
        'dragonFly' : "url(./assets/insects_background/mobile/dragon-fly.jpg)"
      }
    },
  },
  plugins: [],
}