import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import HeroPin from "@/components/HeroPin";
import AboutPageContent from "@/components/AboutPage";

export const metadata: Metadata = {
  title: {
    absolute: "Building Materials Supplier UAE | Aluminium coil supplier",
  },
  description:
    "Kredence Steel is a trusted building materials supplier in the UAE, offering quality steel products, aluminium coils, roofing materials, and solutions for construction and industrial projects.",
  keywords: [
    "Building Materials Supplier UAE",
    "Aluminium Coil Supplier UAE",
    "Building Materials Trading Dubai",
    "Steel Supplier UAE",
    "Aluminium Coil Supplier Dubai",
    "Construction Materials Supplier UAE",
    "Industrial Building Materials UAE",
    "Steel Trading Company Dubai",
    "Roofing Materials Supplier UAE",
    "GI Coil Supplier UAE",
    "PPGI Coil Supplier UAE",
    "Metal Products Supplier Dubai",
    "Building Materials Company Dubai",
    "Kredence Steel",
  ],
  alternates: {
    canonical: "https://www.kredencesteel.com/about",
  },
  openGraph: {
    title: "Building Materials Supplier UAE | Aluminium coil supplier",
    description:
      "Kredence Steel is a trusted building materials supplier in the UAE, offering quality steel products, aluminium coils, roofing materials, and solutions for construction and industrial projects.",
    url: "https://www.kredencesteel.com/about",
    type: "website",
  },
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
