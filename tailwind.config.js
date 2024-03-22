/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      width: {
        '28px': '28px',
        '57px': '57px',
        '152px': '152px',
        '518px': '518px',
      },
      height: {
        '28px': '28px',
        '80px': '80px',
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
