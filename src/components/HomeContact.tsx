"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import BrandMark from "./BrandMark";
import { homeContact, site } from "@/data/site";

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

  return (
    <section
      id="connect"
      className="relative z-10 flex flex-1 bg-industrial-mist text-industrial-ink shadow-[0_-28px_50px_rgba(23,50,61,0.12)]"
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
                <p className="relative mt-2 text-[15px] leading-relaxed break-words text-white">
                  {card.value}
                </p>
              </>
            );
            return card.href ? (
              <a key={card.label} href={card.href} className={className}>
                {body}
              </a>
            ) : (
              <div key={card.label} className={className}>
                {body}
              </div>
            );
          })}
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
                Enquiry sent to {site.email}. We&apos;ll get back within 12 hours.
              </p>
            ) : null}
            {status === "error" ? (
              <p className="text-sm font-medium text-industrial-steel sm:col-span-2">{errorMessage}</p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
