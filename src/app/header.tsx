import HomeLink from "@/app/home-link";
import ThemeSwitch from "@/app/theme-switch";
import NextLink from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="mb-14 flex items-center place-content-between">
      <HomeLink />
      <div className="flex items-center gap-4">
        <ThemeSwitch />
        <span className="italic">
          by{" "}
          <NextLink href="https://danabra.mov" target="_blank">
            <Image
              alt="Dan Abramov"
              src="https://github.com/gaearon.png"
              className="relative mx-1 inline rounded-full"
              width={32}
              height={32}
            />
          </NextLink>
        </span>
      </div>
    </header>
  );
}
