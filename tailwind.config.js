/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg))",
        surface: "rgb(var(--surface))",

        textPrimary: "rgb(var(--text-primary))",
        textSecondary: "rgb(var(--text-secondary))",

        borderMuted: "rgb(var(--border-muted))",

        accent: "rgb(var(--accent))",
      },
    },
  },
  plugins: [],
}
