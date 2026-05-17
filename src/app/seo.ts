import type { Metadata, MetadataRoute } from 'next'

export const siteUrl = 'https://khagatara.vercel.app'

export const topicRoutes = {
  numerology: {
    priority: 0.9,
    routes: {
      en: '/en/free-numerology-reading',
      es: '/es/numerologia-gratis',
      pt: '/pt/numerologia-gratis',
      fr: '/fr/numerologie-gratuite',
      it: '/it/numerologia-gratis',
      de: '/de/numerologie-kostenlos',
      hi: '/hi/numerology-hindi',
    },
  },
  nameNumerology: {
    priority: 0.9,
    routes: {
      en: '/en/numerology-by-name',
      es: '/es/numerologia-nombre',
      pt: '/pt/numerologia-nome',
      fr: '/fr/numerologie-prenom',
      it: '/it/numerologia-nome',
      de: '/de/numerologie-name',
      hi: '/hi/naam-se-bhavishya',
    },
  },
  number11: {
    priority: 0.8,
    routes: {
      en: '/en/meaning-of-number-11',
      es: '/es/que-significa-numero-11',
      pt: '/pt/o-que-significa-numero-11',
      fr: '/fr/signification-nombre-11',
      it: '/it/significato-numero-11',
      de: '/de/bedeutung-zahl-11',
      hi: '/hi/ank-11-ka-arth',
    },
  },
  vedicAstrology: {
    priority: 0.8,
    routes: {
      en: '/en/free-vedic-astrology',
      es: '/es/astrologia-vedica-gratis',
      pt: '/pt/astrologia-vedica-gratis',
      fr: '/fr/astrologie-vedique-gratuite',
      it: '/it/astrologia-vedica-gratis',
      de: '/de/vedische-astrologie-kostenlos',
      hi: '/hi/vedic-jyotish-hindi',
    },
  },
  birthChart: {
    priority: 0.9,
    routes: {
      en: '/en/free-birth-chart',
      es: '/es/carta-natal-gratis',
      pt: '/pt/mapa-natal-gratis',
      fr: '/fr/theme-astral-gratuit',
      it: '/it/tema-natale-gratis',
      de: '/de/geburtshoroskop-kostenlos',
      hi: '/hi/janam-kundali-hindi',
    },
  },
  compatibility: {
    priority: 0.8,
    routes: {
      en: '/en/numerology-compatibility',
      es: '/es/compatibilidad-numerologica',
      pt: '/pt/compatibilidade-numerologica',
      fr: '/fr/compatibilite-numerologique',
      it: '/it/compatibilita-numerologica',
      de: '/de/numerologie-kompatibilitaet',
      hi: '/hi/numerology-milan',
    },
  },
  astrologyChart: {
    priority: 0.9,
    routes: {
      en: '/en/free-astrology-chart',
      es: '/es/mapa-astral-gratis',
      pt: '/pt/mapa-astral-gratis',
      fr: '/fr/carte-natale-gratuite',
      it: '/it/mappa-astrale-gratis',
      de: '/de/geburtstagskarte-kostenlos',
      hi: '/hi/janam-patrika-hindi',
    },
  },
} as const

export type TopicKey = keyof typeof topicRoutes
export type LanguageCode = keyof typeof topicRoutes[TopicKey]['routes']

export const clientPageMetadata: Record<string, { title: string; description: string; topic: TopicKey; lang: LanguageCode }> = {
  '/en/free-numerology-reading': {
    title: 'Free Numerology Reading — Life Path Number Calculator | Khagatara',
    description: 'Get a free numerology reading with your Life Path Number, name number, Vedic Moon sign and birth Nakshatra. Full PDF report available instantly.',
    topic: 'numerology',
    lang: 'en',
  },
  '/en/numerology-by-name': {
    title: 'Numerology By Name — Discover Your Name Number | Khagatara',
    description: 'Calculate numerology by name and discover your expression number, soul urge and personality number with a Vedic numerology report.',
    topic: 'nameNumerology',
    lang: 'en',
  },
  '/en/meaning-of-number-11': {
    title: 'Meaning of Number 11 — Master Number Numerology | Khagatara',
    description: 'Learn the meaning of number 11 in numerology, love, career and spiritual purpose. Calculate whether 11 appears in your life path.',
    topic: 'number11',
    lang: 'en',
  },
  '/en/free-vedic-astrology': {
    title: 'Free Vedic Astrology Reading — Jyotish Online | Khagatara',
    description: 'Get a free Vedic astrology reading with Moon sign, Nakshatra and Dasha period. Discover your Jyotish birth insights online.',
    topic: 'vedicAstrology',
    lang: 'en',
  },
  '/en/free-birth-chart': {
    title: 'Free Birth Chart — Vedic Kundali Calculator | Khagatara',
    description: 'Generate your free birth chart using Vedic astrology. Discover your Moon sign, birth star, Dasha and personalized report.',
    topic: 'birthChart',
    lang: 'en',
  },
  '/en/numerology-compatibility': {
    title: 'Numerology Compatibility — Love and Relationship Match | Khagatara',
    description: 'Check numerology compatibility for love, marriage and relationships using life path numbers and Vedic birth details.',
    topic: 'compatibility',
    lang: 'en',
  },
  '/en/free-astrology-chart': {
    title: 'Free Astrology Chart — Vedic Birth Chart Online | Khagatara',
    description: 'Create a free astrology chart online with Vedic Moon sign, Nakshatra, planetary periods and personalized birth insights.',
    topic: 'astrologyChart',
    lang: 'en',
  },
  '/de/numerologie-kostenlos': {
    title: 'Numerologie Kostenlos — Lebenszahl Berechnen | Khagatara',
    description: 'Berechnen Sie Ihre Lebenszahl kostenlos mit vedischer Numerologie, Mondzeichen, Nakshatra und personalisiertem PDF-Bericht.',
    topic: 'numerology',
    lang: 'de',
  },
  '/de/numerologie-name': {
    title: 'Numerologie Name — Namenszahl Berechnen | Khagatara',
    description: 'Berechnen Sie die Numerologie Ihres Namens und entdecken Sie Namenszahl, Seelenimpuls und Persönlichkeitszahl.',
    topic: 'nameNumerology',
    lang: 'de',
  },
  '/de/bedeutung-zahl-11': {
    title: 'Bedeutung Zahl 11 — Meisterzahl Numerologie | Khagatara',
    description: 'Entdecken Sie die Bedeutung der Zahl 11 in Numerologie, Liebe, Spiritualität und Lebensweg.',
    topic: 'number11',
    lang: 'de',
  },
  '/de/vedische-astrologie-kostenlos': {
    title: 'Vedische Astrologie Kostenlos — Jyotish Online | Khagatara',
    description: 'Kostenlose vedische Astrologie mit Mondzeichen, Nakshatra und Dasha-Periode online berechnen.',
    topic: 'vedicAstrology',
    lang: 'de',
  },
  '/de/geburtshoroskop-kostenlos': {
    title: 'Geburtshoroskop Kostenlos — Vedische Geburtskarte | Khagatara',
    description: 'Erstellen Sie Ihr kostenloses vedisches Geburtshoroskop mit Mondzeichen, Nakshatra und persönlicher Deutung.',
    topic: 'birthChart',
    lang: 'de',
  },
  '/de/numerologie-kompatibilitaet': {
    title: 'Numerologie Kompatibilität — Liebe und Beziehung | Khagatara',
    description: 'Prüfen Sie Ihre numerologische Kompatibilität für Liebe, Beziehung und Partnerschaft.',
    topic: 'compatibility',
    lang: 'de',
  },
  '/de/geburtstagskarte-kostenlos': {
    title: 'Geburtskarte Kostenlos — Vedische Astrologie | Khagatara',
    description: 'Berechnen Sie Ihre kostenlose vedische Geburtskarte mit Mondzeichen, Nakshatra und Dasha.',
    topic: 'astrologyChart',
    lang: 'de',
  },
  '/hi/numerology-hindi': {
    title: 'Numerology Hindi — मुफ़्त अंक ज्योतिष | Khagatara',
    description: 'हिंदी में मुफ़्त अंक ज्योतिष पढ़ें। अपना जीवन पथ अंक, नाम अंक, चंद्र राशि और नक्षत्र जानें।',
    topic: 'numerology',
    lang: 'hi',
  },
  '/hi/naam-se-bhavishya': {
    title: 'Naam Se Bhavishya — नाम अंक ज्योतिष | Khagatara',
    description: 'अपने नाम से भविष्य, नाम अंक, आत्मा इच्छा अंक और व्यक्तित्व अंक जानें।',
    topic: 'nameNumerology',
    lang: 'hi',
  },
  '/hi/ank-11-ka-arth': {
    title: 'Ank 11 Ka Arth — Master Number 11 | Khagatara',
    description: 'अंक 11 का अर्थ, आध्यात्मिक महत्व, प्रेम, करियर और जीवन पथ में इसका प्रभाव जानें।',
    topic: 'number11',
    lang: 'hi',
  },
  '/hi/vedic-jyotish-hindi': {
    title: 'Vedic Jyotish Hindi — मुफ़्त वैदिक ज्योतिष | Khagatara',
    description: 'हिंदी में मुफ़्त वैदिक ज्योतिष पढ़ें। चंद्र राशि, नक्षत्र और दशा की जानकारी प्राप्त करें।',
    topic: 'vedicAstrology',
    lang: 'hi',
  },
  '/hi/janam-kundali-hindi': {
    title: 'Janam Kundali Hindi — मुफ़्त जन्म कुंडली | Khagatara',
    description: 'हिंदी में अपनी मुफ़्त जन्म कुंडली, चंद्र राशि, नक्षत्र और वैदिक ज्योतिष रिपोर्ट देखें।',
    topic: 'birthChart',
    lang: 'hi',
  },
  '/hi/numerology-milan': {
    title: 'Numerology Milan — अंक ज्योतिष मिलान | Khagatara',
    description: 'अंक ज्योतिष से प्रेम, विवाह और रिश्तों की अनुकूलता जांचें।',
    topic: 'compatibility',
    lang: 'hi',
  },
  '/hi/janam-patrika-hindi': {
    title: 'Janam Patrika Hindi — मुफ़्त जन्म पत्रिका | Khagatara',
    description: 'हिंदी में जन्म पत्रिका, चंद्र राशि, नक्षत्र और दशा के साथ वैदिक रिपोर्ट प्राप्त करें।',
    topic: 'astrologyChart',
    lang: 'hi',
  },
}

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString()
}

export function languageAlternates(topic: TopicKey, absolute = false) {
  const routes = topicRoutes[topic].routes
  const alternates: Record<string, string> = {}

  for (const [language, path] of Object.entries(routes)) {
    alternates[language] = absolute ? absoluteUrl(path) : path
  }

  alternates['x-default'] = absolute ? absoluteUrl(routes.en) : routes.en
  return alternates
}

export function pageAlternates(topic: TopicKey, language: LanguageCode): Metadata['alternates'] {
  return {
    canonical: topicRoutes[topic].routes[language],
    languages: languageAlternates(topic),
  }
}

export function clientPageAlternates(path: string): Metadata['alternates'] {
  const page = clientPageMetadata[path]
  return pageAlternates(page.topic, page.lang)
}

export function liveSitemapEntries(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const root: MetadataRoute.Sitemap[number] = {
    url: siteUrl,
    lastModified,
    changeFrequency: 'weekly',
    priority: 1,
    alternates: {
      languages: {
        en: siteUrl,
        'x-default': siteUrl,
      },
    },
  }

  const localized = (Object.entries(topicRoutes) as [TopicKey, (typeof topicRoutes)[TopicKey]][]).flatMap(([topicKey, topic]) =>
    Object.values(topic.routes).map((path) => ({
      url: absoluteUrl(path),
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: topic.priority,
      alternates: {
        languages: languageAlternates(topicKey, true),
      },
    })),
  )

  return [root, ...localized]
}
