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
   ARTIGO 1: Terremoto de magnitude 7,7 na Indonésia — 14 de agosto de 2026
   ========================================================================== */

const indonesiaFaq = [
  {
    q: 'Onde exatamente foi o terremoto de magnitude 7,7 na Indonésia em 2026?',
    a: 'O epicentro foi registrado no arco de Sonda Oriental, na região entre o Mar de Banda e o Mar de Savu, no leste do arquipélago indonésio, a cerca de 49 quilômetros da localidade mais próxima. O tremor de 14 de agosto de 2026 foi sentido em ilhas da Nusa Tenggara Oriental, em Timor-Leste e no litoral norte da Austrália, com relatos de balanço prolongado em edifícios altos de Darwin.',
  },
  {
    q: 'O terremoto de 7,7 na Indonésia gerou tsunami?',
    a: 'A agência indonésia emitiu alerta preventivo de tsunami para trechos do litoral próximo ao epicentro logo após o tremor, com evacuação de comunidades costeiras. Terremotos profundos costumam deslocar menos água que os rasos de mesma magnitude, o que reduz a chance de ondas destrutivas — mas o protocolo correto é sempre evacuar primeiro e confirmar depois, porque o intervalo entre o tremor e a primeira onda pode ser de poucos minutos.',
  },
  {
    q: 'Por que a Indonésia tem tantos terremotos fortes?',
    a: 'O país está sobre o encontro de quatro grandes domínios tectônicos: a placa Indo-Australiana, a placa Eurasiana (microplaca de Sonda), a placa das Filipinas e o bloco do Mar de Banda. Essa convergência forma zonas de subducção que produzem terremotos rasos, intermediários e profundos, além de mais de 120 vulcões ativos. É o trecho mais complexo de todo o Anel de Fogo do Pacífico.',
  },
  {
    q: 'Terremoto de magnitude 7,7 é considerado forte?',
    a: 'Sim. Na escala de magnitude de momento, 7,7 pertence à faixa dos grandes terremotos e libera aproximadamente 22 vezes mais energia que um evento de magnitude 6,7. O impacto real, porém, depende da profundidade do foco, da distância até áreas povoadas, do tipo de solo e da qualidade das construções — um 7,7 profundo em área oceânica pode causar menos danos que um 6,2 raso sob uma cidade.',
  },
  {
    q: 'O que fazer durante um terremoto se você estiver dentro de casa?',
    a: 'Aplique a sequência abaixe-se, proteja-se e segure-se: agache-se no chão, proteja cabeça e pescoço sob uma mesa resistente e segure-se até o tremor terminar. Fique longe de janelas, espelhos, estantes e objetos suspensos. Não corra para a rua durante o abalo, porque a maior parte das lesões acontece com queda de fachadas, telhas e vidros junto às saídas dos prédios.',
  },
  {
    q: 'Quais são os sinais naturais de alerta de tsunami?',
    a: 'Três sinais dispensam qualquer aviso oficial: um tremor forte o suficiente para dificultar ficar em pé, o recuo repentino do mar deixando o fundo exposto, e um ruído contínuo parecido com o de um trem ou de um avião vindo do oceano. Diante de qualquer um deles, o procedimento é subir imediatamente para terreno alto, a pelo menos 30 metros de altitude ou 3 quilômetros da linha da costa.',
  },
  {
    q: 'O Brasil corre risco de terremotos e tsunamis como os da Indonésia?',
    a: 'O Brasil fica no interior da placa Sul-Americana, longe de bordas ativas, e por isso registra apenas sismos intraplaca de magnitude geralmente baixa a moderada. Tsunamis destrutivos gerados no Atlântico são raríssimos. O risco brasileiro está concentrado em outros extremos climáticos, como enchentes, ciclones-bomba, secas e ondas de calor.',
  },
  {
    q: 'Quais aplicativos avisam sobre terremotos e tsunamis em tempo real?',
    a: 'Para sismos, os serviços de referência são o do Serviço Geológico dos Estados Unidos e os boletins do centro de alerta de tsunami do Pacífico, ambos com notificações automáticas. Para condições meteorológicas durante e após o desastre, Windy, AccuWeather e Climatempo ajudam a acompanhar chuva, vento e mar. No Brasil, INMET, CPTEC/INPE e a Defesa Civil pelo 199 e pelo SMS 40199 concentram os alertas oficiais.',
  },
];

