/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primaryBlue: "#1E8DFC",
        secundaryBlue: "#2250f4",
        primaryWhite: "#F7F7F7",
        primaryBlack: "#111111",
      },
      boxShadow: {
        custom: "0px 2px 2px 0px rgba(0, 0, 0, 0.25)",
      },
      animation: {
        slideDown: "slideDown 0.4s ease-in-out forwards",
        slideContainer: "slideContainer 0.5s ease-in-out forwards",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideContainer: {
          "0%": { maxHeight: "0" },
          "100%": { maxHeight: "1000px" },
        },
      },
    },
  },
  plugins: [],
};
