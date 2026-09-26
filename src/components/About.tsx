import Image from "next/image";
import BrandMark from "./BrandMark";
import Reveal from "./Reveal";
import SectionButton from "./SectionButton";

const ranges = [
  {
    index: "01",
    title: "Fencing systems",
    detail: "Panels, hoardings, PVC eco fence, weld mesh, Heras, and chain link.",
  },
  {
    index: "02",
    title: "Coated metals",
    detail: "GI and PPGI coils, sheets, purlins, sandwich panels, and roofing.",
  },
] as const;

export default function About({
  moreHref = "/about",
  fit = false,
  hideLabel = false,
}: {
  moreHref?: string;
  fit?: boolean;
  hideLabel?: boolean;
}) {
  return (
    <section
      id="about"
      className={`bg-industrial-blue ${fit ? "flex min-h-[100svh] flex-col justify-center py-16" : "py-20 sm:py-24 lg:py-28"}`}
    >
      <div className="mx-auto grid w-full max-w-6xl items-stretch gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:gap-12">
        <Reveal variant="left" className="h-full">
          <div className="grid h-full grid-cols-12 gap-3">
          <div className="relative col-span-7 h-full min-h-[220px] overflow-hidden bg-industrial-dark sm:min-h-[280px]">
            <Image
              src="/products/fencing-1.jpeg"
              alt="Corrugated fencing panels on a project site"
              fill
              className="object-cover transition duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 60vw, 30vw"
            />
            <span className="pointer-events-none absolute inset-4 border border-white/35" />
          </div>
          <div className="col-span-5 flex h-full flex-col gap-3">
            <div className="relative min-h-[110px] flex-1 overflow-hidden bg-industrial-dark sm:min-h-[140px]">
              <Image
                src="/products/ppgi-1.jpg"
                alt="Color coated steel coils ready for supply"
                fill
                className="object-cover transition duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 40vw, 18vw"
              />
            </div>
            <div className="bg-industrial-dark px-4 py-5 text-white sm:px-5 sm:py-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-industrial-steel">
                Since 2010
              </p>
              <p className="mt-2 font-serif text-[1.35rem] italic leading-tight text-white">
                Building excellence for every project
              </p>
            </div>
          </div>
          </div>
        </Reveal>

        <Reveal variant="right" delay={80}>
          {hideLabel ? null : (
            <p className="mb-4 inline-flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.28em] text-industrial-steel">
              <BrandMark className="h-3.5 w-3.5" color="currentColor" />
              About the company
            </p>
          )}
          <h2 className="font-display max-w-xl text-[1.85rem] font-medium uppercase leading-[1.08] tracking-[0.02em] text-industrial-ink sm:text-[2.5rem]">
            Fence systems and coated metals from one trading desk
          </h2>
          <p className="mt-5 max-w-xl font-serif text-[1.45rem] italic leading-snug text-industrial-ink sm:text-[1.65rem]">
            One company for the fence line and the metal.
          </p>
          <p className="mt-5 max-w-xl text-[15px] leading-[1.85] text-[#5c5c5c]">
            Kredence Steel Trading supplies what construction sites and industrial
            buildings specify. Send the product and the quantity. We confirm what
            is available and arrange supply for the site.
          </p>

          <div className="mt-8 border-y border-[#e6e6e6]">
            {ranges.map((range, i) => (
              <Reveal key={range.index} delay={i * 140} className="flex gap-4 py-5">
                <span className="font-serif text-xl italic leading-none text-industrial-steel">
                  {range.index}
                </span>
                <div>
                  <p className="font-display text-base font-medium uppercase tracking-[0.04em] text-industrial-ink">
                    {range.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#5c5c5c]">{range.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-8">
            <SectionButton href={moreHref}>Know more</SectionButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
