import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import {
  Activity, AlertTriangle, BellRing, Cloud, Globe, Mountain, Radio, Satellite,
  Shield, Sparkles, ThermometerSun, Waves, Wind, Flame, Eye, MapPin, Award,
  Zap, Users, BookOpen, HeartHandshake,
} from 'lucide-react';

const monitors = [
  { icon: Cloud, color: 'from-sky-500 to-blue-600', title: 'Previsão do Tempo', desc: 'Temperatura, chuva, vento, umidade e pressão atualizados a cada hora via OpenWeatherMap.', tag: 'Meteorologia' },
  { icon: Mountain, color: 'from-amber-500 to-orange-600', title: 'Terremotos', desc: 'Detecção sísmica em tempo real com dados do USGS (United States Geological Survey).', tag: 'Geologia' },
  { icon: Waves, color: 'from-cyan-500 to-teal-600', title: 'Tsunamis', desc: 'Alertas de tsunamis associados a sismos M≥4.5 monitorados continuamente.', tag: 'Oceanografia' },
  { icon: Flame, color: 'from-red-500 to-rose-600', title: 'Vulcões & Queimadas', desc: 'Atividade vulcânica e focos de incêndio rastreados pela NASA EONET.', tag: 'Eventos Naturais' },
  { icon: Wind, color: 'from-violet-500 to-purple-600', title: 'Tempestades Severas', desc: 'Ciclones, furacões e tempestades tropicais com geolocalização precisa.', tag: 'Clima Extremo' },
  { icon: Satellite, color: 'from-emerald-500 to-green-600', title: 'Gelo Polar', desc: 'Monitoramento de derretimento e formação de gelo nos pólos.', tag: 'Aquecimento Global' },
];

const values = [
  { icon: Shield, title: 'Confiabilidade', desc: 'Dados oficiais de NASA, NOAA, USGS, INPE e Copernicus.' },
  { icon: Zap, title: 'Tempo Real', desc: 'Atualizações contínuas para decisões rápidas.' },
  { icon: HeartHandshake, title: 'Compromisso Social', desc: 'Informar é proteger vidas e patrimônios.' },
  { icon: BookOpen, title: 'Transparência', desc: 'Fontes abertas e metodologia clara.' },
];

