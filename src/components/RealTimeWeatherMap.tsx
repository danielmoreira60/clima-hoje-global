import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Cloud, 
  Satellite, 
  Wind, 
  Thermometer,
  Droplets,
  Zap,
  RefreshCw,
  Layers,
  MapPin,
  TrendingUp
} from 'lucide-react';

interface MapLayer {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  url?: string;
}

const RealTimeWeatherMap = () => {
  const [selectedLayer, setSelectedLayer] = useState('radar');
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  const mapLayers: MapLayer[] = [
    { 
      id: 'radar', 
      label: 'Radar de Chuva', 
      icon: <Droplets className="h-4 w-4" />, 
      color: 'bg-blue-500',
      url: 'https://radar.climatempo.com.br/'
    },
    { 
      id: 'satellite', 
      label: 'Imagem de Satélite', 
      icon: <Satellite className="h-4 w-4" />, 
      color: 'bg-green-500',
      url: 'https://goes.cptec.inpe.br/'
    },
    { 
      id: 'wind', 
      label: 'Vento em Tempo Real', 
      icon: <Wind className="h-4 w-4" />, 
      color: 'bg-purple-500',
      url: 'https://earth.nullschool.net/'
    },
    { 
      id: 'temperature', 
      label: 'Mapa de Temperatura', 
      icon: <Thermometer className="h-4 w-4" />, 
      color: 'bg-red-500',
      url: 'https://www.windy.com/'
    },
    { 
      id: 'lightning', 
      label: 'Raios e Tempestades', 
      icon: <Zap className="h-4 w-4" />, 
      color: 'bg-yellow-500',
      url: 'https://www.lightningmaps.org/'
    }
  ];

  const refreshMap = async () => {
    setIsLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      setLastUpdate(new Date());
      setIsLoading(false);
    }, 1500);
  };

  const getMapEmbed = () => {
    switch (selectedLayer) {
      case 'radar':
        return (
          <div className="relative w-full h-[500px] bg-gradient-to-b from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg overflow-hidden">
            <iframe
              src="https://embed.windy.com/embed2.html?lat=-15.788&lon=-47.880&detailLat=-15.788&detailLon=-47.880&width=650&height=450&zoom=5&level=surface&overlay=rain&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1"
              className="w-full h-full border-0"
              title="Radar de Chuva Brasil"
              allowFullScreen
            />
          </div>
        );
      
      case 'satellite':
        return (
          <div className="relative w-full h-[500px] bg-gradient-to-b from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg overflow-hidden">
            <iframe
              src="https://embed.windy.com/embed2.html?lat=-15.788&lon=-47.880&detailLat=-15.788&detailLon=-47.880&width=650&height=450&zoom=5&level=surface&overlay=satellite&product=satellite&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1"
              className="w-full h-full border-0"
              title="Imagem de Satélite Brasil"
              allowFullScreen
            />
          </div>
        );
      
      case 'wind':
        return (
          <div className="relative w-full h-[500px] bg-gradient-to-b from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg overflow-hidden">
            <iframe
              src="https://embed.windy.com/embed2.html?lat=-15.788&lon=-47.880&detailLat=-15.788&detailLon=-47.880&width=650&height=450&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1"
              className="w-full h-full border-0"
              title="Mapa de Vento Brasil"
              allowFullScreen
            />
          </div>
        );
      
      case 'temperature':
        return (
          <div className="relative w-full h-[500px] bg-gradient-to-b from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-lg overflow-hidden">
            <iframe
              src="https://embed.windy.com/embed2.html?lat=-15.788&lon=-47.880&detailLat=-15.788&detailLon=-47.880&width=650&height=450&zoom=5&level=surface&overlay=temp&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1"
              className="w-full h-full border-0"
              title="Mapa de Temperatura Brasil"
              allowFullScreen
            />
          </div>
        );
      
      case 'lightning':
        return (
          <div className="relative w-full h-[500px] bg-gradient-to-b from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-lg overflow-hidden">
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-4">
                <Zap className="h-16 w-16 text-yellow-500 mx-auto animate-pulse" />
                <h3 className="text-lg font-semibold">Raios e Tempestades</h3>
                <p className="text-muted-foreground max-w-md">
                  Monitoramento em tempo real de atividade elétrica atmosférica no Brasil
                </p>
                <Button 
                  variant="outline"
                  onClick={() => window.open('https://www.lightningmaps.org/', '_blank')}
                  className="gap-2"
                >
                  <TrendingUp className="h-4 w-4" />
                  Ver Dados Completos
                </Button>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="relative w-full h-[500px] bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-800/20 rounded-lg overflow-hidden">
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-4">
                <Cloud className="h-16 w-16 text-gray-400 mx-auto" />
                <h3 className="text-lg font-semibold">Carregando Mapa...</h3>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Map Controls */}
      <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-weather">
        <CardHeader className="flex flex-row items-center justify-between pb-4">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-primary" />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Mapas Meteorológicos em Tempo Real
              </span>
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Visualize condições climáticas atualizadas a cada 15 minutos
            </p>
          </div>
          <Button 
            onClick={refreshMap} 
            disabled={isLoading}
            variant="outline" 
            size="sm"
            className="gap-2 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
            Atualizar
          </Button>
        </CardHeader>
        <CardContent>
          {/* Layer Selection */}
          <div className="flex flex-wrap gap-2 mb-6">
            {mapLayers.map((layer) => (
              <Button
                key={layer.id}
                variant={selectedLayer === layer.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedLayer(layer.id)}
                className={`gap-2 transition-all ${
                  selectedLayer === layer.id 
                    ? `${layer.color} text-white border-transparent shadow-lg hover:opacity-90` 
                    : `border-border hover:border-primary/50 hover:text-primary`
                }`}
              >
                {layer.icon}
                {layer.label}
              </Button>
            ))}
          </div>

          {/* Map Display */}
          <div className="relative">
            {isLoading && (
              <div className="absolute inset-0 bg-background/50 backdrop-blur-sm z-10 flex items-center justify-center rounded-lg">
                <div className="text-center space-y-3">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                  <p className="text-sm text-muted-foreground">Carregando dados atualizados...</p>
                </div>
              </div>
            )}
            {getMapEmbed()}
          </div>

          {/* Map Info */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="gap-1 bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/30">
                <MapPin className="h-3 w-3 text-primary" />
                Brasil
              </Badge>
              <span>Última atualização: {lastUpdate.toLocaleTimeString('pt-BR')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${isLoading ? 'bg-secondary animate-pulse' : 'bg-green-500'}`}></div>
              <span>{isLoading ? 'Atualizando...' : 'Dados atualizados'}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RealTimeWeatherMap;