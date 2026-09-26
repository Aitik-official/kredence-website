import type { Metadata } from "next";
import { Suspense } from "react";
import ProductCatalog from "@/components/ProductCatalog";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Kredence Steel Trading — fencing panels, hoardings, mesh fence, and coated metal products including coils, sheets, purlins, and roofing.",
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
