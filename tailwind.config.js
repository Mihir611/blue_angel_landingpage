/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: { '2xl': '1400px' },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#e8611a',
          foreground: '#ffffff',
          dim: 'rgba(232,97,26,0.12)',
        },
        accent: {
          DEFAULT: '#c0392b',
          foreground: '#ffffff',
        },
        bg: {
          DEFAULT: '#0d0d0d',
          card: '#141414',
          muted: '#1a1a1a',
        },
        border: {
          DEFAULT: '#2a2520',
          primary: 'rgba(232,97,26,0.35)',
        },
        fg: {
          DEFAULT: '#f0ebe3',
          muted: '#8a8078',
        },
      },
      fontFamily: {
        heading: ['"Black Ops One"', 'cursive'],
        display: ['"Bebas Neue"', 'cursive'],
        body: ['"Space Grotesk"', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '12px',
        lg: '16px',
        xl: '20px',
      },
      keyframes: {
        /* ── Entry animations ── */
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          from: { opacity: '0', transform: 'translateX(-32px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          from: { opacity: '0', transform: 'translateX(32px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        /* ── Hero headline letter reveal ── */
        'char-reveal': {
          from: { opacity: '0', transform: 'translateY(60%) skewY(6deg)', filter: 'blur(4px)' },
          to:   { opacity: '1', transform: 'translateY(0) skewY(0deg)',   filter: 'blur(0)' },
        },
        /* ── Ambient / looping ── */
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(232,97,26,0.15), 0 0 60px rgba(232,97,26,0.05)' },
          '50%':       { boxShadow: '0 0 40px rgba(232,97,26,0.35), 0 0 120px rgba(232,97,26,0.12)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-10px)' },
        },
        'road-dash': {
          from: { strokeDashoffset: '800' },
          to:   { strokeDashoffset: '0' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
        'counter-spin': {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(-360deg)' },
        },
        'shimmer': {
          from: { backgroundPosition: '-200% center' },
          to:   { backgroundPosition: '200% center' },
        },
        'bounce-x': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%':       { transform: 'translateX(6px)' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.88)' },
          to:   { opacity: '1', transform: 'scale(1)' },
        },
        'border-flow': {
          '0%':   { backgroundPosition: '0% 50%' },
          '50%':  { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        'fade-up':        'fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both',
        'fade-up-1':      'fade-up 0.6s 0.1s cubic-bezier(0.16,1,0.3,1) both',
        'fade-up-2':      'fade-up 0.6s 0.2s cubic-bezier(0.16,1,0.3,1) both',
        'fade-up-3':      'fade-up 0.6s 0.3s cubic-bezier(0.16,1,0.3,1) both',
        'fade-up-4':      'fade-up 0.6s 0.4s cubic-bezier(0.16,1,0.3,1) both',
        'fade-up-5':      'fade-up 0.6s 0.5s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in':        'fade-in 0.3s ease both',
        'slide-up':       'slide-up 0.3s ease both',
        'slide-in-left':  'slide-in-left 0.7s cubic-bezier(0.16,1,0.3,1) both',
        'slide-in-right': 'slide-in-right 0.7s cubic-bezier(0.16,1,0.3,1) both',
        'char-reveal':    'char-reveal 0.7s cubic-bezier(0.16,1,0.3,1) both',
        'scale-in':       'scale-in 0.5s cubic-bezier(0.16,1,0.3,1) both',
        'pulse-glow':     'pulse-glow 3s ease-in-out infinite',
        'float':          'float 4s ease-in-out infinite',
        'road-dash':      'road-dash 1.8s cubic-bezier(0.4,0,0.2,1) forwards',
        'spin-slow':      'spin-slow 8s linear infinite',
        'counter-spin':   'counter-spin 8s linear infinite',
        'shimmer':        'shimmer 2.5s linear infinite',
        'bounce-x':       'bounce-x 1.2s ease-in-out infinite',
        'border-flow':    'border-flow 4s ease infinite',
      },
    },
  },
  plugins: [],
}
