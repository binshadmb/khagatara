import { ImageResponse } from 'next/og'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'center',
          background: '#0a0a0f',
          color: '#f5c842',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'Georgia, serif',
          height: '100%',
          justifyContent: 'center',
          padding: '72px',
          width: '100%',
        }}
      >
        <div style={{ fontSize: 82, letterSpacing: 8, marginBottom: 26 }}>Khagatara</div>
        <div style={{ color: '#f0f0f0', fontSize: 38, marginBottom: 24, textAlign: 'center' }}>
          Vedic Numerology and Astrology Reports
        </div>
        <div style={{ color: '#aaa', fontSize: 28, textAlign: 'center' }}>
          Life Path • Name Numerology • Birth Chart • Compatibility
        </div>
      </div>
    ),
    size,
  )
}
