import superElNinoCover from '@/assets/blog/super-el-nino-cover.jpg';
import superElNinoMid from '@/assets/blog/super-el-nino-mid.jpg';
import terremotoVenezuelaCover from '@/assets/blog/terremoto-venezuela-cover.jpg';
import terremotoVenezuelaMid from '@/assets/blog/terremoto-venezuela-mid.jpg';
import calorEuropaCover from '@/assets/blog/calor-europa-cover.jpg';
import calorEuropaMid from '@/assets/blog/calor-europa-mid.jpg';
import vulcoesCover from '@/assets/blog/vulcoes-2026-cover.jpg';
import vulcoesMid from '@/assets/blog/vulcoes-2026-mid.jpg';

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
