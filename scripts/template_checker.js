const fs = require('fs')
const path = require('path')

const LANGS = fs.readdirSync(path.join(__dirname, '../src/content'))
  .filter(f => f !== 'master' && f !== '.DS_Store')

const TOPICS = [
  'numerology','birthChart','vedicAstrology',
  'compatibility','astrologyChart','nameNumerology','number11'
]

const masterDir = path.join(__dirname, '../src/content/master')
let issues = 0

console.log('\n🔍 Khagatara i18n Audit\n')

for (const lang of LANGS) {
  const langDir = path.join(__dirname, '../src/content', lang)
  for (const topic of TOPICS) {
    const masterFile = path.join(masterDir, `${topic}.md`)
    const langFile = path.join(langDir, `${topic}.md`)

    // Missing file
    if (!fs.existsSync(langFile)) {
      console.log(`❌ MISSING   [${lang}] ${topic}.md`)
      issues++
      continue
    }

    const master = fs.readFileSync(masterFile, 'utf8')
    const translated = fs.readFileSync(langFile, 'utf8')

    // Same as master = not translated
    if (translated.trim() === master.trim()) {
      console.log(`⚠️  UNTRANSLATED [${lang}] ${topic}.md`)
      issues++
      continue
    }

    // Length mismatch > 40% = likely broken
    const ratio = translated.length / master.length
    if (ratio < 0.6 || ratio > 1.8) {
      console.log(`⚠️  LENGTH MISMATCH [${lang}] ${topic}.md (ratio: ${ratio.toFixed(2)})`)
      issues++
      continue
    }

    // Spanish leak check
    const spanishWords = ['gratis','número','signo','estrella','vida']
    const hasSpanish = spanishWords.some(w => translated.includes(w))
    const safeLangs = ['pt','ca','gl','es']
    if (hasSpanish && !safeLangs.includes(lang)) {
      console.log(`🔀 LANG LEAK  [${lang}] ${topic}.md — Spanish words found`)
      issues++
      continue
    }

    console.log(`✅ OK        [${lang}] ${topic}.md`)
  }
}

console.log(`\n${issues === 0 ? '🎉 All clean!' : `⚠️  ${issues} issues found`}`)
