import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Compatibilidad Numerológica — Amor y Relaciones | Khagatara',
  description: 'Descubre tu compatibilidad numerológica gratis. Amor, pareja y relaciones según los números de la vida. Informe completo PDF por €2.99.',
}

export default function CompatibilidadNumerologica() {
  return (
    <main className="page">
      <div className="header">
        <h1>Khagatara</h1>
        <p>Compatibilidad Numerológica</p>
      </div>

      <article className="card" style={{maxWidth: '760px', lineHeight: '1.8'}}>

        <h2 style={{color: '#f5c842', marginBottom: '16px', fontSize: '1.8rem'}}>
          Compatibilidad Numerológica — El Amor en los Números
        </h2>

        <p style={{color: '#ccc', marginBottom: '20px'}}>
          La numerología puede revelar mucho sobre la compatibilidad entre dos personas. 
          Cada número de vida tiene energías específicas que armonizan mejor con algunos 
          números y crean tensión con otros. Conocer la compatibilidad numerológica de 
          tu pareja puede ayudarte a entender mejor la dinámica de tu relación y 
          superar los desafíos juntos.
        </p>

        <h3 style={{color: '#f5c842', margin: '24px 0 12px', fontSize: '1.3rem'}}>
          ¿Cómo Funciona la Compatibilidad Numerológica?
        </h3>

        <p style={{color: '#ccc', marginBottom: '20px'}}>
          La compatibilidad numerológica se basa principalmente en los números de vida 
          de dos personas. Sin embargo, también considera el número del nombre, el 
          impulso del alma y el número de personalidad. Cuando estos números se alinean 
          favorablemente, la relación tiende a fluir con mayor facilidad. Cuando hay 
          tensión numérica, no significa incompatibilidad total — sino áreas que 
          requieren mayor comprensión y trabajo consciente.
        </p>

        <h3 style={{color: '#f5c842', margin: '24px 0 12px', fontSize: '1.3rem'}}>
          Tabla de Compatibilidad por Número de Vida
        </h3>

        <div style={{background: '#1e1e2e', borderRadius: '12px', padding: '20px', marginBottom: '20px'}}>
          {[
            ['1', 'Mejor con 3, 5, 9', 'Difícil con 4, 8', 'El líder necesita libertad y admiración'],
            ['2', 'Mejor con 6, 8, 9', 'Difícil con 1, 5', 'El diplomático necesita armonía y seguridad'],
            ['3', 'Mejor con 1, 5, 7', 'Difícil con 4, 8', 'El creativo necesita diversión y expresión'],
            ['4', 'Mejor con 2, 6, 8', 'Difícil con 3, 5', 'El constructor necesita estabilidad y lealtad'],
            ['5', 'Mejor con 1, 3, 7', 'Difícil con 2, 4', 'El aventurero necesita libertad y variedad'],
            ['6', 'Mejor con 2, 4, 9', 'Difícil con 1, 5', 'El protector necesita amor y armonía familiar'],
            ['7', 'Mejor con 3, 5, 9', 'Difícil con 2, 6', 'El sabio necesita espacio y profundidad'],
            ['8', 'Mejor con 2, 4, 6', 'Difícil con 1, 3', 'El ejecutivo necesita ambición compartida'],
            ['9', 'Mejor con 2, 6, 7', 'Difícil con 4, 8', 'El humanitario necesita propósito y visión'],
          ].map(([num, best, hard, need]) => (
            <div key={num} style={{marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid #2a2a3a'}}>
              <div style={{display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '6px'}}>
                <span style={{color: '#f5c842', fontWeight: '700', fontSize: '1.2rem', minWidth: '20px'}}>{num}</span>
                <span style={{color: '#f0f0f0', fontWeight: '600', fontSize: '0.9rem'}}>{need.split(' ').slice(0,2).join(' ')}</span>
              </div>
              <p style={{color: '#4ade80', fontSize: '0.85rem', marginBottom: '2px'}}>✓ {best}</p>
              <p style={{color: '#f87171', fontSize: '0.85rem', marginBottom: '4px'}}>✗ {hard}</p>
              <p style={{color: '#888', fontSize: '0.85rem'}}>{need}</p>
            </div>
          ))}
        </div>

        <h3 style={{color: '#f5c842', margin: '24px 0 12px', fontSize: '1.3rem'}}>
          Los Números Maestros en el Amor
        </h3>

        <div style={{background: '#1e1e2e', borderRadius: '12px', padding: '20px', marginBottom: '20px'}}>
          <div style={{marginBottom: '14px'}}>
            <p style={{color: '#f5c842', fontWeight: '600', marginBottom: '4px'}}>Número 11 en el Amor</p>
            <p style={{color: '#ccc', fontSize: '0.9rem'}}>
              Busca una conexión espiritual profunda. Compatible con 2, 6, y otros 
              números maestros. Necesita una pareja que comprenda su sensibilidad 
              e intensidad emocional.
            </p>
          </div>
          <div style={{marginBottom: '14px'}}>
            <p style={{color: '#f5c842', fontWeight: '600', marginBottom: '4px'}}>Número 22 en el Amor</p>
            <p style={{color: '#ccc', fontSize: '0.9rem'}}>
              Necesita una pareja con visión y ambición. Compatible con 4, 8, y 11. 
              Busca construir algo grande juntos — no solo una relación sino un 
              legado compartido.
            </p>
          </div>
          <div>
            <p style={{color: '#f5c842', fontWeight: '600', marginBottom: '4px'}}>Número 33 en el Amor</p>
            <p style={{color: '#ccc', fontSize: '0.9rem'}}>
              El más amoroso y compasivo de todos. Compatible con casi todos los 
              números pero especialmente con 6, 9, y 11. Necesita dar y recibir 
              amor incondicional.
            </p>
          </div>
        </div>

        <h3 style={{color: '#f5c842', margin: '24px 0 12px', fontSize: '1.3rem'}}>
          Compatibilidad Védica — Más allá de los Números
        </h3>

        <p style={{color: '#ccc', marginBottom: '20px'}}>
          La astrología védica añade otra capa de compatibilidad a través del 
          sistema Kuta — una evaluación de 36 puntos que compara los Nakshatras 
          de dos personas. En la tradición védica, una compatibilidad de 18 puntos 
          o más se considera buena para el matrimonio. Los 8 factores Kuta incluyen 
          compatibilidad de temperamento, salud, prosperidad, amor, hijos y 
          longevidad de la relación.
        </p>

        <div style={{background: '#1e1e2e', borderRadius: '12px', padding: '20px', marginBottom: '24px', color: '#ccc'}}>
          <p style={{color: '#f5c842', marginBottom: '12px', fontWeight: '600'}}>Tu informe de compatibilidad incluye:</p>
          <p style={{marginBottom: '8px'}}>✦ Análisis completo de tu número de vida en el amor</p>
          <p style={{marginBottom: '8px'}}>✦ Tus mejores y peores compatibilidades</p>
          <p style={{marginBottom: '8px'}}>✦ Compatibilidad védica por Nakshatra</p>
          <p style={{marginBottom: '8px'}}>✦ Período Dasha y su influencia en relaciones</p>
          <p style={{marginBottom: '8px'}}>✦ Pronóstico amoroso mes a mes 2026-2027</p>
          <p style={{marginBottom: '8px'}}>✦ Remedios védicos para mejorar relaciones</p>
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
            Calcular Mi Compatibilidad Gratis →
          </Link>
          <p style={{color: '#555', fontSize: '0.8rem', marginTop: '10px'}}>
            Cálculo gratuito • Informe completo por €2.99
          </p>
        </div>

      </article>
    </main>
  )
}