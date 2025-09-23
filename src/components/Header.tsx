import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cloud, Menu, Sun, MapPin, Bell, AlertTriangle, Droplets } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Início', path: '/', icon: Sun },
    { name: 'Agora', path: '/agora', icon: Cloud },
    { name: 'Hoje', path: '/hoje', icon: Sun },
    { name: 'Amanhã', path: '/amanha', icon: Cloud },
    { name: 'Fim de semana', path: '/fim-de-semana', icon: Sun },
    { name: '15 dias', path: '/15-dias', icon: Cloud },
    { name: 'Contato', path: '/contato', icon: MapPin },
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-2xl font-bold bg-gradient-sky bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
          >
            <Cloud className="h-8 w-8 text-primary animate-float" />
            <span>Clima Hoje</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <nav className="flex items-center space-x-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link key={item.path} to={item.path}>
                    <Button
                      variant={isActivePath(item.path) ? "default" : "ghost"}
                      className={`flex items-center space-x-2 transition-all duration-200 ${
                        isActivePath(item.path) 
                          ? 'shadow-weather' 
                          : 'hover:bg-accent/50 hover:scale-105'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Button>
                  </Link>
                );
              })}
            </nav>
            
            {/* Notification Bell */}
            <div className="relative group">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-pulse"></span>
              </Button>
              
              {/* Notification Dropdown */}
              <div className="absolute right-0 top-full mt-2 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Card className="shadow-lg border-border/50 bg-background/95 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-orange-500" />
                        Alertas Ativos (2)
                      </h3>
                    </div>
                    <div className="space-y-2">
                      <div className="p-2 bg-orange-50 border border-orange-200 rounded text-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <Droplets className="h-3 w-3 text-blue-500" />
                          <span className="font-medium">Chuva Forte</span>
                          <Badge variant="secondary" className="text-xs">Médio</Badge>
                        </div>
                        <p className="text-muted-foreground text-xs">Chuva intensa nas próximas 2 horas</p>
                      </div>
                      <div className="p-2 bg-yellow-50 border border-yellow-200 rounded text-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <Sun className="h-3 w-3 text-orange-500" />
                          <span className="font-medium">Temperatura Alta</span>
                          <Badge variant="outline" className="text-xs">Baixo</Badge>
                        </div>
                        <p className="text-muted-foreground text-xs">Máxima de 35°C hoje</p>
                      </div>
                    </div>
                    <div className="mt-3 pt-2 border-t">
                      <Button variant="ghost" size="sm" className="w-full text-xs">
                        Ver todas as notificações
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px]">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex items-center space-x-2 text-xl font-bold bg-gradient-sky bg-clip-text text-transparent">
                  <Cloud className="h-6 w-6 text-primary" />
                  <span>Clima Hoje</span>
                </div>
                <nav className="flex flex-col space-y-2">
                  {navigationItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link 
                        key={item.path} 
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                      >
                        <Button
                          variant={isActivePath(item.path) ? "default" : "ghost"}
                          className={`w-full justify-start space-x-2 ${
                            isActivePath(item.path) ? 'shadow-weather' : ''
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                          <span>{item.name}</span>
                        </Button>
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;