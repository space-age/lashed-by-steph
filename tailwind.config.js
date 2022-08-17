/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-to-b": "linear-gradient(rgba(255,255,255,0),#fff 90%);",
      },
      fontFamily: {
        playfair: ["Playfair Display", "sans-serif"],
      },
    },
  },
  plugins: [
    require("tailwindcss-textshadow"),
    require("tailwind-scrollbar-hide"),
    require("tailwind-scrollbar"),
  ],
};

// "linear-gradient(to top, rgba(255, 255, 255, 0.95) 10%, rgba(255, 255, 255, 0.13) 60%, rgba(255, 255, 255, 0.04) 70%);",

// "linear-gradient(to top, rgba(255, 255, 255, 0.95) 10%, rgba(255, 255, 255, 0.13) 30%, rgba(255, 255, 255, 0.04) 60%);",

// "linear-gradient(to top, rgba(255, 255, 255, 0.95) 20%, rgba(255, 255, 255, 0.13) 30%, rgba(255, 255, 255, 0.04) 60%);",

// linear-gradient(rgba(255,255,255,0),#fff 90%)
