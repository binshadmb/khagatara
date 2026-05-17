import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Astrologia Védica Grátis — Descubra Seu Mapa Jyotish',
  description: 'Conheça a astrologia védica grátis. Descubra como o Jyotish revela seu dharma, karma e propósito de vida através dos planetas e casas astrológicas.',
  keywords: 'astrologia vedica gratis, jyotish, astrologia indiana, mapa vedico, astrologia vedica online, horoscopo vedico',
}

export default function AstrologiaVedicaGratis() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'Georgia, serif', color: '#1a1a2e' }}>
      <h1 style={{ fontSize: '2.2rem', color: '#6b21a8', marginBottom: '10px' }}>
        Astrologia Védica Grátis — O Que é o Jyotish e Como Funciona
      </h1>
      <p style={{ color: '#7c3aed', marginBottom: '30px', fontSize: '1.1rem' }}>
        A ciência astrológica mais antiga do mundo — mais de 5.000 anos de sabedoria
      </p>

      <p>A <strong>astrologia védica</strong>, conhecida em sânscrito como <strong>Jyotish</strong> (que significa "ciência da luz"), é um sistema astrológico com mais de 5.000 anos de história. Diferente da astrologia ocidental, o Jyotish usa o zodíaco sideral — baseado na posição real das estrelas — e dá muito mais ênfase à Lua, ao karma e ao dharma de cada pessoa.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Diferença Entre Astrologia Védica e Ocidental</h2>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
          <thead>
            <tr style={{ background: '#6b21a8', color: 'white' }}>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Aspecto</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Védica (Jyotish)</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Ocidental</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Zodíaco', 'Sideral (estrelas reais)', 'Tropical (estações)'],
              ['Foco principal', 'Lua e Ascendente', 'Sol'],
              ['Origem', 'Índia, 3000+ a.C.', 'Grécia, 500 a.C.'],
              ['Planetas', '9 grahas (inclui Rahu/Ketu)', '10 (inclui Urano/Netuno)'],
              ['Propósito', 'Dharma, karma, moksha', 'Psicologia, personalidade'],
            ].map(([aspect, vedic, western]) => (
              <tr key={aspect}>
                <td style={{ padding: '10px', border: '1px solid #ddd', fontWeight: 'bold', color: '#6b21a8' }}>{aspect}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{vedic}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{western}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Os 9 Planetas do Jyotish (Navagrahas)</h2>
      <p>Na astrologia védica, trabalhamos com <strong>9 grahas</strong> (planetas/pontos astrológicos):</p>
      <ul style={{ lineHeight: '2.2' }}>
        <li><strong>Surya (Sol):</strong> alma, ego, pai, autoridade, vitalidade</li>
        <li><strong>Chandra (Lua):</strong> mente, emoções, mãe, intuição, hábitos</li>
        <li><strong>Mangala (Marte):</strong> energia, coragem, conflito, irmãos, ambição</li>
        <li><strong>Budha (Mercúrio):</strong> inteligência, comunicação, negócios, habilidades</li>
        <li><strong>Guru (Júpiter):</strong> sabedoria, expansão, filhos, espiritualidade, fortuna</li>
        <li><strong>Shukra (Vênus):</strong> amor, beleza, luxo, relacionamentos, artes</li>
        <li><strong>Shani (Saturno):</strong> karma, disciplina, limitações, trabalho duro, longevidade</li>
        <li><strong>Rahu (Nodo Norte):</strong> obsessões, desejos, ilusões, tecnologia, estrangeiros</li>
        <li><strong>Ketu (Nodo Sul):</strong> espiritualidade, desapego, karma passado, moksha</li>
      </ul>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>O Que é o Lagna (Ascendente Védico)?</h2>
      <p>O <strong>Lagna</strong> é o signo que estava nascendo no horizonte leste no momento exato do seu nascimento. É o ponto mais importante do seu mapa védico — mais até que o signo solar. O Lagna define sua aparência física, sua personalidade, seu caminho de vida e como o mundo te percebe.</p>
      <p>Por isso, na astrologia védica, quando alguém pergunta "qual é o seu signo?", a resposta correta é o seu Lagna — não o signo solar.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>O Sistema de Dashas — Previsões Precisas</h2>
      <p>Uma das ferramentas mais poderosas do Jyotish é o sistema de <strong>Dashas</strong> — períodos planetários que mostram quais energias estão ativas na sua vida em cada fase. O sistema Vimshottari Dasha divide sua vida em ciclos de até 120 anos, cada um regido por um planeta diferente.</p>
      <p>Saber em qual Dasha você está agora explica por que certas áreas da sua vida estão florescendo ou enfrentando desafios — e quanto tempo esse ciclo vai durar.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Astrologia Védica + Numerologia — A Combinação da Khagatara</h2>
      <p>O diferencial da Khagatara é combinar <strong>numerologia védica</strong> com <strong>Jyotish</strong> em um único relatório. Seus números revelam seu propósito; seu mapa revela o timing. Juntos, formam o guia mais completo possível para entender sua vida e tomar melhores decisões.</p>

      <div style={{ background: 'linear-gradient(135deg, #f3e8ff, #e0e7ff)', padding: '30px', borderRadius: '16px', marginTop: '40px', textAlign: 'center' }}>
        <h3 style={{ color: '#6b21a8', fontSize: '1.5rem' }}>Seu Mapa Védico Completo + Numerologia</h3>
        <p style={{ color: '#4c1d95', marginBottom: '20px' }}>Relatório de 8 páginas com Jyotish, numerologia e previsões de Dasha personalizadas</p>
        <Link href="/" style={{ background: '#7c3aed', color: 'white', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 'bold' }}>
          Ver Relatório — €2,99
        </Link>
      </div>

      <p style={{ marginTop: '40px', color: '#6b7280', fontSize: '0.95rem' }}>
        Khagatara é especializada em astrologia védica autêntica — não astrologia popular ocidental. Nossos cálculos seguem os textos clássicos do Jyotish para máxima precisão.
      </p>
    </main>
  )
}