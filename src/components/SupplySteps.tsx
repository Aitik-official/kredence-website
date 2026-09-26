import BrandMark from "./BrandMark";
import Reveal from "./Reveal";
import SectionButton from "./SectionButton";

const steps = [
  {
    title: "Send the requirement",
    description:
      "Name the fence or metal product, the size or finish if you have it, and the quantity the site needs.",
  },
  {
    title: "We confirm availability",
    description:
      "Kredence Steel Trading checks the range — panels, mesh, coils, sheets, purlins, or roofing accessories — and replies with what can be supplied.",
  },
  {
    title: "Supply to the project",
    description:
      "Once the order is agreed, the material is prepared for the site so fencing and metal work can continue.",
  },
] as const;

export default function SupplySteps() {
  return (
    <section id="supply" className="bg-industrial-dark py-20 text-white sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-12 max-w-xl">
          <p className="mb-4 inline-flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.28em] text-industrial-steel">
            <BrandMark className="h-3.5 w-3.5" color="currentColor" />
            How an order works
          </p>
          <h2 className="font-display text-[1.85rem] font-medium uppercase leading-[1.08] tracking-[0.02em] sm:text-[2.5rem]">
            From enquiry to site
          </h2>
        </Reveal>
        <ol className="grid gap-10 lg:grid-cols-3 lg:gap-8">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 140} className="border-t border-white/15 pt-6">
              <p className="font-display text-2xl font-medium text-industrial-steel-light">
                0{i + 1}
              </p>
              <h3 className="mt-4 font-display text-[15px] font-medium uppercase tracking-[0.06em]">
                {step.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-white/60">
                {step.description}
              </p>
            </Reveal>
          ))}
          </ol>
        <div className="mt-12">
          <SectionButton href="/contact">Know more</SectionButton>
        </div>
      </div>
    </section>
  );
}
