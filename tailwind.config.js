/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'desaturated-red': 'hsl(0, 36%, 70%)',
        'soft-red': 'hsl(0, 93%, 68%)',
        'dark-red': 'hsl(0, 6%, 24%)',
        },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const gradients = {
        '.gradient-1': {
          background: 'linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))',
        },
        '.gradient-2': {
          background: 'linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))',
        },
      };

      addUtilities(gradients);
    },
  ],
}