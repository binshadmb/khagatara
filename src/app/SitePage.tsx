import Link from 'next/link'
import { groupedLinks, navLinks, sitePageByPath, type SitePage as SitePageData } from './site-structure'

function Logo() {
  return (
    <Link className="nav-logo" href="/">
      <div className="tri-wrap" aria-hidden="true">
        <div className="tr"><div className="t tu ta"></div><div className="t tu tb"></div><div className="t tu tc"></div></div>
        <div className="tr"><div className="t tu tb"></div><div className="t tu tc"></div></div>
        <div className="tr"><div className="t td te"></div></div>
      </div>
      <span className="logo-txt">khagatara</span>
    </Link>
  )
}

function Header() {
  return (
    <nav className="nav">
      <Logo />
      <div className="nav-links">
        {navLinks.map(link => (
          <Link key={link.href} href={link.href}>{link.label}</Link>
        ))}
      </div>
    </nav>
  )
}

function LinkGrid({ title, links }: { title: string; links: { href: string; title: string }[] }) {
  return (
    <section className="section">
      <div className="section-label">{title}</div>
      <div className="readings-grid">
        {links.map(link => (
          <Link key={link.href} className="reading-pill" href={link.href}>{link.title}</Link>
        ))}
      </div>
    </section>
  )
}

function ToolShell({ page }: { page: SitePageData }) {
  const related = page.related
    ?.map(path => sitePageByPath.get(path))
    .filter((item): item is SitePageData => Boolean(item))

  return (
    <>
      <section className="hero site-hero">
        <div className="hero-eyebrow">{page.eyebrow}</div>
        <h1 className="hero-title">{page.title}</h1>
        <p className="hero-sub site-sub">{page.description}</p>
      </section>

      {page.kind === 'home' && (
        <>
          <LinkGrid title="Main Hubs" links={[
            { href: '/tools', title: 'All Tools' },
            { href: '/image-tools', title: 'Image Tools' },
            { href: '/pdf-tools', title: 'PDF Tools' },
            { href: '/calculators', title: 'Calculators' },
            { href: '/blog', title: 'Blog' },
          ]} />
          <LinkGrid title="Hospitality Pages" links={groupedLinks.hospitality} />
        </>
      )}

      {page.path === '/tools' && (
        <>
          <LinkGrid title="Utility Tools" links={groupedLinks.utilityTools} />
          <LinkGrid title="Image Tools" links={groupedLinks.imageTools} />
          <LinkGrid title="PDF Tools" links={groupedLinks.pdfTools} />
        </>
      )}

      {page.path === '/image-tools' && <LinkGrid title="Image Tools" links={groupedLinks.imageTools} />}
      {page.path === '/pdf-tools' && <LinkGrid title="PDF Tools" links={groupedLinks.pdfTools} />}
      {page.path === '/calculators' && <LinkGrid title="Calculator Pages" links={groupedLinks.calculators} />}
      {page.path === '/blog' && <LinkGrid title="Blog SEO Pages" links={groupedLinks.blog} />}

      {['tool', 'calculator', 'article', 'legal', 'core'].includes(page.kind) && (
        <section className="section">
          <div className="site-panel">
            <div className="section-label">Page Purpose</div>
            <p>{page.description}</p>
            <p>This page is ready for the full tool UI, calculator logic, legal copy, or SEO article content to be added next.</p>
          </div>
        </section>
      )}

      {related && related.length > 0 && (
        <LinkGrid title="Related Pages" links={related.map(item => ({ href: item.path, title: item.title }))} />
      )}
    </>
  )
}

export default function SitePage({ page }: { page: SitePageData }) {
  return (
    <main className="page">
      <Header />
      <ToolShell page={page} />
      <footer className="footer">
        <div className="footer-txt">© 2026 khagatara.com</div>
        <div className="footer-links">
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </footer>
    </main>
  )
}
