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
   ARTIGO 1: Enchente glacial (GLOF) Nepal / Tibete — setembro de 2026
   ========================================================================== */

const nepalFaq = [
  {
    q: 'O que é uma enchente glacial (GLOF) e por que ela é tão destrutiva?',
    a: 'GLOF é a sigla em inglês para Glacial Lake Outburst Flood, ou enchente por transbordamento de lago glacial. Acontece quando a barragem natural de gelo e entulho rochoso que segura um lago formado pelo derretimento de uma geleira se rompe de uma vez. Milhões de metros cúbicos de água descem o vale em minutos, carregando pedras, troncos e sedimento. A destruição é maior que a de uma cheia comum porque a onda é súbita, muito rápida e cheia de material sólido, funcionando mais como um rio de concreto do que como água.',
  },
  {
    q: 'Quantas pessoas morreram na enchente do Nepal em setembro de 2026?',
    a: 'Os balanços oficiais divulgados por autoridades nepalesas e agências humanitárias em 9 e 10 de setembro de 2026 ultrapassaram 1.300 mortos, com mais de mil desaparecidos e cerca de 13,5 mil pessoas resgatadas. O número seguia sendo revisado porque muitas comunidades de montanha ficaram isoladas, sem estrada e sem telefonia, e o levantamento em campo avançou lentamente.',
  },
  {
    q: 'Por que chamaram o evento de "tsunami de montanha"?',
    a: 'Porque a onda inicial não veio da chuva local, mas de um volume de água represado que se soltou de uma vez, no alto da cordilheira. O comportamento lembra o de um tsunami: uma parede de água que avança rio abaixo com pouca ou nenhuma chuva caindo naquele instante no vale atingido. É por isso que moradores relataram um estrondo antes de ver a água, com o céu ainda relativamente aberto.',
  },
  {
    q: 'Existe risco parecido no Brasil?',
    a: 'Não existe risco de GLOF no Brasil, porque não há geleiras nem lagos glaciais no território nacional. O que existe aqui, e mata todos os anos, são as enxurradas e os deslizamentos disparados por chuva intensa em encostas ocupadas, especialmente no Sudeste e no Sul. O mecanismo físico é diferente, mas a lição de prevenção é a mesma: o tempo entre o alerta e a chegada da água costuma ser de minutos, não de horas.',
  },
  {
    q: 'Como o aquecimento global aumenta o risco desse tipo de enchente?',
    a: 'Geleiras em recuo deixam para trás depressões que se enchem de água de degelo. Quanto mais rápido o derretimento, mais lagos surgem, maiores eles ficam e mais instáveis se tornam as morainas de entulho que os seguram. Ao mesmo tempo, o degelo do permafrost reduz a coesão das encostas, o que aumenta a chance de desabamentos de rocha e gelo caírem dentro do lago e provocarem o transbordamento. É a combinação desses dois processos que faz o número de lagos glaciais perigosos crescer no Himalaia, nos Andes e nos Alpes.',
  },
  {
    q: 'Dá para prever uma enchente glacial com antecedência?',
    a: 'Dá para mapear o risco com bastante precisão usando imagens de satélite, que mostram quais lagos estão crescendo e quais morainas estão finas ou vazando. O que é difícil é acertar a hora exata do rompimento. Por isso a estratégia moderna combina três camadas: monitoramento por satélite, sensores de nível e de vibração instalados no vale, e sirenes com rotas de fuga sinalizadas para as comunidades a jusante. Onde esse conjunto existe, o aviso chega com dezenas de minutos de antecedência, o suficiente para salvar vidas.',
  },
  {
    q: 'Quais aplicativos ajudam a acompanhar alertas de chuva forte e cheias?',
    a: 'Para o Brasil, o app do INMET e os avisos por SMS da Defesa Civil pelo número 40199 são as fontes oficiais mais diretas. Windy é excelente para visualizar chuva acumulada, vento e modelos numéricos em mapa. AccuWeather e Climatempo entregam alertas locais e previsão horária. Para eventos internacionais, o Global Disaster Alert and Coordination System e os boletins da ONU trazem informação verificada em tempo quase real.',
  },
  {
    q: 'O que fazer se você mora em área de risco de enxurrada?',
    a: 'Cadastre-se para receber alertas oficiais, combine com a família um ponto de encontro em terreno alto, deixe documentos e remédios em uma mochila pronta, conheça duas rotas de fuga a pé e nunca tente atravessar água corrente, nem a pé nem de carro. Trinta centímetros de água em movimento já derrubam um adulto e sessenta centímetros arrastam um automóvel.',
  },
];

