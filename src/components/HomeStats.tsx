const facts = [
  { value: "15+", label: "Years of experience" },
  { value: "2010", label: "Building excellence since" },
  { value: "Global", label: "ASTM, JIS and EN" },
  { value: "Trusted", label: "Partner to major contractors" },
] as const;

export default function HomeStats() {
  return (
    <section className="border-y border-industrial-line bg-industrial-panel">
      <div className="mx-auto grid max-w-6xl sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="border-b border-industrial-line px-6 py-7 last:border-b-0 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
          >
            <p className="font-display text-2xl font-medium uppercase tracking-[0.03em] text-industrial-ink">
              {fact.value}
            </p>
            <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.16em] text-industrial-muted">
              {fact.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
