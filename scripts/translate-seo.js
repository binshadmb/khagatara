#!/usr/bin/env node
/**
 * translate-seo.js
 * Generates localized titles, descriptions, and slugs for all 100 languages.
 * Outputs ready-to-paste blocks for seo.ts and seo-config.ts
 *
 * Usage:
 *   node translate-seo.js              → all languages
 *   node translate-seo.js es fr de     → specific languages only
 */

const fs   = require('fs')
const path = require('path')

// ─── Config ───────────────────────────────────────────────────────────────────

const DELAY_MS   = 400
const OUTPUT_DIR = path.join(__dirname, 'seo-output')

const SANSKRIT_TERMS = [
  'nakshatra','dasha','rashi','vedic','vimshottari','mahadasha',
  'antardasha','kundali','jyotish','graha','lagna','ascendant',
  'chaldean','pythagorean','numerology','astrology','karma',
  'dharma','pada','atmakaraka','khagatara'
]

// ─── All 100 languages (same order as seo-config.ts) ─────────────────────────

const LANGUAGE_CONFIG = [
  ['en',    'English',              'ltr'],
  ['es',    'Spanish',              'ltr'],
  ['pt',    'Portuguese',           'ltr'],
  ['fr',    'French',               'ltr'],
  ['it',    'Italian',              'ltr'],
  ['de',    'German',               'ltr'],
  ['hi',    'Hindi',                'ltr'],
  ['ar',    'Arabic',               'rtl'],
  ['zh-cn', 'Chinese Simplified',   'ltr'],
  ['ja',    'Japanese',             'ltr'],
  ['ru',    'Russian',              'ltr'],
  ['id',    'Indonesian',           'ltr'],
  ['ko',    'Korean',               'ltr'],
  ['tr',    'Turkish',              'ltr'],
  ['bn',    'Bengali',              'ltr'],
  ['ur',    'Urdu',                 'rtl'],
  ['vi',    'Vietnamese',           'ltr'],
  ['th',    'Thai',                 'ltr'],
  ['fa',    'Persian',              'rtl'],
  ['ms',    'Malay',                'ltr'],
  ['fil',   'Filipino',             'ltr'],
  ['nl',    'Dutch',                'ltr'],
  ['pl',    'Polish',               'ltr'],
  ['ta',    'Tamil',                'ltr'],
  ['te',    'Telugu',               'ltr'],
  ['mr',    'Marathi',              'ltr'],
  ['gu',    'Gujarati',             'ltr'],
  ['kn',    'Kannada',              'ltr'],
  ['ml',    'Malayalam',            'ltr'],
  ['pa',    'Punjabi',              'ltr'],
  ['ne',    'Nepali',               'ltr'],
  ['uk',    'Ukrainian',            'ltr'],
  ['ro',    'Romanian',             'ltr'],
  ['el',    'Greek',                'ltr'],
  ['cs',    'Czech',                'ltr'],
  ['sv',    'Swedish',              'ltr'],
  ['he',    'Hebrew',               'rtl'],
  ['zh-tw', 'Chinese Traditional',  'ltr'],
  ['no',    'Norwegian',            'ltr'],
  ['da',    'Danish',               'ltr'],
  ['fi',    'Finnish',              'ltr'],
  ['hu',    'Hungarian',            'ltr'],
  ['sk',    'Slovak',               'ltr'],
  ['bg',    'Bulgarian',            'ltr'],
  ['hr',    'Croatian',             'ltr'],
  ['sr',    'Serbian',              'ltr'],
  ['sl',    'Slovenian',            'ltr'],
  ['lt',    'Lithuanian',           'ltr'],
  ['lv',    'Latvian',              'ltr'],
  ['et',    'Estonian',             'ltr'],
  ['ka',    'Georgian',             'ltr'],
  ['hy',    'Armenian',             'ltr'],
  ['az',    'Azerbaijani',          'ltr'],
  ['kk',    'Kazakh',               'ltr'],
  ['uz',    'Uzbek',                'ltr'],
  ['mn',    'Mongolian',            'ltr'],
  ['my',    'Burmese',              'ltr'],
  ['km',    'Khmer',                'ltr'],
  ['si',    'Sinhala',              'ltr'],
  ['am',    'Amharic',              'ltr'],
  ['sw',    'Swahili',              'ltr'],
  ['yo',    'Yoruba',               'ltr'],
  ['ig',    'Igbo',                 'ltr'],
  ['ha',    'Hausa',                'ltr'],
  ['zu',    'Zulu',                 'ltr'],
  ['af',    'Afrikaans',            'ltr'],
  ['sq',    'Albanian',             'ltr'],
  ['bs',    'Bosnian',              'ltr'],
  ['mk',    'Macedonian',           'ltr'],
  ['mt',    'Maltese',              'ltr'],
  ['cy',    'Welsh',                'ltr'],
  ['gl',    'Galician',             'ltr'],
  ['ca',    'Catalan',              'ltr'],
  ['eu',    'Basque',               'ltr'],
  ['is',    'Icelandic',            'ltr'],
  ['ga',    'Irish',                'ltr'],
  ['be',    'Belarusian',           'ltr'],
  ['ps',    'Pashto',               'rtl'],
  ['sd',    'Sindhi',               'rtl'],
  ['ku',    'Kurdish',              'ltr'],
  ['so',    'Somali',               'ltr'],
  ['mg',    'Malagasy',             'ltr'],
  ['ht',    'Haitian Creole',       'ltr'],
  ['ceb',   'Cebuano',              'ltr'],
  ['jv',    'Javanese',             'ltr'],
  ['su',    'Sundanese',            'ltr'],
  ['xh',    'Xhosa',                'ltr'],
  ['st',    'Sesotho',              'ltr'],
  ['fy',    'Frisian',              'ltr'],
  ['lb',    'Luxembourgish',        'ltr'],
  ['tk',    'Turkmen',              'ltr'],
  ['ky',    'Kyrgyz',               'ltr'],
  ['lo',    'Lao',                  'ltr'],
  ['ti',    'Tigrinya',             'ltr'],
  ['rw',    'Kinyarwanda',          'ltr'],
  ['or',    'Odia',                 'ltr'],
  ['as',    'Assamese',             'ltr'],
  ['ug',    'Uyghur',               'rtl'],
  ['sn',    'Shona',                'ltr'],
  ['ny',    'Chichewa',             'ltr'],
]

