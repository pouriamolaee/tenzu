import { createStore } from "zustand/vanilla";
import { persist } from "zustand/middleware";

type Theme = "dark" | "light";

export type ThemeState = {
  theme: Theme;
};

export type ThemeActions = {
  toggleTheme: () => void;
};

export type ThemeStore = ThemeState & ThemeActions;

export const defaultInitState: ThemeState = {
  theme: "dark",
};

export function createThemeStore(initState: ThemeState = defaultInitState) {
  return createStore<ThemeStore>()(
    persist(
      (set) => ({
        ...initState,
        toggleTheme: () =>
          set((state) => ({
            theme: state.theme === "light" ? "dark" : "light",
          })),
      }),
      {
        name: "theme-storage",
      },
    ),
  );
}
