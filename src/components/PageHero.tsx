import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BrandMark from "./BrandMark";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
  cta?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  compact?: boolean;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image = "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1800&q=80",
  cta,
  ctaSecondary,
  compact = false,
}: PageHeroProps) {
  return (
    <section id="page-hero" className="relative overflow-hidden bg-industrial-dark text-white">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,8,0.9)_0%,rgba(8,8,8,0.68)_52%,rgba(8,8,8,0.4)_100%)]" />

      <div
        className={`relative mx-auto flex max-w-6xl flex-col justify-end px-4 sm:px-6 lg:px-8 xl:max-w-7xl ${
          compact
            ? "min-h-[200px] py-6 sm:min-h-[240px] sm:py-8 lg:min-h-[260px] lg:py-10"
            : "min-h-[380px] py-12 sm:min-h-[440px] sm:py-16 lg:min-h-[520px] lg:py-20"
        }`}
      >
        <p className={`inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.28em] text-white/70 sm:gap-2.5 ${compact ? "mb-2.5 sm:mb-3" : "mb-4 sm:mb-5"}`}>
          <BrandMark className="h-3.5 w-3.5" color="currentColor" />
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          <span className="text-white/30">/</span>
          <span>{eyebrow}</span>
        </p>
        <h1
          className={`font-display max-w-3xl font-medium uppercase leading-[0.95] tracking-[0.02em] ${
            compact
              ? "text-[1.85rem] sm:text-3xl lg:text-4xl"
              : "text-[2.2rem] sm:text-4xl md:text-5xl lg:text-[4.2rem] xl:text-[4.8rem]"
          }`}
        >
          {title}
        </h1>
        {description ? (
          <p className="mt-3.5 max-w-xl text-[14px] leading-relaxed text-white/70 sm:mt-5 sm:text-[15px] lg:text-base">
            {description}
          </p>
        ) : null}
        {cta || ctaSecondary ? (
          <div className={`flex flex-wrap gap-3 ${compact ? "mt-5" : "mt-8"}`}>
            {cta ? (
              <Link
                href={cta.href}
                className="logo-grad inline-flex items-center gap-2 px-6 py-3.5 text-[13px] font-medium tracking-wide text-white transition"
              >
                {cta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : null}
            {ctaSecondary ? (
              <Link
                href={ctaSecondary.href}
                className="inline-flex items-center gap-2 border border-white/30 px-6 py-3.5 text-[13px] font-medium tracking-wide text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                {ctaSecondary.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
