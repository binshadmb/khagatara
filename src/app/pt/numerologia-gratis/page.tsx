import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Numerologia Grátis — Descubra Seu Número do Destino',
  description: 'Calcule sua numerologia grátis agora. Descubra o que seu nome e data de nascimento revelam sobre sua vida, propósito e destino.',
  keywords: 'numerologia gratis, numerologia online, calcular numerologia, numerologia nome, numerologia data nascimento',
}

export default function NumerologiaGratis() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'Georgia, serif', color: '#1a1a2e' }}>
      <h1 style={{ fontSize: '2.2rem', color: '#6b21a8', marginBottom: '10px' }}>
        Numerologia Grátis — Descubra o Que os Números Revelam Sobre Você
      </h1>
      <p style={{ color: '#7c3aed', marginBottom: '30px', fontSize: '1.1rem' }}>
        Calcule sua numerologia gratuitamente e entenda seu caminho de vida
      </p>

      <p>A <strong>numerologia</strong> é uma ciência milenar que revela a conexão profunda entre os números e os eventos da nossa vida. Usada há milhares de anos em tradições védicas, gregas e hebraicas, a numerologia interpreta seu nome e data de nascimento para revelar sua missão, seus talentos e seus desafios nesta vida.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>O Que é Numerologia?</h2>
      <p>A numerologia estuda o significado oculto dos números. Cada número do 1 ao 9 — mais os números mestres 11, 22 e 33 — carrega uma vibração única que influencia sua personalidade, seus relacionamentos e seu destino.</p>
      <p>Na tradição védica, os números estão diretamente ligados aos planetas: o 1 ao Sol, o 2 à Lua, o 3 a Júpiter, o 4 a Rahu, o 5 a Mercúrio, o 6 a Vênus, o 7 a Ketu, o 8 a Saturno e o 9 a Marte.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Como Calcular Seu Número do Caminho de Vida</h2>
      <p>O <strong>Número do Caminho de Vida</strong> é o mais importante na numerologia. Ele é calculado somando todos os dígitos da sua data de nascimento até obter um número de um dígito (exceto 11, 22 e 33).</p>
      <p><strong>Exemplo:</strong> nascido em 15/08/1990</p>
      <ul style={{ lineHeight: '2' }}>
        <li>1 + 5 + 0 + 8 + 1 + 9 + 9 + 0 = 33</li>
        <li>33 é um número mestre — não reduzir!</li>
        <li>Seu Caminho de Vida é <strong>33</strong></li>
      </ul>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>O Significado de Cada Número</h2>
      <ul style={{ lineHeight: '2.2' }}>
        <li><strong>1 — O Líder:</strong> independência, pioneirismo, força de vontade</li>
        <li><strong>2 — O Diplomata:</strong> cooperação, sensibilidade, equilíbrio</li>
        <li><strong>3 — O Criativo:</strong> expressão, alegria, comunicação</li>
        <li><strong>4 — O Construtor:</strong> disciplina, trabalho, estabilidade</li>
        <li><strong>5 — O Aventureiro:</strong> liberdade, mudança, versatilidade</li>
        <li><strong>6 — O Cuidador:</strong> família, responsabilidade, harmonia</li>
        <li><strong>7 — O Sábio:</strong> espiritualidade, análise, introspecção</li>
        <li><strong>8 — O Realizador:</strong> poder, abundância, conquista material</li>
        <li><strong>9 — O Humanitário:</strong> compaixão, serviço, sabedoria universal</li>
      </ul>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Numerologia Védica vs Numerologia Ocidental</h2>
      <p>A <strong>numerologia védica</strong> (Ankur Shastra) difere da ocidental principalmente na interpretação dos números e sua ligação com os planetas. Enquanto a numerologia ocidental usa o sistema Pitagórico, a védica baseia-se nos ensinamentos dos antigos sábios indianos.</p>
      <p>Na Khagatara, usamos a tradição védica — mais precisa para entender karma, propósito de vida e ciclos planetários.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Descubra Seu Relatório Completo</h2>
      <p>Uma leitura gratuita te dá seu número básico. Mas o <strong>Relatório Védico Completo</strong> da Khagatara revela:</p>
      <ul style={{ lineHeight: '2' }}>
        <li>Seu número do caminho de vida e missão</li>
        <li>Número da expressão (calculado pelo nome completo)</li>
        <li>Número da alma e motivação interior</li>
        <li>Seus planetas regentes e como influenciam você</li>
        <li>Compatibilidade com parceiros, sócios e família</li>
        <li>Previsão numerológica para os próximos 12 meses</li>
      </ul>

      <div style={{ background: 'linear-gradient(135deg, #f3e8ff, #e0e7ff)', padding: '30px', borderRadius: '16px', marginTop: '40px', textAlign: 'center' }}>
        <h3 style={{ color: '#6b21a8', fontSize: '1.5rem' }}>Receba Seu Relatório Védico Completo</h3>
        <p style={{ color: '#4c1d95', marginBottom: '20px' }}>8 páginas personalizadas com sua numerologia, astrologia védica e previsões</p>
        <Link href="/" style={{ background: '#7c3aed', color: 'white', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 'bold' }}>
          Ver Relatório — €2,99
        </Link>
      </div>

      <p style={{ marginTop: '40px', color: '#6b7280', fontSize: '0.95rem' }}>
        Khagatara combina a antiga sabedoria védica com tecnologia moderna para entregar insights numerológicos precisos e personalizados. Todos os cálculos são baseados em textos védicos autênticos.
      </p>
    </main>
  )
}