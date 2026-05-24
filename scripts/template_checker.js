const fs = require('fs')
const path = require('path')

const LANGS = fs.readdirSync(path.join(__dirname, '../src/content'))
  .filter(f => f !== 'master' && f !== '.DS_Store')

const masterDir = path.join(__dirname, '../src/content/master')
const TOPICS = fs.readdirSync(masterDir)
  .filter(f => f.endsWith('.md'))
  .map(f => f.replace('.md', ''))

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

    // Language leak check
    const allLangs = LANGS.filter(f => f !== lang)

    let leakFound = false
    for (const otherLang of allLangs) {
      const otherFile = path.join(__dirname, '../src/content', otherLang, `${topic}.md`)
      if (!fs.existsSync(otherFile)) continue
      const otherContent = fs.readFileSync(otherFile, 'utf8')
      if (translated.trim() === otherContent.trim()) {
        console.log(`🔀 LANG LEAK  [${lang}] ${topic}.md — identical to [${otherLang}]`)
        issues++
        leakFound = true
        break
      }
    }
    if (leakFound) continue

    console.log(`✅ OK        [${lang}] ${topic}.md`)
  }
}

console.log(`\n${issues === 0 ? '🎉 All clean!' : `⚠️  ${issues} issues found`}`)
