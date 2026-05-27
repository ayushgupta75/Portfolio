/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        linen:  '#F5F0E8',        // background
        bronze: '#7D6E63',        // accent
        ink:    '#1C1917',        // primary text
        mist:   '#9C9189',        // secondary text / subtle
        edge:   '#E2DBD0',        // dividers / borders
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'heading':  ['clamp(1.75rem, 4vw, 3rem)',  { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'subhead':  ['clamp(1rem, 2vw, 1.25rem)',  { lineHeight: '1.5',  letterSpacing: '0.01em'  }],
      },
      letterSpacing: {
        'widest2': '0.3em',
        'widest3': '0.4em',
      },
      transitionTimingFunction: {
        'silk': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  plugins: [],
}
