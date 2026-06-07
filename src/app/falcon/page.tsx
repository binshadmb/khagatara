// src/app/falcon/page.tsx
// Serves the Falcon image converter landing page (index.html)
// All sub-paths (/falcon/tool.html, /falcon/assets/...) are handled by
// the [[...path]]/route.ts catch-all.

import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Khagatara Falcon — Image Format Converter',
  description:
    '360 real image formats. Auto-detection, camera RAW, medical, GIS, game textures, and CDN delivery exports. Convert anything.',
}

export default function FalconPage() {
  // Redirect to the static HTML entry point served by the catch-all route
  redirect('/falcon/index.html')
}
