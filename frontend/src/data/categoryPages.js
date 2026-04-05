/** Static copy for dedicated category routes (Vercel-safe, no API). */

export const categorySlugs = ['clinical-microbiology', 'hematology', 'chemistry']

export const categoryPages = {
  'clinical-microbiology': {
    title: 'Clinical Microbiology',
    shortTitle: 'Microbiology',
    heroImage: '/images/gmi/microbiology_equip.png',
    intro:
      'Clinical microbiology is where diagnosis meets traceability: from specimen intake to incubation, identification, and antimicrobial reporting. Gulf Marketing International positions laboratories with dependable workflows, quality consumables, and instrumentation suited to routine culture and rapid testing pathways.',
    highlights: [
      'Culture-based diagnostics with clear chain-of-custody narratives for busy labs',
      'Modular growth and incubation storylines that scale from benchtop to higher throughput',
      'Consumables and media positioning aligned to QC and accreditation language',
    ],
    capabilities: [
      {
        heading: 'Specimen-to-result mindset',
        body: 'We describe pathways for blood culture, sterile site workups, and respiratory panels in ways procurement and lab leadership can compare side by side—without locking you into a proprietary stack.',
      },
      {
        heading: 'Identification & AST storytelling',
        body: 'Pages like this are informational: final panel menus, AST cards, and LIS mapping are confirmed with your team. Use the contact section to request a tailored equipment list.',
      },
      {
        heading: 'Biosafety-aware layouts',
        body: 'Workflow copy references BSL-conscious spacing, waste segregation, and handoff points so your facility plan and marketing site stay aligned.',
      },
    ],
    applications: [
      'Hospital core labs and satellite draw sites',
      'Reference labs supporting outpatient networks',
      'Research-adjacent culture rooms needing audit-friendly documentation',
    ],
    deliverables: [
      'Comparative one-pagers (anonymized) for shortlisted systems',
      'Implementation checklist: power, HVAC, water, and service access',
      'Training narrative: operator, maintenance, and escalation contacts',
    ],
    faq: [
      {
        q: 'Is pricing shown on this site?',
        a: 'No. This is a static marketing site. Quotes depend on configuration, warranty, and logistics. Email or call us and we will respond with next steps.',
      },
      {
        q: 'Do you integrate with our LIS?',
        a: 'Integration is project-specific. Share your LIS vendor and version; we document the handoff path in proposals.',
      },
    ],
  },
  hematology: {
    title: 'Hematology',
    shortTitle: 'Hematology',
    heroImage: '/images/gmi/hematology_analyzer.png',
    intro:
      'Hematology anchors daily outpatient and inpatient decisions. CBC with differential, body-fluid analysis, and morphology support all depend on analyzers that are stable, serviceable, and easy for technologists to trust shift after shift. This page summarizes how GMI frames hematology offerings for modern Pakistani labs and regional partners.',
    highlights: [
      '5-part differential and body-fluid narratives for mixed patient volumes',
      'QC-friendly operations: calibrators, controls, and exception handling',
      'Service posture: uptime language, parts strategy, and escalation paths',
    ],
    capabilities: [
      {
        heading: 'Throughput planning',
        body: 'We help you translate peak morning loads, ED surges, and outpatient curves into a realistic analyzer class—without overselling sensitivity you do not need.',
      },
      {
        heading: 'Morphology and reflex',
        body: 'Where smear review and digital morphology fit in the pathway is documented so clinicians and lab directors share the same expectations.',
      },
      {
        heading: 'Reagents & logistics',
        body: 'Shelf life, cold chain, and batch tracking are part of serious hematology operations. Proposal-stage documents call these out explicitly.',
      },
    ],
    applications: [
      'Multi-site health systems standardizing CBC reporting',
      'Standalone diagnostic centers competing on turnaround time',
      'Maternity and pediatric programs with specific reference intervals',
    ],
    deliverables: [
      'Workload worksheet (specimen mix, peaks, and redundancy)',
      'Service SLA outline and spare-parts philosophy',
      'On-site or remote training plan sketch',
    ],
    faq: [
      {
        q: 'Can we see a demo?',
        a: 'Yes. Demos are scheduled with serious inquiries. Use the contact details in the footer to reach the team.',
      },
      {
        q: 'Do you support legacy lines?',
        a: 'Support depends on manufacturer policy and parts availability. Tell us the model and serial range; we will be direct about feasibility.',
      },
    ],
  },
  chemistry: {
    title: 'Clinical Chemistry',
    shortTitle: 'Chemistry',
    heroImage: '/images/gmi/chemistry_analyzer.png',
    intro:
      'Clinical chemistry is the high-volume engine of the laboratory: electrolytes, enzymes, proteins, and therapeutic drug monitoring flowing through a single backbone. GMI frames chemistry investments around reliability, reagent economics, calibration discipline, and the quiet heroics of middleware that keeps techs out of firefighting mode.',
    highlights: [
      'High-throughput and mid-volume analyzer storylines',
      'ISE, photometry, and immunoassay integration where applicable',
      'Water quality, preventive maintenance, and consumables cadence',
    ],
    capabilities: [
      {
        heading: 'Menu and medical necessity',
        body: 'We map test menus to your payer and clinical mix so you do not pay for panels that sit idle.',
      },
      {
        heading: 'QC and peer programs',
        body: 'Westgard-style thinking, lot changes, and external QA participation are described in implementation playbooks.',
      },
      {
        heading: 'Reflex and auto-verification',
        body: 'Where rules engines help, we document guardrails so medical directors remain comfortable with automation.',
      },
    ],
    applications: [
      'Core labs feeding surgery, ICU, and emergency pathways',
      'Polyclinics consolidating send-outs',
      'Occupational health and corporate screening programs',
    ],
    deliverables: [
      'Utility and infrastructure checklist (electrical phases, drainage, UPS)',
      'Reagent contract structure options (all-in vs. per-test vs. hybrid)',
      'Go-live cutover plan with parallel run guidance',
    ],
    faq: [
      {
        q: 'What about calibration traceability?',
        a: 'We provide manufacturer-aligned documentation paths. Your accreditation body may require additional evidence—we help you assemble that packet during onboarding.',
      },
      {
        q: 'Is middleware included?',
        a: 'Sometimes. It depends on the line you select. We spell out what ships standard vs. optional in every quote.',
      },
    ],
  },
}
