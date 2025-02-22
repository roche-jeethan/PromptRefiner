/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", 
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'bgWhite': "url('./assets/bg-white.svg')",
        'bgDark': "url('./assets/bg-dark.svg')",
      }),
    },
  },
  plugins: [],
};
