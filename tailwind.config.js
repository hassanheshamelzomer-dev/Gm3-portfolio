/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
      },
      colors: {
        m3: {
          // Primary
          'primary':                'var(--md-sys-color-primary)',
          'on-primary':             'var(--md-sys-color-on-primary)',
          'primary-container':      'var(--md-sys-color-primary-container)',
          'on-primary-container':   'var(--md-sys-color-on-primary-container)',
          // Secondary
          'secondary':              'var(--md-sys-color-secondary)',
          'on-secondary':           'var(--md-sys-color-on-secondary)',
          'secondary-container':    'var(--md-sys-color-secondary-container)',
          'on-secondary-container': 'var(--md-sys-color-on-secondary-container)',
          // Surface
          'surface':                       'var(--md-sys-color-surface)',
          'surface-container-lowest':      'var(--md-sys-color-surface-container-lowest)',
          'surface-container-low':         'var(--md-sys-color-surface-container-low)',
          'surface-container':             'var(--md-sys-color-surface-container)',
          'surface-container-high':        'var(--md-sys-color-surface-container-high)',
          'surface-container-highest':     'var(--md-sys-color-surface-container-highest)',
          // On-surface
          'on-surface':         'var(--md-sys-color-on-surface)',
          'on-surface-variant': 'var(--md-sys-color-on-surface-variant)',
          // Outline
          'outline':         'var(--md-sys-color-outline)',
          'outline-variant': 'var(--md-sys-color-outline-variant)',
          // Error
          'error':              'var(--md-sys-color-error)',
          'on-error':           'var(--md-sys-color-on-error)',
          'error-container':    'var(--md-sys-color-error-container)',
          'on-error-container': 'var(--md-sys-color-on-error-container)',
        },
      },
      boxShadow: {
        'm3-elevation-0': 'none',
        'm3-elevation-1': '0px 1px 2px rgba(0,0,0,0.3), 0px 1px 3px 1px rgba(0,0,0,0.15)',
        'm3-elevation-2': '0px 1px 2px rgba(0,0,0,0.3), 0px 2px 6px 2px rgba(0,0,0,0.15)',
        'm3-elevation-3': '0px 4px 8px 3px rgba(0,0,0,0.15), 0px 1px 3px rgba(0,0,0,0.3)',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
}
