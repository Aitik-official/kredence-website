import { randomUUID } from "crypto";
import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string;
  image: string;
};

const filePath = path.join(process.cwd(), "data", "blogs.json");

export async function getBlogs(): Promise<BlogPost[]> {
  const raw = await readFile(filePath, "utf8");
  const posts = JSON.parse(raw) as BlogPost[];
  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getBlog(slug: string): Promise<BlogPost | undefined> {
  const posts = await getBlogs();
  return posts.find((post) => post.slug === slug);
}

export function slugify(title: string) {
  const base = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 80);
  return base || "post";
}

async function saveAll(posts: BlogPost[]) {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, JSON.stringify(posts, null, 2));
}

export async function createBlog(
  input: Omit<BlogPost, "id" | "slug"> & { slug?: string },
) {
  const posts = await getBlogs();
  let slug = slugify(input.slug || input.title);
  const taken = new Set(posts.map((post) => post.slug));
  const root = slug;
  let n = 2;
  while (taken.has(slug)) {
    slug = `${root}-${n}`;
    n += 1;
  }
  const post: BlogPost = {
    id: randomUUID(),
    slug,
    title: input.title.trim(),
    date: input.date,
    excerpt: input.excerpt.trim(),
    body: input.body.trim(),
    image: input.image,
  };
  await saveAll([post, ...posts]);
  return post;
}

export async function updateBlog(slug: string, input: Omit<BlogPost, "id" | "slug">) {
  const posts = await getBlogs();
  const index = posts.findIndex((post) => post.slug === slug);
  if (index < 0) return null;
  const current = posts[index];
  const next: BlogPost = {
    ...current,
    title: input.title.trim(),
    date: input.date,
    excerpt: input.excerpt.trim(),
    body: input.body.trim(),
    image: input.image,
  };
  posts[index] = next;
  await saveAll(posts);
  return next;
}

export async function deleteBlog(slug: string) {
  const posts = await getBlogs();
  const next = posts.filter((post) => post.slug !== slug);
  if (next.length === posts.length) return false;
  await saveAll(next);
  return true;
}
