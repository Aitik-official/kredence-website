import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { site } from "@/data/site";
import BackToTop from "./BackToTop";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
      <path d="M12.04 2C6.58 2 2.15 6.43 2.15 11.89c0 1.96.52 3.78 1.43 5.37L2 22l4.9-1.55c1.52.83 3.26 1.3 5.14 1.3 5.46 0 9.89-4.43 9.89-9.89C21.93 6.43 17.5 2 12.04 2zm0 17.93c-1.68 0-3.24-.49-4.55-1.34l-.33-.2-3.07.97 1.02-2.99-.21-.35a7.9 7.9 0 0 1-1.22-4.13c0-4.37 3.56-7.93 7.94-7.93 4.37 0 7.93 3.56 7.93 7.93 0 4.38-3.56 7.94-7.93 7.94z" />
    </svg>
  );
}

export default function FloatingPhone() {
  return (
    <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(0.75rem,env(safe-area-inset-right))] z-50 flex flex-col items-center gap-2.5 sm:bottom-6 sm:right-6 sm:gap-3">
      <BackToTop />
      <Link
        href="/contact"
        aria-label="Contact Us & Request Quote"
        title="Contact Us / Request Quote"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-industrial-dark text-white border-2 border-industrial-steel-light/50 shadow-[0_12px_28px_rgba(23,50,61,0.35)] transition hover:bg-industrial-steel hover:scale-105 sm:h-14 sm:w-14"
      >
        <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
      </Link>
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.45)] transition hover:scale-105 hover:brightness-110 sm:h-14 sm:w-14"
      >
        <WhatsAppIcon className="h-5 w-5 sm:h-6 sm:w-6" />
      </a>
      <a
        href={site.phoneHref}
        aria-label={`Call ${site.phone}`}
        className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-industrial-steel bg-white text-industrial-steel shadow-lg transition hover:bg-industrial-steel hover:text-white sm:h-14 sm:w-14"
      >
        <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
      </a>
    </div>
  );
}
