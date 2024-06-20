/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}","*"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(16, minmax(0, 1fr))',
        'form': '50px 50px',
        // Complex site-specific column configuration
        'footer': '200px minmax(900px, 1fr) 100px',
      }
    },
    fontFamily: {
      'heading': ['"Poetsen One", sans-serif'],
      'navLink':['"Montserrat", sans-serif'],
      'name':['"Ubuntu Sans Mono", monospace'],
      'inter':['"Inter", sans-serif'],
      'jost':['"Jost", sans-serif'],
      'josefin':['"Josefin Sans", sans-serif'],
      'dancing':['"Dancing Script", cursive'],
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

