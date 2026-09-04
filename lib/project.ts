/**
 * Single source of truth for the Yusuf Residency demo project page.
 * Everything the page renders is derived from this file so the layout
 * can be reused for any project by swapping the data.
 */

export type NavItem = { id: string; label: string };

export const nav: NavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "residences", label: "Residences" },
  { id: "amenities", label: "Amenities" },
  { id: "gallery", label: "Gallery" },
  { id: "floor-plans", label: "Floor Plans" },
  { id: "specifications", label: "Specifications" },
  { id: "progress", label: "Progress" },
  { id: "location", label: "Location" },
  { id: "emi-calculator", label: "EMI Calculator" },
  { id: "enquire", label: "Enquire" },
];

export const project = {
  name: "Yusuf Residency",
  tagline: "Considered living on the 30 m Sun Pharma Road",
  locality: "Tandalja, Vadodara",
  address: "Sun Pharma 30 m Road, Tandalja, Vadodara, Gujarat 390012",
  configuration: "2 & 3 BHK Apartments",
  status: "Under construction",
  possession: "December 2027",
  reraNumber: "PR/GJ/VADODARA/VADODARA/Others/MAA12345/DEMO",
  reraNote: "Illustrative RERA number — this is a design demonstration, not a live listing.",
  priceFrom: "₹ 62.5 Lakh",
  priceNote: "all-inclusive, starting",
  heroImage: "/images/hero.jpg",

  developer: {
    name: "Surti Developer",
    logo: "/images/logo.svg",
    blurb:
      "A Vadodara builder with 18 years of delivery across Tandalja, Vasna and Bhayli — known for honest carpet areas, clean legal titles and on-time handovers.",
    phoneDisplay: "+91 96010 00000",
    phoneHref: "tel:+919601000000",
    whatsappHref:
      "https://wa.me/919601000000?text=Hi%2C%20I%27d%20like%20details%20about%20Yusuf%20Residency",
    experienceYears: 18,
    delivered: "24 projects · 1,900+ homes",
  },

  stats: [
    { label: "Configurations", value: "2 & 3 BHK" },
    { label: "Land parcel", value: "1.4 acres" },
    { label: "Towers / Floors", value: "2 towers · G + 13" },
    { label: "Homes", value: "156 residences" },
    { label: "Open space", value: "68% open & green" },
    { label: "Car parking", value: "1.6 per home" },
  ],

  overview: {
    lead: "Yusuf Residency is a two-tower community of 156 homes in the heart of Tandalja, built for families who want light, cross-ventilation and a quiet address that is still two minutes from everything.",
    body: [
      "Every apartment is a corner or through unit, so all bedrooms get a window on an external wall and the living room pulls a breeze across the plan. Ceilings are 3.15 m floor-to-floor, and the utility balcony is deliberately kept out of the carpet area you pay for.",
      "The ground plane is given back to residents: a 24 m landscaped court between the towers, a covered drop-off, and a clubhouse that opens onto the pool deck. Service and visitor parking sit at the podium so the garden stays car-free.",
      "The project sits on the 30 m Sun Pharma Road, a fully developed stretch with schools, hospitals, retail and the Tandalja Masjid within a kilometre, and quick access to the Waghodia Road and NH-48.",
    ],
  },

  highlights: [
    { title: "Honest carpet areas", body: "RERA carpet stated on every plan — utility balcony excluded." },
    { title: "All corner / through homes", body: "Three-side open planning; every bedroom on an external wall." },
    { title: "3.15 m floor-to-floor", body: "Taller rooms, deeper light, room for false ceilings." },
    { title: "68% open & green", body: "A car-free central court, podium parking, tree-lined edges." },
    { title: "Double-height lobby", body: "Air-conditioned entrance lobby with concierge desk in each tower." },
    { title: "Ready infrastructure", body: "Underground utilities, sewage treatment plant, 100% power backup." },
  ],

  units: [
    {
      type: "2 BHK — Type A",
      carpet: "685 sq.ft",
      balcony: "58 sq.ft",
      saleable: "1,040 sq.ft",
      bath: "2 bath",
      facing: "East / North-East",
      price: "₹ 62.5 Lakh*",
      priceValue: 6_250_000,
      plan: "/images/floorplan-2bhk.svg",
      note: "Corner home · living opens to the main balcony",
    },
    {
      type: "3 BHK — Type B",
      carpet: "985 sq.ft",
      balcony: "96 sq.ft",
      saleable: "1,485 sq.ft",
      bath: "3 bath",
      facing: "West / South-West",
      price: "₹ 91.0 Lakh*",
      priceValue: 9_100_000,
      plan: "/images/floorplan-3bhk.svg",
      note: "Through home · separate utility + dry balcony",
    },
  ],

  amenityGroups: [
    {
      group: "Clubhouse & wellness",
      items: [
        "Air-conditioned clubhouse",
        "Swimming pool with deck",
        "Fitness studio",
        "Yoga / multipurpose room",
        "Indoor games lounge",
        "Community hall with pantry",
      ],
    },
    {
      group: "Outdoor & family",
      items: [
        "24 m central landscaped court",
        "Children's play zone",
        "Senior citizens' sit-out",
        "Jogging loop",
        "Reflexology path",
        "Terrace sky garden",
      ],
    },
    {
      group: "Safety & services",
      items: [
        "3-tier security with CCTV",
        "Video door phone in every home",
        "100% DG power backup",
        "2 fire-rated lifts per tower",
        "Sewage treatment plant",
        "Rainwater harvesting",
        "EV charging points",
        "Ibadat khana (prayer room)",
      ],
    },
  ],

  specifications: [
    {
      group: "Structure",
      rows: [
        ["Framing", "Earthquake-resistant RCC framed structure (IS 1893 compliant)"],
        ["Walls", "AAC block masonry, internal & external"],
        ["Floor-to-floor", "3.15 m"],
      ],
    },
    {
      group: "Flooring",
      rows: [
        ["Living, dining & bedrooms", "800 x 800 mm double-charged vitrified tiles"],
        ["Balconies & utility", "Anti-skid ceramic tiles"],
        ["Bathrooms", "Anti-skid ceramic; matching wall tiles to ceiling"],
        ["Lobbies & staircases", "Granite / large-format tiles"],
      ],
    },
    {
      group: "Kitchen",
      rows: [
        ["Platform", "Granite counter with stainless-steel sink"],
        ["Dado", "Designer tiles up to 600 mm above counter"],
        ["Provisions", "Points for hob, chimney, RO, water purifier & fridge"],
        ["Utility", "Separate washing-machine point & dry balcony"],
      ],
    },
    {
      group: "Doors & windows",
      rows: [
        ["Main door", "Engineered veneer door with digital lock provision"],
        ["Internal doors", "Flush doors with laminate finish"],
        ["Windows", "3-track powder-coated aluminium with mosquito mesh"],
        ["Toilet windows", "uPVC with frosted glass"],
      ],
    },
    {
      group: "Electrical",
      rows: [
        ["Wiring", "Concealed FR copper wiring with modular switches"],
        ["Points", "AC points in all bedrooms & living; TV + data in living & master"],
        ["Backup", "DG backup for one light, one fan & one 5A point per room + all common areas"],
        ["Metering", "Individual prepaid meters"],
      ],
    },
    {
      group: "Bathrooms & plumbing",
      rows: [
        ["CP fittings", "Jaquar or equivalent single-lever fittings"],
        ["Sanitaryware", "Wall-hung EWC, granite counter wash basin"],
        ["Water heating", "Geyser point in every bathroom"],
        ["Plumbing", "Concealed CPVC / UPVC lines; hot & cold mixer in all baths"],
      ],
    },
    {
      group: "Finishes & lifts",
      rows: [
        ["Internal walls", "Two coats putty with premium acrylic emulsion"],
        ["External", "Textured weatherproof paint"],
        ["Ceilings", "POP / gypsum cornice in living & dining"],
        ["Lifts", "Two automatic passenger lifts per tower + one stretcher-friendly lift"],
      ],
    },
  ],

  gallery: [
    { src: "/images/exterior-day.jpg", caption: "Tower elevation from the drop-off" },
    { src: "/images/gallery-lobby.jpg", caption: "Double-height air-conditioned lobby" },
    { src: "/images/gallery-living.jpg", caption: "Living & dining — 12 ft wide" },
    { src: "/images/gallery-kitchen.jpg", caption: "Modular kitchen with utility" },
    { src: "/images/gallery-bedroom.jpg", caption: "Master bedroom with balcony" },
    { src: "/images/gallery-clubhouse.jpg", caption: "Clubhouse & pool deck" },
    { src: "/images/gallery-gym.jpg", caption: "Fitness studio" },
    { src: "/images/gallery-terrace.jpg", caption: "Terrace sky garden" },
    { src: "/images/gallery-play.jpg", caption: "Children's play zone" },
    { src: "/images/exterior-dusk.jpg", caption: "Evening view of the central court" },
  ],

  progress: {
    updated: "Updated August 2026",
    overall: 46,
    milestones: [
      { title: "Excavation & raft foundation", state: "Completed", date: "Q1 2026", pct: 100, img: "/images/progress-1.jpg" },
      { title: "RCC superstructure", state: "In progress — 6th slab cast", date: "Q3 2026", pct: 62, img: "/images/progress-2.jpg" },
      { title: "Blockwork & internal plaster", state: "Started on lower floors", date: "Q4 2026", pct: 24, img: "/images/progress-3.jpg" },
      { title: "Facade, MEP & finishing", state: "Not started", date: "2027", pct: 0, img: "/images/progress-4.jpg" },
    ],
  },

  location: {
    map: "/images/map.svg",
    mapsHref: "https://maps.google.com/?q=Tandalja+Vadodara",
    blurb:
      "Tandalja is one of Vadodara's most established residential pockets — fully built infrastructure, wide roads and a genuinely walkable neighbourhood.",
    categories: [
      {
        label: "Schools",
        places: [
          ["Delhi Public School, Vadodara", "1.2 km"],
          ["Navrachana International", "3.5 km"],
          ["Bright Day School", "2.4 km"],
        ],
      },
      {
        label: "Healthcare",
        places: [
          ["Sunrise Multispeciality Hospital", "2.0 km"],
          ["Bankers Heart Institute", "4.1 km"],
          ["Sterling Hospital", "5.0 km"],
        ],
      },
      {
        label: "Daily needs",
        places: [
          ["D-Mart, Tandalja", "2.6 km"],
          ["Tandalja Masjid", "0.8 km"],
          ["Inorbit / Central Mall", "3.4 km"],
        ],
      },
      {
        label: "Connectivity",
        places: [
          ["Sun Pharma Road (30 m)", "At the doorstep"],
          ["Waghodia Road", "3.0 km"],
          ["NH-48 / Expressway", "6.5 km"],
          ["Vadodara Railway Station", "7.0 km"],
        ],
      },
    ],
  },

  emiDefaults: {
    downPaymentPct: 20,
    interestRate: 8.75,
    tenureYears: 20,
    minPrice: 2_000_000,
    maxPrice: 20_000_000,
  },

  paymentPlan: [
    { stage: "On booking", pct: "10%" },
    { stage: "On agreement (within 30 days)", pct: "15%" },
    { stage: "On completion of plinth", pct: "10%" },
    { stage: "Slab-wise during superstructure", pct: "40%" },
    { stage: "On brickwork & plaster", pct: "10%" },
    { stage: "On flooring & finishing", pct: "10%" },
    { stage: "On possession", pct: "5%" },
  ],

  faqs: [
    [
      "Is Yusuf Residency RERA registered?",
      "This page is a design demonstration, so the RERA number shown is illustrative. On a live project the registration number would be printed here and link to the state RERA portal, and all areas quoted would be RERA carpet.",
    ],
    [
      "What is included in the quoted price?",
      "The starting price is indicative and covers the apartment, one covered car park, and proportionate club membership. Stamp duty, registration, GST and statutory deposits are additional.",
    ],
    [
      "Are the carpet areas final?",
      "Carpet areas on the floor plans are the RERA carpet and exclude the utility balcony. Minor tolerance of ±3% at handover is standard and adjusted in the final demand.",
    ],
    [
      "What is the possession timeline?",
      "Planned handover is December 2027, with a construction-linked payment plan so your outflow tracks progress on site.",
    ],
    [
      "Is home-loan financing available?",
      "Yes — the project is intended for approval with major banks and housing-finance companies. Use the EMI calculator above to estimate your monthly outflow, then the sales team can arrange a pre-approval in principle.",
    ],
  ],

  disclaimer:
    "Yusuf Residency and Surti Developer are fictional. This page was built as a design experiment to explore how a modern, mobile-first project page can present a real-estate development. Photographs are representative stock imagery from Unsplash and do not depict an actual project; the floor plans and location map are schematic. Every figure — price, area, RERA number, timeline and distance — is invented for demonstration only.",
};

export type Project = typeof project;
