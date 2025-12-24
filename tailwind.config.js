/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary: Deep Navy Slate (Trust, Ocean, Stability)
        'acetech-blue': '#0f172a', 
        
        // Accent: Safety Gold / Amber (Construction, Caution, High-Vis)
        'acetech-orange': '#eab308', 
      }
    },
  },
  plugins: [],
}