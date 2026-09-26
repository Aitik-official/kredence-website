import type { Metadata } from "next";
import {
  Poppins,
  Playfair_Display,
  Oswald,
  Michroma,
} from "next/font/google";
import { site } from "@/data/site";
import SiteShell from "@/components/SiteShell";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

/** Matches the geometric extended “eratic” wordmark in the logo */
const michroma = Michroma({
  variable: "--font-michroma",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  icons: {
    icon: [{ url: "/logo/kredence_logo-removebg-preview.png", type: "image/png" }],
    apple: [{ url: "/logo/kredence_logo-removebg-preview.png", type: "image/png" }],
    shortcut: "/logo/kredence_logo-removebg-preview.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${playfair.variable} ${oswald.variable} ${michroma.variable} h-full`}
    >
      <body className="flex min-h-full flex-col font-sans antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
