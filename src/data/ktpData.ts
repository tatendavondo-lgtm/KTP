export interface ServicePillar {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  bestFor: string;
  investmentTier: string;
  iconName: "Sparkles" | "CalendarCheck" | "Palette" | "Compass";
  badge: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: "Luxury Weddings" | "Event Concepts" | "Corporate & Galas" | "Traditional / Lobola";
  venue: string;
  location: string;
  guestCount: number;
  conceptSummary: string;
  fullStory: string;
  colorPalette: { name: string; hex: string }[];
  highlight: string;
  coverImage: string;
  galleryImages: [string, string, string];
}

export interface Testimonial {
  id: string;
  clientName: string;
  eventTitle: string;
  location: string;
  quote: string;
  role: string;
  rating: number;
}

export const KTP_BRAND = {
  name: "Kudzie The Planner",
  shortName: "KTP",
  tagline: "COMMITTED BEYOND PLANNING",
  phoneDisplay: "+263 78 282 1014",
  whatsappNumber: "263782821014",
  email: "kudziectheplanner@gmail.com",
  location: "Harare, Zimbabwe",
  serviceAreas: "Harare • Victoria Falls • Vumba • Bulawayo • Destination Worldwide",
  hours: "Monday – Saturday: 08:30 – 17:30 CAT",
  instagram: "@kudzietheplanner",
};

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: "wedding-planning",
    number: "01",
    title: "Wedding Planning",
    tagline: "Full-scale luxury bridal & groom journey from concept to execution",
    description:
      "An end-to-end couture wedding planning experience designed for couples seeking elevated sophistication without logistical overwhelm. We curate your dream celebration with bespoke aesthetic curation, vendor contract governance, and master timeline precision.",
    deliverables: [
      "Bespoke aesthetic conception & vision board design",
      "Complete budget allocation & financial governance",
      "Vetted elite vendor sourcing, contracting & management",
      "Full wedding weekend itinerary & guest hospitality flow",
      "RSVP tracking, floor plan engineering & seating layout",
      "Lead planner + 3 assistants on-site for execution",
    ],
    bestFor: "Couples desiring a flawless, bespoke celebration handled from engagement to final send-off.",
    investmentTier: "Full-Production Luxury",
    iconName: "Sparkles",
    badge: "Signature Offering",
  },
  {
    id: "event-coordination",
    number: "02",
    title: "Event Co-ordination",
    tagline: "Flawless on-the-day management, vendor orchestration & timeline mastery",
    description:
      "For hosts and couples who have planned the details but require calm, uncompromising operational mastery on the celebration day. We step in 6-8 weeks prior to audit vendors, lock down run-sheets, and orchestrate every synchronized cue.",
    deliverables: [
      "Comprehensive handover & vendor contract audit 6-8 weeks out",
      "Master minute-by-minute run sheet & contingency protocols",
      "Full rehearsal direction with bridal party & VIP speakers",
      "Direct on-site vendor load-in, setup audit & sound checks",
      "Discreet crisis deflection & bridal party personal concierge",
      "Gift management, final vendor disbursements & pack-down",
    ],
    bestFor: "DIY planners & couples wanting zero stress, complete presence, and clockwork precision on their big day.",
    investmentTier: "On-the-Day Mastery",
    iconName: "CalendarCheck",
    badge: "Essential Peace of Mind",
  },
  {
    id: "event-concepts",
    number: "03",
    title: "Event Concepts",
    tagline: "Bespoke styling, spatial design, floral & lighting direction",
    description:
      "Transforming ordinary venues into immersive sensory landscapes. We engineer high-concept atmospheres for luxury galas, milestone celebrations, and bespoke receptions with theatrical lighting, couture floristry, and custom structural installations.",
    deliverables: [
      "Custom 3D spatial layout & atmospheric lighting schemes",
      "Bespoke floral architecture & dramatic ceiling canopy design",
      "Luxury tablescape styling (curated linens, cutlery, bespoke stationery)",
      "Photographic installations, champagne walls & grand entranceways",
      "Custom fabrication & staging coordination with artisans",
      "Live mood-board walkthrough & physical mock-up previews",
    ],
    bestFor: "Galas, corporate brand showcases, anniversary banquets, and visionary couples demanding standout visual prestige.",
    investmentTier: "Bespoke Design & Styling",
    iconName: "Palette",
    badge: "Spatial Architecture",
  },
  {
    id: "private-consultation",
    number: "04",
    title: "Private Consultation",
    tagline: "1-on-1 strategy, budget structuring & vendor unlocking",
    description:
      "High-impact advisory sessions providing direct access to Kudzie's industry rolodex, cost optimization formulas, and tactical planning roadmaps. Perfect for couples starting their journey or facing planning bottlenecks.",
    deliverables: [
      "90-minute intensive strategic deep-dive session (in-person or virtual)",
      "Realistic budget structuring & cost-saving blueprint (USD)",
      "Unlocking Kudzie's vetted Zimbabwean & regional vendor black-book",
      "Customized planning timeline & milestone roadmap",
      "Contract clause review & negotiation advisory",
      "Post-session tailored action document & vendor referral deck",
    ],
    bestFor: "Discerning couples in Zimbabwe or diaspora planning independently who need elite professional guidance.",
    investmentTier: "Strategic Advisory",
    iconName: "Compass",
    badge: "Direct Guidance",
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "victoria-falls-pavilion",
    title: "The Zambezi Royal Pavilion",
    category: "Luxury Weddings",
    venue: "The Victoria Falls Safari Club Grounds",
    location: "Victoria Falls, Zimbabwe",
    guestCount: 280,
    conceptSummary:
      "A transcendent destination wedding blending untamed Zambezi splendor with ultra-luxe crystal chandeliers, cascading blush orchids, and mirrored runway tables beneath an open-air starlit canopy.",
    fullStory:
      "For Panashe & Farai, our mandate was to craft a 3-day destination celebration where raw African majesty met black-tie European luxury. We built a custom glass marquee overlooking the Zambezi river gorge, flown-in custom rose-gold tableware, and managed seamless luxury transfers for 280 international guests spanning London, Johannesburg, and Harare.",
    colorPalette: [
      { name: "Obsidian Plum", hex: "#12071F" },
      { name: "Vibrant Magenta", hex: "#E6007E" },
      { name: "Antique Champagne", hex: "#E5C397" },
      { name: "Ivory Silk", hex: "#FAF8F5" },
    ],
    highlight: "Custom Glass Marquee & 12,000 Cascading Orchids",
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "borrowdale-brooke-glasshouse",
    title: "L'Amour Moderne at The Brooke",
    category: "Event Concepts",
    venue: "Private Estate Glasshouse",
    location: "Borrowdale Brooke, Harare",
    guestCount: 160,
    conceptSummary:
      "Monochromatic architectural elegance featuring sculptural magenta floral clouds, matte black minimalist chargers, and warm amber candlelight against panoramic golf-estate gardens.",
    fullStory:
      "An editorial-grade milestone anniversary designed to push the boundaries of contemporary Zimbabwean event aesthetics. We installed bespoke 4-meter suspended floral geometries with imported magenta hydrangeas, paired with hand-calligraphed velvet menus and a sunken cocktail lounge featuring a bespoke botanical gin bar.",
    colorPalette: [
      { name: "Deep Violet", hex: "#3B0A68" },
      { name: "Haute Magenta", hex: "#E6007E" },
      { name: "Smoked Pearl", hex: "#E8E2EC" },
      { name: "Brushed Gold", hex: "#D4AF37" },
    ],
    highlight: "Suspended 4M Floral Geometries & Hand-Calligraphed Velvet Menus",
    coverImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "roora-heritage-glen-lorne",
    title: "The Regal Roora & Lobola Soirée",
    category: "Traditional / Lobola",
    venue: "The Hillside Estate",
    location: "Glen Lorne, Harare",
    guestCount: 350,
    conceptSummary:
      "A breathtaking celebration honoring Zimbabwean cultural traditions steeped in regal splendor — handcrafted Shona woven art backdrops, royal purple velvet accents, and sumptuous authentic heritage cuisine.",
    fullStory:
      "A dignified, high-energy Roora (bride price) celebration that bridged ancestral honor with modern high fashion. Kudzie coordinated the secret protocol timeline between the munyai (mediator) and both families, while curating an unforgettable outdoor feast, custom marimba symphony, and an illuminated evening after-party.",
    colorPalette: [
      { name: "Royal Purple", hex: "#4A154B" },
      { name: "Imperial Gold", hex: "#E29B43" },
      { name: "Burnt Ochre", hex: "#A85324" },
      { name: "Warm Cream", hex: "#FFFDF9" },
    ],
    highlight: "Cultural Protocol Timing, 350-Guest Feast & Live Marimba Symphony",
    coverImage: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "zambezi-sunset-corporate-gala",
    title: "Southern Africa Mining Leadership Gala",
    category: "Corporate & Galas",
    venue: "The Rainbow Towers Grand Ballroom",
    location: "Harare CBD, Zimbabwe",
    guestCount: 450,
    conceptSummary:
      "High-security diplomatic gala featuring projection-mapped visual staging, synchronized multi-course banquet service, and acoustic isolation for pan-African executive leaders.",
    fullStory:
      "Executed for a regional resource conglomerate hosting ministers and global institutional investors. KTP oversaw end-to-end event conceptualization, protocol seating for 14 ambassadors, bespoke stage architecture with digital LED scrims, and a flawless 4-minute transition to a VIP rooftop networking reception.",
    colorPalette: [
      { name: "Obsidian Black", hex: "#12071F" },
      { name: "Electric Indigo", hex: "#3B0A68" },
      { name: "Platinum Silver", hex: "#E2E8F0" },
      { name: "Vibrant Fuchsia", hex: "#E6007E" },
    ],
    highlight: "Diplomatic Protocol Protocol, LED Staging & 450-Guest Banquet",
    coverImage: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "vumba-mist-whispers",
    title: "Ethereal Whispers in the Vumba Mist",
    category: "Luxury Weddings",
    venue: "Forest Estate Lodge & Gardens",
    location: "Bvumba Mountains, Manicaland",
    guestCount: 120,
    conceptSummary:
      "An intimate romantic fairy-tale nestled amidst the rolling evergreen mountain forests of Eastern Highlands, featuring botanical glass pavilions and cascading English tea roses.",
    fullStory:
      "Tariro & Michael wanted a secluded sanctuary away from city life. We transformed an old coffee estate orchard into an enchanted glasshouse surrounded by moss-covered stones and wild lavender. Logistical precision ensured mountain microclimates were countered with hidden radiant warming and candlelit pavilions.",
    colorPalette: [
      { name: "Forest Emerald", hex: "#1B3B2B" },
      { name: "Dusty Lavender", hex: "#A38EB4" },
      { name: "Magenta Accent", hex: "#D6006E" },
      { name: "Parchment Silk", hex: "#FAF5EE" },
    ],
    highlight: "Mountain Glasshouse, Climate-Engineered Ambiance & Secret Orchard Ceremony",
    coverImage: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "chisipite-couture-banquet",
    title: "Midnight Orchid 40th Jubilation",
    category: "Event Concepts",
    venue: "Private Residence Courtyard",
    location: "Chisipite, Harare",
    guestCount: 140,
    conceptSummary:
      "A haute couture evening soiree wrapped in deep velvet drapery, illuminated suspended crystal chandeliers, and a mirrored infinity pool dance floor.",
    fullStory:
      "To celebrate a visionary diaspora entrepreneur's 40th birthday in Harare, KTP engineered a structural transformation spanning over the estate's Olympic pool with clear acrylic staging. A continuous caviar and champagne lounge was paired with an international DJ booth custom-wrapped in deep violet velvet.",
    colorPalette: [
      { name: "Midnight Obsidian", hex: "#12071F" },
      { name: "Couture Magenta", hex: "#E6007E" },
      { name: "Ultra Violet", hex: "#4A154B" },
      { name: "Gilded Brass", hex: "#CFAC52" },
    ],
    highlight: "Acrylic Pool Staging, Floating Water Florals & Velvet DJ Lounge",
    coverImage: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    clientName: "Chipo & Tendai Munemo",
    eventTitle: "Luxury Wedding (250 Guests)",
    location: "Wild Geese Lodge, Harare",
    quote:
      "Planning from London seemed terrifying until we hired Kudzie. Her WhatsApp communication, calm demeanor, and impeccable taste took every ounce of stress away. When I walked into the reception, I cried—it looked like something straight out of Vogue Weddings.",
    role: "Bride & Groom (UK Diaspora)",
    rating: 5,
  },
  {
    id: "2",
    clientName: "Dr. Nyasha Makoni",
    eventTitle: "Traditional Roora & Celebration",
    location: "Borrowdale Brooke, Harare",
    quote:
      "Kudzie understands Zimbabwean cultural intricacies just as deeply as modern luxury aesthetics. She kept both sets of elders completely respected and relaxed while delivering a production standard that our family is still talking about six months later.",
    role: "Groom's Family Representative",
    rating: 5,
  },
  {
    id: "3",
    clientName: "Vimbai & Sean Gallagher",
    eventTitle: "Destination Wedding Weekend",
    location: "Victoria Falls Safari Lodge",
    quote:
      "The precision Kudzie brought to our 3-day Victoria Falls wedding was extraordinary. From airport logistics for 120 guests to handling unexpected bush rain with total composure, she is truly COMMITTED BEYOND PLANNING. Worth every single dollar.",
    role: "Bride & Groom (Harare & Cape Town)",
    rating: 5,
  },
  {
    id: "4",
    clientName: "Ruvimbo Sithole",
    eventTitle: "Corporate Gala & Product Launch",
    location: "Meikles Hotel, Harare",
    quote:
      "Flawless execution under tight timeframes. Kudzie's spatial styling elevated our executive brand instantly. She manages vendors with poise, firmness, and surgical punctuality.",
    role: "Head of Marketing & Communications",
    rating: 5,
  },
];

export const WHY_CHOOSE_KTP = [
  {
    title: "Committed Beyond Planning",
    description:
      "We don't merely tick checklists; we obsess over emotional flow, guest comfort, lighting nuances, and generational memories with uncompromising dedication.",
    icon: "HeartHandshake",
  },
  {
    title: "Unrivalled Vendor Black-Book",
    description:
      "Direct priority access to Zimbabwe's premier caterers, marquee masters, lighting engineers, cake couturiers, and floral wholesalers with transparent trade pricing.",
    icon: "ShieldCheck",
  },
  {
    title: "Calm Crisis Deflection",
    description:
      "Unflappable composure on your big day. We solve generator switches, weather pivots, and timeline shifts invisibly before you or your guests ever notice.",
    icon: "Anchor",
  },
  {
    title: "Diaspora Seamless Bridge",
    description:
      "Specialized concierge workflows for clients based in the UK, USA, Australia, and South Africa planning celebrations back home in Zimbabwe with zero friction.",
    icon: "Globe",
  },
];
