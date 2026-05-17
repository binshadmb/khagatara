import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Astrologie Védique Gratuite — Découvrez Votre Carte Jyotish',
  description: 'Découvrez l\'astrologie védique gratuite. Apprenez comment le Jyotish révèle votre dharma, karma et but de vie à travers les planètes et maisons astrologiques.',
  keywords: 'astrologie vedique gratuite, jyotish, astrologie indienne, carte vedique, astrologie vedique en ligne, horoscope vedique',
}

export default function AstrologieVediqueGratuite() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'Georgia, serif', color: '#1a1a2e' }}>
      <h1 style={{ fontSize: '2.2rem', color: '#6b21a8', marginBottom: '10px' }}>
        Astrologie Védique Gratuite — Qu'est-ce que le Jyotish et Comment Fonctionne-t-il ?
      </h1>
      <p style={{ color: '#7c3aed', marginBottom: '30px', fontSize: '1.1rem' }}>
        La science astrologique la plus ancienne du monde — plus de 5 000 ans de sagesse
      </p>

      <p>L'<strong>astrologie védique</strong>, connue en sanskrit sous le nom de <strong>Jyotish</strong> (qui signifie "science de la lumière"), est un système astrologique vieux de plus de 5 000 ans. Contrairement à l'astrologie occidentale, le Jyotish utilise le zodiaque sidéral — basé sur la position réelle des étoiles — et accorde beaucoup plus d'importance à la Lune, au karma et au dharma de chaque personne.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Différence Entre Astrologie Védique et Occidentale</h2>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
          <thead>
            <tr style={{ background: '#6b21a8', color: 'white' }}>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Aspect</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Védique (Jyotish)</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Occidentale</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Zodiaque', 'Sidéral (étoiles réelles)', 'Tropical (saisons)'],
              ['Focus principal', 'Lune et Ascendant', 'Soleil'],
              ['Origine', 'Inde, 3000+ av. J.-C.', 'Grèce, 500 av. J.-C.'],
              ['Planètes', '9 grahas (dont Rahu/Ketu)', '10 (dont Uranus/Neptune)'],
              ['But', 'Dharma, karma, moksha', 'Psychologie, personnalité'],
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

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Les 9 Planètes du Jyotish (Navagrahas)</h2>
      <p>En astrologie védique, nous travaillons avec <strong>9 grahas</strong> (planètes/points astrologiques) :</p>
      <ul style={{ lineHeight: '2.2' }}>
        <li><strong>Surya (Soleil) :</strong> âme, ego, père, autorité, vitalité</li>
        <li><strong>Chandra (Lune) :</strong> esprit, émotions, mère, intuition, habitudes</li>
        <li><strong>Mangala (Mars) :</strong> énergie, courage, conflits, frères, ambition</li>
        <li><strong>Budha (Mercure) :</strong> intelligence, communication, affaires, compétences</li>
        <li><strong>Guru (Jupiter) :</strong> sagesse, expansion, enfants, spiritualité, fortune</li>
        <li><strong>Shukra (Vénus) :</strong> amour, beauté, luxe, relations, arts</li>
        <li><strong>Shani (Saturne) :</strong> karma, discipline, limitations, travail acharné, longévité</li>
        <li><strong>Rahu (Nœud Nord) :</strong> obsessions, désirs, illusions, technologie, étrangers</li>
        <li><strong>Ketu (Nœud Sud) :</strong> spiritualité, détachement, karma passé, moksha</li>
      </ul>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Qu'est-ce que le Lagna (Ascendant Védique) ?</h2>
      <p>Le <strong>Lagna</strong> est le signe qui se levait à l'horizon est au moment exact de votre naissance. C'est le point le plus important de votre carte védique — encore plus que le signe solaire. Le Lagna définit votre apparence physique, votre personnalité, votre chemin de vie et la façon dont le monde vous perçoit.</p>
      <p>C'est pourquoi, en astrologie védique, quand quelqu'un demande "quel est votre signe ?", la réponse correcte est votre Lagna — pas le signe solaire.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Le Système des Dashas — Prévisions Précises</h2>
      <p>L'un des outils les plus puissants du Jyotish est le système des <strong>Dashas</strong> — périodes planétaires qui montrent quelles énergies sont actives dans votre vie à chaque phase. Le système Vimshottari Dasha divise votre vie en cycles allant jusqu'à 120 ans, chacun régi par une planète différente.</p>
      <p>Savoir dans quel Dasha vous êtes maintenant explique pourquoi certains domaines de votre vie s'épanouissent ou font face à des défis — et combien de temps ce cycle va durer.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Astrologie Védique + Numérologie — La Combinaison Khagatara</h2>
      <p>La différence de Khagatara est de combiner la <strong>numérologie védique</strong> avec le <strong>Jyotish</strong> dans un seul rapport. Vos nombres révèlent votre but ; votre carte révèle le timing. Ensemble, ils forment le guide le plus complet possible pour comprendre votre vie et prendre de meilleures décisions.</p>

      <div style={{ background: 'linear-gradient(135deg, #f3e8ff, #e0e7ff)', padding: '30px', borderRadius: '16px', marginTop: '40px', textAlign: 'center' }}>
        <h3 style={{ color: '#6b21a8', fontSize: '1.5rem' }}>Votre Carte Védique Complète + Numérologie</h3>
        <p style={{ color: '#4c1d95', marginBottom: '20px' }}>Rapport de 8 pages avec Jyotish, numérologie et prévisions Dasha personnalisées</p>
        <Link href="/" style={{ background: '#7c3aed', color: 'white', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 'bold' }}>
          Voir le Rapport — 2,99€
        </Link>
      </div>

      <p style={{ marginTop: '40px', color: '#6b7280', fontSize: '0.95rem' }}>
        Khagatara est spécialisée en astrologie védique authentique — pas l'astrologie populaire occidentale. Nos calculs suivent les textes classiques du Jyotish pour une précision maximale.
      </p>
    </main>
  )
}