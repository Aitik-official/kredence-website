import Image from "next/image";
import Link from "next/link";
import { productGroups, site } from "@/data/site";

const pageLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Products", href: "/services" },
  { label: "Our Portfolio", href: "/clients" },
  { label: "Certificates", href: "/certificates" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

function SocialIcon({
  type,
  className,
}: {
  type: "linkedin" | "instagram" | "facebook";
  className?: string;
}) {
  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 0-2.9 1.45 1.45 0 0 0 0 2.9m1.4 9.74v-8.37H5.06v8.37h2.8z" />
      </svg>
    );
  }
  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
        <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8.8a3.2 3.2 0 0 1 0 6.4zm6.4-8.5a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0zM12 2.2c-2.7 0-3 .01-4.1.06-2.8.13-4.1 1.45-4.2 4.2-.05 1.1-.06 1.4-.06 4.1s.01 3 .06 4.1c.13 2.75 1.45 4.07 4.2 4.2 1.1.05 1.4.06 4.1.06s3-.01 4.1-.06c2.75-.13 4.07-1.45 4.2-4.2.05-1.1.06-1.4.06-4.1s-.01-3-.06-4.1c-.13-2.75-1.45-4.07-4.2-4.2-1.1-.05-1.4-.06-4.1-.06zm0 1.8c2.6 0 2.9.01 4 .06 1.9.09 2.8.98 2.9 2.9.05 1.1.06 1.3.06 3.9s-.01 2.8-.06 3.9c-.09 1.9-.98 2.8-2.9 2.9-1.1.05-1.3.06-4 .06s-2.9-.01-4-.06c-1.9-.09-2.8-.98-2.9-2.9-.05-1.1-.06-1.3-.06-3.9s.01-2.8.06-3.9c.09-1.9.98-2.8 2.9-2.9 1.1-.05 1.4-.06 4-.06z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
    </svg>
  );
}

