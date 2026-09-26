import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import HeroPin from "@/components/HeroPin";
import { getBlog, getBlogs } from "@/lib/blogs";

export const dynamic = "force-dynamic";

type PageProps = { params: Promise<{ slug: string }> };

function formatDate(value: string) {
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlog(slug);
  if (!post) return { title: "Blog" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlog(slug);
  if (!post) notFound();

  const others = (await getBlogs()).filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <article>
      <HeroPin variant="story">
      <div className="relative min-h-[320px] bg-industrial-dark sm:min-h-[420px]">
        <Image src={post.image} alt={post.title} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative mx-auto flex min-h-[320px] max-w-3xl flex-col justify-end px-5 py-12 sm:min-h-[420px] sm:px-8">
          <Link
            href="/blogs"
            className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-white/70 hover:text-white"
          >
            Blogs
          </Link>
          <p className="text-[12px] uppercase tracking-[0.16em] text-white/70">{formatDate(post.date)}</p>
          <h1 className="font-display mt-3 text-3xl font-medium uppercase leading-[1.05] text-white sm:text-5xl">
            {post.title}
          </h1>
        </div>
      </div>
      </HeroPin>

      <div className="relative z-10 bg-white">
      <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <p className="text-lg leading-relaxed text-industrial-ink">{post.excerpt}</p>
        <div className="mt-8 space-y-5 text-[15px] leading-[1.85] whitespace-pre-line text-[#444]">
          {post.body}
        </div>

        {others.length > 0 ? (
          <div className="mt-14 border-t border-[#e6e6e6] pt-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-industrial-steel">
              More posts
            </p>
            <ul className="mt-4 space-y-3">
              {others.map((item) => (
                <li key={item.id}>
                  <Link href={`/blogs/${item.slug}`} className="text-[15px] text-industrial-ink hover:text-industrial-steel">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
      </div>
    </article>
  );
}
