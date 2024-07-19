"use client";
import { useThemeStore } from "@/providers/theme-provider";
import { useEffect, useRef } from "react";
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";

export default function ThemeSwitch() {
  const isThemeLoadedRef = useRef(false);
  const { theme, toggleTheme } = useThemeStore((store) => store);
  const isDark = theme === "dark";

  useEffect(() => {
    isThemeLoadedRef.current = true;
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    isThemeLoadedRef.current && (
      <span className="cursor-pointer" onClick={toggleTheme}>
        {isDark ? <IconSunFilled /> : <IconMoonFilled />}
      </span>
    )
  );
}
