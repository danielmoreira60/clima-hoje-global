import React from 'react';
import { Link } from 'react-router-dom';
import {
  Lead, H2, H3, P, Highlight, Warning, InfoBox, PullQuote,
  Checklist, DataTable, ExternalLink, FAQ,
} from '@/components/blog/ArticleUI';

const InternalLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <Link to={to} className="text-primary font-semibold underline decoration-2 underline-offset-2 hover:text-primary/80">
    {children}
  </Link>
);

const H4: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h4 className="text-xl font-semibold text-slate-900 mt-6 mb-2">{children}</h4>
);

const CTA: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="my-10 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 p-6 text-white shadow-lg">
    <p className="text-lg font-semibold leading-relaxed">{children}</p>
  </div>
);

const FaqSchema: React.FC<{ items: { q: string; a: string }[] }> = ({ items }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((i) => ({
          '@type': 'Question',
          name: i.q,
          acceptedAnswer: { '@type': 'Answer', text: i.a },
        })),
      }),
    }}
  />
);

/* ==========================================================================
   ARTIGO 1: La Niña 2026 — a virada do Pacífico depois do Super El Niño
   ========================================================================== */

const laNinaFaq = [
  {
    q: 'O que é La Niña e como ela se forma?',
    a: 'La Niña é a fase fria do fenômeno ENOS (El Niño–Oscilação Sul). Ela ocorre quando os ventos alísios se intensificam sobre o Pacífico equatorial, empurram a água quente para a Indonésia e favorecem a ressurgência de água fria na costa da América do Sul. Quando a temperatura da superfície do mar na região Niño 3.4 fica pelo menos 0,5 °C abaixo da média por cinco trimestres consecutivos, o episódio é oficialmente declarado.',
  },
  {
    q: 'Quais são os impactos da La Niña 2026 no Brasil?',
    a: 'O padrão típico traz chuvas acima da média no norte e no leste da Amazônia e em boa parte do Nordeste, chuva irregular e veranicos no Sul do país, e maior variabilidade no Sudeste, com períodos secos alternados com temporais intensos. Também é comum um aumento de entradas de massas de ar frio no Sul e no Sudeste durante o outono e o inverno.',
  },
  {
    q: 'La Niña deixa o inverno mais frio no Brasil?',
    a: 'Não necessariamente em média, mas ela favorece episódios de frio mais intensos e mais curtos. Com o jato subtropical deslocado, as massas de ar polar encontram menos resistência para avançar pelo continente, o que aumenta a chance de ondas de frio pontuais no Sul, no Sudeste e até no Centro-Oeste.',
  },
  {
    q: 'Quanto tempo dura um episódio de La Niña?',
    a: 'A maioria dos episódios dura entre 9 e 12 meses, mas eventos que atravessam dois ou até três invernos do Hemisfério Norte já foram registrados. Essas La Niñas multianuais tendem a intensificar secas acumuladas em regiões como o sul da América do Sul e o Chifre da África.',
  },
  {
    q: 'La Niña aumenta o número de furacões no Atlântico?',
    a: 'Sim. Durante La Niña o cisalhamento vertical do vento sobre o Atlântico tropical diminui, o que facilita a organização e a intensificação de ciclones tropicais. Temporadas de furacões acima da média são estatisticamente mais frequentes em anos de La Niña.',
  },
  {
    q: 'Como acompanhar a evolução da La Niña em tempo real?',
    a: 'Os boletins mensais do CPTEC/INPE e do INMET, no Brasil, e os diagnósticos do NOAA Climate Prediction Center, nos Estados Unidos, publicam índices atualizados da região Niño 3.4. Aplicativos como Windy, Climatempo e AccuWeather ajudam no acompanhamento diário das condições locais.',
  },
  {
    q: 'La Niña e mudanças climáticas são a mesma coisa?',
    a: 'Não. La Niña é um ciclo natural do sistema oceano-atmosfera que se repete a cada dois a sete anos. As mudanças climáticas são uma tendência de aquecimento de longo prazo. O que se observa hoje é a soma dos dois: mesmo em anos de La Niña, as temperaturas globais ficam acima da média histórica.',
  },
  {
    q: 'Como me preparar para os extremos associados à La Niña?',
    a: 'Monte um kit de emergência, mantenha calhas e ralos limpos antes da estação chuvosa, acompanhe os alertas do INMET e da Defesa Civil pelo telefone 199 ou pelo SMS 40199, planeje reserva de água em regiões sujeitas a estiagem e tenha um plano familiar de evacuação em áreas de risco de alagamento ou deslizamento.',
  },
];

