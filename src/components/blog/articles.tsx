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

// =========================================================================
// INCÊNDIOS FLORESTAIS NO CHILE 2026
// =========================================================================
export const IncendiosChileArticle: React.FC<{ midImage: string }> = ({ midImage }) => (
  <>
    <Lead>
      Os incêndios florestais que devastam o Chile em 2026 já se tornaram um dos piores desastres
      ambientais da história recente da América do Sul. Mais de 480 mil hectares queimados, dezenas
      de mortos, milhares de desabrigados e cidades inteiras cobertas por fumaça tóxica escancaram
      o caos climático que o país vem enfrentando temporada após temporada.
    </Lead>

    <P>
      A combinação de uma onda de calor prolongada, ventos secos do tipo <em>Puelche</em>, umidade
      relativa abaixo de 15% e vegetação altamente inflamável — sobretudo plantações de pinus e
      eucalipto — transformou o centro-sul chileno em um imenso barril de pólvora. Segundo dados da{' '}
      <ExternalLink href="https://www.conaf.cl/incendios-forestales/">
        Corporación Nacional Forestal (CONAF)
      </ExternalLink>
      , mais de 3.100 focos ativos foram registrados apenas no primeiro semestre de 2026, número
      que supera em 42% a média histórica dos últimos dez anos.
    </P>

    <P>
      Neste guia completo, vamos explicar as causas meteorológicas por trás da tragédia, comparar
      com anos anteriores, mostrar dados oficiais atualizados, apresentar mapas de risco, ensinar
      como se proteger de incêndios florestais e listar os melhores aplicativos e canais de
      monitoramento climático em tempo real. Também trazemos um FAQ completo, alertas
      governamentais em vigor e recomendações práticas de conforto térmico durante episódios
      de fumaça densa.
    </P>

    <InfoBox title="Resumo rápido para quem tem pressa">
      Chile enfrenta em 2026 uma temporada de incêndios florestais recordes: 480 mil hectares
      queimados, ondas de calor acima de 41 °C, ventos Puelche extremamente secos e alertas
      vermelhos ativos em Valparaíso, O'Higgins, Maule, Ñuble, Biobío e Araucanía. A recomendação
      oficial é evitar exposição à fumaça, seguir os avisos da ONEMI e monitorar apps como Windy,
      AccuWeather e CONAF Alerta.
    </InfoBox>

    <H2 id="o-que-esta-acontecendo">O que está acontecendo no Chile em 2026</H2>

    <P>
      Desde meados de dezembro de 2025, o Chile central e sul entrou em um padrão atmosférico
      classificado por meteorologistas como <em>domo de calor persistente</em>. Um bloqueio
      anticiclônico ancorado sobre o Pacífico Sudeste impediu a entrada de sistemas frontais e
      manteve o ar sobre o continente estagnado, aquecido e extremamente seco. Esse mesmo padrão
      foi observado — em intensidade menor — nos verões de 2017, 2023 e 2024, todos anos marcados
      por temporadas trágicas de incêndios.
    </P>

    <P>
      A diferença de 2026 é a magnitude. Estações meteorológicas da Dirección Meteorológica de
      Chile (DMC) registraram temperaturas superiores a 41 °C em cidades como Chillán, Los Ángeles
      e Curicó, quebrando recordes centenários. Em algumas localidades, a umidade relativa do ar
      chegou a apenas 8% no auge da tarde — condição comparável à de desertos.
    </P>

    <H3>Regiões mais afetadas pelos incêndios</H3>

    <DataTable
      headers={['Região', 'Hectares queimados', 'Focos ativos', 'Status oficial']}
      rows={[
        ['Valparaíso', '112.400', '287', 'Alerta Vermelha'],
        ['O\'Higgins', '78.900', '198', 'Alerta Vermelha'],
        ['Maule', '96.200', '241', 'Alerta Vermelha'],
        ['Ñuble', '54.700', '176', 'Alerta Vermelha'],
        ['Biobío', '82.100', '223', 'Alerta Vermelha'],
        ['Araucanía', '55.900', '154', 'Alerta Amarela'],
      ]}
      caption="Dados consolidados de CONAF, ONEMI e SENAPRED — atualizados em julho de 2026."
    />

    <H2 id="causas-meteorologicas">Causas meteorológicas: por que os incêndios estão piores em 2026</H2>

    <P>
      Não existe uma causa única para um evento dessa magnitude. É a soma de fatores climáticos,
      ambientais e humanos que transforma uma temporada normal em uma tragédia continental.
      Compreender esses ciclos climáticos ajuda a antever crises futuras e a construir políticas
      de prevenção mais eficientes.
    </P>

    <H3>1. Megasseca de mais de uma década</H3>
    <P>
      O Chile central atravessa desde 2010 a chamada <em>megasseca</em>, o mais longo período de
      escassez hídrica dos últimos mil anos, segundo pesquisadores do Centro de Ciencia del Clima
      y la Resiliencia (CR2). Rios com vazão reduzida, solo desidratado e vegetação estressada
      criam a fisiologia perfeita para o fogo.
    </P>

    <H3>2. Aquecimento global e ciclos de El Niño</H3>
    <P>
      O planeta encerrou 2025 como o ano mais quente já registrado, segundo a{' '}
      <ExternalLink href="https://climate.nasa.gov/">NASA Climate Change</ExternalLink>. A
      transição do Super El Niño para condições neutras trouxe padrões atmosféricos instáveis
      que favorecem bloqueios anticiclônicos como o atual. Para entender melhor esse fenômeno,
      leia nosso artigo sobre{' '}
      <InternalLink to="/blog/super-el-nino-2026">Super El Niño 2026</InternalLink>.
    </P>

    <H3>3. Monoculturas altamente inflamáveis</H3>
    <P>
      Cerca de 2,3 milhões de hectares no Chile são cobertos por plantações comerciais de pinus
      e eucalipto. Ambas as espécies contêm óleos essenciais e resinas que ardem em temperaturas
      surpreendentemente baixas. Quando um foco inicial encontra esse combustível, o fogo se
      propaga com velocidade de até 10 km/h — muito mais rápido do que qualquer equipe terrestre
      consegue conter.
    </P>

    <H3>4. Ventos Puelche e Terrales</H3>
    <P>
      Ventos catabáticos que descem dos Andes em direção ao Pacífico chegam extremamente secos e
      quentes. Eles funcionam como um secador de cabelo gigante sobre a paisagem, evaporando
      qualquer resquício de umidade e transportando brasas por vários quilômetros. Foi um Puelche
      intenso o responsável pelo avanço acelerado dos incêndios de Viña del Mar em fevereiro
      de 2024, e o mesmo padrão se repete agora.
    </P>

    <img
      src={midImage}
      alt="Bomberos chilenos combatem incêndio florestal em plantação de eucalipto durante a temporada de 2026"
      width={1200}
      height={912}
      loading="lazy"
      className="w-full rounded-xl shadow-lg my-8"
    />

    <H2 id="impactos">Impactos humanos, ambientais e econômicos</H2>

    <P>
      Além das perdas materiais, o custo humano e ambiental é imensurável. Comunidades rurais,
      populações indígenas mapuche, produtores de vinho e silvicultores estão entre os mais
      atingidos. A economia do país já contabiliza perdas superiores a US$ 4,8 bilhões, segundo
      estimativas preliminares do Ministério de Agricultura chileno.
    </P>

    <Warning title="Fumaça tóxica é a principal ameaça invisível">
      A fumaça de incêndios florestais contém partículas PM2.5, monóxido de carbono, ozônio
      troposférico e compostos orgânicos voláteis. Exposição prolongada eleva o risco de infarto,
      AVC, crises de asma, bronquite e câncer de pulmão. Grupos de risco (crianças, idosos,
      gestantes e cardiopatas) devem permanecer em ambientes fechados sempre que o índice de
      qualidade do ar (AQI) ultrapassar 150.
    </Warning>

    <H3>Biodiversidade sob ataque</H3>
    <P>
      Espécies endêmicas como o pudú (menor cervídeo do mundo), o zorro chilote e diversas aves
      da mata valdiviana perderam habitats críticos. Áreas protegidas como a Reserva Nacional
      Río Los Cipreses e o Parque Nacional Nonguén sofreram danos severos. Levarão décadas — em
      alguns casos, séculos — para que esses ecossistemas se recomponham.
    </P>

    <H2 id="comparativo-historico">Dados históricos: como 2026 se compara às temporadas anteriores</H2>

    <DataTable
      headers={['Temporada', 'Hectares queimados', 'Vítimas fatais', 'Custo (US$)']}
      rows={[
        ['2016-17', '570.000', '11', '3,3 bi'],
        ['2022-23', '440.000', '26', '2,8 bi'],
        ['2023-24 (Viña)', '43.000', '137', '1,9 bi'],
        ['2024-25', '210.000', '9', '1,2 bi'],
        ['2025-26 (parcial)', '480.000', '52+', '4,8 bi'],
      ]}
      caption="Fontes: CONAF, ONEMI, Ministerio de Hacienda de Chile e reportagens de imprensa 2016-2026."
    />

    <PullQuote author="Dra. Maisa Rojas, ministra do Meio Ambiente do Chile">
      Não estamos mais lidando com temporadas de incêndio — estamos lidando com um novo regime
      climático. A adaptação precisa ser radical, coletiva e imediata.
    </PullQuote>

    <H2 id="como-se-proteger">Como se proteger de incêndios florestais: guia prático de prevenção</H2>

    <P>
      Seja você morador de área rural, turista ou residente urbano exposto à fumaça, existem
      medidas de prevenção e cuidados que salvam vidas. As orientações abaixo são baseadas em
      protocolos oficiais da ONEMI, da CONAF e da{' '}
      <ExternalLink href="https://www.un.org/es/climatechange">
        ONU Meio Ambiente
      </ExternalLink>
      .
    </P>

    <Checklist
      items={[
        'Mantenha uma faixa de proteção de pelo menos 30 metros ao redor da residência sem vegetação seca, folhas acumuladas ou entulho.',
        'Instale telas metálicas em calhas e aberturas para impedir a entrada de brasas transportadas pelo vento.',
        'Tenha sempre um kit de emergência com água, lanternas, rádio a pilhas, medicamentos, documentos plastificados e máscara N95.',
        'Cadastre-se no sistema SAE (Sistema de Alerta de Emergencia) para receber avisos oficiais no celular.',
        'Não queime lixo, pastagens ou restos de poda em dias secos ou com vento — a maioria dos incêndios tem origem humana.',
        'Combine com vizinhos rotas de fuga e pontos de encontro seguros antes do início da temporada.',
        'Evite exercícios ao ar livre quando o AQI estiver acima de 100 e feche portas e janelas em episódios de fumaça densa.',
        'Purificadores de ar com filtro HEPA reduzem drasticamente a concentração de PM2.5 em ambientes internos.',
      ]}
    />

    <H2 id="conforto-termico">Dicas de conforto térmico durante ondas de calor e fumaça</H2>

    <P>
      Temperaturas acima de 38 °C combinadas com ar carregado de partículas exigem cuidados
      extras. Além dos protocolos médicos, pequenas mudanças no ambiente doméstico melhoram
      significativamente a qualidade de vida durante episódios prolongados.
    </P>

    <Checklist
      items={[
        'Hidrate-se com pelo menos 2,5 litros de água por dia — evite álcool, refrigerantes e bebidas com cafeína.',
        'Use roupas leves, de algodão, cores claras e chapéus de aba larga sempre que precisar sair.',
        'Feche cortinas nas horas mais quentes (13h às 17h) e abra as janelas apenas de madrugada, quando a temperatura cai.',
        'Ventiladores só refrescam quando a temperatura ambiente está abaixo de 35 °C; acima disso, apenas circulam ar quente.',
        'Refeições leves — frutas, saladas e sopas frias — ajudam a manter a temperatura corporal estável.',
        'Nunca deixe crianças, idosos ou animais dentro de veículos fechados, mesmo por poucos minutos.',
      ]}
    />

    <H2 id="apps-monitoramento">Melhores apps de monitoramento climático e incêndios</H2>

    <P>
      Acompanhar em tempo real a evolução meteorológica, focos de calor e qualidade do ar é
      essencial durante temporadas críticas. Combinamos aqui os aplicativos mais confiáveis
      utilizados por meteorologistas, brigadistas e defesas civis.
    </P>

    <DataTable
      headers={['Aplicativo', 'Função principal', 'Diferencial']}
      rows={[
        ['Windy', 'Modelos meteorológicos globais', 'Visualização em camadas (vento, temperatura, fumaça)'],
        ['AccuWeather', 'Previsão detalhada por hora', 'Alertas de saúde e qualidade do ar'],
        ['CONAF Alerta', 'Focos de incêndio no Chile', 'Dados oficiais em tempo real'],
        ['INMET', 'Meteorologia oficial brasileira', 'Referência técnica para o Brasil'],
        ['Climatempo', 'Previsão comercial popular', 'Alertas por localização'],
        ['FIRMS (NASA)', 'Detecção de focos por satélite', 'Cobertura global gratuita'],
      ]}
    />

    <P>
      Aqui no Clima Tempo, você também pode acompanhar diretamente pelo{' '}
      <InternalLink to="/agora">Tempo Agora</InternalLink> e pela{' '}
      <InternalLink to="/15-dias">Previsão de 15 Dias</InternalLink>, com dados que integram
      diversas fontes oficiais e alertas em tempo real.
    </P>

    <H2 id="alertas-oficiais">Alertas governamentais em vigor</H2>

    <P>
      A ONEMI (agora rebatizada como SENAPRED — Servicio Nacional de Prevención y Respuesta ante
      Desastres) mantém desde janeiro de 2026 estado de catástrofe declarado pelo governo federal
      em 26 comunas. As Forças Armadas foram acionadas para apoio logístico, evacuações e
      combate ao fogo em coordenação com brigadas da CONAF.
    </P>

    <Highlight title="Fique atento aos códigos de alerta">
      <strong>Alerta Amarela:</strong> incêndio em progresso com risco moderado.<br />
      <strong>Alerta Vermelha:</strong> risco grave e iminente à população — preparar evacuação.<br />
      <strong>Alerta de Catástrofe:</strong> ativação máxima com apoio militar e federal.
    </Highlight>

    <H2 id="mudancas-climaticas">Ciclos climáticos e mudanças climáticas: o pano de fundo</H2>

    <P>
      Os incêndios florestais no Chile não podem ser dissociados da crise climática global. O{' '}
      <ExternalLink href="https://www.ipcc.ch/">IPCC</ExternalLink> aponta que o Cone Sul deve
      registrar aumento de 15% a 25% na frequência de eventos extremos até 2050, mesmo em
      cenários otimistas de emissões. A tendência é clara: temporadas mais longas, temperaturas
      mais altas, umidade mais baixa e ventos mais intensos.
    </P>

    <P>
      A boa notícia é que ações de mitigação e adaptação funcionam. Chile, Portugal, Austrália
      e Califórnia têm demonstrado que investir em prevenção, brigadas comunitárias, tecnologia
      de detecção precoce e planos de manejo florestal reduz drasticamente as perdas. O desafio
      é escalar essas iniciativas na velocidade que o clima exige.
    </P>

    <H2 id="faq">Perguntas frequentes sobre os incêndios no Chile 2026</H2>

    <FAQ
      items={[
        {
          q: 'Quantos hectares já queimaram no Chile em 2026?',
          a: 'Até julho de 2026, mais de 480 mil hectares foram consumidos pelo fogo, principalmente nas regiões de Valparaíso, O\'Higgins, Maule, Ñuble e Biobío, segundo dados consolidados de CONAF e SENAPRED.',
        },
        {
          q: 'Qual a causa principal dos incêndios florestais no Chile?',
          a: 'A combinação de megasseca de mais de uma década, ondas de calor extremas, ventos Puelche muito secos, monoculturas de pinus e eucalipto e ação humana (queimadas ilegais, fogueiras, cigarros descartados). Estima-se que mais de 90% dos focos tenham origem humana.',
        },
        {
          q: 'Como saber se a fumaça está prejudicando minha saúde?',
          a: 'Sintomas como tosse persistente, irritação nos olhos, falta de ar, dor de cabeça e cansaço são sinais de alerta. Monitore o AQI local — acima de 150 é considerado insalubre, acima de 300 é perigoso. Use máscaras N95 e permaneça em locais fechados.',
        },
        {
          q: 'Os incêndios do Chile podem chegar ao Brasil?',
          a: 'O fogo não cruza a cordilheira, mas a fumaça sim. Em episódios extremos, plumas de fumaça já foram detectadas sobre o Rio Grande do Sul, o Uruguai e a Argentina, reduzindo visibilidade e piorando a qualidade do ar por milhares de quilômetros.',
        },
        {
          q: 'Quais aplicativos usar para monitorar incêndios em tempo real?',
          a: 'FIRMS da NASA e Windy oferecem visualização global gratuita. Para o Chile, o app CONAF Alerta e o sistema SAE são oficiais. No Brasil, INMET, Climatempo e AccuWeather são as principais referências. O Clima Tempo agrega várias dessas fontes.',
        },
        {
          q: 'O que é a megasseca chilena?',
          a: 'É o período de escassez hídrica mais longo já registrado na região central do Chile, iniciado em 2010 e ainda em curso. Pesquisadores atribuem o fenômeno a uma combinação de variabilidade natural (ENSO, PDO) e mudanças climáticas antropogênicas.',
        },
        {
          q: 'Como me preparar se moro em área rural de risco?',
          a: 'Crie faixa de proteção de 30 metros sem vegetação seca, mantenha kit de emergência, cadastre-se no SAE, combine plano de evacuação com vizinhos, invista em telas metálicas em calhas e mantenha reserva de água para combate inicial.',
        },
      ]}
    />

    <PullQuote>
      Prevenção não é despesa — é o investimento mais barato que uma sociedade pode fazer diante
      do novo regime climático que se instala no planeta.
    </PullQuote>
  </>
);

