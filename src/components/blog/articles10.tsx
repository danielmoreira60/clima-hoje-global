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
   ARTIGO: Erupção do Anak Krakatoa — 2026
   ========================================================================== */

const krakatoaFaq = [
  {
    q: 'O que é o Anak Krakatoa e por que ele é tão vigiado?',
    a: 'Anak Krakatau significa "filho do Krakatoa". É o cone vulcânico que emergiu do mar em 1927 dentro da caldeira deixada pela erupção catastrófica de 1883, no Estreito de Sunda, entre as ilhas indonésias de Java e Sumatra. Ele é vigiado de perto porque cresce rápido, fica cercado de água profunda e tem histórico de colapso de flanco, o mecanismo que gerou o tsunami de dezembro de 2018 sem qualquer aviso sísmico prévio.',
  },
  {
    q: 'A erupção do Anak Krakatoa pode mudar o clima do planeta?',
    a: 'Uma erupção do porte atual, com colunas de alguns quilômetros de altura, tem efeito climático global desprezível. Para esfriar o planeta, o vulcão precisaria injetar grande quantidade de dióxido de enxofre acima de aproximadamente 15 quilômetros de altitude, na estratosfera, onde o gás vira aerossol de sulfato e reflete luz solar por meses. Foi isso que a erupção de 1883 fez, derrubando a temperatura média global em cerca de meio grau por alguns anos.',
  },
  {
    q: 'Existe risco de tsunami sem terremoto?',
    a: 'Sim, e esse é justamente o maior perigo do Anak Krakatau. Em 22 de dezembro de 2018, parte do flanco sudoeste do vulcão desabou no mar e deslocou um volume de água que atingiu as costas de Java e Sumatra em menos de 40 minutos, matando mais de 400 pessoas. Não houve tremor perceptível antes. Por isso, no Estreito de Sunda a orientação oficial é tratar ruído forte, chuva de cinzas e recuo anormal do mar como alerta suficiente para subir para terreno alto.',
  },
  {
    q: 'A erupção afeta o clima ou a chuva no Brasil?',
    a: 'Não de forma perceptível. A pluma de cinzas do Anak Krakatau se dispersa em escala regional, sobre a Indonésia e o Oceano Índico, e a quantidade de enxofre lançada está muito abaixo do que seria necessário para alterar temperatura, chuva ou estação no Hemisfério Sul ocidental. Os efeitos sentidos no Brasil em episódios assim ficam restritos, no máximo, a pores do sol um pouco mais avermelhados em erupções muito maiores.',
  },
  {
    q: 'Como se proteger da queda de cinzas vulcânicas?',
    a: 'Feche portas, janelas e entradas de ar, use máscara PFF2 ou N95 ao sair, proteja os olhos com óculos fechados em vez de lentes de contato, cubra caixas d\'água e evite dirigir, porque a cinza reduz a visibilidade e vira lama escorregadia com a chuva. Remova a cinza do telhado quando a camada passar de poucos centímetros, sempre umedecendo antes para não levantar poeira, já que o material é pesado e pode causar desabamento.',
  },
  {
    q: 'Quais aplicativos ajudam a acompanhar erupções e alertas?',
    a: 'Para acompanhamento de plumas, vento e dispersão de cinza, o Windy é o mais completo, com camadas específicas. AccuWeather e Climatempo servem para condição do tempo local e alertas de chuva forte. No Brasil, o app e o site do INMET concentram os avisos meteorológicos oficiais. Para eventos geológicos, os boletins do USGS e do Smithsonian Global Volcanism Program são as fontes técnicas de referência.',
  },
  {
    q: 'A erupção de 1883 realmente causou anos mais frios?',
    a: 'Sim. A erupção de agosto de 1883 lançou cerca de 20 quilômetros cúbicos de material e uma grande carga de enxofre na estratosfera. Nos anos seguintes, registros meteorológicos de várias partes do mundo mostraram queda de temperatura média, verões mais frios no Hemisfério Norte e céus com cores anormais, além de perturbação nos regimes de chuva de monções. O efeito foi se dissipando ao longo de cerca de cinco anos.',
  },
  {
    q: 'Turistas ainda podem visitar o Estreito de Sunda?',
    a: 'A navegação e o turismo na região continuam, mas com raio de exclusão definido pelas autoridades indonésias em torno da ilha, que varia conforme o nível de alerta. Desembarcar no cone ou navegar dentro do raio proibido é perigoso e ilegal durante períodos de atividade elevada. Antes de qualquer passeio, confirme o nível de alerta vigente e contrate operadores que respeitem as restrições oficiais.',
  },
];

