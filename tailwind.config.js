// Tailwind.config
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          600: '#7e3ff2',
          700: '#6c2bd9',
          800: '#5a0ec1',
          900: '#4b00a3'
        }
      }
    },
  },
  plugins: [],
};
