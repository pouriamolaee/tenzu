import type { Metadata } from "next";
import "./globals.css";
import { type ReactNode } from "react";
import { ThemeStoreProvider } from "@/providers/theme-store-provider";
import { serif } from "@/app/fonts";

export const metadata: Metadata = {
  title: "TenzuMusic",
  description: "Music is everything!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={serif.className}>
      <body className="mx-auto max-w-2xl px-5 py-12 bg-[--bg]">
        <ThemeStoreProvider>
          <main>{children}</main>
        </ThemeStoreProvider>
      </body>
    </html>
  );
}
