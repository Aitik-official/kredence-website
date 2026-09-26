import { createHmac, timingSafeEqual } from "crypto";

const COOKIE = "kredence_blog_admin";
const SECRET = process.env.BLOG_DASHBOARD_SECRET || "kredence-blog-dashboard";

export const DASHBOARD_PASSWORD =
  process.env.BLOG_DASHBOARD_PASSWORD || "kredence-steel";

export function adminCookieName() {
  return COOKIE;
}

export function signAdminToken() {
  const exp = Date.now() + 1000 * 60 * 60 * 24 * 7;
  const payload = String(exp);
  const sig = createHmac("sha256", SECRET).update(payload).digest("hex");
  return `${payload}.${sig}`;
}

export function verifyAdminToken(token: string | undefined) {
  if (!token) return false;
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return false;
  const expected = createHmac("sha256", SECRET).update(payload).digest("hex");
  const left = Buffer.from(sig);
  const right = Buffer.from(expected);
  if (left.length !== right.length || !timingSafeEqual(left, right)) return false;
  return Number(payload) > Date.now();
}

export function isAdminRequest(request: Request) {
  const header = request.headers.get("cookie") ?? "";
  const pair = header
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${COOKIE}=`));
  if (!pair) return false;
  const token = decodeURIComponent(pair.slice(COOKIE.length + 1));
  return verifyAdminToken(token);
}
