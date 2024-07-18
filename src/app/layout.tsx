import type { Metadata } from "next";
import "./globals.css";
import { type ReactNode } from "react";
import { ThemeStoreProvider } from "@/providers/theme-store-provider";
import { serif } from "@/app/fonts";
import NextLink from "next/link";
import HomeLink from "@/app/HomeLink";
import ThemeSwitch from "@/app/ThemeSwitch";

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
        <ThemeStoreProvider>
          <header className="mb-14 flex items-center place-content-between">
            <HomeLink />
            <div className="flex items-center gap-4">
              <ThemeSwitch />
              <span className="relative top-[4px] italic">
                by{" "}
                <NextLink href="https://danabra.mov" target="_blank">
                  <img
                    alt="Dan Abramov"
                    src="https://github.com/gaearon.png"
                    className="relative -top-1 mx-1 inline h-8 w-8 rounded-full"
                  />
                  {/*  TODO for image */}
                </NextLink>
              </span>
            </div>
          </header>
          <main>{children}</main>
        </ThemeStoreProvider>
      </body>
    </html>
  );
}
