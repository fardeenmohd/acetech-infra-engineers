/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'acetech-blue': '#1e3a8a', // Dark blue for construction vibe
        'acetech-orange': '#ea580c', // Safety orange for accents
      }
    },
  },
  plugins: [],
}