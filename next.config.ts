import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        // Agora o padrão do site todo assume a nossa nova fonte elegante
        sans: ['var(--font-montserrat)', ...defaultTheme.fontFamily.sans],
        semibold: ['var(--font-montserrat)'],
      },
    },
  },
  plugins: [],
};
export default config;