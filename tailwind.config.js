/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brightbee: {
          1: "#44352e",
          10: "#564239",
          20: "#404041",
          30: "#282828ff",
          900: "#3c1501ff",
          600: "#9f2b0d",
          400: "#e9692c",
          300: "#f08a54",
          200: "#c94e0cc6",
          150: "#f5b19e",
          125: "#f9d6ce",
          100: "#f7c9b1",
          50: "#fff1eb",
          25: "#fffbf9",
        },
        brightbeeDark: {
          1.2: "#282828ff",
          1: "#1E1E1E",
          2: "#1F2937",
          3: "#F97316",
          4: "#EAB308",
          5: "#22C55E",
          6: "#3B82F6",
          7: "#252525",
          8: "#2C2C2C",
          9: "#373737",
          10: "#414141",
          11: "#4B4B4B",
          12: "#5A5A5A",
          13: "#404041",
          14: "#ffc20e",
          15: "#68686aff"
        },
        headerDark: {
          1: "#121212",
          2: "#060910ff",
          3: "#0c101aff",
        },
        headerLight: {
          1: "#e9692c",
          2: "#f08a54",
          3: "#c94e0cc6",
        },
      },
      fontFamily: {
        sans: ["Dm Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
