import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import WeatherCard from '@/components/WeatherCard';
import useWeather from '@/hooks/useWeather';
import { 
  MapPin, 
  TrendingUp, 
  Droplets, 
  Thermometer,
  Wind,
  Sun,
  Eye,
  Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { weatherData, loading, error } = useWeather();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-sky flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto"></div>
          <p className="text-lg font-semibold text-foreground">Carregando dados meteorológicos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-sky flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-lg font-semibold text-destructive">{error}</p>
          <Button onClick={() => window.location.reload()}>Tentar novamente</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-sky">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            <span className="bg-gradient-sky bg-clip-text text-transparent">
              Clima Hoje
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
            Previsão do tempo precisa e atualizada para sua região
          </p>
          
          {weatherData && (
            <div className="max-w-2xl mx-auto animate-fade-in">
              <WeatherCard
                title="Condições Atuais"
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
          )}
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Acesso Rápido
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/agora">
              <Card className="hover:shadow-weather hover:scale-105 transition-all duration-300 bg-card/80 backdrop-blur-sm cursor-pointer">
                <CardHeader className="text-center">
                  <Sun className="h-12 w-12 mx-auto text-yellow-500 animate-pulse-glow" />
                  <CardTitle className="text-lg">Agora</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Condições meteorológicas atuais em tempo real
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/hoje">
              <Card className="hover:shadow-weather hover:scale-105 transition-all duration-300 bg-card/80 backdrop-blur-sm cursor-pointer">
                <CardHeader className="text-center">
                  <Calendar className="h-12 w-12 mx-auto text-blue-500 animate-bounce-gentle" />
                  <CardTitle className="text-lg">Hoje</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Previsão detalhada para o dia de hoje
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/amanha">
              <Card className="hover:shadow-weather hover:scale-105 transition-all duration-300 bg-card/80 backdrop-blur-sm cursor-pointer">
                <CardHeader className="text-center">
                  <TrendingUp className="h-12 w-12 mx-auto text-green-500 animate-float" />
                  <CardTitle className="text-lg">Amanhã</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Planeje seu dia com a previsão de amanhã
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/15-dias">
              <Card className="hover:shadow-weather hover:scale-105 transition-all duration-300 bg-card/80 backdrop-blur-sm cursor-pointer">
                <CardHeader className="text-center">
                  <MapPin className="h-12 w-12 mx-auto text-purple-500 animate-pulse" />
                  <CardTitle className="text-lg">15 Dias</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Previsão estendida para as próximas duas semanas
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Information */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Informações Meteorológicas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Thermometer className="h-6 w-6 text-red-500" />
                  <span>Temperatura</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Acompanhe as variações de temperatura ao longo do dia com gráficos detalhados e tendências.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Droplets className="h-6 w-6 text-blue-500" />
                  <span>Precipitação</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Informações precisas sobre chuva, neve e outros tipos de precipitação com mapas em tempo real.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Wind className="h-6 w-6 text-green-500" />
                  <span>Vento</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Velocidade e direção do vento com alertas para condições extremas e mapas de rajadas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;