import BrandMark from "./BrandMark";
import Reveal from "./Reveal";

const markets = [
  { name: "Saudi Arabia", code: "sa" },
  { name: "Oman", code: "om" },
  { name: "Bahrain", code: "bh" },
  { name: "Kuwait", code: "kw" },
  { name: "Qatar", code: "qa" },
  { name: "Iraq", code: "iq" },
  { name: "Yemen", code: "ye" },
  { name: "Jordan", code: "jo" },
] as const;

export default function ExportMarkets({
  fit = false,
}: {
  fit?: boolean;
}) {
  return (
    <section
      id="export-markets"
      className={`bg-industrial-panel ${
        fit
          ? "flex min-h-0 lg:min-h-[100svh] flex-col justify-center py-12 sm:py-16 lg:py-20 xl:py-24"
          : "py-14 sm:py-18 lg:py-24 xl:py-28"
      }`}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 xl:max-w-7xl">
        <Reveal className="mb-8 text-center sm:mb-10 lg:mb-12">
          <p className="mb-2.5 inline-flex items-center justify-center gap-2 text-[11px] font-medium uppercase tracking-[0.28em] text-industrial-steel sm:mb-3">
            <BrandMark className="h-3.5 w-3.5" color="currentColor" />
            Global Reach
          </p>
          <h2 className="font-display text-[1.65rem] font-medium uppercase leading-tight tracking-[0.03em] text-industrial-ink sm:text-[2.1rem] lg:text-[2.5rem] xl:text-[2.75rem]">
            Regional Export Markets
          </h2>
          <p className="mx-auto mt-2.5 max-w-2xl text-[14px] leading-relaxed text-[#5c5c5c] sm:mt-3 sm:text-[15px] lg:text-base">
            Supplying steel, fencing systems, and building materials to contractors and project developers across the GCC and Middle East.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:gap-5 xl:gap-6">
          {markets.map((market, index) => (
            <Reveal
              key={market.name}
              delay={index * 40}
              className="card-lift flex flex-col items-center justify-center rounded-lg border border-industrial-line bg-white p-4 text-center shadow-xs transition hover:border-industrial-steel sm:p-5 lg:p-6"
            >
              <div className="mb-3 flex h-7 w-11 items-center justify-center overflow-hidden rounded-xs border border-black/10 shadow-xs sm:mb-4 sm:h-8 sm:w-12">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://flagcdn.com/w80/${market.code}.png`}
                  alt={`${market.name} flag`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="font-display text-[13px] font-medium tracking-[0.02em] text-industrial-ink sm:text-[14.5px] lg:text-[15.5px]">
                {market.name}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