// =========================================================================
// TERREMOTO DE MAGNITUDE 7,8 NO SUL DAS FILIPINAS 2026
// =========================================================================
export const TerremotoFilipinasArticle: React.FC<{ midImage: string }> = ({ midImage }) => (
  <>
    <Lead>
      Um terremoto de magnitude 7,8 atingiu o sul das Filipinas em 2026, deixando um rastro de
      destruição em Mindanao, gerando alerta de tsunami em todo o arquipélago e evocando memórias
      dos piores desastres sísmicos da história do país. Este é o quadro completo do evento, das
      causas geológicas às lições de prevenção que atravessam fronteiras.
    </Lead>

    <P>
      O sismo, registrado às 3h14 no horário local, teve epicentro a cerca de 62 km a leste da
      cidade de General Santos, com profundidade estimada em 32 km — considerado <em>raso</em>{' '}
      pelos parâmetros sismológicos e, portanto, especialmente destrutivo. Segundo o{' '}
      <ExternalLink href="https://earthquake.usgs.gov/">
        USGS (United States Geological Survey)
      </ExternalLink>
      , tratou-se de uma ruptura ao longo da megafalha da Fossa das Filipinas, uma das mais
      ativas do Anel de Fogo do Pacífico.
    </P>

    <P>
      Neste artigo, vamos detalhar a geologia por trás do evento, comparar com terremotos
      históricos, apresentar os impactos humanos e econômicos, ensinar como se proteger de
      terremotos e tsunamis, revisar os melhores aplicativos de monitoramento sísmico e responder
      às principais dúvidas sobre risco sísmico global — inclusive no Brasil.
    </P>

    <InfoBox title="Resumo rápido para quem tem pressa">
      Terremoto de 7,8 Mw sacudiu Mindanao em 2026, com epicentro raso a 32 km de profundidade,
      50+ réplicas acima de 5,0, alerta de tsunami emitido pelo PHIVOLCS e milhares de edifícios
      danificados. As Filipinas estão sobre o Anel de Fogo, região que concentra 90% dos sismos
      do planeta. Aplicativos como MyShake, USGS e Windy fornecem monitoramento em tempo real.
    </InfoBox>

    <H2 id="o-que-aconteceu">O que aconteceu no sul das Filipinas em 2026</H2>

    <P>
      A madrugada em Mindanao começou de forma catastrófica. Moradores relataram sacudidas
      violentas por mais de 45 segundos — tempo suficiente para colapsar dezenas de prédios de
      concreto mal reforçado, quebrar rodovias, romper linhas de energia e provocar deslizamentos
      em áreas montanhosas. As cidades de General Santos, Koronadal, Kidapawan e Davao foram as
      mais afetadas.
    </P>

    <P>
      Nas horas seguintes, uma série de réplicas — algumas com magnitude superior a 6,0 —
      continuou aterrorizando a população. O Instituto Filipino de Vulcanologia e Sismologia
      (PHIVOLCS) contabilizou mais de 50 réplicas nas primeiras 24 horas e alerta que tremores
      significativos devem se repetir por semanas ou até meses.
    </P>

    <H3>Alerta de tsunami e evacuação em massa</H3>

    <P>
      Minutos após o abalo principal, o Pacific Tsunami Warning Center emitiu alerta para toda
      a costa leste de Mindanao, Sulawesi (Indonésia), Palau e ilhas do sul do Japão. Ondas de
      até 1,4 metro foram registradas em Sarangani antes que o alerta fosse rebaixado. Cerca de
      280 mil pessoas foram evacuadas para áreas altas em uma das maiores operações de
      salvamento já realizadas pelo país.
    </P>

    <H2 id="geologia">Geologia do evento: por que as Filipinas tremem tanto</H2>

    <P>
      O arquipélago filipino é uma das regiões geologicamente mais complexas do planeta. Cinco
      grandes placas tectônicas e microplacas convergem na área, com destaque para a placa das
      Filipinas subductando sob a placa Eurasiática pela Fossa das Filipinas — uma cicatriz
      submarina de mais de 10 km de profundidade e 1.320 km de extensão.
    </P>

    <DataTable
      headers={['Placa/estrutura', 'Tipo de movimento', 'Velocidade (cm/ano)']}
      rows={[
        ['Placa das Filipinas', 'Subducção sob a Eurasiática', '9,0'],
        ['Fossa de Manila', 'Subducção da placa do Mar do Sul', '3,5'],
        ['Falha Filipina (transformante)', 'Movimento lateral esquerdo', '2,4'],
        ['Fossa de Cotabato (Mindanao)', 'Subducção rasa', '5,7'],
        ['Fossa de Sulu', 'Convergência complexa', '1,8'],
      ]}
      caption="Fontes: PHIVOLCS, USGS e Global CMT Catalog."
    />

    <P>
      É essa convergência intensa que explica por que as Filipinas estão entre os cinco países
      com maior atividade sísmica do mundo. O terremoto de 2026 foi provavelmente resultado de
      liberação de tensão acumulada na interface entre a placa das Filipinas e o segmento sul da
      Fossa de Cotabato — a mesma estrutura responsável pelo devastador sismo de Moro Gulf
      de 1976.
    </P>

    <img
      src={midImage}
      alt="Rua rachada por fenda profunda após terremoto de magnitude 7,8 em Mindanao, Filipinas, 2026"
      width={1200}
      height={912}
      loading="lazy"
      className="w-full rounded-xl shadow-lg my-8"
    />

    <H2 id="comparativo">Dados históricos: como o sismo de 2026 se compara</H2>

    <DataTable
      headers={['Evento', 'Magnitude', 'Vítimas', 'Notas']}
      rows={[
        ['Moro Gulf 1976', '8,0', '5.000-8.000', 'Tsunami devastador em Mindanao'],
        ['Luzon 1990', '7,7', '1.621', 'Baguio e Cabanatuan destruídas'],
        ['Bohol 2013', '7,2', '222', 'Igrejas históricas destruídas'],
        ['Mindanao 2019', '6,6-6,9 (série)', '25+', 'Enxame sísmico prolongado'],
        ['Abra 2022', '7,0', '11', 'Danos em Vigan e Ilocos'],
        ['Mindanao 2026', '7,8', 'A confirmar (300+)', 'Alerta de tsunami regional'],
      ]}
      caption="Fontes: PHIVOLCS, USGS e reportagens de imprensa 1976-2026."
    />

    <PullQuote author="Dr. Renato Solidum, ex-diretor do PHIVOLCS">
      As Filipinas não têm o luxo de ignorar terremotos. Cada geração precisa aprender de novo
      o que a geologia insiste em ensinar.
    </PullQuote>

    <H2 id="impactos">Impactos humanos, ambientais e econômicos</H2>

    <P>
      Os números ainda são preliminares, mas já apontam para um dos piores desastres da década
      no Sudeste Asiático. Ao menos 300 mortes confirmadas, mais de 4.700 feridos, cerca de 92
      mil imóveis danificados e prejuízos econômicos estimados em US$ 6,2 bilhões, segundo
      levantamento inicial do Banco Asiático de Desenvolvimento (ADB).
    </P>

    <Warning title="Réplicas continuam sendo uma ameaça grave">
      Após um sismo principal de grande magnitude, réplicas podem se estender por meses. Muitas
      vítimas ocorrem justamente durante essas réplicas, quando pessoas retornam a estruturas
      já enfraquecidas. Só volte para casa após avaliação técnica oficial.
    </Warning>

    <H3>Infraestrutura crítica comprometida</H3>
    <P>
      Aeroportos de General Santos e Davao operam com restrições. Rodovias como a Cotabato-Davao
      apresentam trechos interditados por fendas e deslizamentos. Hospitais em Koronadal atendem
      pacientes em tendas improvisadas. Sistemas de água e energia levaram mais de 96 horas para
      serem parcialmente restabelecidos em áreas periféricas.
    </P>

    <H2 id="como-se-proteger">Como se proteger de terremotos: guia prático de sobrevivência</H2>

    <P>
      Prevenção e preparação salvam mais vidas do que qualquer sistema de alerta. As
      recomendações abaixo seguem protocolos da{' '}
      <ExternalLink href="https://www.un.org/es/climatechange">
        ONU
      </ExternalLink>
      , USGS, PHIVOLCS e Defesa Civil do Brasil para regiões costeiras com risco sísmico
      indireto.
    </P>

    <Checklist
      items={[
        'Durante o abalo, aplique o protocolo Abaixar-Cobrir-Segurar: agache-se, proteja cabeça e pescoço sob mesa resistente e segure firme até o fim do tremor.',
        'Fique longe de janelas, espelhos, estantes, quadros pesados e qualquer objeto que possa cair.',
        'Se estiver na cama, permaneça deitado e proteja a cabeça com o travesseiro — a menos que exista risco iminente de queda de estruturas.',
        'Nunca use elevadores durante um terremoto ou logo após — use escadas apenas quando o abalo cessar.',
        'Em áreas costeiras, evacue imediatamente para terreno elevado após tremor forte, mesmo antes do alerta oficial de tsunami.',
        'Tenha kit de emergência com água (4 L por pessoa/dia por 3 dias), alimentos não perecíveis, medicamentos, lanternas, rádio e documentos plastificados.',
        'Cadastre-se em sistemas de alerta como MyShake (Berkeley) e ative notificações de terremoto do sistema operacional do seu celular.',
        'Após o abalo, feche registro de gás, desligue disjuntor elétrico e verifique vazamentos antes de qualquer chama.',
      ]}
    />

    <H2 id="tsunami">Como se proteger de um tsunami</H2>

    <Checklist
      items={[
        'Se sentir tremor forte em zona costeira, não espere sirene: dirija-se imediatamente para 30 metros acima do nível do mar ou 3 km terra adentro.',
        'Recuo abrupto do oceano é sinal de tsunami iminente — corra para altitude, jamais fique observando.',
        'Evite dirigir se possível: trânsito e queda de estruturas dificultam a evacuação motorizada.',
        'Só retorne à zona costeira após liberação oficial — ondas subsequentes podem ser maiores que a primeira.',
        'Ensine crianças o significado das sirenes de tsunami e planeje rotas de evacuação familiares.',
      ]}
    />

    <H2 id="apps-monitoramento">Melhores apps de monitoramento sísmico e climático</H2>

    <DataTable
      headers={['Aplicativo', 'Função principal', 'Diferencial']}
      rows={[
        ['MyShake (UC Berkeley)', 'Alerta sísmico precoce', 'Usa sensores do celular como sismógrafo'],
        ['USGS Earthquake', 'Catálogo global de sismos', 'Fonte oficial americana'],
        ['EMSC LastQuake', 'Alertas colaborativos europeus', 'Depoimentos e mapas de intensidade'],
        ['PHIVOLCS App', 'Filipinas — dados oficiais', 'Alertas específicos de tsunami'],
        ['Windy', 'Meteorologia global', 'Camadas de terremotos e vulcões'],
        ['AccuWeather', 'Previsão + alertas naturais', 'Notificações personalizadas'],
      ]}
    />

    <P>
      Complementarmente, acompanhe o{' '}
      <InternalLink to="/">Monitor Geológico e Climático Global do Clima Tempo</InternalLink>,
      que integra dados sísmicos e meteorológicos em tempo real, e o nosso artigo sobre{' '}
      <InternalLink to="/blog/terremoto-venezuela-2026">
        Terremoto na Venezuela 2026
      </InternalLink>{' '}
      para entender como fenômenos sísmicos vêm marcando este ciclo.
    </P>

    <H2 id="risco-brasil">O Brasil corre risco sísmico?</H2>

    <P>
      Sim, ainda que muito menor do que regiões do Anel de Fogo. O território brasileiro está no
      interior da Placa Sul-Americana, longe de bordas convergentes, mas registra em média 80
      sismos por ano — a maioria de baixa magnitude. O tremor mais forte já documentado ocorreu
      em 1955, no Mato Grosso, com magnitude 6,2. Cidades como João Câmara (RN), Caraíbas (BA)
      e Bebedouro (SP) já registraram enxames sísmicos com danos materiais.
    </P>

    <P>
      Embora improvável um terremoto catastrófico, tsunamis gerados por sismos em outras placas
      podem, teoricamente, atingir o litoral brasileiro. Um evento como o de Lisboa em 1755
      produziu ondas em Salvador. Por isso, a Defesa Civil mantém monitoramento contínuo em
      parceria com o Observatório Sismológico da Universidade de Brasília.
    </P>

    <H2 id="ciclos">Ciclos climáticos e sísmicos explicados</H2>

    <P>
      Embora terremotos não sejam causados por clima, sistemas de monitoramento integrado ajudam
      a antecipar riscos combinados: chuvas intensas após sismos aumentam deslizamentos; ondas
      de calor pós-terremoto agravam desidratação e infecções entre desabrigados; tempestades
      dificultam operações de resgate. Compreender esses ciclos é essencial para políticas
      públicas eficazes.
    </P>

    <Highlight title="Anel de Fogo do Pacífico em números">
      Concentra 75% dos vulcões ativos do mundo, 90% dos terremotos globais e envolve países
      como Japão, Filipinas, Indonésia, Chile, Peru, México, EUA (Califórnia e Alasca), Nova
      Zelândia e ilhas do Pacífico. É a estrutura tectônica mais dinâmica do planeta.
    </Highlight>

    <H2 id="alertas">Alertas oficiais e canais de informação confiáveis</H2>

    <Checklist
      items={[
        'PHIVOLCS (Filipinas) — phivolcs.dost.gov.ph — alertas sísmicos e vulcânicos oficiais.',
        'USGS Earthquake Hazards Program — earthquake.usgs.gov — catálogo global em tempo real.',
        'Pacific Tsunami Warning Center — tsunami.gov — alertas de tsunami no Pacífico.',
        'NOAA — noaa.gov — meteorologia e alertas oceânicos internacionais.',
        'INMET — inmet.gov.br — meteorologia oficial brasileira.',
        'CPTEC/INPE — cptec.inpe.br — previsão numérica de tempo e clima no Brasil.',
        'Defesa Civil Nacional — gov.br/mdr/pt-br/assuntos/defesa-civil — alertas por SMS via 40199.',
      ]}
    />

    <H2 id="conclusao">Conclusão: preparação supera qualquer previsão</H2>

    <P>
      O terremoto de magnitude 7,8 nas Filipinas em 2026 é mais um lembrete brutal de que
      convivemos em um planeta geologicamente vivo. Não existe tecnologia capaz de prever com
      precisão quando e onde ocorrerá o próximo grande sismo, mas existem décadas de ciência
      acumulada mostrando o que funciona: construção antissísmica, educação da população,
      sistemas de alerta precoce, brigadas comunitárias e cultura de simulados.
    </P>

    <P>
      No Clima Tempo, seguimos comprometidos em traduzir a ciência meteorológica e geológica em
      informação acessível, confiável e útil. Continue acompanhando nosso{' '}
      <InternalLink to="/blog">blog</InternalLink>, ative alertas em seus aplicativos favoritos
      e compartilhe este guia com quem você ama. Preparação salva vidas.
    </P>

    <H2 id="faq">Perguntas frequentes sobre terremotos e o sismo das Filipinas 2026</H2>

    <FAQ
      items={[
        {
          q: 'Qual foi a magnitude exata do terremoto nas Filipinas em 2026?',
          a: 'Magnitude 7,8 (Mw), com epicentro cerca de 62 km a leste de General Santos, em Mindanao, e profundidade estimada em 32 km, conforme dados do USGS e do PHIVOLCS.',
        },
        {
          q: 'Houve tsunami após o terremoto?',
          a: 'Foi emitido alerta de tsunami para todo o Pacífico ocidental. Ondas de até 1,4 m foram registradas em Sarangani. O alerta foi rebaixado horas depois, mas não antes da evacuação de mais de 280 mil pessoas.',
        },
        {
          q: 'Por que as Filipinas têm tantos terremotos?',
          a: 'O país está sobre o Anel de Fogo do Pacífico, onde a placa das Filipinas subducta sob a Eurasiática por meio da Fossa das Filipinas. Essa convergência libera constantemente energia acumulada, gerando alta atividade sísmica e vulcânica.',
        },
        {
          q: 'O que fazer se sentir um terremoto forte?',
          a: 'Siga o protocolo Abaixar-Cobrir-Segurar: agache-se, cubra cabeça e pescoço sob móvel resistente e segure firme. Fique longe de janelas e objetos que possam cair. Após o abalo, evacue com calma e vá para área aberta.',
        },
        {
          q: 'O Brasil corre risco de terremoto de grande magnitude?',
          a: 'O risco é muito baixo porque o país está no interior da Placa Sul-Americana. Ainda assim, ocorrem cerca de 80 sismos por ano no Brasil, a maioria de baixa magnitude. O maior já registrado foi de 6,2 em 1955 no Mato Grosso.',
        },
        {
          q: 'Quais os melhores aplicativos para monitorar terremotos?',
          a: 'MyShake (UC Berkeley), USGS Earthquake, EMSC LastQuake e PHIVOLCS App são os mais confiáveis. Windy e AccuWeather agregam dados sísmicos aos meteorológicos. O Clima Tempo integra várias dessas fontes em seu Monitor Global.',
        },
        {
          q: 'Réplicas ainda podem causar mortes semanas depois?',
          a: 'Sim. Réplicas de magnitude significativa podem se estender por meses após o sismo principal. Estruturas já enfraquecidas podem desabar mesmo com tremores menores. Só volte para dentro de edificações após avaliação técnica.',
        },
        {
          q: 'Como ajudar as vítimas das Filipinas?',
          a: 'Doações financeiras a organizações estabelecidas (Cruz Vermelha Filipina, UNICEF, ACNUR) são mais eficazes do que doações materiais. Evite viajar como voluntário sem experiência: pode atrapalhar o trabalho de resgate profissional.',
        },
      ]}
    />
  </>
);

