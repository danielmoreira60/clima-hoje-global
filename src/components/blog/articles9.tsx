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
   ARTIGO 1: Cinturão de sargaço no Atlântico — 2026
   ========================================================================== */

const sargacoFaq = [
  {
    q: 'O que é o Grande Cinturão de Sargaço do Atlântico?',
    a: 'É uma faixa quase contínua de algas pardas do gênero Sargassum que se estende do oeste da África até o Golfo do México, passando pelo Caribe e pela costa norte do Brasil. Diferente do mar de Sargaços clássico, que fica no Atlântico Norte e é conhecido desde as viagens de Colombo, esse cinturão tropical só passou a ser observado de forma recorrente a partir de 2011 e hoje chega a somar dezenas de milhões de toneladas de biomassa no pico da temporada, entre abril e agosto.',
  },
  {
    q: 'Por que o sargaço aumentou tanto depois de 2011?',
    a: 'A explicação mais aceita combina três fatores. O primeiro é o excesso de nutrientes despejado no oceano por grandes rios, sobretudo nitrogênio e fósforo de origem agrícola. O segundo é a mudança nos padrões de vento e nas correntes de superfície, que passaram a exportar algas do mar de Sargaços para latitudes tropicais, onde há mais luz e calor o ano inteiro. O terceiro é a poeira do Saara, que carrega ferro e fósforo e funciona como adubo natural para o oceano. Nenhum fator sozinho explica o fenômeno; a combinação, sim.',
  },
  {
    q: 'O sargaço faz mal à saúde?',
    a: 'A alga viva, boiando no mar, é inofensiva e serve de berçário para várias espécies. O problema começa quando ela apodrece na praia. A decomposição libera gás sulfídrico, com cheiro de ovo podre, e amônia. Em concentração alta e em locais pouco ventilados, esses gases causam dor de cabeça, irritação nos olhos e nas vias respiratórias, náusea e crises em pessoas com asma. Por isso vários destinos do Caribe passaram a monitorar a qualidade do ar nas orelhas de acúmulo.',
  },
  {
    q: 'O sargaço já chega ao litoral brasileiro?',
    a: 'Sim. Registros de encalhes se concentram no Amapá, no Pará e no Maranhão, onde a Corrente Norte do Brasil e os ventos alísios empurram parte do cinturão para a costa. Trechos do Nordeste e até do Sudeste recebem episódios menores e irregulares. A quantidade varia muito de ano para ano, acompanhando a intensidade do cinturão no Atlântico tropical e o regime de ventos da estação.',
  },
  {
    q: 'Qual é o prejuízo econômico do sargaço?',
    a: 'O impacto se concentra em turismo e pesca. Hotéis do Caribe gastam somas expressivas por temporada com barreiras flutuantes, tratores e mão de obra de limpeza, e há registro de queda de ocupação em praias muito afetadas. Na pesca artesanal, as massas de alga entopem redes, dificultam a navegação de pequenas embarcações e reduzem o oxigênio da água costeira, o que provoca mortandade de peixes e prejudica a captura.',
  },
  {
    q: 'Dá para prever a chegada do sargaço à praia?',
    a: 'Em boa medida, sim. Sensores de satélite conseguem enxergar as manchas de alga em mar aberto e, combinados a modelos de corrente e vento, produzem boletins mensais de risco por região com semanas de antecedência. A previsão acerta bem a escala regional e a tendência da temporada, mas ainda erra em qual praia específica vai receber o encalhe, porque isso depende de vento local e maré nos dias imediatamente anteriores.',
  },
  {
    q: 'O sargaço tem algum uso econômico?',
    a: 'Tem, e é uma frente promissora. A biomassa vem sendo testada como matéria-prima para adubo orgânico, biogás, bioplástico, tijolos e até papel. O obstáculo é o arsênio e os metais pesados que a alga acumula, o que exige tratamento antes de qualquer uso agrícola. Projetos que coletam o sargaço ainda no mar, antes do encalhe, têm produto de qualidade melhor do que os que raspam a alga já misturada com areia.',
  },
  {
    q: 'Quais aplicativos ajudam a acompanhar o mar e o litoral?',
    a: 'Windy é excelente para ver vento, ondas e correntes de superfície em qualquer ponto do Atlântico, o que ajuda a antecipar dias de acúmulo. Climatempo e AccuWeather cobrem bem a previsão costeira brasileira, e o INMET publica avisos de ressaca e ventos fortes. Para quem acompanha o fenômeno de perto, os boletins de sargaço divulgados por universidades e institutos oceanográficos são a fonte mais direta.',
  },
];

