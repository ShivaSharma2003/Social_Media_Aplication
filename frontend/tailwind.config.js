/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '320px',

      'tablet': '640px',

      'laptop': '1024px',

      'desktop': '1280px',
    },
    extend: {
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