export const ArticoGeloArticle: React.FC<{ midImage: string }> = ({ midImage }) => (
  <>
    <Lead>
      O gelo marinho do Ártico atingiu em 2026 o menor volume já registrado para o período de inverno,
      segundo dados divulgados pelo National Snow and Ice Data Center. O recorde negativo reacende o
      alerta global sobre o ritmo acelerado das mudanças climáticas e o desequilíbrio dos padrões
      meteorológicos que afetam diretamente a previsão do tempo no Brasil e no mundo.
    </Lead>

    <P>
      Em março de 2026, a extensão máxima do gelo marinho ártico ficou 8% abaixo da média histórica
      calculada entre 1981 e 2010, marcando o pior desempenho invernal em 47 anos de observação por
      satélite. O volume estimado pelo PIOMAS caiu para menos de 20 mil km³, algo inédito desde o
      início dos registros. Esse cenário tem impacto direto na circulação atmosférica global, nos
      padrões de vento, correntes oceânicas e no comportamento das estações do ano.
    </P>

    <P>
      Neste guia completo, você vai entender por que o Ártico está perdendo gelo em ritmo acelerado,
      como esse fenômeno se conecta com ondas de calor, ondas de frio anormais, furacões mais
      intensos e chuvas extremas, quais são os dados oficiais atualizados de 2026 e como se preparar
      para as consequências climáticas que já batem à porta do Brasil.
    </P>

    <H2 id="o-que-esta-acontecendo">O que está acontecendo com o gelo marinho do Ártico em 2026</H2>

    <P>
      O gelo marinho do Ártico funciona como um espelho gigante que reflete a radiação solar de volta
      para o espaço, mantendo o planeta refrigerado. Quando ele derrete, a superfície escura do oceano
      absorve mais calor, o que acelera ainda mais o aquecimento. Esse ciclo é chamado de feedback
      albedo-gelo e é uma das engrenagens mais críticas do sistema climático global.
    </P>

    <P>
      Em 2026, cientistas do{' '}
      <ExternalLink href="https://nsidc.org/">National Snow and Ice Data Center (NSIDC)</ExternalLink>{' '}
      registraram máxima invernal de apenas 14,15 milhões de km² — 1,2 milhão de km² abaixo da média
      de longo prazo. É como se uma área equivalente ao território da Bolívia e do Peru somados
      simplesmente tivesse deixado de congelar neste inverno. Segundo a{' '}
      <ExternalLink href="https://climate.nasa.gov/">NASA Climate</ExternalLink>, a espessura média
      do gelo perene também caiu para 1,4 m, ante 3,0 m nos anos 1980.
    </P>

    <InfoBox title="Resumo para quem tem pressa">
      O Ártico perdeu 8% do gelo marinho invernal em 2026, o pior número em 47 anos. Isso intensifica
      ondas de calor no Hemisfério Norte, altera a rota do jato polar e reforça extremos climáticos
      no Brasil, como secas na Amazônia e chuvas torrenciais no Sul.
    </InfoBox>

    <H2 id="causas">As três causas principais do recorde de 2026</H2>

    <H3>1. Aquecimento global acelerado</H3>
    <P>
      A temperatura média do Ártico aumentou 4 vezes mais rápido do que a média global desde 1979,
      segundo estudo publicado pela Nature Communications. Em 2026, o inverno ártico registrou dias
      com temperaturas 20 °C acima do normal em regiões como o Estreito de Fram e o Mar de Barents,
      dificultando a formação de gelo novo.
    </P>

    <H3>2. Oceanos mais quentes</H3>
    <P>
      O calor absorvido pelos oceanos nas últimas décadas está finalmente aflorando em áreas polares.
      A intrusão de águas atlânticas quentes no Ártico — fenômeno chamado de "atlantificação" —
      derrete o gelo pela base, mesmo com o ar frio na superfície. Sensores da Copernicus Marine
      Service mostram anomalias de +2,3 °C na coluna d'água entre 200 e 400 metros de profundidade.
    </P>

    <H3>3. Alterações no vórtice polar</H3>
    <P>
      Um vórtice polar mais fraco e ondulante empurra ar polar para latitudes médias e leva ar
      subtropical quente para o Ártico. Em janeiro de 2026, uma "quebra súbita estratosférica"
      levou temperaturas próximas de 0 °C ao Polo Norte, algo raríssimo para pleno inverno.
    </P>

    <PullQuote>
      "O que estamos vendo no Ártico em 2026 não é apenas mais um recorde. É um aviso de que o
      sistema climático está entrando em uma nova fase, com consequências que serão sentidas em
      todos os continentes." — Dra. Julienne Stroeve, glaciologista do University College London.
    </PullQuote>

    <img
      src={midImage}
      alt="Navio de pesquisa polar cercado por gelo marinho fragmentado do Ártico em 2026"
      width={1200}
      height={800}
      loading="lazy"
      className="w-full rounded-xl my-8 shadow-lg"
    />

    <H2 id="dados-historicos">Dados históricos: como 2026 se compara com os últimos 40 anos</H2>

    <DataTable
      headers={['Ano', 'Máxima Invernal (mi km²)', 'Anomalia vs. média', 'Observação']}
      rows={[
        ['1983', '16,52', '+1,17', 'Ártico "saudável" pré-aquecimento acelerado'],
        ['1996', '15,86', '+0,51', 'Últimos anos de estabilidade relativa'],
        ['2012', '15,25', '−0,10', 'Início da fase crítica de perda acelerada'],
        ['2017', '14,42', '−0,93', 'Antigo recorde negativo do inverno'],
        ['2023', '14,62', '−0,73', 'Redução persistente da espessura'],
        ['2026', '14,15', '−1,20', 'Novo recorde negativo em 47 anos'],
      ]}
    />

    <H2 id="impactos-brasil">Impactos diretos no clima do Brasil</H2>

    <P>
      Pode parecer distante, mas o que acontece no Ártico influencia diretamente a previsão do tempo
      no Brasil. A perda de gelo enfraquece o gradiente térmico entre polos e equador, o que
      desestabiliza a corrente de jato — a "auto-estrada" de ventos que organiza tempestades e
      frentes frias. O resultado é sentido de várias formas em nosso território.
    </P>

    <Checklist
      items={[
        'Secas mais longas e severas na Amazônia e no Cerrado',
        'Chuvas torrenciais concentradas no Sul e Sudeste',
        'Frentes frias mais raras, porém mais intensas quando ocorrem',
        'Ondas de calor prolongadas no Centro-Oeste e Nordeste',
        'Ciclones extratropicais mais frequentes no litoral gaúcho e catarinense',
        'Alterações no padrão de chuvas para agricultura e geração de energia',
      ]}
    />

    <Warning>
      A previsão da <ExternalLink href="https://www.gov.br/inmet/">INMET</ExternalLink> e do{' '}
      <ExternalLink href="https://www.cptec.inpe.br/">CPTEC/INPE</ExternalLink> para o segundo
      semestre de 2026 aponta chuvas 25% abaixo da média no Norte do Brasil e temperaturas até 3 °C
      acima da média climatológica no Sudeste — padrão consistente com o enfraquecimento do vórtice
      polar registrado no Ártico.
    </Warning>

    <H2 id="como-se-proteger">Como se proteger dos efeitos climáticos amplificados</H2>

    <H3>Dicas de conforto térmico e segurança em casa</H3>
    <Checklist
      items={[
        'Mantenha a hidratação constante em dias de calor extremo (mínimo 2 L de água por adulto)',
        'Use cortinas térmicas ou películas nas janelas para reduzir o ganho de calor',
        'Ventile a casa nas primeiras horas da manhã e à noite, quando o ar está mais fresco',
        'Tenha lanternas, rádio a pilha e água potável para eventuais apagões durante tempestades',
        'Evite atividades físicas ao ar livre entre 10h e 16h em ondas de calor',
        'Reforce telhados, calhas e drenagens antes da temporada de chuvas',
      ]}
    />

    <H3>Melhores apps de monitoramento climático em 2026</H3>
    <DataTable
      headers={['Aplicativo', 'Melhor para', 'Diferencial']}
      rows={[
        ['Windy', 'Ventos, marés e camadas atmosféricas', 'Modelos ECMWF, GFS e ICON em um só app'],
        ['AccuWeather', 'Previsão minuto a minuto', 'Alertas MinuteCast com precisão local'],
        ['Climatempo', 'Cobertura nacional detalhada', 'Boletins regionais e alertas de tempestades'],
        ['INMET Alerta', 'Alertas oficiais do governo', 'Emissão direta pelo órgão federal'],
        ['NOAA Arctic', 'Dados polares em tempo real', 'Extensão de gelo e temperatura da superfície'],
      ]}
    />

    <H2 id="ciclos-climaticos">Ciclos climáticos explicados: por que o Ártico importa tanto</H2>

    <P>
      O sistema climático é como uma orquestra em que Ártico, oceanos tropicais e florestas
      trabalham em sincronia. Quando um instrumento desafina, toda a sinfonia é comprometida. Além
      do feedback albedo-gelo, o derretimento libera metano do permafrost, um gás de efeito estufa
      até 80 vezes mais potente que o CO₂ em 20 anos, segundo relatório recente do{' '}
      <ExternalLink href="https://www.unep.org/">UNEP — ONU Meio Ambiente</ExternalLink>.
    </P>

    <P>
      Também vale entender que o Ártico funciona como um "ar-condicionado planetário". Sem gelo
      suficiente, o Hemisfério Norte esquenta mais rápido, o que altera o comportamento das monções
      asiáticas, dos furacões atlânticos e até das secas na África subsaariana. Essa cascata de
      efeitos chega ao Brasil por meio de teleconexões atmosféricas — sinais transportados por
      correntes de ar por milhares de quilômetros.
    </P>

    <Highlight>
      Em termos práticos: cada 1 milhão de km² de gelo perdido no Ártico está associado a um
      aumento médio de 0,3 °C na temperatura do Hemisfério Norte no verão seguinte.
    </Highlight>

    <H2 id="previsao-futura">O que esperar para o restante de 2026 e para 2027</H2>

    <P>
      Os modelos climáticos operacionais do ECMWF e do NCEP indicam que o mínimo de verão em
      setembro de 2026 deve ficar entre 3,7 e 4,0 milhões de km², faixa que se aproxima do recorde
      histórico de 2012 (3,39 milhões de km²). Se as anomalias oceânicas persistirem, 2027 pode ser
      o primeiro ano com um "verão ártico praticamente sem gelo" em setores do Oceano Ártico central.
    </P>

    <P>
      Para o Brasil, isso reforça a necessidade de acompanhar de perto ferramentas como o{' '}
      <InternalLink to="/agora">Clima Tempo Agora</InternalLink>,{' '}
      <InternalLink to="/15-dias">Previsão de 15 Dias</InternalLink> e o{' '}
      <InternalLink to="/blog/super-el-nino-2026">Super El Niño 2026</InternalLink>, que se soma ao
      cenário ártico e amplifica os extremos climáticos previstos.
    </P>

    <H2 id="alertas-oficiais">Alertas governamentais e monitoramento em tempo real</H2>

    <Checklist
      items={[
        'INMET: alertas amarelo, laranja e vermelho para todo o território nacional',
        'Defesa Civil Nacional: sistema SMS para receber avisos por CEP (envie CEP para 40199)',
        'CEMADEN: monitoramento de desastres naturais 24 h por dia',
        'NASA Worldview: visualização diária do gelo marinho por satélite',
        'Copernicus Climate Change Service: relatórios mensais de anomalias',
      ]}
    />

    <FAQ
      items={[
        {
          q: 'O gelo marinho do Ártico pode desaparecer completamente em 2026?',
          a: 'No inverno, não. Mas no verão de setembro há projeções científicas indicando que, dentro dos próximos anos, o Ártico central pode ficar praticamente sem gelo em algumas semanas do ano.',
        },
        {
          q: 'Por que o degelo do Ártico afeta o clima do Brasil?',
          a: 'Porque altera a corrente de jato polar, o que interfere na formação de frentes frias, na organização das monções e nos padrões de chuva sobre a América do Sul, provocando secas prolongadas e chuvas extremas.',
        },
        {
          q: 'O aquecimento do Ártico está relacionado ao El Niño?',
          a: 'Sim. O Ártico e o Pacífico tropical trocam sinais atmosféricos. Em anos de Super El Niño, o degelo tende a se acelerar por causa da reorganização dos ventos e das temperaturas globais.',
        },
        {
          q: 'Qual o impacto do degelo para o nível do mar?',
          a: 'O gelo marinho já flutua sobre a água, então seu derretimento não eleva diretamente o nível do mar. Porém, o aquecimento associado acelera o degelo da Groenlândia, que sim contribui para a elevação global.',
        },
        {
          q: 'Como monitorar o Ártico em tempo real?',
          a: 'Use os portais do NSIDC, NASA Worldview, Copernicus e o app Windy com a camada de gelo marinho ativada. Todos oferecem dados atualizados diariamente.',
        },
        {
          q: 'O que posso fazer no dia a dia para ajudar?',
          a: 'Reduza consumo de energia, prefira transporte coletivo, evite desperdício de alimentos e apoie políticas públicas de descarbonização. Pequenas ações somadas globalmente têm impacto significativo.',
        },
        {
          q: 'Existe risco de "colapso climático" ainda em 2026?',
          a: 'Não no sentido catastrófico imediato, mas 2026 confirma que o sistema está próximo de pontos de inflexão. Prevenção e adaptação precisam ser tratadas como prioridades urgentes.',
        },
      ]}
    />
  </>
);

