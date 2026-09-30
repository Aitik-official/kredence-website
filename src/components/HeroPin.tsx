import type { ReactNode } from "react";

const frame = {
  home: {
    pin: "fixed inset-x-0 top-0 z-0 h-[400px] sm:h-[500px] lg:h-[100svh]",
    spacer: "h-[400px] sm:h-[500px] lg:h-[100svh]",
  },
  compact: {
    pin: "fixed inset-x-0 top-[calc(6rem*140/232+1rem)] z-0 sm:top-[calc(7rem*140/232+1rem)]",
    spacer: "h-[200px] sm:h-[240px]",
  },
  page: {
    pin: "fixed inset-x-0 top-[calc(6rem*140/232+1rem)] z-0 sm:top-[calc(7rem*140/232+1rem)]",
    spacer: "h-[380px] sm:h-[440px] lg:h-[520px]",
  },
  story: {
    pin: "fixed inset-x-0 top-[calc(6rem*140/232+1rem)] z-0 sm:top-[calc(7rem*140/232+1rem)]",
    spacer: "h-[300px] sm:h-[420px]",
  },
} as const;

export default function HeroPin({
  children,
  variant = "page",
}: {
  children: ReactNode;
  variant?: keyof typeof frame;
}) {
  const layout = frame[variant];
  return (
    <>
      <div className={layout.pin}>{children}</div>
      <div className={layout.spacer} aria-hidden />
    </>
  );
}
