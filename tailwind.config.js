export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F9FAFB', // Off-white
        surface: '#FFFFFF', // Clean white
        accent: '#D97757', // Warm brushed copper
        teal: '#14B8A6', // High-tech pastel blue/teal
        textDark: '#111827', // Dark graphite instead of pitch black
        textMuted: '#4B5563', // Muted readable text
        aluminum: '#E5E7EB', // Brushed aluminum lines
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'light-concrete': "url('https://images.unsplash.com/photo-1598588556756-c0c5aa857849?q=80&w=2000&auto=format&fit=crop')",
      }
    },
  },
  plugins: [],
}
