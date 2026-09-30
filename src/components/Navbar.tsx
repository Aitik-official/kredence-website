"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, Menu, Search, X } from "lucide-react";
import Logo from "./Logo";
import { navItems, productGroups } from "@/data/site";

type NavChild = { label: string; href: string };
type NavItem = {
  label: string;
  href: string;
  children?: readonly NavChild[];
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const pathname = usePathname();
  const [pastHero, setPastHero] = useState(pathname !== "/");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeMenuTimer = useRef<number | null>(null);
  const isHome = pathname === "/";

  useEffect(() => {
    return () => {
      if (closeMenuTimer.current) window.clearTimeout(closeMenuTimer.current);
    };
  }, []);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setServicesOpen(false);
        setOpenGroup(null);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setOpenGroup(null);
    setMobileServicesOpen(false);
    setMobileGroup(null);
    setPastHero(pathname !== "/");
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    function update() {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      if (pathname !== "/") {
        setPastHero(true);
        return;
      }
      setPastHero(y > (window.innerWidth < 1024 ? 180 : window.innerHeight * 0.65));
    }
    update();
    window.addEventListener("scroll", update, { passive: true, capture: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update, { capture: true });
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  const solidNav = !isHome || pastHero || open;
  const linkBase = solidNav
    ? "text-[#444] hover:text-industrial-steel"
    : "text-white/80 hover:text-white";
  const linkActive = solidNav ? "text-industrial-ink" : "text-white";

  const headerClass = `fixed inset-x-0 top-0 ${
    solidNav
      ? "border-b border-[#e6e6e6] bg-white shadow-sm"
      : "border-b border-transparent bg-transparent"
  }`;

  return (
    <>
    <header className={`z-50 transition-colors duration-300 ${headerClass}`}>
      <div className="relative mx-auto flex w-full max-w-[90rem] items-center gap-3 px-6 py-2 sm:gap-5 sm:px-10 lg:gap-8 lg:px-14">
        <div className="shrink-0">
          <Logo light={!solidNav} />
        </div>

        <form action="/services" method="get" className="hidden min-w-0 flex-1 md:block">
          <label
            className={`flex max-w-md items-center gap-2 border px-3 py-2 ${
              solidNav
                ? "border-[#e4e4e4] bg-industrial-soft"
                : "border-white/25 bg-white/10"
            }`}
          >
            <Search
              className={`h-4 w-4 shrink-0 ${solidNav ? "text-[#8a8a8a]" : "text-white/70"}`}
            />
            <input
              name="q"
              type="search"
              placeholder="Search products"
              className={`w-full bg-transparent text-sm outline-none ${
                solidNav
                  ? "text-industrial-ink placeholder:text-[#9a9a9a]"
                  : "text-white placeholder:text-white/50"
              }`}
            />
          </label>
        </form>

        <nav className="ml-auto hidden items-center justify-end gap-6 xl:flex">
          {(navItems as readonly NavItem[]).map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            if (item.children?.length) {
              return (
                <div
                  key={item.label}
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={() => {
                    if (closeMenuTimer.current) window.clearTimeout(closeMenuTimer.current);
                    setServicesOpen(true);
                  }}
                  onMouseLeave={() => {
                    closeMenuTimer.current = window.setTimeout(() => {
                      setServicesOpen(false);
                      setOpenGroup(null);
                    }, 160);
                  }}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setServicesOpen((v) => !v);
                      setOpenGroup(null);
                    }}
                    className={`inline-flex items-center gap-1 text-[12px] font-bold uppercase tracking-[0.14em] transition ${
                      active || pathname.startsWith("/services")
                        ? linkActive
                        : linkBase
                    }`}
                  >
                    {item.label}
                    <span className="text-[10px] opacity-70">+</span>
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {servicesOpen ? (
                    <div className="absolute left-0 top-full z-50 flex items-start pt-4">
                      <div className="w-44 border border-black/5 bg-white py-2 shadow-[0_24px_60px_rgba(0,0,0,0.12)]">
                        {productGroups.map((group) => {
                          const activeGroup = openGroup === group.id;
                          return (
                            <button
                              key={group.id}
                              type="button"
                              onMouseEnter={() => setOpenGroup(group.id)}
                              onClick={() => setOpenGroup(group.id)}
                              className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-[12px] font-semibold uppercase tracking-[0.14em] transition ${
                                activeGroup
                                  ? "bg-industrial-soft text-industrial-steel"
                                  : "text-industrial-ink hover:bg-industrial-soft hover:text-industrial-steel"
                              }`}
                            >
                              {group.label}
                              <ChevronRight className="h-3.5 w-3.5" />
                            </button>
                          );
                        })}
                      </div>
                      {openGroup ? (
                        <div className="ml-1 max-h-[min(70vh,420px)] w-72 overflow-y-auto border border-black/5 bg-white py-2 shadow-[0_24px_60px_rgba(0,0,0,0.12)]">
                          {productGroups
                            .filter((group) => group.id === openGroup)
                            .map((group) => (
                              <div key={group.id}>
                                <Link
                                  href={`/services?tab=${group.id}`}
                                  onClick={() => setServicesOpen(false)}
                                  className="block px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-industrial-steel hover:bg-industrial-soft"
                                >
                                  All {group.label}
                                </Link>
                                {group.items.map((product) => (
                                  <Link
                                    key={product.slug}
                                    href={`/products/${product.slug}`}
                                    onClick={() => setServicesOpen(false)}
                                    className="block px-4 py-2 text-[13.5px] leading-snug text-[#444] transition hover:bg-industrial-soft hover:text-industrial-steel"
                                  >
                                    {product.title}
                                  </Link>
                                ))}
                              </div>
                            ))}
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[12px] font-bold uppercase tracking-[0.14em] transition ${
                  active ? linkActive : linkBase
                }`}
              >
                {item.label}
                {item.label !== "Contact" ? (
                  <span className="ml-1 text-[10px] opacity-70">+</span>
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex shrink-0 items-center xl:hidden">
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => {
              setOpen((v) => !v);
              setMobileServicesOpen(false);
            }}
            className={`flex h-10 w-10 items-center justify-center transition ${
              solidNav
                ? "border border-[#e6e6e6] bg-industrial-soft text-industrial-ink hover:bg-industrial-panel"
                : "border border-white/25 bg-transparent text-white hover:bg-white/15"
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <>
          <button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute left-3 right-3 top-full z-50 mt-2 max-h-[min(70vh,480px)] overflow-y-auto border border-black/5 bg-white px-3 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.18)] sm:left-6 sm:right-6 sm:px-4 sm:py-4">
            <form action="/services" method="get" className="mb-3 md:hidden">
              <label className="flex items-center gap-2 border border-[#e6e6e6] px-3 py-2.5">
                <Search className="h-4 w-4 shrink-0 text-[#8a8a8a]" />
                <input
                  name="q"
                  type="search"
                  placeholder="Search products"
                  className="w-full bg-transparent text-sm text-industrial-ink outline-none placeholder:text-[#9a9a9a]"
                />
              </label>
            </form>
            <nav className="flex flex-col gap-0.5">
              {(navItems as readonly NavItem[]).map((item) => {
                if (item.children?.length) {
                  return (
                    <div key={item.label}>
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-[15px] font-semibold text-industrial-ink hover:bg-industrial-soft hover:text-industrial-steel"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 transition ${
                            mobileServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {mobileServicesOpen ? (
                        <div className="pb-2">
                          {productGroups.map((group) => {
                            const groupOpen = mobileGroup === group.id;
                            return (
                              <div key={group.id}>
                                <button
                                  type="button"
                                  onClick={() =>
                                    setMobileGroup(groupOpen ? null : group.id)
                                  }
                                  className="flex w-full items-center justify-between py-2.5 pr-3 pl-6 text-left text-[13px] font-semibold uppercase tracking-[0.12em] text-industrial-ink hover:text-industrial-steel"
                                >
                                  {group.label}
                                  <ChevronDown
                                    className={`h-4 w-4 transition ${
                                      groupOpen ? "rotate-180" : ""
                                    }`}
                                  />
                                </button>
                                {groupOpen ? (
                                  <div className="pb-2">
                                    <Link
                                      href={`/services?tab=${group.id}`}
                                      onClick={() => setOpen(false)}
                                      className="block py-2 pr-3 pl-9 text-[13px] text-industrial-steel"
                                    >
                                      All {group.label}
                                    </Link>
                                    {group.items.map((product) => (
                                      <Link
                                        key={product.slug}
                                        href={`/products/${product.slug}`}
                                        onClick={() => setOpen(false)}
                                        className="block py-2 pr-3 pl-9 text-sm text-[#555] hover:text-industrial-steel"
                                      >
                                        {product.title}
                                      </Link>
                                    ))}
                                  </div>
                                ) : null}
                              </div>
                            );
                          })}
                        </div>
                      ) : null}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-3 text-[15px] font-semibold text-industrial-ink hover:bg-industrial-soft hover:text-industrial-steel"
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="logo-grad mt-3 inline-flex w-full items-center justify-center px-6 py-3.5 text-sm font-semibold text-white"
              >
                Get Quote
              </Link>
            </nav>
          </div>
        </>
      ) : null}
    </header>
    {isHome ? null : (
      <div className="h-[calc(6rem*140/232+1rem)] sm:h-[calc(7rem*140/232+1rem)]" aria-hidden />
    )}
    </>
  );
}
