/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '320px', // Custom small breakpoint
        'md': '768px', // Custom medium breakpoint
        'lg': '1024px', // Custom large breakpoint
        // You can also add new custom breakpoints here if needed
      },
    },
  },
  plugins: [],
}