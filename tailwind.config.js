/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      inter: ['inter', 'sans-serif'],
    },
    extend: {
      width: {
        '10px': '0.625rem',
        '28px': '1.75rem',
        '57px': '3.5625rem',
        '152px': '152px',
        '518px': '32.375rem',
        '1440px': '90rem',
      },
      height: {
        '28px': '1.75rem',
        '80px': '5rem',
      },
      outlineOffset: {
        'inner-1': '-1px',
        'inner-2': '-2px',
        'inner-4': '-4px',
      },
    },
  },
  plugins: [],
};
