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
   ARTIGO 1: Ciclone-bomba no Sul e Sudeste do Brasil — agosto de 2026
   ========================================================================== */
export const CicloneBombaArticle: React.FC<{ midImage: string }> = ({ midImage }) => (
  <>
    <Lead>
      O <strong>ciclone-bomba de agosto de 2026</strong> entrou para a lista dos eventos de vento mais
      severos já registrados no Sul e no Sudeste do Brasil. Entre a tarde de quinta-feira (6/8) e o
      sábado (8/8), uma ciclogênese explosiva no Atlântico Sul produziu rajadas acima de 120 km/h,
      um tornado associado a supercélula no Rio Grande do Sul, quase 300 mil imóveis sem energia
      elétrica e uma sequência de alertas vermelhos do Inmet que obrigou prefeituras de São Paulo,
      do Rio de Janeiro e do litoral paulista a suspender aulas e pedir que a população não saísse
      de casa.
    </Lead>

    <P>
      Ciclone-bomba não é um nome de marketing meteorológico. É a tradução popular de um processo
      físico medido com número: quando um sistema de baixa pressão perde pelo menos 24 hectopascais
      em 24 horas (ajustado à latitude), ele recebe a classificação de <strong>ciclogênese
      explosiva</strong>, ou bombogênese. O que aconteceu no Atlântico Sul nesta semana cumpriu esse
      critério com folga — e por isso o vento, não a chuva, foi o protagonista dos estragos.
    </P>

    <Highlight title="Resumo rápido do evento">
      Encontro entre ar polar muito frio e ar tropical extremamente úmido sobre o Atlântico Sul →
      queda abrupta de pressão → gradiente de pressão apertado → ventos destrutivos em faixa larga,
      do Rio Grande do Sul ao litoral fluminense. Uma morte confirmada, cem municípios gaúchos com
      danos, 294 mil endereços sem energia e ondas de até três metros na costa.
    </Highlight>

    <H2>O que é um ciclone-bomba e por que ele é diferente de um temporal comum</H2>

    <P>
      Todo dia se formam áreas de baixa pressão sobre os oceanos. A maioria se desenvolve devagar,
      distribui chuva por alguns dias e se dissipa. O ciclone-bomba é a exceção violenta: ele se
      aprofunda em um ritmo que a atmosfera raramente sustenta.
    </P>

    <P>
      Segundo o <ExternalLink href="https://portal.inmet.gov.br/">Instituto Nacional de
      Meteorologia (Inmet)</ExternalLink>, a instabilidade favorece a ciclogênese explosiva quando
      uma massa de ar frio encontra outra muito mais quente e a pressão atmosférica despenca em
      curto espaço de tempo. É exatamente o cenário do Atlântico Sul no inverno: água relativamente
      morna na Corrente do Brasil, ar polar descendo pela Argentina e um jato de altos níveis
      posicionado para "puxar" ar de baixo para cima.
    </P>

    <H3>A física em linguagem de todo dia</H3>

    <P>
      Imagine a atmosfera como um lençol esticado. A pressão alta é uma região onde o lençol está
      empilhado; a pressão baixa é uma cratera. O vento é simplesmente o ar escorregando da pilha
      para a cratera. Quanto mais fundo e mais rápido o buraco se forma, mais inclinado fica o
      terreno — e mais forte o vento sopra.
    </P>

    <P>
      Em um temporal de verão, esse desnível é local e dura minutos. Em um ciclone-bomba, ele se
      instala sobre centenas de quilômetros e dura dias. É por isso que o vento não vem em rajada
      isolada: ele se torna um regime contínuo, com picos que derrubam árvores já enfraquecidas pelo
      solo encharcado.
    </P>

    <DataTable
      headers={['Sistema', 'Queda de pressão típica', 'Duração do vento forte', 'Risco dominante']}
      rows={[
        ['Temporal isolado', '2–5 hPa localizados', '10 a 40 minutos', 'Rajada de vento e granizo pontuais'],
        ['Frente fria comum', '5–10 hPa em 24 h', '3 a 6 horas', 'Chuva e queda de temperatura'],
        ['Ciclone extratropical', '10–20 hPa em 24 h', '12 a 24 horas', 'Chuva persistente e ressaca'],
        ['Ciclone-bomba', '24 hPa ou mais em 24 h', '24 a 60 horas', 'Vento destrutivo, ressaca severa, apagões'],
      ]}
    />

    <H2>Cronologia: como o ciclone-bomba de agosto de 2026 avançou pelo Brasil</H2>

    <H3>Quinta-feira (6/8) — a explosão começa no Rio Grande do Sul</H3>

    <P>
      O Rio Grande do Sul foi o primeiro estado a sentir o sistema. Ao final da tarde, uma
      supercélula gerou um <strong>tornado no município de Pedro Osório</strong>, na metade sul do
      estado. Supercélulas são tempestades com uma corrente ascendente que gira (o mesociclone);
      quando essa rotação é esticada verticalmente perto do solo, nasce o tornado. Foi o segundo
      tornado gaúcho em menos de duas semanas — o primeiro atingiu Giruá, Sete de Setembro e Senador
      Salgado Filho em 28 de julho, deixando quatro feridos.
    </P>

    <P>
      Em Porto Alegre, o temporal noturno destelhou ao menos 32 imóveis, causou dois desabamentos e
      derrubou sete árvores. A maior rajada da capital foi medida no aeroporto Salgado Filho:
      <strong> 120,4 km/h</strong>. Em Pelotas, ventos de 90 km/h destelharam cerca de 200 imóveis e
      derrubaram parte do muro do presídio regional, com 30 mm de chuva concentrados em poucos
      minutos.
    </P>

    <H3>Sexta-feira (7/8) — o sistema alcança o Sudeste</H3>

    <P>
      Na manhã de sexta, a Defesa Civil gaúcha já contabilizava danos em cerca de cem municípios e
      um painel da Aneel indicava aproximadamente <strong>294 mil endereços sem energia elétrica</strong>.
      A falta de eletricidade atingiu uma estação de tratamento de água e doze estações de
      bombeamento em Porto Alegre, ameaçando o abastecimento de dezenas de bairros — um lembrete de
      que apagão e desabastecimento de água costumam andar juntos.
    </P>

    <P>
      No litoral paulista, Santos registrou rajada de 109 km/h por volta das 7h. Ubatuba,
      Caraguatatuba, São Sebastião, Bertioga e Itanhaém suspenderam aulas da rede municipal. A
      travessia de balsa entre Ilhabela e São Sebastião foi paralisada e a navegação no canal do
      Porto de Santos ficou suspensa por cerca de uma hora e meia. Prefeituras de São Paulo e do Rio
      de Janeiro recomendaram que a população evitasse sair de casa.
    </P>

    <figure className="my-10">
      <img
        src={midImage}
        alt="Rastro de destruição do ciclone-bomba de 2026: árvore caída sobre casa, telhas arrancadas e agentes da Defesa Civil avaliando danos em rua do Sul do Brasil"
        width={800}
        height={600}
        loading="lazy"
        className="w-full rounded-lg shadow-lg"
      />
      <figcaption className="mt-3 text-sm text-muted-foreground">
        Ventos acima de 100 km/h derrubaram árvores e destelharam centenas de imóveis no Sul do país
        durante o ciclone-bomba de agosto de 2026.
      </figcaption>
    </figure>

    <H3>Sábado (8/8) — o ápice previsto</H3>

    <P>
      O Inmet manteve o Rio Grande do Sul em alerta de perigo, com previsão de novos temporais e
      rajadas capazes de superar 90 km/h até o sábado, quando o fenômeno atingiria seu ápice antes
      de se afastar para o oceano. Esse é um padrão clássico: o ciclone se desloca para leste, mas
      o "rabo" de ar frio continua produzindo instabilidade por mais 24 a 48 horas.
    </P>

    <PullQuote author="Padrão operacional de alerta do Inmet">
      Alertas amarelo, laranja e vermelho não indicam apenas intensidade — indicam probabilidade de
      dano. Vermelho significa "grande perigo": risco alto de destelhamento, queda de árvores e
      interrupção de serviços essenciais.
    </PullQuote>

    <H2>Por que este ciclone foi tão intenso? Os ingredientes climáticos de 2026</H2>

    <H3>1. Contraste térmico exagerado</H3>

    <P>
      O motor de qualquer ciclone extratropical é o contraste entre massas de ar. Em 2026, o inverno
      no Cone Sul alternou incursões polares muito profundas com dias anormalmente quentes no Centro-Oeste
      e no Sudeste. Esse "sanduíche térmico" aumenta a energia disponível para a ciclogênese.
    </P>

    <H3>2. Oceano mais quente que a média</H3>

    <P>
      A temperatura da superfície do mar no Atlântico Sudoeste seguiu acima da média histórica.
      Água mais quente significa mais evaporação e mais calor latente liberado quando o vapor
      condensa — combustível direto para o aprofundamento explosivo. Monitoramentos da
      <ExternalLink href="https://www.noaa.gov/"> NOAA</ExternalLink> vêm registrando anomalias
      persistentes nas bacias do Atlântico e do Pacífico ao longo de 2026.
    </P>

    <H3>3. O pano de fundo do El Niño</H3>

    <P>
      O evento de El Niño em desenvolvimento em 2026 tende a intensificar o jato subtropical sobre o
      Sul do Brasil, favorecendo tempestades mais organizadas e mais frequentes. Explicamos o
      mecanismo em detalhe no artigo <InternalLink to="/blog/super-el-nino-2026">Super El Niño
      2026: o que esperar do fenômeno climático mais intenso da década</InternalLink>.
    </P>

    <H3>4. Um Sul cada vez mais suscetível a vento severo</H3>

    <P>
      O Sul do Brasil abriga o segundo maior corredor de tornados do planeta, um fato ainda pouco
      conhecido pelo público. A mesma geografia que permite o choque entre ar polar e ar tropical
      úmido favorece supercélulas — e, com elas, tornados e microexplosões. Aprofundamos esse tema
      em <InternalLink to="/blog/segundo-maior-corredor-tornados-brasil">Segundo maior corredor de
      tornados do mundo fica no Brasil</InternalLink>.
    </P>

    <InfoBox title="Ciclos climáticos explicados em 30 segundos">
      <strong>El Niño:</strong> Pacífico equatorial mais quente → mais chuva e tempestades no Sul do
      Brasil, seca no Norte e Nordeste.<br />
      <strong>La Niña:</strong> Pacífico mais frio → estiagem no Sul, chuva acima da média no Norte.<br />
      <strong>Oscilação Antártica (AAO):</strong> na fase negativa, permite que massas polares avancem
      mais para o norte, aumentando o contraste térmico que alimenta ciclones.<br />
      <strong>Oscilação de Madden-Julian (MJO):</strong> onda tropical que percorre o globo em 30–60 dias
      e modula "janelas" de tempo mais chuvoso ou mais seco.
    </InfoBox>

    <H2>Como se proteger de um ciclone-bomba: guia prático</H2>

    <P>
      A diferença entre susto e tragédia, em eventos de vento severo, quase sempre está na
      preparação feita <em>antes</em> do alerta vermelho. Abaixo, um roteiro em três tempos.
    </P>

    <H3>Antes: 24 a 48 horas de antecedência</H3>

    <Checklist
      items={[
        'Recolha vasos, cadeiras, guarda-sóis, lonas, placas e qualquer objeto solto em varandas, sacadas e quintais.',
        'Revise telhas, calhas, rufos e antenas; uma telha mal fixada vira projétil a 100 km/h.',
        'Pode galhos secos ou que estejam sobre a rede elétrica — solicite a poda pública com antecedência.',
        'Carregue celulares, power banks e lanternas; deixe rádio a pilha disponível.',
        'Encha garrafões de água: apagão pode interromper o bombeamento e deixar bairros sem abastecimento.',
        'Reveja o seguro residencial e fotografe o imóvel para eventual comprovação de danos.',
        'Estacione o carro longe de árvores, muros altos e placas de publicidade.',
        'Combine com a família um ponto de encontro e um contato fora da região.',
      ]}
    />

    <H3>Durante: quando o vento chega</H3>

    <Checklist
      items={[
        'Permaneça em ambiente interno, longe de janelas, claraboias e portas de vidro.',
        'Prefira cômodos internos sem janela — corredor, banheiro ou escada.',
        'Não use elevador e evite garagens subterrâneas em áreas sujeitas a alagamento.',
        'Desligue aparelhos da tomada para proteger contra surtos elétricos.',
        'Nunca tente prender telhas ou lonas durante a tempestade.',
        'Se estiver dirigindo, reduza a velocidade, segure firme o volante em áreas abertas e pare em local seguro — jamais debaixo de árvore ou viaduto instável.',
        'Fique longe de fios caídos: considere todo cabo no chão como energizado.',
        'Na praia, saia da faixa de areia e do costão; ondas de três metros invadem calçadões.',
      ]}
    />

    <H3>Depois: as primeiras 72 horas</H3>

    <Checklist
      items={[
        'Só saia quando as autoridades confirmarem o fim do alerta.',
        'Registre danos com fotos e vídeos datados antes de qualquer reparo.',
        'Comunique fios rompidos à distribuidora e árvores caídas à Defesa Civil.',
        'Descarte alimentos refrigerados após mais de 4 horas sem energia.',
        'Cuidado com geradores: nunca os use dentro de casa ou garagem fechada (risco de monóxido de carbono).',
        'Verifique vizinhos idosos, pessoas com deficiência e famílias com bebês.',
      ]}
    />

    <Warning title="Erro mais comum e mais fatal">
      Sair para "ver o estrago" no intervalo entre duas bandas de vento. Ciclones-bomba têm pausas
      enganosas: o vento cessa por 20 ou 30 minutos e volta com a mesma força, muitas vezes de outra
      direção — derrubando exatamente as estruturas que já haviam sido enfraquecidas.
    </Warning>

    <H2>Dicas de conforto térmico durante e após o temporal</H2>

    <P>
      Ciclone-bomba no inverno vem acompanhado de queda brusca de temperatura, sensação térmica
      negativa pelo vento (<em>wind chill</em>) e casas com umidade alta. Conforto térmico, nesse
      contexto, é também prevenção de saúde.
    </P>

    <Checklist
      items={[
        'Use camadas: uma peça térmica junto ao corpo, uma isolante no meio e uma corta-vento por fora — mais eficiente do que um único casaco pesado.',
        'Vede frestas de portas e janelas com rolos de tecido para reduzir a entrada de ar frio.',
        'Mantenha o ambiente ventilado alguns minutos por dia, mesmo no frio, para evitar mofo após dias de umidade alta.',
        'Cuidado com aquecedores a gás em cômodos fechados; sempre deixe uma fresta de ventilação.',
        'Bebidas quentes ajudam na sensação térmica, mas evite álcool — ele dilata os vasos e acelera a perda de calor.',
        'Proteja pets: animais pequenos e idosos sofrem com o vento e o piso frio.',
      ]}
    />

    <H2>Melhores apps de monitoramento climático em 2026</H2>

    <DataTable
      headers={['Aplicativo / fonte', 'Melhor para', 'Custo']}
      rows={[
        ['Inmet (app e portal)', 'Alertas oficiais por município e avisos de perigo', 'Gratuito'],
        ['Defesa Civil estadual (SMS/app)', 'Alertas geolocalizados de risco imediato', 'Gratuito'],
        ['Windy', 'Visualizar rajadas, pressão e modelos ECMWF/GFS lado a lado', 'Gratuito com plano pago'],
        ['Climatempo', 'Previsão detalhada em português e conteúdo explicativo', 'Freemium'],
        ['AccuWeather', 'Previsão minuto a minuto e índice de sensação térmica (RealFeel)', 'Freemium'],
        ['MetSul', 'Análises técnicas focadas no Sul do Brasil', 'Gratuito'],
        ['CPTEC/INPE', 'Imagens de satélite, radar e modelos numéricos brasileiros', 'Gratuito'],
      ]}
    />

    <P>
      Vale registrar a boa prática: use um app para <strong>previsão</strong> (Windy, AccuWeather,
      Climatempo) e outro exclusivamente para <strong>alertas oficiais</strong> (Inmet e Defesa
      Civil). Previsão é probabilidade; alerta é decisão de autoridade pública. Você pode acompanhar
      as condições em tempo real também pela nossa <InternalLink to="/agora">página de tempo
      agora</InternalLink> e pela <InternalLink to="/hoje">previsão para hoje</InternalLink>.
    </P>

    <H2>Dados históricos: como este evento se compara</H2>

    <DataTable
      headers={['Evento', 'Ano', 'Rajada máxima registrada', 'Marca deixada']}
      rows={[
        ['Furacão Catarina (SC)', '2004', '~150 km/h', 'Único furacão documentado no Atlântico Sul'],
        ['Ciclone extratropical no Sul', '2020', '~116 km/h', 'Uma dezena de mortes e apagão amplo em SC'],
        ['Ciclone de junho', '2023', '~120 km/h', 'Enchentes e destelhamentos no RS'],
        ['Ciclone-bomba', '2026', '120,4 km/h (Porto Alegre)', 'Tornado em Pedro Osório e ~294 mil sem energia'],
      ]}
    />

    <P>
      A leitura correta desses números não é "o vento está mais forte todo ano". É outra, mais
      incômoda: <strong>a frequência de eventos severos aumentou</strong>, e a infraestrutura urbana
      — rede elétrica aérea, arborização mal manejada, coberturas leves — não acompanhou esse ritmo.
      A vulnerabilidade cresce mais rápido que a ameaça.
    </P>

    <H2>Alertas governamentais: como interpretar cada cor</H2>

    <DataTable
      headers={['Nível', 'Significado', 'O que fazer']}
      rows={[
        ['Amarelo', 'Perigo potencial — vento de 40 a 60 km/h', 'Atenção redobrada, recolha objetos soltos'],
        ['Laranja', 'Perigo — vento de 60 a 100 km/h', 'Evite deslocamentos, proteja janelas, reforce telhados'],
        ['Vermelho', 'Grande perigo — vento acima de 100 km/h', 'Não saia de casa, siga orientação da Defesa Civil'],
      ]}
    />

    <P>
      No Brasil, o canal oficial de alerta é o Inmet, complementado pelas defesas civis estaduais e
      municipais. Cadastre-se no serviço de SMS da Defesa Civil enviando seu CEP para o número 40199 —
      é gratuito e funciona mesmo em aparelhos simples.
    </P>

    <H2>Mudanças climáticas: o que a ciência diz sobre ciclones mais intensos</H2>

    <P>
      Não existe evidência de que o número total de ciclones extratropicais esteja crescendo. O que a
      literatura vem apontando, e o
      <ExternalLink href="https://www.unep.org/pt-br"> Programa das Nações Unidas para o Meio
      Ambiente</ExternalLink> reforça em seus relatórios anuais, é uma mudança de distribuição: entre os
      sistemas que se formam, uma fração maior atinge intensidade extrema. Oceanos mais quentes
      carregam mais vapor, e uma atmosfera mais quente retém cerca de 7% mais umidade a cada grau
      Celsius adicional. Mais umidade significa mais calor latente disponível — e portanto mais
      combustível para a bombogênese.
    </P>

    <P>
      Há ainda um segundo efeito, mais sutil: alterações na posição média do jato polar deslocam as
      trajetórias preferenciais dos ciclones. Regiões que historicamente ficavam na borda do sistema
      passam a ficar no centro. É o que explica, em parte, por que capitais do Sudeste têm entrado com
      mais frequência em alerta por vento — algo que era relativamente raro há duas décadas.
    </P>

    <PullQuote>
      A pergunta útil deixou de ser "vai acontecer de novo?". Passou a ser "quanto tempo temos até o
      próximo — e o que fizemos com esse tempo?".
    </PullQuote>

    <H2>Checklist final: kit de emergência para vento severo</H2>

    <Checklist
      items={[
        'Lanterna com pilhas extras (evite velas — risco de incêndio em ambiente com gás e vazamento).',
        'Rádio a pilha para receber alertas mesmo sem internet.',
        'Power bank carregado e cabo compatível.',
        'Água potável para 3 dias (3 litros por pessoa/dia).',
        'Alimentos não perecíveis e abridor manual.',
        'Kit de primeiros socorros e medicamentos de uso contínuo.',
        'Documentos em saco plástico selado.',
        'Cópias de chaves, dinheiro em espécie e lista de telefones úteis impressa.',
        'Agasalhos, cobertor térmico e calçado fechado impermeável.',
        'Itens para pets: ração, água, coleira e caixa de transporte.',
      ]}
    />

    <Highlight title="Telefones que valem estar na geladeira">
      Defesa Civil: <strong>199</strong> · Bombeiros: <strong>193</strong> · SAMU:
      <strong> 192</strong> · Emergência da distribuidora de energia (varia por estado)
    </Highlight>

    <H2>Perguntas frequentes sobre o ciclone-bomba de 2026</H2>

    <FAQ
      items={[
        {
          q: 'O que é exatamente um ciclone-bomba?',
          a: 'É um ciclone extratropical cuja pressão central cai pelo menos 24 hectopascais em 24 horas, processo chamado de ciclogênese explosiva ou bombogênese. Essa queda rápida cria um gradiente de pressão muito acentuado, que se traduz em ventos destrutivos.',
        },
        {
          q: 'Ciclone-bomba é a mesma coisa que furacão?',
          a: 'Não. O furacão é um ciclone tropical, alimentado por água oceânica muito quente e com núcleo quente e olho definido. O ciclone-bomba é extratropical, alimentado pelo contraste entre massas de ar frio e quente, e tem núcleo frio. O único furacão documentado no Atlântico Sul foi o Catarina, em 2004.',
        },
        {
          q: 'Quais foram os principais impactos do ciclone-bomba de agosto de 2026?',
          a: 'Uma morte confirmada em Montenegro (RS), cinco feridos, danos em cerca de cem municípios gaúchos, aproximadamente 294 mil imóveis sem energia, rajada de 120,4 km/h em Porto Alegre, um tornado em Pedro Osório, 109 km/h em Santos e suspensão de aulas em cidades do litoral paulista, de São Paulo e do Rio de Janeiro.',
        },
        {
          q: 'Como se proteger de ventos acima de 100 km/h?',
          a: 'Permaneça em ambiente interno longe de vidros, recolha objetos soltos antes do evento, verifique fixação de telhas e antenas, desligue aparelhos da tomada, não se aproxime de fios caídos e evite deslocamentos até o fim do alerta oficial.',
        },
        {
          q: 'Quais aplicativos usar para acompanhar ciclones no Brasil?',
          a: 'Para alertas oficiais, o app do Inmet e o serviço de SMS da Defesa Civil (envie o CEP para 40199). Para previsão e visualização de rajadas, Windy, Climatempo, AccuWeather e o portal do CPTEC/INPE são as opções mais confiáveis em 2026.',
        },
        {
          q: 'Por que faltou energia em tantos imóveis?',
          a: 'A rede de distribuição brasileira é majoritariamente aérea e convive com arborização urbana pouco manejada. Ventos acima de 90 km/h derrubam galhos e árvores inteiras sobre os cabos, provocando desligamentos em cadeia. O apagão também afetou estações de tratamento e bombeamento de água.',
        },
        {
          q: 'Tornado no Brasil é comum?',
          a: 'Mais do que se imagina. O Sul do país é considerado o segundo maior corredor de tornados do mundo. Em 2026, o Rio Grande do Sul registrou dois tornados em menos de duas semanas, em julho e em agosto.',
        },
        {
          q: 'As mudanças climáticas causaram este ciclone?',
          a: 'Nenhum evento isolado é causado por um único fator. O que a ciência indica é que oceanos e atmosfera mais quentes aumentam a energia e a umidade disponíveis, tornando mais provável que ciclones que se formam atinjam intensidade extrema.',
        },
      ]}
    />
  </>
);

