"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BrandMark from "./BrandMark";
import Reveal from "./Reveal";
import { clients, partners } from "@/data/site";

const AUTO_MS = 4000;

function visibleCount(width: number) {
  if (width >= 1024) return 4;
  if (width >= 640) return 3;
  return 2;
}

export default function Clients({
  showHeading = true,
  fit = false,
}: {
  showHeading?: boolean;
  fit?: boolean;
}) {
  const [visible, setVisible] = useState(4);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const maxIndex = Math.max(0, clients.length - visible);

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
    <section
      id="clients"
      className={`bg-industrial-panel ${fit ? "flex min-h-[100svh] flex-col justify-center py-16" : "py-16 sm:py-20 lg:py-24"}`}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        {showHeading ? (
          <Reveal className="mb-12 text-center sm:mb-14">
            <p className="mb-3 inline-flex items-center justify-center gap-2 text-[11px] font-medium uppercase tracking-[0.28em] text-industrial-steel">
              <BrandMark className="h-3.5 w-3.5" color="currentColor" />
              {partners.eyebrow}
            </p>
            <h2 className="font-display text-[1.7rem] font-medium uppercase leading-tight tracking-[0.03em] text-industrial-ink sm:text-[2.35rem]">
              {partners.title}
            </h2>
          </Reveal>
        ) : null}

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {maxIndex > 0 ? (
          <button
            type="button"
            aria-label="Previous partners"
            onClick={() => go(-1)}
            className="absolute top-1/2 left-0 z-10 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-[#e4e4e4] bg-white text-industrial-ink transition hover:border-industrial-steel hover:text-industrial-steel"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          ) : null}

          <div className="overflow-hidden py-3">
            <div
              className={`flex transition-transform duration-500 ease-out ${maxIndex === 0 ? "justify-center" : ""}`}
              style={{ transform: `translateX(-${index * (100 / visible)}%)` }}
            >
              {clients.map((client) => (
                <div
                  key={client.name}
                  className="shrink-0 px-1.5 sm:px-2"
                  style={{ width: `${100 / (maxIndex === 0 ? clients.length : visible)}%` }}
                >
                  <div className="card-lift flex h-28 items-center justify-center bg-white px-4 sm:h-32">
                    <div className="text-center">
                      <p className="font-display text-[1.05rem] font-medium uppercase leading-none tracking-[0.14em] text-industrial-dark sm:text-[1.2rem]">
                        {client.mark}
                      </p>
                      <span className="mx-auto mt-2 block h-px w-8 bg-industrial-steel" />
                      <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.26em] text-industrial-steel">
                        {client.line}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {maxIndex > 0 ? (
          <button
            type="button"
            aria-label="Next partners"
            onClick={() => go(1)}
            className="absolute top-1/2 right-0 z-10 flex h-9 w-9 translate-x-1/2 -translate-y-1/2 items-center justify-center border border-[#e4e4e4] bg-white text-industrial-ink transition hover:border-industrial-steel hover:text-industrial-steel"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          ) : null}

          {maxIndex > 0 ? (
          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }, (_, dot) => (
              <button
                key={dot}
                type="button"
                aria-label={`Show partners ${dot + 1}`}
                onClick={() => setIndex(dot)}
                className={`h-1.5 rounded-full transition-all ${
                  dot === index ? "w-7 bg-industrial-steel-light" : "w-1.5 bg-[#d0d0d0]"
                }`}
              />
            ))}
          </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
