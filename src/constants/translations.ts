export type LangCode = 'en' | 'us' | 'es' | 'fr' | 'de';

export interface Translations {
  // Header
  header: {
    share: string;
    launchingSoon: string;
    popular: string;
    contactUs: string;
  };
  // Hero
  hero: {
    badge: string;
    h1Line1: string;
    h1Line2: string;
    subHeading: string;
    subHeadingUnderline: string;
    subHeadingRest: string;
    body1: string;
    body2: string;
    launchingSoon: string;
    contactUs: string;
    bullets: string[];
  };
  // Problem section
  problem: {
    label: string;
    heading: string;
    body1: string;
    body2: string;
    punchline: string;
    items: string[];
  };
  // Switch section
  theSwitch: {
    label: string;
    heading: string;
    body: string;
    lines: string[];
    footnote: string;
  };
  // Differentiator section
  differentiator: {
    label: string;
    heading: string;
    body: string;
    footnote: string;
    cards: { title: string; desc: string }[];
  };
  // How it works section
  howItWorks: {
    label: string;
    heading: string;
    steps: { num: string; title: string; desc: string }[];
  };
  // Why switch section
  whySwitch: {
    label: string;
    heading: string;
    subheading: string;
    items: string[];
  };
  // Rewards section
  rewards: {
    badge: string;
    heading: string;
    subheading: string;
    cards: { title: string; desc: string; cta: string }[];
  };
  // Final CTA
  cta: {
    line1: string;
    line2: string;
    line3: string;
    launchingSoon: string;
    contactUs: string;
  };
  // Footer
  footer: {
    copyright: string;
    links: { label: string; href: string }[];
  };
  // Share toast
  shareToast: string;
}

