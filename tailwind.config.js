/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [],
  },
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        opensans: ['Open Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        bricolage: ['Poppins', 'sans-serif'],
        alumni: ['Alumni Sans Inline One', 'cursive'],
      },
    },
  },
  plugins: [require("daisyui")],
}

