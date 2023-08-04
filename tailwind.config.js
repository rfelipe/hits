/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/**/*.{html,js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    fontFamily: {
      edenred: ["Edenred"],
      ubuntu: ["Ubuntu"],
    },
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      "light-violet": "#C8C3FF",
      "light-cobalt": "#B0EFFF",
      "cold-white": "#F1F7FF",
      "light-olive": "#DCF691",
      "original-red": "#F72717",
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwind-scrollbar-hide")],
};
