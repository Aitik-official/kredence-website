import BrandMark from "./BrandMark";
import Reveal from "./Reveal";

export const reviews = [
  {
    quote:
      "KREDENCE delivered an impeccable perimeter solution for our headquarters. Their attention to detail and ability to coordinate complex logistics kept the project on schedule and on budget.",
    name: "Anupam Kumar",
    role: "Global Facilities Director, Vertex Technologies",
  },
  {
    quote:
      "From design workshops to installation, the team was proactive and collaborative. The final result elevates our campus while meeting rigorous security requirements.",
    name: "Vicky Sharma",
    role: "Head of Infrastructure, Northgate University",
  },
  {
    quote:
      "Their materials knowledge and craftsmanship are second to none. We now have a premium perimeter that enhances the guest experience without compromising protection.",
    name: "Himanshu Ghode",
    role: "Operations Manager, Azure Resorts",
  },
] as const;

export default function ClientReviews({
  fit = false,
}: {
  fit?: boolean;
}) {
  return (
    <section
      id="reviews"
      className={`bg-industrial-soft ${
        fit
          ? "flex min-h-0 lg:min-h-[100svh] flex-col justify-center py-12 sm:py-16 lg:py-20 xl:py-24"
          : "py-14 sm:py-18 lg:py-24 xl:py-28"
      }`}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 xl:max-w-7xl">
        <Reveal className="mb-8 max-w-xl sm:mb-10 lg:mb-12">
          <p className="mb-2.5 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.28em] text-industrial-steel sm:mb-3 sm:gap-2.5">
            <BrandMark className="h-3.5 w-3.5" color="currentColor" />
            What clients say
          </p>
          <h2 className="font-display text-[1.65rem] font-medium uppercase leading-[1.05] tracking-[0.02em] text-industrial-ink sm:text-[2.1rem] lg:text-[2.4rem] xl:text-[2.75rem]">
            Trusted on the project
          </h2>
        </Reveal>
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
          {reviews.map((note, index) => (
            <Reveal
              key={note.name}
              delay={index * 70}
              className="card-lift flex h-full flex-col border-t-2 border-industrial-steel bg-white p-5 sm:p-7 lg:p-8"
            >
              <p className="font-serif text-3xl leading-none text-industrial-steel-light sm:text-4xl" aria-hidden>
                “
              </p>
              <p className="mt-2.5 flex-1 text-[14px] leading-[1.7] text-industrial-ink sm:mt-3 sm:text-[15px]">
                {note.quote}
              </p>
              <div className="mt-5 border-t border-industrial-line pt-3.5 sm:mt-6 sm:pt-4">
                <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-industrial-ink">
                  {note.name}
                </p>
                <p className="mt-0.5 text-[11.5px] text-industrial-muted sm:text-[12px]">
                  {note.role}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
