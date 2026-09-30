import Image from "next/image";

export default function HomeCta() {
  return (
    <section className="bg-industrial-mist px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="relative mx-auto max-w-6xl overflow-hidden xl:max-w-7xl">
        <Image
          src="/products/sandwich-1.jpeg"
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 1400px) 100vw, 1400px"
        />
        <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(23,50,61,0.9)_0%,rgba(36,86,112,0.84)_50%,rgba(59,110,142,0.8)_100%)]" />
        <div className="relative px-5 py-9 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          <h2 className="max-w-3xl font-display text-[1.45rem] font-medium uppercase leading-[1.12] tracking-[0.02em] text-white sm:text-[1.85rem] lg:text-[2.1rem]">
            Steel &amp; Building Materials Supplier
          </h2>
          <p className="mt-3 max-w-4xl text-[13px] font-medium leading-relaxed tracking-wide text-white/90 sm:mt-4 sm:text-[14.5px] lg:text-[15.5px]">
            GI &amp; PPGI Coils | Roofing &amp; Profile Sheets | Z &amp; C Purlins | Decking Sheets | Sandwich Panels | Fencing | Drywall Systems
          </p>
        </div>
      </div>
    </section>
  );
}
