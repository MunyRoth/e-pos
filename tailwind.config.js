/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#32a852',
      },
      height: {
        'fill': '88vh',
      },
      scale: {
        '98': '0.98'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

