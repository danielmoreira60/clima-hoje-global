import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Thermometer, 
  Droplets, 
  Wind, 
  Eye, 
  Gauge,
  Sun,
  Cloud,
  CloudRain,
  Snowflake
} from 'lucide-react';

interface WeatherCardProps {
  title: string;
  location?: string;
  temperature?: number;
  condition?: string;
  humidity?: number;
  windSpeed?: number;
  pressure?: number;
  visibility?: number;
  icon?: string;
  className?: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  title,
  location,
  temperature,
  condition,
  humidity,
  windSpeed,
  pressure,
  visibility,
  icon,
  className = ""
}) => {
  const getWeatherIcon = (condition: string = '', iconCode?: string) => {
    const conditionLower = condition.toLowerCase();
    
    if (conditionLower.includes('rain') || conditionLower.includes('chuva')) {
      return <CloudRain className="h-12 w-12 text-primary" />;
    }
    if (conditionLower.includes('cloud') || conditionLower.includes('nuvem')) {
      return <Cloud className="h-12 w-12 text-muted-foreground" />;
    }
    if (conditionLower.includes('snow') || conditionLower.includes('neve')) {
      return <Snowflake className="h-12 w-12 text-blue-400" />;
    }
    return <Sun className="h-12 w-12 text-yellow-500" />;
  };

  return (
    <Card className={`transition-all duration-300 hover:shadow-weather hover:scale-[1.02] bg-card/50 backdrop-blur-sm border-border/50 ${className}`}>
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              {location && (
                <p className="text-sm text-muted-foreground">{location}</p>
              )}
            </div>
            {condition && (
              <div className="animate-bounce-gentle">
                {getWeatherIcon(condition, icon)}
              </div>
            )}
          </div>

          {/* Main Temperature */}
          {temperature !== undefined && (
            <div className="text-center py-4">
              <div className="text-4xl font-bold text-primary mb-2">
                {Math.round(temperature)}°C
              </div>
              {condition && (
                <p className="text-lg text-muted-foreground capitalize">
                  {condition}
                </p>
              )}
            </div>
          )}

          {/* Weather Details Grid */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            {humidity !== undefined && (
              <div className="flex items-center space-x-2 bg-accent/30 rounded-lg p-3">
                <Droplets className="h-4 w-4 text-blue-500" />
                <div>
                  <p className="text-muted-foreground">Umidade</p>
                  <p className="font-semibold">{humidity}%</p>
                </div>
              </div>
            )}

            {windSpeed !== undefined && (
              <div className="flex items-center space-x-2 bg-accent/30 rounded-lg p-3">
                <Wind className="h-4 w-4 text-green-500" />
                <div>
                  <p className="text-muted-foreground">Vento</p>
                  <p className="font-semibold">{windSpeed} km/h</p>
                </div>
              </div>
            )}

            {pressure !== undefined && (
              <div className="flex items-center space-x-2 bg-accent/30 rounded-lg p-3">
                <Gauge className="h-4 w-4 text-purple-500" />
                <div>
                  <p className="text-muted-foreground">Pressão</p>
                  <p className="font-semibold">{pressure} hPa</p>
                </div>
              </div>
            )}

            {visibility !== undefined && (
              <div className="flex items-center space-x-2 bg-accent/30 rounded-lg p-3">
                <Eye className="h-4 w-4 text-orange-500" />
                <div>
                  <p className="text-muted-foreground">Visibilidade</p>
                  <p className="font-semibold">{visibility} km</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;