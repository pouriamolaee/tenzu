import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { type ReactNode } from "react";
import { ThemeStoreProvider } from "@/providers/theme-store-provider";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <ThemeStoreProvider>{children}</ThemeStoreProvider>
      </body>
    </html>
  );
}
