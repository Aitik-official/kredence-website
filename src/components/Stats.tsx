import Reveal from "./Reveal";
import { stats } from "@/data/site";

export default function Stats() {
  return (
    <section className="border-y border-[#e6e6e6] bg-industrial-soft">
      <div className="mx-auto grid max-w-6xl sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal
            key={stat.label}
            delay={index * 60}
            className="border-b border-[#e6e6e6] px-5 py-8 sm:px-8 lg:border-b-0 lg:border-r lg:last:border-r-0"
          >
            <p className="font-display text-3xl font-medium text-industrial-ink">
              {stat.value}
            </p>
            <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#8a8a8a]">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
