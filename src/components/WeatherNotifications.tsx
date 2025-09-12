import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { 
  Bell, 
  BellRing, 
  AlertTriangle, 
  Sun, 
  Cloud,
  Droplets,
  Wind,
  Settings,
  X
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface NotificationSettings {
  enabled: boolean;
  sound: boolean;
  desktop: boolean;
  severe: boolean;
}

const WeatherNotifications = () => {
  const [settings, setSettings] = useState<NotificationSettings>({
    enabled: false,
    sound: true,
    desktop: true,
    severe: true
  });
  
  const [permission, setPermission] = useState<NotificationPermission>('default');
  const { toast } = useToast();

  useEffect(() => {
    // Check notification permission on mount
    if ('Notification' in window) {
      setPermission(Notification.permission);
    }

    // Load settings from localStorage
    const savedSettings = localStorage.getItem('weather-notifications');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  const requestPermission = async () => {
    if ('Notification' in window) {
      const result = await Notification.requestPermission();
      setPermission(result);
      
      if (result === 'granted') {
        toast({
          title: "Notificações Ativadas!",
          description: "Você receberá alertas importantes sobre o clima",
        });
        
        setSettings(prev => ({ ...prev, enabled: true }));
        
        // Show test notification
        new Notification('Clima Hoje - Notificações Ativas', {
          body: 'Você receberá alertas meteorológicos importantes',
          icon: '/favicon.ico',
          badge: '/favicon.ico'
        });
      } else {
        toast({
          title: "Permissão Negada",
          description: "Para receber alertas, permita notificações nas configurações do navegador",
          variant: "destructive",
        });
      }
    }
  };

  const updateSettings = (key: keyof NotificationSettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    localStorage.setItem('weather-notifications', JSON.stringify(newSettings));
    
    if (key === 'enabled' && value && permission !== 'granted') {
      requestPermission();
    }
  };

  const showTestNotification = () => {
    if (permission === 'granted' && settings.enabled) {
      new Notification('🌦️ Alerta Meteorológico - Teste', {
        body: 'Possibilidade de chuva forte nas próximas 2 horas em São Paulo',
        icon: '/favicon.ico',
        badge: '/favicon.ico',
        requireInteraction: true,
        tag: 'weather-alert-test'
      });
      
      toast({
        title: "Notificação de Teste Enviada",
        description: "Verifique se apareceu no seu dispositivo",
      });
    }
  };

  // Mock weather alerts for demonstration
  const currentAlerts = [
    {
      id: 1,
      type: 'warning',
      title: 'Chuva Forte Prevista',
      message: 'Chuva intensa nas próximas 2 horas',
      severity: 'medium',
      icon: <Droplets className="h-4 w-4" />
    },
    {
      id: 2,
      type: 'info',
      title: 'Temperatura Elevada',
      message: 'Máxima de 35°C hoje',
      severity: 'low',
      icon: <Sun className="h-4 w-4" />
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'destructive';
      case 'medium': return 'default';
      default: return 'secondary';
    }
  };

  return (
    <div className="space-y-6">
      {/* Notification Settings */}
      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            Configurações de Notificações
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Permission Status */}
          <div className="flex items-center justify-between p-4 bg-accent/30 rounded-lg">
            <div className="flex items-center gap-3">
              {permission === 'granted' ? (
                <BellRing className="h-5 w-5 text-green-500" />
              ) : (
                <Bell className="h-5 w-5 text-muted-foreground" />
              )}
              <div>
                <p className="font-medium">
                  Status: {permission === 'granted' ? 'Ativado' : 'Desativado'}
                </p>
                <p className="text-sm text-muted-foreground">
                  {permission === 'granted' 
                    ? 'Você receberá notificações push' 
                    : 'Permita notificações para receber alertas'
                  }
                </p>
              </div>
            </div>
            
            {permission !== 'granted' && (
              <Button onClick={requestPermission} size="sm">
                Ativar Notificações
              </Button>
            )}
          </div>

          {/* Settings */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="notifications-enabled" className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                Notificações Habilitadas
              </Label>
              <Switch
                id="notifications-enabled"
                checked={settings.enabled}
                onCheckedChange={(checked) => updateSettings('enabled', checked)}
                disabled={permission !== 'granted'}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="sound-enabled">Som de Notificação</Label>
              <Switch
                id="sound-enabled"
                checked={settings.sound}
                onCheckedChange={(checked) => updateSettings('sound', checked)}
                disabled={!settings.enabled}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="desktop-enabled">Notificações Desktop</Label>
              <Switch
                id="desktop-enabled"
                checked={settings.desktop}
                onCheckedChange={(checked) => updateSettings('desktop', checked)}
                disabled={!settings.enabled}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="severe-enabled">Apenas Alertas Severos</Label>
              <Switch
                id="severe-enabled"
                checked={settings.severe}
                onCheckedChange={(checked) => updateSettings('severe', checked)}
                disabled={!settings.enabled}
              />
            </div>
          </div>

          {/* Test Notification */}
          {settings.enabled && (
            <Button 
              onClick={showTestNotification} 
              variant="outline" 
              className="w-full gap-2"
            >
              <Settings className="h-4 w-4" />
              Testar Notificação
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Current Alerts */}
      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-primary" />
            Alertas Ativos ({currentAlerts.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {currentAlerts.map((alert) => (
              <div
                key={alert.id}
                className="flex items-start justify-between p-3 bg-accent/30 rounded-lg"
              >
                <div className="flex items-start gap-3">
                  <div className="p-1 bg-background rounded">
                    {alert.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium">{alert.title}</h4>
                      <Badge variant={getSeverityColor(alert.severity) as any}>
                        {alert.severity === 'high' ? 'Alto' : 
                         alert.severity === 'medium' ? 'Médio' : 'Baixo'}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{alert.message}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeatherNotifications;