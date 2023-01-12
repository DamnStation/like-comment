/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    backgroundImage: {
      "bottom-triangle-element":
        "url('src/assets/bottom-triangle-element.svg')",
      hack_soft_orange_asset: "url('src/assets/hack_soft_orange_asset.svg')",
    },
    fontFamily: {
      sans: ["Roboto"],
      roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      background: "#E5E5E5",
      footer: "#6E6E6E",
      profile: "#65676B",
      "profile-border": "#7b7c8133",
      "primary-button": "#FD7500",
    },
  },
  plugins: [],
};
