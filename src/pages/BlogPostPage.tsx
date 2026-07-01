import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowLeft, User, Tag, Share2, ChevronRight } from 'lucide-react';
import SEO from '@/components/SEO';
import { getPostBySlug, blogPosts } from '@/data/blogPosts';
import {
  SuperElNinoArticle,
  TerremotoVenezuelaArticle,
  CalorEuropaArticle,
  VulcoesArticle,
} from '@/components/blog/articles';
import { Card, CardContent } from '@/components/ui/card';

const ArticleBySlug: React.FC<{ slug: string; midImage: string }> = ({ slug, midImage }) => {
  if (slug === 'super-el-nino-2026') return <SuperElNinoArticle midImage={midImage} />;
  if (slug === 'terremoto-venezuela-2026') return <TerremotoVenezuelaArticle midImage={midImage} />;
  if (slug === 'calor-extremo-europa-2026') return <CalorEuropaArticle midImage={midImage} />;
  if (slug === 'vulcoes-erupcao-2026') return <VulcoesArticle midImage={midImage} />;
  return null;
};


const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    image: post.cover,
    datePublished: post.dateISO,
    author: { '@type': 'Organization', name: post.author },
    publisher: { '@type': 'Organization', name: 'Clima Tempo' },
    keywords: post.tags.join(', '),
  };

  return (
    <div className="min-h-screen bg-gradient-sky">
      <SEO title={post.metaTitle} description={post.metaDescription} path={`/blog/${post.slug}`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero / Cover */}
      <header className="relative w-full h-[55vh] min-h-[420px] overflow-hidden">
        <img
          src={post.cover}
          alt={post.title}
          width={1536}
          height={864}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/30" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-12 max-w-4xl">
          {/* Breadcrumbs */}
          <nav aria-label="breadcrumb" className="text-sm text-white/70 mb-4 flex items-center gap-2">
            <Link to="/" className="hover:text-white">Início</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/blog" className="hover:text-white">Blog</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white truncate">{post.category}</span>
          </nav>
          <Badge className={`w-fit mb-4 bg-gradient-to-r ${post.categoryColor} text-white border-0 px-3 py-1`}>
            {post.category}
          </Badge>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-5 drop-shadow-2xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/85">
            <span className="flex items-center gap-1.5"><User className="h-4 w-4" />{post.author}</span>
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />{post.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{post.readTime} de leitura</span>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <Button variant="ghost" asChild className="text-slate-700">
            <Link to="/blog"><ArrowLeft className="h-4 w-4 mr-2" />Voltar para o blog</Link>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigator.share?.({ title: post.title, url: window.location.href }).catch(() => {})}
          >
            <Share2 className="h-4 w-4 mr-2" />Compartilhar
          </Button>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 md:p-12">
          <ArticleBySlug slug={post.slug} midImage={post.midImage} />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex items-start gap-2 flex-wrap">
              <Tag className="h-4 w-4 text-slate-500 mt-1" />
              {post.tags.map((t) => (
                <Badge key={t} variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-slate-200">
                  {t}
                </Badge>
              ))}
            </div>
          </div>

          {/* Author card */}
          <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 flex items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl shrink-0">
              CT
            </div>
            <div>
              <p className="font-bold text-slate-900">{post.author}</p>
              <p className="text-sm text-slate-600">
                Equipe de meteorologistas e jornalistas científicos do Clima Tempo, dedicada à
                divulgação confiável sobre clima, meteorologia e eventos naturais.
              </p>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Continue lendo</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link key={r.slug} to={`/blog/${r.slug}`}>
                  <Card className="group overflow-hidden border-2 hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl transition-all h-full">
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={r.cover}
                        alt={r.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <Badge className={`absolute top-3 left-3 bg-gradient-to-r ${r.categoryColor} text-white border-0`}>
                        {r.category}
                      </Badge>
                    </div>
                    <CardContent className="p-5">
                      <h3 className="font-bold text-lg text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
                        {r.title}
                      </h3>
                      <p className="text-sm text-slate-600 mt-2 line-clamp-2">{r.excerpt}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
};

export default BlogPostPage;
