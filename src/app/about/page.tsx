import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import HeroPin from "@/components/HeroPin";
import AboutPageContent from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kredence Steel Trading supplies fencing systems and coated metal products for construction and industrial projects.",
};

export default function AboutPage() {
  return (
    <>
      <HeroPin variant="compact">
        <PageHero
          eyebrow="About"
          title="About"
          image="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1800&q=80"
          compact
        />
      </HeroPin>
      <div className="relative z-10">
        <AboutPageContent />
      </div>
    </>
  );
}
