/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      background: "#E5E5E5",
      footer: "#6E6E6E",
      profile: "#65676B",
      "profile-border": "#7B7C8133",
    },
  },
  plugins: [],
};
