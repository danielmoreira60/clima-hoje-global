import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface EnvironmentalRisk {
  id: string;
  risk_type: 'fire' | 'solar' | 'hurricane' | 'flood' | 'deforestation' | 'earthquake';
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'extreme';
  latitude?: number;
  longitude?: number;
  location_name?: string;
  distance_km?: number;
  detected_at: string;
  metadata?: any;
  source_api: string;
  external_id?: string;
}

export interface EnvironmentalDataResponse {
  success: boolean;
  data: EnvironmentalRisk[];
  timestamp: string;
  error?: string;
}

const useEnvironmentalData = () => {
  const [risks, setRisks] = useState<EnvironmentalRisk[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);

  const fetchEnvironmentalData = useCallback(async (
    dataType: string = 'all',
    latitude?: number,
    longitude?: number,
    radius: number = 100
  ) => {
    setLoading(true);
    setError(null);

    try {
      console.log('Fetching environmental data:', { dataType, latitude, longitude, radius });

      const { data, error: functionError } = await supabase.functions.invoke('environmental-data', {
        body: {
          dataType,
          lat: latitude,
          lon: longitude,
          radius
        }
      });

      if (functionError) {
        throw new Error(`Function error: ${functionError.message}`);
      }

      const response = data as EnvironmentalDataResponse;

      if (!response.success) {
        throw new Error(response.error || 'Failed to fetch environmental data');
      }

      setRisks(response.data || []);
      setLastUpdate(new Date());
      console.log('Environmental data loaded:', response.data?.length, 'risks found');

    } catch (err) {
      console.error('Error fetching environmental data:', err);
      setError(err instanceof Error ? err.message : 'An error occurred while fetching environmental data');
      
      // Fallback to local database query
      try {
        const { data: localData, error: localError } = await supabase
          .from('environmental_risks')
          .select('*')
          .eq('is_active', true)
          .order('detected_at', { ascending: false })
          .limit(50);

        if (localError) {
          console.error('Local database error:', localError);
        } else {
          // Map database format to our interface
          const mappedData = (localData || []).map((item: any) => ({
            id: item.id,
            risk_type: item.risk_type as 'fire' | 'solar' | 'hurricane' | 'flood' | 'deforestation' | 'earthquake',
            title: item.title,
            description: item.description,
            severity: item.severity as 'low' | 'medium' | 'high' | 'extreme',
            latitude: item.latitude,
            longitude: item.longitude,
            location_name: item.location_name,
            detected_at: item.detected_at,
            metadata: item.metadata,
            source_api: item.source_api,
            external_id: item.external_id
          }));
          setRisks(mappedData);
          setLastUpdate(new Date());
        }
      } catch (localErr) {
        console.error('Local fallback error:', localErr);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchRisksByType = useCallback(async (
    riskType: string,
    latitude?: number,
    longitude?: number,
    radius: number = 100
  ) => {
    return fetchEnvironmentalData(riskType, latitude, longitude, radius);
  }, [fetchEnvironmentalData]);

  const getNearbyRisks = useCallback((
    userLat?: number,
    userLon?: number,
    maxDistance: number = 100
  ): EnvironmentalRisk[] => {
    if (!userLat || !userLon) {
      return risks.filter(risk => risk.distance_km !== undefined);
    }

    return risks
      .filter(risk => {
        if (!risk.latitude || !risk.longitude) return false;
        
        // Calculate distance using Haversine formula
        const R = 6371; // Earth's radius in km
        const dLat = (risk.latitude - userLat) * Math.PI / 180;
        const dLon = (risk.longitude - userLon) * Math.PI / 180;
        const a = 
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(userLat * Math.PI / 180) * Math.cos(risk.latitude * Math.PI / 180) * 
          Math.sin(dLon/2) * Math.sin(dLon/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        const distance = R * c;

        return distance <= maxDistance;
      })
      .map(risk => ({
        ...risk,
        distance_km: calculateDistance(userLat, userLon, risk.latitude!, risk.longitude!)
      }))
      .sort((a, b) => (a.distance_km || 0) - (b.distance_km || 0));
  }, [risks]);

  const getRisksBySeverity = useCallback((severity: string[]): EnvironmentalRisk[] => {
    return risks.filter(risk => severity.includes(risk.severity));
  }, [risks]);

  const getRisksByType = useCallback((riskTypes: string[]): EnvironmentalRisk[] => {
    return risks.filter(risk => riskTypes.includes(risk.risk_type));
  }, [risks]);

  const refreshData = useCallback((
    latitude?: number,
    longitude?: number,
    radius: number = 100
  ) => {
    return fetchEnvironmentalData('all', latitude, longitude, radius);
  }, [fetchEnvironmentalData]);

  // Auto-refresh every 10 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            fetchEnvironmentalData('all', position.coords.latitude, position.coords.longitude, 100);
          },
          () => {
            // Fallback to default location (Brazil center)
            fetchEnvironmentalData('all', -15.7801, -47.9292, 100);
          }
        );
      } else {
        fetchEnvironmentalData('all', -15.7801, -47.9292, 100);
      }
    }, 10 * 60 * 1000); // 10 minutes

    return () => clearInterval(interval);
  }, [fetchEnvironmentalData]);

  // Initial load
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchEnvironmentalData('all', position.coords.latitude, position.coords.longitude, 100);
        },
        () => {
          // Fallback to default location
          fetchEnvironmentalData('all', -15.7801, -47.9292, 100);
        }
      );
    } else {
      fetchEnvironmentalData('all', -15.7801, -47.9292, 100);
    }
  }, [fetchEnvironmentalData]);

  return {
    risks,
    loading,
    error,
    lastUpdate,
    fetchEnvironmentalData,
    fetchRisksByType,
    getNearbyRisks,
    getRisksBySeverity,
    getRisksByType,
    refreshData
  };
};

// Utility function to calculate distance between two coordinates
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return Math.round(R * c * 100) / 100; // Round to 2 decimal places
}

export default useEnvironmentalData;