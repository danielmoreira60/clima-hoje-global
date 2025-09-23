import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { 
  Bell, 
  Mail, 
  MessageSquare, 
  Cloud, 
  Zap, 
  Thermometer, 
  Wind,
  Droplets,
  Sun,
  Snowflake,
  AlertTriangle,
  ChevronDown
} from 'lucide-react';

const AlertsForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    whatsapp: '',
    name: '',
    city: '',
    alertTypes: {
      rain: false,
      storm: false,
      temperature: false,
      wind: false,
      uv: false,
      frost: false,
      severe: false,
    },
    frequency: 'immediate',
    timePreference: 'anytime'
  });

  const alertTypes = [
    { id: 'rain', label: 'Chuva Intensa', icon: <Droplets className="h-4 w-4" />, color: 'text-blue-500' },
    { id: 'storm', label: 'Tempestades', icon: <Zap className="h-4 w-4" />, color: 'text-yellow-500' },
    { id: 'temperature', label: 'Temperaturas Extremas', icon: <Thermometer className="h-4 w-4" />, color: 'text-red-500' },
    { id: 'wind', label: 'Ventos Fortes', icon: <Wind className="h-4 w-4" />, color: 'text-green-500' },
    { id: 'uv', label: 'Índice UV Alto', icon: <Sun className="h-4 w-4" />, color: 'text-orange-500' },
    { id: 'frost', label: 'Geadas', icon: <Snowflake className="h-4 w-4" />, color: 'text-cyan-500' },
    { id: 'severe', label: 'Alertas Severos', icon: <AlertTriangle className="h-4 w-4" />, color: 'text-red-600' },
  ];

  const handleAlertTypeChange = (type: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      alertTypes: {
        ...prev.alertTypes,
        [type]: checked
      }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validate form
      if (!formData.email && !formData.whatsapp) {
        toast({
          title: "Erro",
          description: "Informe pelo menos um meio de contato (email ou WhatsApp)",
          variant: "destructive",
        });
        return;
      }

      const selectedAlerts = Object.entries(formData.alertTypes)
        .filter(([_, selected]) => selected)
        .map(([type, _]) => type);

      if (selectedAlerts.length === 0) {
        toast({
          title: "Erro",
          description: "Selecione pelo menos um tipo de alerta",
          variant: "destructive",
        });
        return;
      }

      // Submit to Supabase via edge function
      const { data, error } = await supabase.functions.invoke('weather-alerts', {
        body: {
          email: formData.email || null,
          whatsapp: formData.whatsapp || null,
          location: formData.city,
          alertTypes: selectedAlerts,
          frequency: formData.frequency,
          timePreference: formData.timePreference,
          name: formData.name
        }
      });

      if (error) throw error;

      toast({
        title: "Alertas Configurados!",
        description: `Você receberá ${selectedAlerts.length} tipos de alertas climáticos em ${formData.city}`,
        duration: 5000,
      });

      // Reset form
      setFormData({
        email: '',
        whatsapp: '',
        name: '',
        city: '',
        alertTypes: {
          rain: false,
          storm: false,
          temperature: false,
          wind: false,
          uv: false,
          frost: false,
          severe: false,
        },
        frequency: 'immediate',
        timePreference: 'anytime'
      });

    } catch (error: any) {
      console.error('Erro ao configurar alertas:', error);
      toast({
        title: "Erro",
        description: "Não foi possível configurar os alertas. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-primary" />
              Sistema de Alertas Personalizados
            </CardTitle>
            <CardDescription>
              Configure alertas meteorológicos específicos para sua região
            </CardDescription>
          </div>
          <Button 
            variant="outline" 
            onClick={() => setIsExpanded(!isExpanded)}
            className="gap-2"
          >
            {isExpanded ? 'Ocultar Opções' : 'Configurar Alertas'}
            <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </Button>
        </div>
      </CardHeader>
      
      {isExpanded && (
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Seu nome"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">Cidade</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                  placeholder="São Paulo, SP"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Meios de Contato</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="seu@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="whatsapp" className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    WhatsApp
                  </Label>
                  <Input
                    id="whatsapp"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData(prev => ({ ...prev, whatsapp: e.target.value }))}
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>
            </div>

            {/* Alert Types */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Tipos de Alertas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {alertTypes.map((alert) => (
                  <div key={alert.id} className="flex items-center space-x-3 p-3 border rounded-lg bg-accent/30">
                    <Checkbox
                      id={alert.id}
                      checked={formData.alertTypes[alert.id as keyof typeof formData.alertTypes]}
                      onCheckedChange={(checked) => handleAlertTypeChange(alert.id, checked as boolean)}
                    />
                    <Label
                      htmlFor={alert.id}
                      className={`flex items-center gap-2 cursor-pointer ${alert.color}`}
                    >
                      {alert.icon}
                      {alert.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Notification Preferences */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="frequency">Frequência dos Alertas</Label>
                <Select
                  value={formData.frequency}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, frequency: value }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Imediato</SelectItem>
                    <SelectItem value="hourly">A cada hora</SelectItem>
                    <SelectItem value="daily">Diário</SelectItem>
                    <SelectItem value="critical">Apenas críticos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timePreference">Horário Preferencial</Label>
                <Select
                  value={formData.timePreference}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, timePreference: value }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="anytime">Qualquer horário</SelectItem>
                    <SelectItem value="business">Horário comercial</SelectItem>
                    <SelectItem value="morning">Manhã (6h-12h)</SelectItem>
                    <SelectItem value="afternoon">Tarde (12h-18h)</SelectItem>
                    <SelectItem value="evening">Noite (18h-22h)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              className="w-full" 
              size="lg" 
              disabled={isSubmitting}
            >
              <Bell className="h-4 w-4 mr-2" />
              {isSubmitting ? 'Configurando...' : 'Ativar Alertas Climáticos'}
            </Button>

            {/* Disclaimer */}
            <p className="text-xs text-muted-foreground text-center">
              Os alertas são baseados em dados meteorológicos oficiais. Você pode cancelar a qualquer momento.
              Não cobramos pelo serviço de alertas, apenas custos de SMS/WhatsApp podem ser aplicados pela sua operadora.
            </p>
          </form>
        </CardContent>
      )}
    </Card>
  );
};

export default AlertsForm;