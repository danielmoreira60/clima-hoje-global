import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import RealTimeWeatherMap from "@/components/RealTimeWeatherMap";
import AlertsForm from "@/components/AlertsForm";
import CitySearch from "@/components/CitySearch";
import NaturalEventsMonitor from "@/components/NaturalEventsMonitor";
import BlogSection from "@/components/BlogSection";
import useWeather from "@/hooks/useWeather";
import SEO from '@/components/SEO';
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
      <SEO title="Clima Tempo - Previsão do Tempo Hoje e 15 Dias" description="Previsão do tempo detalhada para todo o Brasil: temperatura agora, chuva, clima para hoje, amanhã e próximos 15 dias." path="/" />
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="relative text-center mb-12 animate-fade-in py-20 px-8 rounded-2xl overflow-hidden min-h-[420px]">
          <img
            src="/weather-banner.jpg"
            alt="Panorama do céu com nuvens dramáticas representando a previsão do tempo no Brasil"
            width="1474"
            height="554"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" aria-hidden="true" />
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-scale-in drop-shadow-2xl">
              Clima Tempo — Previsão do tempo precisa e monitoramento global
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
                  className="gap-2 hover-scale bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 shadow-lg font-semibold"
                >
                  <RefreshCw className="h-4 w-4" />
                  Atualizar Dados
                </Button>
              )}
              <Button 
                onClick={refetch} 
                className="gap-2 hover-scale bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 shadow-lg font-semibold"
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

        {/* Interactive Weather Maps */}
        <section className="mb-12">
          <RealTimeWeatherMap />
        </section>

        {/* Environmental Risk Monitoring */}
        <section className="mb-12">
          <NaturalEventsMonitor />
        </section>

        {/* Weather Insights */}
        <section className="mb-12">
          <Card className="bg-white border-border/50 shadow-weather">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-900">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="text-slate-900">
                  Insights Meteorológicos e Ambientais
                </span>
              </CardTitle>
              <CardDescription className="text-slate-600">
                Análise personalizada baseada nos dados meteorológicos e ambientais atuais
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    title: "Atividades Recomendadas para Hoje",
                    accent: "bg-emerald-500",
                    items: ["Caminhada ao ar livre", "Exercícios externos", "Passeios de bicicleta", "Monitorar alertas ambientais"],
                  },
                  {
                    title: "Cuidados com Riscos Ambientais",
                    accent: "bg-orange-500",
                    items: ["Verificar focos de queimadas próximos", "Acompanhar atividade solar", "Estar atento a alertas de desmatamento", "Monitorar condições meteorológicas extremas"],
                  },
                  {
                    title: "Previsão Integrada 24h",
                    accent: "bg-sky-500",
                    items: ["Temperatura agora estável", "Baixa previsão de chuva", "Ventos moderados", "Sem alertas ambientais críticos"],
                  },
                ].map((col) => (
                  <div key={col.title} className="p-5 rounded-lg bg-slate-50 border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`h-2 w-8 rounded-full ${col.accent}`} />
                      <h3 className="font-semibold text-slate-900 text-base">{col.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {col.items.map((it) => (
                        <li key={it} className="flex items-start gap-2 text-sm text-slate-700">
                          <span className={`mt-1.5 h-1.5 w-1.5 rounded-full ${col.accent} shrink-0`} />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Blog Section */}
        <BlogSection />

        {/* Sistema de Alertas Personalizados */}
        <section className="mb-12">
          <AlertsForm />
        </section>
      </main>
    </div>
  );
};

export default Index;
