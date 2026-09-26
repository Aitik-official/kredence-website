import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export default function SectionButton({
  href,
  children,
  light = false,
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex w-fit items-center gap-2 px-5 py-3 text-[13px] font-medium transition ${
        light
          ? "bg-white text-industrial-dark hover:bg-industrial-mist"
          : "logo-grad text-white"
      }`}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
