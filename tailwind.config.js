/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: 'true',
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      colors: {
        primary: {
          50: 'rgb(var(--color-primary-50))',
          100: 'rgb(var(--color-primary-100))',
          200: 'rgb(var(--color-primary-200))',
          300: 'rgb(var(--color-primary-300))',
          400: 'rgb(var(--color-primary-400))',
          500: 'rgb(var(--color-primary-500))',
          600: 'rgb(var(--color-primary-600))',
          700: 'rgb(var(--color-primary-700))',
          800: 'rgb(var(--color-primary-800))',
          900: 'rgb(var(--color-primary-900))',
        },
        secondary: {
          50: 'rgb(var(--color-secondary-50))',
          100: 'rgb(var(--color-secondary-100))',
          200: 'rgb(var(--color-secondary-200))',
          300: 'rgb(var(--color-secondary-300))',
          400: 'rgb(var(--color-secondary-400))',
          500: 'rgb(var(--color-secondary-500))',
          600: 'rgb(var(--color-secondary-600))',
          700: 'rgb(var(--color-secondary-700))',
          800: 'rgb(var(--color-secondary-800))',
          900: 'rgb(var(--color-secondary-900))',
        },
        tertiary: {
          50: 'rgb(var(--color-tertiary-50))',
          100: 'rgb(var(--color-tertiary-100))',
          200: 'rgb(var(--color-tertiary-200))',
          300: 'rgb(var(--color-tertiary-300))',
          400: 'rgb(var(--color-tertiary-400))',
          500: 'rgb(var(--color-tertiary-500))',
          600: 'rgb(var(--color-tertiary-600))',
          700: 'rgb(var(--color-tertiary-700))',
          800: 'rgb(var(--color-tertiary-800))',
          900: 'rgb(var(--color-tertiary-900))',
        },
      },
    },
  },
  plugins: [],
}
