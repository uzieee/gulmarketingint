/** All display content — static / mock; no API. */
export const brand = {
  name: 'Gulf Marketing International',
  shortName: 'GMI',
  tagline: 'Precision diagnostics. Next-era laboratory intelligence.',
  description:
    'Premium clinical instruments, consumables, and support for modern labs — presented as a fully static showcase (no backend required).',
}

export const navLinks = [
  { label: 'Signal', href: '#signal' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Catalog', href: '#catalog' },
  { label: 'Proof', href: '#proof' },
  { label: 'Crew', href: '#crew' },
  { label: 'Contact', href: '#contact' },
]

export const heroSlides = [
  {
    id: 'chemistry',
    eyebrow: 'Throughput · Accuracy · Uptime',
    title: 'Clinical chemistry',
    subtitle: 'Automated analyzers tuned for relentless daily volume.',
    description:
      'Mock catalog positioning: multi-channel optics, QC automation, and LIS-ready workflows — all copy for display only.',
    cta: 'Explore chemistry',
    accent: 'from-cyan-400/90 to-teal-500/80',
    image: '/images/gmi/chemistry_analyzer.png',
    bg: '/images/gmi/lab_background.png',
  },
  {
    id: 'hematology',
    eyebrow: 'CBC · Morphology · Confidence',
    title: 'Hematology systems',
    subtitle: 'Flagging intelligence with a calm, clinical UI metaphor.',
    description:
      'Sample narrative for hematology lines: 5-part differentials, body-fluid modes, and remote service telemetry (illustrative).',
    cta: 'View hematology',
    accent: 'from-fuchsia-400/90 to-violet-600/80',
    image: '/images/gmi/hematology_analyzer.png',
    bg: '/images/gmi/lab_background.png',
  },
  {
    id: 'microbiology',
    eyebrow: 'Culture · ID · AST',
    title: 'Microbiology stack',
    subtitle: 'From incubation timelines to digital traceability.',
    description:
      'Representative microbiology story: modular incubation, rapid ID panels, and audit-friendly logs — static marketing copy.',
    cta: 'See microbiology',
    accent: 'from-sky-400/90 to-indigo-600/80',
    image: '/images/gmi/microbiology_equip.png',
    bg: '/images/gmi/lab_background.png',
  },
]

export const stats = [
  { value: '48+', label: 'Lab partners (sample)', sub: 'Regional footprint' },
  { value: '99.2%', label: 'Uptime story', sub: 'Service SLA narrative' },
  { value: '120ms', label: 'QC sync (mock)', sub: 'Illustrative latency' },
  { value: '24/7', label: 'Support window', sub: 'As stated on materials' },
]

export const solutions = [
  {
    title: 'Clinical microbiology',
    description: 'Culture-ready workflows, traceability, and premium consumable pairings.',
    image: '/images/gmi/microbiology_equip.png',
    href: '#catalog',
    gradient: 'from-sky-500/30 via-indigo-500/20 to-transparent',
    chip: 'BSL-aware UX',
  },
  {
    title: 'Hematology',
    description: 'High-resolution scattergrams and calm operator ergonomics.',
    image: '/images/gmi/hematology_analyzer.png',
    href: '#catalog',
    gradient: 'from-fuchsia-500/30 via-violet-500/20 to-transparent',
    chip: '5-part ready',
  },
  {
    title: 'Clinical chemistry',
    description: 'Throughput-first routing with predictive maintenance storytelling.',
    image: '/images/gmi/chemistry_analyzer.png',
    href: '#catalog',
    gradient: 'from-cyan-500/30 via-teal-500/20 to-transparent',
    chip: 'LIS-native',
  },
]

export const catalogItems = [
  {
    name: 'Chemistry analyzer — Series X',
    sku: 'GMI-CH-900',
    price: '$28,400',
    note: 'Display price · not a live quote',
    badge: 'Flagship',
    img: '/images/gmi/chemistry_analyzer.png',
  },
  {
    name: 'Hematology workstation — Nova',
    sku: 'GMI-HM-204',
    price: '$22,900',
    note: 'Financing story available',
    badge: 'Popular',
    img: '/images/gmi/hematology_analyzer.png',
  },
  {
    name: 'Microbiology module — Prism',
    sku: 'GMI-MB-118',
    price: '$19,200',
    note: 'Bundle-friendly',
    badge: 'Modular',
    img: '/images/gmi/microbiology_equip.png',
  },
  {
    name: 'Consumables — Prime pack',
    sku: 'GMI-CV-440',
    price: '$1,240',
    note: 'Mock kit pricing',
    badge: 'Restock',
    img: '/images/gmi/p2.png',
  },
]

export const milestones = [
  { year: '2016', title: 'Regional footprint', text: 'Expanded service nodes across key cities (illustrative timeline).' },
  { year: '2019', title: 'LIS harmonization', text: 'Unified adapter story for major LIS vendors — copy only.' },
  { year: '2022', title: 'Predictive care', text: 'Telemetry + SLA dashboard narrative for enterprise clients.' },
  { year: '2026', title: 'Neon era site', text: 'This static React experience — zero backend, maximum clarity.' },
]

export const testimonials = [
  {
    quote:
      'We treat this as a design reference: crisp hierarchy, fearless typography, and lab-grade credibility without clutter.',
    name: 'Dr. Amina Rahman',
    role: 'Lab Director · sample institution',
    glow: 'from-cyan-500/20 to-transparent',
  },
  {
    quote:
      'The mock metrics and neon structure sell the future without pretending to be a live ERP. That honesty reads premium.',
    name: 'Omar Siddiqui',
    role: 'Procurement lead · sample hospital group',
    glow: 'from-violet-500/20 to-transparent',
  },
  {
    quote:
      'Finally a vendor landing that feels like 2030 — still grounded in real addresses, phones, and humans.',
    name: 'Leila Haddad',
    role: 'COO · sample diagnostics chain',
    glow: 'from-fuchsia-500/20 to-transparent',
  },
]

export const teamMembers = [
  {
    name: 'Rana Muhammad Shafiq',
    role: 'Chief Executive Officer',
    image: '/images/gmi/shafiq.jpg',
    social: { linkedin: '#', twitter: '#', mail: 'mailto:shafiq@gulfmarketingint.com' },
  },
  {
    name: 'Malik Asad Zaman',
    role: 'Country Manager',
    image: '/images/gmi/asad.jpg',
    social: { linkedin: '#', twitter: '#', mail: 'mailto:asad@gulfmarketingint.com' },
  },
  {
    name: 'Ali Raza',
    role: 'IT Manager',
    image: '/images/gmi/ali.png',
    social: { linkedin: '#', twitter: '#', mail: 'mailto:ali@gulfmarketingint.com' },
  },
]

export const contact = {
  addressLines: [
    'Office # 11 B2 Satellite Town, Abdulah Jan Masjid Road,',
    'Near Kali Tanki Saidpur Road, Rawalpindi, Pakistan',
  ],
  phones: ['+92-51-4426080', '+92-51-4426587'],
  emails: ['Gmi786@yahoo.com', 'Gmi786@gmail.com'],
}

export const trustBadges = [
  { title: 'Encrypted handoffs', body: 'TLS-first narrative for spec sheets & quotes.' },
  { title: 'Field logistics', body: 'White-glove install storytelling — static site.' },
  { title: 'Verification', body: 'Serial-tracked devices in mock dataset.' },
]
