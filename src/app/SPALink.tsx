"use client";
import NextLink, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { cn } from "@/utils/cn";

type SPALinkProps = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

// Naming
export default function SPALink({
  className,
  style,
  children,
  ...rest
}: SPALinkProps) {
  const router = useRouter();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    router.push(event.currentTarget.href);
  }

  return (
    <NextLink
      {...rest}
      onClick={handleClick}
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
