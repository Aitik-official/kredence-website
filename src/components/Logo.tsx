import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

type LogoProps = {
  compact?: boolean;
  light?: boolean;
};

export default function Logo({ light = false }: LogoProps) {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src={site.logo}
        alt={site.name}
        width={220}
        height={90}
        className={`h-11 sm:h-13 lg:h-14 w-auto object-contain transition ${
          light ? "brightness-0 invert" : ""
        }`}
        priority
      />
    </Link>
  );
}
