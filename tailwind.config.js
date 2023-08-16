/** @type {import('tailwindcss').Config} */
const { COLORS } = require("./src/utils/styles/colors.ts");
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  darkMode: "media",
  theme: {
    fontWeight: {
      normal: 400,
      medium: 600, //semibold in design
      semibold: 700, //bold in design
      bold: 800, //extrabold in design
    },
    fontFamily: {
      primary: ['"Mulish"', "ui-sans-serif", "sans-serif"],
    },
    fontSize: {
      6: "6rem", //temp size for gig creation right arrow
      title1: ["3rem", "3.5rem"], //['48px', '56px']	->	['45px', '52.5px']
      title2: ["2rem", "2.25rem"], //['32px', '36px']	->	['30px', '33.75px']
      title3: ["1.5rem", "2rem"], //['24px', '32px']	->	['22.5px', '30px']
      large: ["1.125rem", "1.5rem"], //['18px', '24px']	->	['16.875px', '22.5px']
      regular: ["1rem", "1.25rem"], //['16px', '20px']	->	['15px', '18.75px']
      small: ["0.875rem", "1rem"], //['14px', '16px']	->	['13.125px', '15px']
      tiny: ["0.75rem", "1rem"], //['12px', '16px']	->	['11.25px', '15px']
    },
    colors: {},
    boxShadow: {
      "design-sm":
        "0px 0px 1px rgba(20, 20, 20, 0.04), 0px 0px 8px rgba(20, 20, 20, 0.08)",
      "design-md":
        "0px 0px 1px rgba(20, 20, 20, 0.08), 0px 1px 8px 2px rgba(20, 20, 20, 0.08)",
      "design-lg":
        "0px 0px 1px rgba(20, 20, 20, 0.08), 0px 1px 24px 8px rgba(20, 20, 20, 0.08)",
      "design-alt": "0px 3px 6px 2px rgba(102, 102, 102, 0.2)",
      "design-tutorial":
        "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 45px rgba(0, 0, 0, 0.25)",
      none: "none",
    },
    extend: {
      textColor: {
        skin: {
          base: "hsl(var(--color-text-base) / <alpha-value>)",
          muted: "hsl(var(--color-text-muted) / <alpha-value>)",
          inverted: "hsl(var(--color-text-inverted) / <alpha-value>)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "hsl(var(--color-fill) / <alpha-value>)",
          "button-accent": "hsl(var(--color-button-accent) / <alpha-value>)",
          "button-accent-hover":
            "hsl(var(--color-button-accent-hover) / <alpha-value>)",
          "button-muted": "hsl(var(--color-button-muted) / <alpha-value>)",
        },
      },
      gradientColorStops: {
        skin: {
          hue: "hsl(var(--color-fill) / <alpha-value>)",
        },
      },
      colors: { ...COLORS },
      spacing: {
        "80vh": "80vh",
        "70vh": "70vh",
        "40vh": "40vh",
        "40vw": "40vw",
      },
    },
  },
  plugins: [],
};
