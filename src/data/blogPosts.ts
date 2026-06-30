import superElNinoCover from '@/assets/blog/super-el-nino-cover.jpg';
import superElNinoMid from '@/assets/blog/super-el-nino-mid.jpg';
import terremotoVenezuelaCover from '@/assets/blog/terremoto-venezuela-cover.jpg';
import terremotoVenezuelaMid from '@/assets/blog/terremoto-venezuela-mid.jpg';

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
    title: 'Terremoto na Venezuela 2026: o que aconteceu, magnitude e riscos para a América do Sul',
    excerpt:
      'Cobertura detalhada dos terremotos que atingiram a Venezuela em 2026, dados do USGS e da Funvisis, falhas tectônicas envolvidas e riscos para países vizinhos como Brasil e Colômbia.',
    category: 'Geologia',
    categoryColor: 'from-amber-500 to-orange-600',
    date: '26 Jun 2026',
    dateISO: '2026-06-26',
    readTime: '13 min',
    author: 'Equipe Clima Tempo',
    cover: terremotoVenezuelaCover,
    midImage: terremotoVenezuelaMid,
    tags: [
      'terremoto venezuela 2026',
      'terremoto caracas hoje',
      'sismo venezuela magnitude',
      'falha de boconó',
      'placa do caribe',
      'terremoto américa do sul 2026',
      'epicentro venezuela',
      'risco sísmico brasil',
    ],
    metaTitle: 'Terremoto na Venezuela 2026: Magnitude, Epicentro e Análise',
    metaDescription:
      'Terremoto na Venezuela 2026: dados do USGS, magnitude, epicentro, falha de Boconó, impactos em Caracas e riscos para a América do Sul.',
  },
];

export const getPostBySlug = (slug: string) => blogPosts.find((p) => p.slug === slug);
