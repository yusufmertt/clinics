/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      xxl: "1700px",
    },
    extend: {
      colors: {
        brightGreen: "#93CC80",
        darkGreen: "#3F9469",
        /*        brightPrimary: "#06DCD5",
        darkPrimary: "#07948f",
        brightSecondary: "#00DAF0"  */
        brightPrimary: "#50e7be",
        darkPrimary: "#38c29c",
        /* 06CDEF koyu mavisi, 00DAF0 mavisi, 14DDAC yeşili */
      },
    },
  },
  plugins: [],
};
