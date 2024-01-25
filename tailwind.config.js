/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#413861",
        primaryLt: "#C0A9DD",
        primaryDrk: "#2f2a41",
        secondary: "#7D3B8A",
        secondaryDrk: "#502c57",
        grey: "#1a1a1a",
      },
    },
  },
  plugins: [],
};
