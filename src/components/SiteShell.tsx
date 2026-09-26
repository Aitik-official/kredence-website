import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingPhone from "./FloatingPhone";

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex min-w-0 flex-1 flex-col overflow-x-clip">{children}</main>
      <Footer />
      <FloatingPhone />
    </>
  );
}
