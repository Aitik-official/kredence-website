import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowRight, Download, FileText } from "lucide-react";
import HeroPin from "@/components/HeroPin";
import BlogRenderer from "@/components/BlogRenderer";
import { getBlog, getBlogs } from "@/lib/blogs";
import { site } from "@/data/site";

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

  const canonicalPath = `/blogs/${post.slug}`;
  const imageUrl = post.image.startsWith("http")
    ? post.image
    : `https://kredencesteel.com${post.image}`;

  return {
    title: `${post.title} | ${site.name}`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonicalPath,
      siteName: site.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
      publishedTime: post.date,
      authors: [site.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlog(slug);
  if (!post) notFound();

  // If accessed via an old alias or legacy slug, 301 redirect to the primary SEO URL
  if (post.slug !== slug) {
    redirect(`/blogs/${post.slug}`);
  }

  const others = (await getBlogs()).filter((item) => item.slug !== post.slug).slice(0, 3);

  // Google Rich Snippet Structured Data (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image.startsWith("http") ? post.image : `https://kredencesteel.com${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: site.name,
      url: "https://kredencesteel.com",
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: `https://kredencesteel.com${site.logo}`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://kredencesteel.com/blogs/${post.slug}`,
    },
    keywords: post.keywords?.join(", "),
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroPin variant="story">
        <div className="relative min-h-[320px] bg-industrial-dark sm:min-h-[420px]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative mx-auto flex min-h-[300px] max-w-4xl flex-col justify-end px-4 py-10 sm:min-h-[420px] sm:px-6 sm:py-12 lg:px-8">
            <Link
              href="/blogs"
              className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-white/70 hover:text-white sm:mb-4"
            >
              ← Back to Blogs
            </Link>
            <p className="text-[12px] uppercase tracking-[0.16em] text-white/70">
              {formatDate(post.date)}
            </p>
            <h1 className="font-display mt-2.5 text-2xl font-medium uppercase leading-[1.08] text-white sm:mt-3 sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
          </div>
        </div>
      </HeroPin>

      <div className="relative z-10 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="border-l-4 border-industrial-steel bg-industrial-mist/60 p-4 sm:p-5">
            <p className="text-base font-medium leading-relaxed text-industrial-ink sm:text-lg">
              {post.excerpt}
            </p>
          </div>

          <div className="mt-8 sm:mt-10">
            <BlogRenderer content={post.body} />
          </div>

          {/* Quick CTA Box for Project Inquiries */}
          <div className="mt-12 rounded-xs border border-industrial-line bg-industrial-panel p-6 sm:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-industrial-steel">
                  Procurement & Supply
                </p>
                <h3 className="mt-1 font-display text-lg font-bold uppercase tracking-wide text-industrial-ink sm:text-xl">
                  Require Project Estimates or Technical Specs?
                </h3>
                <p className="mt-1.5 max-w-xl text-[14px] leading-relaxed text-[#666]">
                  Connect with Kredence Steel Trading for certified material supply, mill test
                  certificates, and fast delivery across Dubai, Sharjah, and the UAE.
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5 sm:shrink-0">
                <Link
                  href="/contact"
                  className="logo-grad inline-flex items-center gap-2 px-5 py-3 text-[13px] font-semibold tracking-wide text-white shadow-xs transition hover:brightness-110"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={site.brochure}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Kredence_Brochure.pdf"
                  className="inline-flex items-center gap-2 border border-industrial-steel/30 bg-white px-4 py-3 text-[13px] font-semibold tracking-wide text-industrial-ink transition hover:border-industrial-steel hover:text-industrial-steel"
                >
                  <FileText className="h-4 w-4 text-industrial-steel" />
                  <span>Brochure</span>
                  <Download className="h-3.5 w-3.5 opacity-80" />
                </a>
              </div>
            </div>
          </div>

          {others.length > 0 ? (
            <div className="mt-14 border-t border-[#e6e6e6] pt-8">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-industrial-steel">
                More Articles & Guides
              </p>
              <ul className="mt-4 space-y-3">
                {others.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`/blogs/${item.slug}`}
                      className="group flex items-center justify-between py-1 text-[15px] font-medium text-industrial-ink transition hover:text-industrial-steel"
                    >
                      <span>{item.title}</span>
                      <ArrowRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
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
