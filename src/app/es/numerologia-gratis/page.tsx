import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Numerología Gratis — Calcula tu Número de la Vida | Khagatara',
  description: 'Calcula tu número de la vida gratis con numerología védica. Descubre tu camino cósmico, signo lunar y período dasha. Informe completo en PDF por solo €2.99.',
}

export default function NumerologiaGratis() {
  return (
    <main className="page">
      <div className="header">
        <h1>Khagatara</h1>
        <p>Numerología Védica Gratuita</p>
      </div>

      <article className="card" style={{maxWidth: '760px', lineHeight: '1.8'}}>

        <h2 style={{color: '#f5c842', marginBottom: '16px', fontSize: '1.8rem'}}>
          Numerología Gratis — Descubre tu Número de la Vida
        </h2>

        <p style={{color: '#ccc', marginBottom: '20px'}}>
          La numerología es una de las ciencias más antiguas del mundo. Durante miles de años, 
          culturas de todo el planeta han utilizado los números para comprender el propósito 
          de vida, la personalidad y el destino de cada persona. Hoy puedes calcular tu número 
          de la vida completamente gratis con nuestra calculadora de numerología védica.
        </p>

        <h3 style={{color: '#f5c842', margin: '24px 0 12px', fontSize: '1.3rem'}}>
          ¿Qué es el Número de la Vida?
        </h3>

        <p style={{color: '#ccc', marginBottom: '20px'}}>
          El número de la vida es el número más importante en la numerología. Se calcula 
          sumando todos los dígitos de tu fecha de nacimiento y reduciéndolos a un solo 
          número. Este número revela tu propósito en esta vida, tus talentos naturales, 
          los desafíos que enfrentarás y el camino que tu alma eligió antes de nacer.
        </p>

        <h3 style={{color: '#f5c842', margin: '24px 0 12px', fontSize: '1.3rem'}}>
          ¿Cómo Calcular tu Número de la Vida Gratis?
        </h3>

        <p style={{color: '#ccc', marginBottom: '12px'}}>
          El cálculo es sencillo. Por ejemplo, si naciste el 13 de junio de 1981:
        </p>

        <div style={{background: '#1e1e2e', borderRadius: '12px', padding: '20px', marginBottom: '20px', color: '#ccc'}}>
          <p>1 + 3 + 0 + 6 + 1 + 9 + 8 + 1 = 29</p>
          <p>2 + 9 = 11</p>
          <p style={{color: '#f5c842', marginTop: '8px'}}>Número de la Vida: <strong>11</strong> — Número Maestro Intuitivo</p>
        </div>

        <p style={{color: '#ccc', marginBottom: '20px'}}>
          Los números 11, 22 y 33 son llamados Números Maestros y tienen un significado 
          espiritual especial. No se reducen a un solo dígito porque representan una 
          vibración elevada y un propósito de vida más profundo.
        </p>

        <h3 style={{color: '#f5c842', margin: '24px 0 12px', fontSize: '1.3rem'}}>
          Los 9 Números de la Vida y su Significado
        </h3>

        <div style={{background: '#1e1e2e', borderRadius: '12px', padding: '20px', marginBottom: '20px'}}>
          {[
            ['1', 'El Líder', 'Independiente, ambicioso, pionero. Nacido para liderar.'],
            ['2', 'El Diplomático', 'Sensible, intuitivo, pacificador. Maestro de las relaciones.'],
            ['3', 'El Creativo', 'Expresivo, alegre, comunicador nato. El arte es su camino.'],
            ['4', 'El Constructor', 'Disciplinado, confiable, trabajador. Construye bases sólidas.'],
            ['5', 'El Aventurero', 'Libre, versátil, curioso. Necesita cambio y movimiento.'],
            ['6', 'El Protector', 'Cariñoso, responsable, amoroso. Nació para cuidar.'],
            ['7', 'El Sabio', 'Analítico, espiritual, profundo. Busca la verdad interior.'],
            ['8', 'El Ejecutivo', 'Ambicioso, poderoso, materialista. El dinero fluye hacia él.'],
            ['9', 'El Humanitario', 'Compasivo, generoso, universal. Sirve a la humanidad.'],
          ].map(([num, title, desc]) => (
            <div key={num} style={{display: 'flex', gap: '16px', marginBottom: '12px', alignItems: 'flex-start'}}>
              <span style={{color: '#f5c842', fontWeight: '700', fontSize: '1.2rem', minWidth: '24px'}}>{num}</span>
              <div>
                <span style={{color: '#f0f0f0', fontWeight: '600'}}>{title} — </span>
                <span style={{color: '#999'}}>{desc}</span>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{color: '#f5c842', margin: '24px 0 12px', fontSize: '1.3rem'}}>
          Numerología Védica vs Numerología Occidental
        </h3>

        <p style={{color: '#ccc', marginBottom: '20px'}}>
          La numerología védica proviene de la India y tiene más de 5,000 años de historia. 
          A diferencia de la numerología occidental que solo usa la fecha de nacimiento, 
          la numerología védica combina el número de la vida con el signo lunar (Rashi), 
          la estrella de nacimiento (Nakshatra) y el período planetario actual (Dasha). 
          Esta combinación ofrece una visión mucho más precisa y profunda de tu destino.
        </p>

        <h3 style={{color: '#f5c842', margin: '24px 0 12px', fontSize: '1.3rem'}}>
          ¿Qué incluye el Informe Completo?
        </h3>

        <div style={{background: '#1e1e2e', borderRadius: '12px', padding: '20px', marginBottom: '24px', color: '#ccc'}}>
          <p style={{marginBottom: '8px'}}>✦ Número de la vida completo con interpretación profunda</p>
          <p style={{marginBottom: '8px'}}>✦ Número del nombre (sistema caldeo)</p>
          <p style={{marginBottom: '8px'}}>✦ Impulso del alma y número de la personalidad</p>
          <p style={{marginBottom: '8px'}}>✦ Signo lunar védico (Rashi) y estrella de nacimiento (Nakshatra)</p>
          <p style={{marginBottom: '8px'}}>✦ Período dasha actual y próximos ciclos planetarios</p>
          <p style={{marginBottom: '8px'}}>✦ Pronóstico de carrera y dinero 2026-2027</p>
          <p style={{marginBottom: '8px'}}>✦ Compatibilidad en relaciones</p>
          <p style={{marginBottom: '8px'}}>✦ Fechas afortunadas, colores y piedras preciosas</p>
          <p>✦ PDF completo de 8 páginas descarga instantánea</p>
        </div>

        <div style={{textAlign: 'center'}}>
          <Link 
            href="/" 
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
            Calcular Mi Numerología Gratis →
          </Link>
          <p style={{color: '#555', fontSize: '0.8rem', marginTop: '10px'}}>
            Cálculo gratuito • Informe completo por €2.99
          </p>
        </div>

      </article>
    </main>
  )
}