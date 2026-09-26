"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { contactNeeds, site } from "@/data/site";
import Reveal from "./Reveal";

export default function ContactForm() {
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

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          need: data.get("need"),
          message: data.get("message"),
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
    "w-full border border-[#e6e6e6] bg-white px-4 py-3.5 text-[14px] text-industrial-ink outline-none placeholder:text-[#9a9a9a] focus:border-industrial-ink";

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="bg-industrial-dark px-5 py-16 text-white sm:px-8 sm:py-20 lg:py-24">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.28em] text-industrial-steel">
            <Link href="/" className="text-white/50 hover:text-white">
              Home
            </Link>
            <span className="mx-2 text-white/30">/</span>
            Contact
          </p>
          <h1 className="font-display text-[2.2rem] font-medium uppercase leading-[0.98] tracking-[0.02em] sm:text-[2.8rem]">
            Connect with us
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/70">
            Tell us the fence or metal product and quantity. Kredence Steel
            Trading will confirm availability.
          </p>
          <div className="mt-10 space-y-6 text-[14px]">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">
                Office
              </p>
              <a
                href={site.address.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block leading-snug text-white/85 hover:text-white"
              >
                {site.address.full}
              </a>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">
                Email
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-1 block text-white/85 hover:text-white"
              >
                {site.email}
              </a>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">
                Phone
              </p>
              <a href={site.phoneHref} className="mt-1 block text-white/85 hover:text-white">
                {site.phone}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80} className="px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <form onSubmit={onSubmit} className="grid gap-4">
            <input name="name" required placeholder="Full name*" className={field} />
            <input
              name="email"
              type="email"
              required
              placeholder="Email address*"
              className={field}
            />
            <input
              name="phone"
              type="tel"
              required
              inputMode="tel"
              placeholder="Phone number*"
              pattern="[0-9+\-\s]{8,15}"
              className={field}
            />
            <select name="need" required className={field} defaultValue="">
              <option value="" disabled>
                Product*
              </option>
              {contactNeeds.map((need) => (
                <option key={need} value={need}>
                  {need}
                </option>
              ))}
            </select>
            <textarea
              name="message"
              placeholder="Quantity, site, and timeline"
              className={`${field} min-h-[120px] resize-y`}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="logo-grad mt-2 inline-flex w-fit items-center justify-center px-7 py-3.5 text-[13px] font-medium tracking-wide text-white transition disabled:opacity-70"
            >
              {status === "loading" ? "Sending…" : "Send Message"}
            </button>
            {status === "success" ? (
              <p className="text-sm text-industrial-ink">
                Enquiry sent to {site.email}. We&apos;ll get back within 12 hours.
              </p>
            ) : null}
            {status === "error" ? (
              <p className="text-sm text-industrial-steel">{errorMessage}</p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
