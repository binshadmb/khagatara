const fs = require('fs')
const path = require('path')

const TOPIC_MAPPING = {
  'numerologia-gratis': 'numerology',
  'carta-natal-gratis': 'birthChart',
  'astrologia-vedica-gratis': 'vedicAstrology',
  'compatibilidad-numerologica': 'compatibility',
  'mapa-astral-gratis': 'astrologyChart',
  'numerologia-nombre': 'nameNumerology',
  'que-significa-numero-11': 'number11'
}

function ensureDirectoryExistence(filePath) {
  const dirname = path.dirname(filePath)
  if (fs.existsSync(dirname)) {
    return true
  }
  ensureDirectoryExistence(dirname)
  fs.mkdirSync(dirname)
}

function migrate() {
  // Resolve paths relative to __dirname (always points to scripts/)
  const projectRoot = path.join(__dirname, '..')
  const esDir = path.join(projectRoot, 'src', 'app', 'es')
  const outDir = path.join(projectRoot, 'src', 'content', 'es')

  if (!fs.existsSync(esDir)) {
    console.error('Spanish source directory not found at:', esDir)
    return
  }

  const dirs = fs.readdirSync(esDir)
  dirs.forEach(slug => {
    const topicKey = TOPIC_MAPPING[slug]
    if (!topicKey) return

    const pagePath = path.join(esDir, slug, 'page.tsx')
    if (!fs.existsSync(pagePath)) return

    console.log(`Migrating: ${slug} -> ${topicKey}.md`)
    const code = fs.readFileSync(pagePath, 'utf8')

    // Find the <article> contents
    const articleMatch = code.match(/<article[\s\S]*?>([\s\S]*?)<\/article>/)
    if (!articleMatch) {
      console.warn(`Could not find article block in ${slug}`)
      return
    }

    let body = articleMatch[1]

    // 1. Convert headers
    body = body.replace(/<h2[\s\S]*?>([\s\S]*?)<\/h2>/g, '# $1')
    body = body.replace(/<h3[\s\S]*?>([\s\S]*?)<\/h3>/g, '## $1')
    body = body.replace(/<h4[\s\S]*?>([\s\S]*?)<\/h4>/g, '### $1')

    // 2. Convert Horizontal rules
    body = body.replace(/<hr[\s\S]*?\/>/g, '\n---\n')

    // 3. Convert lists inside .map() arrays
    const mapMatch = body.match(/\{\s*\[([\s\S]*?)\]\.map\(\s*\(\[([\s\S]*?)\]\)\s*=>([\s\S]*?)\)\s*\}/)
    if (mapMatch) {
      try {
        const rawArray = `[${mapMatch[1]}]`
        const items = eval(rawArray)
        let listStr = '\n'
        items.forEach(item => {
          if (item.length === 2) {
            listStr += `*   **${item[0]}:** ${item[1]}\n`
          } else if (item.length === 3) {
            listStr += `*   **${item[0]} (${item[1]}):** ${item[2]}\n`
          }
        })
        body = body.replace(mapMatch[0], listStr)
      } catch (e) {
        console.error('Failed to parse map array in', slug, e)
      }
    }

    // 4. Convert specific checklist divs into Markdown
    body = body.replace(/<div style=\{\{\s*background: '#1e1e2e',[\s\S]*?\}\}>([\s\S]*?)<\/div>/g, (m, content) => {
      return content
        .replace(/<p[\s\S]*?>✦ (.*?)<\/p>/g, '*   $1')
        .replace(/<p[\s\S]*?> (.*?)<\/p>/g, '*   $1')
        .replace(/<p>(.*?)<\/p>/g, '*   $1')
    })

    // 5. Convert generic paragraphs & strong text
    body = body.replace(/<p[\s\S]*?>([\s\S]*?)<\/p>/g, '\n$1\n')
    body = body.replace(/<strong[\s\S]*?>([\s\S]*?)<\/strong>/g, '**$1**')

    // 6. Remove standard react CTA elements from the body
    body = body.replace(/<div style=\{\{\s*textAlign: 'center'[\s\S]*?<\/div>/g, '')
    body = body.replace(/<Link[\s\S]*?<\/Link>/g, '')

    // Clean up empty lines and tags
    let md = body
      .replace(/<ul[\s\S]*?>([\s\S]*?)<\/ul>/g, '$1')
      .replace(/<li[\s\S]*?>([\s\S]*?)<\/li>/g, '*   $1')
      .replace(/<div[\s\S]*?>([\s\S]*?)<\/div>/g, '$1')
      .replace(/<span[\s\S]*?>([\s\S]*?)<\/span>/g, '$1')
      .replace(/\{([\s\S]*?)\}/g, '$1')
      .replace(/\n\s*\n+/g, '\n\n')
      .trim()

    // Write translated file
    const dest = path.join(outDir, `${topicKey}.md`)
    ensureDirectoryExistence(dest)
    fs.writeFileSync(dest, md, 'utf8')
  })

  console.log('Migration completed successfully!')
}

migrate()
