import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Sobre Nós', href: '/sobre' },
    { name: 'Contato', href: '/contato' },
    { name: 'Blog', href: '/blog' },
    { name: 'Sitemap', href: '/sitemap' },
  ];

  const legalItems = [
    { name: 'Política de Privacidade', href: '/politica-privacidade' },
    { name: 'Termos de Uso', href: '/termos-uso' },
    { name: 'Política de Cookies', href: '/politica-cookies' },
    { name: 'Política de Transparência', href: '/politica-transparencia' },
  ];

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Clima Tempo</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Previsão do tempo completa e precisa com monitoramento ambiental avançado. 
              Dados em tempo real para sua segurança e planejamento.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Brasil - Cobertura Nacional</span>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Navegação</h4>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Menu */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2">
              {legalItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contato@climatempo.com.br</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>(11) 3000-0000</span>
              </div>
            </div>
            <div className="pt-2">
              <p className="text-xs text-muted-foreground">
                Dados fornecidos por fontes oficiais: NASA, NOAA, INPE, Copernicus
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Clima Tempo. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-4">
              <p className="text-xs text-muted-foreground">
                Última atualização: {new Date().toLocaleString('pt-BR')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;