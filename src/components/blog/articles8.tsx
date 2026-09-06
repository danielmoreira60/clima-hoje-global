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
   ARTIGO 1: Avalanche no Nepal — setembro de 2026
   ========================================================================== */

const avalancheFaq = [
  {
    q: 'O que causou a avalanche no Nepal em 2026?',
    a: 'A combinação clássica de três ingredientes: uma nevasca fora de época que depositou uma camada espessa de neve nova em poucas horas, vento forte de altitude que empilhou essa neve nas encostas a sotavento formando placas instáveis e uma camada fraca enterrada logo abaixo. Quando a carga sobre essa camada fraca superou a resistência dela, a placa se rompeu e deslizou. Praticamente toda avalanche de placa segue esse roteiro.',
  },
  {
    q: 'Qual é a época mais perigosa para avalanches no Himalaia?',
    a: 'Há dois picos. O primeiro ocorre no fim da monção e no começo do outono, quando restos de sistemas tropicais vindos da Baía de Bengala despejam neve pesada em altitude em curto intervalo. O segundo vai do fim do inverno à primavera, quando as perturbações ocidentais trazem nevascas seguidas de aquecimento rápido, que desestabiliza o manto de neve. Setembro e outubro concentram acidentes porque é também a alta temporada de expedições.',
  },
  {
    q: 'Quanto tempo uma pessoa soterrada por avalanche sobrevive?',
    a: 'As estatísticas internacionais de resgate mostram que cerca de nove em cada dez vítimas totalmente soterradas sobrevivem se forem retiradas nos primeiros 15 minutos. A taxa cai de forma acentuada depois disso, ficando em torno de 30% após 35 minutos, porque o ar aprisionado se esgota e a hipotermia avança. Por isso o resgate entre companheiros, feito no local, salva muito mais vidas do que o resgate externo, que quase sempre chega tarde demais.',
  },
  {
    q: 'Existe previsão do tempo confiável para o Himalaia?',
    a: 'Sim, e ela melhorou muito. Modelos globais como o do ECMWF e o GFS, acessados por aplicativos como Windy, oferecem previsão de vento, precipitação e altura de neve em pontos específicos de montanha com bom desempenho até três ou quatro dias. Acima disso a incerteza cresce rápido em terreno complexo. Expedições sérias combinam modelo, boletim oficial e observação direta do manto de neve.',
  },
  {
    q: 'O que fazer se você for pego por uma avalanche?',
    a: 'Tente sair lateralmente da trajetória, largue bastões e mochilas pesadas se estiver com elas nas mãos, agarre-se a qualquer objeto fixo e, quando a neve começar a desacelerar, faça movimentos de natação para tentar ficar perto da superfície e leve as mãos ao rosto para criar uma bolsa de ar. Assim que a massa parar, ela endurece como concreto: essa bolsa de ar é o que compra minutos preciosos.',
  },
  {
    q: 'As mudanças climáticas estão aumentando o risco de avalanches?',
    a: 'O aquecimento altera o regime de neve de forma desigual. Em altitudes menores, há menos neve e mais chuva, o que reduz avalanches secas. Em grandes altitudes, tempestades mais carregadas de umidade produzem nevascas mais intensas em menos tempo e ciclos de aquecimento e congelamento mais frequentes, o que favorece avalanches úmidas e desprendimentos de gelo. Somando-se o degelo do permafrost, que solta rochas antes travadas, o resultado é um terreno de alta montanha mais instável.',
  },
  {
    q: 'Turistas comuns correm risco de avalanche no Nepal?',
    a: 'Sim, e esse é o ponto mais subestimado. Boa parte dos acidentes com estrangeiros no Nepal não envolve alpinistas técnicos, e sim caminhantes em trilhas populares surpreendidos por nevascas em passagens altas. Trilhas de circuito que cruzam colos acima de 5.000 metros ficam expostas quando o tempo vira, e a decisão de atravessar ou esperar costuma ser tomada sem informação meteorológica adequada.',
  },
  {
    q: 'Quais aplicativos ajudam a monitorar risco em alta montanha?',
    a: 'Windy é a referência para comparar modelos de vento, neve e altura de camada em pontos precisos. AccuWeather e Climatempo funcionam bem para acompanhar sistemas em escala regional e alertas. Para quem viaja, vale ainda um aplicativo de rastreamento por satélite com botão de emergência, já que a cobertura de telefonia some acima dos vales principais.',
  },
];

