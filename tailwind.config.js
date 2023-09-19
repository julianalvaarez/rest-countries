/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        'cardDark': 'hsl(209, 23%, 22%)',
        'darkBg': 'hsl(207, 26%, 17%)',
        'lightInput': 'hsl(0, 0%, 52%)',
        'lightBg': 'hsl(0, 0%, 98%)',
        'lightCard': 'hsl(0, 0%, 100%)'
      },
      colors: {
        'lightText': 'hsl(200, 15%, 8%)',
        'darkText': 'hsl(0, 0%, 100%)'
        
      }
    },
  },
  plugins: [],
}