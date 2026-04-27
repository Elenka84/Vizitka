/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f4f6ff",
          500: "#6a5cff",
          600: "#5849ff",
          900: "#17142b"
        }
      }
    }
  },
  plugins: []
};
