/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.ejs', // For EJS templating
    './public/**/*.html', // For static HTML files
    './src/**/*.{js,jsx,ts,tsx}', // For JavaScript/TypeScript files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

