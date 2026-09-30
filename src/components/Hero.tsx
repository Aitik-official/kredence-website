"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BrandMark from "./BrandMark";

const AUTO_MS = 5000;

const slides = [
  {
    src: "/products/fencing-1.jpeg",
    alt: "Corrugated metal sheets used for fencing panels and hoardings",
    eyebrow: "Premium fencing solutions",
    title1: "Fencing panels",
    title2: "& hoardings",
    description:
      "Temporary and continuous corrugated fencing panels for construction sites, project boundaries, and secure site enclosures.",
    href: "/services?tab=fence",
    cta: "View products",
  },
  {
    src: "https://images.unsplash.com/photo-1557542931-ff0b08b222fa?auto=format&fit=crop&w=2000&q=80",
    alt: "Weld mesh and chain link fencing",
    eyebrow: "Site enclosures",
    title1: "Site enclosures",
    title2: "& perimeter mesh",
    description:
      "PVC eco fence, weld mesh, Heras, and chain link fencing for temporary security and controlled site access.",
    href: "/services?tab=fence",
    cta: "View products",
  },
  {
    src: "https://images.unsplash.com/photo-1697698532634-ea59b636ccea?auto=format&fit=crop&w=2000&q=80",
    alt: "Steel coils stored in a warehouse",
    eyebrow: "Coated metals",
    title1: "GI & PPGI",
    title2: "coils",
    description:
      "Mill-finish galvanized coils and pre-painted color coils for roofing, cladding, and panel production.",
    href: "/services?tab=metals",
    cta: "View products",
  },
  {
    src: "https://images.unsplash.com/photo-1756626524141-210fdbfd3ab2?auto=format&fit=crop&w=2000&q=80",
    alt: "Corrugated metal roofing sheets",
    eyebrow: "Roofing metals",
    title1: "Sheets, purlins",
    title2: "& roofing",
    description:
      "Corrugated color sheets, decking, Z and C purlins, sandwich panels, flashings, gutters, and GRP skylight sheets.",
    href: "/services?tab=metals",
    cta: "View products",
  },
] as const;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = slides[index];

  const next = useCallback(() => {
    setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(next, AUTO_MS);
    return () => window.clearInterval(timer);
  }, [paused, next, index]);

  return (
    <section
      id="hero"
      className="relative h-full min-h-[400px] overflow-hidden bg-industrial-dark text-white sm:min-h-[500px] lg:min-h-[100svh]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((item, i) => (
        <div
          key={item.src}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            priority={i === 0}
            className={`object-cover object-center ${i === index ? "hero-ken" : ""}`}
            sizes="100vw"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,50,61,0.9)_0%,rgba(23,50,61,0.62)_48%,rgba(23,50,61,0.28)_100%)]" />

      <div className="relative z-10 mx-auto flex h-full min-h-[400px] max-w-6xl flex-col justify-end px-4 pb-6 pt-16 sm:min-h-[500px] sm:px-6 sm:pb-12 sm:pt-28 lg:min-h-[100svh] lg:justify-center lg:pb-20 lg:pt-28 xl:max-w-7xl xl:px-8">
        <div key={slide.src} className="hero-animate max-w-2xl lg:max-w-3xl">
          <p className="mb-2 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.32em] text-white/75 sm:mb-4 sm:gap-2.5 sm:text-[11px] lg:mb-6">
            <BrandMark className="h-3 w-3 sm:h-3.5 sm:w-3.5" color="currentColor" />
            {slide.eyebrow}
          </p>
          <h1 className="font-display text-[1.75rem] font-medium uppercase leading-[0.95] tracking-[0.02em] text-white sm:text-4xl md:text-5xl lg:text-[4.8rem] xl:text-[5.4rem]">
            {slide.title1}
            <br />
            {slide.title2}
          </h1>
          <p className="mt-2 line-clamp-2 max-w-lg text-xs leading-relaxed text-white/70 sm:mt-4 sm:line-clamp-none sm:text-[14px] lg:text-base">
            {slide.description}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2.5 sm:mt-6 sm:gap-3 lg:mt-8">
            <Link
              href={slide.href}
              className="logo-grad inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium tracking-wide text-white transition sm:gap-2 sm:px-6 sm:py-3.5 sm:text-[13px]"
            >
              {slide.cta}
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 border border-white/30 px-4 py-2.5 text-xs font-medium tracking-wide text-white transition hover:border-white hover:bg-white hover:text-black sm:gap-2 sm:px-6 sm:py-3.5 sm:text-[13px]"
            >
              Get a quote
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Link>
            <div className="ml-1 flex items-center gap-1.5 sm:gap-2">
              {slides.map((item, i) => (
                <button
                  key={item.src}
                  type="button"
                  aria-label={`Show slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-6 sm:w-7 bg-white" : "w-1.5 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
