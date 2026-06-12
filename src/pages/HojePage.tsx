import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import useWeather from '@/hooks/useWeather';
import { 
import SEO from '@/components/SEO';
  Sunrise, 
  Sunset, 
  Thermometer, 
  Droplets, 
  Wind,
  Sun,
  Moon,
  Clock
} from 'lucide-react';

import cloudImage from '@/assets/cloud.webp';

const HojePage = () => {
  const { weatherData, loading, error } = useWeather();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-sky flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto"></div>
          <p className="text-lg font-semibold text-foreground">Carregando previsão de hoje...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-sky flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-lg font-semibold text-destructive">{error}</p>
        </div>
      </div>
    );
  }

  const today = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Simulando dados horários para hoje
  const hourlyData = Array.from({ length: 24 }, (_, i) => {
    const hour = i;
    const temp = weatherData ? 
      Math.round(weatherData.temperature + Math.sin(i * Math.PI / 12) * 5) : 
      Math.round(20 + Math.sin(i * Math.PI / 12) * 5);
    
    return {
      hour: hour.toString().padStart(2, '0') + ':00',
      temperature: temp,
      condition: hour >= 6 && hour <= 18 ? 'Ensolarado' : 'Limpo',
      humidity: Math.round(50 + Math.random() * 30),
      windSpeed: Math.round(5 + Math.random() * 10)
    };
  });

  return (
    <div className="min-h-screen bg-gradient-sky py-8 relative overflow-hidden">
      <SEO title="Previsão do Tempo para Hoje | Clima Tempo" description="Previsão do tempo completa para hoje: máxima, mínima, chuva, vento e horários de nascer e pôr do sol." path="/hoje" />
      {/* Floating Clouds */}
      <img 
        src={cloudImage} 
        alt="" 
        className="cloud-bg-1 cloud-float w-96 h-72 object-contain pointer-events-none" 
      />
      <img 
        src={cloudImage} 
        alt="" 
        className="cloud-bg-2 cloud-float-delayed w-120 h-90 object-contain pointer-events-none" 
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Previsão para Hoje
          </h1>
          <p className="text-lg text-muted-foreground capitalize animate-fade-in">
            {today}
          </p>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-center text-foreground mb-6 animate-fade-in">
          Previsão Completa para Hoje
        </h2>

        {weatherData && (
          <>
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="bg-card/80 backdrop-blur-sm hover:shadow-weather transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-2 text-lg">
                    <Thermometer className="h-5 w-5 text-red-500" />
                    <span>Máxima</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-600">
                    {Math.round(weatherData.temperature + 5)}°C
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm hover:shadow-weather transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-2 text-lg">
                    <Thermometer className="h-5 w-5 text-blue-500" />
                    <span>Mínima</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">
                    {Math.round(weatherData.temperature - 3)}°C
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm hover:shadow-weather transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-2 text-lg">
                    <Sunrise className="h-5 w-5 text-yellow-500" />
                    <span>Nascer do Sol</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-yellow-600">
                    06:15
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm hover:shadow-weather transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-2 text-lg">
                    <Sunset className="h-5 w-5 text-orange-500" />
                    <span>Pôr do Sol</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">
                    18:45
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Hourly Forecast */}
            <Card className="bg-card/80 backdrop-blur-sm mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-6 w-6 text-primary" />
                  <span>Previsão por Hora</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <div className="flex space-x-4 pb-4">
                    {hourlyData.map((hour, index) => (
                      <div 
                        key={index}
                        className="flex-shrink-0 bg-accent/30 rounded-lg p-4 min-w-[120px] text-center hover:bg-accent/50 transition-colors duration-200"
                      >
                        <div className="text-sm text-muted-foreground mb-2">
                          {hour.hour}
                        </div>
                        <div className="mb-2">
                          {parseInt(hour.hour) >= 6 && parseInt(hour.hour) <= 18 ? (
                            <Sun className="h-6 w-6 text-yellow-500 mx-auto" />
                          ) : (
                            <Moon className="h-6 w-6 text-blue-400 mx-auto" />
                          )}
                        </div>
                        <div className="text-lg font-bold text-primary mb-1">
                          {hour.temperature}°
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {hour.humidity}%
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Droplets className="h-6 w-6 text-blue-500" />
                    <span>Precipitação</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Probabilidade</span>
                      <span className="font-semibold">15%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Acumulado previsto</span>
                      <span className="font-semibold">0.2 mm</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Wind className="h-6 w-6 text-green-500" />
                    <span>Condições do Vento</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Velocidade média</span>
                      <span className="font-semibold">{weatherData.windSpeed} km/h</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Direção</span>
                      <span className="font-semibold">Nordeste</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Rajadas máximas</span>
                      <span className="font-semibold">{Math.round(weatherData.windSpeed * 1.5)} km/h</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HojePage;