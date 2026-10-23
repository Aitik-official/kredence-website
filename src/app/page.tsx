import type { Metadata } from "next";
import Hero from "@/components/Hero";
import HeroPin from "@/components/HeroPin";
import About from "@/components/About";
import Services from "@/components/Services";
import ExportMarkets from "@/components/ExportMarkets";
import ClientReviews from "@/components/ClientReviews";
import HomeContactCta from "@/components/HomeContactCta";

export const metadata: Metadata = {
  title: {
    absolute: "Fencing Suppliers in Dubai | Fencing Panels Supplier UAE",
  },
  description:
    "Looking for fencing suppliers in Dubai? Kredence Steel offers quality fencing panels and fencing solutions across the UAE for commercial, industrial, and residential projects.",
  keywords: [
    "Fencing Suppliers in Dubai",
    "Fencing Panels Supplier UAE",
    "Fencing Company Dubai",
    "Fence Suppliers UAE",
    "Steel Fencing Dubai",
    "Metal Fencing Panels UAE",
    "Industrial Fencing Dubai",
    "Security Fencing UAE",
    "Commercial Fencing Supplier Dubai",
    "Residential Fencing UAE",
    "Fencing Materials Supplier Dubai",
    "Steel Fence Panels UAE",
    "Fence Installation Materials Dubai",
    "Boundary Fencing UAE",
    "Kredence Steel",
  ],
  alternates: {
    canonical: "https://www.kredencesteel.com/",
  },
  openGraph: {
    title: "Fencing Suppliers in Dubai | Fencing Panels Supplier UAE",
    description:
      "Looking for fencing suppliers in Dubai? Kredence Steel offers quality fencing panels and fencing solutions across the UAE for commercial, industrial, and residential projects.",
    url: "https://www.kredencesteel.com/",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroPin variant="home">
        <Hero />
      </HeroPin>
      <div className="relative z-10">
        <About fit />
        <Services />
        <ExportMarkets fit />
        <HomeContactCta />
        <ClientReviews fit />
      </div>
    </>
  );
}
