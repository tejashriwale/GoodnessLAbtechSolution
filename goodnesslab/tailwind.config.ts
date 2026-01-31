import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fff5e6",
          100: "#ffe6cc",
          200: "#ffcc99",
          300: "#ffb366",
          400: "#ff9900", // Brand Orange
          500: "#ff9900", // Brand Orange
          600: "#cc7a00",
          700: "#995c00",
          800: "#663d00",
          900: "#331f00",
        },
        secondary: {
          50: "#f5e6e6",
          100: "#e6cccc",
          200: "#cc9999",
          300: "#b36666",
          400: "#993333", // Brand Burgundy/Dark Red
          500: "#993333", // Brand Burgundy/Dark Red
          600: "#7a2929",
          700: "#5c1f1f",
          800: "#3d1414",
          900: "#1f0a0a",
        },
        accent: {
          orange: "#ff9900", // Brand Orange
          burgundy: "#993333", // Brand Burgundy
          gold: "#fdb913", // Gold for certifications
          green: "#059669", // Professional green
        },
        neutral: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
        },
      },
      fontFamily: {
        sans: ["var(--font-futura)", "system-ui", "sans-serif"],
        heading: ["var(--font-bebas-neue)", "var(--font-futura)", "sans-serif"],
        display: ["var(--font-bebas-neue)", "sans-serif"],
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'progress-bar': 'progress-bar 6s linear',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        'progress-bar': {
          '0%': {
            width: '0%',
          },
          '100%': {
            width: '100%',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
