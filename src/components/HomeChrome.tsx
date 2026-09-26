"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

/** Hides chrome (e.g. top bar) on the homepage for full-bleed hero */
export default function HomeChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return children;
}
