import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontSize: {
        'heading-1': '5.625rem',
        'heading-2': '4.25rem',
        'heading-3': '3.125rem',
        'heading-4': '2.375rem',
        'heading-5': '1.75rem',
        'heading-6': '1.375rem',
        tag: '0.875rem',
      },
      lineHeight: {
        heading: '1.3',
        paragraph: '1.6',
      },
      colors: {
        bistre: {
          50: '#F7F6EF',
          100: '#EAE7D7',
          200: '#D6D0B2',
          300: '#BFB385',
          400: '#AC9963',
          500: '#9D8755',
          600: '#876F47',
          700: '#6D563B',
          800: '#5C4937',
          900: '#513F32',
          950: '#3E2E24',
        },
      },
      keyframes: {
        'overlay-show': {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        'modal-content-show': {
          from: {
            opacity: '0',
            transform: 'translateX(-50%) translateY(-80%)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(-50%) translateY(-50%)',
          },
        },
      },
      animation: {
        'overlay-show': 'overlay-show 250ms cubic-bezier(0.16, 1, 0.3, 1)',
        'modal-content-show':
          'modal-content-show 250ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
}
export default config
