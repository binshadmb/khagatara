import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Astrologia Vedica Gratuita — Scopri la Tua Carta Jyotish',
  description: 'Scopri l\\'astrologia vedica gratuita. Impara come il Jyotish rivela il tuo dharma, karma e scopo di vita attraverso i pianeti e le case astrologiche.',
  keywords: 'astrologia vedica gratuita, jyotish, astrologia indiana, carta vedica, astrologia vedica online, oroscopo vedico',
}

export default function AstrologiaVedicaGratuita() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'Georgia, serif', color: '#1a1a2e' }}>
      <h1 style={{ fontSize: '2.2rem', color: '#6b21a8', marginBottom: '10px' }}>
        Astrologia Vedica Gratuita — Che Cos'è il Jyotish e Come Funziona?
      </h1>
      <p style={{ color: '#7c3aed', marginBottom: '30px', fontSize: '1.1rem' }}>
        La scienza astrologica più antica del mondo — oltre 5.000 anni di saggezza
      </p>

      <p>L'<strong>astrologia vedica</strong>, conosciuta in sanscrito come <strong>Jyotish</strong> (che significa "scienza della luce"), è un sistema astrologico antico di oltre 5.000 anni. A differenza dell'astrologia occidentale, il Jyotish utilizza lo zodiaco siderale — basato sulla posizione reale delle stelle — e attribuisce molta più importanza alla Luna, al karma e al dharma di ogni persona.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Differenza Tra Astrologia Vedica e Occidentale</h2>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
          <thead>
            <tr style={{ background: '#6b21a8', color: 'white' }}>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Aspetto</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Vedica (Jyotish)</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Occidentale</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Zodiaco', 'Siderale (stelle reali)', 'Tropicale (stagioni)'],
              ['Focus principale', 'Luna e Ascendente', 'Sole'],
              ['Origine', 'India, 3000+ a.C.', 'Grecia, 500 a.C.'],
              ['Pianeti', '9 graha (inclusi Rahu/Ketu)', '10 (inclusi Urano/Nettuno)'],
              ['Obiettivo', 'Dharma, karma, moksha', 'Psicologia, personalità'],
            ].map(([aspect, vedic, western]) => (
              <tr key={aspect}>
                <td style={{ padding: '10px', border: '1px solid #ddd', fontWeight: 'bold', color: '#6b21a8' }}>{aspect}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{vedic}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{western}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>I 9 Pianeti del Jyotish (Navagraha)</h2>
      <p>In astrologia vedica, lavoriamo con <strong>9 graha</strong> (pianeti/punti astrologici):</p>
      <ul style={{ lineHeight: '2.2' }}>
        <li><strong>Surya (Sole):</strong> anima, ego, padre, autorità, vitalità</li>
        <li><strong>Chandra (Luna):</strong> mente, emozioni, madre, intuizione, abitudini</li>
        <li><strong>Mangala (Marte):</strong> energia, coraggio, conflitti, fratelli, ambizione</li>
        <li><strong>Budha (Mercurio):</strong> intelligenza, comunicazione, affari, competenze</li>
        <li><strong>Guru (Giove):</strong> saggezza, espansione, figli, spiritualità, fortuna</li>
        <li><strong>Shukra (Venere):</strong> amore, bellezza, lusso, relazioni, arti</li>
        <li><strong>Shani (Saturno):</strong> karma, disciplina, limiti, duro lavoro, longevità</li>
        <li><strong>Rahu (Nodo Nord):</strong> ossessioni, desideri, illusioni, tecnologia, stranieri</li>
        <li><strong>Ketu (Nodo Sud):</strong> spiritualità, distacco, karma passato, moksha</li>
      </ul>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Che Cos'è il Lagna (Ascendente Vedico)?</h2>
      <p>Il <strong>Lagna</strong> è il segno che si stava levando sull'orizzonte est al momento esatto della tua nascita. È il punto più importante della tua carta vedica — ancora più del segno solare. Il Lagna definisce il tuo aspetto fisico, la tua personalità, il tuo percorso di vita e il modo in cui il mondo ti percepisce.</p>
      <p>Ecco perché, in astrologia vedica, quando qualcuno chiede "qual è il tuo segno?", la risposta corretta è il tuo Lagna — non il segno solare.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Il Sistema dei Dasha — Previsioni Precise</h2>
      <p>Uno degli strumenti più potenti del Jyotish è il sistema dei <strong>Dasha</strong> — periodi planetari che mostrano quali energie sono attive nella tua vita in ogni fase. Il sistema Vimshottari Dasha divide la vita in cicli fino a 120 anni, ciascuno governato da un pianeta diverso.</p>
      <p>Sapere in quale Dasha ti trovi adesso spiega perché alcuni ambiti della tua vita prosperano o incontrano difficoltà — e per quanto tempo durerà questo ciclo.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Astrologia Vedica + Numerologia — La Combinazione Khagatara</h2>
      <p>La differenza di Khagatara è combinare la <strong>numerologia vedica</strong> con il <strong>Jyotish</strong> in un unico rapporto. I tuoi numeri rivelano il tuo scopo; la tua carta rivela il timing. Insieme, formano la guida più completa possibile per comprendere la tua vita e prendere decisioni migliori.</p>

      <div style={{ background: 'linear-gradient(135deg, #f3e8ff, #e0e7ff)', padding: '30px', borderRadius: '16px', marginTop: '40px', textAlign: 'center' }}>
        <h3 style={{ color: '#6b21a8', fontSize: '1.5rem' }}>La Tua Carta Vedica Completa + Numerologia</h3>
        <p style={{ color: '#4c1d95', marginBottom: '20px' }}>Rapporto di 8 pagine con Jyotish, numerologia e previsioni Dasha personalizzate</p>
        <a href="/" style={{ background: '#7c3aed', color: 'white', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 'bold' }}>
          Vedi il Rapporto — 2,99€
        </a>
      </div>

      <p style={{ marginTop: '40px', color: '#6b7280', fontSize: '0.95rem' }}>
        Khagatara è specializzata in astrologia vedica autentica — non nell'astrologia occidentale popolare. I nostri calcoli seguono i testi classici del Jyotish per la massima precisione.
      </p>
    </main>
  )
}