import { useState, useEffect, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  pressure: number;
  visibility: number;
  icon: string;
  feelsLike: number;
  uvIndex: number;
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
          resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Erro de geolocalização:', error);
          reject(new Error('Erro ao obter localização. Verifique se você permitiu o acesso à localização.'));
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
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

      if (error) throw error;

      setWeatherData(data);
      setError(null);
      
      toast({
        title: "Dados Atualizados",
        description: `Previsão para ${data.location}`,
      });
    } catch (err: any) {
      console.error('Erro ao buscar dados meteorológicos:', err);
      setError(err.message || 'Erro ao carregar dados meteorológicos');
      toast({
        title: "Erro",
        description: "Não foi possível carregar os dados meteorológicos. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
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
      
      // Tentar obter localização do usuário
      const coords = await getCurrentLocation();
      await fetchWeatherData({ lat: coords.lat, lon: coords.lon });
    } catch (err: any) {
      console.error('Erro ao inicializar dados meteorológicos:', err);
      
      // Fallback para São Paulo se não conseguir obter localização
      toast({
        title: "Localização não disponível",
        description: "Usando São Paulo como localização padrão. Para obter dados da sua região, permita o acesso à localização.",
        variant: "default",
      });
      
      await fetchWeatherData({ lat: -23.5505, lon: -46.6333 });
    }
  };

  useEffect(() => {
    initializeWeather();
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