import { serve } from 'https://deno.land/std@0.208.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    )

    if (req.method === 'POST') {
      // Criar novo alerta
      const { email, whatsapp, location, alertTypes, minTemp, maxTemp, windSpeed, humidity } = await req.json()

      const { data, error } = await supabaseClient
        .from('weather_alerts')
        .insert({
          email,
          whatsapp,
          location,
          alert_types: alertTypes,
          min_temp: minTemp,
          max_temp: maxTemp,
          wind_speed: windSpeed,
          humidity,
          active: true,
          created_at: new Date().toISOString()
        })
        .select()

      if (error) {
        throw error
      }

      return new Response(JSON.stringify({ success: true, data }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    if (req.method === 'GET') {
      // Listar alertas ativos
      const { data, error } = await supabaseClient
        .from('weather_alerts')
        .select('*')
        .eq('active', true)

      if (error) {
        throw error
      }

      return new Response(JSON.stringify(data), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    return new Response('Método não permitido', { status: 405 })

  } catch (error) {
    console.error('Erro na função weather-alerts:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})