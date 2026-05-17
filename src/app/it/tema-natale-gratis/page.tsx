import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tema Natale Gratuito — Scopri il Tuo Tema Astrale di Nascita',
  description: 'Calcola il tuo tema natale gratuito. Comprendi cosa rivelano le posizioni dei pianeti al momento della tua nascita sulla tua personalità e sul tuo destino.',
  keywords: 'tema natale gratuito, tema astrale nascita, tema natale gratuito online, carta natale online, calcolare tema natale',
}

export default function TemaNataleGratuito() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'Georgia, serif', color: '#1a1a2e' }}>
      <h1 style={{ fontSize: '2.2rem', color: '#6b21a8', marginBottom: '10px' }}>
        Tema Natale Gratuito — Il Ritratto del Cielo nel Momento della Tua Nascita
      </h1>
      <p style={{ color: '#7c3aed', marginBottom: '30px', fontSize: '1.1rem' }}>
        Nell'istante in cui sei nato, il cielo ha formato uno schema unico — il tuo tema natale
      </p>

      <p>Il <strong>tema natale</strong> — chiamato anche tema astrale o carta di nascita — è una fotografia del cielo nel momento esatto in cui sei venuto al mondo. Mostra la posizione del Sole, della Luna e di tutti i pianeti nei segni e nelle case astrologiche, rivelando la tua personalità, i tuoi talenti, le tue sfide e il tuo scopo di vita.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Cosa Serve per Calcolare il Tema Natale</h2>
      <p>Per un tema natale preciso, servono tre informazioni:</p>
      <ul style={{ lineHeight: '2' }}>
        <li><strong>Data di nascita</strong> — giorno, mese e anno</li>
        <li><strong>Ora di nascita</strong> — più è precisa, meglio è (ideale: atto di nascita)</li>
        <li><strong>Luogo di nascita</strong> — città e paese</li>
      </ul>
      <p>L'ora è essenziale perché l'Ascendente (Lagna) cambia circa ogni 2 ore. Senza l'ora, la carta è incompleta.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Le 12 Case del Tema Natale</h2>
      <p>Il tema natale è diviso in <strong>12 case</strong>, ognuna delle quali rappresenta un settore della vita:</p>
      <ul style={{ lineHeight: '2.2' }}>
        <li><strong>Casa 1:</strong> personalità, aspetto, come il mondo ti vede</li>
        <li><strong>Casa 2:</strong> denaro, risorse, famiglia, voce</li>
        <li><strong>Casa 3:</strong> comunicazione, fratelli, brevi viaggi, coraggio</li>
        <li><strong>Casa 4:</strong> casa, madre, radici, immobile, pace interiore</li>
        <li><strong>Casa 5:</strong> creatività, figli, romanticismo, speculazione</li>
        <li><strong>Casa 6:</strong> salute, lavoro, routine, nemici, servizio</li>
        <li><strong>Casa 7:</strong> matrimonio, partnership, contratti, gli altri</li>
        <li><strong>Casa 8:</strong> trasformazione, eredità, misteri, morte e rinascita</li>
        <li><strong>Casa 9:</strong> filosofia, religione, lunghi viaggi, padre, fortuna</li>
        <li><strong>Casa 10:</strong> carriera, reputazione, status, risultati pubblici</li>
        <li><strong>Casa 11:</strong> amici, gruppi, guadagni, desideri realizzati</li>
        <li><strong>Casa 12:</strong> spiritualità, isolamento, karma, vita segreta</li>
      </ul>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Tema Natale Vedico vs Tema Natale Occidentale</h2>
      <p>Il tema natale vedico (Kundali) utilizza lo <strong>zodiaco siderale</strong> — basato sulla posizione reale delle costellazioni. Questo significa che il tuo segno vedico può essere diverso dal tuo segno occidentale, perché tra i due sistemi c'è una differenza di circa 23 gradi.</p>
      <p>Ad esempio, se sei Ariete nel sistema occidentale, probabilmente sei Pesci nel sistema vedico. Questo non significa che un sistema sia sbagliato — misurano cose diverse e si completano a vicenda.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>I Pianeti Più Importanti nel Tema Natale</h2>
      <ul style={{ lineHeight: '2.2' }}>
        <li><strong>Sole (Surya):</strong> la tua identità centrale, il tuo scopo e la tua forza vitale</li>
        <li><strong>Luna (Chandra):</strong> la tua mente, le emozioni e gli schemi inconsci</li>
        <li><strong>Ascendente (Lagna):</strong> la tua maschera sociale e il tuo percorso di vita fisico</li>
        <li><strong>Saturno (Shani):</strong> le tue lezioni karmiche e le aree di maggiore crescita</li>
        <li><strong>Giove (Guru):</strong> dove hai protezione divina ed espansione naturale</li>
      </ul>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Cosa il Tema Natale Non Può Fare</h2>
      <p>Il tema natale non determina il tuo destino in modo rigido — mostra <strong>tendenze e potenzialità</strong>. Hai il libero arbitrio di lavorare con le energie della tua carta o contro di esse. Un astrologo vedico esperto non ti dice "questo accadrà" — ti dice "questa energia è presente, e puoi sfruttarla così."</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Tema Natale per Capire la Tua Vita</h2>
      <p>Le persone usano il loro tema natale per capire:</p>
      <ul style={{ lineHeight: '2' }}>
        <li>Perché certi schemi si ripetono nelle relazioni</li>
        <li>Quale carriera si adatta meglio ai loro talenti naturali</li>
        <li>Perché alcune fasi della vita sono più difficili di altre</li>
        <li>Quali sono i loro blocchi karmici più profondi</li>
        <li>Quando sono i momenti migliori per prendere decisioni importanti</li>
      </ul>

      <div style={{ background: 'linear-gradient(135deg, #f3e8ff, #e0e7ff)', padding: '30px', borderRadius: '16px', marginTop: '40px', textAlign: 'center' }}>
        <h3 style={{ color: '#6b21a8', fontSize: '1.5rem' }}>Ricevi il Tuo Tema Natale Vedico Completo</h3>
        <p style={{ color: '#4c1d95', marginBottom: '20px' }}>8 pagine con il tuo Kundali, numerologia e previsioni per i prossimi 12 mesi</p>
        <a href="/" style={{ background: '#7c3aed', color: 'white', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 'bold' }}>
          Vedi il Rapporto — 2,99€
        </a>
      </div>

      <p style={{ marginTop: '40px', color: '#6b7280', fontSize: '0.95rem' }}>
        Khagatara genera temi natali vedici autentici basati sul sistema classico del Jyotish — non l'astrologia popolare da rivista. Precisione e profondità in ogni rapporto.
      </p>
    </main>
  )
}