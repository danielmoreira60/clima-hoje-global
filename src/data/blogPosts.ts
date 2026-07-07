import superElNinoCover from '@/assets/blog/super-el-nino-cover.jpg';
import superElNinoMid from '@/assets/blog/super-el-nino-mid.jpg';
import terremotoVenezuelaCover from '@/assets/blog/terremoto-venezuela-cover.jpg';
import terremotoVenezuelaMid from '@/assets/blog/terremoto-venezuela-mid.jpg';
import calorEuropaCover from '@/assets/blog/calor-europa-cover.jpg';
import calorEuropaMid from '@/assets/blog/calor-europa-mid.jpg';
import vulcoesCover from '@/assets/blog/vulcoes-2026-cover.jpg';
import vulcoesMid from '@/assets/blog/vulcoes-2026-mid.jpg';
import pernambucoSecaCover from '@/assets/blog/pernambuco-seca-cover.jpg';
import pernambucoSecaMid from '@/assets/blog/pernambuco-seca-mid.jpg';
import tornadosBrasilCover from '@/assets/blog/tornados-brasil-cover.jpg';
import tornadosBrasilMid from '@/assets/blog/tornados-brasil-mid.jpg';
import incendiosChileCover from '@/assets/blog/incendios-chile-cover.jpg';
import incendiosChileMid from '@/assets/blog/incendios-chile-mid.jpg';
import terremotoFilipinasCover from '@/assets/blog/terremoto-filipinas-cover.jpg';
import terremotoFilipinasMid from '@/assets/blog/terremoto-filipinas-mid.jpg';
import articoGeloCover from '@/assets/blog/artico-gelo-cover.jpg';
import articoGeloMid from '@/assets/blog/artico-gelo-mid.jpg';
import amazoniaSecaCover from '@/assets/blog/amazonia-seca-cover.jpg';
import amazoniaSecaMid from '@/assets/blog/amazonia-seca-mid.jpg';
import tufaoMaysakCover from '@/assets/blog/tufao-maysak-cover.jpg';
import tufaoMaysakMid from '@/assets/blog/tufao-maysak-mid.jpg';
import ondaFrioPolarCover from '@/assets/blog/onda-frio-polar-cover.jpg';
import ondaFrioPolarMid from '@/assets/blog/onda-frio-polar-mid.jpg';

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  date: string;
  dateISO: string;
  readTime: string;
  author: string;
  cover: string;
  midImage: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
}

