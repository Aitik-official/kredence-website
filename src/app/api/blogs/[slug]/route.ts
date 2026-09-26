import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/admin-auth";
import { deleteBlog, getBlog, updateBlog } from "@/lib/blogs";

export const dynamic = "force-dynamic";

type Context = { params: Promise<{ slug: string }> };

export async function GET(_request: Request, context: Context) {
  const { slug } = await context.params;
  const post = await getBlog(slug);
  if (!post) {
    return NextResponse.json({ ok: false, error: "Post not found." }, { status: 404 });
  }
  return NextResponse.json({ ok: true, post });
}

export async function PUT(request: Request, context: Context) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ ok: false, error: "Sign in required." }, { status: 401 });
  }

  const { slug } = await context.params;
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

  const post = await updateBlog(slug, { title, date, excerpt, body: text, image });
  if (!post) {
    return NextResponse.json({ ok: false, error: "Post not found." }, { status: 404 });
  }
  return NextResponse.json({ ok: true, post });
}

export async function DELETE(request: Request, context: Context) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ ok: false, error: "Sign in required." }, { status: 401 });
  }

  const { slug } = await context.params;
  const removed = await deleteBlog(slug);
  if (!removed) {
    return NextResponse.json({ ok: false, error: "Post not found." }, { status: 404 });
  }
  return NextResponse.json({ ok: true });
}