export const LaNina2026Article: React.FC<{ midImage: string }> = ({ midImage }) => (
  <>
    <FaqSchema items={laNinaFaq} />

    <Lead>
      Depois de um dos episódios mais intensos já registrados de aquecimento do Pacífico, o
      oceano virou o jogo. A <strong>La Niña 2026</strong> se instalou sobre o Pacífico equatorial
      e passou a reorganizar o clima do planeta — do regime de chuvas no Nordeste brasileiro à
      temporada de furacões no Atlântico, passando pelos veranicos que preocupam o agronegócio no
      Sul do país. Entender esse ciclo é hoje a forma mais barata de se antecipar ao tempo.
    </Lead>

    <P>
      Nenhum outro fenômeno natural muda tanto a previsão do tempo em tantos lugares ao mesmo
      tempo quanto o ENOS — a sigla para El Niño–Oscilação Sul. Ele não é uma tempestade, não tem
      um dia de chegada e não aparece no radar. É uma alteração de temperatura na superfície de
      uma faixa do Pacífico maior do que todo o território brasileiro, e essa alteração
      redistribui calor e umidade pela atmosfera inteira.
    </P>

    <P>
      Em 2026, essa faixa esfriou. E quando ela esfria, o mundo inteiro sente — inclusive quem
      nunca ouviu falar da região Niño 3.4.
    </P>

    <Highlight title="Resumo rápido: o que muda com a La Niña 2026">
      Pacífico equatorial central e leste com anomalia negativa de temperatura da superfície do
      mar · alísios intensificados · Índice de Oscilação Sul positivo · chuva acima da média no
      norte e leste da Amazônia e no Nordeste · risco de veranicos e estiagem no Sul do Brasil ·
      temporada de furacões mais ativa no Atlântico · maior frequência de entradas de ar polar
      no inverno do Hemisfério Sul.
    </Highlight>

    <H2 id="o-que-e">O que é La Niña: o ciclo climático explicado sem jargão</H2>

    <P>
      Imagine o Pacífico tropical como uma banheira de 15 mil quilômetros de comprimento. Os
      ventos alísios sopram de leste para oeste, empurrando a água aquecida pelo sol em direção à
      Indonésia e à Austrália. Do outro lado, na costa do Peru e do Equador, essa água que sai
      precisa ser reposta — e ela vem de baixo, das camadas profundas e frias do oceano. Esse
      processo se chama <strong>ressurgência</strong>.
    </P>

    <P>
      Na La Niña, os alísios sopram mais forte que o normal. A pilha de água quente no Pacífico
      oeste fica mais alta, a ressurgência no leste fica mais vigorosa e a superfície do oceano
      esfria de forma anômala em uma faixa que se estende por milhares de quilômetros ao longo da
      linha do Equador.
    </P>

    <H3>Por que uma anomalia de 1 °C muda o clima do planeta</H3>

    <P>
      Porque o oceano é o motor térmico da atmosfera. Água quente evapora mais, alimenta nuvens
      convectivas profundas e libera calor latente no alto da troposfera. Esse calor é o
      combustível das grandes correntes de vento. Quando a área de convecção principal do
      Pacífico se desloca alguns milhares de quilômetros para oeste — como acontece na La Niña —,
      as correntes de jato mudam de posição em escala global.
    </P>

    <P>
      Um jato deslocado significa frentes frias que passam por outro caminho, bloqueios
      atmosféricos em outro lugar e sistemas de alta pressão instalados onde antes havia chuva.
      É assim que uma anomalia de 1 °C no meio do Pacífico se transforma em enchente no Acre e em
      lavoura perdida no Rio Grande do Sul.
    </P>

    <InfoBox title="Como a La Niña é medida oficialmente">
      O principal indicador é o <strong>Índice Niño 3.4</strong>, que mede a anomalia média de
      temperatura da superfície do mar na caixa entre 5°N–5°S e 170°W–120°W. Valores iguais ou
      inferiores a −0,5 °C caracterizam condições de La Niña. Quando cinco trimestres móveis
      consecutivos ficam abaixo desse limiar, o episódio é considerado oficial. O segundo
      indicador é o <strong>Índice de Oscilação Sul (IOS)</strong>, que compara a pressão
      atmosférica entre o Taiti e Darwin, na Austrália: valores positivos indicam La Niña.
    </InfoBox>

    <H2 id="intensidade">Fraca, moderada ou forte: como classificar a La Niña 2026</H2>

    <P>
      Nem toda La Niña é igual. A intensidade do resfriamento define o tamanho do impacto — e a
      confiança que se pode ter em uma previsão sazonal.
    </P>

    <DataTable
      headers={['Classificação', 'Anomalia Niño 3.4', 'Sinal típico no Brasil']}
      rows={[
        ['Fraca', '−0,5 °C a −0,9 °C', 'Impacto discreto; padrões locais dominam'],
        ['Moderada', '−1,0 °C a −1,4 °C', 'Chuva acima da média no Norte/Nordeste; irregularidade no Sul'],
        ['Forte', '−1,5 °C a −1,9 °C', 'Estiagem marcante no Sul; enchentes no Norte'],
        ['Muito forte', '≤ −2,0 °C', 'Extremos generalizados e temporada de furacões muito ativa'],
      ]}
      caption="Escala usada por serviços meteorológicos para classificar episódios de La Niña"
    />

    <P>
      A transição observada em 2026 seguiu o roteiro clássico do pós-El Niño: o Pacífico perdeu
      calor rapidamente ao longo do primeiro semestre, atravessou uma fase neutra curta e migrou
      para condições frias. Esse tipo de virada rápida — que os pesquisadores chamam de
      <em> whiplash</em> climático — costuma pegar produtores rurais e gestores públicos de
      surpresa, porque exige mudar o planejamento no meio da temporada.
    </P>

    <img
      src={midImage}
      alt="Solo rachado por estiagem associada à La Niña 2026 com nuvens de tempestade ao fundo em área rural brasileira"
      loading="lazy"
      width={1536}
      height={864}
      className="w-full rounded-xl shadow-lg my-10"
    />

    <H2 id="impactos-brasil">Impactos da La Niña 2026 no Brasil, região por região</H2>

    <H3>Norte e Amazônia</H3>

    <P>
      É a região onde o sinal da La Niña é mais confiável. Com a convecção reforçada sobre o
      Pacífico oeste e o ramo descendente da célula de Walker afastado da América do Sul, a
      Amazônia oriental tende a receber chuva acima da média. Depois dos anos de seca extrema que
      derrubaram o nível dos rios e isolaram comunidades ribeirinhas, o retorno das chuvas alivia
      a navegação, mas eleva o risco de cheias rápidas em afluentes de resposta curta.
    </P>

    <P>
      Quem acompanhou a{' '}
      <InternalLink to="/blog/amazonia-seca-historica-2026">seca histórica da Amazônia em 2026</InternalLink>{' '}
      percebe o contraste: em poucos meses, o mesmo território pode sair de bancos de areia
      expostos para cotas de alerta nos portos fluviais.
    </P>

    <H3>Nordeste</H3>

    <P>
      A La Niña costuma favorecer o posicionamento mais ao sul da Zona de Convergência
      Intertropical (ZCIT), o que aumenta as chances de uma quadra chuvosa regular no norte do
      Nordeste, entre fevereiro e maio. Para o semiárido, isso significa reservatórios com maior
      probabilidade de recarga — algo decisivo depois dos decretos de emergência hídrica que
      atingiram dezenas de municípios, como mostramos no artigo sobre a{' '}
      <InternalLink to="/blog/pernambuco-emergencia-seca-75-cidades">emergência da seca em Pernambuco</InternalLink>.
    </P>

    <H3>Centro-Oeste e Sudeste</H3>

    <P>
      Aqui o sinal é mais fraco e a variabilidade manda. O padrão mais comum é uma estação
      chuvosa irregular: semanas secas e quentes seguidas de episódios de chuva concentrada,
      geralmente ligados à Zona de Convergência do Atlântico Sul. É o tipo de configuração que
      produz alagamentos urbanos relâmpago mesmo em meses de chuva acumulada abaixo da média.
    </P>

    <H3>Sul</H3>

    <P>
      A região de maior atenção. Em anos de La Niña, a passagem de frentes frias pelo Sul tende a
      ser mais rápida e menos produtiva em chuva, o que aumenta o risco de veranicos justamente
      nas fases críticas de enchimento de grãos. Ao mesmo tempo, quando a chuva vem, ela costuma
      vir concentrada em eventos severos, com granizo e rajadas — como nos episódios de
      ciclogênese explosiva descritos no artigo sobre o{' '}
      <InternalLink to="/blog/ciclone-bomba-brasil-agosto-2026">ciclone-bomba no Sul e Sudeste</InternalLink>.
    </P>

    <Warning title="Atenção redobrada no campo e nas cidades">
      A combinação de estiagem prolongada com temporais isolados é especialmente perigosa: o solo
      ressecado perde capacidade de infiltração e converte chuva forte em enxurrada quase
      imediata. Áreas urbanas com pouca cobertura vegetal são as mais vulneráveis a esse efeito.
    </Warning>

    <H2 id="mundo">O que a La Niña 2026 significa para o resto do mundo</H2>

    <P>
      O ENOS é um fenômeno de teleconexões: ele conecta regiões que não têm nenhuma ligação
      geográfica aparente. Alguns dos efeitos mais consistentes documentados em episódios
      anteriores:
    </P>

    <DataTable
      headers={['Região', 'Efeito típico em La Niña', 'Setor mais afetado']}
      rows={[
        ['Atlântico Norte', 'Temporada de furacões mais ativa', 'Seguros, energia, turismo'],
        ['Sudeste da Ásia e Austrália', 'Chuvas acima da média e risco de enchentes', 'Agricultura, mineração'],
        ['Costa oeste da América do Sul', 'Águas mais frias e pesca mais produtiva', 'Pesca industrial'],
        ['Sudoeste dos Estados Unidos', 'Inverno mais seco e temporada de incêndios longa', 'Recursos hídricos'],
        ['Chifre da África', 'Estiagem persistente', 'Segurança alimentar'],
        ['Índia', 'Monção tendencialmente mais generosa', 'Agricultura e preço de alimentos'],
      ]}
      caption="Teleconexões clássicas associadas a episódios de La Niña"
    />

    <PullQuote author="Consenso de boletins do NOAA Climate Prediction Center e do CPTEC/INPE">
      La Niña não determina o tempo de um dia específico. Ela altera a probabilidade de padrões
      persistentes ao longo de uma estação inteira — e é isso que a torna útil para planejamento.
    </PullQuote>

    <H2 id="historico">Dados históricos: as La Niñas que marcaram o Brasil</H2>

    <P>
      A memória climática ajuda a calibrar expectativas. Alguns episódios ficaram gravados na
      história recente:
    </P>

    <DataTable
      headers={['Episódio', 'Intensidade', 'Marca deixada']}
      rows={[
        ['1988–1989', 'Forte', 'Quadra chuvosa robusta no Nordeste e cheias no Norte'],
        ['1998–2001', 'Multianual', 'Estiagem acumulada no Sul e crise energética no início dos anos 2000'],
        ['2007–2008', 'Forte', 'Temporada de furacões ativa no Atlântico e chuvas intensas na Ásia'],
        ['2010–2012', 'Multianual forte', 'Seca severa no Chifre da África e enchentes na Austrália'],
        ['2020–2023', 'Triple-dip (rara)', 'Estiagens sucessivas no Sul do Brasil e no Cone Sul'],
      ]}
      caption="Episódios históricos de La Niña e seus impactos mais documentados"
    />

    <P>
      O caso 2020–2023 é o mais didático: três invernos seguidos sob condições frias no Pacífico
      produziram perdas bilionárias na agricultura gaúcha e reduziram o nível de reservatórios em
      diferentes bacias. Foi a demonstração prática de que o risco climático não é apenas o
      evento extremo de um dia, mas a soma de meses de déficit.
    </P>

    <H2 id="como-se-proteger">Como se proteger dos extremos da La Niña: guia prático</H2>

    <H3>Antes da estação: preparação</H3>

    <Checklist
      items={[
        'Limpe calhas, ralos e bueiros próximos à sua casa antes do início do período chuvoso.',
        'Verifique telhados, rufos e fixação de estruturas leves como toldos, antenas e caixas d’água.',
        'Em áreas sujeitas a estiagem, planeje reserva de água potável para pelo menos 72 horas.',
        'Cadastre-se nos alertas da Defesa Civil enviando seu CEP por SMS para o número 40199.',
        'Monte um kit de emergência: lanterna, pilhas, rádio, documentos em saco plástico, medicamentos e carregador portátil.',
        'Combine com a família um ponto de encontro e um contato fora da região em caso de evacuação.',
      ]}
    />

    <H3>Durante eventos extremos: o que fazer</H3>

    <P>
      <strong>1.</strong> Em temporais, evite abrigo sob árvores, postes ou estruturas metálicas e
      afaste-se de janelas.
    </P>
    <P>
      <strong>2.</strong> Nunca atravesse ruas alagadas a pé ou de carro: 30 centímetros de água
      em movimento já deslocam um veículo de passeio.
    </P>
    <P>
      <strong>3.</strong> Em caso de rajadas fortes, permaneça no cômodo mais interno da casa,
      longe de vidros.
    </P>
    <P>
      <strong>4.</strong> Se houver risco de deslizamento — trincas em paredes, portas emperradas,
      água barrenta brotando do talude —, saia imediatamente e acione a Defesa Civil pelo 199.
    </P>
    <P>
      <strong>5.</strong> Durante estiagem, reduza esforço físico nas horas mais quentes, aumente
      a ingestão de água e proteja idosos e crianças da desidratação.
    </P>

    <H3>Dicas de conforto térmico para dias secos e quentes</H3>

    <Checklist
      items={[
        'Use umidificadores ou bacias com água nos ambientes quando a umidade relativa cair abaixo de 30%.',
        'Prefira roupas leves, de algodão e cores claras; evite exposição solar entre 10h e 16h.',
        'Mantenha janelas fechadas nas horas mais quentes e abra à noite para renovar o ar.',
        'Beba água em intervalos regulares mesmo sem sede — a sensação de sede é um sinal tardio.',
        'Faça lavagem nasal com soro fisiológico em períodos de baixa umidade e fumaça de queimadas.',
      ]}
    />

    <CTA>
      Quer saber se o padrão de La Niña já está afetando a sua cidade hoje? Acompanhe a{' '}
      <Link to="/hoje" className="underline">previsão detalhada para hoje</Link> e os{' '}
      <Link to="/15-dias" className="underline">próximos 15 dias</Link> no Clima Tempo, com
      atualização contínua de temperatura, chuva e umidade.
    </CTA>

    <H2 id="apps">Melhores apps e fontes de monitoramento climático</H2>

    <P>
      Nenhuma ferramenta substitui o alerta oficial, mas a combinação certa de aplicativos dá
      uma vantagem real de tempo. A recomendação prática:
    </P>

    <DataTable
      headers={['Ferramenta', 'Melhor uso', 'Destaque']}
      rows={[
        ['INMET', 'Alertas oficiais no Brasil', 'Avisos por cor de severidade e boletins agrometeorológicos'],
        ['CPTEC/INPE', 'Previsão sazonal e boletins de ENOS', 'Análise técnica mensal do Pacífico'],
        ['Windy', 'Visualização de vento, chuva e modelos', 'Comparação entre modelos ECMWF, GFS e ICON'],
        ['Climatempo', 'Previsão local em português', 'Detalhamento por bairro e alertas por notificação'],
        ['AccuWeather', 'Sensação térmica e previsão minuto a minuto', 'Índice RealFeel e alertas de tempestade'],
        ['NOAA CPC', 'Diagnóstico global do ENOS', 'Atualização quinzenal do índice Niño 3.4'],
      ]}
      caption="Combinação recomendada de fontes para monitorar La Niña e o tempo local"
    />

    <P>
      Para dados primários e verificáveis, vale consultar diretamente as fontes oficiais: o{' '}
      <ExternalLink href="https://portal.inmet.gov.br/">INMET</ExternalLink> concentra os avisos
      meteorológicos brasileiros, o{' '}
      <ExternalLink href="https://www.cptec.inpe.br/">CPTEC/INPE</ExternalLink> publica boletins
      sazonais com análise do Pacífico, e o{' '}
      <ExternalLink href="https://www.cpc.ncep.noaa.gov/products/analysis_monitoring/enso_advisory/">
        Climate Prediction Center do NOAA
      </ExternalLink>{' '}
      mantém o diagnóstico internacional do ENOS.
    </P>

    <H2 id="clima-vs-ciclo">La Niña e mudanças climáticas: o que a ciência separa</H2>

    <P>
      Existe uma confusão comum: atribuir cada extremo à La Niña ou culpá-la por aliviar o
      aquecimento global. As duas leituras estão erradas.
    </P>

    <P>
      La Niña é <strong>variabilidade</strong> — um vaivém natural que redistribui calor entre
      oceano e atmosfera em escala de meses. As mudanças climáticas são <strong>tendência</strong>{' '}
      — um acúmulo de energia no sistema ao longo de décadas. O fenômeno pode mascarar
      temporariamente a curva de aquecimento em uma média anual, mas não a reverte. Prova disso é
      que, mesmo em anos frios no Pacífico, as temperaturas globais recentes continuam entre as
      mais altas já registradas.
    </P>

    <P>
      O efeito combinado é o que importa para quem vive o clima na prática: um episódio de La
      Niña em um planeta mais quente entrega secas mais severas onde ela já secava e chuvas mais
      intensas onde ela já molhava. Materiais de referência da{' '}
      <ExternalLink href="https://www.unep.org/pt-br">ONU Meio Ambiente</ExternalLink> e da{' '}
      <ExternalLink href="https://climate.nasa.gov/">NASA Climate</ExternalLink> detalham esse
      empilhamento de riscos.
    </P>

    <InfoBox title="As estações também contam">
      O impacto da La Niña muda conforme a estação do ano. No verão do Hemisfério Sul, o efeito
      mais forte aparece no regime de chuva; no inverno, na frequência de entradas de ar polar.
      Por isso boletins sazonais são revisados mensalmente: o mesmo índice oceânico produz
      consequências diferentes em janeiro e em julho.
    </InfoBox>

    <H2 id="faq">Perguntas frequentes sobre a La Niña 2026</H2>

    <FAQ items={laNinaFaq.map((i) => ({ q: i.q, a: i.a }))} />

    <H2 id="conclusao">Conclusão: informação é o melhor sistema de defesa</H2>

    <P>
      A La Niña 2026 não é uma catástrofe anunciada nem uma trégua climática. É um reordenamento
      de probabilidades — e quem entende essas probabilidades toma decisões melhores: o produtor
      que ajusta a janela de plantio, o gestor que antecipa a limpeza de bueiros, a família que
      guarda água e monta um kit de emergência antes do primeiro temporal.
    </P>

    <P>
      Acompanhar o Pacífico deixou de ser assunto de especialista. Virou parte do planejamento
      doméstico. E o custo de se antecipar continua sendo muito menor do que o de reagir.
    </P>
  </>
);

