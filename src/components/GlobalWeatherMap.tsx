import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Globe, 
  Flame, 
  Zap, 
  CloudRain, 
  Wind, 
  Thermometer, 
  Satellite,
  Navigation,
  Layers,
  Filter,
  Search,
  MapPin,
  AlertTriangle,
  Snowflake,
  Sun
} from 'lucide-react';

const GlobalWeatherMap = () => {
  const [activeLayer, setActiveLayer] = useState('fires');
  const [selectedRegion, setSelectedRegion] = useState('global');

  const globalLayers = [
    { 
      id: 'fires', 
      label: 'Focos de Incêndio', 
      icon: <Flame className="h-4 w-4" />, 
      color: 'text-red-500',
      description: 'Incêndios florestais em tempo real'
    },
    { 
      id: 'storms', 
      label: 'Tempestades', 
      icon: <Zap className="h-4 w-4" />, 
      color: 'text-yellow-500',
      description: 'Sistemas tempestuosos ativos'
    },
    { 
      id: 'hurricanes', 
      label: 'Furacões/Ciclones', 
      icon: <Navigation className="h-4 w-4" />, 
      color: 'text-purple-500',
      description: 'Ciclones tropicais e extratropicais'
    },
    { 
      id: 'precipitation', 
      label: 'Precipitação Global', 
      icon: <CloudRain className="h-4 w-4" />, 
      color: 'text-blue-500',
      description: 'Chuva e neve ao redor do mundo'
    },
    { 
      id: 'temperature', 
      label: 'Temperatura Global', 
      icon: <Thermometer className="h-4 w-4" />, 
      color: 'text-red-400',
      description: 'Mapa de calor mundial'
    },
    { 
      id: 'wind', 
      label: 'Ventos Globais', 
      icon: <Wind className="h-4 w-4" />, 
      color: 'text-green-500',
      description: 'Padrões de vento mundiais'
    },
  ];

  const regions = [
    { id: 'global', label: 'Global', coords: '0,0' },
    { id: 'americas', label: 'Américas', coords: '-15,-60' },
    { id: 'europe', label: 'Europa', coords: '50,10' },
    { id: 'asia', label: 'Ásia', coords: '35,105' },
    { id: 'africa', label: 'África', coords: '0,20' },
    { id: 'oceania', label: 'Oceania', coords: '-25,140' },
  ];

  const activeEvents = [
    {
      type: 'fire',
      location: 'Califórnia, EUA',
      severity: 'Alta',
      description: '15 focos ativos',
      icon: <Flame className="h-4 w-4 text-red-500" />
    },
    {
      type: 'hurricane',
      location: 'Golfo do México',
      severity: 'Moderada',
      description: 'Categoria 2',
      icon: <Navigation className="h-4 w-4 text-purple-500" />
    },
    {
      type: 'storm',
      location: 'Europa Central',
      severity: 'Baixa',
      description: 'Tempestades isoladas',
      icon: <Zap className="h-4 w-4 text-yellow-500" />
    },
    {
      type: 'cold',
      location: 'Sibéria, Rússia',
      severity: 'Extrema',
      description: '-45°C',
      icon: <Snowflake className="h-4 w-4 text-blue-400" />
    },
  ];

  const getEventSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'baixa': return 'bg-green-100 text-green-700';
      case 'moderada': return 'bg-yellow-100 text-yellow-700';
      case 'alta': return 'bg-orange-100 text-orange-700';
      case 'extrema': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Global Map Controls */}
      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            Monitoramento Meteorológico Global
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Layer Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Camadas de Dados:</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {globalLayers.map((layer) => (
                <Button
                  key={layer.id}
                  variant={activeLayer === layer.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveLayer(layer.id)}
                  className={`gap-2 justify-start ${layer.color}`}
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
                  variant={selectedRegion === region.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedRegion(region.id)}
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

      {/* Main Map Display */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Map Area */}
        <div className="lg:col-span-3">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-0">
              <div className="relative h-[500px] bg-gradient-to-br from-sky-900 via-blue-900 to-indigo-900 rounded-lg overflow-hidden">
                {/* World Map Visualization */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDUwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHBhdHRlcm4gaWQ9IndvcmxkLW1hcCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSI1MCI+CiAgICAgIDxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNTAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3dvcmxkLW1hcCkiLz4KPC9zdmc+')] opacity-20"></div>
                
                {/* Active Layer Display */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white space-y-4">
                    <div className="mx-auto h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      {globalLayers.find(l => l.id === activeLayer)?.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {globalLayers.find(l => l.id === activeLayer)?.label}
                      </h3>
                      <p className="text-sm opacity-80">
                        {globalLayers.find(l => l.id === activeLayer)?.description}
                      </p>
                      <p className="text-xs opacity-60 mt-2">
                        Região: {regions.find(r => r.id === selectedRegion)?.label}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Overlay Controls */}
                <div className="absolute top-4 right-4 space-y-2">
                  <Button size="sm" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/20">
                    <Layers className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/20">
                    <Search className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/20">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>

                {/* Data Overlay */}
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg p-3 text-white text-sm">
                  <p>Dados atualizados há 5 minutos</p>
                  <p>Fonte: NOAA, NASA, CPTEC</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Events Sidebar */}
        <div className="space-y-4">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-orange-500" />
                Eventos Ativos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {activeEvents.map((event, index) => (
                <div key={index} className="p-3 rounded-lg border bg-accent/30">
                  <div className="flex items-start gap-3">
                    {event.icon}
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">{event.location}</p>
                      <p className="text-xs text-muted-foreground">{event.description}</p>
                      <span className={`inline-block px-2 py-1 text-xs rounded-full ${getEventSeverityColor(event.severity)}`}>
                        {event.severity}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Satellite className="h-4 w-4 text-green-500" />
                Estatísticas Globais
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Focos de Incêndio:</span>
                <span className="font-medium text-red-500">247</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tempestades Ativas:</span>
                <span className="font-medium text-yellow-500">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Ciclones:</span>
                <span className="font-medium text-purple-500">3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Alertas Severos:</span>
                <span className="font-medium text-orange-500">8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Países Afetados:</span>
                <span className="font-medium">23</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GlobalWeatherMap;