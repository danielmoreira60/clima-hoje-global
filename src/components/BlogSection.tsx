import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, ArrowRight, Calendar, Clock, Sparkles } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

const BlogSection: React.FC = () => (
  <section className="mb-12">
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
      <div>
        <Badge className="mb-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0">
          <Sparkles className="h-3 w-3 mr-1.5" /> Blog Clima Tempo
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
          Análises e notícias do clima
        </h2>
        <p className="text-slate-600 mt-2 max-w-2xl">
          Conteúdo aprofundado sobre meteorologia, eventos naturais e mudanças climáticas, escrito
          por especialistas.
        </p>
      </div>
      <Button asChild variant="outline" className="w-fit border-2 border-primary/30 hover:bg-primary/5">
        <Link to="/blog">
          Ver todos os artigos <ArrowRight className="h-4 w-4 ml-2" />
        </Link>
      </Button>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      {blogPosts.slice(0, 2).map((p) => (
        <Link key={p.slug} to={`/blog/${p.slug}`} className="group">
          <Card className="overflow-hidden border-2 border-slate-200 hover:border-primary/40 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 h-full bg-white">
            <div className="relative h-56 md:h-64 overflow-hidden">
              <img
                src={p.cover}
                alt={p.title}
                loading="lazy"
                width={1536}
                height={864}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
              <Badge className={`absolute top-4 left-4 bg-gradient-to-r ${p.categoryColor} text-white border-0 shadow-lg`}>
                {p.category}
              </Badge>
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 text-xs text-white/90">
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{p.date}</span>
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{p.readTime}</span>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                {p.title}
              </h3>
              <p className="text-slate-600 mt-3 line-clamp-3 leading-relaxed">{p.excerpt}</p>
              <div className="mt-4 flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-2.5 transition-all">
                Ler artigo completo <ArrowRight className="h-4 w-4" />
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  </section>
);

export default BlogSection;
