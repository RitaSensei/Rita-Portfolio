import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '400px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      sans: ["Playpen Sans", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      keyframes: {
        tilt: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(10deg)' },
          '75%': { transform: 'rotate(-10deg)' },
        },
        vibration: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-5deg)' },
          '75%': { transform: 'rotate(5deg)' },
        },
      },
      animation: {
        tilt: 'tilt 0.5s ease-in-out 8',
        vibration: 'vibration 0.1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
