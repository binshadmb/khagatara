const fs = require('fs')
const path = require('path')

const CJK_LANGS = ['zh-cn','zh-tw','ja','ko']

const masterDir = path.join(__dirname, '../src/content/master')
const contentDir = path.join(__dirname, '../src/content')
const TOPICS = fs.readdirSync(masterDir)
  .filter(f => f.endsWith('.md'))
  .map(f => f.replace('.md', ''))

// ── Audit ──────────────────────────────────────────────────────
function audit() {
  const langs = fs.readdirSync(contentDir)
    .filter(f => f !== 'master' && f !== '.DS_Store')

  const issues = []
  console.log('\n🔍 Auditing...\n')

  for (const lang of langs) {
    if (CJK_LANGS.includes(lang)) continue // skip CJK false positives
    for (const topic of TOPICS) {
      const masterFile = path.join(masterDir, `${topic}.md`)
      const langFile = path.join(contentDir, lang, `${topic}.md`)

      if (!fs.existsSync(langFile)) {
        console.log(`❌ MISSING   [${lang}] ${topic}.md`)
        issues.push({ lang, topic, reason: 'missing' })
        continue
      }

      const master = fs.readFileSync(masterFile, 'utf8')
      const translated = fs.readFileSync(langFile, 'utf8')

      if (translated.trim() === master.trim()) {
        console.log(`⚠️  UNTRANSLATED [${lang}] ${topic}.md`)
        issues.push({ lang, topic, reason: 'untranslated' })
        continue
      }

      const allLangs = fs.readdirSync(contentDir)
        .filter(f => f !== 'master' && f !== lang && f !== '.DS_Store')

      let leakFound = false
      for (const otherLang of allLangs) {
        const otherFile = path.join(contentDir, otherLang, `${topic}.md`)
        if (!fs.existsSync(otherFile)) continue
        const otherContent = fs.readFileSync(otherFile, 'utf8')
        if (translated.trim() === otherContent.trim()) {
          console.log(`🔀 LANG LEAK  [${lang}] ${topic}.md — identical to [${otherLang}]`)
          issues.push({ lang, topic, reason: 'leak', source: otherLang })
          leakFound = true
          break
        }
      }
      if (leakFound) continue

      console.log(`✅ OK        [${lang}] ${topic}.md`)
    }
  }
  return issues
}

// ── Translate ──────────────────────────────────────────────────
const DEEPL_FREE_KEY = process.env.DEEPL_API_KEY || ''
const CLAUDE_API_KEY = process.env.CLAUDE_API_KEY || ''

const DEEPL_LANG_MAP = {
  'en':'EN','es':'ES','pt':'PT','fr':'FR','it':'IT',
  'de':'DE','nl':'NL','pl':'PL','ru':'RU','ja':'JA',
  'zh-cn':'ZH','bg':'BG','cs':'CS','da':'DA','el':'EL',
  'et':'ET','fi':'FI','hu':'HU','id':'ID','ko':'KO',
  'lt':'LT','lv':'LV','ro':'RO','sk':'SK','sl':'SL',
  'sv':'SV','tr':'TR','uk':'UK'
}

const SANSKRIT_TERMS = [
  'nakshatra','dasha','rashi','vedic','vimshottari','mahadasha',
  'antardasha','kundali','jyotish','graha','lagna','ascendant',
  'chaldean','pythagorean','numerology','astrology','karma',
  'dharma','pada','atmakaraka','khagatara'
]

async function tryClaude(text, targetLang) {
  if (!CLAUDE_API_KEY) return null
  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': CLAUDE_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: `Translate to ${targetLang}.\nKeep Sanskrit/Vedic terms as-is: ${SANSKRIT_TERMS.join(', ')}. Return ONLY the translation:\n\n${text}`
        }]
      })
    })
    const data = await res.json()
    if (data?.content?.[0]?.text) return data.content[0].text
    return null
  } catch {
    return null
  }
}