// ─── 7 Topics with existing English meta (source of truth) ───────────────────

const TOPICS = {
  numerology: {
    defaultSlug: 'free-numerology-reading',
    en: {
      title: 'Free Numerology Reading — Life Path Number Calculator | Khagatara',
      description: 'Get a free numerology reading with your Life Path Number, name number, Vedic Moon sign and birth Nakshatra. Full PDF report available instantly.',
    },
    existingSlugs: {
      es:'numerologia-gratis', pt:'numerologia-gratis', fr:'numerologie-gratuite',
      it:'numerologia-gratis', de:'numerologie-kostenlos', hi:'numerology-hindi',
      'zh-cn':'mianfei-shuxue','zh-tw':'mianfei-shuxue', ja:'muryou-suuji-uranai',
      ru:'numerologiya-besplatno', ko:'muryo-surisunsul', ar:'qiraah-alarqam-majania',
      fa:'adadshenasi-rayegan', tr:'ucretsiz-numeroloji', bn:'binamulye-sankhyatattwa',
      id:'numerologi-gratis',
    },
    existingMeta: {
      es:{ title:'Numerología Gratis — Calculadora Número de Vida | Khagatara', description:'Obtén una lectura de numerología gratuita con tu Número de Camino de Vida, número de nombre, signo lunar védico y Nakshatra de nacimiento.' },
      pt:{ title:'Numerologia Grátis — Calculadora Número de Vida | Khagatara', description:'Obtenha uma leitura de numerologia gratuita com seu Número de Caminho de Vida, número do nome, signo lunar védico e Nakshatra de nascimento.' },
      fr:{ title:'Numérologie Gratuite — Calculateur Nombre de Vie | Khagatara', description:'Obtenez une lecture de numérologie gratuite avec votre Nombre de Chemin de Vie, nombre du nom, signe lunaire védique et Nakshatra de naissance.' },
      it:{ title:'Numerologia Gratis — Calcolatore Numero del Cammino | Khagatara', description:'Ottieni una lettura di numerologia gratuita con il tuo Numero del Cammino di Vita, numero del nome, segno lunare vedico e Nakshatra di nascita.' },
      de:{ title:'Numerologie Kostenlos — Lebenszahl Berechnen | Khagatara', description:'Berechnen Sie Ihre Lebenszahl kostenlos mit vedischer Numerologie, Mondzeichen, Nakshatra und personalisiertem PDF-Bericht.' },
      hi:{ title:'Numerology Hindi — मुफ़्त अंक ज्योतिष | Khagatara', description:'हिंदी में मुफ़्त अंक ज्योतिष पढ़ें। अपना जीवन पथ अंक, नाम अंक, चंद्र राशि और नक्षत्र जानें।' },
      ar:{ title:'قراءة الأرقام المجانية — حساب رقم مسار الحياة | Khagatara', description:'احصل على قراءة أرقام مجانية مع رقم مسار حياتك وبرجك القمري الفيدي ونجم ميلادك. تقرير PDF كامل فوري.' },
    },
  },
  nameNumerology: {
    defaultSlug: 'numerology-by-name',
    en: {
      title: 'Numerology By Name — Discover Your Name Number | Khagatara',
      description: 'Calculate numerology by name and discover your expression number, soul urge and personality number with a Vedic numerology report.',
    },
    existingSlugs: {
      es:'numerologia-nombre', pt:'numerologia-nome', fr:'numerologie-prenom',
      it:'numerologia-nome', de:'numerologie-name', hi:'naam-se-bhavishya',
      'zh-cn':'xingming-shuxue','zh-tw':'xingming-shuxue', ja:'namae-suuji',
      ru:'numerologiya-po-imeni', ko:'ireum-surisunsul', ar:'alarqam-bilaism',
      fa:'adadshenasi-name', tr:'isme-gore-numeroloji', bn:'namer-sankhyatattwa',
      id:'numerologi-nama',
    },
    existingMeta: {
      es:{ title:'Numerología por Nombre — Descubre tu Número de Nombre | Khagatara', description:'Calcula la numerología por nombre y descubre tu número de expresión, deseo del alma y número de personalidad.' },
      pt:{ title:'Numerologia pelo Nome — Descubra seu Número do Nome | Khagatara', description:'Calcule a numerologia pelo nome e descubra seu número de expressão, desejo da alma e número de personalidade.' },
      fr:{ title:'Numérologie par Prénom — Découvrez votre Nombre du Nom | Khagatara', description:"Calculez la numérologie par prénom et découvrez votre nombre d'expression, désir de l'âme et nombre de personnalité." },
      it:{ title:'Numerologia per Nome — Scopri il tuo Numero del Nome | Khagatara', description:"Calcola la numerologia per nome e scopri il tuo numero di espressione, desiderio dell'anima e numero di personalità." },
      de:{ title:'Numerologie Name — Namenszahl Berechnen | Khagatara', description:'Berechnen Sie die Numerologie Ihres Namens und entdecken Sie Namenszahl, Seelenimpuls und Persönlichkeitszahl.' },
      hi:{ title:'Naam Se Bhavishya — नाम अंक ज्योतिष | Khagatara', description:'अपने नाम से भविष्य, नाम अंक, आत्मा इच्छा अंक और व्यक्तित्व अंक जानें।' },
      ar:{ title:'علم الأرقام حسب الاسم — اكتشف رقم اسمك | Khagatara', description:'احسب علم الأرقام حسب اسمك واكتشف رقم التعبير ورغبة الروح ورقم الشخصية.' },
    },
  },
  number11: {
    defaultSlug: 'meaning-of-number-11',
    en: {
      title: 'Meaning of Number 11 — Master Number Numerology | Khagatara',
      description: 'Learn the meaning of number 11 in numerology, love, career and spiritual purpose. Calculate whether 11 appears in your life path.',
    },
    existingSlugs: {
      es:'que-significa-numero-11', pt:'o-que-significa-numero-11', fr:'signification-nombre-11',
      it:'significato-numero-11', de:'bedeutung-zahl-11', hi:'ank-11-ka-arth',
      'zh-cn':'shuzi-11-yiyi','zh-tw':'shuzi-11-yiyi', ja:'suuji-11-imi',
      ru:'znachenie-chisla-11', ko:'숫자-11-uimi', ar:'mana-raqam-11',
      fa:'mani-adad-11', tr:'11-sayisinin-anlami', bn:'sankhya-11-er-artha',
      id:'arti-angka-11',
    },
    existingMeta: {
      es:{ title:'Qué Significa el Número 11 — Número Maestro | Khagatara', description:'Aprende el significado del número 11 en numerología, amor, carrera y propósito espiritual.' },
      pt:{ title:'O Que Significa o Número 11 — Número Mestre | Khagatara', description:'Aprenda o significado do número 11 em numerologia, amor, carreira e propósito espiritual.' },
      fr:{ title:'Signification du Nombre 11 — Nombre Maître | Khagatara', description:'Découvrez la signification du nombre 11 en numérologie, amour, carrière et but spirituel.' },
      it:{ title:'Significato del Numero 11 — Numero Maestro | Khagatara', description:'Scopri il significato del numero 11 in numerologia, amore, carriera e scopo spirituale.' },
      de:{ title:'Bedeutung Zahl 11 — Meisterzahl Numerologie | Khagatara', description:'Entdecken Sie die Bedeutung der Zahl 11 in Numerologie, Liebe, Spiritualität und Lebensweg.' },
      hi:{ title:'Ank 11 Ka Arth — Master Number 11 | Khagatara', description:'अंक 11 का अर्थ, आध्यात्मिक महत्व, प्रेम, करियर और जीवन पथ में इसका प्रभाव जानें।' },
      ar:{ title:'معنى رقم 11 — الرقم الرئيسي في علم الأرقام | Khagatara', description:'تعرف على معنى رقم 11 في علم الأرقام والحب والمهنة والهدف الروحي.' },
    },
  },
  vedicAstrology: {
    defaultSlug: 'free-vedic-astrology',
    en: {
      title: 'Free Vedic Astrology Reading — Jyotish Online | Khagatara',
      description: 'Get a free Vedic astrology reading with Moon sign, Nakshatra and Dasha period. Discover your Jyotish birth insights online.',
    },
    existingSlugs: {
      es:'astrologia-vedica-gratis', pt:'astrologia-vedica-gratis', fr:'astrologie-vedique-gratuite',
      it:'astrologia-vedica-gratis', de:'vedische-astrologie-kostenlos', hi:'vedic-jyotish-hindi',
      'zh-cn':'mianfei-vedic-zhanxing','zh-tw':'mianfei-vedic-zhanxing', ja:'muryou-vedic-占星術',
      ru:'vedicheskaya-astrologiya-besplatno', ko:'muryo-vedic-jeomsul', ar:'altanjim-alvedic-almajani',
      fa:'astrology-vedic-rayegan', tr:'ucretsiz-vedik-astroloji', bn:'binamulye-vedic-jyotish',
      id:'astrologi-veda-gratis',
    },
    existingMeta: {
      es:{ title:'Astrología Védica Gratis — Jyotish Online | Khagatara', description:'Obtén una lectura de astrología védica gratuita con signo lunar, Nakshatra y período Dasha.' },
      pt:{ title:'Astrologia Védica Grátis — Jyotish Online | Khagatara', description:'Obtenha uma leitura de astrologia védica gratuita com signo lunar, Nakshatra e período Dasha.' },
      fr:{ title:"Astrologie Védique Gratuite — Jyotish Online | Khagatara", description:"Obtenez une lecture d'astrologie védique gratuite avec signe lunaire, Nakshatra et période Dasha." },
      it:{ title:'Astrologia Vedica Gratis — Jyotish Online | Khagatara', description:'Ottieni una lettura di astrologia vedica gratuita con segno lunare, Nakshatra e periodo Dasha.' },
      de:{ title:'Vedische Astrologie Kostenlos — Jyotish Online | Khagatara', description:'Kostenlose vedische Astrologie mit Mondzeichen, Nakshatra und Dasha-Periode online berechnen.' },
      hi:{ title:'Vedic Jyotish Hindi — मुफ़्त वैदिक ज्योतिष | Khagatara', description:'हिंदी में मुफ़्त वैदिक ज्योतिष पढ़ें। चंद्र राशि, नक्षत्र और दशा की जानकारी प्राप्त करें।' },
      ar:{ title:'الفلك الفيدي المجاني — جيوتيش أونلاين | Khagatara', description:'احصل على قراءة فلكية فيدية مجانية مع البرج القمري والنكشاترا وفترة داشا.' },
    },
  },
  birthChart: {
    defaultSlug: 'free-birth-chart',
    en: {
      title: 'Free Birth Chart — Vedic Kundali Calculator | Khagatara',
      description: 'Generate your free birth chart using Vedic astrology. Discover your Moon sign, birth star, Dasha and personalized report.',
    },
    existingSlugs: {
      es:'carta-natal-gratis', pt:'mapa-natal-gratis', fr:'theme-astral-gratuit',
      it:'tema-natale-gratis', de:'geburtshoroskop-kostenlos', hi:'janam-kundali-hindi',
      'zh-cn':'mianfei-chusheng-tiantu','zh-tw':'mianfei-chusheng-tiantu', ja:'muryou-shussei-horoscope',
      ru:'besplatnaya-karta-rozhdeniya', ko:'muryo-chulssaeng-chado', ar:'khart-almilad-almajani',
      fa:'naghsh-tavalod-rayegan', tr:'ucretsiz-dogum-haritasi', bn:'binamulye-janma-kundali',
      id:'bagan-kelahiran-gratis',
    },
    existingMeta: {
      es:{ title:'Carta Natal Gratis — Calculadora Kundali Védica | Khagatara', description:'Genera tu carta natal gratuita usando astrología védica. Descubre tu signo lunar, estrella de nacimiento y Dasha.' },
      pt:{ title:'Mapa Natal Grátis — Calculadora Kundali Védica | Khagatara', description:'Gere seu mapa natal gratuito usando astrologia védica. Descubra seu signo lunar, estrela de nascimento e Dasha.' },
      fr:{ title:"Thème Astral Gratuit — Calculateur Kundali Védique | Khagatara", description:"Générez votre thème astral gratuit avec l'astrologie védique. Découvrez votre signe lunaire, étoile de naissance et Dasha." },
      it:{ title:"Tema Natale Gratis — Calcolatore Kundali Vedico | Khagatara", description:"Genera il tuo tema natale gratuito usando l'astrologia vedica. Scopri il tuo segno lunare, stella di nascita e Dasha." },
      de:{ title:'Geburtshoroskop Kostenlos — Vedische Geburtskarte | Khagatara', description:'Erstellen Sie Ihr kostenloses vedisches Geburtshoroskop mit Mondzeichen, Nakshatra und persönlicher Deutung.' },
      hi:{ title:'Janam Kundali Hindi — मुफ़्त जन्म कुंडली | Khagatara', description:'हिंदी में अपनी मुफ़्त जन्म कुंडली, चंद्र राशि, नक्षत्र और वैदिक ज्योतिष रिपोर्ट देखें।' },
      ar:{ title:'خريطة الميلاد المجانية — كوندالي الفيدية | Khagatara', description:'أنشئ خريطة ميلادك المجانية باستخدام علم الفلك الفيدي. اكتشف برجك القمري ونجم ميلادك وداشا.' },
    },
  },
  compatibility: {
    defaultSlug: 'numerology-compatibility',
    en: {
      title: 'Numerology Compatibility — Love and Relationship Match | Khagatara',
      description: 'Check numerology compatibility for love, marriage and relationships using life path numbers and Vedic birth details.',
    },
    existingSlugs: {
      es:'compatibilidad-numerologica', pt:'compatibilidade-numerologica', fr:'compatibilite-numerologique',
      it:'compatibilita-numerologica', de:'numerologie-kompatibilitaet', hi:'numerology-milan',
      'zh-cn':'shuxue-xianghe-xing','zh-tw':'shuxue-xianghe-xing', ja:'suuji-aishou',
      ru:'sovmestimost-numerologiya', ko:'surisunsul-gunghabseong', ar:'altawafuq-alaqami',
      fa:'sazegari-adadshenasi', tr:'numeroloji-uyumlulugu', bn:'sankhyatattwa-mil',
      id:'kecocokan-numerologi',
    },
    existingMeta: {
      es:{ title:'Compatibilidad Numerológica — Amor y Relaciones | Khagatara', description:'Comprueba la compatibilidad numerológica para el amor, matrimonio y relaciones usando números de camino de vida.' },
      pt:{ title:'Compatibilidade Numerológica — Amor e Relacionamentos | Khagatara', description:'Verifique a compatibilidade numerológica para amor, casamento e relacionamentos usando números de caminho de vida.' },
      fr:{ title:"Compatibilité Numérologique — Amour et Relations | Khagatara", description:"Vérifiez la compatibilité numérologique pour l'amour, le mariage et les relations en utilisant les nombres de chemin de vie." },
      it:{ title:'Compatibilità Numerologica — Amore e Relazioni | Khagatara', description:'Controlla la compatibilità numerologica per amore, matrimonio e relazioni usando i numeri del cammino di vita.' },
      de:{ title:'Numerologie Kompatibilität — Liebe und Beziehung | Khagatara', description:'Prüfen Sie Ihre numerologische Kompatibilität für Liebe, Beziehung und Partnerschaft.' },
      hi:{ title:'Numerology Milan — अंक ज्योतिष मिलान | Khagatara', description:'अंक ज्योतिष से प्रेम, विवाह और रिश्तों की अनुकूलता जांचें।' },
      ar:{ title:'توافق الأرقام — توافق الحب والعلاقات | Khagatara', description:'تحقق من توافق الأرقام للحب والزواج والعلاقات باستخدام أرقام مسار الحياة.' },
    },
  },
  astrologyChart: {
    defaultSlug: 'free-astrology-chart',
    en: {
      title: 'Free Astrology Chart — Vedic Birth Chart Online | Khagatara',
      description: 'Create a free astrology chart online with Vedic Moon sign, Nakshatra, planetary periods and personalized birth insights.',
    },
    existingSlugs: {
      es:'mapa-astral-gratis', pt:'mapa-astral-gratis', fr:'carte-natale-gratuite',
      it:'mappa-astrale-gratis', de:'geburtstagskarte-kostenlos', hi:'janam-patrika-hindi',
      'zh-cn':'mianfei-zhanxing-tiantu','zh-tw':'mianfei-zhanxing-tiantu', ja:'muryou-占星術-chato',
      ru:'besplatnaya-astrologia-karta', ko:'muryo-jeomsul-chado', ar:'khart-altanjim-almajani',
      fa:'naghsh-astrology-rayegan', tr:'ucretsiz-astroloji-haritasi', bn:'binamulye-jyotish-chart',
      id:'bagan-astrologi-gratis',
    },
    existingMeta: {
      es:{ title:'Mapa Astral Gratis — Carta Natal Védica Online | Khagatara', description:'Crea un mapa astral gratuito online con signo lunar védico, Nakshatra y períodos planetarios.' },
      pt:{ title:'Mapa Astral Grátis — Carta Natal Védica Online | Khagatara', description:'Crie um mapa astral gratuito online com signo lunar védico, Nakshatra e períodos planetários.' },
      fr:{ title:"Carte Natale Gratuite — Carte Astrale Védique Online | Khagatara", description:"Créez une carte natale gratuite en ligne avec signe lunaire védique, Nakshatra et périodes planétaires." },
      it:{ title:'Mappa Astrale Gratis — Carta Natale Vedica Online | Khagatara', description:'Crea una mappa astrale gratuita online con segno lunare vedico, Nakshatra e periodi planetari.' },
      de:{ title:'Geburtskarte Kostenlos — Vedische Astrologie | Khagatara', description:'Berechnen Sie Ihre kostenlose vedische Geburtskarte mit Mondzeichen, Nakshatra und Dasha.' },
      hi:{ title:'Janam Patrika Hindi — मुफ़्त जन्म पत्रिका | Khagatara', description:'हिंदी में जन्म पत्रिका, चंद्र राशि, नक्षत्र और दशा के साथ वैदिक रिपोर्ट प्राप्त करें।' },
      ar:{ title:'خريطة الأبراج المجانية — خريطة الميلاد الفيدية | Khagatara', description:'أنشئ خريطة أبراجك المجانية أونلاين مع البرج القمري الفيدي والنكشاترا والفترات الكوكبية.' },
    },
  },
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function delay(ms) {
  return new Promise(r => setTimeout(r, ms))
}

// ─── Restore any Sanskrit/brand terms mangled by translation ─────────────────

function restoreSanskrit(text) {
  for (const term of SANSKRIT_TERMS) {
    const re = new RegExp(term, 'gi')
    text = text.replace(re, term)
  }
  return text
}

// ─── Translation providers (free only) ───────────────────────────────────────

async function tryMyMemory(text, targetLang) {
  try {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${targetLang}`
    const res = await fetch(url)
    const data = await res.json()
    if (data?.responseStatus === 200 && data.responseData.translatedText !== text)
      return data.responseData.translatedText
    return null
  } catch { return null }
}

async function tryGoogleFree(text, targetLang) {
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`
    const res = await fetch(url)
    const data = await res.json()
    if (data && data[0]) return data[0].map(s => s[0]).join('')
    return null
  } catch { return null }
}

async function translateText(text, targetLang) {
  if (!text || text.trim() === '') return ''
  const mymemory = await tryMyMemory(text, targetLang)
  if (mymemory) return mymemory
  const google = await tryGoogleFree(text, targetLang)
  if (google) return google
  return text
}

// ─── Core: generate meta + slug for one topic + one language ─────────────────

async function generateForLang(topicKey, langCode, langName, topicData) {
  const needsMeta = !topicData.existingMeta[langCode]
  const needsSlug = !topicData.existingSlugs[langCode]
  if (!needsMeta && !needsSlug) return null

  let title       = topicData.en.title
  let description = topicData.en.description
  let slug        = topicData.defaultSlug

  if (needsMeta) {
    const [t, d] = await Promise.all([
      translateText(topicData.en.title, langCode),
      translateText(topicData.en.description, langCode),
    ])
    title       = restoreSanskrit(t || topicData.en.title)
    description = restoreSanskrit(d || topicData.en.description)
  }

  // Slug is always Latin/ASCII — keep the English default, no translation needed
  slug = topicData.existingSlugs[langCode] || topicData.defaultSlug

  return { langCode, topicKey, title, description, slug, needsMeta, needsSlug }
}

// ─── Build output code blocks ─────────────────────────────────────────────────

function buildSeoTsBlock(allResults) {
  // Group by topic → lang
  const byTopic = {}
  for (const r of allResults) {
    if (!byTopic[r.topicKey]) byTopic[r.topicKey] = {}
    if (r.needsMeta) {
      byTopic[r.topicKey][r.langCode] = { title: r.title, description: r.description }
    }
  }

  let out = `// ─── GENERATED by translate-seo.js ───────────────────────────────────────────\n`
  out += `// Paste these entries into TOPIC_META in seo.ts\n\n`

  for (const [topicKey, langs] of Object.entries(byTopic)) {
    out += `// ── ${topicKey} ──\n`
    for (const [lang, meta] of Object.entries(langs)) {
      out += `  ${lang}: { title: ${JSON.stringify(meta.title)}, description: ${JSON.stringify(meta.description)} },\n`
    }
    out += '\n'
  }
  return out
}

function buildSeoConfigBlock(allResults) {
  // Group by topic → lang
  const byTopic = {}
  for (const r of allResults) {
    if (!byTopic[r.topicKey]) byTopic[r.topicKey] = {}
    if (r.needsSlug) {
      byTopic[r.topicKey][r.langCode] = r.slug
    }
  }

  let out = `// ─── GENERATED by translate-seo.js ───────────────────────────────────────────\n`
  out += `// Paste these slug entries into TOPIC_DEFS slugs in seo-config.ts\n\n`

  for (const [topicKey, langs] of Object.entries(byTopic)) {
    out += `// ── ${topicKey} ──\n`
    for (const [lang, slug] of Object.entries(langs)) {
      out += `      '${lang}': '${slug}',\n`
    }
    out += '\n'
  }
  return out
}

function buildMergedSeoTs(allResults, existingTopics) {
  // Build complete TOPIC_META object merging existing + generated
  const merged = {}

  for (const [topicKey, topicData] of Object.entries(existingTopics)) {
    merged[topicKey] = { ...topicData.existingMeta, en: topicData.en }
  }

  for (const r of allResults) {
    if (r.needsMeta) {
      if (!merged[r.topicKey]) merged[r.topicKey] = {}
      merged[r.topicKey][r.langCode] = { title: r.title, description: r.description }
    }
  }

  let out = `// ─── COMPLETE TOPIC_META — paste into seo.ts ─────────────────────────────────\n`
  out += `const TOPIC_META: Record<string, Record<string, { title: string; description: string }>> = {\n`

  for (const [topicKey, langs] of Object.entries(merged)) {
    out += `  ${topicKey}: {\n`
    for (const [lang, meta] of Object.entries(langs)) {
      out += `    ${lang}: { title: ${JSON.stringify(meta.title)}, description: ${JSON.stringify(meta.description)} },\n`
    }
    out += `  },\n`
  }

  out += `}\n`
  return out
}

function buildMergedSeoConfig(allResults, existingTopics) {
  const merged = {}
  for (const [topicKey, topicData] of Object.entries(existingTopics)) {
    merged[topicKey] = { ...topicData.existingSlugs }
  }
  for (const r of allResults) {
    if (r.needsSlug) {
      if (!merged[r.topicKey]) merged[r.topicKey] = {}
      merged[r.topicKey][r.langCode] = r.slug
    }
  }

  let out = `// ─── COMPLETE slugs section — paste into TOPIC_DEFS in seo-config.ts ──────────\n\n`
  for (const [topicKey, slugs] of Object.entries(merged)) {
    out += `// ${topicKey}\nslugs: {\n`
    for (const [lang, slug] of Object.entries(slugs)) {
      out += `  '${lang}': '${slug}',\n`
    }
    out += `},\n\n`
  }
  return out
}

// ─── Progress tracking ────────────────────────────────────────────────────────

function saveProgress(data) {
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'progress.json'),
    JSON.stringify(data, null, 2),
    'utf8'
  )
}

