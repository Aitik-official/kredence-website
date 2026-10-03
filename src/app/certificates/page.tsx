import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import HeroPin from "@/components/HeroPin";
import CertificateGallery from "@/components/CertificateGallery";
import HomeContactCta from "@/components/HomeContactCta";

export const metadata: Metadata = {
  title: "Certificates & Accreditations",
  description:
    "Explore Kredence Steel Trading's official ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certifications accredited by IAF and EIAC.",
};

export default function CertificatesPage() {
  return (
    <>
      <HeroPin>
        <PageHero
          eyebrow="Accreditations & Compliance"
          title="Certificates & Accreditations"
          description="Internationally recognized quality, environmental, and occupational safety benchmarks accredited under IAF and EIAC frameworks."
          image="/certificates/certificates-hero.jpg"
          cta={{ label: "Request Compliance Dossier", href: "/contact?subject=Request%20Certificate%20Dossier" }}
          ctaSecondary={{ label: "View Products", href: "/services" }}
        />
      </HeroPin>
      <div className="relative z-10">
        <CertificateGallery />
        <HomeContactCta />
      </div>
    </>
  );
}