async function tryDeepL(text, targetLang) {
  if (!DEEPL_FREE_KEY) return null
  const deeplLang = DEEPL_LANG_MAP[targetLang]
  if (!deeplLang) return null
  try {
    const res = await fetch('https://api-free.deepl.com/v2/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `DeepL-Auth-Key ${DEEPL_FREE_KEY}`
      },
      body: JSON.stringify({ text: [text], target_lang: deeplLang })
    })
    const data = await res.json()
    if (data?.translations?.[0]) return data.translations[0].text
    return null
  } catch {
    return null
  }
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

  const results = []

  const claude = await tryClaude(text, targetLang)
  if (claude) results.push({ source: 'claude', text: claude, weight: 4 })

  const deepl = await tryDeepL(text, targetLang)
  if (deepl) results.push({ source: 'deepl', text: deepl, weight: 3 })

  const mymemory = await tryMyMemory(text, targetLang)
  if (mymemory) results.push({ source: 'mymemory', text: mymemory, weight: 2 })

  const google = await tryGoogleFree(text, targetLang)
  if (google) results.push({ source: 'google', text: google, weight: 1 })

  if (results.length === 0) {
    console.warn(`  ⚠️  All failed [${targetLang}] — keeping original`)
    return text
  }

  const claudeResult = results.find(r => r.source === 'claude')
  if (claudeResult) return claudeResult.text

  const best = results.sort((a, b) => b.weight - a.weight)[0]
  return best.text
}

async function delay(ms) {
  return new Promise(r => setTimeout(r, ms))
}

async function translateMarkdownBlock(block, targetLang) {
  const trimmed = block.trim()
  if (!trimmed) return ''
  let prefix = ''
  let text = trimmed
  if (trimmed.startsWith('# '))        { prefix = '# ';   text = trimmed.slice(2) }
  else if (trimmed.startsWith('## '))  { prefix = '## ';  text = trimmed.slice(3) }
  else if (trimmed.startsWith('### ')) { prefix = '### '; text = trimmed.slice(4) }
  else if (trimmed === '---')          { return '---' }
  else if (trimmed.startsWith('*   ')) { prefix = '*   '; text = trimmed.slice(4) }

  const parts = text.split('**')
  const translated = []
  for (let i = 0; i < parts.length; i++) {
    translated.push(parts[i].trim() === '' ? '' : await translateText(parts[i], targetLang))
  }
  return prefix + translated.reduce((a, p, i) => i === 0 ? p : a + '**' + p, '')
}

async function translateFile(lang, topic) {
  const masterPath = path.join(masterDir, `${topic}.md`)
  const destPath = path.join(contentDir, lang, `${topic}.md`)
  if (!fs.existsSync(masterPath)) return

  console.log(`  🔄 Translating [${lang}] ${topic}.md...`)
  const content = fs.readFileSync(masterPath, 'utf8')
  const blocks = content.split('\n\n')
  const result = []

  for (const block of blocks) {
    if (!block.trim()) { result.push(''); continue }
    if (block.trim().startsWith('*   ') || block.trim().startsWith('-   ')) {
      const lines = block.split('\n')
      const translated = []
      for (const line of lines) {
        translated.push(await translateMarkdownBlock(line, lang))
        await delay(100)
      }
      result.push(translated.join('\n'))
    } else {
      result.push(await translateMarkdownBlock(block, lang))
      await delay(150)
    }
  }

  fs.writeFileSync(destPath, result.join('\n\n'), 'utf8')
  console.log(`  ✅ Done [${lang}] ${topic}.md`)
}

// ── Main ───────────────────────────────────────────────────────
async function run() {
  let attempt = 1
  let remaining = []

  while (true) {
    console.log(`\n🔁 Attempt ${attempt}...\n`)
    const issues = audit()

    if (issues.length === 0) {
      console.log('\n🎉 All clean! Done.')
      break
    }

    console.log(`\n🔧 Found ${issues.length} issues — fixing...\n`)

    const byLang = {}
    for (const { lang, topic } of issues) {
      if (!byLang[lang]) byLang[lang] = []
      if (!byLang[lang].includes(topic)) byLang[lang].push(topic)
    }

    for (const [lang, topics] of Object.entries(byLang)) {
      console.log(`\n=== Fixing [${lang.toUpperCase()}] ===`)
      for (const topic of topics) {
        await translateFile(lang, topic)
        await delay(500)
      }
    }

    remaining = audit()
    if (remaining.length === 0) {
      console.log('\n🎉 All clean! Done.')
      break
    }

    attempt++
    const wait = attempt * 3000
    console.log(`\n⏳ ${remaining.length} still failing — waiting ${wait/1000}s before retry...\n`)
    await delay(wait)
  }
}

run()