const SobrePage = () => (
  <div className="min-h-screen bg-gradient-sky py-12">
    <SEO title="Sobre Nós | Clima Tempo" description="Conheça o Clima Tempo: monitoramento meteorológico, sísmico e ambiental em tempo real com dados oficiais de NASA, NOAA, USGS e INPE." path="/sobre" />
    <div className="container mx-auto px-4 max-w-6xl">
      {/* Hero */}
      <section className="text-center mb-16">
        <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0 px-4 py-1.5">
          <Sparkles className="h-3.5 w-3.5 mr-1.5" /> Plataforma Premium de Monitoramento
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
          Sobre o Clima Tempo
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Uma plataforma dedicada a transformar dados meteorológicos e ambientais em
          informação acessível, precisa e útil — porque cada minuto importa quando o assunto é segurança.
        </p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {[
          { v: '24/7', l: 'Monitoramento' },
          { v: '6+', l: 'Tipos de Eventos' },
          { v: '5', l: 'Fontes Oficiais' },
          { v: '15 dias', l: 'Previsão Estendida' },
        ].map((s) => (
          <Card key={s.l} className="border-2 border-primary/20 bg-gradient-to-br from-card to-card/50 hover:shadow-glow transition-all">
            <CardContent className="p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">{s.v}</div>
              <p className="text-sm text-muted-foreground font-medium">{s.l}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Missão */}
      <section className="mb-16">
        <Card className="overflow-hidden border-0 shadow-glow bg-gradient-to-br from-primary/10 via-card to-secondary/10">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-lg bg-gradient-to-br from-primary to-secondary">
                <Award className="h-5 w-5 text-white" />
              </div>
              <Badge variant="outline" className="border-primary/30">Nossa Missão</Badge>
            </div>
            <CardTitle className="text-3xl">Informar para Proteger</CardTitle>
            <CardDescription className="text-base leading-relaxed">
              Acreditamos que o acesso à informação climática e ambiental de qualidade é um direito.
              Nossa missão é entregar previsões precisas e alertas em tempo real para que pessoas,
              empresas e comunidades possam se planejar, prevenir riscos e salvar vidas.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      {/* Monitores */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <Badge className="mb-3" variant="secondary"><Activity className="h-3 w-3 mr-1" /> Monitores Ativos</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Nossos Sistemas de Monitoramento</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Integramos dados das principais agências mundiais para entregar uma visão completa do planeta.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {monitors.map((m) => {
            const Icon = m.icon;
            return (
              <Card key={m.title} className="group relative overflow-hidden border-2 hover:border-primary/40 transition-all hover:-translate-y-1 hover:shadow-glow">
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${m.color}`} />
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${m.color} shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="outline" className="text-xs">{m.tag}</Badge>
                  </div>
                  <CardTitle className="text-xl">{m.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{m.desc}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Alertas - importância */}
      <section className="mb-16">
        <Card className="border-2 border-orange-500/30 bg-gradient-to-br from-orange-500/5 via-card to-red-500/5 overflow-hidden">
          <CardHeader className="border-b border-orange-500/20">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 shadow-lg">
                <BellRing className="h-6 w-6 text-white animate-pulse" />
              </div>
              <div>
                <Badge className="mb-1 bg-orange-500/20 text-orange-700 border-orange-500/30 hover:bg-orange-500/30">Importância dos Alertas</Badge>
                <CardTitle className="text-2xl md:text-3xl">Por que Alertas Salvam Vidas</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <p className="text-muted-foreground leading-relaxed text-base">
              Alertas precoces reduzem em até <span className="font-bold text-foreground">80% as perdas humanas</span> em
              eventos climáticos extremos, segundo a Organização Meteorológica Mundial (OMM). Cada minuto de
              antecedência é uma oportunidade de evacuar, proteger bens e acionar serviços de emergência.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: AlertTriangle, t: 'Prevenção', d: 'Antecipa riscos para que comunidades se preparem.' },
                { icon: Users, t: 'Proteção Coletiva', d: 'Beneficia famílias, escolas, empresas e cidades inteiras.' },
                { icon: Eye, t: 'Consciência', d: 'Educa sobre mudanças climáticas e fenômenos naturais.' },
              ].map((b) => {
                const I = b.icon;
                return (
                  <div key={b.t} className="p-4 rounded-lg bg-card/60 border border-orange-500/20">
                    <I className="h-5 w-5 text-orange-600 mb-2" />
                    <h4 className="font-semibold mb-1">{b.t}</h4>
                    <p className="text-sm text-muted-foreground">{b.d}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Modelo de monitoramento */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-3"><Radio className="h-3 w-3 mr-1" /> Como Funciona</Badge>
          <h2 className="text-3xl md:text-4xl font-bold">Nosso Modelo de Monitoramento</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { n: '01', t: 'Coleta', d: 'Conectamos APIs oficiais de satélites, estações e sensores globais.' },
            { n: '02', t: 'Processamento', d: 'Filtramos, normalizamos e geolocalizamos cada evento.' },
            { n: '03', t: 'Análise', d: 'Classificamos severidade (baixa, média, alta, extrema).' },
            { n: '04', t: 'Distribuição', d: 'Exibimos em mapas e enviamos alertas personalizados.' },
          ].map((s) => (
            <Card key={s.n} className="relative overflow-hidden border-2 hover:border-primary/50 transition-all">
              <CardContent className="p-6">
                <div className="text-5xl font-bold bg-gradient-to-br from-primary/30 to-secondary/30 bg-clip-text text-transparent mb-3">{s.n}</div>
                <h4 className="font-bold text-lg mb-2">{s.t}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Valores */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Nossos Valores</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {values.map((v) => {
            const I = v.icon;
            return (
              <Card key={v.title} className="text-center hover:shadow-glow transition-all border-2 hover:border-primary/40">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-full bg-gradient-to-br from-primary to-secondary mb-3">
                    <I className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold mb-1">{v.title}</h4>
                  <p className="text-xs text-muted-foreground">{v.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Fontes */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-card to-primary/5 border-2 border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Globe className="h-6 w-6 text-primary" />
              <CardTitle>Fontes Oficiais</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {['NASA EONET', 'NOAA', 'USGS', 'INPE', 'Copernicus', 'OpenWeatherMap', 'OMM'].map((f) => (
                <Badge key={f} variant="outline" className="px-3 py-1.5 text-sm border-primary/30 hover:bg-primary/10 transition-colors">
                  {f}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="text-center">
        <Card className="bg-gradient-to-br from-primary via-primary/90 to-secondary border-0 overflow-hidden">
          <CardContent className="p-10 md:p-14">
            <ThermometerSun className="h-12 w-12 text-white mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pronto para acompanhar o clima?</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Acesse a previsão completa, mapas interativos e alertas em tempo real.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild size="lg" variant="secondary" className="shadow-xl">
                <Link to="/"><MapPin className="h-4 w-4 mr-2" /> Ver Previsão</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white/40 hover:bg-white/20">
                <Link to="/contato">Falar Conosco</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  </div>
);

export default SobrePage;
