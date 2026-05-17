import { MetadataRoute } from 'next'
import { liveSitemapEntries } from './seo'

export default function sitemap(): MetadataRoute.Sitemap {
  return liveSitemapEntries()
}
