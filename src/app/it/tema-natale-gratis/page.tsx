import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tema Natale Gratis — Scopri la Tua Carta Astrale di Nascita',
  description: 'Calcola il tuo tema natale gratis. Comprendi cosa rivelano le posizioni dei pianeti al momento della tua nascita sulla tua personalità e destino.',
  keywords: 'tema natale gratis, carta natale gratis, mappa astrale nascita, tema natale online, calcolare tema natale',
}

export default function TemaNataleGratis() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'Georgia, serif', color: '#1a1a2e' }}>
      <h1 style={{ fontSize: '2.2rem', color: '#6b21a8', marginBottom: '10px' }}>
        Tema Natale Gratis — Il Ritratto del Cielo al Momento della Tua Nascita
      </h1>
      <p style={{ color: '#7c3aed', marginBottom: '30px', fontSize: '1.1rem' }}>
        Nel momento in cui sei nato, il cielo ha formato uno schema unico — il tuo tema natale
      </p>

      <p>Il <strong>tema natale</strong> — chiamato anche carta natale o mappa astrale di nascita — è una fotografia del cielo nel momento esatto in cui sei venuto al mondo. Mostra la posizione del Sole, della Luna e di tutti i pianeti nei segni e nelle case astrologiche, rivelando la tua personalità, i tuoi doni, le tue sfide e il tuo scopo di vita.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Cosa Serve per Calcolare il Tema Natale</h2>
      <p>Per un tema natale preciso hai bisogno di tre informazioni:</p>
      <ul style={{ lineHeight: '2' }}>
        <li><strong>Data di nascita</strong> — giorno, mese e anno</li>
        <li><strong>Ora di nascita</strong> — più è esatta, meglio è (ideale: atto di nascita)</li>
        <li><strong>Luogo di nascita</strong> — città e paese</li>
      </ul>
      <p>L'ora è essenziale perché l'Ascendente (Lagna) cambia ogni 2 ore circa. Senza l'ora, il tema è incompleto.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Le 12 Case del Tema Natale</h2>
      <p>Il tema natale è diviso in <strong>12 case</strong>, ognuna che rappresenta un'area della vita:</p>
      <ul style={{ lineHeight: '2.2' }}>
        <li><strong>Casa 1:</strong> personalità, aspetto, come il mondo ti vede</li>
        <li><strong>Casa 2:</strong> denaro, risorse, famiglia, voce</li>
        <li><strong>Casa 3:</strong> comunicazione, fratelli, viaggi brevi, coraggio</li>
        <li><strong>Casa 4:</strong> casa, madre, radici, immobili, pace interiore</li>
        <li><strong>Casa 5:</strong> creatività, figli, romance, speculazione</li>
        <li><strong>Casa 6:</strong> salute, lavoro, routine, nemici, servizio</li>
        <li><strong>Casa 7:</strong> matrimonio, partnership, contratti, altri</li>
        <li><strong>Casa 8:</strong> trasformazione, eredità, misteri, morte e rinascita</li>
        <li><strong>Casa 9:</strong> filosofia, religione, viaggi lunghi, padre, fortuna</li>
        <li><strong>Casa 10:</strong> carriera, reputazione, status, successi pubblici</li>
        <li><strong>Casa 11:</strong> amici, gruppi, guadagni, desideri realizzati</li>
        <li><strong>Casa 12:</strong> spiritualità, isolamento, karma, vita segreta</li>
      </ul>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Tema Natale Vedico vs Tema Natale Occidentale</h2>
      <p>Il tema natale vedico (Kundali) usa lo <strong>zodiaco siderale</strong> — basato sulla posizione reale delle costellazioni. Questo significa che il tuo segno vedico può essere diverso dal tuo segno occidentale, poiché c'è una differenza di circa 23 gradi tra i due sistemi.</p>
      <p>Per esempio, se sei Ariete nel sistema occidentale, probabilmente sei Pesci nel sistema vedico. Questo non significa che un sistema sia sbagliato — misurano cose diverse e si completano a vicenda.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>I Pianeti più Importanti nel Tema Natale</h2>
      <ul style={{ lineHeight: '2.2' }}>
        <li><strong>Sole (Surya):</strong> la tua identità centrale, scopo e forza vitale</li>
        <li><strong>Luna (Chandra):</strong> la tua mente, emozioni e schemi inconsci</li>
        <li><strong>Ascendente (Lagna):</strong> la tua maschera sociale e cammino di vita fisico</li>
        <li><strong>Saturno (Shani):</strong> le tue lezioni karmiche e aree di maggiore crescita</li>
        <li><strong>Giove (Guru):</strong> dove hai protezione divina ed espansione naturale</li>
      </ul>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>I 27 Nakshatra — Il Dettaglio che l'Astrologia Occidentale Non Ha</h2>
      <p>Uno degli strumenti più sofisticati del Jyotish sono i <strong>27 Nakshatra</strong> — le dimore lunari. Ogni Nakshatra copre 13°20' dello zodiaco e ha un reggente planetario, un simbolo e caratteristiche uniche. Il tuo Nakshatra natale rivela la tua natura più profonda, i tuoi istinti e il tuo karma di vita con una precisione impossibile da raggiungere solo con i segni solari.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Tema Natale + Numerologia = Visione Completa</h2>
      <p>Il tema natale mostra <em>dove</em> si trovano le energie. La numerologia mostra <em>chi</em> sei in essenza. Quando combinati — come fa Khagatara — ottieni un'analisi molto più ricca e precisa di quanto uno dei due sistemi da solo possa offrire.</p>

      <div style={{ background: 'linear-gradient(135deg, #f3e8ff, #e0e7ff)', padding: '30px', borderRadius: '16px', marginTop: '40px', textAlign: 'center' }}>
        <h3 style={{ color: '#6b21a8', fontSize: '1.5rem' }}>Ricevi il Tuo Tema Natale Vedico Completo</h3>
        <p style={{ color: '#4c1d95', marginBottom: '20px' }}>8 pagine con Kundali, Nakshatra, numerologia e previsioni personalizzate</p>
        <a href="/" style={{ background: '#7c3aed', color: 'white', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 'bold' }}>
          Vedi il Rapporto — €2,99
        </a>
      </div>

      <p style={{ marginTop: '40px', color: '#6b7280', fontSize: '0.95rem' }}>
        Khagatara genera temi natali vedici autentici basati sul sistema Jyotish classico — non l'astrologia popolare da rivista. Precisione e profondità in ogni rapporto.
      </p>
    </main>
  )
}
