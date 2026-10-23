import type { Metadata } from "next";
import { Suspense } from "react";
import ProductCatalog from "@/components/ProductCatalog";

export const metadata: Metadata = {
  title: "Fencing Panels and Hoardings Supplier in Dubai, UAE",
  description:
    "Leading fencing panels and hoardings supplier in Dubai offering durable, high-quality solutions for construction sites, industrial and commercial projects.",
  keywords: [
    "Fencing Suppliers in Dubai,UAE",
    "About Fence Trades in Oman",
    "Fencing Panels and Hoardings Supplier in Dubai",
    "Pvc eco fence supplier in Dubai",
    "Heras Fence contractor in Dubai",
    "Chain link fence supplier in UAE",
    "GI Mill Finish Coils supplier in Dubai",
    "PPGI Color Coated Coils Supplier in Dubai",
    "Insulated Sandwich Panels Supplier in Dubai",
    "Corrugated Color Sheets suppliers in Dubai",
    "Decking Sheets suppliers in Dubai",
    "Z and C Purlins Supplier in Dubai",
    "Roofing Flashings and Gutters supplier in Dubai",
    "GRP Translucent Sheets Skylights supplier in Dubai",
    "Contact us for fence supplier",
  ],
  alternates: {
    canonical: "https://www.kredencesteel.com/services",
  },
  openGraph: {
    title: "Fencing Panels and Hoardings Supplier in Dubai, UAE",
    description:
      "Leading fencing panels and hoardings supplier in Dubai offering durable, high-quality solutions for construction sites, industrial and commercial projects.",
    url: "https://www.kredencesteel.com/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Suspense
        fallback={
          <div className="px-4 py-20 text-center text-sm text-[#666]">
            Loading products…
          </div>
        }
      >
        <ProductCatalog />
      </Suspense>
    </>
  );
}