export const TerremotoIndonesia2026Article: React.FC<{ midImage: string }> = ({ midImage }) => (
  <>
    <FaqSchema items={indonesiaFaq} />

    <Lead>
      Às 18h58 do dia 14 de agosto de 2026, um <strong>terremoto de magnitude 7,7</strong> sacudiu
      o arco de Sonda Oriental, no leste da Indonésia, e foi sentido em três países ao mesmo
      tempo: Indonésia, Timor-Leste e norte da Austrália. Em minutos, comunidades costeiras
      receberam alerta de tsunami e subiram para terreno alto. Este guia reúne o que se sabe do
      evento, por que aquela região é a mais sísmica do planeta e como se proteger de terremotos e
      maremotos passo a passo.
    </Lead>

    <P>
      Poucas horas depois do abalo, imagens de estradas rachadas, casas de alvenaria com fachadas
      colapsadas e telhados metálicos retorcidos começaram a circular. O tremor foi
      suficientemente longo para que moradores relatassem dificuldade em permanecer de pé — um
      indicador prático de intensidade que, em campo, vale mais do que qualquer número.
    </P>

    <P>
      O epicentro ficou a cerca de 49 quilômetros da localidade mais próxima, em uma faixa de mar
      entre a cadeia de ilhas da Nusa Tenggara e a bacia do Mar de Banda. É uma das regiões
      tectonicamente mais complicadas do mundo, onde placas não apenas se chocam: elas giram,
      dobram e mergulham em direções diferentes ao mesmo tempo.
    </P>

    <Highlight title="Resumo rápido do terremoto de 14 de agosto de 2026">
      Magnitude 7,7 · região do arco de Sonda Oriental, entre o Mar de Banda e o Mar de Savu ·
      cerca de 49 km do ponto habitado mais próximo · sentido na Indonésia, em Timor-Leste e no
      norte da Austrália · alerta preventivo de tsunami emitido para o litoral próximo ·
      evacuações imediatas de vilas pesqueiras · réplicas esperadas por semanas.
    </Highlight>

    <H2 id="o-que-aconteceu">O que aconteceu no dia 14 de agosto de 2026</H2>

    <P>
      O terremoto ocorreu no fim da tarde, horário local, quando boa parte da população estava em
      casa ou voltando do trabalho. Esse detalhe é relevante: a hora do dia é uma das variáveis
      que mais influenciam o número de vítimas em desastres sísmicos, porque define quantas
      pessoas estão dentro de edificações vulneráveis.
    </P>

    <H3>Como o abalo foi percebido em cada país</H3>

    <P>
      Na Indonésia, o tremor foi descrito como forte e prolongado nas ilhas próximas ao epicentro,
      com queda de objetos, rachaduras em paredes e interrupção de energia em bairros inteiros. Em
      Timor-Leste, houve balanço perceptível em edifícios de vários andares e pânico em áreas
      urbanas. No norte da Austrália, a percepção foi de oscilação lenta, típica de ondas sísmicas
      de período longo que viajam centenas de quilômetros e fazem prédios altos balançarem sem
      causar dano estrutural.
    </P>

    <PullQuote author="Princípio básico da sismologia aplicada">
      Terremotos não matam pessoas; edificações mal construídas e a falta de plano de evacuação
      matam pessoas.
    </PullQuote>

    <H3>O alerta de tsunami e a janela de poucos minutos</H3>

    <P>
      Sempre que um sismo forte acontece sob o mar ou perto dele, os centros de alerta trabalham
      com um princípio conservador: avisar primeiro, confirmar depois. É o oposto da lógica
      cotidiana, mas é a única abordagem compatível com a física do fenômeno. Em uma costa
      próxima ao epicentro, a primeira onda pode chegar em 10, 15 ou 20 minutos — tempo insuficiente
      para qualquer confirmação por instrumentos de nível do mar.
    </P>

    <Warning title="Se o chão tremer forte perto do litoral, não espere pelo alerta">
      Um tremor que dificulta ficar em pé por mais de 20 segundos já é, por si só, um alerta
      natural de tsunami. Suba imediatamente para terreno alto, sem esperar sirene, notificação de
      aplicativo ou aviso na televisão. Só volte quando as autoridades declararem o encerramento
      oficial — a segunda ou a terceira onda costuma ser maior que a primeira.
    </Warning>

    <H2 id="por-que-indonesia">Por que a Indonésia é o país mais sísmico do mundo</H2>

    <P>
      O arquipélago indonésio se formou exatamente sobre o encontro de grandes blocos da crosta
      terrestre. Não é uma fronteira simples entre duas placas, como acontece na costa oeste da
      América do Sul: é um nó tectônico.
    </P>

    <H3>Quatro domínios tectônicos em colisão</H3>

    <P>
      A placa Indo-Australiana avança para o norte a cerca de 7 centímetros por ano e mergulha sob
      a microplaca de Sonda, gerando a fossa de Java. Mais a leste, a placa do Mar das Filipinas
      pressiona a região por outro ângulo, enquanto o bloco do Mar de Banda gira em um arco
      apertado, dobrado sobre si mesmo como uma ferradura. O resultado é um mosaico de falhas com
      todos os tipos de movimento possíveis.
    </P>

    <H4>O que é subducção, sem jargão</H4>

    <P>
      Imagine duas folhas de papel empurradas uma contra a outra sobre uma mesa. Uma delas desliza
      por baixo. Na crosta terrestre, a placa oceânica, mais densa, afunda sob a continental e
      desce para o manto. Esse mergulho não é suave: as duas superfícies travam, acumulam tensão
      por décadas ou séculos e depois deslizam de uma vez. Esse deslizamento súbito é o terremoto.
    </P>

    <H3>Terremotos rasos, intermediários e profundos</H3>

    <P>
      No Mar de Banda existe uma particularidade importante: a placa que mergulha é tão inclinada
      que gera sismos a mais de 600 quilômetros de profundidade, entre os mais profundos já
      registrados no planeta. Quanto maior a profundidade, mais a energia se dissipa antes de
      chegar à superfície, e menor tende a ser o dano local — em compensação, o tremor é sentido
      em uma área muito mais ampla.
    </P>

    <DataTable
      headers={['Profundidade do foco', 'Classificação', 'Efeito típico na superfície']}
      rows={[
        ['0 a 70 km', 'Raso', 'Dano local intenso; maior potencial de tsunami'],
        ['70 a 300 km', 'Intermediário', 'Dano moderado; sentido em área muito ampla'],
        ['300 a 700 km', 'Profundo', 'Balanço longo em prédios altos; baixo risco de tsunami'],
      ]}
      caption="Como a profundidade do foco muda o impacto de um terremoto de mesma magnitude"
    />

    <img
      src={midImage}
      alt="Moradores de vila pesqueira evacuando para terreno alto após alerta de tsunami do terremoto na Indonésia em 2026"
      loading="lazy"
      width={944}
      height={704}
      className="w-full rounded-xl shadow-lg my-10"
    />

    <H2 id="dados-historicos">Dados históricos de terremotos na Indonésia e no Anel de Fogo</H2>

    <P>
      Para dimensionar o evento de 2026, vale olhar para a série histórica. A Indonésia concentra
      alguns dos desastres sísmicos mais graves da era moderna, quase sempre pela combinação de
      magnitude alta, foco raso e litoral densamente povoado.
    </P>

    <DataTable
      headers={['Ano', 'Local', 'Magnitude', 'Marca deixada']}
      rows={[
        ['2004', 'Sumatra–Andamão', '9,1', 'Tsunami no Oceano Índico; catástrofe humanitária em 14 países'],
        ['2005', 'Nias, Sumatra', '8,6', 'Réplica gigante do evento de 2004, com colapso de edificações'],
        ['2006', 'Sul de Java', '7,7', 'Tsunami localizado em Pangandaran, com ondas de vários metros'],
        ['2018', 'Palu, Sulawesi', '7,5', 'Tsunami de baía e liquefação de solo em bairros inteiros'],
        ['2018', 'Lombok', '6,9', 'Sequência de tremores com forte impacto no turismo local'],
        ['2026', 'Sonda Oriental / Mar de Banda', '7,7', 'Alerta de tsunami em três países e evacuações costeiras'],
      ]}
      caption="Terremotos de referência na Indonésia e magnitude aproximada registrada"
    />

    <InfoBox title="Por que Palu, em 2018, foi tão letal com magnitude menor">
      O terremoto de Palu teve magnitude 7,5, inferior ao de 2026, mas foi devastador por três
      motivos somados: foco raso, ruptura de falha transcorrente muito próxima à cidade e um solo
      arenoso saturado que sofreu liquefação — o terreno perdeu resistência e passou a se comportar
      como líquido, engolindo casas. É a prova de que magnitude, sozinha, não prevê tragédia.
    </InfoBox>

    <H2 id="clima-e-terremoto">A conexão entre terremoto e previsão do tempo</H2>

    <P>
      Terremotos não são fenômenos meteorológicos — nenhum tipo de clima os provoca, e não existe
      "tempo de terremoto". Mas as condições atmosféricas determinam boa parte do sofrimento que
      vem depois do abalo, e é aí que a previsão do tempo entra como ferramenta de resposta.
    </P>

    <H3>Chuva sobre encostas já fragilizadas</H3>

    <P>
      Um tremor forte abre microfissuras em taludes, afrouxa blocos rochosos e desestabiliza
      encostas. Se uma frente de chuva chegar nos dias seguintes, o risco de deslizamento dispara
      mesmo com volumes de precipitação que, em situação normal, seriam inofensivos. Por isso,
      equipes de defesa civil monitoram radar e previsão de curto prazo com atenção redobrada em
      área pós-sismo.
    </P>

    <H3>Calor, umidade e abrigos improvisados</H3>

    <P>
      O leste indonésio está em pleno domínio tropical, com temperaturas elevadas e umidade alta o
      ano inteiro. Famílias que passam a dormir ao ar livre por medo de réplicas ficam expostas ao
      calor durante o dia e a pancadas de chuva à noite. Aplicar <strong>dicas de conforto
      térmico</strong> em abrigo improvisado — sombra, ventilação cruzada, hidratação constante,
      roupas leves de algodão — deixa de ser detalhe e vira medida de saúde pública.
    </P>

    <Checklist
      items={[
        'Beba água em pequenos goles ao longo de todo o dia, mesmo sem sede',
        'Monte o abrigo em local sombreado e com passagem de ar, longe de muros e taludes',
        'Reserve as tarefas físicas para o começo da manhã ou o fim da tarde',
        'Use roupas claras, leves e de tecido natural; proteja a cabeça do sol direto',
        'Fique atento a sinais de exaustão pelo calor: tontura, náusea, pele fria e pegajosa',
      ]}
    />

    <CTA>
      Acompanhe as condições do tempo em qualquer cidade do mundo em tempo real com o painel do
      Clima Hoje e ative os alertas para receber avisos de chuva forte, vento e calor extremo.
    </CTA>

    <H2 id="como-se-proteger">Como se proteger de terremotos: guia em três tempos</H2>

    <H3>Antes: a preparação que salva minutos</H3>

    <P>
      Quem mora em zona sísmica precisa tratar o terremoto como um evento certo, não provável. A
      preparação é feita em dias calmos, não durante o tremor.
    </P>

    <Checklist
      items={[
        'Fixe estantes, armários altos, televisores e aquecedores à parede com suportes metálicos',
        'Identifique em cada cômodo o ponto seguro: sob mesa robusta ou junto a parede interna',
        'Monte um kit de emergência com água para 72 horas, alimentos não perecíveis, lanterna, rádio a pilha, medicamentos, cópias de documentos e carregador portátil',
        'Combine com a família um ponto de encontro fora de casa e um contato de referência em outra cidade',
        'Se mora no litoral, memorize a rota de fuga para terreno alto e cronometre o percurso a pé',
      ]}
    />

    <H3>Durante: abaixe-se, proteja-se e segure-se</H3>

    <P>
      O protocolo internacional cabe em três verbos. Abaixe-se antes que o tremor derrube você.
      Proteja cabeça e pescoço sob uma estrutura resistente. Segure-se nela, porque móveis se
      deslocam durante o abalo.
    </P>

    <H4>Situações específicas</H4>

    <Checklist
      items={[
        'Em casa: fique dentro, longe de janelas e de objetos pendurados; não use elevador',
        'Em prédio alto: espere o tremor passar no ponto seguro; só depois desça pelas escadas',
        'Ao ar livre: afaste-se de fachadas, marquises, postes e cabos elétricos',
        'Dirigindo: pare em local aberto, longe de pontes e viadutos, e permaneça no veículo',
        'Na praia: assim que o tremor cessar, suba para terreno alto imediatamente',
      ]}
    />

    <H3>Depois: réplicas, gás e informação</H3>

    <P>
      As réplicas são inevitáveis e podem se estender por semanas. Estruturas já comprometidas
      pelo abalo principal costumam ceder justamente nesses tremores secundários, aparentemente
      menores. Antes de voltar a qualquer edificação, avalie rachaduras em pilares e vigas, e
      desligue o registro de gás ao menor cheiro suspeito.
    </P>

    <Checklist
      items={[
        'Não acenda fósforo, isqueiro ou interruptor se houver cheiro de gás',
        'Use mensagens de texto em vez de ligações para desafogar a rede de telefonia',
        'Calce sapatos fechados: cacos de vidro são a lesão mais comum no pós-terremoto',
        'Consuma apenas água potável de fonte confiável; a rede pode estar contaminada',
        'Siga somente canais oficiais e desconfie de áudios não verificados em redes sociais',
      ]}
    />

    <H2 id="monitoramento">Alertas oficiais e melhores apps de monitoramento climático</H2>

    <P>
      Nenhuma tecnologia prevê terremotos com data e hora. O que existe — e funciona — são
      sistemas de alerta precoce que detectam as primeiras ondas sísmicas e enviam avisos
      automáticos segundos antes da chegada das ondas destrutivas, além de redes de boias que
      confirmam tsunamis em tempo real.
    </P>

    <DataTable
      headers={['Ferramenta', 'Para que serve', 'Custo']}
      rows={[
        ['USGS Earthquakes', 'Catálogo global de sismos com notificação por magnitude', 'Gratuito'],
        ['Centros de alerta de tsunami', 'Boletins de risco e cancelamento por bacia oceânica', 'Gratuito'],
        ['Windy', 'Radar, vento, chuva e camadas técnicas para a fase pós-desastre', 'Gratuito com extras pagos'],
        ['AccuWeather', 'Previsão detalhada e alertas por notificação', 'Gratuito com anúncios'],
        ['Climatempo', 'Previsão e avisos meteorológicos com foco no Brasil', 'Gratuito com plano pago'],
        ['INMET', 'Avisos oficiais brasileiros por cor de severidade', 'Gratuito'],
      ]}
      caption="Combinação recomendada de fontes sísmicas e meteorológicas"
    />

    <P>
      Para acompanhar o boletim sismológico global em tempo real, o catálogo do{' '}
      <ExternalLink href="https://earthquake.usgs.gov/earthquakes/map/">
        Serviço Geológico dos Estados Unidos (USGS)
      </ExternalLink>{' '}
      é a referência mais usada por pesquisadores e jornalistas. Para condições oceânicas e
      atmosféricas, os produtos da{' '}
      <ExternalLink href="https://www.noaa.gov/">NOAA</ExternalLink> e as imagens de satélite da{' '}
      <ExternalLink href="https://worldview.earthdata.nasa.gov/">NASA Worldview</ExternalLink>{' '}
      permitem visualizar nuvens, temperatura do mar e plumas de poeira poucas horas após a
      captura. No Brasil, os avisos oficiais ficam com o{' '}
      <ExternalLink href="https://portal.inmet.gov.br/">INMET</ExternalLink> e com a Defesa Civil,
      pelo telefone 199 e pelo SMS 40199.
    </P>

    <H2 id="ciclos">Ciclos climáticos explicados: o que muda e o que não muda</H2>

    <P>
      Uma dúvida recorrente após grandes terremotos é se fenômenos como El Niño e La Niña têm
      alguma relação com a atividade sísmica. A resposta honesta é: não há evidência científica de
      causalidade. Os ciclos oceânicos operam na escala de meses e afetam a atmosfera; a tectônica
      opera na escala de séculos e milênios e obedece a forças internas do planeta.
    </P>

    <P>
      O que os ciclos determinam é o cenário climático em que a resposta ao desastre acontece. Em
      anos de <InternalLink to="/blog/la-nina-2026-impactos-brasil-previsao">La Niña</InternalLink>,
      por exemplo, o padrão de chuvas no Pacífico oeste e no sudeste asiático tende a ficar mais
      úmido, o que aumenta o risco de deslizamento em encostas fragilizadas por tremores. Já em
      episódios de <InternalLink to="/blog/super-el-nino-2026">El Niño intenso</InternalLink>, a
      mesma região costuma enfrentar seca e maior risco de incêndio florestal.
    </P>

    <H2 id="brasil">E o Brasil nessa história?</H2>

    <P>
      O território brasileiro está no meio da placa Sul-Americana, longe das bordas ativas. Isso
      não significa ausência total de sismos: existem falhas intraplaca que produzem tremores
      perceptíveis, geralmente de magnitude baixa a moderada, no Acre, no Ceará, em Mato Grosso e
      no norte de Minas Gerais. Quem quiser entender a mecânica das placas na América do Sul
      encontra o assunto detalhado em nosso artigo sobre a{' '}
      <InternalLink to="/blog/placas-tectonicas-colombia-venezuela-maiores-terremotos">
        conexão tectônica entre Colômbia e Venezuela
      </InternalLink>
      .
    </P>

    <P>
      O risco brasileiro é predominantemente climático. Nos últimos meses, o país enfrentou desde{' '}
      <InternalLink to="/blog/ciclone-bomba-brasil-agosto-2026">ciclone-bomba no Sul</InternalLink>{' '}
      até seca severa no Nordeste — eventos que, ao contrário dos terremotos, podem ser previstos
      com dias de antecedência e demandam apenas que a população acompanhe os alertas.
    </P>

    <H2 id="faq">Perguntas frequentes sobre o terremoto na Indonésia</H2>

    <FAQ items={indonesiaFaq} />

    <H2 id="conclusao">Conclusão: o que levar deste episódio</H2>

    <P>
      O terremoto de magnitude 7,7 de 14 de agosto de 2026 reforça uma lição que se repete a cada
      grande abalo no Anel de Fogo: a diferença entre susto e tragédia raramente está na
      magnitude. Está na profundidade do foco, na qualidade das construções, na existência de rota
      de fuga e na velocidade com que as pessoas se movem nos primeiros minutos.
    </P>

    <P>
      Para quem mora em zona sísmica costeira, o resumo é simples: tremeu forte, suba. Para todos
      os outros, o aprendizado é sobre preparo — kit de emergência pronto, plano familiar
      combinado e monitoramento ativo de alertas oficiais, seja para terremoto, seja para
      tempestade.
    </P>

    <Highlight title="Três atitudes para hoje">
      1. Baixe um aplicativo de alertas e ative as notificações. 2. Monte ou revise o kit de
      emergência da sua casa. 3. Combine com a família o ponto de encontro e o contato de
      referência fora da cidade.
    </Highlight>
  </>
);

