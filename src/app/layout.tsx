import type { Metadata } from "next";
import Script from "next/script";
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
  metadataBase: new URL("https://www.kredencesteel.com"),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  icons: {
    icon: [{ url: "/logo/krednce-favicon.jpeg", type: "image/jpeg" }],
    apple: [{ url: "/logo/krednce-favicon.jpeg", type: "image/jpeg" }],
    shortcut: "/logo/krednce-favicon.jpeg",
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
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-MKWPW0B92B"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-MKWPW0B92B');
          `}
        </Script>
      </head>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
