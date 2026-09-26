import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import HeroPin from "@/components/HeroPin";
import HomeContact from "@/components/HomeContact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Kredence Steel Trading for fencing panels, hoardings, mesh fence, coils, sheets, and roofing metals.",
};

export default function ContactPage() {
  return (
    <>
      <HeroPin variant="compact">
        <PageHero
          eyebrow="Contact"
          title="Contact"
          image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1800&q=80"
          compact
        />
      </HeroPin>
      <Suspense>
        <HomeContact />
      </Suspense>
    </>
  );
}
