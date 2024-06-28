/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#FFAA24",
        black: "#3f3d56",
        background: "#f2f2f2",
      },
      container: {
        center: true,
        padding: "15px",
      },
    },
  },
  plugins: [],
};
