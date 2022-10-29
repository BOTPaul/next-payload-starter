/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'body': '"Poppins", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif'
      }
    },
  },
  plugins: [],
}
