import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Compatibilità Numerologica — Scopri la Tua Combinazione Ideale',
  description: 'Calcola la compatibilità numerologica tra te e il tuo partner. Scopri se i vostri numeri sono compatibili in amore, amicizia e affari.',
  keywords: 'compatibilita numerologica, numerologia coppia, compatibilita numeri, numerologia amore, numeri compatibili',
}

export default function CompatibilitaNumerologica() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'Georgia, serif', color: '#1a1a2e' }}>
      <h1 style={{ fontSize: '2.2rem', color: '#6b21a8', marginBottom: '10px' }}>
        Compatibilità Numerologica — I Numeri della Tua Relazione
      </h1>
      <p style={{ color: '#7c3aed', marginBottom: '30px', fontSize: '1.1rem' }}>
        I numeri rivelano schemi di armonia e tensione tra due persone
      </p>

      <p>La <strong>compatibilità numerologica</strong> analizza la relazione tra i numeri di due persone per identificare i punti di armonia naturale, le aree di tensione e il potenziale della relazione a lungo termine. Usata per secoli nelle tradizioni vediche per valutare matrimoni, partnership e amicizie, la numerologia offre insight che la sola intuizione non può raggiungere.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Come Funziona la Compatibilità Numerologica</h2>
      <p>L'analisi confronta principalmente tre numeri di ciascuna persona:</p>
      <ul style={{ lineHeight: '2' }}>
        <li><strong>Numero del Percorso di Vita</strong> — l'essenza di chi sei</li>
        <li><strong>Numero dell'Espressione</strong> — come agisci nel mondo</li>
        <li><strong>Numero dell'Anima</strong> — ciò che desideri profondamente</li>
      </ul>
      <p>Quando questi numeri si completano, la relazione scorre in modo naturale. Quando entrano in conflitto, emergono schemi ricorrenti di incomprensione — non per cattiva volontà, ma per vibrazioni fondamentalmente diverse.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Tabella di Compatibilità per Numero</h2>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
          <thead>
            <tr style={{ background: '#6b21a8', color: 'white' }}>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Numero</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Più Compatibile</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Più Difficile</th>
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

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Compatibilità in Amore — Le Migliori Coppie</h2>
      <ul style={{ lineHeight: '2.2' }}>
        <li><strong>1 e 9:</strong> leadership + saggezza — si ispirano a vicenda</li>
        <li><strong>2 e 6:</strong> cura + armonia — relazione profondamente nutriente</li>
        <li><strong>3 e 5:</strong> creatività + avventura — mai senza divertimento e stimoli</li>
        <li><strong>4 e 8:</strong> costruzione + ambizione — insieme costruiscono imperi</li>
        <li><strong>7 e 9:</strong> spiritualità + compassione — connessione d'anima rara e profonda</li>
      </ul>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Compatibilità negli Affari</h2>
      <p>La numerologia viene anche usata per valutare le partnership commerciali. Le migliori coppie imprenditoriali combinano in genere numeri complementari — un visionario con un esecutore, un creativo con un organizzatore.</p>
      <ul style={{ lineHeight: '2' }}>
        <li><strong>1 + 4:</strong> visione + esecuzione — combinazione classica di successo</li>
        <li><strong>3 + 8:</strong> creatività + potere finanziario — affari redditizi</li>
        <li><strong>6 + 9:</strong> cura + scopo — imprese a impatto sociale</li>
      </ul>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Compatibilità Vedica — Oltre i Numeri</h2>
      <p>Nella tradizione vedica, la compatibilità matrimoniale (Kundali Milan) va ben oltre la numerologia. Il sistema analizza <strong>36 punti di compatibilità</strong> (Guna) basati sulle carte astrologiche di entrambi i partner. Un minimo di 18 punti è necessario per un matrimonio armonioso — 28 o più è considerato eccellente.</p>
      <p>Il rapporto Khagatara combina l'analisi numerologica con insight vedici per offrire una visione molto più completa della tua relazione.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Compatibilità Difficile Significa Relazione Impossibile?</h2>
      <p>No. I numeri difficili indicano aree che richiedono più lavoro consapevole — non che la relazione sia destinata a fallire. Alcune delle relazioni più trasformative e profonde nascono proprio tra numeri difficili, perché spingono entrambe le persone a crescere.</p>

      <div style={{ background: 'linear-gradient(135deg, #f3e8ff, #e0e7ff)', padding: '30px', borderRadius: '16px', marginTop: '40px', textAlign: 'center' }}>
        <h3 style={{ color: '#6b21a8', fontSize: '1.5rem' }}>Analizza la Tua Compatibilità in Profondità</h3>
        <p style={{ color: '#4c1d95', marginBottom: '20px' }}>Rapporto vedico completo con numerologia, compatibilità e previsioni per i prossimi 12 mesi</p>
        <a href="/" style={{ background: '#7c3aed', color: 'white', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 'bold' }}>
          Vedi il Rapporto — 2,99€
        </a>
      </div>

      <p style={{ marginTop: '40px', color: '#6b7280', fontSize: '0.95rem' }}>
        Khagatara utilizza un'analisi numerologica vedica autentica per rivelare la dinamica profonda delle tue relazioni — amore, famiglia, amicizia e affari.
      </p>
    </main>
  )
}