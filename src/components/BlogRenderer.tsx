import React from "react";
import Link from "next/link";

function parseInline(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  // Match links [text](url) and bold **bold**
  const regex = /\[(.*?)\]\((.*?)\)|\*\*(.*?)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    if (match[1] !== undefined) {
      // Link [text](url)
      const label = match[1];
      const href = match[2];
      const isInternal = href.startsWith("/") || href.startsWith("#");

      parts.push(
        isInternal ? (
          <Link
            key={match.index}
            href={href}
            className="font-semibold text-industrial-steel underline decoration-industrial-steel/40 underline-offset-4 transition-colors hover:text-industrial-steel-dark hover:decoration-industrial-steel"
          >
            {label}
          </Link>
        ) : (
          <a
            key={match.index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-industrial-steel underline decoration-industrial-steel/40 underline-offset-4 transition-colors hover:text-industrial-steel-dark hover:decoration-industrial-steel"
          >
            {label}
          </a>
        )
      );
    } else if (match[3] !== undefined) {
      // Bold **text**
      parts.push(
        <strong key={match.index} className="font-semibold text-industrial-ink">
          {match[3]}
        </strong>
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

export default function BlogRenderer({ content }: { content: string }) {
  if (!content) return null;

  // Split into paragraph/section blocks separated by one or more blank lines
  const rawBlocks = content.replace(/\r\n/g, "\n").split(/\n\s*\n/);

  return (
    <div className="space-y-6">
      {rawBlocks.map((block, idx) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        // Heading 2
        if (trimmed.startsWith("## ")) {
          return (
            <h2
              key={idx}
              className="font-display mt-10 mb-3 border-b border-industrial-line/70 pb-2.5 text-xl font-bold uppercase tracking-wide text-industrial-ink sm:text-2xl"
            >
              {parseInline(trimmed.replace(/^##\s+/, ""))}
            </h2>
          );
        }

        // Heading 3
        if (trimmed.startsWith("### ")) {
          return (
            <h3
              key={idx}
              className="font-display mt-7 mb-2 text-lg font-semibold uppercase tracking-wide text-industrial-ink sm:text-xl"
            >
              {parseInline(trimmed.replace(/^###\s+/, ""))}
            </h3>
          );
        }

        // Check if block is a bullet list (or has bullet lines)
        const lines = trimmed.split("\n");
        const isAllList = lines.every((line) => /^\s*[-*•]\s+/.test(line));

        if (isAllList) {
          return (
            <ul key={idx} className="my-5 space-y-2.5 pl-1 sm:pl-2">
              {lines.map((line, lIdx) => (
                <li
                  key={lIdx}
                  className="flex items-start gap-3 text-[15px] leading-relaxed text-[#444] sm:text-base"
                >
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-industrial-steel" />
                  <span>{parseInline(line.replace(/^\s*[-*•]\s+/, ""))}</span>
                </li>
              ))}
            </ul>
          );
        }

        // If block has introductory text followed by bullet points
        const firstBulletIndex = lines.findIndex((l) => /^\s*[-*•]\s+/.test(l));
        if (firstBulletIndex > 0) {
          const intro = lines.slice(0, firstBulletIndex).join(" ");
          const listItems = lines.slice(firstBulletIndex);

          return (
            <div key={idx} className="space-y-3">
              <p className="text-[15px] leading-[1.85] text-[#444] sm:text-base">
                {parseInline(intro)}
              </p>
              <ul className="my-4 space-y-2.5 pl-1 sm:pl-2">
                {listItems.map((line, lIdx) => (
                  <li
                    key={lIdx}
                    className="flex items-start gap-3 text-[15px] leading-relaxed text-[#444] sm:text-base"
                  >
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-industrial-steel" />
                    <span>{parseInline(line.replace(/^\s*[-*•]\s+/, ""))}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        }

        // Normal paragraph
        return (
          <p key={idx} className="text-[15px] leading-[1.85] text-[#444] sm:text-base">
            {parseInline(trimmed.replace(/\n+/g, " "))}
          </p>
        );
      })}
    </div>
  );
}

