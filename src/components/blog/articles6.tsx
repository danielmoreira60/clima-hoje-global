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
   ARTIGO 1: Raios no Brasil 2026 — capital mundial das descargas elétricas
   ========================================================================== */

const raiosFaq = [
  {
    q: 'Por que o Brasil é o país com mais raios do mundo?',
    a: 'O Brasil reúne três ingredientes que quase nenhum outro país tem ao mesmo tempo: extensão territorial gigante em zona tropical e subtropical, umidade abundante vinda da Amazônia e do Atlântico, e relevo que força o ar úmido a subir. Esse conjunto alimenta nuvens cumulonimbus profundas, que são as fábricas de descargas elétricas. Por isso o país registra cerca de 78 milhões de raios por ano, segundo o grupo de eletricidade atmosférica do INPE.',
  },
  {
    q: 'Qual é o lugar mais seguro durante uma tempestade com raios?',
    a: 'Uma edificação com estrutura de alvenaria, instalação elétrica aterrada e telhado, longe de janelas e de tomadas. A segunda melhor opção é o interior de um carro de carroceria metálica com as janelas fechadas, que funciona como uma gaiola de Faraday. Nunca se abrigue debaixo de árvores isoladas, em varandas abertas, em quiosques de praia ou em paradas de ônibus sem laterais.',
  },
  {
    q: 'Quanto tempo devo esperar para sair depois do último trovão?',
    a: 'A recomendação internacional, adotada também pela Defesa Civil brasileira, é a regra dos 30 minutos: só retome atividades ao ar livre meia hora após o último trovão ouvido. Boa parte dos acidentes acontece no fim da tempestade, quando a chuva já parou mas a nuvem ainda está eletrificada e capaz de gerar raios a até 15 quilômetros de distância.',
  },
  {
    q: 'Como calcular a distância de um raio pelo trovão?',
    a: 'Conte os segundos entre o clarão e o estrondo e divida por três: o resultado é a distância aproximada em quilômetros. Se o intervalo for de 30 segundos ou menos, a tempestade está a 10 quilômetros ou menos e você já está em zona de risco — é hora de procurar abrigo imediatamente.',
  },
  {
    q: 'Celular e chuveiro atraem raios dentro de casa?',
    a: 'Celular sem fio não atrai raio: o mito nasceu de telefones fixos com fiação. O risco real dentro de casa vem de tudo que está conectado à rede elétrica, hidráulica ou de telefonia — chuveiro, torneira, computador ligado na tomada, telefone com fio. Durante a tempestade, evite banho e desconecte eletrônicos da tomada.',
  },
  {
    q: 'Quais aplicativos avisam sobre raios em tempo real?',
    a: 'O Windy exibe camadas de descargas elétricas e radar; o Climatempo e o AccuWeather enviam alertas de tempestade por notificação; o INMET publica avisos oficiais de tempestade com raios por cor de severidade; e o CPTEC/INPE mantém mapas de descargas atmosféricas. Combinar um aplicativo de radar com os avisos oficiais dá o melhor tempo de reação.',
  },
  {
    q: 'Para-raios protege toda a casa?',
    a: 'Um Sistema de Proteção contra Descargas Atmosféricas protege a estrutura da edificação contra incêndio e danos físicos, mas não protege sozinho os equipamentos eletrônicos. Para isso é preciso somar dispositivos de proteção contra surtos no quadro de energia e um aterramento em boas condições, verificado periodicamente.',
  },
  {
    q: 'Raios estão aumentando com as mudanças climáticas?',
    a: 'Estudos indicam que cada grau de aquecimento tende a aumentar a energia disponível para convecção profunda, o que favorece tempestades mais eletrificadas em algumas regiões. A tendência não é uniforme no planeta, mas no Brasil o crescimento das cidades e do calor urbano já aparece nas séries de descargas registradas sobre grandes centros.',
  },
];