function loadProgress() {
  const p = path.join(OUTPUT_DIR, 'progress.json')
  if (fs.existsSync(p)) {
    try { return JSON.parse(fs.readFileSync(p, 'utf8')) } catch {}
  }
  return {}
}

// ─── Auto-patch seo.ts directly ──────────────────────────────────────────────
// Injects new lang entries into the correct topic block inside TOPIC_META.
// If a lang entry already exists it is left untouched (safe to re-run).

function patchSeoTs(allResults, seoTsPath) {
  if (!fs.existsSync(seoTsPath)) {
    console.warn(`  ⚠️  seo.ts not found at ${seoTsPath} — skipping auto-patch`)
    return false
  }

  // backup
  fs.copyFileSync(seoTsPath, seoTsPath + '.bak')

  let src = fs.readFileSync(seoTsPath, 'utf8')
  let patched = 0

  for (const r of allResults) {
    if (!r.needsMeta) continue

    const langLine = `    ${r.langCode}: { title: ${JSON.stringify(r.title)}, description: ${JSON.stringify(r.description)} },`

    // Already present?
    if (src.includes(`    ${r.langCode}: {`) && src.includes(r.title)) continue

    // Find the topic block e.g.  "  numerology: {"  and inject before its closing "},"
    // We look for the topic key followed by a closing brace with a trailing comma
    const topicPattern = new RegExp(
      `(  ${r.topicKey}:\\s*\\{[\\s\\S]*?)(  \\},)`,
      'm'
    )
    if (topicPattern.test(src)) {
      src = src.replace(topicPattern, `$1${langLine}\n$2`)
      patched++
    } else {
      console.warn(`  ⚠️  Topic block "${r.topicKey}" not found in seo.ts`)
    }
  }

  fs.writeFileSync(seoTsPath, src, 'utf8')
  console.log(`  ✅ seo.ts patched — ${patched} new entries written (backup: seo.ts.bak)`)
  return true
}

