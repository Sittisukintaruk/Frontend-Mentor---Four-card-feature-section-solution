/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}", "*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontSize: {
      sm: "0.8rem",
      base: ["0.938rem", "1.5rem"],
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "2.25rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    colors: {
      Neutral: {
        VeryLightGray: "#FAFAFA",
        DarkBluetrin: "#595c6d",
        VeryDarkBlue: "#4C4E61",
        GrayishBlue: "#A3A5AE",
      },
      primary: {
        blue: "#549EF2",
        red: "#EA5353",
        cyan: "#45D3D3",
        orange: "#FCAF4A",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
