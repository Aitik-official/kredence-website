import Link from "next/link";
import BrandMark from "./BrandMark";
import FenceSlider from "./FenceSlider";
import HomeCta from "./HomeCta";
import Reveal from "./Reveal";
import SectionButton from "./SectionButton";
import { productGroups } from "@/data/site";

const sectionTone = ["bg-industrial-dark", "bg-industrial-mist"] as const;

export default function Services() {
  return (
    <>
      {productGroups.map((group, index) => {
        const dark = group.id === "fence";
        return (
        <div key={group.id}>
        <section
          id={index === 0 ? "products" : group.id}
          className={`${dark ? "bg-industrial-dark text-white flex min-h-[100svh] flex-col justify-center py-12" : `${sectionTone[1]} py-20 sm:py-24 lg:py-28`}`}
        >
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <Reveal className={`flex flex-col sm:flex-row sm:items-end sm:justify-between ${dark ? "mb-6 gap-4 sm:mb-8" : "mb-12 gap-6"}`}>
              <div className="max-w-xl">
                <p className={`mb-4 inline-flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.28em] ${dark ? "text-industrial-steel-light" : "text-industrial-steel"}`}>
                  <BrandMark className="h-3.5 w-3.5" color="currentColor" />
                  {group.homeEyebrow}
                </p>
                <h2 className={`font-display font-medium uppercase leading-[1.08] tracking-[0.02em] ${dark ? "text-[1.7rem] text-white sm:text-[2.15rem]" : "text-[1.85rem] text-industrial-ink sm:text-[2.6rem]"}`}>
                  {group.homeTitle}
                </h2>
                <p className={`mt-4 max-w-lg text-[15px] leading-relaxed ${dark ? "text-white/70" : "text-neutral-600"}`}>
                  {group.homeSubtitle}
                </p>
              </div>
              <SectionButton href={`/services?tab=${group.id}`} light={dark}>
                View {group.label}
              </SectionButton>
            </Reveal>

            {group.id === "fence" ? (
              <FenceSlider items={group.items} />
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => {
                  return (
                    <Link
                      key={item.slug}
                      href={`/products/${item.slug}`}
                      className="card-lift group relative block h-64 overflow-hidden bg-industrial-dark"
                    >
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                      <div className="absolute inset-0 bg-black/35 opacity-0 transition duration-500 group-hover:opacity-100" />

                      <span className="absolute inset-x-0 top-0 z-10 h-8 bg-white transition-transform duration-500 ease-out group-hover:-translate-y-full" />
                      <span className="absolute inset-x-0 bottom-0 z-10 flex h-[4.5rem] items-center bg-white px-4 transition-transform duration-500 ease-out group-hover:translate-y-full">
                        <span className="font-display text-[14px] font-medium uppercase leading-snug tracking-[0.03em] text-industrial-ink">
                          {item.title}
                        </span>
                      </span>

                      <span className="absolute inset-0 z-10 flex items-end p-5 opacity-0 transition duration-500 group-hover:opacity-100">
                        <span className="font-display text-[15px] font-medium uppercase leading-snug tracking-[0.03em] text-white">
                          {item.title}
                        </span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </section>
        {group.id === "fence" ? <HomeCta /> : null}
        </div>
        );
      })}
    </>
  );
}