export const TRANSLATIONS: Record<LangCode, Translations> = {
  en: {
    header: {
      share: 'Share',
      launchingSoon: 'Launching Soon',
      popular: 'Popular',
      contactUs: 'Contact Us For Enquiries',
    },
    hero: {
      badge: 'Supercharge Your AI',
      h1Line1: 'Cancel All Your',
      h1Line2: 'AI Subscriptions.',
      subHeading: 'Use Super LLM. Help ',
      subHeadingUnderline: 'Save',
      subHeadingRest: ' Time, Money And The Planet.',
      body1: "Super LLM is the world's first personalised and sustainable all-in-one AI platform - a super place for all your AI.",
      body2: "It's the simplest, fastest, safest, cheapest, and greenest way to use every leading AI Large Language Model, responsibly in one chat.",
      launchingSoon: 'Launching Soon',
      contactUs: 'Contact Us For Enquiries',
      bullets: [
        "One account and subscription, that's personalised to you, and no adverts!",
        'Up to 50% cheaper than multiple subscriptions with Free, Starter, Pro, Team, Enterprise, and Unlimited plans.',
        'Use ChatGPT, Copilot, Gemini, Claude, Perplexity, Grok, DeepSeek, and many more.',
        'Built with enterprise compliance, security, and safety - for businesses and individuals.',
        'Full multimodal capabilities, including text, voice, image, video generation, and auto LLM selection.',
        'Offset your carbon emissions by automatically planting trees every month, and enjoy other Super rewards.',
      ],
    },
    problem: {
      label: 'The Problem',
      heading: 'Your AI setup is broken',
      body1: 'AI is supposed to make life easier. Instead, most people are juggling multiple tools, logins, subscriptions, and bills.',
      body2: 'And almost nobody knows, or sees, the environmental impact behind every prompt.',
      punchline: "This isn't innovation. It's chaos.",
      items: ['Multiple AI Tools', 'Multiple Logins', 'Multiple Subscriptions', 'Multiple Bills'],
    },
    theSwitch: {
      label: 'The Switch',
      heading: 'Cancel them all',
      body: 'Super LLM gives you unified access to every major AI model in one clean interface.',
      lines: ['One Login.', 'One Subscription.', 'One Place To Work, Create, And Think.'],
      footnote: 'No more switching apps. No more subscription overload.',
    },
    differentiator: {
      label: 'The Differentiator',
      heading: 'Now do it responsibly',
      body: 'AI has an environmental cost. Every paid Super LLM subscription contributes to tree-planting programmes - a meaningful, tangible step in the right direction.',
      footnote: 'No extra steps. No complexity. Just responsible AI, built in.',
      cards: [
        { title: 'One Subscription', desc: 'Every major AI model, unified in a single interface.' },
        { title: 'Lower Cost', desc: 'Replace multiple AI subscriptions with one simple plan.' },
        { title: 'Trees Planted', desc: 'Every paid plan contributes to tree-planting programmes.' },
      ],
    },
    howItWorks: {
      label: 'How It Works',
      heading: 'Three simple steps',
      steps: [
        { num: '01', title: 'Sign Up And Personalise', desc: "Create a Super LLM account, import your other AI's memories, history, and personalise your chats in minutes." },
        { num: '02', title: 'Access Every Major AI', desc: 'Switch between ChatGPT, Claude, Gemini, Perplexity and more, all in one chat.' },
        { num: '03', title: 'Use AI Responsibly', desc: 'Your paid plan contributes to tree planting, included automatically.' },
      ],
    },
    whySwitch: {
      label: 'Why Switch',
      heading: 'A Super Place For All Your AI',
      subheading: "Everything you need. Nothing you don't.",
      items: [
        'Replace Multiple AI Subscriptions',
        'Personalise All Your AI Chats Easily',
        'Save Up To 50% Per Month',
        'Always Access The Latest Models',
        'Transparent Token Usage And Sustainability Reporting',
        'Plant Trees To Offset Your Carbon Emissions',
        'Enterprise-Grade Privacy And Security',
      ],
    },
    rewards: {
      badge: 'Rewards',
      heading: 'Get Rewarded For Helping Us',
      subheading: 'Sign up to our generous Refer a Friend, Influencer and Affiliate Programmes and instantly get 15,000 Super tokens free.',
      cards: [
        { title: 'Referral Programme', desc: 'Earn 15,000 Super tokens for every friend who joins.', cta: 'Contact Us' },
        { title: 'Influencers', desc: 'Join our Influencer Programme for exclusive VIP access to Super LLM and unique coupon codes to earn 20% lifetime commission.', cta: 'Contact Us' },
        { title: 'Affiliates', desc: 'Sign up for our generous Affiliate Programme including exclusive access, coupon codes to earn 20% commission on any subscribers who sign up.', cta: 'Contact Us' },
      ],
    },
    cta: {
      line1: 'One Subscription',
      line2: 'Every AI Model',
      line3: 'Your Super Power',
      launchingSoon: 'Launching Soon',
      contactUs: 'Contact Us For Enquiries',
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Super LLM Limited. All rights reserved.`,
      links: [
        { label: 'Terms of use', href: '/terms' },
        { label: 'Privacy policy', href: '/privacy' },
        { label: 'Privacy choices', href: '/privacy-choices' },
        { label: 'Data processing', href: '/data-processing' },
        { label: 'Legal notice', href: '/legal-notice' },
      ],
    },
    shareToast: 'Message copied - paste it when you open your post',
  },

  us: {
    header: {
      share: 'Share',
      launchingSoon: 'Launching Soon',
      popular: 'Popular',
      contactUs: 'Contact Us For Inquiries',
    },
    hero: {
      badge: 'Supercharge Your AI',
      h1Line1: 'Cancel All Your',
      h1Line2: 'AI Subscriptions.',
      subHeading: 'Use Super LLM. Help ',
      subHeadingUnderline: 'Save',
      subHeadingRest: ' Time, Money, And The Planet.',
      body1: "Super LLM is the world's first personalized and sustainable all-in-one AI platform - a super place for all your AI.",
      body2: "It's the simplest, fastest, safest, cheapest, and greenest way to use every leading AI Large Language Model, responsibly in one chat.",
      launchingSoon: 'Launching Soon',
      contactUs: 'Contact Us For Inquiries',
      bullets: [
        "One account and subscription, personalized to you, and no ads!",
        'Up to 50% cheaper than multiple subscriptions with Free, Starter, Pro, Team, Enterprise, and Unlimited plans.',
        'Use ChatGPT, Copilot, Gemini, Claude, Perplexity, Grok, DeepSeek, and many more.',
        'Built with enterprise compliance, security, and safety - for businesses and individuals.',
        'Full multimodal capabilities, including text, voice, image, video generation, and auto LLM selection.',
        'Offset your carbon emissions by automatically planting trees every month, and enjoy other Super rewards.',
      ],
    },
    problem: {
      label: 'The Problem',
      heading: 'Your AI setup is broken',
      body1: 'AI is supposed to make life easier. Instead, most people are juggling multiple tools, logins, subscriptions, and bills.',
      body2: 'And almost nobody knows, or sees, the environmental impact behind every prompt.',
      punchline: "This isn't innovation. It's chaos.",
      items: ['Multiple AI Tools', 'Multiple Logins', 'Multiple Subscriptions', 'Multiple Bills'],
    },
    theSwitch: {
      label: 'The Switch',
      heading: 'Cancel them all',
      body: 'Super LLM gives you unified access to every major AI model in one clean interface.',
      lines: ['One Login.', 'One Subscription.', 'One Place To Work, Create, And Think.'],
      footnote: 'No more switching apps. No more subscription overload.',
    },
    differentiator: {
      label: 'The Differentiator',
      heading: 'Now do it responsibly',
      body: 'AI has an environmental cost. Every paid Super LLM subscription contributes to tree-planting programs - a meaningful, tangible step in the right direction.',
      footnote: 'No extra steps. No complexity. Just responsible AI, built in.',
      cards: [
        { title: 'One Subscription', desc: 'Every major AI model, unified in a single interface.' },
        { title: 'Lower Cost', desc: 'Replace multiple AI subscriptions with one simple plan.' },
        { title: 'Trees Planted', desc: 'Every paid plan contributes to tree-planting programs.' },
      ],
    },
    howItWorks: {
      label: 'How It Works',
      heading: 'Three simple steps',
      steps: [
        { num: '01', title: 'Sign Up And Personalize', desc: "Create a Super LLM account, import your other AI's memories, history, and personalize your chats in minutes." },
        { num: '02', title: 'Access Every Major AI', desc: 'Switch between ChatGPT, Claude, Gemini, Perplexity and more, all in one chat.' },
        { num: '03', title: 'Use AI Responsibly', desc: 'Your paid plan contributes to tree planting, included automatically.' },
      ],
    },
    whySwitch: {
      label: 'Why Switch',
      heading: 'A Super Place For All Your AI',
      subheading: "Everything you need. Nothing you don't.",
      items: [
        'Replace Multiple AI Subscriptions',
        'Personalize All Your AI Chats Easily',
        'Save Up To 50% Per Month',
        'Always Access The Latest Models',
        'Transparent Token Usage And Sustainability Reporting',
        'Plant Trees To Offset Your Carbon Emissions',
        'Enterprise-Grade Privacy And Security',
      ],
    },
    rewards: {
      badge: 'Rewards',
      heading: 'Get Rewarded For Helping Us',
      subheading: 'Sign up to our generous Refer a Friend, Influencer and Affiliate Programs and instantly get 15,000 Super tokens free.',
      cards: [
        { title: 'Referral Program', desc: 'Earn 15,000 Super tokens for every friend who joins.', cta: 'Contact Us' },
        { title: 'Influencers', desc: 'Join our Influencer Program for exclusive VIP access to Super LLM and unique coupon codes to earn 20% lifetime commission.', cta: 'Contact Us' },
        { title: 'Affiliates', desc: 'Sign up for our generous Affiliate Program including exclusive access, coupon codes to earn 20% commission on any subscribers who sign up.', cta: 'Contact Us' },
      ],
    },
    cta: {
      line1: 'One Subscription',
      line2: 'Every AI Model',
      line3: 'Your Super Power',
      launchingSoon: 'Launching Soon',
      contactUs: 'Contact Us For Inquiries',
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Super LLM Limited. All rights reserved.`,
      links: [
        { label: 'Terms of use', href: '/terms' },
        { label: 'Privacy policy', href: '/privacy' },
        { label: 'Privacy choices', href: '/privacy-choices' },
        { label: 'Data processing', href: '/data-processing' },
        { label: 'Legal notice', href: '/legal-notice' },
      ],
    },
    shareToast: 'Message copied - paste it when you open your post',
  },

  es: {
    header: {
      share: 'Compartir',
      launchingSoon: 'Próximamente',
      popular: 'Popular',
      contactUs: 'Contáctanos Para Consultas',
    },
    hero: {
      badge: 'Potencia Tu IA',
      h1Line1: 'Cancela Todas Tus',
      h1Line2: 'Suscripciones De IA.',
      subHeading: 'Usa Super LLM. Ayuda a ',
      subHeadingUnderline: 'Ahorrar',
      subHeadingRest: ' Tiempo, Dinero Y El Planeta.',
      body1: 'Super LLM es la primera plataforma de IA todo-en-uno personalizada y sostenible del mundo - un lugar ideal para toda tu IA.',
      body2: 'Es la forma más simple, rápida, segura, económica y ecológica de usar todos los modelos de IA líderes, de manera responsable.',
      launchingSoon: 'Próximamente',
      contactUs: 'Contáctanos Para Consultas',
      bullets: [
        '¡Una cuenta y suscripción, personalizada para ti, sin publicidad!',
        'Hasta un 50% más barato que múltiples suscripciones con planes Gratis, Inicial, Pro, Equipo, Empresa e Ilimitado.',
        'Usa ChatGPT, Copilot, Gemini, Claude, Perplexity, Grok, DeepSeek y muchos más.',
        'Construido con cumplimiento empresarial, seguridad y protección - para empresas e individuos.',
        'Capacidades multimodales completas, incluyendo generación de texto, voz, imagen y video, y selección automática de LLM.',
        'Compensa tus emisiones de carbono plantando árboles automáticamente cada mes y disfruta de otras recompensas.',
      ],
    },
    problem: {
      label: 'El Problema',
      heading: 'Tu configuración de IA está rota',
      body1: 'Se supone que la IA facilita la vida. En cambio, la mayoría de las personas maneja múltiples herramientas, inicios de sesión, suscripciones y facturas.',
      body2: 'Y casi nadie conoce, ni ve, el impacto ambiental detrás de cada consulta.',
      punchline: 'Esto no es innovación. Es caos.',
      items: ['Múltiples Herramientas De IA', 'Múltiples Inicios De Sesión', 'Múltiples Suscripciones', 'Múltiples Facturas'],
    },
    theSwitch: {
      label: 'El Cambio',
      heading: 'Cancélalas todas',
      body: 'Super LLM te da acceso unificado a todos los principales modelos de IA en una interfaz limpia.',
      lines: ['Un Solo Inicio De Sesión.', 'Una Sola Suscripción.', 'Un Lugar Para Trabajar, Crear Y Pensar.'],
      footnote: 'No más cambiar de apps. No más exceso de suscripciones.',
    },
    differentiator: {
      label: 'La Diferencia',
      heading: 'Ahora hazlo responsablemente',
      body: 'La IA tiene un coste ambiental. Cada suscripción de pago a Super LLM contribuye a programas de plantación de árboles - un paso significativo y tangible en la dirección correcta.',
      footnote: 'Sin pasos extra. Sin complejidad. Solo IA responsable, integrada.',
      cards: [
        { title: 'Una Suscripción', desc: 'Todos los principales modelos de IA, unificados en una sola interfaz.' },
        { title: 'Menor Costo', desc: 'Reemplaza múltiples suscripciones de IA con un plan simple.' },
        { title: 'Árboles Plantados', desc: 'Cada plan de pago contribuye a programas de plantación de árboles.' },
      ],
    },
    howItWorks: {
      label: 'Cómo Funciona',
      heading: 'Tres pasos simples',
      steps: [
        { num: '01', title: 'Regístrate Una Vez', desc: 'Crea una cuenta gratuita de Super LLM en minutos.' },
        { num: '02', title: 'Accede A Toda La IA Principal', desc: 'Cambia entre ChatGPT, Claude, Gemini, Perplexity y más, todo en un solo chat.' },
        { num: '03', title: 'Usa La IA Responsablemente', desc: 'Tu plan de pago contribuye a la plantación de árboles, incluido automáticamente.' },
      ],
    },
    whySwitch: {
      label: 'Por Qué Cambiar',
      heading: 'Un Super Lugar Para Toda Tu IA',
      subheading: 'Todo lo que necesitas. Nada más.',
      items: [
        'Múltiples Suscripciones De IA',
        'Personaliza Todos Tus Chats De IA Fácilmente',
        'Ahorra Hasta Un 50% Al Mes',
        'Accede Siempre A Los Últimos Modelos',
        'Seguimiento Transparente De Uso E Impacto',
        'Planta Árboles Para Compensar Tus Emisiones De Carbono',
        'Privacidad Y Seguridad De Nivel Empresarial',
      ],
    },
    rewards: {
      badge: 'Recompensas',
      heading: 'Gana Recompensas Por Ayudarnos',
      subheading: 'Únete a nuestros generosos programas de Referidos, Influencers y Afiliados y obtén instantáneamente 15,000 tokens Super gratis.',
      cards: [
        { title: 'Programa De Referidos', desc: 'Gana 15,000 tokens Super por cada amigo que se una.', cta: 'Contáctanos' },
        { title: 'Influencers', desc: 'Únete a nuestro Programa de Influencers para acceso VIP exclusivo a Super LLM y códigos de cupón únicos para ganar un 20% de comisión de por vida.', cta: 'Contáctanos' },
        { title: 'Afiliados', desc: 'Regístrate en nuestro generoso Programa de Afiliados que incluye acceso exclusivo, códigos de cupón para ganar un 20% de comisión por los suscriptores que se registren.', cta: 'Contáctanos' },
      ],
    },
    cta: {
      line1: 'Una Suscripción',
      line2: 'Todos Los Modelos De IA',
      line3: 'Tu Superpoder',
      launchingSoon: 'Próximamente',
      contactUs: 'Contáctanos Para Consultas',
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Super LLM Limited. Todos los derechos reservados.`,
      links: [
        { label: 'Términos de uso', href: '/terms' },
        { label: 'Política de privacidad', href: '/privacy' },
        { label: 'Opciones de privacidad', href: '/privacy-choices' },
        { label: 'Procesamiento de datos', href: '/data-processing' },
        { label: 'Aviso legal', href: '/legal-notice' },
      ],
    },
    shareToast: 'Mensaje copiado - pégalo cuando abras tu publicación',
  },

  fr: {
    header: {
      share: 'Partager',
      launchingSoon: 'Bientôt Disponible',
      popular: 'Populaire',
      contactUs: 'Contactez-Nous Pour Des Renseignements',
    },
    hero: {
      badge: 'Boostez Votre IA',
      h1Line1: 'Annulez Tous Vos',
      h1Line2: 'Abonnements IA.',
      subHeading: 'Utilisez Super LLM. Aidez À ',
      subHeadingUnderline: 'Économiser',
      subHeadingRest: ' Du Temps, De L\'Argent Et La Planète.',
      body1: 'Super LLM est la première plateforme IA tout-en-un personnalisée et durable au monde - un endroit idéal pour toute votre IA.',
      body2: 'C\'est la façon la plus simple, rapide, sûre, économique et écologique d\'utiliser tous les modèles IA leaders, de manière responsable.',
      launchingSoon: 'Bientôt Disponible',
      contactUs: 'Contactez-Nous Pour Des Renseignements',
      bullets: [
        'Un compte et un abonnement, personnalisés pour vous, sans publicités !',
        "Jusqu'à 50% moins cher que plusieurs abonnements avec des plans Gratuit, Démarrage, Pro, Équipe, Entreprise et Illimité.",
        'Utilisez ChatGPT, Copilot, Gemini, Claude, Perplexity, Grok, DeepSeek et bien plus.',
        'Conçu avec conformité entreprise, sécurité et protection - pour les entreprises et les particuliers.',
        'Capacités multimodales complètes, incluant la génération de texte, de voix, d\'images et de vidéos, et la sélection automatique de LLM.',
        'Compensez vos émissions de carbone en plantant automatiquement des arbres chaque mois et profitez d\'autres super récompenses.',
      ],
    },
    problem: {
      label: 'Le Problème',
      heading: 'Votre configuration IA est cassée',
      body1: "L'IA est censée faciliter la vie. Au lieu de cela, la plupart des gens jonglent avec plusieurs outils, connexions, abonnements et factures.",
      body2: "Et presque personne ne connaît, ni ne voit, l'impact environnemental derrière chaque requête.",
      punchline: "Ce n'est pas de l'innovation. C'est le chaos.",
      items: ['Plusieurs Outils IA', 'Plusieurs Connexions', 'Plusieurs Abonnements', 'Plusieurs Factures'],
    },
    theSwitch: {
      label: 'Le Changement',
      heading: 'Annulez-les tous',
      body: 'Super LLM vous donne un accès unifié à tous les principaux modèles IA dans une interface épurée.',
      lines: ['Une Seule Connexion.', 'Un Seul Abonnement.', 'Un Endroit Pour Travailler, Créer Et Penser.'],
      footnote: "Fini de changer d'applications. Fini la surcharge d'abonnements.",
    },
    differentiator: {
      label: 'La Différence',
      heading: 'Faites-le maintenant responsablement',
      body: "L'IA a un coût environnemental. Chaque abonnement payant Super LLM contribue à des programmes de plantation d'arbres - une étape significative et tangible dans la bonne direction.",
      footnote: "Pas d'étapes supplémentaires. Pas de complexité. Juste une IA responsable, intégrée.",
      cards: [
        { title: 'Un Abonnement', desc: 'Tous les principaux modèles IA, unifiés dans une seule interface.' },
        { title: 'Coût Réduit', desc: 'Remplacez plusieurs abonnements IA par un plan simple.' },
        { title: 'Arbres Plantés', desc: 'Chaque plan payant contribue à des programmes de plantation d\'arbres.' },
      ],
    },
    howItWorks: {
      label: 'Comment Ça Marche',
      heading: 'Trois étapes simples',
      steps: [
        { num: '01', title: 'Inscrivez-Vous Une Fois', desc: 'Créez un compte Super LLM gratuit en quelques minutes.' },
        { num: '02', title: 'Accédez À Toute L\'IA Principale', desc: 'Passez de ChatGPT à Claude, Gemini, Perplexity et plus, tout dans un seul chat.' },
        { num: '03', title: 'Utilisez L\'IA De Manière Responsable', desc: 'Votre plan payant contribue à la plantation d\'arbres, inclus automatiquement.' },
      ],
    },
    whySwitch: {
      label: 'Pourquoi Changer',
      heading: 'Un Super Endroit Pour Toute Votre IA',
      subheading: 'Tout ce dont vous avez besoin. Rien de superflu.',
      items: [
        'Plusieurs Abonnements IA',
        'Personnalisez Tous Vos Chats IA Facilement',
        'Économisez Jusqu\'À 50% Par Mois',
        'Accédez Toujours Aux Derniers Modèles',
        'Suivi Transparent De L\'Utilisation Et De L\'Impact',
        'Plantez Des Arbres Pour Compenser Vos Émissions De Carbone',
        'Confidentialité Et Sécurité De Niveau Entreprise',
      ],
    },
    rewards: {
      badge: 'Récompenses',
      heading: 'Soyez Récompensé Pour Nous Aider',
      subheading: 'Inscrivez-vous à nos généreux programmes Parrainage, Influenceurs et Affiliés et obtenez instantanément 15 000 tokens Super gratuits.',
      cards: [
        { title: 'Programme De Parrainage', desc: 'Gagnez 15 000 tokens Super pour chaque ami qui rejoint.', cta: 'Nous Contacter' },
        { title: 'Influenceurs', desc: 'Rejoignez notre Programme Influenceurs pour un accès VIP exclusif à Super LLM et des codes de réduction uniques pour gagner 20% de commission à vie.', cta: 'Nous Contacter' },
        { title: 'Affiliés', desc: "Inscrivez-vous à notre généreux Programme d'Affiliés comprenant un accès exclusif, des codes de réduction pour gagner 20% de commission sur les abonnés qui s'inscrivent.", cta: 'Nous Contacter' },
      ],
    },
    cta: {
      line1: 'Un Abonnement',
      line2: 'Tous Les Modèles IA',
      line3: 'Votre Super Pouvoir',
      launchingSoon: 'Bientôt Disponible',
      contactUs: 'Contactez-Nous Pour Des Renseignements',
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Super LLM Limited. Tous droits réservés.`,
      links: [
        { label: "Conditions d'utilisation", href: '/terms' },
        { label: 'Politique de confidentialité', href: '/privacy' },
        { label: 'Choix de confidentialité', href: '/privacy-choices' },
        { label: 'Traitement des données', href: '/data-processing' },
        { label: 'Mentions légales', href: '/legal-notice' },
      ],
    },
    shareToast: 'Message copié - collez-le quand vous ouvrez votre publication',
  },

  de: {
    header: {
      share: 'Teilen',
      launchingSoon: 'Demnächst Verfügbar',
      popular: 'Beliebt',
      contactUs: 'Kontaktieren Sie Uns Für Anfragen',
    },
    hero: {
      badge: 'Optimieren Sie Ihre KI',
      h1Line1: 'Kündigen Sie Alle Ihre',
      h1Line2: 'KI-Abonnements.',
      subHeading: 'Nutzen Sie Super LLM. Helfen Sie ',
      subHeadingUnderline: 'Sparen',
      subHeadingRest: ' Sie Zeit, Geld Und Den Planeten.',
      body1: 'Super LLM ist die weltweit erste personalisierte und nachhaltige All-in-One-KI-Plattform - ein super Ort für Ihre gesamte KI.',
      body2: 'Es ist der einfachste, schnellste, sicherste, günstigste und grünste Weg, alle führenden KI-Großsprachmodelle verantwortungsvoll zu nutzen.',
      launchingSoon: 'Demnächst Verfügbar',
      contactUs: 'Kontaktieren Sie Uns Für Anfragen',
      bullets: [
        'Ein Konto und Abonnement, personalisiert für Sie, ohne Werbung!',
        'Bis zu 50% günstiger als mehrere Abonnements mit Kostenlos-, Starter-, Pro-, Team-, Unternehmens- und Unbegrenzt-Plänen.',
        'Nutzen Sie ChatGPT, Copilot, Gemini, Claude, Perplexity, Grok, DeepSeek und viele mehr.',
        'Mit Unternehmens-Compliance, Sicherheit und Schutz entwickelt - für Unternehmen und Einzelpersonen.',
        'Vollständige multimodale Fähigkeiten, einschließlich Text-, Sprach-, Bild- und Videogenerierung sowie automatische LLM-Auswahl.',
        'Kompensieren Sie Ihre Kohlenstoffemissionen durch automatisches Baumpflanzen jeden Monat und genießen Sie andere super Belohnungen.',
      ],
    },
    problem: {
      label: 'Das Problem',
      heading: 'Ihr KI-Setup ist kaputt',
      body1: 'KI soll das Leben einfacher machen. Stattdessen jonglieren die meisten Menschen mit mehreren Tools, Logins, Abonnements und Rechnungen.',
      body2: 'Und fast niemand kennt oder sieht die Umweltauswirkungen hinter jeder Anfrage.',
      punchline: 'Das ist keine Innovation. Das ist Chaos.',
      items: ['Mehrere KI-Tools', 'Mehrere Logins', 'Mehrere Abonnements', 'Mehrere Rechnungen'],
    },
    theSwitch: {
      label: 'Der Wechsel',
      heading: 'Kündigen Sie alle',
      body: 'Super LLM bietet Ihnen einheitlichen Zugriff auf alle wichtigen KI-Modelle in einer übersichtlichen Oberfläche.',
      lines: ['Ein Login.', 'Ein Abonnement.', 'Ein Ort Zum Arbeiten, Erstellen Und Denken.'],
      footnote: 'Kein App-Wechsel mehr. Keine Abonnement-Überlastung mehr.',
    },
    differentiator: {
      label: 'Das Unterscheidungsmerkmal',
      heading: 'Jetzt verantwortungsvoll handeln',
      body: 'KI hat Umweltkosten. Jedes bezahlte Super LLM-Abonnement trägt zu Baumpflanzprogrammen bei - ein bedeutungsvoller, greifbarer Schritt in die richtige Richtung.',
      footnote: 'Keine zusätzlichen Schritte. Keine Komplexität. Nur verantwortungsvolle KI, integriert.',
      cards: [
        { title: 'Ein Abonnement', desc: 'Alle wichtigen KI-Modelle, vereint in einer einzigen Oberfläche.' },
        { title: 'Niedrigere Kosten', desc: 'Ersetzen Sie mehrere KI-Abonnements durch einen einfachen Plan.' },
        { title: 'Gepflanzte Bäume', desc: 'Jeder bezahlte Plan trägt zu Baumpflanzprogrammen bei.' },
      ],
    },
    howItWorks: {
      label: 'Wie Es Funktioniert',
      heading: 'Drei einfache Schritte',
      steps: [
        { num: '01', title: 'Einmal Registrieren', desc: 'Erstellen Sie in wenigen Minuten ein kostenloses Super LLM-Konto.' },
        { num: '02', title: 'Zugriff Auf Alle Wichtigen KIs', desc: 'Wechseln Sie zwischen ChatGPT, Claude, Gemini, Perplexity und mehr, alles in einem Chat.' },
        { num: '03', title: 'KI Verantwortungsvoll Nutzen', desc: 'Ihr bezahlter Plan trägt automatisch zum Baumpflanzen bei.' },
      ],
    },
    whySwitch: {
      label: 'Warum Wechseln',
      heading: 'Ein Super Ort Für Ihre Gesamte KI',
      subheading: 'Alles was Sie brauchen. Nichts was Sie nicht brauchen.',
      items: [
        'Mehrere KI-Abonnements',
        'Alle KI-Chats Einfach Personalisieren',
        'Bis Zu 50% Pro Monat Sparen',
        'Immer Auf Die Neuesten Modelle Zugreifen',
        'Transparentes Nutzungs- Und Impact-Tracking',
        'Bäume Pflanzen Zum Ausgleich Ihrer CO₂-Emissionen',
        'Datenschutz Und Sicherheit Auf Unternehmensebene',
      ],
    },
    rewards: {
      badge: 'Belohnungen',
      heading: 'Werden Sie Für Ihre Hilfe Belohnt',
      subheading: 'Melden Sie sich für unsere großzügigen Empfehlungs-, Influencer- und Partnerprogramme an und erhalten Sie sofort 15.000 Super-Token kostenlos.',
      cards: [
        { title: 'Empfehlungsprogramm', desc: 'Verdienen Sie 15.000 Super-Token für jeden Freund, der beitritt.', cta: 'Kontaktieren Sie Uns' },
        { title: 'Influencer', desc: 'Treten Sie unserem Influencer-Programm für exklusiven VIP-Zugang zu Super LLM und einzigartige Gutscheincodes bei, um 20% lebenslange Provision zu verdienen.', cta: 'Kontaktieren Sie Uns' },
        { title: 'Partner', desc: 'Melden Sie sich für unser großzügiges Partnerprogramm an, einschließlich exklusivem Zugang und Gutscheincodes, um 20% Provision für angemeldete Abonnenten zu verdienen.', cta: 'Kontaktieren Sie Uns' },
      ],
    },
    cta: {
      line1: 'Ein Abonnement',
      line2: 'Alle KI-Modelle',
      line3: 'Ihre Superkraft',
      launchingSoon: 'Demnächst Verfügbar',
      contactUs: 'Kontaktieren Sie Uns Für Anfragen',
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Super LLM Limited. Alle Rechte vorbehalten.`,
      links: [
        { label: 'Nutzungsbedingungen', href: '/terms' },
        { label: 'Datenschutzerklärung', href: '/privacy' },
        { label: 'Datenschutzoptionen', href: '/privacy-choices' },
        { label: 'Datenverarbeitung', href: '/data-processing' },
        { label: 'Impressum', href: '/legal-notice' },
      ],
    },
    shareToast: 'Nachricht kopiert - fügen Sie sie ein, wenn Sie Ihren Beitrag öffnen',
  },
};