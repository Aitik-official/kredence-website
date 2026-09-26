import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/admin-auth";
import { createBlog, getBlogs } from "@/lib/blogs";

export const dynamic = "force-dynamic";

export async function GET() {
  const posts = await getBlogs();
  return NextResponse.json({ ok: true, posts });
}

export async function POST(request: Request) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ ok: false, error: "Sign in required." }, { status: 401 });
  }

  const body = (await request.json()) as {
    title?: string;
    date?: string;
    excerpt?: string;
    body?: string;
    image?: string;
  };

  const title = body.title?.trim() ?? "";
  const date = body.date?.trim() ?? "";
  const excerpt = body.excerpt?.trim() ?? "";
  const text = body.body?.trim() ?? "";
  const image = body.image?.trim() ?? "";

  if (!title || !date || !excerpt || !text || !image) {
    return NextResponse.json(
      { ok: false, error: "Title, date, excerpt, article, and image are required." },
      { status: 400 },
    );
  }

  const post = await createBlog({ title, date, excerpt, body: text, image });
  return NextResponse.json({ ok: true, post });
}
