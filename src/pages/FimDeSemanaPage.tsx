import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import useWeather from '@/hooks/useWeather';
import SEO from '@/components/SEO';
import { 
  Calendar, 
  Sun, 
  Cloud,
  CloudRain,
  Thermometer,
  Droplets,
  Wind,
  MapPin,
  Umbrella,
  Footprints,
  Flame,
  Home
} from 'lucide-react';

import cloudImage from '@/assets/cloud.webp';

const FimDeSemanaPage = () => {
  const { weatherData, loading, error } = useWeather();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-sky flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto"></div>
          <p className="text-lg font-semibold text-foreground">Carregando previsão do fim de semana...</p>
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

  // Calcular próximo sábado e domingo
  const today = new Date();
  const dayOfWeek = today.getDay();
  const daysUntilSaturday = (6 - dayOfWeek) % 7 || 7;
  
  const saturday = new Date(today);
  saturday.setDate(today.getDate() + daysUntilSaturday);
  
  const sunday = new Date(saturday);
  sunday.setDate(saturday.getDate() + 1);

  const weekendDays = [
    {
      date: saturday,
      name: 'Sábado',
      temp: weatherData ? weatherData.temperature + Math.round((Math.random() - 0.5) * 4) : 24,
      condition: 'Ensolarado',
      humidity: 55,
      windSpeed: 8,
      rainChance: 10,
      icon: <Sun className="h-12 w-12 text-yellow-500" />
    },
    {
      date: sunday,
      name: 'Domingo', 
      temp: weatherData ? weatherData.temperature + Math.round((Math.random() - 0.5) * 4) : 22,
      condition: 'Parcialmente nublado',
      humidity: 65,
      windSpeed: 12,
      rainChance: 30,
      icon: <Cloud className="h-12 w-12 text-gray-500" />
    }
  ];

  const activities = [
    {
      name: 'Praia/Piscina',
      saturday: 'Ideal',
      sunday: 'Bom',
      icon: <Umbrella className="h-5 w-5 text-sky-600" />,
      bg: 'bg-sky-100'
    },
    {
      name: 'Caminhada/Corrida',
      saturday: 'Excelente',
      sunday: 'Bom', 
      icon: <Footprints className="h-5 w-5 text-emerald-600" />,
      bg: 'bg-emerald-100'
    },
    {
      name: 'Churrasco',
      saturday: 'Perfeito',
      sunday: 'Moderado',
      icon: <Flame className="h-5 w-5 text-orange-600" />,
      bg: 'bg-orange-100'
    },
    {
      name: 'Atividades Internas',
      saturday: 'Opcional',
      sunday: 'Recomendado',
      icon: <Home className="h-5 w-5 text-slate-600" />,
      bg: 'bg-slate-100'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-sky py-8 relative overflow-hidden">
      <SEO title="Previsão do Tempo para o Fim de Semana | Clima Tempo" description="Planeje seu fim de semana com a previsão do tempo para sábado e domingo: temperatura, chuva e sol." path="/fim-de-semana" />
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
            Fim de Semana
          </h1>
          <div className="flex items-center justify-center space-x-2 text-muted-foreground animate-fade-in">
            <Calendar className="h-5 w-5" />
            <p className="text-lg">
              {saturday.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' })} e {' '}
              {sunday.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' })}
            </p>
          </div>
        </div>

        {/* Weekend Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {weekendDays.map((day, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm hover:shadow-weather transition-all duration-300 hover:scale-[1.02]">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">{day.name}</h2>
                    <p className="text-muted-foreground">
                      {day.date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' })}
                    </p>
                  </div>
                  <div className="animate-bounce-gentle">
                    {day.icon}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Temperature */}
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">
                      {day.temp}°C
                    </div>
                    <p className="text-lg text-muted-foreground">{day.condition}</p>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-accent/30 rounded-lg p-3 text-center">
                      <Droplets className="h-5 w-5 text-blue-500 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Umidade</p>
                      <p className="font-semibold">{day.humidity}%</p>
                    </div>
                    <div className="bg-accent/30 rounded-lg p-3 text-center">
                      <Wind className="h-5 w-5 text-green-500 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Vento</p>
                      <p className="font-semibold">{day.windSpeed} km/h</p>
                    </div>
                    <div className="bg-accent/30 rounded-lg p-3 text-center">
                      <CloudRain className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Chuva</p>
                      <p className="font-semibold">{day.rainChance}%</p>
                    </div>
                    <div className="bg-accent/30 rounded-lg p-3 text-center">
                      <Thermometer className="h-5 w-5 text-red-500 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Sensação</p>
                      <p className="font-semibold">{day.temp + 2}°C</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Activity Recommendations */}
        <Card className="bg-card/80 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="h-6 w-6 text-primary" />
              <span>Recomendações de Atividades</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4">Atividade</th>
                    <th className="text-center py-3 px-4">Sábado</th>
                    <th className="text-center py-3 px-4">Domingo</th>
                  </tr>
                </thead>
                <tbody>
                  {activities.map((activity, index) => (
                    <tr key={index} className="border-b border-border/50 hover:bg-accent/20 transition-colors">
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl">{activity.icon}</span>
                          <span className="font-medium">{activity.name}</span>
                        </div>
                      </td>
                      <td className="text-center py-3 px-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          activity.saturday === 'Ideal' || activity.saturday === 'Excelente' || activity.saturday === 'Perfeito' 
                            ? 'bg-green-100 text-green-800' 
                            : activity.saturday === 'Bom' 
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {activity.saturday}
                        </span>
                      </td>
                      <td className="text-center py-3 px-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          activity.sunday === 'Ideal' || activity.sunday === 'Excelente' || activity.sunday === 'Perfeito' 
                            ? 'bg-green-100 text-green-800' 
                            : activity.sunday === 'Bom' 
                            ? 'bg-yellow-100 text-yellow-800'
                            : activity.sunday === 'Moderado' 
                            ? 'bg-orange-100 text-orange-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {activity.sunday}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Weekend Summary */}
        <Card className="bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Sun className="h-6 w-6 text-yellow-500" />
              <span>Resumo do Fim de Semana</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Sun className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Tempo Estável</h3>
                <p className="text-sm text-muted-foreground">
                  Condições favoráveis para atividades ao ar livre
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Droplets className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Baixa Chance de Chuva</h3>
                <p className="text-sm text-muted-foreground">
                  Apenas 20% de probabilidade média
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Thermometer className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Temperaturas Agradáveis</h3>
                <p className="text-sm text-muted-foreground">
                  Entre 22°C e 26°C - ideal para passeios
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FimDeSemanaPage;