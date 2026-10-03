"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Clock, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import BrandMark from "./BrandMark";
import { homeContact, site } from "@/data/site";

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

export default function HomeContact() {
  const subject = useSearchParams().get("subject") ?? "";
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const firstName = String(data.get("firstName") ?? "").trim();
    const lastName = String(data.get("lastName") ?? "").trim();
    const name = `${firstName} ${lastName}`.trim();
    const enquiry = String(data.get("subject") ?? "").trim() || "General enquiry";
    const note = String(data.get("message") ?? "").trim();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email: data.get("email"),
          phone: data.get("phone"),
          need: enquiry,
          message: note || `${enquiry} — ${name}`,
        }),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        error?: string;
      };

      if (!response.ok || !result.ok) {
        setStatus("error");
        setErrorMessage(result.error || "Could not send enquiry.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  }

  const field =
    "w-full border border-[#e4e4e4] bg-white px-4 py-3.5 text-[14px] text-industrial-ink outline-none transition placeholder:text-[#9a9a9a] focus:border-industrial-steel";

  const cards = [
    {
      label: "Address",
      value: site.address.full,
      href: site.address.maps,
      icon: MapPin,
      target: "_blank" as const,
    },
    {
      label: "Phone",
      value: site.phone,
      href: site.phoneHref,
      icon: Phone,
    },
    {
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
      icon: Mail,
    },
    {
      label: "Hours",
      value: site.hours,
      href: "",
      icon: Clock,
    },
  ];

  const social = [
    { label: "LinkedIn", href: site.social.linkedin, type: "linkedin" as const },
    { label: "Instagram", href: site.social.instagram, type: "instagram" as const },
    { label: "Facebook", href: site.social.facebook, type: "facebook" as const },
  ];

  return (
    <section
      id="connect"
      className="relative z-10 flex flex-col bg-industrial-mist text-industrial-ink shadow-[0_-28px_50px_rgba(23,50,61,0.12)]"
    >
      <div className="mx-auto grid h-fit w-full max-w-[90rem] items-start gap-6 px-6 py-14 sm:px-10 sm:py-16 lg:grid-cols-[minmax(16rem,22rem)_minmax(0,1fr)] lg:gap-8 lg:px-14 lg:py-20">
        <div className="flex h-full flex-col gap-4">
          {cards.map((card) => {
            const Icon = card.icon;
            const className =
              "logo-grad group relative flex flex-col justify-center overflow-hidden px-6 py-6 text-white shadow-[0_14px_32px_rgba(23,50,61,0.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(23,50,61,0.28)]";
            const body = (
              <>
                <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,transparent_46%)]" />
                <span className="relative flex h-9 w-9 items-center justify-center bg-white/15 text-white">
                  <Icon className="h-4 w-4" />
                </span>
                <p className="relative mt-4 text-[11px] font-medium uppercase tracking-[0.18em] text-white/70">
                  {card.label}
                </p>
                <p className="relative mt-2 whitespace-pre-line text-[15px] leading-relaxed break-words text-white">
                  {card.value}
                </p>
              </>
            );
            return card.href ? (
              <a
                key={card.label}
                href={card.href}
                target={card.target}
                rel={card.target ? "noopener noreferrer" : undefined}
                className={className}
              >
                {body}
              </a>
            ) : (
              <div key={card.label} className={className}>
                {body}
              </div>
            );
          })}

          <div className="border border-white/40 bg-white/80 p-5 shadow-[0_10px_24px_rgba(23,50,61,0.06)] backdrop-blur-xs">
            <p className="text-[10.5px] font-medium uppercase tracking-[0.2em] text-industrial-steel">
              Follow Us
            </p>
            <div className="mt-3 flex items-center gap-2.5">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="logo-grad flex h-9 w-9 items-center justify-center text-white shadow-sm transition hover:brightness-110"
                >
                  <SocialIcon type={item.type} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative bg-white px-6 py-10 text-industrial-ink shadow-[0_24px_60px_rgba(23,50,61,0.12)] transition duration-300 hover:-translate-y-1 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          <span className="logo-grad absolute inset-x-0 top-0 h-1" />
          <p className="mb-5 inline-flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.28em] text-industrial-steel">
            <BrandMark className="h-3.5 w-3.5" color="currentColor" />
            {homeContact.eyebrow}
          </p>
          <h1 className="font-display text-[2.1rem] font-medium uppercase leading-[0.98] tracking-[0.02em] sm:text-[2.6rem]">
            {homeContact.title}
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#5c5c5c]">
            {homeContact.description}
          </p>

          <form onSubmit={onSubmit} className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-6">
            <label className="group block">
              <span className="mb-2.5 block text-[11px] font-medium uppercase tracking-[0.16em] text-[#8a8a8a] transition group-focus-within:text-industrial-steel">
                First name
              </span>
              <input name="firstName" required placeholder="First name" className={field} />
            </label>
            <label className="group block">
              <span className="mb-2.5 block text-[11px] font-medium uppercase tracking-[0.16em] text-[#8a8a8a] transition group-focus-within:text-industrial-steel">
                Last name
              </span>
              <input name="lastName" required placeholder="Last name" className={field} />
            </label>
            <label className="group block">
              <span className="mb-2.5 block text-[11px] font-medium uppercase tracking-[0.16em] text-[#8a8a8a] transition group-focus-within:text-industrial-steel">
                Email
              </span>
              <input
                name="email"
                type="email"
                required
                placeholder="Email address"
                className={field}
              />
            </label>
            <label className="group block">
              <span className="mb-2.5 block text-[11px] font-medium uppercase tracking-[0.16em] text-[#8a8a8a] transition group-focus-within:text-industrial-steel">
                Phone
              </span>
              <input
                name="phone"
                type="tel"
                required
                inputMode="tel"
                placeholder="Phone number"
                pattern="[0-9+\-\s]{8,15}"
                className={field}
              />
            </label>
            <label className="group block sm:col-span-2">
              <span className="mb-2.5 block text-[11px] font-medium uppercase tracking-[0.16em] text-[#8a8a8a] transition group-focus-within:text-industrial-steel">
                Subject
              </span>
              <input
                name="subject"
                required
                key={subject}
                defaultValue={subject}
                placeholder="Subject of your enquiry"
                className={field}
              />
            </label>
            <label className="group block sm:col-span-2">
              <span className="mb-2.5 block text-[11px] font-medium uppercase tracking-[0.16em] text-[#8a8a8a] transition group-focus-within:text-industrial-steel">
                Message
              </span>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us what you need"
                className={field}
              />
            </label>

            <div className="pt-2 sm:col-span-2">
              <button
                type="submit"
                disabled={status === "loading"}
                className="logo-grad inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium tracking-wide text-white transition duration-300 hover:-translate-y-0.5 disabled:opacity-70"
              >
                {status === "loading" ? "Sending…" : "Send Message"}
              </button>
            </div>

            {status === "success" ? (
              <p className="text-sm font-medium text-industrial-ink sm:col-span-2">
                We&apos;ll get back within 12 hours.
              </p>
            ) : null}
            {status === "error" ? (
              <p className="text-sm font-medium text-industrial-steel sm:col-span-2">{errorMessage}</p>
            ) : null}
          </form>
        </div>
      </div>

      {/* Google Map Section with Red Pin Card */}
      <div className="relative mx-auto mb-14 w-full max-w-[90rem] px-6 sm:mb-16 sm:px-10 lg:mb-20 lg:px-14">
        <div className="relative overflow-hidden border border-[#dce5ea] bg-white shadow-[0_20px_45px_rgba(23,50,61,0.1)]">
          {/* Top banner info */}
          <div className="flex flex-col items-start justify-between gap-3 border-b border-[#e6edf0] bg-industrial-mist px-6 py-4 sm:flex-row sm:items-center sm:px-8">
            <div className="flex items-center gap-3">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white shadow-sm">
                <MapPin className="h-4 w-4 fill-white text-red-600" />
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-industrial-steel">
                  Head Office & Trading Location
                </p>
                <h3 className="font-display text-base font-semibold uppercase tracking-[0.02em] text-industrial-ink sm:text-lg">
                  {site.name} — {site.address.full}
                </h3>
              </div>
            </div>
            <a
              href={site.address.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="logo-grad inline-flex items-center gap-2 px-4 py-2 text-[12px] font-medium tracking-wide text-white shadow-xs transition hover:brightness-110"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Interactive Map with Center Red Pin & Floating Card */}
          <div className="relative h-[380px] w-full sm:h-[440px] lg:h-[480px]">
            <iframe
              title="Kredence Steel Trading Location Map"
              src="https://maps.google.com/maps?q=Dubai%2C%20United%20Arab%20Emirates&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Prominent Red Pin Marker Placed on the Map */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-full flex-col items-center">
              {/* Radar pulse ring */}
              <span className="absolute top-[32px] h-7 w-14 rounded-[100%] bg-red-600/30 animate-ping" />
              <span className="absolute top-[34px] h-3 w-8 rounded-[100%] bg-black/25 blur-xs" />

              {/* Pin Icon */}
              <div className="relative flex flex-col items-center transition-transform duration-300">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-600 text-white shadow-[0_8px_20px_rgba(220,38,38,0.5)] ring-4 ring-white">
                  <MapPin className="h-6 w-6 fill-white text-red-600" />
                </div>
                <div className="-mt-1.5 h-3 w-3 rotate-45 bg-red-600 shadow-sm" />
              </div>

              {/* Location Badge */}
              <div className="mt-1.5 flex items-center gap-1.5 rounded-full border border-white/40 bg-industrial-dark/95 px-3 py-1 text-[11px] font-semibold tracking-wide text-white shadow-xl backdrop-blur-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                <span>Kredence Steel Trading</span>
              </div>
            </div>

            {/* Clean Location Info Card (Bottom-Left) */}
            <div className="pointer-events-auto absolute bottom-4 left-4 z-10 max-w-xs border border-white/80 bg-white/95 p-4 shadow-[0_16px_36px_rgba(23,50,61,0.22)] backdrop-blur-md sm:bottom-6 sm:left-6 sm:max-w-sm sm:p-5">
              <div className="flex items-start gap-3.5">
                <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600 shadow-inner">
                  <MapPin className="h-5 w-5 fill-red-600 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="inline-block rounded-xs bg-red-100 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em] text-red-700">
                    Verified Location
                  </span>
                  <h4 className="mt-1 font-display text-[14px] font-bold uppercase tracking-[0.02em] text-industrial-dark sm:text-[15px]">
                    {site.name}
                  </h4>
                  <p className="mt-0.5 text-[12px] leading-relaxed text-[#555] sm:text-[12.5px]">
                    {site.address.full}
                  </p>
                  <a
                    href={site.address.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="logo-grad mt-3 inline-flex items-center gap-1.5 px-3.5 py-2 text-[11px] font-medium tracking-wide text-white shadow-xs transition hover:brightness-110"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
