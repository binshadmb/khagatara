import type { Metadata, MetadataRoute } from 'next'
import { LANGUAGE_CONFIG } from './astro-languages'
import { sitePages } from './site-structure'
import { PREMIUM_LANDING_PAGES } from './premiumLandingMap'

export { LANGUAGE_CONFIG }
export const siteUrl = 'https://www.khagatara.com'

// ─── URL helpers ─────────────────────────────────────────────────────────────
export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString()
}

// ─── Sitemap (root + article/hub pages + premium landing pages × languages) ─
export function liveSitemapEntries(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const entries: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified, changeFrequency: 'weekly', priority: 1 },
  ]
  for (const page of sitePages) {
    if (page.path === '/') continue
    entries.push({
      url: absoluteUrl(page.path),
      lastModified,
      changeFrequency: page.kind === 'article' ? 'monthly' : 'weekly',
      priority: page.kind === 'hub' ? 0.9 : 0.75,
    })
  }
  for (const [code] of LANGUAGE_CONFIG) {
    for (const page of PREMIUM_LANDING_PAGES) {
      entries.push({
        url: absoluteUrl(`/${code}/${page.slug}`),
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.82,
      })
    }
  }
  return entries
}