export const blogPosts: BlogPostMeta[] = [
  {
    slug: 'tufao-maysak-china-2026',
    title: 'Tufão Maysak 2026: super tufão atinge a China com ventos de 240 km/h e mais de 1 milhão de evacuados',
    excerpt:
      'Análise completa do Tufão Maysak que atingiu a costa leste da China em julho de 2026: intensidade, trajetória, impactos, comparações históricas e guia de proteção.',
    category: 'Clima Extremo',
    categoryColor: 'from-cyan-500 to-blue-600',
    date: '07 Jul 2026',
    dateISO: '2026-07-07',
    readTime: '12 min',
    author: 'Equipe Clima Tempo',
    cover: tufaoMaysakCover,
    midImage: tufaoMaysakMid,
    tags: [
      'tufão maysak 2026',
      'tufão china 2026',
      'super tufão pacífico oeste',
      'landfall zhejiang ningbo',
      'evacuação china tufão',
      'ciclones tropicais 2026',
      'furacão vs tufão vs ciclone',
      'temporada de tufões pacífico',
      'previsão de tufões 2026',
      'como se proteger de tufão',
      'como se proteger de furacão',
      'melhores apps de monitoramento climático',
      'windy accuweather climatempo',
      'ciclos climáticos explicados',
      'dados históricos tufões china',
      'alertas governamentais china',
      'prevenção e cuidados ciclone tropical',
      'intensificação rápida tufão',
      'aquecimento oceânico ciclones',
      'ciclone bomba brasil 2026',
      'furacão catarina 2004',
      'dicas de conforto térmico chuva',
    ],
    metaTitle: 'Tufão Maysak 2026 na China: 240 km/h, Trajetória e Impactos',
    metaDescription:
      'Super Tufão Maysak atinge China em julho de 2026 com ventos de 240 km/h. Dados, trajetória, apps de monitoramento e guia de proteção.',
  },
  {
    slug: 'onda-frio-polar-antartica-brasil-2026',
    title: 'Onda de frio polar antártica no Brasil em 2026: neve em 43 cidades e −9 °C em Santa Catarina',
    excerpt:
      'A maior onda de frio desde 2013 atingiu o Brasil em julho de 2026, com neve em 43 cidades, friagem na Amazônia e prejuízos agrícolas. Entenda causas, impactos e como se proteger.',
    category: 'Clima Extremo',
    categoryColor: 'from-sky-500 to-indigo-600',
    date: '07 Jul 2026',
    dateISO: '2026-07-07',
    readTime: '13 min',
    author: 'Equipe Clima Tempo',
    cover: ondaFrioPolarCover,
    midImage: ondaFrioPolarMid,
    tags: [
      'onda de frio brasil 2026',
      'massa polar antártica 2026',
      'neve no sul do brasil 2026',
      'friagem amazônia 2026',
      'geada 2026 café soja',
      'urupema são joaquim -9 graus',
      'menor temperatura brasil 2026',
      'como se proteger do frio extremo',
      'dicas de conforto térmico frio',
      'melhores apps de monitoramento climático',
      'inmet climatempo metsul',
      'ciclos climáticos la niña',
      'la niña 2026 brasil',
      'dados históricos ondas de frio',
      'alertas governamentais frio',
      'prevenção e cuidados hipotermia',
      'vórtice polar antártico',
      'jato polar deslocado',
      'geada negra café paraná',
      'demanda energia elétrica ons',
      'saúde pública frio idosos crianças',
      'proteção pets frio extremo',
    ],
    metaTitle: 'Onda de Frio Polar 2026 no Brasil: Neve, -9 °C e Alertas',
    metaDescription:
      'Onda de frio polar antártica atinge Brasil em julho de 2026: neve em 43 cidades, -9°C em SC, friagem na Amazônia e como se proteger.',
  },
  {
    slug: 'gelo-marinho-artico-minimo-historico-2026',
    title: 'Gelo marinho do Ártico bate mínimo histórico em 2026 e alerta o mundo',
    excerpt:
      'O gelo marinho do Ártico atingiu o menor volume invernal em 47 anos de observação por satélite. Entenda as causas, impactos globais, consequências no clima do Brasil e como se proteger.',
    category: 'Mudanças Climáticas',
    categoryColor: 'from-cyan-500 to-blue-600',
    date: '06 Jul 2026',
    dateISO: '2026-07-06',
    readTime: '12 min',
    author: 'Equipe Clima Tempo',
    cover: articoGeloCover,
    midImage: articoGeloMid,
    tags: [
      'gelo marinho ártico 2026',
      'ártico mínimo histórico',
      'derretimento do ártico',
      'mudanças climáticas 2026',
      'vórtice polar 2026',
      'aquecimento global ártico',
      'nsidc dados ártico',
      'copernicus clima 2026',
      'ondas de calor hemisfério norte',
      'dicas de conforto térmico',
      'como se proteger de ondas de calor',
      'melhores apps de monitoramento climático',
      'ciclos climáticos explicados',
      'dados históricos gelo marinho',
      'alertas governamentais clima',
      'prevenção e cuidados clima extremo',
      'jato polar enfraquecido',
      'metano permafrost',
      'atlantificação do ártico',
      'previsão do tempo brasil 2026',
    ],
    metaTitle: 'Gelo Marinho do Ártico Atinge Mínimo Histórico em 2026',
    metaDescription:
      'Ártico registra menor volume de gelo marinho em 47 anos em 2026. Causas, impactos no Brasil, apps de monitoramento e como se proteger.',
  },
  {
    slug: 'amazonia-seca-historica-2026',
    title: 'Amazônia enfrenta pior seca histórica em 2026: Rio Negro atinge 12,68 m em Manaus',
    excerpt:
      'Rios amazônicos em nível crítico, 700 mil pessoas afetadas e cinco estados em emergência. Análise completa da seca histórica de 2026, causas climáticas e como se proteger.',
    category: 'Clima Extremo',
    categoryColor: 'from-red-500 to-orange-600',
    date: '05 Jul 2026',
    dateISO: '2026-07-05',
    readTime: '13 min',
    author: 'Equipe Clima Tempo',
    cover: amazoniaSecaCover,
    midImage: amazoniaSecaMid,
    tags: [
      'seca na amazônia 2026',
      'rio negro nível mínimo',
      'rio negro 12 metros manaus',
      'seca hidrológica amazônia',
      'estiagem amazônia 2026',
      'queimadas amazônia 2026',
      'ponto de não retorno amazônia',
      'rios voadores amazônia',
      'desmatamento amazônia 2026',
      'super el niño residual',
      'atlântico norte quente',
      'como se proteger da fumaça',
      'dicas de conforto térmico calor',
      'melhores apps de monitoramento climático',
      'qualidade do ar fumaça amazônia',
      'iqar amazônia',
      'ciclos climáticos explicados',
      'dados históricos seca amazônia',
      'alertas governamentais estiagem',
      'prevenção e cuidados queimadas',
      'inpe queimadas monitoramento',
      'hidrelétricas belo monte tucuruí',
      'crise energética 2026',
      'zcit deslocamento',
    ],
    metaTitle: 'Amazônia: Pior Seca da História em 2026, Rio Negro em 12,68 m',
    metaDescription:
      'Amazônia vive pior seca hidrológica da história em 2026. Rio Negro em 12,68 m, causas do El Niño, apps de monitoramento e como se proteger.',
  },
  {
    slug: 'incendios-florestais-chile-2026',
    title: 'Incêndios florestais devastam o Chile em 2026: 480 mil hectares queimados e caos climático',
    excerpt:
      'Onda de calor extrema, ventos Puelche e megasseca de mais de uma década alimentam a pior temporada de incêndios florestais da história recente do Chile. Entenda causas, impactos e como se proteger.',
    category: 'Clima Extremo',
    categoryColor: 'from-red-500 to-orange-600',
    date: '05 Jul 2026',
    dateISO: '2026-07-05',
    readTime: '12 min',
    author: 'Equipe Clima Tempo',
    cover: incendiosChileCover,
    midImage: incendiosChileMid,
    tags: [
      'incêndios florestais chile 2026',
      'incêndios chile hoje',
      'onda de calor chile',
      'megasseca chile',
      'ventos puelche chile',
      'como se proteger de incêndios florestais',
      'dicas de conforto térmico onda de calor',
      'melhores apps de monitoramento climático',
      'qualidade do ar fumaça incêndio',
      'alertas conaf senapred chile',
      'ciclos climáticos el niño la niña',
      'mudanças climáticas américa do sul',
      'prevenção incêndio florestal',
      'dados históricos incêndios chile',
      'incêndio valparaíso biobío maule',
    ],
    metaTitle: 'Incêndios Florestais no Chile 2026: 480 Mil Hectares em Chamas',
    metaDescription:
      'Chile enfrenta pior temporada de incêndios florestais de 2026: causas climáticas, impactos, apps de monitoramento e como se proteger da fumaça.',
  },
  {
    slug: 'terremoto-filipinas-7-8-2026',
    title: 'Terremoto de magnitude 7,8 no sul das Filipinas em 2026: Mindanao devastada e alerta de tsunami',
    excerpt:
      'Sismo de 7,8 Mw abalou Mindanao em 2026, gerou alerta de tsunami em todo o Pacífico ocidental e provocou centenas de mortes. Análise geológica, dados USGS/PHIVOLCS e guia de proteção.',
    category: 'Geologia',
    categoryColor: 'from-amber-500 to-orange-600',
    date: '04 Jul 2026',
    dateISO: '2026-07-04',
    readTime: '13 min',
    author: 'Equipe Clima Tempo',
    cover: terremotoFilipinasCover,
    midImage: terremotoFilipinasMid,
    tags: [
      'terremoto filipinas 2026',
      'terremoto mindanao 7.8',
      'sismo filipinas hoje',
      'alerta de tsunami pacífico',
      'anel de fogo do pacífico',
      'fossa das filipinas',
      'placas tectônicas asia',
      'como se proteger de terremoto',
      'como se proteger de tsunami',
      'melhores apps de monitoramento sísmico',
      'myshake usgs phivolcs app',
      'terremoto general santos davao',
      'ciclos sísmicos explicados',
      'risco de terremoto no brasil',
      'dados históricos terremotos filipinas',
      'prevenção e cuidados terremoto',
      'alertas governamentais tsunami',
      'placa das filipinas subducção',
    ],
    metaTitle: 'Terremoto 7,8 nas Filipinas 2026: Mindanao, Tsunami e Análise',
    metaDescription:
      'Terremoto 7,8 Mw sacode Mindanao em 2026: dados USGS, alerta de tsunami, causas geológicas e guia completo de proteção contra sismos.',
  },
  {
    slug: 'pernambuco-emergencia-seca-75-cidades',
    title: 'Pernambuco decreta emergência em 75 cidades por seca: reservatórios em nível crítico',
    excerpt:
      'O governo de Pernambuco decretou situação de emergência em 75 municípios afetados pela estiagem prolongada, com reservatórios da Compesa em níveis críticos e forte impacto no Sertão e Agreste.',
    category: 'Clima Extremo',
    categoryColor: 'from-red-500 to-orange-600',
    date: '02 Jul 2026',
    dateISO: '2026-07-02',
    readTime: '15 min',
    author: 'Equipe Clima Tempo',
    cover: pernambucoSecaCover,
    midImage: pernambucoSecaMid,
    tags: [
      'seca em pernambuco 2026',
      'emergência 75 municípios pernambuco',
      'estiagem sertão pernambucano',
      'reservatórios compesa nível crítico',
      'seca hidrológica nordeste',
      'decreto emergência seca pernambuco',
      'crise hídrica agreste',
      'previsão de chuvas nordeste 2026',
      'agricultura seca nordeste',
      'clima semiárido brasil',
    ],
    metaTitle: 'Pernambuco: Emergência em 75 Cidades por Seca e Estiagem 2026',
    metaDescription:
      'Governo de PE decreta emergência em 75 municípios por estiagem e seca hidrológica. Entenda a crise dos reservatórios, causas climáticas e previsão.',
  },
  {
    slug: 'segundo-maior-corredor-tornados-brasil',
    title: 'Segundo maior corredor de tornados do mundo fica no Brasil: por que o Paraná é tão vulnerável',
    excerpt:
      'Pesquisadores confirmam que o Sul do Brasil abriga o segundo maior corredor de tornados do planeta, atrás apenas do Tornado Alley dos EUA. Entenda o fenômeno que destruiu Rio Bonito do Iguaçu, Guarapuava e Turvo.',
    category: 'Clima Extremo',
    categoryColor: 'from-violet-500 to-purple-600',
    date: '01 Jul 2026',
    dateISO: '2026-07-01',
    readTime: '16 min',
    author: 'Equipe Clima Tempo',
    cover: tornadosBrasilCover,
    midImage: tornadosBrasilMid,
    tags: [
      'corredor de tornados brasil',
      'tornado no paraná 2026',
      'tornado rio bonito do iguaçu',
      'tornado guarapuava',
      'segundo maior corredor de tornados do mundo',
      'tornado alley brasil',
      'meteorologia paraná',
      'escala fujita tornado brasil',
      'como se proteger de tornado',
      'ciclones extratropicais sul do brasil',
    ],
    metaTitle: 'Segundo Maior Corredor de Tornados do Mundo Está no Brasil',
    metaDescription:
      'Sul do Brasil é o 2º maior corredor de tornados do planeta. Entenda por que o Paraná é tão vulnerável, escala Fujita e como se proteger.',
  },
  {
    slug: 'calor-extremo-europa-2026',
    title: 'Calor Extremo na Europa 2026: onda de calor histórica bate recordes em Paris, Roma e Madri',
    excerpt:
      'Análise aprofundada da onda de calor extremo que atinge a Europa em 2026, com temperaturas acima de 47 °C, mortes, incêndios florestais e o que dizem Copernicus e EUMETSAT sobre o fenômeno.',
    category: 'Clima Extremo',
    categoryColor: 'from-red-500 to-orange-600',
    date: '01 Jul 2026',
    dateISO: '2026-07-01',
    readTime: '15 min',
    author: 'Equipe Clima Tempo',
    cover: calorEuropaCover,
    midImage: calorEuropaMid,
    tags: [
      'calor extremo europa 2026',
      'onda de calor europa 2026',
      'temperatura recorde europa',
      'heatwave europe 2026',
      'calor em paris 2026',
      'calor em roma 2026',
      'incêndios florestais europa',
      'mudanças climáticas europa',
      'copernicus clima 2026',
    ],
    metaTitle: 'Calor Extremo na Europa 2026: Recordes, Impactos e Previsão',
    metaDescription:
      'Onda de calor extremo Europa 2026: temperaturas recordes, dados Copernicus, incêndios, mortes e previsão para julho e agosto.',
  },
  {
    slug: 'vulcoes-erupcao-2026',
    title: 'Vulcões em Erupção em 2026: os principais eventos vulcânicos do ano e seus impactos globais',
    excerpt:
      'Cobertura completa das erupções vulcânicas ativas em 2026 — Islândia, Indonésia, Filipinas e Congo — com dados do Smithsonian, análise geológica e riscos para a aviação e o clima.',
    category: 'Geologia',
    categoryColor: 'from-amber-500 to-orange-600',
    date: '30 Jun 2026',
    dateISO: '2026-06-30',
    readTime: '14 min',
    author: 'Equipe Clima Tempo',
    cover: vulcoesCover,
    midImage: vulcoesMid,
    tags: [
      'vulcões em erupção 2026',
      'erupção vulcânica 2026',
      'vulcão islândia 2026',
      'vulcão indonésia 2026',
      'vulcão filipinas 2026',
      'monte etna erupção',
      'nyiragongo erupção',
      'cinzas vulcânicas aviação',
      'impacto climático vulcões',
    ],
    metaTitle: 'Vulcões em Erupção em 2026: Lista Completa e Análise Global',
    metaDescription:
      'Vulcões em erupção 2026: eventos ativos na Islândia, Indonésia, Filipinas e Congo, dados do Smithsonian e impactos globais.',
  },
  {
    slug: 'super-el-nino-2026',
    title: 'Super El Niño 2026: o que esperar do fenômeno climático mais intenso da década',
    excerpt:
      'Análise completa do Super El Niño 2026, seus impactos no Brasil e no mundo, previsões da NOAA, INMET e OMM, e como se preparar para secas, enchentes e temperaturas recordes.',
    category: 'Clima Extremo',
    categoryColor: 'from-violet-500 to-purple-600',
    date: '28 Jun 2026',
    dateISO: '2026-06-28',
    readTime: '14 min',
    author: 'Equipe Clima Tempo',
    cover: superElNinoCover,
    midImage: superElNinoMid,
    tags: [
      'super el niño 2026',
      'el niño no brasil 2026',
      'previsão el niño 2026',
      'impactos climáticos 2026',
      'temperatura recorde 2026',
      'enchentes sul do brasil',
      'seca amazônia',
      'aquecimento global',
    ],
    metaTitle: 'Super El Niño 2026: Impactos, Previsões e Como se Preparar',
    metaDescription:
      'Tudo sobre o Super El Niño 2026: previsões da NOAA, impactos no Brasil, secas, enchentes, temperatura recorde e dicas para se preparar.',
  },
  {
    slug: 'terremoto-venezuela-2026',
    title: 'Terremoto na Venezuela 2026: duplo sismo de 7,2 e 7,5 devasta o país em junho',
    excerpt:
      'Cobertura completa dos terremotos históricos de 24 de junho de 2026 na Venezuela: duplo sismo de magnitudes 7,2 e 7,5, o maior evento sísmico já registrado no país, com milhares de mortos e desaparecidos.',
    category: 'Geologia',
    categoryColor: 'from-amber-500 to-orange-600',
    date: '26 Jun 2026',
    dateISO: '2026-06-26',
    readTime: '15 min',
    author: 'Equipe Clima Tempo',
    cover: terremotoVenezuelaCover,
    midImage: terremotoVenezuelaMid,
    tags: [
      'terremoto venezuela 2026',
      'terremoto venezuela 24 junho 2026',
      'duplo terremoto venezuela',
      'terremoto caracas hoje',
      'sismo venezuela magnitude 7.5',
      'falha de boconó',
      'placa do caribe',
      'terremoto américa do sul 2026',
      'epicentro venezuela',
      'risco sísmico brasil',
    ],
    metaTitle: 'Terremoto na Venezuela 2026: Duplo Sismo 7,2 e 7,5 em Junho',
    metaDescription:
      'Terremoto histórico na Venezuela em 24/06/2026: duplo sismo 7,2 e 7,5, o maior da história, milhares de mortos, dados USGS e análise.',
  },
];

export const getPostBySlug = (slug: string) => blogPosts.find((p) => p.slug === slug);
