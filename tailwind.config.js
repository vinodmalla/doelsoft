/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kumbh: ['Kumbh Sans', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(-20%)" },
          "100%": { transform: "translateX(-70%)" },
        },
        move: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(100px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        moveOnce: "move 2s ease-in-out 1",
      },
    },
  },
  plugins: [],
}