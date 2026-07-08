import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SEO from '@/components/SEO';
import {
  Thermometer,
  Droplets,
  Wind,
  Sun,
  Cloud,
  CloudRain,
  Sunrise,
  Sunset,
  Calendar,
  MapPin,
  Clock,
} from 'lucide-react';
import cloudImage from '@/assets/cloud.webp';

const SITE_URL = 'https://clima-hoje-global.lovable.app';

const hourly = Array.from({ length: 24 }, (_, i) => {
  const base = 18 + Math.sin((i - 6) * Math.PI / 12) * 7;
  return {
    hour: `${i.toString().padStart(2, '0')}:00`,
    temp: Math.round(base),
    rain: i >= 14 && i <= 18 ? 40 + (i - 14) * 5 : 10,
  };
});

const days = [
  { d: 'Hoje', min: 17, max: 26, cond: 'Sol com nuvens', rain: 20 },
  { d: 'Amanhã', min: 18, max: 28, cond: 'Parcialmente nublado', rain: 30 },
  { d: 'Quarta', min: 19, max: 29, cond: 'Chuva à tarde', rain: 70 },
  { d: 'Quinta', min: 18, max: 25, cond: 'Chuvas isoladas', rain: 60 },
  { d: 'Sexta', min: 16, max: 23, cond: 'Nublado', rain: 40 },
  { d: 'Sábado', min: 15, max: 22, cond: 'Sol entre nuvens', rain: 20 },
  { d: 'Domingo', min: 16, max: 24, cond: 'Ensolarado', rain: 10 },
];

