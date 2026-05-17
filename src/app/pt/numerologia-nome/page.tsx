import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Numerologia do Nome — O Que Seu Nome Revela',
  description: 'Descubra o significado numerológico do seu nome completo. Calcule seu número de expressão e entenda seus talentos e missão de vida.',
  keywords: 'numerologia nome, numerologia nome completo, numero de expressao, significado nome numerologia, calcular nome numerologia',
}

export default function NumerologiaNome() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'Georgia, serif', color: '#1a1a2e' }}>
      <h1 style={{ fontSize: '2.2rem', color: '#6b21a8', marginBottom: '10px' }}>
        Numerologia do Nome — O Que Seu Nome Revela Sobre Você
      </h1>
      <p style={{ color: '#7c3aed', marginBottom: '30px', fontSize: '1.1rem' }}>
        Seu nome não é por acaso — cada letra carrega uma vibração numérica única
      </p>

      <p>Na numerologia, seu <strong>nome completo de nascimento</strong> é tão importante quanto sua data de nascimento. Cada letra do alfabeto corresponde a um número, e a soma dessas letras revela seu <strong>Número de Expressão</strong> — também chamado de Número do Destino.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>A Tabela Numerológica das Letras</h2>
      <p>No sistema pitagórico, cada letra recebe um valor de 1 a 9:</p>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
          <thead>
            <tr style={{ background: '#6b21a8', color: 'white' }}>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Número</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Letras</th>
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

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Como Calcular o Número do Seu Nome</h2>
      <p><strong>Exemplo:</strong> MARIA</p>
      <ul style={{ lineHeight: '2' }}>
        <li>M = 4, A = 1, R = 9, I = 9, A = 1</li>
        <li>4 + 1 + 9 + 9 + 1 = 24</li>
        <li>2 + 4 = <strong>6</strong></li>
        <li>Número de Expressão de Maria = <strong>6 (O Cuidador)</strong></li>
      </ul>
      <p>Use sempre o <strong>nome completo de nascimento</strong> — exatamente como está na certidão de nascimento, sem apelidos ou abreviações.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>O Que o Número de Expressão Revela</h2>
      <p>O Número de Expressão mostra seus <strong>talentos naturais</strong>, suas habilidades inatas e a forma como você se expressa no mundo. É o que você veio fazer — sua missão de vida em termos práticos.</p>
      <ul style={{ lineHeight: '2.2' }}>
        <li><strong>1:</strong> Nascido para liderar, inovar e ser pioneiro</li>
        <li><strong>2:</strong> Nascido para mediar, cooperar e criar harmonia</li>
        <li><strong>3:</strong> Nascido para se expressar, criar e inspirar</li>
        <li><strong>4:</strong> Nascido para construir, organizar e estruturar</li>
        <li><strong>5:</strong> Nascido para explorar, comunicar e transformar</li>
        <li><strong>6:</strong> Nascido para cuidar, curar e servir a família</li>
        <li><strong>7:</strong> Nascido para pesquisar, analisar e buscar verdades</li>
        <li><strong>8:</strong> Nascido para realizar, liderar negócios e prosperar</li>
        <li><strong>9:</strong> Nascido para servir a humanidade e transmitir sabedoria</li>
      </ul>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Número da Alma — As Vogais do Seu Nome</h2>
      <p>Além do Número de Expressão, as <strong>vogais do seu nome</strong> revelam o Número da Alma — seus desejos mais profundos, sua motivação interior e o que realmente te move por dentro, mesmo que você nunca admita para ninguém.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Numerologia Védica do Nome</h2>
      <p>Na tradição védica, o nome é ainda mais sagrado. Os sábios ensinavam que o som do nome, quando pronunciado, cria vibrações que moldam a realidade. Por isso, muitas famílias indianas escolhem o nome do bebê com base em cálculos astrológicos e numerológicos precisos.</p>
      <p>Na Khagatara, cruzamos a numerologia do seu nome com seu mapa astrológico védico para uma análise muito mais profunda e precisa.</p>

      <div style={{ background: 'linear-gradient(135deg, #f3e8ff, #e0e7ff)', padding: '30px', borderRadius: '16px', marginTop: '40px', textAlign: 'center' }}>
        <h3 style={{ color: '#6b21a8', fontSize: '1.5rem' }}>Análise Completa do Seu Nome + Data de Nascimento</h3>
        <p style={{ color: '#4c1d95', marginBottom: '20px' }}>Relatório védico de 8 páginas com numerologia do nome, caminho de vida e previsões</p>
        <a href="/" style={{ background: '#7c3aed', color: 'white', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 'bold' }}>
          Ver Relatório — €2,99
        </a>
      </div>

      <p style={{ marginTop: '40px', color: '#6b7280', fontSize: '0.95rem' }}>
        Khagatara usa cálculos védicos autênticos para analisar o poder vibratório do seu nome e revelar sua missão de vida com precisão.
      </p>
    </main>
  )
}