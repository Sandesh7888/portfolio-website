export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: { primary: 'var(--bg-primary)', secondary: 'var(--bg-secondary)' },
        text: { primary: 'var(--text-primary)', secondary: 'var(--text-secondary)' },
        accent: 'var(--accent)',
        border: 'var(--border)',
        card: 'var(--card-bg)',
      },
      boxShadow: {
        custom: 'var(--shadow)',
      },
    },
  },
  darkMode: 'class', // Enables dark: variants
  plugins: [],
};
