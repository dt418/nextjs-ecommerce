import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["var(--font-satoshi)", ...fontFamily.sans],
        "clash-display": ["var(--font-clash-display)", ...fontFamily.serif],
      },
      colors: {
        "dark-primary": "#2A254B",
        primary: "#4E4D93",
        "light-grey": "#F9F9F9",
        "border-gray": "#EBE8F4",
        "border-dark": "#CAC6DA",
        white: "#FFFFFF",
      },
      fontSize: {
        // Headline Styles
        "headline-one": ["36px", { lineHeight: "1.5" }], // 150% line height
        "headline-two": ["32px", { lineHeight: "1.5" }],
        "headline-three": ["24px", { lineHeight: "1.5" }],
        "headline-four": ["20px", { lineHeight: "1.5" }],
        "headline-five": ["16px", { lineHeight: "1.5" }],
        "headline-six": ["14px", { lineHeight: "1.5" }],

        // Body Text Styles
        "body-small": ["14px", { lineHeight: "1.5" }],
        "body-medium": ["16px", { lineHeight: "1.5" }],
        "body-large": ["18px", { lineHeight: "1.5" }],
      },
    },
  },
  plugins: [],
} satisfies Config;
export default config;
