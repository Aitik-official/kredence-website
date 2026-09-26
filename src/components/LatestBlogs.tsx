import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BrandMark from "./BrandMark";
import Reveal from "./Reveal";
import { blogs } from "@/data/site";

export default function LatestBlogs() {
  const [featured, ...rest] = blogs.items;

  return (
    <section id="blogs" className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-12 sm:mb-14">
          <p className="mb-4 inline-flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.28em] text-industrial-steel">
            <BrandMark className="h-3.5 w-3.5" color="currentColor" />
            {blogs.eyebrow}
          </p>
          <h2 className="font-display text-[1.85rem] font-medium uppercase leading-[1.08] tracking-[0.02em] text-industrial-ink sm:text-[2.6rem]">
            {blogs.title}
          </h2>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal as="article" className="group">
            <div className="relative mb-6 aspect-[16/9] overflow-hidden bg-industrial-dark">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
            <p className="text-[12px] uppercase tracking-[0.16em] text-[#8a8a8a]">
              {featured.date}
            </p>
            <h3 className="font-display mt-3 text-[1.35rem] font-medium uppercase leading-snug tracking-[0.02em] text-industrial-ink sm:text-[1.6rem]">
              {featured.title}
            </h3>
            <Link
              href={featured.href}
              className="mt-5 inline-flex items-center gap-2 text-[13px] font-medium text-industrial-ink transition hover:text-industrial-steel"
            >
              Continue Reading
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="flex flex-col justify-center border-t border-[#e6e6e6] lg:border-t-0">
            {rest.map((post) => (
              <article key={post.title} className="border-b border-[#e6e6e6] py-7">
                <p className="text-[12px] uppercase tracking-[0.16em] text-[#8a8a8a]">
                  {post.date}
                </p>
                <h3 className="font-display mt-3 text-[1.05rem] font-medium uppercase leading-snug tracking-[0.03em] text-industrial-ink">
                  {post.title}
                </h3>
                <Link
                  href={post.href}
                  className="mt-4 inline-flex items-center gap-2 text-[13px] font-medium text-industrial-ink transition hover:text-industrial-steel"
                >
                  Continue Reading
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
