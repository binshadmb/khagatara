import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Carte Natale Gratuite — Découvrez Votre Carte Astrale de Naissance',
  description: 'Calculez votre carte natale gratuite. Comprenez ce que les positions des planètes au moment de votre naissance révèlent sur votre personnalité et votre destin.',
  keywords: 'carte natale gratuite, carte astrale naissance, theme natal gratuit, carte natale en ligne, calculer carte natale',
}

export default function CarteNataleGratuite() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'Georgia, serif', color: '#1a1a2e' }}>
      <h1 style={{ fontSize: '2.2rem', color: '#6b21a8', marginBottom: '10px' }}>
        Carte Natale Gratuite — Le Portrait du Ciel au Moment de Votre Naissance
      </h1>
      <p style={{ color: '#7c3aed', marginBottom: '30px', fontSize: '1.1rem' }}>
        À l'instant où vous êtes né, le ciel a formé un schéma unique — votre carte natale
      </p>

      <p>La <strong>carte natale</strong> — aussi appelée thème natal ou thème astral de naissance — est une photographie du ciel au moment exact où vous êtes venu au monde. Elle montre la position du Soleil, de la Lune et de toutes les planètes dans les signes et maisons astrologiques, révélant votre personnalité, vos dons, vos défis et votre but de vie.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Ce Qu'il Faut Pour Calculer la Carte Natale</h2>
      <p>Pour une carte natale précise, vous avez besoin de trois informations :</p>
      <ul style={{ lineHeight: '2' }}>
        <li><strong>Date de naissance</strong> — jour, mois et année</li>
        <li><strong>Heure de naissance</strong> — plus elle est exacte, mieux c'est (idéal : acte de naissance)</li>
        <li><strong>Lieu de naissance</strong> — ville et pays</li>
      </ul>
      <p>L'heure est essentielle car l'Ascendant (Lagna) change toutes les 2 heures environ. Sans l'heure, la carte est incomplète.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Les 12 Maisons de la Carte Natale</h2>
      <p>La carte natale est divisée en <strong>12 maisons</strong>, chacune représentant un domaine de vie :</p>
      <ul style={{ lineHeight: '2.2' }}>
        <li><strong>Maison 1 :</strong> personnalité, apparence, comment le monde vous voit</li>
        <li><strong>Maison 2 :</strong> argent, ressources, famille, voix</li>
        <li><strong>Maison 3 :</strong> communication, frères, voyages courts, courage</li>
        <li><strong>Maison 4 :</strong> foyer, mère, racines, immobilier, paix intérieure</li>
        <li><strong>Maison 5 :</strong> créativité, enfants, romance, spéculation</li>
        <li><strong>Maison 6 :</strong> santé, travail, routine, ennemis, service</li>
        <li><strong>Maison 7 :</strong> mariage, partenariats, contrats, autres</li>
        <li><strong>Maison 8 :</strong> transformation, héritage, mystères, mort et renaissance</li>
        <li><strong>Maison 9 :</strong> philosophie, religion, voyages longs, père, chance</li>
        <li><strong>Maison 10 :</strong> carrière, réputation, statut, accomplissements publics</li>
        <li><strong>Maison 11 :</strong> amis, groupes, gains, désirs réalisés</li>
        <li><strong>Maison 12 :</strong> spiritualité, isolement, karma, vie secrète</li>
      </ul>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Carte Natale Védique vs Carte Natale Occidentale</h2>
      <p>La carte natale védique (Kundali) utilise le <strong>zodiaque sidéral</strong> — basé sur la position réelle des constellations. Cela signifie que votre signe védique peut être différent de votre signe occidental, car il y a une différence d'environ 23 degrés entre les deux systèmes.</p>
      <p>Par exemple, si vous êtes Bélier dans le système occidental, vous êtes probablement Poissons dans le système védique. Cela ne signifie pas qu'un système est faux — ils mesurent des choses différentes et se complètent.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Les Planètes les Plus Importantes dans la Carte Natale</h2>
      <ul style={{ lineHeight: '2.2' }}>
        <li><strong>Soleil (Surya) :</strong> votre identité centrale, but et force vitale</li>
        <li><strong>Lune (Chandra) :</strong> votre esprit, émotions et schémas inconscients</li>
        <li><strong>Ascendant (Lagna) :</strong> votre masque social et chemin de vie physique</li>
        <li><strong>Saturne (Shani) :</strong> vos leçons karmiques et domaines de plus grande croissance</li>
        <li><strong>Jupiter (Guru) :</strong> où vous avez protection divine et expansion naturelle</li>
      </ul>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Ce Que la Carte Natale Ne Peut Pas Faire</h2>
      <p>La carte natale ne détermine pas votre destin de façon rigide — elle montre des <strong>tendances et potentiels</strong>. Vous avez le libre arbitre de travailler avec ou contre les énergies de votre carte. Un astrologue védique expérimenté ne vous dit pas "ceci va arriver" — il vous dit "cette énergie est présente, et vous pouvez en profiter ainsi."</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Carte Natale Pour Comprendre Votre Vie</h2>
      <p>Les gens utilisent leur carte natale pour comprendre :</p>
      <ul style={{ lineHeight: '2' }}>
        <li>Pourquoi certains schémas se répètent dans leurs relations</li>
        <li>Quelle carrière correspond le mieux à leurs talents naturels</li>
        <li>Pourquoi certaines phases de vie sont plus difficiles que d'autres</li>
        <li>Quels sont leurs blocages karmiques les plus profonds</li>
        <li>Quand sont les meilleurs moments pour prendre des décisions importantes</li>
      </ul>

      <div style={{ background: 'linear-gradient(135deg, #f3e8ff, #e0e7ff)', padding: '30px', borderRadius: '16px', marginTop: '40px', textAlign: 'center' }}>
        <h3 style={{ color: '#6b21a8', fontSize: '1.5rem' }}>Recevez Votre Carte Natale Védique Complète</h3>
        <p style={{ color: '#4c1d95', marginBottom: '20px' }}>8 pages avec votre Kundali, numérologie et prévisions des 12 prochains mois</p>
        <Link href="/" style={{ background: '#7c3aed', color: 'white', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 'bold' }}>
          Voir le Rapport — 2,99€
        </Link>
      </div>

      <p style={{ marginTop: '40px', color: '#6b7280', fontSize: '0.95rem' }}>
        Khagatara génère des cartes natales védiques authentiques basées sur le système Jyotish classique — pas l'astrologie populaire de magazine. Précision et profondeur dans chaque rapport.
      </p>
    </main>
  )
}