import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  pressure: number;
  visibility: number;
  icon: string;
  forecast: ForecastDay[];
}

interface ForecastDay {
  date: string;
  temperature: number;
  minTemp: number;
  maxTemp: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  icon: string;
}

interface LocationCoords {
  lat: number;
  lon: number;
}

const useWeather = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const API_KEY = 'YOUR_OPENWEATHER_API_KEY'; // Temporário - usuário deve inserir sua chave

  const getCurrentLocation = (): Promise<LocationCoords> => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocalização não é suportada pelo navegador'));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          reject(new Error('Erro ao obter localização'));
        }
      );
    });
  };

  const fetchWeatherData = async (coords: LocationCoords) => {
    try {
      // Usando dados simulados para demonstração
      // Em produção, usar: 
      // const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&units=metric&lang=pt_br`);
      
      // Dados simulados para demonstração
      const mockData: WeatherData = {
        location: 'São Paulo, SP',
        temperature: 24,
        condition: 'Parcialmente nublado',
        humidity: 65,
        windSpeed: 12,
        pressure: 1013,
        visibility: 10,
        icon: '02d',
        forecast: Array.from({ length: 15 }, (_, i) => ({
          date: new Date(Date.now() + i * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          temperature: Math.round(20 + Math.random() * 10),
          minTemp: Math.round(15 + Math.random() * 5),
          maxTemp: Math.round(25 + Math.random() * 10),
          condition: ['Ensolarado', 'Parcialmente nublado', 'Nublado', 'Chuva leve'][Math.floor(Math.random() * 4)],
          humidity: Math.round(50 + Math.random() * 30),
          windSpeed: Math.round(5 + Math.random() * 15),
          icon: ['01d', '02d', '03d', '10d'][Math.floor(Math.random() * 4)]
        }))
      };

      setWeatherData(mockData);
      setError(null);
    } catch (err) {
      setError('Erro ao carregar dados meteorológicos');
      toast({
        title: "Erro",
        description: "Não foi possível carregar os dados meteorológicos",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const initializeWeather = async () => {
    try {
      setLoading(true);
      const coords = await getCurrentLocation();
      await fetchWeatherData(coords);
    } catch (err) {
      console.error('Erro ao inicializar dados meteorológicos:', err);
      // Usar localização padrão se não conseguir obter localização
      await fetchWeatherData({ lat: -23.5505, lon: -46.6333 }); // São Paulo
    }
  };

  useEffect(() => {
    initializeWeather();
  }, []);

  return {
    weatherData,
    loading,
    error,
    refetch: initializeWeather,
  };
};

export default useWeather;