/* ==========================================================================
   ARTIGO 2: Temporada de furacões no Atlântico 2026
   ========================================================================== */

const furacoesFaq = [
  {
    q: 'Quando é a temporada de furacões no Atlântico em 2026?',
    a: 'A temporada oficial vai de 1º de junho a 30 de novembro, com pico estatístico entre meados de agosto e o fim de outubro. O dia de maior atividade histórica no Atlântico é 10 de setembro. Cerca de 80% dos furacões intensos se formam nessa janela de pouco mais de dois meses, quando o oceano está mais quente e o cisalhamento do vento está mais fraco.',
  },
  {
    q: 'Qual é a diferença entre furacão, tufão e ciclone?',
    a: 'São o mesmo fenômeno com nomes regionais diferentes. Chama-se furacão no Atlântico Norte e no Pacífico Nordeste, tufão no Pacífico Noroeste e ciclone tropical no Índico e no Pacífico Sul. Todos são sistemas de baixa pressão com núcleo quente, alimentados por água do mar acima de 26,5 graus Celsius e organizados em bandas espirais ao redor de um olho central.',
  },
  {
    q: 'O que significa cada categoria da escala Saffir-Simpson?',
    a: 'A escala classifica furacões pelo vento máximo sustentado: categoria 1 de 119 a 153 km/h, categoria 2 de 154 a 177 km/h, categoria 3 de 178 a 208 km/h, categoria 4 de 209 a 251 km/h e categoria 5 acima de 252 km/h. A partir da categoria 3 o sistema é classificado como furacão de grande intensidade. A escala mede apenas vento e não considera chuva, maré de tempestade nem tamanho do sistema.',
  },
  {
    q: 'O que é intensificação rápida e por que ela preocupa tanto?',
    a: 'Intensificação rápida é o aumento de pelo menos 55 km/h no vento máximo sustentado em 24 horas. O problema é operacional: um sistema que era tempestade tropical à noite pode virar furacão de categoria 3 ou 4 na manhã seguinte, encurtando drasticamente o tempo de evacuação. Oceanos mais quentes e com camada quente mais profunda tornam esses episódios mais frequentes.',
  },
  {
    q: 'Como se proteger de um furacão?',
    a: 'A preparação começa antes da temporada: reforce janelas e portas, pode árvores próximas, identifique o abrigo público mais perto e monte um kit para 72 horas com água, alimentos, remédios, lanterna, rádio a pilha e documentos. Com o alerta emitido, abasteça o carro, carregue baterias, recolha objetos soltos do quintal e evacue imediatamente se a autoridade local determinar — a maré de tempestade é o que mais mata.',
  },
  {
    q: 'Por que a maré de tempestade é mais perigosa que o vento?',
    a: 'A maré de tempestade é a elevação anormal do nível do mar empurrada pelo vento e pela baixa pressão do furacão. Ela pode inundar quilômetros de área costeira em poucas horas, com água em movimento capaz de arrastar veículos e derrubar estruturas. Historicamente, é responsável pela maior parte das mortes diretas em furacões, muito acima da queda de árvores ou do impacto de destroços.',
  },
  {
    q: 'Furacão do Atlântico pode atingir o Brasil?',
    a: 'Furacões clássicos não se formam no Atlântico Sul porque a temperatura da água é mais baixa, o cisalhamento do vento é mais forte e a Zona de Convergência Intertropical fica distante. O Brasil enfrenta ciclones extratropicais e ciclones-bomba, que têm mecanismo diferente mas podem gerar ventos de mais de 100 km/h no Sul e no Sudeste. O caso do furacão Catarina, em 2004, permanece uma exceção histórica.',
  },
  {
    q: 'Quais aplicativos acompanham furacões em tempo real?',
    a: 'O Windy é o mais completo para visualizar trajetória, vento e pressão em camadas interativas. O AccuWeather e o Climatempo enviam alertas por notificação e mostram a previsão local hora a hora. Os boletins oficiais do centro de furacões norte-americano trazem o cone de trajetória atualizado a cada seis horas, e no Brasil o INMET e o CPTEC/INPE publicam avisos de ciclone e ressaca.',
  },
];