/* ==========================================================================
   ARTIGO 2: Onda de calor recorde no Leste da Ásia — agosto de 2026
   ========================================================================== */
export const OndaCalorAsiaArticle: React.FC<{ midImage: string }> = ({ midImage }) => (
  <>
    <Lead>
      A <strong>onda de calor recorde no Leste da Ásia em 2026</strong> transformou o início de
      agosto em uma emergência de saúde pública simultânea na Coreia do Sul, na Coreia do Norte e no
      Japão. Ao menos 16 mortes foram confirmadas em território sul-coreano, torcedores desmaiaram
      em estádios de beisebol, leões morreram em um zoológico e a cidade de Kumamoto, no Japão,
      ultrapassou os 40 °C pela primeira vez na história — justamente onde milhares de pessoas
      seguiam em abrigos após um terremoto de magnitude 7,1.
    </Lead>

    <P>
      Não se trata de "um verão quente". Trata-se de um evento meteorológico com assinatura própria:
      uma cúpula de calor persistente, umidade oceânica elevada e noites que deixaram de esfriar.
      Essa combinação é o que transforma temperatura em mortalidade — e é também o que a torna
      previsível, e portanto evitável.
    </P>

    <Highlight title="Resumo do evento">
      Alta pressão bloqueante sobre o Mar do Japão + ar marítimo saturado + ilhas de calor urbanas →
      índices de calor acima de 40 °C por vários dias consecutivos, noites tropicais sem alívio
      térmico e colapso da capacidade humana de dissipar calor.
    </Highlight>

    <H2>O que é uma cúpula de calor (heat dome) e por que ela mata</H2>

    <P>
      Uma cúpula de calor se forma quando um sistema de alta pressão de grande escala se instala e
      permanece parado por dias. O ar dentro dele desce lentamente; ao descer, comprime-se e aquece.
      Ao mesmo tempo, a alta pressão dissolve nuvens, escancarando a superfície para o sol e
      bloqueando a chegada de frentes que trariam alívio.
    </P>

    <P>
      O resultado é um ciclo de retroalimentação: o solo seca, deixa de gastar energia evaporando
      água e passa a gastá-la aquecendo o ar. Cada dia consecutivo é mais quente que o anterior — não
      porque o sol mudou, mas porque o sistema perdeu sua válvula de escape.
    </P>

    <H3>O detalhe que a maioria dos noticiários ignora: a noite</H3>

    <P>
      O corpo humano tolera bem um pico de calor de algumas horas. O que ele não tolera é ficar sem
      janela de recuperação. Quando a mínima noturna se mantém acima de 25 °C — o que os japoneses
      chamam de <em>nettaiya</em>, ou noite tropical — o organismo entra no dia seguinte já com déficit
      de resfriamento. É por isso que a curva de mortalidade em ondas de calor costuma disparar a
      partir do terceiro dia consecutivo, e não no dia mais quente.
    </P>

    <PullQuote>
      Ondas de calor matam devagar e em silêncio. Não há imagem de destruição, não há telhado
      arrancado. Há idosos sozinhos em apartamentos abafados — e um número na estatística semanas
      depois.
    </PullQuote>

    <H2>O que aconteceu no Leste da Ásia em agosto de 2026</H2>

    <H3>Coreia do Sul: 16 mortes e alerta nacional</H3>

    <P>
      Autoridades sul-coreanas confirmaram ao menos 16 mortes associadas ao calor extremo no início
      de agosto de 2026, com aviso de onda de calor vigente na maior parte do país e alerta específico
      para Seul, cuja densidade populacional amplifica o efeito de ilha de calor urbana. Cenas
      cotidianas viraram sintoma: torcedores desmaiando em estádios de beisebol e uma mulher
      encontrada morta dentro de um carro, ambiente que pode ultrapassar 60 °C em poucos minutos sob
      sol direto.
    </P>

    <H3>Japão: 40,3 °C em Kumamoto, com abrigos lotados</H3>

    <P>
      No Japão, a província de Kumamoto superou 40 °C pela primeira vez na história registrada,
      atingindo <strong>40,3 °C</strong>. O agravante foi cruel: mais de 8.500 pessoas estavam em
      abrigos temporários após um terremoto de magnitude 7,1 — estruturas geralmente coletivas, com
      ventilação limitada, pouca privacidade e climatização insuficiente. Postos improvisados de
      distribuição de água tornaram-se ponto de concentração diária de moradores deslocados.
    </P>

    <Warning title="Desastres compostos: o novo normal do risco">
      Terremoto seguido de onda de calor. Enchente seguida de surto de doença. Incêndio seguido de
      colapso da qualidade do ar. Chama-se risco composto: dois eventos que, isolados, seriam
      gerenciáveis, mas que sobrepostos saturam o sistema de resposta. É o padrão que mais cresce nos
      relatórios de gestão de desastres em 2026.
    </Warning>

    <H3>Coreia do Norte e o impacto invisível</H3>

    <P>
      Na Coreia do Norte, onde a cobertura de dados é limitada, o mesmo bloqueio atmosférico atingiu
      áreas agrícolas em fase sensível do ciclo do arroz. Ondas de calor prolongadas durante o
      florescimento reduzem a fertilidade das espiguetas e comprometem a produtividade meses antes da
      colheita — um efeito silencioso que só aparece nas estatísticas de segurança alimentar no fim do
      ano.
    </P>

    <figure className="my-10">
      <img
        src={midImage}
        alt="Idosos se refrescando em estação pública de névoa de água durante onda de calor recorde no Leste da Ásia em 2026"
        width={800}
        height={600}
        loading="lazy"
        className="w-full rounded-lg shadow-lg"
      />
      <figcaption className="mt-3 text-sm text-muted-foreground">
        Estações públicas de resfriamento se tornaram infraestrutura essencial durante a onda de calor
        de agosto de 2026 no Leste da Ásia.
      </figcaption>
    </figure>

    <H2>Índice de calor: por que o termômetro sozinho engana</H2>

    <P>
      Trinta e cinco graus com ar seco e 35 °C com 80% de umidade são eventos fisiologicamente
      diferentes. O corpo humano se resfria principalmente pela evaporação do suor; quando o ar já
      está saturado de vapor, o suor escorre sem evaporar e o mecanismo falha. Por isso o Leste da
      Ásia, banhado por ar marítimo úmido, sofre mais a 36 °C do que regiões desérticas a 44 °C.
    </P>

    <DataTable
      headers={['Índice de calor (sensação)', 'Faixa', 'Efeito esperado no organismo']}
      rows={[
        ['27 a 32 °C', 'Cautela', 'Fadiga em exposição prolongada ou atividade física'],
        ['32 a 41 °C', 'Cautela extrema', 'Cãibras e exaustão por calor são prováveis'],
        ['41 a 54 °C', 'Perigo', 'Exaustão provável e risco real de insolação'],
        ['Acima de 54 °C', 'Perigo extremo', 'Insolação iminente; risco de morte em poucas horas'],
      ]}
    />

    <H3>Termômetro de bulbo úmido: o limite fisiológico</H3>

    <P>
      A métrica que mais preocupa os cientistas é a temperatura de bulbo úmido. Acima de
      aproximadamente 35 °C de bulbo úmido, nenhum ser humano — nem jovem, nem saudável, nem em
      repouso à sombra — consegue dissipar calor metabólico. É um limite físico, não estatístico.
      Regiões do Sul e do Leste da Ásia e do Golfo Pérsico já registraram episódios curtos próximos
      dessa fronteira, um marco que a <ExternalLink href="https://climate.nasa.gov/">NASA</ExternalLink>
      acompanha como um dos indicadores mais críticos do aquecimento global.
    </P>

    <H2>Como se proteger de uma onda de calor: guia completo</H2>

    <H3>Prevenção diária durante o alerta</H3>

    <Checklist
      items={[
        'Beba água em intervalos regulares, sem esperar a sede — a sede já é sinal de desidratação inicial.',
        'Evite exposição ao sol entre 10h e 16h; reorganize tarefas externas para o começo da manhã.',
        'Use roupas leves, folgadas e de cores claras, em algodão ou linho.',
        'Prefira refeições leves e fracionadas; digestão pesada aumenta a produção de calor interno.',
        'Reduza álcool, cafeína e bebidas muito açucaradas, que favorecem a desidratação.',
        'Tome banhos mornos ou frios e umedeça pulsos, nuca e pés — pontos de troca térmica eficiente.',
        'Feche cortinas e persianas no lado ensolarado durante o dia e ventile a casa à noite.',
        'Use ventilador com um recipiente de gelo à frente quando não houver ar-condicionado.',
        'Nunca deixe crianças, idosos ou animais dentro de veículos, nem por um minuto.',
      ]}
    />

    <H3>Grupos de maior risco</H3>

    <Checklist
      items={[
        'Idosos acima de 65 anos, especialmente quem mora sozinho.',
        'Bebês e crianças pequenas, que têm menor capacidade de termorregulação.',
        'Gestantes.',
        'Pessoas com doenças cardiovasculares, renais, respiratórias ou diabetes.',
        'Usuários de diuréticos, antidepressivos, anti-histamínicos e alguns anti-hipertensivos.',
        'Trabalhadores externos: construção, entregas por aplicativo, agricultura e coleta de resíduos.',
        'Pessoas em situação de rua e populações em abrigos temporários.',
      ]}
    />

    <Warning title="Reconheça a insolação — é emergência médica">
      Sinais de alarme: pele quente e seca (ou suor que cessa de repente), temperatura corporal acima
      de 40 °C, confusão mental, fala arrastada, convulsão ou desmaio. Ligue imediatamente para o
      serviço de emergência, leve a pessoa para local fresco, retire o excesso de roupa e resfrie com
      água e compressas em pescoço, axilas e virilhas enquanto aguarda socorro. <strong>Não</strong>
      ofereça líquidos a quem estiver inconsciente.
    </Warning>

    <H2>Dicas de conforto térmico para casa e trabalho</H2>

    <P>
      Conforto térmico não depende só de ar-condicionado — depende de como o calor entra, circula e
      sai do ambiente.
    </P>

    <DataTable
      headers={['Medida', 'Efeito estimado', 'Custo']}
      rows={[
        ['Cortina blackout ou película refletiva nas janelas ensolaradas', 'Reduz de 3 a 5 °C no cômodo', 'Baixo'],
        ['Ventilação cruzada nas horas mais frescas', 'Renova o ar e reduz a umidade interna', 'Nenhum'],
        ['Telhado claro ou tinta térmica', 'Reduz de 2 a 4 °C sob a laje', 'Médio'],
        ['Ventilador de teto associado ao ar-condicionado a 25 °C', 'Mesma sensação com menos energia', 'Médio'],
        ['Plantas e sombreamento externo', 'Corta radiação direta na fachada', 'Baixo'],
        ['Manutenção do filtro do ar-condicionado', 'Até 15% mais eficiência', 'Baixo'],
      ]}
    />

    <Highlight title="Regra prática dos 3 Rs do calor">
      <strong>Reduzir</strong> a exposição (horários e sombra) · <strong>Repor</strong> líquidos e sais ·
      <strong> Resfriar</strong> o corpo e o ambiente. Se um dos três falhar, os outros dois precisam
      compensar.
    </Highlight>

    <H2>Ciclos climáticos explicados: por que 2026 está tão quente</H2>

    <H3>El Niño em intensificação</H3>

    <P>
      Um evento de El Niño de intensidade excepcional se organizou no Pacífico tropical ao longo de
      2026 e já influencia padrões atmosféricos globais. Anos de El Niño costumam bater recordes de
      temperatura média planetária, porque o oceano libera para a atmosfera calor acumulado em anos
      anteriores. Detalhamos os mecanismos e as projeções em
      <InternalLink to="/blog/super-el-nino-2026"> Super El Niño 2026</InternalLink>.
    </P>

    <H3>Alta subtropical do Pacífico Norte</H3>

    <P>
      No verão do Hemisfério Norte, a alta subtropical do Pacífico se expande para oeste e empurra ar
      quente e úmido sobre o arquipélago japonês e a península coreana. Quando essa expansão se
      combina com uma crista em altos níveis, forma-se a estrutura de bloqueio que sustenta a cúpula
      de calor por dias.
    </P>

    <H3>Ilhas de calor urbanas</H3>

    <P>
      Seul e Tóquio são exemplos clássicos: asfalto, concreto e ar-condicionado despejando calor na
      rua elevam a temperatura noturna em até 5 °C em relação às áreas rurais vizinhas. A onda de
      calor é meteorológica; a diferença entre viver e morrer nela é urbanística.
    </P>

    <H3>O contexto de longo prazo</H3>

    <P>
      O Ártico é o termômetro mais sensível do planeta e vem registrando mínimos históricos de gelo
      marinho, o que reduz o contraste térmico entre polo e trópicos e favorece padrões atmosféricos
      mais lentos e travados. Explicamos essa conexão em
      <InternalLink to="/blog/gelo-marinho-artico-minimo-historico-2026"> Gelo marinho do Ártico bate
      mínimo histórico em 2026</InternalLink>.
    </P>

    <H2>Dados históricos de ondas de calor no Leste da Ásia</H2>

    <DataTable
      headers={['Ano', 'Evento', 'Marca registrada']}
      rows={[
        ['2018', 'Onda de calor Japão/Coreia', 'Recorde nacional japonês de 41,1 °C em Kumagaya'],
        ['2022', 'Calor precoce na China e no Japão', 'Junho mais quente já registrado em várias estações'],
        ['2023', 'Verão global mais quente já medido', 'Sequência inédita de noites tropicais em Tóquio'],
        ['2024', 'Calor persistente no Nordeste asiático', 'Hospitalizações por insolação em alta no Japão'],
        ['2026', 'Onda de calor de agosto', '40,3 °C em Kumamoto (inédito) e 16 mortes na Coreia do Sul'],
      ]}
    />

    <P>
      A tendência é inequívoca: recordes que antes duravam décadas passaram a ser quebrados em
      intervalos de poucos anos. Estudos de atribuição climática — que comparam o clima atual com
      simulações de um planeta sem emissões humanas — vêm concluindo que várias dessas ondas de calor
      seriam <em>praticamente impossíveis</em> sem o aquecimento global.
    </P>

    <H2>Alertas governamentais e monitoramento oficial</H2>

    <DataTable
      headers={['País / órgão', 'Sistema de alerta', 'Observação']}
      rows={[
        ['Japão — JMA', 'Alerta especial de calor extremo por província', 'Emitido quando o índice WBGT projetado é muito alto'],
        ['Coreia do Sul — KMA', 'Heat wave advisory e heat wave warning', 'Ativa centros públicos de resfriamento'],
        ['Brasil — Inmet', 'Aviso de onda de calor por região', 'Considera desvio da média por dias consecutivos'],
        ['Global — OMM/ONU', 'Boletins sazonais e de atribuição', 'Referência para políticas públicas'],
      ]}
    />

    <P>
      No Brasil, o padrão de aviso do <ExternalLink href="https://portal.inmet.gov.br/">Inmet</ExternalLink>
      considera temperaturas 5 °C acima da média por três ou mais dias consecutivos. Recomendações de
      saúde e planos de resposta seguem também as orientações do
      <ExternalLink href="https://www.unep.org/pt-br"> PNUMA</ExternalLink> e da Organização Mundial de
      Meteorologia. Para acompanhar a situação em sua cidade, use a
      <InternalLink to="/agora"> página de tempo agora</InternalLink> e a previsão de
      <InternalLink to="/15-dias"> 15 dias</InternalLink>.
    </P>

    <H2>Melhores apps de monitoramento climático para ondas de calor</H2>

    <DataTable
      headers={['App / serviço', 'Diferencial em calor extremo', 'Custo']}
      rows={[
        ['Inmet', 'Avisos oficiais de onda de calor por município', 'Gratuito'],
        ['AccuWeather', 'Índice RealFeel, que combina calor, umidade, sol e vento', 'Freemium'],
        ['Windy', 'Camadas de temperatura, umidade e ponto de orvalho', 'Freemium'],
        ['Climatempo', 'Previsão e alertas em português com contexto regional', 'Freemium'],
        ['IQAir', 'Qualidade do ar, que costuma piorar em episódios de calor', 'Gratuito'],
        ['JMA / KMA (para viagens à Ásia)', 'Alertas locais de calor extremo em tempo real', 'Gratuito'],
      ]}
    />

    <H2>Prevenção e cuidados: o plano de 5 passos para sua família</H2>

    <P>
      Planos funcionam quando são simples o bastante para serem lembrados sob estresse. Este cabe em
      cinco linhas.
    </P>

    <Checklist
      items={[
        '1. Identifique quem é vulnerável na sua casa e no seu prédio — e quem liga para quem.',
        '2. Defina o cômodo mais fresco da casa como refúgio térmico do dia.',
        '3. Estabeleça uma meta de hidratação visível: garrafa marcada com horários.',
        '4. Combine dois check-ins diários com idosos que moram sozinhos.',
        '5. Salve o número da emergência e saiba reconhecer os sinais de insolação.',
      ]}
    />

    <InfoBox title="E no Brasil? O que este evento nos ensina">
      O Brasil não está imune. Ondas de calor têm se tornado mais frequentes no Centro-Oeste, no
      Sudeste e no Nordeste, e nossas cidades compartilham os mesmos fatores agravantes do Leste da
      Ásia: adensamento, pouca arborização, telhados escuros e desigualdade no acesso a climatização.
      Preparar cidades brasileiras para calor extremo é hoje uma agenda tão urgente quanto a de
      enchentes.
    </InfoBox>

    <H2>Perguntas frequentes sobre a onda de calor no Leste da Ásia em 2026</H2>

    <FAQ
      items={[
        {
          q: 'O que causou a onda de calor no Leste da Ásia em 2026?',
          a: 'Uma cúpula de calor formada por uma alta pressão bloqueante persistente, combinada com ar marítimo muito úmido, ilhas de calor urbanas e o contexto de El Niño intenso e aquecimento global de fundo.',
        },
        {
          q: 'Quantas pessoas morreram na onda de calor de agosto de 2026?',
          a: 'Ao menos 16 mortes foram confirmadas na Coreia do Sul no início de agosto de 2026. Números finais tendem a ser maiores, porque parte da mortalidade por calor é contabilizada semanas depois, como excesso de óbitos por causas cardiovasculares e renais.',
        },
        {
          q: 'Por que 40,3 °C em Kumamoto foi tão significativo?',
          a: 'Foi a primeira vez que a província japonesa ultrapassou os 40 °C na série histórica. O impacto foi agravado porque mais de 8.500 pessoas estavam em abrigos após um terremoto de magnitude 7,1, em estruturas com climatização limitada.',
        },
        {
          q: 'Como se proteger de uma onda de calor em casa?',
          a: 'Feche cortinas no lado ensolarado durante o dia, ventile à noite, use roupas leves, hidrate-se em intervalos regulares, tome banhos mornos, evite o sol entre 10h e 16h e defina um cômodo mais fresco como refúgio térmico.',
        },
        {
          q: 'Qual a diferença entre exaustão por calor e insolação?',
          a: 'Na exaustão por calor há suor intenso, fraqueza, náusea e pele fria e úmida — melhora com repouso em local fresco e hidratação. A insolação é emergência médica: pele quente, temperatura acima de 40 °C, confusão mental ou desmaio, exigindo socorro imediato.',
        },
        {
          q: 'Ventilador ajuda quando a temperatura está muito alta?',
          a: 'Ajuda até certo ponto. Acima de aproximadamente 35 °C de temperatura ambiente com umidade alta, o ventilador pode apenas soprar ar quente sobre a pele e reduzir a eficiência da perda de calor. Nessa faixa, priorize resfriamento por água e ambientes climatizados.',
        },
        {
          q: 'Quais aplicativos avisam sobre calor extremo?',
          a: 'Inmet e Defesa Civil para alertas oficiais no Brasil, AccuWeather pelo índice RealFeel, Windy para umidade e ponto de orvalho, Climatempo para contexto regional e IQAir para qualidade do ar, que costuma piorar durante ondas de calor.',
        },
        {
          q: 'Esse tipo de evento vai se repetir?',
          a: 'Sim. Estudos de atribuição climática indicam que ondas de calor dessa magnitude se tornaram muito mais prováveis com o aquecimento global e devem aumentar em frequência, duração e intensidade nas próximas décadas.',
        },
      ]}
    />
  </>
);
