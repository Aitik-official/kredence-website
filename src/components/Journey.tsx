import BrandMark from "./BrandMark";
import Reveal from "./Reveal";
import { journey } from "@/data/site";

export default function Journey() {
  return (
    <section id="journey" className="bg-[#0e0e0e] py-20 text-white sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-14 max-w-xl sm:mb-16">
          <p className="mb-4 inline-flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.28em] text-industrial-steel">
            <BrandMark className="h-3.5 w-3.5" color="currentColor" />
            {journey.eyebrow}
          </p>
          <h2 className="font-display text-[1.85rem] font-medium uppercase leading-[1.08] tracking-[0.02em] sm:text-[2.6rem]">
            {journey.title}
          </h2>
        </Reveal>

        <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {journey.milestones.map((item) => (
            <li key={item.year} className="border-t border-white/15 pt-6">
              <p className="font-display text-2xl font-medium text-industrial-steel-light">
                {item.year}
              </p>
              <h3 className="mt-4 font-display text-[13px] font-medium uppercase leading-snug tracking-[0.08em]">
                {item.title}
              </h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-white/55">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
