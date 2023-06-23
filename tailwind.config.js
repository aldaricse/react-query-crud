/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'fit-120px': 'repeat(auto-fit, minmax(250px, 1fr))'
      },
    },
  },
  plugins: [],
}