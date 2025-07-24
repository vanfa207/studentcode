/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens:{
        'sm' : '320px',
        'sl' : '375px',
        'sx' : '425px',
        'lm' :  '520px',
        'm4' : '1280px',
      },
      fontFamily: {
        battambang: ['"Battambang"', 'system-ui'],
      },
    },
  },
  plugins: [],
}

