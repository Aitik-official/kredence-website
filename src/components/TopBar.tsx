import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { site } from "@/data/site";

export default function TopBar() {
  return (
    <div className="bg-ems-navy text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-2 text-[11px] sm:gap-4 sm:px-6 sm:py-2.5 sm:text-sm lg:px-8">
        {/* Left: email + hours */}
        <div className="flex min-w-0 items-center gap-3 sm:gap-5">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex min-w-0 max-w-[58vw] items-center gap-1.5 opacity-95 transition hover:opacity-100 sm:max-w-none sm:gap-2"
          >
            <Mail className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
            <span className="truncate">{site.email}</span>
          </a>
          <span className="hidden items-center gap-2 opacity-95 md:inline-flex">
            <Clock className="h-3.5 w-3.5 shrink-0" />
            {site.hoursShort}
          </span>
        </div>

        {/* Right: phone + location + quote */}
        <div className="flex shrink-0 items-center gap-3 sm:gap-5">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-1.5 opacity-95 transition hover:opacity-100 sm:gap-2"
          >
            <Phone className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
            <span className="sm:hidden">Call</span>
            <span className="hidden sm:inline">{site.phone}</span>
          </a>
          <a
            href={site.address.maps}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 opacity-95 transition hover:opacity-100 sm:inline-flex"
          >
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            Sharjah, Dubai, UAE
          </a>
          <Link
            href="/contact"
            className="hidden text-[12px] font-semibold uppercase tracking-[0.14em] text-ems-cyan transition hover:text-white md:inline"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
