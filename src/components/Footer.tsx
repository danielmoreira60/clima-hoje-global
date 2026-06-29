import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Satellite, ShieldCheck, Globe2 } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const menuItems = [
    { name: 'Início', href: '/' },
    { name: 'Sobre Nós', href: '/sobre' },
    { name: 'Contato', href: '/contato' },
    { name: 'Blog', href: '/blog' },
    { name: 'Sitemap', href: '/sitemap' },
  ];

  const forecastItems = [
    { name: 'Agora', href: '/agora' },
    { name: 'Hoje', href: '/hoje' },
    { name: 'Amanhã', href: '/amanha' },
    { name: 'Fim de semana', href: '/fim-de-semana' },
    { name: 'Próximos 15 dias', href: '/15-dias' },
  ];

  const legalItems = [
    { name: 'Política de Privacidade', href: '/politica-privacidade' },
    { name: 'Termos de Uso', href: '/termos-uso' },
    { name: 'Política de Cookies', href: '/politica-cookies' },
    { name: 'Política de Transparência', href: '/politica-transparencia' },
  ];

  const sources = [
    { name: 'NASA', icon: Satellite },
    { name: 'NOAA', icon: Globe2 },
    { name: 'INPE', icon: ShieldCheck },
    { name: 'USGS', icon: Globe2 },
  ];

  return (
    <footer className="bg-[hsl(220,30%,10%)] text-[hsl(220,15%,82%)] mt-16 border-t border-[hsl(220,25%,16%)]">
      {/* Top bar */}
      <div className="border-b border-[hsl(220,25%,16%)] bg-[hsl(220,32%,8%)]">
        <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 text-[hsl(220,12%,65%)]">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" />
            <span>Dados oficiais auditados em tempo real</span>
          </div>
          <div className="flex items-center gap-4">
            {sources.map((s) => (
              <span key={s.name} className="flex items-center gap-1.5 text-[hsl(220,12%,65%)]">
                <s.icon className="h-3.5 w-3.5" />
                <span className="font-medium tracking-wide">{s.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Clima Hoje" className="h-10 w-auto" />
              <div>
                <p className="font-semibold text-white tracking-tight">Clima Hoje</p>
                <p className="text-[11px] uppercase tracking-[0.18em] text-[hsl(220,12%,55%)]">Meteorologia & Monitoramento</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-[hsl(220,12%,68%)] max-w-sm">
              Plataforma profissional de previsão do tempo e monitoramento de eventos climáticos e geológicos,
              com dados oficiais de agências internacionais.
            </p>
            <div className="flex items-center gap-2 text-sm text-[hsl(220,12%,68%)]">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Brasil — Cobertura Nacional</span>
            </div>
          </div>

          {/* Navegação */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">Navegação</h4>
            <ul className="space-y-2 text-sm">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-[hsl(220,12%,68%)] hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Previsões */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">Previsões</h4>
            <ul className="space-y-2 text-sm">
              {forecastItems.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-[hsl(220,12%,68%)] hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">Legal</h4>
            <ul className="space-y-2 text-sm">
              {legalItems.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-[hsl(220,12%,68%)] hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">Contato</h4>
            <div className="space-y-2 text-sm text-[hsl(220,12%,68%)]">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>contato@climatempo.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>(11) 3000-0000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[hsl(220,25%,16%)] mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-[hsl(220,12%,58%)]">
            © {currentYear} <span className="text-[hsl(220,15%,82%)]">Clima Tempo</span> · Todos os direitos reservados · Desenvolvido por{' '}
            <a href="https://danielolimpio.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              DanielOlimpio
            </a>
          </p>
          <p className="text-[11px] text-[hsl(220,12%,50%)]">
            Última atualização: {new Date().toLocaleString('pt-BR')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
