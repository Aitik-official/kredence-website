import Link from "next/link";
import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";
import BrandMark from "./BrandMark";
import Reveal from "./Reveal";
import { site } from "@/data/site";

export default function HomeContactCta() {
  return (
    <section className="relative overflow-hidden bg-industrial-dark text-white">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(36,86,112,0.3)_0%,rgba(23,50,61,0.95)_100%)]" />
      <div className="relative mx-auto w-full max-w-[90rem] px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <Reveal className="max-w-2xl">
            <p className="mb-2 inline-flex items-center gap-2 text-[10.5px] font-medium uppercase tracking-[0.28em] text-industrial-steel-light sm:mb-2.5 sm:gap-2 sm:text-[11px]">
              <BrandMark className="h-3 w-3 sm:h-3.5 sm:w-3.5" color="currentColor" />
              Get in Touch
            </p>
            <h2 className="font-display text-[1.4rem] font-medium uppercase leading-[1.1] tracking-[0.02em] text-white sm:text-[1.8rem] lg:text-[2.1rem]">
              Ready to Discuss Your Project Requirements?
            </h2>
            <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-white/75 sm:mt-2.5 sm:text-[14px]">
              Send us your product specifications, required sizes, and project timelines. Our trading desk will quickly confirm availability and commercial pricing.
            </p>
          </Reveal>

          <Reveal delay={80} className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/contact"
              className="logo-grad inline-flex items-center justify-center gap-2 px-5 py-3 text-[13px] font-medium tracking-wide text-white shadow-md transition hover:brightness-110"
            >
              <Mail className="h-3.5 w-3.5" />
              Request a Quote
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/30 bg-white/10 px-5 py-3 text-[13px] font-medium tracking-wide text-white backdrop-blur-xs transition hover:bg-white hover:text-industrial-dark"
            >
              <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" />
              WhatsApp Us
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 border border-white/20 bg-transparent px-4 py-3 text-[13px] font-medium tracking-wide text-white/90 transition hover:border-white hover:text-white"
            >
              <Phone className="h-3.5 w-3.5 text-industrial-steel-light" />
              {site.phone}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