export const EnchenteGlacialNepal2026Article: React.FC<{ midImage: string }> = ({ midImage }) => (
  <div>
    <FaqSchema items={nepalFaq.map((f) => ({ q: f.q, a: f.a }))} />

    <Lead>
      Não havia tempestade sobre o vale quando o estrondo chegou. Moradores descreveram um ronco
      grave, parecido com trovão contínuo, e menos de dez minutos depois uma parede cinzenta de água,
      pedra e lama tomou o rio de ponta a ponta. A enchente glacial que atingiu o Nepal e o lado
      tibetano da fronteira em agosto e setembro de 2026 matou mais de 1.300 pessoas, deixou mais de
      mil desaparecidas e entrou para a história como o desastre de montanha mais letal do século no
      Himalaia.
    </Lead>

    <P>
      O evento recebeu dos próprios sobreviventes um apelido que os cientistas acabaram adotando:
      tsunami de montanha. E ele explica melhor do que qualquer definição técnica o que aconteceu ali.
      A água não subiu aos poucos, como numa cheia de rio. Ela chegou de uma vez, em forma de onda,
      vinda de um lugar que ninguém no vale conseguia ver.
    </P>

    <H2 id="o-que-aconteceu">O que aconteceu no Himalaia em 2026</H2>

    <P>
      A origem do desastre estava a mais de 5 mil metros de altitude, num trecho de alta montanha
      onde o gelo vem recuando de forma acelerada há décadas. Ali, a geleira deixou para trás um lago
      de degelo represado por uma moraina, o amontoado natural de rocha triturada e gelo enterrado que
      as geleiras empurram à sua frente enquanto avançam e abandonam quando derretem.
    </P>

    <P>
      Morainas não são barragens de engenharia. São pilhas de entulho sem estrutura interna,
      sustentadas em boa parte pelo gelo que existe entre as pedras. Quando esse gelo derrete, o
      conjunto perde coesão. Basta então um gatilho, uma queda de rocha dentro do lago, uma chuva
      excepcional ou uma infiltração que abre caminho pelo miolo da moraina, para que a barragem ceda.
    </P>

    <P>
      Foi o que ocorreu ao longo do rio Lhende Khola, no trecho de fronteira entre o Tibete e o
      Nepal. A ruptura liberou um volume de água que a equipe de geomorfologia que reconstituiu o
      episódio estimou em dezenas de milhões de metros cúbicos, descendo um vale íngreme com
      declividade suficiente para transformar a cheia numa corrida de detritos.
    </P>

    <img
      src={midImage}
      alt="Lago glacial de degelo represado por moraina instável no Himalaia, com geleira em recuo ao fundo e pesquisadores medindo o risco de enchente glacial"
      loading="lazy"
      width={944}
      height={704}
      className="w-full rounded-xl shadow-lg my-8"
    />

    <H3>A diferença entre uma cheia e uma corrida de detritos</H3>

    <P>
      Essa distinção é o coração da tragédia. Uma cheia comum é água com sedimento em suspensão. Uma
      corrida de detritos é uma mistura densa, com pedras do tamanho de carros rolando dentro dela,
      capaz de arrancar pilares de ponte e cortar aterros de estrada como se fossem areia.
    </P>

    <P>
      A densidade dessa mistura pode chegar ao dobro da densidade da água limpa, e a força de impacto
      cresce na mesma proporção. É por isso que estruturas dimensionadas para suportar enchentes
      históricas foram levadas em segundos. Pontes de aço apareceram torcidas centenas de metros
      abaixo do ponto original. Trechos inteiros de estrada simplesmente deixaram de existir.
    </P>

    <Warning title="Por que houve tão pouco tempo de fuga">
      Em vales de alta montanha, a onda pode viajar a mais de 30 km/h e não perde energia enquanto o
      terreno for inclinado. Comunidades a 20 quilômetros do lago tiveram, na prática, entre 20 e 40
      minutos entre o rompimento e a chegada da água. Sem sirene e sem rota de fuga sinalizada, esse
      tempo vira quase zero.
    </Warning>

    <H2 id="numeros">Os números do desastre</H2>

    <P>
      Os balanços consolidados até 10 de setembro de 2026 desenham a dimensão do que aconteceu. Vale
      observar que, em desastres de montanha, o número de mortos costuma subir por semanas, à medida
      que equipes alcançam povoados isolados.
    </P>

    <DataTable
      headers={['Indicador', 'Situação em 10/09/2026']}
      rows={[
        ['Mortes confirmadas', 'Mais de 1.300 no Nepal e no lado chinês da fronteira'],
        ['Desaparecidos', 'Mais de 1.000, com buscas ainda em curso'],
        ['Pessoas resgatadas', 'Cerca de 13.500 por equipes civis e militares'],
        ['Trabalhadores de hidrelétricas em risco', 'Cerca de 900 na área afetada; 121 possivelmente presos em túneis'],
        ['Infraestrutura', 'Pontes, estradas e usinas hidrelétricas destruídas ou interditadas'],
        ['Réplica sísmica registrada', 'Tremor de magnitude 5,0 em 9 de setembro, durante as buscas'],
        ['Prazo crítico da ajuda', 'Chegada do inverno himalaio, que fecha os acessos de altitude'],
      ]}
      caption="Balanço com base em relatos de agências internacionais e autoridades locais em setembro de 2026."
    />

    <P>
      O detalhe do tremor de magnitude 5,0 durante as operações de resgate merece atenção. Ele não
      causou a enchente, mas ilustra uma característica pouco compreendida do Himalaia: é uma
      cordilheira jovem e sismicamente ativa, onde o solo já vive próximo do limite de estabilidade.
      Quem quiser entender essa mecânica em profundidade encontra uma explicação didática no nosso
      material sobre{' '}
      <InternalLink to="/blog/placas-tectonicas-colombia-venezuela-maiores-terremotos">
        como as placas tectônicas geram os maiores terremotos de uma região
      </InternalLink>
      .
    </P>

    <H2 id="clima">A conexão climática: por que esses lagos estão se multiplicando</H2>

    <P>
      Enchentes glaciais não são novidade. O que mudou foi a frequência e o tamanho dos lagos
      disponíveis para romper. O Himalaia, o Karakoram e o Hindu Kush formam o que os hidrólogos
      chamam de terceiro polo, a maior reserva de água doce congelada fora das regiões polares,
      responsável por abastecer rios que sustentam cerca de dois bilhões de pessoas.
    </P>

    <P>
      Essa reserva encolhe. Levantamentos por satélite acompanhados pela{' '}
      <ExternalLink href="https://climate.nasa.gov/">NASA</ExternalLink> mostram perda contínua de
      massa de gelo na região desde os anos 2000, com aceleração nas últimas duas décadas. Cada
      quilômetro de geleira que recua libera espaço para uma nova poça de degelo, e muitas dessas
      poças crescem até virar lagos com dezenas de milhões de metros cúbicos.
    </P>

    <H3>Os três mecanismos que aumentam o perigo</H3>

    <P>
      <strong>Primeiro, o volume.</strong> Mais derretimento significa lagos maiores, e o potencial
      destrutivo cresce com o volume acumulado.
    </P>

    <P>
      <strong>Segundo, a fragilidade da barragem.</strong> As morainas dependem do gelo interno para
      se manter firmes. Verões mais quentes derretem esse gelo, e a barragem afunda, racha e passa a
      infiltrar.
    </P>

    <P>
      <strong>Terceiro, os gatilhos.</strong> O degelo do permafrost desestabiliza paredões rochosos
      inteiros. Um desabamento que cai dentro do lago produz uma onda interna capaz de passar por cima
      da moraina e iniciar a erosão que rompe tudo em minutos.
    </P>

    <PullQuote author="Síntese do consenso científico sobre criosfera de montanha">
      O risco de enchente glacial não é um evento raro que às vezes acontece. É um risco que cresce
      todo ano, no mesmo ritmo em que as geleiras perdem massa.
    </PullQuote>

    <InfoBox title="Não é só o Himalaia">
      Na mesma semana de setembro de 2026, autoridades europeias intensificaram o monitoramento no
      maciço do Monte Branco, nos Alpes, diante do degelo acelerado. Nos Andes peruanos e bolivianos,
      lagos glaciais represados por morainas já obrigaram a rebaixamentos artificiais de nível como
      medida de segurança. É um problema de cordilheira, não de país.
    </InfoBox>

    <H2 id="ciclos">Ciclos climáticos explicados: monção, El Niño e o timing do desastre</H2>

    <P>
      A estação também conta. O sul da Ásia vive sob o regime de monção de verão, que concentra entre
      junho e setembro a maior parte da chuva do ano. Nesse período, o solo de montanha fica saturado,
      os rios correm no volume máximo e qualquer aporte extra de água encontra um sistema já no
      limite.
    </P>

    <P>
      Uma enchente glacial que ocorre em janeiro se dissiparia parcialmente num leito seco. A mesma
      enchente no auge da monção encontra rios cheios, encostas encharcadas e estradas já enfraquecidas.
      O resultado é um efeito cascata: a onda inicial dispara deslizamentos secundários que represam
      novos trechos, que rompem em seguida e reiniciam o ciclo vale abaixo.
    </P>

    <P>
      Some-se a isso o cenário de 2026, com agências internacionais estimando probabilidade próxima de
      97% de um El Niño de intensidade muito forte a partir do fim de setembro. O El Niño redistribui
      calor e umidade em escala planetária, altera a posição das correntes de jato e muda o padrão de
      chuva em quase todos os continentes. Para entender como esse ciclo funciona e o que ele significa
      para o Brasil, vale ler nossa análise sobre{' '}
      <InternalLink to="/blog/la-nina-2026-impactos-brasil-previsao">
        as fases de El Niño e La Niña e seus impactos na previsão do tempo
      </InternalLink>
      .
    </P>

    <H2 id="historico">Dados históricos: as grandes enchentes glaciais registradas</H2>

    <DataTable
      headers={['Ano', 'Local', 'Mecanismo', 'Consequência principal']}
      rows={[
        ['1941', 'Huaraz, Peru', 'Avalanche caiu no lago Palcacocha', 'Cidade parcialmente destruída; milhares de mortos'],
        ['1985', 'Dig Tsho, Nepal', 'Ruptura de moraina', 'Hidrelétrica recém-inaugurada destruída'],
        ['1994', 'Luggye Tsho, Butão', 'Ruptura de lago glacial', 'Enchente devastou vale de Punakha'],
        ['2013', 'Kedarnath, Índia', 'Chuva extrema somada a lago glacial', 'Milhares de mortos em área de peregrinação'],
        ['2021', 'Chamoli, Índia', 'Colapso de rocha e gelo', 'Duas hidrelétricas destruídas; mais de 200 mortos'],
        ['2023', 'Sikkim, Índia', 'Ruptura do lago South Lhonak', 'Barragem de Teesta III rompida; grande destruição'],
        ['2026', 'Nepal e Tibete', 'Ruptura em cadeia no alto vale', 'Mais de 1.300 mortos; pior evento do século na região'],
      ]}
      caption="Série histórica de enchentes glaciais de grande impacto, do século 20 até 2026."
    />

    <P>
      A leitura da tabela é desconfortável. Os intervalos entre eventos catastróficos estão
      encurtando, e três dos sete casos listados ocorreram nos últimos cinco anos. Não se trata de
      azar acumulado: é a assinatura estatística de um sistema de montanha que perdeu estabilidade.
    </P>

    <CTA>
      Chuva forte também mata longe das montanhas. Acompanhe os alertas oficiais para a sua cidade em
      tempo real na página inicial do Clima Tempo e ative as notificações antes que a tempestade
      chegue.
    </CTA>

    <H2 id="protecao">Como se proteger de enxurradas e cheias repentinas</H2>

    <P>
      A física de uma enxurrada urbana brasileira e a de uma enchente glacial himalaia são diferentes,
      mas o comportamento humano que salva vidas é praticamente idêntico. Vale a pena decorar.
    </P>

    <H3>Antes: preparação que cabe em uma tarde</H3>

    <Checklist
      items={[
        'Cadastre seu CEP para receber alertas da Defesa Civil enviando a mensagem para o número 40199.',
        'Instale ao menos dois apps de monitoramento e ative as notificações de alerta severo.',
        'Defina um ponto de encontro familiar em terreno elevado, alcançável a pé em menos de dez minutos.',
        'Monte uma mochila de emergência: documentos em saco plástico, lanterna, carregador, água, remédios de uso contínuo e uma muda de roupa.',
        'Fotografe documentos e receitas médicas e guarde as imagens na nuvem.',
        'Combine com vizinhos quem avisa quem, com atenção especial a idosos e pessoas com mobilidade reduzida.',
      ]}
    />

    <H3>Durante: as regras que não admitem exceção</H3>

    <P>
      <strong>1. Suba, não corra rio abaixo.</strong> A água desce mais rápido que qualquer pessoa. A
      única direção segura é para cima, perpendicular ao curso d'água.
    </P>

    <P>
      <strong>2. Nunca atravesse água corrente.</strong> Trinta centímetros derrubam um adulto.
      Sessenta centímetros arrastam um carro popular. A profundidade aparente engana porque a
      correnteza esconde buracos abertos pela própria erosão.
    </P>

    <P>
      <strong>3. Estrondo é alerta.</strong> Em áreas de encosta, ruído grave e contínuo, cheiro forte
      de terra molhada e água que fica subitamente barrenta são sinais de deslizamento a montante.
      Saia imediatamente.
    </P>

    <P>
      <strong>4. Desligue energia e gás antes de sair,</strong> se houver tempo, e nunca depois que a
      água já entrou na casa.
    </P>

    <P>
      <strong>5. Não volte para buscar objetos.</strong> Ondas secundárias são comuns e frequentemente
      mais altas que a primeira.
    </P>

    <Highlight title="Dicas de conforto e saúde no pós-enchente">
      A água de enchente é contaminada. Use botas e luvas na limpeza, lave qualquer ferimento com água
      limpa e sabão e procure atendimento se houver febre ou dor muscular intensa nos dias seguintes,
      sinais possíveis de leptospirose. Descarte alimentos que tiveram contato com a água, ferva a
      água de beber por pelo menos um minuto e ventile bem os cômodos para evitar mofo, que agrava
      asma e rinite.
    </Highlight>

    <H2 id="monitoramento">Alertas governamentais e melhores apps de monitoramento climático</H2>

    <P>
      Informação oficial chega antes da água quando você sabe onde procurar. No Brasil, o{' '}
      <ExternalLink href="https://portal.inmet.gov.br/">INMET</ExternalLink> emite avisos por cores,
      do amarelo ao vermelho, com raio geográfico e janela de validade. Em 10 de setembro de 2026, por
      exemplo, 588 municípios do Sul do país entraram simultaneamente em alerta vermelho de tempestade,
      um volume de aviso que só faz sentido quando o cidadão está cadastrado para recebê-lo.
    </P>

    <P>
      O <ExternalLink href="https://www.cptec.inpe.br/">CPTEC/INPE</ExternalLink> complementa com
      modelagem numérica e imagens de satélite atualizadas ao longo do dia, úteis para acompanhar a
      formação de sistemas ainda distantes.
    </P>

    <H4>Aplicativos recomendados</H4>

    <DataTable
      headers={['Aplicativo', 'Melhor uso', 'Diferencial']}
      rows={[
        ['INMET', 'Alertas oficiais no Brasil', 'Avisos por cor com validade e área definidas'],
        ['Windy', 'Visualização de chuva e vento', 'Compara vários modelos numéricos em mapa'],
        ['Climatempo', 'Previsão local detalhada', 'Boletins em português com foco em cidades brasileiras'],
        ['AccuWeather', 'Alerta minuto a minuto', 'Notificação antecipada de início de chuva'],
        ['GDACS', 'Desastres internacionais', 'Sistema de alerta global usado por agências humanitárias'],
      ]}
      caption="Ferramentas gratuitas para acompanhar chuva, tempestade e eventos extremos."
    />

    <InfoBox title="Como ler um aviso do INMET">
      Amarelo indica potencial de dano baixo, com chuva entre 20 e 30 mm/h ou até 50 mm/dia. Laranja
      indica perigo, com chuva de 30 a 60 mm/h ou até 100 mm/dia e risco de alagamento e queda de
      árvores. Vermelho indica grande perigo, com acumulados acima desses limites e risco elevado de
      enxurrada, deslizamento e descargas elétricas intensas.
    </InfoBox>

    <H2 id="reconstrucao">A corrida contra o inverno</H2>

    <P>
      No Nepal, o cronômetro que mais preocupa não é o das buscas, e sim o do calendário. A partir de
      outubro, as passagens de altitude começam a fechar com neve, e comunidades que perderam ponte e
      estrada ficam inacessíveis por meses. Operações apoiadas pela ONU concentraram esforço em
      helicópteros, entrega de abrigo térmico e restabelecimento de trilhas provisórias antes que a
      janela climática se encerre.
    </P>

    <P>
      A reconstrução também levanta uma questão de engenharia que vale para o mundo todo: faz sentido
      reconstruir no mesmo lugar? Hidrelétricas de montanha são instaladas justamente onde há
      desnível, ou seja, exatamente na rota de uma eventual corrida de detritos. Projetos mais
      recentes têm incorporado bacias de contenção, canais de desvio e rebaixamento preventivo de
      lagos glaciais, medidas caras que se pagam no primeiro evento evitado.
    </P>

    <H2 id="licao">O que o Brasil pode aprender</H2>

    <P>
      Nenhuma geleira vai romper sobre uma cidade brasileira. Mas a estrutura do desastre nepalês é
      familiar demais: ocupação em fundo de vale, aviso que não chega a tempo, infraestrutura
      dimensionada para o passado e um clima que já não respeita a série histórica.
    </P>

    <P>
      Foi exatamente essa combinação que devastou o Rio Grande do Sul, tema que detalhamos em nossa
      cobertura sobre{' '}
      <InternalLink to="/blog/chuvas-intensas-enchentes-rio-grande-do-sul-2026">
        as chuvas intensas e enchentes no Rio Grande do Sul
      </InternalLink>
      . A lição prática é direta: sistemas de alerta funcionam, custam pouco perto do prejuízo que
      evitam e dependem de uma coisa que só o cidadão pode fazer, que é se cadastrar e levar o aviso a
      sério na primeira vez.
    </P>

    <H2 id="faq">Perguntas frequentes sobre enchentes glaciais e cheias repentinas</H2>

    <FAQ items={nepalFaq.map((f) => ({ q: f.q, a: f.a }))} />

    <P className="text-sm">
      Fontes e leituras recomendadas:{' '}
      <ExternalLink href="https://climate.nasa.gov/">NASA Climate</ExternalLink>,{' '}
      <ExternalLink href="https://www.noaa.gov/">NOAA</ExternalLink>,{' '}
      <ExternalLink href="https://www.unep.org/pt-br">ONU Meio Ambiente</ExternalLink> e{' '}
      <ExternalLink href="https://portal.inmet.gov.br/">INMET</ExternalLink>.
    </P>
  </div>
);

