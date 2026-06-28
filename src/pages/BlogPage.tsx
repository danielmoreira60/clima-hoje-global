import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import {
  BookOpen, Calendar, Clock, Search, ArrowRight, Tag, TrendingUp, Sparkles,
  Cloud, Flame, Waves, Mountain, Wind, Sun,
} from 'lucide-react';

const categories = [
  { name: 'Meteorologia', color: 'from-sky-500 to-blue-600', icon: Cloud },
  { name: 'Eventos Naturais', color: 'from-red-500 to-orange-600', icon: Flame },
  { name: 'Oceanos', color: 'from-cyan-500 to-teal-600', icon: Waves },
  { name: 'Geologia', color: 'from-amber-500 to-yellow-600', icon: Mountain },
  { name: 'Clima Extremo', color: 'from-violet-500 to-purple-600', icon: Wind },
  { name: 'Sustentabilidade', color: 'from-emerald-500 to-green-600', icon: Sun },
];

const featured = {
  title: 'Como interpretar alertas de tempestades severas',
  excerpt: 'Entenda os níveis de severidade, o que cada alerta significa e quais ações tomar para proteger sua família e patrimônio.',
  category: 'Clima Extremo',
  date: '24 Jun 2026',
  readTime: '8 min',
};

const posts = [
  { title: 'El Niño x La Niña: o que esperar em 2026', excerpt: 'Análise dos ciclos climáticos e seus impactos no Brasil.', category: 'Meteorologia', date: '22 Jun 2026', readTime: '6 min' },
  { title: 'Queimadas na Amazônia: monitoramento em tempo real', excerpt: 'Como o INPE e a NASA rastreiam focos de incêndio.', category: 'Eventos Naturais', date: '20 Jun 2026', readTime: '5 min' },
  { title: 'Tsunamis: a ciência por trás das ondas gigantes', excerpt: 'Mecanismos sísmicos e sistemas de alerta global.', category: 'Oceanos', date: '18 Jun 2026', readTime: '7 min' },
  { title: 'Terremotos: por que o Brasil também tremem', excerpt: 'Placas tectônicas e atividade sísmica intraplaca.', category: 'Geologia', date: '15 Jun 2026', readTime: '5 min' },
  { title: 'Aquecimento global: dados do último ano', excerpt: 'Recordes de temperatura e o que eles significam.', category: 'Sustentabilidade', date: '12 Jun 2026', readTime: '9 min' },
  { title: 'Furacões e ciclones: diferenças e formação', excerpt: 'Tudo sobre os ciclones tropicais e seu poder destrutivo.', category: 'Clima Extremo', date: '10 Jun 2026', readTime: '6 min' },
];

const BlogPage = () => (
  <div className="min-h-screen bg-gradient-sky py-12">
    <SEO title="Blog | Clima Tempo" description="Artigos, análises e notícias sobre meteorologia, eventos naturais e mudanças climáticas." path="/blog" />
    <div className="container mx-auto px-4 max-w-6xl">
      {/* Hero */}
      <section className="text-center mb-12">
        <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0 px-4 py-1.5">
          <BookOpen className="h-3.5 w-3.5 mr-1.5" /> Blog Clima Tempo
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
          Conhecimento que Protege
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Análises, guias e notícias sobre clima, meteorologia e eventos naturais.
        </p>
        <div className="max-w-md mx-auto mt-8 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar artigos..." className="pl-10 h-12 border-2 focus:border-primary" />
        </div>
      </section>

      {/* Categorias */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Tag className="h-4 w-4 text-primary" />
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Categorias</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => {
            const I = c.icon;
            return (
              <Button key={c.name} variant="outline" className="border-2 hover:border-primary/50 group">
                <div className={`mr-2 p-1 rounded bg-gradient-to-br ${c.color}`}>
                  <I className="h-3 w-3 text-white" />
                </div>
                {c.name}
              </Button>
            );
          })}
        </div>
      </section>

      {/* Featured */}
      <section className="mb-12">
        <Card className="overflow-hidden border-2 border-primary/30 shadow-glow bg-gradient-to-br from-primary/10 via-card to-secondary/10 group hover:-translate-y-1 transition-all">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative bg-gradient-to-br from-violet-500 via-purple-600 to-fuchsia-600 p-12 flex items-center justify-center min-h-[280px]">
              <Wind className="h-32 w-32 text-white/30" />
              <Badge className="absolute top-4 left-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
                <Sparkles className="h-3 w-3 mr-1" /> Destaque
              </Badge>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <Badge variant="outline" className="w-fit mb-3 border-primary/30">{featured.category}</Badge>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">{featured.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-5">
                <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {featured.date}</span>
                <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {featured.readTime}</span>
              </div>
              <Button className="w-fit bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                Ler artigo <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </Card>
      </section>

      {/* Recentes */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">Artigos Recentes</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => {
            const cat = categories.find((c) => c.name === p.category);
            const Icon = cat?.icon ?? Cloud;
            return (
              <Card key={p.title} className="group overflow-hidden border-2 hover:border-primary/40 hover:-translate-y-1 hover:shadow-glow transition-all">
                <div className={`relative h-40 bg-gradient-to-br ${cat?.color ?? 'from-primary to-secondary'} flex items-center justify-center`}>
                  <Icon className="h-16 w-16 text-white/30 group-hover:scale-110 transition-transform" />
                  <Badge className="absolute top-3 left-3 bg-white/20 text-white border-white/30 backdrop-blur-sm">{p.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">{p.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{p.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Separator className="mb-3" />
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {p.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Newsletter CTA */}
      <Card className="bg-gradient-to-br from-primary via-primary/90 to-secondary border-0 overflow-hidden">
        <CardContent className="p-10 text-center">
          <BookOpen className="h-10 w-10 text-white mx-auto mb-3" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Receba nossos artigos por e-mail</h2>
          <p className="text-white/90 mb-5">Conteúdo exclusivo sobre clima e meio ambiente, sem spam.</p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <Input placeholder="seu@email.com" className="bg-white/10 border-white/30 text-white placeholder:text-white/60" />
            <Button variant="secondary" className="shadow-xl">Inscrever</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default BlogPage;