export const AvalancheNepal2026Article: React.FC<{ midImage: string }> = ({ midImage }) => (
  <>
    <FaqSchema items={avalancheFaq} />

    <Lead>
      Uma parede de neve descendo a mais de 100 km/h não faz barulho de aviso: quando o estrondo
      chega, ela já está em cima. A avalanche registrada no Himalaia nepalês em setembro de 2026,
      depois de uma nevasca fora de época, reacendeu a pergunta que volta a cada temporada de
      expedições — dá para prever, e dá para se proteger?
    </Lead>

    <P>
      A resposta curta é sim para a segunda pergunta e "parcialmente" para a primeira. A avalanche
      é um dos poucos desastres naturais em que a janela entre a decisão errada e a tragédia é
      medida em minutos, mas também é um dos poucos em que a preparação individual muda o
      desfecho de forma comprovada. Este guia explica o que aconteceu, por que o Nepal concentra
      esse tipo de acidente, o que a meteorologia consegue antecipar e como se proteger de
      avalanche na prática — do alpinista técnico ao caminhante que só quer atravessar um colo
      alto com segurança.
    </P>

    <H2 id="o-que-aconteceu">O que aconteceu no Himalaia nepalês</H2>

    <P>
      O episódio seguiu um padrão que os guias locais conhecem bem e que se repete no encerramento
      da monção. Um sistema de baixa pressão carregado de umidade vindo da Baía de Bengala perdeu
      força sobre o norte da Índia, mas manteve energia suficiente para empurrar ar úmido contra a
      barreira do Himalaia. Ao subir a encosta, esse ar esfriou e descarregou neve pesada acima dos
      4.000 metros, em pleno período de alta temporada de escaladas e trekking.
    </P>

    <P>
      A nevasca durou pouco mais de um dia. Foi o bastante. Neve nova acumulada em grande volume e
      em curto intervalo é o gatilho número um de avalanches em qualquer cordilheira do mundo,
      porque o manto não tem tempo de se consolidar. Somou-se o vento de altitude, que retirou neve
      das cristas expostas e a depositou nas encostas abrigadas, criando as chamadas placas de
      vento — camadas duras, coesas e apoiadas sobre material frágil.
    </P>

    <P>
      Quando a temperatura subiu no dia seguinte à passagem do sistema, a coesão dessa estrutura
      cedeu. Encostas com inclinação entre 30 e 45 graus, a faixa crítica, liberaram massas de neve
      que desceram canais naturais até atingir áreas de acampamento e trechos de trilha. Equipes de
      resgate nepalesas, com helicópteros e sondas, trabalharam em condições de visibilidade
      reduzida — o mesmo mau tempo que provoca a avalanche costuma impedir o socorro.
    </P>

    <Highlight title="O que a meteorologia já sabia antes">
      Sistemas de monção tardia que se aproximam do Himalaia são identificados com três a cinco
      dias de antecedência pelos modelos globais. O que os modelos não fazem é apontar qual
      encosta vai romper. A previsão diz "vai nevar muito"; a leitura do manto de neve, feita no
      terreno, é que diz "não passe por aqui hoje".
    </Highlight>

    <img
      src={midImage}
      alt="Equipe de resgate nepalesa sondando a neve com varas de busca após avalanche no Himalaia, com helicóptero ao fundo em meio à nevasca"
      loading="lazy"
      width={944}
      height={704}
      className="w-full rounded-xl shadow-lg my-10"
    />

    <H2 id="como-nasce">Como nasce uma avalanche: a física em linguagem simples</H2>

    <P>
      Uma avalanche é, na essência, um problema de equilíbrio entre carga e resistência. A neve
      acumulada em uma encosta exerce força para baixo. As ligações entre os cristais de gelo
      seguram essa massa no lugar. Enquanto a resistência ganha, nada acontece. No instante em que
      a carga vence, a massa desliza.
    </P>

    <H3>As camadas escondidas</H3>

    <P>
      O manto de neve não é um bloco uniforme. Ele é um sanduíche formado ao longo da temporada,
      uma nevasca de cada vez. Entre duas camadas resistentes pode existir uma camada fraca:
      cristais facetados, geada de profundidade ou uma crosta de gelo lisa formada em um dia de
      sol. Essa camada fraca é o rolamento sobre o qual todo o resto vai escorregar.
    </P>

    <P>
      O detalhe cruel é que a camada fraca fica invisível. Da superfície, a encosta parece
      perfeita. Só um poço de teste, cavado no local, revela a estrutura interna. É por isso que
      profissionais de montanha carregam pá não apenas para resgatar, mas para investigar.
    </P>

    <H3>Os tipos de avalanche</H3>

    <DataTable
      headers={['Tipo', 'Como se comporta', 'Quando é mais comum', 'Risco principal']}
      rows={[
        ['Placa seca', 'Bloco coeso se destaca por uma fratura linear e desliza inteiro', 'Durante ou até 48h após nevasca com vento', 'Responsável pela maioria das mortes de montanhistas'],
        ['Neve solta seca', 'Começa em um ponto e se abre em leque', 'Neve muito fria e sem coesão, em encostas íngremes', 'Arrasta a vítima para terreno perigoso'],
        ['Avalanche úmida', 'Massa pesada e lenta, com aspecto de concreto', 'Aquecimento rápido, chuva sobre neve, primavera', 'Grande poder destrutivo sobre estruturas'],
        ['Avalanche de gelo (serac)', 'Desabamento de blocos de gelo de geleira', 'Imprevisível, a qualquer hora', 'Não dá aviso; só evitável pela rota escolhida'],
        ['Avalanche de pó', 'Nuvem de neve pulverizada em altíssima velocidade', 'Grandes desprendimentos em paredes altas', 'Onda de pressão atinge além do trajeto da neve'],
      ]}
      caption="Tipos de avalanche e os cenários meteorológicos que os favorecem"
    />

    <H3>Os quatro fatores que decidem tudo</H3>

    <P>
      Guias e serviços de previsão de avalanche do mundo inteiro trabalham com quatro variáveis
      combinadas. Nenhuma sozinha determina o risco; é o cruzamento delas que importa.
    </P>

    <Checklist
      items={[
        'Terreno: inclinação entre 30 e 45 graus é a faixa mais perigosa. Abaixo de 25 graus a neve raramente desliza; acima de 50 ela escorre continuamente sem acumular.',
        'Manto de neve: presença de camada fraca enterrada, espessura da neve nova e grau de consolidação.',
        'Meteorologia: volume e velocidade da nevasca, direção e intensidade do vento, variação de temperatura nas 24 horas seguintes.',
        'Fator humano: pressa, cansaço, pressão do grupo e a vontade de chegar ao cume — presente na maioria dos acidentes investigados.',
      ]}
    />

    <PullQuote author="Princípio básico ensinado em cursos de segurança em avalanche">
      A montanha não escolhe vítimas. Quem escolhe a encosta, o horário e a rota é sempre a pessoa.
    </PullQuote>

    <H2 id="por-que-nepal">Por que o Nepal concentra tantos acidentes</H2>

    <P>
      O Nepal reúne, em um território menor que o estado do Acre, oito das quatorze montanhas com
      mais de 8.000 metros do planeta. Essa geografia extrema encontra um regime de tempo peculiar,
      e o resultado é uma combinação difícil de repetir em qualquer outro lugar.
    </P>

    <H3>Duas estações, dois perigos diferentes</H3>

    <H4>Monção de verão (junho a setembro)</H4>

    <P>
      A monção despeja umidade em quantidades gigantescas sobre a vertente sul do Himalaia. Nos
      vales, isso significa chuva e deslizamentos de terra. Em altitude, significa neve. O
      encerramento da monção, entre o fim de setembro e outubro, é justamente quando começa a alta
      temporada de expedições — e é quando um sistema tardio pode surpreender centenas de pessoas
      já posicionadas em altitude.
    </P>

    <H4>Perturbações ocidentais (dezembro a abril)</H4>

    <P>
      No inverno e na primavera, o Himalaia recebe sistemas vindos do Mediterrâneo e do mar
      Cáspio, que atravessam a Ásia Central. Eles trazem nevascas mais secas, seguidas de dias de
      sol forte. Esse ciclo de nevasca e aquecimento é a receita para a formação de placas
      instáveis e para avalanches úmidas de primavera.
    </P>

    <InfoBox title="A altitude muda a matemática do resgate">
      Acima dos 5.500 metros, o ar contém cerca de metade do oxigênio disponível ao nível do mar.
      Isso reduz a capacidade física de quem escava, encurta o tempo de sobrevivência de quem está
      soterrado e limita a operação de helicópteros, que perdem sustentação no ar rarefeito. Um
      resgate que levaria 20 minutos nos Alpes pode levar horas no Himalaia.
    </InfoBox>

    <H3>Dados históricos de avalanches no Nepal</H3>

    <P>
      A série histórica ajuda a entender que o evento de 2026 não é um ponto fora da curva, e sim
      mais um capítulo de um padrão conhecido.
    </P>

    <DataTable
      headers={['Ano', 'Local', 'Gatilho meteorológico ou geológico', 'Consequência registrada']}
      rows={[
        ['2012', 'Manaslu, acampamento 3', 'Desprendimento de serac sobre área de acampamento', 'Um dos piores acidentes já registrados na montanha'],
        ['2014', 'Cascata de gelo do Everest', 'Colapso de bloco de gelo na rota de aproximação', 'Suspensão da temporada de escalada naquele ano'],
        ['2014', 'Circuito do Annapurna e Dhaulagiri', 'Nevasca associada aos restos de um ciclone tropical', 'Maior desastre com trekkers da história do país'],
        ['2015', 'Acampamento-base do Everest', 'Avalanche disparada pelo terremoto de magnitude 7,8', 'Destruição de parte do acampamento-base'],
        ['2026', 'Alto Himalaia nepalês', 'Nevasca fora de época no encerramento da monção', 'Operações de busca em condições de visibilidade crítica'],
      ]}
      caption="Episódios de referência que ajudam a entender o padrão sazonal de avalanches no Nepal"
    />

    <P>
      O caso de 2014 no Annapurna é o mais instrutivo para o público geral: a maioria das vítimas
      não era formada por alpinistas de elite, e sim por caminhantes em uma trilha comercial
      popular, pegos por uma nevasca associada aos restos de um ciclone tropical enquanto
      atravessavam um colo de grande altitude. Foi um desastre meteorológico antes de ser um
      desastre de montanha. Quem entende de <InternalLink to="/blog/temporada-furacoes-atlantico-2026">como
      sistemas tropicais se comportam</InternalLink> entende metade do problema.
    </P>

    <CTA>
      Vai encarar altitude? Antes de sair, confira a previsão detalhada dos próximos dias em nossa
      página de <InternalLink to="/15-dias">previsão de 15 dias</InternalLink> e acompanhe as
      condições em tempo real em <InternalLink to="/agora">Tempo Agora</InternalLink>.
    </CTA>

    <H2 id="previsao">O que a previsão do tempo consegue e não consegue antecipar</H2>

    <P>
      Existe uma confusão comum entre previsão meteorológica e previsão de avalanche. São coisas
      diferentes, produzidas por métodos diferentes.
    </P>

    <H3>O que o modelo entrega</H3>

    <P>
      Modelos globais de previsão numérica resolvem as equações da atmosfera em uma grade
      tridimensional. Eles conseguem antecipar, com bom desempenho de dois a quatro dias, o volume
      de precipitação, a altitude da isoterma de zero grau, a direção e a velocidade do vento em
      diferentes níveis e a variação de temperatura. Em terreno de montanha, porém, a resolução da
      grade é grosseira demais para representar um vale estreito ou uma encosta específica.
    </P>

    <H3>O que só a observação local entrega</H3>

    <P>
      A previsão de avalanche propriamente dita cruza os dados do modelo com observações de campo:
      poços de teste, testes de compressão, histórico das nevascas anteriores da temporada e
      relatos de atividade recente. É um trabalho artesanal, feito por pessoas com treinamento
      específico, e nenhum aplicativo substitui isso.
    </P>

    <Warning title="Sinais de perigo que dispensam qualquer aplicativo">
      Se você observar qualquer um destes sinais, o risco está alto agora: rachaduras que se abrem
      na neve à sua frente ao pisar; som oco e profundo, como um "whumpf", vindo de baixo dos pés;
      avalanches recentes visíveis em encostas de mesma orientação e inclinação; mais de 30
      centímetros de neve nova nas últimas 24 horas; vento forte carregando neve das cristas. Um só
      desses sinais já basta para mudar a rota.
    </Warning>

    <H3>Fontes oficiais e ferramentas úteis</H3>

    <P>
      Para o Himalaia, o serviço meteorológico nepalês concentra os avisos oficiais. Para entender
      o comportamento global dos sistemas que alimentam essas nevascas, os dados de reanálise e as
      imagens de satélite da <ExternalLink href="https://www.nasa.gov/">NASA</ExternalLink> e da{' '}
      <ExternalLink href="https://www.noaa.gov/">NOAA</ExternalLink> são a referência internacional.
      Para quem quer aplicar o mesmo raciocínio ao Brasil — em serras, cânions e áreas de risco de
      deslizamento —, os alertas do <ExternalLink href="https://portal.inmet.gov.br/">INMET</ExternalLink>{' '}
      e as análises do <ExternalLink href="https://www.cptec.inpe.br/">CPTEC/INPE</ExternalLink>{' '}
      cumprem o papel equivalente.
    </P>

    <H2 id="como-se-proteger">Como se proteger de avalanche: o protocolo completo</H2>

    <P>
      O que segue é a síntese do que serviços de resgate alpino ensinam há décadas. Não é
      complicado. É apenas disciplina.
    </P>

    <H3>Antes de sair</H3>

    <ol className="my-6 space-y-3 list-decimal pl-6 text-slate-700 text-base md:text-lg leading-relaxed">
      <li>
        <strong>Leia o boletim do dia.</strong> Boletins de avalanche usam uma escala de cinco
        níveis. A maioria dos acidentes graves acontece nos níveis 2 e 3, considerados
        "moderado" e "considerável" — justamente porque as pessoas subestimam esses patamares.
      </li>
      <li>
        <strong>Estude o mapa de inclinação.</strong> Identifique antes quais trechos da rota
        cruzam encostas entre 30 e 45 graus e quais alternativas existem.
      </li>
      <li>
        <strong>Leve o tripé de segurança.</strong> Transceptor de avalanche ligado, pá e sonda.
        Os três, sempre. Um transceptor sem pá é inútil: localizar sem conseguir escavar não salva
        ninguém.
      </li>
      <li>
        <strong>Teste o equipamento no estacionamento ou no acampamento.</strong> Verificação
        cruzada de transmissão e busca com todo o grupo antes do primeiro passo.
      </li>
      <li>
        <strong>Defina a hora de desistir.</strong> Um horário fixo de retorno, combinado antes,
        neutraliza a pressão psicológica que aparece perto do objetivo.
      </li>
      <li>
        <strong>Deixe o plano com alguém.</strong> Rota, horários previstos e hora limite para
        acionar socorro.
      </li>
    </ol>

    <H3>Durante a travessia</H3>

    <Checklist
      items={[
        'Atravesse encostas suspeitas uma pessoa de cada vez, com as demais observando de local seguro.',
        'Escolha rotas por cristas e lombadas, não por dentro de calhas e canais naturais.',
        'Evite atravessar por baixo de encostas carregadas, mesmo caminhando em terreno plano.',
        'Solte as alças do peito e da cintura da mochila em trechos expostos, para poder se livrar dela.',
        'Reavalie a cada mudança de tempo: vento que aumenta ou temperatura que sobe muda o cenário em uma hora.',
        'Combine pontos de reagrupamento seguros e mantenha contato visual constante.',
      ]}
    />

    <H3>Se a avalanche começar</H3>

    <ol className="my-6 space-y-3 list-decimal pl-6 text-slate-700 text-base md:text-lg leading-relaxed">
      <li>Grite para alertar o grupo — quem vê o soterramento define o ponto de busca.</li>
      <li>Mova-se para a lateral, na diagonal, tentando sair da linha de fluxo.</li>
      <li>Livre-se de bastões e de mochilas pesadas que estejam nas mãos.</li>
      <li>Agarre-se a rochas ou árvores enquanto a massa passa, se houver alguma ao alcance.</li>
      <li>Faça movimentos de natação vigorosos para se manter próximo à superfície.</li>
      <li>Nos segundos finais, leve as mãos ao rosto e crie uma bolsa de ar antes que a neve pare.</li>
      <li>Depois de parada, tente empurrar um braço para cima e economize oxigênio: gritar sem ouvir alguém próximo gasta ar sem resultado.</li>
    </ol>

    <H3>Se você for a testemunha</H3>

    <Warning title="A regra dos 15 minutos">
      Não vá buscar ajuda. Busque a vítima. Cerca de 90% das pessoas totalmente soterradas
      sobrevivem se resgatadas nos primeiros 15 minutos; a taxa despenca depois disso. O socorro
      externo em alta montanha leva horas. Quem salva é quem está ao lado.
    </Warning>

    <ol className="my-6 space-y-3 list-decimal pl-6 text-slate-700 text-base md:text-lg leading-relaxed">
      <li>Marque com o olhar o último ponto onde a vítima foi vista.</li>
      <li>Verifique se há risco de nova avalanche antes de entrar na área.</li>
      <li>Coloque todos os transceptores em modo busca, sem exceção.</li>
      <li>Faça a busca em faixas paralelas até obter sinal, depois refine em cruz.</li>
      <li>Sonde perpendicularmente à superfície até tocar a vítima; deixe a sonda cravada.</li>
      <li>Escave lateralmente, a partir de baixo da sonda, e não de cima — cavar por cima compacta a neve sobre o rosto.</li>
      <li>Libere primeiro a cabeça e as vias aéreas; só então o restante do corpo.</li>
      <li>Trate hipotermia com cuidado: movimentos bruscos em vítima muito fria podem ser perigosos.</li>
    </ol>

    <H2 id="conforto-termico">Dicas de conforto térmico em alta montanha</H2>

    <P>
      Frio não mata apenas por congelamento; mata por decisão ruim. A hipotermia leve derruba a
      capacidade de julgamento antes de derrubar o corpo, e é assim que grupos experientes acabam
      escolhendo a encosta errada.
    </P>

    <H3>O sistema de três camadas</H3>

    <Checklist
      items={[
        'Primeira camada: lã merino ou sintético que afaste o suor da pele. Algodão é proibido — molha, não seca e rouba calor.',
        'Segunda camada: isolamento térmico, com penas para frio seco ou sintético para ambiente úmido.',
        'Terceira camada: proteção contra vento e água, com capuz que cubra o capacete e ventilação nas axilas.',
        'Extremidades: dois pares de luvas, gorro que cubra as orelhas, meias térmicas de reserva sempre secas.',
        'Regule antes de suar: abra zíperes e tire camadas na subida, recoloque tudo antes de parar. Roupa molhada em pausa é o começo da hipotermia.',
      ]}
    />

    <H3>Hidratação e energia</H3>

    <P>
      Em altitude, o ar seco e a respiração acelerada desidratam sem sede aparente. A recomendação
      prática é de três a quatro litros de líquido por dia, preferencialmente mornos, e comida
      calórica de fácil digestão a cada duas horas. Corpo com energia produz calor; corpo em jejum
      esfria mesmo bem vestido.
    </P>

    <H2 id="clima-e-montanha">Mudanças climáticas e a nova instabilidade da alta montanha</H2>

    <P>
      As geleiras do Himalaia, que abastecem rios usados por centenas de milhões de pessoas na
      Ásia, vêm perdendo massa de forma consistente. Isso muda o terreno de maneiras concretas para
      quem sobe.
    </P>

    <H3>Permafrost em retração</H3>

    <P>
      O solo permanentemente congelado funciona como cimento natural das paredes rochosas. Quando
      aquece e derrete, blocos antes travados se soltam. O resultado é o aumento de quedas de
      rocha em rotas clássicas, incluindo trechos que eram considerados estáveis há décadas.
    </P>

    <H3>Lagos glaciais e o risco a jusante</H3>

    <P>
      O recuo das geleiras forma lagos represados por morainas instáveis. Uma avalanche que caia
      dentro de um desses lagos pode romper a barreira e provocar uma inundação repentina que
      desce dezenas de quilômetros vale abaixo, atingindo vilarejos que nem sequer viram a neve
      cair. É um encadeamento de eventos parecido, na lógica, com o que se vê em{' '}
      <InternalLink to="/blog/chuvas-intensas-enchentes-rio-grande-do-sul-2026">enchentes
      relâmpago em bacias fechadas</InternalLink>.
    </P>

    <H3>Tempestades mais carregadas</H3>

    <P>
      Uma atmosfera mais quente comporta mais vapor de água. Na prática, isso significa nevascas
      que despejam em 12 horas o que antes levava dois dias. Como o volume e a velocidade do
      acúmulo são o principal gatilho de avalanches de placa, o risco por episódio tende a subir
      mesmo onde o total de neve da temporada diminui. O tema se conecta diretamente aos{' '}
      <InternalLink to="/blog/la-nina-2026-impactos-brasil-previsao">ciclos climáticos de El Niño
      e La Niña</InternalLink>, que modulam a intensidade da monção asiática ano a ano.
    </P>

    <H2 id="apps">Melhores apps de monitoramento climático para montanha</H2>

    <DataTable
      headers={['Ferramenta', 'Melhor uso', 'Ponto forte']}
      rows={[
        ['Windy', 'Comparar modelos de vento, neve e altura de camada', 'Permite alternar entre ECMWF e GFS no mesmo ponto'],
        ['AccuWeather', 'Acompanhamento diário e alertas de tempo severo', 'Notificações rápidas e cobertura global'],
        ['Climatempo', 'Sistemas em escala sinótica e contexto regional', 'Boa leitura de frentes e massas de ar'],
        ['INMET', 'Alertas oficiais e dados de estações no Brasil', 'Fonte oficial, com avisos por cor de severidade'],
        ['Rastreador via satélite', 'Comunicação onde não há sinal de celular', 'Botão de emergência aciona resgate com coordenadas'],
      ]}
      caption="Combinação recomendada de ferramentas para planejamento e acompanhamento em terreno de montanha"
    />

    <InfoBox title="Regra prática de uso">
      Use dois modelos diferentes para a mesma previsão. Quando eles concordam, a confiança é alta.
      Quando divergem, trate o cenário como incerto e planeje pela hipótese mais pessimista.
    </InfoBox>

    <H2 id="faq-avalanche">Perguntas frequentes sobre avalanches</H2>

    <FAQ items={avalancheFaq} />

    <H2 id="conclusao-avalanche">Conclusão: a montanha avisa, mas em outra linguagem</H2>

    <P>
      A avalanche no Nepal em 2026 não foi um acaso meteorológico inexplicável. Foi o encontro
      previsível entre uma nevasca fora de época, um manto de neve carregado e a temporada de maior
      movimento nas rotas de altitude. Cada um desses elementos era conhecido; o que faltou, como
      quase sempre, foi tempo entre a informação e a decisão.
    </P>

    <P>
      A boa notícia é que a segurança em avalanche é uma das áreas em que o conhecimento básico tem
      retorno imediato. Saber ler um boletim, reconhecer uma placa de vento, carregar transceptor,
      pá e sonda e ter combinado uma hora de desistência transforma um passeio de alto risco em uma
      atividade gerenciável. Nenhuma dessas medidas exige equipamento caro ou treinamento de anos.
    </P>

    <Highlight title="Checklist final de 60 segundos">
      Boletim do dia lido · inclinação da rota conhecida · transceptor ligado, pá e sonda na
      mochila · hora limite de retorno combinada · plano deixado com alguém · previsão conferida em
      dois modelos · roupa em três camadas, sem algodão · água e comida calórica ao alcance.
    </Highlight>
  </>
);

