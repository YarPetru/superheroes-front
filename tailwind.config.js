/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      desktop: '1440px',
    },
    colors: {
      transparent: 'transparent',
      white: '#FFF',
      black: '#141213',
      accent: '#c42034',
      blue: {
        main: '#283043',
      },
      grey: {
        main: '#dedbe6',
        80: '#dedbe6cc',
        90: '#dedbe6dd',
      },
      brown: '#3a1d18',
    },
    fontSize: {
      xs: ['14px', { lineHeight: '21px', fontWeight: '400' }],
      sm: ['16px', { lineHeight: '24px', fontWeight: '400' }],
      md: ['24px', { lineHeight: '36px', fontWeight: '600' }],
      lg: ['32px', { lineHeight: '48px', fontWeight: '600' }],
      xl: ['56px', { lineHeight: '84px', fontWeight: '700' }],
    },
    boxShadow: {
      card: '0px 66px 110px rgba(0, 0, 0, 0.05)',
      'test-card': '0px 7px 55px rgba(3, 41, 75, 0.1)',
      cta: '0px 3px 55px rgba(3, 41, 75, 0.1)',
      'course-card': '4px 12px 24px rgba(13, 13, 13, 0.2)',
    },
    fontFamily: {},
    container: {
      center: true,
    },
    extend: {
      // dropShadow: {
      //   heading:
      //     '1.5px 1.5px 0 #dedbe6, 0px 1.5px 0 #dedbe6, -1.5px -1.5px 0 #dedbe6, -1.5px -1.5px 0 #dedbe6, -1.5px 1.5px 0 #dedbe6, 1.5px -1.5px 0 #dedbe6',
      // },
      transitionDuration: {
        DEFAULT: '333ms',
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        shimmer: 'shimmer 1.2s infinite',
      },
    },
  },
  plugins: [],
};
