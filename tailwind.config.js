/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      blue: {
        300: '#D0D6F9',
        900: '#0B0D17',
      },
    },
    fontSize: {
      // preset 7
      'sm': [
        '0.875rem',
        {
          lineHeight: '180%',
          letterSpacing: '0.125rem',
        },
      ],
      // preset 8
      'base': [
        '1rem',
        {
          lineHeight: '180%',
          letterSpacing: '0.125rem',
        },
      ],
      // preset 9
      'lg': [
        '1.125rem',
        {
          lineHeight: '180%',
          letterSpacing: '0px',
        },
      ],
      // preset 6
      'xl': [
        '1.75rem',
        {
          lineHeight: '100%',
          letterSpacing: '0px',
        },
      ],
      // preset 5
      '2xl': [
        '1.75rem',
        {
          lineHeight: '100%',
          letterSpacing: '0.25',
        },
      ],
      // preset 4
      '3xl': [
        '2rem',
        {
          lineHeight: '100%',
          letterSpacing: '0px',
        },
      ],
      // preset 3
      '4xl': [
        '3.5rem',
        {
          lineHeight: '100%',
          letterSpacing: '0px',
        },
      ],
      // preset 2
      '5xl': [
        '6.25rem',
        {
          lineHeight: '114.6%',
          letterSpacing: '0px',
        },
      ],
      // preset 1
      '6xl': [
        '9rem',
        {
          lineHeight: '171.9%',
          letterSpacing: '0px',
        },
      ],
    },
  },
  plugins: [],
}
