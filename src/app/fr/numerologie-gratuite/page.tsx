import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Numérologie Gratuite — Découvrez Votre Nombre de Vie',
  description: 'Calculez votre numérologie gratuite maintenant. Découvrez ce que votre nom et votre date de naissance révèlent sur votre vie, votre mission et votre destin.',
  keywords: 'numerologie gratuite, numerologie en ligne, calcul numerologie, numerologie prenom, numerologie date naissance',
}

export default function NumerologieGratuite() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'Georgia, serif', color: '#1a1a2e' }}>
      <h1 style={{ fontSize: '2.2rem', color: '#6b21a8', marginBottom: '10px' }}>
        Numérologie Gratuite — Ce Que les Nombres Révèlent Sur Vous
      </h1>
      <p style={{ color: '#7c3aed', marginBottom: '30px', fontSize: '1.1rem' }}>
        Calculez votre numérologie gratuitement et comprenez votre chemin de vie
      </p>

      <p>La <strong>numérologie</strong> est une science millénaire qui révèle la connexion profonde entre les nombres et les événements de notre vie. Utilisée depuis des millénaires dans les traditions védiques, grecques et hébraïques, la numérologie interprète votre nom et votre date de naissance pour révéler votre mission, vos talents et vos défis dans cette vie.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Qu'est-ce que la Numérologie ?</h2>
      <p>La numérologie étudie le sens caché des nombres. Chaque nombre de 1 à 9 — plus les nombres maîtres 11, 22 et 33 — porte une vibration unique qui influence votre personnalité, vos relations et votre destin.</p>
      <p>Dans la tradition védique, les nombres sont directement liés aux planètes : le 1 au Soleil, le 2 à la Lune, le 3 à Jupiter, le 4 à Rahu, le 5 à Mercure, le 6 à Vénus, le 7 à Ketu, le 8 à Saturne et le 9 à Mars.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Comment Calculer Votre Nombre de Chemin de Vie</h2>
      <p>Le <strong>Nombre de Chemin de Vie</strong> est le plus important en numérologie. Il est calculé en additionnant tous les chiffres de votre date de naissance jusqu'à obtenir un nombre à un chiffre (sauf 11, 22 et 33).</p>
      <p><strong>Exemple :</strong> né le 15/08/1990</p>
      <ul style={{ lineHeight: '2' }}>
        <li>1 + 5 + 0 + 8 + 1 + 9 + 9 + 0 = 33</li>
        <li>33 est un nombre maître — ne pas réduire !</li>
        <li>Votre Chemin de Vie est le <strong>33</strong></li>
      </ul>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>La Signification de Chaque Nombre</h2>
      <ul style={{ lineHeight: '2.2' }}>
        <li><strong>1 — Le Leader :</strong> indépendance, pionnier, volonté</li>
        <li><strong>2 — Le Diplomate :</strong> coopération, sensibilité, équilibre</li>
        <li><strong>3 — Le Créatif :</strong> expression, joie, communication</li>
        <li><strong>4 — Le Bâtisseur :</strong> discipline, travail, stabilité</li>
        <li><strong>5 — L'Aventurier :</strong> liberté, changement, polyvalence</li>
        <li><strong>6 — Le Soignant :</strong> famille, responsabilité, harmonie</li>
        <li><strong>7 — Le Sage :</strong> spiritualité, analyse, introspection</li>
        <li><strong>8 — Le Réalisateur :</strong> pouvoir, abondance, réussite matérielle</li>
        <li><strong>9 — L'Humanitaire :</strong> compassion, service, sagesse universelle</li>
      </ul>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Numérologie Védique vs Numérologie Occidentale</h2>
      <p>La <strong>numérologie védique</strong> (Ankur Shastra) diffère de l'occidentale principalement dans l'interprétation des nombres et leur lien avec les planètes. Alors que la numérologie occidentale utilise le système pythagoricien, la védique se base sur les enseignements des anciens sages indiens.</p>
      <p>Chez Khagatara, nous utilisons la tradition védique — plus précise pour comprendre le karma, le but de vie et les cycles planétaires.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Découvrez Votre Rapport Complet</h2>
      <p>Une lecture gratuite vous donne votre nombre de base. Mais le <strong>Rapport Védique Complet</strong> de Khagatara révèle :</p>
      <ul style={{ lineHeight: '2' }}>
        <li>Votre nombre de chemin de vie et votre mission</li>
        <li>Nombre d'expression (calculé par votre nom complet)</li>
        <li>Nombre de l'âme et motivation intérieure</li>
        <li>Vos planètes régnantes et leur influence sur vous</li>
        <li>Compatibilité avec partenaires, associés et famille</li>
        <li>Prévision numérologique pour les 12 prochains mois</li>
      </ul>

      <div style={{ background: 'linear-gradient(135deg, #f3e8ff, #e0e7ff)', padding: '30px', borderRadius: '16px', marginTop: '40px', textAlign: 'center' }}>
        <h3 style={{ color: '#6b21a8', fontSize: '1.5rem' }}>Recevez Votre Rapport Védique Complet</h3>
        <p style={{ color: '#4c1d95', marginBottom: '20px' }}>8 pages personnalisées avec numérologie, astrologie védique et prévisions</p>
        <Link href="/" style={{ background: '#7c3aed', color: 'white', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 'bold' }}>
          Voir le Rapport — 2,99€
        </Link>
      </div>

      <p style={{ marginTop: '40px', color: '#6b7280', fontSize: '0.95rem' }}>
        Khagatara combine l'ancienne sagesse védique avec la technologie moderne pour fournir des insights numérологiques précis et personnalisés. Tous les calculs sont basés sur des textes védiques authentiques.
      </p>
    </main>
  )
}