export default function Footer() {
  const social = [
    { label: "LinkedIn", href: site.social.linkedin, type: "linkedin" as const },
    { label: "Instagram", href: site.social.instagram, type: "instagram" as const },
    { label: "Facebook", href: site.social.facebook, type: "facebook" as const },
  ];

  return (
    <footer className="relative z-10 bg-industrial-dark text-white">
      <div className="mx-auto w-full max-w-[90rem] px-6 py-10 sm:px-10 lg:px-14">
        <div className="grid items-start gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <Link href="/" className="inline-flex bg-white px-3.5 py-2.5 sm:px-4 sm:py-3">
              <Image
                src={site.logo}
                alt={site.name}
                width={220}
                height={90}
                className="h-11 w-auto object-contain sm:h-13 lg:h-14"
              />
            </Link>
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-white/70">
              Kredence Steel Trading supplies fencing systems and coated metals
              for construction sites, enclosures, roofing, and industrial projects.
            </p>
          </div>

          <div>
            <h3 className="font-display text-[13px] font-bold uppercase tracking-[0.14em]">
              Pages
            </h3>
            <ul className="mt-4 space-y-2">
              {pageLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-white/75 transition hover:text-industrial-steel-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-[13px] font-bold uppercase tracking-[0.14em]">
              Downloads
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={site.brochure}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Kredence_Brochure.pdf"
                  className="inline-flex items-center gap-1.5 text-[14px] font-medium text-white/80 transition hover:text-industrial-steel-light"
                >
                  <span className="text-[10px] text-industrial-steel-light">PDF</span>
                  Product Brochure
                </a>
              </li>
              <li>
                <a
                  href={site.companyProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Kredence_Steel_Trading_Company_Profile_V3.pdf"
                  className="inline-flex items-center gap-1.5 text-[14px] font-medium text-white/80 transition hover:text-industrial-steel-light"
                >
                  <span className="text-[10px] text-industrial-steel-light">PDF</span>
                  Company Profile
                </a>
              </li>
              <li>
                <Link
                  href="/certificates"
                  className="inline-flex items-center gap-1.5 text-[14px] text-white/75 transition hover:text-industrial-steel-light"
                >
                  <span className="text-[10px] text-industrial-steel-light">ISO</span>
                  Certificates & Dossier
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-[13px] font-bold uppercase tracking-[0.14em]">
              Contact
            </h3>
            <div className="mt-4 space-y-4">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/50">
                  Email
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 block break-all text-[14px] font-bold tracking-wide text-white transition hover:text-industrial-steel-light"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/50">
                  Phone
                </p>
                <a
                  href={site.phoneHref}
                  className="mt-1 block text-[14px] font-bold text-white transition hover:text-industrial-steel-light"
                >
                  {site.phone}
                </a>
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/50">
                  Follow
                </p>
                <div className="mt-2 flex gap-2">
                  {social.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      aria-label={item.label}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="logo-grad flex h-8 w-8 items-center justify-center text-white transition"
                    >
                      <SocialIcon type={item.type} className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Accreditation & ISO Benchmark Section using complete available spacing */}
        <div className="mt-8 border-t border-white/15 pt-5">
          <div className="mb-2.5 flex items-center justify-between">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
              Accreditations & Certified ISO Benchmarks
            </p>
            <Link
              href="/certificates"
              className="text-[11px] font-semibold text-industrial-steel-light underline-offset-4 hover:underline"
            >
              View All Certificates →
            </Link>
          </div>

          <Link
            href="/certificates"
            className="group flex flex-col items-stretch justify-between gap-4 overflow-hidden border border-white/20 bg-white p-3 shadow-md transition hover:border-white hover:shadow-lg lg:flex-row lg:items-center lg:gap-6 lg:p-3.5"
          >
            {/* Left: IAF & EIAC Logo Image */}
            <div className="relative h-12 w-48 shrink-0 sm:h-13 sm:w-56">
              <Image
                src="/logo/iaf.jpeg"
                alt="IAF & EIAC Accreditations"
                fill
                className="object-contain object-left"
                sizes="(max-width: 640px) 200px, 240px"
              />
            </div>

            <div className="hidden h-10 w-px shrink-0 bg-[#e0e0e0] lg:block" />

            {/* Right: ISO Standards in clean horizontal row side-by-side using full available spacing */}
            <div className="grid flex-1 grid-cols-1 gap-2.5 sm:grid-cols-3 sm:gap-4">
              <div className="flex items-center gap-2.5 rounded-xs bg-[#f4f7f9] px-3.5 py-2 text-industrial-dark transition group-hover:bg-[#eaf1f5]">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#0b5c9e]" />
                <div className="min-w-0">
                  <p className="text-[12px] font-bold leading-tight tracking-tight text-industrial-ink">
                    ISO 9001:2015
                  </p>
                  <p className="truncate text-[10px] text-[#666]">
                    Quality Management System
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 rounded-xs bg-[#f4f7f9] px-3.5 py-2 text-industrial-dark transition group-hover:bg-[#eaf1f5]">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#047857]" />
                <div className="min-w-0">
                  <p className="text-[12px] font-bold leading-tight tracking-tight text-industrial-ink">
                    ISO 14001:2015
                  </p>
                  <p className="truncate text-[10px] text-[#666]">
                    Environmental Management
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 rounded-xs bg-[#f4f7f9] px-3.5 py-2 text-industrial-dark transition group-hover:bg-[#eaf1f5]">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#b45309]" />
                <div className="min-w-0">
                  <p className="text-[12px] font-bold leading-tight tracking-tight text-industrial-ink">
                    ISO 45001:2018
                  </p>
                  <p className="truncate text-[10px] text-[#666]">
                    Occupational Health & Safety
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-8 space-y-4 border-t border-white/15 pt-6">
          {productGroups.map((group) => (
            <div key={group.id} className="flex flex-col gap-2 sm:flex-row sm:gap-8">
              <h3 className="w-20 shrink-0 pt-0.5 font-display text-[13px] font-bold uppercase tracking-[0.14em]">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                {group.items.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/products/${item.slug}`}
                      className="text-[14px] text-white/75 transition hover:text-industrial-steel-light"
                    >
                      {item.slug === "wire-mesh-fence"
                        ? "Wire Mesh / Heras Fence"
                        : item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/15 bg-black/20">
        <div className="mx-auto flex w-full max-w-[90rem] flex-col items-center justify-between gap-2 px-6 py-2.5 pb-[calc(0.65rem+env(safe-area-inset-bottom))] text-[12px] text-white/60 sm:flex-row sm:px-10 lg:px-14">
          <p>
            © {new Date().getFullYear()} {site.name}. All Rights Reserved
          </p>
          <a
            href="https://www.pranaviinfotech.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            Powered by Pranavi Infotech
          </a>
        </div>
      </div>
    </footer>
  );
}
