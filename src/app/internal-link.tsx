"use client";
import NextLink, { LinkProps } from "next/link";
import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

type SPALinkProps = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function InternalLink({
  className,
  style,
  children,
  ...rest
}: SPALinkProps) {
  return (
    <NextLink
      {...rest}
      className={cn(`scale-100 active:scale-100`, className)}
      style={{
        ...style,
        transition: "transform 0.2s ease-in-out, opacity 0.2s 0.4s linear",
      }}
    >
      {children}
    </NextLink>
  );
}
