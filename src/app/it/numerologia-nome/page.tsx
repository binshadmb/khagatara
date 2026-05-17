import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Numerologia del Nome — Cosa Rivela il Tuo Nome',
  description: 'Scopri il significato numerologico del tuo nome completo. Calcola il tuo numero dell\'espressione e comprendi i tuoi talenti e la tua missione di vita.',
  keywords: 'numerologia nome, numerologia nome completo, numero espressione, significato nome numerologia, calcolo nome numerologia',
}

export default function NumerologiaNome() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'Georgia, serif', color: '#1a1a2e' }}>
      <h1 style={{ fontSize: '2.2rem', color: '#6b21a8', marginBottom: '10px' }}>
        Numerologia del Nome — Cosa Rivela il Tuo Nome Su di Te
      </h1>
      <p style={{ color: '#7c3aed', marginBottom: '30px', fontSize: '1.1rem' }}>
        Il tuo nome non è casuale — ogni lettera porta una vibrazione numerica unica
      </p>

      <p>Nella numerologia, il tuo <strong>nome completo di nascita</strong> è importante quanto la tua data di nascita. Ogni lettera dell'alfabeto corrisponde a un numero, e la somma di queste lettere rivela il tuo <strong>Numero dell'Espressione</strong> — chiamato anche Numero del Destino.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>La Tabella Numerologica delle Lettere</h2>
      <p>Nel sistema pitagorico, ogni lettera riceve un valore da 1 a 9:</p>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
          <thead>
            <tr style={{ background: '#6b21a8', color: 'white' }}>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Numero</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Lettere</th>
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

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Come Calcolare il Numero del Tuo Nome</h2>
      <p><strong>Esempio:</strong> MARIA</p>
      <ul style={{ lineHeight: '2' }}>
        <li>M = 4, A = 1, R = 9, I = 9, A = 1</li>
        <li>4 + 1 + 9 + 9 + 1 = 24</li>
        <li>2 + 4 = <strong>6</strong></li>
        <li>Il Numero dell'Espressione di Maria = <strong>6 (Il Guaritore)</strong></li>
      </ul>
      <p>Usa sempre il <strong>nome completo di nascita</strong> — esattamente come compare nell'atto di nascita, senza soprannomi o abbreviazioni.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Cosa Rivela il Numero dell'Espressione</h2>
      <p>Il Numero dell'Espressione mostra i tuoi <strong>talenti naturali</strong>, le tue capacità innate e il modo in cui ti esprimi nel mondo. È ciò per cui sei venuto qui — la tua missione di vita in termini pratici.</p>
      <ul style={{ lineHeight: '2.2' }}>
        <li><strong>1:</strong> Nato per guidare, innovare e aprire la strada</li>
        <li><strong>2:</strong> Nato per mediare, cooperare e creare armonia</li>
        <li><strong>3:</strong> Nato per esprimersi, creare e ispirare</li>
        <li><strong>4:</strong> Nato per costruire, organizzare e strutturare</li>
        <li><strong>5:</strong> Nato per esplorare, comunicare e trasformare</li>
        <li><strong>6:</strong> Nato per prendersi cura, guarire e servire la famiglia</li>
        <li><strong>7:</strong> Nato per cercare, analizzare e scoprire la verità</li>
        <li><strong>8:</strong> Nato per realizzare, guidare attività e prosperare</li>
        <li><strong>9:</strong> Nato per servire l'umanità e trasmettere saggezza</li>
      </ul>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Numero dell'Anima — Le Vocali del Tuo Nome</h2>
      <p>Oltre al Numero dell'Espressione, le <strong>vocali del tuo nome</strong> rivelano il Numero dell'Anima — i tuoi desideri più profondi, la tua motivazione interiore e ciò che ti muove davvero, anche se non lo dici a nessuno.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Numerologia Vedica del Nome</h2>
      <p>Nella tradizione vedica, il nome è ancora più sacro. I saggi insegnavano che il suono del nome, quando viene pronunciato, crea vibrazioni che plasmano la realtà. Ecco perché molte famiglie indiane scelgono il nome del bambino in base a calcoli astrologici e numerologici precisi.</p>
      <p>In Khagatara, incrociamo la numerologia del tuo nome con la tua carta astrologica vedica per un'analisi molto più profonda e precisa.</p>

      <div style={{ background: 'linear-gradient(135deg, #f3e8ff, #e0e7ff)', padding: '30px', borderRadius: '16px', marginTop: '40px', textAlign: 'center' }}>
        <h3 style={{ color: '#6b21a8', fontSize: '1.5rem' }}>Analisi Completa del Tuo Nome + Data di Nascita</h3>
        <p style={{ color: '#4c1d95', marginBottom: '20px' }}>Rapporto vedico di 8 pagine con numerologia del nome, percorso di vita e previsioni</p>
        <a href="/" style={{ background: '#7c3aed', color: 'white', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 'bold' }}>
          Vedi il Rapporto — 2,99€
        </a>
      </div>

      <p style={{ marginTop: '40px', color: '#6b7280', fontSize: '0.95rem' }}>
        Khagatara utilizza calcoli vedici autentici per analizzare il potere vibratorio del tuo nome e rivelare con precisione la tua missione di vita.
      </p>
    </main>
  )
}