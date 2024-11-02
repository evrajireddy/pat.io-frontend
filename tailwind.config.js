module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quattrocento: ["Quattrocento", "serif"],
      },
      boxShadow: {
        'custom-light': '0 2px 15px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 4px 20px rgba(0, 0, 0, 0.1)',
        'custom-glow': '0 0 10px rgba(255, 99, 71, 0.6)',
      }
    },
  },
  plugins: [],
};
