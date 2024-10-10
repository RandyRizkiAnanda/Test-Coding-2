/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Path untuk folder app
    "./pages/**/*.{js,ts,jsx,tsx}", // Path untuk folder pages (jika ada)
    "./components/**/*.{js,ts,jsx,tsx}", // Path untuk folder components (jika ada)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
