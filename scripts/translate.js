const fs = require('fs')
const path = require('path')

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
  ['ny',    'Chichewa',             'ltr']
]

const TOPIC_KEYS = fs.readdirSync(path.join(__dirname, '../src/content/master'))
  .filter(f => f.endsWith('.md'))
  .map(f => f.replace('.md', ''))

const SANSKRIT_TERMS = [
  'nakshatra','dasha','rashi','vedic','vimshottari','mahadasha',
  'antardasha','kundali','jyotish','graha','lagna','ascendant',
  'chaldean','pythagorean','numerology','astrology','karma',
  'dharma','pada','atmakaraka','khagatara'
]

function restoreSanskrit(text) {
  for (const term of SANSKRIT_TERMS) {
    const re = new RegExp(term, 'gi')
    text = text.replace(re, term)
  }
  return text
}

async function tryMyMemory(text, targetLang) {
  try {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${targetLang}`
    const res = await fetch(url)
    const data = await res.json()
    if (data?.responseStatus === 200 &&
        data.responseData.translatedText !== text) {
      return data.responseData.translatedText
    }
    return null
  } catch {
    return null
  }
}

async function tryGoogleFree(text, targetLang) {
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`
    const res = await fetch(url)
    const data = await res.json()
    if (data && data[0]) return data[0].map(s => s[0]).join('')
    return null
  } catch {
    return null
  }
}

async function translateText(text, targetLang) {
  if (!text || text.trim() === '') return ''

  const mymemory = await tryMyMemory(text, targetLang)
  if (mymemory) return restoreSanskrit(mymemory)

  const google = await tryGoogleFree(text, targetLang)
  if (google) return restoreSanskrit(google)

  console.warn(`  ⚠️  All failed [${targetLang}] — keeping original`)
  return text
}

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function ensureDirectoryExistence(filePath) {
  const dirname = path.dirname(filePath)
  if (fs.existsSync(dirname)) {
    return true
  }
  ensureDirectoryExistence(dirname)
  fs.mkdirSync(dirname)
}

async function translateMarkdownBlock(block, targetLang) {
  const trimmed = block.trim()
  if (!trimmed) return ''

  // Preserve markdown structures during translation
  let prefix = ''
  let textToTranslate = trimmed

  if (trimmed.startsWith('# ')) {
    prefix = '# '
    textToTranslate = trimmed.slice(2)
  } else if (trimmed.startsWith('## ')) {
    prefix = '## '
    textToTranslate = trimmed.slice(3)
  } else if (trimmed.startsWith('### ')) {
    prefix = '### '
    textToTranslate = trimmed.slice(4)
  } else if (trimmed === '---') {
    return '---'
  } else if (trimmed.startsWith('*   ') || trimmed.startsWith('-   ')) {
    prefix = '*   '
    textToTranslate = trimmed.slice(4)
  }

  // Handle bold double asterisks ** inside text
  const parts = textToTranslate.split('**')
  const translatedParts = []

  for (let i = 0; i < parts.length; i++) {
    if (parts[i].trim() === '') {
      translatedParts.push('')
    } else {
      const translated = await translateText(parts[i], targetLang)
      translatedParts.push(translated)
    }
  }

  // Re-join with **
  const joinedText = translatedParts.reduce((acc, part, index) => {
    if (index === 0) return part
    return acc + '**' + part
  }, '')

  return prefix + joinedText
}

async function translateFile(topicKey, targetLang) {
  const projectRoot = path.join(__dirname, '..')
  const masterPath = path.join(projectRoot, 'src', 'content', 'master', `${topicKey}.md`)
  const destPath = path.join(projectRoot, 'src', 'content', targetLang, `${topicKey}.md`)

  if (!fs.existsSync(masterPath)) {
    console.error(`Master file for ${topicKey} not found!`)
    return
  }

  console.log(` Translating ${topicKey} to [${targetLang}]...`)
  const content = fs.readFileSync(masterPath, 'utf8')
  
  // Split by double line breaks to get paragraphs
  const blocks = content.split('\n\n')
  const translatedBlocks = []

  for (const block of blocks) {
    if (block.trim() === '') {
      translatedBlocks.push('')
      continue
    }

    // Split lists by single newlines if it's a list block
    if (block.trim().startsWith('*   ') || block.trim().startsWith('-   ')) {
      const lines = block.split('\n')
      const translatedLines = []
      for (const line of lines) {
        const transLine = await translateMarkdownBlock(line, targetLang)
        translatedLines.push(transLine)
        await delay(100) // gentle delay to prevent rate limit
      }
      translatedBlocks.push(translatedLines.join('\n'))
    } else {
      const transBlock = await translateMarkdownBlock(block, targetLang)
      translatedBlocks.push(transBlock)
      await delay(150) // gentle delay to prevent rate limit
    }
  }

  const finalContent = translatedBlocks.join('\n\n')
  ensureDirectoryExistence(destPath)
  fs.writeFileSync(destPath, finalContent, 'utf8')
  console.log(`✅ Successfully saved translated ${topicKey} to: src/content/${targetLang}/${topicKey}.md`)
}

async function run() {
  const targetLanguages = process.argv.slice(2)
  
  if (targetLanguages.length === 0) {
    console.log('Usage: node scripts/translate.js <lang-code1> <lang-code2> ...')
    console.log('Or use "all" to translate all 99 non-English languages.')
    return
  }

  let languagesToProcess = targetLanguages
  if (targetLanguages[0] === 'all') {
    languagesToProcess = LANGUAGE_CONFIG.map(([code]) => code).filter(code => code !== 'en')
  }

  console.log(`Starting translation pipeline for languages: ${languagesToProcess.join(', ')}`)

  for (const lang of languagesToProcess) {
    console.log(`\n=== Translating Language Cluster: [${lang.toUpperCase()}] ===`)
    for (const topicKey of TOPIC_KEYS) {
      try {
        await translateFile(topicKey, lang)
        await delay(500) // delay between topics
      } catch (err) {
        console.error(`Failed to translate ${topicKey} to ${lang}:`, err)
      }
    }
  }

  console.log('\n🎉 All requested translations completed successfully!')
}

run()
