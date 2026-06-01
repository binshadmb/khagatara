export type SitePageKind = 'home' | 'hub' | 'tool' | 'calculator' | 'article' | 'legal' | 'core'

export type SitePage = {
  path: string
  title: string
  eyebrow: string
  description: string
  kind: SitePageKind
  section?: string
  related?: string[]
}

const imageTools = [
  ['image-converter', 'Image Converter'],
  ['jpg-to-png', 'JPG to PNG'],
  ['png-to-jpg', 'PNG to JPG'],
  ['webp-to-png', 'WEBP to PNG'],
  ['image-resizer', 'Image Resizer'],
  ['image-compressor', 'Image Compressor'],
  ['image-remaker', 'Image Remaker'],
  ['studio', 'Khagatara Studio'],
  ['crop-image', 'Crop Image'],
] as const

const pdfTools = [
  ['pdf-merger', 'PDF Merger'],
  ['pdf-splitter', 'PDF Splitter'],
  ['pdf-compressor', 'PDF Compressor'],
  ['pdf-to-word', 'PDF to Word'],
  ['word-to-pdf', 'Word to PDF'],
] as const

const utilityTools = [
  ['qr-code-generator', 'QR Code Generator'],
  ['barcode-generator', 'Barcode Generator'],
  ['password-generator', 'Password Generator'],
  ['random-name-generator', 'Random Name Generator'],
  ['word-counter', 'Word Counter'],
] as const

const calculators = [
  ['gst-calculator', 'GST Calculator'],
  ['emi-calculator', 'EMI Calculator'],
  ['age-calculator', 'Age Calculator'],
  ['bmi-calculator', 'BMI Calculator'],
  ['hotel-cost-calculator', 'Hotel Cost Calculator'],
  ['recipe-cost-calculator', 'Recipe Cost Calculator'],
  ['food-cost-percentage-calculator', 'Food Cost Percentage Calculator'],
  ['restaurant-profit-calculator', 'Restaurant Profit Calculator'],
] as const

const hospitalityPages = [
  ['f-b-interview-questions', 'F&B Interview Questions'],
] as const

const blogPages = [
  ['best-image-format-for-web', 'Best Image Format for Web'],
  ['how-to-reduce-image-size', 'How to Reduce Image Size'],
  ['what-is-webp', 'What Is WEBP'],
  ['hotel-costing-guide', 'Hotel Costing Guide'],
  ['restaurant-cost-control', 'Restaurant Cost Control'],
] as const

export const navLinks = [
  { href: '/tools', label: 'Tools' },
  { href: '/image-tools', label: 'Image Tools' },
  { href: '/pdf-tools', label: 'PDF Tools' },
  { href: '/calculators', label: 'Calculators' },
  { href: '/blog', label: 'Blog' },
]

export const groupedLinks = {
  imageTools: imageTools.map(([slug, title]) => ({ href: `/${slug}`, title })),
  pdfTools: pdfTools.map(([slug, title]) => ({ href: `/${slug}`, title })),
  utilityTools: utilityTools.map(([slug, title]) => ({ href: `/${slug}`, title })),
  calculators: calculators.map(([slug, title]) => ({ href: `/${slug}`, title })),
  hospitality: [...calculators.slice(4), ...hospitalityPages].map(([slug, title]) => ({ href: `/${slug}`, title })),
  blog: blogPages.map(([slug, title]) => ({ href: `/blog/${slug}`, title })),
}

const hubPages: SitePage[] = [
  {
    path: '/',
    title: 'Khagatara Tools',
    eyebrow: 'Useful tools, clean pages',
    description: 'A simple home for image tools, PDF tools, calculators, utility generators, hospitality calculators, and practical guides.',
    kind: 'home',
    related: ['/tools', '/image-tools', '/pdf-tools', '/calculators', '/blog'],
  },
  {
    path: '/tools',
    title: 'All Tools',
    eyebrow: 'Tool hub',
    description: 'Browse every Khagatara tool from one clean index: image tools, PDF tools, generators, counters, and calculators.',
    kind: 'hub',
    related: [...groupedLinks.utilityTools, ...groupedLinks.imageTools, ...groupedLinks.pdfTools].map(link => link.href),
  },
  {
    path: '/image-tools',
    title: 'Image Tools',
    eyebrow: 'Convert, resize, compress',
    description: 'Fast image utility pages for format conversion, resizing, compression, and cropping.',
    kind: 'hub',
    related: groupedLinks.imageTools.map(link => link.href),
  },
  {
    path: '/pdf-tools',
    title: 'PDF Tools',
    eyebrow: 'Merge, split, compress',
    description: 'PDF utility pages for everyday document work including merging, splitting, compression, and format conversion.',
    kind: 'hub',
    related: groupedLinks.pdfTools.map(link => link.href),
  },
  {
    path: '/calculators',
    title: 'Calculators',
    eyebrow: 'Finance, health, hospitality',
    description: 'Simple calculators for GST, EMI, age, BMI, hotel costing, recipes, food cost percentage, and restaurant profit.',
    kind: 'hub',
    related: groupedLinks.calculators.map(link => link.href),
  },
  {
    path: '/blog',
    title: 'Khagatara Blog',
    eyebrow: 'Practical guides',
    description: 'Plain-language guides for web images, PDFs, hotel costing, recipe costing, and restaurant cost control.',
    kind: 'hub',
    related: groupedLinks.blog.map(link => link.href),
  },
]

