import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Cloud, Menu, Sun, MapPin } from 'lucide-react';

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
          <nav className="hidden md:flex items-center space-x-1">
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