/* ==========================================================================
   ARTIGO 2: Quatro ciclones consecutivos nas Filipinas — 2026
   ========================================================================== */

const filipinasFaq = [
  {
    q: 'O que aconteceu nas Filipinas em setembro de 2026?',
    a: 'O arquipélago foi atingido em sequência por quatro ciclones tropicais, batizados localmente de Luis, Maymay, Neneng e Pilandok, cujos efeitos se somaram a uma monção de sudoeste intensificada. Relatórios oficiais de assistência humanitária publicados em 10 de setembro de 2026 já contabilizavam impacto combinado sobre milhões de pessoas, com inundações persistentes, deslizamentos, evacuações em massa e perdas agrícolas severas.',
  },
  {
    q: 'Qual a diferença entre tufão, furacão e ciclone?',
    a: 'São o mesmo fenômeno com nomes regionais. No noroeste do Pacífico, onde ficam as Filipinas, o Japão e a China, chama-se tufão. No Atlântico Norte e no nordeste do Pacífico, chama-se furacão. No Índico e no sul do Pacífico, chama-se ciclone tropical. Em todos os casos, trata-se de um sistema de baixa pressão que se alimenta do calor do oceano e gira em torno de um centro relativamente calmo, o olho.',
  },
  {
    q: 'Por que as Filipinas são o país mais atingido por tufões no mundo?',
    a: 'O arquipélago fica no caminho preferencial das tempestades que se formam sobre as águas quentes do Pacífico oeste, a região oceânica mais favorável à ciclogênese tropical do planeta. Em média, cerca de 20 ciclones entram na área de responsabilidade filipina a cada ano, e por volta de oito a nove tocam o solo. Some-se a isso um relevo montanhoso que potencializa a chuva orográfica e uma população costeira numerosa, e o resultado é a maior exposição recorrente do mundo.',
  },
  {
    q: 'O que é a monção de sudoeste e por que ela agrava os tufões?',
    a: 'A monção de sudoeste, chamada habagat nas Filipinas, é o fluxo de ar úmido que sopra do Oceano Índico e do Mar do Sul da China entre junho e setembro. Quando um tufão passa perto, ele funciona como uma bomba que puxa esse ar úmido para dentro do arquipélago. O resultado é chuva torrencial mesmo em ilhas distantes do centro da tempestade, o que explica inundações graves em locais que nunca chegaram a receber os ventos máximos.',
  },
  {
    q: 'O que é o efeito Fujiwhara e ele ocorreu neste episódio?',
    a: 'O efeito Fujiwhara acontece quando dois ciclones se aproximam o suficiente para orbitar um em torno do outro, alterando as trajetórias previstas e, às vezes, fundindo-se. Quando há vários sistemas ativos numa mesma bacia, como no episódio filipino, a interação entre eles aumenta a incerteza dos modelos de previsão e pode fazer uma tempestade estacionar sobre a mesma região por muito mais tempo, multiplicando o acumulado de chuva.',
  },
  {
    q: 'Tufões nas Filipinas afetam o tempo no Brasil?',
    a: 'Não diretamente. A distância e a separação entre hemisférios impedem qualquer efeito perceptível na previsão do tempo brasileira. O que conecta os dois lados do planeta é o estado do Oceano Pacífico: uma fase forte de El Niño ou La Niña altera simultaneamente a atividade de tufões no Pacífico oeste e o regime de chuva no Brasil, ainda que por caminhos atmosféricos distintos.',
  },
  {
    q: 'Como se proteger durante um ciclone tropical?',
    a: 'Evacue assim que a ordem oficial for dada, sem esperar ver o vento aumentar. Se permanecer, fique no cômodo mais interno e sem janelas, longe de vidros, e mantenha rádio a pilha ligado. Nunca saia durante a passagem do olho da tempestade: a calma é temporária e o vento retorna em minutos pelo lado oposto, com a mesma intensidade. Depois, cuidado com fios caídos e água contaminada.',
  },
  {
    q: 'Quais aplicativos acompanham tufões e ciclones em tempo real?',
    a: 'Windy mostra trajetórias, pressão central e vento de vários modelos de forma visual e é o favorito de quem acompanha tempestades. Zoom Earth exibe imagens de satélite quase em tempo real. Os boletins da NOAA e do Joint Typhoon Warning Center são a referência técnica internacional, e o PAGASA é o serviço oficial das Filipinas. No Brasil, INMET, Climatempo e AccuWeather cobrem tempestades e ciclones extratropicais que afetam o litoral e o Sul do país.',
  },
];