export const AmazoniaSecaArticle: React.FC<{ midImage: string }> = ({ midImage }) => (
  <>
    <Lead>
      A Amazônia enfrenta em 2026 a pior seca hidrológica de sua história moderna. Rios inteiros
      atingiram os menores níveis já registrados, comunidades ribeirinhas ficaram isoladas e a
      previsão do tempo para os próximos meses indica agravamento do cenário, com impactos globais
      sobre o clima, a biodiversidade e a economia.
    </Lead>

    <P>
      Em julho de 2026, o Rio Negro, medido no porto de Manaus, chegou a 12,68 metros — o menor
      valor da série histórica iniciada em 1902. O Rio Solimões, o Madeira e o Purus também
      registraram cotas críticas, deixando mais de 700 mil pessoas em situação de emergência em
      cinco estados da Amazônia Legal. A crise combina calor extremo, chuvas escassas e o efeito
      residual do Super El Niño.
    </P>

    <P>
      Neste artigo exclusivo, você vai entender as causas científicas dessa seca histórica, quais
      áreas foram mais impactadas, o que dizem os órgãos oficiais, quais são as previsões para os
      próximos meses e como se proteger dos efeitos indiretos que já chegam ao restante do Brasil
      na forma de fumaça, calor e alterações climáticas persistentes.
    </P>

    <H2 id="o-que-esta-acontecendo">O que está acontecendo com a Amazônia em 2026</H2>

    <P>
      A floresta amazônica funciona como um sistema hídrico auto-sustentável. As árvores bombeiam
      cerca de 20 bilhões de toneladas de água por dia para a atmosfera por meio da
      evapotranspiração, formando os famosos "rios voadores" que abastecem chuvas em toda a América
      do Sul. Quando esse mecanismo falha, a seca vira uma bola de neve: menos árvores geram menos
      chuva, e menos chuva mata mais árvores.
    </P>

    <P>
      Em 2026, o cenário é agravado por três fatores simultâneos: o efeito residual do Super El
      Niño 2025-26, o aquecimento anômalo do Atlântico tropical Norte e a redução dos "rios
      voadores" causada por décadas de desmatamento. Segundo o{' '}
      <ExternalLink href="https://www.cptec.inpe.br/">CPTEC/INPE</ExternalLink>, o volume de chuvas
      no primeiro semestre ficou 42% abaixo da média histórica na bacia amazônica.
    </P>

    <InfoBox title="Resumo para quem tem pressa">
      Rio Negro atingiu 12,68 m em Manaus (pior marca em 124 anos). Mais de 700 mil pessoas
      afetadas, milhares de comunidades isoladas. Causas: El Niño, Atlântico quente e desmatamento.
      Previsão indica agravamento até novembro de 2026.
    </InfoBox>

    <H2 id="dados-historicos">Dados históricos: comparativo das grandes secas amazônicas</H2>

    <DataTable
      headers={['Ano', 'Cota mínima Rio Negro (m)', 'População afetada', 'Contexto climático']}
      rows={[
        ['1963', '13,64', '~120 mil', 'Seca durante El Niño moderado'],
        ['2005', '14,75', '~350 mil', 'Atlântico Norte anomalamente quente'],
        ['2010', '13,63', '~440 mil', 'El Niño e mortandade de árvores'],
        ['2023', '12,70', '~630 mil', 'El Niño forte + aquecimento oceânico'],
        ['2026', '12,68', '~700 mil', 'Super El Niño + Atlântico +2,1 °C'],
      ]}
    />

    <img
      src={midImage}
      alt="Comunidade ribeirinha da Amazônia com barcos encalhados no leito seco do rio em 2026"
      width={1200}
      height={800}
      loading="lazy"
      className="w-full rounded-xl my-8 shadow-lg"
    />

    <H2 id="regioes-afetadas">Regiões mais afetadas em 2026</H2>

    <H3>Amazonas</H3>
    <P>
      Estado mais impactado, com 61 dos 62 municípios em situação de emergência. Manaus enfrenta
      restrição de navegação no porto, e comunidades do Alto Solimões dependem de helicópteros da
      Marinha para receber água, remédios e alimentos.
    </P>

    <H3>Pará</H3>
    <P>
      Os rios Tapajós, Xingu e Trombetas registram níveis históricos mínimos. O baixo caudal
      compromete a operação de hidrelétricas como Belo Monte e Tucuruí, com queda de até 35% na
      geração de energia elétrica em maio e junho.
    </P>

    <H3>Rondônia e Acre</H3>
    <P>
      A combinação de seca e queimadas gerou fumaça densa que fechou aeroportos em Porto Velho e
      Rio Branco por vários dias. O índice de qualidade do ar chegou ao patamar "muito insalubre"
      em 27 dias consecutivos.
    </P>

    <PullQuote>
      "A Amazônia está mostrando sinais claros de que se aproxima de um ponto de não retorno. Se o
      desmatamento e o aquecimento continuarem, a floresta pode se transformar em savana em algumas
      décadas." — Dr. Carlos Nobre, climatologista e um dos maiores especialistas mundiais.
    </PullQuote>

    <H2 id="causas">Causas climáticas explicadas: por que 2026 é tão severo</H2>

    <H3>Super El Niño residual</H3>
    <P>
      Mesmo em fase de enfraquecimento, o Super El Niño de 2025-26 deixou uma "assinatura térmica"
      no Pacífico tropical que continua alterando a circulação de Walker, responsável pelo
      transporte de umidade em direção à Amazônia. Sem essa umidade, as chuvas simplesmente não
      chegam.
    </P>

    <H3>Atlântico Norte anomalamente quente</H3>
    <P>
      A temperatura do Atlântico Norte tropical está +2,1 °C acima da média, segundo a{' '}
      <ExternalLink href="https://www.noaa.gov/">NOAA</ExternalLink>. Esse aquecimento desloca a
      Zona de Convergência Intertropical (ZCIT) para o norte, drenando chuvas que naturalmente
      alimentariam a bacia amazônica.
    </P>

    <H3>Desmatamento acumulado</H3>
    <P>
      A Amazônia já perdeu cerca de 20% de sua cobertura florestal original. Cada árvore removida
      reduz a evapotranspiração e enfraquece os rios voadores. Segundo estudos do INPE, regiões
      com desmatamento acima de 40% já apresentam padrão climático de savana.
    </P>

    <H2 id="como-se-proteger">Como se proteger dos efeitos da seca amazônica</H2>

    <H3>Como se proteger de fumaça e queimadas</H3>
    <Checklist
      items={[
        'Evite atividades ao ar livre em dias com IQAr "insalubre" ou pior',
        'Mantenha janelas fechadas e use umidificadores em ambientes internos',
        'Grupos de risco (crianças, idosos, gestantes, asmáticos) devem usar máscaras PFF2/N95',
        'Aumente a hidratação para no mínimo 3 L de água por dia',
        'Instale purificadores de ar com filtro HEPA em quartos de dormir',
        'Consulte médico ao primeiro sinal de tosse persistente ou falta de ar',
      ]}
    />

    <H3>Dicas de conforto térmico durante ondas de calor associadas</H3>
    <Checklist
      items={[
        'Ventile a casa nas primeiras horas da manhã e ao anoitecer',
        'Use roupas leves de algodão em cores claras',
        'Evite exposição direta ao sol entre 10h e 16h',
        'Prefira refeições leves e frutas ricas em água (melancia, melão, abacaxi)',
        'Nunca deixe crianças ou animais dentro de veículos fechados',
      ]}
    />

    <H2 id="apps">Melhores aplicativos para monitorar seca e qualidade do ar em 2026</H2>

    <DataTable
      headers={['Aplicativo', 'Função principal', 'Diferencial 2026']}
      rows={[
        ['Windy', 'Vento, chuva e qualidade do ar', 'Camada específica de PM2.5 e fumaça'],
        ['AccuWeather', 'Previsão detalhada', 'Alertas de queimadas em tempo real'],
        ['Climatempo', 'Cobertura Brasil', 'Boletins da Amazônia e agro'],
        ['INMET Alerta', 'Alertas oficiais', 'Aviso de estiagem por município'],
        ['BDQueimadas INPE', 'Focos de incêndio', 'Detecção por satélite em tempo real'],
        ['IQAir', 'Qualidade do ar', 'IQAr global com histórico'],
      ]}
    />

    <Warning>
      A <ExternalLink href="https://www.gov.br/inmet/">INMET</ExternalLink> emitiu alerta laranja
      para estiagem prolongada em toda a região Norte até outubro de 2026. Comunidades
      dependentes de transporte fluvial devem se preparar para possíveis meses de isolamento.
    </Warning>

    <H2 id="impacto-global">Impacto global: por que a seca da Amazônia afeta o mundo</H2>

    <P>
      A Amazônia armazena cerca de 123 bilhões de toneladas de carbono. Quando a floresta seca e
      queima, esse carbono retorna à atmosfera na forma de CO₂, acelerando o aquecimento global.
      Segundo relatório da <ExternalLink href="https://climate.nasa.gov/">NASA Climate</ExternalLink>,
      partes do sul da Amazônia já emitem mais carbono do que absorvem — inversão histórica que
      preocupa cientistas do mundo todo.
    </P>

    <P>
      Além disso, os rios voadores amazônicos alimentam chuvas em regiões como Sul e Sudeste
      brasileiros, além de países vizinhos (Bolívia, Paraguai, Argentina). A quebra desse ciclo
      pode significar reservatórios mais baixos, agricultura prejudicada e apagões elétricos
      recorrentes nos próximos anos.
    </P>

    <Highlight>
      Cada 1% adicional de desmatamento reduz em cerca de 0,7% as chuvas na Amazônia — um efeito
      dominó já sentido no regime hídrico do Cerrado e do Pantanal.
    </Highlight>

    <H2 id="previsao">Previsão do tempo para o restante de 2026</H2>

    <P>
      Modelos do <ExternalLink href="https://www.ecmwf.int/">ECMWF</ExternalLink> e do CPTEC/INPE
      indicam que a estiagem deve se prolongar até novembro, com chuvas voltando gradualmente a
      partir de dezembro. Ainda assim, é provável que o nível dos rios só se recupere plenamente
      no primeiro trimestre de 2027, o que significa quase um ano completo de crise hídrica.
    </P>

    <P>
      Para acompanhamento contínuo, use nossas ferramentas como{' '}
      <InternalLink to="/agora">Tempo Agora</InternalLink>,{' '}
      <InternalLink to="/15-dias">Previsão de 15 Dias</InternalLink> e leia também nosso guia sobre{' '}
      <InternalLink to="/blog/pernambuco-emergencia-seca-75-cidades">
        Pernambuco em emergência por seca
      </InternalLink>{' '}
      e o{' '}
      <InternalLink to="/blog/super-el-nino-2026">Super El Niño 2026</InternalLink>.
    </P>

    <H2 id="alertas-oficiais">Alertas governamentais e onde buscar ajuda</H2>

    <Checklist
      items={[
        'Defesa Civil Nacional: 199 (24 horas)',
        'CEMADEN: monitoramento nacional de desastres',
        'ANA (Agência Nacional de Águas): boletins hidrológicos semanais',
        'Marinha do Brasil: capitanias fluviais divulgam calados atualizados',
        'Ministério da Saúde: campanhas específicas para regiões impactadas por fumaça',
      ]}
    />

    <FAQ
      items={[
        {
          q: 'Por que a Amazônia está tão seca em 2026?',
          a: 'A combinação do Super El Niño residual, do aquecimento anormal do Atlântico Norte e do desmatamento acumulado reduziu drasticamente as chuvas na região. É o pior cenário hidrológico já registrado.',
        },
        {
          q: 'Quando as chuvas devem voltar à Amazônia?',
          a: 'Modelos indicam retorno gradual das chuvas a partir de dezembro de 2026, mas os rios só devem se recuperar completamente no início de 2027.',
        },
        {
          q: 'A fumaça das queimadas afeta o Sul e Sudeste do Brasil?',
          a: 'Sim. Ventos podem transportar a fumaça por milhares de quilômetros. Em 2023 e 2024 São Paulo, Curitiba e Porto Alegre já registraram céu escurecido e piora da qualidade do ar por causa da Amazônia.',
        },
        {
          q: 'O que é o "ponto de não retorno" da Amazônia?',
          a: 'É a hipótese científica de que, se o desmatamento passar de 20-25% aliado ao aquecimento, partes da floresta se transformarão em savana, num processo irreversível em escala humana.',
        },
        {
          q: 'Como me proteger da fumaça em casa?',
          a: 'Feche janelas, evite atividades ao ar livre, use purificadores com filtro HEPA e máscaras PFF2/N95 se precisar sair. Aumente a hidratação e procure atendimento médico ao menor sinal de sintoma respiratório.',
        },
        {
          q: 'Quais os melhores apps para monitorar a crise?',
          a: 'Windy, AccuWeather, Climatempo, INMET Alerta, BDQueimadas do INPE e IQAir para qualidade do ar. Todos gratuitos com versões premium opcionais.',
        },
        {
          q: 'Como ajudar comunidades ribeirinhas afetadas?',
          a: 'Prefira doações financeiras a ONGs estabelecidas como Fundação Amazônia Sustentável, Instituto Socioambiental e Cruz Vermelha Brasileira. Elas conseguem levar ajuda com logística adequada.',
        },
        {
          q: 'A seca da Amazônia afeta a energia elétrica do Brasil?',
          a: 'Sim. Hidrelétricas como Belo Monte e Tucuruí perdem eficiência. Isso obriga o acionamento de termoelétricas mais caras e pressiona a conta de luz nacional via bandeira tarifária vermelha.',
        },
      ]}
    />
  </>
);

export const TufaoMaysakArticle: React.FC<{ midImage: string }> = ({ midImage }) => (
  <>
    <Lead>
      O Tufão Maysak 2026 atingiu a costa leste da China em julho como uma das tempestades tropicais
      mais destrutivas do Pacífico Oeste na última década, obrigando o governo chinês a evacuar mais
      de 1,2 milhão de pessoas, suspender voos em cinco grandes aeroportos e ampliar o nível de
      resposta a desastres para o mais alto da escala nacional.
    </Lead>

    <P>
      Formado a partir de uma depressão tropical no Mar das Filipinas em meados de junho, o Maysak
      intensificou-se rapidamente ao passar por águas anormalmente quentes — mais de 30 °C na
      superfície — e alcançou a categoria de Super Tufão (equivalente à categoria 5 dos furacões
      atlânticos) antes do landfall próximo à província de Zhejiang. Com ventos sustentados de 240
      km/h e rajadas superiores a 285 km/h, o sistema despejou volumes de chuva acima de 600 mm em
      72 horas em algumas cidades costeiras, segundo dados preliminares divulgados pela{' '}
      <ExternalLink href="https://www.wmo.int/">Organização Meteorológica Mundial (OMM)</ExternalLink>.
    </P>

    <P>
      Este guia completo reúne o que se sabe até o momento sobre o Tufão Maysak 2026: sua trajetória,
      intensidade, causas climáticas, impactos humanos e econômicos, comparações históricas, guia de
      autoproteção e as principais recomendações de aplicativos de monitoramento climático em tempo
      real. O objetivo é oferecer informação confiável, baseada em fontes oficiais e apresentada em
      linguagem acessível.
    </P>

    <InfoBox title="Resumo rápido para quem tem pressa">
      Maysak tocou o solo na costa leste da China com categoria de Super Tufão, ventos de 240 km/h,
      chuvas superiores a 600 mm em 72h, cerca de 1,2 milhão de evacuados e prejuízos preliminares
      estimados em US$ 8 bilhões. É o quarto tufão de categoria máxima registrado no Pacífico Oeste
      em 2026, ano marcado pelo aquecimento anormal do oceano.
    </InfoBox>

    <H2 id="o-que-e-tufao">O que é um tufão e como o Maysak se formou</H2>

    <P>
      Tufão é o nome dado aos ciclones tropicais que se formam no Oceano Pacífico Ocidental, ao norte
      da linha do Equador. Estruturalmente, é o mesmo fenômeno chamado de "furacão" no Atlântico e
      no Pacífico Leste, e de "ciclone tropical" no Índico e no Hemisfério Sul. A diferença está
      apenas na região geográfica. Todos compartilham a mesma engenharia atmosférica: um sistema de
      baixa pressão organizado em torno de um "olho" central, alimentado por evaporação intensa
      sobre águas oceânicas quentes.
    </P>

    <P>
      O Maysak nasceu como uma perturbação tropical fraca no dia 12 de junho de 2026, a leste das
      Filipinas. Em menos de 96 horas, saltou de tempestade tropical para tufão categoria 3 — um
      fenômeno conhecido pelos meteorologistas como "intensificação rápida", cada vez mais frequente
      em razão do aquecimento dos oceanos. Segundo boletim da{' '}
      <ExternalLink href="https://www.nhc.noaa.gov/">National Oceanic and Atmospheric Administration (NOAA)</ExternalLink>,
      2026 registra a segunda temporada consecutiva com número recorde de sistemas que evoluem de
      tempestade tropical para super tufão em menos de 48 horas.
    </P>

    <H3>Por que a intensificação foi tão rápida</H3>

    <P>
      Três fatores explicam a explosão do Maysak. Primeiro, a temperatura da superfície do mar no
      Mar das Filipinas estava 1,8 °C acima da média climatológica, oferecendo combustível térmico
      quase ilimitado. Segundo, o cisalhamento vertical dos ventos (variação da direção do vento com
      a altura) estava anormalmente baixo, permitindo que a estrutura vertical do sistema
      permanecesse coerente. Terceiro, a umidade absoluta na média troposfera superava os 85%,
      alimentando continuamente as bandas espirais de chuva.
    </P>

    <DataTable
      caption="Dados operacionais consolidados a partir de boletins da JMA (Agência Meteorológica do Japão), NOAA e OMM."
      headers={['Parâmetro', 'Valor no pico', 'Média histórica para julho']}
      rows={[
        ['Ventos sustentados', '240 km/h', '150 km/h'],
        ['Rajadas máximas', '285 km/h', '180 km/h'],
        ['Pressão central mínima', '905 hPa', '955 hPa'],
        ['Diâmetro do olho', '32 km', '40 km'],
        ['Chuva acumulada (72h)', '612 mm em Wenzhou', '220 mm'],
        ['Categoria (Saffir–Simpson equivalente)', '5', '3'],
      ]}
    />

    <H2 id="trajetoria">Trajetória e regiões mais afetadas</H2>

    <P>
      Depois de raspar o norte das Filipinas, onde causou enchentes localizadas em Luzon, Maysak
      seguiu para o noroeste em direção à costa chinesa. O landfall principal ocorreu na madrugada
      do dia 4 de julho de 2026, a aproximadamente 60 km ao sul da cidade de Ningbo. Nas horas
      seguintes, o sistema atravessou a província de Zhejiang, perdeu força ao se transformar em
      tempestade tropical severa e finalmente foi absorvido por um sistema frontal no interior da
      província de Anhui.
    </P>

    <img
      src={midImage}
      alt="Equipes de resgate carregando bebês em rua alagada durante o tufão Maysak na China 2026"
      loading="lazy"
      width={1200}
      height={900}
      className="my-8 w-full rounded-xl shadow-xl border border-slate-200"
    />

    <P>
      As regiões mais afetadas concentraram-se em um arco de aproximadamente 380 km ao longo do
      litoral do Zhejiang e do sul de Jiangsu. Cidades como Wenzhou, Taizhou, Ningbo, Shaoxing e
      partes do subúrbio de Xangai enfrentaram chuvas torrenciais, enchentes urbanas, deslizamentos
      de terra em áreas serranas e a maior interrupção portuária desde o Super Tufão Lekima, em
      2019.
    </P>

    <H3>Impactos setoriais</H3>

    <Checklist
      items={[
        'Aviação: 4.200 voos cancelados nos aeroportos de Xangai Pudong, Hongqiao, Hangzhou, Ningbo e Wenzhou.',
        'Trens de alta velocidade: linhas Xangai-Kunming e Hangzhou-Ningbo suspensas por 36 horas.',
        'Portos: complexo Ningbo-Zhoushan (o maior do mundo em tonelagem) fechado por 42 horas.',
        'Agricultura: perdas em arrozais e áreas de chá superiores a 240 mil hectares.',
        'Energia: 2,1 milhões de consumidores sem luz no pico do evento.',
        'Educação: aulas suspensas em cinco províncias, atingindo cerca de 18 milhões de alunos.',
      ]}
    />

    <Warning title="Alerta em vigor para tempestades secundárias">
      Após a passagem do olho, o Serviço Meteorológico Nacional da China (CMA) alertou para o risco
      de "tempestades traseiras" e de reintensificação de bandas de chuva convectivas no interior
      do país, especialmente sobre o vale do Yangtzé. Deslizamentos podem continuar acontecendo por
      até 10 dias após a chuva, à medida que o solo saturado cede lentamente.
    </Warning>

    <H2 id="por-que-2026">Por que 2026 tem sido um ano tão ativo para tufões</H2>

    <P>
      O ano de 2026 vem consolidando uma tendência preocupante para os cientistas: tufões cada vez
      mais fortes, mais rápidos em se intensificar e mais lentos em se dissipar depois do landfall.
      Estudos do Instituto de Física Atmosférica da Academia Chinesa de Ciências mostram que a
      energia acumulada dos ciclones tropicais (ACE, na sigla em inglês) na bacia do Pacífico Oeste
      já supera a média 1991-2020 em 42% neste ano.
    </P>

    <P>
      A explicação passa por três pilares que se reforçam mutuamente. O primeiro é a persistência
      de condições semelhantes ao El Niño residual, que aquece o Pacífico central e realoca as
      zonas de convecção. O segundo é o aquecimento das camadas mais profundas do oceano, que
      impede o "resfriamento por mistura" que normalmente enfraqueceria um tufão. O terceiro é o
      enfraquecimento do jato subtropical, permitindo que os sistemas migrem mais para o norte e
      atinjam regiões historicamente menos expostas.
    </P>

    <PullQuote author="Prof. Kelvin Ng, meteorologista tropical do Observatório de Hong Kong (fala pública em coletiva, junho de 2026)">
      Estamos vendo tufões que se comportam como se estivessem em esteroides climáticos. O Maysak é
      o retrato do que provavelmente será a normalidade nas próximas décadas se o aquecimento
      oceânico continuar no ritmo atual.
    </PullQuote>

    <H2 id="comparacoes">Comparações históricas: onde Maysak se encaixa</H2>

    <DataTable
      caption="Comparativo simplificado entre tufões memoráveis que atingiram a China nas últimas décadas."
      headers={['Tufão', 'Ano', 'Ventos máximos', 'Mortes', 'Prejuízos (US$)']}
      rows={[
        ['Rammasun', 2014, '260 km/h', '225', '8,1 bi'],
        ['Meranti', 2016, '305 km/h', '47', '4,8 bi'],
        ['Lekima', 2019, '215 km/h', '105', '9,3 bi'],
        ['In-Fa', 2021, '155 km/h', '6', '2,1 bi'],
        ['Doksuri', 2023, '240 km/h', '137', '28,7 bi'],
        ['Maysak', 2026, '240 km/h', '128 (parcial)', '8,0 bi (preliminar)'],
      ]}
    />

    <P>
      Embora os ventos máximos de Maysak não sejam os mais altos da série histórica, o combinado
      entre velocidade dos ventos, volume de chuva concentrada e localização do landfall — em uma
      das regiões mais densamente povoadas e industrializadas do planeta — coloca o evento entre
      os cinco tufões chineses mais custosos da história moderna.
    </P>

    <H2 id="como-se-proteger">Como se proteger de tufões, furacões e ciclones tropicais</H2>

    <P>
      Se você vive ou viaja para regiões vulneráveis a tufões (China, Japão, Coreia, Taiwan,
      Filipinas, Vietnã), ciclones (Índia, Bangladesh, Austrália, Moçambique) ou furacões (Golfo do
      México, Caribe, sudeste dos EUA), um plano de emergência simples pode fazer diferença entre
      a vida e a morte. As orientações abaixo seguem o padrão da Federação Internacional da Cruz
      Vermelha e do Departamento de Segurança Interna dos EUA (FEMA).
    </P>

    <H3>Antes do tufão chegar</H3>

    <Checklist
      items={[
        'Monte um kit de emergência: água (4 litros por pessoa/dia por 3 dias), alimentos não perecíveis, lanterna, rádio a pilha, bateria portátil, documentos em saco plástico.',
        'Cheque previsões oficiais duas vezes ao dia com pelo menos 72 horas de antecedência.',
        'Reforce janelas com fitas em X ou instale persianas anti-tempestade; retire objetos soltos das áreas externas.',
        'Identifique o abrigo público mais próximo e uma rota alternativa em caso de bloqueio da via principal.',
        'Combine com familiares um ponto de encontro e um contato "fora da região" para servir de central de mensagens.',
        'Faça reserva de medicamentos essenciais para pelo menos 7 dias.',
      ]}
    />

    <H3>Durante a passagem</H3>

    <Warning title="Cuidado com o "falso alívio" do olho do tufão">
      Quando o olho passa, o vento cessa por 20 a 60 minutos e o céu pode até abrir. É um engano
      perigoso: os ventos retornam do lado oposto com a mesma força ou maior. Nunca saia de casa
      nesse intervalo, mesmo que pareça seguro.
    </Warning>

    <Checklist
      items={[
        'Permaneça no cômodo mais interno da casa, longe de janelas e vidros.',
        'Desligue disjuntores e feche o registro de gás.',
        'Não use elevador; se estiver em prédio alto, prefira andares intermediários.',
        'Evite tomar banho durante raios (a água conduz eletricidade pela tubulação).',
        'Se estiver ao ar livre e não conseguir chegar a um abrigo, procure depressões no terreno afastadas de árvores e postes.',
      ]}
    />

    <H3>Depois do tufão</H3>

    <Checklist
      items={[
        'Só retorne para casa após liberação oficial da Defesa Civil.',
        'Desconfie de fios caídos: considere-os energizados até prova em contrário.',
        'Não caminhe em áreas alagadas — 15 cm de água em movimento derrubam um adulto.',
        'Fotografe todos os danos antes da limpeza (útil para seguros e programas de assistência).',
        'Vacine-se contra tétano se houver ferimentos; procure abrigo hospitalar em caso de sintomas respiratórios ou febre.',
      ]}
    />

    <H2 id="apps-monitoramento">Melhores aplicativos de monitoramento climático em tempo real</H2>

    <P>
      Acompanhar a evolução de um tufão em tempo real deixou de ser privilégio de meteorologistas.
      Hoje qualquer smartphone permite acesso a modelos numéricos, imagens de satélite e alertas
      oficiais. Nossa recomendação combina uma leitura oficial, uma leitura visual e uma leitura
      técnica.
    </P>

    <DataTable
      caption="Seleção de apps recomendados pela nossa equipe editorial para monitoramento de eventos extremos em 2026."
      headers={['App', 'Melhor para', 'Sistema', 'Custo']}
      rows={[
        ['Windy', 'Visualização de modelos ECMWF, GFS, ICON', 'iOS/Android/Web', 'Grátis + premium'],
        ['AccuWeather', 'Alertas locais e MinuteCast', 'iOS/Android', 'Grátis com anúncios'],
        ['Climatempo', 'Previsão pt-BR e alertas de raios', 'iOS/Android', 'Grátis + premium'],
        ['INMET Alerta', 'Alertas meteorológicos oficiais do Brasil', 'iOS/Android', 'Gratuito'],
        ['Zoom Earth', 'Imagens de satélite em quase tempo real', 'Web', 'Gratuito'],
        ['Tropical Tidbits', 'Análise técnica de ciclones tropicais', 'Web', 'Gratuito'],
      ]}
    />

    <H2 id="brasil-conexao">Existe risco de tufões chegarem ao Brasil?</H2>

    <P>
      A resposta curta é não. Tufões, por definição, ocorrem apenas no Pacífico Ocidental. O
      Atlântico Sul, onde o Brasil se localiza, historicamente é considerado inóspito para
      furacões e ciclones tropicais por causa do cisalhamento elevado dos ventos e das temperaturas
      da superfície do mar mais baixas do que no Hemisfério Norte. A grande exceção foi o Furacão
      Catarina, em 2004, que atingiu Santa Catarina.
    </P>

    <P>
      No entanto, o aquecimento acelerado do Atlântico Sul, combinado a padrões atmosféricos
      alterados por eventos como o El Niño, tem levado pesquisadores da{' '}
      <ExternalLink href="https://portal.inmet.gov.br/">
        INMET
      </ExternalLink>{' '}
      e do{' '}
      <ExternalLink href="https://www.cptec.inpe.br/">CPTEC/INPE</ExternalLink>{' '}
      a acompanhar de perto o comportamento de sistemas subtropicais que podem, em condições
      específicas, adquirir características tropicais. Além disso, ciclones extratropicais — os
      chamados "ciclones bomba" — têm produzido ventos de até 130 km/h em episódios recentes no Sul
      do país.
    </P>

    <P>
      Para entender melhor o cenário brasileiro, veja também:{' '}
      <InternalLink to="/blog/segundo-maior-corredor-tornados-brasil">
        Segundo maior corredor de tornados do mundo fica no Brasil
      </InternalLink>{' '}
      e{' '}
      <InternalLink to="/blog/super-el-nino-2026">Super El Niño 2026: impactos globais</InternalLink>.
    </P>

    <H2 id="dicas-conforto">Dicas de conforto térmico e cuidados durante longos períodos de chuva</H2>

    <P>
      Períodos prolongados de chuva torrencial e alta umidade — como os que seguiram o Maysak —
      afetam diretamente o conforto térmico e a saúde. Umidade relativa acima de 80% dificulta a
      transpiração e provoca sensação de calor mesmo em temperaturas amenas. Alguns cuidados
      simples podem ajudar.
    </P>

    <Checklist
      items={[
        'Mantenha o ambiente ventilado durante intervalos sem chuva para reduzir mofo.',
        'Use desumidificadores ou ar-condicionado no modo "dry" para tirar excesso de umidade.',
        'Prefira roupas de algodão, linho ou tecidos técnicos de secagem rápida.',
        'Hidrate-se mesmo sem sentir sede; o suor evapora menos e engana o organismo.',
        'Proteja documentos, eletrônicos e alimentos em recipientes herméticos.',
        'Verifique diariamente os pés e dobras da pele: micoses aumentam muito em ambientes úmidos.',
      ]}
    />

    <Highlight title="Dica de especialista">
      Se você mora em apartamento sem varanda coberta, seque roupas em ambiente com desumidificador
      ou próximo a uma fonte de circulação de ar. Roupas úmidas dentro de casa aumentam a umidade
      em até 20% e favorecem alergias respiratórias.
    </Highlight>

    <H2 id="ciclos-climaticos">Ciclos climáticos explicados: por que os tufões acontecem mais entre junho e outubro</H2>

    <P>
      A temporada oficial de tufões no Pacífico Oeste vai de 1º de maio a 30 de novembro, com pico
      claro entre agosto e outubro. Esse padrão está diretamente ligado ao ciclo anual de
      aquecimento dos oceanos: durante o verão do Hemisfério Norte, a superfície do mar acumula
      calor suficiente (acima de 26,5 °C nos primeiros 50 metros) para sustentar sistemas
      tropicais. À medida que o outono avança, a superfície esfria e a atividade diminui, embora
      tufões tardios em novembro sejam cada vez mais comuns.
    </P>

    <P>
      Do lado brasileiro, o hemisfério sul tem sua estação de instabilidade com pico entre outubro
      e março, marcada por linhas de instabilidade na Amazônia, sistemas convectivos de mesoescala
      no Sul e Sudeste, e ciclones extratropicais no Atlântico Sul. É por isso que 2026 exige um
      olhar global: enquanto o Pacífico enfrenta seus tufões, o Sul do Brasil vem lidando com
      ciclones bomba e enchentes urbanas graves.
    </P>

    <H2 id="alertas-oficiais">Alertas governamentais e onde buscar informações confiáveis</H2>

    <Checklist
      items={[
        'CMA (China Meteorological Administration): boletins oficiais em cma.cn.',
        'JMA (Japan Meteorological Agency): jma.go.jp/en, referência para o Pacífico Norte.',
        'Joint Typhoon Warning Center (JTWC): metoc.navy.mil/jtwc, para análises técnicas.',
        'NOAA e National Hurricane Center: nhc.noaa.gov.',
        'ReliefWeb: reliefweb.int, para ações humanitárias em curso.',
        'Defesa Civil Brasileira: 199, para ocorrências no território nacional.',
      ]}
    />

    <FAQ
      items={[
        {
          q: 'Qual foi a categoria máxima do Tufão Maysak 2026?',
          a: 'No pico, o Maysak alcançou o equivalente à categoria 5 na escala Saffir-Simpson, com ventos sustentados de 240 km/h e rajadas próximas a 285 km/h.',
        },
        {
          q: 'Quantas pessoas foram evacuadas?',
          a: 'Segundo o Ministério de Gestão de Emergências da China, mais de 1,2 milhão de pessoas foram evacuadas preventivamente das províncias de Zhejiang, Fujian e Jiangsu.',
        },
        {
          q: 'O Tufão Maysak pode atingir o Brasil?',
          a: 'Não. Tufões ocorrem exclusivamente no Pacífico Oeste. O Brasil está sujeito a ciclones extratropicais, tempestades e, muito raramente, sistemas subtropicais no Atlântico Sul.',
        },
        {
          q: 'Qual a diferença entre tufão, furacão e ciclone?',
          a: 'É o mesmo fenômeno — ciclone tropical — com nomes diferentes conforme a região: tufão no Pacífico Oeste, furacão no Atlântico e Pacífico Leste, e ciclone tropical no Índico e Hemisfério Sul.',
        },
        {
          q: 'Como o aquecimento global influencia os tufões?',
          a: 'Aumenta a temperatura da superfície do mar, o que fornece mais energia, favorece intensificação rápida e eleva o volume de chuva. Não muda tanto o número de tufões, mas amplia sua intensidade.',
        },
        {
          q: 'Quais os melhores apps para acompanhar tufões em tempo real?',
          a: 'Windy, Zoom Earth, AccuWeather e Tropical Tidbits são os mais completos. No Brasil, INMET Alerta e Climatempo cobrem ciclones extratropicais e chuvas fortes.',
        },
        {
          q: 'O que fazer se um tufão atingir a região onde estou viajando?',
          a: 'Siga as orientações da defesa civil local, permaneça em abrigo seguro, mantenha documentos e um kit de emergência à mão e evite deslocamentos até liberação oficial das autoridades.',
        },
        {
          q: 'Onde encontrar dados históricos de tufões?',
          a: 'A base IBTrACS, mantida pela NOAA, é a referência global. Ela reúne registros desde o século XIX e é utilizada por institutos de pesquisa e universidades no mundo todo.',
        },
      ]}
    />
  </>
);

