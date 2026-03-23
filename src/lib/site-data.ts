export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Explore", href: "/explore" },
  { label: "Program", href: "/program" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "Partners", href: "/partners" },
  { label: "B2B", href: "/b2b" },
  { label: "Tickets", href: "/tickets" },
];

export const audienceCards = [
  {
    title: "For Visitors",
    eyebrow: "Discover",
    description: "See the best of Korean culture, music, beauty, food, and design in one weekend.",
    cta: "Plan your visit",
    href: "/tickets",
  },
  {
    title: "For Brands",
    eyebrow: "Launch",
    description: "Activate your next flagship drop with premium Seoul foot traffic and editorial staging.",
    cta: "Become a partner",
    href: "/partners",
  },
  {
    title: "For Buyers",
    eyebrow: "Close",
    description: "Meet curated Korean labels, distributors, and creative operators in a buyer-first environment.",
    cta: "Enter B2B lounge",
    href: "/b2b",
  },
];

export const zones = [
  {
    slug: "drop",
    title: "The Drop",
    subtitle: "Retail + Beauty",
    description: "Limited releases, K-beauty launches, and immersive brand moments in a high-conversion marketplace.",
    image: "/images/zone_drop.webp",
  },
  {
    slug: "stage",
    title: "The Stage",
    subtitle: "Music + Performance",
    description: "Headline sets, fashion-inflected performances, and spectacle built for social reach.",
    image: "/images/zone_stage.webp",
  },
  {
    slug: "lab",
    title: "The Lab",
    subtitle: "Workshops + Co-Creation",
    description: "Hands-on sessions with creators, product customization, and next-gen culture experiments.",
    image: "/images/zone_lab.webp",
  },
  {
    slug: "gallery",
    title: "The Gallery",
    subtitle: "VIP + Art + Hospitality",
    description: "Private viewings, brand dinners, art installations, and premium business hospitality.",
    image: "/images/zone_gallery.webp",
  },
];

export const programMoments = [
  { time: "12:00", title: "Opening Ritual", meta: "DDP Plaza · Immersive welcome show" },
  { time: "14:00", title: "K-Beauty Futures", meta: "Lab Forum · Founder conversations" },
  { time: "18:30", title: "Golden Hour Drops", meta: "Marketplace · Limited releases" },
  { time: "21:00", title: "Seoul Headliner Set", meta: "Main Stage · Live performance" },
];

export const partnerLogos = ["AMORE", "ADER", "MUSINSA", "GENTLE MONSTER", "CASS", "KREAM", "HYBE", "KAKAO"];

export const stats = [
  { value: "50K", label: "Expected attendees" },
  { value: "120+", label: "Brands & creators" },
  { value: "40", label: "Buyer delegations" },
  { value: "4", label: "Curated experience zones" },
];
