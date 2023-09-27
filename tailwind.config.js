/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
      extend: {
          colors: {
              clifford: '#da373d',
          },
          spacing: {
              13: '3.25rem',
          },
          fontFamily: {
              inter: ['Inter'],
          },
          colors: {
              izu: '#bada55',
              kopi: '#c0ffee',
          },
          animation: {
              'spin-slow': 'spin 3s linear infinite',
              'goyang': 'goyang 1s ease-in-out infinite',
          },
          // keyframe untuk animasi sendiri
          keyframes: {
              goyang: {
                  '0%, 100%' : {transform: 'rotate(-3deg)'},
                  '50%': {transform: 'rotate(3deg)'}
              }
          }
      },
  },
  plugins: [],
}

