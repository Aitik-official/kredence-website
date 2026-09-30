"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Search } from "lucide-react";
import HeroPin from "./HeroPin";
import PageHero from "./PageHero";
import { productGroups } from "@/data/site";

export default function ProductCatalog() {
  const searchParams = useSearchParams();
  const initial = searchParams.get("tab");
  const paramQuery = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(paramQuery);
  const [tab, setTab] = useState(
    initial === "metals" || initial === "fence" ? initial : "all",
  );

  useEffect(() => {
    setQuery(paramQuery);
  }, [paramQuery]);

  const groups = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return productGroups
      .filter((group) => tab === "all" || group.id === tab)
      .map((group) => ({
        ...group,
        items: group.items.filter((item) => {
          if (!needle) return true;
          return (
            item.title.toLowerCase().includes(needle) ||
            item.description.toLowerCase().includes(needle)
          );
        }),
      }))
      .filter((group) => group.items.length > 0);
  }, [query, tab]);

  const hero =
    tab === "fence"
      ? {
          eyebrow: "Fence",
          title: "Fence",
          image: "/products/fencing-1.jpeg",
        }
      : tab === "metals"
        ? {
            eyebrow: "Metals",
            title: "Metals",
            image: "/products/sandwich-1.jpeg",
          }
        : {
            eyebrow: "Products",
            title: "Products",
            image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1800&q=80",
          };

  return (
    <>
    <HeroPin variant="compact">
      <PageHero eyebrow={hero.eyebrow} title={hero.title} image={hero.image} compact />
    </HeroPin>
    <section className="relative z-10 bg-white py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 xl:max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-4 overflow-x-auto border-b border-[#e6e6e6] pb-2 sm:gap-6 sm:border-0 sm:pb-0">
            {[
              { id: "all", label: "All" },
              ...productGroups.map((group) => ({
                id: group.id,
                label: group.label,
              })),
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setTab(item.id)}
                className={`shrink-0 pb-2 text-[12px] font-medium uppercase tracking-[0.16em] sm:pb-3 ${
                  tab === item.id
                    ? "border-b border-industrial-steel text-industrial-ink"
                    : "text-[#8a8a8a]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <label className="flex items-center gap-2 border border-[#e6e6e6] px-3 py-2 sm:min-w-[260px] sm:py-2.5">
            <Search className="h-4 w-4 text-[#8a8a8a]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-[#9a9a9a]"
            />
          </label>
        </div>

        {groups.length === 0 ? (
          <p className="text-sm text-[#666]">No products match that search.</p>
        ) : (
          <div className="space-y-12 sm:space-y-16">
            {groups.map((group) => (
              <div key={group.id} id={group.id}>
                {tab === "all" ? (
                  <h2 className="font-display mb-4 text-xl font-medium uppercase tracking-[0.03em] text-industrial-ink sm:mb-6 sm:text-2xl">
                    {group.label}
                  </h2>
                ) : null}
                <div className="grid gap-4 py-2 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                  {group.items.map((item) => (
                    <Link
                      key={item.slug}
                      id={item.slug}
                      href={`/products/${item.slug}`}
                      className="card-lift group flex h-full scroll-mt-28 flex-col overflow-hidden border border-industrial-line bg-white shadow-[0_12px_32px_rgba(23,50,61,0.06)] hover:border-industrial-steel hover:shadow-[0_18px_40px_rgba(23,50,61,0.12)]"
                    >
                      <div className="relative h-48 overflow-hidden bg-industrial-soft sm:h-56">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition duration-700 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <span className="logo-grad absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition duration-500 group-hover:scale-x-100" />
                      </div>
                      <div className="flex flex-1 items-center justify-between gap-3 px-4 py-3.5 sm:px-5 sm:py-4">
                        <h3 className="font-display text-[14px] font-medium uppercase leading-snug tracking-[0.03em] text-industrial-ink sm:text-[15px]">
                          {item.title}
                        </h3>
                        <ArrowRight className="h-4 w-4 shrink-0 text-industrial-steel transition duration-300 group-hover:translate-x-1" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
    </>
  );
}
