import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mapa Astral Gratis — Astrología Védica Online | Khagatara',
  description: 'Calcula tu mapa astral gratis con astrología védica. Signo lunar, Nakshatra y períodos Dasha. Informe completo PDF por solo €2.99.',
}

export default function MapaAstralGratis() {
  return (
    <main className="page">
      <div className="header">
        <h1>Khagatara</h1>
        <p>Mapa Astral Védico Gratuito</p>
      </div>

      <article className="card" style={{maxWidth: '760px', lineHeight: '1.8'}}>

        <h2 style={{color: '#f5c842', marginBottom: '16px', fontSize: '1.8rem'}}>
          Mapa Astral Gratis — Descubre tu Destino Cósmico
        </h2>

        <p style={{color: '#ccc', marginBottom: '20px'}}>
          Tu mapa astral es mucho más que una simple lista de planetas y signos. 
          Es el lenguaje del universo escrito en el momento de tu nacimiento. 
          La astrología védica, originaria de la antigua India, ofrece una de las 
          interpretaciones más profundas y precisas de este mapa cósmico que existe 
          en el mundo.
        </p>

        <h3 style={{color: '#f5c842', margin: '24px 0 12px', fontSize: '1.3rem'}}>
          ¿Qué es el Mapa Astral Védico?
        </h3>

        <p style={{color: '#ccc', marginBottom: '20px'}}>
          El mapa astral védico, también conocido como Kundali o Jyotish, es una 
          representación de las posiciones planetarias en el momento exacto de tu 
          nacimiento. A diferencia del horóscopo occidental, el Jyotish usa el zodíaco 
          sidéreo — la posición real de los planetas en el cielo — lo que lo hace 
          astronómicamente más preciso.
        </p>

        <h3 style={{color: '#f5c842', margin: '24px 0 12px', fontSize: '1.3rem'}}>
          Los 9 Planetas del Jyotish
        </h3>

        <div style={{background: '#1e1e2e', borderRadius: '12px', padding: '20px', marginBottom: '20px'}}>
          {[
            ['Surya', 'Sol', 'Alma, ego, padre, autoridad'],
            ['Chandra', 'Luna', 'Mente, emociones, madre, intuición'],
            ['Mangala', 'Marte', 'Energía, valentía, acción, hermanos'],
            ['Budha', 'Mercurio', 'Inteligencia, comunicación, negocios'],
            ['Guru', 'Júpiter', 'Sabiduría, expansión, hijos, suerte'],
            ['Shukra', 'Venus', 'Amor, belleza, arte, riqueza'],
            ['Shani', 'Saturno', 'Karma, disciplina, longevidad, trabajo'],
            ['Rahu', 'Nodo Norte', 'Deseos, ambición, ilusión, futuro'],
            ['Ketu', 'Nodo Sur', 'Moksha, espiritualidad, pasado, liberación'],
          ].map(([sanskrit, spanish, meaning]) => (
            <div key={sanskrit} style={{display: 'flex', gap: '12px', marginBottom: '10px', fontSize: '0.9rem'}}>
              <span style={{color: '#f5c842', minWidth: '80px', fontWeight: '600'}}>{sanskrit}</span>
              <span style={{color: '#888', minWidth: '70px'}}>{spanish}</span>
              <span style={{color: '#ccc'}}>{meaning}</span>
            </div>
          ))}
        </div>

        <h3 style={{color: '#f5c842', margin: '24px 0 12px', fontSize: '1.3rem'}}>
          ¿Por qué el Mapa Astral Védico es más Preciso?
        </h3>

        <p style={{color: '#ccc', marginBottom: '20px'}}>
          La astrología occidental usa el zodíaco tropical, que se basa en las estaciones 
          del año. La astrología védica usa el zodíaco sidéreo, que se basa en la posición 
          real de las estrellas. Debido a la precesión de los equinoccios, hay una diferencia 
          de aproximadamente 23 grados entre ambos sistemas. Esto significa que tu signo 
          solar occidental podría ser diferente en el sistema védico — lo que muchos 
          consideran más alineado con la realidad astronómica.
        </p>

        <h3 style={{color: '#f5c842', margin: '24px 0 12px', fontSize: '1.3rem'}}>
          Tu Pronóstico de 12 Meses
        </h3>

        <p style={{color: '#ccc', marginBottom: '20px'}}>
          Una de las características más valiosas del mapa astral védico es su capacidad 
          para predecir ciclos de tiempo. A través del sistema Dasha y los tránsitos 
          planetarios, es posible identificar períodos favorables para el amor, el dinero, 
          la carrera y la salud durante los próximos 12 meses.
        </p>

        <div style={{background: '#1e1e2e', borderRadius: '12px', padding: '20px', marginBottom: '24px', color: '#ccc'}}>
          <p style={{color: '#f5c842', marginBottom: '12px', fontWeight: '600'}}>Tu informe completo incluye:</p>
          <p style={{marginBottom: '8px'}}>✦ Mapa astral védico completo</p>
          <p style={{marginBottom: '8px'}}>✦ Signo lunar y estrella de nacimiento</p>
          <p style={{marginBottom: '8px'}}>✦ Análisis de todos tus números</p>
          <p style={{marginBottom: '8px'}}>✦ Pronóstico mes a mes 2026-2027</p>
          <p style={{marginBottom: '8px'}}>✦ Períodos favorables para amor y dinero</p>
          <p style={{marginBottom: '8px'}}>✦ Remedios y recomendaciones védicas</p>
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
            Calcular Mi Mapa Astral Gratis →
          </Link>
          <p style={{color: '#555', fontSize: '0.8rem', marginTop: '10px'}}>
            Cálculo gratuito • Informe completo por €2.99
          </p>
        </div>

      </article>
    </main>
  )
}