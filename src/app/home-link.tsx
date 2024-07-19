"use client";
import { sans } from "./fonts";
import { usePathname } from "next/navigation";
import { type CSSProperties } from "react";
import { cn } from "@/utils/cn";
import InternalLink from "@/app/internal-link";

export default function HomeLink() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <InternalLink
      href="/"
      className={cn(
        sans.className,
        "inline-block text-2xl font-black",
        !isHomePage && "hover:scale-[1.02]",
      )}
    >
      <span
        style={
          {
            "--myColor1": isHomePage ? "var(--text)" : "var(--pink)",
            "--myColor2": isHomePage ? "var(--text)" : "var(--purple)",
            backgroundImage:
              "linear-gradient(45deg, var(--myColor1), var(--myColor2))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            transition: "--myColor1 0.2s ease-out, --myColor2 0.2s ease-in-out",
          } as CSSProperties
        }
      >
        overreacted
      </span>
    </InternalLink>
  );
}
