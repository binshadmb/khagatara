import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Numerología del Nombre — Descubre el Poder de tu Nombre | Khagatara',
  description: 'Calcula la numerología de tu nombre gratis. Número del nombre, impulso del alma y número de personalidad. Sistema caldeo védico. Informe PDF por €2.99.',
}

export default function NumerologiaNombre() {
  return (
    <main className="page">
      <div className="header">
        <h1>Khagatara</h1>
        <p>Numerología del Nombre</p>
      </div>

      <article className="card" style={{maxWidth: '760px', lineHeight: '1.8'}}>

        <h2 style={{color: '#f5c842', marginBottom: '16px', fontSize: '1.8rem'}}>
          Numerología del Nombre — El Poder Oculto de tu Nombre
        </h2>

        <p style={{color: '#ccc', marginBottom: '20px'}}>
          Tu nombre no fue elegido por accidente. Según la numerología, cada letra 
          de tu nombre lleva una vibración numérica específica que influye en tu 
          personalidad, tus relaciones y tu destino. El sistema caldeo, utilizado 
          en la numerología védica, asigna valores numéricos a cada letra basándose 
          en su vibración sonora — no simplemente en su posición en el alfabeto.
        </p>

        <h3 style={{color: '#f5c842', margin: '24px 0 12px', fontSize: '1.3rem'}}>
          El Sistema Caldeo de Numerología
        </h3>

        <p style={{color: '#ccc', marginBottom: '16px'}}>
          El sistema caldeo es uno de los más antiguos sistemas de numerología del mundo, 
          originario de Mesopotamia hace más de 4,000 años. A diferencia del sistema 
          pitagórico que simplemente numera las letras del 1 al 9, el sistema caldeo 
          asigna valores basados en la vibración sonora de cada letra:
        </p>

        <div style={{background: '#1e1e2e', borderRadius: '12px', padding: '20px', marginBottom: '20px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#ccc'}}>
          <p style={{marginBottom: '8px', color: '#f5c842'}}>Tabla Caldea:</p>
          <p>1 → A I J Q Y</p>
          <p>2 → B K R</p>
          <p>3 → C G L S</p>
          <p>4 → D M T</p>
          <p>5 → E H N X</p>
          <p>6 → U V W</p>
          <p>7 → O Z</p>
          <p>8 → F P</p>
        </div>

        <h3 style={{color: '#f5c842', margin: '24px 0 12px', fontSize: '1.3rem'}}>
          Los 3 Números de tu Nombre
        </h3>

        <div style={{background: '#1e1e2e', borderRadius: '12px', padding: '20px', marginBottom: '20px'}}>
          <div style={{marginBottom: '16px'}}>
            <p style={{color: '#f5c842', fontWeight: '600', marginBottom: '6px'}}>
              1. Número del Nombre (Número de Expresión)
            </p>
            <p style={{color: '#ccc', fontSize: '0.9rem'}}>
              Calculado con todas las letras de tu nombre completo. Revela tus talentos 
              naturales, habilidades y el camino a través del cual expresas tu propósito 
              de vida al mundo.
            </p>
          </div>
          <div style={{marginBottom: '16px'}}>
            <p style={{color: '#f5c842', fontWeight: '600', marginBottom: '6px'}}>
              2. Impulso del Alma (Número del Corazón)
            </p>
            <p style={{color: '#ccc', fontSize: '0.9rem'}}>
              Calculado solo con las vocales de tu nombre. Revela tus deseos más 
              profundos, motivaciones secretas y lo que realmente quiere tu alma — 
              lo que te impulsa desde adentro.
            </p>
          </div>
          <div>
            <p style={{color: '#f5c842', fontWeight: '600', marginBottom: '6px'}}>
              3. Número de Personalidad
            </p>
            <p style={{color: '#ccc', fontSize: '0.9rem'}}>
              Calculado solo con las consonantes de tu nombre. Revela cómo te ven 
              los demás, la impresión que causas en el mundo exterior y la máscara 
              que presentas antes de que te conozcan profundamente.
            </p>
          </div>
        </div>

        <h3 style={{color: '#f5c842', margin: '24px 0 12px', fontSize: '1.3rem'}}>
          Ejemplo de Cálculo
        </h3>

        <div style={{background: '#1e1e2e', borderRadius: '12px', padding: '20px', marginBottom: '20px', color: '#ccc', fontSize: '0.9rem'}}>
          <p style={{marginBottom: '8px'}}>Nombre: <span style={{color: '#f5c842'}}>MARIA</span></p>
          <p style={{marginBottom: '4px'}}>M=4, A=1, R=2, I=1, A=1</p>
          <p style={{marginBottom: '8px'}}>Total: 4+1+2+1+1 = 9</p>
          <p style={{color: '#f5c842'}}>Número del Nombre: 9 — La Humanitaria</p>
          <hr style={{border: 'none', borderTop: '1px solid #2a2a3a', margin: '12px 0'}}/>
          <p style={{marginBottom: '4px'}}>Vocales: A=1, I=1, A=1</p>
          <p style={{marginBottom: '8px'}}>Total: 1+1+1 = 3</p>
          <p style={{color: '#f5c842'}}>Impulso del Alma: 3 — La Creativa</p>
          <hr style={{border: 'none', borderTop: '1px solid #2a2a3a', margin: '12px 0'}}/>
          <p style={{marginBottom: '4px'}}>Consonantes: M=4, R=2</p>
          <p style={{marginBottom: '8px'}}>Total: 4+2 = 6</p>
          <p style={{color: '#f5c842'}}>Número de Personalidad: 6 — La Protectora</p>
        </div>

        <h3 style={{color: '#f5c842', margin: '24px 0 12px', fontSize: '1.3rem'}}>
          ¿Debería Cambiar mi Nombre?
        </h3>

        <p style={{color: '#ccc', marginBottom: '20px'}}>
          Muchas personas consideran cambiar su nombre o usar una variante diferente 
          después de conocer su numerología. Un cambio de nombre — incluso añadir o 
          quitar una letra — puede cambiar completamente la vibración numérica. 
          Sin embargo, según la tradición védica, el nombre con el que fuiste registrado 
          al nacer lleva el karma más profundo y debe ser estudiado primero.
        </p>

        <div style={{background: '#1e1e2e', borderRadius: '12px', padding: '20px', marginBottom: '24px', color: '#ccc'}}>
          <p style={{color: '#f5c842', marginBottom: '12px', fontWeight: '600'}}>Tu informe completo incluye:</p>
          <p style={{marginBottom: '8px'}}>✦ Los 3 números de tu nombre analizados</p>
          <p style={{marginBottom: '8px'}}>✦ Número de la vida de tu fecha de nacimiento</p>
          <p style={{marginBottom: '8px'}}>✦ Compatibilidad entre nombre y destino</p>
          <p style={{marginBottom: '8px'}}>✦ Signo lunar védico y Nakshatra</p>
          <p style={{marginBottom: '8px'}}>✦ Pronóstico mes a mes 2025-2026</p>
          <p style={{marginBottom: '8px'}}>✦ Recomendaciones para armonizar tu nombre</p>
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
            Calcular Numerología de mi Nombre →
          </a>
          <p style={{color: '#555', fontSize: '0.8rem', marginTop: '10px'}}>
            Cálculo gratuito • Informe completo por €2.99
          </p>
        </div>

      </article>
    </main>
  )
}