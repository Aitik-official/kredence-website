import Link from "next/link";
import { type ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "white" | "ghost";
  className?: string;
  type?: "button" | "submit";
};

const variants = {
  primary:
    "logo-grad text-white shadow-sm shadow-industrial-dark/25",
  white: "bg-white text-industrial-ink hover:bg-industrial-soft",
  ghost:
    "bg-transparent text-industrial-ink border border-industrial-ink/15 hover:border-industrial-steel hover:text-industrial-steel",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-md px-7 py-3.5 text-sm font-semibold transition duration-200 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
