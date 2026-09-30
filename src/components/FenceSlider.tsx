"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AUTO_MS = 4500;

type FenceItem = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

function visibleCount(width: number) {
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
}

export default function FenceSlider({ items }: { items: readonly FenceItem[] }) {
  const [visible, setVisible] = useState(2);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const maxIndex = Math.max(0, items.length - visible);

  useEffect(() => {
    const update = () => setVisible(visibleCount(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (paused || maxIndex === 0) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, AUTO_MS);
    return () => window.clearInterval(timer);
  }, [paused, maxIndex, index]);

  const go = (direction: -1 | 1) => {
    setIndex((current) => {
      const next = current + direction;
      if (next < 0) return maxIndex;
      if (next > maxIndex) return 0;
      return next;
    });
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <button
        type="button"
        aria-label="Previous fence products"
        onClick={() => go(-1)}
        className="absolute top-1/2 left-0 z-10 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-[#e4e4e4] bg-white text-industrial-ink transition hover:border-industrial-steel hover:text-industrial-steel shadow-sm"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * (100 / visible)}%)` }}
        >
          {items.map((item, itemIndex) => {
            return (
              <div
                key={item.slug}
                className="shrink-0 px-2"
                style={{ width: `${100 / visible}%` }}
              >
                <Link
                  href={`/products/${item.slug}`}
                  className="card-lift group relative block h-56 overflow-hidden bg-industrial-dark sm:h-64 lg:h-72"
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
                  <span className="logo-grad absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />

                  <span className="absolute top-4 left-4 font-display text-xs tracking-[0.2em] text-white/80 sm:top-5 sm:left-5 sm:text-sm">
                    0{itemIndex + 1}
                  </span>

                  <span className="absolute inset-x-0 bottom-0 p-4 sm:p-5 lg:p-6">
                    <span className="mb-2 block h-px w-8 bg-industrial-steel-light sm:mb-3 sm:w-10" />
                    <span className="block font-display text-lg font-medium uppercase leading-snug tracking-[0.04em] text-white sm:text-xl">
                      {item.title}
                    </span>
                    <span className="mt-1.5 line-clamp-2 block max-w-sm text-xs leading-relaxed text-white/75 sm:text-sm">
                      {item.description}
                    </span>
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        aria-label="Next fence products"
        onClick={() => go(1)}
        className="absolute top-1/2 right-0 z-10 flex h-9 w-9 translate-x-1/2 -translate-y-1/2 items-center justify-center border border-[#e4e4e4] bg-white text-industrial-ink transition hover:border-industrial-steel hover:text-industrial-steel"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      <div className="mt-6 flex items-center justify-center gap-2">
        {Array.from({ length: maxIndex + 1 }, (_, dot) => (
          <button
            key={dot}
            type="button"
            aria-label={`Show fence products ${dot + 1}`}
            onClick={() => setIndex(dot)}
            className={`h-1.5 rounded-full transition-all ${
              dot === index ? "w-7 bg-industrial-steel-light" : "w-1.5 bg-[#d0d0d0]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
