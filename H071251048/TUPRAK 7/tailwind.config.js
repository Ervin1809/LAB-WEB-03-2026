/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        senja: {
          50: "#fff7ed",
          100: "#ffedd5",
          600: "#c2410c",
          700: "#9a3412",
          900: "#431407"
        }
      }
    }
  },
  plugins: []
}
