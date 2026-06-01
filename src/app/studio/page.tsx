import type { Metadata } from 'next'
import Link from 'next/link'
import DraggableStudioHero from './components/DraggableStudioHero'
import StudioPricing from './components/StudioPricing'
import StudioTool from './components/StudioTool'

export const metadata: Metadata = {
  title: 'Khagatara Studio - Premium AI Portrait Enhancement',
  description: 'Transform any portrait into a near-professional 4K or 8K image. Powered by SUPIR and CodeFormer.',
  alternates: { canonical: '/studio' },
}

export default function StudioPage() {
  return (
    <main className="page tool-page">
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
          <Link href="/image-remaker">Image Remaker</Link>
          <Link href="/studio">Studio</Link>
        </div>
      </nav>

      <DraggableStudioHero />

      <StudioTool />
      <StudioPricing />
    </main>
  )
}
