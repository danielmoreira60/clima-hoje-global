import { useEffect, useState, useCallback } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
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
} from "lucide-react";

interface EventItem {
  id: string;
  title: string;
  description?: string;
  time: string;
  magnitude?: number;
  place?: string;
  url?: string;
  lat?: number;
  lon?: number;
  severity: "low" | "medium" | "high" | "extreme";
  source: string;
}

const severityColor: Record<string, string> = {
  low: "bg-green-500/15 text-green-700 border-green-500/30",
  medium: "bg-yellow-500/15 text-yellow-700 border-yellow-500/30",
  high: "bg-orange-500/15 text-orange-700 border-orange-500/30",
  extreme: "bg-red-500/15 text-red-700 border-red-500/30",
};

const fetchEarthquakes = async (): Promise<EventItem[]> => {
  const res = await fetch(
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson"
  );
  const data = await res.json();
  return (data.features || []).map((f: any) => {
    const mag = f.properties.mag;
    const severity: EventItem["severity"] =
      mag >= 7 ? "extreme" : mag >= 6 ? "high" : mag >= 5 ? "medium" : "low";
    return {
      id: f.id,
      title: `Terremoto M${mag?.toFixed(1)} - ${f.properties.place}`,
      time: new Date(f.properties.time).toISOString(),
      magnitude: mag,
      place: f.properties.place,
      url: f.properties.url,
      lon: f.geometry.coordinates[0],
      lat: f.geometry.coordinates[1],
      severity,
      source: "USGS",
    };
  });
};

const fetchTsunamis = async (): Promise<EventItem[]> => {
  const res = await fetch(
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson"
  );
  const data = await res.json();
  return (data.features || [])
    .filter((f: any) => f.properties.tsunami === 1)
    .map((f: any) => ({
      id: f.id,
      title: `Alerta de Tsunami - ${f.properties.place}`,
      description: `Terremoto M${f.properties.mag} gerou alerta de tsunami`,
      time: new Date(f.properties.time).toISOString(),
      magnitude: f.properties.mag,
      place: f.properties.place,
      url: f.properties.url,
      lon: f.geometry.coordinates[0],
      lat: f.geometry.coordinates[1],
      severity: "extreme" as const,
      source: "USGS Tsunami",
    }));
};

const fetchEonet = async (category: string): Promise<EventItem[]> => {
  const res = await fetch(
    `https://eonet.gsfc.nasa.gov/api/v3/events?status=open&category=${category}&limit=30`
  );
  const data = await res.json();
  return (data.events || []).map((e: any) => {
    const geom = e.geometry?.[e.geometry.length - 1];
    const coords = geom?.coordinates;
    return {
      id: e.id,
      title: e.title,
      description: e.description || e.categories?.[0]?.title,
      time: geom?.date || new Date().toISOString(),
      url: e.link || e.sources?.[0]?.url,
      lon: Array.isArray(coords) ? coords[0] : undefined,
      lat: Array.isArray(coords) ? coords[1] : undefined,
      severity: "high" as const,
      source: e.sources?.[0]?.id || "NASA EONET",
    };
  });
};

type TabKey = "earthquakes" | "volcanoes" | "tsunamis" | "storms" | "wildfires" | "ice";

const tabsConfig: { key: TabKey; label: string; icon: any; fetcher: () => Promise<EventItem[]> }[] = [
  { key: "earthquakes", label: "Terremotos", icon: Activity, fetcher: fetchEarthquakes },
  { key: "volcanoes", label: "Vulcões", icon: Mountain, fetcher: () => fetchEonet("volcanoes") },
  { key: "tsunamis", label: "Tsunamis", icon: Waves, fetcher: fetchTsunamis },
  { key: "storms", label: "Tempestades", icon: CloudLightning, fetcher: () => fetchEonet("severeStorms") },
  { key: "wildfires", label: "Queimadas", icon: Flame, fetcher: () => fetchEonet("wildfires") },
  { key: "ice", label: "Gelo Polar", icon: Snowflake, fetcher: () => fetchEonet("seaLakeIce") },
];

const EventList = ({ events, loading }: { events: EventItem[]; loading: boolean }) => {
  if (loading) {
    return (
      <div className="text-center py-10 text-muted-foreground">
        <RefreshCw className="h-6 w-6 animate-spin mx-auto mb-2" />
        Carregando eventos em tempo real...
      </div>
    );
  }
  if (events.length === 0) {
    return (
      <div className="text-center py-10 text-muted-foreground">
        Nenhum evento ativo no momento.
      </div>
    );
  }
  return (
    <ScrollArea className="h-[420px] pr-3">
      <div className="space-y-3">
        {events.map((e) => (
          <div
            key={e.id}
            className={`p-4 rounded-lg border ${severityColor[e.severity]} transition hover:shadow-md`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-foreground">{e.title}</h4>
                {e.description && (
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{e.description}</p>
                )}
                <div className="flex flex-wrap items-center gap-2 mt-2 text-xs text-muted-foreground">
                  <span>{new Date(e.time).toLocaleString("pt-BR")}</span>
                  {e.lat !== undefined && e.lon !== undefined && (
                    <span>• {e.lat.toFixed(2)}, {e.lon.toFixed(2)}</span>
                  )}
                  <Badge variant="outline" className="text-xs">{e.source}</Badge>
                </div>
              </div>
              {e.url && (
                <a
                  href={e.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 shrink-0"
                  aria-label="Ver detalhes"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

const NaturalEventsMonitor = () => {
  const [active, setActive] = useState<TabKey>("earthquakes");
  const [data, setData] = useState<Record<TabKey, EventItem[]>>({} as any);
  const [loading, setLoading] = useState<Record<TabKey, boolean>>({} as any);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);

  const load = useCallback(async (key: TabKey) => {
    const cfg = tabsConfig.find((t) => t.key === key)!;
    setLoading((p) => ({ ...p, [key]: true }));
    try {
      const events = await cfg.fetcher();
      setData((p) => ({ ...p, [key]: events }));
      setLastUpdate(new Date());
    } catch (err) {
      console.error(`Error loading ${key}:`, err);
      setData((p) => ({ ...p, [key]: [] }));
    } finally {
      setLoading((p) => ({ ...p, [key]: false }));
    }
  }, []);

  useEffect(() => {
    if (!data[active]) load(active);
  }, [active, data, load]);

  const refreshAll = () => {
    tabsConfig.forEach((t) => load(t.key));
  };

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-weather">
      <CardHeader>
        <div className="flex items-start justify-between flex-wrap gap-3">
          <div>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Monitor Geológico e Climático Global
              </span>
            </CardTitle>
            <CardDescription>
              Eventos em tempo real: terremotos (USGS), vulcões, tempestades, queimadas e mais (NASA EONET)
              {lastUpdate && ` • Atualizado ${lastUpdate.toLocaleTimeString("pt-BR")}`}
            </CardDescription>
          </div>
          <Button variant="outline" size="sm" onClick={refreshAll} className="gap-2">
            <RefreshCw className="h-4 w-4" /> Atualizar
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs value={active} onValueChange={(v) => setActive(v as TabKey)}>
          <TabsList className="grid grid-cols-3 md:grid-cols-6 h-auto gap-1">
            {tabsConfig.map((t) => (
              <TabsTrigger key={t.key} value={t.key} className="flex flex-col gap-1 py-2 text-xs">
                <t.icon className="h-4 w-4" />
                {t.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabsConfig.map((t) => (
            <TabsContent key={t.key} value={t.key} className="mt-4">
              <EventList events={data[t.key] || []} loading={!!loading[t.key]} />
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default NaturalEventsMonitor;
