import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Qué Significa el Número 11 — Número Maestro | Khagatara',
  description: 'Descubre qué significa el número 11 en numerología. El número maestro 11 es el más intuitivo y espiritual. Calcula tu número gratis.',
}

export default function QueSignificaNumero11() {
  return (
    <main className="page">
      <div className="header">
        <h1>Khagatara</h1>
        <p>El Significado del Número 11</p>
      </div>

      <article className="card" style={{maxWidth: '760px', lineHeight: '1.8'}}>

        <h2 style={{color: '#f5c842', marginBottom: '16px', fontSize: '1.8rem'}}>
          Qué Significa el Número 11 — El Número Maestro Intuitivo
        </h2>

        <p style={{color: '#ccc', marginBottom: '20px'}}>
          El número 11 es uno de los tres Números Maestros en numerología — junto 
          con el 22 y el 33. No se reduce a un solo dígito porque lleva una vibración 
          espiritual tan elevada que merece ser estudiado en su forma completa. 
          Las personas con número de vida 11 son consideradas almas antiguas con 
          una misión especial en esta vida.
        </p>

        <h3 style={{color: '#f5c842', margin: '24px 0 12px', fontSize: '1.3rem'}}>
          ¿Qué es un Número Maestro?
        </h3>

        <p style={{color: '#ccc', marginBottom: '20px'}}>
          En numerología, los números maestros son el 11, 22 y 33. Se llaman maestros 
          porque contienen una doble vibración — el 11 tiene la energía del 1 duplicada, 
          el 22 tiene la energía del 2 duplicada, y el 33 tiene la energía del 3 duplicada. 
          Esta doble vibración les da un potencial extraordinario pero también desafíos 
          más intensos que a los demás números.
        </p>

        <h3 style={{color: '#f5c842', margin: '24px 0 12px', fontSize: '1.3rem'}}>
          Características del Número 11
        </h3>

        <div style={{background: '#1e1e2e', borderRadius: '12px', padding: '20px', marginBottom: '20px'}}>
          {[
            ['Intuición extraordinaria', 'El 11 tiene acceso a información que otros no pueden ver. Su sexto sentido es su mayor regalo.'],
            ['Sensibilidad elevada', 'Siente las emociones de los demás profundamente. Puede ser abrumador pero también es su superpoder.'],
            ['Visión inspiradora', 'Tiene la capacidad de inspirar a masas. Muchos líderes espirituales y artistas tienen número 11.'],
            ['Dualidad interior', 'Constantemente dividido entre el mundo material y el espiritual. Esta tensión es su motor de crecimiento.'],
            ['Propósito elevado', 'No vino a esta vida solo a sobrevivir — vino a iluminar, a despertar conciencias.'],
            ['Sensibilidad nerviosa', 'La alta vibración del 11 puede manifestarse como ansiedad o nerviosismo cuando no está bien anclado.'],
          ].map(([title, desc]) => (
            <div key={title} style={{marginBottom: '14px'}}>
              <p style={{color: '#f5c842', fontWeight: '600', marginBottom: '4px', fontSize: '0.95rem'}}>{title}</p>
              <p style={{color: '#ccc', fontSize: '0.9rem'}}>{desc}</p>
            </div>
          ))}
        </div>

        <h3 style={{color: '#f5c842', margin: '24px 0 12px', fontSize: '1.3rem'}}>
          El Número 11 en el Amor
        </h3>

        <p style={{color: '#ccc', marginBottom: '20px'}}>
          En las relaciones, el número 11 busca una conexión profunda y espiritual. 
          No se conforma con relaciones superficiales — necesita un compañero que 
          comprenda su sensibilidad y su visión del mundo. Son parejas intensamente 
          amorosas y devotas, pero también pueden ser emocionalmente exigentes. 
          Su mayor compatibilidad numerológica es con los números 2, 6 y otros 
          números maestros.
        </p>

        <h3 style={{color: '#f5c842', margin: '24px 0 12px', fontSize: '1.3rem'}}>
          El Número 11 en la Carrera
        </h3>

        <p style={{color: '#ccc', marginBottom: '20px'}}>
          Las personas con número 11 prosperan en carreras que les permiten usar 
          su intuición y su capacidad de inspirar a otros. Son excelentes como 
          artistas, músicos, escritores, maestros espirituales, psicólogos, 
          consejeros y líderes visionarios. Fracasan cuando se ven obligados 
          a trabajos rutinarios que no alimentan su alma.
        </p>

        <h3 style={{color: '#f5c842', margin: '24px 0 12px', fontSize: '1.3rem'}}>
          Personajes Famosos con Número 11
        </h3>

        <div style={{background: '#1e1e2e', borderRadius: '12px', padding: '20px', marginBottom: '20px', color: '#ccc', fontSize: '0.9rem'}}>
          <p style={{marginBottom: '6px'}}>✦ Barack Obama — líder visionario e inspirador</p>
          <p style={{marginBottom: '6px'}}>✦ Edgar Allan Poe — escritor con visión sobrenatural</p>
          <p style={{marginBottom: '6px'}}>✦ Wolfgang Amadeus Mozart — genio musical intuitivo</p>
          <p style={{marginBottom: '6px'}}>✦ Tony Blair — líder político carismático</p>
          <p>✦ Orlando Bloom — artista sensible y espiritual</p>
        </div>

        <h3 style={{color: '#f5c842', margin: '24px 0 12px', fontSize: '1.3rem'}}>
          Los 3 Números Maestros Comparados
        </h3>

        <div style={{background: '#1e1e2e', borderRadius: '12px', padding: '20px', marginBottom: '24px'}}>
          {[
            ['11', 'El Iluminado', 'Intuición, inspiración, sensibilidad espiritual'],
            ['22', 'El Constructor Maestro', 'Visión práctica, capacidad de manifestar grandes sueños'],
            ['33', 'El Maestro Compasivo', 'Amor incondicional, curación, servicio a la humanidad'],
          ].map(([num, title, desc]) => (
            <div key={num} style={{display: 'flex', gap: '16px', marginBottom: '12px', alignItems: 'flex-start'}}>
              <span style={{color: '#f5c842', fontWeight: '700', fontSize: '1.3rem', minWidth: '30px'}}>{num}</span>
              <div>
                <p style={{color: '#f0f0f0', fontWeight: '600', fontSize: '0.9rem'}}>{title}</p>
                <p style={{color: '#999', fontSize: '0.85rem'}}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{background: '#1e1e2e', borderRadius: '12px', padding: '20px', marginBottom: '24px', color: '#ccc'}}>
          <p style={{color: '#f5c842', marginBottom: '12px', fontWeight: '600'}}>¿Tienes número 11? Tu informe completo incluye:</p>
          <p style={{marginBottom: '8px'}}>✦ Análisis profundo de tu número maestro</p>
          <p style={{marginBottom: '8px'}}>✦ Tu misión de vida específica</p>
          <p style={{marginBottom: '8px'}}>✦ Desafíos y dones del número 11</p>
          <p style={{marginBottom: '8px'}}>✦ Compatibilidad amorosa detallada</p>
          <p style={{marginBottom: '8px'}}>✦ Pronóstico mes a mes 2026-2027</p>
          <p style={{marginBottom: '8px'}}>✦ Signo lunar védico y Nakshatra</p>
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
            Calcular Mi Número de la Vida →
          </Link>
          <p style={{color: '#555', fontSize: '0.8rem', marginTop: '10px'}}>
            Cálculo gratuito • Informe completo por €2.99
          </p>
        </div>

      </article>
    </main>
  )
}