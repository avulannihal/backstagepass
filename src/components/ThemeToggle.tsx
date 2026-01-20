import { useThemeStore } from "@/store/themeStore";

const THEME_CONFIG = {
  light: { emoji: "🌙", next: "dark" as const },
  dark: { emoji: "☀️", next: "light" as const },
} as const;

function getIsDarkMode(theme: string): boolean {
  if (theme === "dark") return true;
  if (theme === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function ThemeToggle() {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);
  
  const isDark = getIsDarkMode(theme);
  const config = THEME_CONFIG[isDark ? "dark" : "light"];

  return (
    <button
      onClick={() => setTheme(config.next)}
      className="fixed bottom-4 right-4 flex items-center gap-2 bg-surface text-textPrimary px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all border border-borderMuted"
      aria-label={`Switch to ${config.next} mode`}
    >
      <span className="text-xl">{config.emoji}</span>
      <span className="text-xs font-medium">Switch to {config.next}</span>
    </button>
  );
}
