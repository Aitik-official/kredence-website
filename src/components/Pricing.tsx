import { Check } from "lucide-react";
import BrandMark from "./BrandMark";
import Reveal from "./Reveal";
import { pricing } from "@/data/site";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-14 text-center sm:mb-16">
          <p className="mb-4 inline-flex items-center justify-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.28em] text-industrial-steel">
            <BrandMark className="h-3.5 w-3.5" color="currentColor" />
            {pricing.eyebrow}
          </p>
          <h2 className="font-display text-[1.85rem] font-medium uppercase leading-[1.08] tracking-[0.02em] text-industrial-ink sm:text-[2.6rem]">
            {pricing.title}
          </h2>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {pricing.plans.map((plan, i) => {
            const featured = i === 1;
            return (
            <Reveal
              key={plan.name}
              delay={i * 70}
              className={`flex h-full flex-col border px-7 py-8 ${
                featured
                  ? "border-industrial-ink bg-industrial-dark text-white"
                  : "border-[#e6e6e6] bg-white text-industrial-ink"
              }`}
            >
              <p
                className={`text-[11px] font-medium uppercase tracking-[0.22em] ${
                  featured ? "text-white/55" : "text-[#8a8a8a]"
                }`}
              >
                {plan.name}
              </p>
              <p className="font-display mt-4 text-4xl font-medium">
                {plan.price}
                <span
                  className={`ml-2 text-sm font-normal ${
                    featured ? "text-white/55" : "text-[#8a8a8a]"
                  }`}
                >
                  {plan.billing}
                </span>
              </p>
              <h3 className="font-display mt-6 text-[15px] font-medium uppercase leading-snug tracking-[0.04em]">
                {plan.heading}
              </h3>
              <p
                className={`mt-3 text-[14px] leading-relaxed ${
                  featured ? "text-white/65" : "text-[#666]"
                }`}
              >
                {plan.description}
              </p>
              <ul className="mt-8 space-y-3 border-t border-current/10 pt-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-[14px]">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-industrial-steel" strokeWidth={2.4} />
                    {feature}
                  </li>
                ))}
              </ul>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
