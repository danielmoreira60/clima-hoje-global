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
  type: 'fire' | 'solar' | 'hurricane' | 'flood' | 'deforestation';
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'extreme';
  distance?: number;
  coordinates?: { lat: number; lon: number };
  timestamp: string;
}

const EnvironmentalRiskMap = () => {
  const [activeLayer, setActiveLayer] = useState<string>('fires');
  const [risks, setRisks] = useState<EnvironmentalRisk[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userLocation, setUserLocation] = useState<{ lat: number; lon: number } | null>(null);
  const { toast } = useToast();

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
    loadEnvironmentalData();
  }, [activeLayer]);

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

  const loadEnvironmentalData = async () => {
    setIsLoading(true);
    try {
      // Simular dados até implementar APIs reais
      const mockRisks: EnvironmentalRisk[] = [
        {
          id: '1',
          type: 'fire',
          title: 'Foco de Incêndio Detectado',
          description: 'Queimada ativa na região de Pantanal - MS',
          severity: 'high',
          distance: 45,
          coordinates: { lat: -19.2840, lon: -57.6472 },
          timestamp: new Date().toISOString()
        },
        {
          id: '2', 
          type: 'solar',
          title: 'Tempestade Solar Moderada',
          description: 'Atividade solar elevada - possível interferência em comunicações',
          severity: 'medium',
          timestamp: new Date().toISOString()
        },
        {
          id: '3',
          type: 'deforestation',
          title: 'Alerta de Desmatamento',
          description: 'Área desmatada detectada na Amazônia - Rondônia',
          severity: 'high',
          distance: 850,
          coordinates: { lat: -8.7619, lon: -63.9039 },
          timestamp: new Date().toISOString()
        }
      ];

      // Filtrar por camada ativa
      const filteredRisks = activeLayer === 'all' 
        ? mockRisks 
        : mockRisks.filter(risk => {
            if (activeLayer === 'fires') return risk.type === 'fire';
            if (activeLayer === 'solar') return risk.type === 'solar';
            if (activeLayer === 'deforestation') return risk.type === 'deforestation';
            return false;
          });

      setRisks(filteredRisks);
    } catch (error) {
      console.error('Erro ao carregar dados ambientais:', error);
      toast({
        title: "Erro ao carregar dados",
        description: "Não foi possível carregar os dados ambientais. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const refreshData = () => {
    loadEnvironmentalData();
    toast({
      title: "Dados atualizados",
      description: "Informações ambientais atualizadas com sucesso.",
    });
  };

  const getRisksByProximity = () => {
    if (!userLocation) return risks;
    
    return risks
      .filter(risk => risk.distance !== undefined)
      .sort((a, b) => (a.distance || 0) - (b.distance || 0));
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
            <Button onClick={refreshData} disabled={isLoading} variant="outline">
              <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
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
          <div className="bg-gradient-to-br from-blue-50 to-green-50 border-2 border-dashed border-border rounded-lg h-96 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-green-500/10"></div>
            <div className="text-center z-10">
              <Satellite className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Mapa Interativo Ambiental</h3>
              <p className="text-muted-foreground mb-4">
                Camada ativa: {mapLayers.find(l => l.id === activeLayer)?.label}
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {userLocation ? 
                  `Sua localização: ${userLocation.lat.toFixed(2)}, ${userLocation.lon.toFixed(2)}` :
                  'Detectando localização...'
                }
              </div>
            </div>

            {/* Overlay com pontos simulados */}
            <div className="absolute inset-0">
              {risks.map((risk, index) => (
                <div
                  key={risk.id}
                  className={`absolute w-3 h-3 rounded-full animate-pulse ${
                    risk.severity === 'extreme' ? 'bg-red-500' :
                    risk.severity === 'high' ? 'bg-orange-500' :
                    risk.severity === 'medium' ? 'bg-yellow-500' :
                    'bg-green-500'
                  }`}
                  style={{
                    left: `${20 + index * 15}%`,
                    top: `${30 + index * 20}%`
                  }}
                  title={risk.title}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Alertas próximos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Riscos por proximidade */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Alertas Próximos à Sua Localização</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {getRisksByProximity().length > 0 ? (
              getRisksByProximity().map((risk) => (
                <div key={risk.id} className="p-3 border rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium">{risk.title}</h4>
                    <Badge variant="outline" className={severityColors[risk.severity]}>
                      {severityLabels[risk.severity]}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{risk.description}</p>
                  {risk.distance && (
                    <p className="text-xs text-blue-600">📍 {risk.distance} km de distância</p>
                  )}
                </div>
              ))
            ) : (
              <p className="text-muted-foreground text-center py-4">
                Nenhum alerta próximo à sua localização
              </p>
            )}
          </CardContent>
        </Card>

        {/* Todos os alertas globais */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Alertas Globais Ativos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {risks.length > 0 ? (
              risks.map((risk) => (
                <div key={risk.id} className="p-3 border rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium">{risk.title}</h4>
                    <Badge variant="outline" className={severityColors[risk.severity]}>
                      {severityLabels[risk.severity]}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{risk.description}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {new Date(risk.timestamp).toLocaleString('pt-BR')}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-muted-foreground text-center py-4">
                Carregando alertas ambientais...
              </p>
            )}
          </CardContent>
        </Card>
      </div>

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