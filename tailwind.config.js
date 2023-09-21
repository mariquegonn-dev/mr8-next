/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        cel550: "550px",
        cel364: "364px",
        cel356: "356px",
        cel409: "409px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-matricula":
          "linear-gradient(149deg, rgba(30, 141, 252, 0.54) 0%, rgba(30, 141, 252, 0.79) 53.65%, #2250F4 100%)",
      },
      colors: {
        primaryBlue: "#2250F4",
        secundaryBlue: "#0A35CC",
        primaryWhite: "#F7F7F7",
        primaryBlack: "#111111",
        secundaryBlack: "#23272A",
        primaryYellow: "#FFCC52",
        secundaryYellow: "#FDB50B",
        primaryGray: "#C0C0C0",
      },
      boxShadow: {
        custom: "0px 2px 2px 0px rgba(0, 0, 0, 0.25)",
        whatsapp: "0 0 25px #0FAB48",
        whatsappHover:
          "0 0 5px #0FAB48, 0 0 25px #0FAB48, 0 0 50px #0FAB48, 0 0 100px #0FAB48;",
      },
      animation: {
        slideDown: "slideDown 0.4s ease-in-out forwards",
        slideDownFAQ: "slideDownFAQ 0.3s ease-in-out forwards",
        slideContainer: "slideContainer 0.5s ease-in-out forwards",
        handleRotate: "handleRotate 1.5s ease-out",
        pulseAnimation: "2s ease 0s infinite normal running pulse",
        pulseTest: "pulseTest 1.5s infinite",
        kickUp: "kickUp 0.3s ease-in-out",
        down: "down 0.7s ease-in-out",
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
        handleRotate: {
          "0%": { transform: "rotate(0)" },
          "33%": { transform: "rotate(-25deg)" },
          "55%": { transform: "rotate(0)" },
          "77%": { transform: "rotate(25deg)" },
          "100%": { transform: "rotate(0)" },
        },
        pulse: {
          "0%": { boxShadow: "rgb(74 222 128 / 100%) 0px 0px 0px 0px" },
          "70%": { boxShadow: "rgb(255 255 255 / 0%) 0px 0px 0px .95rem" },
          "100%": { boxShadow: "rgb(255 255 255 / 0%) 0px 0px 0px 0px" },
        },
        pulseTest: {
          "0%": { boxShadow: "0 0 0 0 #f8f8f8;" },
          "70%": { boxShadow: "0 0 0 10px rgb(218 103 68 / 0%)" },
          "100%": { boxShadow: "0 0 0 10px rgb(218 103 68 / 0%)" },
        },
        kickUp: {
          "0%": { transform: "translate3d(0, -8px, 0)" },
          "33%": { transform: "translate3d(0, 0, 0)" },
          "77%": { transform: "translate3d(0, -8px, 0)" },
          "100%": { transform: "translate3d(0, 0, 0)" },
        },
        slideDownFAQ: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        down: {
          "0%": { transform: "translate3D(-35px, -35px, 0)", opacity: "0" },
          "100%": { transform: "translate3D(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