export const AnakKrakatoa2026Article: React.FC<{ midImage: string }> = ({ midImage }) => (
  <div>
    <FaqSchema items={krakatoaFaq} />

    <Lead>
      O vulcão que em 1883 escureceu céus do mundo inteiro e derrubou a temperatura média do planeta voltou a
      dar sinais fortes de vida. O Anak Krakatau, o cone que nasceu das ruínas daquela explosão, entrou em uma
      nova fase de atividade intensa no Estreito de Sunda, na Indonésia, e reacendeu uma pergunta que atravessa
      gerações: até onde um vulcão de ilha consegue mexer com o clima e com a vida de quem mora na costa?
    </Lead>

    <P>
      Quem navega o Estreito de Sunda conhece a rotina. O mar quase sempre calmo, o tráfego pesado de balsas
      entre Java e Sumatra, e no horizonte um cone escuro, baixo, aparentemente inofensivo, soltando fumaça
      branca. É esse cone que já matou dezenas de milhares de pessoas em duas ocasiões distintas, com
      mecanismos completamente diferentes, e que hoje ocupa o topo da lista de vulcões monitorados minuto a
      minuto no Sudeste Asiático.
    </P>

    <P>
      Neste guia, você vai entender o que está acontecendo agora, por que a erupção do Anak Krakatoa é
      diferente de tudo o que se vê em vulcões continentais, o que a ciência sabe sobre o efeito de erupções no
      clima, e quais são as medidas práticas de prevenção e cuidados para quem vive perto de áreas vulcânicas
      ou pretende viajar para elas.
    </P>

    <H2 id="o-que-esta-acontecendo">O que está acontecendo com o Anak Krakatoa</H2>

    <P>
      A fase atual é do tipo que os vulcanólogos chamam de atividade estromboliana a vulcaniana: explosões
      rítmicas no cratera central, arremesso de blocos incandescentes a centenas de metros, colunas de cinza
      que sobem alguns quilômetros e se inclinam com o vento predominante. É espetacular à distância e
      perigosa de perto.
    </P>

    <P>
      Esse padrão é típico do Anak Krakatau desde que ele emergiu do mar, em 1927. O cone se construiu em
      camadas alternadas de lava e material fragmentado, empilhadas rápido demais dentro de uma caldeira
      submarina com paredes íngremes. É um edifício jovem, mal consolidado e apoiado sobre encostas
      submersas que mergulham centenas de metros. Essa geometria é o coração do problema.
    </P>

    <Highlight title="Em uma frase">
      O risco imediato do Anak Krakatoa não é a lava nem a cinza: é a possibilidade de um pedaço da montanha
      escorregar para dentro do mar e empurrar uma onda até a costa em menos de uma hora.
    </Highlight>

    <H3>Por que esse vulcão cresce e desmorona em ciclos</H3>

    <P>
      O Anak Krakatau ganha altura em surtos eruptivos e perde altura em colapsos. Depois do desabamento de
      2018, o cone caiu de mais de 300 metros para pouco mais de 100 metros e, nos anos seguintes, voltou a
      crescer com novas camadas. É um ciclo geológico observável em escala humana, algo raro no mundo dos
      vulcões e uma das razões pelas quais o lugar virou laboratório natural para pesquisadores do mundo todo.
    </P>

    <figure className="my-8">
      <img
        src={midImage}
        alt="Moradores de vila costeira indonésia usando máscaras enquanto removem cinza vulcânica de telhados e ruas após erupção do Anak Krakatoa"
        loading="lazy"
        width={944}
        height={704}
        className="w-full rounded-xl shadow-lg"
      />
      <figcaption className="text-sm text-slate-600 mt-3 text-center italic">
        Limpeza de cinza vulcânica em vila costeira indonésia: a queda de material fino é o impacto mais
        frequente das erupções no Estreito de Sunda.
      </figcaption>
    </figure>

    <H2 id="1883">1883: quando um vulcão mexeu com o clima do planeta</H2>

    <P>
      Para entender o presente, é preciso voltar a 26 e 27 de agosto de 1883. A ilha do Krakatoa se destruiu
      em uma sequência de explosões cujo estrondo foi ouvido a milhares de quilômetros de distância, na
      Austrália e em ilhas do Oceano Índico. Cerca de dois terços da ilha desapareceram. Tsunamis com
      dezenas de metros varreram as costas de Java e Sumatra e mataram mais de 36 mil pessoas.
    </P>

    <P>
      O efeito climático veio depois. A erupção injetou uma enorme carga de dióxido de enxofre na
      estratosfera, acima da altitude em que a chuva limpa a atmosfera. Lá em cima, o gás se converte em
      minúsculas gotas de ácido sulfúrico que refletem parte da luz solar de volta para o espaço. O resultado
      foi um resfriamento global de cerca de 0,5 °C, verões anormalmente frios no Hemisfério Norte e
      alterações no regime de monções que duraram anos.
    </P>

    <PullQuote author="Registro histórico da Royal Society, 1888">
      Durante meses, observadores em quatro continentes descreveram o mesmo fenômeno: um anel azulado ao
      redor do sol e crepúsculos vermelhos que não pertenciam a nenhum céu conhecido.
    </PullQuote>

    <H3>Dados históricos de erupções e efeito no clima</H3>

    <DataTable
      headers={['Erupção', 'Ano', 'Índice VEI', 'Efeito estimado na temperatura global']}
      rows={[
        ['Tambora (Indonésia)', '1815', '7', 'Queda de 0,4 a 0,7 °C; "ano sem verão" em 1816'],
        ['Krakatoa (Indonésia)', '1883', '6', 'Queda de cerca de 0,5 °C por até 5 anos'],
        ['Santa Maria (Guatemala)', '1902', '6', 'Resfriamento regional discreto'],
        ['Pinatubo (Filipinas)', '1991', '6', 'Queda de cerca de 0,5 °C em 1992-1993'],
        ['Anak Krakatau (colapso)', '2018', '3', 'Sem efeito climático global; tsunami local devastador'],
        ['Hunga Tonga (Pacífico)', '2022', '5-6', 'Pouco enxofre, muito vapor d\'água; efeito líquido pequeno'],
      ]}
      caption="Comparação histórica entre grandes erupções e seus efeitos documentados sobre a temperatura global."
    />

    <InfoBox title="Ciclos climáticos explicados: por que enxofre importa mais que cinza">
      A cinza é pesada e cai em dias ou semanas. O que realmente altera o clima é o enxofre que atinge a
      estratosfera e vira aerossol de sulfato, capaz de circular o globo e permanecer suspenso por dois a três
      anos. Por isso duas erupções de tamanho parecido podem ter efeitos climáticos radicalmente diferentes:
      tudo depende de quanto enxofre sobe e de quão alto ele chega.
    </InfoBox>

    <H2 id="2018">2018: o tsunami que ninguém viu chegar</H2>

    <P>
      Na noite de 22 de dezembro de 2018, cerca de 64 milhões de metros cúbicos do flanco sudoeste do Anak
      Krakatau desabaram no mar. A onda gerada atingiu Banten e Lampung em menos de 40 minutos. Mais de 400
      pessoas morreram, muitas delas em um show à beira-mar.
    </P>

    <P>
      O detalhe técnico que transformou aquele evento em referência mundial é este: os sistemas de alerta de
      tsunami da época eram baseados em sismógrafos, projetados para detectar terremotos submarinos. Um
      deslizamento vulcânico não produz o sinal sísmico esperado. O sistema não disparou porque estava
      procurando a coisa errada.
    </P>

    <Warning title="Alerta que salva vidas em qualquer litoral">
      Em regiões vulcânicas costeiras, não espere sirene. Se o mar recuar de forma anormal, se houver estrondo
      forte vindo do oceano ou se começar chuva de cinza intensa, suba imediatamente para terreno alto e só
      volte após liberação oficial. O tempo entre o colapso e a onda pode ser inferior a 30 minutos.
    </Warning>

    <H2 id="impactos">Impactos reais de uma erupção como a atual</H2>

    <H3>Sobre a população vizinha</H3>

    <Checklist
      items={[
        'Queda de cinza fina em vilas costeiras de Java e Sumatra, com prejuízo à lavoura e à água armazenada',
        'Aumento de atendimentos por crise respiratória, principalmente em asmáticos, idosos e crianças',
        'Suspensão intermitente da pesca artesanal e de rotas de balsa no Estreito de Sunda',
        'Risco permanente de tsunami local por colapso de flanco, sem aviso sísmico prévio',
      ]}
    />

    <H3>Sobre a aviação</H3>

    <P>
      Cinza vulcânica é abrasiva e derrete dentro das turbinas, onde volta a solidificar e obstrui o fluxo de
      ar. Por isso, colunas de cinza geram desvios de rota e códigos de cor emitidos pelos centros de aviso
      internacionais. O impacto costuma ser regional, mas em erupções maiores pode fechar corredores aéreos
      inteiros por dias.
    </P>

    <H3>Sobre o clima local e o conforto térmico</H3>

    <P>
      Em dias de pluma densa, a chegada de radiação solar cai e a temperatura do ar próxima ao vulcão pode
      recuar alguns graus. Ao mesmo tempo, a umidade alta somada à poeira em suspensão deixa a sensação
      térmica pesada e o ar irritante. É um desconforto diferente do calor comum, e exige cuidados próprios.
    </P>

    <Highlight title="Dicas de conforto térmico em dias de cinza e ar carregado">
      Prefira ambientes fechados com ventilador em circulação interna, em vez de abrir janelas. Mantenha panos
      úmidos nas frestas para reter poeira. Beba água em intervalos curtos, mesmo sem sede, porque o ar seco
      com particulado desidrata rápido. Use roupas leves de algodão e evite esforço físico ao ar livre entre
      10h e 16h.
    </Highlight>

    <H2 id="como-se-proteger">Como se proteger de uma erupção vulcânica: prevenção e cuidados</H2>

    <H4>1. Antes: prepare o essencial</H4>
    <P>
      Monte um kit com máscaras PFF2 ou N95, óculos de proteção fechados, lanterna, rádio a pilha, água para
      três dias, remédios de uso contínuo e cópias de documentos em saco plástico. Combine com a família um
      ponto de encontro em terreno alto e um contato fora da região.
    </P>

    <H4>2. Durante a queda de cinza</H4>
    <P>
      Fique dentro de casa com portas e janelas fechadas. Desligue o ar-condicionado que puxa ar externo.
      Cubra a caixa d'água e não use água da chuva para beber. Se precisar sair, use máscara e óculos, e nunca
      lentes de contato. Dirigir só em caso de necessidade, em baixa velocidade e com faróis acesos.
    </P>

    <H4>3. Limpeza do telhado</H4>
    <P>
      A cinza é muito mais pesada que a neve e mais pesada ainda quando molha. Camadas acima de poucos
      centímetros já ameaçam estruturas leves. Umedeça levemente antes de remover, para não levantar poeira,
      use pá plástica e nunca trabalhe sozinho sobre a laje.
    </P>

    <H4>4. Sinal de tsunami</H4>
    <P>
      Estrondo, recuo súbito do mar ou tremor do chão em litoral vulcânico significam evacuação imediata a pé,
      na direção do terreno mais alto ou mais distante da praia. Carro engarrafa; pé não.
    </P>

    <CTA>
      Acompanhe alertas de tempo severo, chuva forte e risco ambiental em tempo real na página inicial do
      Clima Hoje e ative as notificações do sino no topo do site para receber avisos da sua região.
    </CTA>

    <H2 id="monitoramento">Melhores apps de monitoramento climático e vulcânico</H2>

    <DataTable
      headers={['Ferramenta', 'Melhor uso', 'Custo']}
      rows={[
        ['Windy', 'Camadas de dispersão de cinza, vento em altitude e ondas', 'Gratuito com plano pago opcional'],
        ['AccuWeather', 'Previsão local detalhada e alertas de tempo severo', 'Gratuito com anúncios'],
        ['Climatempo', 'Previsão e avisos focados no Brasil', 'Gratuito com plano pago opcional'],
        ['INMET', 'Avisos meteorológicos oficiais brasileiros por município', 'Gratuito'],
        ['Volcanoes & Earthquakes', 'Boletins de erupções e sismos em escala global', 'Gratuito'],
      ]}
      caption="Aplicativos úteis para acompanhar tanto tempo severo quanto atividade geológica."
    />

    <InfoBox title="Alertas governamentais: onde estão as fontes oficiais">
      Na Indonésia, o órgão responsável pelo nível de alerta vulcânico é o serviço geológico nacional. No
      Brasil, os avisos meteorológicos oficiais são emitidos pelo{' '}
      <ExternalLink href="https://portal.inmet.gov.br/">INMET</ExternalLink> e as previsões de tempo e clima
      pelo <ExternalLink href="https://www.cptec.inpe.br/">CPTEC/INPE</ExternalLink>. Para atividade sísmica e
      vulcânica global, consulte o <ExternalLink href="https://www.usgs.gov/programs/VHP">USGS Volcano Hazards Program</ExternalLink>{' '}
      e as imagens de satélite divulgadas pela{' '}
      <ExternalLink href="https://earthobservatory.nasa.gov/">NASA Earth Observatory</ExternalLink>.
    </InfoBox>

    <H2 id="clima">Afinal, a erupção atual pode alterar o clima?</H2>

    <P>
      A resposta honesta é não, pelo menos não na escala global. Colunas de poucos quilômetros não alcançam a
      estratosfera tropical, que na região do equador começa por volta de 16 a 17 quilômetros de altitude.
      Sem enxofre lá em cima, não há aerossol duradouro; sem aerossol duradouro, não há resfriamento planetário.
    </P>

    <P>
      O que existe é um efeito local e sazonal: menos radiação solar chegando ao solo sob a pluma, chuva
      ligeiramente mais suja e episódios de crepúsculo colorido em ilhas vizinhas. Nada comparável ao que se
      observou depois de 1883 ou depois do Pinatubo, em 1991.
    </P>

    <P>
      Vale registrar o contraste com o oposto: eventos climáticos de origem oceânica e atmosférica, como o El
      Niño e a La Niña, alteram chuva e temperatura no Brasil todos os anos, com muito mais consequência
      prática do que qualquer erupção indonésia. Se o seu interesse é entender o que de fato muda a sua
      estação, comece por{' '}
      <InternalLink to="/blog/la-nina-2026-impactos-brasil-previsao">
        os impactos da La Niña em 2026
      </InternalLink>{' '}
      e pela análise sobre{' '}
      <InternalLink to="/blog/super-el-nino-2026">o Super El Niño</InternalLink>. Para quem acompanha
      geologia, vale também a leitura sobre{' '}
      <InternalLink to="/blog/terremoto-indonesia-7-7-mar-de-banda-2026">
        o terremoto de magnitude 7,7 na Indonésia
      </InternalLink>.
    </P>

    <H2 id="ciclos">Ciclos naturais explicados: por que a Indonésia concentra vulcões</H2>

    <P>
      O arquipélago indonésio se apoia sobre uma das zonas de subducção mais ativas do mundo. A placa
      Indo-Australiana mergulha por baixo da placa da Sonda a uma taxa da ordem de 6 a 7 centímetros por ano.
      À medida que a crosta oceânica afunda, ela libera água, que reduz o ponto de fusão do manto acima e
      gera magma. Esse magma sobe e alimenta uma fileira de mais de uma centena de vulcões ativos.
    </P>

    <P>
      O Estreito de Sunda fica exatamente na curva onde essa fileira muda de direção, entre Sumatra e Java.
      É uma zona de fraqueza estrutural, o que explica por que o mesmo lugar produziu 1883 e continua
      produzindo cones novos quase um século e meio depois.
    </P>

    <H3>Estações e o que muda na prática</H3>

    <P>
      A estação das monções, entre novembro e março, muda a dinâmica do risco. A chuva pesada sobre depósitos
      de cinza fresca gera lahares, fluxos de lama vulcânica que descem por vales com velocidade e força
      destrutiva. Não é a erupção que mata nesse caso, mas o que ela deixou no chão semanas antes.
    </P>

    <Warning title="Cuidado com o segundo desastre">
      Historicamente, os lahares pós-erupção causam tantas mortes quanto a explosão original. Nunca ocupe
      vales e leitos de rio a jusante de um vulcão em atividade durante a estação chuvosa.
    </Warning>

    <H2 id="lições">O que o mundo aprendeu com o Anak Krakatau</H2>

    <P>
      Depois de 2018, redes de monitoramento no Estreito de Sunda passaram a combinar sismógrafos com
      inclinômetros, sensores de pressão no fundo do mar, câmeras térmicas e interferometria de radar por
      satélite, capaz de detectar deformações milimétricas no cone. A lógica mudou: em vez de esperar o
      terremoto, o objetivo é enxergar a montanha se inclinando antes do colapso.
    </P>

    <P>
      Essa mudança de paradigma influenciou protocolos costeiros em vários países, inclusive discussões sobre
      alerta rápido em litorais com risco de deslizamento submarino. É um dos casos mais claros de ciência
      aplicada nascendo de uma tragédia.
    </P>

    <PullQuote>
      Sistemas de alerta não falham só por falta de tecnologia. Falham quando são construídos para o desastre
      que a gente imagina, e não para o que a natureza é capaz de fazer.
    </PullQuote>

    <H2 id="faq">Perguntas frequentes sobre a erupção do Anak Krakatoa</H2>

    <FAQ items={krakatoaFaq.map((f) => ({ q: f.q, a: f.a }))} />

    <H2 id="conclusao">Conclusão</H2>

    <P>
      O Anak Krakatoa não vai esfriar o planeta com a atividade atual, e é importante dizer isso com clareza
      em um cenário onde eventos naturais viram manchete exagerada em poucas horas. Mas ele continua sendo um
      dos vulcões mais perigosos do mundo por um motivo específico e pouco intuitivo: a ameaça está na
      geometria instável do cone dentro d'água, não na violência da explosão.
    </P>

    <P>
      Para quem mora longe, fica a lição científica de como um vulcão pode, sim, mexer com o clima quando
      atinge a escala certa. Para quem mora perto, fica a lição prática: em litoral vulcânico, confiar apenas
      na sirene é apostar contra o relógio.
    </P>

    <CTA>
      Quer acompanhar terremotos, vulcões e eventos extremos em um mapa mundial atualizado? Explore o Monitor
      Geológico e Climático Global na página inicial do Clima Hoje.
    </CTA>
  </div>
);
