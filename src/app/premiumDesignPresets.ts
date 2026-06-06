export type PremiumColorPreset = {
  id: string
  name: string
  bg: string
  soft: string
  primary: string
  secondary: string
  accent: string
  dark: string
  text: string
}

export type PremiumLayoutPreset = {
  id: string
  name: string
}

export const PREMIUM_COLOR_PRESETS: PremiumColorPreset[] = [
  {
    id: 'citrus-pop',
    name: 'Citrus Pop',
    bg: '#fff',
    soft: '#fff6d1',
    primary: '#ff6b00',
    secondary: '#ffd700',
    accent: '#222',
    dark: '#222',
    text: '#111',
  },
  {
    id: 'forest-fresh',
    name: 'Forest Fresh',
    bg: '#f0f7e6',
    soft: '#eaf3de',
    primary: '#3b6d11',
    secondary: '#639922',
    accent: '#ffd700',
    dark: '#27500a',
    text: '#142906',
  },
  {
    id: 'coral-cream',
    name: 'Coral Cream',
    bg: '#fff5f0',
    soft: '#faece7',
    primary: '#d85a30',
    secondary: '#f0997b',
    accent: '#ffd166',
    dark: '#4a1b0c',
    text: '#2a0f07',
  },
  {
    id: 'ocean-teal',
    name: 'Ocean Teal',
    bg: '#e1f5ee',
    soft: '#d9f1e8',
    primary: '#0f6e56',
    secondary: '#1d9e75',
    accent: '#ffd700',
    dark: '#04342c',
    text: '#05241f',
  },
  {
    id: 'violet-storm',
    name: 'Violet Storm',
    bg: '#eeedfe',
    soft: '#e4e1fb',
    primary: '#534ab7',
    secondary: '#7f77dd',
    accent: '#ffd700',
    dark: '#26215c',
    text: '#17143a',
  },
  {
    id: 'amber-warm',
    name: 'Amber Warm',
    bg: '#faeeda',
    soft: '#fff1d5',
    primary: '#ba7517',
    secondary: '#ef9f27',
    accent: '#fac775',
    dark: '#412402',
    text: '#2a1701',
  },
  {
    id: 'pink-bold',
    name: 'Pink Bold',
    bg: '#fbeaf0',
    soft: '#f8dce7',
    primary: '#d4537e',
    secondary: '#ed93b1',
    accent: '#ffd700',
    dark: '#4b1528',
    text: '#2e0d19',
  },
  {
    id: 'blue-classic',
    name: 'Blue Classic',
    bg: '#e6f1fb',
    soft: '#d6e8f8',
    primary: '#185fa5',
    secondary: '#378add',
    accent: '#ffd700',
    dark: '#042c53',
    text: '#021a33',
  },
  {
    id: 'benetton-og',
    name: 'Benetton OG',
    bg: '#fff',
    soft: '#f7f7f7',
    primary: '#ff2d55',
    secondary: '#6c2bd9',
    accent: '#00aacc',
    dark: '#111',
    text: '#111',
  },
]

export const PREMIUM_LAYOUT_PRESETS: PremiumLayoutPreset[] = [
  { id: 'hero-image-top', name: 'Hero Image Top' },
  { id: 'split-before-after', name: 'Split Before After' },
  { id: 'left-text-right-image', name: 'Left Text Right Image' },
  { id: 'image-top-text-bottom', name: 'Image Top Text Bottom' },
  { id: 'text-top-image-middle', name: 'Text Top Image Middle' },
  { id: 'stacked-before-after', name: 'Stacked Before After' },
  { id: 'circle-thumb-image', name: 'Circle Thumb Image' },
  { id: 'three-image-grid', name: 'Three Image Grid' },
  { id: 'wide-after-image', name: 'Wide After Image' },
]

function hashSlug(value: string) {
  let hash = 0

  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0
  }

  return hash
}

export function designForSlug(slug: string) {
  const color = PREMIUM_COLOR_PRESETS[hashSlug(slug) % PREMIUM_COLOR_PRESETS.length]
  const layout = PREMIUM_LAYOUT_PRESETS[hashSlug(`${slug}:layout`) % PREMIUM_LAYOUT_PRESETS.length]

  return { color, layout }
}
