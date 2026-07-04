import { useEffect, useState, useCallback, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MapContainer, TileLayer, CircleMarker, Popup, LayersControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {
  AlertTriangle,
  RefreshCw,
  Activity,
  Mountain,
  Waves,
  Flame,
  CloudLightning,
  Snowflake,
  ExternalLink,
  TrendingUp,
  Globe2,
} from "lucide-react";

export interface EventItem {
  id: string;
  title: string;
  description?: string;
  time: string;
  magnitude?: number;
  url?: string;
  lat?: number;
  lon?: number;
  severity: "low" | "medium" | "high" | "extreme";
  source: string;
  category: CategoryKey;
}

type CategoryKey = "earthquakes" | "volcanoes" | "tsunamis" | "storms" | "wildfires" | "ice";

const categoryMeta: Record<CategoryKey, { label: string; color: string; icon: any; gradient: string }> = {
  earthquakes: { label: "Terremotos", color: "#ef4444", icon: Activity, gradient: "from-red-500 to-orange-500" },
  volcanoes: { label: "Vulcões", color: "#dc2626", icon: Mountain, gradient: "from-red-700 to-amber-600" },
  tsunamis: { label: "Tsunamis", color: "#0ea5e9", icon: Waves, gradient: "from-sky-500 to-blue-700" },
  storms: { label: "Tempestades", color: "#8b5cf6", icon: CloudLightning, gradient: "from-violet-500 to-purple-700" },
  wildfires: { label: "Queimadas", color: "#f97316", icon: Flame, gradient: "from-orange-500 to-red-600" },
  ice: { label: "Gelo Polar", color: "#06b6d4", icon: Snowflake, gradient: "from-cyan-400 to-sky-600" },
};

const severityRadius = { low: 6, medium: 9, high: 13, extreme: 18 } as const;

const fetchEarthquakes = async (): Promise<EventItem[]> => {
  const res = await fetch(
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson"
  );
  const data = await res.json();
  return (data.features || []).map((f: any) => {
    const mag = f.properties.mag ?? 0;
    const severity: EventItem["severity"] =
      mag >= 7 ? "extreme" : mag >= 6 ? "high" : mag >= 5 ? "medium" : "low";
    return {
      id: f.id,
      title: `M${mag.toFixed(1)} — ${f.properties.place}`,
      description: `Profundidade: ${f.geometry.coordinates[2]?.toFixed(1)} km`,
      time: new Date(f.properties.time).toISOString(),
      magnitude: mag,
      url: f.properties.url,
      lon: f.geometry.coordinates[0],
      lat: f.geometry.coordinates[1],
      severity,
      source: "USGS",
      category: "earthquakes" as const,
    };
  });
};

const fetchTsunamis = async (): Promise<EventItem[]> => {
  const res = await fetch(
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson"
  );
  const data = await res.json();
  return (data.features || [])
    .filter((f: any) => f.properties.tsunami === 1)
    .map((f: any) => ({
      id: f.id,
      title: `Alerta Tsunami — ${f.properties.place}`,
      description: `Terremoto M${f.properties.mag} gerou alerta`,
      time: new Date(f.properties.time).toISOString(),
      magnitude: f.properties.mag,
      url: f.properties.url,
      lon: f.geometry.coordinates[0],
      lat: f.geometry.coordinates[1],
      severity: "extreme" as const,
      source: "USGS Tsunami",
      category: "tsunamis" as const,
    }));
};

const fetchEonet = async (category: string, key: CategoryKey): Promise<EventItem[]> => {
  const res = await fetch(
    `https://eonet.gsfc.nasa.gov/api/v3/events?status=open&category=${category}&limit=50`
  );
  const data = await res.json();
  return (data.events || [])
    .map((e: any) => {
      const geom = e.geometry?.[e.geometry.length - 1];
      const coords = geom?.coordinates;
      if (!Array.isArray(coords)) return null;
      return {
        id: e.id,
        title: e.title,
        description: e.categories?.[0]?.title,
        time: geom?.date || new Date().toISOString(),
        url: e.sources?.[0]?.url,
        lon: coords[0],
        lat: coords[1],
        severity: "high" as const,
        source: e.sources?.[0]?.id || "NASA EONET",
        category: key,
      };
    })
    .filter(Boolean) as EventItem[];
};

const fetchers: Record<CategoryKey, () => Promise<EventItem[]>> = {
  earthquakes: fetchEarthquakes,
  tsunamis: fetchTsunamis,
  volcanoes: () => fetchEonet("volcanoes", "volcanoes"),
  storms: () => fetchEonet("severeStorms", "storms"),
  wildfires: () => fetchEonet("wildfires", "wildfires"),
  ice: () => fetchEonet("seaLakeIce", "ice"),
};

const NaturalEventsMonitor = () => {
  const [allEvents, setAllEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  const [activeCategories, setActiveCategories] = useState<Set<CategoryKey>>(
    new Set(Object.keys(categoryMeta) as CategoryKey[])
  );
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const loadAll = useCallback(async () => {
    setLoading(true);
    try {
      const results = await Promise.allSettled(
        (Object.keys(fetchers) as CategoryKey[]).map((k) => fetchers[k]())
      );
      const events = results.flatMap((r) => (r.status === "fulfilled" ? r.value : []));
      setAllEvents(events);
      setLastUpdate(new Date());
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadAll();
  }, [loadAll]);

  const toggleCategory = (key: CategoryKey) => {
    setActiveCategories((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const filtered = useMemo(
    () => allEvents.filter((e) => activeCategories.has(e.category)),
    [allEvents, activeCategories]
  );

  const counts = useMemo(() => {
    const c: Record<CategoryKey, number> = {
      earthquakes: 0, volcanoes: 0, tsunamis: 0, storms: 0, wildfires: 0, ice: 0,
    };
    allEvents.forEach((e) => { c[e.category]++; });
    return c;
  }, [allEvents]);

  const recent = useMemo(
    () => [...filtered].sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()).slice(0, 30),
    [filtered]
  );

  const extremeCount = filtered.filter((e) => e.severity === "extreme").length;

  return (
    <Card className="bg-white border-border/50 shadow-weather overflow-hidden">
      <CardHeader className="bg-slate-50 border-b border-border/50">
        <div className="flex items-start justify-between flex-wrap gap-3">
          <div>
            <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
              <Globe2 className="h-6 w-6 text-primary" />
              <span className="text-slate-900">
                Monitor Geológico e Climático Global
              </span>
            </CardTitle>
            <CardDescription className="mt-1 text-slate-600">
              Mapa interativo em tempo real — terremotos (USGS) e eventos naturais (NASA EONET)
              {lastUpdate && ` • Atualizado ${lastUpdate.toLocaleTimeString("pt-BR")}`}
            </CardDescription>
          </div>
          <Button variant="outline" size="sm" onClick={loadAll} disabled={loading} className="gap-2">
            <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} /> Atualizar
          </Button>
        </div>
      </CardHeader>

      <CardContent className="p-4 md:p-6 space-y-4">
        {/* Stats cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {(Object.keys(categoryMeta) as CategoryKey[]).map((key) => {
            const meta = categoryMeta[key];
            const Icon = meta.icon;
            const active = activeCategories.has(key);
            return (
              <button
                key={key}
                onClick={() => toggleCategory(key)}
                className={`group relative overflow-hidden rounded-xl p-3 border-2 transition-all hover-scale text-left ${
                  active
                    ? `bg-gradient-to-br ${meta.gradient} border-transparent shadow-lg`
                    : "bg-card/60 border-border/50 opacity-60 hover:opacity-100"
                }`}
                aria-pressed={active}
              >
                <div className="flex items-center justify-between mb-1">
                  <Icon className={`h-5 w-5 ${active ? "text-white" : "text-muted-foreground"}`} />
                  <span className={`text-2xl font-bold ${active ? "text-white" : "text-foreground"}`}>
                    {counts[key]}
                  </span>
                </div>
                <p className={`text-xs font-medium ${active ? "text-white/90" : "text-muted-foreground"}`}>
                  {meta.label}
                </p>
              </button>
            );
          })}
        </div>

        {/* Alert banner */}
        {extremeCount > 0 && (
          <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-red-500/15 to-orange-500/15 border border-red-500/30 animate-pulse">
            <AlertTriangle className="h-5 w-5 text-red-600 shrink-0" />
            <p className="text-sm font-medium text-foreground">
              <span className="font-bold text-red-600">{extremeCount}</span> evento(s) de severidade extrema ativos no momento
            </p>
          </div>
        )}

        {/* Map + sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 rounded-xl overflow-hidden border-2 border-border/50 shadow-lg" style={{ height: 520 }}>
            <MapContainer
              center={[10, 0]}
              zoom={2}
              minZoom={2}
              worldCopyJump
              style={{ height: "100%", width: "100%", background: "#0a1a2e" }}
              scrollWheelZoom
            >
              <LayersControl position="topright">
                <LayersControl.BaseLayer checked name="Satélite">
                  <TileLayer
                    attribution="&copy; Esri"
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                  />
                </LayersControl.BaseLayer>
                <LayersControl.BaseLayer name="Escuro">
                  <TileLayer
                    attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                  />
                </LayersControl.BaseLayer>
                <LayersControl.BaseLayer name="Claro">
                  <TileLayer
                    attribution='&copy; OpenStreetMap'
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                  />
                </LayersControl.BaseLayer>
              </LayersControl>

              {filtered.map((e) =>
                e.lat !== undefined && e.lon !== undefined ? (
                  <CircleMarker
                    key={e.id}
                    center={[e.lat, e.lon]}
                    radius={severityRadius[e.severity]}
                    pathOptions={{
                      color: categoryMeta[e.category].color,
                      fillColor: categoryMeta[e.category].color,
                      fillOpacity: 0.55,
                      weight: 2,
                    }}
                    eventHandlers={{ click: () => setSelectedEvent(e) }}
                  >
                    <Popup>
                      <div className="space-y-1 min-w-[180px]">
                        <strong className="block text-sm">{e.title}</strong>
                        {e.description && <p className="text-xs text-gray-600">{e.description}</p>}
                        <p className="text-xs text-gray-500">{new Date(e.time).toLocaleString("pt-BR")}</p>
                        <Badge variant="outline" className="text-xs">{categoryMeta[e.category].label}</Badge>
                        {e.url && (
                          <a href={e.url} target="_blank" rel="noopener noreferrer" className="block text-xs text-primary underline mt-1">
                            Ver detalhes →
                          </a>
                        )}
                      </div>
                    </Popup>
                  </CircleMarker>
                ) : null
              )}
            </MapContainer>
          </div>

          {/* Recent events sidebar */}
          <div className="rounded-xl border-2 border-border/50 bg-card/60 overflow-hidden flex flex-col" style={{ height: 520 }}>
            <div className="p-3 border-b border-border/50 bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <h4 className="font-semibold text-sm">Eventos Recentes ({recent.length})</h4>
            </div>
            <ScrollArea className="flex-1">
              <div className="p-2 space-y-2">
                {loading && recent.length === 0 ? (
                  <div className="text-center py-10 text-muted-foreground text-sm">
                    <RefreshCw className="h-5 w-5 animate-spin mx-auto mb-2" />
                    Carregando eventos...
                  </div>
                ) : recent.length === 0 ? (
                  <p className="text-center py-10 text-muted-foreground text-sm">Nenhum evento na seleção atual.</p>
                ) : (
                  recent.map((e) => {
                    const meta = categoryMeta[e.category];
                    const Icon = meta.icon;
                    return (
                      <button
                        key={e.id}
                        onClick={() => setSelectedEvent(e)}
                        className="w-full text-left p-3 rounded-lg border border-border/40 hover:border-primary/50 hover:bg-primary/5 transition-all group"
                      >
                        <div className="flex items-start gap-2">
                          <div
                            className="shrink-0 p-1.5 rounded-md"
                            style={{ background: `${meta.color}20` }}
                          >
                            <Icon className="h-4 w-4" style={{ color: meta.color }} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold truncate group-hover:text-primary transition-colors">
                              {e.title}
                            </p>
                            <p className="text-[10px] text-muted-foreground mt-0.5">
                              {new Date(e.time).toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" })}
                            </p>
                          </div>
                          {e.severity === "extreme" && (
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0 mt-1" />
                          )}
                        </div>
                      </button>
                    );
                  })
                )}
              </div>
            </ScrollArea>
          </div>
        </div>

        {/* Selected event detail */}
        {selectedEvent && (
          <div
            className={`p-4 rounded-xl border-2 bg-gradient-to-br ${categoryMeta[selectedEvent.category].gradient} text-white shadow-lg animate-fade-in`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <Badge variant="secondary" className="mb-2">{categoryMeta[selectedEvent.category].label}</Badge>
                <h4 className="font-bold text-lg">{selectedEvent.title}</h4>
                {selectedEvent.description && (
                  <p className="text-sm text-white/90 mt-1">{selectedEvent.description}</p>
                )}
                <div className="flex flex-wrap gap-3 mt-2 text-xs text-white/80">
                  <span>{new Date(selectedEvent.time).toLocaleString("pt-BR")}</span>
                  {selectedEvent.lat !== undefined && selectedEvent.lon !== undefined && (
                    <span>📍 {selectedEvent.lat.toFixed(2)}, {selectedEvent.lon.toFixed(2)}</span>
                  )}
                  <span>Fonte: {selectedEvent.source}</span>
                </div>
              </div>
              {selectedEvent.url && (
                <a
                  href={selectedEvent.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 p-2 rounded-lg bg-white/20 hover:bg-white/30 transition"
                  aria-label="Abrir fonte"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        )}

        <p className="text-xs text-muted-foreground text-center">
          Clique nos cartões acima para filtrar categorias no mapa. Clique nos pontos para detalhes.
        </p>
      </CardContent>
    </Card>
  );
};

export default NaturalEventsMonitor;
