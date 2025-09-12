import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Thermometer, 
  Droplets, 
  Wind, 
  Eye, 
  Gauge, 
  Sun, 
  Moon, 
  Sunrise, 
  Sunset,
  Umbrella,
  Zap,
  Snowflake,
  Flame,
  Navigation,
  BarChart3,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  RefreshCw
} from 'lucide-react';
import useWeather from '@/hooks/useWeather';

const WeatherDashboard = () => {
  const { weatherData, loading, error, refetch } = useWeather();

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !weatherData) {
    return (
      <div className="text-center p-8">
        <p className="text-destructive mb-4">{error || 'Erro ao carregar dados'}</p>
        <button 
          onClick={refetch}
          className="flex items-center space-x-2 mx-auto px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
        >
          <RefreshCw className="h-4 w-4" />
          <span>Tentar Novamente</span>
        </button>
      </div>
    );
  }

  const formatTime = (timestamp?: number) => {
    if (!timestamp) return '--:--';
    return new Date(timestamp * 1000).toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getUVLevel = (index: number) => {
    if (index <= 2) return { level: 'Baixo', color: 'bg-green-500', textColor: 'text-green-600' };
    if (index <= 5) return { level: 'Moderado', color: 'bg-yellow-500', textColor: 'text-yellow-600' };
    if (index <= 7) return { level: 'Alto', color: 'bg-orange-500', textColor: 'text-orange-600' };
    if (index <= 10) return { level: 'Muito Alto', color: 'bg-red-500', textColor: 'text-red-600' };
    return { level: 'Extremo', color: 'bg-purple-500', textColor: 'text-purple-600' };
  };

  const getAirQualityText = (aqi?: number) => {
    if (!aqi) return 'Desconhecida';
    switch(aqi) {
      case 1: return 'Excelente';
      case 2: return 'Boa';
      case 3: return 'Moderada';
      case 4: return 'Ruim';
      case 5: return 'Muito Ruim';
      default: return 'Desconhecida';
    }
  };

  const getFireRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case 'baixo': return 'text-green-600 bg-green-100';
      case 'moderado': return 'text-yellow-600 bg-yellow-100';
      case 'alto': return 'text-orange-600 bg-orange-100';
      case 'crítico': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const uvInfo = getUVLevel(weatherData.uvIndex);

  return (
    <div className="space-y-6">
      {/* Current Conditions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Temperature */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-weather transition-all">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Temperatura</p>
                <p className="text-2xl font-bold text-primary">{weatherData.temperature}°C</p>
                <p className="text-xs text-muted-foreground">Sensação {weatherData.feelsLike}°C</p>
              </div>
              <Thermometer className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        {/* Humidity */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-weather transition-all">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Umidade</p>
                <p className="text-2xl font-bold text-primary">{weatherData.humidity}%</p>
                <Progress value={weatherData.humidity} className="mt-2" />
              </div>
              <Droplets className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        {/* Wind */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-weather transition-all">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Vento</p>
                <p className="text-2xl font-bold text-primary">{weatherData.windSpeed} km/h</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <Navigation className="h-3 w-3" />
                  {weatherData.windDirection ? `${weatherData.windDirection}°` : 'Variável'}
                </p>
              </div>
              <Wind className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        {/* Pressure */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-weather transition-all">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pressão</p>
                <p className="text-2xl font-bold text-primary">{weatherData.pressure}</p>
                <p className="text-xs text-muted-foreground">hPa</p>
              </div>
              <Gauge className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* UV Index & Air Quality */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sun className="h-5 w-5 text-yellow-500" />
              Índice UV e Qualidade do Ar
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Índice UV</span>
                <Badge variant="outline" className={uvInfo.textColor}>
                  {weatherData.uvIndex} - {uvInfo.level}
                </Badge>
              </div>
              <Progress value={(weatherData.uvIndex / 11) * 100} className="h-2" />
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Qualidade do Ar</span>
              <Badge variant="outline" className="text-green-600">
                {getAirQualityText(weatherData.airQuality)}
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Visibilidade</span>
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">{weatherData.visibility} km</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Risk Assessment */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              Avaliação de Riscos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-yellow-500" />
                <span className="text-sm text-muted-foreground">Probabilidade de Tempestade</span>
              </div>
              <span className="text-sm font-medium">
                {weatherData.forecast[0]?.pop || 15}%
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Flame className="h-4 w-4 text-orange-500" />
                <span className="text-sm text-muted-foreground">Risco de Incêndio</span>
              </div>
              <Badge variant="outline" className={getFireRiskColor('Baixo')}>
                Baixo
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Umbrella className="h-4 w-4 text-blue-500" />
                <span className="text-sm text-muted-foreground">Nebulosidade</span>
              </div>
              <span className="text-sm font-medium">{weatherData.cloudiness || 0}%</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Astronomical Data */}
      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sunrise className="h-5 w-5 text-orange-500" />
            Dados Astronômicos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Sunrise className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Nascer do Sol</p>
              <p className="text-lg font-semibold">{formatTime(weatherData.sunrise)}</p>
            </div>
            <div className="text-center">
              <Sunset className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Pôr do Sol</p>
              <p className="text-lg font-semibold">{formatTime(weatherData.sunset)}</p>
            </div>
            <div className="text-center">
              <Droplets className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Ponto de Orvalho</p>
              <p className="text-lg font-semibold">
                {Math.round(weatherData.dewPoint || (weatherData.temperature - 8))}°C
              </p>
            </div>
            <div className="text-center">
              <BarChart3 className="h-8 w-8 text-gray-500 mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Cobertura de Nuvens</p>
              <p className="text-lg font-semibold">{weatherData.cloudiness || 0}%</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeatherDashboard;