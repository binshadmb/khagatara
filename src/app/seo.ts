import type { Metadata, MetadataRoute } from 'next'
import { LANGUAGE_CONFIG, TOPIC_DEFS, type LangCode } from './seo-config'

export { LANGUAGE_CONFIG, TOPIC_DEFS, type LangCode }
export const siteUrl = 'https://www.khagatara.com'

// ─── Topic metadata: titles + descriptions per language ──────────────────────
// Add a new language's translations here to activate localised meta tags.
// All other languages fall back to English automatically.
const TOPIC_META: Record<string, Record<string, { title: string; description: string }>> = {
  numerology: {
    en: { title: 'Free Numerology Reading — Life Path Number Calculator | Khagatara', description: 'Get a free numerology reading with your Life Path Number, name number, Vedic Moon sign and birth Nakshatra. Full PDF report available instantly.' },
    es: { title: 'Numerología Gratis — Calculadora Número de Vida | Khagatara', description: 'Obtén una lectura de numerología gratuita con tu Número de Camino de Vida, número de nombre, signo lunar védico y Nakshatra de nacimiento.' },
    pt: { title: 'Numerologia Grátis — Calculadora Número de Vida | Khagatara', description: 'Obtenha uma leitura de numerologia gratuita com seu Número de Caminho de Vida, número do nome, signo lunar védico e Nakshatra de nascimento.' },
    fr: { title: 'Numérologie Gratuite — Calculateur Nombre de Vie | Khagatara', description: 'Obtenez une lecture de numérologie gratuite avec votre Nombre de Chemin de Vie, nombre du nom, signe lunaire védique et Nakshatra de naissance.' },
    it: { title: 'Numerologia Gratis — Calcolatore Numero del Cammino | Khagatara', description: 'Ottieni una lettura di numerologia gratuita con il tuo Numero del Cammino di Vita, numero del nome, segno lunare vedico e Nakshatra di nascita.' },
    de: { title: 'Numerologie Kostenlos — Lebenszahl Berechnen | Khagatara', description: 'Berechnen Sie Ihre Lebenszahl kostenlos mit vedischer Numerologie, Mondzeichen, Nakshatra und personalisiertem PDF-Bericht.' },
    hi: { title: 'Numerology Hindi — मुफ़्त अंक ज्योतिष | Khagatara', description: 'हिंदी में मुफ़्त अंक ज्योतिष पढ़ें। अपना जीवन पथ अंक, नाम अंक, चंद्र राशि और नक्षत्र जानें।' },
    ar: { title: 'قراءة الأرقام المجانية — حساب رقم مسار الحياة | Khagatara', description: 'احصل على قراءة أرقام مجانية مع رقم مسار حياتك وبرجك القمري الفيدي ونجم ميلادك. تقرير PDF كامل فوري.' },
  },
  nameNumerology: {
    en: { title: 'Numerology By Name — Discover Your Name Number | Khagatara', description: 'Calculate numerology by name and discover your expression number, soul urge and personality number with a Vedic numerology report.' },
    es: { title: 'Numerología por Nombre — Descubre tu Número de Nombre | Khagatara', description: 'Calcula la numerología por nombre y descubre tu número de expresión, deseo del alma y número de personalidad.' },
    pt: { title: 'Numerologia pelo Nome — Descubra seu Número do Nome | Khagatara', description: 'Calcule a numerologia pelo nome e descubra seu número de expressão, desejo da alma e número de personalidade.' },
    fr: { title: 'Numérologie par Prénom — Découvrez votre Nombre du Nom | Khagatara', description: 'Calculez la numérologie par prénom et découvrez votre nombre d\'expression, désir de l\'âme et nombre de personnalité.' },
    it: { title: 'Numerologia per Nome — Scopri il tuo Numero del Nome | Khagatara', description: 'Calcola la numerologia per nome e scopri il tuo numero di espressione, desiderio dell\'anima e numero di personalità.' },
    de: { title: 'Numerologie Name — Namenszahl Berechnen | Khagatara', description: 'Berechnen Sie die Numerologie Ihres Namens und entdecken Sie Namenszahl, Seelenimpuls und Persönlichkeitszahl.' },
    hi: { title: 'Naam Se Bhavishya — नाम अंक ज्योतिष | Khagatara', description: 'अपने नाम से भविष्य, नाम अंक, आत्मा इच्छा अंक और व्यक्तित्व अंक जानें।' },
    ar: { title: 'علم الأرقام حسب الاسم — اكتشف رقم اسمك | Khagatara', description: 'احسب علم الأرقام حسب اسمك واكتشف رقم التعبير ورغبة الروح ورقم الشخصية.' },
  },
  number11: {
    en: { title: 'Meaning of Number 11 — Master Number Numerology | Khagatara', description: 'Learn the meaning of number 11 in numerology, love, career and spiritual purpose. Calculate whether 11 appears in your life path.' },
    es: { title: 'Qué Significa el Número 11 — Número Maestro | Khagatara', description: 'Aprende el significado del número 11 en numerología, amor, carrera y propósito espiritual.' },
    pt: { title: 'O Que Significa o Número 11 — Número Mestre | Khagatara', description: 'Aprenda o significado do número 11 em numerologia, amor, carreira e propósito espiritual.' },
    fr: { title: 'Signification du Nombre 11 — Nombre Maître | Khagatara', description: 'Découvrez la signification du nombre 11 en numérologie, amour, carrière et but spirituel.' },
    it: { title: 'Significato del Numero 11 — Numero Maestro | Khagatara', description: 'Scopri il significato del numero 11 in numerologia, amore, carriera e scopo spirituale.' },
    de: { title: 'Bedeutung Zahl 11 — Meisterzahl Numerologie | Khagatara', description: 'Entdecken Sie die Bedeutung der Zahl 11 in Numerologie, Liebe, Spiritualität und Lebensweg.' },
    hi: { title: 'Ank 11 Ka Arth — Master Number 11 | Khagatara', description: 'अंक 11 का अर्थ, आध्यात्मिक महत्व, प्रेम, करियर और जीवन पथ में इसका प्रभाव जानें।' },
    ar: { title: 'معنى رقم 11 — الرقم الرئيسي في علم الأرقام | Khagatara', description: 'تعرف على معنى رقم 11 في علم الأرقام والحب والمهنة والهدف الروحي.' },
  },
  vedicAstrology: {
    en: { title: 'Free Vedic Astrology Reading — Jyotish Online | Khagatara', description: 'Get a free Vedic astrology reading with Moon sign, Nakshatra and Dasha period. Discover your Jyotish birth insights online.' },
    es: { title: 'Astrología Védica Gratis — Jyotish Online | Khagatara', description: 'Obtén una lectura de astrología védica gratuita con signo lunar, Nakshatra y período Dasha.' },
    pt: { title: 'Astrologia Védica Grátis — Jyotish Online | Khagatara', description: 'Obtenha uma leitura de astrologia védica gratuita com signo lunar, Nakshatra e período Dasha.' },
    fr: { title: 'Astrologie Védique Gratuite — Jyotish Online | Khagatara', description: 'Obtenez une lecture d\'astrologie védique gratuite avec signe lunaire, Nakshatra et période Dasha.' },
    it: { title: 'Astrologia Vedica Gratis — Jyotish Online | Khagatara', description: 'Ottieni una lettura di astrologia vedica gratuita con segno lunare, Nakshatra e periodo Dasha.' },
    de: { title: 'Vedische Astrologie Kostenlos — Jyotish Online | Khagatara', description: 'Kostenlose vedische Astrologie mit Mondzeichen, Nakshatra und Dasha-Periode online berechnen.' },
    hi: { title: 'Vedic Jyotish Hindi — मुफ़्त वैदिक ज्योतिष | Khagatara', description: 'हिंदी में मुफ़्त वैदिक ज्योतिष पढ़ें। चंद्र राशि, नक्षत्र और दशा की जानकारी प्राप्त करें।' },
    ar: { title: 'الفلك الفيدي المجاني — جيوتيش أونلاين | Khagatara', description: 'احصل على قراءة فلكية فيدية مجانية مع البرج القمري والنكشاترا وفترة داشا.' },
  },
  birthChart: {
    en: { title: 'Free Birth Chart — Vedic Kundali Calculator | Khagatara', description: 'Generate your free birth chart using Vedic astrology. Discover your Moon sign, birth star, Dasha and personalized report.' },
    es: { title: 'Carta Natal Gratis — Calculadora Kundali Védica | Khagatara', description: 'Genera tu carta natal gratuita usando astrología védica. Descubre tu signo lunar, estrella de nacimiento y Dasha.' },
    pt: { title: 'Mapa Natal Grátis — Calculadora Kundali Védica | Khagatara', description: 'Gere seu mapa natal gratuito usando astrologia védica. Descubra seu signo lunar, estrela de nascimento e Dasha.' },
    fr: { title: 'Thème Astral Gratuit — Calculateur Kundali Védique | Khagatara', description: 'Générez votre thème astral gratuit avec l\'astrologie védique. Découvrez votre signe lunaire, étoile de naissance et Dasha.' },
    it: { title: 'Tema Natale Gratis — Calcolatore Kundali Vedico | Khagatara', description: 'Genera il tuo tema natale gratuito usando l\'astrologia vedica. Scopri il tuo segno lunare, stella di nascita e Dasha.' },
    de: { title: 'Geburtshoroskop Kostenlos — Vedische Geburtskarte | Khagatara', description: 'Erstellen Sie Ihr kostenloses vedisches Geburtshoroskop mit Mondzeichen, Nakshatra und persönlicher Deutung.' },
    hi: { title: 'Janam Kundali Hindi — मुफ़्त जन्म कुंडली | Khagatara', description: 'हिंदी में अपनी मुफ़्त जन्म कुंडली, चंद्र राशि, नक्षत्र और वैदिक ज्योतिष रिपोर्ट देखें।' },
    ar: { title: 'خريطة الميلاد المجانية — كوندالي الفيدية | Khagatara', description: 'أنشئ خريطة ميلادك المجانية باستخدام علم الفلك الفيدي. اكتشف برجك القمري ونجم ميلادك وداشا.' },
  },
  compatibility: {
    en: { title: 'Numerology Compatibility — Love and Relationship Match | Khagatara', description: 'Check numerology compatibility for love, marriage and relationships using life path numbers and Vedic birth details.' },
    es: { title: 'Compatibilidad Numerológica — Amor y Relaciones | Khagatara', description: 'Comprueba la compatibilidad numerológica para el amor, matrimonio y relaciones usando números de camino de vida.' },
    pt: { title: 'Compatibilidade Numerológica — Amor e Relacionamentos | Khagatara', description: 'Verifique a compatibilidade numerológica para amor, casamento e relacionamentos usando números de caminho de vida.' },
    fr: { title: 'Compatibilité Numérologique — Amour et Relations | Khagatara', description: 'Vérifiez la compatibilité numérologique pour l\'amour, le mariage et les relations en utilisant les nombres de chemin de vie.' },
    it: { title: 'Compatibilità Numerologica — Amore e Relazioni | Khagatara', description: 'Controlla la compatibilità numerologica per amore, matrimonio e relazioni usando i numeri del cammino di vita.' },
    de: { title: 'Numerologie Kompatibilität — Liebe und Beziehung | Khagatara', description: 'Prüfen Sie Ihre numerologische Kompatibilität für Liebe, Beziehung und Partnerschaft.' },
    hi: { title: 'Numerology Milan — अंक ज्योतिष मिलान | Khagatara', description: 'अंक ज्योतिष से प्रेम, विवाह और रिश्तों की अनुकूलता जांचें।' },
    ar: { title: 'توافق الأرقام — توافق الحب والعلاقات | Khagatara', description: 'تحقق من توافق الأرقام للحب والزواج والعلاقات باستخدام أرقام مسار الحياة.' },
  },
  astrologyChart: {
    en: { title: 'Free Astrology Chart — Vedic Birth Chart Online | Khagatara', description: 'Create a free astrology chart online with Vedic Moon sign, Nakshatra, planetary periods and personalized birth insights.' },
    es: { title: 'Mapa Astral Gratis — Carta Natal Védica Online | Khagatara', description: 'Crea un mapa astral gratuito online con signo lunar védico, Nakshatra y períodos planetarios.' },
    pt: { title: 'Mapa Astral Grátis — Carta Natal Védica Online | Khagatara', description: 'Crie um mapa astral gratuito online com signo lunar védico, Nakshatra e períodos planetários.' },
    fr: { title: 'Carte Natale Gratuite — Carte Astrale Védique Online | Khagatara', description: 'Créez une carte natale gratuite en ligne avec signe lunaire védique, Nakshatra et périodes planétaires.' },
    it: { title: 'Mappa Astrale Gratis — Carta Natale Vedica Online | Khagatara', description: 'Crea una mappa astrale gratuita online con segno lunare vedico, Nakshatra e periodi planetari.' },
    de: { title: 'Geburtskarte Kostenlos — Vedische Astrologie | Khagatara', description: 'Berechnen Sie Ihre kostenlose vedische Geburtskarte mit Mondzeichen, Nakshatra und Dasha.' },
    hi: { title: 'Janam Patrika Hindi — मुफ़्त जन्म पत्रिका | Khagatara', description: 'हिंदी में जन्म पत्रिका, चंद्र राशि, नक्षत्र और दशा के साथ वैदिक रिपोर्ट प्राप्त करें।' },
    ar: { title: 'خريطة الأبراج المجانية — خريطة الميلاد الفيدية | Khagatara', description: 'أنشئ خريطة أبراجك المجانية أونلاين مع البرج القمري الفيدي والنكشاترا والفترات الكوكبية.' },
  },
}

// ─── URL helpers ─────────────────────────────────────────────────────────────
export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString()
}

export function topicPath(topicKey: string, lang: string): string {
  const topic = TOPIC_DEFS.find(t => t.key === topicKey)!
  const slug = topic.slugs[lang] ?? topic.defaultSlug
  return `/${lang}/${slug}`
}

// ─── Metadata helpers ────────────────────────────────────────────────────────
export function getTopicMeta(topicKey: string, lang: string) {
  const meta = TOPIC_META[topicKey]
  return meta[lang] ?? meta['en']
}

// ─── Backward-compat: topicRoutes (generated) ────────────────────────────────
export type TopicKey = typeof TOPIC_DEFS[number]['key']
export type LanguageCode = LangCode

export const topicRoutes = Object.fromEntries(
  TOPIC_DEFS.map(topic => [
    topic.key,
    {
      priority: topic.priority,
      routes: Object.fromEntries(
        LANGUAGE_CONFIG.map(([code]) => [code, topicPath(topic.key, code)])
      ),
    },
  ])
) as Record<TopicKey, { priority: number; routes: Record<string, string> }>

// ─── Backward-compat: clientPageMetadata (generated) ─────────────────────────
export const clientPageMetadata: Record<string, {
  title: string; description: string; topic: TopicKey; lang: string
}> = {}

for (const [code] of LANGUAGE_CONFIG) {
  for (const topic of TOPIC_DEFS) {
    const path = topicPath(topic.key, code)
    const meta = getTopicMeta(topic.key, code)
    clientPageMetadata[path] = {
      title: meta.title,
      description: meta.description,
      topic: topic.key as TopicKey,
      lang: code,
    }
  }
}

// ─── Alternates ───────────────────────────────────────────────────────────────
export function languageAlternates(topicKey: TopicKey, absolute = false) {
  const topic = TOPIC_DEFS.find(t => t.key === topicKey)!
  const result: Record<string, string> = {}
  for (const [code] of LANGUAGE_CONFIG) {
    const path = topicPath(topicKey, code)
    result[code] = absolute ? absoluteUrl(path) : path
  }
  result['x-default'] = absolute
    ? absoluteUrl(topicPath(topicKey, 'en'))
    : topicPath(topicKey, 'en')
  return result
}

export function pageAlternates(topicKey: TopicKey, lang: string): Metadata['alternates'] {
  return {
    canonical: topicPath(topicKey, lang),
    languages: languageAlternates(topicKey),
  }
}

export function clientPageAlternates(path: string): Metadata['alternates'] {
  const page = clientPageMetadata[path]
  if (!page) return {}
  return pageAlternates(page.topic as TopicKey, page.lang)
}

// ─── Sitemap (100 languages × 7 topics = 700 URLs + root) ───────────────────
export function liveSitemapEntries(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const entries: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified, changeFrequency: 'weekly', priority: 1 },
  ]
  for (const [code] of LANGUAGE_CONFIG) {
    for (const topic of TOPIC_DEFS) {
      entries.push({
        url: absoluteUrl(topicPath(topic.key, code)),
        lastModified,
        changeFrequency: 'monthly',
        priority: topic.priority,
      })
    }
  }
  return entries
}
