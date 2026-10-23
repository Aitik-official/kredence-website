import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import HeroPin from "@/components/HeroPin";
import CertificateGallery from "@/components/CertificateGallery";
import HomeContactCta from "@/components/HomeContactCta";

export const metadata: Metadata = {
  title: {
    absolute: "Steel Supplier Certifications UAE | Kredence Steel",
  },
  description:
    "Explore Kredence Steel's certifications and quality standards, including ISO management systems and material compliance documentation, supporting reliable steel and building material supply across the UAE.",
  keywords: [
    "Kredence Steel Certifications",
    "Steel Supplier Certifications UAE",
    "ISO Certified Steel Supplier UAE",
    "ISO 9001:2015 Certification",
    "ISO 14001:2015 Certification",
    "ISO 45001:2018 Certification",
    "Steel Quality Certificates Dubai",
    "Steel Material Test Certificates UAE",
    "MTC Steel Supplier Dubai",
    "Building Materials Quality Standards UAE",
    "Steel Compliance Documentation UAE",
    "Certified Steel Trading Company Dubai",
    "Steel Supplier Quality Standards UAE",
  ],
  alternates: {
    canonical: "https://www.kredencesteel.com/certificates",
  },
  openGraph: {
    title: "Steel Supplier Certifications UAE | Kredence Steel",
    description:
      "Explore Kredence Steel's certifications and quality standards, including ISO management systems and material compliance documentation, supporting reliable steel and building material supply across the UAE.",
    url: "https://www.kredencesteel.com/certificates",
    type: "website",
  },
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
