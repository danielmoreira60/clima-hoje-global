import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import WeatherCard from '@/components/WeatherCard';
import useWeather from '@/hooks/useWeather';
import { 
import SEO from '@/components/SEO';
  Sunrise, 
  Sunset, 
  Thermometer, 
  Droplets, 
  Wind,
  Sun,
  Calendar,
  TrendingUp,
  TrendingDown
} from 'lucide-react';

import cloudImage from '@/assets/cloud.webp';

const AmanhãPage = () => {
  const { weatherData, loading, error } = useWeather();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-sky flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto"></div>
          <p className="text-lg font-semibold text-foreground">Carregando previsão de amanhã...</p>
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

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowFormatted = tomorrow.toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Dados simulados para amanhã
  const tomorrowData = weatherData ? {
    ...weatherData,
    temperature: weatherData.temperature + Math.round((Math.random() - 0.5) * 6),
    condition: ['Ensolarado', 'Parcialmente nublado', 'Nublado'][Math.floor(Math.random() * 3)],
    humidity: Math.round(40 + Math.random() * 40),
    windSpeed: Math.round(weatherData.windSpeed + (Math.random() - 0.5) * 10)
  } : null;

  const periods = [
    {
      name: 'Madrugada',
      time: '00h - 06h',
      icon: <Sun className="h-8 w-8 text-purple-400" />,
      temp: tomorrowData ? tomorrowData.temperature - 5 : 18,
      condition: 'Limpo',
      humidity: 75
    },
    {
      name: 'Manhã',
      time: '06h - 12h',
      icon: <Sunrise className="h-8 w-8 text-yellow-500" />,
      temp: tomorrowData ? tomorrowData.temperature - 2 : 21,
      condition: 'Ensolarado',
      humidity: 60
    },
    {
      name: 'Tarde',
      time: '12h - 18h',
      icon: <Sun className="h-8 w-8 text-orange-500" />,
      temp: tomorrowData ? tomorrowData.temperature + 3 : 26,
      condition: 'Parcialmente nublado',
      humidity: 45
    },
    {
      name: 'Noite',
      time: '18h - 00h',
      icon: <Sunset className="h-8 w-8 text-indigo-500" />,
      temp: tomorrowData ? tomorrowData.temperature - 1 : 22,
      condition: 'Limpo',
      humidity: 65
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-sky py-8 relative overflow-hidden">
      <SEO title="Previsão do Tempo para Amanhã | Clima Tempo" description="Como estará o tempo amanhã? Confira temperatura, chance de chuva e condições climáticas para sua cidade." path="/amanha" />
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
            Previsão para Amanhã
          </h1>
          <div className="flex items-center justify-center space-x-2 text-muted-foreground animate-fade-in">
            <Calendar className="h-5 w-5" />
            <p className="text-lg capitalize">{tomorrowFormatted}</p>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-center text-foreground mb-6 animate-fade-in">
          Previsão Detalhada para Amanhã
        </h2>

        {tomorrowData && (
          <>
            {/* Main Weather Card */}
            <div className="max-w-2xl mx-auto mb-12 animate-fade-in">
              <WeatherCard
                title="Resumo de Amanhã"
                location={tomorrowData.location}
                temperature={tomorrowData.temperature}
                condition={tomorrowData.condition}
                humidity={tomorrowData.humidity}
                windSpeed={tomorrowData.windSpeed}
                pressure={tomorrowData.pressure}
                visibility={tomorrowData.visibility}
                className="shadow-glow"
              />
            </div>

            {/* Temperature Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-card/80 backdrop-blur-sm hover:shadow-weather transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-red-500" />
                    <span>Máxima</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    {Math.round(tomorrowData.temperature + 4)}°C
                  </div>
                  <p className="text-sm text-muted-foreground">
                    2°C maior que hoje
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm hover:shadow-weather transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingDown className="h-5 w-5 text-blue-500" />
                    <span>Mínima</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {Math.round(tomorrowData.temperature - 4)}°C
                  </div>
                  <p className="text-sm text-muted-foreground">
                    1°C menor que hoje
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm hover:shadow-weather transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-2">
                    <Droplets className="h-5 w-5 text-blue-500" />
                    <span>Chuva</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {Math.floor(Math.random() * 30)}%
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Probabilidade baixa
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Periods of the Day */}
            <Card className="bg-card/80 backdrop-blur-sm mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Sun className="h-6 w-6 text-primary" />
                  <span>Previsão por Período</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {periods.map((period, index) => (
                    <div 
                      key={index}
                      className="bg-accent/30 rounded-lg p-4 text-center hover:bg-accent/50 transition-all duration-200 hover:scale-105"
                    >
                      <h3 className="font-semibold text-foreground mb-2">{period.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{period.time}</p>
                      <div className="mb-3 flex justify-center">
                        {period.icon}
                      </div>
                      <div className="text-2xl font-bold text-primary mb-1">
                        {period.temp}°C
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{period.condition}</p>
                      <p className="text-xs text-muted-foreground">
                        Umidade: {period.humidity}%
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      <span className="text-muted-foreground">Velocidade</span>
                      <span className="font-semibold">{tomorrowData.windSpeed} km/h</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Direção</span>
                      <span className="font-semibold">Sudeste</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Rajadas</span>
                      <span className="font-semibold">{Math.round(tomorrowData.windSpeed * 1.4)} km/h</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Thermometer className="h-6 w-6 text-purple-500" />
                    <span>Conforto Térmico</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Sensação térmica</span>
                      <span className="font-semibold">{Math.round(tomorrowData.temperature + 1)}°C</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Índice UV</span>
                      <span className="font-semibold">Moderado (6)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Recomendação</span>
                      <span className="font-semibold text-green-600">Ideal para atividades</span>
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

export default AmanhãPage;