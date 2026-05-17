import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Astrología Védica Gratis — Jyotish Online | Khagatara',
  description: 'Descubre tu astrología védica gratis. Jyotish, signo lunar, Nakshatra y Dasha. La ciencia astral más antigua del mundo. Informe PDF por €2.99.',
}

export default function AstrologiaVedicaGratis() {
  return (
    <main className="page">
      <div className="header">
        <h1>Khagatara</h1>
        <p>Astrología Védica Gratuita</p>
      </div>

      <article className="card" style={{maxWidth: '760px', lineHeight: '1.8'}}>

        <h2 style={{color: '#f5c842', marginBottom: '16px', fontSize: '1.8rem'}}>
          Astrología Védica Gratis — El Jyotish Online
        </h2>

        <p style={{color: '#ccc', marginBottom: '20px'}}>
          El Jyotish — la astrología védica — es considerada la ciencia de la luz. 
          Con más de 5,000 años de historia ininterrumpida, es uno de los sistemas 
          de conocimiento más sofisticados que ha producido la humanidad. A diferencia 
          de otros sistemas astrológicos, el Jyotish no solo describe tu personalidad 
          sino que puede predecir con precisión los ciclos de tu vida usando el 
          sistema Dasha.
        </p>

        <h3 style={{color: '#f5c842', margin: '24px 0 12px', fontSize: '1.3rem'}}>
          ¿Qué es el Jyotish?
        </h3>

        <p style={{color: '#ccc', marginBottom: '20px'}}>
          Jyotish es una palabra sánscrita que significa "ciencia de la luz" o 
          "ciencia de los cuerpos celestes". Es uno de los seis Vedangas — las 
          disciplinas auxiliares de los Vedas, los textos sagrados más antiguos 
          de la humanidad. El Jyotish fue desarrollado por los rishis — sabios 
          videntes de la antigua India — que observaron los patrones celestiales 
          durante miles de años y descubrieron su correlación con los eventos humanos.
        </p>

        <h3 style={{color: '#f5c842', margin: '24px 0 12px', fontSize: '1.3rem'}}>
          Las 3 Ramas del Jyotish
        </h3>

        <div style={{background: '#1e1e2e', borderRadius: '12px', padding: '20px', marginBottom: '20px'}}>
          <div style={{marginBottom: '16px'}}>
            <p style={{color: '#f5c842', fontWeight: '600', marginBottom: '6px'}}>
              1. Ganita (Astronomía y Cálculo)
            </p>
            <p style={{color: '#ccc', fontSize: '0.9rem'}}>
              La base matemática del Jyotish. Calcula las posiciones exactas de 
              los planetas usando el zodíaco sidéreo — la posición real de las 
              estrellas en el cielo.
            </p>
          </div>
          <div style={{marginBottom: '16px'}}>
            <p style={{color: '#f5c842', fontWeight: '600', marginBottom: '6px'}}>
              2. Hora (Astrología Natal)
            </p>
            <p style={{color: '#ccc', fontSize: '0.9rem'}}>
              El análisis de la carta natal individual. Estudia cómo las posiciones 
              planetarias en el nacimiento influyen en la personalidad, el karma 
              y el destino de una persona.
            </p>
          </div>
          <div>
            <p style={{color: '#f5c842', fontWeight: '600', marginBottom: '6px'}}>
              3. Samhita (Astrología Mundana)
            </p>
            <p style={{color: '#ccc', fontSize: '0.9rem'}}>
              El estudio de eventos colectivos — guerras, desastres naturales, 
              cambios políticos y ciclos de civilizaciones enteras basados en 
              los movimientos planetarios.
            </p>
          </div>
        </div>

        <h3 style={{color: '#f5c842', margin: '24px 0 12px', fontSize: '1.3rem'}}>
          Los 27 Nakshatras — Las Mansiones Lunares
        </h3>

        <p style={{color: '#ccc', marginBottom: '16px'}}>
          Los Nakshatras son las 27 mansiones lunares del Jyotish — las 
          constelaciones a través de las cuales viaja la Luna durante su ciclo 
          mensual. Tu Nakshatra de nacimiento es uno de los elementos más 
          importantes de tu carta védica:
        </p>

        <div style={{background: '#1e1e2e', borderRadius: '12px', padding: '20px', marginBottom: '20px', fontSize: '0.85rem'}}>
          {[
            ['Ashwini', 'Velocidad, curación, nuevos comienzos'],
            ['Bharani', 'Transformación, muerte y renacimiento'],
            ['Krittika', 'Fuego purificador, disciplina, corte'],
            ['Rohini', 'Creatividad, belleza, fertilidad, amor'],
            ['Mrigashira', 'Búsqueda, curiosidad, sensibilidad'],
            ['Ardra', 'Tormenta, renovación, destrucción creativa'],
            ['Punarvasu', 'Retorno, renovación, abundancia'],
            ['Pushya', 'Nutrición, cuidado, espiritualidad'],
            ['Ashlesha', 'Kundalini, misterio, poder de la serpiente'],
          ].map(([name, meaning]) => (
            <div key={name} style={{display: 'flex', gap: '12px', marginBottom: '8px'}}>
              <span style={{color: '#f5c842', minWidth: '110px', fontWeight: '600'}}>{name}</span>
              <span style={{color: '#ccc'}}>{meaning}</span>
            </div>
          ))}
          <p style={{color: '#555', marginTop: '8px', fontSize: '0.8rem'}}>
            ...y 18 Nakshatras más, cada uno con su energía única
          </p>
        </div>

        <h3 style={{color: '#f5c842', margin: '24px 0 12px', fontSize: '1.3rem'}}>
          El Sistema Vimshottari Dasha
        </h3>

        <p style={{color: '#ccc', marginBottom: '16px'}}>
          El Vimshottari Dasha es el sistema de períodos planetarios más usado 
          en el Jyotish. Divide los 120 años de una vida humana en períodos 
          gobernados por los 9 planetas védicos:
        </p>

        <div style={{background: '#1e1e2e', borderRadius: '12px', padding: '20px', marginBottom: '24px'}}>
          {[
            ['Ketu', '7 años', 'Espiritualidad, separación, karma pasado'],
            ['Venus', '20 años', 'Amor, arte, lujo, relaciones'],
            ['Sol', '6 años', 'Poder, autoridad, padre, ego'],
            ['Luna', '10 años', 'Emociones, mente, hogar, madre'],
            ['Marte', '7 años', 'Energía, conflicto, valentía'],
            ['Rahu', '18 años', 'Ambición, ilusión, extranjero'],
            ['Júpiter', '16 años', 'Sabiduría, expansión, hijos, suerte'],
            ['Saturno', '19 años', 'Karma, trabajo duro, restricción'],
            ['Mercurio', '17 años', 'Inteligencia, negocios, comunicación'],
          ].map(([planet, years, meaning]) => (
            <div key={planet} style={{display: 'flex', gap: '12px', marginBottom: '8px', fontSize: '0.85rem', alignItems: 'flex-start'}}>
              <span style={{color: '#f5c842', minWidth: '70px', fontWeight: '600'}}>{planet}</span>
              <span style={{color: '#888', minWidth: '60px'}}>{years}</span>
              <span style={{color: '#ccc'}}>{meaning}</span>
            </div>
          ))}
        </div>

        <div style={{background: '#1e1e2e', borderRadius: '12px', padding: '20px', marginBottom: '24px', color: '#ccc'}}>
          <p style={{color: '#f5c842', marginBottom: '12px', fontWeight: '600'}}>Tu informe védico completo incluye:</p>
          <p style={{marginBottom: '8px'}}>✦ Tu signo lunar védico (Rashi) completo</p>
          <p style={{marginBottom: '8px'}}>✦ Tu Nakshatra y Pada de nacimiento</p>
          <p style={{marginBottom: '8px'}}>✦ Período Dasha actual y análisis detallado</p>
          <p style={{marginBottom: '8px'}}>✦ Numerología védica completa</p>
          <p style={{marginBottom: '8px'}}>✦ Pronóstico mes a mes 2026-2027</p>
          <p style={{marginBottom: '8px'}}>✦ Remedios védicos personalizados</p>
          <p>✦ PDF de 8 páginas descarga instantánea</p>
        </div>

        <div style={{textAlign: 'center'}}>
          <Link href="/"
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
            Obtener Mi Carta Védica Gratis →
          </Link>
          <p style={{color: '#555', fontSize: '0.8rem', marginTop: '10px'}}>
            Cálculo gratuito • Informe completo por €2.99
          </p>
        </div>

      </article>
    </main>
  )
}