export type PppPrice = {
  amount: number
  currency: string
  display: string
  gateway: 'razorpay' | 'stripe'
  region: string
}

const PRICES: Record<string, PppPrice> = {
  IN: { amount: 49900, currency: 'INR', display: '₹499', gateway: 'razorpay', region: 'India' },
  US: { amount: 1000, currency: 'USD', display: '$10', gateway: 'stripe', region: 'US' },
  GB: { amount: 800, currency: 'GBP', display: '£8', gateway: 'stripe', region: 'UK' },
  AE: { amount: 700, currency: 'USD', display: '$7', gateway: 'stripe', region: 'Middle East' },
  SG: { amount: 500, currency: 'USD', display: '$5', gateway: 'stripe', region: 'Southeast Asia' },
  AU: { amount: 1500, currency: 'AUD', display: 'A$15', gateway: 'stripe', region: 'Australia' },
  CA: { amount: 1300, currency: 'CAD', display: 'C$13', gateway: 'stripe', region: 'Canada' },
  NG: { amount: 300, currency: 'USD', display: '$3', gateway: 'stripe', region: 'Africa' },
  PK: { amount: 29900, currency: 'PKR', display: '₨299', gateway: 'stripe', region: 'Pakistan' },
  BD: { amount: 300, currency: 'USD', display: '$3', gateway: 'stripe', region: 'Bangladesh' },
}

const DEFAULT: PppPrice = {
  amount: 1000,
  currency: 'USD',
  display: '$10',
  gateway: 'stripe',
  region: 'International',
}

export function countryFromHeaders(headers: Headers | { get: (key: string) => string | null }): string {
  return (
    headers.get('x-vercel-ip-country') ??
    headers.get('cf-ipcountry') ??
    'US'
  ).toUpperCase()
}

export function getSputnik32kPrice(country: string): PppPrice {
  return PRICES[country] ?? DEFAULT
}
