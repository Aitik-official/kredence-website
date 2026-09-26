import Image from "next/image";
import Link from "next/link";
import { productGroups, site } from "@/data/site";

const pageLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Products", href: "/services" },
  { label: "Our Portfolio", href: "/clients" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

function SocialIcon({
  type,
  className,
}: {
  type: "x" | "youtube" | "instagram" | "globe";
  className?: string;
}) {
  if (type === "x") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.992 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    );
  }
  if (type === "youtube") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
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
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </svg>
  );
}

export default function Footer() {
  const social = [
    { label: "X", href: site.whatsapp, type: "x" as const },
    { label: "YouTube", href: site.whatsapp, type: "youtube" as const },
    { label: "Instagram", href: site.whatsapp, type: "instagram" as const },
    { label: "Website", href: "/", type: "globe" as const },
  ];

  return (
    <footer className="relative z-10 bg-industrial-dark text-white">
      <div className="mx-auto w-full max-w-[90rem] px-6 py-10 sm:px-10 lg:px-14">
        <div className="grid items-start gap-10 lg:grid-cols-3 lg:gap-8">
          <div>
            <Link href="/" className="inline-flex bg-white px-4 py-3">
              <Image
                src={site.logo}
                alt={site.name}
                width={249}
                height={232}
                className="h-24 w-auto object-contain sm:h-28"
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