/* ==========================================================================
   ARTIGO 2: Ondas de calor marinhas e branqueamento global de corais 2026
   ========================================================================== */

const coraisFaq = [
  {
    q: 'O que é uma onda de calor marinha?',
    a: 'É um período prolongado em que a temperatura da superfície do mar em uma região fica acima do percentil 90 da série histórica local por pelo menos cinco dias consecutivos. Diferente de uma onda de calor no continente, ela pode durar semanas ou meses e afetar áreas de milhares de quilômetros quadrados.',
  },
  {
    q: 'Por que os corais ficam brancos?',
    a: 'Corais vivem em simbiose com microalgas chamadas zooxantelas, que fazem fotossíntese e fornecem até 90% da energia do animal, além de sua cor. Sob estresse térmico, essa relação se rompe e o coral expulsa as algas. O que fica visível é o esqueleto de carbonato de cálcio branco através do tecido transparente. O coral ainda está vivo, mas faminto.',
  },
  {
    q: 'Coral branqueado está morto?',
    a: 'Não necessariamente. Branqueamento é um sinal de estresse severo, não de morte imediata. Se a temperatura voltar ao normal em algumas semanas, parte das colônias recupera suas microalgas. Quando o calor persiste por mais de dois meses, a mortalidade cresce rapidamente.',
  },
  {
    q: 'O que são Degree Heating Weeks (DHW)?',
    a: 'É o índice usado por programas de monitoramento por satélite para medir o acúmulo de estresse térmico. Ele soma quanto a temperatura ficou acima do limiar de tolerância dos corais ao longo de 12 semanas. A partir de 4 °C-semana espera-se branqueamento significativo; acima de 8 °C-semana, mortalidade em massa.',
  },
  {
    q: 'O Brasil tem recifes de coral ameaçados?',
    a: 'Sim. O país abriga recifes únicos ao longo da costa nordeste, do sul da Bahia ao Maranhão, incluindo Abrolhos, os recifes costeiros de Pernambuco e Alagoas e o atol das Rocas. Esses corais têm espécies endêmicas e já registraram eventos de branqueamento associados a anomalias térmicas no Atlântico tropical.',
  },
  {
    q: 'Qual a relação entre corais e previsão do tempo?',
    a: 'Recifes saudáveis reduzem em até 97% a energia das ondas que chegam à costa, funcionando como quebra-mar natural durante ressacas e tempestades. Quando o recife se degrada, o mesmo evento meteorológico produz erosão e inundação costeira muito maiores.',
  },
  {
    q: 'O que uma pessoa comum pode fazer para ajudar?',
    a: 'Usar protetor solar sem oxibenzona e octinoxato ao entrar no mar, nunca tocar ou pisar em corais durante mergulho, escolher operadoras de turismo com boas práticas, reduzir o consumo de plástico descartável, apoiar unidades de conservação marinha e cobrar políticas públicas de saneamento, já que o esgoto costeiro amplifica o estresse térmico.',
  },
  {
    q: 'Como acompanhar alertas de branqueamento?',
    a: 'O programa Coral Reef Watch, da NOAA, publica mapas diários de estresse térmico por satélite com níveis de alerta. No Brasil, institutos de pesquisa marinha e unidades de conservação divulgam boletins locais, e aplicativos meteorológicos ajudam a acompanhar a temperatura do mar em regiões costeiras.',
  },
];

