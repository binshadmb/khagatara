import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mapa Natal Grátis — Descubra Seu Mapa Astral de Nascimento',
  description: 'Calcule seu mapa natal grátis. Entenda o que as posições dos planetas no momento do seu nascimento revelam sobre sua personalidade e destino.',
  keywords: 'mapa natal gratis, mapa astral nascimento, carta natal gratis, mapa natal online, calcular mapa natal',
}

export default function MapaNatalGratis() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'Georgia, serif', color: '#1a1a2e' }}>
      <h1 style={{ fontSize: '2.2rem', color: '#6b21a8', marginBottom: '10px' }}>
        Mapa Natal Grátis — O Retrato do Céu no Momento do Seu Nascimento
      </h1>
      <p style={{ color: '#7c3aed', marginBottom: '30px', fontSize: '1.1rem' }}>
        No instante em que você nasceu, o céu formou um padrão único — seu mapa natal
      </p>

      <p>O <strong>mapa natal</strong> — também chamado de carta natal ou mapa astral de nascimento — é uma fotografia do céu no exato momento em que você veio ao mundo. Ele mostra a posição do Sol, da Lua e de todos os planetas nos signos e casas astrológicas, revelando sua personalidade, seus dons, seus desafios e seu propósito de vida.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>O Que é Preciso Para Calcular o Mapa Natal</h2>
      <p>Para um mapa natal preciso você precisa de três informações:</p>
      <ul style={{ lineHeight: '2' }}>
        <li><strong>Data de nascimento</strong> — dia, mês e ano</li>
        <li><strong>Hora de nascimento</strong> — quanto mais exata, melhor (ideal: certidão de nascimento)</li>
        <li><strong>Local de nascimento</strong> — cidade e país</li>
      </ul>
      <p>A hora é essencial porque o Ascendente (Lagna) muda a cada 2 horas aproximadamente. Sem a hora, o mapa fica incompleto.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>As 12 Casas do Mapa Natal</h2>
      <p>O mapa natal é dividido em <strong>12 casas</strong>, cada uma representando uma área da vida:</p>
      <ul style={{ lineHeight: '2.2' }}>
        <li><strong>Casa 1:</strong> personalidade, aparência, como o mundo te vê</li>
        <li><strong>Casa 2:</strong> dinheiro, recursos, família, voz</li>
        <li><strong>Casa 3:</strong> comunicação, irmãos, viagens curtas, coragem</li>
        <li><strong>Casa 4:</strong> lar, mãe, raízes, imóveis, paz interior</li>
        <li><strong>Casa 5:</strong> criatividade, filhos, romance, especulação</li>
        <li><strong>Casa 6:</strong> saúde, trabalho, rotina, inimigos, serviço</li>
        <li><strong>Casa 7:</strong> casamento, parcerias, contratos, outros</li>
        <li><strong>Casa 8:</strong> transformação, herança, mistérios, morte e renascimento</li>
        <li><strong>Casa 9:</strong> filosofia, religião, viagens longas, pai, sorte</li>
        <li><strong>Casa 10:</strong> carreira, reputação, status, conquistas públicas</li>
        <li><strong>Casa 11:</strong> amigos, grupos, ganhos, desejos realizados</li>
        <li><strong>Casa 12:</strong> espiritualidade, isolamento, karma, vida secreta</li>
      </ul>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Mapa Natal Védico vs Mapa Natal Ocidental</h2>
      <p>O mapa natal védico (Kundali) usa o <strong>zodíaco sideral</strong> — baseado na posição real das constelações. Isso significa que seu signo védico pode ser diferente do seu signo ocidental, pois há uma diferença de aproximadamente 23 graus entre os dois sistemas.</p>
      <p>Por exemplo, se você é Áries no sistema ocidental, provavelmente é Peixes no sistema védico. Isso não significa que um sistema está errado — eles medem coisas diferentes e se complementam.</p>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>Os Planetas Mais Importantes no Mapa Natal</h2>
      <ul style={{ lineHeight: '2.2' }}>
        <li><strong>Sol (Surya):</strong> sua identidade central, propósito e força vital</li>
        <li><strong>Lua (Chandra):</strong> sua mente, emoções e padrões inconscientes</li>
        <li><strong>Ascendente (Lagna):</strong> sua máscara social e caminho de vida físico</li>
        <li><strong>Saturno (Shani):</strong> suas lições kármicas e áreas de maior crescimento</li>
        <li><strong>Júpiter (Guru):</strong> onde você tem proteção divina e expansão natural</li>
      </ul>

      <h2 style={{ color: '#6b21a8', marginTop: '35px' }}>O Que o Mapa Natal Não Pode Fazer</h2>
      <p>O mapa natal não determina seu destino de forma rígida — ele mostra <strong>tendências e potenciais</strong>. Você tem livre-arbítrio para trabalhar com ou contra as energias do seu mapa. Um astrólogo védico experiente não te diz "isso vai acontecer" — te diz "esta energia está presente, e você pode aproveitá-la assim."</p>

      <div style={{ background: 'linear-gradient(135deg, #f3e8ff, #e0e7ff)', padding: '30px', borderRadius: '16px', marginTop: '40px', textAlign: 'center' }}>
        <h3 style={{ color: '#6b21a8', fontSize: '1.5rem' }}>Receba Seu Mapa Natal Védico Completo</h3>
        <p style={{ color: '#4c1d95', marginBottom: '20px' }}>8 páginas com seu Kundali, numerologia e previsões dos próximos 12 meses</p>
        <a href="/" style={{ background: '#7c3aed', color: 'white', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 'bold' }}>
          Ver Relatório — €2,99
        </a>
      </div>

      <p style={{ marginTop: '40px', color: '#6b7280', fontSize: '0.95rem' }}>
        Khagatara gera mapas natais védicos autênticos baseados no sistema Jyotish clássico — não astrologia popular de revista. Precisão e profundidade em cada relatório.
      </p>
    </main>
  )
}