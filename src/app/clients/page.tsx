import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import HeroPin from "@/components/HeroPin";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Clients",
  description:
    "Fabricators, contractors, and manufacturers who buy metals and steel from Kredence Steel.",
};

export default function ClientsPage() {
  return (
    <>
      <HeroPin>
        <PageHero
          eyebrow="Partnerships"
          title="Buyers who trust Kredence"
          description="Contractors and project teams who source fencing systems and coated metals from Kredence Steel Trading."
          image="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1800&q=80"
          cta={{ label: "Get a Quote", href: "/contact" }}
          ctaSecondary={{ label: "View Products", href: "/services" }}
        />
      </HeroPin>
      <div className="relative z-10">
        <Clients showHeading />
        <Testimonials />
      </div>
    </>
  );
}
