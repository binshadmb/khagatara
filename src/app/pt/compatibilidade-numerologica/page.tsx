import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Compatibilidade Numerológica — Descubra Sua Combinação Ideal',
  description: 'Calcule a compatibilidade numerológica entre você e seu parceiro. Descubra se os números de vocês são compatíveis no amor, amizade e negócios.',
  keywords: 'compatibilidade numerologica, numerologia casal, compatibilidade numeros, numerologia amor, numeros compativeis',
}

export default function CompatibilidadeNumerologica() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'Georgia, serif', color: '#1a1a2e' }}>
      <h1 style={{ fontSize: '2.2rem', color: '#6b21a8', marginBottom: '10px' }}>
        Compatibilidade Numerológica — Os Números do Seu Relacionamento
      </h1>
      <p style={{ color: '#7c3aed', marginBottom: '30px', fontSize: '1.1rem' }}>
        Os números revelam padrões de harmonia e tensão entre duas pessoas
      </p>

      <p>A <strong>compatibilidade numerológica</strong> analisa a relação entre os números de duas pessoas para identificar pontos de harmonia natural, áreas de tensão e o potencial do relacionamento a longo prazo. Usada há séculos em tradições védicas para avaliar casamentos, parcerias e amizades, a numerologia oferece insights que a intuição sozinha não alcança.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Como Funciona a Compatibilidade Numerológica</h2>
      <p>A análise compara principalmente três números de cada pessoa:</p>
      <ul style={{ lineHeight: '2' }}>
        <li><strong>Número do Caminho de Vida</strong> — a essência de quem você é</li>
        <li><strong>Número de Expressão</strong> — como você age no mundo</li>
        <li><strong>Número da Alma</strong> — o que você deseja profundamente</li>
      </ul>
      <p>Quando esses números se complementam, o relacionamento flui naturalmente. Quando entram em conflito, surgem padrões repetitivos de desentendimento — não por má vontade, mas por vibrações fundamentalmente diferentes.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Tabela de Compatibilidade por Número</h2>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
          <thead>
            <tr style={{ background: '#6b21a8', color: 'white' }}>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Número</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Mais Compatível</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Mais Desafiador</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['1', '3, 5, 9', '4, 8'],
              ['2', '4, 6, 8', '1, 5'],
              ['3', '1, 5, 9', '4, 7'],
              ['4', '2, 6, 8', '1, 3, 5'],
              ['5', '1, 3, 7', '2, 4, 6'],
              ['6', '2, 4, 8, 9', '5'],
              ['7', '5, 9', '1, 2, 6'],
              ['8', '2, 4, 6', '1, 3'],
              ['9', '1, 3, 6', '4, 5'],
            ].map(([num, compatible, challenging], i) => (
              <tr key={num} style={{ background: i % 2 === 0 ? '#f9f0ff' : 'white' }}>
                <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center', fontWeight: 'bold', color: '#6b21a8' }}>{num}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center', color: '#16a34a' }}>{compatible}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center', color: '#dc2626' }}>{challenging}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Compatibilidade no Amor — Os Melhores Pares</h2>
      <ul style={{ lineHeight: '2.2' }}>
        <li><strong>1 e 9:</strong> liderança + sabedoria — se inspiram mutuamente</li>
        <li><strong>2 e 6:</strong> cuidado + harmonia — relacionamento profundamente nutritivo</li>
        <li><strong>3 e 5:</strong> criatividade + aventura — nunca falta diversão e estímulo</li>
        <li><strong>4 e 8:</strong> construção + ambição — juntos constroem impérios</li>
        <li><strong>7 e 9:</strong> espiritualidade + compaixão — conexão de alma rara e profunda</li>
      </ul>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Compatibilidade nos Negócios</h2>
      <p>A numerologia também é usada para avaliar parcerias de negócios. Os melhores pares empresariais geralmente combinam números complementares — um visionário com um executor, um criativo com um organizador.</p>
      <ul style={{ lineHeight: '2' }}>
        <li><strong>1 + 4:</strong> visão + execução — combinação clássica de sucesso</li>
        <li><strong>3 + 8:</strong> criatividade + poder financeiro — negócios lucrativos</li>
        <li><strong>6 + 9:</strong> cuidado + propósito — empresas com impacto social</li>
      </ul>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Compatibilidade Védica — Além dos Números</h2>
      <p>Na tradição védica, a compatibilidade matrimonial (Kundali Milan) vai muito além da numerologia. O sistema analisa <strong>36 pontos de compatibilidade</strong> (Gunas) baseados nos mapas astrológicos dos dois parceiros. Um mínimo de 18 pontos é necessário para um casamento harmonioso — 28 ou mais é considerado excelente.</p>
      <p>O relatório da Khagatara combina a análise numerológica com insights védicos para dar uma visão muito mais completa do seu relacionamento.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Compatibilidade Difícil Significa Relacionamento Impossível?</h2>
      <p>Não. Números desafiadores indicam áreas que exigem mais trabalho consciente — não que o relacionamento seja fadado ao fracasso. Alguns dos relacionamentos mais transformadores e profundos acontecem entre números desafiadores, justamente porque se provocam a crescer.</p>

      <div style={{ background: 'linear-gradient(135deg, #f3e8ff, #e0e7ff)', padding: '30px', borderRadius: '16px', marginTop: '40px', textAlign: 'center' }}>
        <h3 style={{ color: '#6b21a8', fontSize: '1.5rem' }}>Analise Sua Compatibilidade em Profundidade</h3>
        <p style={{ color: '#4c1d95', marginBottom: '20px' }}>Relatório védico completo com numerologia, compatibilidade e previsões para os próximos 12 meses</p>
        <a href="/" style={{ background: '#7c3aed', color: 'white', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 'bold' }}>
          Ver Relatório — €2,99
        </a>
      </div>

      <p style={{ marginTop: '40px', color: '#6b7280', fontSize: '0.95rem' }}>
        Khagatara usa análise numerológica védica autêntica para revelar a dinâmica profunda dos seus relacionamentos — amor, família, amizade e negócios.
      </p>
    </main>
  )
}