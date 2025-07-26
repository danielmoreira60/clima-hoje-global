import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { 
  Satellite, 
  Radar, 
  Wind, 
  Thermometer, 
  CloudRain, 
  Zap,
  Globe,
  MapPin,
  Layers,
  RotateCcw
} from 'lucide-react';

const WeatherMap = () => {
  const [selectedLayer, setSelectedLayer] = useState('radar');
  const [isLoading, setIsLoading] = useState(false);

  const mapLayers = [
    { id: 'radar', label: 'Radar de Chuva', icon: <Radar className="h-4 w-4" />, color: 'text-blue-500' },
    { id: 'satellite', label: 'Satélite', icon: <Satellite className="h-4 w-4" />, color: 'text-green-500' },
    { id: 'wind', label: 'Vento', icon: <Wind className="h-4 w-4" />, color: 'text-cyan-500' },
    { id: 'temperature', label: 'Temperatura', icon: <Thermometer className="h-4 w-4" />, color: 'text-red-500' },
    { id: 'precipitation', label: 'Precipitação', icon: <CloudRain className="h-4 w-4" />, color: 'text-indigo-500' },
    { id: 'lightning', label: 'Raios', icon: <Zap className="h-4 w-4" />, color: 'text-yellow-500' },
  ];

  const regions = [
    { id: 'brasil', label: 'Brasil', coords: '-15.7942, -47.8822' },
    { id: 'sudeste', label: 'Sudeste', coords: '-22.9068, -43.1729' },
    { id: 'global', label: 'Global', coords: '0, 0' },
    { id: 'america-sul', label: 'América do Sul', coords: '-15, -60' },
  ];

  const refreshMap = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="space-y-6">
      {/* Map Controls */}
      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              Mapas Meteorológicos Interativos
            </CardTitle>
            <Button
              variant="outline"
              size="sm"
              onClick={refreshMap}
              disabled={isLoading}
              className="gap-2"
            >
              <RotateCcw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
              Atualizar
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Layer Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Camadas do Mapa:</label>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
              {mapLayers.map((layer) => (
                <Button
                  key={layer.id}
                  variant={selectedLayer === layer.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedLayer(layer.id)}
                  className={`gap-2 ${layer.color}`}
                >
                  {layer.icon}
                  {layer.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Region Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Região:</label>
            <div className="flex flex-wrap gap-2">
              {regions.map((region) => (
                <Button
                  key={region.id}
                  variant="outline"
                  size="sm"
                  className="gap-2"
                >
                  <MapPin className="h-3 w-3" />
                  {region.label}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Map Container */}
      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardContent className="p-0">
          <div className="relative h-[600px] bg-gradient-to-br from-sky-50 to-blue-100 dark:from-slate-900 dark:to-slate-800 rounded-lg overflow-hidden">
            {/* Map Placeholder with Weather Data Visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className={`mx-auto h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center ${isLoading ? 'animate-pulse' : ''}`}>
                  {mapLayers.find(l => l.id === selectedLayer)?.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    {mapLayers.find(l => l.id === selectedLayer)?.label} - Brasil
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Dados atualizados há 5 minutos
                  </p>
                </div>
              </div>
            </div>

            {/* Map Overlay Controls */}
            <div className="absolute top-4 right-4 space-y-2">
              <Button size="sm" variant="outline" className="bg-background/80 backdrop-blur-sm">
                <Layers className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="bg-background/80 backdrop-blur-sm">
                <MapPin className="h-4 w-4" />
              </Button>
            </div>

            {/* Loading Overlay */}
            {isLoading && (
              <div className="absolute inset-0 bg-background/50 backdrop-blur-sm flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Map Legend and Information */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader className="pb-4">
            <CardTitle className="text-base">Legenda</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {selectedLayer === 'radar' && (
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-200 rounded"></div>
                  <span className="text-sm">Chuva Fraca</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-400 rounded"></div>
                  <span className="text-sm">Chuva Moderada</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-600 rounded"></div>
                  <span className="text-sm">Chuva Forte</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded"></div>
                  <span className="text-sm">Tempestade</span>
                </div>
              </div>
            )}
            {selectedLayer === 'wind' && (
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-200 rounded"></div>
                  <span className="text-sm">0-20 km/h</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-400 rounded"></div>
                  <span className="text-sm">20-40 km/h</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-orange-500 rounded"></div>
                  <span className="text-sm">40-60 km/h</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-600 rounded"></div>
                  <span className="text-sm">60+ km/h</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader className="pb-4">
            <CardTitle className="text-base">Informações Técnicas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Resolução:</span>
              <span>1km</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Atualização:</span>
              <span>5 min</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Fonte:</span>
              <span>INMET/CPTEC</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Cobertura:</span>
              <span>América do Sul</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader className="pb-4">
            <CardTitle className="text-base">Dados Atuais</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Última Atualização:</span>
              <span>14:25</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Próxima:</span>
              <span>14:30</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Status:</span>
              <span className="text-green-500">Online</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Qualidade:</span>
              <span className="text-green-500">Excelente</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WeatherMap;