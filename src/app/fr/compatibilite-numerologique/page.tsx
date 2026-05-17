import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Compatibilité Numérologique — Découvrez Votre Combinaison Idéale',
  description: 'Calculez la compatibilité numérologique entre vous et votre partenaire. Découvrez si vos nombres sont compatibles en amour, amitié et affaires.',
  keywords: 'compatibilite numerologique, numerologie couple, compatibilite nombres, numerologie amour, nombres compatibles',
}

export default function CompatibiliteNumerologique() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'Georgia, serif', color: '#1a1a2e' }}>
      <h1 style={{ fontSize: '2.2rem', color: '#6b21a8', marginBottom: '10px' }}>
        Compatibilité Numérologique — Les Nombres de Votre Relation
      </h1>
      <p style={{ color: '#7c3aed', marginBottom: '30px', fontSize: '1.1rem' }}>
        Les nombres révèlent des schémas d'harmonie et de tension entre deux personnes
      </p>

      <p>La <strong>compatibilité numérologique</strong> analyse la relation entre les nombres de deux personnes pour identifier les points d'harmonie naturelle, les zones de tension et le potentiel de la relation à long terme. Utilisée pendant des siècles dans les traditions védiques pour évaluer les mariages, partenariats et amitiés, la numérologie offre des insights que l'intuition seule ne peut atteindre.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Comment Fonctionne la Compatibilité Numérologique</h2>
      <p>L'analyse compare principalement trois nombres de chaque personne :</p>
      <ul style={{ lineHeight: '2' }}>
        <li><strong>Nombre de Chemin de Vie</strong> — l'essence de qui vous êtes</li>
        <li><strong>Nombre d'Expression</strong> — comment vous agissez dans le monde</li>
        <li><strong>Nombre de l'Âme</strong> — ce que vous désirez profondément</li>
      </ul>
      <p>Quand ces nombres se complètent, la relation coule naturellement. Quand ils entrent en conflit, des schémas répétitifs de mésentente apparaissent — non par mauvaise volonté, mais à cause de vibrations fondamentalement différentes.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Tableau de Compatibilité par Nombre</h2>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
          <thead>
            <tr style={{ background: '#6b21a8', color: 'white' }}>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Nombre</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Plus Compatible</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Plus Difficile</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['1', '3, 5, 9', '4, 8'],
              ['2', '4, 6, 8', '1, 5'],
              ['3', '1, 5, 9', '4, 7'],
              ['4', '2, 6, 8', '1, 3, 5'],
              ['5', '1, 3, 7', '2, 4, 6'],
              ['6', '2, 4, 8, 9', '5'],
              ['7', '5, 9', '1, 2, 6'],
              ['8', '2, 4, 6', '1, 3'],
              ['9', '1, 3, 6', '4, 5'],
            ].map(([num, compatible, challenging], i) => (
              <tr key={num} style={{ background: i % 2 === 0 ? '#f9f0ff' : 'white' }}>
                <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center', fontWeight: 'bold', color: '#6b21a8' }}>{num}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center', color: '#16a34a' }}>{compatible}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center', color: '#dc2626' }}>{challenging}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Compatibilité en Amour — Les Meilleures Paires</h2>
      <ul style={{ lineHeight: '2.2' }}>
        <li><strong>1 et 9 :</strong> leadership + sagesse — s'inspirent mutuellement</li>
        <li><strong>2 et 6 :</strong> soin + harmonie — relation profondément nourrissante</li>
        <li><strong>3 et 5 :</strong> créativité + aventure — jamais de manque de fun et de stimulation</li>
        <li><strong>4 et 8 :</strong> construction + ambition — ensemble ils bâtissent des empires</li>
        <li><strong>7 et 9 :</strong> spiritualité + compassion — connexion d'âme rare et profonde</li>
      </ul>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Compatibilité en Affaires</h2>
      <p>La numérologie est aussi utilisée pour évaluer les partenariats d'affaires. Les meilleures paires entrepreneuriales combinent généralement des nombres complémentaires — un visionnaire avec un exécutant, un créatif avec un organisateur.</p>
      <ul style={{ lineHeight: '2' }}>
        <li><strong>1 + 4 :</strong> vision + exécution — combinaison classique de succès</li>
        <li><strong>3 + 8 :</strong> créativité + pouvoir financier — affaires lucratives</li>
        <li><strong>6 + 9 :</strong> soin + but — entreprises à impact social</li>
      </ul>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Compatibilité Védique — Au-delà des Nombres</h2>
      <p>Dans la tradition védique, la compatibilité matrimoniale (Kundali Milan) va bien au-delà de la numérologie. Le système analyse <strong>36 points de compatibilité</strong> (Gunas) basés sur les cartes astrologiques des deux partenaires. Un minimum de 18 points est nécessaire pour un mariage harmonieux — 28 ou plus est considéré comme excellent.</p>
      <p>Le rapport Khagatara combine l'analyse numérologique avec des insights védiques pour donner une vision beaucoup plus complète de votre relation.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Compatibilité Difficile Signifie-t-elle Relation Impossible ?</h2>
      <p>Non. Des nombres difficiles indiquent des domaines qui exigent plus de travail conscient — pas que la relation soit vouée à l'échec. Certaines des relations les plus transformatrices et profondes se produisent entre nombres difficiles, précisément parce qu'ils se poussent à grandir.</p>

      <div style={{ background: 'linear-gradient(135deg, #f3e8ff, #e0e7ff)', padding: '30px', borderRadius: '16px', marginTop: '40px', textAlign: 'center' }}>
        <h3 style={{ color: '#6b21a8', fontSize: '1.5rem' }}>Analysez Votre Compatibilité en Profondeur</h3>
        <p style={{ color: '#4c1d95', marginBottom: '20px' }}>Rapport védique complet avec numérologie, compatibilité et prévisions pour les 12 prochains mois</p>
        <Link href="/" style={{ background: '#7c3aed', color: 'white', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 'bold' }}>
          Voir le Rapport — 2,99€
        </Link>
      </div>

      <p style={{ marginTop: '40px', color: '#6b7280', fontSize: '0.95rem' }}>
        Khagatara utilise une analyse numérologique védique authentique pour révéler la dynamique profonde de vos relations — amour, famille, amitié et affaires.
      </p>
    </main>
  )
}