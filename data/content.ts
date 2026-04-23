export type NavItem = {
  label: string
  href: string
}

export type ServiceItem = {
  number: string
  title: string
  description: string
}

export type PortfolioSlide = {
  id: string
  outlineWord: string
  title: string
  category: string
  summary: string
  badge: string
}

export type ProcessStep = {
  number: string
  title: string
  tag: string
  description: string
}

export const content = {
  navbar: {
    links: [
      { label: 'Services', href: '#services' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Processus', href: '#process' },
      { label: 'Contact', href: '#contact' },
    ] satisfies NavItem[],
    cta: 'Devis gratuit',
  },
  hero: {
    tag: 'studio numerique / paris',
    title: ['Nous creons des', 'experiences web', 'qui performent.'],
    primaryCta: 'Lancer un projet',
    secondaryCta: 'Voir les realisations',
    circularText: 'zenix studio . design . seo . performance .',
  },
  ticker: [
    'Design',
    'SEO',
    'Performance',
    'Branding',
    'No-code',
    'UX Strategy',
    'Motion',
    'Development',
  ],
  services: {
    number: '01',
    title: 'Services',
    badge: '6+',
    items: [
      {
        number: '01',
        title: 'Direction artistique',
        description: 'Systeme visuel premium, interfaces editoriales et identite digitale coherente.',
      },
      {
        number: '02',
        title: 'UX / UI design',
        description: 'Wireframes, prototypes et parcours optimises pour une experience fluide.',
      },
      {
        number: '03',
        title: 'Developpement Next.js',
        description: 'Architecture moderne, code type-safe et maintenance simplifiee.',
      },
      {
        number: '04',
        title: 'SEO technique',
        description: 'Fondations performantes pour accelerer indexation, vitesse et visibilite.',
      },
      {
        number: '05',
        title: 'Optimisation conversion',
        description: 'Design systematique des parcours pour generer plus de demandes qualifiees.',
      },
    ] satisfies ServiceItem[],
  },
  portfolio: {
    title: 'Portfolio',
    subtitle: 'Des produits web qui melangent esthetique, vitesse et impact business.',
    slides: [
      {
        id: '01',
        outlineWord: 'AURA',
        title: 'Aura Atelier',
        category: 'E-commerce premium',
        summary: 'Refonte complete, tunnel simplifie et score Lighthouse > 95.',
        badge: 'Design + Build',
      },
      {
        id: '02',
        outlineWord: 'NOVA',
        title: 'Nova Finance',
        category: 'SaaS B2B',
        summary: 'Narration motion, sections modulaires et onboarding produit clarifie.',
        badge: 'UX + Motion',
      },
      {
        id: '03',
        outlineWord: 'VERT',
        title: 'Vert Habitat',
        category: 'Immobilier',
        summary: 'SEO local renforce, parcours lead capture et pages ultra rapides.',
        badge: 'SEO + Performance',
      },
      {
        id: '04',
        outlineWord: 'ORBE',
        title: 'Orbe Consulting',
        category: 'Cabinet conseil',
        summary: 'Image de marque modernisee avec systeme editorial multilingue.',
        badge: 'Brand + CMS',
      },
      {
        id: '05',
        outlineWord: 'WAVE',
        title: 'Wave Studio',
        category: 'Agence creative',
        summary: 'Landing immersive, interactions drag et storytelling vertical.',
        badge: 'Concept + Dev',
      },
    ] satisfies PortfolioSlide[],
  },
  process: {
    title: 'Processus',
    subtitle: 'Une methode claire, de la strategie au lancement.',
    steps: [
      {
        number: '01',
        title: 'Cadrage',
        tag: 'strategie',
        description: 'Objectifs, audience, benchmarks et architecture de contenu.',
      },
      {
        number: '02',
        title: 'Conception',
        tag: 'design',
        description: 'Direction visuelle, prototypage interactif et validation rapide.',
      },
      {
        number: '03',
        title: 'Production',
        tag: 'developpement',
        description: 'Build Next.js, integration motion et optimisation detaillee.',
      },
      {
        number: '04',
        title: 'Lancement',
        tag: 'go-live',
        description: 'Recette finale, analytics et suivi des performances.',
      },
    ] satisfies ProcessStep[],
  },
  contact: {
    title: 'Parlons de votre prochain site.',
    email: 'hello@zenixweb.com',
    availability: 'Disponible pour projets Q2',
    form: {
      budget: ['< 5k', '5k - 15k', '15k - 30k', '30k+'],
      timeline: ['Urgent', '1 mois', '2-3 mois', 'Flexible'],
    },
  },
  footer: {
    copyright: '© 2026 Zenix Studio. Tous droits reserves.',
    links: [
      { label: 'Services', href: '#services' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Contact', href: '#contact' },
    ] satisfies NavItem[],
  },
} as const
