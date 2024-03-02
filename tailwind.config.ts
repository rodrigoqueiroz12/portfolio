import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
    },
  },
  plugins: [],
}
export default config