export const SargacoAtlantico2026Article: React.FC<{ midImage: string }> = ({ midImage }) => (
  <>
    <FaqSchema items={sargacoFaq} />

    <Lead>
      Existe no Atlântico uma faixa de algas tão extensa que só é possível enxergá-la inteira do
      espaço. Ela nasce perto da África, cruza o oceano e termina no Golfo do México — e uma parte
      dela vira à esquerda e encosta no litoral brasileiro. Nada parecido havia sido registrado
      antes de 2011.
    </Lead>

    <P>
      O nome técnico é Grande Cinturão de Sargaço do Atlântico. Na prática, é uma esteira de algas
      pardas flutuantes que se organiza em linhas, manchas e faixas ao sabor do vento e da
      corrente, e que no auge da temporada chega a atravessar mais de 8 mil quilômetros de oceano.
      É, em escala de biomassa, um dos maiores fenômenos biológicos já documentados no planeta —
      e um dos mais recentes.
    </P>

    <P>
      Este guia explica o que é o cinturão de sargaço, por que ele apareceu, como ele afeta
      ecossistemas, economia e o litoral do Brasil, o que a previsão consegue antecipar e o que
      fazer quando a alga chega à praia onde você está.
    </P>

    <H2 id="o-que-e">O que é o cinturão de algas do Atlântico</H2>

    <P>
      O gênero <em>Sargassum</em> reúne algas pardas que, em duas espécies específicas, vivem a
      vida inteira boiando. Elas não se prendem ao fundo. Pequenas vesículas cheias de gás
      funcionam como boias e mantêm a alga na superfície, onde ela recebe luz e se multiplica por
      fragmentação: um pedaço que se solta vira uma nova colônia.
    </P>

    <P>
      Essa característica é importante para entender o fenômeno. Como a reprodução é vegetativa e
      contínua, basta que as condições de nutriente, temperatura e luz sejam favoráveis para que a
      população dobre em semanas. Não há um ciclo de vida travando o crescimento.
    </P>

    <H3>Do mar de Sargaços ao cinturão tropical</H3>

    <P>
      Durante séculos, o sargaço flutuante foi associado a uma única região: o mar de Sargaços,
      uma área oval no Atlântico Norte delimitada por correntes, sem costas, onde as algas se
      acumulam há milhares de anos. Colombo descreveu essas manchas em 1492. Aquele sistema é
      estável e ecologicamente valioso.
    </P>

    <P>
      O que mudou foi o surgimento de uma segunda região de acúmulo, muito mais ao sul, no
      Atlântico tropical, entre a África Ocidental e o Caribe. Ali o oceano é quente o ano inteiro
      e a luz é abundante. Quando algas foram exportadas do norte para essa faixa e encontraram
      nutrientes disponíveis, a população explodiu — e passou a se manter sozinha, ano após ano.
    </P>

    <Highlight title="O marco de 2011">
      Antes de 2011, imagens de satélite não mostravam faixa contínua de sargaço no Atlântico
      tropical. A partir daquele ano, o cinturão passou a reaparecer em quase todas as
      temporadas, com pico entre abril e agosto e biomassa estimada em dezenas de milhões de
      toneladas. É um ecossistema novo, formado diante dos nossos olhos.
    </Highlight>

    <figure className="my-10">
      <img
        src={midImage}
        alt="Praia tropical brasileira coberta por sargaço acumulado, com equipes de limpeza retirando as algas pardas da faixa de areia"
        loading="lazy"
        width={944}
        height={704}
        className="w-full rounded-xl shadow-lg"
      />
      <figcaption className="text-sm text-slate-600 mt-3 text-center italic">
        Encalhe de sargaço no litoral: a alga que é berçário no mar vira problema sanitário e
        econômico quando apodrece na areia.
      </figcaption>
    </figure>

    <H2 id="por-que-cresceu">Por que o sargaço cresceu tanto</H2>

    <P>
      Não existe uma causa única. Existe uma soma de mudanças que empurraram o sistema para um
      novo estado — e é isso que torna o fenômeno tão difícil de reverter.
    </P>

    <H3>1. Nutrientes vindos dos rios</H3>

    <P>
      Nitrogênio e fósforo usados como fertilizante em lavouras não ficam todos no solo. Uma
      fração escorre para os rios e chega ao mar. O Amazonas, o Congo, o Mississippi e o Orinoco
      despejam plumas gigantescas de água carregada desses nutrientes exatamente na região onde o
      cinturão se forma. Para uma alga que só depende de luz e nutriente, isso é combustível.
    </P>

    <H3>2. Poeira do deserto</H3>

    <P>
      A pluma de poeira que sai do Saara todos os anos carrega ferro e fósforo. Parte dela cai no
      oceano no meio do caminho, adubando a água da mesma forma que aduba floresta. Esse é um dos
      elos mais interessantes entre dois fenômenos aparentemente separados — e o tema do nosso
      artigo sobre a{' '}
      <InternalLink to="/blog/poeira-do-saara-brasil-2026">
        poeira do Saara que atravessa o Atlântico
      </InternalLink>
      .
    </P>

    <H3>3. Mudança de ventos e correntes</H3>

    <P>
      Alterações na posição e na intensidade dos alísios e do sistema de alta pressão do Atlântico
      mudaram o caminho da água de superfície. Massas de alga que antes circulavam presas ao
      giro do Atlântico Norte passaram a vazar para o sul, onde encontraram condições melhores.
      Uma vez estabelecida a população tropical, ela deixou de depender da fonte original.
    </P>

    <H3>4. Oceano mais quente</H3>

    <P>
      A temperatura da superfície do mar subiu de forma consistente nas últimas décadas. Até certo
      ponto, água mais quente acelera o metabolismo da alga. Acima de um limiar, porém, o calor
      passa a prejudicá-la — e há indícios de que temporadas extremamente quentes reduzem o
      cinturão em algumas áreas. O sinal do aquecimento, aqui, não é linear.
    </P>

    <DataTable
      headers={['Fator', 'Como atua', 'Efeito no cinturão']}
      rows={[
        ['Nutrientes de rios', 'Nitrogênio e fósforo agrícolas chegam ao mar', 'Alto — sustenta o crescimento contínuo'],
        ['Poeira do Saara', 'Deposita ferro e fósforo no oceano tropical', 'Moderado — adubo sazonal'],
        ['Ventos alísios', 'Definem para onde a biomassa é transportada', 'Alto — decide quem recebe o encalhe'],
        ['Temperatura do mar', 'Acelera ou inibe o metabolismo da alga', 'Variável — depende do limiar térmico'],
        ['Ressurgência costeira', 'Traz nutriente de profundidade para a superfície', 'Local — reforça manchas específicas'],
      ]}
      caption="Fatores que sustentam o Grande Cinturão de Sargaço do Atlântico."
    />

    <H2 id="ecossistemas">O paradoxo ecológico: berçário no mar, desastre na praia</H2>

    <P>
      Aqui está o ponto que quase nunca aparece nas manchetes: o sargaço não é uma praga. Em mar
      aberto, ele é um dos habitats mais ricos do oceano tropical.
    </P>

    <H3>No oceano, é vida</H3>

    <Checklist
      items={[
        'Serve de abrigo e alimento para mais de uma centena de espécies de peixes.',
        'Funciona como berçário para tartarugas marinhas recém-nascidas, que passam seus primeiros anos escondidas nas algas.',
        'Sustenta espécies exclusivas, como o peixe-sapo-do-sargaço, que evoluiu para se camuflar entre as folhas.',
        'Atrai atum, dourado e outras espécies de interesse pesqueiro, que caçam nas bordas das manchas.',
        'Absorve carbono enquanto cresce e afunda parte dele quando a alga morre e desce à profundidade.',
      ]}
    />

    <H3>Na costa, é dano</H3>

    <P>
      O problema é de escala e de lugar. Quando milhares de toneladas encalham em uma praia rasa,
      o efeito se inverte por completo.
    </P>

    <P>
      A camada de alga bloqueia a luz que chega aos corais e às pradarias de capim marinho, que
      morrem em semanas. A decomposição consome o oxigênio da água costeira e cria zonas de
      hipóxia, com mortandade de peixes e invertebrados. Filhotes de tartaruga não conseguem
      atravessar a barreira de alga para chegar ao mar, e fêmeas adultas desistem de desovar.
    </P>

    <Warning title="Gás sulfídrico: o risco invisível do sargaço apodrecendo">
      A decomposição libera gás sulfídrico, de cheiro característico de ovo podre, e amônia. Em
      concentrações elevadas, provocam dor de cabeça, irritação ocular, náusea, tosse e crises em
      pessoas com asma ou bronquite. Grávidas, crianças pequenas, idosos e pessoas com doença
      respiratória devem evitar trechos com grande acúmulo em decomposição. O gás também corrói
      metais: aparelhos de ar-condicionado, eletrônicos e estruturas metálicas próximas às pilhas
      de alga se deterioram mais rápido.
    </Warning>

    <PullQuote author="Consenso entre grupos de pesquisa oceanográfica do Atlântico">
      O sargaço deixou de ser um evento raro para se tornar uma estação do ano. O que muda de
      2011 para cá não é a existência da alga, é a previsibilidade do encalhe.
    </PullQuote>

    <H2 id="brasil">O litoral brasileiro na rota do cinturão</H2>

    <P>
      O Brasil não é o país mais atingido — esse título fica com destinos do Caribe e com o
      México —, mas está longe de ser espectador.
    </P>

    <H3>Onde a alga chega</H3>

    <P>
      A Corrente Norte do Brasil corre ao longo da costa norte no sentido do Caribe e passa
      exatamente pela região onde o cinturão é mais denso. Isso coloca <strong>Amapá, Pará e
      Maranhão</strong> na linha de frente dos encalhes, especialmente entre abril e agosto.
      Trechos do Ceará, do Rio Grande do Norte e até de estados mais ao sul registram episódios
      menores e irregulares, geralmente associados a períodos prolongados de vento de leste.
    </P>

    <H3>Quem sente primeiro</H3>

    <P>
      A pesca artesanal é o setor mais exposto e o menos assistido. Redes entopem, motores de
      popa aspiram alga, o tempo de trabalho aumenta e a captura cai. Em comunidades onde a renda
      depende da saída diária ao mar, uma temporada ruim de sargaço tem efeito imediato no
      orçamento familiar.
    </P>

    <P>
      No turismo, o impacto é reputacional além de operacional: fotos de praia coberta de alga
      circulam rápido e derrubam reservas mesmo em trechos não afetados do mesmo município.
    </P>

    <InfoBox title="Por que o problema não é resolvido com trator">
      Raspar a praia com máquina pesada retira a alga, mas leva junto grande volume de areia,
      acelera a erosão costeira e destrói ninhos de tartaruga enterrados. Os protocolos mais
      modernos priorizam coleta manual acima da linha de maré, barreiras flutuantes ancoradas
      antes da arrebentação e recolhimento da biomassa ainda no mar, quando possível.
    </InfoBox>

    <H2 id="previsao">Dá para prever a chegada do sargaço?</H2>

    <P>
      Em escala regional, sim — e essa é a boa notícia do ponto de vista da gestão costeira.
    </P>

    <P>
      Sensores ópticos a bordo de satélites conseguem distinguir a assinatura espectral da alga
      flutuante em relação à água do mar. A partir dessas imagens, grupos de pesquisa produzem
      mapas mensais de densidade do cinturão para todo o Atlântico tropical. Acoplando esses
      mapas a modelos de corrente e vento, é possível projetar para onde a biomassa vai nas
      semanas seguintes.
    </P>

    <P>
      O acerto é alto para responder "vai ser uma temporada forte ou fraca no Caribe oriental?".
      O acerto cai bastante para responder "a praia X vai amanhecer coberta na terça-feira?",
      porque isso depende de vento local, maré e configuração da linha de costa nos dias
      imediatamente anteriores. Por isso o monitoramento por satélite precisa ser complementado
      por observação local e por acompanhamento diário de vento.
    </P>

    <H3>Ferramentas úteis para acompanhar</H3>

    <Checklist
      items={[
        'Windy: vento, ondas e correntes de superfície em qualquer ponto do Atlântico — ideal para antecipar dias de empilhamento na costa.',
        'Climatempo: previsão costeira brasileira detalhada, com regime de vento por município litorâneo.',
        'AccuWeather: alertas e previsão horária, útil para planejar atividades de praia.',
        'INMET: avisos oficiais de ressaca, ventos costeiros intensos e condições marítimas.',
        'Boletins de sargaço de institutos oceanográficos: mapas mensais de densidade no Atlântico tropical.',
      ]}
    />

    <P>
      Dados de temperatura da superfície do mar e de cor do oceano, base de boa parte desses
      boletins, vêm de programas de observação da{' '}
      <ExternalLink href="https://www.nasa.gov/">NASA</ExternalLink> e da{' '}
      <ExternalLink href="https://www.noaa.gov/">NOAA</ExternalLink>. No Brasil, as condições
      atmosféricas que empurram a alga para a costa são acompanhadas pelo{' '}
      <ExternalLink href="https://portal.inmet.gov.br/">INMET</ExternalLink> e pelo{' '}
      <ExternalLink href="https://www.cptec.inpe.br/">CPTEC/INPE</ExternalLink>.
    </P>

    <CTA>
      Vai à praia no verão ou depende do mar para trabalhar? Acompanhe vento, ondas e alertas
      costeiros atualizados no Clima Tempo antes de sair — a diferença entre um dia bom e um dia
      perdido está quase sempre no regime de vento das 48 horas anteriores.
    </CTA>

    <H2 id="protecao">Como se proteger do sargaço: guia prático</H2>

    <H3>Se você é visitante ou morador do litoral</H3>

    <ol className="my-6 space-y-3 list-decimal pl-6 text-slate-800 leading-relaxed">
      <li>
        <strong>Evite trechos com alga escura e cheiro forte.</strong> Sargaço recém-chegado é
        dourado e praticamente inodoro. Quando escurece e cheira a ovo podre, já está liberando
        gás — mantenha distância.
      </li>
      <li>
        <strong>Fique a favor do vento.</strong> Se precisar passar perto de uma pilha em
        decomposição, posicione-se de forma que o vento leve o odor para longe de você.
      </li>
      <li>
        <strong>Não deixe crianças brincarem nas pilhas.</strong> Além dos gases, há risco de
        cortes por vidro, plástico e material perfurante que vem preso à alga.
      </li>
      <li>
        <strong>Use calçado fechado na faixa de acúmulo.</strong> A camada esconde o solo e
        objetos cortantes.
      </li>
      <li>
        <strong>Evite banho em água turva e amarronzada.</strong> Ali o oxigênio está baixo e a
        concentração de matéria orgânica é alta.
      </li>
      <li>
        <strong>Grupos sensíveis devem se afastar.</strong> Asmáticos, gestantes, idosos e
        crianças pequenas não devem permanecer horas em trecho com decomposição ativa.
      </li>
      <li>
        <strong>Ventile ambientes fechados próximos à praia.</strong> O gás sulfídrico se acumula
        em locais sem circulação de ar.
      </li>
      <li>
        <strong>Comunique ao poder público municipal.</strong> Encalhes de grande porte exigem
        resposta organizada, não limpeza improvisada.
      </li>
    </ol>

    <H3>Se você trabalha com pesca ou turismo</H3>

    <Checklist
      items={[
        'Acompanhe boletins de sargaço e previsão de vento com pelo menos uma semana de antecedência para reprogramar saídas e reservas.',
        'Instale telas de proteção na captação de água dos motores de popa.',
        'Prefira barreiras flutuantes ancoradas à limpeza mecânica da areia: custam menos no médio prazo e preservam a praia.',
        'Registre volume e datas de encalhe — esse histórico é o que sustenta pedido de apoio público e de pesquisa.',
        'Use equipamento de proteção (luvas, botas e máscara) na remoção manual de alga em decomposição.',
        'Verifique se a biomassa coletada pode ser destinada a compostagem licenciada em vez de aterro.',
      ]}
    />

    <H2 id="historico">Dados históricos e comparações</H2>

    <DataTable
      headers={['Período', 'Situação do sargaço no Atlântico', 'Observação']}
      rows={[
        ['Até 2010', 'Concentrado no mar de Sargaços, Atlântico Norte', 'Sistema estável, sem encalhes maciços tropicais'],
        ['2011', 'Primeiro grande cinturão tropical observado por satélite', 'Marco inicial do fenômeno moderno'],
        ['2012–2014', 'Redução temporária', 'Mostrou que a variabilidade entre anos é grande'],
        ['2015', 'Retorno forte, com encalhes severos no Caribe', 'Primeiro alerta econômico regional'],
        ['2018', 'Recorde de biomassa até então', 'Cinturão contínuo África–Caribe'],
        ['2022–2023', 'Novos recordes de extensão', 'Encalhes intensos no Caribe e no México'],
        ['2024–2026', 'Fenômeno consolidado como sazonal', 'Pico recorrente entre abril e agosto'],
      ]}
      caption="Evolução do Grande Cinturão de Sargaço do Atlântico desde o primeiro registro por satélite."
    />

    <P>
      A leitura dessa tabela é mais importante do que qualquer número isolado: o sargaço tropical
      deixou de ser anomalia e virou calendário. Planejamento costeiro que ignora isso está
      planejando para um oceano que não existe mais.
    </P>

    <H2 id="solucoes">O que se faz com tanta alga</H2>

    <H4>Compostagem e adubo</H4>
    <P>
      É o destino mais direto, mas exige cuidado: o sargaço acumula arsênio e metais pesados
      absorvidos da água, o que impede o uso agrícola sem análise e tratamento prévios.
    </P>

    <H4>Energia e materiais</H4>
    <P>
      Projetos-piloto transformam a biomassa em biogás, bioplástico, papel e blocos de
      construção. O gargalo é logístico: coletar, secar e transportar milhares de toneladas de
      material úmido custa caro.
    </P>

    <H4>Coleta no mar</H4>
    <P>
      Recolher a alga antes do encalhe é a solução mais elegante, porque evita o dano ecológico
      na praia e entrega matéria-prima limpa, sem areia. É também a mais cara e a que exige mais
      coordenação entre países.
    </P>

    <H4>Redução de nutrientes na origem</H4>
    <P>
      A medida estrutural é reduzir o escoamento de fertilizante para os rios. É lenta, é
      política e é a única que ataca a raiz do problema em vez do sintoma.
    </P>

    <H2 id="leia-mais">Continue entendendo o oceano em transformação</H2>

    <P>
      O sargaço é um sintoma de um oceano que está mudando de temperatura, de química e de
      circulação ao mesmo tempo. Vale ler também sobre o{' '}
      <InternalLink to="/blog/ondas-calor-marinhas-branqueamento-corais-2026">
        branqueamento global de corais provocado pelas ondas de calor marinhas
      </InternalLink>{' '}
      e sobre como o resfriamento do Pacífico redesenha o clima do Brasil no artigo da{' '}
      <InternalLink to="/blog/la-nina-2026-impactos-brasil-previsao">La Niña em 2026</InternalLink>.
    </P>

    <H2 id="faq">Perguntas frequentes sobre o cinturão de sargaço</H2>

    <FAQ items={sargacoFaq.map((f) => ({ q: f.q, a: f.a }))} />
  </>
);

