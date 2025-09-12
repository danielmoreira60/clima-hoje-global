import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import WeatherCard from "@/components/WeatherCard";
import WeatherDashboard from "@/components/WeatherDashboard";
import RealTimeWeatherMap from "@/components/RealTimeWeatherMap";
import GlobalWeatherMap from "@/components/GlobalWeatherMap";
import AlertsForm from "@/components/AlertsForm";
import WeatherNotifications from "@/components/WeatherNotifications";
import CitySearch from "@/components/CitySearch";
import useWeather from "@/hooks/useWeather";
import { 
  MapPin, 
  RefreshCw, 
  Calendar,
  Thermometer,
  Droplets,
  Wind,
  Eye,
  Sun,
  Clock,
  TrendingUp,
  Globe,
  Satellite,
  Bell
} from "lucide-react";

const Index = () => {
  const { weatherData, loading, error, refetch, searchWeatherByCity } = useWeather();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-weather flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="text-lg font-medium text-muted-foreground">Carregando dados meteorológicos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-weather">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 animate-scale-in bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Clima Hoje
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Previsão do tempo completa e precisa para sua região com monitoramento global
          </p>
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
            <MapPin className="h-4 w-4" />
            <span>{weatherData?.location || 'Carregando localização...'}</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {!loading && (
              <Button 
                onClick={refetch} 
                variant="outline" 
                className="gap-2 hover-scale"
              >
                <RefreshCw className="h-4 w-4" />
                Atualizar Dados
              </Button>
            )}
            <Button 
              onClick={refetch} 
              variant="default" 
              className="gap-2 hover-scale bg-primary hover:bg-primary/90"
            >
              <MapPin className="h-4 w-4" />
              Usar Minha Localização
            </Button>
          </div>
        </section>

        {/* City Search */}
        <section className="mb-12">
          <CitySearch 
            onSearch={searchWeatherByCity}
            currentLocation={weatherData?.location}
            isLoading={loading}
          />
        </section>

        {/* Current Weather Dashboard */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Thermometer className="h-6 w-6 text-primary" />
            Condições Meteorológicas Detalhadas
          </h2>
          <WeatherDashboard />
        </section>

        {/* Weather Notifications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Bell className="h-6 w-6 text-primary" />
            Notificações e Alertas
          </h2>
          <WeatherNotifications />
        </section>

        {/* Alerts Form */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Bell className="h-6 w-6 text-primary" />
            Sistema de Alertas Personalizados
          </h2>
          <AlertsForm />
        </section>

        {/* Interactive Weather Maps */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Satellite className="h-6 w-6 text-primary" />
            Mapas Meteorológicos em Tempo Real
          </h2>
          <RealTimeWeatherMap />
        </section>

        {/* Global Weather Monitoring */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Globe className="h-6 w-6 text-primary" />
            Monitoramento Meteorológico Global
          </h2>
          <GlobalWeatherMap />
        </section>

        {/* Quick Access Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Calendar className="h-6 w-6 text-primary" />
            Previsões Estendidas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover-lift cursor-pointer bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Agora</h3>
                <p className="text-sm text-muted-foreground">Condições atuais</p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift cursor-pointer bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 text-center">
                <Sun className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Hoje</h3>
                <p className="text-sm text-muted-foreground">Previsão diária</p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift cursor-pointer bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">7 Dias</h3>
                <p className="text-sm text-muted-foreground">Tendência semanal</p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift cursor-pointer bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 text-center">
                <Globe className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">15 Dias</h3>
                <p className="text-sm text-muted-foreground">Previsão estendida</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Weather Insights */}
        <section className="mb-12">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Insights Meteorológicos
              </CardTitle>
              <CardDescription>
                Análise personalizada baseada nos dados atuais
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-accent/30">
                  <h4 className="font-semibold mb-2 text-green-600">Atividades Recomendadas</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Caminhada ao ar livre</li>
                    <li>• Exercícios externos</li>
                    <li>• Passeios de bicicleta</li>
                  </ul>
                </div>
                
                <div className="p-4 rounded-lg bg-accent/30">
                  <h4 className="font-semibold mb-2 text-yellow-600">Cuidados Necessários</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Use protetor solar</li>
                    <li>• Mantenha-se hidratado</li>
                    <li>• Evite exposição prolongada</li>
                  </ul>
                </div>
                
                <div className="p-4 rounded-lg bg-accent/30">
                  <h4 className="font-semibold mb-2 text-blue-600">Próximas 24h</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Temperatura estável</li>
                    <li>• Baixa chance de chuva</li>
                    <li>• Ventos moderados</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Index;