/* ==========================================================================
   ARTIGO 2: Três furacões simultâneos no Pacífico — setembro de 2026
   ========================================================================== */

const furacoesPacificoFaq = [
  {
    q: 'É comum três furacões se formarem ao mesmo tempo no Pacífico?',
    a: 'Não é raro, mas também não é rotina. O pico da temporada, entre agosto e setembro, concentra as condições necessárias — água quente, pouco cisalhamento do vento e distúrbios organizados —, e quando essas condições cobrem uma faixa extensa do oceano, vários sistemas se formam em sequência. O Pacífico é o maior oceano do planeta e comporta múltiplos ciclones simultâneos com folga geográfica.',
  },
  {
    q: 'Três furacões ao mesmo tempo aumentam o perigo para quem está em terra?',
    a: 'Aumentam de forma indireta. Cada sistema é perigoso por si só, mas a simultaneidade divide recursos de resgate, satura equipes de defesa civil, dificulta a logística de energia e água e confunde o público, que passa a acompanhar três nomes ao mesmo tempo. Além disso, se dois sistemas atingem a mesma região em intervalo curto, o segundo encontra solo saturado e infraestrutura já fragilizada.',
  },
  {
    q: 'Qual a diferença entre furacão, tufão e ciclone?',
    a: 'São o mesmo fenômeno com nomes regionais. Chama-se furacão no Atlântico e no Pacífico Nordeste, tufão no Pacífico Noroeste e ciclone tropical no Índico e no Pacífico Sul. A estrutura física é idêntica: um sistema de baixa pressão com convecção organizada em bandas espirais em torno de um centro, alimentado por calor e umidade do oceano.',
  },
  {
    q: 'O que é o efeito Fujiwhara entre dois furacões próximos?',
    a: 'Quando dois ciclones tropicais se aproximam a menos de cerca de 1.400 quilômetros, eles passam a girar em torno de um ponto comum, como dois patinadores de mãos dadas. O resultado pode ser o desvio das duas trajetórias, a absorção do sistema menor pelo maior ou a fusão dos dois. É um dos cenários que mais degradam a confiança da previsão de trajetória.',
  },
  {
    q: 'Por que setembro é o mês mais ativo?',
    a: 'Por inércia térmica do oceano. A água leva semanas para responder ao aquecimento solar do verão, então o calor acumulado atinge o máximo semanas depois do solstício. Em setembro, a superfície do mar está no auge, a camada quente é profunda e o cisalhamento do vento em altitude costuma estar no mínimo. É a janela em que a atmosfera oferece tudo o que um furacão precisa.',
  },
  {
    q: 'Furacões do Pacífico afetam o Brasil?',
    a: 'Não diretamente. Nenhum furacão do Pacífico chega ao território brasileiro. O efeito é indireto, por teleconexão: sistemas tropicais intensos alteram a circulação em grande escala, deslocam correntes de jato e influenciam o posicionamento de bloqueios atmosféricos que, semanas depois, ajudam a definir chuva e temperatura na América do Sul.',
  },
  {
    q: 'O que é intensificação rápida e por que ela é tão perigosa?',
    a: 'É o aumento de pelo menos 55 km/h na velocidade máxima dos ventos em 24 horas. O perigo está no tempo: uma população que dormiu com aviso de tempestade tropical pode acordar diante de um furacão maior. A janela de evacuação encolhe justamente quando o risco cresce, e é por isso que agências recomendam preparar antes de saber a categoria final.',
  },
  {
    q: 'Como me proteger se moro em área de risco de ciclone tropical?',
    a: 'A regra que resume tudo: fuja da água, abrigue-se do vento. A maioria das mortes vem da água — maré de tempestade e enchente —, não do vento. Tenha um kit de 72 horas pronto, conheça sua rota de evacuação, saiba se seu endereço fica em zona de inundação, mantenha documentos impermeabilizados e ative alertas em pelo menos um aplicativo confiável.',
  },
];

