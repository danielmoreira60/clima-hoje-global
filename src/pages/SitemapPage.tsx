import React from 'react';
import { Link } from 'react-router-dom';
import { Map, Home, Cloud, Sun, Calendar, Phone, FileText, BookOpen, Globe } from 'lucide-react';
import SEO from '@/components/SEO';

const SitemapPage = () => {
  const mainPages = [
    { name: 'Página Inicial', url: '/', icon: Home },
    { name: 'Tempo Agora', url: '/agora', icon: Cloud },
    { name: 'Previsão Hoje', url: '/hoje', icon: Sun },
    { name: 'Previsão Amanhã', url: '/amanha', icon: Sun },
    { name: 'Fim de Semana', url: '/fim-de-semana', icon: Calendar },
    { name: 'Próximos 15 Dias', url: '/15-dias', icon: Calendar },
    { name: 'Contato', url: '/contato', icon: Phone },
  ];

  const institutionalPages = [
    { name: 'Sobre Nós', url: '/sobre', icon: Globe },
    { name: 'Blog', url: '/blog', icon: BookOpen },
    { name: 'Super El Niño 2026', url: '/blog/super-el-nino-2026', icon: BookOpen },
    { name: 'Terremoto na Venezuela 2026', url: '/blog/terremoto-venezuela-2026', icon: BookOpen },
    { name: 'Calor Extremo na Europa 2026', url: '/blog/calor-extremo-europa-2026', icon: BookOpen },
    { name: 'Vulcões em Erupção em 2026', url: '/blog/vulcoes-erupcao-2026', icon: BookOpen },
  ];

  const legalPages = [
    { name: 'Política de Privacidade', url: '/politica-privacidade', icon: FileText },
    { name: 'Termos de Uso', url: '/termos-uso', icon: FileText },
    { name: 'Política de Cookies', url: '/politica-cookies', icon: FileText },
    { name: 'Política de Transparência', url: '/politica-transparencia', icon: FileText },
  ];

  const utilityPages = [
    { name: 'Sitemap', url: '/sitemap', icon: Map },
  ];

  const renderLinkList = (pages: typeof mainPages, title: string) => (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground border-b border-border pb-2">{title}</h2>
      <ul className="space-y-2">
        {pages.map((page) => {
          const Icon = page.icon;
          return (
            <li key={page.url}>
              <Link 
                to={page.url}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200 py-1"
              >
                <Icon className="h-4 w-4" />
                <span>{page.name}</span>
                <span className="text-xs text-muted-foreground/60 ml-auto">{page.url}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Mapa do Site | Clima Tempo" description="Mapa do site Clima Tempo com todas as páginas, categorias e conteúdos disponíveis." path="/sitemap" />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Map className="h-10 w-10 text-primary" />
              <h1 className="text-4xl font-bold text-foreground">Sitemap</h1>
            </div>
            <p className="text-muted-foreground text-lg">
              Mapa completo de todas as páginas do Clima Tempo
            </p>
          </div>

          {/* Sitemap Content */}
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-8">
              {renderLinkList(mainPages, 'Páginas Principais')}
              {renderLinkList(institutionalPages, 'Páginas Institucionais')}
            </div>
            <div className="space-y-8">
              {renderLinkList(legalPages, 'Páginas Legais')}
              {renderLinkList(utilityPages, 'Utilitários')}
            </div>
          </div>

          {/* All URLs Section */}
          <div className="mt-12 p-6 bg-card/50 rounded-lg border border-border">
            <h2 className="text-xl font-semibold text-foreground mb-4">Lista Completa de URLs</h2>
            <div className="bg-background p-4 rounded border border-border font-mono text-sm space-y-1">
              {[...mainPages, ...institutionalPages, ...legalPages, ...utilityPages].map((page) => (
                <div key={page.url} className="text-muted-foreground">
                  {page.url}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;
