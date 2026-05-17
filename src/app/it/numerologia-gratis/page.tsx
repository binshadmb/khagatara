import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Numerologia Gratis — Scopri il Tuo Numero del Percorso di Vita',
  description: 'Calcola subito la tua numerologia gratuita. Scopri cosa rivelano il tuo nome e la tua data di nascita sulla tua vita, la tua missione e il tuo destino.',
  keywords: 'numerologia gratuita, numerologia online, calcolo numerologia, numerologia nome, numerologia data di nascita',
}

export default function NumerologiaGratuita() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'Georgia, serif', color: '#1a1a2e' }}>
      <h1 style={{ fontSize: '2.2rem', color: '#6b21a8', marginBottom: '10px' }}>
        Numerologia Gratis — Cosa Rivelano i Numeri Su di Te
      </h1>
      <p style={{ color: '#7c3aed', marginBottom: '30px', fontSize: '1.1rem' }}>
        Calcola gratuitamente la tua numerologia e comprendi il tuo percorso di vita
      </p>

      <p>La <strong>numerologia</strong> è una disciplina antica che rivela la connessione profonda tra i numeri e gli eventi della nostra vita. Utilizzata da millenni nelle tradizioni vediche, greche ed ebraiche, la numerologia interpreta il tuo nome e la tua data di nascita per rivelare la tua missione, i tuoi talenti e le sfide che affronti in questa vita.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Che Cos'è la Numerologia?</h2>
      <p>La numerologia studia il significato nascosto dei numeri. Ogni numero da 1 a 9 — più i numeri maestri 11, 22 e 33 — porta una vibrazione unica che influenza la tua personalità, le tue relazioni e il tuo destino.</p>
      <p>Nella tradizione vedica, i numeri sono direttamente collegati ai pianeti: 1 al Sole, 2 alla Luna, 3 a Giove, 4 a Rahu, 5 a Mercurio, 6 a Venere, 7 a Ketu, 8 a Saturno e 9 a Marte.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Come Calcolare il Tuo Numero del Percorso di Vita</h2>
      <p>Il <strong>Numero del Percorso di Vita</strong> è il più importante in numerologia. Si calcola sommando tutte le cifre della tua data di nascita fino a ottenere un numero a una cifra (tranne 11, 22 e 33).</p>
      <p><strong>Esempio:</strong> nato il 15/08/1990</p>
      <ul style={{ lineHeight: '2' }}>
        <li>1 + 5 + 0 + 8 + 1 + 9 + 9 + 0 = 33</li>
        <li>33 è un numero maestro — non si riduce!</li>
        <li>Il tuo Percorso di Vita è il <strong>33</strong></li>
      </ul>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Il Significato di Ogni Numero</h2>
      <ul style={{ lineHeight: '2.2' }}>
        <li><strong>1 — Il Leader:</strong> indipendenza, pionierismo, volontà</li>
        <li><strong>2 — Il Diplomatico:</strong> cooperazione, sensibilità, equilibrio</li>
        <li><strong>3 — Il Creativo:</strong> espressione, gioia, comunicazione</li>
        <li><strong>4 — Il Costruttore:</strong> disciplina, lavoro, stabilità</li>
        <li><strong>5 — L'Avventuriero:</strong> libertà, cambiamento, versatilità</li>
        <li><strong>6 — Il Guaritore:</strong> famiglia, responsabilità, armonia</li>
        <li><strong>7 — Il Saggio:</strong> spiritualità, analisi, introspezione</li>
        <li><strong>8 — Il Realizzatore:</strong> potere, abbondanza, successo materiale</li>
        <li><strong>9 — L'Umanitario:</strong> compassione, servizio, saggezza universale</li>
      </ul>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Numerologia Vedica vs Numerologia Occidentale</h2>
      <p>La <strong>numerologia vedica</strong> (Ankur Shastra) differisce da quella occidentale soprattutto nell'interpretazione dei numeri e nel loro legame con i pianeti. Mentre la numerologia occidentale utilizza il sistema pitagorico, quella vedica si basa sugli insegnamenti degli antichi saggi indiani.</p>
      <p>In Khagatara, utilizziamo la tradizione vedica — più precisa per comprendere il karma, lo scopo di vita e i cicli planetari.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Scopri il Tuo Rapporto Completo</h2>
      <p>Una lettura gratuita ti fornisce il tuo numero base. Ma il <strong>Rapporto Vedico Completo</strong> di Khagatara rivela:</p>
      <ul style={{ lineHeight: '2' }}>
        <li>Il tuo numero del percorso di vita e la tua missione</li>
        <li>Il numero dell'espressione (calcolato dal tuo nome completo)</li>
        <li>Il numero dell'anima e la motivazione interiore</li>
        <li>I tuoi pianeti dominanti e la loro influenza su di te</li>
        <li>La compatibilità con partner, soci e famiglia</li>
        <li>Le previsioni numerologiche per i prossimi 12 mesi</li>
      </ul>

      <div style={{ background: 'linear-gradient(135deg, #f3e8ff, #e0e7ff)', padding: '30px', borderRadius: '16px', marginTop: '40px', textAlign: 'center' }}>
        <h3 style={{ color: '#6b21a8', fontSize: '1.5rem' }}>Ricevi il Tuo Rapporto Vedico Completo</h3>
        <p style={{ color: '#4c1d95', marginBottom: '20px' }}>8 pagine personalizzate con numerologia, astrologia vedica e previsioni</p>
        <a href="/" style={{ background: '#7c3aed', color: 'white', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 'bold' }}>
          Vedi il Rapporto — 2,99€
        </a>
      </div>

      <p style={{ marginTop: '40px', color: '#6b7280', fontSize: '0.95rem' }}>
        Khagatara unisce l'antica saggezza vedica alla tecnologia moderna per fornire insight numerologici precisi e personalizzati. Tutti i calcoli si basano su testi vedici autentici.
      </p>
    </main>
  )
}