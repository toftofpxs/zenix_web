export const content = {
  navbar: {
    logo: 'Zenix Web',
    navLinks: [
      { label: 'Services', href: '#services' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Processus', href: '#process' },
      { label: 'Contact', href: '#contact' },
    ],
    cta: 'Devis gratuit',
  },

  hero: {
    tag: '',
    title: [
      'Des sites web qui',
      'transforment les',
      'visiteurs en clients.',
    ],
    subtitle: 'Rapide. Propre. Conçu pour convertir.',
    cta: 'Démarrer un projet →',
    highlightWord: 'transforment',
  },

  stats: [
    { number: '120+', label: 'sites livrés' },
    { number: '50%', label: 'conversion moyenne' },
    { number: '2.8s', label: 'charge moyenne' },
  ],

  services: {
    title: 'Ce que nous faisons',
    subtitle: 'Solutions pensées pour les commerces locaux et PME.',
    items: [
      {
        number: '01',
        title: 'Sites ultrarapides',
        description: 'Performance critique pour le SEO et l\'expérience utilisateur.',
      },
      {
        number: '02',
        title: 'SEO intégré',
        description: 'Structure technique et contenu optimisés dès le départ.',
      },
      {
        number: '03',
        title: 'Mobile-first',
        description: '60% des visites depuis mobile : nous optimisons pour ça.',
      },
      {
        number: '04',
        title: 'Conversion-focused',
        description: 'Chaque élément conçu pour transformer les visiteurs en clients.',
      },
      {
        number: '05',
        title: 'Analytics & Suivi',
        description: 'Tableaux de bord clairs pour suivre ce qui marche vraiment.',
      },
      {
        number: '06',
        title: 'Support réactif',
        description: 'Disponible pour les ajustements et les mises à jour.',
      },
    ],
  },

  portfolio: {
    title: 'Résultats réels',
    subtitle: 'Des sites qui travaillent pour vous.',
    projects: [
      {
        category: 'Garage automobile',
        name: 'AutoPro Services',
        result: '+35% de RDV en 3 mois',
      },
      {
        category: 'Salon de coiffure',
        name: 'OceéLis Coiffure',
        result: '+50% prises RDV en ligne',
      },
      {
        category: 'Restaurant',
        name: 'Le Petit Bistro',
        result: '+200 commandes/mois',
      },
      {
        category: 'E-commerce',
        name: 'TechGear Shop',
        result: 'AOV +28% en 6 mois',
      },
      {
        category: 'Services B2B',
        name: 'Consult Pro',
        result: '+45 leads qualifiés/mois',
      },
      {
        category: 'Fitness',
        name: 'BodyFit Studio',
        result: '+60 adhésions annuelles',
      },
    ],
  },

  process: {
    title: 'De zéro à live en 3–4 semaines',
    steps: [
      {
        number: '01',
        title: 'Audit & Stratégie',
        description: 'On comprend votre métier, vos clients, vos objectifs de conversion.',
      },
      {
        number: '02',
        title: 'Design & Développement',
        description: 'Création du site et intégration de la conversion dans chaque pixel.',
      },
      {
        number: '03',
        title: 'Test & Lancement',
        description: 'Tests de performance, SEO, responsive. Puis déploiement en live.',
      },
    ],
  },

  contact: {
    title: 'Parlons de votre projet.',
    subtitle: 'On vous répond en moins de 24h.',
    form: {
      fields: [
        { name: 'name', label: 'Votre nom', type: 'text', required: true },
        { name: 'email', label: 'Email', type: 'email', required: true },
        { name: 'company', label: 'Entreprise', type: 'text', required: true },
        { name: 'phone', label: 'Téléphone', type: 'tel', required: false },
        { name: 'message', label: 'Votre projet', type: 'textarea', required: true },
      ],
    },
    contactInfo: {
      email: 'hello@zenixweb.com',
      phone: '+33 1 23 45 67 89',
      location: 'Paris, France',
    },
  },

  footer: {
    logo: 'Zenix Web',
    tagline: 'Votre présence web, optimisée pour convertir.',
    links: [
      { label: 'Services', href: '#services' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Contact', href: '#contact' },
    ],
    copyright: '© 2024 Zenix Web. Tous droits réservés.',
  },
}