export const RaiosBrasil2026Article: React.FC<{ midImage: string }> = ({ midImage }) => (
  <>
    <FaqSchema items={raiosFaq} />

    <Lead>
      Nenhum outro país do mundo é atingido por tantas descargas elétricas quanto o Brasil. São
      dezenas de milhões de <strong>raios</strong> por ano, concentrados em poucos meses do
      calendário e em faixas bem específicas do território. Em 2026, com a atmosfera mais quente e
      mais úmida, as tempestades elétricas voltaram a derrubar energia, interromper voos e matar
      em situações que quase sempre poderiam ter sido evitadas com trinta minutos de espera.
    </Lead>

    <P>
      O raio é o fenômeno meteorológico mais subestimado do Brasil. Ele não tem nome próprio como
      um furacão, não gera manchete por dias como uma enchente e não aparece em imagens de
      satélite como uma frente fria. Mesmo assim, mata mais brasileiros por ano do que a maior
      parte dos desastres naturais isolados — e mata, na esmagadora maioria dos casos, pessoas
      que estavam a poucos passos de um abrigo seguro.
    </P>

    <P>
      Este guia explica, sem jargão, por que o país é o campeão mundial de descargas atmosféricas,
      onde e quando elas se concentram, o que fazer minuto a minuto quando o céu escurece e como
      montar uma rotina de monitoramento com aplicativos gratuitos.
    </P>

    <Highlight title="Resumo rápido: raios no Brasil em 2026">
      Cerca de 78 milhões de descargas por ano · pico entre outubro e março · maior densidade no
      Sudeste, no Centro-Oeste e no oeste amazônico · média histórica de 100 a 130 mortes anuais ·
      70% dos acidentes ao ar livre · regra dos 30 minutos como principal medida de prevenção ·
      alertas oficiais do INMET e da Defesa Civil pelo 199 e pelo SMS 40199.
    </Highlight>

    <H2 id="por-que-brasil">Por que o Brasil lidera o ranking mundial de raios</H2>

    <P>
      A resposta cabe em uma frase: aqui existe calor, umidade e um mecanismo que empurra o ar
      para cima — os três ingredientes de uma nuvem de tempestade. O que muda de país para país é
      a intensidade com que esses fatores se combinam e a área em que isso acontece.
    </P>

    <H3>O motor térmico das tardes brasileiras</H3>

    <P>
      Em uma tarde típica de verão no Centro-Oeste, o solo aquecido transfere calor para a camada
      de ar logo acima. Esse ar fica menos denso, sobe e carrega vapor de água. A partir de certa
      altitude, o vapor condensa, libera calor latente e dá ainda mais impulso à corrente
      ascendente. É um ciclo que se retroalimenta e pode empurrar o topo da nuvem para mais de 15
      quilômetros de altura.
    </P>

    <P>
      Dentro dessa torre de nuvem, gotículas de água super-resfriada, cristais de gelo e granizo
      macio colidem milhões de vezes por segundo. Cada colisão transfere carga elétrica. Os
      cristais mais leves, positivos, sobem; o granizo mais pesado, negativo, desce. A nuvem se
      transforma em uma pilha gigante, com base negativa e topo positivo.
    </P>

    <H3>Da diferença de potencial ao clarão</H3>

    <P>
      Quando a diferença de potencial entre a base da nuvem e o solo supera a capacidade
      isolante do ar, um canal ionizado desce em etapas, buscando o caminho de menor resistência.
      Do chão, sobem descargas ascendentes a partir de pontos altos — torres, árvores, postes,
      cabeças de pessoas em campo aberto. Quando os dois canais se encontram, a corrente principal
      dispara: até 30 mil ampères em milionésimos de segundo, aquecendo o ar a cerca de 27 mil
      graus Celsius. A expansão explosiva desse ar é o trovão.
    </P>

    <InfoBox title="Números que ajudam a entender a escala">
      Um raio típico tem entre 5 e 8 quilômetros de comprimento e menos de 3 centímetros de
      diâmetro no canal principal. A temperatura no interior do canal supera cinco vezes a da
      superfície do Sol. A corrente dura frações de milissegundo, mas é suficiente para vaporizar
      seiva de uma árvore, romper concreto e queimar placas eletrônicas a dezenas de metros do
      ponto de impacto.
    </InfoBox>

    <H2 id="mapa">Onde caem mais raios: o mapa brasileiro das descargas</H2>

    <P>
      A distribuição não é uniforme. Existe uma faixa preferencial que acompanha as regiões de
      convecção mais vigorosa e os corredores de umidade que saem da Amazônia em direção ao
      Sudeste — os chamados rios voadores.
    </P>

    <DataTable
      headers={['Região', 'Período de pico', 'Característica dominante']}
      rows={[
        ['Sudeste', 'Novembro a março', 'Tempestades de fim de tarde intensificadas pelo calor urbano'],
        ['Centro-Oeste', 'Outubro a março', 'Convecção continental profunda e alta densidade de descargas'],
        ['Norte / Amazônia ocidental', 'Ano quase inteiro', 'Tempestades diárias com forte atividade elétrica'],
        ['Sul', 'Setembro a fevereiro', 'Sistemas convectivos de mesoescala noturnos e de longa duração'],
        ['Nordeste litorâneo', 'Abril a julho', 'Chuvas de brisa com atividade elétrica moderada'],
      ]}
      caption="Padrão sazonal aproximado da atividade elétrica por região brasileira"
    />

    <P>
      Vale um detalhe pouco lembrado: cidades grandes registram mais descargas que suas áreas
      rurais vizinhas. O asfalto e o concreto aquecem mais, geram uma bolha de calor urbano e
      reforçam a corrente ascendente. Poluição também importa — mais núcleos de condensação
      significam gotículas menores e mais colisões dentro da nuvem.
    </P>

    <img
      src={midImage}
      alt="Raio atingindo torre de transmissão de energia durante tempestade elétrica em área rural no Brasil em 2026"
      loading="lazy"
      width={944}
      height={704}
      className="w-full rounded-xl shadow-lg my-10"
    />

    <H2 id="riscos">O que um raio faz com o corpo, com a casa e com a cidade</H2>

    <H3>Efeitos em pessoas</H3>

    <P>
      Ao contrário do que a intuição sugere, a maioria das vítimas não é atingida diretamente. O
      mecanismo mais comum é a <strong>tensão de passo</strong>: a corrente se espalha pelo solo a
      partir do ponto de impacto e entra pelo pé mais próximo, saindo pelo outro. Também há
      descargas laterais, quando o raio atinge uma árvore e salta para quem está embaixo, e
      correntes de contato, quando a pessoa toca uma cerca, um cano ou uma estrutura metálica.
    </P>

    <P>
      Cerca de nove em cada dez pessoas atingidas sobrevivem, mas uma parte relevante convive com
      sequelas: perda auditiva, alterações de memória, dores crônicas e distúrbios do sono. É por
      isso que campanhas de prevenção falam menos em letalidade e mais em consequências
      permanentes.
    </P>

    <Warning title="Emergência: o que fazer se alguém for atingido">
      A vítima não fica eletrificada — pode ser tocada com segurança. Chame o SAMU pelo 192
      imediatamente, verifique respiração e pulso e inicie compressões torácicas se necessário.
      Parada cardiorrespiratória é a principal causa de morte por raio, e a reanimação iniciada
      nos primeiros minutos muda o desfecho. Retire a pessoa do local se ainda houver risco de
      novas descargas.
    </Warning>

    <H3>Efeitos em residências e equipamentos</H3>

    <P>
      Poucos raios atingem uma casa diretamente. O prejuízo mais comum vem de surtos induzidos: a
      descarga cai a centenas de metros, gera um campo eletromagnético intenso e induz picos de
      tensão nos fios da rede elétrica, do telefone e da TV a cabo. Roteadores, fontes de
      computador, placas de geladeira e portões automáticos são as primeiras vítimas.
    </P>

    <H3>Efeitos em serviços essenciais</H3>

    <P>
      Descargas em linhas de transmissão respondem por parte relevante das interrupções de energia
      no país durante o verão. Aeroportos suspendem o abastecimento e a movimentação de bagagens
      quando há raios em um raio de poucos quilômetros — daí os atrasos em cascata que se veem em
      tardes de tempestade em Guarulhos, Confins e Brasília.
    </P>

    <CTA>
      Antes de sair de casa em tarde de verão, confira a previsão horária e o índice de
      instabilidade na página de <InternalLink to="/hoje">previsão do tempo para hoje</InternalLink>{' '}
      e acompanhe a evolução das nuvens no radar do Clima Tempo.
    </CTA>

    <H2 id="protecao">Como se proteger de raios: guia prático em três tempos</H2>

    <H3>Antes da tempestade</H3>

    <Checklist
      items={[
        'Verifique a previsão horária e os avisos do INMET pela manhã, antes de planejar atividades ao ar livre.',
        'Ative notificações de tempestade em pelo menos um aplicativo de monitoramento climático.',
        'Instale dispositivos de proteção contra surtos no quadro de energia e verifique o aterramento a cada dois anos.',
        'Combine com a família um ponto de abrigo seguro em locais frequentes: escola, campo, praia, sítio.',
        'Em propriedades rurais, mapeie árvores isoladas, cercas metálicas e currais — são pontos de risco recorrente.',
      ]}
    />

    <H3>Durante a tempestade</H3>

    <P>
      A regra de ouro é simples e cabe em uma frase: <strong>se você ouve o trovão, você está ao
      alcance do raio</strong>. Não existe distância confortável quando o som chega até os ouvidos.
    </P>

    <Checklist
      items={[
        'Procure abrigo em construção fechada; na falta dela, entre em um carro com janelas fechadas.',
        'Evite chuveiro, torneira, telefone com fio e equipamentos conectados à tomada.',
        'Afaste-se de janelas, portas metálicas e varandas.',
        'Ao ar livre e sem abrigo, evite topos de morro, campos abertos, água e árvores isoladas; agache com os pés juntos, sem deitar no chão.',
        'Em grupo, separe as pessoas em alguns metros de distância para reduzir o número de vítimas em uma única descarga.',
        'Solte objetos longos e metálicos: guarda-chuva, vara de pesca, enxada, tacos de golfe.',
      ]}
    />

    <H3>Depois da tempestade</H3>

    <Checklist
      items={[
        'Aguarde 30 minutos após o último trovão para retomar atividades externas.',
        'Só religue eletrônicos depois que a energia estabilizar.',
        'Verifique cheiro de queimado em quadros elétricos e tomadas; se houver, desligue o disjuntor geral.',
        'Comunique cabos partidos à concessionária e mantenha distância de fios caídos e poças próximas a eles.',
      ]}
    />

    <PullQuote author="Consenso das campanhas de prevenção do INPE e da Defesa Civil">
      Nenhum compromisso ao ar livre justifica trinta minutos de risco. A tempestade passa; a
      sequela, muitas vezes, não.
    </PullQuote>

    <H2 id="mitos">Mitos que continuam matando</H2>

    <H4>“Raio não cai duas vezes no mesmo lugar”</H4>
    <P>
      Cai, e com frequência. Estruturas altas e condutoras são atingidas dezenas de vezes por ano.
      Pontos elevados de uma cidade são alvos preferenciais em toda tempestade.
    </P>

    <H4>“Se não está chovendo, não há risco”</H4>
    <P>
      As descargas conhecidas como “raio de céu azul” podem atingir o solo a mais de 10
      quilômetros do núcleo da tempestade, em áreas onde ainda não caiu uma gota.
    </P>

    <H4>“Pneu de borracha protege o carro”</H4>
    <P>
      A proteção vem da carroceria metálica, que conduz a corrente pela superfície externa até o
      solo. Conversíveis, motos e carros com muita fibra não oferecem a mesma segurança.
    </P>

    <H4>“Joias e celular atraem raios”</H4>
    <P>
      Objetos metálicos pequenos não aumentam a probabilidade de ser atingido. O que aumenta é a
      altura relativa e a exposição em área aberta.
    </P>

    <H2 id="monitoramento">Melhores apps de monitoramento climático para tempestades elétricas</H2>

    <DataTable
      headers={['Ferramenta', 'Para que serve', 'Diferencial']}
      rows={[
        ['Windy', 'Radar, nuvens e camada de descargas elétricas', 'Visual de modelos múltiplos e animação de curto prazo'],
        ['Climatempo', 'Previsão local e alertas por notificação', 'Boa cobertura de municípios brasileiros'],
        ['AccuWeather', 'Previsão minuto a minuto de chuva', 'Alertas de aproximação de tempestade'],
        ['INMET', 'Avisos meteorológicos oficiais por cor', 'Fonte oficial usada por Defesa Civil e imprensa'],
        ['CPTEC/INPE', 'Mapas de descargas e previsão numérica', 'Dados de pesquisa e boletins técnicos'],
      ]}
      caption="Combinação recomendada: um app de radar somado a uma fonte oficial de alertas"
    />

    <P>
      Para receber avisos oficiais no celular, cadastre-se no serviço de SMS da Defesa Civil
      enviando seu CEP para o número 40199. Em situações de emergência, o telefone 199 é o canal
      direto. As faixas de severidade e os critérios técnicos dos avisos estão detalhados no{' '}
      <ExternalLink href="https://portal.inmet.gov.br/">portal do INMET</ExternalLink>, e o
      acompanhamento de sistemas convectivos por satélite pode ser conferido no{' '}
      <ExternalLink href="https://www.cptec.inpe.br/">CPTEC/INPE</ExternalLink>. Para contexto
      global sobre eletrificação de tempestades e mudanças na convecção, vale consultar os
      materiais da <ExternalLink href="https://www.noaa.gov/">NOAA</ExternalLink>.
    </P>

    <H2 id="ciclos">Ciclos climáticos explicados: o que muda a atividade elétrica de um ano para outro</H2>

    <P>
      A quantidade de raios em uma temporada não é aleatória. Ela responde a ciclos que
      redistribuem umidade e calor. Em anos de El Niño, o Sul do Brasil tende a receber mais
      chuvas convectivas e mais descargas, enquanto o Norte e parte do Nordeste ficam mais secos.
      Em anos de La Niña, o padrão se inverte em boa medida — e é justamente essa a configuração
      que o Pacífico assumiu em 2026, como detalhamos na análise sobre{' '}
      <InternalLink to="/blog/la-nina-2026-impactos-brasil-previsao">La Niña 2026 e seus impactos no Brasil</InternalLink>.
    </P>

    <P>
      Há ainda a Zona de Convergência do Atlântico Sul, o corredor de nebulosidade que se estende
      da Amazônia ao oceano e que, quando se organiza, produz dias seguidos de chuva com forte
      atividade elétrica no Sudeste. Eventos de mesoescala noturnos no Sul, associados a jatos de
      baixos níveis, respondem por descargas que se estendem por centenas de quilômetros — o mesmo
      tipo de sistema que participou do{' '}
      <InternalLink to="/blog/ciclone-bomba-brasil-agosto-2026">ciclone-bomba de agosto de 2026</InternalLink>.
    </P>

    <H2 id="historico">Dados históricos: o que as séries brasileiras mostram</H2>

    <P>
      A série de mortes por descargas atmosféricas no Brasil mostra uma queda relevante nas
      últimas décadas, sobretudo pela urbanização, pela eletrificação rural e pelas campanhas de
      prevenção. Nos anos 2000, o país registrava com frequência mais de 130 mortes anuais; nos
      últimos anos, o número tem oscilado em patamar mais baixo, ainda que continue alto em termos
      absolutos na comparação internacional.
    </P>

    <DataTable
      headers={['Perfil das vítimas', 'Participação aproximada', 'Situação típica']}
      rows={[
        ['Áreas rurais e agropecuária', 'Cerca de 1 em cada 4 casos', 'Trabalho em campo aberto e abrigo em árvore'],
        ['Esportes e lazer ao ar livre', 'Cerca de 1 em cada 5 casos', 'Futebol, pesca, praia e trilhas'],
        ['Estruturas abertas', 'Parcela relevante', 'Quiosques, coberturas sem paredes, pontos de ônibus'],
        ['Dentro de casa', 'Minoria dos casos', 'Contato com chuveiro, torneira ou telefone com fio'],
      ]}
      caption="Perfil recorrente dos acidentes por raio no Brasil, com base em levantamentos de prevenção"
    />

    <H2 id="conforto">Dicas de conforto térmico e rotina em dias de tempestade</H2>

    <P>
      Dias de forte atividade elétrica costumam ser precedidos por calor abafado, com sensação
      térmica alta e umidade elevada. Alguns cuidados simples tornam a espera mais confortável e
      reduzem risco:
    </P>

    <Checklist
      items={[
        'Antecipe atividades físicas para o começo da manhã, quando a instabilidade ainda não se organizou.',
        'Hidrate-se antes do pico de calor da tarde; a desidratação amplifica o desconforto do ar abafado.',
        'Mantenha ventilação cruzada em casa até a chegada da chuva e feche janelas quando as rajadas começarem.',
        'Prepare lanterna, carregador portátil e água antes do escurecer em bairros sujeitos a queda de energia.',
        'Recolha objetos leves da varanda: rajadas de frente de rajada chegam antes da chuva.',
      ]}
    />

    <H2 id="faq">Perguntas frequentes sobre raios e tempestades elétricas</H2>

    <FAQ items={raiosFaq} />

    <P>
      Raio é o risco natural mais previsível do Brasil: ele avisa, com nuvens escuras, vento
      súbito e trovão distante. O que falta, quase sempre, é dar valor ao aviso. Trinta minutos de
      paciência resolvem a maior parte dos acidentes registrados a cada verão.
    </P>
  </>
);

