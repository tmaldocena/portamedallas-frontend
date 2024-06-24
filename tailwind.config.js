/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'football': "url('./hero-football.png')",
        'basketball': "url('./hero-basketball.png')",
        'tenis': "url('./hero-tenis.png')",
        'bicycle': "url('./hero-bicycle.png')",
        'running': "url('./hero-running.png')",
        'promo': "url('./promo-bg.png')"
      },
      fontFamily:{
        'open': "'Open Sans Variable', sans-serif;"
      },
      animation: {
        'text-slide': 'text-slide 15s cubic-bezier(0.83, 0, 0.17, 1) infinite',
    },
    keyframes: {
      'text-slide': {
        '0%, 13.33%': {
            transform: 'translateY(0%)',
        },
        '16.66%, 30%': {
            transform: 'translateY(-14.28%)',
        },
        '33.33%, 46.66%': {
            transform: 'translateY(-28.57%)',
        },
        '50%, 63.33%': {
            transform: 'translateY(-42.85%)',
        },
        '66.66%, 80%': {
            transform: 'translateY(-57.14%)',
        },
        '83.33%, 96.66%': {
            transform: 'translateY(-71.42%)',
        },
        '100%': {
            transform: 'translateY(-85.71%)',
        },
    },          
    }
    },
  },
  daisyui: {
    themes: [
      {
        portamedallas: {
          "primary": "#0D0E26",
          "secondary": "#CE1126",
          "accent": "#8B8DB7",
          "neutral": "#fce7f3",
          "base-100": "#ffe4e6",
          "info": "#c7d2fe",
          "success": "#fdba74",
          "warning": "#ea580c",
          "error": "#dc2626",
        },
      },
    ]
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
}

