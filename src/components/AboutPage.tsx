import Link from "next/link";
import { ArrowRight, Download, FileDown, FileText } from "lucide-react";
import Reveal from "./Reveal";
import Clients from "./Clients";
import { site } from "@/data/site";

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
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 xl:max-w-7xl">
          <Reveal className="max-w-3xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-industrial-steel">
              About
            </p>
            <h2 className="mt-3 font-display text-[1.65rem] font-medium uppercase leading-[1.05] tracking-[0.02em] text-industrial-ink sm:text-[2.2rem] lg:text-[2.5rem] xl:text-[2.75rem]">
              Building excellence since 2010
            </h2>
            <p className="mt-4 font-serif text-[1.15rem] italic leading-snug text-industrial-ink sm:mt-5 sm:text-[1.3rem] lg:text-[1.4rem]">
              A journey of innovation, quality, and commitment to excellence.
            </p>
            <div className="mt-4 space-y-3.5 text-[14px] leading-[1.8] text-[#5c5c5c] sm:mt-5 sm:space-y-4 sm:text-[15px]">
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
            <div className="mt-7 sm:mt-8">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-industrial-steel">
                Certifications
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["ISO", "QMS", "BIS", "MTC"].map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex h-8 items-center rounded-full border border-industrial-steel/30 bg-industrial-blue px-3.5 text-[11px] font-medium uppercase tracking-[0.12em] text-industrial-steel-dark sm:px-4"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Official Documents & Company Profile Downloads */}
            <div className="mt-8 rounded-xs border border-industrial-line bg-industrial-mist p-5 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-industrial-steel">
                    Company Documentation
                  </p>
                  <h3 className="mt-1 font-display text-[15px] font-bold uppercase tracking-wide text-industrial-ink sm:text-base">
                    Official Corporate Profile & Brochure
                  </h3>
                  <p className="mt-1 text-[13px] text-[#666]">
                    Download verified technical specs, corporate background, and product portfolios.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2.5 sm:shrink-0">
                  <a
                    href={site.companyProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Kredence_Steel_Trading_Company_Profile_V3.pdf"
                    className="logo-grad inline-flex items-center gap-2 px-4 py-2.5 text-[12px] font-semibold tracking-wide text-white shadow-xs transition hover:brightness-110"
                  >
                    <FileText className="h-4 w-4" />
                    <span>Company Profile (PDF)</span>
                    <Download className="h-3.5 w-3.5 opacity-80" />
                  </a>
                  <a
                    href={site.brochure}
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Kredence_Brochure.pdf"
                    className="inline-flex items-center gap-2 border border-industrial-steel/30 bg-white px-4 py-2.5 text-[12px] font-semibold tracking-wide text-industrial-ink transition hover:border-industrial-steel hover:text-industrial-steel"
                  >
                    <FileDown className="h-4 w-4 text-industrial-steel" />
                    <span>Brochure (PDF)</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-industrial-line bg-industrial-panel">
        <div className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4 xl:max-w-7xl">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="border-b border-industrial-line p-5 last:border-b-0 sm:p-6 lg:border-b-0 lg:border-r lg:last:border-r-0 [&:nth-child(odd)]:border-r"
            >
              <p className="font-display text-xl font-medium uppercase tracking-[0.03em] text-industrial-ink sm:text-2xl lg:text-3xl">
                {fact.value}
              </p>
              <p className="mt-1.5 text-[10.5px] font-medium uppercase tracking-[0.16em] text-industrial-muted sm:text-[11px]">
                {fact.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-industrial-blue">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 xl:max-w-7xl">
          <Reveal className="max-w-xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-industrial-steel">
              How we work
            </p>
            <h2 className="mt-3 font-display text-[1.65rem] font-medium uppercase leading-[1.05] tracking-[0.02em] text-industrial-ink sm:text-[2.2rem] lg:text-[2.4rem] xl:text-[2.6rem]">
              One stop, from selection to supply
            </h2>
          </Reveal>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {steps.map((step, index) => (
              <Reveal key={step.title} as="li" delay={index * 80} className="bg-white p-5 sm:p-6">
                <p className="font-display text-2xl font-medium leading-none text-industrial-steel sm:text-3xl">
                  0{index + 1}
                </p>
                <h3 className="mt-3.5 font-display text-[15px] font-medium uppercase tracking-[0.04em] text-industrial-ink sm:text-base">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#5c5c5c] sm:text-sm">{step.detail}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 xl:max-w-7xl">
          <Reveal className="max-w-xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-industrial-steel">
              What drives us
            </p>
            <h2 className="mt-3 font-display text-[1.65rem] font-medium uppercase leading-[1.05] tracking-[0.02em] text-industrial-ink sm:text-[2.2rem] lg:text-[2.4rem] xl:text-[2.6rem]">
              Core values
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 80} className="border border-industrial-line bg-industrial-mist p-5 sm:p-6">
                <p className="font-display text-2xl font-medium leading-none text-industrial-steel-light sm:text-3xl">
                  0{index + 1}
                </p>
                <h3 className="mt-3.5 font-display text-[15px] font-medium uppercase tracking-[0.04em] text-industrial-ink sm:text-base">
                  {value.title}
                </h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#5c5c5c] sm:text-sm">{value.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Clients />

      <section className="logo-grad">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-10 sm:px-6 sm:py-12 lg:flex-row lg:items-center lg:px-8 lg:py-14 xl:max-w-7xl">
          <div className="max-w-xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/70">
              Next step
            </p>
            <h2 className="mt-2.5 font-display text-[1.6rem] font-medium uppercase leading-[1.05] tracking-[0.02em] text-white sm:text-[2rem] lg:text-[2.2rem]">
              A trusted partner for the project
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={site.companyProfile}
              target="_blank"
              rel="noopener noreferrer"
              download="Kredence_Steel_Trading_Company_Profile_V3.pdf"
              className="inline-flex items-center gap-2 border border-white/40 bg-white/10 px-5 py-3 text-[13px] font-medium text-white backdrop-blur-xs transition hover:bg-white/20 hover:border-white"
            >
              <FileText className="h-4 w-4" />
              Company Profile (PDF)
              <Download className="h-3.5 w-3.5 opacity-80" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white px-5 py-3 text-[13px] font-semibold text-industrial-steel-dark transition hover:bg-industrial-mist"
            >
              Contact us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
