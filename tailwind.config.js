/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "nurpet-blue": "#003366",
        "nurpet-light-blue": "#0066cc",
        "nurpet-gray": "#f5f5f5",
        "nurpet-dark-gray": "#333333",
        "nurpet-orange": "#FF4B37",
        "nurpet-black": "#2C2E35",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
