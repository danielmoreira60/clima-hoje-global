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

/* ==========================================================================
   ARTIGO: Chuvas intensas e enchentes no Rio Grande do Sul — agosto de 2026
   ========================================================================== */
export const EnchentesRSArticle: React.FC<{ midImage: string }> = ({ midImage }) => (
  <>
    <Lead>
      O Rio Grande do Sul voltou a viver dias de emergência hídrica em agosto de 2026. Um bloqueio
      atmosférico sobre o Atlântico Sul travou a passagem das frentes frias e transformou o estado
      em um corredor de chuva contínua: em pouco mais de 96 horas, municípios do Vale do Taquari,
      da Região Metropolitana de Porto Alegre e da Serra acumularam volumes que normalmente levariam
      dois meses inteiros para cair.
    </Lead>

    <P>
      A combinação foi de manual — e por isso mesmo perigosa. Um cavado em altos níveis posicionado
      sobre a Argentina, um jato de baixos níveis carregando umidade amazônica para o sul do país e
      uma frente estacionária ancorada sobre a fronteira gaúcha criaram uma “esteira transportadora”
      de vapor d'água. Enquanto o sistema não se deslocava, as mesmas bacias recebiam chuva sobre solo
      já saturado. É exatamente o cenário que transforma chuva forte em enchente de grande porte.
    </P>

    <Highlight title="Resumo do evento">
      Bloqueio atmosférico + jato de baixos níveis + solo saturado = enchentes rápidas nos afluentes
      e cheia lenta e prolongada no Lago Guaíba e na Lagoa dos Patos. A fase mais crítica das chuvas
      dura poucos dias; a fase mais crítica da água nas cidades dura semanas.
    </Highlight>

    <H2>O que aconteceu, dia a dia</H2>

    <P>
      As primeiras pancadas chegaram pela fronteira oeste, ainda sem grande impacto. O problema começou
      quando o sistema parou de avançar. A partir do segundo dia, os radares meteorológicos passaram a
      mostrar o fenômeno de <strong>treinamento de células convectivas</strong>: tempestades nascendo
      sempre no mesmo ponto e desfilando sobre a mesma faixa de terreno, como vagões de um trem passando
      pelos mesmos trilhos. Em regiões de relevo acidentado, como a Serra Gaúcha, esse padrão é
      especialmente destrutivo, porque a água desce rápido e concentrada para os vales.
    </P>

    <DataTable
      headers={['Fase', 'Característica dominante', 'Risco principal']}
      rows={[
        ['Dias 1–2', 'Chuva moderada e contínua', 'Saturação do solo, alagamentos urbanos pontuais'],
        ['Dias 3–4', 'Treinamento de tempestades, 100–200 mm/dia', 'Enxurradas, deslizamentos, cheia rápida de afluentes'],
        ['Dias 5–7', 'Chuva diminui, rios continuam subindo', 'Cheia dos rios principais e do Guaíba'],
        ['Dias 8–20', 'Tempo firme, água escoando lentamente', 'Permanência da inundação, doenças, prejuízos'],
      ]}
    />

    <P>
      Esse descompasso entre o fim da chuva e o pico da cheia é a parte que mais confunde a população.
      Não é raro o céu abrir em Porto Alegre no exato dia em que a água atinge o nível máximo no centro
      histórico — porque o que chega ao Guaíba é a chuva que caiu dias antes, lá em cima, nas cabeceiras
      do Taquari, do Caí, do Jacuí, do Sinos e do Gravataí.
    </P>

    <img
      src={midImage}
      alt="Vista aérea de bairro alagado no Rio Grande do Sul com telhados emergindo da água barrenta"
      loading="lazy"
      width={944}
      height={704}
      className="w-full rounded-xl my-10 shadow-lg"
    />

    <H2>Por que o Rio Grande do Sul é tão vulnerável</H2>

    <H3>Geografia de funil</H3>
    <P>
      Cinco grandes rios desaguam praticamente no mesmo ponto. O Guaíba não é exatamente um rio: é um
      corpo d'água que recebe a drenagem de uma bacia gigantesca e escoa por um único gargalo em direção
      à Lagoa dos Patos, que por sua vez só encontra o oceano no canal de Rio Grande. Quando chove muito
      na bacia inteira ao mesmo tempo, a água entra depressa e sai devagar.
    </P>

    <H3>Vento sul, o agravante silencioso</H3>
    <P>
      Um detalhe pouco discutido fora dos boletins técnicos: o vento sul empilha água na Lagoa dos Patos
      e dificulta o escoamento do Guaíba. Uma cheia moderada com vento sul persistente pode causar mais
      estrago do que uma cheia maior com vento norte. Por isso, boletins de nível do Guaíba sempre devem
      ser lidos junto com a previsão de direção do vento.
    </P>

    <H3>Ocupação de áreas de risco</H3>
    <P>
      Décadas de urbanização avançaram sobre planícies de inundação — terrenos que, do ponto de vista
      hidrológico, pertencem ao rio. Somam-se a isso a impermeabilização do solo urbano, a redução da
      mata ciliar e sistemas de drenagem dimensionados para chuvas de outro século.
    </P>

    <PullQuote author="Princípio básico de hidrologia urbana">
      Rio não invade cidade. Cidade ocupa planície de rio — e o rio, de tempos em tempos, cobra o
      espaço de volta.
    </PullQuote>

    <H2>A conexão climática: por que os extremos estão mais frequentes</H2>

    <P>
      Eventos de chuva extrema no sul do Brasil não são novidade: 1941, 1965, 1983 e 2023–2024 estão nos
      registros. O que mudou é a frequência e a intensidade dos episódios. Uma atmosfera mais quente
      retém mais vapor d'água — cerca de 7% a mais a cada 1 °C de aquecimento, segundo a relação de
      Clausius-Clapeyron. Na prática, o mesmo sistema meteorológico que há 50 anos descarregaria 120 mm
      hoje pode descarregar 160 mm ou mais.
    </P>

    <P>
      Some-se a isso o aquecimento anômalo do Atlântico Sul, que aumenta a evaporação disponível, e os
      ciclos de escala global que modulam o posicionamento das frentes. Quem acompanha o tema pode
      aprofundar na nossa análise sobre o{' '}
      <InternalLink to="/blog/super-el-nino-2026">Super El Niño de 2026</InternalLink> e sobre a{' '}
      <InternalLink to="/blog/onda-frio-polar-antartica-brasil-2026">onda de frio polar antártica</InternalLink>,
      dois fenômenos que atuaram sobre a mesma região em intervalo de poucas semanas.
    </P>

    <InfoBox title="Bloqueio atmosférico em uma frase">
      É quando um sistema de alta pressão “estaciona” e impede que os sistemas vizinhos sigam seu curso
      normal — resultando em chuva sem fim de um lado e seca prolongada do outro.
    </InfoBox>

    <H2>Impactos observados</H2>

    <P>
      As perdas em eventos desse porte vão muito além do que aparece nas primeiras 48 horas de cobertura
      jornalística. O ciclo completo do prejuízo costuma se estender por meses:
    </P>

    <Checklist
      items={[
        'Deslocamento de moradores e ocupação de abrigos públicos por semanas',
        'Interrupção de rodovias estaduais e federais, isolando municípios inteiros',
        'Falhas em estações de captação e tratamento de água, gerando desabastecimento paradoxal',
        'Perdas na lavoura de arroz, soja e nas cadeias leiteira e avícola',
        'Danos a subestações de energia e cortes prolongados de eletricidade',
        'Aumento de casos de leptospirose, hepatite A, diarreias e doenças de pele após o recuo da água',
        'Impacto econômico em indústria calçadista, metal-mecânica e comércio de rua',
        'Efeitos de saúde mental duradouros em quem perdeu casa, trabalho ou familiares',
      ]}
    />

    <Warning title="A água que baixa deixa contaminação">
      A enchente urbana carrega esgoto, combustíveis, pesticidas e resíduos hospitalares. Retorno para
      casa exige botas, luvas, máscara, água potável para higiene e desinfecção de superfícies com
      solução clorada. Ferimentos em contato com água de enchente devem ser avaliados por um serviço
      de saúde.
    </Warning>

    <H2>Como se proteger: guia prático</H2>

    <H3>Antes — quando o alerta é emitido</H3>
    <Checklist
      items={[
        'Descubra se seu endereço está em área de inundação histórica (mapas das defesas civis municipais)',
        'Monte uma mochila de emergência: documentos plastificados, remédios, lanterna, power bank, água e alimentos não perecíveis para 72 horas',
        'Combine com a família um ponto de encontro alto e seguro e um contato fora da região',
        'Suba móveis, eletrodomésticos e documentos para o ponto mais alto da casa',
        'Desligue o gás e, se a água se aproximar, o disjuntor geral',
        'Abasteça o veículo e mantenha o tanque acima da metade',
      ]}
    />

    <H3>Durante — enquanto chove e a água sobe</H3>
    <Checklist
      items={[
        'Nunca dirija ou caminhe por trecho alagado: 30 cm de água em movimento derrubam um adulto e 60 cm arrastam um carro',
        'Evite pontes, encostas e barrancos; deslizamentos ocorrem inclusive depois que a chuva para',
        'Mantenha-se longe de fiação caída e de postes em água',
        'Acompanhe apenas fontes oficiais e desconfie de áudios de WhatsApp sem origem',
        'Se a evacuação for determinada, saia imediatamente — esperar “só mais um pouco” é a decisão que mais mata',
      ]}
    />

    <H3>Depois — o retorno</H3>
    <Checklist
      items={[
        'Só volte quando a Defesa Civil liberar a área',
        'Peça vistoria elétrica antes de religar a energia',
        'Descarte alimentos e medicamentos que tiveram contato com a água',
        'Elimine focos de água parada para evitar surto de dengue nas semanas seguintes',
        'Registre danos com fotos e datas para seguro, auxílios e programas de reconstrução',
      ]}
    />

    <H2>Onde acompanhar dados confiáveis</H2>

    <P>
      Em eventos de evolução rápida, a diferença entre uma decisão boa e uma decisão tardia costuma
      estar na qualidade da informação. Estas são as fontes que recomendamos monitorar:
    </P>

    <DataTable
      headers={['Fonte', 'O que oferece', 'Melhor uso']}
      rows={[
        ['INMET', 'Alertas oficiais por cor e por município', 'Aviso antecipado de chuva volumosa'],
        ['Defesa Civil estadual e municipal', 'Ordens de evacuação e abrigos', 'Decisão de sair de casa'],
        ['CPRM / Serviço Geológico', 'Níveis de rios em tempo real', 'Acompanhar cheia das bacias'],
        ['MetSul e Climatempo', 'Análise regional detalhada', 'Entender a evolução do sistema'],
        ['Windy', 'Modelos numéricos e radar', 'Visualizar chuva acumulada prevista'],
        [
          'Clima Tempo',
          'Previsão local e monitoramento de eventos',
          'Consulta diária rápida',
        ],
      ]}
    />

    <P>
      Você pode acompanhar as condições atualizadas na página{' '}
      <InternalLink to="/agora">Tempo Agora</InternalLink>, a evolução das próximas horas em{' '}
      <InternalLink to="/hoje">Previsão de Hoje</InternalLink> e o cenário estendido em{' '}
      <InternalLink to="/15-dias">Próximos 15 Dias</InternalLink>.
    </P>

    <H2>O que esperar dos próximos meses</H2>

    <P>
      A primavera é historicamente a estação mais chuvosa no Rio Grande do Sul, e os modelos sazonais
      indicam probabilidade acima da média para chuva entre setembro e novembro de 2026 em boa parte do
      estado. Isso não significa que outra enchente de grande porte esteja garantida — significa que o
      solo seguirá com pouca capacidade de absorção, o que reduz o volume de chuva necessário para gerar
      novo transbordamento.
    </P>

    <PullQuote>
      Depois de uma grande cheia, o próximo evento não precisa ser tão intenso para causar dano
      semelhante. O terreno já está cheio.
    </PullQuote>

    <H2>Adaptação: o que muda a longo prazo</H2>

    <P>
      Reconstruir igual é garantir a repetição. As medidas que efetivamente reduzem risco em bacias como
      a do Guaíba envolvem manutenção rigorosa e automação de casas de bombas e comportas, restauração de
      mata ciliar nas cabeceiras, parques alagáveis que funcionem como reservatórios temporários,
      atualização dos mapas de risco com dados recentes de precipitação e, quando não há alternativa,
      realocação planejada de moradias em áreas de inundação recorrente.
    </P>

    <P>
      Nada disso substitui o item mais barato e mais eficaz de todos: um sistema de alerta que chegue
      cedo, em linguagem clara, a quem precisa agir.
    </P>

    <FAQ
      items={[
        {
          q: 'Por que o rio continua subindo mesmo depois que a chuva para?',
          a: 'Porque a água que caiu nas cabeceiras leva dias para percorrer a bacia até os rios principais e o Guaíba. O pico da cheia costuma ocorrer de 2 a 5 dias depois do pico da chuva.',
        },
        {
          q: 'Qual profundidade de água já é perigosa para atravessar?',
          a: 'A partir de 15 cm em correnteza já há risco de queda; 30 cm derrubam um adulto e cerca de 60 cm são suficientes para arrastar um carro de passeio.',
        },
        {
          q: 'Enchente no Rio Grande do Sul é causada por mudanças climáticas?',
          a: 'Nenhum evento isolado é causado exclusivamente pelo aquecimento global, mas ele aumenta a probabilidade e a intensidade de chuvas extremas, já que uma atmosfera mais quente carrega mais vapor d’água.',
        },
        {
          q: 'Como saber se minha casa está em área de risco?',
          a: 'Consulte os mapas de inundação da Defesa Civil municipal e o histórico de cheias do bairro. Vizinhos antigos e registros de 1941 e 2024 costumam ser referências úteis.',
        },
        {
          q: 'Quais aplicativos avisam sobre enchentes no RS?',
          a: 'INMET Alerta, Defesa Civil Nacional (alertas por SMS via 40199), MetSul, Climatempo, Windy e os painéis de nível de rios do Serviço Geológico do Brasil.',
        },
        {
          q: 'É seguro beber água da torneira depois da enchente?',
          a: 'Só depois que a concessionária declarar o sistema normalizado. Enquanto isso, use água fervida por pelo menos 5 minutos ou tratada com hipoclorito conforme orientação da vigilância sanitária.',
        },
        {
          q: 'Quanto tempo demora para a água escoar totalmente?',
          a: 'Em áreas protegidas por diques e dependentes de bombeamento, pode levar de duas a quatro semanas após o fim da chuva, dependendo do nível da Lagoa dos Patos e do vento.',
        },
        {
          q: 'O que fazer com animais domésticos durante a evacuação?',
          a: 'Leve-os junto. Use caixas de transporte, coleira e guia, leve ração e água, e informe-se previamente sobre abrigos que aceitam animais na sua cidade.',
        },
      ]}
    />
  </>
);

