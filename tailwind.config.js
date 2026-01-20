/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  safelist: [
    'bg-solid',
    'bg-defaultBg',
    'bg-bg',
    'text-textPrimary',
    'text-textSecondary',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Be Vietnam Pro', 'sans-serif'],
      },
      colors: {
        bg: "rgb(var(--bg))",
        solid: "rgb(var(--solid))",
        defaultBg: "rgb(var(--default))",

        textPrimary: "rgb(var(--text-primary))",
        textSecondary: "rgb(var(--text-secondary))",

        borderMuted: "rgb(var(--border-muted))",

        accent: "rgb(var(--accent))",
      },
    },
  },
  plugins: [],
}
