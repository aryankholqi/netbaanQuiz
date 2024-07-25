import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "380px",
      "2xs": "430px",
      "3xs": "520px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1760px",
    },
    fontFamily: {
      balooDaRegular: ["Baloo-Da"],
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
          "2xl": "80px",
          "3xl": "162px",
        },
      },
      colors: {
        mainDark: "#10141A",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: "#10141A",
          },
        },
      },
    }),
  ],
};
