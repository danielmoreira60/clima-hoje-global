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

/* ==========================================================================
   ARTIGO 1: Terremoto na Colômbia de magnitude 7,4 (2026)
   ========================================================================== */
export const TerremotoColombiaArticle: React.FC<{ midImage: string }> = ({ midImage }) => (
  <>
    <Lead>
      O <strong>terremoto na Colômbia de magnitude 7,4</strong> registrado em agosto de 2026 é o
      sismo mais forte sentido no país na última década. O tremor sacudiu o noroeste dos Andes
      colombianos, foi percebido em Bogotá, Medellín, Cali e Bucaramanga, chegou ao litoral
      venezuelano e ao Panamá, e reabriu a discussão mais importante da geologia sul-americana:
      o que exatamente está acontecendo na borda entre as placas de Nazca, do Caribe e
      Sul-Americana — e como as famílias podem se preparar antes do próximo evento.
    </Lead>

    <P>
      Terremotos não avisam. Mas eles têm endereço. E o endereço da Colômbia é um dos mais
      complexos do planeta: três placas tectônicas se encontram em um espaço geográfico
      relativamente pequeno, empurrando, raspando e mergulhando umas sob as outras a poucos
      centímetros por ano. Esse movimento aparentemente lento acumula energia elástica por
      décadas. Quando a rocha rompe, a energia é liberada em segundos.
    </P>

    <Highlight title="Resumo rápido do evento">
      Magnitude 7,4 na escala de magnitude de momento (Mw) · profundidade intermediária ·
      epicentro na região andina do noroeste colombiano · tremor sentido em mais de 15
      departamentos, além de Venezuela, Equador e Panamá · alerta emitido pelo Servicio
      Geológico Colombiano e boletim internacional do USGS · centenas de réplicas nas
      primeiras 72 horas.
    </Highlight>

    <H2 id="o-que-aconteceu">O que aconteceu: anatomia de um sismo de magnitude 7,4</H2>

    <P>
      A magnitude 7,4 coloca esse terremoto na categoria de <strong>sismo maior</strong> (major
      earthquake), segundo a classificação usada por serviços geológicos como o USGS. Para efeito
      de comparação, cada ponto inteiro na escala de momento representa cerca de 32 vezes mais
      energia liberada. Um evento 7,4 libera aproximadamente 45 vezes mais energia do que um
      6,4 — e mais de 1.400 vezes a energia de um 5,4, o tipo de tremor que a Colômbia sente
      várias vezes por ano sem grandes consequências.
    </P>

    <P>
      A diferença entre um sismo destrutivo e um sismo apenas assustador não está só na
      magnitude. Está em quatro variáveis que os sismólogos analisam juntas:
    </P>

    <ol className="my-6 space-y-3 list-decimal pl-6 text-slate-700 leading-relaxed">
      <li><strong>Profundidade do hipocentro.</strong> Sismos rasos (menos de 70 km) sacodem muito mais a superfície. Sismos intermediários (70 a 300 km) atingem uma área maior, porém com intensidade mais diluída.</li>
      <li><strong>Distância epicentral.</strong> A energia decai rapidamente com a distância, mas bacias sedimentares podem amplificar as ondas.</li>
      <li><strong>Tipo de solo.</strong> Solo mole amplifica; rocha firme atenua. É por isso que dois bairros da mesma cidade sentem o mesmo terremoto de formas diferentes.</li>
      <li><strong>Qualidade construtiva.</strong> Terremotos não matam pessoas; edifícios mal construídos matam pessoas. É a frase mais repetida — e mais verdadeira — da engenharia sísmica.</li>
    </ol>

    <H3>Por que o tremor foi sentido tão longe</H3>

    <P>
      Quando o hipocentro é intermediário, as ondas sísmicas viajam por rochas mais densas e
      perdem menos energia no caminho. Isso explica relatos consistentes de balanço de prédios
      altos em Bogotá e Medellín, luminárias oscilando na Venezuela e sensação de tontura
      relatada por moradores em cidades a mais de 500 km do epicentro. Prédios altos funcionam
      como pêndulos invertidos: eles respondem melhor a ondas longas e lentas, exatamente as
      que sobrevivem a distâncias maiores.
    </P>

    <img
      src={midImage}
      alt="Sismólogos monitoram sismogramas do terremoto na Colômbia de magnitude 7,4 em centro de monitoramento sísmico"
      loading="lazy"
      width={1536}
      height={864}
      className="w-full rounded-xl shadow-lg my-10"
    />

    <H2 id="onde-foi">Onde foi: a geologia do noroeste colombiano</H2>

    <P>
      A Colômbia está sentada sobre uma junção tripla. A <strong>placa de Nazca</strong> mergulha
      por baixo da América do Sul no processo chamado subducção, gerando a cordilheira dos Andes
      e a cadeia de vulcões do eixo cafeeiro. Ao norte, a <strong>placa do Caribe</strong> desliza
      lateralmente contra o continente, produzindo grandes falhas transcorrentes. E, no interior
      do país, um mosaico de falhas ativas — como o sistema de falhas de Romeral e a falha
      frontal da Cordilheira Oriental — distribui essa tensão por centenas de quilômetros.
    </P>

    <InfoBox title="O que é o 'Nido Sísmico de Bucaramanga'">
      É uma das regiões sismicamente mais ativas e enigmáticas do mundo: um volume relativamente
      pequeno de crosta, entre 140 e 160 km de profundidade, que produz milhares de tremores por
      ano. Nenhum outro lugar do planeta concentra tantos sismos em tão pouco espaço. A hipótese
      mais aceita envolve a interação entre fragmentos de placas subductadas em ângulos
      diferentes — literalmente um nó tectônico.
    </InfoBox>

    <H3>Onde o risco é maior dentro da Colômbia</H3>

    <DataTable
      headers={['Região', 'Fonte sísmica dominante', 'Nível de ameaça', 'Observação']}
      rows={[
        ['Eixo cafeeiro (Armênia, Pereira, Manizales)', 'Falhas superficiais de Romeral', 'Alta', 'Sismos rasos e muito destrutivos'],
        ['Santander / Bucaramanga', 'Nido sísmico profundo', 'Intermediária a alta', 'Frequência altíssima, danos moderados'],
        ['Pacífico (Tumaco, Buenaventura)', 'Subducção de Nazca', 'Muito alta', 'Único trecho com risco real de tsunami'],
        ['Bogotá e Cordilheira Oriental', 'Falha frontal ativa', 'Alta', 'Solo de antigo lago amplifica ondas'],
        ['Caribe (Barranquilla, Cartagena)', 'Borda da placa do Caribe', 'Moderada', 'Menor frequência, maior distância'],
      ]}
      caption="Panorama simplificado das principais fontes sísmicas da Colômbia."
    />

    <H2 id="historico">Dados históricos de terremotos na Colômbia</H2>

    <P>
      Para entender o presente, é obrigatório olhar o registro histórico. A Colômbia acumula uma
      série de eventos que moldaram sua legislação de construção e sua cultura de prevenção.
    </P>

    <DataTable
      headers={['Ano', 'Evento', 'Magnitude aprox.', 'Legado']}
      rows={[
        ['1906', 'Equador–Colômbia (costa do Pacífico)', '8,8', 'Um dos maiores já registrados no mundo; gerou tsunami'],
        ['1979', 'Tumaco', '8,1', 'Tsunami no litoral do Pacífico colombiano'],
        ['1983', 'Popayán', '5,5', 'Baixa magnitude, alta destruição; nasce o primeiro código sísmico'],
        ['1994', 'Páez (Cauca)', '6,8', 'Deslizamentos catastróficos e avalanche de lama'],
        ['1999', 'Armênia (eixo cafeeiro)', '6,2', 'Marco moderno da engenharia sísmica colombiana'],
        ['2026', 'Noroeste andino', '7,4', 'O mais forte da última década'],
      ]}
      caption="Comparação histórica de grandes sismos na Colômbia. Fontes: registros do Servicio Geológico Colombiano e catálogo do USGS."
    />

    <PullQuote author="Princípio central da engenharia sísmica moderna">
      Popayán, em 1983, provou com apenas 5,5 de magnitude que o que destrói uma cidade não é o
      número na escala — é a combinação de profundidade rasa, solo ruim e construção frágil.
    </PullQuote>

    <H2 id="como-se-proteger">Como se proteger de um terremoto: guia prático em 3 fases</H2>

    <P>
      Esta é a parte que salva vidas. A pergunta <strong>“como se proteger de terremoto”</strong>
      dispara nos buscadores nas horas seguintes a cada evento — mas o preparo precisa acontecer
      antes.
    </P>

    <H3>Fase 1 — Antes: preparação que cabe em um fim de semana</H3>

    <Checklist
      items={[
        'Monte um kit de emergência: água (4 litros por pessoa/dia por 3 dias), alimentos não perecíveis, lanterna, pilhas, rádio a pilha, cópias de documentos, dinheiro em espécie e remédios de uso contínuo.',
        'Identifique os "pontos seguros" de cada cômodo: ao lado de móveis baixos e resistentes, longe de janelas, espelhos e estantes.',
        'Fixe estantes, TVs e aquecedores na parede com suportes metálicos. Móveis que tombam causam a maior parte das lesões.',
        'Combine um ponto de encontro familiar fora de casa e um contato de referência em outra cidade.',
        'Aprenda a fechar o registro de gás e o disjuntor geral. Incêndio pós-sismo é a segunda maior causa de perdas.',
        'Guarde calçados fechados e uma lanterna debaixo da cama: a maioria das lesões acontece ao caminhar sobre vidro no escuro.',
      ]}
    />

    <H3>Fase 2 — Durante: os 60 segundos que definem tudo</H3>

    <ol className="my-6 space-y-3 list-decimal pl-6 text-slate-700 leading-relaxed">
      <li><strong>Abaixe-se, proteja-se, segure-se.</strong> Ajoelhe-se, proteja cabeça e pescoço, e segure-se em algo firme até o tremor parar.</li>
      <li><strong>Não corra para a rua durante o tremor.</strong> Fachadas, vidros e marquises caem justamente na calçada.</li>
      <li><strong>Não use elevadores.</strong> Nunca, em hipótese alguma.</li>
      <li><strong>Se estiver na rua</strong>, afaste-se de prédios, postes e fiação, e agache-se em área aberta.</li>
      <li><strong>Se estiver dirigindo</strong>, pare em local aberto, longe de pontes e viadutos, e permaneça no carro.</li>
      <li><strong>No litoral</strong>, se o tremor for forte ou durar mais de um minuto, suba para terreno alto imediatamente — o próprio tremor é o alerta de tsunami.</li>
    </ol>

    <Warning title="O erro mais comum: o mito do 'vão da porta'">
      A recomendação de se proteger sob o batente da porta vem de construções antigas de adobe,
      em que o batente era a única estrutura reforçada. Em edifícios modernos de concreto armado,
      a porta não é mais forte que o resto — e ainda pode amputar dedos ao bater. Prefira se
      abaixar ao lado de um móvel baixo e robusto.
    </Warning>

    <H3>Fase 3 — Depois: as primeiras 72 horas</H3>

    <Checklist
      items={[
        'Espere réplicas. Após um sismo 7,4, réplicas de magnitude 6 são estatisticamente prováveis nos dias seguintes.',
        'Cheire o ambiente antes de acender qualquer luz. Vazamento de gás não perdoa faísca de interruptor.',
        'Use mensagens de texto em vez de ligações: a rede de dados congestiona menos que a de voz.',
        'Não entre em prédios com rachaduras em pilares, vigas ou paredes estruturais até a vistoria oficial.',
        'Guarde água nas banheiras e recipientes enquanto o abastecimento ainda funciona.',
        'Siga apenas canais oficiais e desconfie de áudios virais — desinformação é padrão em todo desastre.',
      ]}
    />

    <CTA>
      Acompanhe alertas meteorológicos e geológicos em tempo real no monitor global do Clima
      Hoje e ative as notificações do sino no topo do site para receber avisos da sua região.
    </CTA>

    <H2 id="alertas-oficiais">Alertas governamentais e fontes oficiais confiáveis</H2>

    <P>
      Em uma emergência, a fonte importa mais que a velocidade. Consulte sempre:
    </P>

    <ul className="my-6 space-y-2 list-disc pl-6 text-slate-700 leading-relaxed">
      <li><ExternalLink href="https://earthquake.usgs.gov/earthquakes/map/">USGS Earthquake Hazards Program</ExternalLink> — catálogo global de sismos atualizado em minutos, com magnitude, profundidade e mapa de intensidade sentida.</li>
      <li><ExternalLink href="https://www.tsunami.gov/">Pacific Tsunami Warning Center (NOAA)</ExternalLink> — boletins oficiais de alerta de tsunami para o Pacífico e o Caribe.</li>
      <li><ExternalLink href="https://portal.inmet.gov.br/">INMET</ExternalLink> e <ExternalLink href="https://www.cptec.inpe.br/">CPTEC/INPE</ExternalLink> — referência brasileira para alertas meteorológicos que frequentemente se somam a emergências geológicas (chuva sobre encostas instáveis, por exemplo).</li>
      <li><ExternalLink href="https://www.unep.org/">ONU Meio Ambiente (UNEP)</ExternalLink> — contexto sobre risco de desastres e adaptação.</li>
    </ul>

    <H3>Melhores apps de monitoramento climático e sísmico</H3>

    <DataTable
      headers={['Aplicativo', 'Melhor para', 'Destaque']}
      rows={[
        ['USGS / MyShake', 'Alertas de terremoto', 'Detecção por rede de celulares e notificação antecipada'],
        ['Windy', 'Visualização meteorológica', 'Camadas de vento, chuva e satélite em alta resolução'],
        ['AccuWeather', 'Previsão do dia a dia', 'Alertas por localização e índice de conforto térmico'],
        ['Climatempo', 'Brasil', 'Previsões locais e boletins em português'],
        ['INMET', 'Alertas oficiais no Brasil', 'Avisos meteorológicos por cor de severidade'],
      ]}
      caption="Combine um app sísmico com um app meteorológico: os dois riscos costumam se sobrepor."
    />

    <H2 id="ciclos">Ciclos climáticos explicados: por que sismo e clima aparecem juntos</H2>

    <P>
      Terremoto não é fenômeno climático — é geológico. Mas os dois se cruzam de forma prática.
      Uma encosta encharcada por semanas de chuva fica muito mais vulnerável a deslizamentos
      quando um tremor chega. Foi assim no sismo de Páez, em 1994, quando a avalanche de lama
      causou mais mortes do que o próprio tremor.
    </P>

    <P>
      Em anos de <InternalLink to="/blog/super-el-nino-2026">El Niño intenso</InternalLink>, o
      padrão de chuvas nos Andes muda: períodos secos prolongados seguidos de chuvas
      concentradas deixam o solo com comportamento imprevisível. Já em anos de La Niña, o
      excesso de umidade na Colômbia e no norte da América do Sul eleva o risco de
      deslizamento em qualquer gatilho — inclusive sísmico. Entender esses
      <strong> ciclos climáticos </strong> ajuda autoridades a priorizar áreas de evacuação.
    </P>

    <Highlight title="Dicas de conforto térmico em abrigos e pós-desastre">
      Em abrigos improvisados, o desconforto térmico é subestimado. Use camadas de roupa em vez
      de uma peça grossa, mantenha um isolante entre o corpo e o chão (papelão funciona),
      hidrate-se mesmo sem sede em climas quentes e ventile o ambiente por alguns minutos a
      cada hora para reduzir umidade e transmissão de doenças respiratórias.
    </Highlight>

    <H2 id="brasil">E o Brasil, corre risco?</H2>

    <P>
      O Brasil fica no meio da placa Sul-Americana, longe das bordas — por isso registra sismos
      pequenos, geralmente abaixo de 5,0. O maior já registrado em território brasileiro ficou
      em torno de 6,2, no Mato Grosso, em 1955, em área pouco povoada. Grandes terremotos andinos,
      porém, são sentidos no Acre e em Rondônia por causa da profundidade da subducção. Veja a
      análise completa em nosso artigo sobre o
      <InternalLink to="/blog/terremoto-venezuela-2026"> duplo terremoto da Venezuela em 2026</InternalLink>
      {' '}e sobre o
      <InternalLink to="/blog/segundo-maior-corredor-tornados-brasil"> corredor de tornados brasileiro</InternalLink>.
    </P>

    <H2 id="faq">Perguntas frequentes sobre o terremoto na Colômbia</H2>

    <FAQ
      items={[
        {
          q: 'Qual foi a magnitude do terremoto na Colômbia em 2026?',
          a: 'O terremoto atingiu magnitude 7,4 na escala de magnitude de momento (Mw), sendo o mais forte registrado no país na última década. O tremor foi sentido em grande parte do território colombiano e também na Venezuela, no Equador e no Panamá.',
        },
        {
          q: 'Por que a Colômbia tem tantos terremotos?',
          a: 'Porque o país está sobre a junção de três placas tectônicas: Nazca, Caribe e Sul-Americana. A placa de Nazca mergulha sob a América do Sul, a placa do Caribe desliza lateralmente e dezenas de falhas ativas internas distribuem essa tensão pelo território.',
        },
        {
          q: 'Um terremoto de 7,4 pode gerar tsunami?',
          a: 'Só se o epicentro estiver no fundo do mar e houver deslocamento vertical significativo do assoalho oceânico. Sismos continentais, mesmo fortes, não geram tsunami. O trecho de risco real na Colômbia é a costa do Pacífico, como ocorreu em 1979, em Tumaco.',
        },
        {
          q: 'O que fazer durante um terremoto se eu morar em prédio alto?',
          a: 'Abaixe-se, proteja a cabeça e segure-se em um móvel firme. Não use o elevador e não tente descer as escadas durante o tremor. Prédios modernos com projeto sísmico são projetados para oscilar e dissipar energia — o balanço, por si só, não indica colapso.',
        },
        {
          q: 'Quanto tempo duram as réplicas de um sismo 7,4?',
          a: 'As mais intensas ocorrem nas primeiras 72 horas, mas a sequência pode se estender por semanas ou meses, com magnitudes decrescentes. É estatisticamente normal registrar réplicas acima de 6,0 nos primeiros dias.',
        },
        {
          q: 'Existe previsão de terremoto?',
          a: 'Não. A ciência atual consegue calcular probabilidade em janelas de décadas para uma região, mas não prever dia, hora e magnitude. O que existe são sistemas de alerta precoce, que avisam alguns segundos antes da chegada das ondas mais destrutivas.',
        },
        {
          q: 'Quais aplicativos avisam sobre terremotos e alertas climáticos?',
          a: 'Para sismos, MyShake e o aplicativo do USGS são as referências globais. Para clima, Windy, AccuWeather, Climatempo e o app do INMET oferecem alertas oficiais e previsões locais. Manter os dois tipos instalados é a melhor estratégia.',
        },
        {
          q: 'O Brasil pode sofrer um terremoto como o da Colômbia?',
          a: 'É extremamente improvável. O Brasil está no interior da placa Sul-Americana, onde os sismos são raros e de baixa magnitude. Ainda assim, tremores intraplaca acontecem e podem ser sentidos, especialmente no Nordeste e no Centro-Oeste.',
        },
      ]}
    />

    <P>
      <strong>Prevenção e cuidados</strong> não são luxo de país rico: são hábito. Revisar o kit
      de emergência a cada seis meses, fixar móveis e conversar com a família sobre o plano de
      evacuação custa pouco e muda completamente o desfecho de um evento como o de agosto de 2026.
    </P>
  </>
);

