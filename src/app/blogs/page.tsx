import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import HeroPin from "@/components/HeroPin";
import { getBlogs } from "@/lib/blogs";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Notes from Kredence Steel Trading on fencing systems, coated metals, coils, sheets, and site supply.",
};

function formatDate(value: string) {
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogsPage() {
  const posts = await getBlogs();

  return (
    <>
      <HeroPin variant="compact">
        <PageHero
          eyebrow="Blogs"
          title="Blogs"
          image={
            posts[0]?.image ??
            "https://images.unsplash.com/photo-1456327102063-fb5054efe647?auto=format&fit=crop&w=1800&q=80"
          }
          compact
        />
      </HeroPin>
      <section className="relative z-10 bg-industrial-mist py-10 shadow-[0_-28px_50px_rgba(23,50,61,0.12)] sm:py-14 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 xl:max-w-7xl">
          {posts.length === 0 ? (
            <p className="text-[15px] text-[#666]">No posts yet.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blogs/${post.slug}`}
                  className="group flex flex-col overflow-hidden border border-industrial-line bg-white shadow-[0_12px_32px_rgba(23,50,61,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(23,50,61,0.12)]"
                >
                  <div className="relative aspect-[16/10] bg-industrial-dark">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      quality={90}
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-industrial-steel">
                      {formatDate(post.date)}
                    </p>
                    <h2 className="font-display mt-3 text-xl font-medium uppercase leading-snug tracking-[0.03em] text-industrial-ink sm:text-2xl">
                      {post.title}
                    </h2>
                    <p className="mt-3 flex-1 text-[14px] leading-relaxed text-[#5c5c5c]">
                      {post.excerpt}
                    </p>
                    <span className="logo-grad mt-6 inline-flex w-fit items-center gap-2 px-4 py-2.5 text-[13px] font-medium text-white">
                      Continue reading
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
