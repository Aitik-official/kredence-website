export const site = {
  name: "Kredence Steel Trading",
  shortName: "Kredence",
  brandName: "Kredence Steel Trading",
  tagline: "Steel Trading",
  description:
    "Kredence Steel Trading supplies fencing systems and coated metal products for construction sites, enclosures, roofing, and industrial projects.",
  email: "Info@kredencesteel.com",
  enquiryEmail: "info@eraticmultisolution.com",
  phone: "971-565686811",
  phoneHref: "tel:+971565686811",
  whatsapp: "https://wa.me/971565686811",
  founded: "2010",
  hours: "Mon – Fri: 9:00 AM – 6:00 PM\nSat: 9:00 AM – 2:00 PM\nSun: Closed",
  hoursShort: "Mon – Fri · 9:00 AM – 6:00 PM",
  address: {
    line1: "SPC Free Zone, Entrance No. 2, Ground Floor",
    line2: "Al Zahia Area, Sheikh Mohammed Bin Zayed Rd",
    line3: "Sharjah, Dubai, UAE",
    full: "Sharjah, Dubai, UAE — SPC Free Zone, Al Zahia Area, Entrance No. 2, Ground Floor, Sheikh Mohammed Bin Zayed Rd, Sharjah",
    maps: "https://maps.google.com/?q=SPC+Free+Zone+Sharjah+UAE",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/kredence-steel/",
    instagram: "https://www.instagram.com/kredencesteel",
    facebook: "https://www.facebook.com/profile.php?id=61592819913045",
  },
  logo: "/logo/krednce-logog-removebg-preview.png",
  heroImage: "/image.png",
  brochure: "/brochure/Kredence%20Brochure%20.pdf",
  companyProfile: "/brochure/Kredence_Steel_Trading_Company_Profile%20V3.pdf",
} as const;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Products",
    href: "/services",
    children: [
      { label: "Fence", href: "/services?tab=fence" },
      { label: "Metals", href: "/services?tab=metals" },
    ],
  },
  { label: "Certificates", href: "/certificates" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Who We Are", href: "/about" },
  { label: "Products", href: "/services" },
  { label: "Structural Steel", href: "/services?tab=infrastructure" },
  { label: "Stainless & Alloys", href: "/services?tab=rental" },
  { label: "Sheets & Coils", href: "/services?tab=supply" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
] as const;

export const hero = {
  eyebrow: "PREMIUM FENCING SOLUTIONS",
  titleLine1: "FENCING PANELS",
  titleLine2: "& HOARDINGS",
  description:
    "Temporary and continuous corrugated fencing panels for construction sites, project boundaries, and secure site enclosures.",
  primaryCta: "View Fence Products",
  primaryHref: "/services?tab=fence",
  secondaryCta: "Get a Quote",
  secondaryHref: "/contact",
  image:
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2000&q=80",
  images: [
    {
      src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2000&q=80",
      alt: "Steel bars stacked in a mill warehouse",
      eyebrow: "PREMIUM FENCING SOLUTIONS",
      titleLine1: "FENCING PANELS",
      titleLine2: "& HOARDINGS",
    },
    {
      src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2000&q=80",
      alt: "Steel processing and fabrication",
      eyebrow: "MILL QUALITY",
      titleLine1: "STRUCTURAL STEEL",
      titleLine2: "READY TO BUILD",
    },
    {
      src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80",
      alt: "Steel stock ready for dispatch",
      eyebrow: "RELIABLE SUPPLY",
      titleLine1: "METALS DELIVERED",
      titleLine2: "ON SCHEDULE",
    },
  ],
  processTabs: ["FENCE", "METALS"],
} as const;

export const mission = {
  eyebrow: "MISSION AND GOALS",
  title: "PRECISION, QUALITY, AND RELIABILITY DRIVE OUR MISSION",
  images: [
    {
      src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
      alt: "Steel mill operator at work",
    },
    {
      src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
      alt: "Structural steel for construction",
    },
    {
      src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
      alt: "Metal fabrication and processing",
    },
  ],
  tabs: [
    {
      id: "inspection",
      label: "INSPECTION",
      body: "Every heat of steel from Kredence Steel is checked for grade, dimension, and surface quality before it leaves our yard.",
      checks: [
        "Mill Test Certificate Review",
        "Dimensional Inspection",
        "Surface & Corrosion Check",
        "Grade Verification",
        "Load & Weight Audit",
        "Dispatch Quality Release",
      ],
    },
    {
      id: "approach",
      label: "APPROACH",
      body: "Kredence Steel Trading supplies fence systems and coated metals from one desk — panels, hoardings, mesh, coils, sheets, purlins, and roofing products.",
      checks: [
        "Ready Mill Stock",
        "Cut-to-Length Supply",
        "Grade-Matched Sourcing",
        "Project Quantity Planning",
        "On-Time Yard Dispatch",
        "Dedicated Sales Desk",
      ],
    },
    {
      id: "performance",
      label: "PERFORMANCE",
      body: "Strength, consistency, and delivery define Kredence Steel — measurable quality from enquiry to site.",
      checks: [
        "Certified Steel Grades",
        "Repeat Industrial Buyers",
        "Consistent Heat Quality",
        "Corrosion-Resistant Alloys",
        "Responsive Order Support",
        "Accountable Delivery",
      ],
    },
  ],
  cta: "Get Started",
  ctaHref: "/contact",
} as const;

export const partners = {
  eyebrow: "OUR COMPANY",
  title: "TRUSTED INDUSTRIAL PARTNERS",
} as const;

export const productGroups = [
  {
    id: "fence",
    label: "Fence",
    eyebrow: "Premium fencing solutions",
    description:
      "Temporary and continuous corrugated fencing panels with complete accessories for construction sites, project boundaries, and secure site enclosures.",
    homeEyebrow: "Fence products",
    homeTitle: "Premium fencing solutions",
    homeSubtitle:
      "Temporary and continuous fencing panels, PVC eco fence, weld mesh, Heras, and chain link, with the accessories used on site.",
    items: [
      {
        slug: "fencing-panels",
        title: "Fencing Panels & Hoardings",
        image: "/products/fencing-1.jpeg",
        description:
          "Temporary fencing panels (discontinuous) and continuous corrugated fencing, with complete accessories. Metal panels used mainly on construction sites.",
      },
      {
        slug: "pvc-eco-fence",
        title: "PVC Eco Fence",
        image: "/products/pvc-2.jpeg",
        description:
          "PVC eco fence from 2.4 m to 5.0 m, and made to customer specification. Standard sizes are also available.",
      },
      {
        slug: "wire-mesh-fence",
        title: "Wire Mesh Fence / Weld Mesh Fence / Heras Fence",
        image: "/products/wiremesh-1.jpg",
        description:
          "Stainless steel wire mesh, weld mesh, and Heras fence. Durable, corrosion-resistant mesh supplied in rolls, cut to size, or assembled.",
      },
      {
        slug: "chain-link-fence",
        title: "Chain Link Fence",
        image: "/products/chainlink-1.jpg",
        description:
          "Chain link fence for property protection. Durable and versatile, also known as hurricane fence or diamond-mesh fence.",
      },
    ],
  },
  {
    id: "metals",
    label: "Metals",
    eyebrow: "Coated metals and roofing",
    description:
      "Hot dip galvanized and pre-painted coils, sandwich panels, profile roofing sheets, decking, purlins, drywall, flashings, and GRP skylights.",
    homeEyebrow: "Metals products",
    homeTitle: "Coils, sheets and roofing",
    homeSubtitle:
      "Galvanized and color-coated coils, sandwich panels, decking, purlins, drywall, flashings, and GRP skylight sheets.",
    items: [
      {
        slug: "gi-mill-finish-coils",
        title: "GI Mill Finish Coils",
        image: "/products/gi-main.jpeg",
        description:
          "Hot dip galvanized steel coils and sheets to ASTM A653, JIS G3302, and EN 10346.",
      },
      {
        slug: "ppgi-color-coated-coils",
        title: "PPGI Color Coated Coils",
        image: "/products/ppgi-1.jpg",
        description:
          "Pre-painted galvanized steel coils in RAL colors, including RAL 9002 and RAL 1001.",
      },
      {
        slug: "sandwich-panels",
        title: "Sandwich Panels",
        image: "/products/sandwich-1.jpeg",
        description:
          "Roof, wall, and cold room panels with PUR and PIR insulation.",
      },
      {
        slug: "profile-roofing-sheets",
        title: "Profile Roofing Sheets",
        image: "/products/corrugated-1.jpg",
        description:
          "Single skin profile roofing sheets in sinusoidal, trapezoidal, and box profiles.",
      },
      {
        slug: "decking-sheets",
        title: "Decking Sheets",
        image: "/products/decking-1.jpg",
        description:
          "Metal floor deck with ribbed profiles, including 45/150 and 75/305.",
      },
      {
        slug: "z-c-purlins",
        title: "Z & C Purlins",
        image: "/products/purlins-1.jpg",
        description:
          "Z and C purlins in a range of sizes with punching options. Material conforms to ASTM A653 Grade 50 G90, with quick-fix anti-sag rods.",
      },
      {
        slug: "drywall-partition-systems",
        title: "Drywall Partition Systems",
        image: "/products/drywall-1.jpeg",
        description:
          "Stud, track, furring channel, main channel, and wall angles for metal partition systems.",
      },
      {
        slug: "roofing-flashings-gutters",
        title: "Roofing Flashings & Gutters",
        image: "/products/flashing-1.jpg",
        description:
          "Flashing, rain gutter, ridge ventilator, and sliding components for profiles and cladding.",
      },
      {
        slug: "grp-translucent-sheets",
        title: "GRP Translucent Sheets - Skylights",
        image: "/products/skylights-3.jpg",
        description:
          "GRP translucent sheets for skylights. Daylight improves the internal environment and the energy use of the building.",
      },
    ],
  },
] as const;

export const serviceHighlights = {
  eyebrow: "SERVICE HIGHLIGHTS",
  title: "DESIGNED FOR YOUR NEEDS",
  cta: "View All Services",
  ctaHref: "/services",
  items: [
    {
      title: "FENCING PANELS & HOARDINGS",
      description:
        "Temporary and continuous corrugated fencing panels for construction sites, project boundaries, and secure site enclosures.",
      href: "/products/fencing-panels",
      image:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "WIRE MESH, HERAS & CHAIN LINK",
      description:
        "Weld mesh, Heras, and chain link fence systems for temporary security and perimeter control.",
      href: "/products/wire-mesh-fence",
      image:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "GI & PPGI COLOR COATED COILS",
      description:
        "Mill-finish galvanized coils and pre-painted color coils for roofing, cladding, and profiling.",
      href: "/products/gi-mill-finish-coils",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "ROOFING, PURLINS & SANDWICH PANELS",
      description:
        "Decking, Z and C purlins, sandwich panels, flashings, gutters, and GRP skylight sheets.",
      href: "/products/decking-sheets",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80",
    },
  ],
} as const;

export const journey = {
  eyebrow: "STEPS TO SUCCESS",
  title: "OUR SUCCESSFUL JOURNEY",
  image:
    "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1000&q=80",
  milestones: [
    {
      year: "2023",
      title: "ANNUAL INDUSTRY SUCCESS",
      description:
        "Kredence Steel began supplying certified structural steel and industrial metals to fabricators and contractors.",
      side: "right" as const,
    },
    {
      year: "2024",
      title: "KEY INDUSTRY MILESTONES",
      description:
        "Expanded stainless, alloy, plate, and coil stock to support larger construction and manufacturing orders.",
      side: "left" as const,
    },
    {
      year: "2025",
      title: "INDUSTRY PROGRESS REPORT",
      description:
        "Grew a trusted buyer network with mill-certified grades and on-schedule yard dispatch.",
      side: "right" as const,
    },
    {
      year: "2026",
      title: "CORPORATE SUCCESS",
      description:
        "Corporate Success highlights our strategic achievements and continuous growth.",
      side: "left" as const,
    },
  ],
  metricsTitle: "YEARLY SUCCESS METRICS",
  metricsSub: "Yearly Industrial Progress reflects our continuous growth.",
  marquee: ["HONORS AND ACHIEVEMENTS", "OUTSTANDING PERFORMANCE"],
} as const;

export const pricing = {
  eyebrow: "CHOOSE YOUR PLAN",
  title: "AFFORDABLE PLAN CHOICES",
  plans: [
    {
      name: "Basic",
      price: "$35",
      billing: "/ Weekly Billing",
      heading: "CORE STRUCTURAL STEEL SUPPLY",
      description:
        "Essential grades and sections to keep fabrication and site work moving.",
      features: ["TMT, Beams & Channels", "Mill Test Certificates"],
      featured: false,
    },
    {
      name: "Advanced",
      price: "$120",
      billing: "/ Monthly Billing",
      heading: "STAINLESS, ALLOY & PROJECT LOTS",
      description:
        "Broader metal range and coordinated dispatch for multi-item industrial orders.",
      features: ["Stainless & Alloy Stock", "Project Quantity Planning"],
      featured: true,
    },
    {
      name: "Premium",
      price: "$1200",
      billing: "/ Yearly Billing",
      heading: "FULL-YARD METALS PROGRAM",
      description:
        "Priority supply of plates, coils, pipes, and long products for ongoing manufacturing.",
      features: ["Dedicated Account Desk", "Scheduled Mill Deliveries"],
      featured: true,
    },
  ],
} as const;

export const stats = [
  { value: "2023", label: "Supplying Steel" },
  { value: "3", label: "Metal Ranges" },
  { value: "Mill", label: "Certified Grades" },
  { value: "Site", label: "Ready Dispatch" },
] as const;

export const about = {
  eyebrow: "Who We Are",
  watermark: "Steel",
  title: "Kredence Steel Trading — Fence & Metals",
  description:
    "We supply fencing systems and coated metal products for construction sites, enclosures, roofing, and industrial buildings.",
  featureCards: [
    "Structural Steel",
    "Stainless & Alloys",
    "Plates, Sheets & Coils",
    "Pipes & Long Products",
  ],
  image:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
  accentImage:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
  paragraphs: [
    "Kredence Steel supplies the metals fabricators, contractors, and manufacturers specify — structural sections, stainless grades, and flat products, checked and dispatched from one yard.",
    "From TMT and beams to plates, coils, and pipes, we match grade, size, and quantity so your shop or site is never waiting on the wrong steel.",
  ],
  points: [
    {
      title: "Structural Steel",
      description: "Beams, channels, angles, TMT bars, and structural sections.",
    },
    {
      title: "Stainless & Alloys",
      description: "Corrosion-resistant stainless and special alloy grades.",
    },
    {
      title: "Flat Products",
      description: "Plates, sheets, and coils in hot-rolled and cold-rolled finish.",
    },
    {
      title: "Pipes & Processing",
      description: "Pipes, tubes, and cut-to-length supply for fabrication.",
    },
  ],
  caption: "Strength · Grade · Delivery",
} as const;

export const services = [
  {
    title: "TMT & Rebars",
    description:
      "High-strength TMT bars for reinforced concrete, supplied with mill test certificates.",
    icon: "trending" as const,
  },
  {
    title: "Beams & Channels",
    description:
      "Structural beams, channels, and angles for frames, sheds, and heavy fabrication.",
    icon: "lightbulb" as const,
  },
  {
    title: "Stainless Steel",
    description:
      "Sheets, pipes, and flats in stainless grades chosen for corrosion resistance.",
    icon: "network" as const,
  },
  {
    title: "Plates & Sheets",
    description:
      "Hot-rolled and cold-rolled plates and sheets cut or supplied in standard sizes.",
    icon: "clipboard" as const,
  },
  {
    title: "Coils",
    description:
      "Steel coils for rolling, pressing, and continuous fabrication lines.",
    icon: "users" as const,
  },
  {
    title: "Pipes & Tubes",
    description:
      "Carbon and stainless pipes and tubes for process, structural, and utility lines.",
    icon: "messages" as const,
  },
] as const;

export const growth = {
  eyebrow: "Stainless & Alloys",
  watermark: "Metals",
  title: "Corrosion-Resistant Steel",
  features: [
    {
      title: "Grade-matched stock",
      description:
        "Stainless and alloy grades selected for strength, finish, and corrosion resistance.",
      icon: "handshake" as const,
    },
    {
      title: "Project supply",
      description:
        "Quantities planned against drawings so fabrication starts with the right metal.",
      icon: "headset" as const,
    },
  ],
  primaryCta: "Request a Quote",
  secondaryCta: "View Products",
  images: {
    main: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=900&q=80",
    overlay:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=80",
  },
} as const;

export const projects = [
  {
    title: "TMT Bars",
    category: "Structural Steel",
    description: "High-strength reinforcement bars for concrete structures.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Beams & Sections",
    category: "Structural Steel",
    description: "Beams, channels, and angles for frames and industrial sheds.",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Stainless Sheets",
    category: "Stainless & Alloys",
    description: "Stainless sheets for corrosion-resistant fabrication.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Steel Plates",
    category: "Flat Products",
    description: "Plates supplied for heavy fabrication and pressure work.",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Coils",
    category: "Flat Products",
    description: "Hot-rolled and cold-rolled coils for continuous processing.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Pipes & Tubes",
    category: "Tubular Products",
    description: "Carbon and stainless pipes for structural and process lines.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Alloy Steels",
    category: "Special Metals",
    description: "Alloy grades for higher strength and wear resistance.",
    image:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Cut-to-Length",
    category: "Processing",
    description: "Sheets and plates cut to the sizes your shop specifies.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
  },
] as const;

export const team = [
  {
    name: "Structural Steel",
    role: "Long Products",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Stainless Steel",
    role: "Corrosion Resistance",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Plates & Coils",
    role: "Flat Products",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Pipes & Tubes",
    role: "Tubular Supply",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=600&q=80",
  },
] as const;

export const infrastructureIntro = {
  eyebrow: "Structural Steel",
  title: "Structural Steel",
  description:
    "TMT bars, beams, channels, and angles — mill-certified long products from Kredence Steel.",
} as const;

export const infrastructureItems = [
  {
    slug: "tmt",
    tag: "Structural",
    title: "TMT Bars",
    description:
      "High-strength TMT reinforcement bars supplied with mill test certificates for concrete work.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=80",
    icon: "warehouse",
  },
  {
    slug: "beams",
    tag: "Structural",
    title: "Beams & Channels",
    description:
      "Structural beams and channels for frames, mezzanines, and industrial sheds.",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=80",
    icon: "warehouse",
  },
  {
    slug: "angles",
    tag: "Structural",
    title: "Angles & Flats",
    description:
      "Angles and flats for bracing, fabrication, and general structural use.",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1400&q=80",
    icon: "warehouse",
  },
  {
    slug: "sections",
    tag: "Structural",
    title: "Structural Sections",
    description:
      "Standard sections matched to drawings, ready for cutting and site delivery.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1400&q=80",
    icon: "warehouse",
  },
] as const;

export const rental = {
  eyebrow: "Stainless & Alloys",
  title: "Stainless Steel & Special Alloys",
  description:
    "Stainless sheets, pipes, and alloy steels selected for corrosion resistance and process duty.",
  cta: "Request a Quote",
  image:
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=80",
} as const;

export const supplyIntro = {
  eyebrow: "Sheets, Plates & Coils",
  title: "Flat & Tubular Products",
  description:
    "Plates, sheets, coils, pipes, and processing — the metals Kredence Steel keeps ready for fabrication.",
} as const;

export const assetCategories = [
  {
    id: "construction",
    label: "Structural Steel",
    title: "Structural Steel",
    description:
      "Long products for construction frames, reinforcement, and heavy fabrication.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80",
    items: [
      "TMT Bars",
      "Beams",
      "Channels",
      "Angles",
      "Flats",
      "Rounds",
      "Structural Sections",
    ],
  },
  {
    id: "electrical",
    label: "Stainless Steel",
    title: "Stainless Steel",
    description:
      "Corrosion-resistant stainless products for process, food, and architectural use.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80",
    items: [
      "SS Sheets",
      "SS Plates",
      "SS Pipes",
      "SS Tubes",
      "SS Flats",
      "SS Coils",
    ],
  },
  {
    id: "office",
    label: "Plates & Sheets",
    title: "Plates & Sheets",
    description:
      "Hot-rolled and cold-rolled flat steel for cutting, welding, and pressing.",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1000&q=80",
    items: [
      "HR Plates",
      "CR Sheets",
      "Chequered Plates",
      "MS Sheets",
      "Cut-to-Size Plates",
    ],
  },
  {
    id: "medical",
    label: "Coils",
    title: "Steel Coils",
    description: "Coils for rolling lines, slitting, and continuous fabrication.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
    items: ["HR Coils", "CR Coils", "Galvanized Coils", "Slit Coils"],
  },
  {
    id: "safety",
    label: "Pipes & Tubes",
    title: "Pipes & Tubes",
    description:
      "Carbon and stainless tubular products for structural and process lines.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80",
    items: [
      "MS Pipes",
      "GI Pipes",
      "ERW Tubes",
      "Seamless Pipes",
      "Square Tubes",
    ],
  },
  {
    id: "packaging",
    label: "Alloys & Processing",
    title: "Alloys & Processing",
    description:
      "Special alloys plus cutting and dispatch support from the Kredence Steel yard.",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1000&q=80",
    items: [
      "Alloy Rounds",
      "Wear Plates",
      "Cut-to-Length",
      "Mill Test Certificates",
      "Site Delivery",
    ],
  },
] as const;

export const clients = [
  { name: "JSW Steel", mark: "JSW", line: "Steel" },
  { name: "Tata Steel", mark: "Tata", line: "Steel" },
  { name: "SAIL", mark: "SAIL", line: "Steel" },
  { name: "Jindal Steel", mark: "Jindal", line: "Steel" },
  { name: "Jindal Stainless", mark: "Jindal", line: "Stainless" },
  { name: "AM/NS India", mark: "AM/NS", line: "India" },
  { name: "POSCO", mark: "POSCO", line: "Steel" },
  { name: "Nippon Steel", mark: "Nippon", line: "Steel" },
] as const;

export const testimonials = [
  {
    quote:
      "Kredence Steel delivered certified TMT and beams on the dates we needed. Grades matched the mill certificates, and the yard team was straightforward to deal with.",
    name: "MARIE ESTHER",
    role: "Project Director",
    company: "Apex Structures",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Their stainless sheets and pipes held the corrosion spec on our process line. Clear pricing and reliable dispatch made them a standing supplier.",
    name: "SIGRUN CAROLA",
    role: "Plant Manager",
    company: "Northline Plants",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Plates and coils arrived cut to our list. Kredence Steel is the metals desk we call when a fabrication job cannot wait.",
    name: "RAHUL MEHTA",
    role: "Works Manager",
    company: "Metro Fabricators",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
  },
] as const;

export const blogs = {
  eyebrow: "RECENT BLOGS",
  title: "LATEST INDUSTRY TRENDS",
  items: [
    {
      date: "February 19, 2026",
      title: "HOW MILL CERTIFICATES PROTECT STRUCTURAL STEEL QUALITY",
      href: "/about",
      image:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80",
    },
    {
      date: "February 18, 2026",
      title: "CHOOSING STAINLESS GRADES FOR CORROSION RESISTANCE",
      href: "/services?tab=rental",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80",
    },
    {
      date: "February 18, 2026",
      title: "PLATES, COILS, AND PIPES FOR MODERN FABRICATION",
      href: "/services",
      image:
        "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1000&q=80",
    },
  ],
} as const;

export const homeContact = {
  eyebrow: "LET'S TALK",
  title: "CONNECT WITH US",
  description:
    "Tell us the fence or metal product and the quantity. Call 971-565686811 or send the form. Kredence Steel Trading replies within 12 hours.",
  image:
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=2000&q=80",
} as const;

export const contactNeeds = [
  "Fencing Panels & Hoardings",
  "PVC Eco Fence",
  "Wire Mesh / Weld Mesh / Heras Fence",
  "Chain Link Fence",
  "GI Mill Finish Coils",
  "PPGI Color Coated Coils",
  "Sandwich Panels",
  "Profile Roofing Sheets",
  "Decking Sheets",
  "Z & C Purlins",
  "Drywall Partition Systems",
  "Roofing Flashings & Gutters",
  "GRP Translucent Sheets - Skylights",
] as const;
