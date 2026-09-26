import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductBack from "@/components/ProductBack";
import ProductGallery from "@/components/ProductGallery";
import SectionButton from "@/components/SectionButton";
import { productDetails } from "@/data/product-details";
import { productGroups } from "@/data/site";

type PageProps = { params: Promise<{ slug: string }> };

function findProduct(slug: string) {
  for (const group of productGroups) {
    const item = group.items.find((entry) => entry.slug === slug);
    if (item) return { item, group };
  }
  return null;
}

function splitSpec(spec: string) {
  const splitAt = spec.indexOf(":");
  if (splitAt === -1) return { label: spec, value: "" };
  return { label: spec.slice(0, splitAt).trim(), value: spec.slice(splitAt + 1).trim() };
}

export function generateStaticParams() {
  return productGroups.flatMap((group) =>
    group.items.map((item) => ({ slug: item.slug })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const found = findProduct(slug);
  if (!found) return { title: "Product" };
  return { title: found.item.title, description: found.item.description };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const found = findProduct(slug);
  if (!found) notFound();

  const { item, group } = found;
  const detail = productDetails[item.slug];
  const images = detail?.images?.length ? detail.images : [item.image];
  const specs = (detail?.specs ?? []).map(splitSpec);
  const related = group.items.filter((entry) => entry.slug !== item.slug).slice(0, 3);

  return (
    <article className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="mb-4 flex items-center gap-3">
              <ProductBack fallback={`/services?tab=${group.id}`} />
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#8a8a8a]">
                <Link href="/services" className="transition hover:text-industrial-steel">
                  Products
                </Link>
                <span className="mx-2 text-[#ccc]">/</span>
                <Link
                  href={`/services?tab=${group.id}`}
                  className="transition hover:text-industrial-steel"
                >
                  {group.label}
                </Link>
                <span className="mx-2 text-[#ccc]">/</span>
                <span className="text-industrial-ink">{item.title}</span>
              </p>
            </div>
            <ProductGallery images={images} title={item.title} />
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-industrial-steel">
              {group.label}
            </p>
            <h1 className="font-display mt-3 text-[1.85rem] font-medium uppercase leading-[1.05] tracking-[0.02em] text-industrial-ink sm:text-[2.45rem]">
              {item.title}
            </h1>
            <p className="mt-5 border-l-2 border-industrial-steel pl-4 text-[15px] leading-relaxed text-industrial-ink">
              {item.description}
            </p>
            <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
              {detail?.body ?? item.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <SectionButton
                href={`/contact?subject=${encodeURIComponent(`Enquiry for ${item.title}`)}`}
              >
                Get a quote
              </SectionButton>
              <Link
                href={`/services?tab=${group.id}`}
                className="text-[13px] font-medium text-industrial-ink underline-offset-4 hover:text-industrial-steel hover:underline"
              >
                All {group.label}
              </Link>
            </div>
          </div>
        </div>

        {specs.length > 0 ? (
          <section className="mt-16 border-t border-[#e6e6e6] pt-10">
            <div className="mb-8 flex items-end justify-between gap-6">
              <h2 className="font-display text-2xl font-medium uppercase tracking-[0.04em] text-industrial-ink">
                Specifications
              </h2>
              <p className="hidden text-[11px] font-medium uppercase tracking-[0.2em] text-[#9a9a9a] sm:block">
                {String(specs.length).padStart(2, "0")} listed
              </p>
            </div>
            <dl className="border-t border-[#e6e6e6]">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="grid gap-1 border-b border-[#e6e6e6] py-4 sm:grid-cols-[14rem_1fr] sm:items-baseline sm:gap-8"
                >
                  <dt className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#8a8a8a]">
                    {spec.label}
                  </dt>
                  <dd className="text-[15px] leading-relaxed text-industrial-ink">
                    {spec.value || spec.label}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}

        {related.length > 0 ? (
          <section className="mt-16 border-t border-[#e6e6e6] pt-10">
            <h2 className="font-display text-2xl font-medium uppercase tracking-[0.04em] text-industrial-ink">
              More in {group.label}
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {related.map((entry) => (
                <Link
                  key={entry.slug}
                  href={`/products/${entry.slug}`}
                  className="card-lift flex flex-col overflow-hidden border border-[#ececec] bg-white shadow-[0_10px_24px_rgba(23,50,61,0.05)] hover:border-industrial-steel hover:shadow-[0_18px_36px_rgba(23,50,61,0.12)]"
                >
                  <div className="relative aspect-[4/3] bg-industrial-soft">
                    <Image
                      src={entry.image}
                      alt={entry.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 100vw, 30vw"
                    />
                  </div>
                  <span className="block border-t border-[#ececec] px-4 py-4 font-display text-[14px] font-medium uppercase leading-snug tracking-[0.03em] text-industrial-ink">
                    {entry.title}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </article>
  );
}