/* ==========================================================================
   ARTIGO 2: Poeira do Saara 2026 — a nuvem que atravessa o Atlântico
   ========================================================================== */

const saaraFaq = [
  {
    q: 'O que é a poeira do Saara e como ela chega ao Brasil?',
    a: 'É areia fina e mineral suspensa por tempestades de poeira no norte da África. Os ventos alísios levam essa massa seca e quente, chamada de Camada de Ar Saariana, em altitudes entre 1,5 e 5,5 quilômetros. Em três a seis dias ela cruza o Atlântico e alcança o Caribe, a Amazônia e o Nordeste brasileiro, principalmente entre dezembro e abril.',
  },
  {
    q: 'A poeira do Saara faz bem ou mal?',
    a: 'As duas coisas. Ela fertiliza a Amazônia com fósforo e outros minerais e inibe a formação de furacões no Atlântico, porque traz ar seco e cisalhamento. Por outro lado, degrada a qualidade do ar, aumenta internações por asma e rinite e reduz a visibilidade em episódios intensos.',
  },
  {
    q: 'Quanta poeira sai do Saara por ano?',
    a: 'Estimativas baseadas em satélites da NASA apontam entre 100 e 180 milhões de toneladas transportadas anualmente pelo Atlântico, das quais dezenas de milhões chegam à América do Sul. A depressão de Bodélé, no Chade, é a maior fonte isolada de poeira mineral do planeta.',
  },
  {
    q: 'Como a poeira do Saara afeta a saúde?',
    a: 'As partículas mais finas, na faixa de 2,5 micrômetros, penetram profundamente nas vias respiratórias e podem agravar asma, bronquite, rinite alérgica e doenças cardiovasculares. Crianças, idosos e pessoas com doenças crônicas são os grupos mais sensíveis durante episódios de haze.',
  },
  {
    q: 'Como se proteger em dias de poeira em suspensão?',
    a: 'Reduza exercícios ao ar livre, mantenha janelas fechadas nos horários de pico, use umidificador ou toalha úmida em ambientes secos, faça lavagem nasal com soro fisiológico, mantenha a medicação de resgate por perto e prefira máscaras do tipo PFF2 se precisar se expor por muito tempo.',
  },
  {
    q: 'A poeira do Saara diminui os furacões no Atlântico?',
    a: 'Sim, no curto prazo. A Camada de Ar Saariana traz ar muito seco, uma inversão térmica e ventos fortes em níveis médios. Esse conjunto sufoca a convecção necessária para organizar um ciclone tropical, o que costuma segurar a atividade da temporada no início do verão do Hemisfério Norte.',
  },
  {
    q: 'Por que o céu fica leitoso ou alaranjado?',
    a: 'As partículas minerais espalham a luz solar de forma diferente das moléculas de ar. O resultado é um céu esbranquiçado durante o dia, um Sol com disco visível e avermelhado e entardeceres intensamente alaranjados, mesmo sem nuvens de tempestade.',
  },
  {
    q: 'Onde acompanhar a chegada de poeira em tempo real?',
    a: 'O Windy oferece camadas de poeira e de material particulado alimentadas por modelos de aerossóis; a NASA disponibiliza imagens de satélite quase em tempo real; e o INMET e o CPTEC/INPE publicam informações sobre visibilidade e condições atmosféricas. Aplicativos de qualidade do ar complementam com o índice local.',
  },
];

