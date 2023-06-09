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
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