// ─── Auto-patch seo-config.ts directly ───────────────────────────────────────
// Injects new slug entries into the correct topic's slugs:{} block.

function patchSeoConfig(allResults, seoConfigPath) {
  if (!fs.existsSync(seoConfigPath)) {
    console.warn(`  ⚠️  seo-config.ts not found at ${seoConfigPath} — skipping auto-patch`)
    return false
  }

  // backup
  fs.copyFileSync(seoConfigPath, seoConfigPath + '.bak')

  let src = fs.readFileSync(seoConfigPath, 'utf8')
  let patched = 0

  for (const r of allResults) {
    if (!r.needsSlug) continue

    const slugLine = `      '${r.langCode}': '${r.slug}',`

    // Already present?
    if (src.includes(`'${r.langCode}': '`) && src.includes(r.slug)) continue

    // Find the topic's slugs block and inject before its closing brace
    // Pattern: key: 'numerology' ... slugs: { ... }
    // We target the slugs block inside each topic object
    const topicSlugPattern = new RegExp(
      `(key:\\s*'${r.topicKey}'[\\s\\S]*?slugs:\\s*\\{[\\s\\S]*?)(    \\},)`,
      'm'
    )
    if (topicSlugPattern.test(src)) {
      src = src.replace(topicSlugPattern, `$1${slugLine}\n$2`)
      patched++
    } else {
      console.warn(`  ⚠️  Slug block for "${r.topicKey}" not found in seo-config.ts`)
    }
  }

  fs.writeFileSync(seoConfigPath, src, 'utf8')
  console.log(`  ✅ seo-config.ts patched — ${patched} new slugs written (backup: seo-config.ts.bak)`)
  return true
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function run() {
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true })

  const args = process.argv.slice(2)
  let targetLangs

  if (args.length === 0 || args[0] === 'all') {
    targetLangs = LANGUAGE_CONFIG.map(([code]) => code).filter(c => c !== 'en')
    console.log(`\n🌍 Translating SEO metadata for ALL ${targetLangs.length} languages...\n`)
  } else {
    targetLangs = args
    console.log(`\n🎯 Translating SEO metadata for: ${targetLangs.join(', ')}\n`)
  }

  const progress  = loadProgress()
  const allResults = []

  const topicKeys  = Object.keys(TOPICS)
  const totalTasks = targetLangs.length * topicKeys.length
  let completed = 0
  let skipped   = 0
  let failed    = 0

  for (const [langCode, langName] of LANGUAGE_CONFIG) {
    if (!targetLangs.includes(langCode)) continue

    console.log(`\n=== [${langCode.toUpperCase()}] ${langName} ===`)

    for (const topicKey of topicKeys) {
      completed++
      const progressKey = `${langCode}::${topicKey}`

      // Resume from saved progress
      if (progress[progressKey]) {
        console.log(`  ⏭️  Skipping (cached): ${topicKey}`)
        allResults.push(progress[progressKey])
        skipped++
        continue
      }

      const topicData = TOPICS[topicKey]
      const needsMeta = !topicData.existingMeta[langCode]
      const needsSlug = !topicData.existingSlugs[langCode]

      if (!needsMeta && !needsSlug) {
        console.log(`  ✅ Already exists: ${topicKey}`)
        skipped++
        continue
      }

      process.stdout.write(`  🔄 [${completed}/${totalTasks}] ${topicKey}... `)

      const result = await generateForLang(topicKey, langCode, langName, topicData)

      if (result) {
        console.log(`✅`)
        allResults.push(result)
        progress[progressKey] = result
        saveProgress(progress)
      } else {
        console.log(`❌`)
        failed++
      }

      await delay(DELAY_MS)
    }
  }

  // ── Auto-patch the actual source files ───────────────────────────────────────

  console.log('\n\n📝 Auto-patching source files...\n')

  const projectRoot   = path.join(__dirname, '..')
  const seoTsPath     = path.join(projectRoot, 'src', 'app', 'seo.ts')
  const seoConfigPath = path.join(projectRoot, 'src', 'app', 'seo-config.ts')

  patchSeoTs(allResults, seoTsPath)
  patchSeoConfig(allResults, seoConfigPath)

  // ── Also write output files as backup / reference ─────────────────────────

  const patchMeta  = buildSeoTsBlock(allResults)
  const patchSlugs = buildSeoConfigBlock(allResults)
  fs.writeFileSync(path.join(OUTPUT_DIR, 'patch-seo-ts.txt'),     patchMeta,  'utf8')
  fs.writeFileSync(path.join(OUTPUT_DIR, 'patch-seo-config.txt'), patchSlugs, 'utf8')

  const fullMeta  = buildMergedSeoTs(allResults, TOPICS)
  const fullSlugs = buildMergedSeoConfig(allResults, TOPICS)
  fs.writeFileSync(path.join(OUTPUT_DIR, 'complete-TOPIC_META.ts'), fullMeta,  'utf8')
  fs.writeFileSync(path.join(OUTPUT_DIR, 'complete-slugs.ts'),      fullSlugs, 'utf8')

  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'raw-results.json'),
    JSON.stringify(allResults, null, 2),
    'utf8'
  )

  // ── Summary ──────────────────────────────────────────────────────────────────
  console.log('\n' + '━'.repeat(50))
  console.log(`✅ Generated : ${allResults.length}`)
  console.log(`⏭️  Skipped   : ${skipped}`)
  console.log(`❌ Failed    : ${failed}`)
  console.log('━'.repeat(50))
  console.log('\n📂 Source files updated:')
  console.log('  src/seo.ts            → new meta entries injected')
  console.log('  src/seo-config.ts     → new slug entries injected')
  console.log('  *.bak                 → backups created before patching')
  console.log('\n📂 Reference copies in ./seo-output/ if you need to diff or rollback')
  console.log('\n🎉 Done!\n')
}

run()
