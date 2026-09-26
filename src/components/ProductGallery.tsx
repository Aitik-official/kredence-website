"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [index, setIndex] = useState(0);
  const current = images[index] ?? images[0];
  const multiple = images.length > 1;

  const go = (direction: -1 | 1) => {
    setIndex((currentIndex) => (currentIndex + direction + images.length) % images.length);
  };

  return (
    <div>
      <div className="flex min-h-[18rem] items-center justify-center gap-3 bg-industrial-soft px-3 py-6 sm:min-h-[26rem] sm:gap-4">
        {multiple ? (
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => go(-1)}
            className="flex h-9 w-9 shrink-0 items-center justify-center bg-white text-industrial-ink shadow-sm transition hover:text-industrial-steel"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        ) : null}
        <div className="flex flex-col items-center gap-3">
          <div className="bg-white p-3">
            <img
              key={current}
              src={current}
              alt={title}
              className="max-h-[22rem] w-auto max-w-[min(100%,28rem)] object-contain"
            />
          </div>
          {multiple ? (
            <span className="bg-white px-2.5 py-1 font-display text-[11px] tracking-[0.16em] text-industrial-ink">
              {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </span>
          ) : null}
        </div>
        {multiple ? (
          <button
            type="button"
            aria-label="Next image"
            onClick={() => go(1)}
            className="flex h-9 w-9 shrink-0 items-center justify-center bg-white text-industrial-ink shadow-sm transition hover:text-industrial-steel"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        ) : null}
      </div>

      {multiple ? (
        <div className="mt-3 flex gap-2">
          {images.map((src, imageIndex) => {
            const active = imageIndex === index;
            return (
              <button
                key={src}
                type="button"
                aria-label={`Show image ${imageIndex + 1}`}
                aria-current={active}
                onClick={() => setIndex(imageIndex)}
                className={`relative flex h-[4.5rem] w-[5.5rem] items-center justify-center bg-industrial-soft ${
                  active ? "ring-2 ring-industrial-steel" : "ring-1 ring-[#e4e4e4]"
                }`}
              >
                <img src={src} alt="" className="h-full w-full object-contain" />
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
