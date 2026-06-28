import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import useWeather from '@/hooks/useWeather';
import SEO from '@/components/SEO';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  ComposedChart,
} from 'recharts';
import { 
  Calendar, 
  TrendingUp,
  TrendingDown,
  Droplets,
  Wind,
  Sun,
  Cloud,
  CloudRain,
  Eye
} from 'lucide-react';

import cloudImage from '@/assets/cloud.webp';

const QuinzeDiasPage = () => {
  const { weatherData, loading, error } = useWeather();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-sky flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto"></div>
          <p className="text-lg font-semibold text-foreground">Carregando previsão de 15 dias...</p>
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

  // Gerar dados para os próximos 15 dias
  const fifteenDaysForecast = Array.from({ length: 15 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    
    const baseTemp = weatherData ? weatherData.temperature : 23;
    const tempVariation = Math.sin(i * 0.3) * 3 + (Math.random() - 0.5) * 4;
    
    const conditions = ['Ensolarado', 'Parcialmente nublado', 'Nublado', 'Chuva leve', 'Chuva'];
    const condition = conditions[Math.floor(Math.random() * conditions.length)];
    
    const getIcon = (condition: string) => {
      if (condition.includes('Chuva')) return <CloudRain className="h-6 w-6 text-blue-500" />;
      if (condition.includes('Nublado')) return <Cloud className="h-6 w-6 text-gray-500" />;
      return <Sun className="h-6 w-6 text-yellow-500" />;
    };

    return {
      date,
      dayName: date.toLocaleDateString('pt-BR', { weekday: 'short' }),
      dayNumber: date.getDate(),
      month: date.toLocaleDateString('pt-BR', { month: 'short' }),
      maxTemp: Math.round(baseTemp + tempVariation + 3),
      minTemp: Math.round(baseTemp + tempVariation - 3),
      condition,
      humidity: Math.round(50 + Math.random() * 30),
      windSpeed: Math.round(5 + Math.random() * 15),
      rainChance: Math.round(Math.random() * 60),
      icon: getIcon(condition)
    };
  });

  // Calcular estatísticas
  const maxTempOverall = Math.max(...fifteenDaysForecast.map(day => day.maxTemp));
  const minTempOverall = Math.min(...fifteenDaysForecast.map(day => day.minTemp));
  const avgHumidity = Math.round(fifteenDaysForecast.reduce((sum, day) => sum + day.humidity, 0) / 15);
  const rainyDays = fifteenDaysForecast.filter(day => day.rainChance > 50).length;

  return (
    <div className="min-h-screen bg-gradient-sky py-8 relative overflow-hidden">
      <SEO title="Previsão do Tempo para os Próximos 15 Dias | Clima Tempo" description="Previsão estendida do tempo para os próximos 15 dias: temperaturas, chuvas e tendência climática." path="/15-dias" />
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
            Previsão de 15 Dias
          </h1>
          <p className="text-lg text-muted-foreground animate-fade-in">
            Previsão estendida para as próximas duas semanas
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-card/80 backdrop-blur-sm hover:shadow-weather transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2 text-lg">
                <TrendingUp className="h-5 w-5 text-red-500" />
                <span>Maior Temp.</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">
                {maxTempOverall}°C
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm hover:shadow-weather transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2 text-lg">
                <TrendingDown className="h-5 w-5 text-blue-500" />
                <span>Menor Temp.</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">
                {minTempOverall}°C
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm hover:shadow-weather transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2 text-lg">
                <Droplets className="h-5 w-5 text-blue-500" />
                <span>Umidade Média</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">
                {avgHumidity}%
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm hover:shadow-weather transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2 text-lg">
                <CloudRain className="h-5 w-5 text-gray-500" />
                <span>Dias de Chuva</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-600">
                {rainyDays} dias
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 15-Day Forecast */}
        <Card className="bg-card/80 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-6 w-6 text-primary" />
              <span>Previsão Detalhada</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {fifteenDaysForecast.map((day, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 bg-accent/20 rounded-lg hover:bg-accent/30 transition-colors duration-200"
                >
                  {/* Date */}
                  <div className="flex items-center space-x-4 min-w-[120px]">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground uppercase">
                        {day.dayName}
                      </div>
                      <div className="font-semibold text-foreground">
                        {day.dayNumber}/{day.month}
                      </div>
                    </div>
                  </div>

                  {/* Weather Icon & Condition */}
                  <div className="flex items-center space-x-3 flex-1 min-w-[180px]">
                    <div className="animate-bounce-gentle">
                      {day.icon}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {day.condition}
                    </span>
                  </div>

                  {/* Temperature */}
                  <div className="flex items-center space-x-4 min-w-[120px]">
                    <div className="text-right">
                      <div className="font-bold text-lg text-primary">
                        {day.maxTemp}°
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {day.minTemp}°
                      </div>
                    </div>
                  </div>

                  {/* Additional Info - Hidden on mobile */}
                  <div className="hidden md:flex items-center space-x-6 min-w-[200px]">
                    <div className="flex items-center space-x-1">
                      <Droplets className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">{day.rainChance}%</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Wind className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{day.windSpeed}km/h</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4 text-purple-500" />
                      <span className="text-sm">{day.humidity}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Temperature Trend */}
        <Card className="bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              <span>Tendência de Temperatura</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72 w-full mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={fifteenDaysForecast.map(d => ({
                  name: `${d.dayNumber}/${d.month}`,
                  Máx: d.maxTemp,
                  Mín: d.minTemp,
                  Chuva: d.rainChance,
                }))} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="maxGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.6} />
                      <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 8 }} />
                  <Legend />
                  <Area type="monotone" dataKey="Máx" stroke="hsl(var(--primary))" fill="url(#maxGrad)" strokeWidth={2} />
                  <Line type="monotone" dataKey="Mín" stroke="#3b82f6" strokeWidth={2} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="Chuva" stroke="#06b6d4" strokeWidth={2} strokeDasharray="4 4" dot={false} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Primeira Semana</h4>
                <p className="text-sm text-muted-foreground">
                  Temperaturas estáveis com variação de 3°C
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Segunda Semana</h4>
                <p className="text-sm text-muted-foreground">
                  Leve aquecimento previsto no meio da semana
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Tendência Geral</h4>
                <p className="text-sm text-muted-foreground">
                  Tempo estável com poucas variações bruscas
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuinzeDiasPage;