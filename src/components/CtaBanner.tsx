import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CtaBannerProps = {
  title?: string;
  buttonLabel?: string;
  href?: string;
  image?: string;
};

export default function CtaBanner({
  title = "Need fencing or coated metals for your next site?",
  buttonLabel = "Get a Quote",
  href = "/contact",
}: CtaBannerProps) {
  return (
    <section className="bg-industrial-dark text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:flex-row lg:items-center">
        <h2 className="font-display max-w-2xl text-[1.7rem] font-medium uppercase leading-[1.1] tracking-[0.02em] sm:text-[2.3rem]">
          {title}
        </h2>
        <Link
          href={href}
          className="logo-grad inline-flex items-center gap-2 px-6 py-3.5 text-[13px] font-medium tracking-wide text-white transition"
        >
          {buttonLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
