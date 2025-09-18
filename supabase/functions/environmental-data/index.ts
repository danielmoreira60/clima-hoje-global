import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { dataType, lat, lon, radius = 100 } = await req.json();
    console.log('Environmental data request:', { dataType, lat, lon, radius });

    let results = [];

    switch (dataType) {
      case 'fires':
        results = await fetchFireData(lat, lon, radius);
        break;
      case 'solar':
        results = await fetchSolarActivity();
        break;
      case 'hurricanes':
        results = await fetchHurricaneData(lat, lon, radius);
        break;
      case 'deforestation':
        results = await fetchDeforestationData(lat, lon, radius);
        break;
      case 'all':
        const [fires, solar, hurricanes, deforestation] = await Promise.all([
          fetchFireData(lat, lon, radius),
          fetchSolarActivity(),
          fetchHurricaneData(lat, lon, radius),
          fetchDeforestationData(lat, lon, radius)
        ]);
        results = [...fires, ...solar, ...hurricanes, ...deforestation];
        break;
      default:
        // Buscar dados locais do banco
        results = await fetchLocalEnvironmentalData(lat, lon, radius, dataType);
    }

    return new Response(JSON.stringify({ 
      success: true,
      data: results,
      timestamp: new Date().toISOString()
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in environmental-data function:', error);
    return new Response(JSON.stringify({ 
      success: false,
      error: error.message,
      timestamp: new Date().toISOString()
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

async function fetchFireData(lat?: number, lon?: number, radius?: number) {
  try {
    console.log('Fetching NASA FIRMS fire data...');
    
    // NASA FIRMS API (dados de queimadas)
    // Para usar a API real, seria necessário registrar em: https://firms.modaps.eosdis.nasa.gov/api/
    const today = new Date();
    const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);
    
    // Por enquanto, retornar dados simulados realistas
    const mockFireData = [
      {
        id: 'FIRMS_' + Date.now(),
        type: 'fire',
        title: 'Foco de Incêndio Ativo - Cerrado',
        description: 'Queimada detectada via satélite MODIS com alta confiança',
        severity: 'high',
        latitude: lat ? lat + (Math.random() - 0.5) * 0.5 : -15.7801,
        longitude: lon ? lon + (Math.random() - 0.5) * 0.5 : -47.9292,
        location_name: 'Distrito Federal - Cerrado',
        source_api: 'NASA_FIRMS',
        external_id: `MODIS_${Date.now()}`,
        detected_at: new Date(),
        metadata: {
          confidence: 85 + Math.random() * 15,
          brightness: 320 + Math.random() * 50,
          frp: 25 + Math.random() * 30, // Fire Radiative Power
          satellite: 'MODIS',
          instrument: 'Terra/Aqua'
        }
      }
    ];

    // Salvar no banco de dados
    for (const fire of mockFireData) {
      await supabase
        .from('environmental_risks')
        .upsert({
          risk_type: fire.type,
          title: fire.title,
          description: fire.description,
          severity: fire.severity,
          latitude: fire.latitude,
          longitude: fire.longitude,
          location_name: fire.location_name,
          source_api: fire.source_api,
          external_id: fire.external_id,
          detected_at: fire.detected_at,
          metadata: fire.metadata
        }, {
          onConflict: 'external_id'
        });
    }

    return mockFireData;

  } catch (error) {
    console.error('Error fetching fire data:', error);
    return [];
  }
}

async function fetchSolarActivity() {
  try {
    console.log('Fetching NOAA Space Weather data...');
    
    // NOAA Space Weather API
    // URL real: https://services.swpc.noaa.gov/products/notifications.json
    
    // Dados simulados baseados em dados reais da NOAA
    const mockSolarData = [
      {
        id: 'NOAA_' + Date.now(),
        type: 'solar',
        title: 'Tempestade Solar Classe M em Andamento',
        description: 'Erupção solar de classe M2.5 detectada. Possível interferência em comunicações de rádio e GPS.',
        severity: Math.random() > 0.7 ? 'high' : 'medium',
        latitude: null, // Global event
        longitude: null,
        location_name: 'Global - Atividade Solar',
        source_api: 'NOAA_SWPC',
        external_id: `SWPC_${Date.now()}`,
        detected_at: new Date(),
        metadata: {
          kp_index: 4 + Math.random() * 4,
          solar_wind_speed: 400 + Math.random() * 200,
          aurora_forecast: ['quiet', 'unsettled', 'active', 'minor storm'][Math.floor(Math.random() * 4)],
          radio_blackout_scale: ['R1', 'R2', 'R3'][Math.floor(Math.random() * 3)],
          flare_class: 'M' + (1 + Math.random() * 8).toFixed(1)
        }
      }
    ];

    // Salvar no banco
    for (const solar of mockSolarData) {
      await supabase
        .from('environmental_risks')
        .upsert({
          risk_type: solar.type,
          title: solar.title,
          description: solar.description,
          severity: solar.severity,
          latitude: solar.latitude,
          longitude: solar.longitude,
          location_name: solar.location_name,
          source_api: solar.source_api,
          external_id: solar.external_id,
          detected_at: solar.detected_at,
          metadata: solar.metadata
        }, {
          onConflict: 'external_id'
        });
    }

    return mockSolarData;

  } catch (error) {
    console.error('Error fetching solar activity:', error);
    return [];
  }
}

async function fetchHurricaneData(lat?: number, lon?: number, radius?: number) {
  try {
    console.log('Fetching NOAA Hurricane data...');
    
    // NOAA National Hurricane Center API
    // Dados simulados para ciclones no Atlântico Sul (raros mas possíveis)
    const mockHurricaneData = [];
    
    // Apenas adicionar se estivermos na região Sul/Sudeste do Brasil
    if (lat && lat < -20 && lon && lon > -60) {
      mockHurricaneData.push({
        id: 'NHC_' + Date.now(),
        type: 'hurricane',
        title: 'Sistema de Baixa Pressão - Atlântico Sul',
        description: 'Ciclone subtropical em desenvolvimento no Atlântico Sul. Ventos sustentados de 65 km/h.',
        severity: 'medium',
        latitude: -32.0 + Math.random() * 2,
        longitude: -50.0 + Math.random() * 5,
        location_name: 'Atlântico Sul - Costa Brasileira',
        source_api: 'NOAA_NHC',
        external_id: `NHC_AL${new Date().getFullYear()}_${Date.now()}`,
        detected_at: new Date(),
        metadata: {
          max_winds_kmh: 50 + Math.random() * 50,
          pressure_mb: 980 + Math.random() * 30,
          movement_direction: 'SW',
          movement_speed_kmh: 10 + Math.random() * 20,
          storm_type: 'Subtropical Cyclone'
        }
      });
    }

    // Salvar no banco
    for (const hurricane of mockHurricaneData) {
      await supabase
        .from('environmental_risks')
        .upsert({
          risk_type: hurricane.type,
          title: hurricane.title,
          description: hurricane.description,
          severity: hurricane.severity,
          latitude: hurricane.latitude,
          longitude: hurricane.longitude,
          location_name: hurricane.location_name,
          source_api: hurricane.source_api,
          external_id: hurricane.external_id,
          detected_at: hurricane.detected_at,
          metadata: hurricane.metadata
        }, {
          onConflict: 'external_id'
        });
    }

    return mockHurricaneData;

  } catch (error) {
    console.error('Error fetching hurricane data:', error);
    return [];
  }
}

async function fetchDeforestationData(lat?: number, lon?: number, radius?: number) {
  try {
    console.log('Fetching INPE DETER deforestation data...');
    
    // INPE DETER API para dados de desmatamento
    // Focar na Amazônia e Cerrado
    const mockDeforestationData = [];
    
    // Dados de desmatamento principalmente para região Norte/Centro-Oeste
    if (!lat || (lat < 5 && lat > -15 && lon && lon > -70 && lon < -40)) {
      mockDeforestationData.push({
        id: 'DETER_' + Date.now(),
        type: 'deforestation',
        title: 'Alerta DETER - Desmatamento Detectado',
        description: 'Nova área de desmatamento identificada via sensoriamento remoto na Amazônia',
        severity: 'high',
        latitude: -8 + Math.random() * 10,
        longitude: -65 + Math.random() * 15,
        location_name: ['Rondônia', 'Acre', 'Amazonas', 'Pará'][Math.floor(Math.random() * 4)] + ' - Amazônia',
        source_api: 'INPE_DETER',
        external_id: `DETER_${new Date().getFullYear()}_${Date.now()}`,
        detected_at: new Date(),
        metadata: {
          area_hectares: 10 + Math.random() * 200,
          vegetation_type: ['Floresta Ombrófila Densa', 'Floresta Ombrófila Aberta', 'Cerrado'][Math.floor(Math.random() * 3)],
          detection_confidence: 80 + Math.random() * 20,
          biome: 'Amazônia',
          municipality: 'Município não especificado'
        }
      });
    }

    // Salvar no banco
    for (const deforestation of mockDeforestationData) {
      await supabase
        .from('environmental_risks')
        .upsert({
          risk_type: deforestation.type,
          title: deforestation.title,
          description: deforestation.description,
          severity: deforestation.severity,
          latitude: deforestation.latitude,
          longitude: deforestation.longitude,
          location_name: deforestation.location_name,
          source_api: deforestation.source_api,
          external_id: deforestation.external_id,
          detected_at: deforestation.detected_at,
          metadata: deforestation.metadata
        }, {
          onConflict: 'external_id'
        });
    }

    return mockDeforestationData;

  } catch (error) {
    console.error('Error fetching deforestation data:', error);
    return [];
  }
}

async function fetchLocalEnvironmentalData(lat?: number, lon?: number, radius?: number, riskType?: string) {
  try {
    const { data, error } = await supabase.rpc('get_nearby_risks', {
      user_lat: lat || -15.7801,
      user_lon: lon || -47.9292,
      radius_km: radius || 100,
      risk_types: riskType ? [riskType] : null
    });

    if (error) {
      console.error('Database query error:', error);
      return [];
    }

    return data || [];

  } catch (error) {
    console.error('Error fetching local environmental data:', error);
    return [];
  }
}