import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Carta Natal Gratis — Tu Mapa Astral Védico | Khagatara',
  description: 'Obtén tu carta natal gratis con astrología védica. Descubre tu signo lunar, estrella de nacimiento y período planetario. Informe completo PDF por €2.99.',
}

export default function CartaNatalGratis() {
  return (
    <main className="page">
      <div className="header">
        <h1>Khagatara</h1>
        <p>Carta Natal Védica Gratuita</p>
      </div>

      <article className="card" style={{maxWidth: '760px', lineHeight: '1.8'}}>

        <h2 style={{color: '#f5c842', marginBottom: '16px', fontSize: '1.8rem'}}>
          Carta Natal Gratis — Tu Mapa Astral Védico
        </h2>

        <p style={{color: '#ccc', marginBottom: '20px'}}>
          Tu carta natal es el mapa del cielo en el momento exacto de tu nacimiento. 
          Es la fotografía del universo en el instante en que llegaste a este mundo. 
          La astrología védica, con más de 5,000 años de historia, utiliza esta carta 
          para revelar tu propósito de vida, tus talentos ocultos y los ciclos planetarios 
          que guían tu destino.
        </p>

        <h3 style={{color: '#f5c842', margin: '24px 0 12px', fontSize: '1.3rem'}}>
          ¿Qué es la Carta Natal Védica?
        </h3>

        <p style={{color: '#ccc', marginBottom: '20px'}}>
          A diferencia de la astrología occidental que se basa en el signo solar, 
          la astrología védica se centra en el signo lunar — el signo donde se 
          encontraba la Luna en el momento de tu nacimiento. Este signo lunar, 
          llamado Rashi en sánscrito, revela tu naturaleza emocional más profunda, 
          tus instintos y tu mente subconsciente.
        </p>

        <h3 style={{color: '#f5c842', margin: '24px 0 12px', fontSize: '1.3rem'}}>
          Los 12 Signos Lunares Védicos (Rashi)
        </h3>

        <div style={{background: '#1e1e2e', borderRadius: '12px', padding: '20px', marginBottom: '20px'}}>
          {[
            ['Mesha', 'Aries', 'Pionero, valiente, apasionado'],
            ['Vrishabha', 'Tauro', 'Estable, sensual, perseverante'],
            ['Mithuna', 'Géminis', 'Curioso, comunicativo, versátil'],
            ['Karka', 'Cáncer', 'Intuitivo, protector, emocional'],
            ['Simha', 'Leo', 'Creativo, generoso, poderoso'],
            ['Kanya', 'Virgo', 'Analítico, perfeccionista, servicial'],
            ['Tula', 'Libra', 'Armonioso, justo, diplomático'],
            ['Vrishchika', 'Escorpio', 'Intenso, transformador, misterioso'],
            ['Dhanu', 'Sagitario', 'Filosófico, aventurero, optimista'],
            ['Makara', 'Capricornio', 'Disciplinado, ambicioso, práctico'],
            ['Kumbha', 'Acuario', 'Innovador, humanitario, original'],
            ['Meena', 'Piscis', 'Compasivo, intuitivo, espiritual'],
          ].map(([vedic, western, desc]) => (
            <div key={vedic} style={{display: 'flex', gap: '12px', marginBottom: '10px', alignItems: 'flex-start', fontSize: '0.9rem'}}>
              <span style={{color: '#f5c842', minWidth: '90px', fontWeight: '600'}}>{vedic}</span>
              <span style={{color: '#888', minWidth: '80px'}}>{western}</span>
              <span style={{color: '#ccc'}}>{desc}</span>
            </div>
          ))}
        </div>

        <h3 style={{color: '#f5c842', margin: '24px 0 12px', fontSize: '1.3rem'}}>
          ¿Qué es el Nakshatra o Estrella de Nacimiento?
        </h3>

        <p style={{color: '#ccc', marginBottom: '20px'}}>
          El Nakshatra es tu estrella de nacimiento — la constelación lunar donde se 
          encontraba la Luna cuando naciste. Existen 27 Nakshatras en la astrología védica, 
          cada uno con una energía, deidad y propósito únicos. Tu Nakshatra revela tu 
          carácter más profundo, tus dones espirituales y los desafíos específicos 
          que viniste a superar en esta vida.
        </p>

        <h3 style={{color: '#f5c842', margin: '24px 0 12px', fontSize: '1.3rem'}}>
          El Sistema Dasha — Los Ciclos Planetarios
        </h3>

        <p style={{color: '#ccc', marginBottom: '20px'}}>
          El sistema Dasha es una de las herramientas más poderosas de la astrología védica. 
          Divide tu vida en períodos gobernados por diferentes planetas, cada uno con una 
          duración específica. Conocer tu Dasha actual te permite entender qué energía 
          planetaria está influenciando tu vida ahora mismo y prepararte para los cambios 
          que se avecinan.
        </p>

        <div style={{background: '#1e1e2e', borderRadius: '12px', padding: '20px', marginBottom: '24px', color: '#ccc'}}>
          <p style={{color: '#f5c842', marginBottom: '12px', fontWeight: '600'}}>Tu informe completo incluye:</p>
          <p style={{marginBottom: '8px'}}>✦ Tu signo lunar védico (Rashi) completo</p>
          <p style={{marginBottom: '8px'}}>✦ Tu estrella de nacimiento (Nakshatra) y Pada</p>
          <p style={{marginBottom: '8px'}}>✦ Período Dasha actual y próximos ciclos</p>
          <p style={{marginBottom: '8px'}}>✦ Número de la vida y numerología completa</p>
          <p style={{marginBottom: '8px'}}>✦ Pronóstico mes a mes para 2025-2026</p>
          <p style={{marginBottom: '8px'}}>✦ Remedios védicos personalizados</p>
          <p>✦ PDF de 8 páginas descarga instantánea</p>
        </div>

        <div style={{textAlign: 'center'}}>
          <a href="/"
            style={{
              display: 'inline-block',
              background: '#f5c842',
              color: '#0a0a0f',
              padding: '16px 40px',
              borderRadius: '12px',
              fontWeight: '700',
              textDecoration: 'none',
              fontSize: '1.1rem',
              letterSpacing: '1px'
            }}
          >
            Obtener Mi Carta Natal Gratis →
          </a>
          <p style={{color: '#555', fontSize: '0.8rem', marginTop: '10px'}}>
            Cálculo gratuito • Informe completo por €2.99
          </p>
        </div>

      </article>
    </main>
  )
}