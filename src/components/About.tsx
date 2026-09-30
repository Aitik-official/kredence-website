import Image from "next/image";
import BrandMark from "./BrandMark";
import Reveal from "./Reveal";
import SectionButton from "./SectionButton";

const highlights = [
  {
    title: "Wide Product Range",
    detail: "From GI & PPGI coils to roofing, purlins, sandwich panels and fencing solutions.",
  },
  {
    title: "Competitive Pricing",
    detail: "Commercial pricing for project, bulk and ongoing supply requirements.",
  },
  {
    title: "Project-Focused Supply",
    detail: "Products supplied to meet the specifications, quantities and timelines of your project.",
  },
  {
    title: "UAE-Wide Supply",
    detail: "Supplying contractors, purchasers, fabricators and businesses across the UAE.",
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
      className={`bg-industrial-blue ${
        fit
          ? "flex min-h-0 lg:min-h-[100svh] flex-col justify-center py-12 sm:py-16 lg:py-20 xl:py-24"
          : "py-14 sm:py-20 lg:py-24 xl:py-28"
      }`}
    >
      <div className="mx-auto grid w-full max-w-6xl items-stretch gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 xl:max-w-7xl xl:gap-16">
        <Reveal variant="left" className="h-full">
          <div className="grid h-full grid-cols-12 gap-2.5 sm:gap-3">
            <div className="relative col-span-7 h-full min-h-[180px] overflow-hidden bg-industrial-dark sm:min-h-[240px] lg:min-h-[280px]">
              <Image
                src="/products/fencing-1.jpeg"
                alt="Corrugated fencing panels on a project site"
                fill
                className="object-cover transition duration-700 hover:scale-105"
                sizes="(max-width: 640px) 55vw, (max-width: 1024px) 50vw, 30vw"
              />
              <span className="pointer-events-none absolute inset-3 border border-white/35 sm:inset-4" />
            </div>
            <div className="col-span-5 flex h-full flex-col gap-2.5 sm:gap-3">
              <div className="relative min-h-[90px] flex-1 overflow-hidden bg-industrial-dark sm:min-h-[120px]">
                <Image
                  src="/products/ppgi-1.jpg"
                  alt="Color coated steel coils ready for supply"
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 640px) 40vw, (max-width: 1024px) 35vw, 18vw"
                />
              </div>
              <div className="bg-industrial-dark p-3.5 text-white sm:p-5 lg:p-6">
                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-industrial-steel sm:text-[11px]">
                  15+ Years
                </p>
                <p className="mt-1.5 font-serif text-[1.1rem] italic leading-tight text-white sm:text-[1.25rem] lg:text-[1.3rem]">
                  Building excellence for every project
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal variant="right" delay={80}>
          {hideLabel ? null : (
            <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.28em] text-industrial-steel sm:mb-4 sm:gap-2.5">
              <BrandMark className="h-3.5 w-3.5" color="currentColor" />
              Why Choose Kredence
            </p>
          )}
          <h2 className="font-display max-w-xl text-[1.65rem] font-medium uppercase leading-[1.08] tracking-[0.02em] text-industrial-ink sm:text-[2.2rem] lg:text-[2.5rem] xl:text-[2.75rem]">
            Why Choose KREDENCE
          </h2>
          <p className="mt-3 max-w-xl font-serif text-[1.15rem] italic leading-snug text-industrial-ink sm:mt-4 sm:text-[1.3rem] lg:text-[1.45rem]">
            15+ Years of Experience
          </p>
          <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-[#5c5c5c] sm:text-[15px]">
            Steel &amp; building materials supplied for real project requirements.
          </p>

          <div className="mt-5 grid gap-3.5 border-y border-[#e6e6e6] py-4 sm:mt-6 sm:grid-cols-2 sm:gap-4 sm:py-5">
            {highlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 70} className="flex flex-col">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-xs font-bold tracking-wide text-industrial-steel-dark sm:text-sm">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-[13px] font-medium uppercase tracking-[0.03em] text-industrial-ink sm:text-sm">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-1 text-[12.5px] leading-relaxed text-[#5c5c5c] sm:text-[13px]">
                  {item.detail}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-5 sm:mt-6">
            <SectionButton href={moreHref}>Know more</SectionButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
