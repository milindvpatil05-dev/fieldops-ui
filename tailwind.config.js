// tailwind.config.js
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    '../src/**/*.{js,jsx,ts,tsx}', // include your library components
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1D4ED8',
        'primary-fg': '#FFFFFF',
        'danger': '#DC2626',
        'success': '#15803D',
        'warning': '#D97706',
        'surface': '#F6F7F9',
        'border': '#E3E6EA',
        'fg': '#111827',
        'fg-muted': '#6B7280',
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '16px',
      },
    },
  },
  presets: [require('nativewind/preset')],
  safelist: [
    'text-fg',
    'text-fg-muted',
    'text-primary',
    'text-danger',
    'text-success',
    'text-warning',
  ],
  plugins: [],
};
