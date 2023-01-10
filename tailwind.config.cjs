/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      backgroundColor: "#E5E5E5",
      textColorFooter: "#6E6E6E",
    },
  },
  plugins: [],
};
