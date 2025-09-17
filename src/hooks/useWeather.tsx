import { useState, useEffect, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  windDirection?: number;
  windGust?: number | null;
  pressure: number;
  visibility: number;
  icon: string;
  feelsLike: number;
  uvIndex: number;
  airQuality?: number;
  cloudiness?: number;
  sunrise?: number;
  sunset?: number;
  dewPoint?: number;
  coords: LocationCoords;
  forecast: ForecastDay[];
}

interface ForecastDay {
  date: string;
  time: string;
  temperature: number;
  minTemp: number;
  maxTemp: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  icon: string;
  pop: number; // probabilidade de precipitação
}

interface LocationCoords {
  lat: number;
  lon: number;
}

const useWeather = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchCity, setSearchCity] = useState<string>('');
  const { toast } = useToast();

  const getCurrentLocation = (): Promise<LocationCoords> => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocalização não é suportada pelo navegador'));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          };
          
          // Salvar nova localização no localStorage
          localStorage.setItem('weather-location', JSON.stringify(coords));
          
          resolve(coords);
        },
        (error) => {
          console.error('Erro de geolocalização:', error);
          let message = 'Erro ao obter localização.';
          
          switch (error.code) {
            case error.PERMISSION_DENIED:
              message = 'Acesso à localização negado. Permita o acesso para ver o clima da sua região.';
              break;
            case error.POSITION_UNAVAILABLE:
              message = 'Localização não disponível no momento.';
              break;
            case error.TIMEOUT:
              message = 'Tempo limite excedido ao obter localização.';
              break;
          }
          
          reject(new Error(message));
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 300000 // 5 minutos
        }
      );
    });
  };

  const fetchWeatherData = async (params: { lat?: number; lon?: number; city?: string }) => {
    try {
      const { data, error } = await supabase.functions.invoke('weather', {
        body: params
      });

      if (error) {
        throw error;
      }

      setWeatherData(data);
      setError(null);
      
      toast({
        title: "Dados Atualizados ✅",
        description: `Previsão atualizada para ${data.location}`,
      });
    } catch (err: any) {
      console.error('Erro ao buscar dados meteorológicos:', err);
      // Fallback para dados simulados quando a API não estiver disponível ou Supabase não estiver configurado
      try {
        const fallback = generateMockWeatherData(params);
        setWeatherData(fallback);
        setError(null);
        toast({
          title: "Dados temporários exibidos",
          description: "Mostrando clima simulado até a API estar disponível.",
        });
      } catch (e) {
        setError(err?.message || 'Erro ao carregar dados do clima');
        toast({
          title: "Erro ao carregar dados ❌",
          description: "Verifique sua conexão e tente novamente.",
          variant: "destructive",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const generateMockWeatherData = (params: { lat?: number; lon?: number; city?: string }): WeatherData => {
    const cities = {
      'são paulo': 'São Paulo, BR',
      'rio de janeiro': 'Rio de Janeiro, BR', 
      'brasília': 'Brasília, BR',
      'salvador': 'Salvador, BR',
      'fortaleza': 'Fortaleza, BR',
      'belo horizonte': 'Belo Horizonte, BR',
      'manaus': 'Manaus, BR',
      'curitiba': 'Curitiba, BR',
      'recife': 'Recife, BR',
      'porto alegre': 'Porto Alegre, BR'
    };
    
    const cityName = params.city ? 
      cities[params.city.toLowerCase() as keyof typeof cities] || `${params.city}, BR` : 
      'São Paulo, BR';

    return {
      location: cityName,
      temperature: Math.round(18 + Math.random() * 15), // 18-33°C
      condition: ['Ensolarado', 'Parcialmente nublado', 'Nublado', 'Chuva leve'][Math.floor(Math.random() * 4)],
      humidity: Math.round(45 + Math.random() * 40), // 45-85%
      windSpeed: Math.round(5 + Math.random() * 20), // 5-25 km/h
      pressure: Math.round(1005 + Math.random() * 20), // 1005-1025 hPa
      visibility: Math.round(8 + Math.random() * 7), // 8-15 km
      icon: ['01d', '02d', '03d', '10d'][Math.floor(Math.random() * 4)],
      feelsLike: Math.round(16 + Math.random() * 18), // 16-34°C
      uvIndex: Math.round(1 + Math.random() * 10), // 1-11
      coords: {
        lat: params.lat || -23.5505,
        lon: params.lon || -46.6333
      },
      forecast: Array.from({ length: 40 }, (_, i) => ({
        date: new Date(Date.now() + i * 3 * 60 * 60 * 1000).toISOString().split('T')[0], // every 3 hours
        time: new Date(Date.now() + i * 3 * 60 * 60 * 1000).toISOString().split('T')[1].slice(0, 5),
        temperature: Math.round(16 + Math.random() * 18),
        minTemp: Math.round(12 + Math.random() * 8),
        maxTemp: Math.round(25 + Math.random() * 12),
        condition: ['Ensolarado', 'Parcialmente nublado', 'Nublado', 'Chuva leve', 'Tempestade'][Math.floor(Math.random() * 5)],
        humidity: Math.round(40 + Math.random() * 50),
        windSpeed: Math.round(3 + Math.random() * 25),
        icon: ['01d', '02d', '03d', '10d', '11d'][Math.floor(Math.random() * 5)],
        pop: Math.round(Math.random() * 100) // 0-100% chance of precipitation
      }))
    };
  };

  const searchWeatherByCity = useCallback(async (city: string) => {
    if (!city.trim()) return;
    
    setLoading(true);
    setSearchCity(city);
    await fetchWeatherData({ city: city.trim() });
  }, []);

  const initializeWeather = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Verificar se há localização salva no localStorage
      const savedLocation = localStorage.getItem('weather-location');
      if (savedLocation) {
        const { lat, lon } = JSON.parse(savedLocation);
        await fetchWeatherData({ lat, lon });
        return;
      }

      // Tentar obter localização do usuário
      const coords = await getCurrentLocation();
      
      // Salvar localização no localStorage
      localStorage.setItem('weather-location', JSON.stringify(coords));
      
      await fetchWeatherData({ lat: coords.lat, lon: coords.lon });
      
      toast({
        title: "📍 Localização detectada",
        description: "Mostrando o clima da sua região atual",
      });
      
    } catch (err: any) {
      console.error('Erro ao inicializar dados meteorológicos:', err);
      
      // Fallback para São Paulo se não conseguir obter localização
      toast({
        title: "🌍 Localização padrão",
        description: "Para ver o clima da sua região, permita o acesso à localização e clique em 'Usar Minha Localização'",
        variant: "default",
      });
      
      await fetchWeatherData({ lat: -23.5505, lon: -46.6333 });
    }
  };

  useEffect(() => {
    initializeWeather();
    
    // Auto-refresh a cada 10 minutos para dados em tempo real
    const interval = setInterval(() => {
      if (weatherData) {
        fetchWeatherData({ 
          lat: weatherData.coords.lat, 
          lon: weatherData.coords.lon 
        });
      }
    }, 10 * 60 * 1000); // 10 minutos
    
    return () => clearInterval(interval);
  }, []);

  return {
    weatherData,
    loading,
    error,
    searchCity,
    refetch: initializeWeather,
    searchWeatherByCity,
  };
};

export default useWeather;