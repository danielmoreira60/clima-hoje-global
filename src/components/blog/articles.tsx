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

export const SuperElNinoArticle: React.FC<{ midImage: string }> = ({ midImage }) => (
  <>
    <Lead>
      O Super El Niño 2026 já é considerado um dos eventos climáticos mais intensos da década pelos
      principais centros meteorológicos do mundo. Entender o que está acontecendo no Oceano Pacífico
      ajuda a antecipar secas históricas, enchentes severas e ondas de calor que já estão redefinindo
      o cotidiano de milhões de brasileiros.
    </Lead>

    <P>
      Nas últimas semanas, a temperatura da superfície do mar na faixa equatorial do Pacífico ultrapassou
      a marca dos 2,2 °C acima da média histórica, segundo boletins recentes da{' '}
      <ExternalLink href="https://www.cpc.ncep.noaa.gov/products/analysis_monitoring/ensostuff/ONI_v5.php">
        NOAA Climate Prediction Center
      </ExternalLink>
      . Esse valor coloca o atual ciclo na categoria de Super El Niño, um patamar atingido apenas em
      1982-83, 1997-98 e 2015-16. Para quem acompanha a previsão do tempo, isso significa um semestre
      atípico, com extremos climáticos cada vez mais frequentes.
    </P>

    <P>
      Neste artigo, vamos explicar com detalhes técnicos — mas em linguagem acessível — o que é o Super
      El Niño 2026, por que ele está se formando agora, quais são as previsões oficiais para o Brasil
      e para a América do Sul, e o que cada região precisa fazer para se preparar. Também trazemos
      tabelas comparativas, mapas mentais e um FAQ completo no final.
    </P>

    <H2 id="o-que-e">O que é o Super El Niño e por que 2026 é diferente</H2>

    <P>
      O El Niño é a fase quente do ENOS (El Niño-Oscilação Sul), um padrão natural de variabilidade
      climática que acontece no Oceano Pacífico tropical. Em condições normais, ventos alísios sopram
      de leste para oeste, empurrando águas quentes em direção à Ásia e permitindo que águas mais frias
      aflorem na costa oeste da América do Sul. Quando esses ventos enfraquecem, as águas quentes
      "escorregam" de volta para leste, alterando profundamente a circulação atmosférica do planeta.
    </P>

    <P>
      O que torna 2026 atípico é a combinação de três fatores raros acontecendo ao mesmo tempo: um
      Pacífico já aquecido pelo aquecimento global, uma anomalia positiva na região conhecida como
      Niño 3.4 e um enfraquecimento persistente da Oscilação Madden-Julian. Esse coquetel
      meteorológico é o que motivou a Organização Meteorológica Mundial (OMM) a elevar o estado de
      alerta global para nível 3, segundo divulgação oficial no portal da{' '}
      <ExternalLink href="https://wmo.int/">World Meteorological Organization</ExternalLink>.
    </P>

    <InfoBox title="Resumo rápido para quem tem pressa">
      O Super El Niño 2026 é a versão extrema do El Niño tradicional, com temperaturas do Pacífico
      mais de 2 °C acima da média. Ele tende a provocar secas no Norte e Nordeste do Brasil,
      enchentes no Sul, calor recorde no Sudeste e impacto direto na agricultura, energia e saúde
      pública.
    </InfoBox>

    <H2 id="historico">Comparativo histórico: como 2026 se compara com eventos passados</H2>

    <P>
      Para dimensionar o que está por vir, vale olhar para trás. Os três Super El Niños registrados
      anteriormente deixaram marcas profundas na economia e na sociedade brasileira. O evento de
      1982-83, por exemplo, foi responsável por uma das maiores secas da história do Nordeste, com
      mais de 18 milhões de pessoas afetadas. Já o ciclo 1997-98 quebrou recordes de temperatura
      global e produziu enchentes catastróficas no Sul do Brasil. O Super El Niño de 2015-16, mais
      recente, foi associado à pior estiagem da Amazônia em décadas.
    </P>

    <DataTable
      headers={['Evento', 'Pico de Anomalia (°C)', 'Principais Impactos no Brasil', 'Custo Estimado (US$)']}
      rows={[
        ['1982-83', '+2,3', 'Seca histórica no Nordeste', '13 bilhões'],
        ['1997-98', '+2,4', 'Enchentes no Sul, queimadas em Roraima', '35 bilhões'],
        ['2015-16', '+2,6', 'Estiagem na Amazônia, crise hídrica em SP', '20 bilhões'],
        ['2026 (em curso)', '+2,2 (parcial)', 'Em monitoramento — projeção alta', 'Em avaliação'],
      ]}
      caption="Fonte: compilação a partir de dados públicos da NOAA, OMM e Banco Mundial."
    />

    <P>
      O que chama a atenção dos especialistas é que, embora a anomalia atual ainda não tenha
      ultrapassado os recordes anteriores, o oceano global parte de uma base muito mais aquecida.
      Isso significa que mesmo um evento "moderadamente forte" pode ter consequências mais severas
      do que um El Niño extremo das décadas passadas.
    </P>

    <img
      src={midImage}
      alt="Contraste entre solo rachado por seca e cultivo verde sob chuva intensa, ilustrando os extremos do Super El Niño 2026"
      width={1536}
      height={864}
      loading="lazy"
      className="w-full rounded-2xl shadow-xl my-10"
    />

    <H2 id="impactos-brasil">Impactos do Super El Niño 2026 no Brasil região por região</H2>

    <H3>Norte: seca prolongada e risco de queimadas</H3>
    <P>
      A região amazônica é historicamente uma das mais afetadas. Durante o Super El Niño, a circulação
      atmosférica desloca a Zona de Convergência Intertropical (ZCIT) para mais ao norte, reduzindo
      drasticamente as chuvas em estados como Amazonas, Pará, Acre e Roraima. A consequência mais
      visível é o aumento exponencial de focos de queimadas e a queda no nível dos rios — situação
      que já provocou crises de transporte fluvial em 2023 e tende a se repetir.
    </P>

    <H3>Nordeste: estiagem severa no semiárido</H3>
    <P>
      O semiárido nordestino deve enfrentar uma das estiagens mais duras dos últimos anos. Estados
      como Piauí, Ceará, Rio Grande do Norte, Paraíba e o oeste de Pernambuco entram em alerta para
      colapso de reservatórios e perda de safras. Agricultores familiares, que dependem da chuva
      regular para milho, feijão e mandioca, são o grupo mais vulnerável.
    </P>

    <H3>Centro-Oeste: irregularidade nas chuvas</H3>
    <P>
      Em Mato Grosso, Goiás e Distrito Federal, o padrão observado em eventos anteriores é de chuvas
      irregulares, com janelas longas de estiagem intercaladas por temporais isolados. Para o
      agronegócio, isso significa risco para o plantio da soja, milho safrinha e algodão.
    </P>

    <H3>Sudeste: ondas de calor recordes</H3>
    <P>
      O Sudeste tende a registrar temperaturas acima de 40 °C com mais frequência, especialmente em
      São Paulo, Minas Gerais e Rio de Janeiro. A combinação de calor extremo, baixa umidade e
      poluição urbana pode sobrecarregar a rede hospitalar e elevar o consumo de energia elétrica
      para níveis críticos.
    </P>

    <H3>Sul: enchentes e tempestades severas</H3>
    <P>
      O Sul do Brasil é, paradoxalmente, a região mais ameaçada por excesso de chuva. O Super El Niño
      intensifica a formação de complexos convectivos sobre Rio Grande do Sul, Santa Catarina e
      Paraná, aumentando o risco de enchentes, deslizamentos e ventos destrutivos — cenário trágico
      já vivido na catástrofe gaúcha de 2024.
    </P>

    <Warning title="Alerta para o Sul">
      A previsão do tempo para os próximos meses indica acumulados de chuva entre 200% e 300% acima
      da média em algumas microrregiões. Moradores de áreas de risco devem manter contato com a
      Defesa Civil e acompanhar diariamente os alertas oficiais.
    </Warning>

    <H2 id="agricultura-economia">Como o Super El Niño 2026 afeta agricultura, energia e economia</H2>

    <P>
      Os impactos econômicos do fenômeno vão muito além da conta de luz. A soja, o milho e o café —
      três motores das exportações brasileiras — são particularmente sensíveis a variações de chuva e
      temperatura. Estimativas preliminares do Banco Mundial, divulgadas em janeiro de 2026, apontam
      perdas potenciais de até 0,8% no PIB brasileiro caso o cenário extremo se confirme.
    </P>

    <P>
      No setor elétrico, a situação é dupla: enquanto o Sul produz mais energia hidrelétrica pelo
      excesso de chuva nos reservatórios das usinas do Iguaçu e Uruguai, o Sudeste e o Nordeste
      podem enfrentar queda na geração de Furnas, Itaipu e do São Francisco. O Operador Nacional do
      Sistema (ONS) já trabalha com cenários de acionamento maior de térmicas para garantir o
      fornecimento.
    </P>

    <PullQuote author="Boletim ENOS — Janeiro 2026">
      "Os modelos numéricos de previsão indicam probabilidade superior a 80% de manutenção das
      condições de Super El Niño até o segundo semestre de 2026, com possíveis efeitos residuais até
      o início de 2027."
    </PullQuote>

    <H2 id="saude">Saúde pública: o lado menos comentado do fenômeno</H2>

    <P>
      Eventos extremos de El Niño costumam ser acompanhados de surtos de doenças tropicais. A
      combinação de calor, água parada após enchentes e migração de vetores favorece o aumento de
      casos de dengue, zika, chikungunya, leptospirose e até malária em áreas afastadas da Amazônia.
      O Ministério da Saúde já reforçou estoques estratégicos e campanhas de vacinação preventiva.
    </P>

    <P>
      Para a população em geral, o cuidado redobrado com hidratação, proteção solar e prevenção de
      arboviroses se torna essencial. Idosos, crianças pequenas e pessoas com doenças crônicas formam
      o grupo de maior risco durante ondas de calor — informação que reforçamos em nosso{' '}
      <InternalLink to="/agora">monitoramento da temperatura em tempo real</InternalLink>.
    </P>

    <H2 id="como-se-preparar">Como se preparar: checklist prático</H2>

    <Checklist
      items={[
        'Acompanhe diariamente os boletins oficiais do INMET, NOAA e da Defesa Civil estadual.',
        'Tenha em casa um kit de emergência com água potável, lanterna, rádio a pilha, documentos e medicamentos básicos.',
        'Revise telhados, calhas e o sistema elétrico antes do período de chuvas mais intensas.',
        'Em áreas de seca, planeje o uso da água — reuso, captação de chuva e poços profundos podem ser decisivos.',
        'Empresários do agronegócio devem revisar contratos de seguro rural e adotar variedades mais resistentes.',
        'Pessoas com asma, rinite e doenças cardiovasculares precisam reforçar o acompanhamento médico.',
      ]}
    />

    <Highlight title="Dica de monitoramento">
      Use a página de <InternalLink to="/15-dias">previsão estendida para 15 dias</InternalLink> para
      planejar viagens, plantio, eventos ao ar livre e atividades escolares com mais segurança
      durante o ciclo do Super El Niño.
    </Highlight>

    <H2 id="ate-quando">Até quando dura o Super El Niño 2026</H2>

    <P>
      Segundo as projeções mais recentes do{' '}
      <ExternalLink href="https://portal.inmet.gov.br/">INMET</ExternalLink> e do{' '}
      <ExternalLink href="https://www.cptec.inpe.br/">CPTEC/INPE</ExternalLink>, o pico do evento
      deve ocorrer entre os meses de julho e setembro de 2026, com transição lenta para condições
      neutras a partir do verão 2026-2027. Existe ainda a possibilidade — apontada por uma fração
      menor dos modelos — de o fenômeno ser seguido por uma fase fria intensa, chamada La Niña, no
      ano seguinte. Esse "efeito chicote" já foi observado em 1998 e 2016 e merece atenção.
    </P>

    <H2 id="conclusao">Conclusão: preparação vale mais do que previsão</H2>

    <P>
      O Super El Niño 2026 não é apenas mais um evento meteorológico — é um lembrete de como o clima
      planetário está se tornando mais volátil. Mais do que aguardar o próximo boletim, o melhor
      caminho é construir resiliência: famílias preparadas, cidades com drenagem adequada, agricultura
      adaptada e sistemas de saúde fortalecidos. A previsão do tempo é uma ferramenta poderosa, mas
      ela só salva vidas quando combinada com decisões informadas.
    </P>

    <P>
      Continue acompanhando o Clima Tempo para receber atualizações diárias. Se você gostou deste
      conteúdo, recomendamos a leitura complementar do artigo sobre o{' '}
      <InternalLink to="/blog/terremoto-venezuela-2026">terremoto na Venezuela em 2026</InternalLink>{' '}
      e a visita ao nosso <InternalLink to="/blog">blog</InternalLink> para mais análises.
    </P>

    <H2 id="faq">Perguntas frequentes sobre o Super El Niño 2026</H2>

    <FAQ
      items={[
        {
          q: 'O que é considerado um Super El Niño?',
          a: 'Um evento é classificado como Super El Niño quando a anomalia de temperatura da superfície do mar na região Niño 3.4 (Pacífico tropical) ultrapassa +2,0 °C por pelo menos três meses consecutivos. Em 2026, esse limiar foi atingido em maio.',
        },
        {
          q: 'O Super El Niño 2026 vai durar quanto tempo?',
          a: 'A previsão mais provável aponta o pico entre julho e setembro de 2026, com efeitos perceptíveis até o início de 2027. Cerca de 30% dos modelos sugerem transição rápida para La Niña em seguida.',
        },
        {
          q: 'Qual a diferença entre El Niño e Super El Niño?',
          a: 'A diferença está na intensidade. O El Niño "comum" tem anomalia entre +0,5 °C e +1,5 °C. O forte vai até +2,0 °C. Acima disso é classificado como Super El Niño, com impactos globais muito mais severos.',
        },
        {
          q: 'O Super El Niño 2026 vai chover muito no Sul do Brasil?',
          a: 'Sim. Historicamente, o Sul é a região mais afetada por excesso de chuva durante eventos fortes de El Niño. As projeções para 2026 indicam acumulados até 300% acima da média em algumas localidades.',
        },
        {
          q: 'O fenômeno tem relação com o aquecimento global?',
          a: 'Sim, indiretamente. O aquecimento global não causa o El Niño, mas eleva a temperatura base dos oceanos, tornando os eventos mais intensos e seus impactos mais devastadores.',
        },
        {
          q: 'Como acompanhar as previsões em tempo real?',
          a: (
            <>
              Você pode acompanhar a evolução do tempo em nossa página <InternalLink to="/agora">Tempo Agora</InternalLink>,
              checar a <InternalLink to="/15-dias">previsão de 15 dias</InternalLink> ou consultar diretamente
              o boletim oficial da <ExternalLink href="https://portal.inmet.gov.br/">INMET</ExternalLink>.
            </>
          ),
        },
      ]}
    />
  </>
);

