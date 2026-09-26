import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

type LogoProps = {
  compact?: boolean;
  light?: boolean;
};

export default function Logo({ light = false }: LogoProps) {
  return (
    <Link
      href="/"
      className="block h-[calc(6rem*140/232)] overflow-hidden sm:h-[calc(7rem*140/232)]"
    >
      <Image
        src={site.logo}
        alt={site.name}
        width={249}
        height={232}
        className={`h-24 w-auto max-w-none object-contain object-top sm:h-28 -mt-[calc(6rem*35/232)] sm:-mt-[calc(7rem*35/232)] ${
          light ? "brightness-0 invert" : ""
        }`}
        priority
      />
    </Link>
  );
}