const corePages: SitePage[] = [
  ['about', 'About Khagatara', 'About', 'Khagatara is being shaped as a practical tool hub for creators, operators, students, and hospitality professionals.'],
  ['contact', 'Contact Khagatara', 'Contact', 'Reach Khagatara for feedback, support, partnerships, and tool requests.'],
].map(([slug, title, eyebrow, description]) => ({
  path: `/${slug}`,
  title,
  eyebrow,
  description,
  kind: 'core' as const,
}))

const legalPages: SitePage[] = [
  ['privacy-policy', 'Privacy Policy', 'Privacy', 'How Khagatara handles data, uploads, cookies, analytics, and user privacy.'],
  ['terms', 'Terms', 'Terms', 'The basic terms for using Khagatara tools, calculators, content, and services.'],
  ['disclaimer', 'Disclaimer', 'Disclaimer', 'Khagatara tools and guides are provided for general information and should be checked before important decisions.'],
].map(([slug, title, eyebrow, description]) => ({
  path: `/${slug}`,
  title,
  eyebrow,
  description,
  kind: 'legal' as const,
}))

const toolPages: SitePage[] = [
  ...imageTools.map(([slug, title]) => ({
    path: `/${slug}`,
    title,
    eyebrow: 'Image tool',
    description: `${title} is part of Khagatara's image tool set for everyday web and content workflows.`,
    kind: 'tool' as const,
    section: 'imageTools',
  })),
  ...pdfTools.map(([slug, title]) => ({
    path: `/${slug}`,
    title,
    eyebrow: 'PDF tool',
    description: `${title} is part of Khagatara's PDF utility set for practical document work.`,
    kind: 'tool' as const,
    section: 'pdfTools',
  })),
  ...utilityTools.map(([slug, title]) => ({
    path: `/${slug}`,
    title,
    eyebrow: 'Utility tool',
    description: `${title} is a simple Khagatara utility for quick everyday tasks.`,
    kind: 'tool' as const,
    section: 'utilityTools',
  })),
]

const calculatorPages: SitePage[] = calculators.map(([slug, title]) => ({
  path: `/${slug}`,
  title,
  eyebrow: slug.includes('hotel') || slug.includes('recipe') || slug.includes('food') || slug.includes('restaurant') ? 'Hospitality calculator' : 'Calculator',
  description: `${title} gives Khagatara a focused landing page for calculator-led search traffic and future interactive features.`,
  kind: 'calculator',
  section: 'calculators',
}))

const hospitalityContentPages: SitePage[] = hospitalityPages.map(([slug, title]) => ({
  path: `/${slug}`,
  title,
  eyebrow: 'Hospitality guide',
  description: `${title} is a hospitality-focused page built from Khagatara's hotel and food and beverage background.`,
  kind: 'core',
  section: 'hospitality',
}))

const articlePages: SitePage[] = blogPages.map(([slug, title]) => ({
  path: `/blog/${slug}`,
  title,
  eyebrow: 'Blog guide',
  description: `${title} is a practical Khagatara guide written for search-friendly evergreen traffic.`,
  kind: 'article',
  section: 'blog',
}))

const nestedAliases: SitePage[] = [
  ['tools/qr-code-generator', 'QR Code Generator', 'Utility tool'],
  ['tools/image-converter', 'Image Converter', 'Image tool'],
  ['tools/pdf-merger', 'PDF Merger', 'PDF tool'],
  ['calculators/gst-calculator', 'GST Calculator', 'Calculator'],
  ['calculators/emi-calculator', 'EMI Calculator', 'Calculator'],
  ['calculators/hotel-cost-calculator', 'Hotel Cost Calculator', 'Hospitality calculator'],
].map(([path, title, eyebrow]) => ({
  path: `/${path}`,
  title,
  eyebrow,
  description: `${title} is available in the clean Khagatara directory structure.`,
  kind: path.startsWith('calculators/') ? 'calculator' as const : 'tool' as const,
}))

export const sitePages: SitePage[] = [
  ...hubPages,
  ...corePages,
  ...legalPages,
  ...toolPages,
  ...calculatorPages,
  ...hospitalityContentPages,
  ...articlePages,
  ...nestedAliases,
]

export const sitePageByPath = new Map(sitePages.map(page => [page.path, page]))

export function getSitePage(path: string) {
  return sitePageByPath.get(path)
}

export function getFlatSlugs() {
  return sitePages
    .filter(page => page.path !== '/' && page.path.split('/').filter(Boolean).length === 1)
    .map(page => ({ slug: page.path.slice(1) }))
}

export function getNestedSlugs(prefix: string) {
  return sitePages
    .filter(page => page.path.startsWith(`/${prefix}/`))
    .map(page => ({ slug: page.path.split('/').filter(Boolean)[1] }))
}