export const CiclonesFilipinas2026Article: React.FC<{ midImage: string }> = ({ midImage }) => (
  <div>
    <FaqSchema items={filipinasFaq.map((f) => ({ q: f.q, a: f.a }))} />

    <Lead>
      Quatro ciclones tropicais em sequência, um atrás do outro, sobre o mesmo arquipélago e no mesmo
      mês. Luis, Maymay, Neneng e Pilandok transformaram o setembro filipino de 2026 num dos episódios
      mais brutais de acumulação de desastres já registrados no Pacífico oeste, com milhões de pessoas
      afetadas, cidades submersas por semanas e uma lição clara sobre o que acontece quando não há
      intervalo para respirar entre uma tempestade e a seguinte.
    </Lead>

    <P>
      Não foi um tufão excepcionalmente forte que causou a catástrofe. Foi a soma. E é justamente esse
      padrão, o de eventos encadeados sobre um território já saturado, que meteorologistas apontam
      como a face mais perigosa do clima que estamos construindo.
    </P>

    <H2 id="o-que-aconteceu">A sequência que não deu trégua</H2>

    <P>
      A área de responsabilidade filipina, o retângulo oceânico monitorado pelo serviço meteorológico
      nacional, recebe em média cerca de 20 ciclones por ano. Concentrar quatro deles numa janela
      curta, sobrepostos a uma monção de sudoeste já intensificada, produz um efeito que os relatórios
      humanitários passaram a tratar como um único desastre combinado, e não como quatro eventos
      separados.
    </P>

    <P>
      A lógica é simples e implacável. O primeiro sistema encharca o solo. O segundo encontra encostas
      saturadas, rios cheios e reservatórios no limite, e a mesma quantidade de chuva provoca o dobro
      de estrago. O terceiro cai sobre uma população já deslocada, em abrigos improvisados, com
      estradas rompidas. O quarto atinge um sistema de resposta exausto.
    </P>

    <Warning title="O conceito de desastre composto">
      Proteção civil chama de desastre composto a situação em que dois ou mais eventos se sobrepõem no
      tempo e no espaço antes que a recuperação do primeiro tenha começado. O dano não soma, ele
      multiplica. Foi exatamente o que ocorreu nas Filipinas em setembro de 2026.
    </Warning>

    <img
      src={midImage}
      alt="Imagem de satélite de tufão com olho definido avançando sobre o arquipélago das Filipinas no Oceano Pacífico"
      loading="lazy"
      width={944}
      height={704}
      className="w-full rounded-xl shadow-lg my-8"
    />

    <H2 id="como-funciona">Como nasce um tufão: a física explicada sem jargão</H2>

    <P>
      Um ciclone tropical é, no fundo, uma máquina térmica. Ele converte calor armazenado no oceano em
      energia de movimento. Para ligar essa máquina, algumas condições precisam coincidir.
    </P>

    <H3>Os ingredientes obrigatórios</H3>

    <P>
      <strong>Água quente e profunda.</strong> A superfície do mar precisa estar acima de
      aproximadamente 26,5 °C, e esse calor precisa se estender por dezenas de metros de profundidade.
      Uma camada quente fina se esgota rápido, porque o próprio ciclone revolve a água e traz frio da
      profundidade.
    </P>

    <P>
      <strong>Umidade na atmosfera média.</strong> Ar seco entrando no sistema evapora as nuvens de
      dentro para fora e enfraquece a tempestade.
    </P>

    <P>
      <strong>Pouco cisalhamento do vento.</strong> Se o vento em altitude sopra em direção muito
      diferente do vento na superfície, a estrutura vertical do ciclone se desmancha antes de se
      organizar.
    </P>

    <P>
      <strong>Distância do equador.</strong> É preciso a rotação da Terra, o efeito Coriolis, para
      colocar o sistema para girar. Por isso praticamente não se formam ciclones tropicais em cima da
      linha do equador.
    </P>

    <H4>Por que o Pacífico oeste é o berço mais produtivo do mundo</H4>

    <P>
      A região a leste das Filipinas concentra a maior piscina de água quente do planeta, uma extensão
      oceânica onde a temperatura superficial se mantém elevada o ano inteiro e a camada quente é
      espessa. É combustível praticamente ilimitado. Nenhuma outra bacia produz tantas tempestades de
      categoria elevada, e é por isso que os únicos supertufões com ventos sustentados acima de 300
      km/h já medidos com confiança nasceram por ali.
    </P>

    <PullQuote author="Princípio básico da meteorologia tropical">
      Um ciclone não escolhe onde nasce. Ele nasce onde o oceano guarda calor suficiente para
      sustentá-lo. Aquecer o mar é ampliar a área de maternidade dessas tempestades.
    </PullQuote>

    <H2 id="escalas">Escalas de intensidade: entendendo os números</H2>

    <DataTable
      headers={['Categoria', 'Vento sustentado', 'Danos esperados']}
      rows={[
        ['Depressão tropical', 'Até 62 km/h', 'Chuva e alagamentos localizados'],
        ['Tempestade tropical', '63 a 118 km/h', 'Queda de árvores, telhados leves, enchentes'],
        ['Tufão categoria 1-2', '119 a 177 km/h', 'Danos estruturais moderados, apagões amplos'],
        ['Tufão categoria 3-4', '178 a 251 km/h', 'Destruição severa, maré de tempestade perigosa'],
        ['Supertufão / categoria 5', 'Acima de 252 km/h', 'Devastação catastrófica em larga escala'],
      ]}
      caption="Equivalência aproximada entre classificação regional e a escala Saffir-Simpson."
    />

    <Highlight title="O vento não é o que mais mata">
      Estatísticas de mortalidade em ciclones tropicais mostram que a maioria das vítimas morre por
      água, não por vento. Maré de tempestade, enchente e deslizamento respondem pela maior parte dos
      óbitos. Foi assim no tufão Haiyan em 2013, quando a elevação do mar em Tacloban ultrapassou
      cinco metros, e foi assim de novo em 2026, quando as inundações prolongadas superaram em impacto
      o dano direto de vento.
    </Highlight>

    <H2 id="historico">Dados históricos: as tempestades que marcaram as Filipinas</H2>

    <DataTable
      headers={['Ano', 'Tempestade', 'Impacto principal']}
      rows={[
        ['1991', 'Thelma (Uring)', 'Enchente repentina em Ormoc; mais de 5 mil mortos'],
        ['2011', 'Washi (Sendong)', 'Cheia noturna em Mindanao; mais de 1.200 mortos'],
        ['2013', 'Haiyan (Yolanda)', 'Maré de tempestade histórica; mais de 6 mil mortos'],
        ['2020', 'Goni (Rolly)', 'Um dos landfalls mais intensos já medidos no mundo'],
        ['2021', 'Rai (Odette)', 'Destruição ampla em Visayas e Mindanao'],
        ['2026', 'Luis, Maymay, Neneng e Pilandok', 'Quatro sistemas em sequência com monção intensificada'],
      ]}
      caption="Comparação histórica dos eventos ciclônicos mais impactantes do arquipélago."
    />

    <P>
      O padrão que salta da série histórica não é o aumento do número total de tempestades, que
      permanece relativamente estável, e sim o aumento da proporção de sistemas que atingem
      intensidade elevada e a tendência de intensificação rápida, quando um ciclone ganha mais de 55
      km/h de vento em 24 horas. Esse comportamento reduz drasticamente o tempo disponível para
      evacuar e é hoje o maior desafio operacional dos centros de alerta.
    </P>

    <P>
      A mesma discussão vale para o Atlântico, onde o aquecimento das águas tem produzido temporadas
      mais explosivas. Analisamos isso em detalhe no artigo sobre{' '}
      <InternalLink to="/blog/temporada-furacoes-atlantico-2026">
        a temporada de furacões do Atlântico em 2026
      </InternalLink>
      , e mostramos o que acontece quando vários sistemas convivem numa mesma bacia em{' '}
      <InternalLink to="/blog/tres-furacoes-simultaneos-oceano-pacifico-2026">
        três furacões simultâneos no Pacífico
      </InternalLink>
      .
    </P>

    <H2 id="ciclos">Ciclos climáticos explicados: El Niño, La Niña e a temporada de tufões</H2>

    <P>
      A atividade ciclônica do Pacífico oeste responde com sensibilidade ao estado do oceano
      equatorial. Em anos de El Niño, a água mais quente se desloca para o centro e o leste do
      Pacífico, e os ciclones tendem a se formar mais longe das Filipinas. Isso costuma significar
      menos tempestades tocando o solo filipino, porém mais tempo de oceano aberto para que cada uma
      delas se fortaleça antes de chegar a algum lugar.
    </P>

    <P>
      Em anos de La Niña, a piscina quente se concentra no oeste, e a formação acontece mais perto do
      arquipélago. As tempestades chegam mais cedo, com menos aviso, ainda que muitas vezes menos
      intensas.
    </P>

    <InfoBox title="Nem El Niño nem La Niña criam tempestades">
      Esses ciclos não geram nem impedem ciclones. Eles reorganizam onde e quando as condições
      favoráveis aparecem. Por isso, um ano de El Niño forte pode ser calmo para as Filipinas e
      devastador para outra região, e a leitura correta exige olhar a bacia inteira, não apenas um
      país.
    </InfoBox>

    <P>
      Com projeções indicando El Niño de intensidade muito forte a partir do fim de 2026, os centros
      de previsão passaram a alertar para uma segunda metade de temporada com menos sistemas, porém
      com maior probabilidade de que os poucos formados atinjam categorias elevadas.
    </P>

    <CTA>
      Quer saber se a chuva forte prevista para hoje chega à sua cidade? Consulte a previsão horária e
      os avisos oficiais no Clima Tempo e prepare-se antes do primeiro trovão.
    </CTA>

    <H2 id="protecao">Como se proteger de um ciclone tropical: guia prático</H2>

    <H3>72 horas antes</H3>

    <Checklist
      items={[
        'Acompanhe os boletins oficiais duas vezes ao dia e confirme a rota prevista, não apenas a categoria.',
        'Abasteça o carro e o tanque de água; a falta de energia interrompe bombas e postos.',
        'Reforce ou remova o que pode virar projétil: telhas soltas, antenas, vasos, placas e móveis de área externa.',
        'Carregue todos os dispositivos e tenha um rádio a pilha com pilhas novas.',
        'Separe documentos em embalagem impermeável e faça cópias digitais.',
        'Se estiver em zona costeira baixa, planeje a saída antes que a ordem seja emitida.',
      ]}
    />

    <H3>Durante a passagem</H3>

    <P>
      Permaneça no cômodo mais interno, sem janelas, preferencialmente com paredes de alvenaria dos
      dois lados. Mantenha calçado fechado nos pés, mesmo em casa, por causa de vidro e destroços.
      Feche o registro de gás.
    </P>

    <P>
      A regra mais violada e mais letal envolve o olho da tempestade. Quando o centro passa por cima,
      o vento cessa quase por completo e o céu pode até abrir. Esse intervalo dura de poucos minutos a
      cerca de uma hora e é seguido pelo retorno do vento na direção oposta, com força total e sem
      transição. Muitas mortes em ciclones ocorrem exatamente nesse momento, com pessoas na rua
      avaliando os danos.
    </P>

    <H3>Depois</H3>

    <Checklist
      items={[
        'Só retorne quando as autoridades autorizarem; enchentes secundárias e deslizamentos ocorrem dias depois.',
        'Trate todo fio caído como energizado e mantenha distância de poças próximas a postes.',
        'Não beba água de torneira antes da confirmação oficial de potabilidade; ferva por um minuto se houver dúvida.',
        'Descarte alimentos refrigerados após quatro horas sem energia.',
        'Registre danos com fotos antes de limpar, para seguro e assistência.',
        'Fique atento a sinais de estresse pós-traumático em crianças e idosos e procure apoio.',
      ]}
    />

    <Highlight title="Dicas de conforto térmico no calor abafado pós-tempestade">
      Depois que a tempestade passa, o ar fica saturado de umidade e a sensação térmica dispara. Beba
      água em pequenos goles ao longo do dia, prefira roupas de algodão claras e folgadas, ventile a
      casa nas primeiras e nas últimas horas do dia e evite esforço físico entre 10h e 16h. Se não
      houver energia, panos úmidos no pescoço e nos pulsos ajudam mais do que ventilador desligado, e
      atenção redobrada com bebês, idosos e pessoas com doenças cardíacas.
    </Highlight>

    <H2 id="alertas">Alertas governamentais e monitoramento em tempo real</H2>

    <P>
      Nas Filipinas, o serviço nacional emite sinais numerados de aviso de vento, de 1 a 5, que
      indicam a intensidade esperada e o prazo até a chegada. É um sistema simples e eficaz,
      compreendido pela população, e um dos motivos pelos quais a mortalidade por tufão caiu no país
      apesar do aumento da exposição.
    </P>

    <P>
      Internacionalmente, os boletins da{' '}
      <ExternalLink href="https://www.noaa.gov/">NOAA</ExternalLink> e as imagens de satélite da{' '}
      <ExternalLink href="https://www.nasa.gov/">NASA</ExternalLink> permitem acompanhar a estrutura
      da tempestade quase em tempo real. No Brasil, os avisos do{' '}
      <ExternalLink href="https://portal.inmet.gov.br/">INMET</ExternalLink> e a modelagem do{' '}
      <ExternalLink href="https://www.cptec.inpe.br/">CPTEC/INPE</ExternalLink> cumprem esse papel para
      ciclones extratropicais e sistemas frontais que atingem o litoral e a Região Sul.
    </P>

    <DataTable
      headers={['Ferramenta', 'Para que serve', 'Observação']}
      rows={[
        ['Windy', 'Trajetória, vento e pressão em mapa', 'Permite comparar modelos ECMWF e GFS'],
        ['Zoom Earth', 'Satélite quase em tempo real', 'Ótimo para ver a formação do olho'],
        ['NOAA / JTWC', 'Boletins técnicos oficiais', 'Referência internacional de trajetória'],
        ['INMET', 'Alertas oficiais no Brasil', 'Sistema de avisos por cores'],
        ['Climatempo e AccuWeather', 'Previsão local e notificações', 'Bom para uso diário no celular'],
      ]}
      caption="Fontes confiáveis para acompanhar ciclones tropicais e tempestades severas."
    />

    <H2 id="futuro">O que esperar dos próximos anos</H2>

    <P>
      A projeção consensual não é de mais tempestades, e sim de tempestades piores nos aspectos que
      mais causam morte: chuva mais intensa por evento, intensificação mais rápida, maré de tempestade
      empurrada por um nível do mar mais alto e sistemas que se deslocam mais devagar, permanecendo
      tempo demais sobre a mesma área.
    </P>

    <P>
      Esse último ponto é o mais subestimado. Um ciclone que anda a 8 km/h em vez de 25 km/h despeja
      três vezes mais chuva sobre a mesma cidade. Foi assim que tempestades relativamente modestas em
      categoria produziram os maiores acumulados de chuva já registrados em vários países na última
      década.
    </P>

    <P>
      A adaptação, portanto, precisa mudar de foco. Construir para resistir a vento é necessário, mas
      insuficiente. O investimento decisivo está em drenagem urbana, mapeamento de áreas de risco,
      alerta antecipado com linguagem clara e, sobretudo, em uma população que sabe o que fazer nos
      primeiros dez minutos depois do aviso.
    </P>

    <H2 id="faq">Perguntas frequentes sobre tufões, ciclones e furacões</H2>

    <FAQ items={filipinasFaq.map((f) => ({ q: f.q, a: f.a }))} />

    <P className="text-sm">
      Fontes e leituras recomendadas:{' '}
      <ExternalLink href="https://www.noaa.gov/">NOAA</ExternalLink>,{' '}
      <ExternalLink href="https://www.nasa.gov/">NASA</ExternalLink>,{' '}
      <ExternalLink href="https://www.unep.org/pt-br">ONU Meio Ambiente</ExternalLink>,{' '}
      <ExternalLink href="https://portal.inmet.gov.br/">INMET</ExternalLink> e{' '}
      <ExternalLink href="https://www.cptec.inpe.br/">CPTEC/INPE</ExternalLink>.
    </P>
  </div>
);
