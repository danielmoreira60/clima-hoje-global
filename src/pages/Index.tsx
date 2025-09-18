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
import EnvironmentalRiskMap from "@/components/EnvironmentalRiskMap";
import EnvironmentalAlerts from "@/components/EnvironmentalAlerts";
import useWeather from "@/hooks/useWeather";
import weatherBanner from "@/assets/weather-banner.jpg";
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
  Bell,
  AlertTriangle
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
        <section 
          className="relative text-center mb-12 animate-fade-in py-20 px-8 rounded-2xl overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${weatherBanner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-scale-in drop-shadow-2xl">
              Clima Tempo
            </h1>
            <p className="text-xl text-white/90 mb-8 drop-shadow-lg">
              Previsão do tempo completa e precisa para sua região com monitoramento global. Confira a previsão do tempo para hoje, amanhã e próximos 15 dias.
            </p>
            <div className="flex items-center justify-center gap-2 text-white/80 mb-6 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 inline-flex">
              <MapPin className="h-4 w-4" />
              <span className="font-medium">{weatherData?.location || 'Detectando sua localização...'}</span>
            </div>
            
            {/* Current Weather Conditions */}
            {weatherData && !loading && (
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 mb-6 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="space-y-1">
                    <div className="flex items-center justify-center gap-2">
                      <Thermometer className="h-5 w-5 text-red-400" />
                      <span className="text-white/80 text-sm">Temperatura Agora</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{weatherData.temperature}°C</p>
                    <p className="text-sm text-white/70">Sensação {weatherData.feelsLike}°C</p>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-center justify-center gap-2">
                      <Droplets className="h-5 w-5 text-blue-400" />
                      <span className="text-white/80 text-sm">Previsão de Chuva</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{weatherData.forecast[0]?.pop || 15}%</p>
                    <p className="text-sm text-white/70">Próximas horas</p>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-center justify-center gap-2">
                      <Wind className="h-5 w-5 text-green-400" />
                      <span className="text-white/80 text-sm">Vento</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{weatherData.windSpeed} km/h</p>
                    <p className="text-sm text-white/70">Umidade {weatherData.humidity}%</p>
                  </div>
                </div>
              </div>
            )}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {!loading && (
                <Button 
                  onClick={refetch} 
                  variant="outline" 
                  className="gap-2 hover-scale bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm"
                >
                  <RefreshCw className="h-4 w-4" />
                  Atualizar Dados
                </Button>
              )}
              <Button 
                onClick={refetch} 
                variant="default" 
                className="gap-2 hover-scale bg-white/10 hover:bg-white/20 border border-white/30 text-white backdrop-blur-sm"
              >
                <MapPin className="h-4 w-4" />
                Usar Minha Localização
              </Button>
            </div>
          </div>
        </section>

        {/* City Search */}
        <section className="mb-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">Previsão do Tempo para Qualquer Cidade</h2>
            <p className="text-muted-foreground">Consulte o clima tempo para São Paulo, Belo Horizonte, Cabo Frio e outras cidades do Brasil</p>
          </div>
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
            Previsão do Tempo Hoje - Condições Meteorológicas Detalhadas
          </h2>
          <p className="text-muted-foreground mb-6">
            Acompanhe em tempo real as condições climáticas atuais com dados precisos de temperatura, umidade, vento e previsão de chuva para hoje.
          </p>
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
          <p className="text-muted-foreground mb-6">
            Visualização interativa de condições meteorológicas, radar de chuva, imagens de satélite e monitoramento climático em tempo real.
          </p>
          <RealTimeWeatherMap />
        </section>

        {/* Environmental Risk Monitoring */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-primary" />
            Monitoramento Ambiental e Riscos Climáticos
          </h2>
          <p className="text-muted-foreground mb-6">
            Sistema avançado de monitoramento de queimadas, atividade solar, furacões, desmatamento e outros fenômenos extremos em tempo real com dados oficiais da NASA, NOAA e INPE.
          </p>
          <EnvironmentalRiskMap />
        </section>

        {/* Environmental Alerts System */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Bell className="h-6 w-6 text-primary" />
            Sistema de Alertas Ambientais Avançado
          </h2>
          <p className="text-muted-foreground mb-6">
            Receba notificações em tempo real sobre riscos ambientais próximos à sua localização com monitoramento contínuo e alertas personalizados.
          </p>
          <EnvironmentalAlerts />
        </section>

        {/* Global Weather Monitoring */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Globe className="h-6 w-6 text-primary" />
            Monitoramento Meteorológico Global
          </h2>
          <p className="text-muted-foreground mb-6">
            Acompanhe condições climáticas globais, padrões meteorológicos mundiais e fenômenos atmosféricos de grande escala.
          </p>
          <GlobalWeatherMap />
        </section>

        {/* Quick Access Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Calendar className="h-6 w-6 text-primary" />
            Previsão do Tempo para Hoje, Amanhã e Próximos Dias
          </h2>
          <p className="text-muted-foreground mb-6">
            Acesse rapidamente a previsão do tempo para amanhã e os próximos 15 dias. Planeje suas atividades com antecedência consultando o clima para amanhã.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover-lift cursor-pointer bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Tempo Agora</h3>
                <p className="text-sm text-muted-foreground">Condições atuais em tempo real</p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift cursor-pointer bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 text-center">
                <Sun className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Clima para Hoje</h3>
                <p className="text-sm text-muted-foreground">Previsão do tempo hoje completa</p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift cursor-pointer bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Clima para Amanhã</h3>
                <p className="text-sm text-muted-foreground">Previsão do tempo para amanhã</p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift cursor-pointer bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 text-center">
                <Globe className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">15 Dias</h3>
                <p className="text-sm text-muted-foreground">Previsão estendida detalhada</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Environmental Risk Monitoring */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Satellite className="h-6 w-6 text-primary" />
            Monitoramento Ambiental e Riscos Climáticos
          </h2>
          <p className="text-muted-foreground mb-6">
            Sistema avançado de monitoramento de queimadas, atividade solar, furacões, desmatamento e outros fenômenos extremos em tempo real.
          </p>
          <EnvironmentalRiskMap />
        </section>

        {/* Environmental Alerts System */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Bell className="h-6 w-6 text-primary" />
            Sistema de Alertas Ambientais Avançado
          </h2>
          <p className="text-muted-foreground mb-6">
            Receba notificações em tempo real sobre riscos ambientais próximos à sua localização com dados oficiais da NASA, NOAA, INPE e outras fontes.
          </p>
          <EnvironmentalAlerts />
        </section>

        {/* Weather Insights */}
        <section className="mb-12">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Insights Meteorológicos e Ambientais
              </CardTitle>
              <CardDescription>
                Análise personalizada baseada nos dados meteorológicos e ambientais atuais
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-accent/30">
                  <h4 className="font-semibold mb-2 text-green-600">Atividades Recomendadas para Hoje</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Caminhada ao ar livre</li>
                    <li>• Exercícios externos</li>
                    <li>• Passeios de bicicleta</li>
                    <li>• Monitorar alertas ambientais</li>
                  </ul>
                </div>
                
                <div className="p-4 rounded-lg bg-accent/30">
                  <h4 className="font-semibold mb-2 text-yellow-600">Cuidados com Riscos Ambientais</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Verificar focos de queimadas próximos</li>
                    <li>• Acompanhar atividade solar</li>
                    <li>• Estar atento a alertas de desmatamento</li>
                    <li>• Monitorar condições meteorológicas extremas</li>
                  </ul>
                </div>
                
                <div className="p-4 rounded-lg bg-accent/30">
                  <h4 className="font-semibold mb-2 text-blue-600">Previsão Integrada 24h</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Temperatura agora estável</li>
                    <li>• Baixa previsão de chuva</li>
                    <li>• Ventos moderados</li>
                    <li>• Sem alertas ambientais críticos</li>
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
