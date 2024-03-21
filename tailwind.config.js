/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      width: {
        '57px': '57px',
        '518px': '518px',
        '28px': '28px',
      },
      height: {
        '80px': '80px',
        '28px': '28px',
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
