"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";

type BlogPost = {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string;
  image: string;
};

const empty = {
  title: "",
  date: new Date().toISOString().slice(0, 10),
  excerpt: "",
  body: "",
  image: "",
};

export default function BlogDashboard() {
  const [ready, setReady] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [form, setForm] = useState(empty);
  const [editing, setEditing] = useState<string | null>(null);
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  async function loadPosts() {
    const response = await fetch("/api/blogs", { cache: "no-store" });
    const result = (await response.json()) as { posts?: BlogPost[] };
    setPosts(result.posts ?? []);
  }

  useEffect(() => {
    fetch("/api/admin/session")
      .then((response) => response.json())
      .then(async (result: { ok?: boolean }) => {
        setAuthed(Boolean(result.ok));
        if (result.ok) await loadPosts();
        setReady(true);
      })
      .catch(() => setReady(true));
  }, []);

  async function signIn(event: FormEvent) {
    event.preventDefault();
    setLoginError("");
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    const result = (await response.json()) as { ok?: boolean; error?: string };
    if (!response.ok || !result.ok) {
      setLoginError(result.error || "Could not sign in.");
      return;
    }
    setAuthed(true);
    setPassword("");
    await loadPosts();
  }

  async function signOut() {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthed(false);
    setPosts([]);
  }

  async function onImage(file: File | null) {
    if (!file) return;
    setBusy(true);
    setStatus("");
    const data = new FormData();
    data.set("image", file);
    const response = await fetch("/api/blogs/upload", { method: "POST", body: data });
    const result = (await response.json()) as { ok?: boolean; image?: string; error?: string };
    setBusy(false);
    if (!response.ok || !result.image) {
      setStatus(result.error || "Could not upload the image.");
      return;
    }
    setForm((current) => ({ ...current, image: result.image ?? "" }));
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setStatus("");
    const response = await fetch(editing ? `/api/blogs/${editing}` : "/api/blogs", {
      method: editing ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const result = (await response.json()) as { ok?: boolean; error?: string };
    setBusy(false);
    if (!response.ok || !result.ok) {
      setStatus(result.error || "Could not save the post.");
      return;
    }
    setForm({ ...empty, date: new Date().toISOString().slice(0, 10) });
    setEditing(null);
    setStatus(editing ? "Post updated." : "Post published.");
    await loadPosts();
  }

  function startEdit(post: BlogPost) {
    setEditing(post.slug);
    setForm({
      title: post.title,
      date: post.date,
      excerpt: post.excerpt,
      body: post.body,
      image: post.image,
    });
    setStatus("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function remove(post: BlogPost) {
    if (!window.confirm(`Delete “${post.title}”?`)) return;
    const response = await fetch(`/api/blogs/${post.slug}`, { method: "DELETE" });
    if (!response.ok) {
      setStatus("Could not delete that post.");
      return;
    }
    if (editing === post.slug) {
      setEditing(null);
      setForm({ ...empty, date: new Date().toISOString().slice(0, 10) });
    }
    await loadPosts();
  }

  const field =
    "w-full border border-[#e6e6e6] bg-white px-3 py-2.5 text-sm text-industrial-ink outline-none focus:border-industrial-ink";

  if (!ready) {
    return <p className="px-5 py-16 text-sm text-[#666]">Loading dashboard…</p>;
  }

  if (!authed) {
    return (
      <section className="bg-industrial-soft py-16">
        <form onSubmit={signIn} className="mx-auto max-w-md bg-white px-6 py-8">
          <h1 className="font-display text-2xl font-medium uppercase tracking-[0.04em] text-industrial-ink">
            Blog dashboard
          </h1>
          <p className="mt-2 text-sm text-[#666]">Sign in to publish and manage posts.</p>
          <label className="mt-6 block text-[11px] font-medium uppercase tracking-[0.16em] text-[#8a8a8a]">
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className={`${field} mt-2`}
              required
            />
          </label>
          {loginError ? <p className="mt-3 text-sm text-industrial-steel">{loginError}</p> : null}
          <button
            type="submit"
            className="logo-grad mt-5 px-5 py-3 text-[13px] font-medium text-white"
          >
            Sign in
          </button>
        </form>
      </section>
    );
  }

  return (
    <section className="bg-industrial-soft py-12 sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <form onSubmit={onSubmit} className="bg-white p-6">
          <div className="flex items-start justify-between gap-4">
            <h1 className="font-display text-2xl font-medium uppercase tracking-[0.04em] text-industrial-ink">
              {editing ? "Edit post" : "New post"}
            </h1>
            <button type="button" onClick={signOut} className="text-[13px] text-[#666] hover:text-industrial-steel">
              Sign out
            </button>
          </div>

          <label className="mt-5 block text-[11px] font-medium uppercase tracking-[0.16em] text-[#8a8a8a]">
            Title
            <input
              value={form.title}
              onChange={(event) => setForm({ ...form, title: event.target.value })}
              className={`${field} mt-2`}
              required
            />
          </label>
          <label className="mt-4 block text-[11px] font-medium uppercase tracking-[0.16em] text-[#8a8a8a]">
            Date
            <input
              type="date"
              value={form.date}
              onChange={(event) => setForm({ ...form, date: event.target.value })}
              className={`${field} mt-2`}
              required
            />
          </label>
          <label className="mt-4 block text-[11px] font-medium uppercase tracking-[0.16em] text-[#8a8a8a]">
            Excerpt
            <textarea
              value={form.excerpt}
              onChange={(event) => setForm({ ...form, excerpt: event.target.value })}
              className={`${field} mt-2 min-h-20`}
              required
            />
          </label>
          <label className="mt-4 block text-[11px] font-medium uppercase tracking-[0.16em] text-[#8a8a8a]">
            Article
            <textarea
              value={form.body}
              onChange={(event) => setForm({ ...form, body: event.target.value })}
              className={`${field} mt-2 min-h-40`}
              required
            />
          </label>
          <label className="mt-4 block text-[11px] font-medium uppercase tracking-[0.16em] text-[#8a8a8a]">
            Image
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={(event) => onImage(event.target.files?.[0] ?? null)}
              className="mt-2 block w-full text-sm"
            />
          </label>
          {form.image ? (
            <p className="mt-2 truncate text-xs text-[#666]">{form.image}</p>
          ) : null}

          {status ? <p className="mt-4 text-sm text-industrial-ink">{status}</p> : null}

          <div className="mt-5 flex gap-3">
            <button
              type="submit"
              disabled={busy}
              className="logo-grad px-5 py-3 text-[13px] font-medium text-white disabled:opacity-60"
            >
              {busy ? "Saving…" : editing ? "Update post" : "Publish post"}
            </button>
            {editing ? (
              <button
                type="button"
                onClick={() => {
                  setEditing(null);
                  setForm({ ...empty, date: new Date().toISOString().slice(0, 10) });
                }}
                className="border border-[#ddd] px-5 py-3 text-[13px] text-industrial-ink"
              >
                Cancel
              </button>
            ) : null}
          </div>
        </form>

        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-display text-xl font-medium uppercase tracking-[0.04em] text-industrial-ink">
              Posts
            </h2>
            <Link href="/blogs" className="text-[13px] text-industrial-ink hover:text-industrial-steel">
              View blogs
            </Link>
          </div>
          <ul className="space-y-3">
            {posts.map((post) => (
              <li key={post.id} className="bg-white px-4 py-4">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#8a8a8a]">{post.date}</p>
                <p className="mt-1 font-medium text-industrial-ink">{post.title}</p>
                <div className="mt-3 flex gap-4 text-[13px]">
                  <button type="button" onClick={() => startEdit(post)} className="hover:text-industrial-steel">
                    Edit
                  </button>
                  <button type="button" onClick={() => remove(post)} className="text-industrial-steel">
                    Delete
                  </button>
                  <Link href={`/blogs/${post.slug}`} className="text-[#666] hover:text-industrial-ink">
                    Open
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
