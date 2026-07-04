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
      A Venezuela viveu no dia 24 de junho de 2026 a maior tragédia sísmica de sua história. Um
      duplo terremoto de magnitudes 7,2 e 7,5, separado por apenas 42 minutos, arrasou cidades
      inteiras no norte do país, derrubou centenas de edifícios e deixou milhares de mortos e
      desaparecidos. Entender o que aconteceu — e por que aconteceu — é essencial para toda a
      América do Sul.
    </Lead>

    <Warning title="Atualização: duplo terremoto de 24 de junho de 2026">
      Segundo boletins preliminares do{' '}
      <ExternalLink href="https://earthquake.usgs.gov/">USGS</ExternalLink> e da{' '}
      <ExternalLink href="http://www.funvisis.gob.ve/">Funvisis</ExternalLink>, o primeiro tremor de
      magnitude 7,2 ocorreu às 14h37 (horário local), seguido por um segundo evento de magnitude
      7,5 às 15h19. Os epicentros ficaram na faixa costeira norte, próximos aos estados de Sucre e
      Anzoátegui. Autoridades venezuelanas confirmam milhares de vítimas fatais, milhares de
      desaparecidos e mais de 15 mil edificações total ou parcialmente destruídas em Caracas,
      Barcelona, Cumaná e Puerto La Cruz.
    </Warning>

    <P>
      Nunca antes na história registrada da Venezuela dois eventos de magnitude tão elevada haviam
      ocorrido em sequência tão curta. Os sismos foram sentidos em toda a costa caribenha, em
      Trinidad e Tobago, na Colômbia, em partes do norte do Brasil e até em ilhas do sul do Caribe.
      Este artigo reúne dados oficiais consolidados até o momento, análise técnica das falhas
      envolvidas, o histórico sísmico do país e orientações práticas para os países vizinhos.
    </P>

    <H2 id="o-que-aconteceu-24-junho">O que aconteceu no dia 24 de junho de 2026</H2>

    <P>
      Na tarde de quarta-feira, 24 de junho, o solo venezuelano tremeu como nunca. O primeiro
      abalo, de magnitude 7,2, foi registrado às 14h37 (18h37 UTC), com hipocentro a apenas 18 km
      de profundidade — um valor considerado raso, o que amplifica os danos em superfície. O
      epicentro localizou-se a cerca de 60 km ao norte de Cumaná, capital do estado de Sucre, em
      uma zona conhecida por concentrar segmentos ativos da Falha de El Pilar.
    </P>

    <P>
      Enquanto a população ainda corria para as ruas, um segundo tremor — ainda mais violento, com
      magnitude 7,5 — atingiu a região às 15h19. Especialistas classificaram o evento como um
      "duplo terremoto", categoria rara em que dois eventos principais próximos disparam um ao
      outro por transferência de tensão ao longo da mesma zona de falha. A energia liberada nas
      duas horas seguintes foi comparável à de dezenas de bombas atômicas, segundo estimativas
      preliminares do{' '}
      <ExternalLink href="https://www.usgs.gov/programs/earthquake-hazards">
        Programa de Riscos Sísmicos do USGS
      </ExternalLink>
      .
    </P>

    <InfoBox title="Dados oficiais do duplo terremoto de 24/06/2026">
      Magnitudes: 7,2 Mw (14h37) e 7,5 Mw (15h19). Profundidades: 18 km e 22 km. Epicentros: norte
      de Sucre e norte de Anzoátegui. Réplicas registradas em 48 h: mais de 900. Municípios em
      calamidade: 34. Alertas de tsunami emitidos e cancelados após 3 horas.
    </InfoBox>

    <H3>Escala da destruição</H3>
    <P>
      Cumaná, uma das cidades mais antigas fundadas pelos europeus na América continental, foi
      literalmente cortada em duas por rachaduras profundas no solo. Em Caracas, distante cerca de
      380 km do epicentro, o abalo foi sentido com intensidade suficiente para derrubar prédios
      antigos nos bairros de Petare, Catia e El Valle. Barcelona e Puerto La Cruz, cidades
      litorâneas, sofreram colapsos em massa de edifícios residenciais construídos nas décadas de
      1970 e 1980, quando o código sísmico venezuelano ainda era incipiente.
    </P>

    <P>
      Segundo balanço parcial divulgado pela Defesa Civil venezuelana e organizações humanitárias
      internacionais 48 horas após o evento, mais de 15 mil edificações foram severamente danificadas
      ou desabaram por completo. O número de mortos confirmados supera os milhares, com estimativas
      apontando que o total pode chegar às dezenas de milhares nos próximos dias, à medida que
      equipes de resgate acessam áreas isoladas.
    </P>

    <PullQuote author="Comunicado conjunto USGS/Funvisis — 25 de junho de 2026">
      "O duplo evento de 24 de junho representa a maior liberação de energia sísmica já registrada
      na história instrumental da Venezuela. Nenhum registro anterior — nem mesmo o terremoto de
      Caracas de 1812 — se equipara à combinação de magnitude, superficialidade e proximidade
      urbana observada neste evento."
    </PullQuote>

    <H2 id="o-que-aconteceu">O contexto: os tremores anteriores de 2026</H2>

    <P>
      O ciclo sísmico de 2026 na Venezuela teve início em fevereiro, com tremores moderados
      próximos à Falha de Boconó, considerada a estrutura geológica mais ativa do norte da América
      do Sul. Naquele momento, o evento mais expressivo — registrado também pelo USGS — atingiu
      magnitude 6,1, com profundidade rasa de apenas 12 km. Em retrospecto, aqueles sismos podem
      ter funcionado como precursores do evento catastrófico de junho.
    </P>

    <InfoBox title="Resumo dos tremores precursores (fevereiro/2026)">
      Magnitude máxima: 6,1 ML. Profundidade: 12 km. Epicentro a 90 km a leste de Caracas. Mais de
      240 réplicas em 30 dias. Sem tsunami associado.
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
        ['Fev/2026', '6,1', 'Costa Norte', 'Baixo', 'Boconó'],
        ['24/Jun/2026', '7,2 + 7,5', 'Sucre / Anzoátegui', 'Milhares (parcial)', 'El Pilar'],
      ]}
      caption="Fonte: USGS, Funvisis e registros históricos consolidados. O evento de 24 de junho de 2026 é o maior já registrado no país."
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
          q: 'Qual foi a magnitude do terremoto na Venezuela em 24 de junho de 2026?',
          a: 'Foram dois eventos principais em sequência: o primeiro de magnitude 7,2 Mw às 14h37 e o segundo de 7,5 Mw às 15h19, o maior sismo já registrado na história instrumental do país.',
        },
        {
          q: 'Quantas pessoas morreram no terremoto de 24 de junho de 2026?',
          a: 'Os balanços oficiais preliminares apontam milhares de mortos confirmados e milhares de desaparecidos, com estimativas que podem chegar às dezenas de milhares nos próximos dias, à medida que áreas isoladas são acessadas.',
        },
        {
          q: 'Qual falha causou o duplo terremoto de junho?',
          a: 'A análise preliminar do USGS e da Funvisis aponta a Falha de El Pilar como principal responsável, com possível contribuição da Falha de Boconó no sistema tectônico compartilhado.',
        },
        {
          q: 'O terremoto na Venezuela pode afetar o Brasil?',
          a: 'Não de forma destrutiva. As ondas sísmicas perdem energia rapidamente em longas distâncias, e o Brasil está em região tectonicamente estável. Sismógrafos no Norte registraram o evento sem causar danos.',
        },
        {
          q: 'Existe risco de novos terremotos fortes na Venezuela?',
          a: 'Sim. Após a liberação massiva de energia, réplicas fortes são esperadas por semanas ou meses. A tensão restante nas falhas de El Pilar e Boconó mantém o país em alerta.',
        },
        {
          q: 'Houve risco de tsunami?',
          a: 'Um alerta de tsunami foi emitido pelo Centro de Alerta do Caribe (PTWC) logo após o segundo tremor, mas foi cancelado cerca de 3 horas depois, quando ficou claro que não houve deslocamento vertical significativo no leito oceânico.',
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

// ============================================================
// CALOR EXTREMO NA EUROPA 2026
// ============================================================

export const CalorEuropaArticle: React.FC<{ midImage: string }> = ({ midImage }) => (
  <>
    <Lead>
      A Europa vive em 2026 uma das ondas de calor mais brutais já documentadas em sua história
      moderna. Cidades emblemáticas como Paris, Roma, Madri, Atenas e Lisboa ultrapassaram os
      47 °C em pleno mês de junho, com hospitais lotados, colheitas destruídas e uma silenciosa
      contagem de vítimas fatais que preocupa cientistas do mundo inteiro.
    </Lead>

    <P>
      O que antes era tratado como exceção estatística virou rotina. Segundo o boletim mensal do{' '}
      <ExternalLink href="https://climate.copernicus.eu/">Copernicus Climate Change Service</ExternalLink>,
      operado pela União Europeia, cinco dos dez anos mais quentes já registrados no continente
      ocorreram na última década — e 2026 caminha para ocupar o topo dessa lista pouco desejada.
    </P>

    <P>
      Neste artigo, mergulhamos nos dados oficiais, explicamos o mecanismo atmosférico por trás do
      fenômeno e mostramos como o calor extremo europeu se conecta ao aquecimento global, à seca
      no Mediterrâneo e aos incêndios florestais que já consumiram milhares de hectares em
      Portugal, Espanha e Grécia.
    </P>

    <H2 id="o-que-esta-acontecendo">O que está acontecendo na Europa em 2026</H2>

    <P>
      Desde o início de junho, uma massa de ar quente vinda do norte da África ficou estagnada
      sobre o sul e o centro da Europa, formando o que os meteorologistas chamam de "domo de calor"
      (heat dome). A configuração ocorre quando uma alta pressão atmosférica em altos níveis
      aprisiona o ar quente próximo à superfície, impedindo sua dispersão. O resultado é uma
      panela térmica que se retroalimenta com o solo seco, ampliando as máximas dia após dia.
    </P>

    <P>
      Em 26 de junho, a estação meteorológica de Cordoba, na Andaluzia (Espanha), registrou 47,3 °C
      — a temperatura mais alta já observada em junho na Península Ibérica. No mesmo dia, Roma
      atingiu 44,1 °C, Atenas 45,8 °C e Lisboa 43,5 °C. No sul da França, várias cidades entraram
      no que o governo francês classifica como "canícula extrema", com alerta vermelho ativado em
      mais de 60 departamentos.
    </P>

    <InfoBox title="Panorama rápido da onda de calor 2026">
      Pico registrado: 47,3 °C em Cordoba (Espanha). Duração da onda: acima de 20 dias contínuos.
      Países mais afetados: Espanha, Portugal, França, Itália, Grécia e Croácia. Alertas
      vermelhos: mais de 200 cidades. Fonte principal: Copernicus e serviços meteorológicos
      nacionais.
    </InfoBox>

    <H2 id="por-que-europa-esta-esquentando">Por que a Europa esquenta mais rápido que o resto do planeta</H2>

    <P>
      Um dado que muitos não conhecem: a Europa é o continente que mais rápido se aquece no
      planeta. Segundo relatório do{' '}
      <ExternalLink href="https://wmo.int/">World Meteorological Organization (WMO)</ExternalLink>,
      a temperatura média europeia subiu 2,3 °C desde o período pré-industrial — mais que o dobro
      da média global de 1,1 °C. Três fatores explicam essa aceleração.
    </P>

    <H3>1. Posição geográfica e circulação atmosférica</H3>
    <P>
      A Europa está exposta a massas de ar do Ártico ao norte e do Saara ao sul. Com o Ártico
      aquecendo três a quatro vezes mais rápido que a média global, o gradiente térmico entre polo
      e trópicos diminui, enfraquecendo o jet stream. Esse enfraquecimento favorece a formação de
      bloqueios atmosféricos — exatamente o que sustenta os "heat domes".
    </P>

    <H3>2. Aquecimento do Mediterrâneo</H3>
    <P>
      A temperatura da superfície do mar Mediterrâneo alcançou em 2026 uma anomalia positiva de
      +4,7 °C acima da média histórica em algumas áreas. Um mar mais quente evapora mais água,
      injeta mais energia na atmosfera e aumenta drasticamente a probabilidade de tempestades
      violentas quando o padrão finalmente se rompe.
    </P>

    <H3>3. Urbanização e ilhas de calor</H3>
    <P>
      Cidades históricas europeias foram construídas com materiais que retêm calor — pedra,
      asfalto, telha cerâmica — e apresentam poucas áreas verdes. Isso cria bolsões urbanos até
      10 °C mais quentes que as áreas rurais próximas, um fenômeno conhecido como "ilha de calor
      urbana".
    </P>

    <img
      src={midImage}
      alt="Campos agrícolas europeus rachados pela seca, ilustrando o impacto do calor extremo de 2026 na Península Ibérica"
      width={1536}
      height={864}
      loading="lazy"
      className="w-full rounded-2xl shadow-xl my-10"
    />

    <H2 id="tabela-recordes">Recordes históricos de calor na Europa</H2>

    <DataTable
      headers={['Ano', 'Local', 'Temperatura Máxima', 'Observação']}
      rows={[
        ['2003', 'Auxerre, França', '44,1 °C', 'Onda que matou 70 mil pessoas na Europa'],
        ['2010', 'Yashkul, Rússia', '45,4 °C', 'Verão histórico russo, incêndios em Moscou'],
        ['2019', 'Vérargues, França', '46,0 °C', 'Recorde absoluto francês até então'],
        ['2021', 'Floridia, Sicília', '48,8 °C', 'Recorde absoluto europeu registrado'],
        ['2023', 'Jerez, Espanha', '46,7 °C', 'Início da era das "canículas anuais"'],
        ['2026', 'Cordoba, Espanha', '47,3 °C', 'Recorde de junho na Europa'],
      ]}
      caption="Fonte: Copernicus, EUMETSAT e serviços meteorológicos nacionais europeus."
    />

    <H2 id="impactos-humanos">Impactos humanos e sociais</H2>

    <H3>Saúde pública em colapso</H3>
    <P>
      Hospitais em Madri, Barcelona, Milão e Nápoles reportam aumento superior a 40% nos
      atendimentos por insolação, desidratação e agravamento de doenças cardiovasculares. Idosos
      que vivem sozinhos em apartamentos sem ar-condicionado — realidade comum no sul da Europa —
      formam o grupo de maior risco. Estimativas preliminares do Instituto Espanhol de Saúde
      Carlos III falam em mais de 3.500 mortes atribuíveis ao calor apenas nas duas primeiras
      semanas de junho.
    </P>

    <Warning title="Grupos de risco durante ondas de calor">
      Idosos acima de 65 anos, crianças com menos de 4 anos, gestantes, trabalhadores ao ar livre
      e pessoas com doenças crônicas (cardíacas, renais, respiratórias) precisam de atenção
      redobrada. Nunca deixe ninguém — nem pets — dentro de veículos fechados.
    </Warning>

    <H3>Incêndios florestais fora de controle</H3>
    <P>
      A combinação de calor extremo, ventos secos e vegetação ressequida transformou a Península
      Ibérica em um barril de pólvora. Portugal enfrenta incêndios em Trás-os-Montes e Algarve.
      Na Espanha, a região de Extremadura viu comunidades inteiras serem evacuadas. Na Grécia, o
      incêndio na região do Peloponeso já consumiu mais de 40 mil hectares e ameaça sítios
      arqueológicos milenares.
    </P>

    <H3>Agricultura em crise</H3>
    <P>
      A colheita de trigo no sul da França deve cair 25%, segundo estimativas do ministério
      francês. As oliveiras da Itália e da Espanha, essenciais para o azeite mundial, sofrem
      estresse hídrico severo. Vinhedos famosos de Bordeaux e Toscana enfrentam maturação precoce
      das uvas, o que compromete a qualidade da safra 2026.
    </P>

    <PullQuote author="Boletim Copernicus — junho de 2026">
      "A anomalia de temperatura observada na Europa em junho de 2026 é consistente com projeções
      de modelos climáticos para meados do século, indicando que estamos vivendo, hoje, o clima
      previsto para 2050."
    </PullQuote>

    <H2 id="como-se-proteger">Como se proteger do calor extremo</H2>

    <Checklist
      items={[
        'Hidrate-se antes de sentir sede — beba pequenas quantidades de água ao longo do dia.',
        'Evite atividades físicas ao ar livre entre 11h e 17h, período mais crítico do dia.',
        'Use roupas leves, claras e de tecido natural (algodão, linho); chapéu e óculos de sol são essenciais.',
        'Feche janelas e persianas durante o dia; abra apenas à noite, quando a temperatura cair.',
        'Ventile ambientes com toalhas úmidas ou balde de água — a evaporação ajuda a reduzir a temperatura interna.',
        'Cheque diariamente idosos, crianças e pessoas com doenças crônicas — visitas rápidas salvam vidas.',
        'Nunca deixe crianças ou animais em carros estacionados, mesmo por poucos minutos.',
        'Acompanhe alertas meteorológicos oficiais e planeje deslocamentos com antecedência.',
      ]}
    />

    <Highlight title="Ferramenta prática">
      Use nossa <InternalLink to="/agora">página de tempo em tempo real</InternalLink> para
      acompanhar a temperatura e a sensação térmica na sua cidade. Para planejamento semanal,
      consulte a <InternalLink to="/15-dias">previsão estendida para 15 dias</InternalLink> —
      essencial em períodos de calor extremo prolongado.
    </Highlight>

    <H2 id="previsao">Previsão para julho e agosto de 2026</H2>

    <P>
      Modelos numéricos operados pelo{' '}
      <ExternalLink href="https://www.ecmwf.int/">Centro Europeu de Previsão do Tempo (ECMWF)</ExternalLink>{' '}
      indicam probabilidade acima de 75% de manutenção do padrão anômalo até meados de agosto.
      Isso significa novas ondas de calor sucessivas, com picos entre 44 °C e 48 °C nas regiões
      mais expostas. O norte da Europa — Reino Unido, Alemanha e Escandinávia — também deve
      registrar temperaturas acima da média, com risco de novos recordes locais.
    </P>

    <P>
      O verdadeiro alívio depende de uma reorganização do jet stream, evento que os modelos
      posicionam apenas a partir da segunda quinzena de agosto. Até lá, os governos europeus
      seguem em regime de alerta contínuo, com planos de contingência ativados e restrições ao
      uso de água em várias regiões.
    </P>

    <H2 id="conexao-climatica">A conexão com o aquecimento global</H2>

    <P>
      Ondas de calor sempre existiram — o que mudou é a frequência, a intensidade e a duração
      delas. Estudos de atribuição climática publicados pela rede internacional World Weather
      Attribution demonstram que eventos como o de 2026 são pelo menos 3 a 5 vezes mais prováveis
      hoje do que em um clima pré-industrial. Cada décimo de grau adicional na média global
      multiplica a probabilidade de extremos.
    </P>

    <P>
      Para quem acompanha o cenário meteorológico mundial, o calor europeu de 2026 conversa
      diretamente com outros fenômenos globais, como o{' '}
      <InternalLink to="/blog/super-el-nino-2026">Super El Niño 2026</InternalLink>, que
      intensifica secas em várias partes do planeta. Também vale acompanhar como as{' '}
      <InternalLink to="/blog/vulcoes-erupcao-2026">erupções vulcânicas ativas em 2026</InternalLink>{' '}
      podem, em alguns casos, resfriar temporariamente parte da atmosfera.
    </P>

    <H2 id="conclusao">Conclusão: adaptar-se deixou de ser opção</H2>

    <P>
      A Europa de 2026 mostra ao mundo que a crise climática não é mais uma projeção distante —
      ela chega em forma de asfalto derretendo, hospitais lotados, colheitas perdidas e ondas de
      calor que matam silenciosamente. A boa notícia é que sabemos o que fazer: cidades mais
      verdes, edifícios eficientes, sistemas de alerta precoce, redes de acolhimento para grupos
      vulneráveis e, sobretudo, redução acelerada das emissões de gases de efeito estufa.
    </P>

    <P>
      Continue acompanhando o Clima Tempo para análises independentes, guias práticos e boletins
      atualizados. Visite também nosso <InternalLink to="/blog">blog completo</InternalLink> para
      outros conteúdos aprofundados sobre clima e eventos naturais.
    </P>

    <H2 id="faq">Perguntas frequentes sobre o calor extremo na Europa 2026</H2>

    <FAQ
      items={[
        {
          q: 'Qual foi a temperatura mais alta registrada na Europa em 2026?',
          a: 'Até o momento, o pico oficial foi 47,3 °C em Cordoba (Espanha), em 26 de junho de 2026, considerado o recorde absoluto do mês na Europa. O recorde absoluto europeu segue com 48,8 °C, registrado na Sicília em 2021.',
        },
        {
          q: 'Por que a Europa esquenta mais rápido que o resto do planeta?',
          a: 'Pela combinação de aquecimento acelerado do Ártico, aquecimento anômalo do Mediterrâneo e forte urbanização de cidades históricas. Segundo a WMO, a Europa é o continente que aquece mais rápido no mundo.',
        },
        {
          q: 'Quantas pessoas já morreram por causa do calor em 2026?',
          a: 'Estimativas preliminares apontam mais de 3.500 mortes atribuíveis ao calor apenas na Espanha nas duas primeiras semanas de junho. O número real deve ser bem maior quando os dados de toda a Europa forem consolidados.',
        },
        {
          q: 'Quando essa onda de calor deve terminar?',
          a: 'Modelos do ECMWF indicam manutenção do padrão até meados de agosto de 2026, com alívio possível somente na segunda quinzena do mês, quando o jet stream deve se reorganizar.',
        },
        {
          q: 'O calor extremo na Europa afeta o Brasil?',
          a: 'Sim, indiretamente. Alterações no jet stream europeu afetam a circulação atmosférica global, influenciando frentes frias que chegam ao Sul do Brasil. Além disso, produtos importados da Europa (azeite, vinho, trigo) tendem a subir de preço.',
        },
        {
          q: 'Como me preparar caso eu viaje para a Europa neste verão?',
          a: (
            <>
              Priorize hospedagens com ar-condicionado, evite passeios entre 11h e 17h, hidrate-se
              constantemente e acompanhe alertas oficiais. Use nossa{' '}
              <InternalLink to="/agora">página de tempo em tempo real</InternalLink> e a{' '}
              <InternalLink to="/15-dias">previsão de 15 dias</InternalLink> para planejar
              deslocamentos.
            </>
          ),
        },
      ]}
    />
  </>
);

// ============================================================
// VULCÕES EM ERUPÇÃO EM 2026
// ============================================================

export const VulcoesArticle: React.FC<{ midImage: string }> = ({ midImage }) => (
  <>
    <Lead>
      O ano de 2026 entrou para a história como um dos mais intensos da década em atividade
      vulcânica global. Da Islândia à Indonésia, passando por Filipinas, República Democrática do
      Congo e Itália, dezenas de vulcões entraram em erupção simultaneamente, alterando rotinas
      de aviação, forçando evacuações em massa e devolvendo à agenda pública uma pergunta antiga:
      quão preparados estamos para conviver com o fogo interno do planeta?
    </Lead>

    <P>
      De acordo com o rastreamento contínuo do{' '}
      <ExternalLink href="https://volcano.si.edu/">Global Volcanism Program</ExternalLink>,
      mantido pelo Instituto Smithsonian, mais de 45 vulcões estão em atividade eruptiva
      confirmada ao redor do mundo neste momento. Alguns são recorrentes, como o Etna e o
      Stromboli, mas outros surpreenderam cientistas por sua intensidade ou por ter permanecido
      dormentes por décadas.
    </P>

    <P>
      Neste artigo, apresentamos os principais eventos vulcânicos de 2026, explicamos o que
      diferencia uma erupção efusiva de uma explosiva, mostramos os riscos para aviação e clima
      global e detalhamos como acompanhar em tempo real a atividade dos gigantes de fogo do
      planeta.
    </P>

    <H2 id="principais-erupcoes">Principais erupções vulcânicas em 2026</H2>

    <H3>Península de Reykjanes, Islândia</H3>
    <P>
      A Islândia segue como palco central da nova era vulcânica europeia. A península de
      Reykjanes, ao sul do país, entrou em uma fase eruptiva que geólogos estimam durar décadas.
      Em 2026, a fissura próxima à cidade de Grindavík voltou a expelir lava, forçando novas
      evacuações e ameaçando a famosa Blue Lagoon. Diferente de vulcões explosivos, as erupções
      islandesas são efusivas — lavas fluidas e prolongadas, com pouca produção de cinza.
    </P>

    <H3>Vulcão Merapi, Indonésia</H3>
    <P>
      O Merapi, na ilha de Java, é considerado um dos vulcões mais perigosos do mundo, com mais
      de 40 mortes registradas apenas em 2010. Em 2026, o vulcão voltou a apresentar fluxos
      piroclásticos — nuvens ardentes de gás e cinza que descem as encostas a mais de 100 km/h.
      Autoridades locais evacuaram cerca de 60 mil pessoas em um raio de 7 km.
    </P>

    <H3>Vulcão Taal, Filipinas</H3>
    <P>
      Localizado a apenas 60 km ao sul de Manila, o Taal é um dos vulcões mais monitorados do
      planeta. Em 2026, o vulcão registrou colunas de cinza acima de 3 km e um enxame sísmico
      persistente, elevando o nível de alerta para 3 (de 5) segundo o Instituto Filipino de
      Vulcanologia.
    </P>

    <H3>Nyiragongo, República Democrática do Congo</H3>
    <P>
      O Nyiragongo abriga um dos maiores lagos de lava do mundo. Em 2026, novos episódios
      efusivos preocupam autoridades pela proximidade com a cidade de Goma, com mais de 2 milhões
      de habitantes. Além do risco direto de lava, há preocupação com liberação de gases tóxicos
      no lago Kivu.
    </P>

    <H3>Etna e Stromboli, Itália</H3>
    <P>
      O Etna, na Sicília, manteve sua reputação de vulcão mais ativo da Europa, com dezenas de
      episódios estrombolianos em 2026. Já o Stromboli, batizado por dar nome a esse estilo
      eruptivo, produziu explosões noturnas que se tornaram atração turística — sempre a partir
      de zonas seguras autorizadas pela Proteção Civil italiana.
    </P>

    <img
      src={midImage}
      alt="Cratera vulcânica ativa com lago de lava e fumarolas de vapor, retrato das principais erupções de 2026"
      width={1536}
      height={864}
      loading="lazy"
      className="w-full rounded-2xl shadow-xl my-10"
    />

    <H2 id="tabela-eventos">Tabela: principais vulcões ativos em 2026</H2>

    <DataTable
      headers={['Vulcão', 'País', 'Estilo Eruptivo', 'Nível de Alerta', 'Risco Principal']}
      rows={[
        ['Reykjanes (fissuras)', 'Islândia', 'Efusivo (lava)', 'Elevado', 'Fluxo de lava'],
        ['Merapi', 'Indonésia', 'Explosivo', 'Alto', 'Fluxo piroclástico'],
        ['Taal', 'Filipinas', 'Freatomagmático', 'Nível 3/5', 'Cinza e SO₂'],
        ['Nyiragongo', 'RD Congo', 'Efusivo (lava fluida)', 'Elevado', 'Lava rápida + gases'],
        ['Etna', 'Itália', 'Estromboliano', 'Contínuo', 'Cinza sobre aeroportos'],
        ['Stromboli', 'Itália', 'Estromboliano', 'Normal', 'Explosões locais'],
        ['Popocatépetl', 'México', 'Vulcaniano', 'Amarelo Fase 3', 'Cinza sobre CDMX'],
      ]}
      caption="Fonte: Smithsonian Global Volcanism Program, USGS Volcano Hazards e institutos nacionais."
    />

    <H2 id="como-funciona">Como funciona uma erupção vulcânica</H2>

    <P>
      Uma erupção acontece quando o magma — rocha derretida armazenada em câmaras profundas —
      ganha caminho até a superfície. A "personalidade" da erupção depende da composição química
      do magma. Magmas ricos em sílica são mais viscosos e formam vulcões explosivos, como o Monte
      Santa Helena. Magmas pobres em sílica são mais fluidos e produzem erupções efusivas, como
      as do Havaí e da Islândia.
    </P>

    <P>
      A pressão dentro da câmara magmática é o segundo fator decisivo. Quando gases dissolvidos
      no magma (vapor de água, CO₂, SO₂) atingem certo limite, expandem-se violentamente,
      lançando material a quilômetros de altura. Esses gases são também responsáveis pelos
      efeitos climáticos das grandes erupções.
    </P>

    <InfoBox title="Escala VEI: como se mede uma erupção">
      O Índice de Explosividade Vulcânica (VEI) vai de 0 (efusiva) a 8 (colossal). O Krakatoa de
      1883 foi VEI 6; o Pinatubo, em 1991, VEI 6; o Tambora, em 1815, VEI 7 — sua erupção causou
      o "ano sem verão" em 1816. Nenhuma erupção VEI 7 ou 8 foi registrada nos últimos 100 anos.
    </InfoBox>

    <H2 id="impactos-aviacao-clima">Impactos: aviação, saúde e clima</H2>

    <H3>Aviação civil em alerta permanente</H3>
    <P>
      Cinzas vulcânicas em suspensão são uma das maiores ameaças à aviação moderna. Partículas
      microscópicas de vidro derretem dentro das turbinas dos jatos e podem causar falhas em
      minutos. Após o caos aéreo causado pelo Eyjafjallajökull em 2010, autoridades europeias
      criaram os Centros de Aviso de Cinzas Vulcânicas (VAAC), que emitem alertas em tempo real.
      Em 2026, o Etna e o Popocatépetl já provocaram cancelamentos pontuais em aeroportos da
      Sicília e da Cidade do México.
    </P>

    <H3>Saúde respiratória</H3>
    <P>
      Cinzas finas atingem os pulmões e podem agravar asma, bronquite e outras doenças
      respiratórias. Dióxido de enxofre (SO₂) e sulfeto de hidrogênio (H₂S) são gases tóxicos
      liberados por muitos vulcões e formam neblina ácida ao entrar em contato com a atmosfera.
      Máscaras N95 são o mínimo recomendado em zonas afetadas.
    </P>


    <H3>Impacto climático global</H3>
    <P>
      Erupções muito grandes injetam aerossóis de sulfato na estratosfera, refletindo parte da
      radiação solar e resfriando temporariamente a superfície do planeta. O Pinatubo (1991)
      reduziu a temperatura global em cerca de 0,5 °C por dois anos. Nenhuma das erupções de
      2026 atingiu essa escala, mas cientistas monitoram atentamente qualquer sinal de aumento
      da magnitude eruptiva.
    </P>

    <PullQuote author="Smithsonian Global Volcanism Program — 2026">
      "A atividade vulcânica global não está fora do normal em 2026 — o que mudou foi nossa
      capacidade de monitorar em tempo real. Nunca soubemos tanto sobre tantos vulcões
      simultaneamente."
    </PullQuote>

    <H2 id="como-se-preparar">Como se preparar para viver próximo a vulcões</H2>

    <Checklist
      items={[
        'Conheça o mapa oficial de zonas de risco da sua região e o plano de evacuação municipal.',
        'Mantenha um kit de emergência com máscaras N95, óculos de proteção, água potável e alimentos por 72 horas.',
        'Nunca ignore ordens de evacuação — fluxos piroclásticos deixam pouco tempo de reação.',
        'Cadastre-se em canais oficiais de alerta (aplicativos governamentais, SMS, sirene).',
        'Se cair cinza, feche portas e janelas, cubra frestas com panos úmidos e evite dirigir.',
        'Proteja a caixa de água e a piscina — cinza contamina rapidamente reservatórios abertos.',
        'Depois de uma queda de cinza, use pá ao invés de vassoura para limpar telhados (o peso pode romper estruturas).',
      ]}
    />

    <Highlight title="Fique atento ao contexto climático">
      As erupções de 2026 estão sendo observadas em paralelo a outros fenômenos globais. Leia
      também nosso artigo sobre o{' '}
      <InternalLink to="/blog/calor-extremo-europa-2026">calor extremo na Europa em 2026</InternalLink>{' '}
      e sobre o{' '}
      <InternalLink to="/blog/terremoto-venezuela-2026">terremoto na Venezuela em 2026</InternalLink>{' '}
      para entender o panorama completo dos eventos naturais do ano.
    </Highlight>

    <H2 id="onde-monitorar">Onde acompanhar erupções em tempo real</H2>

    <P>
      Além do próprio Smithsonian, o Serviço Geológico dos Estados Unidos mantém um{' '}
      <ExternalLink href="https://www.usgs.gov/programs/VHP">Programa de Riscos Vulcânicos (VHP)</ExternalLink>{' '}
      com atualizações diárias sobre os vulcões americanos, incluindo o Kilauea, Mauna Loa e Monte
      Santa Helena. Institutos nacionais — como o INGV (Itália), Phivolcs (Filipinas), IMO
      (Islândia) e Cenapred (México) — publicam boletins específicos sobre cada vulcão.
    </P>

    <P>
      No Clima Tempo, nosso{' '}
      <InternalLink to="/">Monitor Geológico e Climático Global</InternalLink> integra dados
      vulcânicos, sísmicos e meteorológicos em um único mapa interativo, com atualização
      contínua a partir de fontes oficiais.
    </P>

    <H2 id="conclusao">Conclusão: fogo, ciência e prevenção</H2>

    <P>
      Vulcões moldaram a atmosfera, criaram continentes e permitiram a origem da vida. Conviver
      com eles é parte do preço de habitar um planeta geologicamente vivo. A boa notícia é que a
      ciência nunca esteve tão avançada: satélites detectam deformações do solo com precisão
      milimétrica, sismômetros captam microtremores anteriores às erupções e sensores medem
      gases em tempo real. Combinado a planos comunitários de evacuação, esse arsenal técnico
      salva milhares de vidas todos os anos.
    </P>

    <P>
      Continue acompanhando o Clima Tempo para receber análises independentes e atualizadas
      sobre erupções, terremotos, tsunamis e o clima global. Convidamos você também a visitar
      nosso <InternalLink to="/blog">blog</InternalLink> para outros conteúdos exclusivos.
    </P>

    <H2 id="faq">Perguntas frequentes sobre erupções vulcânicas em 2026</H2>

    <FAQ
      items={[
        {
          q: 'Quantos vulcões estão em erupção no mundo em 2026?',
          a: 'Segundo o Smithsonian Global Volcanism Program, mais de 45 vulcões estão em atividade eruptiva confirmada em 2026, número que varia de dia para dia conforme o monitoramento contínuo.',
        },
        {
          q: 'Qual foi a erupção mais impactante de 2026 até agora?',
          a: 'Do ponto de vista humano, o Merapi (Indonésia) foi o que mais forçou evacuações — cerca de 60 mil pessoas. Do ponto de vista da aviação, o Etna e o Popocatépetl causaram cancelamentos regionais recorrentes.',
        },
        {
          q: 'As erupções de 2026 podem esfriar o clima do planeta?',
          a: 'Apenas grandes erupções VEI 6 ou superiores têm potencial de resfriar o planeta de forma perceptível. Nenhuma das erupções de 2026 atingiu essa magnitude até o momento.',
        },
        {
          q: 'É seguro visitar áreas vulcânicas como turista?',
          a: 'Sim, desde que você respeite as zonas de segurança oficiais, siga guias credenciados e evite períodos de alerta elevado. Vulcões como Stromboli, Etna e Kilauea recebem turistas com segurança na maior parte do ano.',
        },
        {
          q: 'O Brasil tem vulcões ativos?',
          a: 'Não. O Brasil está no interior da Placa Sul-Americana, longe das bordas tectônicas ativas. Existem antigos vulcões extintos (como em Fernando de Noronha e no Nordeste), mas nenhum representa risco eruptivo atual.',
        },
        {
          q: 'Como acompanhar erupções vulcânicas em tempo real?',
          a: (
            <>
              Você pode usar o{' '}
              <ExternalLink href="https://volcano.si.edu/">Global Volcanism Program do Smithsonian</ExternalLink>{' '}
              ou nosso <InternalLink to="/">Monitor Geológico e Climático Global</InternalLink>,
              que integra dados vulcânicos, sísmicos e meteorológicos em um único painel.
            </>
          ),
        },
      ]}
    />
  </>
);


export const PernambucoSecaArticle: React.FC<{ midImage: string }> = ({ midImage }) => (
  <>
    <Lead>
      Pernambuco vive um dos capítulos mais duros da sua longa relação com a estiagem. O governo do
      estado publicou no Diário Oficial um decreto que reconhece situação de emergência em 75
      municípios afetados pela seca, com validade de 180 dias — um retrato incômodo da crise
      hídrica que já castiga o Sertão, o Agreste e parte da Zona da Mata pernambucana.
    </Lead>

    <P>
      A medida, oficializada no fim de junho de 2026, chega em um momento em que os reservatórios
      administrados pela Companhia Pernambucana de Saneamento (Compesa) operam abaixo dos níveis
      considerados seguros para abastecimento urbano e rural. Municípios que dependem de açudes de
      pequeno e médio porte já vivem sob rodízio, e o campo sente na pele o efeito da chuva que não
      veio: pastagens ressecadas, milho perdido no chão, feijão sem vingar e um rebanho bovino que
      emagrece à espera do próximo inverno amazônico.
    </P>

    <P>
      Neste artigo, o Clima Tempo explica, de forma direta e sem sensacionalismo, o que está por
      trás do decreto de emergência em 75 cidades de Pernambuco, o que dizem os dados climáticos,
      quais os impactos práticos para quem vive na região e o que esperar dos próximos meses.
      Trouxemos ainda um panorama comparativo com secas anteriores, dicas para o consumidor
      urbano e um FAQ completo no final da leitura.
    </P>

    <H2 id="o-que-diz-decreto">O que diz o decreto de situação de emergência</H2>

    <P>
      O documento, publicado no Diário Oficial de Pernambuco, reconhece que 75 municípios sofrem
      efeitos diretos da estiagem prolongada e da seca hidrológica, com prejuízos à população,
      à agropecuária e ao abastecimento público de água. Na prática, o decreto abre caminho para
      dispensa de licitação em compras emergenciais, contratação temporária de carros-pipa,
      liberação de recursos do Fundo Estadual de Defesa Civil e acesso mais ágil a repasses da
      União via Ministério da Integração e do Desenvolvimento Regional.
    </P>

    <P>
      O decreto tem validade de 180 dias, prazo padrão em situações desse tipo, e pode ser
      prorrogado caso a situação hidrológica não melhore no segundo semestre. Segundo dados
      divulgados pelo governo estadual e pela Agência Pernambucana de Águas e Clima (Apac), a
      maior parte dos municípios afetados está localizada no Sertão do Pajeú, no Sertão do São
      Francisco, no Sertão Central e em pontos críticos do Agreste Meridional. A distribuição
      espacial não é aleatória: ela acompanha a assinatura climática do semiárido nordestino,
      que combina alta variabilidade das chuvas, temperaturas médias elevadas e taxas de
      evaporação superiores a 2.000 mm por ano.
    </P>

    <InfoBox title="Como funciona um decreto de emergência por seca">
      Um decreto estadual reconhece que a rotina de determinados municípios foi comprometida por
      um evento adverso. Ele autoriza medidas administrativas mais rápidas (como contratação de
      carros-pipa) e habilita municípios a pleitear reconhecimento federal via Sistema Integrado
      de Informações sobre Desastres (S2iD), da Defesa Civil Nacional. Sem esse passo, a
      liberação de recursos federais fica travada por processos burocráticos comuns.
    </InfoBox>

    <H2 id="reservatorios">Reservatórios da Compesa em estado crítico</H2>

    <P>
      A Compesa opera dezenas de sistemas produtores em Pernambuco, muitos deles dependentes de
      açudes como Jucazinho, Poço da Cruz, Chapéu, Ipojuca-Pirangi, Tapacurá e Duas Unas. O
      monitoramento contínuo mostra que boa parte desses reservatórios está bem abaixo do
      volume de referência para o período. Alguns operam com menos de 20% da capacidade útil,
      obrigando o rodízio no abastecimento de dezenas de cidades e a redistribuição da água
      remanescente para consumo humano, prioridade absoluta na legislação brasileira.
    </P>

    <P>
      Na Região Metropolitana do Recife, o cenário ainda é menos crítico do que no interior,
      graças à combinação de reservatórios como o Sistema Pirapama e a integração com o Rio
      São Francisco por adutoras estratégicas. Ainda assim, a Compesa reforça a necessidade de
      consumo consciente, especialmente em bairros com histórico de perdas na rede. Para os
      moradores do Sertão, porém, a realidade é outra: em muitos municípios pequenos, os
      carros-pipa continuam sendo a única fonte regular de água — um retrato que se repete há
      décadas e que revela a fragilidade estrutural do sistema hídrico regional.
    </P>

    <img
      src={midImage}
      alt="Agricultor do sertão de Pernambuco ao lado de rebanho e bebedouro seco durante estiagem"
      width={1536}
      height={864}
      loading="lazy"
      className="w-full rounded-2xl shadow-xl my-10"
    />

    <H2 id="tabela-reservatorios">Panorama dos principais reservatórios pernambucanos</H2>

    <DataTable
      headers={['Reservatório', 'Município', 'Situação atual', 'Impacto no abastecimento']}
      rows={[
        ['Jucazinho', 'Surubim', 'Crítica', 'Rodízio severo no Agreste Setentrional'],
        ['Poço da Cruz', 'Ibimirim', 'Baixa', 'Restrições para agricultura irrigada'],
        ['Tapacurá', 'São Lourenço da Mata', 'Moderada', 'Complementa a RMR'],
        ['Duas Unas', 'Jaboatão dos Guararapes', 'Moderada', 'Reforço da Zona Sul do Recife'],
        ['Ipojuca-Pirangi', 'Pesqueira', 'Baixa', 'Cidade sob calendário de rodízio'],
        ['Chapéu', 'São Bento do Una', 'Crítica', 'Municípios do Agreste dependentes de pipa'],
      ]}
      caption="Panorama qualitativo com base em boletins públicos da Compesa e da Apac."
    />

    <H2 id="por-que-esta-acontecendo">Por que essa seca está acontecendo agora</H2>

    <P>
      A estiagem em Pernambuco não é um evento isolado. Ela se encaixa em um padrão climático
      historicamente reconhecido: o Semiárido brasileiro é a única grande região seca do mundo
      que apresenta chuvas concentradas em poucos meses, alta variabilidade interanual e
      convivência secular com secas plurianuais. Quando o padrão atmosférico "desanda" — com
      La Niña fraca, aquecimento anômalo do Atlântico Norte tropical ou enfraquecimento da Zona
      de Convergência Intertropical (ZCIT) — a chamada quadra chuvosa (fevereiro a maio)
      fracassa e os reservatórios não se recuperam.
    </P>

    <P>
      Segundo boletins climáticos do{' '}
      <ExternalLink href="https://portal.inmet.gov.br/">
        Instituto Nacional de Meteorologia (INMET)
      </ExternalLink>
      , a região Nordeste registrou, em várias sub-regiões, precipitação abaixo da média
      histórica ao longo do primeiro semestre de 2026. Somem-se a isso as temperaturas do ar
      persistentemente acima da média, que aumentam a evapotranspiração e drenam mais
      rapidamente o pouco de água que ainda existe nos açudes.
    </P>

    <P>
      Outro fator relevante é o encadeamento com fenômenos globais. O ciclo atual do{' '}
      <InternalLink to="/blog/super-el-nino-2026">Super El Niño 2026</InternalLink>{' '}
      ajuda a explicar parte do desarranjo das chuvas no Norte e Nordeste do país, com
      transporte de umidade preferencial para o Sul. O efeito combinado desses padrões
      encurta a estação chuvosa e agrava a seca hidrológica — aquela que acontece quando os
      reservatórios já não conseguem se recompor mesmo diante de chuvas eventuais.
    </P>

    <Warning title="Seca hidrológica é diferente de seca meteorológica">
      A seca meteorológica é a falta de chuvas em determinado período. A seca hidrológica
      acontece quando essa falta persiste e os reservatórios, aquíferos e rios não recuperam
      seu volume normal. É este segundo tipo que agora atinge Pernambuco em várias sub-regiões
      — e o mais difícil de reverter, mesmo com chuvas isoladas.
    </Warning>

    <H2 id="impactos">Impactos práticos: água, comida e economia</H2>

    <H3>Abastecimento urbano em rodízio</H3>
    <P>
      Nas cidades, o efeito mais visível é o rodízio: bairros passam dias sem água encanada,
      obrigando famílias a estocar em baldes, tambores e caixas suplementares. A Compesa mantém
      calendários públicos por sistema e recomenda que o consumidor não desperdice justamente
      nos dias em que a água está disponível — reservar de forma exagerada agrava o
      desequilíbrio da rede.
    </P>

    <H3>Agropecuária em risco</H3>
    <P>
      No campo, o impacto é ainda mais duro. A safra de milho e feijão em regime de sequeiro
      geralmente se perde quando a quadra chuvosa é curta. O rebanho bovino, ovino e caprino
      emagrece, obrigando muitos criadores a vender animais antes do tempo ou depender de
      programas de ração emergencial. Cadeias inteiras — leite, queijo, carne, mel — sofrem
      quebra de produção, com efeito em cascata sobre a renda das famílias rurais.
    </P>

    <H3>Energia e economia</H3>
    <P>
      Reservatórios em nível baixo comprometem também a geração hidrelétrica na bacia do São
      Francisco e afetam projetos de agricultura irrigada no Vale do São Francisco. A
      combinação eleva o preço da energia e pressiona a inflação de alimentos em todo o país,
      já que muitas frutas e hortaliças consumidas em outras regiões vêm justamente daí.
    </P>

    <PullQuote author="Boletim técnico Apac/Sudene — 2026">
      "A seca em Pernambuco não é uma novidade histórica, mas sua repetição em ciclos cada vez
      mais frequentes é. Convivência com o semiárido significa investir permanentemente em
      infraestrutura, ciência e políticas públicas de longo prazo."
    </PullQuote>

    <H2 id="convivencia">Convivência com o semiárido: o caminho consolidado</H2>

    <P>
      A ideia de "combater a seca" foi substituída, nas últimas décadas, pela lógica da
      convivência com o semiárido, encampada por movimentos sociais, universidades e órgãos
      técnicos como a{' '}
      <ExternalLink href="https://www.gov.br/agricultura/pt-br/assuntos/insumos-agropecuarios/insumos-agricolas/fertilizantes/publicacoes-fertilizantes/00-embrapa-semi-arido-caracteristicas-e-desafios.pdf">
        Embrapa Semiárido
      </ExternalLink>
      . Essa nova abordagem parte de um princípio simples: a seca é parte estrutural da região
      e precisa ser encarada como variável permanente, não como emergência esporádica.
    </P>

    <P>
      Ela se apoia em tecnologias sociais consagradas — cisternas de placas para captação de
      água da chuva, barragens subterrâneas, reúso de água cinza, sistemas agroflorestais
      adaptados à caatinga, criação de caprinos e ovinos de raças locais e barragens
      sucessivas ao longo dos rios intermitentes. Somam-se a isso políticas públicas como o
      Programa Cisternas, o Garantia-Safra e o próprio sistema de defesa civil, hoje
      responsável pela distribuição sistemática de carros-pipa.
    </P>

    <Checklist
      items={[
        'Use cisternas domiciliares e reservatórios individuais como reserva estratégica de água.',
        'Adote reúso de água cinza (banho e pia) em jardins e limpeza de quintais.',
        'Prefira plantios resistentes à seca (palma, sorgo, macaxeira, feijão de corda).',
        'Escute os boletins da Apac e do INMET antes de plantar em regime de sequeiro.',
        'Combine caprinocultura e ovinocultura em raças adaptadas à caatinga.',
        'Cadastre-se em programas federais e estaduais de convivência com o semiárido.',
      ]}
    />

    <H2 id="como-ajudar">Como o consumidor urbano pode ajudar</H2>

    <P>
      Mesmo quem mora em capitais e não sente diretamente o rodízio pode fazer a diferença.
      Reduzir o desperdício em casa, consertar vazamentos, evitar longas duchas, reutilizar
      água da máquina de lavar e apoiar organizações que atuam no semiárido — como Cáritas,
      Articulação Semiárido Brasileiro (ASA) e ONGs locais — são maneiras concretas de
      contribuir. A escolha de consumir alimentos e produtos de agricultores familiares do
      Nordeste também ajuda a fortalecer economias regionais castigadas pela estiagem.
    </P>

    <Highlight title="Fique de olho na previsão do tempo">
      Antes de programar viagens, plantios ou eventos, consulte a{' '}
      <InternalLink to="/15-dias">previsão para os próximos 15 dias</InternalLink> e o{' '}
      <InternalLink to="/agora">tempo agora</InternalLink> na sua cidade. Nosso monitor climático
      integra dados oficiais e ajuda a tomar decisões mais bem informadas.
    </Highlight>

    <H2 id="proximos-meses">O que esperar nos próximos meses</H2>

    <P>
      A segunda metade do ano, no Sertão e no Agreste pernambucanos, é tradicionalmente seca —
      o chamado "verão nordestino" vai, na prática, de junho a novembro. As chuvas mais
      significativas dependem do retorno da quadra chuvosa em fevereiro. Se ela for regular,
      há recuperação parcial dos açudes; se falhar novamente, o quadro atual tende a se
      agravar e o decreto de emergência provavelmente será prorrogado.
    </P>

    <P>
      Modelos globais de agências como NOAA, ECMWF e OMM projetam alta variabilidade nos
      próximos meses, o que exige atualização constante dos boletins locais. A Apac emite
      relatórios periódicos sobre bacias, açudes e prognóstico climático de curto prazo — o
      recomendável é acompanhar diretamente esses documentos ao lado de portais especializados
      como o nosso <InternalLink to="/blog">blog Clima Tempo</InternalLink>.
    </P>

    <H2 id="conclusao">Conclusão: emergência hoje, planejamento sempre</H2>

    <P>
      O decreto que reconhece emergência em 75 municípios de Pernambuco é, ao mesmo tempo, um
      instrumento imediato para socorrer famílias e um lembrete permanente: o semiárido
      brasileiro não convive apenas com secas, ele é feito delas. Ignorar essa característica
      é insistir em soluções de curto prazo que não sobrevivem à próxima estiagem.
    </P>

    <P>
      Continuar investindo em ciência do clima, previsão de tempo confiável, obras de
      infraestrutura hídrica (adutoras, integração de bacias, dessalinização) e tecnologias
      sociais é o caminho apontado pelos especialistas. É também a única forma sustentável de
      transformar a inevitabilidade da seca em algo administrável para quem vive, planta e
      cria animais nessa parte tão simbólica do Brasil.
    </P>

    <H2 id="faq">Perguntas frequentes sobre a seca em Pernambuco</H2>

    <FAQ
      items={[
        {
          q: 'Quantos municípios de Pernambuco estão em situação de emergência por seca em 2026?',
          a: 'O decreto estadual publicado no fim de junho de 2026 reconhece 75 municípios afetados pela estiagem, com validade de 180 dias e possibilidade de prorrogação.',
        },
        {
          q: 'A Região Metropolitana do Recife também está sob rodízio?',
          a: 'A RMR sofre menos que o interior graças à combinação de reservatórios e adutoras integradas. Ainda assim, a Compesa mantém programas de redução de perdas e pede consumo consciente.',
        },
        {
          q: 'O que faz o governo do estado durante o decreto de emergência?',
          a: 'O decreto permite contratação emergencial de carros-pipa, dispensa de licitação em compras urgentes, acesso a recursos do Fundo Estadual de Defesa Civil e articulação com o governo federal via S2iD.',
        },
        {
          q: 'Por que essa seca é considerada tão grave?',
          a: 'Trata-se de seca hidrológica: além da falta de chuvas, os reservatórios não conseguem se recompor, comprometendo abastecimento humano, agricultura e economia rural.',
        },
        {
          q: 'Como o cidadão comum pode ajudar?',
          a: 'Economizando água em casa, evitando desperdícios, apoiando programas de convivência com o semiárido e consumindo produtos da agricultura familiar do Nordeste.',
        },
        {
          q: 'Onde acompanhar a evolução da crise hídrica em Pernambuco?',
          a: (
            <>
              O ideal é acompanhar os boletins da Apac e da Compesa e complementar com portais
              climáticos independentes, como o{' '}
              <InternalLink to="/blog">blog do Clima Tempo</InternalLink> e as páginas de{' '}
              <InternalLink to="/agora">tempo agora</InternalLink> e{' '}
              <InternalLink to="/15-dias">previsão de 15 dias</InternalLink>.
            </>
          ),
        },
      ]}
    />
  </>
);

export const TornadosBrasilArticle: React.FC<{ midImage: string }> = ({ midImage }) => (
  <>
    <Lead>
      A ideia de que tornados são um fenômeno "americano" está errada. O Sul do Brasil abriga o
      segundo maior corredor de tornados do planeta, atrás apenas do famoso Tornado Alley dos
      Estados Unidos. Casos recentes no Paraná — como o que devastou Rio Bonito do Iguaçu e
      atingiu Guarapuava e Turvo — reacenderam a discussão sobre por que esse pedaço do país
      é tão vulnerável a ventos extremos.
    </Lead>

    <P>
      Segundo especialistas em climatologia ouvidos por veículos brasileiros e por institutos de
      pesquisa, o Sul do Brasil combina, em uma área relativamente pequena, todos os ingredientes
      físicos necessários para a formação de tornados. Massas de ar quente e úmido vindas do
      Norte encontram frentes frias polares em avanço rápido pelo continente, sob relevo plano ou
      suavemente ondulado, criando o cenário perfeito para tempestades severas e ciclones
      violentos de curta escala.
    </P>

    <P>
      Neste artigo, o Clima Tempo mergulha na climatologia do Sul brasileiro, explica o que é
      um tornado de verdade, como se mede sua força, por que o Paraná é a região mais afetada
      do país, o que fazer antes, durante e depois de um evento desses e como interpretar os
      alertas emitidos pelo Inmet e por defesas civis estaduais.
    </P>

    <H2 id="segundo-maior-corredor">O "segundo Tornado Alley" fica no Brasil</H2>

    <P>
      A expressão "corredor de tornados" descreve regiões do planeta onde a atmosfera favorece,
      de forma recorrente, a formação de tempestades severas com potencial tornádico. O mais
      conhecido é o Tornado Alley, corredor central dos Estados Unidos que corta estados como
      Texas, Oklahoma, Kansas e Nebraska. Em segundo lugar, na maior parte dos estudos
      internacionais, aparece o corredor do Cone Sul da América do Sul — que inclui o Paraná,
      o oeste de Santa Catarina, o Rio Grande do Sul, o norte da Argentina, o Uruguai e o
      leste do Paraguai.
    </P>

    <P>
      Pesquisadores brasileiros e argentinos, ao longo das últimas duas décadas, ajudaram a
      confirmar essa condição por meio de imagens de radar, satélite, relatos históricos e
      reconstruções via modelagem numérica. Estudos publicados por instituições como o{' '}
      <ExternalLink href="https://portal.inmet.gov.br/">
        Instituto Nacional de Meteorologia (INMET)
      </ExternalLink>{' '}
      e universidades como a UFPR, a USP e a UFSM apontam que o Sul do Brasil é palco de dezenas
      de eventos tornádicos por ano, muitos deles subnotificados por atingirem áreas rurais de
      baixa densidade populacional.
    </P>

    <InfoBox title="Por que o Sul do Brasil favorece tornados">
      Três ingredientes se combinam: (1) ar quente e úmido vindo da Amazônia por meio do Jato de
      Baixos Níveis; (2) ar frio e seco vindo do sul do continente, muitas vezes trazido por
      frentes polares vigorosas; (3) relevo relativamente plano, com altitudes baixas a médias,
      que não bloqueia a formação de células convectivas profundas. Essa mistura recria, em
      escala menor, o que acontece nas Grandes Planícies dos EUA.
    </InfoBox>

    <H2 id="o-que-e-tornado">O que é um tornado, do ponto de vista técnico</H2>

    <P>
      Um tornado é uma coluna de ar em rotação violenta que se estende de uma nuvem cumulonimbus
      até o solo. Nem toda tempestade gera tornado — a maioria produz apenas chuva forte, vento
      e raios. Para que um tornado se forme, é preciso uma supercélula: uma tempestade organizada,
      com forte cisalhamento do vento em altura, capaz de manter um mesociclone (rotação em
      escala de alguns quilômetros) por dezenas de minutos.
    </P>

    <P>
      Quando esse mesociclone se estreita e "toca o chão", forma-se o funil clássico dos tornados,
      capaz de atingir velocidades de vento superiores a 300 km/h nos casos mais extremos.
      Diferente de um ciclone extratropical (grande, com centenas de quilômetros de diâmetro), o
      tornado é pequeno em área — mas destrói tudo o que encontra no caminho.
    </P>

    <img
      src={midImage}
      alt="Cidade do interior devastada após passagem de tornado, com telhados destruídos e equipes de resgate"
      width={1536}
      height={864}
      loading="lazy"
      className="w-full rounded-2xl shadow-xl my-10"
    />

    <H2 id="escala-fujita">Escala Fujita Aprimorada: como se mede a força de um tornado</H2>

    <P>
      A escala mais utilizada no mundo hoje é a Escala Fujita Aprimorada (EF), adotada pelo
      Serviço Nacional de Meteorologia dos EUA. Ela vai de EF0 a EF5 e é calibrada a partir dos
      danos observados em edificações, vegetação e infraestrutura. O Brasil, embora não use a
      escala de maneira oficial e sistemática, adota o mesmo padrão em estudos técnicos, o que
      permite comparação internacional dos eventos brasileiros.
    </P>

    <DataTable
      headers={['Categoria', 'Ventos estimados (km/h)', 'Danos característicos']}
      rows={[
        ['EF0', '105 – 137', 'Danos leves: telhas, galhos, sinalizações'],
        ['EF1', '138 – 177', 'Danos moderados: janelas, coberturas, veículos deslocados'],
        ['EF2', '178 – 217', 'Danos consideráveis: casas de alvenaria danificadas, árvores derrubadas'],
        ['EF3', '218 – 266', 'Danos severos: paredes derrubadas, trens descarrilhados'],
        ['EF4', '267 – 322', 'Danos devastadores: casas bem construídas destruídas'],
        ['EF5', '> 322', 'Danos catastróficos: estruturas removidas de fundações'],
      ]}
      caption="Adaptado da Enhanced Fujita Scale, referência internacional de danos tornádicos."
    />

    <H2 id="casos-parana">Casos recentes no Paraná: Rio Bonito do Iguaçu, Guarapuava e Turvo</H2>

    <P>
      O Paraná concentra parte significativa dos tornados brasileiros documentados por radar,
      satélite e imagens de câmeras cidadãs. Nos episódios mais recentes, cidades como Rio
      Bonito do Iguaçu, Guarapuava e Turvo foram atingidas em sequência por um sistema
      convectivo severo que produziu múltiplos tornados no mesmo dia — uma configuração conhecida
      como "surto tornádico".
    </P>

    <P>
      Os relatos incluem casas destelhadas, galpões agrícolas destruídos, torres de energia
      caídas, veículos arremessados e vítimas fatais. Imagens aéreas divulgadas pelas defesas
      civis mostram um padrão típico de dano linear e concentrado, característico de tornados —
      diferente da dispersão mais ampla de uma tempestade convectiva comum. A partir dessas
      evidências, meteorologistas confirmaram tratar-se de eventos tornádicos, provavelmente
      entre EF2 e EF3, o que já é considerado muito destrutivo em áreas urbanas.
    </P>

    <Warning title="Alerta é diferente de aviso — e ambos são importantes">
      No Brasil, o INMET emite "aviso meteorológico" (amarelo, laranja e vermelho) sobre
      condições favoráveis a tempestades severas. Já as defesas civis municipais e estaduais
      publicam "alertas" mais localizados. Sempre priorize as informações oficiais — não
      dependa apenas de redes sociais em situações extremas.
    </Warning>

    <H2 id="por-que-parana">Por que o Paraná é tão vulnerável</H2>

    <P>
      A resposta está em três palavras: geografia, dinâmica atmosférica e ocupação humana. O
      Paraná combina relevo plano no oeste, altitudes moderadas no centro e transição para a
      Serra do Mar no leste. Isso cria zonas de contraste térmico e disparo de convecção
      intensa. Além disso, o estado está no caminho preferencial das frentes frias que sobem do
      sul e das massas quentes que descem do Centro-Oeste, especialmente na primavera e no
      início do verão.
    </P>

    <P>
      A crescente ocupação urbana e agrícola de áreas historicamente rurais também aumenta a
      exposição da população. Muitas construções em cidades pequenas foram erguidas sem
      considerar cargas de vento extremas, comuns em tornados EF2 ou superiores. É por isso que
      especialistas pedem revisão das normas de construção civil no Sul do país, especialmente
      em municípios com histórico de tempestades severas.
    </P>

    <PullQuote author="Climatologia contemporânea — Sul do Brasil">
      "Chamar o Sul do Brasil de segundo maior corredor de tornados do mundo não é exagero
      jornalístico. É o que a climatologia comparada mostra há duas décadas — só faltava a
      opinião pública se apropriar dessa realidade."
    </PullQuote>

    <H2 id="mudancas-climaticas">Mudanças climáticas mudam a frequência de tornados?</H2>

    <P>
      A pergunta é frequente e a resposta, honesta: ainda não há consenso científico total.
      Alguns estudos indicam que o aquecimento global tende a aumentar a energia disponível
      para tempestades severas no Sul da América do Sul — o que, em tese, favoreceria eventos
      mais intensos, embora não necessariamente mais numerosos. Pesquisas ligadas ao{' '}
      <ExternalLink href="https://www.wmo.int/">
        World Meteorological Organization (WMO)
      </ExternalLink>{' '}
      apontam que fenômenos extremos vêm se tornando mais frequentes em várias regiões do
      globo, embora tornados sejam eventos de escala tão pequena que dificultam estatísticas
      robustas de longo prazo.
    </P>

    <P>
      No caso brasileiro, há relativo consenso de que a subnotificação histórica de tornados
      compromete comparações. Muitos episódios de décadas passadas foram registrados como
      "ventania" ou "ciclone", quando eram tornados de fato. Com o avanço de radares
      meteorológicos de dupla polarização, satélites geoestacionários e câmeras de cidadãos, a
      detecção melhorou — o que ajuda a explicar parte do "aumento" percebido nos últimos anos.
    </P>

    <H2 id="como-se-proteger">Como se proteger de um tornado no Sul do Brasil</H2>

    <Checklist
      items={[
        'Conheça os cômodos internos da sua casa sem janelas — banheiros e corredores costumam ser mais seguros.',
        'Guarde documentos, remédios e uma lanterna em uma mochila de emergência de fácil acesso.',
        'Não busque abrigo embaixo de viadutos: o vento acelera nesses pontos e o risco é ainda maior.',
        'Se estiver ao ar livre e não houver estrutura sólida próxima, deite-se em vala ou depressão do terreno.',
        'Nunca tente filmar o tornado — a distância de segurança é sempre maior do que parece.',
        'Instale aplicativos oficiais de defesa civil e ative as notificações de tempestade severa.',
        'Após o evento, evite postes caídos, fios elétricos expostos e escombros instáveis.',
      ]}
    />

    <H2 id="como-monitorar">Como monitorar tempestades severas em tempo real</H2>

    <P>
      No Clima Tempo, o{' '}
      <InternalLink to="/">Monitor Geológico e Climático Global</InternalLink> integra dados
      meteorológicos de fontes oficiais em um mapa interativo. Combine essa ferramenta com a{' '}
      <InternalLink to="/agora">página de tempo agora</InternalLink> e a{' '}
      <InternalLink to="/15-dias">previsão de 15 dias</InternalLink> para acompanhar a evolução
      de sistemas convectivos, avisos meteorológicos e frentes frias sobre o Sul do país.
    </P>

    <P>
      Vale também acompanhar diretamente o Inmet, o SIMEPAR (Paraná), o Ciram-Epagri (Santa
      Catarina) e a Sala de Situação da Defesa Civil do seu estado. Em situações de risco
      elevado, esses canais publicam alertas específicos, com mapas e recomendações práticas.
    </P>

    <Highlight title="Educação climática salva vidas">
      Ensinar crianças e adolescentes a reconhecer céus ameaçadores, saber a diferença entre
      raios, granizo e vento severo, e ter um plano familiar de emergência é tão importante
      quanto qualquer investimento em infraestrutura. Cultura de prevenção reduz mortes e
      prejuízos de forma comprovada.
    </Highlight>

    <H2 id="conclusao">Conclusão: aceitar a realidade climática do Sul</H2>

    <P>
      Reconhecer que o Sul do Brasil é o segundo maior corredor de tornados do mundo não deve
      gerar pânico — deve gerar preparação. Estados Unidos, Bangladesh, Argentina e outras
      regiões vulneráveis convivem com esses eventos por meio de sistemas de alerta robustos,
      normas construtivas ajustadas, campanhas educativas frequentes e resposta rápida das
      defesas civis. O Brasil pode e precisa avançar na mesma direção.
    </P>

    <P>
      Enquanto isso, o papel do jornalismo climático sério — como o que buscamos praticar aqui
      no <InternalLink to="/blog">blog Clima Tempo</InternalLink> — é traduzir a ciência sem
      sensacionalismo, informar com transparência sobre riscos e fortalecer a cultura de
      prevenção. Assim, a próxima tempestade severa que atravessar o Paraná encontrará
      cidadãos, cidades e governos mais preparados.
    </P>

    <H2 id="faq">Perguntas frequentes sobre tornados no Brasil</H2>

    <FAQ
      items={[
        {
          q: 'É verdade que o Brasil tem o segundo maior corredor de tornados do mundo?',
          a: 'Sim. Estudos climatológicos internacionais reconhecem o Cone Sul da América do Sul — incluindo o Sul do Brasil, o norte da Argentina, o Uruguai e o leste do Paraguai — como o segundo corredor tornádico mais ativo do planeta, atrás apenas do Tornado Alley nos EUA.',
        },
        {
          q: 'Qual estado brasileiro registra mais tornados?',
          a: 'O Paraná lidera as ocorrências documentadas, seguido por Rio Grande do Sul, Santa Catarina e regiões do interior de São Paulo. A combinação de relevo, umidade e frentes frias explica esse padrão.',
        },
        {
          q: 'Tornado e ciclone são a mesma coisa?',
          a: 'Não. Ciclones (tropicais ou extratropicais) são sistemas de baixa pressão de grande escala, com centenas de quilômetros. Tornados são colunas rotativas curtas, com poucas centenas de metros a alguns quilômetros de diâmetro, mas com ventos muito mais intensos.',
        },
        {
          q: 'O que fazer se eu ver um tornado se aproximando?',
          a: 'Procure imediatamente um cômodo interno, sem janelas, no andar mais baixo possível. Cubra-se com colchões ou cobertores para proteger contra estilhaços. Se estiver ao ar livre, deite-se em vala ou depressão do terreno e proteja a cabeça com os braços.',
        },
        {
          q: 'Existe previsão específica para tornados no Brasil?',
          a: 'Ainda não como nos EUA. O que os órgãos oficiais fazem é emitir avisos de tempestade severa quando as condições atmosféricas são favoráveis. O ideal é acompanhar simultaneamente Inmet, defesas civis estaduais e portais especializados.',
        },
        {
          q: 'As mudanças climáticas estão aumentando os tornados no Brasil?',
          a: 'Há indícios de que os eventos extremos vêm se tornando mais intensos, mas ainda não existe consenso científico total sobre aumento de frequência. A subnotificação histórica também influencia essa percepção.',
        },
      ]}
    />
  </>
);
