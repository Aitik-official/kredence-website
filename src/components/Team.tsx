import BrandMark from "./BrandMark";
import Reveal from "./Reveal";
import { team } from "@/data/site";

export default function Team() {
  return (
    <section id="team" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-12 max-w-xl">
          <p className="mb-4 inline-flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.28em] text-industrial-steel">
            <BrandMark className="h-3.5 w-3.5" color="currentColor" />
            How we supply
          </p>
          <h2 className="font-display text-[1.85rem] font-medium uppercase leading-[1.08] tracking-[0.02em] text-industrial-ink sm:text-[2.4rem]">
            One range, one desk
          </h2>
        </Reveal>
        <div className="grid border-t border-[#e6e6e6] sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <article
              key={member.name}
              className="border-b border-[#e6e6e6] py-8 sm:px-6 lg:border-b-0 lg:border-r lg:last:border-r-0 lg:px-8"
            >
              <p className="font-display text-sm tracking-[0.16em] text-[#b0b0b0]">
                0{i + 1}
              </p>
              <h3 className="font-display mt-4 text-[1.05rem] font-medium uppercase tracking-[0.04em] text-industrial-ink">
                {member.name}
              </h3>
              <p className="mt-2 text-[14px] text-[#666]">{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
