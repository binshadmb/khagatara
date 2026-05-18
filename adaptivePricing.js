/**
 * Khagatara Adaptive Pricing System
 * Uses IP geolocation to show local-feeling prices (PPP model)
 * Free to use: uses ip-api.com (no key needed, 45 req/min)
 */

// ─────────────────────────────────────────────
// PRICING TABLE  (countryCode → tier config)
// ─────────────────────────────────────────────
const PRICING_TIERS = {

  // ── TIER 1 · ULTRA LIGHT (poorest nations) ──
  MW: { currency: 'MWK', symbol: 'MK',  price: 500,    usd: 0.29, label: 'Malawi' },
  ZW: { currency: 'ZWG', symbol: '$',   price: 0.49,   usd: 0.49, label: 'Zimbabwe' },
  MZ: { currency: 'MZN', symbol: 'MT',  price: 19,     usd: 0.30, label: 'Mozambique' },
  MG: { currency: 'MGA', symbol: 'Ar',  price: 1200,   usd: 0.27, label: 'Madagascar' },
  ET: { currency: 'ETB', symbol: 'Br',  price: 15,     usd: 0.27, label: 'Ethiopia' },
  SO: { currency: 'USD', symbol: '$',   price: 0.49,   usd: 0.49, label: 'Somalia' },
  TZ: { currency: 'TZS', symbol: 'TSh', price: 750,    usd: 0.29, label: 'Tanzania' },
  UG: { currency: 'UGX', symbol: 'USh', price: 1100,   usd: 0.30, label: 'Uganda' },
  RW: { currency: 'RWF', symbol: 'Fr',  price: 350,    usd: 0.29, label: 'Rwanda' },

  // ── TIER 2 · LIGHT (developing nations) ──
  IN: { currency: 'INR', symbol: '₹',   price: 49,     usd: 0.59, label: 'India' },
  BD: { currency: 'BDT', symbol: '৳',   price: 59,     usd: 0.54, label: 'Bangladesh' },
  PK: { currency: 'PKR', symbol: '₨',   price: 149,    usd: 0.54, label: 'Pakistan' },
  NP: { currency: 'NPR', symbol: '₨',   price: 79,     usd: 0.60, label: 'Nepal' },
  LK: { currency: 'LKR', symbol: '₨',   price: 179,    usd: 0.59, label: 'Sri Lanka' },
  MM: { currency: 'MMK', symbol: 'K',   price: 1200,   usd: 0.57, label: 'Myanmar' },
  KH: { currency: 'KHR', symbol: '៛',   price: 2400,   usd: 0.59, label: 'Cambodia' },
  LA: { currency: 'LAK', symbol: '₭',   price: 9900,   usd: 0.55, label: 'Laos' },
  NG: { currency: 'NGN', symbol: '₦',   price: 450,    usd: 0.57, label: 'Nigeria' },
  GH: { currency: 'GHS', symbol: 'GH₵', price: 8,      usd: 0.57, label: 'Ghana' },
  KE: { currency: 'KES', symbol: 'KSh', price: 75,     usd: 0.58, label: 'Kenya' },
  ZM: { currency: 'ZMW', symbol: 'ZK',  price: 15,     usd: 0.55, label: 'Zambia' },

  // ── TIER 3 · MODERATE ──
  ID: { currency: 'IDR', symbol: 'Rp',  price: 14900,  usd: 0.94, label: 'Indonesia' },
  VN: { currency: 'VND', symbol: '₫',   price: 23000,  usd: 0.92, label: 'Vietnam' },
  PH: { currency: 'PHP', symbol: '₱',   price: 55,     usd: 0.97, label: 'Philippines' },
  TH: { currency: 'THB', symbol: '฿',   price: 35,     usd: 0.99, label: 'Thailand' },
  MY: { currency: 'MYR', symbol: 'RM',  price: 3.99,   usd: 0.89, label: 'Malaysia' },
  UA: { currency: 'UAH', symbol: '₴',   price: 39,     usd: 0.94, label: 'Ukraine' },
  EG: { currency: 'EGP', symbol: 'E£',  price: 29,     usd: 0.60, label: 'Egypt' },
  MA: { currency: 'MAD', symbol: 'د.م.',price: 9.9,    usd: 0.97, label: 'Morocco' },
  MX: { currency: 'MXN', symbol: '$',   price: 19,     usd: 1.09, label: 'Mexico' },
  BR: { currency: 'BRL', symbol: 'R$',  price: 4.99,   usd: 0.97, label: 'Brazil' },
  ZA: { currency: 'ZAR', symbol: 'R',   price: 17.9,   usd: 0.97, label: 'South Africa' },
  RU: { currency: 'RUB', symbol: '₽',   price: 89,     usd: 0.99, label: 'Russia' },
  CN: { currency: 'CNY', symbol: '¥',   price: 6.9,    usd: 0.95, label: 'China' },
  TR: { currency: 'TRY', symbol: '₺',   price: 29,     usd: 0.92, label: 'Turkey' },
  AR: { currency: 'ARS', symbol: '$',   price: 899,    usd: 0.94, label: 'Argentina' },

  // ── TIER 4 · STANDARD (default for unlisted) ──
  // EU / US / UK / AU / CA / JP / KR / SG etc.
  DEFAULT: { currency: 'EUR', symbol: '€', price: 2.99, usd: 2.99, label: 'Global' },
}

// Countries that use the DEFAULT tier (rich/mid-high income)
const DEFAULT_COUNTRIES = [
  'US','GB','CA','AU','NZ','JP','KR','SG','HK','TW',
  'DE','FR','IT','ES','NL','BE','AT','CH','SE','NO','DK','FI',
  'IE','PT','PL','CZ','HU','RO','SK','HR','BG','GR','RS',
  'AE','SA','QA','KW','BH','OM','IL',
]

// ─────────────────────────────────────────────
// MAIN FUNCTION
// ─────────────────────────────────────────────

/**
 * Detect user country via IP and return pricing config.
 * @returns {Promise<{country, currency, symbol, price, usd, label, tier}>}
 */
export async function getAdaptivePrice() {
  try {
    const res = await fetch('https://ip-api.com/json/?fields=countryCode')
    const { countryCode } = await res.json()

    const config = PRICING_TIERS[countryCode]
      ?? (DEFAULT_COUNTRIES.includes(countryCode) ? PRICING_TIERS.DEFAULT : PRICING_TIERS.DEFAULT)

    const tier = getTier(config.usd)

    return {
      country: countryCode,
      ...config,
      tier,
      formatted: `${config.symbol}${config.price}`,
    }
  } catch {
    // Fallback to DEFAULT if geolocation fails
    return {
      country: 'XX',
      ...PRICING_TIERS.DEFAULT,
      tier: 4,
      formatted: `€${PRICING_TIERS.DEFAULT.price}`,
    }
  }
}

function getTier(usd) {
  if (usd < 0.50) return 1   // Ultra light
  if (usd < 0.80) return 2   // Light
  if (usd < 1.50) return 3   // Moderate
  return 4                    // Standard
}

// ─────────────────────────────────────────────
// USAGE EXAMPLE (in any Astro/React component)
// ─────────────────────────────────────────────
/*
import { getAdaptivePrice } from '@/utils/adaptivePricing'

const pricing = await getAdaptivePrice()
// → { country: 'IN', currency: 'INR', symbol: '₹', price: 49,
//     usd: 0.59, label: 'India', tier: 2, formatted: '₹49' }

// Show in UI:
// "Unlock Premium — ₹49"   (India)
// "Unlock Premium — €2.99" (Germany)
// "Unlock Premium — MK500" (Malawi)
*/