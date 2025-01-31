/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", 
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#f8fafc",
          dark: "#1e293b",
        },
        text: {
          light: "#0f172a",
          dark: "#f8fafc",
        },
        accent: {
          light: "#3b82f6",
          dark: "#6366f1",
        },
      },
    },
  },
  plugins: [],
};
