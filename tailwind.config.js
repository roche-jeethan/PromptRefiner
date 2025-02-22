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
        'light-mode-image': "url('./assets/bg-white.svg')",
        'dark-mode-image': "url('./assets/bg-dark.svg')",
      }),
    },
  },
  plugins: [],
};