export const CoraisOceanos2026Article: React.FC<{ midImage: string }> = ({ midImage }) => (
  <>
    <FaqSchema items={coraisFaq} />

    <Lead>
      Enquanto o noticiário acompanha tempestades e ondas de calor no continente, o maior evento
      climático em curso acontece onde quase ninguém olha: debaixo d’água. As{' '}
      <strong>ondas de calor marinhas de 2026</strong> empurraram o <strong>branqueamento de
      corais</strong> a uma escala global e transformaram recifes coloridos em paisagens brancas
      — com consequências diretas para a pesca, o turismo e a proteção das cidades litorâneas
      contra ressacas.
    </Lead>

    <P>
      O oceano absorveu mais de 90% do calor extra retido no sistema climático nas últimas
      décadas. Esse número costuma ser lido como uma boa notícia — afinal, sem o mar, o ar
      estaria bem mais quente. Mas o oceano não é um depósito passivo. Ele responde. E a resposta
      mais visível é um fenômeno que os cientistas chamam de onda de calor marinha.
    </P>

    <P>
      Em 2026, essas ondas se sobrepuseram em bacias diferentes ao mesmo tempo: Caribe, Pacífico
      sudoeste, Índico e Atlântico tropical. Os recifes, que vivem no limite superior da própria
      tolerância térmica, foram os primeiros a dar sinal.
    </P>

    <Highlight title="Resumo rápido do evento">
      Anomalias positivas persistentes de temperatura da superfície do mar em múltiplas bacias
      tropicais · acúmulo de estresse térmico acima de 8 °C-semana em áreas críticas ·
      branqueamento registrado em recifes do Caribe, do Indo-Pacífico e do Atlântico Sul ·
      impactos em pesca artesanal, turismo de mergulho e proteção costeira · alertas emitidos
      por programas de monitoramento por satélite.
    </Highlight>

    <H2 id="o-que-e">O que é uma onda de calor marinha e por que ela é diferente</H2>

    <P>
      No continente, uma onda de calor dura dias. No mar, pode durar meses. A água tem
      capacidade térmica cerca de quatro vezes maior que a do ar: demora muito mais para
      esquentar, mas também demora muito mais para esfriar. Quando uma massa de água tropical
      acumula calor, ela vira uma espécie de banho-maria estável, sustentado por céu limpo,
      ventos fracos e ausência de mistura vertical.
    </P>

    <P>
      A definição técnica mais usada considera onda de calor marinha um período de pelo menos
      cinco dias consecutivos em que a temperatura da superfície do mar supera o percentil 90 da
      climatologia local. Existem quatro categorias de severidade, de moderada a extrema, e é
      exatamente nas categorias superiores que os recifes entram em colapso.
    </P>

    <InfoBox title="Por que ventos fracos aquecem o mar">
      O vento é o principal mecanismo de mistura da camada superficial do oceano. Quando ele
      enfraquece, o calor solar fica retido em uma camada rasa de poucos metros, em vez de se
      distribuir por dezenas de metros de profundidade. É por isso que períodos de calmaria
      prolongada, comuns sob sistemas de alta pressão persistentes, disparam picos de
      temperatura da água em poucos dias.
    </InfoBox>

    <H2 id="branqueamento">Branqueamento de corais explicado: a simbiose que se rompe</H2>

    <P>
      Um coral é, na prática, uma cidade. A estrutura é feita por milhares de pólipos — animais
      minúsculos aparentados das águas-vivas — que constroem um esqueleto de carbonato de
      cálcio. Dentro do tecido de cada pólipo vivem microalgas chamadas{' '}
      <strong>zooxantelas</strong>. Elas fazem fotossíntese e entregam ao coral até 90% da
      energia que ele consome. Em troca, recebem abrigo e nutrientes.
    </P>

    <P>
      Essa parceria funciona dentro de uma faixa térmica estreita. Um a dois graus acima da
      máxima normal do verão local por semanas seguidas já bastam para desequilibrar a
      fotossíntese das algas, que passam a produzir compostos tóxicos. O coral então expulsa as
      zooxantelas. Sem elas, perde a cor e a principal fonte de alimento.
    </P>

    <PullQuote>
      Branqueamento não é morte. É fome. E, como toda fome prolongada, ela mata se durar tempo
      demais.
    </PullQuote>

    <H3>Os estágios do estresse térmico em um recife</H3>

    <P>
      <strong>1. Estresse inicial.</strong> Cores desbotam levemente; o recife ainda parece
      saudável para olhos destreinados.
    </P>
    <P>
      <strong>2. Branqueamento visível.</strong> Colônias inteiras ficam brancas ou fluorescentes.
      Peixes herbívoros ainda circulam.
    </P>
    <P>
      <strong>3. Mortalidade parcial.</strong> Tecido começa a se desprender; algas filamentosas
      colonizam o esqueleto exposto.
    </P>
    <P>
      <strong>4. Colapso estrutural.</strong> O esqueleto se torna frágil, perde relevo e deixa
      de abrigar peixes juvenis e crustáceos.
    </P>

    <img
      src={midImage}
      alt="Biólogos marinhos monitoram recife de coral branqueado durante onda de calor marinha de 2026"
      loading="lazy"
      width={1536}
      height={864}
      className="w-full rounded-xl shadow-lg my-10"
    />

    <H2 id="medicao">Como o estresse térmico é medido por satélite</H2>

    <P>
      O monitoramento moderno de recifes não depende de mergulhadores em campo. Ele começa no
      espaço. Satélites medem diariamente a temperatura da superfície do mar e comparam esse
      valor com a máxima média do mês mais quente do ano em cada ponto do planeta.
    </P>

    <DataTable
      headers={['Nível de alerta', 'Estresse acumulado (DHW)', 'Expectativa para o recife']}
      rows={[
        ['Vigilância', '0 °C-semana', 'Temperatura próxima do limiar; sem estresse acumulado'],
        ['Aviso', 'Até 1 °C-semana', 'Estresse inicial detectável'],
        ['Alerta nível 1', '4 a 8 °C-semana', 'Branqueamento significativo esperado'],
        ['Alerta nível 2', '8 a 12 °C-semana', 'Mortalidade em massa de corais sensíveis'],
        ['Alerta nível 3+', 'Acima de 12 °C-semana', 'Mortalidade generalizada, incluindo espécies resistentes'],
      ]}
      caption="Escala de alerta baseada no índice Degree Heating Weeks, usada em monitoramento por satélite"
    />

    <P>
      A leitura desses mapas é surpreendentemente intuitiva: quanto mais escura a mancha sobre o
      recife, maior o tempo que aquele coral passou acima da própria tolerância. Em 2026, manchas
      de alerta máximo permaneceram estacionadas por semanas sobre áreas do Caribe e do
      Indo-Pacífico — a assinatura clássica de um evento global.
    </P>

    <H2 id="historico">Dados históricos: os grandes eventos de branqueamento</H2>

    <DataTable
      headers={['Evento', 'Período', 'Alcance registrado']}
      rows={[
        ['1º evento global', '1998', 'Perda estimada de cerca de 16% dos corais do mundo'],
        ['2º evento global', '2010', 'Sudeste asiático e Caribe severamente atingidos'],
        ['3º evento global', '2014–2017', 'O mais longo até então; grande impacto na Grande Barreira'],
        ['4º evento global', '2023–2026', 'Recorde de área de recifes sob estresse térmico simultâneo'],
      ]}
      caption="Eventos globais de branqueamento reconhecidos por programas internacionais de monitoramento"
    />

    <P>
      O padrão é claro e desconfortável: o intervalo entre eventos globais encurtou. Nos anos
      1980, um recife tinha em média décadas para se recuperar entre episódios severos. Hoje, o
      intervalo caiu para poucos anos — menos do que o tempo necessário para que colônias de
      crescimento lento reconstruam a estrutura perdida.
    </P>

    <H2 id="por-que-importa">Por que isso importa para quem vive longe do mar</H2>

    <H3>Proteção costeira</H3>

    <P>
      Recifes saudáveis dissipam a maior parte da energia das ondas antes que elas cheguem à
      praia. Quando o relevo do recife se achata, a mesma ressaca produz erosão maior, avanço da
      água sobre a orla e prejuízos em obras costeiras. Em eventos de tempestade, essa diferença
      é medida em metros de praia perdidos.
    </P>

    <H3>Pesca e segurança alimentar</H3>

    <P>
      Recifes funcionam como berçário para centenas de espécies. A degradação reduz o
      recrutamento de peixes juvenis e, com atraso de alguns anos, derruba a produtividade da
      pesca artesanal — atividade que sustenta comunidades inteiras no litoral nordestino
      brasileiro e em ilhas tropicais.
    </P>

    <H3>Turismo e economia local</H3>

    <P>
      Mergulho, passeios de barco e hospedagem em destinos de recife movimentam economias
      regionais. Um recife branqueado não some do mapa, mas perde atratividade — e a receita cai
      antes mesmo que a mortalidade se confirme.
    </P>

    <H3>Clima e tempo</H3>

    <P>
      Água mais quente também alimenta a atmosfera. Oceanos aquecidos aumentam a evaporação e
      fornecem energia para sistemas convectivos e ciclones tropicais. É a mesma física que
      explica episódios extremos como os descritos no artigo sobre a{' '}
      <InternalLink to="/blog/onda-calor-recorde-leste-asia-2026">onda de calor recorde no Leste da Ásia</InternalLink>{' '}
      e a intensificação rápida de tempestades tropicais como o{' '}
      <InternalLink to="/blog/tufao-maysak-china-2026">tufão Maysak na China</InternalLink>.
    </P>

    <Warning title="O efeito dominó do calor oceânico">
      Mar mais quente significa mais vapor d’água disponível. Mais vapor significa chuvas
      concentradas mais intensas quando um sistema meteorológico organiza esse combustível. Por
      isso, o branqueamento de corais e as enchentes urbanas são sintomas do mesmo processo
      visto por ângulos diferentes.
    </Warning>

    <H2 id="brasil">Os recifes brasileiros: singulares e subestimados</H2>

    <P>
      O Brasil abriga o único sistema recifal do Atlântico Sul, distribuído por cerca de 3 mil
      quilômetros de costa, do Maranhão ao sul da Bahia. Ele é diferente de tudo o que existe no
      Indo-Pacífico: tem menos espécies formadoras, mas altíssimo grau de endemismo, com corais
      que só ocorrem aqui, como os do gênero <em>Mussismilia</em>.
    </P>

    <P>
      Os corais brasileiros cresceram em águas historicamente mais turvas e variáveis, o que lhes
      dá certa resiliência. Mas resiliência não é imunidade. Eventos de anomalia térmica no
      Atlântico tropical já provocaram branqueamentos documentados em Abrolhos e nos recifes
      costeiros de Pernambuco, Alagoas e Bahia — normalmente entre o fim do verão e o início do
      outono, quando a água atinge o pico anual.
    </P>

    <Checklist
      items={[
        'Abrolhos (BA): maior banco de corais do Atlântico Sul, com formações em chapeirão exclusivas.',
        'Atol das Rocas (RN): único atol do Atlântico Sul, área de proteção integral.',
        'Recifes de Porto de Galinhas e Maragogi (PE/AL): alto fluxo turístico e pressão local.',
        'Parcel de Manuel Luís (MA): maior formação recifal do país, ainda pouco estudada.',
      ]}
    />

    <H2 id="como-proteger">Como se proteger — e proteger o mar — na prática</H2>

    <H3>Para quem frequenta o litoral</H3>

    <Checklist
      items={[
        'Use protetor solar mineral, sem oxibenzona e octinoxato, ou opte por camiseta com proteção UV.',
        'Nunca pise, toque ou apoie o pé em corais durante banho de piscina natural ou mergulho.',
        'Respeite as áreas demarcadas e os horários de visitação em unidades de conservação marinha.',
        'Não alimente peixes: a prática altera a cadeia alimentar que controla algas sobre o recife.',
        'Recolha todo o lixo, especialmente plástico e linha de pesca, que sufoca colônias inteiras.',
      ]}
    />

    <H3>Conforto e segurança em dias de mar quente</H3>

    <P>
      Ondas de calor marinhas costumam vir acompanhadas de ar abafado, brisa fraca e sensação
      térmica elevada no litoral. Algumas orientações simples reduzem risco:
    </P>

    <Checklist
      items={[
        'Evite exposição solar entre 10h e 16h e prefira sombra natural ou tenda com boa ventilação.',
        'Hidrate-se antes de sentir sede; água do mar quente engana a percepção de esforço térmico.',
        'Atenção a idosos, crianças e gestantes: o calor com alta umidade dificulta a transpiração eficiente.',
        'Cheque boletins de balneabilidade — calor prolongado favorece proliferação de algas e bactérias.',
        'Em dias de ressaca, respeite bandeiras e orientações do salva-vidas; recifes degradados reduzem a proteção natural.',
      ]}
    />

    <CTA>
      Vai para o litoral? Confira antes as condições de vento, chuva e temperatura na{' '}
      <Link to="/agora" className="underline">página Tempo Agora</Link> e planeje o fim de semana
      com a <Link to="/fim-de-semana" className="underline">previsão detalhada</Link> do Clima
      Tempo.
    </CTA>

    <H2 id="monitoramento">Alertas oficiais e apps de monitoramento</H2>

    <DataTable
      headers={['Fonte', 'O que acompanhar', 'Frequência']}
      rows={[
        ['NOAA Coral Reef Watch', 'Mapas de estresse térmico e alertas de branqueamento', 'Diária'],
        ['NASA Earth Observatory', 'Anomalias de temperatura do mar e imagens de satélite', 'Contínua'],
        ['INMET', 'Avisos meteorológicos e ondas de calor no litoral brasileiro', 'Diária'],
        ['CPTEC/INPE', 'Boletins oceânicos e previsão de ressaca', 'Diária'],
        ['Windy', 'Temperatura da água, ondas e vento em camadas', 'Contínua'],
        ['Climatempo / AccuWeather', 'Previsão local, sensação térmica e alertas por notificação', 'Contínua'],
      ]}
      caption="Fontes recomendadas para acompanhar ondas de calor marinhas e condições costeiras"
    />

    <P>
      Vale acompanhar diretamente o{' '}
      <ExternalLink href="https://coralreefwatch.noaa.gov/">Coral Reef Watch da NOAA</ExternalLink>,
      que publica os mapas globais de estresse térmico, além dos materiais de{' '}
      <ExternalLink href="https://climate.nasa.gov/vital-signs/ocean-warming/">
        aquecimento oceânico da NASA
      </ExternalLink>{' '}
      e dos relatórios da{' '}
      <ExternalLink href="https://www.unep.org/pt-br">ONU Meio Ambiente</ExternalLink> sobre o
      estado dos recifes.
    </P>

    <H2 id="recuperacao">Existe recuperação possível?</H2>

    <P>
      Sim — e é aqui que a história deixa de ser apenas pessimista. Recifes que passam por
      branqueamento e recebem alívio térmico voltam a captar zooxantelas em semanas. A
      recuperação estrutural, porém, depende de três fatores que estão sob controle humano
      direto:
    </P>

    <P>
      <strong>1. Qualidade da água.</strong> Esgoto sem tratamento e escoamento agrícola
      aumentam nutrientes, favorecem algas e reduzem drasticamente a chance de recuperação.
    </P>
    <P>
      <strong>2. Pressão de pesca.</strong> Peixes herbívoros, como papagaios e cirurgiões,
      limpam o esqueleto e abrem espaço para novos recrutas. Sobrepesca elimina esse serviço.
    </P>
    <P>
      <strong>3. Proteção efetiva.</strong> Áreas marinhas protegidas com fiscalização real
      apresentam taxas de recuperação consistentemente maiores.
    </P>

    <InfoBox title="Jardinagem de corais e refúgios térmicos">
      Projetos de restauração cultivam fragmentos de colônias resistentes em berçários submarinos
      e os transplantam para áreas degradadas. Paralelamente, pesquisadores mapeiam refúgios
      térmicos — pontos com ressurgência local ou sombreamento natural, onde a água permanece
      mais fria. Essas áreas se tornam prioridade de conservação por funcionarem como bancos
      genéticos para o futuro.
    </InfoBox>

    <H2 id="faq">Perguntas frequentes sobre corais e ondas de calor marinhas</H2>

    <FAQ items={coraisFaq.map((i) => ({ q: i.q, a: i.a }))} />

    <H2 id="conclusao">Conclusão: o termômetro mais honesto do planeta</H2>

    <P>
      Recifes ocupam menos de 1% do fundo do mar e abrigam cerca de um quarto de toda a vida
      marinha. Eles são, ao mesmo tempo, uma das estruturas biológicas mais produtivas do planeta
      e uma das mais sensíveis. Por isso funcionam como termômetro: quando o coral branqueia, ele
      está registrando com precisão um desequilíbrio que ainda não apareceu na sua rua.
    </P>

    <P>
      Acompanhar a temperatura do mar hoje é tão relevante quanto olhar a previsão de chuva. O
      oceano define o combustível das tempestades, o regime das ressacas e boa parte da economia
      costeira. E, diferente de muitos processos climáticos, aqui a ação local tem efeito
      mensurável: água limpa, pesca regulada e proteção efetiva mudam o destino de um recife
      inteiro.
    </P>
  </>
);