export const TresFuracoesPacifico2026Article: React.FC<{ midImage: string }> = ({ midImage }) => (
  <>
    <FaqSchema items={furacoesPacificoFaq} />

    <Lead>
      Três olhos abertos ao mesmo tempo sobre o maior oceano do planeta. A imagem de satélite com
      três furacões girando lado a lado no Pacífico em setembro de 2026 impressiona pela estética —
      e assusta pelo que representa: a atmosfera tropical entrou na fase em que produz sistemas
      intensos em série, no ápice de uma temporada que ainda tem semanas pela frente.
    </Lead>

    <P>
      Ciclones simultâneos não são novidade meteorológica, mas viraram um dos assuntos mais
      buscados do ano porque escancaram algo que costuma passar despercebido: o oceano acumula
      calor durante meses e devolve essa energia em poucos dias, na forma das máquinas térmicas
      mais eficientes que a natureza sabe montar. Este guia explica como três furacões chegam a
      coexistir, o que a simultaneidade muda na prática, o que a previsão consegue antecipar e como
      se proteger de furacão do jeito que as agências de emergência recomendam.
    </P>

    <H2 id="o-que-esta-acontecendo">O que está acontecendo no Pacífico</H2>

    <P>
      O Pacífico tem duas bacias ciclônicas ativas no Hemisfério Norte. A do Pacífico Nordeste, ao
      largo da costa oeste do México, é a mais produtiva do mundo por área. A do Pacífico Noroeste,
      onde os sistemas recebem o nome de tufões, é a que gera os ciclones mais intensos do planeta.
      Somadas, elas cobrem uma extensão de água quente que permite a existência de vários sistemas
      ao mesmo tempo sem que um atrapalhe o outro.
    </P>

    <P>
      Quando o alinhamento acontece — água acima de 26,5 °C até boa profundidade, cisalhamento
      fraco do vento entre a superfície e a alta troposfera, ar úmido na camada média e um distúrbio
      inicial para servir de semente —, a bacia inteira funciona como uma linha de produção.
      Distúrbios que em julho morreriam em poucas horas, em setembro se organizam e viram
      furacões.
    </P>

    <Highlight title="Por que agosto e setembro concentram tudo">
      O oceano é lento. Ele leva semanas para absorver o calor do verão e outras tantas para
      liberá-lo. Por isso o pico da temporada não coincide com o dia mais quente do ano, e sim com
      o momento em que a camada quente da superfície está mais profunda — normalmente entre o fim
      de agosto e o meio de setembro.
    </Highlight>

    <img
      src={midImage}
      alt="Ondas gigantes atingindo o calçadão de uma cidade costeira do Pacífico durante furacão, com coqueiros curvados pelo vento e moradores protegendo barcos"
      loading="lazy"
      width={944}
      height={704}
      className="w-full rounded-xl shadow-lg my-10"
    />

    <H2 id="como-nasce-furacao">Como nasce um furacão: a máquina térmica do oceano</H2>

    <P>
      Um furacão é um conversor de calor em movimento. Ele retira energia da superfície quente do
      mar, transporta essa energia para cima na forma de vapor de água, libera calor quando o vapor
      condensa em nuvens e usa esse calor liberado para baixar ainda mais a pressão no centro — o
      que puxa mais ar da superfície e realimenta o ciclo.
    </P>

    <H3>Os cinco ingredientes obrigatórios</H3>

    <ol className="my-6 space-y-3 list-decimal pl-6 text-slate-700 text-base md:text-lg leading-relaxed">
      <li><strong>Água quente</strong> acima de 26,5 °C, e não apenas na superfície: é preciso profundidade, senão o próprio sistema resfria o mar ao revolvê-lo.</li>
      <li><strong>Umidade na camada média</strong> da atmosfera. Ar seco entrando pelas laterais mata a convecção.</li>
      <li><strong>Cisalhamento fraco</strong> do vento. Se o vento em altitude sopra muito diferente do de superfície, a chaminé de nuvens entorta e o sistema se desorganiza.</li>
      <li><strong>Distância do equador</strong>, para que o efeito de rotação da Terra imprima giro. Ciclones não se formam sobre a linha do equador.</li>
      <li><strong>Um distúrbio inicial</strong>, como uma onda tropical ou um agrupamento de tempestades, para servir de semente.</li>
    </ol>

    <H3>A anatomia por dentro</H3>

    <DataTable
      headers={['Parte do sistema', 'O que é', 'O que se sente em terra']}
      rows={[
        ['Olho', 'Centro de ar descendente, calmo e às vezes com céu limpo', 'Silêncio enganoso — o vento volta pelo lado oposto em minutos'],
        ['Parede do olho', 'Anel de convecção mais intensa', 'Ventos máximos e a chuva mais forte de todo o sistema'],
        ['Bandas espirais', 'Faixas de tempestade que giram em torno do centro', 'Rajadas, aguaceiros intermitentes e risco de tornados isolados'],
        ['Setor perigoso', 'Quadrante onde o vento do sistema soma com o deslocamento', 'Ventos mais altos e maré de tempestade mais severa'],
        ['Maré de tempestade', 'Elevação do nível do mar empurrada pelo vento', 'Principal causa de mortes em ciclones tropicais'],
      ]}
      caption="Estrutura de um ciclone tropical e o efeito prático de cada parte"
    />

    <PullQuote author="Orientação recorrente de agências de emergência costeira">
      Fuja da água, abrigue-se do vento. A categoria mede a força do vento; a maioria das mortes
      vem do mar que sobe e do rio que transborda.
    </PullQuote>

    <H2 id="tres-ao-mesmo-tempo">Três ao mesmo tempo: o que muda na prática</H2>

    <P>
      A pergunta que mais aparece nas buscas é se três furacões simultâneos são mais perigosos que
      três furacões espaçados. Do ponto de vista físico, cada sistema é independente. Do ponto de
      vista humano, a diferença é enorme.
    </P>

    <H3>Interação entre sistemas</H3>

    <H4>Efeito Fujiwhara</H4>

    <P>
      Quando dois ciclones se aproximam o suficiente, eles começam a orbitar um ponto comum entre
      os dois. Isso pode desviar trajetórias que pareciam definidas, absorver o sistema mais fraco
      ou, em casos raros, fundir os dois. Para a previsão, é o pior cenário: a incerteza da
      trajetória cresce justamente quando as decisões de evacuação precisam ser tomadas.
    </P>

    <H4>Competição por energia</H4>

    <P>
      Sistemas próximos disputam a mesma umidade e podem induzir movimento descendente de ar seco
      no entorno um do outro, enfraquecendo ambos. Também deixam para trás uma esteira de água mais
      fria — o furacão revolve o oceano e traz água profunda à superfície —, o que pode inibir o
      sistema seguinte que passe pelo mesmo trecho.
    </P>

    <H3>O impacto que realmente pesa: a logística</H3>

    <Checklist
      items={[
        'Equipes de resgate e helicópteros precisam ser divididos entre frentes distintas.',
        'Estoques de água, geradores e abrigos são disputados por regiões diferentes ao mesmo tempo.',
        'Companhias elétricas não conseguem concentrar equipes em uma única área atingida.',
        'A comunicação pública fica confusa com três nomes e três avisos simultâneos.',
        'Se dois sistemas atingem a mesma região em intervalo curto, o segundo encontra solo saturado e árvores já enfraquecidas.',
      ]}
    />

    <Warning title="O erro clássico do segundo sistema">
      Depois que o primeiro furacão passa sem causar grande dano, cresce a sensação de que o
      próximo também não será problema. É nesse momento que os avisos deixam de ser levados a
      sério — e é exatamente quando o solo encharcado transforma chuva moderada em deslizamento e
      enchente.
    </Warning>

    <CTA>
      Acompanhe a evolução das condições atmosféricas em tempo real na página{' '}
      <InternalLink to="/agora">Tempo Agora</InternalLink> e veja a tendência dos próximos dias em{' '}
      <InternalLink to="/15-dias">Previsão de 15 dias</InternalLink>.
    </CTA>

    <H2 id="escala">A escala Saffir-Simpson e o que ela não mede</H2>

    <P>
      A classificação por categorias é útil como resumo, mas ela informa apenas uma variável: a
      velocidade máxima sustentada do vento. Três dos fatores que mais matam ficam de fora.
    </P>

    <DataTable
      headers={['Categoria', 'Ventos sustentados', 'Dano típico esperado']}
      rows={[
        ['Tempestade tropical', '63 a 118 km/h', 'Queda de galhos, alagamentos, interrupções pontuais de energia'],
        ['Categoria 1', '119 a 153 km/h', 'Danos em telhados, revestimentos e árvores; quedas de energia'],
        ['Categoria 2', '154 a 177 km/h', 'Danos estruturais moderados; energia interrompida por dias'],
        ['Categoria 3', '178 a 208 km/h', 'Danos severos; considerado furacão de grande intensidade'],
        ['Categoria 4', '209 a 251 km/h', 'Perda de telhados e paredes externas; área inabitável por semanas'],
        ['Categoria 5', 'Acima de 252 km/h', 'Destruição generalizada; falha de infraestrutura por meses'],
      ]}
      caption="Escala Saffir-Simpson: mede apenas vento, não a ameaça total"
    />

    <H3>O que a escala deixa de fora</H3>

    <Checklist
      items={[
        'Maré de tempestade: a elevação do mar depende do tamanho do sistema e do formato da costa, não só da categoria.',
        'Volume de chuva: um sistema lento de categoria 1 pode causar enchente muito pior que um categoria 3 veloz.',
        'Tamanho do campo de ventos: sistemas largos atingem áreas muito maiores com ventos moderados.',
        'Velocidade de deslocamento: quanto mais devagar, mais horas de chuva e vento sobre o mesmo ponto.',
      ]}
    />

    <InfoBox title="Regra de ouro para leigos">
      Não pergunte "que categoria é?". Pergunte "quanto vai chover, quanto o mar vai subir e quanto
      tempo o sistema vai demorar para passar?". São essas três respostas que definem o risco no
      seu endereço.
    </InfoBox>

    <H2 id="historico">Dados históricos de furacões e temporadas marcantes</H2>

    <P>
      Comparações históricas ajudam a calibrar expectativas. Alguns episódios se tornaram
      referência mundial justamente por mostrarem que a categoria não conta a história toda.
    </P>

    <DataTable
      headers={['Evento', 'Bacia', 'Marca deixada']}
      rows={[
        ['Furacão Patricia (2015)', 'Pacífico Nordeste', 'Ventos entre os mais fortes já medidos de forma confiável no Hemisfério Ocidental'],
        ['Tufão Haiyan (2013)', 'Pacífico Noroeste', 'Maré de tempestade devastadora nas Filipinas; referência em desastre costeiro'],
        ['Furacão Katrina (2005)', 'Atlântico', 'Mostrou que o colapso do sistema de diques mata mais que o vento'],
        ['Furacão Harvey (2017)', 'Atlântico', 'Sistema lento; a chuva acumulada foi o desastre, não a categoria'],
        ['Furacão Otis (2023)', 'Pacífico Nordeste', 'Caso extremo de intensificação rápida antes de atingir Acapulco'],
        ['Ciclone Catarina (2004)', 'Atlântico Sul', 'Único sistema com características de furacão a atingir o Brasil'],
      ]}
      caption="Episódios de referência que moldaram os protocolos atuais de alerta e evacuação"
    />

    <P>
      O caso do Otis é o mais citado nos treinamentos recentes: um sistema que passou de tempestade
      tropical a furacão de altíssima intensidade em menos de um dia, encurtando drasticamente a
      janela de preparação. Esse é o padrão que preocupa os centros de previsão — e que aparece
      também no <InternalLink to="/blog/temporada-furacoes-atlantico-2026">comportamento da
      temporada do Atlântico em 2026</InternalLink>.
    </P>

    <H2 id="ciclos">Ciclos climáticos explicados: El Niño, La Niña e as bacias oceânicas</H2>

    <P>
      A atividade ciclônica não é aleatória de ano para ano. Ela responde a padrões de grande
      escala que reorganizam a temperatura do oceano e o vento em altitude.
    </P>

    <H3>El Niño</H3>

    <P>
      Com o Pacífico equatorial mais quente, essa bacia ganha combustível e tende a produzir mais
      furacões. Ao mesmo tempo, o padrão aumenta o cisalhamento do vento sobre o Atlântico,
      inibindo os sistemas de lá. É uma gangorra: o que favorece uma bacia costuma prejudicar a
      outra.
    </P>

    <H3>La Niña</H3>

    <P>
      Com o Pacífico equatorial mais frio, o efeito se inverte: menos cisalhamento no Atlântico,
      temporada mais ativa por lá, e condições em geral menos favoráveis no Pacífico Nordeste. Esse
      mecanismo está detalhado no nosso artigo sobre{' '}
      <InternalLink to="/blog/la-nina-2026-impactos-brasil-previsao">La Niña em 2026 e seus
      impactos no Brasil</InternalLink>.
    </P>

    <H3>Oscilação Madden-Julian</H3>

    <P>
      É uma onda de convecção que percorre os trópicos em ciclos de 30 a 60 dias. Quando a fase
      favorável se posiciona sobre uma bacia, a formação de ciclones dispara em poucos dias — e é
      justamente esse mecanismo que costuma explicar grupos de três ou mais sistemas surgindo
      quase juntos.
    </P>

    <H2 id="protecao">Como se proteger de furacão: plano em quatro fases</H2>

    <H3>Fase 1 — Fora de temporada: preparação estrutural</H3>

    <Checklist
      items={[
        'Descubra se o seu endereço está em zona de inundação ou de evacuação.',
        'Defina e memorize a rota de evacuação e um destino alternativo fora da área de risco.',
        'Revise telhado, calhas e drenagem; pode uma árvore que ameace a casa ou a rede elétrica.',
        'Digitalize documentos e guarde cópias em nuvem e em saco plástico selado.',
        'Combine com a família um ponto de encontro e um contato de referência fora da região.',
      ]}
    />

    <H3>Fase 2 — Aviso emitido: 48 a 72 horas antes</H3>

    <ol className="my-6 space-y-3 list-decimal pl-6 text-slate-700 text-base md:text-lg leading-relaxed">
      <li>Monte o kit de 72 horas: quatro litros de água por pessoa por dia, alimentos não perecíveis, remédios de uso contínuo, lanterna, rádio a pilha, pilhas extras, power bank carregado, dinheiro em espécie.</li>
      <li>Abasteça o carro e recarregue todos os aparelhos com bateria.</li>
      <li>Proteja janelas com painéis apropriados e recolha tudo o que possa virar projétil no quintal.</li>
      <li>Encha a banheira e recipientes limpos com água para uso sanitário e higiene.</li>
      <li>Se houver ordem de evacuação, saia cedo. Estradas engarrafadas com vento forte são o pior lugar possível.</li>
    </ol>

    <H3>Fase 3 — Durante a passagem</H3>

    <Warning title="Nunca saia durante o olho do furacão">
      A calmaria repentina significa que o centro está sobre você. Em poucos minutos o vento
      retorna com a mesma força, mas na direção oposta — e é nessa virada que estruturas já
      enfraquecidas desabam. Só saia quando a defesa civil declarar o fim do evento.
    </Warning>

    <Checklist
      items={[
        'Fique no cômodo interno mais protegido, longe de janelas e de portas externas.',
        'Se houver risco de inundação, suba de andar — mas nunca para um sótão sem saída para o telhado.',
        'Desligue a energia se a água começar a entrar.',
        'Mantenha o rádio a pilha ligado; a internet costuma cair antes de tudo.',
        'Nunca dirija por trecho alagado: 30 centímetros de água em movimento arrastam a maioria dos veículos.',
      ]}
    />

    <H3>Fase 4 — Depois</H3>

    <ol className="my-6 space-y-3 list-decimal pl-6 text-slate-700 text-base md:text-lg leading-relaxed">
      <li>Trate todo fio caído como energizado e mantenha distância.</li>
      <li>Nunca use gerador, churrasqueira ou motor a combustão dentro de casa ou garagem: monóxido de carbono não tem cheiro e mata em minutos.</li>
      <li>Ferva ou trate a água antes de beber até o aviso oficial de normalização.</li>
      <li>Fotografe todos os danos antes de qualquer reparo, para fins de seguro.</li>
      <li>Evite áreas alagadas: além do risco elétrico, há contaminação e animais deslocados.</li>
      <li>Cuidado com a fase de limpeza — boa parte das lesões acontece depois da tempestade, não durante.</li>
    </ol>

    <H2 id="conforto">Dicas de conforto térmico durante apagões prolongados</H2>

    <P>
      Ciclones tropicais deixam calor e umidade para trás, e a falta de energia costuma durar
      dias. Manter a temperatura corporal sob controle sem ar-condicionado é uma habilidade
      prática que vale a pena treinar antes de precisar.
    </P>

    <Checklist
      items={[
        'Feche cortinas e persianas nas horas de sol e abra tudo à noite para ventilação cruzada.',
        'Use roupas leves, folgadas e de cores claras, em algodão ou linho.',
        'Beba água em pequenos goles ao longo do dia, sem esperar sentir sede.',
        'Molhe punhos, nuca e pés com pano úmido: são regiões de troca térmica eficiente.',
        'Concentre esforço físico no início da manhã e no fim da tarde.',
        'Redobre a atenção com idosos, crianças pequenas, gestantes e animais domésticos.',
      ]}
    />

    <H2 id="alertas">Alertas governamentais e melhores apps de monitoramento climático</H2>

    <P>
      Para as bacias do Pacífico e do Atlântico, os boletins de referência internacional vêm da{' '}
      <ExternalLink href="https://www.noaa.gov/">NOAA</ExternalLink>, que opera os centros de aviso
      de ciclones tropicais, e as imagens de satélite e dados de temperatura do mar são
      disponibilizados pela <ExternalLink href="https://www.nasa.gov/">NASA</ExternalLink>. No
      Brasil, os avisos oficiais de tempo severo, ressaca e ciclone extratropical são emitidos pelo{' '}
      <ExternalLink href="https://portal.inmet.gov.br/">INMET</ExternalLink>, com apoio das análises
      do <ExternalLink href="https://www.cptec.inpe.br/">CPTEC/INPE</ExternalLink>. Para o contexto
      climático de fundo, os relatórios do{' '}
      <ExternalLink href="https://www.unep.org/">Programa das Nações Unidas para o Meio Ambiente</ExternalLink>{' '}
      reúnem o panorama global.
    </P>

    <DataTable
      headers={['Aplicativo', 'Melhor uso', 'Diferencial']}
      rows={[
        ['Windy', 'Acompanhar trajetória e comparar modelos', 'Visualização em camadas de vento, ondas e pressão'],
        ['AccuWeather', 'Alertas rápidos e previsão local', 'Notificações push com boa cobertura internacional'],
        ['Climatempo', 'Contexto sinótico em português', 'Boa explicação de sistemas e frentes'],
        ['INMET', 'Avisos oficiais no Brasil', 'Alertas por cor de severidade e dados de estações'],
        ['Rádio a pilha', 'Quando tudo mais falhar', 'Funciona sem energia, sem internet e sem sinal de celular'],
      ]}
      caption="Combinação recomendada para acompanhar ciclones tropicais e tempo severo"
    />

    <H2 id="brasil">E o Brasil nessa história?</H2>

    <P>
      O Brasil não recebe furacões do Pacífico, mas não está fora do jogo. O litoral sul e sudeste
      convive com ciclones extratropicais e com bombas meteorológicas, sistemas que atingem ventos
      comparáveis aos de um furacão de categoria 1 e produzem ressacas severas — tema que
      detalhamos em{' '}
      <InternalLink to="/blog/ciclone-bomba-brasil-agosto-2026">ciclone-bomba no Brasil</InternalLink>.
      O único sistema com características tropicais a tocar o país foi o Catarina, em 2004, e ele
      continua sendo estudado justamente por ter surgido onde não era esperado.
    </P>

    <P>
      Além disso, a atividade ciclônica tropical altera a circulação global. Sistemas intensos no
      Pacífico injetam calor e umidade em altitude, deslocam correntes de jato e influenciam
      bloqueios atmosféricos que, semanas depois, ajudam a explicar períodos secos ou chuvosos na
      América do Sul.
    </P>

    <H2 id="faq-furacoes-pacifico">Perguntas frequentes sobre furacões no Pacífico</H2>

    <FAQ items={furacoesPacificoFaq} />

    <H2 id="conclusao-furacoes-pacifico">Conclusão: a imagem impressiona, o preparo é que protege</H2>

    <P>
      Três furacões girando ao mesmo tempo sobre o Pacífico são um retrato preciso do que o oceano
      é capaz de fazer quando acumula calor por meses seguidos. Cientificamente, é o pico da
      temporada funcionando como esperado. Do ponto de vista de quem vive na costa, é um lembrete
      de que a preparação precisa ser anterior ao nome do sistema.
    </P>

    <P>
      Nada disso exige conhecimento técnico. Saber se o seu endereço fica em zona de inundação,
      manter um kit de 72 horas, conhecer a rota de evacuação e acompanhar dois aplicativos
      confiáveis resolve a maior parte do problema. O resto é obedecer a uma frase simples que
      resume décadas de experiência: fuja da água, abrigue-se do vento e não confie na calmaria do
      olho.
    </P>

    <Highlight title="Checklist final de 60 segundos">
      Zona de risco do endereço verificada · rota de evacuação conhecida · kit de 72 horas montado ·
      documentos impermeabilizados · celular e power bank carregados · rádio a pilha testado ·
      alertas do INMET e de um app de radar ativados · ponto de encontro combinado com a família.
    </Highlight>
  </>
);
