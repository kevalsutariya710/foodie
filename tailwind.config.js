// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '650px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        pizza: "url('./assets/pizza.png')",
      },
    },

  },
  plugins: [],
}