export const OndaFrioPolarArticle: React.FC<{ midImage: string }> = ({ midImage }) => (
  <>
    <Lead>
      A onda de frio polar de julho de 2026 é considerada a mais intensa a atingir a América do Sul
      desde 2013, com uma massa de ar antártica que atravessou o Sul do Brasil, subiu pelo Sudeste,
      atingiu o Centro-Oeste e até derrubou temperaturas na Amazônia — episódio conhecido
      popularmente como "friagem". Cidades da Serra Catarinense registraram −9 °C, com neve em ao
      menos 43 municípios do Rio Grande do Sul, Santa Catarina e Paraná.
    </Lead>

    <P>
      A entrada desse ar frio deveu-se a um bloqueio atmosférico raro sobre o sul do Chile, que
      desviou o jato polar em direção à América do Sul e permitiu que uma massa polar continental de
      origem antártica avançasse por milhares de quilômetros sem se descaracterizar. Segundo o{' '}
      <ExternalLink href="https://www.cptec.inpe.br/">CPTEC/INPE</ExternalLink>, o gradiente
      térmico entre o interior do continente e o Atlântico Sul chegou a valores próximos aos
      observados em invernos extremos do início dos anos 1990.
    </P>

    <P>
      Neste guia completo, você entende o que causou a onda de frio polar antártica de 2026, quais
      cidades foram mais afetadas, como se proteger, quais aplicativos usar para monitoramento em
      tempo real, dados históricos comparativos e o que esperar para o restante do inverno austral.
    </P>

    <InfoBox title="Resumo rápido para quem tem pressa">
      Massa de ar polar antártica derrubou temperaturas em 12 estados brasileiros; neve em 43
      cidades do Sul; −9 °C em Urupema (SC); friagem chegou até Rondônia com mínimas de 10 °C;
      geada agrícola causou perdas em soja, café e trigo; alertas do INMET permanecem para novas
      incursões frias em agosto de 2026.
    </InfoBox>

    <H2 id="o-que-e-onda-de-frio">O que é uma onda de frio polar antártica</H2>

    <P>
      Do ponto de vista meteorológico, uma "onda de frio" é caracterizada quando as temperaturas de
      uma região caem pelo menos 5 °C abaixo da média climatológica local por três dias
      consecutivos ou mais. Quando a massa de ar responsável tem origem polar antártica — ou seja,
      formou-se sobre o continente gelado do Polo Sul e conseguiu atravessar o Atlântico ou o
      continente sul-americano sem se aquecer significativamente — chamamos de "onda de frio polar
      antártica".
    </P>

    <P>
      Essas incursões dependem de uma combinação delicada de fatores: alta pressão persistente no
      Pacífico Sul, jato polar deslocado para latitudes mais baixas, ausência de bloqueio
      atmosférico no norte da Argentina e uma frente fria bem organizada empurrando o ar quente
      tropical para fora do caminho. Quando tudo se alinha, o resultado é o que vimos em julho de
      2026: geadas até no Cerrado, neve no Sul e queda abrupta de temperatura no Sudeste em menos
      de 48 horas.
    </P>

    <H3>Diferença entre friagem, onda de frio e vórtice polar</H3>

    <DataTable
      headers={['Termo', 'O que significa', 'Onde ocorre com mais frequência']}
      rows={[
        ['Friagem', 'Entrada rápida de ar frio na Amazônia, causada por massa polar', 'Rondônia, Acre, sul do Amazonas'],
        ['Onda de frio', 'Queda persistente e generalizada de temperatura por 3+ dias', 'Sul, Sudeste, Centro-Oeste do Brasil'],
        ['Vórtice polar', 'Sistema circulatório permanente sobre os polos que ocasionalmente se enfraquece', 'Hemisférios Norte e Sul'],
        ['Ciclone extratropical', 'Sistema de baixa pressão em latitudes médias', 'Atlântico Sul, Sul do Brasil, Uruguai'],
      ]}
    />

    <H2 id="dados-2026">Números da onda de frio polar de 2026</H2>

    <P>
      As estações meteorológicas oficiais registraram valores impressionantes entre os dias 26 de
      junho e 3 de julho de 2026. Alguns destaques compilados a partir de dados preliminares do{' '}
      <ExternalLink href="https://portal.inmet.gov.br/">INMET</ExternalLink>{' '}
      e das defesas civis estaduais:
    </P>

    <DataTable
      caption="Temperaturas mínimas absolutas registradas durante o pico da onda de frio de 2026."
      headers={['Cidade', 'Estado', 'Mínima registrada', 'Fenômenos associados']}
      rows={[
        ['Urupema', 'SC', '−9,0 °C', 'Neve, granizo e formação de icicles'],
        ['São Joaquim', 'SC', '−7,4 °C', 'Neve moderada, ruas cobertas'],
        ['Bom Jesus', 'RS', '−6,8 °C', 'Neve e geada negra'],
        ['Palmas', 'PR', '−5,9 °C', 'Neve leve, forte geada'],
        ['Poços de Caldas', 'MG', '0,8 °C', 'Geada em regiões rurais'],
        ['São Paulo', 'SP', '5,2 °C', 'Menor mínima em julho desde 2016'],
        ['Brasília', 'DF', '6,5 °C', 'Sensação térmica próxima de 2 °C ao amanhecer'],
        ['Porto Velho', 'RO', '10,2 °C', 'Episódio clássico de "friagem"'],
      ]}
    />

    <img
      src={midImage}
      alt="Vegetação e pastagem cobertas por geada intensa ao amanhecer no Sul do Brasil durante onda de frio polar de 2026"
      loading="lazy"
      width={1200}
      height={900}
      className="my-8 w-full rounded-xl shadow-xl border border-slate-200"
    />

    <H2 id="por-que-2026">Por que a onda de frio de 2026 foi tão intensa</H2>

    <P>
      Especialistas apontam três fatores principais para explicar a intensidade do episódio. O
      primeiro é o enfraquecimento temporário do vórtice polar antártico, que permitiu o
      "extravasamento" de ar frio em direção às latitudes médias. O segundo é a formação de um
      bloqueio anticiclônico sobre o Pacífico Sudeste, que "canalizou" o ar frio para dentro do
      continente sul-americano. O terceiro é o aquecimento anormal do Atlântico Sul, que ampliou o
      contraste térmico e organizou frentes frias mais vigorosas.
    </P>

    <PullQuote author="Dra. Marina Hirota, climatologista da UFSC (declaração em coletiva à imprensa, junho de 2026)">
      Ondas de frio como a de 2026 não contradizem o aquecimento global. Ao contrário: um clima
      mais desregulado favorece extremos em ambas as pontas — calor recorde no verão e episódios
      polares intensos no inverno.
    </PullQuote>

    <H2 id="impactos">Impactos sociais, econômicos e agrícolas</H2>

    <H3>Saúde pública</H3>

    <P>
      Ondas de frio são responsáveis por picos de internações por doenças respiratórias (asma,
      bronquite, pneumonia), problemas cardiovasculares (infartos e AVCs) e agravamento de quadros
      de hipotermia entre idosos, crianças e população em situação de rua. Em 2026, a rede pública
      de saúde do Sul do Brasil registrou aumento de 34% nas internações por causas
      cardiorrespiratórias na primeira semana do frio, segundo dados divulgados pelas secretarias
      estaduais.
    </P>

    <Warning title="Atenção redobrada com quem mora nas ruas">
      Prefeituras de Porto Alegre, Curitiba e São Paulo ampliaram vagas de acolhimento noturno.
      Ligue 156 (canal municipal) ou 199 (Defesa Civil) para acionar equipes de abordagem caso
      encontre pessoas em situação de vulnerabilidade durante o frio extremo.
    </Warning>

    <H3>Agricultura e pecuária</H3>

    <P>
      Ondas de frio polar causam prejuízos bilionários à agricultura brasileira quando atingem
      áreas produtoras de café, laranja, cana-de-açúcar, trigo, soja e olerícolas. A geada "negra"
      é especialmente devastadora: ao contrário da geada branca, ela ocorre quando a umidade do ar
      é muito baixa, e as células vegetais rompem sem formar cristais visíveis. Áreas cafeeiras
      do sul de Minas e do Paraná já reportaram danos parciais em lavouras jovens.
    </P>

    <H3>Energia</H3>

    <P>
      A demanda por energia elétrica bate recordes, especialmente para aquecimento residencial. O
      Operador Nacional do Sistema Elétrico (ONS) registrou pico histórico para julho durante o
      auge da onda de frio, com aumento de 22% no consumo residencial no Sul e Sudeste. A margem
      operacional permaneceu segura, mas o episódio reforçou a importância de reservatórios
      cheios e de diversificação da matriz.
    </P>

    <H2 id="como-se-proteger">Como se proteger do frio extremo</H2>

    <H3>Em casa</H3>

    <Checklist
      items={[
        'Vede frestas de portas e janelas com fita adesiva ou tiras de espuma.',
        'Use cortinas grossas fechadas à noite para reduzir perda de calor.',
        'Prefira roupas em várias camadas finas em vez de uma peça muito grossa.',
        'Mantenha ambientes ventilados por pelo menos 10 minutos por dia para evitar mofo e monóxido de carbono.',
        'Nunca use fogão a gás ou churrasqueira dentro de casa para aquecer o ambiente — risco fatal de intoxicação.',
        'Se possível, mantenha um cômodo aquecido central para dormir com toda a família.',
      ]}
    />

    <H3>Cuidados com idosos, crianças e pets</H3>

    <Checklist
      items={[
        'Idosos: hidratação constante, mesmo sem sede; roupas quentes ao dormir; monitoramento da pressão arterial.',
        'Crianças: gorro cobrindo as orelhas; luvas em atividades ao ar livre; verificação frequente das mãos e pés.',
        'Recém-nascidos: touca, luvas e meias mesmo dentro de casa; berço afastado de janelas frias.',
        'Cães e gatos: cobertas no local de dormir; passeios em horários mais quentes; roupinha para raças de pelo curto.',
        'Animais de rua: deixe caixas de papelão forradas com pano em áreas cobertas.',
      ]}
    />

    <Highlight title="Sinais de alerta para hipotermia">
      Tremor incontrolável, sonolência, fala arrastada, pele muito fria e pálida, confusão mental.
      Ao suspeitar de hipotermia, aqueça a pessoa gradualmente, ofereça líquidos mornos (nunca
      álcool) e procure atendimento médico imediato. Ligue 192 (SAMU) em emergências.
    </Highlight>

    <H3>No trânsito</H3>

    <Checklist
      items={[
        'Neblina densa: use farol baixo, mantenha distância e reduza velocidade.',
        'Geada na pista: freie suavemente, evite manobras bruscas, prefira marcha reduzida em descidas.',
        'Neve/gelo: correntes nos pneus quando exigido; siga rigorosamente orientação da PRF.',
        'Verifique baterias, pneus e óleo do motor antes de viagens longas.',
      ]}
    />

    <H2 id="apps">Melhores aplicativos de monitoramento para ondas de frio</H2>

    <DataTable
      caption="Aplicativos recomendados para acompanhar temperaturas, alertas e evolução de massas polares em 2026."
      headers={['App', 'Melhor para', 'Sistema', 'Custo']}
      rows={[
        ['INMET Alerta', 'Alertas oficiais e boletins do Instituto Nacional de Meteorologia', 'iOS/Android', 'Grátis'],
        ['Climatempo', 'Previsão localizada em português com alertas de geada', 'iOS/Android', 'Grátis + premium'],
        ['AccuWeather', 'Alertas de frio e MinuteCast', 'iOS/Android', 'Grátis'],
        ['Windy', 'Modelos globais, isotermas e imagens de satélite', 'iOS/Android/Web', 'Grátis + premium'],
        ['MetSul Meteorologia', 'Especializado no Sul do Brasil, alertas de neve', 'iOS/Android/Web', 'Grátis'],
        ['SkyAlert', 'Alertas por localização em tempo real', 'iOS/Android', 'Grátis'],
      ]}
    />

    <H2 id="dicas-conforto">Dicas de conforto térmico para dias muito frios</H2>

    <Checklist
      items={[
        'Comece o dia com uma bebida quente para estimular a termorregulação.',
        'Use meias térmicas em vez de várias meias comuns; a segunda camada aperta e piora a circulação.',
        'Consuma alimentos calóricos com boa proporção de proteínas — o corpo gasta mais energia no frio.',
        'Hidrate a pele com creme espesso: o ressecamento acelera perda de calor.',
        'Aqueça a cama antes de dormir com bolsa de água quente por 10 minutos, depois retire.',
        'Prefira exercícios físicos indoor no pico do frio; se sair, respire pelo nariz e proteja mãos e cabeça.',
      ]}
    />

    <H2 id="ciclos">Ciclos climáticos: por que 2026 é diferente</H2>

    <P>
      2026 é um ano de transição climática peculiar: o El Niño de 2025-26 está enfraquecendo e há
      sinais crescentes de que uma La Niña pode se estabelecer entre agosto e outubro. La Niñas
      historicamente favorecem invernos mais rigorosos no Sul do Brasil, com maior frequência de
      massas polares. Combine isso ao aquecimento do Atlântico Sul e ao enfraquecimento intermitente
      do vórtice polar, e temos o "cenário perfeito" para mais um evento intenso ainda em 2026.
    </P>

    <P>
      Para aprofundar, consulte também:{' '}
      <InternalLink to="/blog/super-el-nino-2026">Super El Niño 2026</InternalLink>{' '}
      e{' '}
      <InternalLink to="/blog/gelo-marinho-artico-minimo-historico-2026">
        Gelo marinho do Ártico bate mínimo histórico em 2026
      </InternalLink>.
    </P>

    <H2 id="historicos">Dados históricos: as maiores ondas de frio do Brasil</H2>

    <DataTable
      caption="Ondas de frio memoráveis no Brasil e recordes históricos de temperatura."
      headers={['Ano', 'Evento', 'Mínima destacada', 'Impactos']}
      rows={[
        [1975, 'Geada Negra', '−7 °C em Palmas (PR)', 'Devastação total da cafeicultura paranaense'],
        [1994, 'Grande onda de frio', '−8,4 °C em Caçador (SC)', 'Neve em Curitiba, morte de gado'],
        [2000, 'Nevasca de julho', '−8 °C em São Joaquim', 'Neve espessa em 5 estados'],
        [2013, 'Massa polar intensa', '−7,8 °C em Urupema', 'Prejuízos agrícolas bilionários'],
        [2021, 'Onda de frio + geada', '−4,6 °C em Bom Jesus (RS)', 'Perdas em café e laranja'],
        [2026, 'Onda polar antártica', '−9,0 °C em Urupema (SC)', 'Neve em 43 cidades, friagem até RO'],
      ]}
    />

    <H2 id="alertas-oficiais">Alertas oficiais e onde buscar informação confiável</H2>

    <Checklist
      items={[
        'INMET: portal.inmet.gov.br — boletins meteorológicos oficiais.',
        'CPTEC/INPE: cptec.inpe.br — previsão numérica de alta resolução.',
        'Defesa Civil Nacional: 199 (24 horas).',
        'Ministério da Saúde: campanhas de vacinação da gripe e apoio a grupos vulneráveis.',
        'ONS: ons.org.br — dados de demanda energética durante eventos extremos.',
        'NOAA/NASA: climate.gov e nasa.gov/earth — contexto climático global.',
      ]}
    />

    <FAQ
      items={[
        {
          q: 'Qual foi a menor temperatura registrada durante a onda de frio de 2026?',
          a: 'Até o momento, o menor valor oficial é de −9,0 °C em Urupema (SC), no dia 30 de junho de 2026.',
        },
        {
          q: 'Nevou em quais cidades brasileiras em 2026?',
          a: 'Ao menos 43 municípios registraram neve, principalmente na Serra Catarinense, Campos Gerais do Paraná e Serra Gaúcha, com destaque para São Joaquim, Urupema, Bom Jesus, Cambará do Sul e Palmas.',
        },
        {
          q: 'Uma onda de frio contradiz o aquecimento global?',
          a: 'Não. O aquecimento global aumenta a variabilidade climática, favorecendo eventos extremos em ambas as pontas — mais calor recorde e episódios pontuais de frio intenso quando o vórtice polar se enfraquece.',
        },
        {
          q: 'A friagem na Amazônia é comum?',
          a: 'Sim. Ocorre normalmente entre maio e agosto, quando massas polares atravessam o Brasil e atingem Acre, Rondônia e sul do Amazonas, derrubando temperaturas em até 15 °C em poucas horas.',
        },
        {
          q: 'Como proteger plantas e hortas da geada?',
          a: 'Cubra com sombrite ou lona à noite, regue as raízes no fim da tarde (a evaporação libera calor), evite podas antes do frio e prefira plantas resistentes se você mora em áreas historicamente afetadas.',
        },
        {
          q: 'Quais os melhores apps para acompanhar ondas de frio?',
          a: 'INMET Alerta, Climatempo, MetSul Meteorologia, Windy e AccuWeather são as opções mais confiáveis para o Brasil em 2026.',
        },
        {
          q: 'Ondas de frio podem voltar em agosto e setembro?',
          a: 'Sim. Historicamente, agosto ainda registra incursões polares importantes, e setembro pode trazer eventos residuais. Modelos indicam pelo menos duas novas incursões frias até setembro de 2026.',
        },
        {
          q: 'O que fazer se faltar energia elétrica durante o frio extremo?',
          a: 'Reúna a família em um único cômodo bem vedado, use várias camadas de roupa e cobertores, mantenha alimentos calóricos e água à mão, e nunca utilize fogo aberto ou fogão para aquecer o ambiente fechado.',
        },
      ]}
    />
  </>
);
