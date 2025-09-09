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
          100: "#f7c9b1",
          50: "#fff1eb",
        },
      },
      fontFamily: {
        sans: ["Dm Sans", "sans-serif"], // como usar: 
      },
    },
  },
  plugins: [],
};
