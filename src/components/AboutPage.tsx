import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const values = [
  {
    title: "Quality excellence",
    detail:
      "The highest standards in products and services, held to international specifications such as ASTM, JIS, and EN.",
  },
  {
    title: "Innovation and expertise",
    detail:
      "Continuous improvement and practical solutions, backed by more than 15 years in the industry.",
  },
  {
    title: "Reliability and trust",
    detail:
      "Timely delivery, consistent performance, and solutions shaped to the project.",
  },
] as const;

const steps = [
  {
    title: "Material selection",
    detail: "The right material is chosen for the project, with the specification the job requires.",
  },
  {
    title: "Customization and processing",
    detail: "Work is prepared to the requirement, from specification through processing.",
  },
  {
    title: "Distribution",
    detail: "Material is supplied so construction, industrial, and commercial projects can move ahead.",
  },
] as const;

const notes = [
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

const facts = [
  { value: "15+", label: "Years of experience" },
  { value: "2010", label: "Building excellence since" },
  { value: "Global", label: "ASTM, JIS and EN" },
  { value: "Trusted", label: "Partner to major contractors" },
] as const;

export default function AboutPageContent() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <Reveal className="max-w-3xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-industrial-steel">
              About
            </p>
            <h2 className="mt-3 font-display text-[1.85rem] font-medium uppercase leading-[1.05] tracking-[0.02em] text-industrial-ink sm:text-[2.4rem]">
              Building excellence since 2010
            </h2>
            <p className="mt-5 font-serif text-[1.25rem] italic leading-snug text-industrial-ink sm:text-[1.4rem]">
              A journey of innovation, quality, and commitment to excellence.
            </p>
            <div className="mt-5 space-y-4 text-[15px] leading-[1.8] text-[#5c5c5c]">
              <p>
                Kredence Steel Trading is committed to exceptional quality and practical solutions for clients across the UAE, the GCC, and beyond. With over 15 years in steel trading and building materials, the firm is a trusted partner for businesses of all sizes.
              </p>
              <p>
                Dedication to excellence, competitive pricing, and a complete range has made Kredence a preferred choice for construction companies, industrial projects, commercial enterprises, and institutional clients throughout the Middle East. The work is a one-stop service, from material selection and customization to processing and distribution.
              </p>
              <p>
                Today, Kredence Steel supplies premium materials to Dubai, Abu Dhabi, Sharjah, and the other Emirates, with a growing presence in Saudi Arabia, Oman, Bahrain, Kuwait, Qatar, and beyond.
              </p>
            </div>
            <div className="mt-8">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-industrial-steel">
                Certifications
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["ISO", "QMS", "BIS", "MTC"].map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex h-8 items-center rounded-full border border-industrial-steel/30 bg-industrial-blue px-4 text-[11px] font-medium uppercase tracking-[0.12em] text-industrial-steel-dark"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-industrial-line bg-industrial-panel">
        <div className="mx-auto grid max-w-6xl sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="border-b border-industrial-line px-6 py-7 last:border-b-0 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <p className="font-display text-2xl font-medium uppercase tracking-[0.03em] text-industrial-ink">
                {fact.value}
              </p>
              <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.16em] text-industrial-muted">
                {fact.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-industrial-blue">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <Reveal className="max-w-xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-industrial-steel">
              How we work
            </p>
            <h2 className="mt-3 font-display text-[1.85rem] font-medium uppercase leading-[1.05] tracking-[0.02em] text-industrial-ink sm:text-[2.4rem]">
              One stop, from selection to supply
            </h2>
          </Reveal>
          <ol className="mt-10 grid gap-4 lg:grid-cols-3">
            {steps.map((step, index) => (
              <Reveal key={step.title} as="li" delay={index * 90} className="bg-white px-6 py-6">
                <p className="font-display text-3xl font-medium leading-none text-industrial-steel">
                  0{index + 1}
                </p>
                <h3 className="mt-4 font-display text-base font-medium uppercase tracking-[0.04em] text-industrial-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5c5c5c]">{step.detail}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <Reveal className="max-w-xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-industrial-steel">
              What drives us
            </p>
            <h2 className="mt-3 font-display text-[1.85rem] font-medium uppercase leading-[1.05] tracking-[0.02em] text-industrial-ink sm:text-[2.4rem]">
              Core values
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 80} className="border border-industrial-line bg-industrial-mist px-6 py-6">
                <p className="font-display text-3xl font-medium leading-none text-industrial-steel-light">
                  0{index + 1}
                </p>
                <h3 className="mt-4 font-display text-base font-medium uppercase tracking-[0.04em] text-industrial-ink">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5c5c5c]">{value.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-industrial-soft">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <Reveal className="max-w-xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-industrial-steel">
              What clients say
            </p>
            <h2 className="mt-3 font-display text-[1.85rem] font-medium uppercase leading-[1.05] tracking-[0.02em] text-industrial-ink sm:text-[2.4rem]">
              Trusted on the project
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {notes.map((note, index) => (
              <Reveal key={note.name} delay={index * 80} className="flex h-full flex-col border-t-2 border-industrial-steel bg-white px-6 py-6">
                <p className="font-serif text-4xl leading-none text-industrial-steel-light" aria-hidden>
                  “
                </p>
                <p className="mt-3 flex-1 text-[15px] leading-[1.7] text-industrial-ink">{note.quote}</p>
                <p className="mt-5 text-[12px] font-medium uppercase tracking-[0.12em] text-industrial-ink">
                  {note.name}
                </p>
                <p className="mt-1 text-[12px] text-industrial-muted">{note.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="logo-grad">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-12 sm:px-8 sm:py-14 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/70">
              Next step
            </p>
            <h2 className="mt-3 font-display text-[1.7rem] font-medium uppercase leading-[1.05] tracking-[0.02em] text-white sm:text-[2.1rem]">
              A trusted partner for the project
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white px-5 py-3 text-[13px] font-medium text-industrial-steel-dark transition hover:bg-industrial-mist"
          >
            Contact us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
