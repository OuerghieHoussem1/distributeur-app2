/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      'bg-all':"url('/src/background.png')"
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}