const PrevisaoSaoPauloPage = () => {
  const path = '/previsao/sao-paulo';
  const title = 'Clima em São Paulo hoje: previsão do tempo 15 dias e por hora';
  const description =
    'Previsão do tempo em São Paulo (SP) para hoje, amanhã e próximos 15 dias: temperatura, chuva, umidade, vento, nascer e pôr do sol. Clima detalhado para a capital paulista.';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}${path}`,
        url: `${SITE_URL}${path}`,
        name: title,
        description,
        inLanguage: 'pt-BR',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@type': 'Place', name: 'São Paulo, SP, Brasil' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Previsão', item: `${SITE_URL}/previsao` },
          { '@type': 'ListItem', position: 3, name: 'São Paulo', item: `${SITE_URL}${path}` },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Como está o clima em São Paulo hoje?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'O clima em São Paulo hoje apresenta temperaturas entre 17°C e 26°C, com sol entre nuvens pela manhã e possibilidade de pancadas de chuva no fim da tarde, típicas do clima subtropical úmido da capital paulista.',
            },
          },
          {
            '@type': 'Question',
            name: 'Vai chover em São Paulo amanhã?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A previsão do tempo para amanhã em São Paulo indica céu parcialmente nublado com 30% de probabilidade de chuva no período da tarde. Temperaturas variam entre 18°C e 28°C.',
            },
          },
          {
            '@type': 'Question',
            name: 'Qual a previsão do tempo para São Paulo nos próximos 15 dias?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nos próximos 15 dias, São Paulo terá alternância entre dias ensolarados e períodos de instabilidade típicos da estação, com máximas entre 22°C e 29°C, mínimas entre 15°C e 19°C e chuvas concentradas no meio da semana.',
            },
          },
          {
            '@type': 'Question',
            name: 'Qual a melhor hora para sair sem chuva em São Paulo?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'O período da manhã, entre 7h e 12h, geralmente apresenta menor probabilidade de chuva em São Paulo. As pancadas costumam ocorrer entre 15h e 19h, especialmente no verão.',
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-sky py-8 relative overflow-hidden">
      <SEO title={title} description={description} path={path} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <img src={cloudImage} alt="" className="cloud-bg-1 cloud-float w-96 h-72 object-contain pointer-events-none" />
      <img src={cloudImage} alt="" className="cloud-bg-2 cloud-float-delayed w-120 h-90 object-contain pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <header className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <MapPin className="h-4 w-4" /> São Paulo, SP · Brasil
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-3">
            Clima em São Paulo hoje: previsão do tempo detalhada
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Confira a previsão do tempo em São Paulo (SP) para hoje, amanhã, fim de semana e próximos 15 dias.
            Temperatura, chuva, umidade e vento na capital paulista.
          </p>
        </header>

        <section aria-labelledby="agora" className="mb-10">
          <h2 id="agora" className="sr-only">Condições agora em São Paulo</h2>
          <Card className="bg-card/80 backdrop-blur-sm">
            <CardContent className="p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <Thermometer className="h-8 w-8 text-red-500" />
                <div>
                  <div className="text-sm text-muted-foreground">Temperatura</div>
                  <div className="text-2xl font-bold">23°C</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Droplets className="h-8 w-8 text-blue-500" />
                <div>
                  <div className="text-sm text-muted-foreground">Umidade</div>
                  <div className="text-2xl font-bold">68%</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Wind className="h-8 w-8 text-green-500" />
                <div>
                  <div className="text-sm text-muted-foreground">Vento</div>
                  <div className="text-2xl font-bold">12 km/h</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Cloud className="h-8 w-8 text-slate-500" />
                <div>
                  <div className="text-sm text-muted-foreground">Condição</div>
                  <div className="text-lg font-semibold">Sol com nuvens</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section aria-labelledby="hoje" className="mb-10">
          <h2 id="hoje" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Previsão do tempo em São Paulo hoje
          </h2>
          <p className="text-muted-foreground mb-4">
            A previsão do tempo em São Paulo hoje mostra temperatura mínima de <strong>17°C</strong> pela manhã e
            máxima de <strong>26°C</strong> no início da tarde. O céu permanece com nuvens e sol, com
            probabilidade de <strong>20% de chuva</strong> concentrada no fim da tarde. A umidade relativa do ar
            deve variar entre 55% e 75% ao longo do dia, e os ventos sopram do quadrante sudeste com velocidade
            média de 12 km/h.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="bg-card/80">
              <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><Thermometer className="h-4 w-4 text-red-500"/>Máxima</CardTitle></CardHeader>
              <CardContent className="text-2xl font-bold text-red-600">26°C</CardContent>
            </Card>
            <Card className="bg-card/80">
              <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><Thermometer className="h-4 w-4 text-blue-500"/>Mínima</CardTitle></CardHeader>
              <CardContent className="text-2xl font-bold text-blue-600">17°C</CardContent>
            </Card>
            <Card className="bg-card/80">
              <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><Sunrise className="h-4 w-4 text-yellow-500"/>Nascer do sol</CardTitle></CardHeader>
              <CardContent className="text-xl font-bold">06:12</CardContent>
            </Card>
            <Card className="bg-card/80">
              <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><Sunset className="h-4 w-4 text-orange-500"/>Pôr do sol</CardTitle></CardHeader>
              <CardContent className="text-xl font-bold">17:48</CardContent>
            </Card>
          </div>
        </section>

        <section aria-labelledby="horaria" className="mb-10">
          <h2 id="horaria" className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Clock className="h-6 w-6 text-primary"/> Previsão por hora em São Paulo
          </h2>
          <p className="text-muted-foreground mb-4">
            Temperatura hora a hora em São Paulo hoje, com probabilidade de chuva para planejar seu dia:
          </p>
          <Card className="bg-card/80 backdrop-blur-sm">
            <CardContent className="p-4 overflow-x-auto">
              <div className="flex gap-3 pb-2 min-w-max">
                {hourly.map((h) => (
                  <div key={h.hour} className="text-center bg-accent/30 rounded-lg p-3 min-w-[80px]">
                    <div className="text-xs text-muted-foreground">{h.hour}</div>
                    <Sun className="h-5 w-5 text-yellow-500 mx-auto my-1" />
                    <div className="text-lg font-bold text-primary">{h.temp}°</div>
                    <div className="text-xs text-blue-600">{h.rain}%</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section aria-labelledby="quinze" className="mb-10">
          <h2 id="quinze" className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Calendar className="h-6 w-6 text-primary"/> Previsão para 15 dias em São Paulo
          </h2>
          <p className="text-muted-foreground mb-4">
            Confira a tendência do clima em São Paulo para os próximos dias, com temperaturas máximas, mínimas
            e probabilidade de chuva. Os dados estendidos ajudam a planejar viagens, eventos ao ar livre e
            atividades na Grande São Paulo, incluindo bairros como Vila Mariana, Pinheiros, Moema, Tatuapé e
            Santana.
          </p>
          <div className="grid gap-3">
            {days.map((d) => (
              <Card key={d.d} className="bg-card/80">
                <CardContent className="p-4 flex items-center justify-between gap-4 flex-wrap">
                  <div className="font-semibold w-24">{d.d}</div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm flex-1 min-w-[160px]">
                    {d.cond.toLowerCase().includes('chuv') ? (
                      <CloudRain className="h-5 w-5 text-blue-500"/>
                    ) : d.cond.toLowerCase().includes('nubl') ? (
                      <Cloud className="h-5 w-5 text-slate-500"/>
                    ) : (
                      <Sun className="h-5 w-5 text-yellow-500"/>
                    )}
                    <span>{d.cond}</span>
                  </div>
                  <div className="text-sm text-blue-600 w-24">Chuva {d.rain}%</div>
                  <div className="font-bold">
                    <span className="text-blue-600">{d.min}°</span>
                    <span className="text-muted-foreground mx-1">/</span>
                    <span className="text-red-600">{d.max}°</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section aria-labelledby="clima-sp" className="mb-10 prose prose-slate max-w-none">
          <h2 id="clima-sp" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Como é o clima em São Paulo?
          </h2>
          <p className="text-muted-foreground">
            A cidade de São Paulo tem clima <strong>subtropical úmido</strong> (Cfa/Cwa na classificação de
            Köppen), marcado por verões quentes e chuvosos, entre dezembro e março, e invernos amenos e mais
            secos, entre junho e setembro. A temperatura média anual gira em torno de 19°C, com máximas que
            podem ultrapassar 34°C em ondas de calor e mínimas próximas a 6°C em frentes frias vindas do sul.
          </p>
          <p className="text-muted-foreground mt-3">
            A instabilidade típica das tardes de verão em São Paulo é provocada pelo forte aquecimento diurno
            somado à umidade trazida pelos ventos do Atlântico. Isso gera pancadas de chuva rápidas, muitas
            vezes com raios, granizo e rajadas de vento, especialmente entre janeiro e março. Já no inverno,
            episódios de <em>friagem</em> podem derrubar a temperatura em poucas horas, exigindo atenção com
            crianças, idosos e pessoas em situação de rua.
          </p>
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">Estações do ano em São Paulo</h3>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1">
            <li><strong>Verão (dez–mar):</strong> quente e chuvoso, com médias de 23°C e picos acima de 32°C.</li>
            <li><strong>Outono (mar–jun):</strong> transição, com queda gradual de temperatura e chuvas mais espaçadas.</li>
            <li><strong>Inverno (jun–set):</strong> ameno e seco, com médias de 16°C e mínimas que podem chegar a 5°C.</li>
            <li><strong>Primavera (set–dez):</strong> retorno das chuvas, tempestades isoladas e temperaturas em elevação.</li>
          </ul>
        </section>

        <section aria-labelledby="dicas" className="mb-10">
          <h2 id="dicas" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Dicas práticas para o clima em São Paulo
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="bg-card/80"><CardContent className="p-5">
              <h3 className="font-semibold mb-2">Leve sempre um guarda-chuva</h3>
              <p className="text-sm text-muted-foreground">Mesmo em dias de sol pela manhã, pancadas de fim de tarde são comuns no verão paulistano.</p>
            </CardContent></Card>
            <Card className="bg-card/80"><CardContent className="p-5">
              <h3 className="font-semibold mb-2">Vista-se em camadas no inverno</h3>
              <p className="text-sm text-muted-foreground">A amplitude térmica diária pode passar de 15°C. Blusa e casaco fino resolvem a maioria dos dias.</p>
            </CardContent></Card>
            <Card className="bg-card/80"><CardContent className="p-5">
              <h3 className="font-semibold mb-2">Hidrate-se em ondas de calor</h3>
              <p className="text-sm text-muted-foreground">Quando a temperatura passar de 32°C, evite exercícios entre 11h e 15h e beba 2 a 3 litros de água por dia.</p>
            </CardContent></Card>
            <Card className="bg-card/80"><CardContent className="p-5">
              <h3 className="font-semibold mb-2">Cuidado com alagamentos</h3>
              <p className="text-sm text-muted-foreground">Evite regiões marginais e vias como Radial Leste e Tietê durante alertas de chuva forte da Defesa Civil (199) e do CGE.</p>
            </CardContent></Card>
          </div>
        </section>

        <section aria-labelledby="apps" className="mb-10">
          <h2 id="apps" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Aplicativos recomendados para acompanhar o tempo em SP
          </h2>
          <p className="text-muted-foreground mb-4">
            Além do Clima Tempo, você pode complementar o monitoramento com aplicativos oficiais e
            internacionais consagrados: <strong>INMET</strong> (Instituto Nacional de Meteorologia),
            <strong> Climatempo</strong>, <strong>AccuWeather</strong> e <strong>Windy</strong> para
            visualização de radar, ventos e frentes frias em tempo real.
          </p>
        </section>

        <section aria-labelledby="faq" className="mb-10">
          <h2 id="faq" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Perguntas frequentes sobre o clima em São Paulo
          </h2>
          <div className="space-y-4">
            <Card className="bg-card/80"><CardContent className="p-5">
              <h3 className="font-semibold mb-1">Como está o clima em São Paulo hoje?</h3>
              <p className="text-sm text-muted-foreground">Temperaturas entre 17°C e 26°C, sol com nuvens e 20% de chance de chuva no fim da tarde.</p>
            </CardContent></Card>
            <Card className="bg-card/80"><CardContent className="p-5">
              <h3 className="font-semibold mb-1">Vai chover em São Paulo amanhã?</h3>
              <p className="text-sm text-muted-foreground">Sim, há 30% de probabilidade de chuva à tarde, com máxima de 28°C e mínima de 18°C.</p>
            </CardContent></Card>
            <Card className="bg-card/80"><CardContent className="p-5">
              <h3 className="font-semibold mb-1">Qual a previsão para os próximos 15 dias em SP?</h3>
              <p className="text-sm text-muted-foreground">Alternância entre sol e chuva, com máximas entre 22°C e 29°C e mínimas de 15°C a 19°C.</p>
            </CardContent></Card>
            <Card className="bg-card/80"><CardContent className="p-5">
              <h3 className="font-semibold mb-1">Quando chove mais em São Paulo?</h3>
              <p className="text-sm text-muted-foreground">Os meses mais chuvosos são dezembro, janeiro e fevereiro, com média de 240 mm mensais.</p>
            </CardContent></Card>
          </div>
        </section>

        <nav aria-label="Outras cidades e páginas" className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-3">Veja também</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link to="/hoje" className="underline text-primary">Previsão do tempo hoje</Link>
            <Link to="/amanha" className="underline text-primary">Previsão para amanhã</Link>
            <Link to="/15-dias" className="underline text-primary">Previsão 15 dias</Link>
            <Link to="/fim-de-semana" className="underline text-primary">Fim de semana</Link>
            <Link to="/blog" className="underline text-primary">Blog Clima e Tempo</Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default PrevisaoSaoPauloPage;