/* ==========================================================================
   ARTIGO 2: A poeira do Saara aduba mesmo a Amazônia?
   ========================================================================== */

const saaraFaq = [
  {
    q: 'A poeira do Saara realmente fertiliza a Amazônia?',
    a: 'Sim, mas com nuances importantes. A poeira transporta fósforo e outros minerais que se depositam sobre a floresta e repõem parte do nutriente perdido pela lixiviação das chuvas. Estimativas baseadas em satélite indicam que dezenas de milhares de toneladas de fósforo chegam à bacia amazônica por ano dessa forma. O que a ciência não sustenta é a versão simplificada de que a Amazônia "depende" do Saara: a floresta recicla a maior parte dos seus nutrientes internamente, e a poeira funciona como reposição de um saldo negativo, não como fonte principal.',
  },
  {
    q: 'De onde vem exatamente essa poeira?',
    a: 'A maior parte sai de uma área específica no norte do Chade chamada Depressão de Bodélé, um antigo leito de lago seco coberto por sedimentos ricos em restos de organismos microscópicos de água doce. Ventos canalizados entre maciços montanhosos aceleram sobre essa bacia e levantam poeira extremamente fina e rica em fósforo. É a maior fonte individual de poeira mineral do planeta.',
  },
  {
    q: 'Quanto tempo a poeira leva para atravessar o Atlântico?',
    a: 'Entre cinco e sete dias, em média. As partículas sobem a alturas entre 1,5 e 5,5 quilômetros e são carregadas para oeste por uma camada de ar seco e quente conhecida como Camada de Ar Saariano, empurrada pelos ventos alísios. Parte cai no oceano no caminho, parte alcança o Caribe e o norte da América do Sul.',
  },
  {
    q: 'Em que época do ano a poeira chega ao Brasil?',
    a: 'O transporte para a América do Sul é mais intenso no período de dezembro a abril, quando a zona de convergência intertropical está deslocada para o sul e direciona a pluma para a bacia amazônica. Entre junho e agosto, o mesmo mecanismo aponta mais para o norte, e a poeira vai preferencialmente para o Caribe, a Flórida e o Golfo do México.',
  },
  {
    q: 'A poeira do Saara faz mal à saúde?',
    a: 'Pode fazer. As partículas finas inaláveis pioram a qualidade do ar e agravam asma, bronquite e doenças cardiovasculares em episódios intensos, especialmente no Caribe, onde a concentração é maior. No Brasil, a chegada costuma ser mais diluída, mas em eventos fortes o céu fica esbranquiçado e pessoas sensíveis relatam irritação respiratória. Em dias assim, vale reduzir esforço físico ao ar livre e manter hidratação.',
  },
  {
    q: 'A poeira do Saara enfraquece furacões?',
    a: 'Sim, e esse é um dos efeitos mais bem documentados. A Camada de Ar Saariano é seca, quente e vem acompanhada de vento forte em altitude. Os três ingredientes atrapalham a formação de tempestades tropicais: o ar seco corta a convecção, a inversão térmica trava o crescimento das nuvens e o cisalhamento desorganiza o sistema. Temporadas com muita poeira tendem a ter início mais lento no Atlântico.',
  },
  {
    q: 'A poeira também alimenta o oceano?',
    a: 'Alimenta, e talvez esse seja o efeito de maior escala. O ferro e o fósforo depositados no mar estimulam o fitoplâncton, base da cadeia alimentar marinha. O mesmo aporte de nutrientes contribui para o crescimento do sargaço no Atlântico tropical, ligando o deserto africano ao cinturão de algas que atinge o Caribe e o litoral norte do Brasil.',
  },
  {
    q: 'Como acompanhar a chegada da poeira em tempo real?',
    a: 'O aplicativo Windy tem camadas específicas de poeira e de aerossóis que mostram a pluma se deslocando sobre o Atlântico com atualização frequente. Imagens de satélite da NASA registram os episódios em cor natural. Climatempo, AccuWeather e INMET ajudam a acompanhar a qualidade do ar e as condições atmosféricas locais nos dias em que a pluma chega.',
  },
];

