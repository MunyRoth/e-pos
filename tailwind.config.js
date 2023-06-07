/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'fill': '88vh',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

