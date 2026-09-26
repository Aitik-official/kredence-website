"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowRight,
  FlaskConical,
  Headset,
  Scissors,
  Warehouse,
} from "lucide-react";
import AssetSupplyPanel from "./AssetSupplyPanel";
import Button from "./Button";
import Reveal from "./Reveal";
import {
  growth,
  infrastructureIntro,
  infrastructureItems,
  rental,
  supplyIntro,
} from "@/data/site";

const infraIcons = {
  headset: Headset,
  scissors: Scissors,
  flask: FlaskConical,
  warehouse: Warehouse,
} as const;
const tabs = [
  { id: "infrastructure", label: "Structural Steel" },
  { id: "rental", label: "Stainless & Alloys" },
  { id: "supply", label: "Sheets, Plates & Coils" },
] as const;

type TabId = (typeof tabs)[number]["id"];

function isTab(value: string | null): value is TabId {
  return value === "infrastructure" || value === "rental" || value === "supply";
}

export default function ServicesHub() {
  const searchParams = useSearchParams();
  const [tab, setTab] = useState<TabId>("infrastructure");

  useEffect(() => {
    const param = searchParams.get("tab");
    if (isTab(param)) setTab(param);
  }, [searchParams]);

  function selectTab(id: TabId) {
    setTab(id);
    const url = id === "infrastructure" ? "/services" : `/services?tab=${id}`;
    window.history.replaceState(null, "", url);
  }

  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-14 lg:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,transparent_48%,#f3f3f3_48%,#f3f3f3_62%,transparent_62%)] opacity-60"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 hidden border-b border-[#ececec] md:flex">
          {tabs.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => selectTab(item.id)}
              className={`relative -mb-px px-5 py-3.5 text-sm font-semibold tracking-wide transition ${
                tab === item.id
                  ? "border-b-2 border-ems-cyan text-ems-cyan"
                  : "text-[#666] hover:text-finbiz-navy"
              }`}
            >
              {item.label}
            </button>
          ))}
        </Reveal>

        <Reveal className="mb-8 md:hidden">
          <label className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-[#888]">
            Select service
          </label>
          <select
            value={tab}
            onChange={(e) => selectTab(e.target.value as TabId)}
            className="w-full rounded-lg border border-[#e5e5e5] bg-white px-4 py-3 text-sm font-semibold text-finbiz-navy outline-none focus:border-ems-cyan"
          >
            {tabs.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </Reveal>

        {tab === "infrastructure" ? (
          <div key="infrastructure">
            <Reveal className="mb-10 max-w-2xl">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-ems-cyan">
                {infrastructureIntro.eyebrow}
              </p>
              <h2 className="mb-3 text-2xl font-bold text-[#1A2432] sm:text-3xl">
                {infrastructureIntro.title}
              </h2>
              <p className="text-[15px] leading-relaxed text-[#666]">
                {infrastructureIntro.description}
              </p>
            </Reveal>

            <div className="grid gap-6 lg:grid-cols-2">
              {infrastructureItems.map((item, i) => {
                const Icon = infraIcons[item.icon];
                return (
                  <Reveal
                    key={item.slug}
                    as="article"
                    delay={i * 80}
                    className="group relative overflow-hidden rounded-[22px] border border-[#e8eef5] bg-white shadow-[0_14px_40px_rgba(1,21,82,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(1,21,82,0.1)]"
                  >
                    <div className="grid sm:grid-cols-[1.05fr_1fr]">
                      <div className="relative min-h-[220px] overflow-hidden sm:min-h-[260px]">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition duration-700 group-hover:scale-[1.05]"
                          sizes="(max-width: 640px) 100vw, 35vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#011552]/55 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-white/10" />
                        <span className="absolute left-4 top-4 inline-flex rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-ems-navy shadow-sm">
                          {String(i + 1).padStart(2, "0")} · {item.tag}
                        </span>
                      </div>

                      <div className="relative flex flex-col justify-center p-6 sm:p-7 lg:p-8">
                        <span
                          aria-hidden
                          className="pointer-events-none absolute -right-2 -top-2 select-none text-[5.5rem] font-bold leading-none text-ems-navy/5"
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#006dc2_0%,#03abab_55%,#4ea32a_100%)] text-white shadow-[0_10px_24px_rgba(3,171,171,0.28)]">
                          <Icon className="h-5 w-5" strokeWidth={1.8} />
                        </span>

                        <h3 className="mb-2 text-xl font-bold text-[#1A2432]">
                          {item.title}
                        </h3>
                        <p className="mb-5 text-[14px] leading-relaxed text-[#666]">
                          {item.description}
                        </p>

                        <div className="mt-auto flex items-center justify-between gap-3 border-t border-[#eef2f7] pt-4">
                          <span className="h-1 w-10 rounded-full bg-gradient-to-r from-ems-blue via-ems-cyan to-ems-green" />
                          <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-ems-navy transition group-hover:text-ems-cyan"
                          >
                            Enquire
                            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        ) : null}

        {tab === "rental" ? (
          <Reveal
            key="rental"
            className="grid items-center gap-0 overflow-hidden rounded-2xl border border-[#eee] lg:grid-cols-2"
          >
            <div className="relative min-h-[300px] lg:min-h-[420px]">
              <Image
                src={rental.image}
                alt={rental.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-ems-cyan">
                {rental.eyebrow}
              </p>
              <h2 className="mb-4 text-2xl font-bold text-[#1A2432] sm:text-3xl">
                {rental.title}
              </h2>
              <p className="mb-6 text-[15px] leading-relaxed text-[#666]">
                {rental.description}
              </p>
              <ul className="mb-8 space-y-3">
                {growth.features.map((f) => (
                  <li key={f.title} className="text-sm text-[#1A2432]">
                    <span className="font-semibold">{f.title}:</span>{" "}
                    <span className="text-[#666]">{f.description}</span>
                  </li>
                ))}
              </ul>
              <Button href="/contact">{rental.cta}</Button>
            </div>
          </Reveal>
        ) : null}

        {tab === "supply" ? (
          <div key="supply">
            <Reveal className="mb-8 max-w-2xl">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-ems-cyan">
                {supplyIntro.eyebrow}
              </p>
              <h2 className="mb-3 text-2xl font-bold text-[#1A2432] sm:text-3xl">
                {supplyIntro.title}
              </h2>
              <p className="text-[15px] leading-relaxed text-[#666]">
                {supplyIntro.description}
              </p>
            </Reveal>
            <Reveal delay={100}>
              <AssetSupplyPanel autoRotate />
            </Reveal>
          </div>
        ) : null}

        <Reveal
          delay={150}
          className="mt-10 overflow-hidden rounded-2xl bg-[linear-gradient(105deg,#011552_0%,#006dc2_55%,#03abab_100%)] px-5 py-7 sm:mt-14 sm:px-8 sm:py-10"
        >
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-ems-green">
                Ready to start
              </p>
              <p className="max-w-md text-lg font-semibold text-white sm:text-xl">
                Need a quote for this service?
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-md bg-white px-7 py-3.5 text-sm font-bold text-ems-navy transition hover:bg-ems-soft sm:w-auto"
            >
              Contact Kredence Steel
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
