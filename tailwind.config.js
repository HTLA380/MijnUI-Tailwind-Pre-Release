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
        '52px': '3.125rem',
        '57px': '3.5625rem',
        '152px': '9.5rem',
        '100px': '6.25rem',
        '179px': '11.1875rem',
        '216px': '13.5rem',
        '242px': '15.125rem',
        '276px': '17.25rem',
        '518px': '32.375rem',
        '1440px': '90rem',
      },
      minWidth: {
        '1440px': '90rem',
      },
      maxWidth: {
        '1127px': '70.4375rem',
      },
      height: {
        '28px': '1.75rem',
        '44px': '2.75rem',
        '80px': '5rem',
        '80vh': '80vh',
      },
      borderRadius: {
        default: '0.25rem',
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
