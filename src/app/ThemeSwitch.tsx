"use client";
import { useThemeStore } from "@/providers/theme-store-provider";
import { useEffect } from "react";
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";

export default function ThemeSwitch() {
  const { theme, setTheme, toggleTheme } = useThemeStore((store) => store);
  const isDark = theme === "dark";
  // State management lib was not needed

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <span className="cursor-pointer" onClick={toggleTheme}>
      {isDark ? <IconSunFilled /> : <IconMoonFilled />}
    </span>
  );
}
