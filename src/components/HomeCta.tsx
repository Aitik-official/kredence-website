import Image from "next/image";

export default function HomeCta() {
  return (
    <section className="bg-industrial-mist px-5 py-10 sm:px-8 sm:py-12">
      <div className="relative mx-auto max-w-6xl overflow-hidden">
        <Image
          src="/products/sandwich-1.jpeg"
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 1152px) 100vw, 1152px"
        />
        <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(23,50,61,0.9)_0%,rgba(36,86,112,0.84)_50%,rgba(59,110,142,0.8)_100%)]" />
        <div className="relative px-6 py-12 sm:px-10 sm:py-14 lg:px-12">
          <h2 className="max-w-2xl font-display text-[1.6rem] font-medium uppercase leading-[1.12] tracking-[0.02em] text-white sm:text-[2.05rem]">
            Ready for the fence line and the coated metal?
          </h2>
        </div>
      </div>
    </section>
  );
}
