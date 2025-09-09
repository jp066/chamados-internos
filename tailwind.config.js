/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brightbee: {
          400: "#e9692c",
          300: "#f08a54",
          200: "#c94e0cc6",
          150: "#f5b19e",
          125: "#f9d6ce",
          100: "#f7c9b1",
          50: "#fff1eb",
          25: "#fffbf9",
        },
      },
      fontFamily: {
        sans: ["Dm Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
