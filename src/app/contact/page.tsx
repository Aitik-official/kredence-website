import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import HeroPin from "@/components/HeroPin";
import HomeContact from "@/components/HomeContact";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Kredence Steel | Steel Supplier in Dubai, UAE",
  },
  description:
    "Contact Kredence Steel for steel products, roofing sheets, fencing systems, and building materials in Dubai and across the UAE. Connect with our team for product inquiries, quotations, and supply requirements.",
  keywords: [
    "Contact Kredence Steel",
    "Steel Supplier Contact Dubai",
    "Steel Supplier UAE",
    "Building Materials Supplier Dubai",
    "Steel Products Inquiry UAE",
    "Steel Quotation Dubai",
    "Roofing Sheets Supplier UAE",
    "Fencing Materials Supplier Dubai",
    "Construction Materials Supplier UAE",
    "Steel Trading Company Dubai Contact",
    "Industrial Steel Supplier UAE",
    "Building Materials Inquiry Dubai",
    "Kredence Steel Contact Details",
  ],
  alternates: {
    canonical: "https://www.kredencesteel.com/contact",
  },
  openGraph: {
    title: "Contact Kredence Steel | Steel Supplier in Dubai, UAE",
    description:
      "Contact Kredence Steel for steel products, roofing sheets, fencing systems, and building materials in Dubai and across the UAE. Connect with our team for product inquiries, quotations, and supply requirements.",
    url: "https://www.kredencesteel.com/contact",
    type: "website",
  },
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
