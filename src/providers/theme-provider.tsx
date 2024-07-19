"use client";
import { createContext, type ReactNode, useContext, useRef } from "react";
import { useStore } from "zustand";

import { createThemeStore, type ThemeStore } from "@/stores/theme-store";

export type ThemeStoreApi = ReturnType<typeof createThemeStore>;

export const ThemeStoreContext = createContext<ThemeStoreApi | undefined>(
  undefined,
);

export interface ThemeStoreProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeStoreProviderProps) {
  const storeRef = useRef<ThemeStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createThemeStore();
  }

  return (
    <ThemeStoreContext.Provider value={storeRef.current}>
      {children}
    </ThemeStoreContext.Provider>
  );
}

export function useThemeStore<T>(selector: (store: ThemeStore) => T): T {
  const themeStoreContext = useContext(ThemeStoreContext);

  if (!themeStoreContext) {
    throw new Error(`useThemeStore must be used within ThemeStoreProvider`);
  }

  return useStore(themeStoreContext, selector);
}
