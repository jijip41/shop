/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('../public/assets/banner.jpg')",
      },
    },
    fontSize: {
      '2xs': '0.4rem',
    },
  },

  plugins: [],
};