export const FuracoesAtlantico2026Article: React.FC<{ midImage: string }> = ({ midImage }) => (
  <>
    <FaqSchema items={furacoesFaq} />

    <Lead>
      Agosto é o mês em que o Atlântico troca de marcha. A água tropical atinge o pico de calor
      acumulado, os ventos de altitude enfraquecem e as ondas de leste que saem da África
      encontram o ambiente perfeito para se organizar. A{' '}
      <strong>temporada de furacões no Atlântico 2026</strong> entra agora na sua fase mais
      perigosa — e entender como esses sistemas nascem, crescem e matam é a melhor forma de
      atravessá-la em segurança.
    </Lead>

    <P>
      Um furacão maduro é a máquina térmica mais poderosa da atmosfera. Ele converte calor
      oceânico em energia cinética com uma eficiência que nenhuma usina humana alcança, e libera
      em um único dia mais energia do que o consumo elétrico global em vários meses. Não é uma
      tempestade grande: é um sistema de escala continental, com centenas de quilômetros de
      diâmetro e vida útil de até duas semanas.
    </P>

    <P>
      Este guia explica a física por trás do fenômeno, mostra por que o pico da temporada se
      concentra em poucas semanas, apresenta os dados históricos que servem de régua e entrega um
      plano prático de prevenção e cuidados para quem vive ou viaja em área de risco.
    </P>

    <Highlight title="Resumo rápido: temporada de furacões no Atlântico 2026">
      Janela oficial de 1º de junho a 30 de novembro · pico entre meados de agosto e o fim de
      outubro · água do mar acima de 26,5 °C como combustível · escala Saffir-Simpson de 1 a 5 ·
      maré de tempestade como principal causa de mortes · intensificação rápida cada vez mais
      frequente · monitoramento por Windy, AccuWeather, Climatempo e boletins oficiais.
    </Highlight>

    <H2 id="como-nasce">Como nasce um furacão: a receita em quatro ingredientes</H2>

    <P>
      Furacões não surgem do nada. Eles precisam de um conjunto bastante específico de condições
      simultâneas, e é justamente por isso que existe uma temporada: durante boa parte do ano,
      pelo menos um dos ingredientes está faltando.
    </P>

    <H3>1. Água quente e profunda</H3>

    <P>
      A temperatura da superfície do mar precisa estar acima de 26,5 graus Celsius, e esse calor
      deve se estender por dezenas de metros de profundidade. Se a camada quente for fina, o
      próprio furacão a destrói: os ventos revolvem o oceano, trazem água fria de baixo e cortam o
      próprio combustível. Em 2026, com o conteúdo de calor oceânico ainda elevado, essa camada
      protetora contra o autoenfraquecimento está mais espessa que a média histórica.
    </P>

    <H3>2. Umidade abundante na média atmosfera</H3>

    <P>
      Ar seco entrando pelo flanco do sistema é um dos maiores inimigos de um furacão em formação.
      Ele evapora as gotículas das bandas de chuva e provoca correntes descendentes que desorganizam
      a circulação. É por isso que plumas de{' '}
      <InternalLink to="/blog/poeira-do-saara-brasil-2026">poeira do Saara</InternalLink>{' '}
      atravessando o Atlântico funcionam como um freio natural: além de ar seco, elas trazem
      partículas que alteram a formação das nuvens.
    </P>

    <H3>3. Pouco cisalhamento do vento</H3>

    <P>
      Cisalhamento é a diferença de velocidade e direção do vento entre a superfície e a alta
      troposfera. Um furacão é uma torre vertical organizada; se o vento em 12 quilômetros de
      altitude sopra muito mais forte que na superfície, essa torre é inclinada e literalmente
      decapitada. Anos de La Niña costumam apresentar menos cisalhamento sobre o Atlântico
      tropical — um dos motivos pelos quais essas temporadas tendem a ser mais ativas.
    </P>

    <H3>4. Rotação inicial e distância do Equador</H3>

    <P>
      Sem o efeito Coriolis, gerado pela rotação da Terra, o ar convergente não ganha giro. Por
      isso furacões não se formam a menos de cerca de 5 graus de latitude do Equador. A semente
      quase sempre vem de uma onda de leste africana: uma ondulação na circulação que sai do
      continente a cada três ou quatro dias durante o verão do Hemisfério Norte.
    </P>

    <InfoBox title="Do aglomerado ao furacão: a escala de evolução">
      Perturbação tropical → depressão tropical (ventos até 62 km/h, já recebe número) → tempestade
      tropical (63 a 118 km/h, recebe nome) → furacão (a partir de 119 km/h) → furacão de grande
      intensidade (categoria 3 ou superior). Cada degrau exige que os quatro ingredientes
      continuem presentes ao mesmo tempo.
    </InfoBox>

    <img
      src={midImage}
      alt="Ondas de maré de tempestade invadindo rua costeira durante passagem de furacão no Caribe na temporada de 2026"
      loading="lazy"
      width={944}
      height={704}
      className="w-full rounded-xl shadow-lg my-10"
    />

    <H2 id="pico">Por que o pico da temporada é entre agosto e outubro</H2>

    <P>
      A temporada não é distribuída de forma uniforme. Junho e julho respondem por uma fração
      pequena da atividade; setembro sozinho costuma concentrar mais furacões intensos do que
      todos os outros meses somados.
    </P>

    <P>
      A explicação é de sincronia. O oceano tem inércia térmica: leva semanas para acumular o
      calor do verão, e só atinge o máximo entre o fim de agosto e o começo de setembro, bem
      depois do solstício. Ao mesmo tempo, a corrente de jato subtropical recua para o norte,
      reduzindo o cisalhamento sobre o corredor principal de desenvolvimento, entre a costa
      africana e o Caribe. As ondas de leste chegam nesse período com energia máxima.
    </P>

    <DataTable
      headers={['Período', 'Nível de atividade', 'Onde os sistemas costumam se formar']}
      rows={[
        ['Junho', 'Baixo', 'Golfo do México e oeste do Caribe, sistemas fracos e de vida curta'],
        ['Julho', 'Baixo a moderado', 'Caribe e Atlântico oeste; corredor africano ainda pouco produtivo'],
        ['Agosto', 'Alto', 'Corredor principal entre a África e as Antilhas entra em atividade'],
        ['Setembro', 'Máximo', 'Atlântico tropical inteiro; maioria dos sistemas de categoria 4 e 5'],
        ['Outubro', 'Alto', 'Caribe ocidental e Golfo do México voltam a dominar'],
        ['Novembro', 'Em queda', 'Sistemas esporádicos, geralmente de menor intensidade'],
      ]}
      caption="Distribuição típica da atividade ao longo da temporada de furacões no Atlântico"
    />

    <H2 id="escala">A escala Saffir-Simpson e o que ela não mede</H2>

    <P>
      A classificação por categoria é útil como taquigrafia, mas é frequentemente mal
      interpretada. Ela mede apenas o vento máximo sustentado — e vento não é o que mais mata.
    </P>

    <DataTable
      headers={['Categoria', 'Vento sustentado', 'Dano esperado']}
      rows={[
        ['1', '119 a 153 km/h', 'Telhas soltas, galhos quebrados, quedas de energia localizadas'],
        ['2', '154 a 177 km/h', 'Dano expressivo em telhados, árvores derrubadas, apagões prolongados'],
        ['3', '178 a 208 km/h', 'Dano estrutural, casas de madeira comprometidas, água e luz por dias'],
        ['4', '209 a 251 km/h', 'Perda de telhados e paredes, área inabitável por semanas'],
        ['5', 'Acima de 252 km/h', 'Destruição quase total de construções frágeis, isolamento por meses'],
      ]}
      caption="Escala Saffir-Simpson de intensidade de furacões"
    />

    <Warning title="Categoria baixa não é sinônimo de furacão inofensivo">
      Sistemas de categoria 1 e 2, quando lentos e muito extensos, produzem chuvas acumuladas que
      superam facilmente 500 milímetros e causam enchentes catastróficas terra adentro. Alguns dos
      desastres mais caros da história do Atlântico foram provocados por água, não por vento. Nunca
      decida ficar em casa apenas porque a categoria anunciada parece baixa.
    </Warning>

    <H3>Os três vetores de destruição</H3>

    <Checklist
      items={[
        'Maré de tempestade: elevação do nível do mar que inunda a costa; principal causa de mortes diretas',
        'Chuva extrema: alagamento urbano e enchente de rios, muitas vezes longe do litoral',
        'Vento: destelhamento, queda de árvores e projéteis; risco maior em edificações frágeis',
      ]}
    />

    <PullQuote author="Consenso entre agências de previsão de furacões">
      Fuja da água, abrigue-se do vento. A maré de tempestade mata pessoas que decidiram esperar
      para ver.
    </PullQuote>

    <H2 id="mudancas-climaticas">Mudanças climáticas: mais fortes, não necessariamente mais numerosos</H2>

    <P>
      Uma confusão comum é achar que o aquecimento global significa mais furacões por ano. A
      literatura científica aponta em outra direção: o número total tende a permanecer estável ou
      até diminuir levemente, mas a proporção de sistemas intensos, de categoria 4 e 5, aumenta.
    </P>

    <H3>O que já é observável</H3>

    <Checklist
      items={[
        'Maior frequência de episódios de intensificação rápida, encurtando o tempo de evacuação',
        'Chuvas mais volumosas por sistema, porque ar mais quente carrega mais vapor de água',
        'Furacões que se deslocam mais devagar, prolongando a exposição de uma mesma região',
        'Maré de tempestade partindo de um nível do mar mais alto, ampliando a área inundada',
        'Expansão da área com água quente suficiente para sustentar ciclones tropicais',
      ]}
    />

    <P>
      Esse último ponto conecta o tema a outro fenômeno já coberto aqui: as{' '}
      <InternalLink to="/blog/ondas-calor-marinhas-branqueamento-corais-2026">
        ondas de calor marinhas de 2026
      </InternalLink>
      , que elevaram a temperatura da superfície do mar em várias bacias oceânicas ao mesmo tempo.
      Mar mais quente é, ao mesmo tempo, mais combustível para furacões e mais estresse para
      recifes de coral — que, quando degradados, deixam de amortecer a energia das ondas na costa.
    </P>

    <H2 id="dados-historicos-furacoes">Dados históricos de furacões que redefiniram o risco</H2>

    <DataTable
      headers={['Ano', 'Sistema', 'Categoria no impacto', 'Lição deixada']}
      rows={[
        ['1992', 'Andrew', '5', 'Revisão profunda dos códigos de construção na Flórida'],
        ['2005', 'Katrina', '3', 'Falha de diques e colapso logístico em área metropolitana'],
        ['2012', 'Sandy', 'Pós-tropical', 'Maré de tempestade em megacidade sem cultura de furacão'],
        ['2017', 'Maria', '4', 'Colapso da rede elétrica e isolamento prolongado em ilha'],
        ['2019', 'Dorian', '5', 'Estacionamento sobre as Bahamas por mais de 24 horas'],
        ['2005', 'Wilma', '5', 'Menor pressão central já medida no Atlântico'],
      ]}
      caption="Casos históricos usados como referência em planejamento de emergência"
    />

    <InfoBox title="Como funcionam os nomes dos furacões">
      Existem seis listas alfabéticas de nomes que se repetem em ciclos de seis anos, alternando
      nomes masculinos e femininos em inglês, espanhol e francês. Quando um sistema é
      particularmente mortal ou destrutivo, o nome é aposentado e substituído — por isso não
      existirá outro Katrina, outro Maria ou outro Dorian. Nomear serve para evitar confusão na
      comunicação quando há mais de um sistema ativo ao mesmo tempo.
    </InfoBox>

    <H2 id="protecao">Prevenção e cuidados: plano completo em quatro fases</H2>

    <H3>Fase 1 — Antes da temporada</H3>

    <Checklist
      items={[
        'Verifique telhado, calhas e fixação de portas e janelas; instale painéis ou película de proteção',
        'Pode galhos e remova árvores doentes próximas à casa e à fiação',
        'Descubra se seu endereço está em zona de evacuação e qual é a rota designada',
        'Monte o kit de 72 horas: água, alimentos não perecíveis, remédios, lanterna, rádio a pilha, pilhas, documentos em saco plástico, dinheiro em espécie e carregador portátil',
        'Fotografe os cômodos e os bens para eventual acionamento de seguro',
      ]}
    />

    <H3>Fase 2 — Com o alerta emitido (48 a 72 horas antes)</H3>

    <Checklist
      items={[
        'Abasteça o veículo e carregue todas as baterias e power banks',
        'Recolha vasos, móveis de jardim, lixeiras e qualquer objeto que possa virar projétil',
        'Encha recipientes com água potável e a banheira com água de uso geral',
        'Baixe mapas offline e anote telefones de emergência em papel',
        'Se a ordem de evacuação for emitida, saia imediatamente e não espere pela próxima atualização',
      ]}
    />

    <H3>Fase 3 — Durante a passagem</H3>

    <Checklist
      items={[
        'Abrigue-se em cômodo interno, sem janelas, no andar mais baixo seguro contra inundação',
        'Mantenha-se longe de vidros mesmo com película aplicada',
        'Não saia durante a passagem do olho: a calmaria dura minutos e os ventos retornam na direção oposta',
        'Use rádio a pilha se a energia e a internet caírem',
        'Nunca ande nem dirija por água em movimento: 30 centímetros bastam para arrastar um carro',
      ]}
    />

    <H3>Fase 4 — Depois</H3>

    <Checklist
      items={[
        'Considere todo cabo caído como energizado e mantenha distância',
        'Não use gerador dentro de casa, garagem ou varanda fechada por risco de monóxido de carbono',
        'Ferva ou trate a água antes de consumir enquanto não houver confirmação oficial',
        'Fotografe os danos antes de iniciar a limpeza',
        'Cuidado com o calor pós-tempestade: sem energia e sem ventilador, o risco de exaustão térmica sobe rapidamente',
      ]}
    />

    <H4>Dicas de conforto térmico durante apagões prolongados</H4>

    <P>
      Depois que o furacão passa, é comum vir um período de céu limpo, calor e umidade alta — com a
      rede elétrica no chão. Esse é o momento em que idosos e crianças mais adoecem. Priorize o
      cômodo mais fresco da casa, abra janelas opostas para criar corrente de ar nas horas mais
      frescas, feche cortinas no período de sol intenso, use panos úmidos na nuca e nos pulsos e
      mantenha hidratação constante mesmo sem sede.
    </P>

    <CTA>
      Ative os alertas do Clima Hoje e acompanhe vento, chuva e pressão da sua cidade em tempo
      real — a diferença entre um susto e uma emergência costuma ser o tempo de antecedência.
    </CTA>

    <H2 id="apps">Melhores apps de monitoramento climático para a temporada</H2>

    <DataTable
      headers={['Aplicativo', 'Ponto forte', 'Ideal para']}
      rows={[
        ['Windy', 'Camadas de vento, pressão, ondas e modelos comparáveis', 'Acompanhar trajetória e intensidade'],
        ['AccuWeather', 'Alertas por notificação e previsão minuto a minuto', 'Uso diário e avisos rápidos'],
        ['Climatempo', 'Cobertura detalhada do Brasil e avisos de ressaca', 'Litoral brasileiro'],
        ['INMET', 'Avisos oficiais por cor de severidade', 'Validação oficial no Brasil'],
        ['CPTEC/INPE', 'Boletins técnicos e imagens de satélite', 'Análise mais aprofundada'],
      ]}
      caption="Combinação recomendada: um app de radar, um de alertas e uma fonte oficial"
    />

    <P>
      Para dados oceânicos e atmosféricos de origem primária, os produtos da{' '}
      <ExternalLink href="https://www.noaa.gov/">NOAA</ExternalLink> e as imagens diárias da{' '}
      <ExternalLink href="https://worldview.earthdata.nasa.gov/">NASA Worldview</ExternalLink>{' '}
      permitem acompanhar temperatura da superfície do mar e estrutura das nuvens quase em tempo
      real. No Brasil, os avisos de ciclone, vento e ressaca ficam com o{' '}
      <ExternalLink href="https://portal.inmet.gov.br/">INMET</ExternalLink> e com o{' '}
      <ExternalLink href="https://www.cptec.inpe.br/">CPTEC/INPE</ExternalLink>.
    </P>

    <H2 id="brasil-ciclones">Por que o Brasil não tem furacões — mas tem ciclones perigosos</H2>

    <P>
      No Atlântico Sul, a água costuma ser mais fria, o cisalhamento é mais intenso e a Zona de
      Convergência Intertropical raramente desce o suficiente para fornecer a rotação inicial. Por
      isso furacões clássicos praticamente não se formam por aqui — o furacão Catarina, em 2004,
      segue como exceção histórica estudada até hoje.
    </P>

    <P>
      Isso não significa segurança. Os ciclones extratropicais que se desenvolvem sobre o Sul do
      Brasil ganham energia do contraste entre massas de ar, não do calor oceânico, e podem
      produzir ventos comparáveis aos de um furacão de categoria 1, como mostrou o{' '}
      <InternalLink to="/blog/ciclone-bomba-brasil-agosto-2026">
        ciclone-bomba de agosto de 2026
      </InternalLink>
      . As medidas de prevenção são, na prática, as mesmas.
    </P>

    <H2 id="faq-furacoes">Perguntas frequentes sobre furacões no Atlântico</H2>

    <FAQ items={furacoesFaq} />

    <H2 id="conclusao-furacoes">Conclusão: o pico chegou e o tempo de preparo é agora</H2>

    <P>
      A temporada de furacões no Atlântico de 2026 entra na fase em que decisões precisam ser
      tomadas em horas, não em dias. O oceano está com calor acumulado suficiente para sustentar
      sistemas intensos, e a tendência de intensificação rápida reduz a margem de manobra de quem
      deixa tudo para a última hora.
    </P>

    <P>
      Preparar-se não custa caro nem toma muito tempo: um kit de 72 horas, uma rota de evacuação
      conhecida e um aplicativo confiável com notificações ativas resolvem a maior parte do
      problema. O resto é obedecer à regra que resume décadas de experiência das agências de
      emergência: fuja da água, abrigue-se do vento e nunca subestime um sistema pela categoria.
    </P>

    <Highlight title="Checklist final de 60 segundos">
      Kit de emergência montado · rota de evacuação memorizada · documentos em saco plástico ·
      celular e power bank carregados · rádio a pilha funcionando · alertas do INMET e de um app de
      radar ativados · combinação familiar de ponto de encontro definida.
    </Highlight>
  </>
);
