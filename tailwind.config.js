const { spacing } = require('tailwindcss/defaultTheme');

// For more customization read the tailwind typography docs here:
// https://github.com/tailwindlabs/tailwindcss-typography#customization

module.exports = {
  mode: 'jit',
  // Files that are utilizing tailwindcss so we can purge unused styles (dep graph)
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  // Dark mode will change the styles on 'class' attribute
  darkMode: 'class',
  // Here is where we can extend tailwind classes (example: animations)
  theme: {
    extend: {
      // colors: {
      //   'blue-opaque': 'rgb(13 42 148 / 18%)',
      //   gray: {
      //     0: '#fff',
      //     100: '#fafafa',
      //     200: '#eaeaea',
      //     300: '#999999',
      //     400: '#888888',
      //     500: '#666666',
      //     600: '#444444',
      //     700: '#333333',
      //     800: '#222222',
      //     900: '#111111'
      //   }
      // },
      typography: (theme) => ({
        // Here is where we can edit the prose themes
        // Default prose styles low level customization
        // Instead of 'lg' for normal 'prose' you'd use 'DEFAULT'
        DEFAULT: {
          css: {
            // Do not apply any classes on code
            pre: false,
            code: false,
            'pre code': false,
            'code::before': false,
            'code::after': false,
            color: theme('colors.gray.700'),
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
            a: false,
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32],
            },
            code: { color: theme('colors.pink.600') },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
          },
        },
        lg: {
          css: {
            // Do not apply any classes on code
            pre: false,
            code: false,
            'pre code': false,
            'code::before': false,
            'code::after': false,
            th: {
              color: theme('colors.gray.700'),
            },
            color: theme('colors.gray.700'),
            a: false,
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32],
            },
            code: { color: theme('colors.pink.600') },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
          },
        },
        // Here we specify what happens on darkmode shift in prose
        dark: {
          css: {
            th: {
              color: theme('colors.gray.300'),
            },
            color: theme('colors.gray.300'),
            a: false,
            blockquote: {
              borderLeftColor: theme('colors.gray.700'),
              color: theme('colors.gray.300'),
            },
            'h2,h3,h4': {
              color: theme('colors.gray.100'),
              'scroll-margin-top': spacing[32],
            },
            hr: { borderColor: theme('colors.gray.700') },
            ol: {
              li: {
                '&:before': { color: theme('colors.gray.500') },
              },
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.gray.500') },
              },
            },
            strong: { color: theme('colors.gray.300') },
            thead: {
              color: theme('colors.gray.100'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/typography')],
};
