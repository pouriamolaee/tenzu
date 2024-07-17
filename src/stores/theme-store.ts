import { createStore } from "zustand/vanilla";
import { persist } from "zustand/middleware";

type Theme = "dark" | "light";

export type ThemeState = {
  theme: Theme;
};

export type ThemeActions = {
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};

export type ThemeStore = ThemeState & ThemeActions;

export const defaultInitState: ThemeState = {
  theme: "dark",
};

export const createThemeStore = (initState: ThemeState = defaultInitState) => {
  return createStore<ThemeStore>()(
    persist(
      (set) => ({
        ...initState,
        toggleTheme: () =>
          set((state) => ({
            theme: state.theme === "light" ? "dark" : "light",
          })),
        setTheme: (theme) => set({ theme }),
      }),
      {
        name: "theme-storage",
      },
    ),
  );
};
