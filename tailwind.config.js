/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    {
      pattern:
        /(bg|text|dark:bg|dark:text)-(blue|gray|red|green|yellow|indigo|purple|pink)-(100|800|900|300)/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
