export type StandaloneToolKind =
  | 'age'
  | 'bmi'
  | 'emi'
  | 'gst'
  | 'foodCost'
  | 'hotelCost'
  | 'recipeCost'
  | 'restaurantProfit'
  | 'wordCounter'
  | 'password'
  | 'randomName'
  | 'qr'
  | 'barcode'
  | 'placeholder'

export type StandaloneToolConfig = {
  slug: string
  title: string
  eyebrow: string
  description: string
  kind: StandaloneToolKind
  category: 'calculator' | 'utility' | 'image' | 'pdf'
  subdomain: string
  examples: string[]
}

export const standaloneTools: StandaloneToolConfig[] = [
  {
    slug: 'age-calculator',
    title: 'Age Calculator',
    eyebrow: 'Calculator',
    description: 'Calculate exact age in years, months, days, and next birthday timing.',
    kind: 'age',
    category: 'calculator',
    subdomain: 'age-calculator.khagatara.com',
    examples: ['date of birth to age', 'next birthday count', 'age in days'],
  },
  {
    slug: 'bmi-calculator',
    title: 'BMI Calculator',
    eyebrow: 'Health calculator',
    description: 'Check body mass index from height and weight with a simple category result.',
    kind: 'bmi',
    category: 'calculator',
    subdomain: 'bmi-calculator.khagatara.com',
    examples: ['BMI from kg and cm', 'healthy range', 'quick health check'],
  },
  {
    slug: 'emi-calculator',
    title: 'EMI Calculator',
    eyebrow: 'Finance calculator',
    description: 'Estimate monthly EMI, total interest, and full repayment amount.',
    kind: 'emi',
    category: 'calculator',
    subdomain: 'emi-calculator.khagatara.com',
    examples: ['home loan EMI', 'car loan EMI', 'monthly repayment'],
  },
  {
    slug: 'gst-calculator',
    title: 'GST Calculator',
    eyebrow: 'Tax calculator',
    description: 'Add or remove GST and see base amount, tax amount, and final total.',
    kind: 'gst',
    category: 'calculator',
    subdomain: 'gst-calculator.khagatara.com',
    examples: ['add 18% GST', 'remove GST', 'invoice tax split'],
  },
  {
    slug: 'food-cost-percentage-calculator',
    title: 'Food Cost Percentage Calculator',
    eyebrow: 'Hospitality calculator',
    description: 'Calculate food cost percentage from ingredient cost and selling price.',
    kind: 'foodCost',
    category: 'calculator',
    subdomain: 'food-cost-percentage-calculator.khagatara.com',
    examples: ['menu pricing', 'food cost percent', 'gross margin'],
  },
  {
    slug: 'hotel-cost-calculator',
    title: 'Hotel Cost Calculator',
    eyebrow: 'Hospitality calculator',
    description: 'Estimate room operating cost, profit, and margin from hotel inputs.',
    kind: 'hotelCost',
    category: 'calculator',
    subdomain: 'hotel-cost-calculator.khagatara.com',
    examples: ['room cost', 'hotel margin', 'ADR planning'],
  },
  {
    slug: 'recipe-cost-calculator',
    title: 'Recipe Cost Calculator',
    eyebrow: 'Hospitality calculator',
    description: 'Calculate recipe cost per batch and cost per serving.',
    kind: 'recipeCost',
    category: 'calculator',
    subdomain: 'recipe-cost-calculator.khagatara.com',
    examples: ['batch costing', 'serving cost', 'menu engineering'],
  },
  {
    slug: 'restaurant-profit-calculator',
    title: 'Restaurant Profit Calculator',
    eyebrow: 'Hospitality calculator',
    description: 'Estimate restaurant profit after food, labor, rent, and operating costs.',
    kind: 'restaurantProfit',
    category: 'calculator',
    subdomain: 'restaurant-profit-calculator.khagatara.com',
    examples: ['daily profit', 'monthly cost', 'net margin'],
  },
  {
    slug: 'word-counter',
    title: 'Word Counter',
    eyebrow: 'Writing utility',
    description: 'Count words, characters, sentences, paragraphs, and estimated reading time.',
    kind: 'wordCounter',
    category: 'utility',
    subdomain: 'word-counter.khagatara.com',
    examples: ['essay word count', 'meta description length', 'reading time'],
  },
  {
    slug: 'password-generator',
    title: 'Password Generator',
    eyebrow: 'Security utility',
    description: 'Create strong passwords with length and character controls.',
    kind: 'password',
    category: 'utility',
    subdomain: 'password-generator.khagatara.com',
    examples: ['strong password', 'random password', 'secure login'],
  },
  {
    slug: 'random-name-generator',
    title: 'Random Name Generator',
    eyebrow: 'Creative utility',
    description: 'Generate names for testing, characters, teams, products, and sample data.',
    kind: 'randomName',
    category: 'utility',
    subdomain: 'random-name-generator.khagatara.com',
    examples: ['sample names', 'character names', 'test data'],
  },
  {
    slug: 'qr-code-generator',
    title: 'QR Code Generator',
    eyebrow: 'Utility tool',
    description: 'Generate a downloadable QR code for links, text, phone numbers, and emails.',
    kind: 'qr',
    category: 'utility',
    subdomain: 'qr-code-generator.khagatara.com',
    examples: ['URL QR code', 'contact QR code', 'menu QR code'],
  },
  {
    slug: 'barcode-generator',
    title: 'Barcode Generator',
    eyebrow: 'Utility tool',
    description: 'Create a simple scannable-style barcode graphic for labels and mockups.',
    kind: 'barcode',
    category: 'utility',
    subdomain: 'barcode-generator.khagatara.com',
    examples: ['label barcode', 'SKU mockup', 'inventory code'],
  },
]

export const standaloneToolBySlug = new Map(standaloneTools.map((tool) => [tool.slug, tool]))

export function getStandaloneTool(slug: string) {
  return standaloneToolBySlug.get(slug)
}

export const standaloneSubdomainMap = Object.fromEntries(
  standaloneTools.map((tool) => [tool.subdomain.split('.')[0], `/${tool.slug}`]),
)
