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
          className={`${
            dark
              ? "bg-industrial-dark text-white flex min-h-0 lg:min-h-[100svh] flex-col justify-center py-12 sm:py-16 lg:py-20 xl:py-24"
              : `${sectionTone[1]} py-14 sm:py-18 lg:py-24 xl:py-28`
          }`}
        >
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 xl:max-w-7xl">
            <Reveal
              className={`flex flex-col sm:flex-row sm:items-end sm:justify-between ${
                dark ? "mb-6 gap-4 sm:mb-8" : "mb-8 gap-5 sm:mb-12 sm:gap-6"
              }`}
            >
              <div className="max-w-xl">
                <p
                  className={`mb-2.5 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.28em] sm:mb-4 sm:gap-2.5 ${
                    dark ? "text-industrial-steel-light" : "text-industrial-steel"
                  }`}
                >
                  <BrandMark className="h-3.5 w-3.5" color="currentColor" />
                  {group.homeEyebrow}
                </p>
                <h2
                  className={`font-display font-medium uppercase leading-[1.08] tracking-[0.02em] ${
                    dark
                      ? "text-[1.6rem] text-white sm:text-[2.1rem] lg:text-[2.35rem] xl:text-[2.6rem]"
                      : "text-[1.65rem] text-industrial-ink sm:text-[2.2rem] lg:text-[2.6rem] xl:text-[2.85rem]"
                  }`}
                >
                  {group.homeTitle}
                </h2>
                <p
                  className={`mt-2.5 max-w-lg text-[14px] leading-relaxed sm:mt-4 sm:text-[15px] ${
                    dark ? "text-white/70" : "text-neutral-600"
                  }`}
                >
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
              <div className="grid gap-3.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
                {group.items.map((item) => {
                  return (
                    <Link
                      key={item.slug}
                      href={`/products/${item.slug}`}
                      className="card-lift group relative block h-56 overflow-hidden bg-industrial-dark sm:h-64 lg:h-72"
                    >
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                      <div className="absolute inset-0 bg-black/35 opacity-0 transition duration-500 group-hover:opacity-100" />

                      <span className="absolute inset-x-0 top-0 z-10 h-8 bg-white transition-transform duration-500 ease-out group-hover:-translate-y-full" />
                      <span className="absolute inset-x-0 bottom-0 z-10 flex h-[4.5rem] items-center bg-white px-4 transition-transform duration-500 ease-out group-hover:translate-y-full">
                        <span className="font-display text-[13.5px] font-medium uppercase leading-snug tracking-[0.03em] text-industrial-ink sm:text-[14px]">
                          {item.title}
                        </span>
                      </span>

                      <span className="absolute inset-0 z-10 flex items-end p-4 opacity-0 transition duration-500 group-hover:opacity-100 sm:p-5">
                        <span className="font-display text-[14px] font-medium uppercase leading-snug tracking-[0.03em] text-white sm:text-[15px]">
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
