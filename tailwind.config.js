/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {},
    fontFamily: {
      'heading': ['"Poetsen One", sans-serif'],
      'navLink':['"Montserrat", sans-serif'],
      'name':['"Ubuntu Sans Mono", monospace'],
      'inter':['"Inter", sans-serif'],
      'jost':['"Jost", sans-serif'],
      'josefin':['"Josefin Sans", sans-serif'],
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}