export const PoeiraSaara2026Article: React.FC<{ midImage: string }> = ({ midImage }) => (
  <>
    <FaqSchema items={saaraFaq} />

    <Lead>
      Todo ano, uma nuvem maior que o território brasileiro se levanta no deserto do Saara e
      atravessa o Atlântico. A <strong>poeira do Saara</strong> fertiliza a Amazônia, segura a
      formação de furacões, deixa o céu leitoso no Nordeste e enche consultórios de pacientes com
      crise respiratória. Em 2026, com o Atlântico mais quente e o padrão de ventos alterado, esse
      rio invisível de areia voltou a ser assunto — e quase ninguém sabe o que ele significa.
    </Lead>

    <P>
      É o maior transporte de matéria sólida do planeta e acontece silenciosamente, a quilômetros
      de altura. Não há sirene, não há alerta vermelho, não há imagem de destruição. O sinal é
      sutil: um céu esbranquiçado, um pôr do sol exageradamente laranja, um carro coberto por uma
      película fina de pó bege pela manhã.
    </P>

    <P>
      Entender esse fenômeno é entender uma das conexões mais elegantes do sistema climático: um
      deserto que sustenta uma floresta tropical do outro lado do oceano.
    </P>

    <Highlight title="Resumo rápido: poeira do Saara em 2026">
      Entre 100 e 180 milhões de toneladas cruzam o Atlântico por ano · fonte principal na
      depressão de Bodélé, no Chade · transporte entre 1,5 e 5,5 km de altitude · três a seis dias
      de travessia · pico de chegada ao Brasil entre dezembro e abril · fertiliza a Amazônia com
      fósforo · inibe furacões · piora a qualidade do ar em episódios intensos.
    </Highlight>

    <H2 id="o-que-e">O que é a Camada de Ar Saariana e como ela se forma</H2>

    <P>
      O Saara é o maior deserto quente do mundo, com cerca de 9 milhões de quilômetros quadrados
      de sedimentos soltos e sem cobertura vegetal. Quando linhas de instabilidade e ventos fortes
      varrem essas superfícies, partículas de argila, quartzo, ferro e fósforo são erguidas em
      tempestades de areia que podem cobrir centenas de quilômetros de frente.
    </P>

    <P>
      A massa de ar quente, seca e carregada de partículas que resulta desse processo recebe o
      nome técnico de <strong>Camada de Ar Saariana</strong>. Ela se estabelece sobre o ar marinho
      mais frio e úmido do Atlântico, criando uma inversão térmica que funciona como uma tampa. A
      poeira fica presa nessa camada e viaja com os alísios de leste.
    </P>

    <H3>A depressão de Bodélé: a fábrica de poeira do planeta</H3>

    <P>
      No norte do Chade existe uma bacia que já foi o fundo do lago Mega-Chade, um corpo d’água
      enorme que secou ao longo de milhares de anos. O que ficou foi uma camada de diatomito — o
      esqueleto microscópico de algas fossilizadas — extremamente leve e rica em nutrientes.
      Ventos canalizados entre duas cadeias de montanhas aceleram sobre essa bacia e levantam
      poeira em boa parte dos dias do ano. É essa areia específica que faz a diferença para a
      Amazônia.
    </P>

    <InfoBox title="Como o transporte é medido">
      Satélites como o CALIPSO usam laser para fatiar a atmosfera e medir em que altura estão os
      aerossóis. Sensores como o MODIS estimam a profundidade óptica de aerossóis, um índice de
      quanta luz solar é bloqueada pelas partículas. Modelos de aerossóis combinam esses dados com
      a previsão de vento para projetar onde a nuvem estará nos próximos dias — é a mesma base que
      alimenta as camadas de poeira dos aplicativos de meteorologia.
    </InfoBox>

    <H2 id="fertilizacao">A Amazônia adubada pelo deserto</H2>

    <P>
      Solos de floresta tropical são, em geral, pobres. A chuva intensa lava os nutrientes ano
      após ano, e o fósforo — elemento essencial para o crescimento das plantas — é perdido para os
      rios e para o oceano. A floresta se sustenta reciclando matéria orgânica em ciclo quase
      fechado, mas essa reciclagem não é perfeita: existe uma perda líquida anual.
    </P>

    <P>
      A poeira saariana repõe parte dessa perda. Estimativas baseadas em observações de satélite
      indicam que dezenas de milhares de toneladas de fósforo chegam à bacia amazônica todo ano
      carregadas pelo vento — quantidade da mesma ordem de grandeza do que a floresta perde por
      lixiviação. É um sistema de adubação intercontinental que funciona há milênios.
    </P>

    <PullQuote>
      Um lago que secou no Chade há milhares de anos continua alimentando a maior floresta
      tropical do mundo, um grão de poeira por vez.
    </PullQuote>

    <P>
      Esse mesmo mecanismo tem um efeito paralelo no oceano: o ferro contido na poeira fertiliza o
      fitoplâncton do Atlântico tropical, com reflexo na cadeia alimentar marinha e na absorção de
      carbono. É uma peça pouco visível do quebra-cabeça climático, ligada às mudanças que
      descrevemos na análise sobre{' '}
      <InternalLink to="/blog/ondas-calor-marinhas-branqueamento-corais-2026">ondas de calor marinhas e branqueamento de corais</InternalLink>.
    </P>

    <img
      src={midImage}
      alt="Céu alaranjado por poeira do Saara em suspensão sobre cidade brasileira reduzindo visibilidade e qualidade do ar em 2026"
      loading="lazy"
      width={944}
      height={704}
      className="w-full rounded-xl shadow-lg my-10"
    />

    <H2 id="furacoes">Por que a poeira do Saara segura os furacões</H2>

    <P>
      Um ciclone tropical precisa de três coisas: água quente, ar úmido em níveis médios e pouco
      cisalhamento do vento com a altura. A Camada de Ar Saariana ataca as duas últimas.
    </P>

    <Checklist
      items={[
        'Ar extremamente seco: quando entra na circulação da tempestade, ele evapora as nuvens em formação e cria correntes descendentes frias que sufocam a convecção.',
        'Inversão térmica: a camada quente acima do ar marinho funciona como uma tampa que impede as nuvens de crescer verticalmente.',
        'Jato de leste africano: o vento intenso associado à camada aumenta o cisalhamento e desorganiza a estrutura vertical do sistema.',
      ]}
    />

    <P>
      Por isso, junho e julho costumam ser meses de temporada morna no Atlântico tropical, mesmo
      com oceano quente: é o auge do transporte de poeira. Quando a camada enfraquece, no fim do
      verão do Hemisfério Norte, a atividade ciclônica dispara. Fatores de escala global também
      pesam nessa conta, como explicamos no texto sobre{' '}
      <InternalLink to="/blog/la-nina-2026-impactos-brasil-previsao">La Niña 2026</InternalLink>.
    </P>

    <H2 id="brasil">Quando e onde a poeira chega ao Brasil</H2>

    <P>
      O destino da nuvem depende da posição da Zona de Convergência Intertropical. Entre dezembro
      e abril, com a ZCIT deslocada para o sul, os alísios de nordeste conduzem a poeira em
      direção ao norte da América do Sul: Guianas, Roraima, Amapá, Amazonas e faixa norte do
      Nordeste. Entre junho e agosto, com a ZCIT mais ao norte, o alvo preferencial passa a ser o
      Caribe, o Golfo do México e o sul dos Estados Unidos.
    </P>

    <DataTable
      headers={['Período', 'Rota predominante', 'Efeito observado']}
      rows={[
        ['Dezembro a abril', 'Norte da América do Sul e Amazônia', 'Fertilização da floresta e céu esbranquiçado'],
        ['Maio a julho', 'Caribe e Golfo do México', 'Supressão de furacões e alerta de qualidade do ar'],
        ['Agosto a outubro', 'Transporte enfraquecido', 'Janela de maior atividade ciclônica no Atlântico'],
        ['Episódios extremos', 'Plumas contínuas de milhares de km', 'Haze visível, entardecer alaranjado, PM2.5 elevado'],
      ]}
      caption="Sazonalidade aproximada do transporte transatlântico de poeira mineral"
    />

    <P>
      Na maior parte dos episódios que atingem o Brasil, a poeira permanece em altitude e o efeito
      perceptível é apenas óptico. Em eventos mais intensos, parte do material se mistura à camada
      próxima ao solo — e é aí que a qualidade do ar piora.
    </P>

    <H2 id="saude">Efeitos na saúde e como se proteger da poeira em suspensão</H2>

    <P>
      O material particulado fino é o vilão. Partículas de até 2,5 micrômetros atravessam as
      defesas naturais do nariz e da garganta e chegam aos alvéolos, provocando inflamação. Em
      cidades onde a poeira se soma à fumaça de queimadas — situação recorrente no norte do país,
      como mostramos na cobertura da{' '}
      <InternalLink to="/blog/amazonia-seca-historica-2026">seca histórica da Amazônia</InternalLink>{' '}
      — o efeito é cumulativo.
    </P>

    <Warning title="Grupos que exigem atenção redobrada">
      Crianças pequenas, idosos, gestantes, asmáticos, pessoas com DPOC, rinite crônica ou doença
      cardiovascular. Nesses casos, um índice de qualidade do ar apenas moderado já pode
      desencadear sintomas. Mantenha a medicação de manutenção em dia e não espere a crise para
      procurar atendimento.
    </Warning>

    <H3>Prevenção e cuidados no dia a dia</H3>

    <Checklist
      items={[
        'Consulte o índice de qualidade do ar antes de atividades ao ar livre e adie treinos intensos em dias de haze.',
        'Mantenha janelas fechadas nos horários de maior concentração, geralmente à tarde e no início da noite.',
        'Faça lavagem nasal com soro fisiológico duas a três vezes ao dia durante episódios prolongados.',
        'Use pano úmido na limpeza doméstica em vez de vassoura, que ressuspende as partículas.',
        'Aumente a ingestão de água: o ar seco associado à camada saariana desidrata mucosas rapidamente.',
        'Se precisar de exposição prolongada, prefira máscara PFF2, que retém material particulado fino.',
      ]}
    />

    <H3>Dicas de conforto térmico durante episódios de ar seco</H3>

    <P>
      A Camada de Ar Saariana traz consigo umidade relativa baixa e sensação de aspereza no ar.
      Bacias com água nos quartos, umidificadores, toalhas úmidas em janelas e banhos mornos e
      curtos ajudam. Evite ar-condicionado sem filtro limpo: ele resseca ainda mais o ambiente e
      recircula partículas.
    </P>

    <CTA>
      Acompanhe a umidade relativa, a visibilidade e a qualidade do ar da sua cidade em tempo real
      na página <InternalLink to="/agora">tempo agora</InternalLink> e programe a semana com a{' '}
      <InternalLink to="/15-dias">previsão para 15 dias</InternalLink>.
    </CTA>

    <H2 id="historico">Dados históricos: os grandes episódios de poeira transatlântica</H2>

    <P>
      Registros de satélite desde os anos 1980 mostram variação relevante de um ano para outro. O
      transporte tende a ser maior em anos secos no Sahel, porque solos expostos liberam mais
      material. Ele diminui quando as chuvas na faixa saheliana são generosas e a vegetação
      segura o sedimento.
    </P>

    <DataTable
      headers={['Marco', 'O que aconteceu', 'Por que importa']}
      rows={[
        ['Anos 1970–1980', 'Grande seca no Sahel', 'Período de transporte de poeira historicamente elevado'],
        ['Década de 2000', 'Recuperação parcial da vegetação', 'Tendência de queda no volume transportado'],
        ['Episódio de 2020', 'Pluma excepcional apelidada de Godzilla', 'Qualidade do ar crítica no Caribe e no sul dos EUA'],
        ['Temporadas recentes', 'Plumas frequentes na Amazônia', 'Reforço da conexão deserto-floresta observada por satélite'],
      ]}
      caption="Marcos do transporte transatlântico de poeira registrados por satélites e redes de monitoramento"
    />

    <P>
      Séries históricas, imagens e explicações técnicas sobre o fenômeno estão disponíveis nos
      portais da <ExternalLink href="https://www.nasa.gov/">NASA</ExternalLink> e da{' '}
      <ExternalLink href="https://www.noaa.gov/">NOAA</ExternalLink>. Para condições locais no
      Brasil, acompanhe os boletins do{' '}
      <ExternalLink href="https://portal.inmet.gov.br/">INMET</ExternalLink> e as análises do{' '}
      <ExternalLink href="https://www.cptec.inpe.br/">CPTEC/INPE</ExternalLink>. A dimensão
      ambiental do tema, ligada à desertificação e à degradação do solo, é acompanhada pelo{' '}
      <ExternalLink href="https://www.unep.org/pt-br">Programa das Nações Unidas para o Meio Ambiente</ExternalLink>.
    </P>

    <H2 id="clima">Mudanças climáticas e o futuro do rio de areia</H2>

    <P>
      O que acontece com a poeira do Saara em um planeta mais quente ainda é objeto de debate
      científico. Alguns modelos projetam um Sahel mais chuvoso e, portanto, menos poeira em
      suspensão. Outros apontam para maior variabilidade, com secas mais severas intercaladas com
      chuvas intensas — o que aumentaria a frequência de eventos extremos de poeira sem
      necessariamente elevar a média.
    </P>

    <P>
      As consequências práticas são grandes. Menos poeira significa menos fósforo para a Amazônia
      e menos supressão de furacões no Atlântico. Mais poeira significa mais dias de qualidade do
      ar ruim em cidades tropicais. Nas duas hipóteses, o monitoramento por satélite continua sendo
      a única forma de acompanhar um fenômeno que atravessa um oceano inteiro sem fazer barulho.
    </P>

    <H2 id="monitoramento">Melhores apps de monitoramento climático para acompanhar poeira e qualidade do ar</H2>

    <DataTable
      headers={['Ferramenta', 'O que acompanhar', 'Observação']}
      rows={[
        ['Windy', 'Camadas de poeira, PM2.5 e visibilidade', 'Permite comparar diferentes modelos de aerossóis'],
        ['NASA Worldview', 'Imagens de satélite quase em tempo real', 'Ideal para visualizar a pluma sobre o Atlântico'],
        ['Climatempo', 'Previsão local e umidade relativa', 'Boa granularidade de municípios brasileiros'],
        ['AccuWeather', 'Índice de qualidade do ar e alertas', 'Notificações úteis para grupos sensíveis'],
        ['INMET', 'Avisos oficiais e dados de estações', 'Referência para umidade e visibilidade'],
      ]}
      caption="Ferramentas gratuitas para acompanhar episódios de poeira mineral e qualidade do ar"
    />

    <H2 id="faq">Perguntas frequentes sobre a poeira do Saara</H2>

    <FAQ items={saaraFaq} />

    <P>
      A próxima vez que o entardecer parecer laranja demais e o Sol permitir ser olhado sem
      esforço, vale lembrar: talvez o que está no céu tenha saído de um lago seco no Chade, seis
      dias atrás, e esteja a caminho de virar folha nova em alguma árvore da Amazônia.
    </P>
  </>
);
