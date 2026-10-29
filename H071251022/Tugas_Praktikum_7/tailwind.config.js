/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        krem: {
          50: "#fdfaf5",
          100: "#f8f1e5",
          200: "#efe3cc",
          300: "#e2d0ad",
        },
        kopi: {
          300: "#b08968",
          500: "#8a5a3c",
          600: "#6f4529",
          700: "#5a3720",
          900: "#2f1d11",
        },
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        judul: ["Playfair Display", "ui-serif", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