export const SaaraAmazonia2026Article: React.FC<{ midImage: string }> = ({ midImage }) => (
  <>
    <FaqSchema items={saaraFaq} />

    <Lead>
      A frase virou lugar-comum: "a Amazônia é adubada pelo deserto do Saara". Ela é boa demais
      para ser ignorada e simples demais para ser inteiramente verdadeira. Vale a pena separar o
      que a ciência mede do que a internet repete.
    </Lead>

    <P>
      A parte verificável é impressionante por si só. Todos os anos, uma quantidade colossal de
      poeira mineral sai do norte da África, sobe alguns quilômetros na atmosfera e cruza o
      oceano Atlântico. Parte dela cai sobre a maior floresta tropical do mundo. Nessa poeira
      viaja fósforo — o nutriente que mais limita o crescimento vegetal em solos antigos e
      lavados como os amazônicos.
    </P>

    <P>
      A parte que exige cuidado é o salto lógico seguinte: dizer que a floresta "depende" do
      deserto. Este artigo explica o mecanismo completo, o que os dados sustentam, o que eles não
      sustentam e por que esse elo entre dois continentes é um dos capítulos mais elegantes da
      ciência do clima.
    </P>

    <H2 id="bodele">Tudo começa num lago que secou</H2>

    <P>
      A poeira que atravessa o Atlântico não sai do Saara inteiro. Ela sai, em sua maior parte,
      de um ponto específico: a <strong>Depressão de Bodélé</strong>, no norte do Chade.
    </P>

    <P>
      Há alguns milhares de anos, aquela região era o fundo de um imenso lago de água doce, o
      antigo Lago Mega-Chade. Quando o clima do norte da África mudou e o lago secou, ficou para
      trás um leito coberto por diatomito — sedimento formado por carapaças de algas
      microscópicas de água doce, extremamente leve e rico em fósforo.
    </P>

    <P>
      A geografia completa o serviço. A depressão fica entre dois maciços montanhosos que
      funcionam como um funil. O vento acelera ao passar por esse corredor e atinge, com
      frequência, velocidade suficiente para arrancar partículas do solo e injetá-las na
      atmosfera. É por isso que uma área relativamente pequena responde por uma fração
      desproporcional de toda a poeira mineral do planeta.
    </P>

    <Highlight title="Por que o fósforo importa tanto">
      Solos amazônicos são antigos e sofreram milhões de anos de chuva intensa. A água lava os
      nutrientes solúveis para os rios e daí para o oceano. O fósforo, em especial, se torna
      escasso. Toda entrada externa de fósforo — por poeira, por cinzas, por sedimento de
      inundação — tem peso no balanço de longo prazo da floresta.
    </Highlight>

    <H2 id="travessia">A travessia: cinco a sete dias sobre o Atlântico</H2>

    <P>
      Levantada do solo, a poeira sobe e se organiza em uma estrutura atmosférica bem definida: a
      Camada de Ar Saariano, uma massa de ar seco, quente e carregada de partículas que ocupa
      alturas entre cerca de 1,5 e 5,5 quilômetros.
    </P>

    <P>
      Empurrada pelos ventos alísios de leste, essa camada se desloca para o oeste sobre o
      oceano. A viagem até o outro lado leva de cinco a sete dias. Ao longo do trajeto, as
      partículas maiores sedimentam e caem no mar; as mais finas seguem adiante e podem alcançar
      o Caribe, a América Central, o sul dos Estados Unidos e a bacia amazônica.
    </P>

    <H3>O calendário da pluma</H3>

    <P>
      O destino muda com a estação, e a chave é a posição da zona de convergência intertropical,
      a faixa de encontro dos alísios dos dois hemisférios.
    </P>

    <DataTable
      headers={['Período', 'Destino preferencial da pluma', 'Efeito principal']}
      rows={[
        ['Dezembro a abril', 'Norte da América do Sul e Amazônia', 'Deposição de fósforo sobre a floresta'],
        ['Junho a agosto', 'Caribe, Flórida e Golfo do México', 'Céu leitoso, ar seco e inibição de furacões'],
        ['Setembro a novembro', 'Transporte reduzido e mais disperso', 'Episódios isolados de menor intensidade'],
      ]}
      caption="O deslocamento sazonal da pluma de poeira do Saara sobre o Atlântico."
    />

    <figure className="my-10">
      <img
        src={midImage}
        alt="Dossel da floresta amazônica ao amanhecer com atmosfera dourada e partículas finas de poeira suspensas entre as árvores"
        loading="lazy"
        width={944}
        height={704}
        className="w-full rounded-xl shadow-lg"
      />
      <figcaption className="text-sm text-slate-600 mt-3 text-center italic">
        Poeira mineral vinda do Saara em suspensão sobre a Amazônia: o adubo que atravessa um
        oceano inteiro antes de chegar ao solo.
      </figcaption>
    </figure>

    <H2 id="o-que-a-ciencia-diz">Aduba mesmo? O que os dados sustentam</H2>

    <P>
      Aqui é preciso ser preciso, porque a resposta honesta é "sim, mas".
    </P>

    <H3>O que está bem estabelecido</H3>

    <Checklist
      items={[
        'A poeira transporta fósforo e chega à bacia amazônica em quantidade mensurável por satélite e por coleta em torres de monitoramento.',
        'Estimativas convergem para dezenas de milhares de toneladas de fósforo depositadas por ano na bacia.',
        'Esse aporte tem a mesma ordem de grandeza do fósforo que a floresta perde anualmente por lixiviação e escoamento para os rios.',
        'A Depressão de Bodélé é a fonte dominante dessa poeira específica.',
        'A mesma poeira fertiliza o oceano, estimulando fitoplâncton e contribuindo para o crescimento do sargaço no Atlântico tropical.',
      ]}
    />

    <H3>O que é exagero</H3>

    <P>
      A imagem de que a Amazônia sobrevive porque o Saara a alimenta não corresponde ao
      funcionamento da floresta. A maior parte dos nutrientes de um ecossistema tropical maduro
      circula em ciclo fechado: folha cai, decompõe rápido no calor e na umidade, e a raiz
      reabsorve quase tudo antes que a chuva leve embora. Esse mecanismo interno responde pela
      esmagadora maioria do nutriente em uso a cada ano.
    </P>

    <P>
      A poeira entra como <strong>reposição de perdas de longo prazo</strong>, não como
      alimentação diária. É a diferença entre o salário e o depósito que cobre o rombo lento da
      conta — ambos importam, mas não são a mesma coisa.
    </P>

    <Warning title="Cuidado com os números redondos que circulam">
      Diversas estimativas de quanto fósforo chega à Amazônia foram feitas com métodos e períodos
      diferentes, e variam bastante entre si. Trabalhos mais recentes apontam que anos de pluma
      fraca e anos de pluma forte podem diferir por um fator de dois ou mais. Qualquer número
      citado como definitivo merece desconfiança; a faixa é o que existe.
    </Warning>

    <PullQuote author="Síntese das pesquisas sobre transporte transatlântico de aerossóis">
      A poeira do Saara não sustenta a Amazônia. Ela impede que a Amazônia empobreça — que é uma
      afirmação menos espetacular e cientificamente mais interessante.
    </PullQuote>

    <H2 id="outros-efeitos">Os outros efeitos da pluma</H2>

    <H3>Furacões mais fracos</H3>

    <P>
      A Camada de Ar Saariano é hostil a ciclones tropicais em três frentes: o ar seco corta a
      convecção que alimenta as tempestades, a inversão térmica trava o crescimento vertical das
      nuvens e o vento forte associado provoca cisalhamento, que desorganiza sistemas em
      formação. Temporadas de furacões com muita poeira costumam ter começo mais lento. Sobre o
      pico da temporada, vale ler nosso guia da{' '}
      <InternalLink to="/blog/temporada-furacoes-atlantico-2026">
        temporada de furacões no Atlântico em 2026
      </InternalLink>
      .
    </P>

    <H3>Qualidade do ar</H3>

    <P>
      Partículas finas inaláveis pioram a qualidade do ar durante episódios intensos. O efeito é
      mais sentido no Caribe, onde a concentração é maior, mas há registro no Brasil de céu
      esbranquiçado e visibilidade reduzida em eventos fortes.
    </P>

    <H3>Céu vermelho e pôr do sol intenso</H3>

    <P>
      Aerossóis espalham a luz solar e produzem entardeceres de cor exagerada. É o efeito mais
      inofensivo e o mais fotografado da pluma.
    </P>

    <H3>Radiação e temperatura</H3>

    <P>
      A poeira reflete parte da radiação solar de volta ao espaço e absorve outra parte em
      altitude, o que resfria levemente a superfície do oceano e aquece a camada onde ela viaja.
      Esse rearranjo influencia a estabilidade atmosférica e a formação de nuvens em toda a
      região.
    </P>

    <H2 id="cuidados">Prevenção e cuidados em dias de poeira</H2>

    <ol className="my-6 space-y-3 list-decimal pl-6 text-slate-800 leading-relaxed">
      <li>
        <strong>Reduza esforço físico ao ar livre</strong> quando o céu estiver leitoso e a
        visibilidade caída sem que haja nuvem de chuva.
      </li>
      <li>
        <strong>Mantenha janelas fechadas nos horários de pico</strong>, geralmente no fim da
        tarde, quando a deposição aumenta.
      </li>
      <li>
        <strong>Hidrate as vias aéreas.</strong> Soro fisiológico nasal e ingestão adequada de
        água reduzem o desconforto — a pluma vem acompanhada de ar seco.
      </li>
      <li>
        <strong>Atenção redobrada com asmáticos e cardiopatas.</strong> Medicação de resgate deve
        estar acessível nesses dias.
      </li>
      <li>
        <strong>Use máscara adequada</strong> se precisar trabalhar ao ar livre por horas em
        episódio intenso; máscara de tecido comum filtra pouco material fino.
      </li>
      <li>
        <strong>Limpe superfícies com pano úmido</strong>, não com vassoura seca, para não
        ressuspender a poeira depositada.
      </li>
      <li>
        <strong>Acompanhe a pluma pelo aplicativo</strong> antes de programar atividade ao ar
        livre prolongada.
      </li>
    </ol>

    <InfoBox title="Dicas de conforto térmico em dias de ar seco">
      A pluma chega com umidade relativa baixa. Beba água em pequenos volumes ao longo do dia,
      use umidificador ou uma bacia com água no quarto à noite, prefira roupas leves de algodão,
      evite banho muito quente e demorado e concentre esforço físico nas primeiras horas da
      manhã, quando a temperatura e a carga de partículas são menores.
    </InfoBox>

    <H2 id="monitorar">Como acompanhar a poeira e o tempo</H2>

    <Checklist
      items={[
        'Windy: possui camadas específicas de poeira e aerossóis; permite ver a pluma cruzando o Atlântico com poucos cliques.',
        'Imagens de satélite da NASA: registram os episódios em cor natural e ajudam a dimensionar a extensão da pluma.',
        'Climatempo: previsão local detalhada e acompanhamento de umidade relativa.',
        'AccuWeather: alertas e índice de qualidade do ar em áreas urbanas.',
        'INMET: avisos meteorológicos oficiais e dados de estações em todo o país.',
      ]}
    />

    <P>
      As observações de aerossóis que sustentam essa área de pesquisa vêm em grande parte de
      programas da <ExternalLink href="https://www.nasa.gov/">NASA</ExternalLink> e da{' '}
      <ExternalLink href="https://www.noaa.gov/">NOAA</ExternalLink>. No Brasil, o{' '}
      <ExternalLink href="https://www.cptec.inpe.br/">CPTEC/INPE</ExternalLink> acompanha
      aerossóis e queimadas, e o{' '}
      <ExternalLink href="https://portal.inmet.gov.br/">INMET</ExternalLink> emite os avisos
      oficiais de tempo seco. O papel da poeira em ecossistemas também aparece nos relatórios do{' '}
      <ExternalLink href="https://www.unep.org/pt-br">Programa das Nações Unidas para o Meio Ambiente</ExternalLink>.
    </P>

    <CTA>
      Quer saber se o ar vai estar seco e carregado amanhã na sua cidade? Consulte a previsão
      detalhada e os alertas em tempo real no Clima Tempo e planeje o dia com informação, não com
      palpite.
    </CTA>

    <H2 id="ciclos">Ciclos naturais explicados: por que isso não é novidade</H2>

    <P>
      O transporte de poeira entre continentes é tão antigo quanto os desertos. Registros em
      testemunhos de gelo e em sedimentos oceânicos mostram que houve períodos, no passado
      geológico, com muito mais poeira circulando do que hoje — em geral épocas mais frias e
      secas, com menos vegetação segurando o solo.
    </P>

    <P>
      O que muda no presente é a nossa capacidade de medir. Satélites com sensores de aerossol
      permitiram, pela primeira vez, quantificar a pluma em três dimensões e acompanhá-la dia a
      dia. Foi essa tecnologia que transformou uma intuição antiga em número — e que também
      revelou o quanto o fenômeno varia de um ano para o outro.
    </P>

    <P>
      A variabilidade, aliás, é o ponto de atenção para o futuro. Mudanças no regime de chuvas do
      Sahel, na cobertura vegetal do norte da África e na intensidade dos alísios podem alterar a
      quantidade de poeira levantada e o caminho que ela percorre. Menos poeira significa menos
      fósforo para a floresta e para o oceano, e menos freio sobre a formação de furacões. Um
      elo, três consequências em continentes diferentes.
    </P>

    <H2 id="relacionados">Leia também</H2>

    <P>
      Se este elo entre deserto, oceano e floresta interessou, veja também o artigo sobre o{' '}
      <InternalLink to="/blog/cinturao-algas-sargaco-atlantico-brasil-2026">
        cinturão de algas do Atlântico que atinge o litoral brasileiro
      </InternalLink>{' '}
      — parcialmente alimentado por essa mesma poeira — e a análise da{' '}
      <InternalLink to="/blog/amazonia-seca-historica-2026">
        seca histórica na Amazônia
      </InternalLink>
      , que mostra o outro lado do balanço hídrico e nutricional da floresta.
    </P>

    <H2 id="faq-saara">Perguntas frequentes sobre a poeira do Saara</H2>

    <FAQ items={saaraFaq.map((f) => ({ q: f.q, a: f.a }))} />
  </>
);
