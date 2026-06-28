import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import WeatherCard from '@/components/WeatherCard';
import RealTimeWeatherMap from '@/components/RealTimeWeatherMap';
import useWeather from '@/hooks/useWeather';
import SEO from '@/components/SEO';
import { 
  Thermometer, 
  Droplets, 
  Wind, 
  Eye, 
  Gauge,
  Sun,
  MapPin,
  Clock
} from 'lucide-react';

import cloudImage from '@/assets/cloud.webp';

const AgoraPage = () => {
  const { weatherData, loading, error } = useWeather();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-sky flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto"></div>
          <p className="text-lg font-semibold text-foreground">Carregando dados atuais...</p>
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

  const currentTime = new Date().toLocaleString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="min-h-screen bg-gradient-sky py-8 relative overflow-hidden">
      <SEO title="Tempo Agora - Condições Climáticas em Tempo Real | Clima Tempo" description="Veja as condições do tempo agora: temperatura, umidade, vento e pressão atualizadas em tempo real para sua cidade." path="/agora" />
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
            Condições Atuais
          </h1>
          <div className="flex items-center justify-center space-x-2 text-muted-foreground animate-fade-in">
            <Clock className="h-5 w-5" />
            <p className="text-lg capitalize">{currentTime}</p>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-center text-foreground mb-6 animate-fade-in">
          Dados Meteorológicos em Tempo Real
        </h2>

        {weatherData && (
          <>
            {/* Current Weather Card */}
            <div className="max-w-3xl mx-auto mb-12 animate-fade-in">
              <WeatherCard
                title="Agora"
                location={weatherData.location}
                temperature={weatherData.temperature}
                condition={weatherData.condition}
                humidity={weatherData.humidity}
                windSpeed={weatherData.windSpeed}
                pressure={weatherData.pressure}
                visibility={weatherData.visibility}
                className="shadow-glow"
              />
            </div>

            {/* Detailed Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="bg-card/80 backdrop-blur-sm hover:shadow-weather transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Thermometer className="h-6 w-6 text-red-500" />
                    <span>Sensação Térmica</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {weatherData.feelsLike}°C
                  </div>
                  <p className="text-muted-foreground">
                    Temperatura percebida pelo corpo humano
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm hover:shadow-weather transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Sun className="h-6 w-6 text-yellow-500" />
                    <span>Índice UV</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-yellow-600 mb-2">
                    {weatherData.uvIndex}
                  </div>
                  <p className="text-muted-foreground">
                    {weatherData.uvIndex <= 2 ? 'Baixo' : 
                     weatherData.uvIndex <= 5 ? 'Moderado' :
                     weatherData.uvIndex <= 7 ? 'Alto' : 'Muito Alto'} - Use protetor solar
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm hover:shadow-weather transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Eye className="h-6 w-6 text-purple-500" />
                    <span>Ponto de Orvalho</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {Math.round(weatherData.dewPoint || (weatherData.temperature - 8))}°C
                  </div>
                  <p className="text-muted-foreground">
                    Temperatura de condensação do vapor
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm hover:shadow-weather transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Wind className="h-6 w-6 text-green-500" />
                    <span>Rajadas</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {weatherData.windGust || Math.round(weatherData.windSpeed * 1.5)} km/h
                  </div>
                  <p className="text-muted-foreground">
                    Velocidade máxima do vento
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm hover:shadow-weather transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Droplets className="h-6 w-6 text-blue-500" />
                    <span>Nebulosidade</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {weatherData.cloudiness || 0}%
                  </div>
                  <p className="text-muted-foreground">
                    Cobertura de nuvens
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm hover:shadow-weather transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-6 w-6 text-orange-500" />
                    <span>Qualidade do Ar</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {weatherData.airQuality === 1 ? 'Excelente' :
                     weatherData.airQuality === 2 ? 'Boa' :
                     weatherData.airQuality === 3 ? 'Moderada' :
                     weatherData.airQuality === 4 ? 'Ruim' : 'Muito Ruim'}
                  </div>
                  <p className="text-muted-foreground">
                    IQA: {weatherData.airQuality || 3}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Weather Map */}
            <RealTimeWeatherMap />
          </>
        )}
      </div>
    </div>
  );
};

export default AgoraPage;