import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Switch } from '@/components/ui/switch';
import { Cloud, Menu, Sun, MapPin, Bell, AlertTriangle, Droplets, Flame, Wind, Waves, TreePine, Volume2, VolumeX } from 'lucide-react';

interface Alert {
  id: string;
  type: 'fire' | 'solar' | 'hurricane' | 'flood' | 'deforestation';
  title: string;
  message: string;
  severity: 'low' | 'medium' | 'high' | 'extreme';
  location?: string;
  distance?: number;
  timestamp: Date;
  isActive: boolean;
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const alertIcons = {
    fire: Flame,
    solar: Sun,
    hurricane: Wind,
    flood: Waves,
    deforestation: TreePine
  };

  const severityConfig = {
    low: { color: 'bg-green-100 text-green-800', label: 'Baixo' },
    medium: { color: 'bg-yellow-100 text-yellow-800', label: 'Médio' },
    high: { color: 'bg-orange-100 text-orange-800', label: 'Alto' },
    extreme: { color: 'bg-red-100 text-red-800', label: 'Extremo' }
  };

  useEffect(() => {
    loadAlerts();
    const interval = setInterval(loadAlerts, 300000);
    return () => clearInterval(interval);
  }, []);

  const loadAlerts = async () => {
    const mockAlerts: Alert[] = [
      {
        id: '1',
        type: 'fire',
        title: 'Foco de Incêndio Próximo',
        message: 'Queimada ativa detectada na região.',
        severity: 'high',
        location: 'Pantanal - MS',
        distance: 45,
        timestamp: new Date(Date.now() - 30 * 60000),
        isActive: true
      },
      {
        id: '2',
        type: 'solar',
        title: 'Tempestade Solar',
        message: 'Atividade solar elevada.',
        severity: 'medium',
        timestamp: new Date(Date.now() - 60 * 60000),
        isActive: true
      },
      {
        id: '3',
        type: 'hurricane',
        title: 'Ventos Fortes',
        message: 'Ventos de até 80 km/h previstos.',
        severity: 'medium',
        location: 'Região Sul',
        distance: 120,
        timestamp: new Date(Date.now() - 90 * 60000),
        isActive: true
      },
      {
        id: '4',
        type: 'deforestation',
        title: 'Desmatamento Detectado',
        message: 'Nova área desmatada por satélite.',
        severity: 'high',
        location: 'Amazônia - RO',
        distance: 850,
        timestamp: new Date(Date.now() - 180 * 60000),
        isActive: true
      }
    ];
    setAlerts(mockAlerts);
  };

  const getTimeAgo = (date: Date) => {
    const diffMins = Math.floor((new Date().getTime() - date.getTime()) / 60000);
    const diffHours = Math.floor(diffMins / 60);
    if (diffMins < 60) return `${diffMins} min`;
    if (diffHours < 24) return `${diffHours}h`;
    return date.toLocaleDateString('pt-BR');
  };

  const activeAlerts = alerts.filter(alert => alert.isActive);
  const nearbyAlerts = activeAlerts.filter(alert => alert.distance && alert.distance <= 100);

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
            
            {/* Notification Bell with Environmental Alerts */}
            <div className="relative group">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                {activeAlerts.length > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center animate-pulse">
                    {activeAlerts.length}
                  </span>
                )}
              </Button>
              
              {/* Notification Dropdown */}
              <div className="absolute right-0 top-full mt-2 w-96 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100]">
                <Card className="shadow-lg border-border/50 bg-background backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className="p-4 border-b bg-muted/50">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-primary" />
                          Alertas Ambientais
                        </h3>
                        <Badge variant="secondary">{activeAlerts.length} ativos</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-xs">
                        <div className="flex items-center gap-2">
                          <Switch
                            checked={notificationsEnabled}
                            onCheckedChange={setNotificationsEnabled}
                            className="scale-75"
                          />
                          <span className="text-muted-foreground">Notificações</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Switch
                            checked={soundEnabled}
                            onCheckedChange={setSoundEnabled}
                            className="scale-75"
                          />
                          {soundEnabled ? <Volume2 className="h-3 w-3" /> : <VolumeX className="h-3 w-3" />}
                        </div>
                      </div>
                    </div>

                    {nearbyAlerts.length > 0 && (
                      <div className="p-3 bg-orange-50 border-b border-orange-200">
                        <h4 className="text-xs font-semibold text-orange-800 flex items-center gap-1">
                          <Flame className="h-3 w-3" />
                          Alertas Próximos ({nearbyAlerts.length})
                        </h4>
                      </div>
                    )}

                    <ScrollArea className="max-h-[400px]">
                      <div className="p-2">
                        {activeAlerts.length > 0 ? (
                          <div className="space-y-2">
                            {activeAlerts.map((alert) => {
                              const Icon = alertIcons[alert.type];
                              const config = severityConfig[alert.severity];
                              const isNearby = alert.distance && alert.distance <= 100;
                              
                              return (
                                <div
                                  key={alert.id}
                                  className={`p-3 rounded-lg border transition-colors hover:bg-accent/50 ${
                                    isNearby ? 'bg-orange-50 border-orange-200' : 'bg-background'
                                  }`}
                                >
                                  <div className="flex items-start gap-2 mb-2">
                                    <Icon className={`h-4 w-4 mt-0.5 ${isNearby ? 'text-orange-600' : 'text-muted-foreground'}`} />
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-start justify-between gap-2 mb-1">
                                        <h5 className="text-sm font-medium line-clamp-1">{alert.title}</h5>
                                        <Badge variant="outline" className={`${config.color} text-xs px-1.5 py-0 shrink-0`}>
                                          {config.label}
                                        </Badge>
                                      </div>
                                      <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{alert.message}</p>
                                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                                        {alert.location && (
                                          <span className="flex items-center gap-1">
                                            <MapPin className="h-3 w-3" />
                                            {alert.location}
                                            {alert.distance && ` • ${alert.distance}km`}
                                          </span>
                                        )}
                                        <span>{getTimeAgo(alert.timestamp)}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          <div className="text-center py-8">
                            <Bell className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                            <p className="text-sm text-muted-foreground">Nenhum alerta ativo</p>
                          </div>
                        )}
                      </div>
                    </ScrollArea>
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