"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function ProductBack({ fallback }: { fallback: string }) {
  const router = useRouter();

  return (
    <button
      type="button"
      aria-label="Back"
      onClick={() => {
        if (window.history.length > 1) {
          router.back();
          return;
        }
        router.push(fallback);
      }}
      className="flex h-8 w-8 shrink-0 items-center justify-center border border-industrial-line text-industrial-ink transition hover:border-industrial-steel hover:text-industrial-steel"
    >
      <ArrowLeft className="h-4 w-4" />
    </button>
  );
}
