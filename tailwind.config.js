/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens:{
      sm:'480px',
      md: '768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors: {
        gray: '#E6EBF0',
        white: '#FFFFFF',
        black: '#252525',
        dash: '#244759',
        inputBorder: '#656565',
        placeholder: '#6A6A6A',
        passwordText: '#8C8C8C',
        signupButton: '#003366',
        background: '#F5F5F5',
      },
      fontFamily: {
        'inter':['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
};
