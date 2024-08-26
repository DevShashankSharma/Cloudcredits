/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xxs': '200px',
      'xs': '300px',
      'vvsm': '380px',
      'vsm': '450px', 
      'ssm': '550px',
      'sm': '640px',
      'md': '768px',
      'slg': '950px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