/* ==========================================================================
   ARTIGO 2: A conexão tectônica Colômbia–Venezuela e os maiores terremotos da região
   ========================================================================== */
export const PlacasAndesArticle: React.FC<{ midImage: string }> = ({ midImage }) => (
  <>
    <Lead>
      Existe uma linha invisível que atravessa o norte da América do Sul, do Pacífico colombiano
      até o Caribe venezuelano, e desce pelos Andes até a Patagônia. É a borda das
      <strong> placas tectônicas</strong> — e é ela que conecta o terremoto de magnitude 7,4 na
      Colômbia ao duplo sismo que sacudiu a Venezuela em junho de 2026, ao megassismo do Chile em
      1960 e a praticamente todos os grandes desastres sísmicos da história do continente.
    </Lead>

    <P>
      Quando dois grandes terremotos acontecem em países vizinhos em um intervalo curto, a
      pergunta é sempre a mesma: eles estão ligados? A resposta científica é matizada, e vale
      a pena entendê-la em detalhe — porque ela define como os governos calculam risco e como
      as famílias devem se preparar.
    </P>

    <H2 id="mapa-tectonico">O mapa tectônico do norte da América do Sul</H2>

    <P>
      Três grandes peças definem o quebra-cabeça geológico entre Colômbia e Venezuela:
    </P>

    <H3>1. A placa Sul-Americana</H3>
    <P>
      É a base do continente. Ela se move lentamente para oeste, empurrada pela expansão da
      dorsal meso-atlântica. Seu interior — onde está quase todo o Brasil — é sismicamente
      tranquilo. Suas bordas, não.
    </P>

    <H3>2. A placa de Nazca</H3>
    <P>
      Localizada sob o Pacífico, mergulha por baixo da América do Sul a cerca de 6 a 7
      centímetros por ano. Essa <strong>subducção</strong> é a fábrica dos Andes, dos vulcões
      andinos e dos maiores terremotos já medidos na Terra.
    </P>

    <H3>3. A placa do Caribe</H3>
    <P>
      Move-se para leste em relação à América do Sul, raspando o norte da Venezuela e da
      Colômbia. Não há mergulho profundo aqui, e sim atrito lateral — o mesmo mecanismo da
      falha de San Andreas, na Califórnia. Esse contato gera o grande sistema de falhas
      transcorrentes que inclui a <strong>falha de Boconó</strong>, na Venezuela, e a
      <strong> falha de Oca–Ancón</strong>, na fronteira dos dois países.
    </P>

    <img
      src={midImage}
      alt="Escarpa de falha geológica ativa cortando vale andino, ilustrando as placas tectônicas entre Colômbia e Venezuela"
      loading="lazy"
      width={1536}
      height={864}
      className="w-full rounded-xl shadow-lg my-10"
    />

    <InfoBox title="Bloco Andino do Norte: o pedaço que está sendo espremido">
      Geólogos descrevem a região entre Equador, Colômbia e Venezuela como um microbloco
      continental sendo empurrado para nordeste, "espremido" entre a subducção de Nazca a
      oeste e a placa do Caribe a norte. Esse escape lateral, medido por GPS a cerca de 1 cm
      por ano, é o motor comum por trás dos sismos colombianos e venezuelanos.
    </InfoBox>

    <H2 id="conexao">Existe ligação entre o terremoto da Colômbia e o da Venezuela?</H2>

    <P>
      A resposta honesta tem duas camadas.
    </P>

    <H4>Camada 1 — Conexão estrutural: sim</H4>
    <P>
      Os dois eventos pertencem ao mesmo sistema tectônico. A energia que rompeu a crosta na
      Colômbia e a que rompeu falhas na Venezuela vem da mesma fonte: a convergência entre a
      placa do Caribe, a placa de Nazca e o continente. São ramos diferentes da mesma árvore.
      Nesse sentido, é correto dizer que os terremotos estão ligados.
    </P>

    <H4>Camada 2 — Conexão de gatilho direto: pouco provável a essa distância</H4>
    <P>
      Terremotos podem, sim, disparar outros. O mecanismo se chama <strong>transferência de
      tensão de Coulomb</strong>: ao romper, uma falha alivia tensão em alguns pontos e
      <em> aumenta</em> em outros, adiantando o relógio de falhas vizinhas. Mas esse efeito é
      mais forte a poucas dezenas ou centenas de quilômetros. Entre epicentros separados por
      mais de mil quilômetros, a influência estatística cai drasticamente.
    </P>

    <PullQuote>
      A ligação real não é "um causou o outro". É que ambos são sintomas do mesmo processo:
      um continente sendo comprimido por dois lados ao mesmo tempo.
    </PullQuote>

    <P>
      Vale lembrar o caso clássico: o duplo sismo de 7,2 e 7,5 registrado na Venezuela em 24 de
      junho de 2026, detalhado em nossa
      <InternalLink to="/blog/terremoto-venezuela-2026"> cobertura sobre o terremoto venezuelano</InternalLink>.
      Ali, os dois choques ocorreram próximos no espaço e no tempo — esse é um caso legítimo de
      disparo em cascata dentro do mesmo sistema de falhas.
    </P>

    <H2 id="maiores">Os maiores terremotos da história da região andina e caribenha</H2>

    <P>
      A borda oeste da América do Sul detém o recorde absoluto do planeta. Veja os
      <strong> dados históricos de terremotos </strong> mais relevantes:
    </P>

    <DataTable
      headers={['Ano', 'Local', 'Magnitude', 'Por que entrou para a história']}
      rows={[
        ['1960', 'Valdívia, Chile', '9,5', 'O maior terremoto já medido por instrumentos na história da humanidade; tsunami atravessou o Pacífico até o Japão'],
        ['2010', 'Maule, Chile', '8,8', 'Deslocou o eixo de rotação da Terra em escala mensurável'],
        ['1906', 'Equador–Colômbia', '8,8', 'Um dos cinco maiores da história; tsunami no Pacífico'],
        ['1868', 'Arica (então Peru, hoje Chile)', '~8,5–9,0', 'Tsunami devastador em todo o Pacífico Sul'],
        ['1970', 'Áncash, Peru', '7,9', 'Avalanche no Huascarán soterrou Yungay; ~70 mil mortos'],
        ['1812', 'Caracas, Venezuela', '~7,7', 'Destruiu Caracas e Mérida; marco histórico e político do país'],
        ['1900', 'San Narciso, Venezuela', '~7,7', 'Maior sismo instrumental do período na Venezuela'],
        ['1967', 'Caracas, Venezuela', '6,6', 'Colapso de edifícios modernos; origem do código sísmico venezuelano'],
        ['1979', 'Tumaco, Colômbia', '8,1', 'Tsunami no litoral colombiano do Pacífico'],
        ['1999', 'Armênia, Colômbia', '6,2', 'Destruição massiva no eixo cafeeiro'],
        ['2026', 'Venezuela (duplo sismo)', '7,2 e 7,5', 'Sequência dupla no sistema Caribe–América do Sul'],
        ['2026', 'Colômbia', '7,4', 'Mais forte da década no país'],
      ]}
      caption="Grandes terremotos da América do Sul e do Caribe. Magnitudes históricas anteriores a 1900 são estimativas baseadas em relatos e efeitos geológicos."
    />

    <H3>Por que o Chile concentra os recordes</H3>

    <P>
      A resposta está na geometria da subducção. Diante do Chile, a placa de Nazca mergulha em
      um ângulo relativamente uniforme e a zona de contato entre as placas é longa, plana e
      travada. Quanto maior a área que rompe de uma vez, maior a magnitude. Em 1960, cerca de
      mil quilômetros de falha romperam quase simultaneamente — daí o 9,5.
    </P>

    <P>
      Já entre Colômbia e Venezuela, o contato é predominantemente lateral (transcorrente). Esse
      tipo de falha rompe segmentos menores e raramente ultrapassa magnitude 8. É uma boa e uma
      má notícia: menos energia máxima possível, porém sismos rasos, próximos de cidades densas
      e frequentemente mais destrutivos por unidade de magnitude.
    </P>

    <Highlight title="Regra prática para entender risco sísmico">
      Magnitude mede energia. Intensidade mede o que você sente e o que quebra. Um 6,5 raso sob
      uma cidade causa muito mais dano do que um 7,5 profundo a 200 km de distância. Sempre
      pergunte três coisas: qual a magnitude, qual a profundidade e a que distância estou.
    </Highlight>

    <H2 id="cinturao">O Cinturão de Fogo do Pacífico explicado sem jargão</H2>

    <P>
      Cerca de 90% dos terremotos do mundo e 75% dos vulcões ativos estão em um arco de 40 mil
      quilômetros que contorna o Oceano Pacífico. A costa oeste sul-americana é um dos trechos
      mais ativos desse cinturão. Ali, placas oceânicas frias e densas afundam sob placas
      continentais mais leves, e a rocha que mergulha libera água, derrete o manto acima e
      alimenta vulcões — os mesmos processos que discutimos no artigo sobre
      <InternalLink to="/blog/vulcoes-erupcao-2026"> vulcões em erupção em 2026</InternalLink>.
    </P>

    <H3>Sismos, tsunamis e maremotos: qual a diferença</H3>

    <ul className="my-6 space-y-2 list-disc pl-6 text-slate-700 leading-relaxed">
      <li><strong>Terremoto:</strong> ruptura de rocha na crosta que libera energia em ondas sísmicas.</li>
      <li><strong>Maremoto:</strong> termo popular para terremoto com epicentro no fundo do mar.</li>
      <li><strong>Tsunami:</strong> a série de ondas gerada quando o assoalho oceânico se desloca verticalmente. Não é uma onda só; é um trem de ondas que pode durar horas.</li>
      <li><strong>Réplica:</strong> sismo menor que segue o principal, ajustando as tensões residuais na falha.</li>
    </ul>

    <Warning title="Alerta natural de tsunami">
      Se você estiver no litoral e o tremor for forte o suficiente para dificultar ficar de pé,
      ou durar mais de um minuto, não espere sirene nem aplicativo: suba imediatamente para
      terreno alto ou para o andar mais elevado de um prédio robusto. Em sismos próximos da
      costa, a onda pode chegar em menos de 15 minutos.
    </Warning>

    <H2 id="monitoramento">Como a ciência monitora as placas hoje</H2>

    <P>
      O avanço mais importante das últimas duas décadas não veio de sismógrafos, e sim de
      satélites.
    </P>

    <ol className="my-6 space-y-3 list-decimal pl-6 text-slate-700 leading-relaxed">
      <li><strong>GPS de alta precisão:</strong> estações fixas medem o deslocamento do solo em milímetros por ano, revelando onde a tensão está se acumulando.</li>
      <li><strong>InSAR (radar interferométrico):</strong> compara imagens de radar de satélite para mapear deformação centimétrica do terreno em áreas inteiras.</li>
      <li><strong>Redes sismográficas densas:</strong> permitem localizar hipocentros com precisão de poucos quilômetros.</li>
      <li><strong>Alerta precoce (EEW):</strong> sistemas que detectam a onda P, mais rápida e menos destrutiva, e avisam segundos antes da chegada da onda S. Segundos salvam vidas: dão tempo de parar trens, fechar válvulas de gás e se abrigar.</li>
    </ol>

    <P>
      Dados abertos do <ExternalLink href="https://earthquake.usgs.gov/">USGS</ExternalLink>, da
      <ExternalLink href="https://www.nasa.gov/"> NASA</ExternalLink> (missões de observação da
      Terra) e boletins de tsunami da <ExternalLink href="https://www.noaa.gov/">NOAA</ExternalLink>
      {' '}permitem que qualquer pessoa acompanhe a atividade em tempo real. No Brasil, o
      <ExternalLink href="https://portal.inmet.gov.br/"> INMET</ExternalLink> e o
      <ExternalLink href="https://www.cptec.inpe.br/"> CPTEC/INPE</ExternalLink> concentram os
      alertas meteorológicos que frequentemente acompanham emergências geológicas.
    </P>

    <CTA>
      Quer ver terremotos, vulcões e eventos extremos acontecendo agora no mundo? Abra o Monitor
      Geológico e Climático Global na página inicial do Clima Hoje e explore o mapa interativo.
    </CTA>

    <H2 id="prevencao">Prevenção e cuidados: o que fazer morando em zona de falha</H2>

    <Checklist
      items={[
        'Descubra em qual zona de ameaça sísmica está sua cidade — a maioria dos países andinos publica mapas oficiais gratuitos.',
        'Exija e verifique conformidade sísmica ao comprar ou alugar imóvel; construções informais são a maior causa de mortes.',
        'Faça simulados familiares duas vezes por ano, com cronômetro. Reação treinada substitui pânico.',
        'Mantenha seguro residencial que cubra sismo, quando disponível.',
        'Tenha um plano específico para idosos, crianças, pessoas com deficiência e animais de estimação.',
        'Guarde água potável rotativa e mantenha o celular sempre acima de 50% de carga em períodos de crise sísmica.',
      ]}
    />

    <H3>Dicas de conforto térmico durante evacuações</H3>

    <P>
      Nos Andes, a diferença entre dia e noite passa facilmente de 15 °C. Quem evacua às pressas
      costuma sofrer mais com o frio noturno do que com o próprio evento. Vista camadas, proteja
      extremidades (mãos, pés e cabeça concentram a perda de calor), evite roupa de algodão
      úmida junto ao corpo e mantenha isolamento térmico entre você e o solo. Em áreas
      litorâneas quentes, priorize sombra, hidratação constante e ventilação cruzada.
    </P>

    <H2 id="faq2">Perguntas frequentes sobre placas tectônicas e terremotos na América do Sul</H2>

    <FAQ
      items={[
        {
          q: 'O terremoto da Colômbia tem relação com o da Venezuela?',
          a: 'Sim, no sentido estrutural: os dois ocorrem no mesmo sistema de bordas de placas, onde o Caribe, Nazca e a América do Sul se encontram. Um disparo direto entre eventos separados por mais de mil quilômetros, porém, é estatisticamente improvável — eles são sintomas do mesmo processo, não causa e efeito.',
        },
        {
          q: 'Quais placas tectônicas afetam a Colômbia e a Venezuela?',
          a: 'Três: a placa Sul-Americana, a placa de Nazca (que mergulha sob o continente pelo Pacífico) e a placa do Caribe (que desliza lateralmente ao norte). O microbloco Andino do Norte é espremido entre elas e escapa para nordeste.',
        },
        {
          q: 'Qual foi o maior terremoto da história?',
          a: 'O terremoto de Valdívia, no Chile, em 22 de maio de 1960, com magnitude 9,5. É o maior já registrado por instrumentos. Gerou um tsunami que cruzou o Pacífico e atingiu o Havaí, o Japão e as Filipinas.',
        },
        {
          q: 'Por que o Chile tem terremotos maiores que a Colômbia?',
          a: 'Porque diante do Chile a subducção da placa de Nazca cria uma zona de contato longa e travada, capaz de romper por mais de mil quilômetros de uma só vez. Na Colômbia e na Venezuela predominam falhas transcorrentes, que rompem segmentos menores e raramente ultrapassam magnitude 8.',
        },
        {
          q: 'O que é a falha de Boconó?',
          a: 'É a principal falha ativa da Venezuela, com mais de 500 km de extensão ao longo dos Andes venezuelanos. Ela acomoda o movimento lateral entre a placa do Caribe e a América do Sul e é responsável por vários sismos históricos destrutivos, incluindo eventos em Mérida.',
        },
        {
          q: 'A América do Sul pode sofrer um tsunami no Atlântico?',
          a: 'O risco é muito menor que no Pacífico, porque o Atlântico Sul não tem zonas de subducção ativas próximas ao litoral brasileiro. Tsunamis no Caribe são possíveis e já ocorreram historicamente, associados a falhas submarinas e deslizamentos costeiros.',
        },
        {
          q: 'Como saber se minha cidade está em zona de risco sísmico?',
          a: 'Consulte o mapa de ameaça sísmica publicado pelo serviço geológico do seu país e o mapa global de risco do USGS. Eles classificam o território por aceleração esperada do solo, que é a base dos códigos de construção.',
        },
        {
          q: 'Mudanças climáticas causam terremotos?',
          a: 'Não diretamente. Terremotos são movidos por energia interna da Terra. Existe pesquisa sobre efeitos secundários — como o alívio de peso pelo degelo de geleiras influenciar falhas locais —, mas isso não explica grandes sismos em zonas de subducção. O que as mudanças climáticas fazem é agravar os desastres combinados, como deslizamentos em encostas saturadas de chuva.',
        },
      ]}
    />

    <P>
      Entender a tectônica do norte da América do Sul não é curiosidade acadêmica. É a base para
      construir melhor, planejar cidades com mais inteligência e reagir com calma quando o chão
      se move. A placa vai continuar se movendo — a única variável que podemos controlar é o
      nosso preparo.
    </P>
  </>
);
