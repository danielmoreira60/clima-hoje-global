import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Flame, 
  Sun, 
  Wind, 
  Waves, 
  TreePine, 
  Satellite,
  AlertTriangle,
  RefreshCw,
  MapPin
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface EnvironmentalRisk {
  id: string;
  risk_type: 'fire' | 'solar' | 'hurricane' | 'flood' | 'deforestation';
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'extreme';
  latitude: number;
  longitude: number;
  detected_at: string;
  source: string;
  distance_km?: number;
}

import useEnvironmentalData from '@/hooks/useEnvironmentalData';

const EnvironmentalRiskMap = () => {
  const [activeLayer, setActiveLayer] = useState<string>('fires');
  const [userLocation, setUserLocation] = useState<{ lat: number; lon: number } | null>(null);
  const { toast } = useToast();
  const { risks, loading, error, fetchRisksByType, refreshData } = useEnvironmentalData();

  const mapLayers = [
    { id: 'fires', label: 'Queimadas e Focos de Incêndio', icon: Flame, color: 'text-red-500', description: 'Dados NASA FIRMS em tempo real' },
    { id: 'solar', label: 'Atividade Solar', icon: Sun, color: 'text-orange-500', description: 'Alertas NOAA Space Weather' },
    { id: 'hurricanes', label: 'Furacões e Ventos', icon: Wind, color: 'text-blue-500', description: 'Monitoramento NOAA' },
    { id: 'floods', label: 'Nível do Mar e Inundações', icon: Waves, color: 'text-cyan-500', description: 'Dados de maré e inundações' },
    { id: 'deforestation', label: 'Desmatamento', icon: TreePine, color: 'text-green-600', description: 'Alertas INPE DETER' },
    { id: 'satellite', label: 'Imagens de Satélite', icon: Satellite, color: 'text-purple-500', description: 'NASA Worldview' }
  ];

  const severityColors = {
    low: 'bg-green-100 text-green-800 border-green-200',
    medium: 'bg-yellow-100 text-yellow-800 border-yellow-200', 
    high: 'bg-orange-100 text-orange-800 border-orange-200',
    extreme: 'bg-red-100 text-red-800 border-red-200'
  };

  const severityLabels = {
    low: 'Baixo Risco',
    medium: 'Risco Moderado',
    high: 'Alto Risco', 
    extreme: 'Risco Extremo'
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  useEffect(() => {
    if (userLocation) {
      fetchRisksByType(activeLayer, userLocation.lat, userLocation.lon, 100);
    } else {
      fetchRisksByType(activeLayer, -23.5505, -46.6333, 100);
    }
  }, [activeLayer, userLocation, fetchRisksByType]);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
        },
        (error) => {
          console.warn('Geolocation error:', error);
          // Fallback para São Paulo
          setUserLocation({ lat: -23.5505, lon: -46.6333 });
        }
      );
    }
  };

  const handleRefresh = () => {
    if (userLocation) {
      refreshData(userLocation.lat, userLocation.lon, 100);
    } else {
      refreshData(-23.5505, -46.6333, 100);
    }
    toast({
      title: "Dados atualizados",
      description: "Informações ambientais atualizadas com sucesso.",
    });
  };

  const getRisksByProximity = () => {
    if (!userLocation) return risks;
    
    return risks
      .filter(risk => risk.distance_km !== undefined)
      .sort((a, b) => (a.distance_km || 0) - (b.distance_km || 0));
  };

  return (
    <div className="space-y-6">
      {/* Header com controles */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-primary" />
                Monitoramento Ambiental e Riscos Climáticos
              </CardTitle>
              <p className="text-muted-foreground mt-1">
                Dados em tempo real de queimadas, atividade solar, furacões e riscos ambientais
              </p>
            </div>
            <Button onClick={handleRefresh} disabled={loading} variant="outline">
              <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
              Atualizar
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {/* Seletor de camadas */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-4">
            {mapLayers.map((layer) => {
              const Icon = layer.icon;
              return (
                <Button
                  key={layer.id}
                  variant={activeLayer === layer.id ? "default" : "outline"}
                  onClick={() => setActiveLayer(layer.id)}
                  className="flex flex-col p-3 h-auto text-center gap-1"
                >
                  <Icon className={`h-5 w-5 ${activeLayer === layer.id ? 'text-white' : layer.color}`} />
                  <span className="text-xs leading-tight">{layer.label}</span>
                </Button>
              );
            })}
          </div>

          {/* Mapa placeholder */}
          <div className="bg-gradient-to-br from-blue-50 to-green-50 border-2 border-dashed border-border rounded-lg h-96 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-green-500/10"></div>
            <div className="text-center z-10">
              <Satellite className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Mapa Interativo Ambiental</h3>
              <p className="text-muted-foreground mb-2">
                Camada ativa: {mapLayers.find(l => l.id === activeLayer)?.label}
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                {mapLayers.find(l => l.id === activeLayer)?.description}
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-white/80 px-4 py-2 rounded-full">
                <MapPin className="h-4 w-4" />
                {userLocation ? 
                  `Sua localização: ${userLocation.lat.toFixed(2)}, ${userLocation.lon.toFixed(2)}` :
                  'Detectando localização...'
                }
              </div>
              {loading && (
                <div className="mt-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                  <p className="text-sm text-muted-foreground mt-2">Carregando dados...</p>
                </div>
              )}
              {!loading && risks.length > 0 && (
                <div className="mt-4 bg-white/90 px-4 py-2 rounded-lg">
                  <p className="text-sm font-medium text-foreground">
                    {risks.length} {risks.length === 1 ? 'alerta detectado' : 'alertas detectados'}
                  </p>
                </div>
              )}
              {!loading && risks.length === 0 && (
                <div className="mt-4 bg-white/90 px-4 py-2 rounded-lg">
                  <p className="text-sm font-medium text-green-600">
                    Nenhum alerta ativo nesta camada
                  </p>
                </div>
              )}
            </div>

            {/* Overlay com pontos de riscos */}
            {!loading && risks.length > 0 && (
              <div className="absolute inset-0">
                {risks.slice(0, 8).map((risk, index) => (
                  <div
                    key={risk.id}
                    className={`absolute w-4 h-4 rounded-full animate-pulse ${
                      risk.severity === 'extreme' ? 'bg-red-500 shadow-lg shadow-red-500/50' :
                      risk.severity === 'high' ? 'bg-orange-500 shadow-lg shadow-orange-500/50' :
                      risk.severity === 'medium' ? 'bg-yellow-500 shadow-lg shadow-yellow-500/50' :
                      'bg-green-500 shadow-lg shadow-green-500/50'
                    }`}
                    style={{
                      left: `${15 + (index * 10) % 70}%`,
                      top: `${20 + (index * 15) % 60}%`
                    }}
                    title={risk.title}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Lista de alertas detectados */}
          {!loading && risks.length > 0 && (
            <div className="mt-4 space-y-2 max-h-64 overflow-y-auto">
              <h4 className="font-semibold text-sm">Alertas Detectados:</h4>
              {risks.slice(0, 10).map((risk) => (
                <div key={risk.id} className="p-3 border rounded-lg bg-card flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className={severityColors[risk.severity]}>
                        {severityLabels[risk.severity]}
                      </Badge>
                      {risk.distance_km && (
                        <span className="text-xs text-muted-foreground">
                          {Math.round(risk.distance_km)} km
                        </span>
                      )}
                    </div>
                    <h5 className="font-medium text-sm">{risk.title}</h5>
                    <p className="text-xs text-muted-foreground">{risk.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Informações e Status */}
      {risks.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Status Atual - {mapLayers.find(l => l.id === activeLayer)?.label}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-accent/30 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Total de Alertas</p>
                <p className="text-2xl font-bold">{risks.length}</p>
              </div>
              <div className="p-4 bg-accent/30 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Alertas de Alto Risco</p>
                <p className="text-2xl font-bold text-orange-600">
                  {risks.filter(r => r.severity === 'high' || r.severity === 'extreme').length}
                </p>
              </div>
              <div className="p-4 bg-accent/30 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Última Atualização</p>
                <p className="text-sm font-medium">
                  {new Date().toLocaleString('pt-BR', { 
                    hour: '2-digit', 
                    minute: '2-digit',
                    day: '2-digit',
                    month: '2-digit'
                  })}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Informações das fontes */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Fontes de Dados Oficiais</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-3 bg-accent/30 rounded-lg">
              <h4 className="font-medium flex items-center gap-2">
                <Flame className="h-4 w-4 text-red-500" />
                Queimadas
              </h4>
              <p className="text-sm text-muted-foreground">NASA FIRMS • INPE Queimadas</p>
            </div>
            <div className="p-3 bg-accent/30 rounded-lg">
              <h4 className="font-medium flex items-center gap-2">
                <Sun className="h-4 w-4 text-orange-500" />
                Atividade Solar
              </h4>
              <p className="text-sm text-muted-foreground">NOAA Space Weather</p>
            </div>
            <div className="p-3 bg-accent/30 rounded-lg">
              <h4 className="font-medium flex items-center gap-2">
                <TreePine className="h-4 w-4 text-green-600" />
                Desmatamento
              </h4>
              <p className="text-sm text-muted-foreground">INPE DETER • Global Forest Watch</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EnvironmentalRiskMap;