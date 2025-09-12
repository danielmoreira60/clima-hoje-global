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
    const { lat, lon, city, lang = 'pt_br' } = await req.json()
    
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    )

    const apiKey = Deno.env.get('OPENWEATHER_API_KEY')
    
    if (!apiKey) {
      throw new Error('API Key não configurada')
    }

    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&lang=${lang}`
    let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&units=metric&lang=${lang}`
    let airPollutionUrl = `https://api.openweathermap.org/data/2.5/air_pollution?appid=${apiKey}`
    let uvUrl = `https://api.openweathermap.org/data/2.5/uvi?appid=${apiKey}`

    if (city) {
      weatherUrl += `&q=${encodeURIComponent(city)}`
      forecastUrl += `&q=${encodeURIComponent(city)}`
    } else if (lat && lon) {
      weatherUrl += `&lat=${lat}&lon=${lon}`
      forecastUrl += `&lat=${lat}&lon=${lon}`
      airPollutionUrl += `&lat=${lat}&lon=${lon}`
      uvUrl += `&lat=${lat}&lon=${lon}`
    } else {
      throw new Error('Localização ou cidade deve ser fornecida')
    }

    // Buscar dados atuais, previsão, qualidade do ar e UV
    const responses = await Promise.all([
      fetch(weatherUrl),
      fetch(forecastUrl),
      lat && lon ? fetch(airPollutionUrl) : Promise.resolve(null),
      lat && lon ? fetch(uvUrl) : Promise.resolve(null)
    ])

    const [weatherResponse, forecastResponse, airResponse, uvResponse] = responses

    if (!weatherResponse.ok || !forecastResponse.ok) {
      throw new Error('Erro ao buscar dados meteorológicos')
    }

    const weatherData = await weatherResponse.json()
    const forecastData = await forecastResponse.json()
    const airData = airResponse?.ok ? await airResponse.json() : null
    const uvData = uvResponse?.ok ? await uvResponse.json() : null

    // Processar dados para o formato esperado
    const processedData = {
      location: `${weatherData.name}, ${weatherData.sys.country}`,
      temperature: Math.round(weatherData.main.temp),
      condition: weatherData.weather[0].description,
      humidity: weatherData.main.humidity,
      windSpeed: Math.round(weatherData.wind.speed * 3.6), // converter m/s para km/h
      windDirection: weatherData.wind.deg || 0,
      windGust: weatherData.wind.gust ? Math.round(weatherData.wind.gust * 3.6) : null,
      pressure: weatherData.main.pressure,
      visibility: weatherData.visibility ? Math.round(weatherData.visibility / 1000) : 10,
      icon: weatherData.weather[0].icon,
      feelsLike: Math.round(weatherData.main.feels_like),
      uvIndex: uvData?.value ? Math.round(uvData.value) : 5,
      airQuality: airData?.list?.[0]?.main?.aqi || 3,
      cloudiness: weatherData.clouds.all,
      sunrise: weatherData.sys.sunrise,
      sunset: weatherData.sys.sunset,
      dewPoint: weatherData.main.temp - ((100 - weatherData.main.humidity) / 5),
      coords: {
        lat: weatherData.coord.lat,
        lon: weatherData.coord.lon
      },
      forecast: forecastData.list.slice(0, 40).map((item: any) => ({
        date: item.dt_txt.split(' ')[0],
        time: item.dt_txt.split(' ')[1],
        temperature: Math.round(item.main.temp),
        minTemp: Math.round(item.main.temp_min),
        maxTemp: Math.round(item.main.temp_max),
        condition: item.weather[0].description,
        humidity: item.main.humidity,
        windSpeed: Math.round(item.wind.speed * 3.6),
        icon: item.weather[0].icon,
        pop: Math.round(item.pop * 100) // probabilidade de precipitação
      }))
    }

    return new Response(JSON.stringify(processedData), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })

  } catch (error) {
    console.error('Erro na função weather:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})