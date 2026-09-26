import type { Metadata } from "next";
import BlogDashboard from "@/components/BlogDashboard";

export const metadata: Metadata = {
  title: "Blog dashboard",
  robots: { index: false, follow: false },
};

export default function DashboardPage() {
  return <BlogDashboard />;
}
