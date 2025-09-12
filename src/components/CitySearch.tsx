import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Search, MapPin, Loader2 } from 'lucide-react';

interface CitySearchProps {
  onSearch: (city: string) => void;
  currentLocation?: string;
  isLoading?: boolean;
}

const CitySearch = ({ onSearch, currentLocation, isLoading = false }: CitySearchProps) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
      setCity('');
    }
  };

  const popularCities = [
    'São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador', 
    'Fortaleza', 'Belo Horizonte', 'Manaus', 'Curitiba',
    'Recife', 'Goiânia', 'Belém', 'Porto Alegre'
  ];

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">
              {currentLocation ? `Localização atual: ${currentLocation}` : 'Busque por qualquer cidade'}
            </span>
          </div>
          
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Digite o nome da cidade..."
              className="flex-1"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              disabled={!city.trim() || isLoading}
              className="px-6"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Search className="h-4 w-4" />
              )}
            </Button>
          </form>

          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Cidades populares:</p>
            <div className="flex flex-wrap gap-2">
              {popularCities.map((popularCity) => (
                <Button
                  key={popularCity}
                  variant="outline"
                  size="sm"
                  onClick={() => onSearch(popularCity)}
                  disabled={isLoading}
                  className="text-xs"
                >
                  {popularCity}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CitySearch;