export const TerremotoVenezuelaArticle: React.FC<{ midImage: string }> = ({ midImage }) => (
  <>
    <Lead>
      Os terremotos que abalaram a Venezuela em 2026 trouxeram à tona uma realidade que muitos
      ignoravam: a América do Sul possui zonas sísmicas ativas capazes de produzir tremores
      significativos. Entender o que aconteceu, por que aconteceu e quais são os riscos para os
      países vizinhos é fundamental para qualquer pessoa que vive na região.
    </Lead>

    <P>
      Nas primeiras semanas de 2026, o território venezuelano registrou uma sequência de tremores
      moderados a fortes, com epicentros distribuídos entre os estados de Sucre, Mérida, Trujillo e
      a faixa litorânea próxima a Caracas. O evento mais expressivo, registrado pelo{' '}
      <ExternalLink href="https://earthquake.usgs.gov/">USGS — United States Geological Survey</ExternalLink>,
      atingiu magnitude 6,1 na escala Richter, com profundidade rasa de apenas 12 km — um cenário
      potencialmente destrutivo em áreas urbanas.
    </P>

    <P>
      Este artigo reúne dados oficiais, análise técnica das falhas envolvidas, comparativos
      históricos e orientações práticas. Também respondemos às principais dúvidas sobre risco
      sísmico para o Brasil e para outros países da América do Sul.
    </P>

    <H2 id="o-que-aconteceu">O que aconteceu na Venezuela em 2026</H2>

    <P>
      O ciclo de eventos sísmicos teve início em fevereiro de 2026 com tremores menores próximos à
      Falha de Boconó, considerada a estrutura geológica mais ativa do norte da América do Sul. Essa
      falha se estende por mais de 500 km, cruzando os Andes venezuelanos no sentido sudoeste-nordeste.
      A energia acumulada ali ao longo de séculos foi parcialmente liberada em uma série de tremores
      registrados pela{' '}
      <ExternalLink href="http://www.funvisis.gob.ve/">Fundación Venezolana de Investigaciones Sismológicas (Funvisis)</ExternalLink>.
    </P>

    <P>
      O evento principal foi sentido em Caracas, Barquisimeto, Mérida e Maracaibo, com relatos de
      pessoas correndo às ruas e danos em construções antigas. Felizmente, o número de vítimas foi
      contido graças à profundidade do hipocentro e à hora do dia em que ocorreu — fora do horário
      de pico nas escolas e escritórios.
    </P>

    <InfoBox title="Resumo dos principais tremores de 2026">
      Magnitude máxima registrada: 6,1 ML. Profundidade: 12 km. Epicentro a 90 km a leste de
      Caracas. Mais de 240 réplicas registradas em 30 dias. Sem registro de tsunami associado.
    </InfoBox>

    <H2 id="contexto-geologico">Contexto geológico: por que a Venezuela treme tanto</H2>

    <P>
      A Venezuela está situada em uma região tectonicamente complexa, onde três grandes placas
      interagem: a Placa do Caribe, a Placa Sul-Americana e a microplaca de Maracaibo. O movimento
      lento — porém constante — entre essas placas gera tensão acumulada que, eventualmente, é
      liberada em forma de terremotos. Diferente da Califórnia ou do Japão, onde uma placa mergulha
      sob a outra, aqui o movimento é predominantemente transcorrente, ou seja, lateral.
    </P>

    <H3>A Falha de Boconó: a "Santo André" sul-americana</H3>
    <P>
      Frequentemente comparada à famosa falha de Santo André, na Califórnia, a Falha de Boconó é
      conhecida por gerar tremores destrutivos a cada poucas décadas. O último grande evento
      catastrófico nessa região foi o terremoto de Caracas de 1967, que matou cerca de 240 pessoas e
      derrubou edifícios inteiros. Especialistas alertam há anos que um novo evento de grande
      magnitude é estatisticamente esperado.
    </P>

    <img
      src={midImage}
      alt="Equipes da Defesa Civil inspecionando edifício danificado por terremoto na Venezuela em 2026"
      width={1536}
      height={864}
      loading="lazy"
      className="w-full rounded-2xl shadow-xl my-10"
    />

    <H2 id="comparativo">Comparativo histórico dos terremotos venezuelanos</H2>

    <DataTable
      headers={['Ano', 'Magnitude', 'Local', 'Vítimas Fatais', 'Falha Envolvida']}
      rows={[
        ['1812', '7,7 (est.)', 'Caracas', '~20.000', 'San Sebastián'],
        ['1900', '7,6', 'Cumaná', '~150', 'El Pilar'],
        ['1967', '6,5', 'Caracas', '~240', 'Boconó / San Sebastián'],
        ['1997', '6,9', 'Cariaco', '74', 'El Pilar'],
        ['2018', '7,3', 'Sucre', '0 (mar)', 'Subducção Caribe'],
        ['2026', '6,1', 'Costa Norte', 'Em apuração', 'Boconó'],
      ]}
      caption="Fonte: USGS, Funvisis e registros históricos consolidados."
    />

    <P>
      O que esses números mostram é que a Venezuela não é um país livre de risco sísmico — pelo
      contrário, está entre os mais expostos da América do Sul. A cada século, em média, o país
      registra ao menos um terremoto acima de magnitude 7,0. A diferença entre tragédia e simples
      susto, em muitos casos, está na qualidade das construções e nos protocolos de emergência.
    </P>

    <H2 id="impactos">Impactos do terremoto de 2026</H2>

    <H3>Danos materiais e estruturais</H3>
    <P>
      As avaliações iniciais da Defesa Civil venezuelana registraram danos em mais de 1.200
      edificações, principalmente construções antigas de alvenaria sem reforço estrutural. As áreas
      mais afetadas foram bairros periféricos de Caracas e cidades menores na cordilheira andina,
      onde casas construídas sem padrão técnico cederam parcialmente.
    </P>

    <H3>Impacto humano e social</H3>
    <P>
      O evento provocou pânico em uma população já fragilizada por anos de crise econômica.
      Hospitais públicos receberam pessoas com fraturas, cortes e crises de ansiedade. Linhas de
      energia e telecomunicações sofreram interrupções pontuais — situação que dificultou o socorro
      nas primeiras horas. ONGs internacionais como a Cruz Vermelha e a ONU coordenaram envio de
      suprimentos básicos.
    </P>

    <H3>Repercussão regional</H3>
    <P>
      Países vizinhos como Colômbia, Trinidad e Tobago, Guiana e até partes do norte do Brasil
      sentiram os tremores em menor intensidade. Em Boa Vista (RR) e Manaus (AM), sismógrafos da
      Rede Sismográfica Brasileira registraram movimento perceptível, mas sem qualquer dano.
    </P>

    <PullQuote author="Boletim Funvisis — 2026">
      "A liberação parcial de energia na Falha de Boconó reduz, momentaneamente, a probabilidade de
      um evento maior. Contudo, o monitoramento permanece em alerta, pois nem toda a tensão
      acumulada foi dissipada."
    </PullQuote>

    <H2 id="risco-brasil">O Brasil corre risco com o terremoto na Venezuela</H2>

    <P>
      A pergunta mais comum entre brasileiros é se o país pode ser afetado. A resposta técnica é:
      tremores transmitidos por longas distâncias chegam ao Brasil com energia muito atenuada. O
      Brasil está situado no interior da Placa Sul-Americana, longe das bordas tectônicas mais
      ativas. Isso significa que, embora possam ocorrer sismos intraplaca — como o tremor de
      Itacarambi (MG) em 2007 — os terremotos venezuelanos não representam ameaça direta.
    </P>

    <Warning title="Cuidado com fake news">
      Vídeos e mensagens afirmando que "o terremoto na Venezuela pode atingir São Paulo" são falsos.
      A propagação das ondas sísmicas perde energia rapidamente em distâncias continentais, e o
      Brasil possui sismicidade interna baixíssima quando comparado à costa do Pacífico.
    </Warning>

    <H2 id="como-se-preparar">Como se preparar para um terremoto: guia prático</H2>

    <P>
      Mesmo em países com baixa atividade sísmica, conhecer os procedimentos básicos pode salvar
      vidas. Para quem mora em regiões mais expostas — como o norte da Venezuela, partes da
      Colômbia, Equador, Peru e Chile —, a recomendação é seguir o protocolo internacional conhecido
      como "Abaixar, Cobrir e Segurar".
    </P>

    <Checklist
      items={[
        'Identifique pontos seguros em casa: ao lado de paredes mestras, sob mesas robustas, longe de janelas.',
        'Mantenha um kit de emergência com água, alimentos não perecíveis, lanterna, rádio, kit de primeiros socorros e cópias de documentos.',
        'Fixe móveis altos (estantes, geladeiras, TVs grandes) às paredes para evitar quedas durante tremores.',
        'Combine com a família um ponto de encontro fora de casa, caso seja necessário evacuar.',
        'Tenha sapatos firmes próximos à cama — fragmentos de vidro são uma das principais causas de ferimento pós-tremor.',
        'Aprenda a fechar o registro de gás e o disjuntor geral rapidamente.',
        'Cadastre-se em sistemas oficiais de alerta e mantenha o celular sempre carregado.',
      ]}
    />

    <Highlight title="Durante o tremor">
      Não corra para fora do prédio durante o tremor. Estatísticas mostram que a maioria dos
      ferimentos ocorre justamente na tentativa de fuga, com pessoas atingidas por vidros, marquises
      e fachadas. O ideal é proteger cabeça e pescoço sob uma estrutura sólida até que o tremor
      termine.
    </Highlight>

    <H2 id="monitoramento">Onde acompanhar a atividade sísmica em tempo real</H2>

    <P>
      A boa notícia é que existem hoje diversas plataformas confiáveis para acompanhar terremotos no
      mundo todo. As principais referências são o{' '}
      <ExternalLink href="https://earthquake.usgs.gov/earthquakes/map/">mapa de terremotos do USGS</ExternalLink>,
      atualizado a cada minuto, e o boletim oficial da Funvisis para a Venezuela. No Brasil, a Rede
      Sismográfica Brasileira (RSBR), operada pela USP e UnB, divulga registros nacionais.
    </P>

    <P>
      No Clima Tempo, nosso{' '}
      <InternalLink to="/">Monitor Geológico e Climático Global</InternalLink> integra dados
      sísmicos do USGS com informações meteorológicas em tempo real, permitindo uma visão completa
      dos eventos extremos no planeta. Para informações mais focadas em clima e eventos
      atmosféricos, leia também nosso artigo sobre o{' '}
      <InternalLink to="/blog/super-el-nino-2026">Super El Niño 2026</InternalLink>.
    </P>

    <H2 id="conclusao">Conclusão: preparação salva vidas</H2>

    <P>
      O terremoto na Venezuela em 2026 reforça uma lição que a Geologia repete há décadas: a
      natureza segue ciclos longos, e a preparação humana precisa acompanhar esse ritmo. Investir em
      educação sísmica, construções resilientes, monitoramento contínuo e sistemas de alerta é mais
      eficiente — e mais barato — do que reconstruir cidades depois da tragédia.
    </P>

    <P>
      Continue acompanhando o blog do Clima Tempo para análises técnicas, acessíveis e atualizadas
      sobre os principais eventos climáticos e geológicos do planeta. Se quiser entender o cenário
      meteorológico global em paralelo, visite nossa <InternalLink to="/agora">página de tempo agora</InternalLink>{' '}
      e a <InternalLink to="/15-dias">previsão estendida</InternalLink>.
    </P>

    <H2 id="faq">Perguntas frequentes sobre o terremoto na Venezuela 2026</H2>

    <FAQ
      items={[
        {
          q: 'Qual foi a magnitude do terremoto na Venezuela em 2026?',
          a: 'O evento principal atingiu magnitude 6,1 na escala Richter, segundo o USGS, com epicentro a 90 km a leste de Caracas e profundidade de 12 km.',
        },
        {
          q: 'Qual falha causou o terremoto?',
          a: 'A análise técnica aponta a Falha de Boconó como principal responsável, uma estrutura transcorrente que se estende por mais de 500 km nos Andes venezuelanos.',
        },
        {
          q: 'O terremoto na Venezuela pode afetar o Brasil?',
          a: 'Não. As ondas sísmicas perdem energia rapidamente em longas distâncias, e o Brasil está em região tectonicamente estável. No máximo, sismógrafos no Norte podem registrar o evento, mas sem causar danos.',
        },
        {
          q: 'Existe risco de novos terremotos fortes na Venezuela?',
          a: 'Sim. A Falha de Boconó libera energia em ciclos. Embora o evento de 2026 tenha aliviado parte da tensão, novos tremores moderados a fortes seguem dentro das probabilidades estatísticas.',
        },
        {
          q: 'Houve risco de tsunami?',
          a: 'Não. Como o epicentro foi terrestre e a magnitude relativamente moderada, não houve emissão de alerta de tsunami pelo Centro de Alerta do Caribe (PTWC).',
        },
        {
          q: 'Como acompanhar terremotos em tempo real?',
          a: (
            <>
              Você pode usar o <ExternalLink href="https://earthquake.usgs.gov/earthquakes/map/">mapa global do USGS</ExternalLink>{' '}
              ou acompanhar nosso <InternalLink to="/">Monitor Geológico e Climático Global</InternalLink>, que integra
              dados sísmicos com informações meteorológicas em uma única interface.
            </>
          ),
        },
      ]}
    />
  </>
);
