import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { 
  Bell,
  AlertTriangle,
  Flame,
  Sun,
  Wind,
  Waves,
  TreePine,
  Volume2,
  VolumeX,
  Settings,
  MapPin
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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

const EnvironmentalAlerts = () => {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [proximityRadius, setProximityRadius] = useState(100); // km
  const { toast } = useToast();

  const alertIcons = {
    fire: Flame,
    solar: Sun, 
    hurricane: Wind,
    flood: Waves,
    deforestation: TreePine
  };

  const severityConfig = {
    low: { 
      color: 'bg-green-100 text-green-800 border-green-200', 
      bgColor: 'bg-green-50',
      label: 'Baixo Risco' 
    },
    medium: { 
      color: 'bg-yellow-100 text-yellow-800 border-yellow-200', 
      bgColor: 'bg-yellow-50',
      label: 'Risco Moderado' 
    },
    high: { 
      color: 'bg-orange-100 text-orange-800 border-orange-200', 
      bgColor: 'bg-orange-50',
      label: 'Alto Risco' 
    },
    extreme: { 
      color: 'bg-red-100 text-red-800 border-red-200', 
      bgColor: 'bg-red-50',
      label: 'Risco Extremo' 
    }
  };

  useEffect(() => {
    loadAlerts();
    const interval = setInterval(loadAlerts, 300000); // Atualiza a cada 5 minutos
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Verificar novos alertas de alta severidade
    const highSeverityAlerts = alerts.filter(
      alert => alert.isActive && (alert.severity === 'high' || alert.severity === 'extreme')
    );
    
    if (highSeverityAlerts.length > 0 && notificationsEnabled) {
      highSeverityAlerts.forEach(alert => {
        if (alert.distance && alert.distance <= proximityRadius) {
          showUrgentNotification(alert);
        }
      });
    }
  }, [alerts, notificationsEnabled, proximityRadius]);

  const loadAlerts = async () => {
    try {
      // Dados simulados - em produção viria das APIs reais
      const mockAlerts: Alert[] = [
        {
          id: '1',
          type: 'fire',
          title: 'Foco de Incêndio Próximo',
          message: 'Queimada ativa detectada na região. Mantenha-se afastado da área e acompanhe as orientações das autoridades.',
          severity: 'high',
          location: 'Pantanal - MS',
          distance: 45,
          timestamp: new Date(Date.now() - 30 * 60000), // 30 min atrás
          isActive: true
        },
        {
          id: '2',
          type: 'solar',
          title: 'Tempestade Solar em Andamento', 
          message: 'Atividade solar elevada pode causar interferências em GPS, comunicações e sistemas eletrônicos.',
          severity: 'medium',
          timestamp: new Date(Date.now() - 60 * 60000), // 1h atrás
          isActive: true
        },
        {
          id: '3',
          type: 'hurricane',
          title: 'Ventos Fortes Previstos',
          message: 'Sistema de baixa pressão se aproximando. Ventos de até 80 km/h são esperados nas próximas 6 horas.',
          severity: 'medium',
          location: 'Região Sul',
          distance: 120,
          timestamp: new Date(Date.now() - 90 * 60000), // 1h30 atrás  
          isActive: true
        },
        {
          id: '4',
          type: 'deforestation',
          title: 'Alerta de Desmatamento',
          message: 'Nova área desmatada detectada por satélite. Autoridades ambientais foram notificadas.',
          severity: 'high',
          location: 'Amazônia - RO',
          distance: 850,
          timestamp: new Date(Date.now() - 180 * 60000), // 3h atrás
          isActive: true
        }
      ];

      setAlerts(mockAlerts);
    } catch (error) {
      console.error('Erro ao carregar alertas:', error);
    }
  };

  const showUrgentNotification = (alert: Alert) => {
    // Notificação visual
    toast({
      title: `🚨 ${alert.title}`,
      description: alert.message,
      variant: alert.severity === 'extreme' ? 'destructive' : 'default',
    });

    // Som de alerta (se habilitado)
    if (soundEnabled) {
      playAlertSound(alert.severity);
    }

    // Notificação do browser (se suportado)
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(`Alerta Ambiental: ${alert.title}`, {
        body: alert.message,
        icon: '/favicon.ico',
        tag: alert.id
      });
    }
  };

  const playAlertSound = (severity: string) => {
    // Simular som de alerta com frequência diferente por severidade
    if (typeof window !== 'undefined' && window.AudioContext) {
      const audioContext = new AudioContext();
      const frequency = severity === 'extreme' ? 800 : severity === 'high' ? 600 : 400;
      
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.5);
    }
  };

  const requestNotificationPermission = async () => {
    if ('Notification' in window && Notification.permission === 'default') {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        toast({
          title: "Notificações habilitadas",
          description: "Você receberá alertas importantes sobre riscos ambientais.",
        });
      }
    }
  };

  const dismissAlert = (alertId: string) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === alertId ? { ...alert, isActive: false } : alert
    ));
  };

  const getTimeAgo = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    
    if (diffMins < 60) {
      return `${diffMins} min atrás`;
    } else if (diffHours < 24) {
      return `${diffHours}h atrás`;
    } else {
      return date.toLocaleDateString('pt-BR');
    }
  };

  const activeAlerts = alerts.filter(alert => alert.isActive);
  const nearbyAlerts = activeAlerts.filter(alert => alert.distance && alert.distance <= proximityRadius);

  return (
    <div className="space-y-6">
      {/* Header com configurações */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-6 w-6 text-primary" />
                Sistema de Alertas Ambientais
              </CardTitle>
              <p className="text-muted-foreground">
                {activeAlerts.length} alertas ativos • {nearbyAlerts.length} próximos a você
              </p>
            </div>
            <Button onClick={requestNotificationPermission} variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              Configurações
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center space-x-2">
              <Switch
                checked={notificationsEnabled}
                onCheckedChange={setNotificationsEnabled}
              />
              <label className="text-sm font-medium">Notificações ativas</label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch
                checked={soundEnabled}
                onCheckedChange={setSoundEnabled}
              />
              {soundEnabled ? (
                <Volume2 className="h-4 w-4 text-green-600" />
              ) : (
                <VolumeX className="h-4 w-4 text-gray-400" />
              )}
              <label className="text-sm font-medium">Som de alerta</label>
            </div>
            
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium">Raio de proximidade:</label>
              <select 
                value={proximityRadius} 
                onChange={(e) => setProximityRadius(Number(e.target.value))}
                className="text-sm border rounded px-2 py-1"
              >
                <option value={50}>50 km</option>
                <option value={100}>100 km</option>
                <option value={200}>200 km</option>
                <option value={500}>500 km</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Alertas próximos (alta prioridade) */}
      {nearbyAlerts.length > 0 && (
        <Card className="border-orange-200 bg-orange-50">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2 text-orange-800">
              <AlertTriangle className="h-5 w-5" />
              Alertas Próximos à Sua Localização
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {nearbyAlerts.map((alert) => {
              const Icon = alertIcons[alert.type];
              const config = severityConfig[alert.severity];
              
              return (
                <div key={alert.id} className={`p-4 border rounded-lg ${config.bgColor}`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Icon className="h-6 w-6 text-orange-600" />
                      <div>
                        <h4 className="font-semibold text-orange-900">{alert.title}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className={config.color}>
                            {config.label}
                          </Badge>
                          {alert.distance && (
                            <span className="text-sm text-orange-700 flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {alert.distance} km
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => dismissAlert(alert.id)}
                      className="text-orange-600 hover:text-orange-800"
                    >
                      ✕
                    </Button>
                  </div>
                  <p className="text-orange-800 mb-2">{alert.message}</p>
                  <div className="flex items-center justify-between text-xs text-orange-600">
                    <span>{alert.location}</span>
                    <span>{getTimeAgo(alert.timestamp)}</span>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      )}

      {/* Todos os alertas ativos */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Todos os Alertas Ativos</CardTitle>
        </CardHeader>
        <CardContent>
          {activeAlerts.length > 0 ? (
            <div className="space-y-3">
              {activeAlerts.map((alert) => {
                const Icon = alertIcons[alert.type];
                const config = severityConfig[alert.severity];
                
                return (
                  <div key={alert.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <h4 className="font-medium">{alert.title}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className={config.color}>
                              {config.label}
                            </Badge>
                            {alert.distance && (
                              <span className="text-sm text-muted-foreground flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {alert.distance} km
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => dismissAlert(alert.id)}
                      >
                        ✕
                      </Button>
                    </div>
                    <p className="text-muted-foreground mb-2">{alert.message}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{alert.location}</span>
                      <span>{getTimeAgo(alert.timestamp)}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-8">
              <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Nenhum alerta ativo</h3>
              <p className="text-muted-foreground">
                Monitorando condições ambientais em tempo real
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EnvironmentalAlerts;