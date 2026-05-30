'use client'

import dynamic from 'next/dynamic'

const ImageCompressorTool = dynamic(() => import('./ImageCompressorTool'), {
  ssr: false,
  loading: () => (
    <section className="image-tool-shell">
      <div className="image-tool-card">
        <div className="tool-loading">Loading image compressor...</div>
      </div>
    </section>
  ),
})

export default function ImageCompressorLoader() {
  return <ImageCompressorTool />
}
