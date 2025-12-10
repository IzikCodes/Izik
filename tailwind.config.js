/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)', opacity: 1 },
          '25%': { transform: 'scale(1.05)', opacity: 0.9 },
          '50%': { transform: 'scale(1.1)', opacity: 1 },
          '75%': { transform: 'scale(1.05)', opacity: 0.9 },
        },
        fadeInHeartbeat: {
          '0%': { opacity: 0, textShadow: '0 0 0px rgba(255,255,255,0)' },
          '25%': { opacity: 1, textShadow: '0 0 4px rgba(255,255,255,0.15)' },
          '50%': { opacity: 1, textShadow: '0 0 8px rgba(255,255,255,0.2)' },
          '75%': { opacity: 1, textShadow: '0 0 4px rgba(255,255,255,0.15)' },
          '100%': { opacity: 1, textShadow: '0 0 4px rgba(255,255,255,0.15)' },
        },
      },
      animation: {
        heartbeat: 'heartbeat 2s ease-in-out infinite',
        fadeInHeartbeat: 'fadeInHeartbeat 2s ease-in-out forwards infinite',
      },
    },
  },
  plugins: [],
};