/* ==========================================================================
   ARTIGO: Incêndios florestais na Europa e nos EUA — verão de 2026
   ========================================================================== */
export const IncendiosEuropaEuaArticle: React.FC<{ midImage: string }> = ({ midImage }) => (
  <>
    <Lead>
      O verão de 2026 no Hemisfério Norte entrou para a história como uma das temporadas de fogo mais
      severas já registradas. Da Península Ibérica aos Bálcãs, e da Califórnia às Montanhas Rochosas,
      milhões de hectares queimaram sob um padrão comum: calor extremo persistente, vegetação
      desidratada e ventos secos capazes de transformar uma faísca em uma frente de fogo incontrolável
      em menos de uma hora.
    </Lead>

    <P>
      Não se trata de um único incêndio gigante, mas de dezenas de eventos simultâneos que esgotam a
      capacidade de resposta dos países. Quando Espanha, Portugal, França, Itália e Grécia enfrentam
      grandes focos ao mesmo tempo, o mecanismo europeu de auxílio mútuo — que depende de aviões e
      brigadas emprestados entre países — perde eficácia, porque simplesmente não há recursos ociosos.
    </P>

    <Highlight title="O triângulo do fogo extremo de 2026">
      Ondas de calor prolongadas secando a vegetação + déficit de chuva acumulado nos meses anteriores +
      episódios de vento forte e umidade relativa abaixo de 20%. Basta uma ignição — quase sempre de
      origem humana — para que o resultado seja um megaincêndio.
    </Highlight>

    <H2>Europa: o arco mediterrâneo em chamas</H2>

    <P>
      A bacia do Mediterrâneo é considerada um <em>hotspot</em> climático: aquece mais rápido que a média
      global e vem perdendo chuva de verão de forma consistente. Em 2026, o continente encadeou episódios
      de calor extremo desde o fim de junho, tema que detalhamos na análise sobre o{' '}
      <InternalLink to="/blog/calor-extremo-europa-2026">calor extremo na Europa em 2026</InternalLink>.
      Semanas seguidas com máximas acima de 40 °C reduziram a umidade dos combustíveis finos — gramíneas,
      folhas, galhos secos — a níveis críticos.
    </P>

    <H3>Incêndios de sexta geração</H3>
    <P>
      Especialistas europeus usam o termo “incêndios de sexta geração” para descrever eventos que geram
      sua própria meteorologia. O calor da frente de fogo forma uma nuvem de pirocumulonimbo, capaz de
      produzir descargas elétricas e rajadas descendentes que espalham brasas por quilômetros. Nesse
      estágio, nenhum recurso terrestre ou aéreo consegue conter a frente principal — o combate se
      concentra em proteger vidas e estruturas até que as condições mudem.
    </P>

    <PullQuote author="Consenso entre serviços de combate a incêndios florestais">
      Não se apaga um megaincêndio: espera-se por uma janela meteorológica favorável e trabalha-se para
      que ele não chegue às pessoas até lá.
    </PullQuote>

    <H3>Despovoamento rural e acúmulo de combustível</H3>
    <P>
      Há uma causa estrutural pouco visível: o abandono do campo. Terras antes cultivadas ou pastoreadas
      viraram matagal contínuo. Sem mosaico agrícola, sem gado e sem manejo, a paisagem se torna um
      tapete ininterrupto de material inflamável, permitindo que o fogo avance dezenas de quilômetros
      sem barreiras naturais.
    </P>

    <img
      src={midImage}
      alt="Avião tanque despejando retardante vermelho sobre encosta em chamas coberta por fumaça densa"
      loading="lazy"
      width={944}
      height={704}
      className="w-full rounded-xl my-10 shadow-lg"
    />

    <H2>Estados Unidos: temporada longa e cada vez mais cara</H2>

    <P>
      No oeste norte-americano, a temporada de incêndios se estendeu de forma consistente ao longo das
      últimas décadas. O que era um período de aproximadamente cinco meses passou a durar praticamente
      o ano inteiro em partes da Califórnia. Em 2026, o padrão se repetiu com agravantes: inverno com
      neve abaixo da média nas serras, derretimento precoce e verão com sucessivas cristas de alta
      pressão sobre o continente.
    </P>

    <DataTable
      headers={['Fator', 'Europa mediterrânea', 'Oeste dos EUA']}
      rows={[
        ['Vento crítico', 'Sirocco, Levante e ventos catabáticos', 'Santa Ana, Diablo e ventos de foehn'],
        ['Combustível dominante', 'Pinheiro, eucalipto, matagal e mato abandonado', 'Chaparral, pinheiros e capim invasor'],
        ['Causa mais comum', 'Ignição humana (queimadas, linhas elétricas, negligência)', 'Raios secos e falhas em linhas de transmissão'],
        ['Agravante estrutural', 'Despovoamento rural e ausência de manejo', 'Expansão urbana em interface florestal (WUI)'],
        ['Recurso aéreo típico', 'Canadair anfíbios e helicópteros', 'Air tankers de grande porte e retardante'],
      ]}
    />

    <H3>O problema da interface urbano-florestal</H3>
    <P>
      Nos EUA, milhões de residências foram construídas em áreas de transição entre cidade e floresta.
      Nessa faixa, o incêndio florestal vira incêndio urbano: uma casa pega fogo e passa a ser a fonte de
      calor que incendeia a próxima. Foi assim em vários dos eventos mais letais da última década, e é
      por isso que programas de defesa focam tanto em espaço defensável, telhado resistente e telas em
      aberturas de ventilação.
    </P>

    <H2>Fumaça: o impacto que atravessa fronteiras</H2>

    <P>
      A fumaça é o efeito mais democrático dos incêndios — atinge quem está a milhares de quilômetros do
      fogo. O material particulado fino (PM2,5) penetra profundamente nos pulmões e alcança a corrente
      sanguínea, agravando asma, DPOC, doenças cardiovasculares e complicações na gestação. Plumas
      transatlânticas podem cruzar oceanos e reduzir a qualidade do ar em regiões que sequer registraram
      focos.
    </P>

    <Warning title="Como se proteger da fumaça">
      Mantenha janelas fechadas nos horários de pico, use purificador com filtro HEPA ou improvise um
      cômodo limpo, evite exercício ao ar livre, prefira máscaras PFF2/N95 (máscaras de pano não filtram
      PM2,5) e monitore o índice de qualidade do ar antes de sair. Crianças, idosos, gestantes e pessoas
      com doenças respiratórias devem redobrar o cuidado.
    </Warning>

    <InfoBox title="Referência rápida de qualidade do ar (PM2,5)">
      Até 12 µg/m³ é considerado bom; entre 35 e 55 µg/m³ já há risco para grupos sensíveis; acima de
      150 µg/m³ o ar é insalubre para toda a população e a permanência em ambiente externo deve ser
      evitada.
    </InfoBox>

    <H2>Existe conexão com as mudanças climáticas?</H2>

    <P>
      Incêndios florestais sempre existiram e, em muitos ecossistemas, fazem parte do ciclo natural. O
      que a ciência atribui ao aquecimento global não é a existência do fogo, mas a ampliação das
      condições que o tornam extremo: mais dias com calor recorde, estações secas mais longas, déficit
      hídrico acumulado e maior demanda evaporativa da atmosfera, que retira umidade da vegetação com
      mais eficiência.
    </P>

    <P>
      Estudos de atribuição publicados nos últimos anos indicam que ondas de calor que antecedem grandes
      incêndios se tornaram várias vezes mais prováveis em um clima aquecido. E há retroalimentação: as
      queimadas liberam enormes quantidades de carbono, reduzindo a capacidade das florestas de atuar
      como sumidouro. O mesmo mecanismo aparece em análises sobre a{' '}
      <InternalLink to="/blog/amazonia-seca-historica-2026">seca histórica na Amazônia</InternalLink> e
      sobre os{' '}
      <InternalLink to="/blog/incendios-florestais-chile-2026">incêndios florestais no Chile</InternalLink>.
    </P>

    <H2>Prevenção que funciona</H2>

    <H3>Para moradores de áreas de risco</H3>
    <Checklist
      items={[
        'Crie espaço defensável: 0 a 1,5 m sem material inflamável junto às paredes, e vegetação baixa e espaçada até 30 m',
        'Limpe calhas e telhado — brasas transportadas pelo vento iniciam a maioria dos incêndios residenciais',
        'Instale telas metálicas finas em aberturas de ventilação e sótãos',
        'Mantenha mangueira longa, ferramentas manuais e reserva de água acessíveis',
        'Prepare uma mochila de evacuação e defina duas rotas de saída distintas',
        'Combine um plano familiar com ponto de encontro e contato fora da região',
      ]}
    />

    <H3>Para o poder público e o manejo territorial</H3>
    <Checklist
      items={[
        'Queima prescrita e manejo de combustível fora do período crítico',
        'Faixas de contenção e manutenção de aceiros em vias e linhas de transmissão',
        'Detecção precoce por satélite, câmeras e sensores com resposta em minutos',
        'Enterramento ou blindagem de redes elétricas em zonas de vento forte',
        'Regras de construção resistentes ao fogo na interface urbano-florestal',
        'Apoio à agricultura e ao pastoreio como mosaico natural de barreira ao fogo',
      ]}
    />

    <H2>Como acompanhar em tempo real</H2>

    <DataTable
      headers={['Plataforma', 'Cobertura', 'Utilidade']}
      rows={[
        ['NASA FIRMS', 'Global', 'Focos de calor por satélite quase em tempo real'],
        ['Copernicus EFFIS / CAMS', 'Europa e global', 'Área queimada, risco de incêndio e dispersão de fumaça'],
        ['InciWeb', 'Estados Unidos', 'Status oficial de cada incêndio ativo'],
        ['Watch Duty', 'Oeste dos EUA', 'Alertas locais e ordens de evacuação'],
        ['Windy', 'Global', 'Vento, umidade e camada de fumaça'],
        ['Clima Tempo', 'Brasil e global', 'Monitor geológico e climático e previsão local'],
      ]}
    />

    <P>
      No Brasil, o mesmo raciocínio vale para a temporada seca do Centro-Oeste e da Amazônia. Consulte a{' '}
      <InternalLink to="/agora">previsão atual</InternalLink> e o{' '}
      <InternalLink to="/15-dias">cenário dos próximos 15 dias</InternalLink> antes de qualquer atividade
      que envolva fogo em área rural.
    </P>

    <PullQuote>
      Nove em cada dez incêndios florestais começam por ação humana. É também por ação humana que a
      maioria deles pode ser evitada.
    </PullQuote>

    <FAQ
      items={[
        {
          q: 'Por que 2026 teve uma temporada de incêndios tão severa no Hemisfério Norte?',
          a: 'Pela combinação de ondas de calor prolongadas, déficit de chuva acumulado, vegetação extremamente seca e episódios de vento forte com umidade relativa muito baixa — condições que transformam ignições comuns em megaincêndios.',
        },
        {
          q: 'O que é um incêndio de sexta geração?',
          a: 'É um incêndio tão intenso que gera sua própria meteorologia, formando nuvens de pirocumulonimbo com raios e rajadas capazes de espalhar brasas por vários quilômetros, tornando o combate direto inviável.',
        },
        {
          q: 'A fumaça de incêndios distantes pode afetar minha saúde?',
          a: 'Sim. O material particulado fino viaja milhares de quilômetros e agrava asma, DPOC, doenças cardíacas e problemas na gestação, mesmo longe das chamas.',
        },
        {
          q: 'Máscara de pano protege contra fumaça de incêndio?',
          a: 'Não. Somente máscaras do tipo PFF2/N95 ou superiores filtram partículas PM2,5 de forma eficaz.',
        },
        {
          q: 'O que é espaço defensável?',
          a: 'É a área tratada ao redor de uma construção, livre de material inflamável e com vegetação manejada, que reduz drasticamente a chance de a estrutura pegar fogo.',
        },
        {
          q: 'Queima prescrita não é contraditória?',
          a: 'Não. Feita em condições controladas e fora do período crítico, ela reduz o acúmulo de combustível e diminui a intensidade de incêndios futuros.',
        },
        {
          q: 'Esses incêndios afetam o clima do Brasil?',
          a: 'Indiretamente. Grandes emissões de carbono e aerossóis alteram o balanço energético global e podem influenciar padrões atmosféricos, além de reforçar a tendência de aquecimento que afeta todas as regiões.',
        },
        {
          q: 'Quais aplicativos são melhores para monitorar incêndios e qualidade do ar?',
          a: 'NASA FIRMS, Copernicus EFFIS e CAMS, InciWeb, Watch Duty, Windy e IQAir são as referências mais confiáveis em 2026.',
        },
      ]}
    />
  </>
);
