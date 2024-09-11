import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-primary": "#2A254B",
        primary: "#4E4D93",
        "light-grey": "#F9F9F9",
        "border-gray": "#EBE8F4",
        "border-dark": "#CAC6DA",
        white: "#FFFFFF",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        // Headline Styles
        "headline-one": ["36pt", { lineHeight: "1.5" }], // 150% line height
        "headline-two": ["32pt", { lineHeight: "1.5" }],
        "headline-three": ["24pt", { lineHeight: "1.5" }],
        "headline-four": ["20pt", { lineHeight: "1.5" }],
        "headline-five": ["16pt", { lineHeight: "1.5" }],
        "headline-six": ["14pt", { lineHeight: "1.5" }],

        // Body Text Styles
        "body-small": ["14pt", { lineHeight: "1.5" }],
        "body-medium": ["16pt", { lineHeight: "1.5" }],
        "body-large": ["18pt", { lineHeight: "1.5" }],
      },
    },
  },
  plugins: [],
} satisfies Config;
export default config;
