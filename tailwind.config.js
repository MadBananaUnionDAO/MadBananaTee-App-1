/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green' : '#2C6700',
        'bone' : '#E5E4D7',
        'yellow' : '#FFCF79'
      },
      screens: {
        'smallest' : '380px'
      }
    },
  },
  plugins: [],
}