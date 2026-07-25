import Link from 'next/link'
import type { Metadata } from 'next'
import StandaloneToolClient from './StandaloneToolClient'
import type { StandaloneToolConfig } from './standalone-tools'

export function buildStandaloneMetadata(tool: StandaloneToolConfig): Metadata {
  const url = `https://${tool.subdomain}`

  return {
    title: `${tool.title} - Khagatara`,
    description: tool.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${tool.title} - Khagatara`,
      description: tool.description,
      type: 'website',
      url,
    },
    twitter: {
      card: 'summary',
      title: `${tool.title} - Khagatara`,
      description: tool.description,
    },
  }
}

function Header() {
  return (
    <nav className="nav">
      <Link className="nav-logo" href="/">
        <div className="tri-wrap" aria-hidden="true">
          <div className="tr"><div className="t tu ta"></div><div className="t tu tb"></div><div className="t tu tc"></div></div>
          <div className="tr"><div className="t tu tb"></div><div className="t tu tc"></div></div>
          <div className="tr"><div className="t td te"></div></div>
        </div>
        <span className="logo-txt">khagatara</span>
      </Link>
      <div className="nav-links">
        <Link href="/tools">Tools</Link>
        <Link href="/image-tools">Image Tools</Link>
        <Link href="/pdf-tools">PDF Tools</Link>
        <Link href="/calculators">Calculators</Link>
      </div>
    </nav>
  )
}

export default function StandaloneToolPage({ tool }: { tool: StandaloneToolConfig }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: `Khagatara ${tool.title}`,
    applicationCategory: tool.category === 'calculator' ? 'FinanceApplication' : 'UtilitiesApplication',
    operatingSystem: 'Any',
    url: `https://${tool.subdomain}`,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: tool.examples,
  }

  return (
    <main className="page tool-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <section className="hero tool-hero">
        <div className="hero-eyebrow">{tool.eyebrow}</div>
        <h1 className="hero-title">{tool.title}</h1>
        <p className="hero-sub site-sub">{tool.description}</p>
      </section>

      <StandaloneToolClient tool={tool} />

      <section className="tool-content">
        <div className="tool-copy">
          <h2>{tool.title} on its own subdomain</h2>
          <p>
            This standalone project is prepared for <strong>{tool.subdomain}</strong>. It also remains available inside
            the main Khagatara site at <Link href={`/${tool.slug}`}>/{tool.slug}</Link>.
          </p>
        </div>
        <div className="tool-copy">
          <h2>Useful for</h2>
          <ul>
            {tool.examples.map((example) => (
              <li key={example}>{example}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
