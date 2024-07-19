import type { Metadata } from "next";
import "./globals.css";
import { type ReactNode } from "react";
import { ThemeProvider } from "@/providers/theme-provider";
import { serif } from "@/app/fonts";
import Header from "@/app/header";

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
      <body className="mx-auto max-w-2xl bg-[--bg] px-5 py-12 text-[--text]">
        <ThemeProvider>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
