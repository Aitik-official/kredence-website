import { Star } from "lucide-react";
import BrandMark from "./BrandMark";
import Reveal from "./Reveal";
import { testimonials } from "@/data/site";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5 text-industrial-steel">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${i + 1 <= Math.floor(rating) ? "fill-industrial-steel" : "fill-none"}`}
          strokeWidth={1.6}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#f7f7f7] py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 xl:max-w-7xl">
        <Reveal className="mb-10 sm:mb-14">
          <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.28em] text-industrial-steel sm:mb-4 sm:gap-2.5">
            <BrandMark className="h-3.5 w-3.5" color="currentColor" />
            Testimonial
          </p>
          <h2 className="font-display text-[1.65rem] font-medium uppercase leading-[1.08] tracking-[0.02em] text-industrial-ink sm:text-[2.2rem] lg:text-[2.6rem]">
            Our Happy Customers
          </h2>
        </Reveal>

        <div className="grid gap-px bg-[#e4e4e4] sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal
              key={item.name}
              delay={i * 60}
              as="article"
              className="flex h-full flex-col bg-[#f7f7f7] p-7 sm:p-8"
            >
              <Stars rating={item.rating} />
              <p className="mt-6 flex-1 text-[15px] leading-[1.8] text-[#3d3d3d]">
                “{item.quote}”
              </p>
              <div className="mt-8 border-t border-[#e4e4e4] pt-5">
                <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-industrial-ink">
                  {item.name}
                </p>
                <p className="mt-1 text-[12px] text-[#888]">
                  {item.role}, {item.company}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
