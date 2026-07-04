import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import SEO from '@/components/SEO';
import { blogPosts } from '@/data/blogPosts';
import {
  BookOpen, Calendar, Clock, Search, ArrowRight, Tag, TrendingUp, Sparkles,
  Cloud, Flame, Waves, Mountain, Wind, Sun,
} from 'lucide-react';

const categories = [
  { name: 'Meteorologia', color: 'from-sky-500 to-blue-600', icon: Cloud },
  { name: 'Eventos Naturais', color: 'from-red-500 to-orange-600', icon: Flame },
  { name: 'Oceanos', color: 'from-cyan-500 to-teal-600', icon: Waves },
  { name: 'Geologia', color: 'from-amber-500 to-orange-600', icon: Mountain },
  { name: 'Clima Extremo', color: 'from-violet-500 to-purple-600', icon: Wind },
  { name: 'Sustentabilidade', color: 'from-emerald-500 to-green-600', icon: Sun },
];

const BlogPage = () => {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-gradient-sky py-12">
      <SEO
        title="Blog Clima Tempo | Análises de Clima e Eventos Naturais"
        description="Artigos premium sobre meteorologia, eventos naturais, mudanças climáticas e geologia escritos por especialistas do Clima Tempo."
        path="/blog"
      />
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero */}
        <section className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0 px-4 py-1.5 shadow-md">
            <BookOpen className="h-3.5 w-3.5 mr-1.5" /> Blog Clima Tempo
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 tracking-tight">
            Conhecimento que Protege
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Análises profundas, guias e notícias sobre clima, meteorologia, geologia e eventos naturais.
          </p>
          <div className="max-w-md mx-auto mt-8 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input placeholder="Buscar artigos..." className="pl-10 h-12 border-2 focus:border-primary bg-white" />
          </div>
        </section>

        {/* Categorias */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Tag className="h-4 w-4 text-primary" />
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-600">Categorias</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => {
              const I = c.icon;
              return (
                <Button key={c.name} variant="outline" className="border-2 hover:border-primary/50 group bg-white">
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
        {featured && (
          <section className="mb-12">
            <Link to={`/blog/${featured.slug}`}>
              <Card className="overflow-hidden border-2 border-primary/30 shadow-glow bg-white group hover:-translate-y-1 transition-all">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden min-h-[280px]">
                    <img
                      src={featured.cover}
                      alt={featured.title}
                      loading="lazy"
                      width={1536}
                      height={864}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <Badge className="absolute top-4 left-4 bg-white/95 text-slate-900 border-0 backdrop-blur-sm">
                      <Sparkles className="h-3 w-3 mr-1 text-primary" /> Destaque
                    </Badge>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <Badge className={`w-fit mb-3 bg-gradient-to-r ${featured.categoryColor} text-white border-0`}>
                      {featured.category}
                    </Badge>
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 text-slate-900 group-hover:text-primary transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-slate-600 mb-4 leading-relaxed">{featured.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-5">
                      <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {featured.date}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {featured.readTime}</span>
                    </div>
                    <Button className="w-fit bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                      Ler artigo <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </Card>
            </Link>
          </section>
        )}

        {/* Recentes */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold text-slate-900">Artigos Recentes</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`}>
                <Card className="group overflow-hidden border-2 hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl transition-all h-full bg-white">
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={p.cover}
                      alt={p.title}
                      loading="lazy"
                      width={1536}
                      height={864}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <Badge className={`absolute top-3 left-3 bg-gradient-to-r ${p.categoryColor} text-white border-0`}>
                      {p.category}
                    </Badge>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-2 line-clamp-2">{p.excerpt}</p>
                    <Separator className="my-3" />
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.date}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {p.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <Card className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-0 overflow-hidden">
          <CardContent className="p-10 text-center">
            <BookOpen className="h-10 w-10 text-primary mx-auto mb-3" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Receba nossos artigos por e-mail</h2>
            <p className="text-white/80 mb-5">Conteúdo exclusivo sobre clima e meio ambiente, sem spam.</p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <Input placeholder="seu@email.com" className="bg-white/10 border-white/30 text-white placeholder:text-white/60" />
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">Inscrever</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlogPage;
