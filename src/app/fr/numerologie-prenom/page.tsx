import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Numérologie du Prénom — Ce Que Votre Nom Révèle',
  description: 'Découvrez la signification numérologique de votre nom complet. Calculez votre nombre d\'expression et comprenez vos talents et votre mission de vie.',
  keywords: 'numerologie prenom, numerologie nom complet, nombre expression, signification prenom numerologie, calcul prenom numerologie',
}

export default function NumerologiePrenom() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'Georgia, serif', color: '#1a1a2e' }}>
      <h1 style={{ fontSize: '2.2rem', color: '#6b21a8', marginBottom: '10px' }}>
        Numérologie du Prénom — Ce Que Votre Nom Révèle Sur Vous
      </h1>
      <p style={{ color: '#7c3aed', marginBottom: '30px', fontSize: '1.1rem' }}>
        Votre prénom n'est pas un hasard — chaque lettre porte une vibration numérique unique
      </p>

      <p>En numérologie, votre <strong>nom complet de naissance</strong> est aussi important que votre date de naissance. Chaque lettre de l'alphabet correspond à un nombre, et la somme de ces lettres révèle votre <strong>Nombre d'Expression</strong> — aussi appelé Nombre du Destin.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Le Tableau Numérologique des Lettres</h2>
      <p>Dans le système pythagoricien, chaque lettre reçoit une valeur de 1 à 9 :</p>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
          <thead>
            <tr style={{ background: '#6b21a8', color: 'white' }}>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Nombre</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Lettres</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['1', 'A, J, S'],
              ['2', 'B, K, T'],
              ['3', 'C, L, U'],
              ['4', 'D, M, V'],
              ['5', 'E, N, W'],
              ['6', 'F, O, X'],
              ['7', 'G, P, Y'],
              ['8', 'H, Q, Z'],
              ['9', 'I, R'],
            ].map(([num, letters]) => (
              <tr key={num} style={{ background: num === '1' ? '#f9f0ff' : 'white' }}>
                <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center', fontWeight: 'bold', color: '#6b21a8' }}>{num}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>{letters}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Comment Calculer le Nombre de Votre Prénom</h2>
      <p><strong>Exemple :</strong> MARIE</p>
      <ul style={{ lineHeight: '2' }}>
        <li>M = 4, A = 1, R = 9, I = 9, E = 5</li>
        <li>4 + 1 + 9 + 9 + 5 = 28</li>
        <li>2 + 8 = <strong>10</strong> → 1 + 0 = <strong>1</strong></li>
        <li>Nombre d'Expression de Marie = <strong>1 (Le Leader)</strong></li>
      </ul>
      <p>Utilisez toujours le <strong>nom complet de naissance</strong> — exactement tel qu'il figure sur l'acte de naissance, sans surnoms ni abréviations.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Ce Que le Nombre d'Expression Révèle</h2>
      <p>Le Nombre d'Expression montre vos <strong>talents naturels</strong>, vos capacités innées et la façon dont vous vous exprimez dans le monde. C'est ce que vous êtes venu faire — votre mission de vie en termes pratiques.</p>
      <ul style={{ lineHeight: '2.2' }}>
        <li><strong>1 :</strong> Né pour diriger, innover et être pionnier</li>
        <li><strong>2 :</strong> Né pour médier, coopérer et créer l'harmonie</li>
        <li><strong>3 :</strong> Né pour s'exprimer, créer et inspirer</li>
        <li><strong>4 :</strong> Né pour construire, organiser et structurer</li>
        <li><strong>5 :</strong> Né pour explorer, communiquer et transformer</li>
        <li><strong>6 :</strong> Né pour soigner, guérir et servir la famille</li>
        <li><strong>7 :</strong> Né pour chercher, analyser et découvrir les vérités</li>
        <li><strong>8 :</strong> Né pour réaliser, diriger des affaires et prospérer</li>
        <li><strong>9 :</strong> Né pour servir l'humanité et transmettre la sagesse</li>
      </ul>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Nombre de l'Âme — Les Voyelles de Votre Nom</h2>
      <p>En plus du Nombre d'Expression, les <strong>voyelles de votre nom</strong> révèlent le Nombre de l'Âme — vos désirs les plus profonds, votre motivation intérieure et ce qui vous anime vraiment, même si vous ne l'avouez jamais à personne.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Numérologie Védique du Prénom</h2>
      <p>Dans la tradition védique, le nom est encore plus sacré. Les sages enseignaient que le son du nom, lorsqu'il est prononcé, crée des vibrations qui façonnent la réalité. C'est pourquoi de nombreuses familles indiennes choisissent le prénom du bébé sur la base de calculs astrologiques et numérологiques précis.</p>
      <p>Chez Khagatara, nous croisons la numérologie de votre nom avec votre carte astrologique védique pour une analyse beaucoup plus profonde et précise.</p>

      <div style={{ background: 'linear-gradient(135deg, #f3e8ff, #e0e7ff)', padding: '30px', borderRadius: '16px', marginTop: '40px', textAlign: 'center' }}>
        <h3 style={{ color: '#6b21a8', fontSize: '1.5rem' }}>Analyse Complète de Votre Prénom + Date de Naissance</h3>
        <p style={{ color: '#4c1d95', marginBottom: '20px' }}>Rapport védique de 8 pages avec numérologie du prénom, chemin de vie et prévisions</p>
        <a href="/" style={{ background: '#7c3aed', color: 'white', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 'bold' }}>
          Voir le Rapport — 2,99€
        </a>
      </div>

      <p style={{ marginTop: '40px', color: '#6b7280', fontSize: '0.95rem' }}>
        Khagatara utilise des calculs védiques authentiques pour analyser le pouvoir vibratoire de votre nom et révéler votre mission de vie avec précision.
      </p>
    </main>
  )
}