-- Create environmental_risks table for storing environmental monitoring data
CREATE TABLE public.environmental_risks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  risk_type TEXT NOT NULL CHECK (risk_type IN ('fire', 'solar', 'hurricane', 'flood', 'deforestation', 'earthquake')),
  title TEXT NOT NULL,
  description TEXT,
  severity TEXT NOT NULL CHECK (severity IN ('low', 'medium', 'high', 'extreme')),
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  location_name TEXT,
  source_api TEXT NOT NULL, -- NASA FIRMS, NOAA, INPE, etc.
  external_id TEXT, -- ID from the external API
  is_active BOOLEAN NOT NULL DEFAULT true,
  detected_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  expires_at TIMESTAMP WITH TIME ZONE,
  metadata JSONB, -- Additional data from APIs
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create index for geospatial queries
CREATE INDEX idx_environmental_risks_location ON public.environmental_risks USING BTREE (latitude, longitude);
CREATE INDEX idx_environmental_risks_type_severity ON public.environmental_risks (risk_type, severity);
CREATE INDEX idx_environmental_risks_active ON public.environmental_risks (is_active, detected_at);
CREATE INDEX idx_environmental_risks_source ON public.environmental_risks (source_api, external_id);

-- Enable Row Level Security
ALTER TABLE public.environmental_risks ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (environmental data should be publicly accessible)
CREATE POLICY "Environmental risks are viewable by everyone" 
ON public.environmental_risks 
FOR SELECT 
USING (true);

-- Create table for user alert preferences
CREATE TABLE public.user_alert_preferences (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  risk_types TEXT[] NOT NULL DEFAULT '{}', -- Array of risk types user wants to be alerted about
  severity_threshold TEXT NOT NULL DEFAULT 'medium' CHECK (severity_threshold IN ('low', 'medium', 'high', 'extreme')),
  proximity_radius_km INTEGER NOT NULL DEFAULT 100,
  notifications_enabled BOOLEAN NOT NULL DEFAULT true,
  sound_enabled BOOLEAN NOT NULL DEFAULT true,
  email_alerts BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id)
);

-- Enable RLS for user preferences
ALTER TABLE public.user_alert_preferences ENABLE ROW LEVEL SECURITY;

-- Create policies for user preferences (users can only see/modify their own preferences)
CREATE POLICY "Users can view their own alert preferences" 
ON public.user_alert_preferences 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own alert preferences" 
ON public.user_alert_preferences 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own alert preferences" 
ON public.user_alert_preferences 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own alert preferences" 
ON public.user_alert_preferences 
FOR DELETE 
USING (auth.uid() = user_id);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_environmental_risks_updated_at
  BEFORE UPDATE ON public.environmental_risks
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_user_alert_preferences_updated_at
  BEFORE UPDATE ON public.user_alert_preferences
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert some sample environmental risks data
INSERT INTO public.environmental_risks (
  risk_type, title, description, severity, latitude, longitude, location_name, source_api, external_id, metadata
) VALUES 
(
  'fire',
  'Foco de Incêndio Ativo - Pantanal',
  'Queimada de grandes proporções detectada via satélite na região do Pantanal',
  'high',
  -19.2840,
  -57.6472,
  'Pantanal - Mato Grosso do Sul',
  'NASA_FIRMS',
  'FIRMS_2024_001',
  '{"confidence": 85, "brightness": 320.5, "frp": 45.2, "satellite": "MODIS"}'
),
(
  'solar',
  'Tempestade Solar Classe M',
  'Erupção solar de classe M detectada, possível interferência em comunicações e GPS',
  'medium',
  NULL,
  NULL,
  'Global',
  'NOAA_SWPC',
  'SWPC_20240118_M2',
  '{"kp_index": 5, "aurora_forecast": "moderate", "radio_blackout": "R2"}'
),
(
  'deforestation',
  'Alerta DETER - Desmatamento Amazônia',
  'Nova área desmatada detectada na Amazônia via sistema DETER',
  'high',
  -8.7619,
  -63.9039,
  'Rondônia - Amazônia',
  'INPE_DETER',
  'DETER_RO_20240118',
  '{"area_hectares": 127.5, "vegetation_type": "Floresta", "detection_date": "2024-01-18"}'
),
(
  'hurricane',
  'Sistema de Baixa Pressão - Atlântico Sul',
  'Ciclone subtropical em formação no Atlântico Sul, ventos até 85 km/h',
  'medium',
  -30.0346,
  -51.2177,
  'Rio Grande do Sul - Litoral',
  'NOAA_NHC',
  'NHC_AL012024',
  '{"max_winds_kmh": 85, "pressure_mb": 995, "movement": "SW 15 km/h"}'
);

-- Create function to get nearby environmental risks
CREATE OR REPLACE FUNCTION public.get_nearby_risks(
  user_lat DECIMAL,
  user_lon DECIMAL,
  radius_km INTEGER DEFAULT 100,
  risk_types TEXT[] DEFAULT NULL
)
RETURNS TABLE (
  id UUID,
  risk_type TEXT,
  title TEXT,
  description TEXT,
  severity TEXT,
  latitude DECIMAL,
  longitude DECIMAL,
  location_name TEXT,
  distance_km DECIMAL,
  detected_at TIMESTAMP WITH TIME ZONE,
  metadata JSONB
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    er.id,
    er.risk_type,
    er.title,
    er.description,
    er.severity,
    er.latitude,
    er.longitude,
    er.location_name,
    ROUND(
      (6371 * acos(
        cos(radians(user_lat)) * cos(radians(er.latitude)) *
        cos(radians(er.longitude) - radians(user_lon)) +
        sin(radians(user_lat)) * sin(radians(er.latitude))
      ))::DECIMAL, 2
    ) as distance_km,
    er.detected_at,
    er.metadata
  FROM public.environmental_risks er
  WHERE er.is_active = true
    AND (expires_at IS NULL OR expires_at > now())
    AND (risk_types IS NULL OR er.risk_type = ANY(risk_types))
    AND (
      er.latitude IS NULL OR
      (6371 * acos(
        cos(radians(user_lat)) * cos(radians(er.latitude)) *
        cos(radians(er.longitude) - radians(user_lon)) +
        sin(radians(user_lat)) * sin(radians(er.latitude))
      )) <= radius_km
    )
  ORDER BY distance_km ASC NULLS LAST, er.detected_at DESC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;