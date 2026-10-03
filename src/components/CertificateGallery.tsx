import Image from "next/image";

const certificates = [
  {
    title: "ISO 9001:2015 (Page 1)",
    image: "/certificates/iso-9001-cert.jpg",
  },
  {
    title: "ISO 9001:2015 (Page 2)",
    image: "/certificates/iso-9001-cert-p2.jpg",
  },
  {
    title: "ISO 14001:2015 (Page 1)",
    image: "/certificates/iso-14001-cert.jpg",
  },
  {
    title: "ISO 14001:2015 (Page 2)",
    image: "/certificates/iso-14001-cert-p2.jpg",
  },
  {
    title: "ISO 45001:2018 (Page 1)",
    image: "/certificates/iso-45001-cert.jpg",
  },
  {
    title: "ISO 45001:2018 (Page 2)",
    image: "/certificates/iso-45001-cert-p2.jpg",
  },
];

export default function CertificateGallery() {
  return (
    <section className="bg-white py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 xl:max-w-7xl">
        {/* Simple 6 Certificates Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.image}
              className="flex flex-col border border-[#e2e8f0] bg-white shadow-xs"
            >
              <div className="border-b border-[#e2e8f0] bg-industrial-mist px-4 py-2.5">
                <h3 className="font-display text-sm font-bold uppercase tracking-wide text-industrial-ink">
                  {cert.title}
                </h3>
              </div>
              <div className="relative aspect-[1/1.45] w-full bg-[#fafafa] p-2">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
